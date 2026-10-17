const fs = require('fs');
const path = require('path');

// Clean and deduplicate the question dataset
const rawPath = path.join(__dirname, 'data', 'questions.json');
const qs = JSON.parse(fs.readFileSync(rawPath, 'utf8'));

function cleanQuestionText(text) {
  if (!text) return '';
  let cleaned = text.trim();
  
  // Loop to strip all nested template prefixes
  const prefixRegex = /^(Pop Culture Round|Party Game Question|Speed Test|Fun Guessing|Trivia check|Answer quickly|Guess the right answer|Identify|Who or what is this|Only true fans know this|Fun trivia|Quick Quiz|Speed Round|Expert Fan Quiz|Challenge Round|Super Fan Round|Ultimate Trivia|Memory Check|Test Your Knowledge|Bollywood Trivia|TMKOC Trivia|Cricket Trivia|General Knowledge|Rapid Fire|Championship Quiz|Brain Teaser)[^:]*:\s*/i;
  
  while (prefixRegex.test(cleaned)) {
    cleaned = cleaned.replace(prefixRegex, '').trim();
  }
  
  if (cleaned.length > 0) {
    cleaned = cleaned.charAt(0).toUpperCase() + cleaned.slice(1);
  }
  return cleaned;
}

function normalizeKey(str) {
  if (!str) return '';
  return str.toLowerCase().replace(/[^a-z0-9]/g, '');
}

const uniqueQuestions = [];
const seenCores = new Set();
let audioCount = 0;

// 1. Process audio questions first (all 116 verified clips)
for (const q of qs) {
  if (q.audioFile) {
    const cleanedText = cleanQuestionText(q.question);
    const coreKey = normalizeKey(cleanedText);
    if (!seenCores.has(coreKey)) {
      seenCores.add(coreKey);
      uniqueQuestions.push({
        ...q,
        question: cleanedText
      });
      audioCount++;
    }
  }
}

// 2. Process text trivia questions
let textCount = 0;
for (const q of qs) {
  if (!q.audioFile) {
    const cleanedText = cleanQuestionText(q.question);
    const coreKey = normalizeKey(cleanedText);
    if (!seenCores.has(coreKey)) {
      seenCores.add(coreKey);
      textCount++;
      uniqueQuestions.push({
        id: `q_${String(textCount).padStart(5, '0')}`,
        category: q.category,
        question: cleanedText,
        correctAnswer: q.correctAnswer,
        acceptableAnswers: q.acceptableAnswers
      });
    }
  }
}

console.log(`✅ Deduplicated and cleaned question bank:`);
console.log(`   - Verified Audio Questions: ${audioCount}`);
console.log(`   - Verified Text Trivia:     ${textCount}`);
console.log(`   - Total Pristine Unique:    ${uniqueQuestions.length}`);

// Write JSON
fs.writeFileSync(rawPath, JSON.stringify(uniqueQuestions, null, 2), 'utf8');

// Write JS export
const jsPath = path.join(__dirname, 'data', 'questions.js');
const jsContent = `// Fun Guessing - Clean, Deduplicated Question Bank (${uniqueQuestions.length} Unique Questions)
const questions = ${JSON.stringify(uniqueQuestions, null, 2)};

module.exports = questions;
`;
fs.writeFileSync(jsPath, jsContent, 'utf8');

console.log(`📁 Saved clean dataset to ${rawPath} and ${jsPath}`);
