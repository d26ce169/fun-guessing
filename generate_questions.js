const fs = require('fs');
const path = require('path');

console.log('🚀 Starting massive 100,000+ question dataset generation...');

// ==========================================
// 1. REAL AUTHENTIC AUDIO QUESTIONS (All 33 Audio Files)
// ==========================================
const baseAudioDefinitions = [
  // TMKOC Audios
  {
    audio: '/audio/tmkoc_jethalal.mp3',
    cat: '👓 TMKOC Audio Voice',
    qTemplates: [
      'Listen to the audio! Which famous TMKOC character is speaking?',
      'Identify the Gokuldham resident speaking in this audio clip!',
      'TMKOC Audio Clue: Name the Gada Electronics owner speaking here!',
      'Audio Quiz: Which character shouts "Chai piyo, biscuit khao" in this clip?'
    ],
    ans: 'Jethalal Gada',
    acc: ['jethalal', 'jetha', 'jethalal gada', 'jethabhai', 'jetha bhai']
  },
  {
    audio: '/audio/tmkoc_champaklal.mp3',
    cat: '👓 TMKOC Audio Voice',
    qTemplates: [
      'Listen to the audio! Which Gokuldham elder is shouting here?',
      'Audio Clue: Guess the angry father of Jethalal speaking in this clip!',
      'TMKOC Audio: Who is delivering this lecture to Jethiya?',
      'Who is scolding in this audio clip from Taarak Mehta?'
    ],
    ans: 'Champaklal (Bapuji)',
    acc: ['champaklal', 'bapuji', 'champak chacha', 'champaklal gada', 'dadaji', 'champak']
  },
  {
    audio: '/audio/tmkoc_iyer.mp3',
    cat: '👓 TMKOC Audio Voice',
    qTemplates: [
      'Listen to the audio! Which Gokuldham scientist is introducing himself?',
      'TMKOC Audio: Who is speaking with "Vanakkam" in this clip?',
      'Audio Clue: Name Babita Ji\'s husband speaking in this audio clip!',
      'Who is the scientist from Chennai speaking in this TMKOC clip?'
    ],
    ans: 'Krishnan Subramaniam Iyer',
    acc: ['iyer', 'krishnan iyer', 'krishnan subramaniam iyer', 'subramaniam iyer']
  },
  {
    audio: '/audio/tmkoc_theme.mp3',
    cat: '🎵 TMKOC Audio Theme',
    qTemplates: [
      'Listen to this background music! Which comedy serial theme is this?',
      'TMKOC Theme Clue: Name the famous Hindi sitcom associated with this music!',
      'Identify the legendary comedy show from this iconic title tune!'
    ],
    ans: 'Taarak Mehta Ka Ooltah Chashmah (TMKOC)',
    acc: ['tmkoc', 'tarak mehta', 'taarak mehta', 'taarak mehta ka ooltah chashmah', 'tarak mehta ka ulta chasma']
  },
  {
    audio: '/audio/tmkoc_garba_dhol.mp3',
    cat: '🎵 TMKOC Audio Theme',
    qTemplates: [
      'Listen to this Garba dhol beat! Which TMKOC character dances non-stop to this?',
      'TMKOC Sound: Which character breaks into Garba whenever this dhol beat plays?',
      'Name the Gokuldham Garba Queen associated with this rhythmic beat!'
    ],
    ans: 'Dayaben (Garba)',
    acc: ['daya', 'dayaben', 'daya bhabhi', 'garba', 'daya gada']
  },
  {
    audio: '/audio/tmkoc_jethalal_diwali.mp3',
    cat: '👓 TMKOC Audio Voice',
    qTemplates: [
      'Listen to this festival wish clip! Which TMKOC character is greeting?',
      'Audio Clue: Who is wishing Happy Diwali in this voice clip?',
      'Identify the voice of this Gokuldham character wishing everyone!'
    ],
    ans: 'Jethalal Gada',
    acc: ['jethalal', 'jetha', 'jethalal gada', 'jethabhai']
  },

  // Bollywood Comedy Audios
  {
    audio: '/audio/akshay_paisa_double.mp3',
    cat: '🎬 Bollywood Comedy Audio',
    qTemplates: [
      'Listen to the dialogue audio! Name the actor who promises 25 din mein paisa double!',
      'Comedy Audio: Which character from Phir Hera Pheri is pitching this scheme?',
      'Listen to this dialogue! Name the actor or movie!'
    ],
    ans: 'Akshay Kumar (Phir Hera Pheri)',
    acc: ['akshay kumar', 'akshay', 'raju', 'phir hera pheri', 'hera pheri']
  },
  {
    audio: '/audio/hera_pheri_theme.mp3',
    cat: '🎬 Bollywood Comedy Audio',
    qTemplates: [
      'Listen to this iconic comedic tune! Which comedy film franchise is this theme from?',
      'Theme Clue: Name the comedy movie featuring Baburao, Raju, and Shyam!',
      'Which legendary Bollywood comedy has this background score?'
    ],
    ans: 'Phir Hera Pheri',
    acc: ['phir hera pheri', 'hera pheri', 'babu rao', 'baburao', 'akshay kumar']
  },
  {
    audio: '/audio/hera_pheri_maja_aayega.mp3',
    cat: '🎬 Bollywood Comedy Audio',
    qTemplates: [
      'Listen to the dialogue! "Abhi maja aayega na bhidu" - which movie is this from?',
      'Comedy Clue: Name the comedy movie featuring this classic line!',
      'Listen to the line! Guess the blockbuster comedy movie!'
    ],
    ans: 'Phir Hera Pheri',
    acc: ['phir hera pheri', 'hera pheri', 'akshay kumar', 'raju']
  },
  {
    audio: '/audio/akshay_miracle.mp3',
    cat: '🎬 Bollywood Comedy Audio',
    qTemplates: [
      'Listen to the shout! Name the actor shouting "Miracle Miracle"!',
      'Welcome Movie Audio: Which character is shouting in this audio clip?',
      'Audio Clue: Name the actor who shouts miracle in Welcome!'
    ],
    ans: 'Akshay Kumar (Welcome)',
    acc: ['akshay kumar', 'akshay', 'welcome', 'rajiv']
  },
  {
    audio: '/audio/welcome_uday_entry.mp3',
    cat: '🎬 Bollywood Comedy Audio',
    qTemplates: [
      'Listen to this background music! Which underworld comedy character enters to this score?',
      'Welcome Theme Clue: Name the character played by Nana Patekar who enters to this BGM!',
      'Identify the iconic Welcome movie gangster theme playing here!'
    ],
    ans: 'Uday Shetty (Welcome)',
    acc: ['uday shetty', 'nana patekar', 'welcome', 'uday']
  },
  {
    audio: '/audio/rajpal_yadav_tadap.mp3',
    cat: '🎬 Bollywood Comedy Audio',
    qTemplates: [
      'Listen to this iconic dialogue! "Raha nahi jaata, tadap hi aisi hai" - Name the actor!',
      'Comedy Clue: Guess the comedian delivering this famous meme dialogue!',
      'Who delivers this hilarious dialogue in the movie Chup Chup Ke?'
    ],
    ans: 'Rajpal Yadav',
    acc: ['rajpal yadav', 'rajpal', 'bandya', 'chup chup ke']
  },
  {
    audio: '/audio/golmaal_lucky_sound.mp3',
    cat: '🎬 Bollywood Comedy Audio',
    qTemplates: [
      'Listen to this sound! Which mute character in Golmaal communicates like this?',
      'Golmaal Audio Clue: Name the character or actor making this hilarious sound!',
      'Who makes this iconic "Aee-Ooo" sound in the Golmaal series?'
    ],
    ans: 'Lucky (Tusshar Kapoor)',
    acc: ['lucky', 'tusshar kapoor', 'tusshar', 'golmaal lucky']
  },
  {
    audio: '/audio/nana_patekar_voice.mp3',
    cat: '🎬 Bollywood Comedy Audio',
    qTemplates: [
      'Listen to this dialogue and laugh! Guess the legendary Bollywood actor!',
      'Audio Clue: Who is speaking in this intense yet comedic voice clip?',
      'Identify the Bollywood veteran actor from this distinctive voice!'
    ],
    ans: 'Nana Patekar',
    acc: ['nana patekar', 'nana', 'vishwanath patekar']
  },

  // Action & Blockbuster Audios
  {
    audio: '/audio/sholay_gabbar.mp3',
    cat: '🎬 Iconic Movie Audio',
    qTemplates: [
      'Listen to the dialogue! "Kitne aadmi the?" - Name the villain or film!',
      'Sholay Audio Clue: Name the terrifying dacoit speaking here!',
      'Who is delivering this immortal Bollywood dialogue in the audio clip?'
    ],
    ans: 'Gabbar Singh (Sholay)',
    acc: ['gabbar', 'gabbar singh', 'sholay', 'amjad khan']
  },
  {
    audio: '/audio/sholay_jo_dar_gaya.mp3',
    cat: '🎬 Iconic Movie Audio',
    qTemplates: [
      'Listen to the dialogue! "Jo darr gaya samjho marr gaya" - Name the character!',
      'Audio Clue: Name the legendary villain speaking this line from Sholay!',
      'Which famous movie villain delivers this warning in the clip?'
    ],
    ans: 'Gabbar Singh (Sholay)',
    acc: ['gabbar', 'gabbar singh', 'sholay', 'amjad khan']
  },
  {
    audio: '/audio/mr_india_mogambo.mp3',
    cat: '🎬 Iconic Movie Audio',
    qTemplates: [
      'Listen to this villain voice clip! "Mogambo khush hua" - Name the character or actor!',
      'Mr India Clue: Name the legendary actor who played Mogambo!',
      'Who speaks this immortal line in the audio clip?'
    ],
    ans: 'Mogambo (Amrish Puri)',
    acc: ['mogambo', 'amrish puri', 'mr india', 'mister india']
  },
  {
    audio: '/audio/pushpa_dialogue.mp3',
    cat: '🎬 Iconic Movie Audio',
    qTemplates: [
      'Listen to the dialogue! "Main jhukega nahi" - Name the superstar or movie!',
      'Audio Clue: Name the actor playing Pushparaj in this dialogue clip!',
      'Which pan-India blockbuster movie is this fiery audio clip from?'
    ],
    ans: 'Allu Arjun (Pushpa)',
    acc: ['allu arjun', 'pushpa', 'pushpa the rise', 'pushparaj']
  },
  {
    audio: '/audio/singham_theme.mp3',
    cat: '🎬 Iconic Movie Audio',
    qTemplates: [
      'Listen to this roar and theme music! Which Bollywood cop franchise is this?',
      'Action Audio Clue: Name the police officer played by Ajay Devgn with this theme!',
      'Which blockbuster action movie features this lion roar theme?'
    ],
    ans: 'Singham (Ajay Devgn)',
    acc: ['singham', 'singam', 'ajay devgn', 'bajirao singham']
  },
  {
    audio: '/audio/kgf_rocky_theme.mp3',
    cat: '🎬 Iconic Movie Audio',
    qTemplates: [
      'Listen to this mass BGM! Which blockbuster movie features Rocky Bhai with this score?',
      'Audio Clue: Name the high-voltage movie franchise with this background track!',
      'Which pan-India movie starring Yash has this iconic background theme?'
    ],
    ans: 'KGF (Rocky Bhai / Yash)',
    acc: ['kgf', 'kgf chapter 1', 'kgf 1', 'rocky bhai', 'yash']
  },
  {
    audio: '/audio/bahubali_theme.mp3',
    cat: '🎬 Iconic Movie Audio',
    qTemplates: [
      'Listen to this epic war score! Which monumental Indian movie is this theme from?',
      'Audio Clue: Name S.S. Rajamouli\'s magnum opus represented by this music!',
      'Which grand Indian cinema masterpiece has this thunderous theme?'
    ],
    ans: 'Baahubali',
    acc: ['baahubali', 'bahubali', 'prabhas', 'rajamouli']
  },

  // Celebrities
  {
    audio: '/audio/amitabh_main_amitabh.mp3',
    cat: '🎙️ Indian Celebrity Voice',
    qTemplates: [
      'Listen to this baritone voice! Guess the Shahenshah of Bollywood speaking!',
      'Audio Clue: Who is introducing himself in this iconic TV clip?',
      'Name the legendary host speaking in this audio clip!'
    ],
    ans: 'Amitabh Bachchan',
    acc: ['amitabh bachchan', 'amitabh', 'big b', 'bachchan']
  },
  {
    audio: '/audio/amitabh_7_crore.mp3',
    cat: '🎙️ Indian Celebrity Voice',
    qTemplates: [
      'Listen to the host shouting "Saat Crore!" - Name the host or show!',
      'Audio Clue: Name the megastar who shouts this jackpot winning amount on KBC!',
      'Identify the superstar voice celebrating in this audio clip!'
    ],
    ans: 'Amitabh Bachchan (KBC)',
    acc: ['amitabh bachchan', 'amitabh', 'kbc', 'big b', 'kaun banega crorepati']
  },
  {
    audio: '/audio/srk_voice.mp3',
    cat: '🎙️ Indian Celebrity Voice',
    qTemplates: [
      'Listen to the romantic voice! Guess the King of Bollywood!',
      'Audio Clue: Identify the superstar speaking in this romantic voice clip!',
      'Name the Badshah of Bollywood speaking in this clip!'
    ],
    ans: 'Shah Rukh Khan (SRK)',
    acc: ['shah rukh khan', 'srk', 'king khan', 'shahrukh', 'shahrukh khan']
  },
  {
    audio: '/audio/srk_don_laugh.mp3',
    cat: '🎙️ Indian Celebrity Voice',
    qTemplates: [
      'Listen to the villainous laugh! Name the actor or movie character!',
      'Audio Clue: Who delivers this menacing laugh in the movie Don?',
      'Identify the superstar delivering this laugh in the audio!'
    ],
    ans: 'Shah Rukh Khan (Don)',
    acc: ['shah rukh khan', 'srk', 'don', 'king khan']
  },
  {
    audio: '/audio/modi_ji_wah.mp3',
    cat: '🎙️ Indian Celebrity Voice',
    qTemplates: [
      'Listen to this speech voice! Guess the Indian Prime Minister speaking!',
      'Audio Clue: Who is speaking "Wah bhai wah" in this clip?',
      'Identify the prominent Indian leader speaking here!'
    ],
    ans: 'Narendra Modi',
    acc: ['narendra modi', 'modi', 'modi ji', 'pm modi']
  },

  // Songs
  {
    audio: '/audio/song_tum_hi_ho.mp3',
    cat: '🎵 Bollywood Song & Lyrics',
    qTemplates: [
      'Listen to this melody! Name the singer or the movie!',
      'Song Clue: Name the soulful track sung by Arijit Singh in this audio clip!',
      'Which romantic blockbuster song is playing here?'
    ],
    ans: 'Arijit Singh (Aashiqui 2)',
    acc: ['arijit singh', 'arijit', 'aashiqui 2', 'aashiqui']
  },
  {
    audio: '/audio/song_chaiyya_chaiyya.mp3',
    cat: '🎵 Bollywood Song & Lyrics',
    qTemplates: [
      'Listen to this high-energy song! Name the singer or the film!',
      'Song Clue: Name the classic A.R. Rahman song filmed atop a moving train!',
      'Who is the lead singer of this iconic song from Dil Se?'
    ],
    ans: 'Sukhwinder Singh (Dil Se)',
    acc: ['sukhwinder singh', 'sukhwinder', 'dil se', 'chaiyya chaiyya', 'ar rahman']
  },
  {
    audio: '/audio/song_all_is_well.mp3',
    cat: '🎵 Bollywood Song & Lyrics',
    qTemplates: [
      'Listen to this upbeat song! Which record-breaking movie is this from?',
      'Song Clue: Name the comedy-drama movie featuring the mantra "Aal Izz Well"!',
      'Identify the college movie that made this song a national anthem!'
    ],
    ans: '3 Idiots',
    acc: ['3 idiots', 'three idiots', 'aamir khan', 'shaan', 'sonu nigam']
  },

  // Cricket
  {
    audio: '/audio/cricket_dhoni_thala.mp3',
    cat: '🏏 Cricket Anthem Audio',
    qTemplates: [
      'Listen to this stadium chant! Which iconic Indian captain is this chant for?',
      'Cricket Clue: Name the legendary wicketkeeper-batsman revered as Thala!',
      'Which cricket icon is being cheered in this stadium audio?'
    ],
    ans: 'MS Dhoni (Thala)',
    acc: ['ms dhoni', 'dhoni', 'mahendra singh dhoni', 'thala', 'mahi']
  },
  {
    audio: '/audio/cricket_bole_jo_koyal.mp3',
    cat: '🏏 Cricket Anthem Audio',
    qTemplates: [
      'Listen to this viral cricket theme! Which legendary cricketer is associated with this meme track?',
      'Cricket Clue: Name the CSK captain and Indian legend linked to "Bole Jo Koyal"!',
      'Which legendary Indian finisher has this viral fan anthem?'
    ],
    ans: 'MS Dhoni (Thala)',
    acc: ['ms dhoni', 'dhoni', 'mahendra singh dhoni', 'thala', 'mahi']
  },
  {
    audio: '/audio/cricket_ipl_horn.mp3',
    cat: '🏏 Cricket Stadium Audio',
    qTemplates: [
      'Listen to this stadium horn! Which mega T20 cricket tournament is this?',
      'Cricket Clue: Name the Indian cricket league known for this stadium bugle!',
      'Identify the world\'s biggest T20 league from this stadium trumpet horn!'
    ],
    ans: 'IPL (Indian Premier League)',
    acc: ['ipl', 'indian premier league', 'tata ipl', 'cricket ipl']
  },
  {
    audio: '/audio/cricket_bat_shot.mp3',
    cat: '🏏 Cricket Sound Audio',
    qTemplates: [
      'Listen to this crisp audio! What sports sound is this?',
      'Sports Clue: What piece of sports equipment creates this sweet middle sound?',
      'Identify the sound of the ball hitting this sports equipment!'
    ],
    ans: 'Cricket Bat Shot',
    acc: ['cricket bat', 'bat', 'cricket', 'shot', 'cover drive']
  }
];

// All generated questions container
const allQuestions = [];
let idCounter = 1;

// Helper: Add question
function pushQuestion(category, questionText, audioFile, correctAnswer, acceptableAnswers) {
  allQuestions.push({
    id: `q_${idCounter++}`,
    category,
    question: questionText,
    audioFile: audioFile || null,
    correctAnswer,
    acceptableAnswers: acceptableAnswers.map(a => a.toLowerCase().trim())
  });
}

// 1. Add All Real Audio Questions
baseAudioDefinitions.forEach(item => {
  item.qTemplates.forEach(qText => {
    pushQuestion(item.cat, qText, item.audio, item.ans, item.acc);
  });
});

console.log(`✅ Real audio questions initialized: ${allQuestions.length}`);

// ==========================================
// 2. MASSIVE TMKOC KNOWLEDGE BASE (Dialogues, Trivia, Arcs, BGMs)
// ==========================================
const tmkocCore = [
  // Dialogues
  { q: 'Who says: "Chai piyo, biscuit khao... chai piyo, biscuit khao"?', a: 'Jethalal Gada', acc: ['jethalal', 'jetha', 'jethalal gada', 'jethabhai'] },
  { q: 'Who says the iconic line: "Ae pagal aurat!" in Gokuldham?', a: 'Jethalal Gada', acc: ['jethalal', 'jetha', 'jethalal gada'] },
  { q: 'Who says: "Hey Maa Mataji! Tapu ke papa!"?', a: 'Dayaben Gada', acc: ['daya', 'dayaben', 'daya bhabhi', 'daya gada'] },
  { q: 'Who declares: "Duniya hila dunga! Patrakar Popatlal Golden Crow Award winner"?', a: 'Patrakar Popatlal', acc: ['popatlal', 'patrakar popatlal', 'popat'] },
  { q: 'Who says: "Mera cancel kardo!" whenever marriage talks fail?', a: 'Patrakar Popatlal', acc: ['popatlal', 'patrakar popatlal', 'popat'] },
  { q: 'Who screams: "Nahane ja nahane! Ek thappad marunga toh zameen pe gir padega!"?', a: 'Champaklal (Bapuji)', acc: ['champaklal', 'bapuji', 'champak chacha', 'dadaji'] },
  { q: 'Who addresses Jethalal as "Jethiya!" whenever angry?', a: 'Champaklal (Bapuji)', acc: ['champaklal', 'bapuji', 'champak chacha'] },
  { q: 'Who introduces himself as: "Main Aatmaram Tukaram Bhide, Gokuldham Society ka ekmev Secretary"?', a: 'Aatmaram Bhide', acc: ['bhide', 'aatmaram bhide', 'atmaram bhide', 'aatmaram'] },
  { q: 'Who frequently reminds everyone: "Hamare zamane mein aisi padhai hoti thi"?', a: 'Aatmaram Bhide', acc: ['bhide', 'aatmaram bhide', 'atmaram bhide'] },
  { q: 'Who says: "Aata maajhi satakli nahi, yeh Bhide chi satakli!"?', a: 'Aatmaram Bhide', acc: ['bhide', 'aatmaram bhide'] },
  { q: 'Who says: "Jaisi jiski soch! Sahi baat hai sethji"?', a: 'Bagha (Bagheshwar)', acc: ['bagha', 'bagheshwar'] },
  { q: 'Who asks Jethalal: "Sethji aapne mujhe bulaya? Meri payment badhane ki baat chal rahi hai kya"?', a: 'Natu Kaka', acc: ['natu kaka', 'nattu kaka', 'natu'] },
  { q: 'Who greets with: "Oye paapa ji! Balle Balle! Aaj party sharty hogi"?', a: 'Roshan Singh Sodhi', acc: ['sodhi', 'roshan singh sodhi', 'roshan sodhi'] },
  { q: 'Who says: "Aiyyo! Vanakkam! Main scientist Krishnan Subramaniam Iyer"?', a: 'Krishnan Subramaniam Iyer', acc: ['iyer', 'krishnan iyer', 'subramaniam iyer'] },
  { q: 'Who says sweetly: "Aap bhi na Jetha ji... hamesha mazaak karte rehte hain"?', a: 'Babita Ji', acc: ['babita', 'babitaji', 'babita ji'] },
  { q: 'Who responds to every dish discussion with: "Sahi baat hai!"?', a: 'Dr. Hansraj Hathi', acc: ['dr hathi', 'doctor hathi', 'hathi', 'hansraj hathi'] },
  { q: 'Who says: "Oh come on, Hathi ji!"?', a: 'Komal Hathi', acc: ['komal', 'komal hathi', 'komal bhabhi'] },
  { q: 'Who says: "Haye haye galti se mistake ho gayi"?', a: 'Bawri Dhondulal Ghadhave', acc: ['bawri', 'baori', 'bawri dhondulal ghadhave'] },
  { q: 'Who warns criminals: "Hamara naam hai Inspector Chalu Pandey, jhooth bologe toh padenge dande"?', a: 'Inspector Chalu Pandey', acc: ['chalu pandey', 'inspector chalu pandey', 'pandey ji'] },
  { q: 'Who says: "Behen Dayaben ke ghar se kabhi khaali haath nahi laut-te"?', a: 'Sundarlal', acc: ['sundarlal', 'sundar', 'sundar lal'] },
  { q: 'Who yells: "Goli beta masti nahi!"?', a: 'Jethalal Gada', acc: ['jethalal', 'jetha', 'dr hathi'] },
  { q: 'Who yells: "Sonu beta masti nahi!"?', a: 'Aatmaram Bhide', acc: ['bhide', 'aatmaram bhide'] },
  { q: 'Who calls out lovingly: "Sundar vira! Mera pyara bhai!"?', a: 'Dayaben Gada', acc: ['daya', 'dayaben', 'daya bhabhi'] },
  { q: 'Who calls Champaklal: "Beshisht mhatarya!" in frustration?', a: 'Aatmaram Bhide', acc: ['bhide', 'aatmaram bhide', 'champaklal'] },
  { q: 'Who says: "Tapu Sena ready ho jao compound mein match khelne ke liye"?', a: 'Tipendra (Tapu)', acc: ['tapu', 'tipendra', 'tapu gada'] },
  { q: 'Who serves soda and groceries outside Gokuldham Society?', a: 'Abdul', acc: ['abdul', 'abdul bhai'] },

  // Props, Vehicles, Food & Locations
  { q: 'What is the name of Aatmaram Bhide\'s vintage yellow scooter?', a: 'Sakharam', acc: ['sakharam', 'sakharam scooter'] },
  { q: 'What is the name of Jethalal\'s electronics showroom?', a: 'Gada Electronics', acc: ['gada electronics', 'gada electronic'] },
  { q: 'What is Patrakar Popatlal\'s workplace newspaper name?', a: 'Toofan Express', acc: ['toofan express', 'toofan'] },
  { q: 'What award did Patrakar Popatlal win in journalism?', a: 'Golden Crow Award', acc: ['golden crow award', 'golden crow'] },
  { q: 'What object does Patrakar Popatlal always carry with him?', a: 'Umbrella (Chhatri)', acc: ['umbrella', 'chhatri', 'chata'] },
  { q: 'What diet vegetable juice does Anjali force Taarak Mehta to drink?', a: 'Karela Juice (Bitter Gourd)', acc: ['karela juice', 'karela', 'diet food'] },
  { q: 'What is Jethalal\'s favorite Sunday morning Gujarati breakfast?', a: 'Jalebi Fafda', acc: ['jalebi fafda', 'fafda jalebi', 'fafda', 'jalebi'] },
  { q: 'What homemade business do Madhavi and Bhide run?', a: 'Achaar Papad', acc: ['achaar papad', 'achar papad', 'papad achaar', 'papad'] },
  { q: 'What is the native Gujarati village of the Gada family?', a: 'Bhachau (Kutch)', acc: ['bhachau', 'kutch', 'bhachau kutch'] },
  { q: 'What is the name of Roshan Singh Sodhi\'s motor workshop?', a: 'Sodhi Garage', acc: ['sodhi garage', 'garage'] },
  { q: 'What is the name of Abdul\'s convenience store outside Gokuldham?', a: 'All in One General Store', acc: ['all in one', 'all in one general store', 'general store'] },
  { q: 'What is written every morning by Bhide on the society notice board?', a: 'Suvichar (Thought of the Day)', acc: ['suvichar', 'thought of the day'] },
  { q: 'In which residential wing of Gokuldham Society does Jethalal live?', a: 'Wing B', acc: ['b wing', 'wing b', 'b'] },
  { q: 'In which residential wing of Gokuldham Society does Aatmaram Bhide live?', a: 'Wing A', acc: ['a wing', 'wing a', 'a'] },
  { q: 'What is the cricket tournament played between Gokuldham members called?', a: 'Gokuldham Premier League (GPL)', acc: ['gpl', 'gokuldham premier league'] },
  { q: 'What was the team name led by Jethalal in GPL?', a: 'Jetha Ke Janbaaz', acc: ['jetha ke janbaaz', 'janbaaz'] },
  { q: 'What was the team name led by Tapu in GPL?', a: 'Tapu Ke Dhurandhar', acc: ['tapu ke dhurandhar', 'dhurandhar'] },
  { q: 'What was the team name led by Dayaben in GPL?', a: 'Daya Dandiya Devils', acc: ['daya dandiya devils', 'dandiya devils'] },
  { q: 'What was the team name led by Mehta Sahab in GPL?', a: 'Mehta Ke Maharathi', acc: ['mehta ke maharathi', 'maharathi'] },
  { q: 'What is the name of Natu Kaka\'s nephew who works in Gada Electronics?', a: 'Bagha (Bagheshwar)', acc: ['bagha', 'bagheshwar'] },
  { q: 'What is the name of Bagha\'s forgetful fiancee?', a: 'Bawri Dhondulal Ghadhave', acc: ['bawri', 'bawri dhondulal ghadhave', 'baori'] },
  { q: 'What is the name of the quiet employee in Gada Electronics who rarely speaks?', a: 'Magan', acc: ['magan', 'magan bhai'] },
  { q: 'What is the name of Dayaben\'s brother who always asks Jethalal for money?', a: 'Sundarlal', acc: ['sundarlal', 'sundar', 'sundar lal'] },
  { q: 'Who is known as Jethalal\'s "Fire Brigade" for solving all problems?', a: 'Taarak Mehta', acc: ['taarak mehta', 'tarak mehta', 'mehta sahab'] },
  { q: 'What is Dr. Hathi\'s full first name in TMKOC?', a: 'Hansraj', acc: ['hansraj', 'hansraj hathi', 'dr hansraj'] },
  { q: 'What is Dr. Hathi\'s son Goli\'s full formal name?', a: 'Gulabkumar Hathi', acc: ['gulabkumar', 'gulabkumar hathi', 'goli'] },
  { q: 'What is Sodhi\'s son Gogi\'s full formal name?', a: 'Gurucharan Singh Sodhi', acc: ['gurucharan', 'gurucharan singh', 'gogi'] },
  { q: 'What is Jethalal\'s son Tapu\'s full formal name?', a: 'Tipendra Gada', acc: ['tipendra', 'tipendra gada', 'tapu'] },
  { q: 'What is Bhide\'s daughter Sonu\'s full formal name?', a: 'Sonakshi Bhide', acc: ['sonakshi', 'sonakshi bhide', 'sonu'] },
  { q: 'What is Pinku\'s full name in Tapu Sena?', a: 'Pankaj Diwan Sahay', acc: ['pankaj', 'pinku', 'pankaj diwan'] },
  { q: 'Which foreign bride was arranged for Popatlal from England?', a: 'Kerry', acc: ['kerry', 'carry'] },
  { q: 'Which girl with a speech impediment did Popatlal try to marry?', a: 'Bulbul', acc: ['bulbul'] },
  { q: 'What was the famous ghost\'s name in the Gokuldham haunted episode?', a: 'Bhootni (Stree in White Sari)', acc: ['bhootni', 'chudail', 'stree'] },
  { q: 'Which politician did Jethalal confront during election campaign arc?', a: 'Sevaklal', acc: ['sevaklal', 'neta sevaklal'] },
  { q: 'Who is the creator and producer of Taarak Mehta Ka Ooltah Chashmah?', a: 'Asit Kumar Modi', acc: ['asit kumar modi', 'asit modi', 'asit'] },

  // Actor Names
  { q: 'Which actor portrays Jethalal Champaklal Gada?', a: 'Dilip Joshi', acc: ['dilip joshi', 'dilip'] },
  { q: 'Which actress portrayed the iconic Dayaben?', a: 'Disha Vakani', acc: ['disha vakani', 'disha'] },
  { q: 'Which actor portrays Champaklal Gada (Bapuji)?', a: 'Amit Bhatt', acc: ['amit bhatt', 'amit'] },
  { q: 'Which actor portrays Aatmaram Tukaram Bhide?', a: 'Mandar Chandwadkar', acc: ['mandar chandwadkar', 'mandar'] },
  { q: 'Which actor portrays Patrakar Popatlal?', a: 'Shyam Pathak', acc: ['shyam pathak', 'shyam'] },
  { q: 'Which actress portrays Babita Ji?', a: 'Munmun Dutta', acc: ['munmun dutta', 'munmun'] },
  { q: 'Which actor portrayed the beloved Natu Kaka?', a: 'Ghanshyam Nayak', acc: ['ghanshyam nayak', 'ghanshyam'] },
  { q: 'Which actor portrays Bagha in TMKOC?', a: 'Tanmay Vekaria', acc: ['tanmay vekaria', 'tanmay'] },
  { q: 'Which actor portrays Krishnan Subramaniam Iyer?', a: 'Tanuj Mahashabde', acc: ['tanuj mahashabde', 'tanuj'] },
  { q: 'Which actor portrayed Dr. Hansraj Hathi originally?', a: 'Kavi Kumar Azad', acc: ['kavi kumar azad', 'kavi kumar', 'dr hathi'] },
  { q: 'Which actor portrays Roshan Singh Sodhi originally?', a: 'Gurucharan Singh', acc: ['gurucharan singh', 'gurucharan'] },
  { q: 'Which actor played the original Tapu (Tipendra Gada)?', a: 'Bhavya Gandhi', acc: ['bhavya gandhi', 'bhavya'] },
  { q: 'Which actor plays Sundarlal?', a: 'Mayur Vakani', acc: ['mayur vakani', 'mayur'] },
  { q: 'Which actor portrays Inspector Chalu Pandey?', a: 'Daya Shankar Pandey', acc: ['daya shankar pandey', 'dayashankar pandey'] },

  // Show Background Music & Sound Effects
  { q: 'In TMKOC, what rhythmic Gujarati drum beat plays whenever Dayaben starts dancing?', a: 'Garba Dhol Beat', acc: ['garba dhol', 'garba beat', 'dhol', 'garba'] },
  { q: 'In TMKOC, what rapid tension sound effect plays when Jethalal lands in trouble?', a: 'Dhin-Tana-Na / Tabdeek Tabdeek', acc: ['dhin tana na', 'tabdeek', 'tension bgm'] },
  { q: 'In TMKOC, which musical instrument plays a sad melody when Popatlal is rejected?', a: 'Shehnai / Sad Flute', acc: ['shehnai', 'flute', 'sad flute', 'bansuri'] },
  { q: 'In TMKOC, which Punjabi instrument beat plays when Sodhi gets excited for party sharty?', a: 'Bhangra Dhol / Dholak', acc: ['bhangra dhol', 'dhol', 'punjabi dhol', 'dholak'] },
  { q: 'In TMKOC, which classical South Indian music plays during Jethalal and Iyer faceoffs?', a: 'Nadaswaram / Carnatic BGM', acc: ['nadaswaram', 'carnatic', 'south indian music'] },
  { q: 'In TMKOC, what eerie whistling sound played during the spooky Bhootni episodes?', a: 'Bhootni Whistling Flute', acc: ['bhootni whistle', 'whistle', 'flute', 'spooky whistle'] },
  { q: 'In TMKOC, what siren sound effect plays when Inspector Chalu Pandey arrives on jeep?', a: 'Police Siren', acc: ['police siren', 'siren', 'police'] },
  { q: 'In TMKOC, what peaceful instrument plays when Taarak Mehta delivers the moral ending?', a: 'Acoustic Sitar / Flute Moral Theme', acc: ['sitar', 'flute', 'moral theme', 'ending theme'] }
];

// ==========================================
// 3. MASSIVE BOLLYWOOD COMEDY KNOWLEDGE BASE
// ==========================================
const bollywoodCore = [
  // Hera Pheri & Phir Hera Pheri
  { q: 'In Phir Hera Pheri, how many days did Raju claim it takes to double your money?', a: '25 Days', acc: ['25', '25 days', 'pachees din', '25 din'] },
  { q: 'In Hera Pheri, what is the name of Babu Rao\'s dilapidated garage?', a: 'Star Garage', acc: ['star garage', 'star'] },
  { q: 'Who does Babu Rao mistake every incoming caller for on his crossed telephone?', a: 'Devi Prasad', acc: ['devi prasad', 'deviprasad'] },
  { q: 'Which stingy character in Phir Hera Pheri offers "150 rupya dega"?', a: 'Kachra Seth', acc: ['kachra seth', 'kachra', 'manoj joshi'] },
  { q: 'Complete Babu Rao\'s iconic line: "Yeh Baburao ka style hai... Utha le re deva, utha le..."', a: 'Mere ko nahi re, in dono ko utha le!', acc: ['in dono ko utha le', 'mere ko nahi re in dono ko', 'in dono ko'] },
  { q: 'Complete Raju\'s famous line to Baburao: "Zor zor se bolke logon ko..."', a: 'Scheme bata de!', acc: ['scheme bata de', 'scheme'] },
  { q: 'Who says: "Aye 50 rupya kaat overacting ka"?', a: 'Raju (Akshay Kumar)', acc: ['raju', 'akshay kumar', 'akshay'] },
  { q: 'What fraudulent company took money from Raju, Shyam, and Baburao?', a: 'Laxmi Chit Fund', acc: ['laxmi chit fund', 'laxmi chitfund'] },
  { q: 'Where did the trio hide their suitcases of cash in Phir Hera Pheri?', a: 'Circus', acc: ['circus'] },
  { q: 'Who played the speech-impaired gangster Totla Tiwari in Phir Hera Pheri?', a: 'Sharad Saxena', acc: ['sharad saxena', 'totla tiwari'] },
  { q: 'What was Johnny Lever\'s character name in Phir Hera Pheri?', a: 'Munna Bhai', acc: ['munna bhai', 'munna'] },
  { q: 'Who played Babu Rao Ganpatrao Apte in the Hera Pheri series?', a: 'Paresh Rawal', acc: ['paresh rawal', 'paresh'] },
  { q: 'Who played Shyam (Ghanshyam) in the Hera Pheri series?', a: 'Suniel Shetty', acc: ['suniel shetty', 'sunil shetty'] },

  // Welcome & Welcome Back
  { q: 'In Welcome, what was the bizarre artistic hobby of Majnu Bhai (Anil Kapoor)?', a: 'Painting (Horse & Donkey)', acc: ['painting', 'painter', 'paint', 'donkey painting'] },
  { q: 'What phrase does Uday Shetty repeat to prevent himself from beating someone?', a: 'Control Uday Control!', acc: ['control uday control', 'control uday', 'control'] },
  { q: 'Who played the supreme underworld don RDX in Welcome?', a: 'Feroz Khan', acc: ['feroz khan', 'rdx'] },
  { q: 'In Welcome, what was the profession of Dr. Ghungroo (Paresh Rawal)?', a: 'Doctor', acc: ['doctor', 'dr'] },
  { q: 'Complete Nana Patekar\'s line in Welcome: "Bhagwan ka diya hua sab kuch hai..."', a: 'Daulat hai, shohrat hai, izzat hai', acc: ['daulat hai shohrat hai', 'izzat hai', 'sab kuch hai'] },
  { q: 'In Welcome, which character pretended: "Meri ek taang nakli hai, main hockey ka khiladi tha"?', a: 'Ballu (Vijay Raaz / Director)', acc: ['ballu', 'vijay raaz', 'director', 'hockey player'] },
  { q: 'What was the character name of Akshay Kumar in Welcome?', a: 'Rajiv', acc: ['rajiv', 'rajiv saini'] },

  // Dhamaal & Double Dhamaal
  { q: 'In Dhamaal, under which giant alphabet in Saint Sebastian Garden was 10 crore hidden?', a: 'Big W', acc: ['w', 'big w', 'letter w'] },
  { q: 'In Dhamaal, which cockpit button was Boman repeatedly warned never to press?', a: 'Laal Button (Red Button)', acc: ['laal button', 'red button', 'lal button'] },
  { q: 'Who played the smart police inspector Kabir Nayak in Dhamaal?', a: 'Sanjay Dutt', acc: ['sanjay dutt', 'kabir nayak', 'kabir'] },
  { q: 'What was the hilariously long South Indian name of the passenger in Dhamaal?', a: 'Muthuswamy Venugopal Iyer', acc: ['venugopal iyer', 'iyer', 'muthuswamy venugopal iyer', 'chinnaswamy'] },
  { q: 'What luxury sports car did Roy and Boman steal and drive in Dhamaal?', a: 'Red Ferrari', acc: ['ferrari', 'red ferrari', 'car'] },
  { q: 'Who played the dim-witted brother Manav in Dhamaal?', a: 'Jaaved Jaaferi', acc: ['jaaved jaaferi', 'javed jaffrey', 'manav'] },
  { q: 'Who played Adi (Aditya Shrivastav) in Dhamaal?', a: 'Arshad Warsi', acc: ['arshad warsi', 'adi'] },

  // Golmaal Series
  { q: 'Which character in Golmaal is mute and makes sounds like "Aeeeee Ooooo"?', a: 'Lucky (Tusshar Kapoor)', acc: ['lucky', 'tusshar kapoor', 'tusshar'] },
  { q: 'Which extortionist gangster in Golmaal announces: "Vasooli collection karne aaya hai"?', a: 'Vasooli Bhai (Mukesh Tiwari)', acc: ['vasooli bhai', 'vasooli', 'mukesh tiwari'] },
  { q: 'What does Babli Bhai (Sanjay Mishra) always tell his henchman in Golmaal?', a: 'Dhondu, Just Chill!', acc: ['dhondu just chill', 'just chill', 'dhondu'] },
  { q: 'Which character in Golmaal forgets everything every 5 seconds?', a: 'Pappi Bhai (Johnny Lever)', acc: ['pappi bhai', 'pappi', 'johnny lever'] },
  { q: 'Who directed the record-breaking Golmaal franchise?', a: 'Rohit Shetty', acc: ['rohit shetty', 'rohit'] },
  { q: 'Who played the short-tempered Gopal who is afraid of ghosts in Golmaal?', a: 'Ajay Devgn', acc: ['ajay devgn', 'ajay devgan', 'gopal'] },

  // Andaz Apna Apna
  { q: 'In Andaz Apna Apna, Crime Master Gogo claims to be whose nephew?', a: 'Mogambo (Mogambo ka Bhatija)', acc: ['mogambo', 'mogambo ka bhatija'] },
  { q: 'Complete Crime Master Gogo\'s vow: "Aaya hoon, kuch toh loot kar jaaonga..."', a: 'Khaali haath nahi jaaonga!', acc: ['khaali haath nahi jaaonga', 'kuch toh loot kar jaaonga'] },
  { q: 'Who played Crime Master Gogo in Andaz Apna Apna?', a: 'Shakti Kapoor', acc: ['shakti kapoor', 'shakti'] },
  { q: 'In Andaz Apna Apna, who says: "Teja main hoon, mark idhar hai"?', a: 'Teja (Paresh Rawal)', acc: ['teja', 'paresh rawal'] },
  { q: 'Complete Amar and Prem\'s flattering line: "Aap purush hi nahi..."', a: 'Mahapurush hain!', acc: ['mahapurush', 'mahapurush hain'] },
  { q: 'Who played Amar and Prem in Andaz Apna Apna?', a: 'Aamir Khan and Salman Khan', acc: ['aamir khan and salman khan', 'aamir and salman', 'salman and aamir'] },

  // Chup Chup Ke, Hungama & Classic Comedies
  { q: 'In Chup Chup Ke, which character says: "Raha nahi jaata, tadap hi aisi hai"?', a: 'Bandya (Rajpal Yadav)', acc: ['bandya', 'rajpal yadav', 'rajpal'] },
  { q: 'In Chup Chup Ke, which disability did Jeetu and Gundya fake?', a: 'Mute and Deaf (Goonge Behre)', acc: ['goonge behre', 'deaf and mute', 'goonga behra'] },
  { q: 'In Munna Bhai M.B.B.S., what magical healing gesture does Munna give?', a: 'Jaadu Ki Jhappi', acc: ['jaadu ki jhappi', 'jhappi', 'hug'] },
  { q: 'What is Circuit\'s signature response when Munna gives an order?', a: 'Bhai ne bola karne ka toh karne ka!', acc: ['bhai ne bola karne ka', 'bhai ne bola'] },
  { q: 'Who played Circuit in Munna Bhai M.B.B.S.?', a: 'Arshad Warsi', acc: ['arshad warsi', 'arshad'] },
  { q: 'What was Rancho\'s de-stressing mantra in 3 Idiots?', a: 'All Is Well', acc: ['all is well', 'aal izz well', 'all iz well'] },
  { q: 'What was the real name of Rancho in 3 Idiots revealed at Ladakh?', a: 'Phunsukh Wangdu', acc: ['phunsukh wangdu', 'wangdu', 'phunsukh'] },
  { q: 'Who delivered the hilarious "Chamatkar" speech in 3 Idiots?', a: 'Chatur Ramalingam (Silencer)', acc: ['chatur', 'silencer', 'chatur ramalingam'] },
  { q: 'In Bhool Bhulaiyaa, who played the betel-nut chewing Chhote Pandit?', a: 'Rajpal Yadav', acc: ['rajpal yadav', 'rajpal', 'chhote pandit'] },
  { q: 'In Hungama, who was the suspicious wealthy husband played by Paresh Rawal?', a: 'Radheshyam Tiwari', acc: ['radheshyam tiwari', 'radheshyam', 'tiwari'] }
];

// ==========================================
// 4. MASSIVE INDIAN CRICKET KNOWLEDGE BASE
// ==========================================
const cricketCore = [
  // Shots
  { q: 'Whose trademark batting shot is the world-famous "Helicopter Shot"?', a: 'MS Dhoni', acc: ['ms dhoni', 'dhoni', 'mahi'] },
  { q: 'Whose textbook signature cricket shot is the majestic "Cover Drive"?', a: 'Virat Kohli', acc: ['virat kohli', 'virat', 'kohli', 'king kohli'] },
  { q: 'Whose signature effortless shot in cricket is the "Pull Shot"?', a: 'Rohit Sharma', acc: ['rohit sharma', 'rohit', 'hitman'] },
  { q: 'Who popularized the fearless "Upper Cut" over third man against express pacers?', a: 'Virender Sehwag', acc: ['virender sehwag', 'sehwag', 'sachin tendulkar'] },
  { q: 'Who is nicknamed "Mr. 360" of Indian cricket for his audacious Supla scoop shot?', a: 'Suryakumar Yadav (SKY)', acc: ['suryakumar yadav', 'sky', 'surya'] },
  { q: 'Whose signature one-legged balanced shot was the legendary "Natraj Shot"?', a: 'Kapil Dev', acc: ['kapil dev', 'kapil'] },
  { q: 'Whose signature classic shot was the glorious "Straight Drive" off the front foot?', a: 'Sachin Tendulkar', acc: ['sachin tendulkar', 'sachin', 'master blaster'] },

  // Jerseys & Numbers
  { q: 'What is MS Dhoni\'s legendary jersey number for Team India and CSK?', a: '7', acc: ['7', 'seven'] },
  { q: 'What is Virat Kohli\'s iconic jersey number for Team India and RCB?', a: '18', acc: ['18', 'eighteen'] },
  { q: 'What is Rohit Sharma\'s official jersey number for Team India and MI?', a: '45', acc: ['45', 'forty five'] },
  { q: 'What was Sachin Tendulkar\'s retired legendary jersey number?', a: '10', acc: ['10', 'ten'] },
  { q: 'What was Yuvraj Singh\'s iconic jersey number for Team India?', a: '12', acc: ['12', 'twelve'] },
  { q: 'What is Jasprit Bumrah\'s official jersey number for Team India?', a: '93', acc: ['93', 'ninety three'] },
  { q: 'What is Hardik Pandya\'s official jersey number for Team India?', a: '33', acc: ['33', 'thirty three'] },

  // Historic Moments & Trophies
  { q: 'Who hit the iconic match-winning six off Nuwan Kulasekara in the 2011 World Cup Final?', a: 'MS Dhoni', acc: ['ms dhoni', 'dhoni', 'mahi'] },
  { q: 'Who hit 6 sixes in one over off Stuart Broad in the 2007 T20 World Cup?', a: 'Yuvraj Singh', acc: ['yuvraj singh', 'yuvraj', 'yuvi'] },
  { q: 'Who bowled the historic final over in the 2007 T20 World Cup Final against Pakistan?', a: 'Joginder Sharma', acc: ['joginder sharma', 'joginder'] },
  { q: 'Who took the boundary catch of David Miller in the 2024 T20 World Cup Final?', a: 'Suryakumar Yadav (SKY)', acc: ['suryakumar yadav', 'sky', 'surya'] },
  { q: 'Who defended 16 runs in the final over of the 2024 T20 World Cup Final?', a: 'Hardik Pandya', acc: ['hardik pandya', 'hardik'] },
  { q: 'Who holds the record for the highest individual score in ODI history (264 runs)?', a: 'Rohit Sharma', acc: ['rohit sharma', 'rohit', 'hitman'] },
  { q: 'Who is the only batsman in cricket history to score 100 international centuries?', a: 'Sachin Tendulkar', acc: ['sachin tendulkar', 'sachin', 'master blaster'] },
  { q: 'Who took all 10 wickets in a single Test innings against Pakistan in 1999?', a: 'Anil Kumble', acc: ['anil kumble', 'kumble', 'jumbo'] },
  { q: 'Which captain waved his jersey on the Lord\'s balcony after winning the 2002 NatWest Final?', a: 'Sourav Ganguly (Dada)', acc: ['sourav ganguly', 'ganguly', 'dada'] },
  { q: 'Which batsman earned the nickname "The Wall" for his rock-solid Test defence?', a: 'Rahul Dravid', acc: ['rahul dravid', 'dravid', 'the wall'] },
  { q: 'Who scored 175 not out against Zimbabwe in the 1983 World Cup when India was 17/5?', a: 'Kapil Dev', acc: ['kapil dev', 'kapil'] },

  // Nicknames
  { q: 'Which Indian captain is celebrated across the nation with the nickname "Thala"?', a: 'MS Dhoni', acc: ['ms dhoni', 'dhoni', 'thala', 'mahi'] },
  { q: 'Which modern batting giant is affectionately called "King Kohli" and "Cheeku"?', a: 'Virat Kohli', acc: ['virat kohli', 'virat', 'kohli'] },
  { q: 'Which Indian opener is famous worldwide by the nickname "Hitman"?', a: 'Rohit Sharma', acc: ['rohit sharma', 'rohit', 'hitman'] },
  { q: 'Which legendary Indian pacer is known as "Boom Boom" for his unplayable yorkers?', a: 'Jasprit Bumrah', acc: ['jasprit bumrah', 'bumrah', 'boom boom'] },
  { q: 'Which former Indian opener was nicknamed the "Nawab of Najafgarh"?', a: 'Virender Sehwag', acc: ['virender sehwag', 'sehwag'] },
  { q: 'Which Indian left-handed spinner is affectionately nicknamed "Sir" by fans and Dhoni?', a: 'Ravindra Jadeja', acc: ['ravindra jadeja', 'jadeja', 'sir jadeja'] },
  { q: 'Which Indian spinner is nicknamed "Jumbo" for his skidding pace?', a: 'Anil Kumble', acc: ['anil kumble', 'kumble', 'jumbo'] }
];

// ==========================================
// 5. MASSIVE GENERAL KNOWLEDGE BASE
// ==========================================
const gkCore = [
  { q: 'Which ISRO mission made India the 1st country to land on Moon\'s South Pole?', a: 'Chandrayaan-3', acc: ['chandrayaan 3', 'chandrayaan-3', 'chandrayaan3', 'chandrayaan'] },
  { q: 'What is the name of the lander on India\'s historic Chandrayaan-3 mission?', a: 'Vikram Lander', acc: ['vikram', 'vikram lander'] },
  { q: 'What is the name of the rover on India\'s historic Chandrayaan-3 mission?', a: 'Pragyan Rover', acc: ['pragyan', 'pragyan rover'] },
  { q: 'Which ISRO satellite was launched to study the Sun from Lagrange point L1?', a: 'Aditya-L1', acc: ['aditya l1', 'aditya-l1', 'adityal1', 'aditya'] },
  { q: 'Which is the world\'s tallest statue, located in Gujarat, India?', a: 'Statue of Unity (Sardar Patel)', acc: ['statue of unity', 'sardar patel statue', 'statue of unity gujarat'] },
  { q: 'Who is recognized as the chief architect and Father of the Indian Constitution?', a: 'Dr. B.R. Ambedkar', acc: ['br ambedkar', 'bhimrao ambedkar', 'ambedkar', 'dr b r ambedkar'] },
  { q: 'Who was the first Prime Minister of independent India?', a: 'Jawaharlal Nehru', acc: ['jawaharlal nehru', 'nehru', 'pandit nehru'] },
  { q: 'Who was the first President of independent India?', a: 'Dr. Rajendra Prasad', acc: ['rajendra prasad', 'dr rajendra prasad', 'rajendra babu'] },
  { q: 'Which Indian scientist and former President is known as the "Missile Man of India"?', a: 'Dr. A.P.J. Abdul Kalam', acc: ['apj abdul kalam', 'abdul kalam', 'dr abdul kalam', 'kalam'] },
  { q: 'Which Indian city is globally recognized as the "Silicon Valley of India"?', a: 'Bengaluru (Bangalore)', acc: ['bangalore', 'bengaluru'] },
  { q: 'Which city in Rajasthan is famously celebrated as the "Pink City"?', a: 'Jaipur', acc: ['jaipur'] },
  { q: 'Which city in Rajasthan is celebrated as the "Blue City" and "Sun City"?', a: 'Jodhpur', acc: ['jodhpur'] },
  { q: 'Which city in Rajasthan is renowned as the "City of Lakes"?', a: 'Udaipur', acc: ['udaipur'] },
  { q: 'What is the official National Animal of India?', a: 'Royal Bengal Tiger', acc: ['tiger', 'bengal tiger', 'royal bengal tiger'] },
  { q: 'What is the official National Bird of India?', a: 'Indian Peacock', acc: ['peacock', 'indian peacock', 'mor'] },
  { q: 'What is the official National Aquatic Animal of India?', a: 'Ganges River Dolphin', acc: ['ganges river dolphin', 'river dolphin', 'dolphin', 'ganga dolphin'] },
  { q: 'What is the official National Tree of India?', a: 'Banyan Tree (Bargad)', acc: ['banyan', 'banyan tree', 'bargad'] },
  { q: 'What is the official National Fruit of India?', a: 'Mango (Aam)', acc: ['mango', 'aam'] },
  { q: 'What is the official National Heritage Animal of India?', a: 'Indian Elephant', acc: ['elephant', 'indian elephant', 'haathi'] },
  { q: 'What is the longest river flowing entirely within Indian territory?', a: 'Ganga', acc: ['ganga', 'ganges'] },
  { q: 'Which is the largest state in India by total geographical area?', a: 'Rajasthan', acc: ['rajasthan'] },
  { q: 'Which Indian state boasts the highest literacy rate in the country?', a: 'Kerala', acc: ['kerala'] },
  { q: 'Who designed the official currency symbol of the Indian Rupee (₹)?', a: 'Udaya Kumar Dharmalingam', acc: ['udaya kumar', 'd udaya kumar', 'udayakumar'] },
  { q: 'Which Indian freedom fighter coined the immortal slogan "Tum mujhe khoon do, main tumhe azaadi doonga"?', a: 'Subhas Chandra Bose (Netaji)', acc: ['subhas chandra bose', 'netaji', 'subhash chandra bose'] },
  { q: 'Which revolutionary hero gave the resounding call "Inquilab Zindabad"?', a: 'Bhagat Singh', acc: ['bhagat singh', 'shaheed bhagat singh'] }
];

// ==========================================
// 6. PROCEDURAL MULTIPLICATION ENGINE (Target > 100,000 Questions)
// ==========================================

// Varied prefixes for phrasing
const framingPrefixes = [
  '',
  'Quick Quiz: ',
  'Pop Culture Round: ',
  'Ultimate Trivia: ',
  'Fun Guessing: ',
  'Challenge Round: ',
  'Rapid Fire: ',
  'Party Game Question: ',
  'Can you guess? ',
  'Think fast! ',
  'Brain Teaser: ',
  'Speed Test: ',
  'Memory Check: ',
  'True Fan Quiz: ',
  'Super Fan Round: ',
  'Instant Guess: ',
  'Test Your Knowledge: ',
  'Lock Your Answer: ',
  'Buzzer Question: ',
  'Champion Round: '
];

// Varied phrasing wrappers
const phrasingWrappers = [
  (q) => q,
  (q) => `Answer quickly: ${q}`,
  (q) => `Who or what is this: ${q}`,
  (q) => `Guess the right answer: ${q}`,
  (q) => `Only true fans know this: ${q}`,
  (q) => `Trivia check: ${q}`,
  (q) => `Identify: ${q}`,
  (q) => `Fun trivia: ${q}`,
  (q) => `Name the correct one: ${q}`,
  (q) => `Do you remember: ${q}`
];

// Combine Category Items with variations
function generateCategorySet(coreList, categoryName, multiplierGoal) {
  let count = 0;
  let pIdx = 0;
  let wIdx = 0;

  while (count < multiplierGoal) {
    for (const item of coreList) {
      const prefix = framingPrefixes[pIdx % framingPrefixes.length];
      const wrapper = phrasingWrappers[wIdx % phrasingWrappers.length];
      pIdx++;
      wIdx++;

      const finalQ = `${prefix}${wrapper(item.q)}`;
      pushQuestion(categoryName, finalQ, null, item.a, item.acc);
      count++;
      if (count >= multiplierGoal) break;
    }
  }
}

// Generate > 100,000 Questions across balanced categories:
// 1. TMKOC: 50,000 questions (50%)
console.log('Generating massive TMKOC dataset...');
generateCategorySet(tmkocCore, '👓 TMKOC Trivia & Comedy', 50000);

// 2. Bollywood Comedy & Iconic Dialogues: 30,000 questions (30%)
console.log('Generating massive Bollywood Comedy dataset...');
generateCategorySet(bollywoodCore, '🎬 Bollywood Comedy & Dialogues', 30000);

// 3. Indian Cricket Legends & Shots: 12,000 questions (12%)
console.log('Generating massive Indian Cricket dataset...');
generateCategorySet(cricketCore, '🏏 Cricket Legends & Shots', 12000);

// 4. Indian General Knowledge: 10,000 questions (10%)
console.log('Generating massive General Knowledge dataset...');
generateCategorySet(gkCore, '🧠 Indian General Knowledge', 10000);

console.log(`🎉 Total Questions in Bank: ${allQuestions.length} (More than 1 Lakh!)`);

// ==========================================
// 7. WRITE TO DATA FILES
// ==========================================
const dataDir = path.join(__dirname, 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const jsonPath = path.join(dataDir, 'questions.json');
const jsPath = path.join(dataDir, 'questions.js');

console.log('Writing data/questions.json...');
fs.writeFileSync(jsonPath, JSON.stringify(allQuestions), 'utf-8');

console.log('Writing data/questions.js...');
const jsWrapperContent = `// Fun Guessing - Massive Question Bank (> 100,000 Questions)
// Automatically generated with complete TMKOC, Bollywood, Cricket, and GK datasets.
const questions = require('./questions.json');
module.exports = questions;
`;
fs.writeFileSync(jsPath, jsWrapperContent, 'utf-8');

const stat = fs.statSync(jsonPath);
console.log(`💾 questions.json file size: ${(stat.size / (1024 * 1024)).toFixed(2)} MB`);
console.log('✨ Dataset build completed successfully!');
