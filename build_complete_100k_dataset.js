const fs = require('fs');
const path = require('path');

console.log('🚀 Regenerating full 100,000+ question dataset with 106 REAL Audio Clips...');

const audioDir = path.join(__dirname, 'public', 'audio');
const allAudioFiles = fs.readdirSync(audioDir).filter(f => f.endsWith('.mp3'));
console.log(`Found ${allAudioFiles.length} real audio files in public/audio/`);

// 1. Curate Audio Questions for all 106 files
const audioQuestions = [];
let qId = 1;

function addAudioQ(audioFile, category, question, correctAnswer, acceptableAnswers) {
  audioQuestions.push({
    id: `audio_q_${String(qId++).padStart(5, '0')}`,
    category,
    question,
    audioFile: `/audio/${audioFile}`,
    correctAnswer,
    acceptableAnswers
  });
}

// Map each audio file intelligently
allAudioFiles.forEach(file => {
  const f = file.toLowerCase();

  // TMKOC
  if (f.includes('tmkoc_jethalal_babita')) {
    addAudioQ(file, '👓 TMKOC Audio Voice', 'Listen to the audio! Which Gokuldham resident is greeting Babita Ji?', 'Jethalal Gada', ['jethalal', 'jetha', 'jethabhai', 'jethalal gada']);
  } else if (f.includes('tmkoc_jethalal_diwali') || f.includes('jethalal_happy_diwali')) {
    addAudioQ(file, '👓 TMKOC Audio Voice', 'Listen to this festival wish clip! Which TMKOC character is greeting Happy Diwali?', 'Jethalal Gada', ['jethalal', 'jetha', 'jethabhai', 'jethalal gada']);
  } else if (f.includes('tmkoc_jethalal')) {
    addAudioQ(file, '👓 TMKOC Audio Voice', 'Listen to the voice! Name the Gada Electronics owner who says "Chai piyo, biscuit khao"!', 'Jethalal Gada', ['jethalal', 'jetha', 'jethabhai', 'jethalal gada']);
  } else if (f.includes('tmkoc_bapuji') || f.includes('champak_lal') || f.includes('tmkoc_champaklal')) {
    addAudioQ(file, '👓 TMKOC Audio Voice', 'Listen to the audio! Which Gokuldham elder is shouting "Ae Jethiya"?', 'Champaklal Gada (Bapuji)', ['champaklal', 'bapuji', 'champak chacha', 'dadaji']);
  } else if (f.includes('tmkoc_iyer') || f.includes('iyer_tmkoc')) {
    addAudioQ(file, '👓 TMKOC Audio Voice', 'Listen to the voice! Which Gokuldham scientist says "Vanakkam"?', 'Krishnan Subramaniam Iyer', ['iyer', 'krishnan iyer', 'subramaniam iyer']);
  } else if (f.includes('tmkoc_garba_dhol') || f.includes('dayaben_hey_maa')) {
    addAudioQ(file, '🎵 TMKOC Audio Theme', 'Listen to this energetic Garba dhol beat! Which Gokuldham character dances to this?', 'Dayaben Gada', ['daya', 'dayaben', 'daya bhabhi', 'daya gada']);
  } else if (f.includes('bhide_ekmev')) {
    addAudioQ(file, '👓 TMKOC Audio Voice', 'Listen to this TMKOC tune! Which character calls himself Gokuldham\'s "Ekmev Secretary"?', 'Aatmaram Tukaram Bhide', ['bhide', 'aatmaram bhide', 'aatmaram tukaram bhide']);
  } else if (f.includes('popatlal_cancel')) {
    addAudioQ(file, '👓 TMKOC Audio Voice', 'Listen to the audio! Which Toofan Express reporter famously shouts "Cancel kardo"?', 'Patrakar Popatlal', ['popatlal', 'patrakar popatlal', 'popat']);
  } else if (f.includes('bagha_jaise')) {
    addAudioQ(file, '👓 TMKOC Audio Voice', 'Listen to this TMKOC clip! Which Gada Electronics employee says "Jaise jiski soch"?', 'Bagheshwar (Bagha)', ['bagha', 'bagheshwar']);
  } else if (f.includes('game_over_tmkoc') || f.includes('tmkoc_game_over')) {
    addAudioQ(file, '🎵 TMKOC Audio Theme', 'Listen to this dramatic trouble sound! Which Indian sitcom plays this stinger?', 'Taarak Mehta Ka Ooltah Chashmah', ['tmkoc', 'taarak mehta', 'tarak mehta']);
  } else if (f.includes('tmkoc_theme') || f.includes('tmkoc_gokuldham_intro')) {
    addAudioQ(file, '🎵 TMKOC Audio Theme', 'Listen to this iconic title tune! Which legendary Indian sitcom is this theme from?', 'Taarak Mehta Ka Ooltah Chashmah', ['tmkoc', 'taarak mehta', 'tarak mehta']);
  }

  // HERA PHERI
  else if (f.includes('paisa_double')) {
    addAudioQ(file, '🎬 Bollywood Comedy Audio', 'Listen to this scheme! Name the actor who promises 25 din mein paisa double!', 'Akshay Kumar (Phir Hera Pheri)', ['akshay kumar', 'akshay', 'raju', 'phir hera pheri', 'hera pheri']);
  } else if (f.includes('babu_bhaiya') || f.includes('baburao_style') || f.includes('baburao_comedy')) {
    addAudioQ(file, '🎬 Bollywood Comedy Audio', 'Listen to the audio! Name the iconic Star Garage owner from Hera Pheri!', 'Baburao Ganpatrao Apte', ['baburao', 'babu bhaiya', 'paresh rawal', 'hera pheri']);
  } else if (f.includes('hera_pheri_maja_aayega')) {
    addAudioQ(file, '🎬 Bollywood Comedy Audio', 'Listen to the dialogue! "Abhi maja aayega na bhidu" - Name the comedy movie!', 'Phir Hera Pheri', ['phir hera pheri', 'hera pheri', 'akshay kumar', 'raju']);
  } else if (f.includes('hera_pheri_theme') || f.includes('phirherapheri')) {
    addAudioQ(file, '🎬 Bollywood Comedy Audio', 'Listen to this iconic comedy theme! Name the movie starring Baburao, Raju, and Shyam!', 'Hera Pheri / Phir Hera Pheri', ['hera pheri', 'phir hera pheri', 'baburao']);
  } else if (f.includes('kya_gunda')) {
    addAudioQ(file, '🎬 Bollywood Comedy Audio', 'Listen to the line! "Kya gunda banega re tu" - Name the classic comedy film!', 'Hera Pheri', ['hera pheri', 'phir hera pheri', 'baburao']);
  }

  // WELCOME
  else if (f.includes('akshay_miracle')) {
    addAudioQ(file, '🎬 Bollywood Comedy Audio', 'Listen to the audio! Which Bollywood superstar shouts "Miracle Miracle" in Welcome?', 'Akshay Kumar (Welcome)', ['akshay kumar', 'akshay', 'welcome', 'rajiv']);
  } else if (f.includes('majnu_bhai') || f.includes('welcome_majnubhai')) {
    addAudioQ(file, '🎬 Bollywood Comedy Audio', 'Listen to this laugh! Which painter gangster from Welcome is laughing?', 'Majnu Bhai (Anil Kapoor)', ['majnu bhai', 'anil kapoor', 'majnu', 'welcome']);
  } else if (f.includes('nana_patekar') || f.includes('uday_shetty') || f.includes('welcome_uday')) {
    addAudioQ(file, '🎬 Bollywood Comedy Audio', 'Listen to this voice! "Control Uday Control" - Name the veteran Bollywood actor!', 'Nana Patekar (Welcome)', ['nana patekar', 'nana', 'uday shetty', 'welcome']);
  }

  // CHUP CHUP KE & RAJPAL YADAV
  else if (f.includes('rajpal') || f.includes('tadap')) {
    addAudioQ(file, '🎬 Bollywood Comedy Audio', 'Listen to this iconic line! "Raha nahi jaata, tadap hi aisi hai" - Name the actor!', 'Rajpal Yadav (Chup Chup Ke)', ['rajpal yadav', 'rajpal', 'bandya', 'chup chup ke']);
  }

  // GOLMAAL
  else if (f.includes('golmaal_lucky')) {
    addAudioQ(file, '🎬 Bollywood Comedy Audio', 'Listen to this sound! Name the mute character from the Golmaal franchise!', 'Lucky (Tusshar Kapoor)', ['lucky', 'tusshar kapoor', 'tusshar', 'golmaal']);
  }

  // 3 IDIOTS
  else if (f.includes('all_is_well') || f.includes('rancho')) {
    addAudioQ(file, '🎬 Bollywood Comedy Audio', 'Listen to this music! Name the 2009 blockbuster movie featuring Rancho and "All Izz Well"!', '3 Idiots', ['3 idiots', 'three idiots', 'aamir khan', 'rancho']);
  }

  // SHOLAY
  else if (f.includes('gabbar') || f.includes('sholay')) {
    addAudioQ(file, '🎬 Iconic Movie Audio', 'Listen to the dialogue! "Kitne aadmi the?" - Name the legendary villain from Sholay!', 'Gabbar Singh (Sholay)', ['gabbar', 'gabbar singh', 'sholay', 'amjad khan']);
  }

  // BLOCKBUSTERS
  else if (f.includes('pushpa')) {
    addAudioQ(file, '🎬 Iconic Movie Audio', 'Listen to the dialogue! "Jhukega nahi saala" - Name the movie or actor!', 'Pushpa (Allu Arjun)', ['pushpa', 'allu arjun', 'pushpa raj']);
  } else if (f.includes('kgf')) {
    addAudioQ(file, '🎬 Iconic Movie Audio', 'Listen to this mass theme! Name the KGF protagonist played by superstar Yash!', 'Rocky Bhai (KGF)', ['kgf', 'rocky bhai', 'yash']);
  } else if (f.includes('bahubali')) {
    addAudioQ(file, '🎬 Iconic Movie Audio', 'Listen to this royal music! Name the historic pan-India blockbuster directed by SS Rajamouli!', 'Baahubali (Prabhas)', ['bahubali', 'baahubali', 'prabhas']);
  } else if (f.includes('singham') || f.includes('satakli')) {
    addAudioQ(file, '🎬 Iconic Movie Audio', 'Listen to the dialogue! "Aata majhi satakli" - Name Ajay Devgn\'s cop character!', 'Bajirao Singham', ['singham', 'ajay devgn', 'bajirao singham']);
  }

  // CELEBRITIES & KBC
  else if (f.includes('amitabh') || f.includes('kbc') || f.includes('crore')) {
    addAudioQ(file, '🎙️ Indian Celebrity Voice', 'Listen to the baritone voice! Name the legendary KBC host and Shahenshah of Bollywood!', 'Amitabh Bachchan', ['amitabh bachchan', 'amitabh', 'big b', 'kbc']);
  } else if (f.includes('srk') || f.includes('shahrukh')) {
    addAudioQ(file, '🎙️ Indian Celebrity Voice', 'Listen to the voice and laugh! Name the Badshah of Bollywood (SRK)!', 'Shah Rukh Khan (SRK)', ['shah rukh khan', 'shahrukh khan', 'srk', 'king khan', 'don']);
  } else if (f.includes('sanjay_dutt')) {
    addAudioQ(file, '🎙️ Indian Celebrity Voice', 'Listen to the voice clip! Name the Bollywood star famously known as "Sanju Baba"!', 'Sanjay Dutt (Munna Bhai)', ['sanjay dutt', 'sanju baba', 'munna bhai']);
  } else if (f.includes('cid')) {
    addAudioQ(file, '🎬 Iconic Movie Audio', 'Listen to this audio! Which Indian investigative crime series features ACP Pradyuman and Daya?', 'CID (Sony TV)', ['cid', 'acp pradyuman', 'daya']);
  } else if (f.includes('kapil_sharma')) {
    addAudioQ(file, '🎬 Bollywood Comedy Audio', 'Listen to this intro theme song! Name the comedy talk show hosted by Kapil Sharma!', 'The Kapil Sharma Show', ['kapil sharma', 'the kapil sharma show', 'comedy nights']);
  } else if (f.includes('modi')) {
    addAudioQ(file, '🎙️ Indian Celebrity Voice', 'Listen to the speech! Name the Prime Minister of India speaking in this viral clip!', 'Narendra Modi', ['narendra modi', 'modi', 'pm modi']);
  } else if (f.includes('carryminati')) {
    addAudioQ(file, '🎬 Bollywood Comedy Audio', 'Listen to the audio! "Toh kaise hain aap log?" - Name this top Indian YouTuber!', 'CarryMinati (Ajey Nagar)', ['carryminati', 'carry', 'ajey nagar']);
  } else if (f.includes('hindustani')) {
    addAudioQ(file, '🎬 Bollywood Comedy Audio', 'Listen to the voice! Name the viral Indian meme personality from Mumbai!', 'Hindustani Bhau', ['hindustani bhau', 'bhau', 'vikas phatak']);
  } else if (f.includes('mirzapur')) {
    addAudioQ(file, '🎬 Iconic Movie Audio', 'Listen to this dialogue! Name the crime thriller series featuring Kaleen Bhaiya!', 'Mirzapur', ['mirzapur', 'kaleen bhaiya', 'guddu pandit']);
  } else if (f.includes('khatam_tata')) {
    addAudioQ(file, '🎬 Bollywood Comedy Audio', 'Listen to the line! "Khatam... Tata... Goodbye... Gaya!" - Name the Indian politician speaking!', 'Rahul Gandhi', ['rahul gandhi', 'rahul']);
  }

  // SONGS
  else if (f.includes('chaiyya_chaiyya')) {
    addAudioQ(file, '🎵 Bollywood Song & Lyrics', 'Listen to the music! Name this legendary train dance song composed by AR Rahman!', 'Chaiyya Chaiyya (Dil Se)', ['chaiyya chaiyya', 'dil se', 'shah rukh khan']);
  } else if (f.includes('tum_hi_ho')) {
    addAudioQ(file, '🎵 Bollywood Song & Lyrics', 'Listen to the melody! Name this 2013 romantic anthem sung by Arijit Singh!', 'Tum Hi Ho (Aashiqui 2)', ['tum hi ho', 'aashiqui 2', 'arijit singh']);
  } else if (f.includes('bhool_bhulaiyaa')) {
    addAudioQ(file, '🎵 Bollywood Song & Lyrics', 'Listen to this spooky comedy tune! Name the Akshay Kumar horror-comedy film!', 'Bhool Bhulaiyaa', ['bhool bhulaiyaa', 'akshay kumar']);
  }

  // CRICKET
  else if (f.includes('dhoni') || f.includes('bole_jo_koyal')) {
    addAudioQ(file, '🏏 Cricket Anthem Audio', 'Listen to the chant! Name the world cup winning Indian captain known as "Thala"!', 'MS Dhoni', ['dhoni', 'ms dhoni', 'mahendra singh dhoni', 'thala']);
  } else if (f.includes('ipl_horn')) {
    addAudioQ(file, '🏏 Cricket Stadium Audio', 'Listen to this stadium trumpet! Name the world\'s biggest T20 cricket league!', 'IPL (Indian Premier League)', ['ipl', 'indian premier league']);
  } else if (f.includes('bat_shot')) {
    addAudioQ(file, '🏏 Cricket Sound Audio', 'Listen to the crisp strike sound! What sport equipment is hitting the ball?', 'Cricket Bat', ['cricket bat', 'cricket', 'bat']);
  }

  // GENERAL BOLLYWOOD COMEDY FALLBACK
  else {
    addAudioQ(file, '🎬 Bollywood Comedy Audio', 'Listen to this viral Hindi dialogue! Guess the iconic Indian comedy film or character!', 'Bollywood Comedy Classic', ['bollywood', 'comedy', 'hindi comedy']);
  }
});

console.log(`✅ Generated ${audioQuestions.length} real audio questions for all 106 audio files!`);

// 2. Load the existing text trivia questions from data/questions.json (which has 102,000+ text trivia)
console.log('📖 Reading existing text trivia questions...');
const rawQuestions = JSON.parse(fs.readFileSync('data/questions.json', 'utf8'));
const cleanTextQuestions = rawQuestions.filter(q => {
  if (q.audioFile !== null) return false; // remove old audio questions
  // Remove any reference to Amrish Puri or Mogambo
  const text = (q.question + ' ' + q.correctAnswer).toLowerCase();
  if (text.includes('amrish') || text.includes('mogambo')) return false;
  return true;
});

console.log(`Loaded ${cleanTextQuestions.length} clean text trivia questions.`);

// 3. Combine Audio Questions + Clean Text Trivia
const combinedDataset = [...audioQuestions, ...cleanTextQuestions];
console.log(`🎉 Combined total dataset size: ${combinedDataset.length} questions!`);

// Verify ZERO Amrish Puri
const verifyBad = combinedDataset.filter(q => {
  const t = (q.question + ' ' + q.correctAnswer + ' ' + (q.audioFile || '')).toLowerCase();
  return t.includes('amrish') || t.includes('mogambo');
});

if (verifyBad.length > 0) {
  console.error('❌ Found Amrish Puri questions still present!', verifyBad.length);
  process.exit(1);
} else {
  console.log('✅ 100% verified: Zero Amrish Puri or Mogambo questions anywhere in the dataset!');
}

// 4. Save to data/questions.json
console.log('💾 Writing data/questions.json...');
fs.writeFileSync('data/questions.json', JSON.stringify(combinedDataset));

// 5. Save to data/questions.js
console.log('💾 Writing data/questions.js...');
fs.writeFileSync('data/questions.js', `module.exports = require('./questions.json');\n`);

console.log('✨ All done! Questions database updated successfully with 106 audio clips.');
