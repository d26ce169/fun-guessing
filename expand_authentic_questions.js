const fs = require('fs');
const path = require('path');

const currentQuestions = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'questions.json'), 'utf8'));

// Rich expansion bank with diverse authentic Indian pop culture, web series, cricket, and cinema trivia
const newTrivia = [
  // --- PANCHAYAT & INDIAN WEB SERIES ---
  {
    category: "📺 Indian Web Series & Cult Hits",
    question: "In the web series Panchayat, what is the official designation of Abhishek Tripathi (played by Jitendra Kumar)?",
    correctAnswer: "Panchayat Secretary (Sachiv Ji)",
    acceptableAnswers: ["panchayat secretary", "sachiv ji", "sachiv", "secretary", "gram sachiv"]
  },
  {
    category: "📺 Indian Web Series & Cult Hits",
    question: "In Panchayat, what is the name of the fictional village in Uttar Pradesh where the series is set?",
    correctAnswer: "Phulera",
    acceptableAnswers: ["phulera", "fulera", "fulehra"]
  },
  {
    category: "📺 Indian Web Series & Cult Hits",
    question: "In Panchayat, which character is notoriously nicknamed 'Banrakas' by the villagers?",
    correctAnswer: "Bhushan",
    acceptableAnswers: ["bhushan", "banrakas", "bhushan ji"]
  },
  {
    category: "📺 Indian Web Series & Cult Hits",
    question: "In Panchayat, what examination is Sachiv Ji (Abhishek Tripathi) constantly studying for?",
    correctAnswer: "CAT",
    acceptableAnswers: ["cat", "cat exam", "mba", "iim"]
  },
  {
    category: "📺 Indian Web Series & Cult Hits",
    question: "In Panchayat, who is the real official Pradhan of Phulera, while her husband acts as Pradhan-Pati?",
    correctAnswer: "Manju Devi",
    acceptableAnswers: ["manju devi", "manju", "neena gupta"]
  },
  {
    category: "📺 Indian Web Series & Cult Hits",
    question: "In Scam 1992, which stockbroker's rise and fall is depicted, famously played by Pratik Gandhi?",
    correctAnswer: "Harshad Mehta",
    acceptableAnswers: ["harshad mehta", "harshad", "the big bull", "big bull"]
  },
  {
    category: "📺 Indian Web Series & Cult Hits",
    question: "What is the iconic dialogue spoken by Harshad Mehta in Scam 1992 about risk and love?",
    correctAnswer: "Risk Hai Toh Ishq Hai",
    acceptableAnswers: ["risk hai toh ishq hai", "risk", "ishq", "risk hai to ishq hai"]
  },
  {
    category: "📺 Indian Web Series & Cult Hits",
    question: "In The Family Man, what is the name of Srikant Tiwari's secretive counter-terrorism intelligence agency?",
    correctAnswer: "TASC",
    acceptableAnswers: ["tasc", "t.a.s.c", "threat analysis and surveillance cell"]
  },
  {
    category: "📺 Indian Web Series & Cult Hits",
    question: "In The Family Man Season 2, who is the omniscient retired intelligence officer Srikant calls for answers to everything?",
    correctAnswer: "Chellam Sir",
    acceptableAnswers: ["chellam sir", "chellam", "chelam sir"]
  },
  {
    category: "📺 Indian Web Series & Cult Hits",
    question: "In Kota Factory, what is the beloved physics mentor played by Jitendra Kumar universally called?",
    correctAnswer: "Jeetu Bhaiya",
    acceptableAnswers: ["jeetu bhaiya", "jeetu sir", "jeetu", "jitendra kumar"]
  },
  {
    category: "📺 Indian Web Series & Cult Hits",
    question: "In Gullak, what is the surname of the middle-class family consisting of Santosh, Shanti, Annu, and Aman?",
    correctAnswer: "Mishra",
    acceptableAnswers: ["mishra", "mishra family", "mishras"]
  },
  {
    category: "📺 Indian Web Series & Cult Hits",
    question: "In Mirzapur, what lucrative family business does Akhandanand Tripathi (Kaleen Bhaiya) run as a front?",
    correctAnswer: "Carpet Manufacturing",
    acceptableAnswers: ["carpet", "carpets", "kaleen", "kaleen business", "rugs"]
  },

  // --- SHARK TANK INDIA & REALITY TV ---
  {
    category: "📺 Indian Television & Reality TV",
    question: "Which Shark Tank India judge became a viral meme sensation with the dialogue 'Yeh sab doglapan hai'?",
    correctAnswer: "Ashneer Grover",
    acceptableAnswers: ["ashneer grover", "ashneer", "grover", "bharatpe founder"]
  },
  {
    category: "📺 Indian Television & Reality TV",
    question: "Which Shark Tank India judge famously declares 'Meri isme expertise nahi hai, isliye I am out'?",
    correctAnswer: "Namita Thapar",
    acceptableAnswers: ["namita thapar", "namita", "emcure"]
  },
  {
    category: "📺 Indian Television & Reality TV",
    question: "In CID, what does ACP Pradyuman famously shout to Senior Inspector Daya whenever a door is locked?",
    correctAnswer: "Daya Darwaza Tod Do",
    acceptableAnswers: ["daya darwaza tod do", "darwaza tod", "tod do", "darwaza tod do", "break the door"]
  },
  {
    category: "📺 Indian Television & Reality TV",
    question: "In CID, what is the name of the eccentric forensic doctor who works in the CID laboratory?",
    correctAnswer: "Dr. Salunkhe",
    acceptableAnswers: ["dr salunkhe", "salunkhe", "doctor salunkhe", "salunke", "dr salunke"]
  },
  {
    category: "📺 Indian Television & Reality TV",
    question: "In CID, what is Senior Inspector Abhijeet's sharp signature skill often showcased in shootouts?",
    correctAnswer: "Sharpshooting (Never misses an aim)",
    acceptableAnswers: ["sharpshooting", "shooting", "sharp shooter", "aim", "gun"]
  },

  // --- BOLLYWOOD COMEDY & DIALOGUES ---
  {
    category: "🎬 Bollywood Comedy & Dialogues",
    question: "In Hera Pheri, who is the real owner of Star Garage that Baburao Apte inherited?",
    correctAnswer: "Baburao Ganpatrao Apte",
    acceptableAnswers: ["baburao", "baburao apte", "star garage owner", "babu bhaiya"]
  },
  {
    category: "🎬 Bollywood Comedy & Dialogues",
    question: "In Phir Hera Pheri, what was the name of the scam company through which Anuradha promised to double money in 25 days?",
    correctAnswer: "Laxmi Chit Fund",
    acceptableAnswers: ["laxmi chit fund", "lakshmi chit fund", "laxmi", "chit fund"]
  },
  {
    category: "🎬 Bollywood Comedy & Dialogues",
    question: "In Phir Hera Pheri, what is the name of the stuttering gangster played by Sharad Saxena?",
    correctAnswer: "Tiwari Seth",
    acceptableAnswers: ["tiwari", "tiwari seth", "totla tiwari"]
  },
  {
    category: "🎬 Bollywood Comedy & Dialogues",
    question: "In Phir Hera Pheri, what is the name of the eccentric don played by Johnny Lever who constantly forgets words?",
    correctAnswer: "Munna Mobile",
    acceptableAnswers: ["munna mobile", "munna", "johnny lever"]
  },
  {
    category: "🎬 Bollywood Comedy & Dialogues",
    question: "In Welcome, what is Majnu Bhai's (Anil Kapoor) secret artistic passion in his free time?",
    correctAnswer: "Painting",
    acceptableAnswers: ["painting", "painter", "drawing", "art"]
  },
  {
    category: "🎬 Bollywood Comedy & Dialogues",
    question: "In Welcome, who plays the don't-mess-with-me underworld don RDX who has an emotional breakdown over his son?",
    correctAnswer: "Feroz Khan",
    acceptableAnswers: ["feroz khan", "rdx", "feroz"]
  },
  {
    category: "🎬 Bollywood Comedy & Dialogues",
    question: "In Dhamaal, which tree in Goa's St. Sebastian Garden hides 10 crore rupees under a giant 'W'?",
    correctAnswer: "Four Palm Trees shaped like W",
    acceptableAnswers: ["w", "big w", "four palm trees", "palm trees", "under the w"]
  },
  {
    category: "🎬 Bollywood Comedy & Dialogues",
    question: "In Dhamaal, what was the hilariously long and impossible South Indian name recited by the passenger in the car with Adi?",
    correctAnswer: "Muthuswami Venugopal Iyer",
    acceptableAnswers: ["muthuswami venugopal iyer", "venugopal iyer", "iyer", "muthuswami"]
  },
  {
    category: "🎬 Bollywood Comedy & Dialogues",
    question: "In Munna Bhai M.B.B.S., what is the medical term Munna coins for treating patients with warmth and hugs?",
    correctAnswer: "Jaadu Ki Jhappi",
    acceptableAnswers: ["jaadu ki jhappi", "jadu ki jhappi", "jhappi", "hug"]
  },
  {
    category: "🎬 Bollywood Comedy & Dialogues",
    question: "In Munna Bhai M.B.B.S., who plays Munna's loyal best friend and sidekick Circuit?",
    correctAnswer: "Arshad Warsi",
    acceptableAnswers: ["arshad warsi", "arshad", "circuit"]
  },
  {
    category: "🎬 Bollywood Comedy & Dialogues",
    question: "In 3 Idiots, what machine does Chatur Ramalingam famously demonstrate at the Imperial College of Engineering speech?",
    correctAnswer: "Silencer's Balatkar Speech (Pranks by Rancho)",
    acceptableAnswers: ["chatur speech", "speech", "chatur", "balatkar speech"]
  },
  {
    category: "🎬 Bollywood Comedy & Dialogues",
    question: "In 3 Idiots, what was the real passion that Farhan Qureshi (R. Madhavan) wanted to pursue instead of engineering?",
    correctAnswer: "Wildlife Photography",
    acceptableAnswers: ["wildlife photography", "photography", "photographer", "wildlife"]
  },
  {
    category: "🎬 Bollywood Comedy & Dialogues",
    question: "In 3 Idiots, which world-renowned Hungarian inventor inspired the astronaut pen question posed by Rancho to Virus?",
    correctAnswer: "Paul C. Fisher (Space Pen / Pencil)",
    acceptableAnswers: ["pencil", "astronaut pen", "space pen", "why not pencil"]
  },
  {
    category: "🎬 Bollywood Comedy & Dialogues",
    question: "In Andaz Apna Apna, who is the legendary crime master whose eyes 'goti khelne ke kaam aati hain'?",
    correctAnswer: "Crime Master Gogo",
    acceptableAnswers: ["crime master gogo", "gogo", "shakti kapoor"]
  },
  {
    category: "🎬 Bollywood Comedy & Dialogues",
    question: "In Andaz Apna Apna, what did Amar and Prem claim their fathers were when trying to impress Raveena?",
    correctAnswer: "Millionaire Industrialists",
    acceptableAnswers: ["millionaires", "rich", "industrialists", "businessmen"]
  },
  {
    category: "🎬 Bollywood Comedy & Dialogues",
    question: "In Chup Chup Ke, which character pretends to be deaf and mute to escape money lenders, played by Shahid Kapoor?",
    correctAnswer: "Jeetu",
    acceptableAnswers: ["jeetu", "shahid kapoor", "shahid"]
  },
  {
    category: "🎬 Bollywood Comedy & Dialogues",
    question: "In Chup Chup Ke, which comic actor plays the hysterical boat owner Gundya who hires Jeetu and Bandya?",
    correctAnswer: "Paresh Rawal",
    acceptableAnswers: ["paresh rawal", "gundya", "gundya bhai"]
  },

  // --- TMKOC EXCLUSIVES ---
  {
    category: "👓 TMKOC Trivia & Comedy",
    question: "In Taarak Mehta Ka Ooltah Chashmah, what is the full name of Jethalal's father?",
    correctAnswer: "Champaklal Jayantilal Gada",
    acceptableAnswers: ["champaklal jayantilal gada", "champaklal", "champak lal", "bapuji", "jayantilal gada"]
  },
  {
    category: "👓 TMKOC Trivia & Comedy",
    question: "What is the village in Kutch, Gujarat from which the Gada family hails?",
    correctAnswer: "Bhachau",
    acceptableAnswers: ["bhachau", "bachau", "kutch bhachau"]
  },
  {
    category: "👓 TMKOC Trivia & Comedy",
    question: "What Gujarati snack is Jethalal's ultimate Sunday morning addiction?",
    correctAnswer: "Jalebi Fafda",
    acceptableAnswers: ["jalebi fafda", "fafda jalebi", "fafda", "jalebi"]
  },
  {
    category: "👓 TMKOC Trivia & Comedy",
    question: "What is the name of Jethalal's mischievous brother-in-law from Ahmedabad who constantly takes money from him?",
    correctAnswer: "Sundarlal (Sundar)",
    acceptableAnswers: ["sundarlal", "sundar", "sunder", "sunderlal", "daya brother"]
  },
  {
    category: "👓 TMKOC Trivia & Comedy",
    question: "What is the name of the agency or travel scheme Sundar frequently uses to trick Jethalal?",
    correctAnswer: "Sundar Travels / Schemes",
    acceptableAnswers: ["sundar travels", "topi", "ahmedabad travels", "schemes"]
  },
  {
    category: "👓 TMKOC Trivia & Comedy",
    question: "What newspaper does Patrakar Popatlal work for as a senior crime reporter?",
    correctAnswer: "Toofan Express",
    acceptableAnswers: ["toofan express", "toofan", "tufan express"]
  },
  {
    category: "👓 TMKOC Trivia & Comedy",
    question: "What prestigious national journalism award has Patrakar Popatlal won?",
    correctAnswer: "Golden Crow Award",
    acceptableAnswers: ["golden crow award", "golden crow", "golden crow trophy"]
  },
  {
    category: "👓 TMKOC Trivia & Comedy",
    question: "What is the name of Aatmaram Tukaram Bhide's home-business pickle and papad brand managed by Madhavi?",
    correctAnswer: "Madhur Papad & Achar",
    acceptableAnswers: ["madhur", "papad achar", "madhavi papad", "madhur papad", "achar papad"]
  },
  {
    category: "👓 TMKOC Trivia & Comedy",
    question: "What is the name of the beloved vintage scooter owned by Aatmaram Bhide?",
    correctAnswer: "Sakharam",
    acceptableAnswers: ["sakharam", "sakharam scooter", "yellow scooter"]
  },
  {
    category: "👓 TMKOC Trivia & Comedy",
    question: "What scientific research organization does Krishnan Subramaniam Iyer work for as a scientist?",
    correctAnswer: "Indian Space Research (ISRO / Space Organization)",
    acceptableAnswers: ["isro", "space", "scientist", "space scientist", "space research"]
  },
  {
    category: "👓 TMKOC Trivia & Comedy",
    question: "Which Indian state is Babita Ji originally from?",
    correctAnswer: "West Bengal (Kolkata)",
    acceptableAnswers: ["west bengal", "bengal", "kolkata", "bengali"]
  },
  {
    category: "👓 TMKOC Trivia & Comedy",
    question: "What is the name of the cozy hangout shop run by Abdul outside Gokuldham Society?",
    correctAnswer: "All in One General Store (Abdul Soda Shop)",
    acceptableAnswers: ["abdul soda shop", "soda shop", "abdul shop", "all in one general store"]
  },
  {
    category: "👓 TMKOC Trivia & Comedy",
    question: "What is the favorite evening beverage all male members of Gokuldham gather to drink at Abdul's shop?",
    correctAnswer: "Soda",
    acceptableAnswers: ["soda", "lemon soda", "jeera soda", "masala soda"]
  },
  {
    category: "👓 TMKOC Trivia & Comedy",
    question: "What is the nickname given to the mischievous group of Gokuldham kids led by Tipendra Gada?",
    correctAnswer: "Tapu Sena",
    acceptableAnswers: ["tapu sena", "tappu sena", "tapu brigade"]
  },
  {
    category: "👓 TMKOC Trivia & Comedy",
    question: "What is the full name of Pinku from Tapu Sena?",
    correctAnswer: "Pankaj Diwan Sahay (Pinku)",
    acceptableAnswers: ["pankaj", "pinku", "pankaj diwan sahay"]
  },
  {
    category: "👓 TMKOC Trivia & Comedy",
    question: "What is the name of Bagha's eccentric fiancée who works at a mobile store and has a trademark catchphrase?",
    correctAnswer: "Bawri (Bawri Dhondulal Kanpuria)",
    acceptableAnswers: ["bawri", "bavari", "bawri kanpuria", "galti se mistake ho gayi"]
  },
  {
    category: "👓 TMKOC Trivia & Comedy",
    question: "What is Bawri's signature catchphrase whenever she mistakenly says the wrong name?",
    correctAnswer: "Galti Se Mistake Ho Gayi",
    acceptableAnswers: ["galti se mistake ho gayi", "galti se mistake", "mistake ho gayi"]
  },
  {
    category: "👓 TMKOC Trivia & Comedy",
    question: "What is the name of Nattu Kaka's nephew who works together with him at Gada Electronics?",
    correctAnswer: "Bagheshwar (Bagha)",
    acceptableAnswers: ["bagha", "bagheshwar", "bagha boy"]
  },
  {
    category: "👓 TMKOC Trivia & Comedy",
    question: "What famous cricket tournament is organized between the society members in Gokuldham?",
    correctAnswer: "Gokuldham Premiere League (GPL)",
    acceptableAnswers: ["gpl", "gokuldham premiere league", "gokuldham premier league"]
  },

  // --- CRICKET & SPORTS HEROES ---
  {
    category: "🏏 Cricket Legends & Shots",
    question: "Which Indian captain hit the iconic World Cup winning six over long-on in the 2011 final at Wankhede?",
    correctAnswer: "MS Dhoni",
    acceptableAnswers: ["ms dhoni", "dhoni", "mahendra singh dhoni", "thala", "captain cool"]
  },
  {
    category: "🏏 Cricket Legends & Shots",
    question: "What is the signature helicopter shot invented and popularized worldwide by MS Dhoni?",
    correctAnswer: "Helicopter Shot",
    acceptableAnswers: ["helicopter shot", "helicopter", "heli shot"]
  },
  {
    category: "🏏 Cricket Legends & Shots",
    question: "Which Indian batter holds the world record for the highest individual ODI score of 264 runs against Sri Lanka?",
    correctAnswer: "Rohit Sharma",
    acceptableAnswers: ["rohit sharma", "rohit", "hitman", "sharma"]
  },
  {
    category: "🏏 Cricket Legends & Shots",
    question: "How many double centuries has Rohit Sharma scored in One Day Internationals (ODI)?",
    correctAnswer: "3 Double Centuries",
    acceptableAnswers: ["3", "three", "3 double centuries"]
  },
  {
    category: "🏏 Cricket Legends & Shots",
    question: "Which Indian cricket legend holds the immortal record of scoring 100 international centuries?",
    correctAnswer: "Sachin Tendulkar",
    acceptableAnswers: ["sachin tendulkar", "sachin", "master blaster", "god of cricket", "tendulkar"]
  },
  {
    category: "🏏 Cricket Legends & Shots",
    question: "Which Indian batter surpassed Sachin Tendulkar to reach 50 ODI centuries during the 2023 ICC World Cup semi-final?",
    correctAnswer: "Virat Kohli",
    acceptableAnswers: ["virat kohli", "virat", "king kohli", "kohli", "cheeku"]
  },
  {
    category: "🏏 Cricket Legends & Shots",
    question: "What is the iconic official jersey number worn by Virat Kohli for India and RCB?",
    correctAnswer: "18",
    acceptableAnswers: ["18", "jersey 18", "eighteen", "no 18"]
  },
  {
    category: "🏏 Cricket Legends & Shots",
    question: "What is the iconic jersey number permanently retired by BCCI in honor of MS Dhoni?",
    correctAnswer: "7",
    acceptableAnswers: ["7", "jersey 7", "seven", "no 7"]
  },
  {
    category: "🏏 Cricket Legends & Shots",
    question: "Which Indian pacer is world-famous for bowling pinpoint yorkers with a unique sling action?",
    correctAnswer: "Jasprit Bumrah",
    acceptableAnswers: ["jasprit bumrah", "bumrah", "jassi", "boom boom"]
  },
  {
    category: "🏏 Cricket Legends & Shots",
    question: "Which Indian all-rounder captained the underdog Indian team to their historic maiden World Cup victory in 1983?",
    correctAnswer: "Kapil Dev",
    acceptableAnswers: ["kapil dev", "kapil", "haryana hurricane", "kapil paaji"]
  },
  {
    category: "🏏 Cricket Legends & Shots",
    question: "What historic knock of 175 not out against Zimbabwe in the 1983 World Cup was not recorded by BBC due to a strike?",
    correctAnswer: "Kapil Dev's 175*",
    acceptableAnswers: ["kapil dev", "175", "kapil dev 175", "kapil"]
  },
  {
    category: "🏏 Cricket Legends & Shots",
    question: "Which former Indian captain famously took off his jersey at the Lord's balcony after winning the 2002 NatWest trophy?",
    correctAnswer: "Sourav Ganguly",
    acceptableAnswers: ["sourav ganguly", "ganguly", "dada", "prince of kolkata"]
  },
  {
    category: "🏏 Cricket Legends & Shots",
    question: "Which Indian batter hit 6 consecutive sixes in an over off Stuart Broad during the 2007 T20 World Cup?",
    correctAnswer: "Yuvraj Singh",
    acceptableAnswers: ["yuvraj singh", "yuvraj", "yuvi"]
  },
  {
    category: "🏏 Cricket Legends & Shots",
    question: "What is the home ground of Kolkata Knight Riders known as the Mecca of Indian Cricket?",
    correctAnswer: "Eden Gardens",
    acceptableAnswers: ["eden gardens", "eden", "kolkata eden gardens"]
  },
  {
    category: "🏏 Cricket Legends & Shots",
    question: "What is the world's largest cricket stadium by seating capacity, located in Ahmedabad, Gujarat?",
    correctAnswer: "Narendra Modi Stadium (Motera)",
    acceptableAnswers: ["narendra modi stadium", "motera", "motera stadium", "ahmedabad stadium"]
  },
  {
    category: "🏏 Cricket Legends & Shots",
    question: "Which team has won 5 IPL trophies under the captaincy of MS Dhoni in yellow jersey?",
    correctAnswer: "Chennai Super Kings (CSK)",
    acceptableAnswers: ["csk", "chennai super kings", "chennai"]
  },
  {
    category: "🏏 Cricket Legends & Shots",
    question: "Which team has won 5 IPL trophies under the captaincy of Rohit Sharma in blue jersey?",
    correctAnswer: "Mumbai Indians (MI)",
    acceptableAnswers: ["mumbai indians", "mi", "mumbai"]
  },

  // --- PAN-INDIA BLOCKBUSTERS & VIRAL MEMES ---
  {
    category: "🎬 Indian Blockbusters & Action",
    question: "In Pushpa: The Rise, what red forestry timber does Pushpa Raj smuggle across the Seshachalam hills?",
    correctAnswer: "Red Sandalwood (Raktachandan)",
    acceptableAnswers: ["red sandalwood", "sandalwood", "raktachandan", "lal chandan"]
  },
  {
    category: "🎬 Indian Blockbusters & Action",
    question: "In Pushpa, what is Allu Arjun's world-famous gesture under his chin accompanied by 'Main Jhukega Nahi'?",
    correctAnswer: "Beard swipe under the chin",
    acceptableAnswers: ["chin swipe", "beard swipe", "hand under chin", "jhukega nahi gesture"]
  },
  {
    category: "🎬 Indian Blockbusters & Action",
    question: "In KGF, what is the fictional town in Karnataka where the gold mines are situated?",
    correctAnswer: "Kolar Gold Fields (Narachi)",
    acceptableAnswers: ["kgf", "kolar gold fields", "narachi", "kolar"]
  },
  {
    category: "🎬 Indian Blockbusters & Action",
    question: "In KGF Chapter 2, who played the fierce antagonist Adheera inspired by Vikings, opposite Yash?",
    correctAnswer: "Sanjay Dutt",
    acceptableAnswers: ["sanjay dutt", "adheera", "sanju"]
  },
  {
    category: "🎬 Indian Blockbusters & Action",
    question: "In SS Rajamouli's Baahubali, which kingdom's throne are Amarendra Baahubali and Bhallaladeva competing for?",
    correctAnswer: "Mahishmati",
    acceptableAnswers: ["mahishmati", "mahismati", "maheshmati"]
  },
  {
    category: "🎬 Indian Blockbusters & Action",
    question: "What historical question became India's biggest cliffhanger meme after Baahubali: The Beginning in 2015?",
    correctAnswer: "Why Kattappa Killed Baahubali (Katappa ne Baahubali ko kyu maara)",
    acceptableAnswers: ["why kattappa killed baahubali", "katappa ne baahubali ko kyu maara", "kattappa", "why katappa killed baahubali"]
  },
  {
    category: "🎬 Indian Blockbusters & Action",
    question: "Which SS Rajamouli film won the Academy Award (Oscar) for Best Original Song for 'Naatu Naatu'?",
    correctAnswer: "RRR",
    acceptableAnswers: ["rrr", "r r r"]
  },
  {
    category: "🎬 Indian Blockbusters & Action",
    question: "Who composed the Oscar-winning song 'Naatu Naatu' from the movie RRR?",
    correctAnswer: "M. M. Keeravani",
    acceptableAnswers: ["m m keeravani", "keeravani", "m.m. keeravani", "mm keeravani"]
  },
  {
    category: "🎬 Bollywood Blockbusters & Action",
    question: "In Sholay, what was the name of Basanti's beloved mare (horse) that drove her tanga?",
    correctAnswer: "Dhanno",
    acceptableAnswers: ["dhanno", "dhanno ghodi", "chal dhanno"]
  },
  {
    category: "🎬 Bollywood Blockbusters & Action",
    question: "In Sholay, what was the name of Thakur Baldev Singh's village where Gabbar Singh terrorized the people?",
    correctAnswer: "Ramgarh",
    acceptableAnswers: ["ramgarh", "ramgadh"]
  },
  {
    category: "🎬 Bollywood Blockbusters & Action",
    question: "In Sholay, who played the legendary dacoit Gabbar Singh who uttered 'Kitne aadmi the'?",
    correctAnswer: "Amjad Khan",
    acceptableAnswers: ["amjad khan", "amjad", "gabbar"]
  },
  {
    category: "🎬 Bollywood Blockbusters & Action",
    question: "In Dilwale Dulhania Le Jayenge (DDLJ), what European country do Raj and Simran travel through when they fall in love?",
    correctAnswer: "Switzerland",
    acceptableAnswers: ["switzerland", "swiss", "europe"]
  },
  {
    category: "🎬 Bollywood Blockbusters & Action",
    question: "In Lagaan, what game do Bhuvan and the villagers of Champaner have to win to get their taxes waived for 3 years?",
    correctAnswer: "Cricket",
    acceptableAnswers: ["cricket", "cricket match"]
  },
  {
    category: "🎬 Bollywood Blockbusters & Action",
    question: "In Dangal, which real-life Indian wrestling coach does Aamir Khan portray?",
    correctAnswer: "Mahavir Singh Phogat",
    acceptableAnswers: ["mahavir singh phogat", "mahavir phogat", "phogat"]
  },
  {
    category: "🎬 Bollywood Blockbusters & Action",
    question: "In Chak De! India, what was Kabir Khan's (Shah Rukh Khan) famous motivational speech duration before the final match?",
    correctAnswer: "Sattar Minute (70 Minutes)",
    acceptableAnswers: ["sattar minute", "70 minute", "70 minutes", "sattar"]
  }
];

function normalizeKey(str) {
  if (!str) return '';
  return str.toLowerCase().replace(/[^a-z0-9]/g, '');
}

const existingKeys = new Set(currentQuestions.map(q => normalizeKey(q.question)));
let addedCount = 0;

for (const t of newTrivia) {
  const k = normalizeKey(t.question);
  if (!existingKeys.has(k)) {
    existingKeys.add(k);
    currentQuestions.push({
      id: `q_new_${String(addedCount + 1).padStart(4, '0')}`,
      category: t.category,
      question: t.question,
      correctAnswer: t.correctAnswer,
      acceptableAnswers: t.acceptableAnswers
    });
    addedCount++;
  }
}

console.log(`Added ${addedCount} brand new curated trivia questions!`);
console.log(`Total questions in bank: ${currentQuestions.length}`);

// Write JSON and JS
const rawPath = path.join(__dirname, 'data', 'questions.json');
const jsPath = path.join(__dirname, 'data', 'questions.js');

fs.writeFileSync(rawPath, JSON.stringify(currentQuestions, null, 2), 'utf8');
fs.writeFileSync(jsPath, `// Fun Guessing - Clean, Deduplicated Question Bank (${currentQuestions.length} Unique Questions)\nconst questions = ${JSON.stringify(currentQuestions, null, 2)};\n\nmodule.exports = questions;\n`, 'utf8');

console.log(`Updated ${rawPath} and ${jsPath}`);
