// Fun Guessing - Clean, Deduplicated Question Bank (1397 Unique Questions)
const questions = [
  {
    "id": "audio_q_00001",
    "category": "🎙️ KBC & Amitabh Bachchan",
    "question": "Listen to the booming announcement! Which legendary KBC host famously roars \"Saat Crore!\"?",
    "audioFile": "/audio/7_crore_kbc.mp3",
    "correctAnswer": "Amitabh Bachchan",
    "acceptableAnswers": [
      "amitabh bachchan",
      "amitabh",
      "big b",
      "bachchan",
      "shahenshah",
      "kbc host"
    ]
  },
  {
    "id": "audio_q_00002",
    "category": "🎙️ KBC & Amitabh Bachchan",
    "question": "Audio Clue: Which legendary KBC host famously roars \"Saat Crore!\"?",
    "audioFile": "/audio/7_crore_kbc.mp3",
    "correctAnswer": "Amitabh Bachchan",
    "acceptableAnswers": [
      "amitabh bachchan",
      "amitabh",
      "big b",
      "bachchan",
      "shahenshah",
      "kbc host"
    ]
  },
  {
    "id": "audio_q_00003",
    "category": "🎙️ KBC & Amitabh Bachchan",
    "question": "Listen to the audio! On Kaun Banega Crorepati, what huge winning amount does Amitabh Bachchan announce?",
    "audioFile": "/audio/7_crore_kbc.mp3",
    "correctAnswer": "7 Crore",
    "acceptableAnswers": [
      "7 crore",
      "saat crore",
      "seven crore",
      "7 cr",
      "70000000",
      "70 lakh"
    ]
  },
  {
    "id": "audio_q_00004",
    "category": "🎙️ KBC & Amitabh Bachchan",
    "question": "Audio Clue: On Kaun Banega Crorepati, what huge winning amount does Amitabh Bachchan announce?",
    "audioFile": "/audio/7_crore_kbc.mp3",
    "correctAnswer": "7 Crore",
    "acceptableAnswers": [
      "7 crore",
      "saat crore",
      "seven crore",
      "7 cr",
      "70000000",
      "70 lakh"
    ]
  },
  {
    "id": "audio_q_00005",
    "category": "🎙️ KBC & Amitabh Bachchan",
    "question": "Listen to this dramatic opening music! Name the legendary Indian quiz reality show hosted by Amitabh Bachchan on Sony TV!",
    "audioFile": "/audio/kbc_intro.mp3",
    "correctAnswer": "Kaun Banega Crorepati (KBC)",
    "acceptableAnswers": [
      "kaun banega crorepati",
      "kbc",
      "kaun banega crorepati (kbc)"
    ]
  },
  {
    "id": "audio_q_00006",
    "category": "🎙️ KBC & Amitabh Bachchan",
    "question": "Audio Clue: Name the legendary Indian quiz reality show hosted by Amitabh Bachchan on Sony TV!",
    "audioFile": "/audio/kbc_intro.mp3",
    "correctAnswer": "Kaun Banega Crorepati (KBC)",
    "acceptableAnswers": [
      "kaun banega crorepati",
      "kbc",
      "kaun banega crorepati (kbc)"
    ]
  },
  {
    "id": "audio_q_00007",
    "category": "🎙️ KBC & Amitabh Bachchan",
    "question": "Listen to the tense clock-ticking sound effect! What is the countdown timer tone on Kaun Banega Crorepati?",
    "audioFile": "/audio/kbc_question.mp3",
    "correctAnswer": "KBC Timer (Tiktiki)",
    "acceptableAnswers": [
      "kbc timer",
      "tiktiki",
      "clock",
      "timer",
      "kbc",
      "tick tick",
      "tiktiki ji"
    ]
  },
  {
    "id": "audio_q_00008",
    "category": "🎙️ KBC & Amitabh Bachchan",
    "question": "Audio Clue: What is the countdown timer tone on Kaun Banega Crorepati?",
    "audioFile": "/audio/kbc_question.mp3",
    "correctAnswer": "KBC Timer (Tiktiki)",
    "acceptableAnswers": [
      "kbc timer",
      "tiktiki",
      "clock",
      "timer",
      "kbc",
      "tick tick",
      "tiktiki ji"
    ]
  },
  {
    "id": "audio_q_00009",
    "category": "🎙️ KBC & Amitabh Bachchan",
    "question": "Listen to this triumphant fanfare sound! On Kaun Banega Crorepati, what does this chime indicate?",
    "audioFile": "/audio/kbc_right_answer.mp3",
    "correctAnswer": "Correct Answer (Sahi Jawab)",
    "acceptableAnswers": [
      "correct answer",
      "sahi jawab",
      "right answer",
      "correct",
      "right",
      "sahi",
      "lock"
    ]
  },
  {
    "id": "audio_q_00010",
    "category": "🎙️ KBC & Amitabh Bachchan",
    "question": "Audio Clue: On Kaun Banega Crorepati, what does this chime indicate?",
    "audioFile": "/audio/kbc_right_answer.mp3",
    "correctAnswer": "Correct Answer (Sahi Jawab)",
    "acceptableAnswers": [
      "correct answer",
      "sahi jawab",
      "right answer",
      "correct",
      "right",
      "sahi",
      "lock"
    ]
  },
  {
    "id": "audio_q_00011",
    "category": "🎙️ KBC & Amitabh Bachchan",
    "question": "Listen to the deep baritone introduction! \"Main Amitabh Bachchan bol raha hoon\" - Name this Shahenshah of Bollywood!",
    "audioFile": "/audio/amitabh_main_amitabh.mp3",
    "correctAnswer": "Amitabh Bachchan",
    "acceptableAnswers": [
      "amitabh bachchan",
      "amitabh",
      "big b",
      "bachchan",
      "shahenshah"
    ]
  },
  {
    "id": "audio_q_00012",
    "category": "🎙️ KBC & Amitabh Bachchan",
    "question": "Audio Clue: \"Main Amitabh Bachchan bol raha hoon\" - Name this Shahenshah of Bollywood!",
    "audioFile": "/audio/amitabh_main_amitabh.mp3",
    "correctAnswer": "Amitabh Bachchan",
    "acceptableAnswers": [
      "amitabh bachchan",
      "amitabh",
      "big b",
      "bachchan",
      "shahenshah"
    ]
  },
  {
    "id": "audio_q_00013",
    "category": "🎙️ KBC & Amitabh Bachchan",
    "question": "Listen to the intense angry dialogue delivery! Name the legendary Bollywood \"Angry Young Man\" speaking here!",
    "audioFile": "/audio/angry_amitabh.mp3",
    "correctAnswer": "Amitabh Bachchan",
    "acceptableAnswers": [
      "amitabh bachchan",
      "amitabh",
      "big b",
      "bachchan",
      "angry young man"
    ]
  },
  {
    "id": "audio_q_00014",
    "category": "🎙️ KBC & Amitabh Bachchan",
    "question": "Audio Clue: Name the legendary Bollywood \"Angry Young Man\" speaking here!",
    "audioFile": "/audio/angry_amitabh.mp3",
    "correctAnswer": "Amitabh Bachchan",
    "acceptableAnswers": [
      "amitabh bachchan",
      "amitabh",
      "big b",
      "bachchan",
      "angry young man"
    ]
  },
  {
    "id": "audio_q_00015",
    "category": "🎙️ KBC & Amitabh Bachchan",
    "question": "Listen to this catchy quiz theme! Which iconic reality show asks questions from contestants across India?",
    "audioFile": "/audio/kyun_bane_crorepati.mp3",
    "correctAnswer": "Kaun Banega Crorepati",
    "acceptableAnswers": [
      "kaun banega crorepati",
      "kbc",
      "crorepati"
    ]
  },
  {
    "id": "audio_q_00016",
    "category": "🎙️ KBC & Amitabh Bachchan",
    "question": "Audio Clue: Which iconic reality show asks questions from contestants across India?",
    "audioFile": "/audio/kyun_bane_crorepati.mp3",
    "correctAnswer": "Kaun Banega Crorepati",
    "acceptableAnswers": [
      "kaun banega crorepati",
      "kbc",
      "crorepati"
    ]
  },
  {
    "id": "audio_q_00017",
    "category": "🎬 Hera Pheri Comedy Audio",
    "question": "Listen to the legendary scheme! In Phir Hera Pheri, who promises to make \"25 din mein paisa double\"?",
    "audioFile": "/audio/akshay_paisa_double.mp3",
    "correctAnswer": "Raju (Akshay Kumar)",
    "acceptableAnswers": [
      "raju",
      "akshay kumar",
      "akshay",
      "raju akshay",
      "raju bhai"
    ]
  },
  {
    "id": "audio_q_00018",
    "category": "🎬 Hera Pheri Comedy Audio",
    "question": "Audio Clue: In Phir Hera Pheri, who promises to make \"25 din mein paisa double\"?",
    "audioFile": "/audio/akshay_paisa_double.mp3",
    "correctAnswer": "Raju (Akshay Kumar)",
    "acceptableAnswers": [
      "raju",
      "akshay kumar",
      "akshay",
      "raju akshay",
      "raju bhai"
    ]
  },
  {
    "id": "audio_q_00019",
    "category": "🎬 Hera Pheri Comedy Audio",
    "question": "Listen to the audio! In Phir Hera Pheri, how many days does Raju claim it will take to double the investment money?",
    "audioFile": "/audio/akshay_paisa_double.mp3",
    "correctAnswer": "25 Days (Paisa Double)",
    "acceptableAnswers": [
      "25",
      "25 days",
      "25 din",
      "pachees",
      "twenty five"
    ]
  },
  {
    "id": "audio_q_00020",
    "category": "🎬 Hera Pheri Comedy Audio",
    "question": "Audio Clue: In Phir Hera Pheri, how many days does Raju claim it will take to double the investment money?",
    "audioFile": "/audio/akshay_paisa_double.mp3",
    "correctAnswer": "25 Days (Paisa Double)",
    "acceptableAnswers": [
      "25",
      "25 days",
      "25 din",
      "pachees",
      "twenty five"
    ]
  },
  {
    "id": "audio_q_00021",
    "category": "🎬 Hera Pheri Comedy Audio",
    "question": "Listen to this iconic comedy background score! Name the legendary comedy film starring Baburao, Raju, and Shyam!",
    "audioFile": "/audio/baburao_comedy_bgm.mp3",
    "correctAnswer": "Hera Pheri",
    "acceptableAnswers": [
      "hera pheri",
      "phir hera pheri",
      "herapheri",
      "babu bhaiya"
    ]
  },
  {
    "id": "audio_q_00022",
    "category": "🎬 Hera Pheri Comedy Audio",
    "question": "Audio Clue: Name the legendary comedy film starring Baburao, Raju, and Shyam!",
    "audioFile": "/audio/baburao_comedy_bgm.mp3",
    "correctAnswer": "Hera Pheri",
    "acceptableAnswers": [
      "hera pheri",
      "phir hera pheri",
      "herapheri",
      "babu bhaiya"
    ]
  },
  {
    "id": "audio_q_00023",
    "category": "🎬 Hera Pheri Comedy Audio",
    "question": "Listen to this energetic shout! \"Jai Maharashtra!\" - Name the Star Garage landlord who shouts this!",
    "audioFile": "/audio/babu_bhaiya_shout.mp3",
    "correctAnswer": "Baburao Ganpatrao Apte",
    "acceptableAnswers": [
      "baburao",
      "babu bhaiya",
      "baburao apte",
      "baburao ganpatrao apte",
      "paresh rawal"
    ]
  },
  {
    "id": "audio_q_00024",
    "category": "🎬 Hera Pheri Comedy Audio",
    "question": "Audio Clue: \"Jai Maharashtra!\" - Name the Star Garage landlord who shouts this!",
    "audioFile": "/audio/babu_bhaiya_shout.mp3",
    "correctAnswer": "Baburao Ganpatrao Apte",
    "acceptableAnswers": [
      "baburao",
      "babu bhaiya",
      "baburao apte",
      "baburao ganpatrao apte",
      "paresh rawal"
    ]
  },
  {
    "id": "audio_q_00025",
    "category": "🎬 Hera Pheri Comedy Audio",
    "question": "Listen to the classic dialogue! \"Abhi maja aayega na bhidu\" - Name the cult Bollywood comedy movie!",
    "audioFile": "/audio/hera_pheri_maja_aayega.mp3",
    "correctAnswer": "Phir Hera Pheri",
    "acceptableAnswers": [
      "phir hera pheri",
      "hera pheri",
      "herapheri",
      "phir herapheri"
    ]
  },
  {
    "id": "audio_q_00026",
    "category": "🎬 Hera Pheri Comedy Audio",
    "question": "Audio Clue: \"Abhi maja aayega na bhidu\" - Name the cult Bollywood comedy movie!",
    "audioFile": "/audio/hera_pheri_maja_aayega.mp3",
    "correctAnswer": "Phir Hera Pheri",
    "acceptableAnswers": [
      "phir hera pheri",
      "hera pheri",
      "herapheri",
      "phir herapheri"
    ]
  },
  {
    "id": "audio_q_00027",
    "category": "🎬 Hera Pheri Comedy Audio",
    "question": "Listen to the iconic dialogue! \"Kya gunda banega re tu!\" - Name the character played by Paresh Rawal who says this!",
    "audioFile": "/audio/kya_gunda_banega_re_tu.mp3",
    "correctAnswer": "Baburao Ganpatrao Apte",
    "acceptableAnswers": [
      "baburao",
      "babu bhaiya",
      "baburao apte",
      "paresh rawal",
      "baburao ganpatrao apte"
    ]
  },
  {
    "id": "audio_q_00028",
    "category": "🎬 Hera Pheri Comedy Audio",
    "question": "Audio Clue: \"Kya gunda banega re tu!\" - Name the character played by Paresh Rawal who says this!",
    "audioFile": "/audio/kya_gunda_banega_re_tu.mp3",
    "correctAnswer": "Baburao Ganpatrao Apte",
    "acceptableAnswers": [
      "baburao",
      "babu bhaiya",
      "baburao apte",
      "paresh rawal",
      "baburao ganpatrao apte"
    ]
  },
  {
    "id": "audio_q_00029",
    "category": "🎬 Hera Pheri Comedy Audio",
    "question": "Listen to the dialogue! In Hera Pheri, who scolds Raju and Shyam with \"Kya gunda banega re tu\"?",
    "audioFile": "/audio/kya_gunda_banega_re_tu.mp3",
    "correctAnswer": "Baburao (Paresh Rawal)",
    "acceptableAnswers": [
      "baburao",
      "babu bhaiya",
      "paresh rawal",
      "baburao apte"
    ]
  },
  {
    "id": "audio_q_00030",
    "category": "🎬 Hera Pheri Comedy Audio",
    "question": "Audio Clue: In Hera Pheri, who scolds Raju and Shyam with \"Kya gunda banega re tu\"?",
    "audioFile": "/audio/kya_gunda_banega_re_tu.mp3",
    "correctAnswer": "Baburao (Paresh Rawal)",
    "acceptableAnswers": [
      "baburao",
      "babu bhaiya",
      "paresh rawal",
      "baburao apte"
    ]
  },
  {
    "id": "audio_q_00031",
    "category": "🎬 Welcome Comedy Audio",
    "question": "Listen to the audio! In the comedy film Welcome, who shouts \"Miracle! Miracle!\" after seeing the painter?",
    "audioFile": "/audio/akshay_miracle.mp3",
    "correctAnswer": "Akshay Kumar (Welcome)",
    "acceptableAnswers": [
      "akshay kumar",
      "akshay",
      "rajiv",
      "welcome"
    ]
  },
  {
    "id": "audio_q_00032",
    "category": "🎬 Welcome Comedy Audio",
    "question": "Audio Clue: In the comedy film Welcome, who shouts \"Miracle! Miracle!\" after seeing the painter?",
    "audioFile": "/audio/akshay_miracle.mp3",
    "correctAnswer": "Akshay Kumar (Welcome)",
    "acceptableAnswers": [
      "akshay kumar",
      "akshay",
      "rajiv",
      "welcome"
    ]
  },
  {
    "id": "audio_q_00033",
    "category": "🎬 Welcome Comedy Audio",
    "question": "Listen to the voice and laugh! \"Control Uday Control\" - Name the veteran Bollywood actor speaking!",
    "audioFile": "/audio/nana_patekar_laugh.mp3",
    "correctAnswer": "Nana Patekar",
    "acceptableAnswers": [
      "nana patekar",
      "nana",
      "uday shetty",
      "uday"
    ]
  },
  {
    "id": "audio_q_00034",
    "category": "🎬 Welcome Comedy Audio",
    "question": "Audio Clue: \"Control Uday Control\" - Name the veteran Bollywood actor speaking!",
    "audioFile": "/audio/nana_patekar_laugh.mp3",
    "correctAnswer": "Nana Patekar",
    "acceptableAnswers": [
      "nana patekar",
      "nana",
      "uday shetty",
      "uday"
    ]
  },
  {
    "id": "audio_q_00035",
    "category": "🎬 Welcome Comedy Audio",
    "question": "Listen to the hilarious dialogue! In Welcome, which gangster character explains his fake leg hockey story?",
    "audioFile": "/audio/uday_shetty_philosophy.mp3",
    "correctAnswer": "Uday Shetty (Nana Patekar)",
    "acceptableAnswers": [
      "uday shetty",
      "nana patekar",
      "uday",
      "nana"
    ]
  },
  {
    "id": "audio_q_00036",
    "category": "🎬 Welcome Comedy Audio",
    "question": "Audio Clue: In Welcome, which gangster character explains his fake leg hockey story?",
    "audioFile": "/audio/uday_shetty_philosophy.mp3",
    "correctAnswer": "Uday Shetty (Nana Patekar)",
    "acceptableAnswers": [
      "uday shetty",
      "nana patekar",
      "uday",
      "nana"
    ]
  },
  {
    "id": "audio_q_00037",
    "category": "🎬 Welcome Comedy Audio",
    "question": "Listen to this unique villainous laugh! Which painter gangster from Welcome, played by Anil Kapoor, is laughing?",
    "audioFile": "/audio/majnu_bhai_laugh.mp3",
    "correctAnswer": "Majnu Bhai (Anil Kapoor)",
    "acceptableAnswers": [
      "majnu bhai",
      "anil kapoor",
      "majnu",
      "sagar"
    ]
  },
  {
    "id": "audio_q_00038",
    "category": "🎬 Welcome Comedy Audio",
    "question": "Audio Clue: Which painter gangster from Welcome, played by Anil Kapoor, is laughing?",
    "audioFile": "/audio/majnu_bhai_laugh.mp3",
    "correctAnswer": "Majnu Bhai (Anil Kapoor)",
    "acceptableAnswers": [
      "majnu bhai",
      "anil kapoor",
      "majnu",
      "sagar"
    ]
  },
  {
    "id": "audio_q_00039",
    "category": "🎬 Welcome Comedy Audio",
    "question": "Listen to this catchy comic theme! Name the 2007 comedy blockbuster directed by Anees Bazmee featuring Uday and Majnu Bhai!",
    "audioFile": "/audio/welcome_comedy_theme.mp3",
    "correctAnswer": "Welcome",
    "acceptableAnswers": [
      "welcome",
      "welcome movie",
      "welcome 2007"
    ]
  },
  {
    "id": "audio_q_00040",
    "category": "🎬 Welcome Comedy Audio",
    "question": "Audio Clue: Name the 2007 comedy blockbuster directed by Anees Bazmee featuring Uday and Majnu Bhai!",
    "audioFile": "/audio/welcome_comedy_theme.mp3",
    "correctAnswer": "Welcome",
    "acceptableAnswers": [
      "welcome",
      "welcome movie",
      "welcome 2007"
    ]
  },
  {
    "id": "audio_q_00041",
    "category": "🎬 Bollywood Comedy Audio",
    "question": "Listen to this iconic dialogue! \"Raha nahi jaata, tadap hi aisi hai\" - Name the comic actor speaking!",
    "audioFile": "/audio/raha_nahi_jaata_rajpal_yadav.mp3",
    "correctAnswer": "Rajpal Yadav",
    "acceptableAnswers": [
      "rajpal yadav",
      "rajpal",
      "bandya",
      "chup chup ke"
    ]
  },
  {
    "id": "audio_q_00042",
    "category": "🎬 Bollywood Comedy Audio",
    "question": "Audio Clue: \"Raha nahi jaata, tadap hi aisi hai\" - Name the comic actor speaking!",
    "audioFile": "/audio/raha_nahi_jaata_rajpal_yadav.mp3",
    "correctAnswer": "Rajpal Yadav",
    "acceptableAnswers": [
      "rajpal yadav",
      "rajpal",
      "bandya",
      "chup chup ke"
    ]
  },
  {
    "id": "audio_q_00043",
    "category": "🎬 Bollywood Comedy Audio",
    "question": "Listen to the voice! In Priyadarshan's Chup Chup Ke, which character played by Rajpal Yadav says \"Aisi tadap hi aisi hai\"?",
    "audioFile": "/audio/raha_nahi_jaata_rajpal_yadav.mp3",
    "correctAnswer": "Bandya (Rajpal Yadav)",
    "acceptableAnswers": [
      "bandya",
      "rajpal yadav",
      "rajpal",
      "chup chup ke"
    ]
  },
  {
    "id": "audio_q_00044",
    "category": "🎬 Bollywood Comedy Audio",
    "question": "Audio Clue: In Priyadarshan's Chup Chup Ke, which character played by Rajpal Yadav says \"Aisi tadap hi aisi hai\"?",
    "audioFile": "/audio/raha_nahi_jaata_rajpal_yadav.mp3",
    "correctAnswer": "Bandya (Rajpal Yadav)",
    "acceptableAnswers": [
      "bandya",
      "rajpal yadav",
      "rajpal",
      "chup chup ke"
    ]
  },
  {
    "id": "audio_q_00045",
    "category": "🎬 Bollywood Comedy Audio",
    "question": "Listen to this hilarious shock scream! Name the Bollywood comic actor famous for screaming in confusion and panic!",
    "audioFile": "/audio/rajpal_shock_meme.mp3",
    "correctAnswer": "Rajpal Yadav",
    "acceptableAnswers": [
      "rajpal yadav",
      "rajpal",
      "bandya"
    ]
  },
  {
    "id": "audio_q_00046",
    "category": "🎬 Bollywood Comedy Audio",
    "question": "Audio Clue: Name the Bollywood comic actor famous for screaming in confusion and panic!",
    "audioFile": "/audio/rajpal_shock_meme.mp3",
    "correctAnswer": "Rajpal Yadav",
    "acceptableAnswers": [
      "rajpal yadav",
      "rajpal",
      "bandya"
    ]
  },
  {
    "id": "audio_q_00047",
    "category": "🎬 Bollywood Comedy Audio",
    "question": "Listen to this funny voice sound! Name the mute character played by Tusshar Kapoor in the Golmaal series!",
    "audioFile": "/audio/golmaal_lucky_sound.mp3",
    "correctAnswer": "Lucky (Tusshar Kapoor)",
    "acceptableAnswers": [
      "lucky",
      "tusshar kapoor",
      "tushar kapoor",
      "golmaal lucky",
      "golmaal"
    ]
  },
  {
    "id": "audio_q_00048",
    "category": "🎬 Bollywood Comedy Audio",
    "question": "Audio Clue: Name the mute character played by Tusshar Kapoor in the Golmaal series!",
    "audioFile": "/audio/golmaal_lucky_sound.mp3",
    "correctAnswer": "Lucky (Tusshar Kapoor)",
    "acceptableAnswers": [
      "lucky",
      "tusshar kapoor",
      "tushar kapoor",
      "golmaal lucky",
      "golmaal"
    ]
  },
  {
    "id": "audio_q_00049",
    "category": "🎬 Bollywood Comedy Audio",
    "question": "Listen to this mute comedy sound! Name the Rohit Shetty comedy franchise starring Ajay Devgn, Arshad Warsi, and Tusshar Kapoor!",
    "audioFile": "/audio/golmaal_lucky_sound.mp3",
    "correctAnswer": "Golmaal",
    "acceptableAnswers": [
      "golmaal",
      "golmaal returns",
      "golmaal 3",
      "golmaal again"
    ]
  },
  {
    "id": "audio_q_00050",
    "category": "🎬 Bollywood Comedy Audio",
    "question": "Audio Clue: Name the Rohit Shetty comedy franchise starring Ajay Devgn, Arshad Warsi, and Tusshar Kapoor!",
    "audioFile": "/audio/golmaal_lucky_sound.mp3",
    "correctAnswer": "Golmaal",
    "acceptableAnswers": [
      "golmaal",
      "golmaal returns",
      "golmaal 3",
      "golmaal again"
    ]
  },
  {
    "id": "audio_q_00051",
    "category": "🎬 Bollywood Blockbuster Audio",
    "question": "Listen to this musical whistle tune! Name the 2009 blockbuster movie featuring Rancho, Farhan, and Raju!",
    "audioFile": "/audio/rancho_3_idiots.mp3",
    "correctAnswer": "3 Idiots",
    "acceptableAnswers": [
      "3 idiots",
      "three idiots",
      "3 idiot",
      "rancho"
    ]
  },
  {
    "id": "audio_q_00052",
    "category": "🎬 Bollywood Blockbuster Audio",
    "question": "Audio Clue: Name the 2009 blockbuster movie featuring Rancho, Farhan, and Raju!",
    "audioFile": "/audio/rancho_3_idiots.mp3",
    "correctAnswer": "3 Idiots",
    "acceptableAnswers": [
      "3 idiots",
      "three idiots",
      "3 idiot",
      "rancho"
    ]
  },
  {
    "id": "audio_q_00053",
    "category": "🎬 Bollywood Blockbuster Audio",
    "question": "Listen to the melody! What is the three-word optimistic catchphrase sung by Aamir Khan in 3 Idiots?",
    "audioFile": "/audio/rancho_3_idiots.mp3",
    "correctAnswer": "All Izz Well",
    "acceptableAnswers": [
      "all is well",
      "all izz well",
      "aal izz well",
      "aal is well"
    ]
  },
  {
    "id": "audio_q_00054",
    "category": "🎬 Bollywood Blockbuster Audio",
    "question": "Audio Clue: What is the three-word optimistic catchphrase sung by Aamir Khan in 3 Idiots?",
    "audioFile": "/audio/rancho_3_idiots.mp3",
    "correctAnswer": "All Izz Well",
    "acceptableAnswers": [
      "all is well",
      "all izz well",
      "aal izz well",
      "aal is well"
    ]
  },
  {
    "id": "audio_q_00055",
    "category": "🎬 Sholay & Gabbar Singh",
    "question": "Listen to this chilling line! \"Jo dar gaya... samjho mar gaya!\" - Name the legendary dacoit villain from Sholay!",
    "audioFile": "/audio/jo_dar_gaya_samjho_mar_gaya.mp3",
    "correctAnswer": "Gabbar Singh (Sholay)",
    "acceptableAnswers": [
      "gabbar singh",
      "gabbar",
      "amjad khan",
      "sholay"
    ]
  },
  {
    "id": "audio_q_00056",
    "category": "🎬 Sholay & Gabbar Singh",
    "question": "Audio Clue: \"Jo dar gaya... samjho mar gaya!\" - Name the legendary dacoit villain from Sholay!",
    "audioFile": "/audio/jo_dar_gaya_samjho_mar_gaya.mp3",
    "correctAnswer": "Gabbar Singh (Sholay)",
    "acceptableAnswers": [
      "gabbar singh",
      "gabbar",
      "amjad khan",
      "sholay"
    ]
  },
  {
    "id": "audio_q_00057",
    "category": "🎬 Sholay & Gabbar Singh",
    "question": "Listen to this famous dialogue! Which 1975 Ramesh Sippy classic film features the dacoit Gabbar Singh?",
    "audioFile": "/audio/jo_dar_gaya_samjho_mar_gaya.mp3",
    "correctAnswer": "Sholay",
    "acceptableAnswers": [
      "sholay",
      "sholay 1975"
    ]
  },
  {
    "id": "audio_q_00058",
    "category": "🎬 Sholay & Gabbar Singh",
    "question": "Audio Clue: Which 1975 Ramesh Sippy classic film features the dacoit Gabbar Singh?",
    "audioFile": "/audio/jo_dar_gaya_samjho_mar_gaya.mp3",
    "correctAnswer": "Sholay",
    "acceptableAnswers": [
      "sholay",
      "sholay 1975"
    ]
  },
  {
    "id": "audio_q_00059",
    "category": "🎬 Sholay & Gabbar Singh",
    "question": "Listen to this eerie flute and whistle suspense tune! Which classic Bollywood dacoit drama uses this background score?",
    "audioFile": "/audio/gabbar_suspense.mp3",
    "correctAnswer": "Sholay",
    "acceptableAnswers": [
      "sholay",
      "gabbar singh",
      "gabbar"
    ]
  },
  {
    "id": "audio_q_00060",
    "category": "🎬 Sholay & Gabbar Singh",
    "question": "Audio Clue: Which classic Bollywood dacoit drama uses this background score?",
    "audioFile": "/audio/gabbar_suspense.mp3",
    "correctAnswer": "Sholay",
    "acceptableAnswers": [
      "sholay",
      "gabbar singh",
      "gabbar"
    ]
  },
  {
    "id": "audio_q_00061",
    "category": "🎬 Singham & Action Audio",
    "question": "Listen to the fierce roar! \"Aata majhi satakli\" - Name Ajay Devgn's ferocious cop character!",
    "audioFile": "/audio/aata_majhi_satakli.mp3",
    "correctAnswer": "Bajirao Singham",
    "acceptableAnswers": [
      "singham",
      "bajirao singham",
      "ajay devgn",
      "ajay devgan",
      "inspector singham"
    ]
  },
  {
    "id": "audio_q_00062",
    "category": "🎬 Singham & Action Audio",
    "question": "Audio Clue: \"Aata majhi satakli\" - Name Ajay Devgn's ferocious cop character!",
    "audioFile": "/audio/aata_majhi_satakli.mp3",
    "correctAnswer": "Bajirao Singham",
    "acceptableAnswers": [
      "singham",
      "bajirao singham",
      "ajay devgn",
      "ajay devgan",
      "inspector singham"
    ]
  },
  {
    "id": "audio_q_00063",
    "category": "🎬 Singham & Action Audio",
    "question": "Listen to the roaring brass action theme! Name the blockbuster cop franchise directed by Rohit Shetty!",
    "audioFile": "/audio/singham_theme.mp3",
    "correctAnswer": "Singham",
    "acceptableAnswers": [
      "singham",
      "singham returns",
      "singham again",
      "rohit shetty cop universe"
    ]
  },
  {
    "id": "audio_q_00064",
    "category": "🎬 Singham & Action Audio",
    "question": "Audio Clue: Name the blockbuster cop franchise directed by Rohit Shetty!",
    "audioFile": "/audio/singham_theme.mp3",
    "correctAnswer": "Singham",
    "acceptableAnswers": [
      "singham",
      "singham returns",
      "singham again",
      "rohit shetty cop universe"
    ]
  },
  {
    "id": "audio_q_00065",
    "category": "🎙️ Shah Rukh Khan (King Khan)",
    "question": "Listen to this sinister villain laugh! Name the Badshah of Bollywood who played the titular criminal in Don (2006)!",
    "audioFile": "/audio/shahrukh_khan_laugh_in_don.mp3",
    "correctAnswer": "Shah Rukh Khan (SRK)",
    "acceptableAnswers": [
      "shah rukh khan",
      "shahrukh khan",
      "srk",
      "king khan",
      "don"
    ]
  },
  {
    "id": "audio_q_00066",
    "category": "🎙️ Shah Rukh Khan (King Khan)",
    "question": "Audio Clue: Name the Badshah of Bollywood who played the titular criminal in Don (2006)!",
    "audioFile": "/audio/shahrukh_khan_laugh_in_don.mp3",
    "correctAnswer": "Shah Rukh Khan (SRK)",
    "acceptableAnswers": [
      "shah rukh khan",
      "shahrukh khan",
      "srk",
      "king khan",
      "don"
    ]
  },
  {
    "id": "audio_q_00067",
    "category": "🎙️ Shah Rukh Khan (King Khan)",
    "question": "Listen to the voice and tone! Name the romantic megastar famously known as the King of Bollywood!",
    "audioFile": "/audio/srk_voice.mp3",
    "correctAnswer": "Shah Rukh Khan (SRK)",
    "acceptableAnswers": [
      "shah rukh khan",
      "shahrukh khan",
      "srk",
      "king khan",
      "badshah"
    ]
  },
  {
    "id": "audio_q_00068",
    "category": "🎙️ Shah Rukh Khan (King Khan)",
    "question": "Audio Clue: Name the romantic megastar famously known as the King of Bollywood!",
    "audioFile": "/audio/srk_voice.mp3",
    "correctAnswer": "Shah Rukh Khan (SRK)",
    "acceptableAnswers": [
      "shah rukh khan",
      "shahrukh khan",
      "srk",
      "king khan",
      "badshah"
    ]
  },
  {
    "id": "audio_q_00069",
    "category": "🎙️ Shah Rukh Khan (King Khan)",
    "question": "Listen to the dialogue voice clip! Name the Bollywood icon who starred in DDLJ, Kuch Kuch Hota Hai, and Pathaan!",
    "audioFile": "/audio/shahrukh_khan_call.mp3",
    "correctAnswer": "Shah Rukh Khan (SRK)",
    "acceptableAnswers": [
      "shah rukh khan",
      "shahrukh khan",
      "srk",
      "king khan"
    ]
  },
  {
    "id": "audio_q_00070",
    "category": "🎙️ Shah Rukh Khan (King Khan)",
    "question": "Audio Clue: Name the Bollywood icon who starred in DDLJ, Kuch Kuch Hota Hai, and Pathaan!",
    "audioFile": "/audio/shahrukh_khan_call.mp3",
    "correctAnswer": "Shah Rukh Khan (SRK)",
    "acceptableAnswers": [
      "shah rukh khan",
      "shahrukh khan",
      "srk",
      "king khan"
    ]
  },
  {
    "id": "audio_q_00071",
    "category": "📺 CID & Indian Television",
    "question": "Listen to this legendary suspense theme! Name the longest-running Indian television investigative crime series!",
    "audioFile": "/audio/cid.mp3",
    "correctAnswer": "CID (Sony TV)",
    "acceptableAnswers": [
      "cid",
      "c.i.d.",
      "cid sony tv",
      "sony cid"
    ]
  },
  {
    "id": "audio_q_00072",
    "category": "📺 CID & Indian Television",
    "question": "Audio Clue: Name the longest-running Indian television investigative crime series!",
    "audioFile": "/audio/cid.mp3",
    "correctAnswer": "CID (Sony TV)",
    "acceptableAnswers": [
      "cid",
      "c.i.d.",
      "cid sony tv",
      "sony cid"
    ]
  },
  {
    "id": "audio_q_00073",
    "category": "📺 CID & Indian Television",
    "question": "Listen to the audio! \"Nahi nahi Salunke, yahan kuch toh gadbad hai!\" - Name the senior CID officer speaking!",
    "audioFile": "/audio/nahi_nahi_saluke_yaha_kuchh_to.mp3",
    "correctAnswer": "ACP Pradyuman",
    "acceptableAnswers": [
      "acp pradyuman",
      "acp pradhyuman",
      "pradyuman",
      "pradhyuman",
      "acp"
    ]
  },
  {
    "id": "audio_q_00074",
    "category": "📺 CID & Indian Television",
    "question": "Audio Clue: \"Nahi nahi Salunke, yahan kuch toh gadbad hai!\" - Name the senior CID officer speaking!",
    "audioFile": "/audio/nahi_nahi_saluke_yaha_kuchh_to.mp3",
    "correctAnswer": "ACP Pradyuman",
    "acceptableAnswers": [
      "acp pradyuman",
      "acp pradhyuman",
      "pradyuman",
      "pradhyuman",
      "acp"
    ]
  },
  {
    "id": "audio_q_00075",
    "category": "📺 CID & Indian Television",
    "question": "Listen to the dialogue! In CID, who famously delivers the line \"Isko toh phasi hogi!\" with his signature hand gesture?",
    "audioFile": "/audio/cid_acp_pradhuman_fasi.mp3",
    "correctAnswer": "ACP Pradyuman",
    "acceptableAnswers": [
      "acp pradyuman",
      "acp pradhyuman",
      "pradyuman",
      "pradhyuman",
      "acp",
      "shivaji satam"
    ]
  },
  {
    "id": "audio_q_00076",
    "category": "📺 CID & Indian Television",
    "question": "Audio Clue: In CID, who famously delivers the line \"Isko toh phasi hogi!\" with his signature hand gesture?",
    "audioFile": "/audio/cid_acp_pradhuman_fasi.mp3",
    "correctAnswer": "ACP Pradyuman",
    "acceptableAnswers": [
      "acp pradyuman",
      "acp pradhyuman",
      "pradyuman",
      "pradhyuman",
      "acp",
      "shivaji satam"
    ]
  },
  {
    "id": "audio_q_00077",
    "category": "👓 TMKOC Audio Voice",
    "question": "Listen to the audio! Which Gokuldham resident is greeting \"Happy Diwali\" in his trademark comical voice?",
    "audioFile": "/audio/tmkoc_jethalal_diwali.mp3",
    "correctAnswer": "Jethalal Gada",
    "acceptableAnswers": [
      "jethalal",
      "jethalal gada",
      "jetha",
      "jethabhai",
      "dilip joshi"
    ]
  },
  {
    "id": "audio_q_00078",
    "category": "👓 TMKOC Audio Voice",
    "question": "Audio Clue: Which Gokuldham resident is greeting \"Happy Diwali\" in his trademark comical voice?",
    "audioFile": "/audio/tmkoc_jethalal_diwali.mp3",
    "correctAnswer": "Jethalal Gada",
    "acceptableAnswers": [
      "jethalal",
      "jethalal gada",
      "jetha",
      "jethabhai",
      "dilip joshi"
    ]
  },
  {
    "id": "audio_q_00079",
    "category": "👓 TMKOC Audio Voice",
    "question": "Listen to the audio! In TMKOC, name the owner of Gada Electronics who is speaking in this festival clip!",
    "audioFile": "/audio/tmkoc_jethalal_diwali.mp3",
    "correctAnswer": "Jethalal Gada",
    "acceptableAnswers": [
      "jethalal",
      "jethalal gada",
      "jetha",
      "jethabhai"
    ]
  },
  {
    "id": "audio_q_00080",
    "category": "👓 TMKOC Audio Voice",
    "question": "Audio Clue: In TMKOC, name the owner of Gada Electronics who is speaking in this festival clip!",
    "audioFile": "/audio/tmkoc_jethalal_diwali.mp3",
    "correctAnswer": "Jethalal Gada",
    "acceptableAnswers": [
      "jethalal",
      "jethalal gada",
      "jetha",
      "jethabhai"
    ]
  },
  {
    "id": "audio_q_00081",
    "category": "👓 TMKOC Audio Voice",
    "question": "Listen to the strict lecture! Which Gokuldham elder is angrily disciplining his son Jethiya in TMKOC?",
    "audioFile": "/audio/champak_lal.mp3",
    "correctAnswer": "Champaklal Gada (Bapuji)",
    "acceptableAnswers": [
      "champaklal",
      "bapuji",
      "champak chacha",
      "champaklal gada",
      "dadaji",
      "champak"
    ]
  },
  {
    "id": "audio_q_00082",
    "category": "👓 TMKOC Audio Voice",
    "question": "Audio Clue: Which Gokuldham elder is angrily disciplining his son Jethiya in TMKOC?",
    "audioFile": "/audio/champak_lal.mp3",
    "correctAnswer": "Champaklal Gada (Bapuji)",
    "acceptableAnswers": [
      "champaklal",
      "bapuji",
      "champak chacha",
      "champaklal gada",
      "dadaji",
      "champak"
    ]
  },
  {
    "id": "audio_q_00083",
    "category": "👓 TMKOC Audio Voice",
    "question": "Listen to the voice! Name the father of Jethalal Gada from TMKOC who preaches moral values to the society!",
    "audioFile": "/audio/champak_lal.mp3",
    "correctAnswer": "Champaklal Gada (Bapuji)",
    "acceptableAnswers": [
      "champaklal",
      "bapuji",
      "champak chacha",
      "champaklal gada",
      "dadaji"
    ]
  },
  {
    "id": "audio_q_00084",
    "category": "👓 TMKOC Audio Voice",
    "question": "Audio Clue: Name the father of Jethalal Gada from TMKOC who preaches moral values to the society!",
    "audioFile": "/audio/champak_lal.mp3",
    "correctAnswer": "Champaklal Gada (Bapuji)",
    "acceptableAnswers": [
      "champaklal",
      "bapuji",
      "champak chacha",
      "champaklal gada",
      "dadaji"
    ]
  },
  {
    "id": "audio_q_00085",
    "category": "👓 TMKOC Audio Voice",
    "question": "Listen to the energetic dhol beats! Which Gokuldham lady famously breaks into Garba whenever excited?",
    "audioFile": "/audio/dayaben_hey_maa.mp3",
    "correctAnswer": "Dayaben Gada",
    "acceptableAnswers": [
      "daya",
      "dayaben",
      "dayaben gada",
      "daya bhabhi",
      "disha vakani"
    ]
  },
  {
    "id": "audio_q_00086",
    "category": "👓 TMKOC Audio Voice",
    "question": "Audio Clue: Which Gokuldham lady famously breaks into Garba whenever excited?",
    "audioFile": "/audio/dayaben_hey_maa.mp3",
    "correctAnswer": "Dayaben Gada",
    "acceptableAnswers": [
      "daya",
      "dayaben",
      "dayaben gada",
      "daya bhabhi",
      "disha vakani"
    ]
  },
  {
    "id": "audio_q_00087",
    "category": "👓 TMKOC Audio Voice",
    "question": "Listen to the audio! In TMKOC, who is the wife of Jethalal Gada known as the \"Garba Queen of Gokuldham\"?",
    "audioFile": "/audio/dayaben_hey_maa.mp3",
    "correctAnswer": "Dayaben Gada",
    "acceptableAnswers": [
      "daya",
      "dayaben",
      "dayaben gada",
      "daya bhabhi"
    ]
  },
  {
    "id": "audio_q_00088",
    "category": "👓 TMKOC Audio Voice",
    "question": "Audio Clue: In TMKOC, who is the wife of Jethalal Gada known as the \"Garba Queen of Gokuldham\"?",
    "audioFile": "/audio/dayaben_hey_maa.mp3",
    "correctAnswer": "Dayaben Gada",
    "acceptableAnswers": [
      "daya",
      "dayaben",
      "dayaben gada",
      "daya bhabhi"
    ]
  },
  {
    "id": "audio_q_00089",
    "category": "👓 TMKOC Audio Voice",
    "question": "Listen to the voice! In TMKOC, which scientist from Chennai lives in Gokuldham and is married to Babita Ji?",
    "audioFile": "/audio/iyer_tmkoc.mp3",
    "correctAnswer": "Krishnan Subramaniam Iyer",
    "acceptableAnswers": [
      "iyer",
      "krishnan iyer",
      "krishnan subramaniam iyer",
      "subramaniam iyer",
      "iyer bhai"
    ]
  },
  {
    "id": "audio_q_00090",
    "category": "👓 TMKOC Audio Voice",
    "question": "Audio Clue: In TMKOC, which scientist from Chennai lives in Gokuldham and is married to Babita Ji?",
    "audioFile": "/audio/iyer_tmkoc.mp3",
    "correctAnswer": "Krishnan Subramaniam Iyer",
    "acceptableAnswers": [
      "iyer",
      "krishnan iyer",
      "krishnan subramaniam iyer",
      "subramaniam iyer",
      "iyer bhai"
    ]
  },
  {
    "id": "audio_q_00091",
    "category": "👓 TMKOC Audio Voice",
    "question": "Listen to this dramatic trouble sound! Which Indian sitcom plays this stinger whenever Jethalal gets in a mess?",
    "audioFile": "/audio/game_over_tmkoc.mp3",
    "correctAnswer": "Taarak Mehta Ka Ooltah Chashmah",
    "acceptableAnswers": [
      "taarak mehta",
      "tmkoc",
      "taarak mehta ka ooltah chashmah",
      "tarak mehta"
    ]
  },
  {
    "id": "audio_q_00092",
    "category": "👓 TMKOC Audio Voice",
    "question": "Audio Clue: Which Indian sitcom plays this stinger whenever Jethalal gets in a mess?",
    "audioFile": "/audio/game_over_tmkoc.mp3",
    "correctAnswer": "Taarak Mehta Ka Ooltah Chashmah",
    "acceptableAnswers": [
      "taarak mehta",
      "tmkoc",
      "taarak mehta ka ooltah chashmah",
      "tarak mehta"
    ]
  },
  {
    "id": "audio_q_00093",
    "category": "🔥 Viral Indian Quotes",
    "question": "Listen to the viral political line! \"Khatam... Tata... Goodbye... Gaya!\" - Name the Indian politician speaking!",
    "audioFile": "/audio/khatam_tata_goodbye.mp3",
    "correctAnswer": "Rahul Gandhi",
    "acceptableAnswers": [
      "rahul gandhi",
      "rahul",
      "gandhi"
    ]
  },
  {
    "id": "audio_q_00094",
    "category": "🔥 Viral Indian Quotes",
    "question": "Audio Clue: \"Khatam... Tata... Goodbye... Gaya!\" - Name the Indian politician speaking!",
    "audioFile": "/audio/khatam_tata_goodbye.mp3",
    "correctAnswer": "Rahul Gandhi",
    "acceptableAnswers": [
      "rahul gandhi",
      "rahul",
      "gandhi"
    ]
  },
  {
    "id": "audio_q_00095",
    "category": "🔥 Viral Indian Quotes",
    "question": "Listen to the viral line! \"Wah kya scene hai!\" - Name the Prime Minister of India whose speech this clip is taken from!",
    "audioFile": "/audio/modi_ji_wah.mp3",
    "correctAnswer": "Narendra Modi",
    "acceptableAnswers": [
      "narendra modi",
      "modi",
      "pm modi",
      "narendra damodardas modi"
    ]
  },
  {
    "id": "audio_q_00096",
    "category": "🔥 Viral Indian Quotes",
    "question": "Audio Clue: \"Wah kya scene hai!\" - Name the Prime Minister of India whose speech this clip is taken from!",
    "audioFile": "/audio/modi_ji_wah.mp3",
    "correctAnswer": "Narendra Modi",
    "acceptableAnswers": [
      "narendra modi",
      "modi",
      "pm modi",
      "narendra damodardas modi"
    ]
  },
  {
    "id": "audio_q_00097",
    "category": "🔥 Viral Indian Quotes",
    "question": "Listen to the dialogue! \"Main jhukega nahi saala\" - Name the pan-India blockbuster movie starring Allu Arjun!",
    "audioFile": "/audio/pushpa_dialogue.mp3",
    "correctAnswer": "Pushpa (Allu Arjun)",
    "acceptableAnswers": [
      "pushpa",
      "pushpa the rise",
      "allu arjun",
      "pushparaj"
    ]
  },
  {
    "id": "audio_q_00098",
    "category": "🔥 Viral Indian Quotes",
    "question": "Audio Clue: \"Main jhukega nahi saala\" - Name the pan-India blockbuster movie starring Allu Arjun!",
    "audioFile": "/audio/pushpa_dialogue.mp3",
    "correctAnswer": "Pushpa (Allu Arjun)",
    "acceptableAnswers": [
      "pushpa",
      "pushpa the rise",
      "allu arjun",
      "pushparaj"
    ]
  },
  {
    "id": "audio_q_00099",
    "category": "🎬 Indian Blockbuster Audio",
    "question": "Listen to this royal coronation theme! Name the historic blockbuster directed by SS Rajamouli starring Prabhas!",
    "audioFile": "/audio/bahubali_theme.mp3",
    "correctAnswer": "Baahubali (Prabhas)",
    "acceptableAnswers": [
      "baahubali",
      "bahubali",
      "bahubali 2",
      "baahubali the beginning",
      "prabhas"
    ]
  },
  {
    "id": "audio_q_00100",
    "category": "🎬 Indian Blockbuster Audio",
    "question": "Audio Clue: Name the historic blockbuster directed by SS Rajamouli starring Prabhas!",
    "audioFile": "/audio/bahubali_theme.mp3",
    "correctAnswer": "Baahubali (Prabhas)",
    "acceptableAnswers": [
      "baahubali",
      "bahubali",
      "bahubali 2",
      "baahubali the beginning",
      "prabhas"
    ]
  },
  {
    "id": "audio_q_00101",
    "category": "🎬 Indian Blockbuster Audio",
    "question": "Listen to this heavy action mass theme! Name the KGF protagonist played by superstar Yash!",
    "audioFile": "/audio/kgf_rocky_theme.mp3",
    "correctAnswer": "Rocky Bhai (KGF)",
    "acceptableAnswers": [
      "rocky bhai",
      "kgf",
      "rocky",
      "yash",
      "kgf chapter 2"
    ]
  },
  {
    "id": "audio_q_00102",
    "category": "🎬 Indian Blockbuster Audio",
    "question": "Audio Clue: Name the KGF protagonist played by superstar Yash!",
    "audioFile": "/audio/kgf_rocky_theme.mp3",
    "correctAnswer": "Rocky Bhai (KGF)",
    "acceptableAnswers": [
      "rocky bhai",
      "kgf",
      "rocky",
      "yash",
      "kgf chapter 2"
    ]
  },
  {
    "id": "audio_q_00103",
    "category": "📺 Indian Television Audio",
    "question": "Listen to this comedy talk show title song! Name the weekly comedy show hosted by Kapil Sharma on Sony TV!",
    "audioFile": "/audio/kapil_sharma_intro_theme_song.mp3",
    "correctAnswer": "The Kapil Sharma Show",
    "acceptableAnswers": [
      "the kapil sharma show",
      "kapil sharma show",
      "kapil sharma",
      "tkss"
    ]
  },
  {
    "id": "audio_q_00104",
    "category": "📺 Indian Television Audio",
    "question": "Audio Clue: Name the weekly comedy show hosted by Kapil Sharma on Sony TV!",
    "audioFile": "/audio/kapil_sharma_intro_theme_song.mp3",
    "correctAnswer": "The Kapil Sharma Show",
    "acceptableAnswers": [
      "the kapil sharma show",
      "kapil sharma show",
      "kapil sharma",
      "tkss"
    ]
  },
  {
    "id": "audio_q_00105",
    "category": "🎵 Bollywood Music Audio",
    "question": "Listen to this spooky comedy tune! \"Hare Ram Hare Krishna\" - Name the Akshay Kumar horror-comedy blockbuster!",
    "audioFile": "/audio/song_bhool_bhulaiyaa.mp3",
    "correctAnswer": "Bhool Bhulaiyaa",
    "acceptableAnswers": [
      "bhool bhulaiyaa",
      "bhool bhulaiya",
      "bhul bhulaiya",
      "akshay kumar"
    ]
  },
  {
    "id": "audio_q_00106",
    "category": "🎵 Bollywood Music Audio",
    "question": "Audio Clue: \"Hare Ram Hare Krishna\" - Name the Akshay Kumar horror-comedy blockbuster!",
    "audioFile": "/audio/song_bhool_bhulaiyaa.mp3",
    "correctAnswer": "Bhool Bhulaiyaa",
    "acceptableAnswers": [
      "bhool bhulaiyaa",
      "bhool bhulaiya",
      "bhul bhulaiya",
      "akshay kumar"
    ]
  },
  {
    "id": "audio_q_00107",
    "category": "🎵 Bollywood Music Audio",
    "question": "Listen to this legendary train dance song composed by AR Rahman! Name the song from the movie Dil Se starring SRK!",
    "audioFile": "/audio/song_chaiyya_chaiyya.mp3",
    "correctAnswer": "Chaiyya Chaiyya",
    "acceptableAnswers": [
      "chaiyya chaiyya",
      "chhaiya chhaiya",
      "chal chaiyya chaiyya",
      "dil se"
    ]
  },
  {
    "id": "audio_q_00108",
    "category": "🎵 Bollywood Music Audio",
    "question": "Audio Clue: Name the song from the movie Dil Se starring SRK!",
    "audioFile": "/audio/song_chaiyya_chaiyya.mp3",
    "correctAnswer": "Chaiyya Chaiyya",
    "acceptableAnswers": [
      "chaiyya chaiyya",
      "chhaiya chhaiya",
      "chal chaiyya chaiyya",
      "dil se"
    ]
  },
  {
    "id": "audio_q_00109",
    "category": "🎵 Bollywood Music Audio",
    "question": "Listen to the romantic melody! Name this 2013 love anthem sung by Arijit Singh from Aashiqui 2!",
    "audioFile": "/audio/song_tum_hi_ho.mp3",
    "correctAnswer": "Tum Hi Ho (Aashiqui 2)",
    "acceptableAnswers": [
      "tum hi ho",
      "aashiqui 2",
      "arijit singh",
      "tum hi ho aashiqui 2"
    ]
  },
  {
    "id": "audio_q_00110",
    "category": "🎵 Bollywood Music Audio",
    "question": "Audio Clue: Name this 2013 love anthem sung by Arijit Singh from Aashiqui 2!",
    "audioFile": "/audio/song_tum_hi_ho.mp3",
    "correctAnswer": "Tum Hi Ho (Aashiqui 2)",
    "acceptableAnswers": [
      "tum hi ho",
      "aashiqui 2",
      "arijit singh",
      "tum hi ho aashiqui 2"
    ]
  },
  {
    "id": "audio_q_00111",
    "category": "🏏 Cricket Audio Clue",
    "question": "Listen to the crisp strike sound! What sports equipment is heard hitting the ball for a boundary?",
    "audioFile": "/audio/cricket_bat_shot.mp3",
    "correctAnswer": "Cricket Bat",
    "acceptableAnswers": [
      "cricket bat",
      "bat",
      "cricket",
      "ball and bat",
      "shot"
    ]
  },
  {
    "id": "audio_q_00112",
    "category": "🏏 Cricket Audio Clue",
    "question": "Audio Clue: What sports equipment is heard hitting the ball for a boundary?",
    "audioFile": "/audio/cricket_bat_shot.mp3",
    "correctAnswer": "Cricket Bat",
    "acceptableAnswers": [
      "cricket bat",
      "bat",
      "cricket",
      "ball and bat",
      "shot"
    ]
  },
  {
    "id": "audio_q_00113",
    "category": "🏏 Cricket Audio Clue",
    "question": "Listen to this stadium trumpet fanfare! Which world-famous T20 cricket league plays this horn in stadiums?",
    "audioFile": "/audio/cricket_ipl_horn.mp3",
    "correctAnswer": "IPL (Indian Premier League)",
    "acceptableAnswers": [
      "ipl",
      "indian premier league",
      "t20",
      "cricket"
    ]
  },
  {
    "id": "audio_q_00114",
    "category": "🏏 Cricket Audio Clue",
    "question": "Audio Clue: Which world-famous T20 cricket league plays this horn in stadiums?",
    "audioFile": "/audio/cricket_ipl_horn.mp3",
    "correctAnswer": "IPL (Indian Premier League)",
    "acceptableAnswers": [
      "ipl",
      "indian premier league",
      "t20",
      "cricket"
    ]
  },
  {
    "id": "audio_q_00115",
    "category": "🏏 Cricket Audio Clue",
    "question": "Listen to this viral melody! Name the legendary World Cup-winning Indian cricket captain affectionately called \"Thala\"!",
    "audioFile": "/audio/cricket_bole_jo_koyal.mp3",
    "correctAnswer": "MS Dhoni",
    "acceptableAnswers": [
      "ms dhoni",
      "dhoni",
      "mahendra singh dhoni",
      "thala",
      "captain cool",
      "msd"
    ]
  },
  {
    "id": "audio_q_00116",
    "category": "🏏 Cricket Audio Clue",
    "question": "Audio Clue: Name the legendary World Cup-winning Indian cricket captain affectionately called \"Thala\"!",
    "audioFile": "/audio/cricket_bole_jo_koyal.mp3",
    "correctAnswer": "MS Dhoni",
    "acceptableAnswers": [
      "ms dhoni",
      "dhoni",
      "mahendra singh dhoni",
      "thala",
      "captain cool",
      "msd"
    ]
  },
  {
    "id": "q_00001",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Who says: \"Chai piyo, biscuit khao... chai piyo, biscuit khao\"?",
    "correctAnswer": "Jethalal Gada",
    "acceptableAnswers": [
      "jethalal",
      "jetha",
      "jethalal gada",
      "jethabhai"
    ]
  },
  {
    "id": "q_00002",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Who says the iconic line: \"Ae pagal aurat!\" in Gokuldham?",
    "correctAnswer": "Jethalal Gada",
    "acceptableAnswers": [
      "jethalal",
      "jetha",
      "jethalal gada"
    ]
  },
  {
    "id": "q_00003",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Who says: \"Hey Maa Mataji! Tapu ke papa!\"?",
    "correctAnswer": "Dayaben Gada",
    "acceptableAnswers": [
      "daya",
      "dayaben",
      "daya bhabhi",
      "daya gada"
    ]
  },
  {
    "id": "q_00004",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Who declares: \"Duniya hila dunga! Patrakar Popatlal Golden Crow Award winner\"?",
    "correctAnswer": "Patrakar Popatlal",
    "acceptableAnswers": [
      "popatlal",
      "patrakar popatlal",
      "popat"
    ]
  },
  {
    "id": "q_00005",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Who says: \"Mera cancel kardo!\" whenever marriage talks fail?",
    "correctAnswer": "Patrakar Popatlal",
    "acceptableAnswers": [
      "popatlal",
      "patrakar popatlal",
      "popat"
    ]
  },
  {
    "id": "q_00006",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Who screams: \"Nahane ja nahane! Ek thappad marunga toh zameen pe gir padega!\"?",
    "correctAnswer": "Champaklal (Bapuji)",
    "acceptableAnswers": [
      "champaklal",
      "bapuji",
      "champak chacha",
      "dadaji"
    ]
  },
  {
    "id": "q_00007",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Who addresses Jethalal as \"Jethiya!\" whenever angry?",
    "correctAnswer": "Champaklal (Bapuji)",
    "acceptableAnswers": [
      "champaklal",
      "bapuji",
      "champak chacha"
    ]
  },
  {
    "id": "q_00008",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Who introduces himself as: \"Main Aatmaram Tukaram Bhide, Gokuldham Society ka ekmev Secretary\"?",
    "correctAnswer": "Aatmaram Bhide",
    "acceptableAnswers": [
      "bhide",
      "aatmaram bhide",
      "atmaram bhide",
      "aatmaram"
    ]
  },
  {
    "id": "q_00009",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Can you guess? Name the correct one: Who frequently reminds everyone: \"Hamare zamane mein aisi padhai hoti thi\"?",
    "correctAnswer": "Aatmaram Bhide",
    "acceptableAnswers": [
      "bhide",
      "aatmaram bhide",
      "atmaram bhide"
    ]
  },
  {
    "id": "q_00010",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Think fast! Do you remember: Who says: \"Aata maajhi satakli nahi, yeh Bhide chi satakli!\"?",
    "correctAnswer": "Aatmaram Bhide",
    "acceptableAnswers": [
      "bhide",
      "aatmaram bhide"
    ]
  },
  {
    "id": "q_00011",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Who says: \"Jaisi jiski soch! Sahi baat hai sethji\"?",
    "correctAnswer": "Bagha (Bagheshwar)",
    "acceptableAnswers": [
      "bagha",
      "bagheshwar"
    ]
  },
  {
    "id": "q_00012",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Who asks Jethalal: \"Sethji aapne mujhe bulaya? Meri payment badhane ki baat chal rahi hai kya\"?",
    "correctAnswer": "Natu Kaka",
    "acceptableAnswers": [
      "natu kaka",
      "nattu kaka",
      "natu"
    ]
  },
  {
    "id": "q_00013",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Who greets with: \"Oye paapa ji! Balle Balle! Aaj party sharty hogi\"?",
    "correctAnswer": "Roshan Singh Sodhi",
    "acceptableAnswers": [
      "sodhi",
      "roshan singh sodhi",
      "roshan sodhi"
    ]
  },
  {
    "id": "q_00014",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "True Fan Quiz: Guess the right answer: Who says: \"Aiyyo! Vanakkam! Main scientist Krishnan Subramaniam Iyer\"?",
    "correctAnswer": "Krishnan Subramaniam Iyer",
    "acceptableAnswers": [
      "iyer",
      "krishnan iyer",
      "subramaniam iyer"
    ]
  },
  {
    "id": "q_00015",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Who says sweetly: \"Aap bhi na Jetha ji... hamesha mazaak karte rehte hain\"?",
    "correctAnswer": "Babita Ji",
    "acceptableAnswers": [
      "babita",
      "babitaji",
      "babita ji"
    ]
  },
  {
    "id": "q_00016",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Instant Guess: Trivia check: Who responds to every dish discussion with: \"Sahi baat hai!\"?",
    "correctAnswer": "Dr. Hansraj Hathi",
    "acceptableAnswers": [
      "dr hathi",
      "doctor hathi",
      "hathi",
      "hansraj hathi"
    ]
  },
  {
    "id": "q_00017",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Who says: \"Oh come on, Hathi ji!\"?",
    "correctAnswer": "Komal Hathi",
    "acceptableAnswers": [
      "komal",
      "komal hathi",
      "komal bhabhi"
    ]
  },
  {
    "id": "q_00018",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Lock Your Answer: Fun trivia: Who says: \"Haye haye galti se mistake ho gayi\"?",
    "correctAnswer": "Bawri Dhondulal Ghadhave",
    "acceptableAnswers": [
      "bawri",
      "baori",
      "bawri dhondulal ghadhave"
    ]
  },
  {
    "id": "q_00019",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Buzzer Question: Name the correct one: Who warns criminals: \"Hamara naam hai Inspector Chalu Pandey, jhooth bologe toh padenge dande\"?",
    "correctAnswer": "Inspector Chalu Pandey",
    "acceptableAnswers": [
      "chalu pandey",
      "inspector chalu pandey",
      "pandey ji"
    ]
  },
  {
    "id": "q_00020",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Champion Round: Do you remember: Who says: \"Behen Dayaben ke ghar se kabhi khaali haath nahi laut-te\"?",
    "correctAnswer": "Sundarlal",
    "acceptableAnswers": [
      "sundarlal",
      "sundar",
      "sundar lal"
    ]
  },
  {
    "id": "q_00021",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Who yells: \"Goli beta masti nahi!\"?",
    "correctAnswer": "Jethalal Gada",
    "acceptableAnswers": [
      "jethalal",
      "jetha",
      "dr hathi"
    ]
  },
  {
    "id": "q_00022",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Who yells: \"Sonu beta masti nahi!\"?",
    "correctAnswer": "Aatmaram Bhide",
    "acceptableAnswers": [
      "bhide",
      "aatmaram bhide"
    ]
  },
  {
    "id": "q_00023",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Who calls out lovingly: \"Sundar vira! Mera pyara bhai!\"?",
    "correctAnswer": "Dayaben Gada",
    "acceptableAnswers": [
      "daya",
      "dayaben",
      "daya bhabhi"
    ]
  },
  {
    "id": "q_00024",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Who calls Champaklal: \"Beshisht mhatarya!\" in frustration?",
    "correctAnswer": "Aatmaram Bhide",
    "acceptableAnswers": [
      "bhide",
      "aatmaram bhide",
      "champaklal"
    ]
  },
  {
    "id": "q_00025",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Who says: \"Tapu Sena ready ho jao compound mein match khelne ke liye\"?",
    "correctAnswer": "Tipendra (Tapu)",
    "acceptableAnswers": [
      "tapu",
      "tipendra",
      "tapu gada"
    ]
  },
  {
    "id": "q_00026",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Who serves soda and groceries outside Gokuldham Society?",
    "correctAnswer": "Abdul",
    "acceptableAnswers": [
      "abdul",
      "abdul bhai"
    ]
  },
  {
    "id": "q_00027",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "What is the name of Aatmaram Bhide's vintage yellow scooter?",
    "correctAnswer": "Sakharam",
    "acceptableAnswers": [
      "sakharam",
      "sakharam scooter"
    ]
  },
  {
    "id": "q_00028",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "What is the name of Jethalal's electronics showroom?",
    "correctAnswer": "Gada Electronics",
    "acceptableAnswers": [
      "gada electronics",
      "gada electronic"
    ]
  },
  {
    "id": "q_00029",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Can you guess? Name the correct one: What is Patrakar Popatlal's workplace newspaper name?",
    "correctAnswer": "Toofan Express",
    "acceptableAnswers": [
      "toofan express",
      "toofan"
    ]
  },
  {
    "id": "q_00030",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Think fast! Do you remember: What award did Patrakar Popatlal win in journalism?",
    "correctAnswer": "Golden Crow Award",
    "acceptableAnswers": [
      "golden crow award",
      "golden crow"
    ]
  },
  {
    "id": "q_00031",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "What object does Patrakar Popatlal always carry with him?",
    "correctAnswer": "Umbrella (Chhatri)",
    "acceptableAnswers": [
      "umbrella",
      "chhatri",
      "chata"
    ]
  },
  {
    "id": "q_00032",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "What diet vegetable juice does Anjali force Taarak Mehta to drink?",
    "correctAnswer": "Karela Juice (Bitter Gourd)",
    "acceptableAnswers": [
      "karela juice",
      "karela",
      "diet food"
    ]
  },
  {
    "id": "q_00033",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "What is Jethalal's favorite Sunday morning Gujarati breakfast?",
    "correctAnswer": "Jalebi Fafda",
    "acceptableAnswers": [
      "jalebi fafda",
      "fafda jalebi",
      "fafda",
      "jalebi"
    ]
  },
  {
    "id": "q_00034",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "True Fan Quiz: Guess the right answer: What homemade business do Madhavi and Bhide run?",
    "correctAnswer": "Achaar Papad",
    "acceptableAnswers": [
      "achaar papad",
      "achar papad",
      "papad achaar",
      "papad"
    ]
  },
  {
    "id": "q_00035",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "What is the native Gujarati village of the Gada family?",
    "correctAnswer": "Bhachau (Kutch)",
    "acceptableAnswers": [
      "bhachau",
      "kutch",
      "bhachau kutch"
    ]
  },
  {
    "id": "q_00036",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Instant Guess: Trivia check: What is the name of Roshan Singh Sodhi's motor workshop?",
    "correctAnswer": "Sodhi Garage",
    "acceptableAnswers": [
      "sodhi garage",
      "garage"
    ]
  },
  {
    "id": "q_00037",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "What is the name of Abdul's convenience store outside Gokuldham?",
    "correctAnswer": "All in One General Store",
    "acceptableAnswers": [
      "all in one",
      "all in one general store",
      "general store"
    ]
  },
  {
    "id": "q_00038",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Lock Your Answer: Fun trivia: What is written every morning by Bhide on the society notice board?",
    "correctAnswer": "Suvichar (Thought of the Day)",
    "acceptableAnswers": [
      "suvichar",
      "thought of the day"
    ]
  },
  {
    "id": "q_00039",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Buzzer Question: Name the correct one: In which residential wing of Gokuldham Society does Jethalal live?",
    "correctAnswer": "Wing B",
    "acceptableAnswers": [
      "b wing",
      "wing b",
      "b"
    ]
  },
  {
    "id": "q_00040",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Champion Round: Do you remember: In which residential wing of Gokuldham Society does Aatmaram Bhide live?",
    "correctAnswer": "Wing A",
    "acceptableAnswers": [
      "a wing",
      "wing a",
      "a"
    ]
  },
  {
    "id": "q_00041",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "What is the cricket tournament played between Gokuldham members called?",
    "correctAnswer": "Gokuldham Premier League (GPL)",
    "acceptableAnswers": [
      "gpl",
      "gokuldham premier league"
    ]
  },
  {
    "id": "q_00042",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "What was the team name led by Jethalal in GPL?",
    "correctAnswer": "Jetha Ke Janbaaz",
    "acceptableAnswers": [
      "jetha ke janbaaz",
      "janbaaz"
    ]
  },
  {
    "id": "q_00043",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "What was the team name led by Tapu in GPL?",
    "correctAnswer": "Tapu Ke Dhurandhar",
    "acceptableAnswers": [
      "tapu ke dhurandhar",
      "dhurandhar"
    ]
  },
  {
    "id": "q_00044",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "What was the team name led by Dayaben in GPL?",
    "correctAnswer": "Daya Dandiya Devils",
    "acceptableAnswers": [
      "daya dandiya devils",
      "dandiya devils"
    ]
  },
  {
    "id": "q_00045",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "What was the team name led by Mehta Sahab in GPL?",
    "correctAnswer": "Mehta Ke Maharathi",
    "acceptableAnswers": [
      "mehta ke maharathi",
      "maharathi"
    ]
  },
  {
    "id": "q_00046",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "What is the name of Natu Kaka's nephew who works in Gada Electronics?",
    "correctAnswer": "Bagha (Bagheshwar)",
    "acceptableAnswers": [
      "bagha",
      "bagheshwar"
    ]
  },
  {
    "id": "q_00047",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "What is the name of Bagha's forgetful fiancee?",
    "correctAnswer": "Bawri Dhondulal Ghadhave",
    "acceptableAnswers": [
      "bawri",
      "bawri dhondulal ghadhave",
      "baori"
    ]
  },
  {
    "id": "q_00048",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "What is the name of the quiet employee in Gada Electronics who rarely speaks?",
    "correctAnswer": "Magan",
    "acceptableAnswers": [
      "magan",
      "magan bhai"
    ]
  },
  {
    "id": "q_00049",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Can you guess? Name the correct one: What is the name of Dayaben's brother who always asks Jethalal for money?",
    "correctAnswer": "Sundarlal",
    "acceptableAnswers": [
      "sundarlal",
      "sundar",
      "sundar lal"
    ]
  },
  {
    "id": "q_00050",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Think fast! Do you remember: Who is known as Jethalal's \"Fire Brigade\" for solving all problems?",
    "correctAnswer": "Taarak Mehta",
    "acceptableAnswers": [
      "taarak mehta",
      "tarak mehta",
      "mehta sahab"
    ]
  },
  {
    "id": "q_00051",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "What is Dr. Hathi's full first name in TMKOC?",
    "correctAnswer": "Hansraj",
    "acceptableAnswers": [
      "hansraj",
      "hansraj hathi",
      "dr hansraj"
    ]
  },
  {
    "id": "q_00052",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "What is Dr. Hathi's son Goli's full formal name?",
    "correctAnswer": "Gulabkumar Hathi",
    "acceptableAnswers": [
      "gulabkumar",
      "gulabkumar hathi",
      "goli"
    ]
  },
  {
    "id": "q_00053",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "What is Sodhi's son Gogi's full formal name?",
    "correctAnswer": "Gurucharan Singh Sodhi",
    "acceptableAnswers": [
      "gurucharan",
      "gurucharan singh",
      "gogi"
    ]
  },
  {
    "id": "q_00054",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "True Fan Quiz: Guess the right answer: What is Jethalal's son Tapu's full formal name?",
    "correctAnswer": "Tipendra Gada",
    "acceptableAnswers": [
      "tipendra",
      "tipendra gada",
      "tapu"
    ]
  },
  {
    "id": "q_00055",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "What is Bhide's daughter Sonu's full formal name?",
    "correctAnswer": "Sonakshi Bhide",
    "acceptableAnswers": [
      "sonakshi",
      "sonakshi bhide",
      "sonu"
    ]
  },
  {
    "id": "q_00056",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Instant Guess: Trivia check: What is Pinku's full name in Tapu Sena?",
    "correctAnswer": "Pankaj Diwan Sahay",
    "acceptableAnswers": [
      "pankaj",
      "pinku",
      "pankaj diwan"
    ]
  },
  {
    "id": "q_00057",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Which foreign bride was arranged for Popatlal from England?",
    "correctAnswer": "Kerry",
    "acceptableAnswers": [
      "kerry",
      "carry"
    ]
  },
  {
    "id": "q_00058",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Lock Your Answer: Fun trivia: Which girl with a speech impediment did Popatlal try to marry?",
    "correctAnswer": "Bulbul",
    "acceptableAnswers": [
      "bulbul"
    ]
  },
  {
    "id": "q_00059",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Buzzer Question: Name the correct one: What was the famous ghost's name in the Gokuldham haunted episode?",
    "correctAnswer": "Bhootni (Stree in White Sari)",
    "acceptableAnswers": [
      "bhootni",
      "chudail",
      "stree"
    ]
  },
  {
    "id": "q_00060",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Champion Round: Do you remember: Which politician did Jethalal confront during election campaign arc?",
    "correctAnswer": "Sevaklal",
    "acceptableAnswers": [
      "sevaklal",
      "neta sevaklal"
    ]
  },
  {
    "id": "q_00061",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Who is the creator and producer of Taarak Mehta Ka Ooltah Chashmah?",
    "correctAnswer": "Asit Kumar Modi",
    "acceptableAnswers": [
      "asit kumar modi",
      "asit modi",
      "asit"
    ]
  },
  {
    "id": "q_00062",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Which actor portrays Jethalal Champaklal Gada?",
    "correctAnswer": "Dilip Joshi",
    "acceptableAnswers": [
      "dilip joshi",
      "dilip"
    ]
  },
  {
    "id": "q_00063",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Which actress portrayed the iconic Dayaben?",
    "correctAnswer": "Disha Vakani",
    "acceptableAnswers": [
      "disha vakani",
      "disha"
    ]
  },
  {
    "id": "q_00064",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Which actor portrays Champaklal Gada (Bapuji)?",
    "correctAnswer": "Amit Bhatt",
    "acceptableAnswers": [
      "amit bhatt",
      "amit"
    ]
  },
  {
    "id": "q_00065",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Which actor portrays Aatmaram Tukaram Bhide?",
    "correctAnswer": "Mandar Chandwadkar",
    "acceptableAnswers": [
      "mandar chandwadkar",
      "mandar"
    ]
  },
  {
    "id": "q_00066",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Which actor portrays Patrakar Popatlal?",
    "correctAnswer": "Shyam Pathak",
    "acceptableAnswers": [
      "shyam pathak",
      "shyam"
    ]
  },
  {
    "id": "q_00067",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Which actress portrays Babita Ji?",
    "correctAnswer": "Munmun Dutta",
    "acceptableAnswers": [
      "munmun dutta",
      "munmun"
    ]
  },
  {
    "id": "q_00068",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Which actor portrayed the beloved Natu Kaka?",
    "correctAnswer": "Ghanshyam Nayak",
    "acceptableAnswers": [
      "ghanshyam nayak",
      "ghanshyam"
    ]
  },
  {
    "id": "q_00069",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Can you guess? Name the correct one: Which actor portrays Bagha in TMKOC?",
    "correctAnswer": "Tanmay Vekaria",
    "acceptableAnswers": [
      "tanmay vekaria",
      "tanmay"
    ]
  },
  {
    "id": "q_00070",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Think fast! Do you remember: Which actor portrays Krishnan Subramaniam Iyer?",
    "correctAnswer": "Tanuj Mahashabde",
    "acceptableAnswers": [
      "tanuj mahashabde",
      "tanuj"
    ]
  },
  {
    "id": "q_00071",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Which actor portrayed Dr. Hansraj Hathi originally?",
    "correctAnswer": "Kavi Kumar Azad",
    "acceptableAnswers": [
      "kavi kumar azad",
      "kavi kumar",
      "dr hathi"
    ]
  },
  {
    "id": "q_00072",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Which actor portrays Roshan Singh Sodhi originally?",
    "correctAnswer": "Gurucharan Singh",
    "acceptableAnswers": [
      "gurucharan singh",
      "gurucharan"
    ]
  },
  {
    "id": "q_00073",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Which actor played the original Tapu (Tipendra Gada)?",
    "correctAnswer": "Bhavya Gandhi",
    "acceptableAnswers": [
      "bhavya gandhi",
      "bhavya"
    ]
  },
  {
    "id": "q_00074",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "True Fan Quiz: Guess the right answer: Which actor plays Sundarlal?",
    "correctAnswer": "Mayur Vakani",
    "acceptableAnswers": [
      "mayur vakani",
      "mayur"
    ]
  },
  {
    "id": "q_00075",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Which actor portrays Inspector Chalu Pandey?",
    "correctAnswer": "Daya Shankar Pandey",
    "acceptableAnswers": [
      "daya shankar pandey",
      "dayashankar pandey"
    ]
  },
  {
    "id": "q_00076",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Instant Guess: Trivia check: In TMKOC, what rhythmic Gujarati drum beat plays whenever Dayaben starts dancing?",
    "correctAnswer": "Garba Dhol Beat",
    "acceptableAnswers": [
      "garba dhol",
      "garba beat",
      "dhol",
      "garba"
    ]
  },
  {
    "id": "q_00077",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "In TMKOC, what rapid tension sound effect plays when Jethalal lands in trouble?",
    "correctAnswer": "Dhin-Tana-Na / Tabdeek Tabdeek",
    "acceptableAnswers": [
      "dhin tana na",
      "tabdeek",
      "tension bgm"
    ]
  },
  {
    "id": "q_00078",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Lock Your Answer: Fun trivia: In TMKOC, which musical instrument plays a sad melody when Popatlal is rejected?",
    "correctAnswer": "Shehnai / Sad Flute",
    "acceptableAnswers": [
      "shehnai",
      "flute",
      "sad flute",
      "bansuri"
    ]
  },
  {
    "id": "q_00079",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Buzzer Question: Name the correct one: In TMKOC, which Punjabi instrument beat plays when Sodhi gets excited for party sharty?",
    "correctAnswer": "Bhangra Dhol / Dholak",
    "acceptableAnswers": [
      "bhangra dhol",
      "dhol",
      "punjabi dhol",
      "dholak"
    ]
  },
  {
    "id": "q_00080",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Champion Round: Do you remember: In TMKOC, which classical South Indian music plays during Jethalal and Iyer faceoffs?",
    "correctAnswer": "Nadaswaram / Carnatic BGM",
    "acceptableAnswers": [
      "nadaswaram",
      "carnatic",
      "south indian music"
    ]
  },
  {
    "id": "q_00081",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "In TMKOC, what eerie whistling sound played during the spooky Bhootni episodes?",
    "correctAnswer": "Bhootni Whistling Flute",
    "acceptableAnswers": [
      "bhootni whistle",
      "whistle",
      "flute",
      "spooky whistle"
    ]
  },
  {
    "id": "q_00082",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "In TMKOC, what siren sound effect plays when Inspector Chalu Pandey arrives on jeep?",
    "correctAnswer": "Police Siren",
    "acceptableAnswers": [
      "police siren",
      "siren",
      "police"
    ]
  },
  {
    "id": "q_00083",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "In TMKOC, what peaceful instrument plays when Taarak Mehta delivers the moral ending?",
    "correctAnswer": "Acoustic Sitar / Flute Moral Theme",
    "acceptableAnswers": [
      "sitar",
      "flute",
      "moral theme",
      "ending theme"
    ]
  },
  {
    "id": "q_00084",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Can you guess? Name the correct one: Who screams: \"Nahane ja nahane! Ek thappad marunga toh zameen pe gir padega!\"?",
    "correctAnswer": "Champaklal (Bapuji)",
    "acceptableAnswers": [
      "champaklal",
      "bapuji",
      "champak chacha",
      "dadaji"
    ]
  },
  {
    "id": "q_00085",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Think fast! Do you remember: Who addresses Jethalal as \"Jethiya!\" whenever angry?",
    "correctAnswer": "Champaklal (Bapuji)",
    "acceptableAnswers": [
      "champaklal",
      "bapuji",
      "champak chacha"
    ]
  },
  {
    "id": "q_00086",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Who frequently reminds everyone: \"Hamare zamane mein aisi padhai hoti thi\"?",
    "correctAnswer": "Aatmaram Bhide",
    "acceptableAnswers": [
      "bhide",
      "aatmaram bhide",
      "atmaram bhide"
    ]
  },
  {
    "id": "q_00087",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Who says: \"Aata maajhi satakli nahi, yeh Bhide chi satakli!\"?",
    "correctAnswer": "Aatmaram Bhide",
    "acceptableAnswers": [
      "bhide",
      "aatmaram bhide"
    ]
  },
  {
    "id": "q_00088",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "True Fan Quiz: Guess the right answer: Who says: \"Jaisi jiski soch! Sahi baat hai sethji\"?",
    "correctAnswer": "Bagha (Bagheshwar)",
    "acceptableAnswers": [
      "bagha",
      "bagheshwar"
    ]
  },
  {
    "id": "q_00089",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Instant Guess: Trivia check: Who greets with: \"Oye paapa ji! Balle Balle! Aaj party sharty hogi\"?",
    "correctAnswer": "Roshan Singh Sodhi",
    "acceptableAnswers": [
      "sodhi",
      "roshan singh sodhi",
      "roshan sodhi"
    ]
  },
  {
    "id": "q_00090",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Who says: \"Aiyyo! Vanakkam! Main scientist Krishnan Subramaniam Iyer\"?",
    "correctAnswer": "Krishnan Subramaniam Iyer",
    "acceptableAnswers": [
      "iyer",
      "krishnan iyer",
      "subramaniam iyer"
    ]
  },
  {
    "id": "q_00091",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Lock Your Answer: Fun trivia: Who says sweetly: \"Aap bhi na Jetha ji... hamesha mazaak karte rehte hain\"?",
    "correctAnswer": "Babita Ji",
    "acceptableAnswers": [
      "babita",
      "babitaji",
      "babita ji"
    ]
  },
  {
    "id": "q_00092",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Buzzer Question: Name the correct one: Who responds to every dish discussion with: \"Sahi baat hai!\"?",
    "correctAnswer": "Dr. Hansraj Hathi",
    "acceptableAnswers": [
      "dr hathi",
      "doctor hathi",
      "hathi",
      "hansraj hathi"
    ]
  },
  {
    "id": "q_00093",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Champion Round: Do you remember: Who says: \"Oh come on, Hathi ji!\"?",
    "correctAnswer": "Komal Hathi",
    "acceptableAnswers": [
      "komal",
      "komal hathi",
      "komal bhabhi"
    ]
  },
  {
    "id": "q_00094",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Who says: \"Haye haye galti se mistake ho gayi\"?",
    "correctAnswer": "Bawri Dhondulal Ghadhave",
    "acceptableAnswers": [
      "bawri",
      "baori",
      "bawri dhondulal ghadhave"
    ]
  },
  {
    "id": "q_00095",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Who warns criminals: \"Hamara naam hai Inspector Chalu Pandey, jhooth bologe toh padenge dande\"?",
    "correctAnswer": "Inspector Chalu Pandey",
    "acceptableAnswers": [
      "chalu pandey",
      "inspector chalu pandey",
      "pandey ji"
    ]
  },
  {
    "id": "q_00096",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Who says: \"Behen Dayaben ke ghar se kabhi khaali haath nahi laut-te\"?",
    "correctAnswer": "Sundarlal",
    "acceptableAnswers": [
      "sundarlal",
      "sundar",
      "sundar lal"
    ]
  },
  {
    "id": "q_00097",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Can you guess? Name the correct one: Who serves soda and groceries outside Gokuldham Society?",
    "correctAnswer": "Abdul",
    "acceptableAnswers": [
      "abdul",
      "abdul bhai"
    ]
  },
  {
    "id": "q_00098",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Think fast! Do you remember: What is the name of Aatmaram Bhide's vintage yellow scooter?",
    "correctAnswer": "Sakharam",
    "acceptableAnswers": [
      "sakharam",
      "sakharam scooter"
    ]
  },
  {
    "id": "q_00099",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "What is Patrakar Popatlal's workplace newspaper name?",
    "correctAnswer": "Toofan Express",
    "acceptableAnswers": [
      "toofan express",
      "toofan"
    ]
  },
  {
    "id": "q_00100",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "What award did Patrakar Popatlal win in journalism?",
    "correctAnswer": "Golden Crow Award",
    "acceptableAnswers": [
      "golden crow award",
      "golden crow"
    ]
  },
  {
    "id": "q_00101",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "True Fan Quiz: Guess the right answer: What object does Patrakar Popatlal always carry with him?",
    "correctAnswer": "Umbrella (Chhatri)",
    "acceptableAnswers": [
      "umbrella",
      "chhatri",
      "chata"
    ]
  },
  {
    "id": "q_00102",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Instant Guess: Trivia check: What is Jethalal's favorite Sunday morning Gujarati breakfast?",
    "correctAnswer": "Jalebi Fafda",
    "acceptableAnswers": [
      "jalebi fafda",
      "fafda jalebi",
      "fafda",
      "jalebi"
    ]
  },
  {
    "id": "q_00103",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "What homemade business do Madhavi and Bhide run?",
    "correctAnswer": "Achaar Papad",
    "acceptableAnswers": [
      "achaar papad",
      "achar papad",
      "papad achaar",
      "papad"
    ]
  },
  {
    "id": "q_00104",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Lock Your Answer: Fun trivia: What is the native Gujarati village of the Gada family?",
    "correctAnswer": "Bhachau (Kutch)",
    "acceptableAnswers": [
      "bhachau",
      "kutch",
      "bhachau kutch"
    ]
  },
  {
    "id": "q_00105",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Buzzer Question: Name the correct one: What is the name of Roshan Singh Sodhi's motor workshop?",
    "correctAnswer": "Sodhi Garage",
    "acceptableAnswers": [
      "sodhi garage",
      "garage"
    ]
  },
  {
    "id": "q_00106",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Champion Round: Do you remember: What is the name of Abdul's convenience store outside Gokuldham?",
    "correctAnswer": "All in One General Store",
    "acceptableAnswers": [
      "all in one",
      "all in one general store",
      "general store"
    ]
  },
  {
    "id": "q_00107",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "What is written every morning by Bhide on the society notice board?",
    "correctAnswer": "Suvichar (Thought of the Day)",
    "acceptableAnswers": [
      "suvichar",
      "thought of the day"
    ]
  },
  {
    "id": "q_00108",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "In which residential wing of Gokuldham Society does Jethalal live?",
    "correctAnswer": "Wing B",
    "acceptableAnswers": [
      "b wing",
      "wing b",
      "b"
    ]
  },
  {
    "id": "q_00109",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "In which residential wing of Gokuldham Society does Aatmaram Bhide live?",
    "correctAnswer": "Wing A",
    "acceptableAnswers": [
      "a wing",
      "wing a",
      "a"
    ]
  },
  {
    "id": "q_00110",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Can you guess? Name the correct one: What is the name of Natu Kaka's nephew who works in Gada Electronics?",
    "correctAnswer": "Bagha (Bagheshwar)",
    "acceptableAnswers": [
      "bagha",
      "bagheshwar"
    ]
  },
  {
    "id": "q_00111",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Think fast! Do you remember: What is the name of Bagha's forgetful fiancee?",
    "correctAnswer": "Bawri Dhondulal Ghadhave",
    "acceptableAnswers": [
      "bawri",
      "bawri dhondulal ghadhave",
      "baori"
    ]
  },
  {
    "id": "q_00112",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "What is the name of Dayaben's brother who always asks Jethalal for money?",
    "correctAnswer": "Sundarlal",
    "acceptableAnswers": [
      "sundarlal",
      "sundar",
      "sundar lal"
    ]
  },
  {
    "id": "q_00113",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Who is known as Jethalal's \"Fire Brigade\" for solving all problems?",
    "correctAnswer": "Taarak Mehta",
    "acceptableAnswers": [
      "taarak mehta",
      "tarak mehta",
      "mehta sahab"
    ]
  },
  {
    "id": "q_00114",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "True Fan Quiz: Guess the right answer: What is Dr. Hathi's full first name in TMKOC?",
    "correctAnswer": "Hansraj",
    "acceptableAnswers": [
      "hansraj",
      "hansraj hathi",
      "dr hansraj"
    ]
  },
  {
    "id": "q_00115",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Instant Guess: Trivia check: What is Sodhi's son Gogi's full formal name?",
    "correctAnswer": "Gurucharan Singh Sodhi",
    "acceptableAnswers": [
      "gurucharan",
      "gurucharan singh",
      "gogi"
    ]
  },
  {
    "id": "q_00116",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "What is Jethalal's son Tapu's full formal name?",
    "correctAnswer": "Tipendra Gada",
    "acceptableAnswers": [
      "tipendra",
      "tipendra gada",
      "tapu"
    ]
  },
  {
    "id": "q_00117",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Lock Your Answer: Fun trivia: What is Bhide's daughter Sonu's full formal name?",
    "correctAnswer": "Sonakshi Bhide",
    "acceptableAnswers": [
      "sonakshi",
      "sonakshi bhide",
      "sonu"
    ]
  },
  {
    "id": "q_00118",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Buzzer Question: Name the correct one: What is Pinku's full name in Tapu Sena?",
    "correctAnswer": "Pankaj Diwan Sahay",
    "acceptableAnswers": [
      "pankaj",
      "pinku",
      "pankaj diwan"
    ]
  },
  {
    "id": "q_00119",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Champion Round: Do you remember: Which foreign bride was arranged for Popatlal from England?",
    "correctAnswer": "Kerry",
    "acceptableAnswers": [
      "kerry",
      "carry"
    ]
  },
  {
    "id": "q_00120",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Which girl with a speech impediment did Popatlal try to marry?",
    "correctAnswer": "Bulbul",
    "acceptableAnswers": [
      "bulbul"
    ]
  },
  {
    "id": "q_00121",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "What was the famous ghost's name in the Gokuldham haunted episode?",
    "correctAnswer": "Bhootni (Stree in White Sari)",
    "acceptableAnswers": [
      "bhootni",
      "chudail",
      "stree"
    ]
  },
  {
    "id": "q_00122",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Which politician did Jethalal confront during election campaign arc?",
    "correctAnswer": "Sevaklal",
    "acceptableAnswers": [
      "sevaklal",
      "neta sevaklal"
    ]
  },
  {
    "id": "q_00123",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Can you guess? Name the correct one: Which actor portrays Patrakar Popatlal?",
    "correctAnswer": "Shyam Pathak",
    "acceptableAnswers": [
      "shyam pathak",
      "shyam"
    ]
  },
  {
    "id": "q_00124",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Think fast! Do you remember: Which actress portrays Babita Ji?",
    "correctAnswer": "Munmun Dutta",
    "acceptableAnswers": [
      "munmun dutta",
      "munmun"
    ]
  },
  {
    "id": "q_00125",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Which actor portrays Bagha in TMKOC?",
    "correctAnswer": "Tanmay Vekaria",
    "acceptableAnswers": [
      "tanmay vekaria",
      "tanmay"
    ]
  },
  {
    "id": "q_00126",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Which actor portrays Krishnan Subramaniam Iyer?",
    "correctAnswer": "Tanuj Mahashabde",
    "acceptableAnswers": [
      "tanuj mahashabde",
      "tanuj"
    ]
  },
  {
    "id": "q_00127",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "True Fan Quiz: Guess the right answer: Which actor portrayed Dr. Hansraj Hathi originally?",
    "correctAnswer": "Kavi Kumar Azad",
    "acceptableAnswers": [
      "kavi kumar azad",
      "kavi kumar",
      "dr hathi"
    ]
  },
  {
    "id": "q_00128",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Instant Guess: Trivia check: Which actor played the original Tapu (Tipendra Gada)?",
    "correctAnswer": "Bhavya Gandhi",
    "acceptableAnswers": [
      "bhavya gandhi",
      "bhavya"
    ]
  },
  {
    "id": "q_00129",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Which actor plays Sundarlal?",
    "correctAnswer": "Mayur Vakani",
    "acceptableAnswers": [
      "mayur vakani",
      "mayur"
    ]
  },
  {
    "id": "q_00130",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Lock Your Answer: Fun trivia: Which actor portrays Inspector Chalu Pandey?",
    "correctAnswer": "Daya Shankar Pandey",
    "acceptableAnswers": [
      "daya shankar pandey",
      "dayashankar pandey"
    ]
  },
  {
    "id": "q_00131",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Buzzer Question: Name the correct one: In TMKOC, what rhythmic Gujarati drum beat plays whenever Dayaben starts dancing?",
    "correctAnswer": "Garba Dhol Beat",
    "acceptableAnswers": [
      "garba dhol",
      "garba beat",
      "dhol",
      "garba"
    ]
  },
  {
    "id": "q_00132",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Champion Round: Do you remember: In TMKOC, what rapid tension sound effect plays when Jethalal lands in trouble?",
    "correctAnswer": "Dhin-Tana-Na / Tabdeek Tabdeek",
    "acceptableAnswers": [
      "dhin tana na",
      "tabdeek",
      "tension bgm"
    ]
  },
  {
    "id": "q_00133",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "In TMKOC, which musical instrument plays a sad melody when Popatlal is rejected?",
    "correctAnswer": "Shehnai / Sad Flute",
    "acceptableAnswers": [
      "shehnai",
      "flute",
      "sad flute",
      "bansuri"
    ]
  },
  {
    "id": "q_00134",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "In TMKOC, which Punjabi instrument beat plays when Sodhi gets excited for party sharty?",
    "correctAnswer": "Bhangra Dhol / Dholak",
    "acceptableAnswers": [
      "bhangra dhol",
      "dhol",
      "punjabi dhol",
      "dholak"
    ]
  },
  {
    "id": "q_00135",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "In TMKOC, which classical South Indian music plays during Jethalal and Iyer faceoffs?",
    "correctAnswer": "Nadaswaram / Carnatic BGM",
    "acceptableAnswers": [
      "nadaswaram",
      "carnatic",
      "south indian music"
    ]
  },
  {
    "id": "q_00136",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Can you guess? Name the correct one: Who says: \"Hey Maa Mataji! Tapu ke papa!\"?",
    "correctAnswer": "Dayaben Gada",
    "acceptableAnswers": [
      "daya",
      "dayaben",
      "daya bhabhi",
      "daya gada"
    ]
  },
  {
    "id": "q_00137",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Think fast! Do you remember: Who declares: \"Duniya hila dunga! Patrakar Popatlal Golden Crow Award winner\"?",
    "correctAnswer": "Patrakar Popatlal",
    "acceptableAnswers": [
      "popatlal",
      "patrakar popatlal",
      "popat"
    ]
  },
  {
    "id": "q_00138",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "True Fan Quiz: Guess the right answer: Who introduces himself as: \"Main Aatmaram Tukaram Bhide, Gokuldham Society ka ekmev Secretary\"?",
    "correctAnswer": "Aatmaram Bhide",
    "acceptableAnswers": [
      "bhide",
      "aatmaram bhide",
      "atmaram bhide",
      "aatmaram"
    ]
  },
  {
    "id": "q_00139",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Instant Guess: Trivia check: Who says: \"Aata maajhi satakli nahi, yeh Bhide chi satakli!\"?",
    "correctAnswer": "Aatmaram Bhide",
    "acceptableAnswers": [
      "bhide",
      "aatmaram bhide"
    ]
  },
  {
    "id": "q_00140",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Lock Your Answer: Fun trivia: Who asks Jethalal: \"Sethji aapne mujhe bulaya? Meri payment badhane ki baat chal rahi hai kya\"?",
    "correctAnswer": "Natu Kaka",
    "acceptableAnswers": [
      "natu kaka",
      "nattu kaka",
      "natu"
    ]
  },
  {
    "id": "q_00141",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Buzzer Question: Name the correct one: Who greets with: \"Oye paapa ji! Balle Balle! Aaj party sharty hogi\"?",
    "correctAnswer": "Roshan Singh Sodhi",
    "acceptableAnswers": [
      "sodhi",
      "roshan singh sodhi",
      "roshan sodhi"
    ]
  },
  {
    "id": "q_00142",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Champion Round: Do you remember: Who says: \"Aiyyo! Vanakkam! Main scientist Krishnan Subramaniam Iyer\"?",
    "correctAnswer": "Krishnan Subramaniam Iyer",
    "acceptableAnswers": [
      "iyer",
      "krishnan iyer",
      "subramaniam iyer"
    ]
  },
  {
    "id": "q_00143",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Who responds to every dish discussion with: \"Sahi baat hai!\"?",
    "correctAnswer": "Dr. Hansraj Hathi",
    "acceptableAnswers": [
      "dr hathi",
      "doctor hathi",
      "hathi",
      "hansraj hathi"
    ]
  },
  {
    "id": "q_00144",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Can you guess? Name the correct one: Who calls out lovingly: \"Sundar vira! Mera pyara bhai!\"?",
    "correctAnswer": "Dayaben Gada",
    "acceptableAnswers": [
      "daya",
      "dayaben",
      "daya bhabhi"
    ]
  },
  {
    "id": "q_00145",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Think fast! Do you remember: Who calls Champaklal: \"Beshisht mhatarya!\" in frustration?",
    "correctAnswer": "Aatmaram Bhide",
    "acceptableAnswers": [
      "bhide",
      "aatmaram bhide",
      "champaklal"
    ]
  },
  {
    "id": "q_00146",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "True Fan Quiz: Guess the right answer: What is the name of Jethalal's electronics showroom?",
    "correctAnswer": "Gada Electronics",
    "acceptableAnswers": [
      "gada electronics",
      "gada electronic"
    ]
  },
  {
    "id": "q_00147",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Instant Guess: Trivia check: What award did Patrakar Popatlal win in journalism?",
    "correctAnswer": "Golden Crow Award",
    "acceptableAnswers": [
      "golden crow award",
      "golden crow"
    ]
  },
  {
    "id": "q_00148",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Lock Your Answer: Fun trivia: What diet vegetable juice does Anjali force Taarak Mehta to drink?",
    "correctAnswer": "Karela Juice (Bitter Gourd)",
    "acceptableAnswers": [
      "karela juice",
      "karela",
      "diet food"
    ]
  },
  {
    "id": "q_00149",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Buzzer Question: Name the correct one: What is Jethalal's favorite Sunday morning Gujarati breakfast?",
    "correctAnswer": "Jalebi Fafda",
    "acceptableAnswers": [
      "jalebi fafda",
      "fafda jalebi",
      "fafda",
      "jalebi"
    ]
  },
  {
    "id": "q_00150",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Champion Round: Do you remember: What homemade business do Madhavi and Bhide run?",
    "correctAnswer": "Achaar Papad",
    "acceptableAnswers": [
      "achaar papad",
      "achar papad",
      "papad achaar",
      "papad"
    ]
  },
  {
    "id": "q_00151",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "What is the name of Roshan Singh Sodhi's motor workshop?",
    "correctAnswer": "Sodhi Garage",
    "acceptableAnswers": [
      "sodhi garage",
      "garage"
    ]
  },
  {
    "id": "q_00152",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Can you guess? Name the correct one: What was the team name led by Tapu in GPL?",
    "correctAnswer": "Tapu Ke Dhurandhar",
    "acceptableAnswers": [
      "tapu ke dhurandhar",
      "dhurandhar"
    ]
  },
  {
    "id": "q_00153",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Think fast! Do you remember: What was the team name led by Dayaben in GPL?",
    "correctAnswer": "Daya Dandiya Devils",
    "acceptableAnswers": [
      "daya dandiya devils",
      "dandiya devils"
    ]
  },
  {
    "id": "q_00154",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "True Fan Quiz: Guess the right answer: What is the name of the quiet employee in Gada Electronics who rarely speaks?",
    "correctAnswer": "Magan",
    "acceptableAnswers": [
      "magan",
      "magan bhai"
    ]
  },
  {
    "id": "q_00155",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Instant Guess: Trivia check: Who is known as Jethalal's \"Fire Brigade\" for solving all problems?",
    "correctAnswer": "Taarak Mehta",
    "acceptableAnswers": [
      "taarak mehta",
      "tarak mehta",
      "mehta sahab"
    ]
  },
  {
    "id": "q_00156",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Lock Your Answer: Fun trivia: What is Dr. Hathi's son Goli's full formal name?",
    "correctAnswer": "Gulabkumar Hathi",
    "acceptableAnswers": [
      "gulabkumar",
      "gulabkumar hathi",
      "goli"
    ]
  },
  {
    "id": "q_00157",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Buzzer Question: Name the correct one: What is Sodhi's son Gogi's full formal name?",
    "correctAnswer": "Gurucharan Singh Sodhi",
    "acceptableAnswers": [
      "gurucharan",
      "gurucharan singh",
      "gogi"
    ]
  },
  {
    "id": "q_00158",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Champion Round: Do you remember: What is Jethalal's son Tapu's full formal name?",
    "correctAnswer": "Tipendra Gada",
    "acceptableAnswers": [
      "tipendra",
      "tipendra gada",
      "tapu"
    ]
  },
  {
    "id": "q_00159",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "What is Pinku's full name in Tapu Sena?",
    "correctAnswer": "Pankaj Diwan Sahay",
    "acceptableAnswers": [
      "pankaj",
      "pinku",
      "pankaj diwan"
    ]
  },
  {
    "id": "q_00160",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Can you guess? Name the correct one: Which actress portrayed the iconic Dayaben?",
    "correctAnswer": "Disha Vakani",
    "acceptableAnswers": [
      "disha vakani",
      "disha"
    ]
  },
  {
    "id": "q_00161",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Think fast! Do you remember: Which actor portrays Champaklal Gada (Bapuji)?",
    "correctAnswer": "Amit Bhatt",
    "acceptableAnswers": [
      "amit bhatt",
      "amit"
    ]
  },
  {
    "id": "q_00162",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "True Fan Quiz: Guess the right answer: Which actor portrayed the beloved Natu Kaka?",
    "correctAnswer": "Ghanshyam Nayak",
    "acceptableAnswers": [
      "ghanshyam nayak",
      "ghanshyam"
    ]
  },
  {
    "id": "q_00163",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Instant Guess: Trivia check: Which actor portrays Krishnan Subramaniam Iyer?",
    "correctAnswer": "Tanuj Mahashabde",
    "acceptableAnswers": [
      "tanuj mahashabde",
      "tanuj"
    ]
  },
  {
    "id": "q_00164",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Lock Your Answer: Fun trivia: Which actor portrays Roshan Singh Sodhi originally?",
    "correctAnswer": "Gurucharan Singh",
    "acceptableAnswers": [
      "gurucharan singh",
      "gurucharan"
    ]
  },
  {
    "id": "q_00165",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Buzzer Question: Name the correct one: Which actor played the original Tapu (Tipendra Gada)?",
    "correctAnswer": "Bhavya Gandhi",
    "acceptableAnswers": [
      "bhavya gandhi",
      "bhavya"
    ]
  },
  {
    "id": "q_00166",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Champion Round: Do you remember: Which actor plays Sundarlal?",
    "correctAnswer": "Mayur Vakani",
    "acceptableAnswers": [
      "mayur vakani",
      "mayur"
    ]
  },
  {
    "id": "q_00167",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "In TMKOC, what rhythmic Gujarati drum beat plays whenever Dayaben starts dancing?",
    "correctAnswer": "Garba Dhol Beat",
    "acceptableAnswers": [
      "garba dhol",
      "garba beat",
      "dhol",
      "garba"
    ]
  },
  {
    "id": "q_00168",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Can you guess? Name the correct one: In TMKOC, what peaceful instrument plays when Taarak Mehta delivers the moral ending?",
    "correctAnswer": "Acoustic Sitar / Flute Moral Theme",
    "acceptableAnswers": [
      "sitar",
      "flute",
      "moral theme",
      "ending theme"
    ]
  },
  {
    "id": "q_00169",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Think fast! Do you remember: Who says: \"Chai piyo, biscuit khao... chai piyo, biscuit khao\"?",
    "correctAnswer": "Jethalal Gada",
    "acceptableAnswers": [
      "jethalal",
      "jetha",
      "jethalal gada",
      "jethabhai"
    ]
  },
  {
    "id": "q_00170",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "True Fan Quiz: Guess the right answer: Who says: \"Mera cancel kardo!\" whenever marriage talks fail?",
    "correctAnswer": "Patrakar Popatlal",
    "acceptableAnswers": [
      "popatlal",
      "patrakar popatlal",
      "popat"
    ]
  },
  {
    "id": "q_00171",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Instant Guess: Trivia check: Who addresses Jethalal as \"Jethiya!\" whenever angry?",
    "correctAnswer": "Champaklal (Bapuji)",
    "acceptableAnswers": [
      "champaklal",
      "bapuji",
      "champak chacha"
    ]
  },
  {
    "id": "q_00172",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Lock Your Answer: Fun trivia: Who frequently reminds everyone: \"Hamare zamane mein aisi padhai hoti thi\"?",
    "correctAnswer": "Aatmaram Bhide",
    "acceptableAnswers": [
      "bhide",
      "aatmaram bhide",
      "atmaram bhide"
    ]
  },
  {
    "id": "q_00173",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Buzzer Question: Name the correct one: Who says: \"Aata maajhi satakli nahi, yeh Bhide chi satakli!\"?",
    "correctAnswer": "Aatmaram Bhide",
    "acceptableAnswers": [
      "bhide",
      "aatmaram bhide"
    ]
  },
  {
    "id": "q_00174",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Champion Round: Do you remember: Who says: \"Jaisi jiski soch! Sahi baat hai sethji\"?",
    "correctAnswer": "Bagha (Bagheshwar)",
    "acceptableAnswers": [
      "bagha",
      "bagheshwar"
    ]
  },
  {
    "id": "q_00175",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Can you guess? Name the correct one: Who says: \"Behen Dayaben ke ghar se kabhi khaali haath nahi laut-te\"?",
    "correctAnswer": "Sundarlal",
    "acceptableAnswers": [
      "sundarlal",
      "sundar",
      "sundar lal"
    ]
  },
  {
    "id": "q_00176",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Think fast! Do you remember: Who yells: \"Goli beta masti nahi!\"?",
    "correctAnswer": "Jethalal Gada",
    "acceptableAnswers": [
      "jethalal",
      "jetha",
      "dr hathi"
    ]
  },
  {
    "id": "q_00177",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "True Fan Quiz: Guess the right answer: Who says: \"Tapu Sena ready ho jao compound mein match khelne ke liye\"?",
    "correctAnswer": "Tipendra (Tapu)",
    "acceptableAnswers": [
      "tapu",
      "tipendra",
      "tapu gada"
    ]
  },
  {
    "id": "q_00178",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Instant Guess: Trivia check: What is the name of Aatmaram Bhide's vintage yellow scooter?",
    "correctAnswer": "Sakharam",
    "acceptableAnswers": [
      "sakharam",
      "sakharam scooter"
    ]
  },
  {
    "id": "q_00179",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Lock Your Answer: Fun trivia: What is Patrakar Popatlal's workplace newspaper name?",
    "correctAnswer": "Toofan Express",
    "acceptableAnswers": [
      "toofan express",
      "toofan"
    ]
  },
  {
    "id": "q_00180",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Buzzer Question: Name the correct one: What award did Patrakar Popatlal win in journalism?",
    "correctAnswer": "Golden Crow Award",
    "acceptableAnswers": [
      "golden crow award",
      "golden crow"
    ]
  },
  {
    "id": "q_00181",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Champion Round: Do you remember: What object does Patrakar Popatlal always carry with him?",
    "correctAnswer": "Umbrella (Chhatri)",
    "acceptableAnswers": [
      "umbrella",
      "chhatri",
      "chata"
    ]
  },
  {
    "id": "q_00182",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Can you guess? Name the correct one: In which residential wing of Gokuldham Society does Aatmaram Bhide live?",
    "correctAnswer": "Wing A",
    "acceptableAnswers": [
      "a wing",
      "wing a",
      "a"
    ]
  },
  {
    "id": "q_00183",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Think fast! Do you remember: What is the cricket tournament played between Gokuldham members called?",
    "correctAnswer": "Gokuldham Premier League (GPL)",
    "acceptableAnswers": [
      "gpl",
      "gokuldham premier league"
    ]
  },
  {
    "id": "q_00184",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "True Fan Quiz: Guess the right answer: What was the team name led by Mehta Sahab in GPL?",
    "correctAnswer": "Mehta Ke Maharathi",
    "acceptableAnswers": [
      "mehta ke maharathi",
      "maharathi"
    ]
  },
  {
    "id": "q_00185",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Instant Guess: Trivia check: What is the name of Bagha's forgetful fiancee?",
    "correctAnswer": "Bawri Dhondulal Ghadhave",
    "acceptableAnswers": [
      "bawri",
      "bawri dhondulal ghadhave",
      "baori"
    ]
  },
  {
    "id": "q_00186",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Lock Your Answer: Fun trivia: What is the name of Dayaben's brother who always asks Jethalal for money?",
    "correctAnswer": "Sundarlal",
    "acceptableAnswers": [
      "sundarlal",
      "sundar",
      "sundar lal"
    ]
  },
  {
    "id": "q_00187",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Buzzer Question: Name the correct one: Who is known as Jethalal's \"Fire Brigade\" for solving all problems?",
    "correctAnswer": "Taarak Mehta",
    "acceptableAnswers": [
      "taarak mehta",
      "tarak mehta",
      "mehta sahab"
    ]
  },
  {
    "id": "q_00188",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Champion Round: Do you remember: What is Dr. Hathi's full first name in TMKOC?",
    "correctAnswer": "Hansraj",
    "acceptableAnswers": [
      "hansraj",
      "hansraj hathi",
      "dr hansraj"
    ]
  },
  {
    "id": "q_00189",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Can you guess? Name the correct one: Which politician did Jethalal confront during election campaign arc?",
    "correctAnswer": "Sevaklal",
    "acceptableAnswers": [
      "sevaklal",
      "neta sevaklal"
    ]
  },
  {
    "id": "q_00190",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Think fast! Do you remember: Who is the creator and producer of Taarak Mehta Ka Ooltah Chashmah?",
    "correctAnswer": "Asit Kumar Modi",
    "acceptableAnswers": [
      "asit kumar modi",
      "asit modi",
      "asit"
    ]
  },
  {
    "id": "q_00191",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "True Fan Quiz: Guess the right answer: Which actor portrays Aatmaram Tukaram Bhide?",
    "correctAnswer": "Mandar Chandwadkar",
    "acceptableAnswers": [
      "mandar chandwadkar",
      "mandar"
    ]
  },
  {
    "id": "q_00192",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Instant Guess: Trivia check: Which actress portrays Babita Ji?",
    "correctAnswer": "Munmun Dutta",
    "acceptableAnswers": [
      "munmun dutta",
      "munmun"
    ]
  },
  {
    "id": "q_00193",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Lock Your Answer: Fun trivia: Which actor portrays Bagha in TMKOC?",
    "correctAnswer": "Tanmay Vekaria",
    "acceptableAnswers": [
      "tanmay vekaria",
      "tanmay"
    ]
  },
  {
    "id": "q_00194",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Buzzer Question: Name the correct one: Which actor portrays Krishnan Subramaniam Iyer?",
    "correctAnswer": "Tanuj Mahashabde",
    "acceptableAnswers": [
      "tanuj mahashabde",
      "tanuj"
    ]
  },
  {
    "id": "q_00195",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Champion Round: Do you remember: Which actor portrayed Dr. Hansraj Hathi originally?",
    "correctAnswer": "Kavi Kumar Azad",
    "acceptableAnswers": [
      "kavi kumar azad",
      "kavi kumar",
      "dr hathi"
    ]
  },
  {
    "id": "q_00196",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Can you guess? Name the correct one: In TMKOC, which classical South Indian music plays during Jethalal and Iyer faceoffs?",
    "correctAnswer": "Nadaswaram / Carnatic BGM",
    "acceptableAnswers": [
      "nadaswaram",
      "carnatic",
      "south indian music"
    ]
  },
  {
    "id": "q_00197",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Think fast! Do you remember: In TMKOC, what eerie whistling sound played during the spooky Bhootni episodes?",
    "correctAnswer": "Bhootni Whistling Flute",
    "acceptableAnswers": [
      "bhootni whistle",
      "whistle",
      "flute",
      "spooky whistle"
    ]
  },
  {
    "id": "q_00198",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "True Fan Quiz: Guess the right answer: Who says the iconic line: \"Ae pagal aurat!\" in Gokuldham?",
    "correctAnswer": "Jethalal Gada",
    "acceptableAnswers": [
      "jethalal",
      "jetha",
      "jethalal gada"
    ]
  },
  {
    "id": "q_00199",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Instant Guess: Trivia check: Who declares: \"Duniya hila dunga! Patrakar Popatlal Golden Crow Award winner\"?",
    "correctAnswer": "Patrakar Popatlal",
    "acceptableAnswers": [
      "popatlal",
      "patrakar popatlal",
      "popat"
    ]
  },
  {
    "id": "q_00200",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Lock Your Answer: Fun trivia: Who screams: \"Nahane ja nahane! Ek thappad marunga toh zameen pe gir padega!\"?",
    "correctAnswer": "Champaklal (Bapuji)",
    "acceptableAnswers": [
      "champaklal",
      "bapuji",
      "champak chacha",
      "dadaji"
    ]
  },
  {
    "id": "q_00201",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Buzzer Question: Name the correct one: Who addresses Jethalal as \"Jethiya!\" whenever angry?",
    "correctAnswer": "Champaklal (Bapuji)",
    "acceptableAnswers": [
      "champaklal",
      "bapuji",
      "champak chacha"
    ]
  },
  {
    "id": "q_00202",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Champion Round: Do you remember: Who introduces himself as: \"Main Aatmaram Tukaram Bhide, Gokuldham Society ka ekmev Secretary\"?",
    "correctAnswer": "Aatmaram Bhide",
    "acceptableAnswers": [
      "bhide",
      "aatmaram bhide",
      "atmaram bhide",
      "aatmaram"
    ]
  },
  {
    "id": "q_00203",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Can you guess? Name the correct one: Who says: \"Oh come on, Hathi ji!\"?",
    "correctAnswer": "Komal Hathi",
    "acceptableAnswers": [
      "komal",
      "komal hathi",
      "komal bhabhi"
    ]
  },
  {
    "id": "q_00204",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Think fast! Do you remember: Who says: \"Haye haye galti se mistake ho gayi\"?",
    "correctAnswer": "Bawri Dhondulal Ghadhave",
    "acceptableAnswers": [
      "bawri",
      "baori",
      "bawri dhondulal ghadhave"
    ]
  },
  {
    "id": "q_00205",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "True Fan Quiz: Guess the right answer: Who yells: \"Sonu beta masti nahi!\"?",
    "correctAnswer": "Aatmaram Bhide",
    "acceptableAnswers": [
      "bhide",
      "aatmaram bhide"
    ]
  },
  {
    "id": "q_00206",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Instant Guess: Trivia check: Who calls Champaklal: \"Beshisht mhatarya!\" in frustration?",
    "correctAnswer": "Aatmaram Bhide",
    "acceptableAnswers": [
      "bhide",
      "aatmaram bhide",
      "champaklal"
    ]
  },
  {
    "id": "q_00207",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Lock Your Answer: Fun trivia: Who serves soda and groceries outside Gokuldham Society?",
    "correctAnswer": "Abdul",
    "acceptableAnswers": [
      "abdul",
      "abdul bhai"
    ]
  },
  {
    "id": "q_00208",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Buzzer Question: Name the correct one: What is the name of Aatmaram Bhide's vintage yellow scooter?",
    "correctAnswer": "Sakharam",
    "acceptableAnswers": [
      "sakharam",
      "sakharam scooter"
    ]
  },
  {
    "id": "q_00209",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Champion Round: Do you remember: What is the name of Jethalal's electronics showroom?",
    "correctAnswer": "Gada Electronics",
    "acceptableAnswers": [
      "gada electronics",
      "gada electronic"
    ]
  },
  {
    "id": "q_00210",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Can you guess? Name the correct one: What is the name of Abdul's convenience store outside Gokuldham?",
    "correctAnswer": "All in One General Store",
    "acceptableAnswers": [
      "all in one",
      "all in one general store",
      "general store"
    ]
  },
  {
    "id": "q_00211",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Think fast! Do you remember: What is written every morning by Bhide on the society notice board?",
    "correctAnswer": "Suvichar (Thought of the Day)",
    "acceptableAnswers": [
      "suvichar",
      "thought of the day"
    ]
  },
  {
    "id": "q_00212",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "True Fan Quiz: Guess the right answer: What was the team name led by Jethalal in GPL?",
    "correctAnswer": "Jetha Ke Janbaaz",
    "acceptableAnswers": [
      "jetha ke janbaaz",
      "janbaaz"
    ]
  },
  {
    "id": "q_00213",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Instant Guess: Trivia check: What was the team name led by Dayaben in GPL?",
    "correctAnswer": "Daya Dandiya Devils",
    "acceptableAnswers": [
      "daya dandiya devils",
      "dandiya devils"
    ]
  },
  {
    "id": "q_00214",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Lock Your Answer: Fun trivia: What is the name of Natu Kaka's nephew who works in Gada Electronics?",
    "correctAnswer": "Bagha (Bagheshwar)",
    "acceptableAnswers": [
      "bagha",
      "bagheshwar"
    ]
  },
  {
    "id": "q_00215",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Buzzer Question: Name the correct one: What is the name of Bagha's forgetful fiancee?",
    "correctAnswer": "Bawri Dhondulal Ghadhave",
    "acceptableAnswers": [
      "bawri",
      "bawri dhondulal ghadhave",
      "baori"
    ]
  },
  {
    "id": "q_00216",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Champion Round: Do you remember: What is the name of the quiet employee in Gada Electronics who rarely speaks?",
    "correctAnswer": "Magan",
    "acceptableAnswers": [
      "magan",
      "magan bhai"
    ]
  },
  {
    "id": "q_00217",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Can you guess? Name the correct one: Which foreign bride was arranged for Popatlal from England?",
    "correctAnswer": "Kerry",
    "acceptableAnswers": [
      "kerry",
      "carry"
    ]
  },
  {
    "id": "q_00218",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Think fast! Do you remember: Which girl with a speech impediment did Popatlal try to marry?",
    "correctAnswer": "Bulbul",
    "acceptableAnswers": [
      "bulbul"
    ]
  },
  {
    "id": "q_00219",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "True Fan Quiz: Guess the right answer: Which actor portrays Jethalal Champaklal Gada?",
    "correctAnswer": "Dilip Joshi",
    "acceptableAnswers": [
      "dilip joshi",
      "dilip"
    ]
  },
  {
    "id": "q_00220",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Instant Guess: Trivia check: Which actor portrays Champaklal Gada (Bapuji)?",
    "correctAnswer": "Amit Bhatt",
    "acceptableAnswers": [
      "amit bhatt",
      "amit"
    ]
  },
  {
    "id": "q_00221",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Lock Your Answer: Fun trivia: Which actor portrays Patrakar Popatlal?",
    "correctAnswer": "Shyam Pathak",
    "acceptableAnswers": [
      "shyam pathak",
      "shyam"
    ]
  },
  {
    "id": "q_00222",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Buzzer Question: Name the correct one: Which actress portrays Babita Ji?",
    "correctAnswer": "Munmun Dutta",
    "acceptableAnswers": [
      "munmun dutta",
      "munmun"
    ]
  },
  {
    "id": "q_00223",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Champion Round: Do you remember: Which actor portrayed the beloved Natu Kaka?",
    "correctAnswer": "Ghanshyam Nayak",
    "acceptableAnswers": [
      "ghanshyam nayak",
      "ghanshyam"
    ]
  },
  {
    "id": "q_00224",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Can you guess? Name the correct one: In TMKOC, what rapid tension sound effect plays when Jethalal lands in trouble?",
    "correctAnswer": "Dhin-Tana-Na / Tabdeek Tabdeek",
    "acceptableAnswers": [
      "dhin tana na",
      "tabdeek",
      "tension bgm"
    ]
  },
  {
    "id": "q_00225",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Think fast! Do you remember: In TMKOC, which musical instrument plays a sad melody when Popatlal is rejected?",
    "correctAnswer": "Shehnai / Sad Flute",
    "acceptableAnswers": [
      "shehnai",
      "flute",
      "sad flute",
      "bansuri"
    ]
  },
  {
    "id": "q_00226",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "True Fan Quiz: Guess the right answer: In TMKOC, what siren sound effect plays when Inspector Chalu Pandey arrives on jeep?",
    "correctAnswer": "Police Siren",
    "acceptableAnswers": [
      "police siren",
      "siren",
      "police"
    ]
  },
  {
    "id": "q_00227",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Instant Guess: Trivia check: Who says: \"Chai piyo, biscuit khao... chai piyo, biscuit khao\"?",
    "correctAnswer": "Jethalal Gada",
    "acceptableAnswers": [
      "jethalal",
      "jetha",
      "jethalal gada",
      "jethabhai"
    ]
  },
  {
    "id": "q_00228",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Lock Your Answer: Fun trivia: Who says: \"Hey Maa Mataji! Tapu ke papa!\"?",
    "correctAnswer": "Dayaben Gada",
    "acceptableAnswers": [
      "daya",
      "dayaben",
      "daya bhabhi",
      "daya gada"
    ]
  },
  {
    "id": "q_00229",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Buzzer Question: Name the correct one: Who declares: \"Duniya hila dunga! Patrakar Popatlal Golden Crow Award winner\"?",
    "correctAnswer": "Patrakar Popatlal",
    "acceptableAnswers": [
      "popatlal",
      "patrakar popatlal",
      "popat"
    ]
  },
  {
    "id": "q_00230",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Champion Round: Do you remember: Who says: \"Mera cancel kardo!\" whenever marriage talks fail?",
    "correctAnswer": "Patrakar Popatlal",
    "acceptableAnswers": [
      "popatlal",
      "patrakar popatlal",
      "popat"
    ]
  },
  {
    "id": "q_00231",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Can you guess? Name the correct one: Who says: \"Aiyyo! Vanakkam! Main scientist Krishnan Subramaniam Iyer\"?",
    "correctAnswer": "Krishnan Subramaniam Iyer",
    "acceptableAnswers": [
      "iyer",
      "krishnan iyer",
      "subramaniam iyer"
    ]
  },
  {
    "id": "q_00232",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Think fast! Do you remember: Who says sweetly: \"Aap bhi na Jetha ji... hamesha mazaak karte rehte hain\"?",
    "correctAnswer": "Babita Ji",
    "acceptableAnswers": [
      "babita",
      "babitaji",
      "babita ji"
    ]
  },
  {
    "id": "q_00233",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "True Fan Quiz: Guess the right answer: Who warns criminals: \"Hamara naam hai Inspector Chalu Pandey, jhooth bologe toh padenge dande\"?",
    "correctAnswer": "Inspector Chalu Pandey",
    "acceptableAnswers": [
      "chalu pandey",
      "inspector chalu pandey",
      "pandey ji"
    ]
  },
  {
    "id": "q_00234",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Instant Guess: Trivia check: Who yells: \"Goli beta masti nahi!\"?",
    "correctAnswer": "Jethalal Gada",
    "acceptableAnswers": [
      "jethalal",
      "jetha",
      "dr hathi"
    ]
  },
  {
    "id": "q_00235",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Lock Your Answer: Fun trivia: Who calls out lovingly: \"Sundar vira! Mera pyara bhai!\"?",
    "correctAnswer": "Dayaben Gada",
    "acceptableAnswers": [
      "daya",
      "dayaben",
      "daya bhabhi"
    ]
  },
  {
    "id": "q_00236",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Buzzer Question: Name the correct one: Who calls Champaklal: \"Beshisht mhatarya!\" in frustration?",
    "correctAnswer": "Aatmaram Bhide",
    "acceptableAnswers": [
      "bhide",
      "aatmaram bhide",
      "champaklal"
    ]
  },
  {
    "id": "q_00237",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Champion Round: Do you remember: Who says: \"Tapu Sena ready ho jao compound mein match khelne ke liye\"?",
    "correctAnswer": "Tipendra (Tapu)",
    "acceptableAnswers": [
      "tapu",
      "tipendra",
      "tapu gada"
    ]
  },
  {
    "id": "q_00238",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Can you guess? Name the correct one: What homemade business do Madhavi and Bhide run?",
    "correctAnswer": "Achaar Papad",
    "acceptableAnswers": [
      "achaar papad",
      "achar papad",
      "papad achaar",
      "papad"
    ]
  },
  {
    "id": "q_00239",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Think fast! Do you remember: What is the native Gujarati village of the Gada family?",
    "correctAnswer": "Bhachau (Kutch)",
    "acceptableAnswers": [
      "bhachau",
      "kutch",
      "bhachau kutch"
    ]
  },
  {
    "id": "q_00240",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "True Fan Quiz: Guess the right answer: In which residential wing of Gokuldham Society does Jethalal live?",
    "correctAnswer": "Wing B",
    "acceptableAnswers": [
      "b wing",
      "wing b",
      "b"
    ]
  },
  {
    "id": "q_00241",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Instant Guess: Trivia check: What is the cricket tournament played between Gokuldham members called?",
    "correctAnswer": "Gokuldham Premier League (GPL)",
    "acceptableAnswers": [
      "gpl",
      "gokuldham premier league"
    ]
  },
  {
    "id": "q_00242",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Lock Your Answer: Fun trivia: What was the team name led by Tapu in GPL?",
    "correctAnswer": "Tapu Ke Dhurandhar",
    "acceptableAnswers": [
      "tapu ke dhurandhar",
      "dhurandhar"
    ]
  },
  {
    "id": "q_00243",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Buzzer Question: Name the correct one: What was the team name led by Dayaben in GPL?",
    "correctAnswer": "Daya Dandiya Devils",
    "acceptableAnswers": [
      "daya dandiya devils",
      "dandiya devils"
    ]
  },
  {
    "id": "q_00244",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Champion Round: Do you remember: What was the team name led by Mehta Sahab in GPL?",
    "correctAnswer": "Mehta Ke Maharathi",
    "acceptableAnswers": [
      "mehta ke maharathi",
      "maharathi"
    ]
  },
  {
    "id": "q_00245",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Can you guess? Name the correct one: What is Jethalal's son Tapu's full formal name?",
    "correctAnswer": "Tipendra Gada",
    "acceptableAnswers": [
      "tipendra",
      "tipendra gada",
      "tapu"
    ]
  },
  {
    "id": "q_00246",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Think fast! Do you remember: What is Bhide's daughter Sonu's full formal name?",
    "correctAnswer": "Sonakshi Bhide",
    "acceptableAnswers": [
      "sonakshi",
      "sonakshi bhide",
      "sonu"
    ]
  },
  {
    "id": "q_00247",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "True Fan Quiz: Guess the right answer: What was the famous ghost's name in the Gokuldham haunted episode?",
    "correctAnswer": "Bhootni (Stree in White Sari)",
    "acceptableAnswers": [
      "bhootni",
      "chudail",
      "stree"
    ]
  },
  {
    "id": "q_00248",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Instant Guess: Trivia check: Who is the creator and producer of Taarak Mehta Ka Ooltah Chashmah?",
    "correctAnswer": "Asit Kumar Modi",
    "acceptableAnswers": [
      "asit kumar modi",
      "asit modi",
      "asit"
    ]
  },
  {
    "id": "q_00249",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Lock Your Answer: Fun trivia: Which actress portrayed the iconic Dayaben?",
    "correctAnswer": "Disha Vakani",
    "acceptableAnswers": [
      "disha vakani",
      "disha"
    ]
  },
  {
    "id": "q_00250",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Buzzer Question: Name the correct one: Which actor portrays Champaklal Gada (Bapuji)?",
    "correctAnswer": "Amit Bhatt",
    "acceptableAnswers": [
      "amit bhatt",
      "amit"
    ]
  },
  {
    "id": "q_00251",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Champion Round: Do you remember: Which actor portrays Aatmaram Tukaram Bhide?",
    "correctAnswer": "Mandar Chandwadkar",
    "acceptableAnswers": [
      "mandar chandwadkar",
      "mandar"
    ]
  },
  {
    "id": "q_00252",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Can you guess? Name the correct one: Which actor plays Sundarlal?",
    "correctAnswer": "Mayur Vakani",
    "acceptableAnswers": [
      "mayur vakani",
      "mayur"
    ]
  },
  {
    "id": "q_00253",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Think fast! Do you remember: Which actor portrays Inspector Chalu Pandey?",
    "correctAnswer": "Daya Shankar Pandey",
    "acceptableAnswers": [
      "daya shankar pandey",
      "dayashankar pandey"
    ]
  },
  {
    "id": "q_00254",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "True Fan Quiz: Guess the right answer: In TMKOC, which Punjabi instrument beat plays when Sodhi gets excited for party sharty?",
    "correctAnswer": "Bhangra Dhol / Dholak",
    "acceptableAnswers": [
      "bhangra dhol",
      "dhol",
      "punjabi dhol",
      "dholak"
    ]
  },
  {
    "id": "q_00255",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Instant Guess: Trivia check: In TMKOC, what eerie whistling sound played during the spooky Bhootni episodes?",
    "correctAnswer": "Bhootni Whistling Flute",
    "acceptableAnswers": [
      "bhootni whistle",
      "whistle",
      "flute",
      "spooky whistle"
    ]
  },
  {
    "id": "q_00256",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Lock Your Answer: Fun trivia: In TMKOC, what peaceful instrument plays when Taarak Mehta delivers the moral ending?",
    "correctAnswer": "Acoustic Sitar / Flute Moral Theme",
    "acceptableAnswers": [
      "sitar",
      "flute",
      "moral theme",
      "ending theme"
    ]
  },
  {
    "id": "q_00257",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Buzzer Question: Name the correct one: Who says: \"Chai piyo, biscuit khao... chai piyo, biscuit khao\"?",
    "correctAnswer": "Jethalal Gada",
    "acceptableAnswers": [
      "jethalal",
      "jetha",
      "jethalal gada",
      "jethabhai"
    ]
  },
  {
    "id": "q_00258",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Champion Round: Do you remember: Who says the iconic line: \"Ae pagal aurat!\" in Gokuldham?",
    "correctAnswer": "Jethalal Gada",
    "acceptableAnswers": [
      "jethalal",
      "jetha",
      "jethalal gada"
    ]
  },
  {
    "id": "q_00259",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Can you guess? Name the correct one: Who says: \"Jaisi jiski soch! Sahi baat hai sethji\"?",
    "correctAnswer": "Bagha (Bagheshwar)",
    "acceptableAnswers": [
      "bagha",
      "bagheshwar"
    ]
  },
  {
    "id": "q_00260",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Think fast! Do you remember: Who asks Jethalal: \"Sethji aapne mujhe bulaya? Meri payment badhane ki baat chal rahi hai kya\"?",
    "correctAnswer": "Natu Kaka",
    "acceptableAnswers": [
      "natu kaka",
      "nattu kaka",
      "natu"
    ]
  },
  {
    "id": "q_00261",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "True Fan Quiz: Guess the right answer: Who responds to every dish discussion with: \"Sahi baat hai!\"?",
    "correctAnswer": "Dr. Hansraj Hathi",
    "acceptableAnswers": [
      "dr hathi",
      "doctor hathi",
      "hathi",
      "hansraj hathi"
    ]
  },
  {
    "id": "q_00262",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Instant Guess: Trivia check: Who says: \"Haye haye galti se mistake ho gayi\"?",
    "correctAnswer": "Bawri Dhondulal Ghadhave",
    "acceptableAnswers": [
      "bawri",
      "baori",
      "bawri dhondulal ghadhave"
    ]
  },
  {
    "id": "q_00263",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Lock Your Answer: Fun trivia: Who says: \"Behen Dayaben ke ghar se kabhi khaali haath nahi laut-te\"?",
    "correctAnswer": "Sundarlal",
    "acceptableAnswers": [
      "sundarlal",
      "sundar",
      "sundar lal"
    ]
  },
  {
    "id": "q_00264",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Buzzer Question: Name the correct one: Who yells: \"Goli beta masti nahi!\"?",
    "correctAnswer": "Jethalal Gada",
    "acceptableAnswers": [
      "jethalal",
      "jetha",
      "dr hathi"
    ]
  },
  {
    "id": "q_00265",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Champion Round: Do you remember: Who yells: \"Sonu beta masti nahi!\"?",
    "correctAnswer": "Aatmaram Bhide",
    "acceptableAnswers": [
      "bhide",
      "aatmaram bhide"
    ]
  },
  {
    "id": "q_00266",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Can you guess? Name the correct one: What object does Patrakar Popatlal always carry with him?",
    "correctAnswer": "Umbrella (Chhatri)",
    "acceptableAnswers": [
      "umbrella",
      "chhatri",
      "chata"
    ]
  },
  {
    "id": "q_00267",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Think fast! Do you remember: What diet vegetable juice does Anjali force Taarak Mehta to drink?",
    "correctAnswer": "Karela Juice (Bitter Gourd)",
    "acceptableAnswers": [
      "karela juice",
      "karela",
      "diet food"
    ]
  },
  {
    "id": "q_00268",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "True Fan Quiz: Guess the right answer: What is the name of Roshan Singh Sodhi's motor workshop?",
    "correctAnswer": "Sodhi Garage",
    "acceptableAnswers": [
      "sodhi garage",
      "garage"
    ]
  },
  {
    "id": "q_00269",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Instant Guess: Trivia check: What is written every morning by Bhide on the society notice board?",
    "correctAnswer": "Suvichar (Thought of the Day)",
    "acceptableAnswers": [
      "suvichar",
      "thought of the day"
    ]
  },
  {
    "id": "q_00270",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Lock Your Answer: Fun trivia: In which residential wing of Gokuldham Society does Aatmaram Bhide live?",
    "correctAnswer": "Wing A",
    "acceptableAnswers": [
      "a wing",
      "wing a",
      "a"
    ]
  },
  {
    "id": "q_00271",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Buzzer Question: Name the correct one: What is the cricket tournament played between Gokuldham members called?",
    "correctAnswer": "Gokuldham Premier League (GPL)",
    "acceptableAnswers": [
      "gpl",
      "gokuldham premier league"
    ]
  },
  {
    "id": "q_00272",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Champion Round: Do you remember: What was the team name led by Jethalal in GPL?",
    "correctAnswer": "Jetha Ke Janbaaz",
    "acceptableAnswers": [
      "jetha ke janbaaz",
      "janbaaz"
    ]
  },
  {
    "id": "q_00273",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Can you guess? Name the correct one: What is Dr. Hathi's full first name in TMKOC?",
    "correctAnswer": "Hansraj",
    "acceptableAnswers": [
      "hansraj",
      "hansraj hathi",
      "dr hansraj"
    ]
  },
  {
    "id": "q_00274",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Think fast! Do you remember: What is Dr. Hathi's son Goli's full formal name?",
    "correctAnswer": "Gulabkumar Hathi",
    "acceptableAnswers": [
      "gulabkumar",
      "gulabkumar hathi",
      "goli"
    ]
  },
  {
    "id": "q_00275",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "True Fan Quiz: Guess the right answer: What is Pinku's full name in Tapu Sena?",
    "correctAnswer": "Pankaj Diwan Sahay",
    "acceptableAnswers": [
      "pankaj",
      "pinku",
      "pankaj diwan"
    ]
  },
  {
    "id": "q_00276",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Instant Guess: Trivia check: Which girl with a speech impediment did Popatlal try to marry?",
    "correctAnswer": "Bulbul",
    "acceptableAnswers": [
      "bulbul"
    ]
  },
  {
    "id": "q_00277",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Lock Your Answer: Fun trivia: Which politician did Jethalal confront during election campaign arc?",
    "correctAnswer": "Sevaklal",
    "acceptableAnswers": [
      "sevaklal",
      "neta sevaklal"
    ]
  },
  {
    "id": "q_00278",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Buzzer Question: Name the correct one: Who is the creator and producer of Taarak Mehta Ka Ooltah Chashmah?",
    "correctAnswer": "Asit Kumar Modi",
    "acceptableAnswers": [
      "asit kumar modi",
      "asit modi",
      "asit"
    ]
  },
  {
    "id": "q_00279",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Champion Round: Do you remember: Which actor portrays Jethalal Champaklal Gada?",
    "correctAnswer": "Dilip Joshi",
    "acceptableAnswers": [
      "dilip joshi",
      "dilip"
    ]
  },
  {
    "id": "q_00280",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Can you guess? Name the correct one: Which actor portrayed Dr. Hansraj Hathi originally?",
    "correctAnswer": "Kavi Kumar Azad",
    "acceptableAnswers": [
      "kavi kumar azad",
      "kavi kumar",
      "dr hathi"
    ]
  },
  {
    "id": "q_00281",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Think fast! Do you remember: Which actor portrays Roshan Singh Sodhi originally?",
    "correctAnswer": "Gurucharan Singh",
    "acceptableAnswers": [
      "gurucharan singh",
      "gurucharan"
    ]
  },
  {
    "id": "q_00282",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "True Fan Quiz: Guess the right answer: In TMKOC, what rhythmic Gujarati drum beat plays whenever Dayaben starts dancing?",
    "correctAnswer": "Garba Dhol Beat",
    "acceptableAnswers": [
      "garba dhol",
      "garba beat",
      "dhol",
      "garba"
    ]
  },
  {
    "id": "q_00283",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Instant Guess: Trivia check: In TMKOC, which musical instrument plays a sad melody when Popatlal is rejected?",
    "correctAnswer": "Shehnai / Sad Flute",
    "acceptableAnswers": [
      "shehnai",
      "flute",
      "sad flute",
      "bansuri"
    ]
  },
  {
    "id": "q_00284",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Lock Your Answer: Fun trivia: In TMKOC, which classical South Indian music plays during Jethalal and Iyer faceoffs?",
    "correctAnswer": "Nadaswaram / Carnatic BGM",
    "acceptableAnswers": [
      "nadaswaram",
      "carnatic",
      "south indian music"
    ]
  },
  {
    "id": "q_00285",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Buzzer Question: Name the correct one: In TMKOC, what eerie whistling sound played during the spooky Bhootni episodes?",
    "correctAnswer": "Bhootni Whistling Flute",
    "acceptableAnswers": [
      "bhootni whistle",
      "whistle",
      "flute",
      "spooky whistle"
    ]
  },
  {
    "id": "q_00286",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Champion Round: Do you remember: In TMKOC, what siren sound effect plays when Inspector Chalu Pandey arrives on jeep?",
    "correctAnswer": "Police Siren",
    "acceptableAnswers": [
      "police siren",
      "siren",
      "police"
    ]
  },
  {
    "id": "q_00287",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Can you guess? Name the correct one: Who introduces himself as: \"Main Aatmaram Tukaram Bhide, Gokuldham Society ka ekmev Secretary\"?",
    "correctAnswer": "Aatmaram Bhide",
    "acceptableAnswers": [
      "bhide",
      "aatmaram bhide",
      "atmaram bhide",
      "aatmaram"
    ]
  },
  {
    "id": "q_00288",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Think fast! Do you remember: Who frequently reminds everyone: \"Hamare zamane mein aisi padhai hoti thi\"?",
    "correctAnswer": "Aatmaram Bhide",
    "acceptableAnswers": [
      "bhide",
      "aatmaram bhide",
      "atmaram bhide"
    ]
  },
  {
    "id": "q_00289",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "True Fan Quiz: Guess the right answer: Who greets with: \"Oye paapa ji! Balle Balle! Aaj party sharty hogi\"?",
    "correctAnswer": "Roshan Singh Sodhi",
    "acceptableAnswers": [
      "sodhi",
      "roshan singh sodhi",
      "roshan sodhi"
    ]
  },
  {
    "id": "q_00290",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Instant Guess: Trivia check: Who says sweetly: \"Aap bhi na Jetha ji... hamesha mazaak karte rehte hain\"?",
    "correctAnswer": "Babita Ji",
    "acceptableAnswers": [
      "babita",
      "babitaji",
      "babita ji"
    ]
  },
  {
    "id": "q_00291",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Lock Your Answer: Fun trivia: Who says: \"Oh come on, Hathi ji!\"?",
    "correctAnswer": "Komal Hathi",
    "acceptableAnswers": [
      "komal",
      "komal hathi",
      "komal bhabhi"
    ]
  },
  {
    "id": "q_00292",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Buzzer Question: Name the correct one: Who says: \"Haye haye galti se mistake ho gayi\"?",
    "correctAnswer": "Bawri Dhondulal Ghadhave",
    "acceptableAnswers": [
      "bawri",
      "baori",
      "bawri dhondulal ghadhave"
    ]
  },
  {
    "id": "q_00293",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Champion Round: Do you remember: Who warns criminals: \"Hamara naam hai Inspector Chalu Pandey, jhooth bologe toh padenge dande\"?",
    "correctAnswer": "Inspector Chalu Pandey",
    "acceptableAnswers": [
      "chalu pandey",
      "inspector chalu pandey",
      "pandey ji"
    ]
  },
  {
    "id": "q_00294",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Can you guess? Name the correct one: What is the name of Jethalal's electronics showroom?",
    "correctAnswer": "Gada Electronics",
    "acceptableAnswers": [
      "gada electronics",
      "gada electronic"
    ]
  },
  {
    "id": "q_00295",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Think fast! Do you remember: What is Patrakar Popatlal's workplace newspaper name?",
    "correctAnswer": "Toofan Express",
    "acceptableAnswers": [
      "toofan express",
      "toofan"
    ]
  },
  {
    "id": "q_00296",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "True Fan Quiz: Guess the right answer: What is Jethalal's favorite Sunday morning Gujarati breakfast?",
    "correctAnswer": "Jalebi Fafda",
    "acceptableAnswers": [
      "jalebi fafda",
      "fafda jalebi",
      "fafda",
      "jalebi"
    ]
  },
  {
    "id": "q_00297",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Instant Guess: Trivia check: What is the native Gujarati village of the Gada family?",
    "correctAnswer": "Bhachau (Kutch)",
    "acceptableAnswers": [
      "bhachau",
      "kutch",
      "bhachau kutch"
    ]
  },
  {
    "id": "q_00298",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Lock Your Answer: Fun trivia: What is the name of Abdul's convenience store outside Gokuldham?",
    "correctAnswer": "All in One General Store",
    "acceptableAnswers": [
      "all in one",
      "all in one general store",
      "general store"
    ]
  },
  {
    "id": "q_00299",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Buzzer Question: Name the correct one: What is written every morning by Bhide on the society notice board?",
    "correctAnswer": "Suvichar (Thought of the Day)",
    "acceptableAnswers": [
      "suvichar",
      "thought of the day"
    ]
  },
  {
    "id": "q_00300",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Champion Round: Do you remember: In which residential wing of Gokuldham Society does Jethalal live?",
    "correctAnswer": "Wing B",
    "acceptableAnswers": [
      "b wing",
      "wing b",
      "b"
    ]
  },
  {
    "id": "q_00301",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Can you guess? Name the correct one: What is the name of the quiet employee in Gada Electronics who rarely speaks?",
    "correctAnswer": "Magan",
    "acceptableAnswers": [
      "magan",
      "magan bhai"
    ]
  },
  {
    "id": "q_00302",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Think fast! Do you remember: What is the name of Dayaben's brother who always asks Jethalal for money?",
    "correctAnswer": "Sundarlal",
    "acceptableAnswers": [
      "sundarlal",
      "sundar",
      "sundar lal"
    ]
  },
  {
    "id": "q_00303",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "True Fan Quiz: Guess the right answer: What is Sodhi's son Gogi's full formal name?",
    "correctAnswer": "Gurucharan Singh Sodhi",
    "acceptableAnswers": [
      "gurucharan",
      "gurucharan singh",
      "gogi"
    ]
  },
  {
    "id": "q_00304",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Instant Guess: Trivia check: What is Bhide's daughter Sonu's full formal name?",
    "correctAnswer": "Sonakshi Bhide",
    "acceptableAnswers": [
      "sonakshi",
      "sonakshi bhide",
      "sonu"
    ]
  },
  {
    "id": "q_00305",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Lock Your Answer: Fun trivia: Which foreign bride was arranged for Popatlal from England?",
    "correctAnswer": "Kerry",
    "acceptableAnswers": [
      "kerry",
      "carry"
    ]
  },
  {
    "id": "q_00306",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Buzzer Question: Name the correct one: Which girl with a speech impediment did Popatlal try to marry?",
    "correctAnswer": "Bulbul",
    "acceptableAnswers": [
      "bulbul"
    ]
  },
  {
    "id": "q_00307",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Champion Round: Do you remember: What was the famous ghost's name in the Gokuldham haunted episode?",
    "correctAnswer": "Bhootni (Stree in White Sari)",
    "acceptableAnswers": [
      "bhootni",
      "chudail",
      "stree"
    ]
  },
  {
    "id": "q_00308",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Can you guess? Name the correct one: Which actor portrayed the beloved Natu Kaka?",
    "correctAnswer": "Ghanshyam Nayak",
    "acceptableAnswers": [
      "ghanshyam nayak",
      "ghanshyam"
    ]
  },
  {
    "id": "q_00309",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Think fast! Do you remember: Which actor portrays Bagha in TMKOC?",
    "correctAnswer": "Tanmay Vekaria",
    "acceptableAnswers": [
      "tanmay vekaria",
      "tanmay"
    ]
  },
  {
    "id": "q_00310",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "True Fan Quiz: Guess the right answer: Which actor played the original Tapu (Tipendra Gada)?",
    "correctAnswer": "Bhavya Gandhi",
    "acceptableAnswers": [
      "bhavya gandhi",
      "bhavya"
    ]
  },
  {
    "id": "q_00311",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Instant Guess: Trivia check: Which actor portrays Inspector Chalu Pandey?",
    "correctAnswer": "Daya Shankar Pandey",
    "acceptableAnswers": [
      "daya shankar pandey",
      "dayashankar pandey"
    ]
  },
  {
    "id": "q_00312",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Lock Your Answer: Fun trivia: In TMKOC, what rapid tension sound effect plays when Jethalal lands in trouble?",
    "correctAnswer": "Dhin-Tana-Na / Tabdeek Tabdeek",
    "acceptableAnswers": [
      "dhin tana na",
      "tabdeek",
      "tension bgm"
    ]
  },
  {
    "id": "q_00313",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Buzzer Question: Name the correct one: In TMKOC, which musical instrument plays a sad melody when Popatlal is rejected?",
    "correctAnswer": "Shehnai / Sad Flute",
    "acceptableAnswers": [
      "shehnai",
      "flute",
      "sad flute",
      "bansuri"
    ]
  },
  {
    "id": "q_00314",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Champion Round: Do you remember: In TMKOC, which Punjabi instrument beat plays when Sodhi gets excited for party sharty?",
    "correctAnswer": "Bhangra Dhol / Dholak",
    "acceptableAnswers": [
      "bhangra dhol",
      "dhol",
      "punjabi dhol",
      "dholak"
    ]
  },
  {
    "id": "q_00315",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Can you guess? Name the correct one: Who says: \"Mera cancel kardo!\" whenever marriage talks fail?",
    "correctAnswer": "Patrakar Popatlal",
    "acceptableAnswers": [
      "popatlal",
      "patrakar popatlal",
      "popat"
    ]
  },
  {
    "id": "q_00316",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Think fast! Do you remember: Who screams: \"Nahane ja nahane! Ek thappad marunga toh zameen pe gir padega!\"?",
    "correctAnswer": "Champaklal (Bapuji)",
    "acceptableAnswers": [
      "champaklal",
      "bapuji",
      "champak chacha",
      "dadaji"
    ]
  },
  {
    "id": "q_00317",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "True Fan Quiz: Guess the right answer: Who says: \"Aata maajhi satakli nahi, yeh Bhide chi satakli!\"?",
    "correctAnswer": "Aatmaram Bhide",
    "acceptableAnswers": [
      "bhide",
      "aatmaram bhide"
    ]
  },
  {
    "id": "q_00318",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Instant Guess: Trivia check: Who asks Jethalal: \"Sethji aapne mujhe bulaya? Meri payment badhane ki baat chal rahi hai kya\"?",
    "correctAnswer": "Natu Kaka",
    "acceptableAnswers": [
      "natu kaka",
      "nattu kaka",
      "natu"
    ]
  },
  {
    "id": "q_00319",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Lock Your Answer: Fun trivia: Who says: \"Aiyyo! Vanakkam! Main scientist Krishnan Subramaniam Iyer\"?",
    "correctAnswer": "Krishnan Subramaniam Iyer",
    "acceptableAnswers": [
      "iyer",
      "krishnan iyer",
      "subramaniam iyer"
    ]
  },
  {
    "id": "q_00320",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Buzzer Question: Name the correct one: Who says sweetly: \"Aap bhi na Jetha ji... hamesha mazaak karte rehte hain\"?",
    "correctAnswer": "Babita Ji",
    "acceptableAnswers": [
      "babita",
      "babitaji",
      "babita ji"
    ]
  },
  {
    "id": "q_00321",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Champion Round: Do you remember: Who responds to every dish discussion with: \"Sahi baat hai!\"?",
    "correctAnswer": "Dr. Hansraj Hathi",
    "acceptableAnswers": [
      "dr hathi",
      "doctor hathi",
      "hathi",
      "hansraj hathi"
    ]
  },
  {
    "id": "q_00322",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Can you guess? Name the correct one: Who says: \"Tapu Sena ready ho jao compound mein match khelne ke liye\"?",
    "correctAnswer": "Tipendra (Tapu)",
    "acceptableAnswers": [
      "tapu",
      "tipendra",
      "tapu gada"
    ]
  },
  {
    "id": "q_00323",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Think fast! Do you remember: Who serves soda and groceries outside Gokuldham Society?",
    "correctAnswer": "Abdul",
    "acceptableAnswers": [
      "abdul",
      "abdul bhai"
    ]
  },
  {
    "id": "q_00324",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "True Fan Quiz: Guess the right answer: What award did Patrakar Popatlal win in journalism?",
    "correctAnswer": "Golden Crow Award",
    "acceptableAnswers": [
      "golden crow award",
      "golden crow"
    ]
  },
  {
    "id": "q_00325",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Instant Guess: Trivia check: What diet vegetable juice does Anjali force Taarak Mehta to drink?",
    "correctAnswer": "Karela Juice (Bitter Gourd)",
    "acceptableAnswers": [
      "karela juice",
      "karela",
      "diet food"
    ]
  },
  {
    "id": "q_00326",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Lock Your Answer: Fun trivia: What homemade business do Madhavi and Bhide run?",
    "correctAnswer": "Achaar Papad",
    "acceptableAnswers": [
      "achaar papad",
      "achar papad",
      "papad achaar",
      "papad"
    ]
  },
  {
    "id": "q_00327",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Buzzer Question: Name the correct one: What is the native Gujarati village of the Gada family?",
    "correctAnswer": "Bhachau (Kutch)",
    "acceptableAnswers": [
      "bhachau",
      "kutch",
      "bhachau kutch"
    ]
  },
  {
    "id": "q_00328",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Champion Round: Do you remember: What is the name of Roshan Singh Sodhi's motor workshop?",
    "correctAnswer": "Sodhi Garage",
    "acceptableAnswers": [
      "sodhi garage",
      "garage"
    ]
  },
  {
    "id": "q_00329",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Can you guess? Name the correct one: What was the team name led by Mehta Sahab in GPL?",
    "correctAnswer": "Mehta Ke Maharathi",
    "acceptableAnswers": [
      "mehta ke maharathi",
      "maharathi"
    ]
  },
  {
    "id": "q_00330",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Think fast! Do you remember: What is the name of Natu Kaka's nephew who works in Gada Electronics?",
    "correctAnswer": "Bagha (Bagheshwar)",
    "acceptableAnswers": [
      "bagha",
      "bagheshwar"
    ]
  },
  {
    "id": "q_00331",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "True Fan Quiz: Guess the right answer: Who is known as Jethalal's \"Fire Brigade\" for solving all problems?",
    "correctAnswer": "Taarak Mehta",
    "acceptableAnswers": [
      "taarak mehta",
      "tarak mehta",
      "mehta sahab"
    ]
  },
  {
    "id": "q_00332",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Instant Guess: Trivia check: What is Dr. Hathi's son Goli's full formal name?",
    "correctAnswer": "Gulabkumar Hathi",
    "acceptableAnswers": [
      "gulabkumar",
      "gulabkumar hathi",
      "goli"
    ]
  },
  {
    "id": "q_00333",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Lock Your Answer: Fun trivia: What is Jethalal's son Tapu's full formal name?",
    "correctAnswer": "Tipendra Gada",
    "acceptableAnswers": [
      "tipendra",
      "tipendra gada",
      "tapu"
    ]
  },
  {
    "id": "q_00334",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Buzzer Question: Name the correct one: What is Bhide's daughter Sonu's full formal name?",
    "correctAnswer": "Sonakshi Bhide",
    "acceptableAnswers": [
      "sonakshi",
      "sonakshi bhide",
      "sonu"
    ]
  },
  {
    "id": "q_00335",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Champion Round: Do you remember: What is Pinku's full name in Tapu Sena?",
    "correctAnswer": "Pankaj Diwan Sahay",
    "acceptableAnswers": [
      "pankaj",
      "pinku",
      "pankaj diwan"
    ]
  },
  {
    "id": "q_00336",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Can you guess? Name the correct one: Which actor portrays Aatmaram Tukaram Bhide?",
    "correctAnswer": "Mandar Chandwadkar",
    "acceptableAnswers": [
      "mandar chandwadkar",
      "mandar"
    ]
  },
  {
    "id": "q_00337",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Think fast! Do you remember: Which actor portrays Patrakar Popatlal?",
    "correctAnswer": "Shyam Pathak",
    "acceptableAnswers": [
      "shyam pathak",
      "shyam"
    ]
  },
  {
    "id": "q_00338",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "True Fan Quiz: Guess the right answer: Which actor portrays Krishnan Subramaniam Iyer?",
    "correctAnswer": "Tanuj Mahashabde",
    "acceptableAnswers": [
      "tanuj mahashabde",
      "tanuj"
    ]
  },
  {
    "id": "q_00339",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Instant Guess: Trivia check: Which actor portrays Roshan Singh Sodhi originally?",
    "correctAnswer": "Gurucharan Singh",
    "acceptableAnswers": [
      "gurucharan singh",
      "gurucharan"
    ]
  },
  {
    "id": "q_00340",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Lock Your Answer: Fun trivia: Which actor plays Sundarlal?",
    "correctAnswer": "Mayur Vakani",
    "acceptableAnswers": [
      "mayur vakani",
      "mayur"
    ]
  },
  {
    "id": "q_00341",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Buzzer Question: Name the correct one: Which actor portrays Inspector Chalu Pandey?",
    "correctAnswer": "Daya Shankar Pandey",
    "acceptableAnswers": [
      "daya shankar pandey",
      "dayashankar pandey"
    ]
  },
  {
    "id": "q_00342",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Champion Round: Do you remember: In TMKOC, what rhythmic Gujarati drum beat plays whenever Dayaben starts dancing?",
    "correctAnswer": "Garba Dhol Beat",
    "acceptableAnswers": [
      "garba dhol",
      "garba beat",
      "dhol",
      "garba"
    ]
  },
  {
    "id": "q_00343",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Can you guess? Name the correct one: Who says the iconic line: \"Ae pagal aurat!\" in Gokuldham?",
    "correctAnswer": "Jethalal Gada",
    "acceptableAnswers": [
      "jethalal",
      "jetha",
      "jethalal gada"
    ]
  },
  {
    "id": "q_00344",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Think fast! Do you remember: Who says: \"Hey Maa Mataji! Tapu ke papa!\"?",
    "correctAnswer": "Dayaben Gada",
    "acceptableAnswers": [
      "daya",
      "dayaben",
      "daya bhabhi",
      "daya gada"
    ]
  },
  {
    "id": "q_00345",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "True Fan Quiz: Guess the right answer: Who addresses Jethalal as \"Jethiya!\" whenever angry?",
    "correctAnswer": "Champaklal (Bapuji)",
    "acceptableAnswers": [
      "champaklal",
      "bapuji",
      "champak chacha"
    ]
  },
  {
    "id": "q_00346",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Instant Guess: Trivia check: Who frequently reminds everyone: \"Hamare zamane mein aisi padhai hoti thi\"?",
    "correctAnswer": "Aatmaram Bhide",
    "acceptableAnswers": [
      "bhide",
      "aatmaram bhide",
      "atmaram bhide"
    ]
  },
  {
    "id": "q_00347",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Lock Your Answer: Fun trivia: Who says: \"Jaisi jiski soch! Sahi baat hai sethji\"?",
    "correctAnswer": "Bagha (Bagheshwar)",
    "acceptableAnswers": [
      "bagha",
      "bagheshwar"
    ]
  },
  {
    "id": "q_00348",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Buzzer Question: Name the correct one: Who asks Jethalal: \"Sethji aapne mujhe bulaya? Meri payment badhane ki baat chal rahi hai kya\"?",
    "correctAnswer": "Natu Kaka",
    "acceptableAnswers": [
      "natu kaka",
      "nattu kaka",
      "natu"
    ]
  },
  {
    "id": "q_00349",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Champion Round: Do you remember: Who greets with: \"Oye paapa ji! Balle Balle! Aaj party sharty hogi\"?",
    "correctAnswer": "Roshan Singh Sodhi",
    "acceptableAnswers": [
      "sodhi",
      "roshan singh sodhi",
      "roshan sodhi"
    ]
  },
  {
    "id": "q_00350",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Can you guess? Name the correct one: Who yells: \"Sonu beta masti nahi!\"?",
    "correctAnswer": "Aatmaram Bhide",
    "acceptableAnswers": [
      "bhide",
      "aatmaram bhide"
    ]
  },
  {
    "id": "q_00351",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Think fast! Do you remember: Who calls out lovingly: \"Sundar vira! Mera pyara bhai!\"?",
    "correctAnswer": "Dayaben Gada",
    "acceptableAnswers": [
      "daya",
      "dayaben",
      "daya bhabhi"
    ]
  },
  {
    "id": "q_00352",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "True Fan Quiz: Guess the right answer: What is the name of Aatmaram Bhide's vintage yellow scooter?",
    "correctAnswer": "Sakharam",
    "acceptableAnswers": [
      "sakharam",
      "sakharam scooter"
    ]
  },
  {
    "id": "q_00353",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Instant Guess: Trivia check: What is Patrakar Popatlal's workplace newspaper name?",
    "correctAnswer": "Toofan Express",
    "acceptableAnswers": [
      "toofan express",
      "toofan"
    ]
  },
  {
    "id": "q_00354",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Lock Your Answer: Fun trivia: What object does Patrakar Popatlal always carry with him?",
    "correctAnswer": "Umbrella (Chhatri)",
    "acceptableAnswers": [
      "umbrella",
      "chhatri",
      "chata"
    ]
  },
  {
    "id": "q_00355",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Buzzer Question: Name the correct one: What diet vegetable juice does Anjali force Taarak Mehta to drink?",
    "correctAnswer": "Karela Juice (Bitter Gourd)",
    "acceptableAnswers": [
      "karela juice",
      "karela",
      "diet food"
    ]
  },
  {
    "id": "q_00356",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Champion Round: Do you remember: What is Jethalal's favorite Sunday morning Gujarati breakfast?",
    "correctAnswer": "Jalebi Fafda",
    "acceptableAnswers": [
      "jalebi fafda",
      "fafda jalebi",
      "fafda",
      "jalebi"
    ]
  },
  {
    "id": "q_00357",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Can you guess? Name the correct one: What was the team name led by Jethalal in GPL?",
    "correctAnswer": "Jetha Ke Janbaaz",
    "acceptableAnswers": [
      "jetha ke janbaaz",
      "janbaaz"
    ]
  },
  {
    "id": "q_00358",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Think fast! Do you remember: What was the team name led by Tapu in GPL?",
    "correctAnswer": "Tapu Ke Dhurandhar",
    "acceptableAnswers": [
      "tapu ke dhurandhar",
      "dhurandhar"
    ]
  },
  {
    "id": "q_00359",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "True Fan Quiz: Guess the right answer: What is the name of Bagha's forgetful fiancee?",
    "correctAnswer": "Bawri Dhondulal Ghadhave",
    "acceptableAnswers": [
      "bawri",
      "bawri dhondulal ghadhave",
      "baori"
    ]
  },
  {
    "id": "q_00360",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Instant Guess: Trivia check: What is the name of Dayaben's brother who always asks Jethalal for money?",
    "correctAnswer": "Sundarlal",
    "acceptableAnswers": [
      "sundarlal",
      "sundar",
      "sundar lal"
    ]
  },
  {
    "id": "q_00361",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Lock Your Answer: Fun trivia: What is Dr. Hathi's full first name in TMKOC?",
    "correctAnswer": "Hansraj",
    "acceptableAnswers": [
      "hansraj",
      "hansraj hathi",
      "dr hansraj"
    ]
  },
  {
    "id": "q_00362",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Buzzer Question: Name the correct one: What is Dr. Hathi's son Goli's full formal name?",
    "correctAnswer": "Gulabkumar Hathi",
    "acceptableAnswers": [
      "gulabkumar",
      "gulabkumar hathi",
      "goli"
    ]
  },
  {
    "id": "q_00363",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Champion Round: Do you remember: What is Sodhi's son Gogi's full formal name?",
    "correctAnswer": "Gurucharan Singh Sodhi",
    "acceptableAnswers": [
      "gurucharan",
      "gurucharan singh",
      "gogi"
    ]
  },
  {
    "id": "q_00364",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Can you guess? Name the correct one: Which actor portrays Jethalal Champaklal Gada?",
    "correctAnswer": "Dilip Joshi",
    "acceptableAnswers": [
      "dilip joshi",
      "dilip"
    ]
  },
  {
    "id": "q_00365",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Think fast! Do you remember: Which actress portrayed the iconic Dayaben?",
    "correctAnswer": "Disha Vakani",
    "acceptableAnswers": [
      "disha vakani",
      "disha"
    ]
  },
  {
    "id": "q_00366",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "True Fan Quiz: Guess the right answer: Which actress portrays Babita Ji?",
    "correctAnswer": "Munmun Dutta",
    "acceptableAnswers": [
      "munmun dutta",
      "munmun"
    ]
  },
  {
    "id": "q_00367",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Instant Guess: Trivia check: Which actor portrays Bagha in TMKOC?",
    "correctAnswer": "Tanmay Vekaria",
    "acceptableAnswers": [
      "tanmay vekaria",
      "tanmay"
    ]
  },
  {
    "id": "q_00368",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Lock Your Answer: Fun trivia: Which actor portrayed Dr. Hansraj Hathi originally?",
    "correctAnswer": "Kavi Kumar Azad",
    "acceptableAnswers": [
      "kavi kumar azad",
      "kavi kumar",
      "dr hathi"
    ]
  },
  {
    "id": "q_00369",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Buzzer Question: Name the correct one: Which actor portrays Roshan Singh Sodhi originally?",
    "correctAnswer": "Gurucharan Singh",
    "acceptableAnswers": [
      "gurucharan singh",
      "gurucharan"
    ]
  },
  {
    "id": "q_00370",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Champion Round: Do you remember: Which actor played the original Tapu (Tipendra Gada)?",
    "correctAnswer": "Bhavya Gandhi",
    "acceptableAnswers": [
      "bhavya gandhi",
      "bhavya"
    ]
  },
  {
    "id": "q_00371",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Can you guess? Name the correct one: In TMKOC, what siren sound effect plays when Inspector Chalu Pandey arrives on jeep?",
    "correctAnswer": "Police Siren",
    "acceptableAnswers": [
      "police siren",
      "siren",
      "police"
    ]
  },
  {
    "id": "q_00372",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Think fast! Do you remember: In TMKOC, what peaceful instrument plays when Taarak Mehta delivers the moral ending?",
    "correctAnswer": "Acoustic Sitar / Flute Moral Theme",
    "acceptableAnswers": [
      "sitar",
      "flute",
      "moral theme",
      "ending theme"
    ]
  },
  {
    "id": "q_00373",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "True Fan Quiz: Guess the right answer: Who declares: \"Duniya hila dunga! Patrakar Popatlal Golden Crow Award winner\"?",
    "correctAnswer": "Patrakar Popatlal",
    "acceptableAnswers": [
      "popatlal",
      "patrakar popatlal",
      "popat"
    ]
  },
  {
    "id": "q_00374",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Instant Guess: Trivia check: Who screams: \"Nahane ja nahane! Ek thappad marunga toh zameen pe gir padega!\"?",
    "correctAnswer": "Champaklal (Bapuji)",
    "acceptableAnswers": [
      "champaklal",
      "bapuji",
      "champak chacha",
      "dadaji"
    ]
  },
  {
    "id": "q_00375",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Lock Your Answer: Fun trivia: Who introduces himself as: \"Main Aatmaram Tukaram Bhide, Gokuldham Society ka ekmev Secretary\"?",
    "correctAnswer": "Aatmaram Bhide",
    "acceptableAnswers": [
      "bhide",
      "aatmaram bhide",
      "atmaram bhide",
      "aatmaram"
    ]
  },
  {
    "id": "q_00376",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Buzzer Question: Name the correct one: Who frequently reminds everyone: \"Hamare zamane mein aisi padhai hoti thi\"?",
    "correctAnswer": "Aatmaram Bhide",
    "acceptableAnswers": [
      "bhide",
      "aatmaram bhide",
      "atmaram bhide"
    ]
  },
  {
    "id": "q_00377",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Champion Round: Do you remember: Who says: \"Aata maajhi satakli nahi, yeh Bhide chi satakli!\"?",
    "correctAnswer": "Aatmaram Bhide",
    "acceptableAnswers": [
      "bhide",
      "aatmaram bhide"
    ]
  },
  {
    "id": "q_00378",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Can you guess? Name the correct one: Who warns criminals: \"Hamara naam hai Inspector Chalu Pandey, jhooth bologe toh padenge dande\"?",
    "correctAnswer": "Inspector Chalu Pandey",
    "acceptableAnswers": [
      "chalu pandey",
      "inspector chalu pandey",
      "pandey ji"
    ]
  },
  {
    "id": "q_00379",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Think fast! Do you remember: Who says: \"Behen Dayaben ke ghar se kabhi khaali haath nahi laut-te\"?",
    "correctAnswer": "Sundarlal",
    "acceptableAnswers": [
      "sundarlal",
      "sundar",
      "sundar lal"
    ]
  },
  {
    "id": "q_00380",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "True Fan Quiz: Guess the right answer: Who calls Champaklal: \"Beshisht mhatarya!\" in frustration?",
    "correctAnswer": "Aatmaram Bhide",
    "acceptableAnswers": [
      "bhide",
      "aatmaram bhide",
      "champaklal"
    ]
  },
  {
    "id": "q_00381",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Instant Guess: Trivia check: Who serves soda and groceries outside Gokuldham Society?",
    "correctAnswer": "Abdul",
    "acceptableAnswers": [
      "abdul",
      "abdul bhai"
    ]
  },
  {
    "id": "q_00382",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Lock Your Answer: Fun trivia: What is the name of Jethalal's electronics showroom?",
    "correctAnswer": "Gada Electronics",
    "acceptableAnswers": [
      "gada electronics",
      "gada electronic"
    ]
  },
  {
    "id": "q_00383",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Buzzer Question: Name the correct one: What is Patrakar Popatlal's workplace newspaper name?",
    "correctAnswer": "Toofan Express",
    "acceptableAnswers": [
      "toofan express",
      "toofan"
    ]
  },
  {
    "id": "q_00384",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Champion Round: Do you remember: What award did Patrakar Popatlal win in journalism?",
    "correctAnswer": "Golden Crow Award",
    "acceptableAnswers": [
      "golden crow award",
      "golden crow"
    ]
  },
  {
    "id": "q_00385",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Can you guess? Name the correct one: In which residential wing of Gokuldham Society does Jethalal live?",
    "correctAnswer": "Wing B",
    "acceptableAnswers": [
      "b wing",
      "wing b",
      "b"
    ]
  },
  {
    "id": "q_00386",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Think fast! Do you remember: In which residential wing of Gokuldham Society does Aatmaram Bhide live?",
    "correctAnswer": "Wing A",
    "acceptableAnswers": [
      "a wing",
      "wing a",
      "a"
    ]
  },
  {
    "id": "q_00387",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "True Fan Quiz: Guess the right answer: What was the team name led by Dayaben in GPL?",
    "correctAnswer": "Daya Dandiya Devils",
    "acceptableAnswers": [
      "daya dandiya devils",
      "dandiya devils"
    ]
  },
  {
    "id": "q_00388",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Instant Guess: Trivia check: What is the name of Natu Kaka's nephew who works in Gada Electronics?",
    "correctAnswer": "Bagha (Bagheshwar)",
    "acceptableAnswers": [
      "bagha",
      "bagheshwar"
    ]
  },
  {
    "id": "q_00389",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Lock Your Answer: Fun trivia: What is the name of the quiet employee in Gada Electronics who rarely speaks?",
    "correctAnswer": "Magan",
    "acceptableAnswers": [
      "magan",
      "magan bhai"
    ]
  },
  {
    "id": "q_00390",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Buzzer Question: Name the correct one: What is the name of Dayaben's brother who always asks Jethalal for money?",
    "correctAnswer": "Sundarlal",
    "acceptableAnswers": [
      "sundarlal",
      "sundar",
      "sundar lal"
    ]
  },
  {
    "id": "q_00391",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Champion Round: Do you remember: Who is known as Jethalal's \"Fire Brigade\" for solving all problems?",
    "correctAnswer": "Taarak Mehta",
    "acceptableAnswers": [
      "taarak mehta",
      "tarak mehta",
      "mehta sahab"
    ]
  },
  {
    "id": "q_00392",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Can you guess? Name the correct one: What was the famous ghost's name in the Gokuldham haunted episode?",
    "correctAnswer": "Bhootni (Stree in White Sari)",
    "acceptableAnswers": [
      "bhootni",
      "chudail",
      "stree"
    ]
  },
  {
    "id": "q_00393",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Think fast! Do you remember: Which politician did Jethalal confront during election campaign arc?",
    "correctAnswer": "Sevaklal",
    "acceptableAnswers": [
      "sevaklal",
      "neta sevaklal"
    ]
  },
  {
    "id": "q_00394",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "True Fan Quiz: Guess the right answer: Which actor portrays Champaklal Gada (Bapuji)?",
    "correctAnswer": "Amit Bhatt",
    "acceptableAnswers": [
      "amit bhatt",
      "amit"
    ]
  },
  {
    "id": "q_00395",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Instant Guess: Trivia check: Which actor portrays Patrakar Popatlal?",
    "correctAnswer": "Shyam Pathak",
    "acceptableAnswers": [
      "shyam pathak",
      "shyam"
    ]
  },
  {
    "id": "q_00396",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Lock Your Answer: Fun trivia: Which actor portrayed the beloved Natu Kaka?",
    "correctAnswer": "Ghanshyam Nayak",
    "acceptableAnswers": [
      "ghanshyam nayak",
      "ghanshyam"
    ]
  },
  {
    "id": "q_00397",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Buzzer Question: Name the correct one: Which actor portrays Bagha in TMKOC?",
    "correctAnswer": "Tanmay Vekaria",
    "acceptableAnswers": [
      "tanmay vekaria",
      "tanmay"
    ]
  },
  {
    "id": "q_00398",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Champion Round: Do you remember: Which actor portrays Krishnan Subramaniam Iyer?",
    "correctAnswer": "Tanuj Mahashabde",
    "acceptableAnswers": [
      "tanuj mahashabde",
      "tanuj"
    ]
  },
  {
    "id": "q_00399",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Can you guess? Name the correct one: In TMKOC, which Punjabi instrument beat plays when Sodhi gets excited for party sharty?",
    "correctAnswer": "Bhangra Dhol / Dholak",
    "acceptableAnswers": [
      "bhangra dhol",
      "dhol",
      "punjabi dhol",
      "dholak"
    ]
  },
  {
    "id": "q_00400",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Think fast! Do you remember: In TMKOC, which classical South Indian music plays during Jethalal and Iyer faceoffs?",
    "correctAnswer": "Nadaswaram / Carnatic BGM",
    "acceptableAnswers": [
      "nadaswaram",
      "carnatic",
      "south indian music"
    ]
  },
  {
    "id": "q_00401",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "True Fan Quiz: Guess the right answer: Who says: \"Chai piyo, biscuit khao... chai piyo, biscuit khao\"?",
    "correctAnswer": "Jethalal Gada",
    "acceptableAnswers": [
      "jethalal",
      "jetha",
      "jethalal gada",
      "jethabhai"
    ]
  },
  {
    "id": "q_00402",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Instant Guess: Trivia check: Who says: \"Hey Maa Mataji! Tapu ke papa!\"?",
    "correctAnswer": "Dayaben Gada",
    "acceptableAnswers": [
      "daya",
      "dayaben",
      "daya bhabhi",
      "daya gada"
    ]
  },
  {
    "id": "q_00403",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Lock Your Answer: Fun trivia: Who says: \"Mera cancel kardo!\" whenever marriage talks fail?",
    "correctAnswer": "Patrakar Popatlal",
    "acceptableAnswers": [
      "popatlal",
      "patrakar popatlal",
      "popat"
    ]
  },
  {
    "id": "q_00404",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Buzzer Question: Name the correct one: Who screams: \"Nahane ja nahane! Ek thappad marunga toh zameen pe gir padega!\"?",
    "correctAnswer": "Champaklal (Bapuji)",
    "acceptableAnswers": [
      "champaklal",
      "bapuji",
      "champak chacha",
      "dadaji"
    ]
  },
  {
    "id": "q_00405",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Champion Round: Do you remember: Who addresses Jethalal as \"Jethiya!\" whenever angry?",
    "correctAnswer": "Champaklal (Bapuji)",
    "acceptableAnswers": [
      "champaklal",
      "bapuji",
      "champak chacha"
    ]
  },
  {
    "id": "q_00406",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Can you guess? Name the correct one: Who responds to every dish discussion with: \"Sahi baat hai!\"?",
    "correctAnswer": "Dr. Hansraj Hathi",
    "acceptableAnswers": [
      "dr hathi",
      "doctor hathi",
      "hathi",
      "hansraj hathi"
    ]
  },
  {
    "id": "q_00407",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Think fast! Do you remember: Who says: \"Oh come on, Hathi ji!\"?",
    "correctAnswer": "Komal Hathi",
    "acceptableAnswers": [
      "komal",
      "komal hathi",
      "komal bhabhi"
    ]
  },
  {
    "id": "q_00408",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "True Fan Quiz: Guess the right answer: Who yells: \"Goli beta masti nahi!\"?",
    "correctAnswer": "Jethalal Gada",
    "acceptableAnswers": [
      "jethalal",
      "jetha",
      "dr hathi"
    ]
  },
  {
    "id": "q_00409",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Instant Guess: Trivia check: Who calls out lovingly: \"Sundar vira! Mera pyara bhai!\"?",
    "correctAnswer": "Dayaben Gada",
    "acceptableAnswers": [
      "daya",
      "dayaben",
      "daya bhabhi"
    ]
  },
  {
    "id": "q_00410",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Lock Your Answer: Fun trivia: Who says: \"Tapu Sena ready ho jao compound mein match khelne ke liye\"?",
    "correctAnswer": "Tipendra (Tapu)",
    "acceptableAnswers": [
      "tapu",
      "tipendra",
      "tapu gada"
    ]
  },
  {
    "id": "q_00411",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Buzzer Question: Name the correct one: Who serves soda and groceries outside Gokuldham Society?",
    "correctAnswer": "Abdul",
    "acceptableAnswers": [
      "abdul",
      "abdul bhai"
    ]
  },
  {
    "id": "q_00412",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Champion Round: Do you remember: What is the name of Aatmaram Bhide's vintage yellow scooter?",
    "correctAnswer": "Sakharam",
    "acceptableAnswers": [
      "sakharam",
      "sakharam scooter"
    ]
  },
  {
    "id": "q_00413",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Can you guess? Name the correct one: What is the name of Roshan Singh Sodhi's motor workshop?",
    "correctAnswer": "Sodhi Garage",
    "acceptableAnswers": [
      "sodhi garage",
      "garage"
    ]
  },
  {
    "id": "q_00414",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Think fast! Do you remember: What is the name of Abdul's convenience store outside Gokuldham?",
    "correctAnswer": "All in One General Store",
    "acceptableAnswers": [
      "all in one",
      "all in one general store",
      "general store"
    ]
  },
  {
    "id": "q_00415",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "True Fan Quiz: Guess the right answer: What is the cricket tournament played between Gokuldham members called?",
    "correctAnswer": "Gokuldham Premier League (GPL)",
    "acceptableAnswers": [
      "gpl",
      "gokuldham premier league"
    ]
  },
  {
    "id": "q_00416",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Instant Guess: Trivia check: What was the team name led by Tapu in GPL?",
    "correctAnswer": "Tapu Ke Dhurandhar",
    "acceptableAnswers": [
      "tapu ke dhurandhar",
      "dhurandhar"
    ]
  },
  {
    "id": "q_00417",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Lock Your Answer: Fun trivia: What was the team name led by Mehta Sahab in GPL?",
    "correctAnswer": "Mehta Ke Maharathi",
    "acceptableAnswers": [
      "mehta ke maharathi",
      "maharathi"
    ]
  },
  {
    "id": "q_00418",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Buzzer Question: Name the correct one: What is the name of Natu Kaka's nephew who works in Gada Electronics?",
    "correctAnswer": "Bagha (Bagheshwar)",
    "acceptableAnswers": [
      "bagha",
      "bagheshwar"
    ]
  },
  {
    "id": "q_00419",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Champion Round: Do you remember: What is the name of Bagha's forgetful fiancee?",
    "correctAnswer": "Bawri Dhondulal Ghadhave",
    "acceptableAnswers": [
      "bawri",
      "bawri dhondulal ghadhave",
      "baori"
    ]
  },
  {
    "id": "q_00420",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Can you guess? Name the correct one: What is Pinku's full name in Tapu Sena?",
    "correctAnswer": "Pankaj Diwan Sahay",
    "acceptableAnswers": [
      "pankaj",
      "pinku",
      "pankaj diwan"
    ]
  },
  {
    "id": "q_00421",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Think fast! Do you remember: Which foreign bride was arranged for Popatlal from England?",
    "correctAnswer": "Kerry",
    "acceptableAnswers": [
      "kerry",
      "carry"
    ]
  },
  {
    "id": "q_00422",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "True Fan Quiz: Guess the right answer: Who is the creator and producer of Taarak Mehta Ka Ooltah Chashmah?",
    "correctAnswer": "Asit Kumar Modi",
    "acceptableAnswers": [
      "asit kumar modi",
      "asit modi",
      "asit"
    ]
  },
  {
    "id": "q_00423",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Instant Guess: Trivia check: Which actress portrayed the iconic Dayaben?",
    "correctAnswer": "Disha Vakani",
    "acceptableAnswers": [
      "disha vakani",
      "disha"
    ]
  },
  {
    "id": "q_00424",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Lock Your Answer: Fun trivia: Which actor portrays Aatmaram Tukaram Bhide?",
    "correctAnswer": "Mandar Chandwadkar",
    "acceptableAnswers": [
      "mandar chandwadkar",
      "mandar"
    ]
  },
  {
    "id": "q_00425",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Buzzer Question: Name the correct one: Which actor portrays Patrakar Popatlal?",
    "correctAnswer": "Shyam Pathak",
    "acceptableAnswers": [
      "shyam pathak",
      "shyam"
    ]
  },
  {
    "id": "q_00426",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Champion Round: Do you remember: Which actress portrays Babita Ji?",
    "correctAnswer": "Munmun Dutta",
    "acceptableAnswers": [
      "munmun dutta",
      "munmun"
    ]
  },
  {
    "id": "q_00427",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Can you guess? Name the correct one: In TMKOC, what rhythmic Gujarati drum beat plays whenever Dayaben starts dancing?",
    "correctAnswer": "Garba Dhol Beat",
    "acceptableAnswers": [
      "garba dhol",
      "garba beat",
      "dhol",
      "garba"
    ]
  },
  {
    "id": "q_00428",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Think fast! Do you remember: In TMKOC, what rapid tension sound effect plays when Jethalal lands in trouble?",
    "correctAnswer": "Dhin-Tana-Na / Tabdeek Tabdeek",
    "acceptableAnswers": [
      "dhin tana na",
      "tabdeek",
      "tension bgm"
    ]
  },
  {
    "id": "q_00429",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "True Fan Quiz: Guess the right answer: In TMKOC, what eerie whistling sound played during the spooky Bhootni episodes?",
    "correctAnswer": "Bhootni Whistling Flute",
    "acceptableAnswers": [
      "bhootni whistle",
      "whistle",
      "flute",
      "spooky whistle"
    ]
  },
  {
    "id": "q_00430",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Instant Guess: Trivia check: In TMKOC, what peaceful instrument plays when Taarak Mehta delivers the moral ending?",
    "correctAnswer": "Acoustic Sitar / Flute Moral Theme",
    "acceptableAnswers": [
      "sitar",
      "flute",
      "moral theme",
      "ending theme"
    ]
  },
  {
    "id": "q_00431",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Lock Your Answer: Fun trivia: Who says the iconic line: \"Ae pagal aurat!\" in Gokuldham?",
    "correctAnswer": "Jethalal Gada",
    "acceptableAnswers": [
      "jethalal",
      "jetha",
      "jethalal gada"
    ]
  },
  {
    "id": "q_00432",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Buzzer Question: Name the correct one: Who says: \"Hey Maa Mataji! Tapu ke papa!\"?",
    "correctAnswer": "Dayaben Gada",
    "acceptableAnswers": [
      "daya",
      "dayaben",
      "daya bhabhi",
      "daya gada"
    ]
  },
  {
    "id": "q_00433",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Champion Round: Do you remember: Who declares: \"Duniya hila dunga! Patrakar Popatlal Golden Crow Award winner\"?",
    "correctAnswer": "Patrakar Popatlal",
    "acceptableAnswers": [
      "popatlal",
      "patrakar popatlal",
      "popat"
    ]
  },
  {
    "id": "q_00434",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Can you guess? Name the correct one: Who greets with: \"Oye paapa ji! Balle Balle! Aaj party sharty hogi\"?",
    "correctAnswer": "Roshan Singh Sodhi",
    "acceptableAnswers": [
      "sodhi",
      "roshan singh sodhi",
      "roshan sodhi"
    ]
  },
  {
    "id": "q_00435",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Think fast! Do you remember: Who says: \"Aiyyo! Vanakkam! Main scientist Krishnan Subramaniam Iyer\"?",
    "correctAnswer": "Krishnan Subramaniam Iyer",
    "acceptableAnswers": [
      "iyer",
      "krishnan iyer",
      "subramaniam iyer"
    ]
  },
  {
    "id": "q_00436",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "True Fan Quiz: Guess the right answer: Who says: \"Haye haye galti se mistake ho gayi\"?",
    "correctAnswer": "Bawri Dhondulal Ghadhave",
    "acceptableAnswers": [
      "bawri",
      "baori",
      "bawri dhondulal ghadhave"
    ]
  },
  {
    "id": "q_00437",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Instant Guess: Trivia check: Who says: \"Behen Dayaben ke ghar se kabhi khaali haath nahi laut-te\"?",
    "correctAnswer": "Sundarlal",
    "acceptableAnswers": [
      "sundarlal",
      "sundar",
      "sundar lal"
    ]
  },
  {
    "id": "q_00438",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Lock Your Answer: Fun trivia: Who yells: \"Sonu beta masti nahi!\"?",
    "correctAnswer": "Aatmaram Bhide",
    "acceptableAnswers": [
      "bhide",
      "aatmaram bhide"
    ]
  },
  {
    "id": "q_00439",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Buzzer Question: Name the correct one: Who calls out lovingly: \"Sundar vira! Mera pyara bhai!\"?",
    "correctAnswer": "Dayaben Gada",
    "acceptableAnswers": [
      "daya",
      "dayaben",
      "daya bhabhi"
    ]
  },
  {
    "id": "q_00440",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Champion Round: Do you remember: Who calls Champaklal: \"Beshisht mhatarya!\" in frustration?",
    "correctAnswer": "Aatmaram Bhide",
    "acceptableAnswers": [
      "bhide",
      "aatmaram bhide",
      "champaklal"
    ]
  },
  {
    "id": "q_00441",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Can you guess? Name the correct one: What is Jethalal's favorite Sunday morning Gujarati breakfast?",
    "correctAnswer": "Jalebi Fafda",
    "acceptableAnswers": [
      "jalebi fafda",
      "fafda jalebi",
      "fafda",
      "jalebi"
    ]
  },
  {
    "id": "q_00442",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Think fast! Do you remember: What homemade business do Madhavi and Bhide run?",
    "correctAnswer": "Achaar Papad",
    "acceptableAnswers": [
      "achaar papad",
      "achar papad",
      "papad achaar",
      "papad"
    ]
  },
  {
    "id": "q_00443",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "True Fan Quiz: Guess the right answer: What is written every morning by Bhide on the society notice board?",
    "correctAnswer": "Suvichar (Thought of the Day)",
    "acceptableAnswers": [
      "suvichar",
      "thought of the day"
    ]
  },
  {
    "id": "q_00444",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Instant Guess: Trivia check: In which residential wing of Gokuldham Society does Aatmaram Bhide live?",
    "correctAnswer": "Wing A",
    "acceptableAnswers": [
      "a wing",
      "wing a",
      "a"
    ]
  },
  {
    "id": "q_00445",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Lock Your Answer: Fun trivia: What was the team name led by Jethalal in GPL?",
    "correctAnswer": "Jetha Ke Janbaaz",
    "acceptableAnswers": [
      "jetha ke janbaaz",
      "janbaaz"
    ]
  },
  {
    "id": "q_00446",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Buzzer Question: Name the correct one: What was the team name led by Tapu in GPL?",
    "correctAnswer": "Tapu Ke Dhurandhar",
    "acceptableAnswers": [
      "tapu ke dhurandhar",
      "dhurandhar"
    ]
  },
  {
    "id": "q_00447",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Champion Round: Do you remember: What was the team name led by Dayaben in GPL?",
    "correctAnswer": "Daya Dandiya Devils",
    "acceptableAnswers": [
      "daya dandiya devils",
      "dandiya devils"
    ]
  },
  {
    "id": "q_00448",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Can you guess? Name the correct one: What is Sodhi's son Gogi's full formal name?",
    "correctAnswer": "Gurucharan Singh Sodhi",
    "acceptableAnswers": [
      "gurucharan",
      "gurucharan singh",
      "gogi"
    ]
  },
  {
    "id": "q_00449",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Think fast! Do you remember: What is Jethalal's son Tapu's full formal name?",
    "correctAnswer": "Tipendra Gada",
    "acceptableAnswers": [
      "tipendra",
      "tipendra gada",
      "tapu"
    ]
  },
  {
    "id": "q_00450",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "True Fan Quiz: Guess the right answer: Which girl with a speech impediment did Popatlal try to marry?",
    "correctAnswer": "Bulbul",
    "acceptableAnswers": [
      "bulbul"
    ]
  },
  {
    "id": "q_00451",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Instant Guess: Trivia check: Which politician did Jethalal confront during election campaign arc?",
    "correctAnswer": "Sevaklal",
    "acceptableAnswers": [
      "sevaklal",
      "neta sevaklal"
    ]
  },
  {
    "id": "q_00452",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Lock Your Answer: Fun trivia: Which actor portrays Jethalal Champaklal Gada?",
    "correctAnswer": "Dilip Joshi",
    "acceptableAnswers": [
      "dilip joshi",
      "dilip"
    ]
  },
  {
    "id": "q_00453",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Buzzer Question: Name the correct one: Which actress portrayed the iconic Dayaben?",
    "correctAnswer": "Disha Vakani",
    "acceptableAnswers": [
      "disha vakani",
      "disha"
    ]
  },
  {
    "id": "q_00454",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Champion Round: Do you remember: Which actor portrays Champaklal Gada (Bapuji)?",
    "correctAnswer": "Amit Bhatt",
    "acceptableAnswers": [
      "amit bhatt",
      "amit"
    ]
  },
  {
    "id": "q_00455",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Can you guess? Name the correct one: Which actor played the original Tapu (Tipendra Gada)?",
    "correctAnswer": "Bhavya Gandhi",
    "acceptableAnswers": [
      "bhavya gandhi",
      "bhavya"
    ]
  },
  {
    "id": "q_00456",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Think fast! Do you remember: Which actor plays Sundarlal?",
    "correctAnswer": "Mayur Vakani",
    "acceptableAnswers": [
      "mayur vakani",
      "mayur"
    ]
  },
  {
    "id": "q_00457",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "True Fan Quiz: Guess the right answer: In TMKOC, which musical instrument plays a sad melody when Popatlal is rejected?",
    "correctAnswer": "Shehnai / Sad Flute",
    "acceptableAnswers": [
      "shehnai",
      "flute",
      "sad flute",
      "bansuri"
    ]
  },
  {
    "id": "q_00458",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Instant Guess: Trivia check: In TMKOC, which classical South Indian music plays during Jethalal and Iyer faceoffs?",
    "correctAnswer": "Nadaswaram / Carnatic BGM",
    "acceptableAnswers": [
      "nadaswaram",
      "carnatic",
      "south indian music"
    ]
  },
  {
    "id": "q_00459",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Lock Your Answer: Fun trivia: In TMKOC, what siren sound effect plays when Inspector Chalu Pandey arrives on jeep?",
    "correctAnswer": "Police Siren",
    "acceptableAnswers": [
      "police siren",
      "siren",
      "police"
    ]
  },
  {
    "id": "q_00460",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Buzzer Question: Name the correct one: In TMKOC, what peaceful instrument plays when Taarak Mehta delivers the moral ending?",
    "correctAnswer": "Acoustic Sitar / Flute Moral Theme",
    "acceptableAnswers": [
      "sitar",
      "flute",
      "moral theme",
      "ending theme"
    ]
  },
  {
    "id": "q_00461",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Champion Round: Do you remember: Who says: \"Chai piyo, biscuit khao... chai piyo, biscuit khao\"?",
    "correctAnswer": "Jethalal Gada",
    "acceptableAnswers": [
      "jethalal",
      "jetha",
      "jethalal gada",
      "jethabhai"
    ]
  },
  {
    "id": "q_00462",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Can you guess? Name the correct one: Who says: \"Aata maajhi satakli nahi, yeh Bhide chi satakli!\"?",
    "correctAnswer": "Aatmaram Bhide",
    "acceptableAnswers": [
      "bhide",
      "aatmaram bhide"
    ]
  },
  {
    "id": "q_00463",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Think fast! Do you remember: Who says: \"Jaisi jiski soch! Sahi baat hai sethji\"?",
    "correctAnswer": "Bagha (Bagheshwar)",
    "acceptableAnswers": [
      "bagha",
      "bagheshwar"
    ]
  },
  {
    "id": "q_00464",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "True Fan Quiz: Guess the right answer: Who says sweetly: \"Aap bhi na Jetha ji... hamesha mazaak karte rehte hain\"?",
    "correctAnswer": "Babita Ji",
    "acceptableAnswers": [
      "babita",
      "babitaji",
      "babita ji"
    ]
  },
  {
    "id": "q_00465",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Instant Guess: Trivia check: Who says: \"Oh come on, Hathi ji!\"?",
    "correctAnswer": "Komal Hathi",
    "acceptableAnswers": [
      "komal",
      "komal hathi",
      "komal bhabhi"
    ]
  },
  {
    "id": "q_00466",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Lock Your Answer: Fun trivia: Who warns criminals: \"Hamara naam hai Inspector Chalu Pandey, jhooth bologe toh padenge dande\"?",
    "correctAnswer": "Inspector Chalu Pandey",
    "acceptableAnswers": [
      "chalu pandey",
      "inspector chalu pandey",
      "pandey ji"
    ]
  },
  {
    "id": "q_00467",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Buzzer Question: Name the correct one: Who says: \"Behen Dayaben ke ghar se kabhi khaali haath nahi laut-te\"?",
    "correctAnswer": "Sundarlal",
    "acceptableAnswers": [
      "sundarlal",
      "sundar",
      "sundar lal"
    ]
  },
  {
    "id": "q_00468",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Champion Round: Do you remember: Who yells: \"Goli beta masti nahi!\"?",
    "correctAnswer": "Jethalal Gada",
    "acceptableAnswers": [
      "jethalal",
      "jetha",
      "dr hathi"
    ]
  },
  {
    "id": "q_00469",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Can you guess? Name the correct one: What award did Patrakar Popatlal win in journalism?",
    "correctAnswer": "Golden Crow Award",
    "acceptableAnswers": [
      "golden crow award",
      "golden crow"
    ]
  },
  {
    "id": "q_00470",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Think fast! Do you remember: What object does Patrakar Popatlal always carry with him?",
    "correctAnswer": "Umbrella (Chhatri)",
    "acceptableAnswers": [
      "umbrella",
      "chhatri",
      "chata"
    ]
  },
  {
    "id": "q_00471",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "True Fan Quiz: Guess the right answer: What is the native Gujarati village of the Gada family?",
    "correctAnswer": "Bhachau (Kutch)",
    "acceptableAnswers": [
      "bhachau",
      "kutch",
      "bhachau kutch"
    ]
  },
  {
    "id": "q_00472",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Instant Guess: Trivia check: What is the name of Abdul's convenience store outside Gokuldham?",
    "correctAnswer": "All in One General Store",
    "acceptableAnswers": [
      "all in one",
      "all in one general store",
      "general store"
    ]
  },
  {
    "id": "q_00473",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Lock Your Answer: Fun trivia: In which residential wing of Gokuldham Society does Jethalal live?",
    "correctAnswer": "Wing B",
    "acceptableAnswers": [
      "b wing",
      "wing b",
      "b"
    ]
  },
  {
    "id": "q_00474",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Buzzer Question: Name the correct one: In which residential wing of Gokuldham Society does Aatmaram Bhide live?",
    "correctAnswer": "Wing A",
    "acceptableAnswers": [
      "a wing",
      "wing a",
      "a"
    ]
  },
  {
    "id": "q_00475",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Champion Round: Do you remember: What is the cricket tournament played between Gokuldham members called?",
    "correctAnswer": "Gokuldham Premier League (GPL)",
    "acceptableAnswers": [
      "gpl",
      "gokuldham premier league"
    ]
  },
  {
    "id": "q_00476",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Can you guess? Name the correct one: Who is known as Jethalal's \"Fire Brigade\" for solving all problems?",
    "correctAnswer": "Taarak Mehta",
    "acceptableAnswers": [
      "taarak mehta",
      "tarak mehta",
      "mehta sahab"
    ]
  },
  {
    "id": "q_00477",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Think fast! Do you remember: What is Dr. Hathi's full first name in TMKOC?",
    "correctAnswer": "Hansraj",
    "acceptableAnswers": [
      "hansraj",
      "hansraj hathi",
      "dr hansraj"
    ]
  },
  {
    "id": "q_00478",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "True Fan Quiz: Guess the right answer: What is Bhide's daughter Sonu's full formal name?",
    "correctAnswer": "Sonakshi Bhide",
    "acceptableAnswers": [
      "sonakshi",
      "sonakshi bhide",
      "sonu"
    ]
  },
  {
    "id": "q_00479",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Instant Guess: Trivia check: Which foreign bride was arranged for Popatlal from England?",
    "correctAnswer": "Kerry",
    "acceptableAnswers": [
      "kerry",
      "carry"
    ]
  },
  {
    "id": "q_00480",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Lock Your Answer: Fun trivia: What was the famous ghost's name in the Gokuldham haunted episode?",
    "correctAnswer": "Bhootni (Stree in White Sari)",
    "acceptableAnswers": [
      "bhootni",
      "chudail",
      "stree"
    ]
  },
  {
    "id": "q_00481",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Buzzer Question: Name the correct one: Which politician did Jethalal confront during election campaign arc?",
    "correctAnswer": "Sevaklal",
    "acceptableAnswers": [
      "sevaklal",
      "neta sevaklal"
    ]
  },
  {
    "id": "q_00482",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Champion Round: Do you remember: Who is the creator and producer of Taarak Mehta Ka Ooltah Chashmah?",
    "correctAnswer": "Asit Kumar Modi",
    "acceptableAnswers": [
      "asit kumar modi",
      "asit modi",
      "asit"
    ]
  },
  {
    "id": "q_00483",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Can you guess? Name the correct one: Which actor portrays Krishnan Subramaniam Iyer?",
    "correctAnswer": "Tanuj Mahashabde",
    "acceptableAnswers": [
      "tanuj mahashabde",
      "tanuj"
    ]
  },
  {
    "id": "q_00484",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Think fast! Do you remember: Which actor portrayed Dr. Hansraj Hathi originally?",
    "correctAnswer": "Kavi Kumar Azad",
    "acceptableAnswers": [
      "kavi kumar azad",
      "kavi kumar",
      "dr hathi"
    ]
  },
  {
    "id": "q_00485",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "True Fan Quiz: Guess the right answer: Which actor portrays Inspector Chalu Pandey?",
    "correctAnswer": "Daya Shankar Pandey",
    "acceptableAnswers": [
      "daya shankar pandey",
      "dayashankar pandey"
    ]
  },
  {
    "id": "q_00486",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Instant Guess: Trivia check: In TMKOC, what rapid tension sound effect plays when Jethalal lands in trouble?",
    "correctAnswer": "Dhin-Tana-Na / Tabdeek Tabdeek",
    "acceptableAnswers": [
      "dhin tana na",
      "tabdeek",
      "tension bgm"
    ]
  },
  {
    "id": "q_00487",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Lock Your Answer: Fun trivia: In TMKOC, which Punjabi instrument beat plays when Sodhi gets excited for party sharty?",
    "correctAnswer": "Bhangra Dhol / Dholak",
    "acceptableAnswers": [
      "bhangra dhol",
      "dhol",
      "punjabi dhol",
      "dholak"
    ]
  },
  {
    "id": "q_00488",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Buzzer Question: Name the correct one: In TMKOC, which classical South Indian music plays during Jethalal and Iyer faceoffs?",
    "correctAnswer": "Nadaswaram / Carnatic BGM",
    "acceptableAnswers": [
      "nadaswaram",
      "carnatic",
      "south indian music"
    ]
  },
  {
    "id": "q_00489",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Champion Round: Do you remember: In TMKOC, what eerie whistling sound played during the spooky Bhootni episodes?",
    "correctAnswer": "Bhootni Whistling Flute",
    "acceptableAnswers": [
      "bhootni whistle",
      "whistle",
      "flute",
      "spooky whistle"
    ]
  },
  {
    "id": "q_00490",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Can you guess? Name the correct one: Who addresses Jethalal as \"Jethiya!\" whenever angry?",
    "correctAnswer": "Champaklal (Bapuji)",
    "acceptableAnswers": [
      "champaklal",
      "bapuji",
      "champak chacha"
    ]
  },
  {
    "id": "q_00491",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Think fast! Do you remember: Who introduces himself as: \"Main Aatmaram Tukaram Bhide, Gokuldham Society ka ekmev Secretary\"?",
    "correctAnswer": "Aatmaram Bhide",
    "acceptableAnswers": [
      "bhide",
      "aatmaram bhide",
      "atmaram bhide",
      "aatmaram"
    ]
  },
  {
    "id": "q_00492",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "True Fan Quiz: Guess the right answer: Who asks Jethalal: \"Sethji aapne mujhe bulaya? Meri payment badhane ki baat chal rahi hai kya\"?",
    "correctAnswer": "Natu Kaka",
    "acceptableAnswers": [
      "natu kaka",
      "nattu kaka",
      "natu"
    ]
  },
  {
    "id": "q_00493",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Instant Guess: Trivia check: Who says: \"Aiyyo! Vanakkam! Main scientist Krishnan Subramaniam Iyer\"?",
    "correctAnswer": "Krishnan Subramaniam Iyer",
    "acceptableAnswers": [
      "iyer",
      "krishnan iyer",
      "subramaniam iyer"
    ]
  },
  {
    "id": "q_00494",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Lock Your Answer: Fun trivia: Who responds to every dish discussion with: \"Sahi baat hai!\"?",
    "correctAnswer": "Dr. Hansraj Hathi",
    "acceptableAnswers": [
      "dr hathi",
      "doctor hathi",
      "hathi",
      "hansraj hathi"
    ]
  },
  {
    "id": "q_00495",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Buzzer Question: Name the correct one: Who says: \"Oh come on, Hathi ji!\"?",
    "correctAnswer": "Komal Hathi",
    "acceptableAnswers": [
      "komal",
      "komal hathi",
      "komal bhabhi"
    ]
  },
  {
    "id": "q_00496",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Champion Round: Do you remember: Who says: \"Haye haye galti se mistake ho gayi\"?",
    "correctAnswer": "Bawri Dhondulal Ghadhave",
    "acceptableAnswers": [
      "bawri",
      "baori",
      "bawri dhondulal ghadhave"
    ]
  },
  {
    "id": "q_00497",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Can you guess? Name the correct one: What is the name of Aatmaram Bhide's vintage yellow scooter?",
    "correctAnswer": "Sakharam",
    "acceptableAnswers": [
      "sakharam",
      "sakharam scooter"
    ]
  },
  {
    "id": "q_00498",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Think fast! Do you remember: What is the name of Jethalal's electronics showroom?",
    "correctAnswer": "Gada Electronics",
    "acceptableAnswers": [
      "gada electronics",
      "gada electronic"
    ]
  },
  {
    "id": "q_00499",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "True Fan Quiz: Guess the right answer: What diet vegetable juice does Anjali force Taarak Mehta to drink?",
    "correctAnswer": "Karela Juice (Bitter Gourd)",
    "acceptableAnswers": [
      "karela juice",
      "karela",
      "diet food"
    ]
  },
  {
    "id": "q_00500",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Instant Guess: Trivia check: What homemade business do Madhavi and Bhide run?",
    "correctAnswer": "Achaar Papad",
    "acceptableAnswers": [
      "achaar papad",
      "achar papad",
      "papad achaar",
      "papad"
    ]
  },
  {
    "id": "q_00501",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Lock Your Answer: Fun trivia: What is the name of Roshan Singh Sodhi's motor workshop?",
    "correctAnswer": "Sodhi Garage",
    "acceptableAnswers": [
      "sodhi garage",
      "garage"
    ]
  },
  {
    "id": "q_00502",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Buzzer Question: Name the correct one: What is the name of Abdul's convenience store outside Gokuldham?",
    "correctAnswer": "All in One General Store",
    "acceptableAnswers": [
      "all in one",
      "all in one general store",
      "general store"
    ]
  },
  {
    "id": "q_00503",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Champion Round: Do you remember: What is written every morning by Bhide on the society notice board?",
    "correctAnswer": "Suvichar (Thought of the Day)",
    "acceptableAnswers": [
      "suvichar",
      "thought of the day"
    ]
  },
  {
    "id": "q_00504",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Can you guess? Name the correct one: What is the name of Bagha's forgetful fiancee?",
    "correctAnswer": "Bawri Dhondulal Ghadhave",
    "acceptableAnswers": [
      "bawri",
      "bawri dhondulal ghadhave",
      "baori"
    ]
  },
  {
    "id": "q_00505",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Think fast! Do you remember: What is the name of the quiet employee in Gada Electronics who rarely speaks?",
    "correctAnswer": "Magan",
    "acceptableAnswers": [
      "magan",
      "magan bhai"
    ]
  },
  {
    "id": "q_00506",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "True Fan Quiz: Guess the right answer: What is Dr. Hathi's son Goli's full formal name?",
    "correctAnswer": "Gulabkumar Hathi",
    "acceptableAnswers": [
      "gulabkumar",
      "gulabkumar hathi",
      "goli"
    ]
  },
  {
    "id": "q_00507",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Instant Guess: Trivia check: What is Jethalal's son Tapu's full formal name?",
    "correctAnswer": "Tipendra Gada",
    "acceptableAnswers": [
      "tipendra",
      "tipendra gada",
      "tapu"
    ]
  },
  {
    "id": "q_00508",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Lock Your Answer: Fun trivia: What is Pinku's full name in Tapu Sena?",
    "correctAnswer": "Pankaj Diwan Sahay",
    "acceptableAnswers": [
      "pankaj",
      "pinku",
      "pankaj diwan"
    ]
  },
  {
    "id": "q_00509",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Buzzer Question: Name the correct one: Which foreign bride was arranged for Popatlal from England?",
    "correctAnswer": "Kerry",
    "acceptableAnswers": [
      "kerry",
      "carry"
    ]
  },
  {
    "id": "q_00510",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Champion Round: Do you remember: Which girl with a speech impediment did Popatlal try to marry?",
    "correctAnswer": "Bulbul",
    "acceptableAnswers": [
      "bulbul"
    ]
  },
  {
    "id": "q_00511",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Can you guess? Name the correct one: Which actress portrays Babita Ji?",
    "correctAnswer": "Munmun Dutta",
    "acceptableAnswers": [
      "munmun dutta",
      "munmun"
    ]
  },
  {
    "id": "q_00512",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Think fast! Do you remember: Which actor portrayed the beloved Natu Kaka?",
    "correctAnswer": "Ghanshyam Nayak",
    "acceptableAnswers": [
      "ghanshyam nayak",
      "ghanshyam"
    ]
  },
  {
    "id": "q_00513",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "True Fan Quiz: Guess the right answer: Which actor portrays Roshan Singh Sodhi originally?",
    "correctAnswer": "Gurucharan Singh",
    "acceptableAnswers": [
      "gurucharan singh",
      "gurucharan"
    ]
  },
  {
    "id": "q_00514",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Instant Guess: Trivia check: Which actor plays Sundarlal?",
    "correctAnswer": "Mayur Vakani",
    "acceptableAnswers": [
      "mayur vakani",
      "mayur"
    ]
  },
  {
    "id": "q_00515",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Lock Your Answer: Fun trivia: In TMKOC, what rhythmic Gujarati drum beat plays whenever Dayaben starts dancing?",
    "correctAnswer": "Garba Dhol Beat",
    "acceptableAnswers": [
      "garba dhol",
      "garba beat",
      "dhol",
      "garba"
    ]
  },
  {
    "id": "q_00516",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Buzzer Question: Name the correct one: In TMKOC, what rapid tension sound effect plays when Jethalal lands in trouble?",
    "correctAnswer": "Dhin-Tana-Na / Tabdeek Tabdeek",
    "acceptableAnswers": [
      "dhin tana na",
      "tabdeek",
      "tension bgm"
    ]
  },
  {
    "id": "q_00517",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Champion Round: Do you remember: In TMKOC, which musical instrument plays a sad melody when Popatlal is rejected?",
    "correctAnswer": "Shehnai / Sad Flute",
    "acceptableAnswers": [
      "shehnai",
      "flute",
      "sad flute",
      "bansuri"
    ]
  },
  {
    "id": "q_00518",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Can you guess? Name the correct one: Who declares: \"Duniya hila dunga! Patrakar Popatlal Golden Crow Award winner\"?",
    "correctAnswer": "Patrakar Popatlal",
    "acceptableAnswers": [
      "popatlal",
      "patrakar popatlal",
      "popat"
    ]
  },
  {
    "id": "q_00519",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Think fast! Do you remember: Who says: \"Mera cancel kardo!\" whenever marriage talks fail?",
    "correctAnswer": "Patrakar Popatlal",
    "acceptableAnswers": [
      "popatlal",
      "patrakar popatlal",
      "popat"
    ]
  },
  {
    "id": "q_00520",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "True Fan Quiz: Guess the right answer: Who frequently reminds everyone: \"Hamare zamane mein aisi padhai hoti thi\"?",
    "correctAnswer": "Aatmaram Bhide",
    "acceptableAnswers": [
      "bhide",
      "aatmaram bhide",
      "atmaram bhide"
    ]
  },
  {
    "id": "q_00521",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Instant Guess: Trivia check: Who says: \"Jaisi jiski soch! Sahi baat hai sethji\"?",
    "correctAnswer": "Bagha (Bagheshwar)",
    "acceptableAnswers": [
      "bagha",
      "bagheshwar"
    ]
  },
  {
    "id": "q_00522",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Lock Your Answer: Fun trivia: Who greets with: \"Oye paapa ji! Balle Balle! Aaj party sharty hogi\"?",
    "correctAnswer": "Roshan Singh Sodhi",
    "acceptableAnswers": [
      "sodhi",
      "roshan singh sodhi",
      "roshan sodhi"
    ]
  },
  {
    "id": "q_00523",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Buzzer Question: Name the correct one: Who says: \"Aiyyo! Vanakkam! Main scientist Krishnan Subramaniam Iyer\"?",
    "correctAnswer": "Krishnan Subramaniam Iyer",
    "acceptableAnswers": [
      "iyer",
      "krishnan iyer",
      "subramaniam iyer"
    ]
  },
  {
    "id": "q_00524",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Champion Round: Do you remember: Who says sweetly: \"Aap bhi na Jetha ji... hamesha mazaak karte rehte hain\"?",
    "correctAnswer": "Babita Ji",
    "acceptableAnswers": [
      "babita",
      "babitaji",
      "babita ji"
    ]
  },
  {
    "id": "q_00525",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Can you guess? Name the correct one: Who calls Champaklal: \"Beshisht mhatarya!\" in frustration?",
    "correctAnswer": "Aatmaram Bhide",
    "acceptableAnswers": [
      "bhide",
      "aatmaram bhide",
      "champaklal"
    ]
  },
  {
    "id": "q_00526",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Think fast! Do you remember: Who says: \"Tapu Sena ready ho jao compound mein match khelne ke liye\"?",
    "correctAnswer": "Tipendra (Tapu)",
    "acceptableAnswers": [
      "tapu",
      "tipendra",
      "tapu gada"
    ]
  },
  {
    "id": "q_00527",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "True Fan Quiz: Guess the right answer: What is Patrakar Popatlal's workplace newspaper name?",
    "correctAnswer": "Toofan Express",
    "acceptableAnswers": [
      "toofan express",
      "toofan"
    ]
  },
  {
    "id": "q_00528",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Instant Guess: Trivia check: What object does Patrakar Popatlal always carry with him?",
    "correctAnswer": "Umbrella (Chhatri)",
    "acceptableAnswers": [
      "umbrella",
      "chhatri",
      "chata"
    ]
  },
  {
    "id": "q_00529",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Lock Your Answer: Fun trivia: What is Jethalal's favorite Sunday morning Gujarati breakfast?",
    "correctAnswer": "Jalebi Fafda",
    "acceptableAnswers": [
      "jalebi fafda",
      "fafda jalebi",
      "fafda",
      "jalebi"
    ]
  },
  {
    "id": "q_00530",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Buzzer Question: Name the correct one: What homemade business do Madhavi and Bhide run?",
    "correctAnswer": "Achaar Papad",
    "acceptableAnswers": [
      "achaar papad",
      "achar papad",
      "papad achaar",
      "papad"
    ]
  },
  {
    "id": "q_00531",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Champion Round: Do you remember: What is the native Gujarati village of the Gada family?",
    "correctAnswer": "Bhachau (Kutch)",
    "acceptableAnswers": [
      "bhachau",
      "kutch",
      "bhachau kutch"
    ]
  },
  {
    "id": "q_00532",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Can you guess? Name the correct one: What was the team name led by Dayaben in GPL?",
    "correctAnswer": "Daya Dandiya Devils",
    "acceptableAnswers": [
      "daya dandiya devils",
      "dandiya devils"
    ]
  },
  {
    "id": "q_00533",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Think fast! Do you remember: What was the team name led by Mehta Sahab in GPL?",
    "correctAnswer": "Mehta Ke Maharathi",
    "acceptableAnswers": [
      "mehta ke maharathi",
      "maharathi"
    ]
  },
  {
    "id": "q_00534",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "True Fan Quiz: Guess the right answer: What is the name of Dayaben's brother who always asks Jethalal for money?",
    "correctAnswer": "Sundarlal",
    "acceptableAnswers": [
      "sundarlal",
      "sundar",
      "sundar lal"
    ]
  },
  {
    "id": "q_00535",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Instant Guess: Trivia check: What is Dr. Hathi's full first name in TMKOC?",
    "correctAnswer": "Hansraj",
    "acceptableAnswers": [
      "hansraj",
      "hansraj hathi",
      "dr hansraj"
    ]
  },
  {
    "id": "q_00536",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Lock Your Answer: Fun trivia: What is Sodhi's son Gogi's full formal name?",
    "correctAnswer": "Gurucharan Singh Sodhi",
    "acceptableAnswers": [
      "gurucharan",
      "gurucharan singh",
      "gogi"
    ]
  },
  {
    "id": "q_00537",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Buzzer Question: Name the correct one: What is Jethalal's son Tapu's full formal name?",
    "correctAnswer": "Tipendra Gada",
    "acceptableAnswers": [
      "tipendra",
      "tipendra gada",
      "tapu"
    ]
  },
  {
    "id": "q_00538",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Champion Round: Do you remember: What is Bhide's daughter Sonu's full formal name?",
    "correctAnswer": "Sonakshi Bhide",
    "acceptableAnswers": [
      "sonakshi",
      "sonakshi bhide",
      "sonu"
    ]
  },
  {
    "id": "q_00539",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Can you guess? Name the correct one: Which actor portrays Champaklal Gada (Bapuji)?",
    "correctAnswer": "Amit Bhatt",
    "acceptableAnswers": [
      "amit bhatt",
      "amit"
    ]
  },
  {
    "id": "q_00540",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Think fast! Do you remember: Which actor portrays Aatmaram Tukaram Bhide?",
    "correctAnswer": "Mandar Chandwadkar",
    "acceptableAnswers": [
      "mandar chandwadkar",
      "mandar"
    ]
  },
  {
    "id": "q_00541",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "True Fan Quiz: Guess the right answer: Which actor portrays Bagha in TMKOC?",
    "correctAnswer": "Tanmay Vekaria",
    "acceptableAnswers": [
      "tanmay vekaria",
      "tanmay"
    ]
  },
  {
    "id": "q_00542",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Instant Guess: Trivia check: Which actor portrayed Dr. Hansraj Hathi originally?",
    "correctAnswer": "Kavi Kumar Azad",
    "acceptableAnswers": [
      "kavi kumar azad",
      "kavi kumar",
      "dr hathi"
    ]
  },
  {
    "id": "q_00543",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Lock Your Answer: Fun trivia: Which actor played the original Tapu (Tipendra Gada)?",
    "correctAnswer": "Bhavya Gandhi",
    "acceptableAnswers": [
      "bhavya gandhi",
      "bhavya"
    ]
  },
  {
    "id": "q_00544",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Buzzer Question: Name the correct one: Which actor plays Sundarlal?",
    "correctAnswer": "Mayur Vakani",
    "acceptableAnswers": [
      "mayur vakani",
      "mayur"
    ]
  },
  {
    "id": "q_00545",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Champion Round: Do you remember: Which actor portrays Inspector Chalu Pandey?",
    "correctAnswer": "Daya Shankar Pandey",
    "acceptableAnswers": [
      "daya shankar pandey",
      "dayashankar pandey"
    ]
  },
  {
    "id": "q_00546",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Can you guess? Name the correct one: Who says: \"Chai piyo, biscuit khao... chai piyo, biscuit khao\"?",
    "correctAnswer": "Jethalal Gada",
    "acceptableAnswers": [
      "jethalal",
      "jetha",
      "jethalal gada",
      "jethabhai"
    ]
  },
  {
    "id": "q_00547",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Think fast! Do you remember: Who says the iconic line: \"Ae pagal aurat!\" in Gokuldham?",
    "correctAnswer": "Jethalal Gada",
    "acceptableAnswers": [
      "jethalal",
      "jetha",
      "jethalal gada"
    ]
  },
  {
    "id": "q_00548",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "True Fan Quiz: Guess the right answer: Who screams: \"Nahane ja nahane! Ek thappad marunga toh zameen pe gir padega!\"?",
    "correctAnswer": "Champaklal (Bapuji)",
    "acceptableAnswers": [
      "champaklal",
      "bapuji",
      "champak chacha",
      "dadaji"
    ]
  },
  {
    "id": "q_00549",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Instant Guess: Trivia check: Who introduces himself as: \"Main Aatmaram Tukaram Bhide, Gokuldham Society ka ekmev Secretary\"?",
    "correctAnswer": "Aatmaram Bhide",
    "acceptableAnswers": [
      "bhide",
      "aatmaram bhide",
      "atmaram bhide",
      "aatmaram"
    ]
  },
  {
    "id": "q_00550",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Lock Your Answer: Fun trivia: Who says: \"Aata maajhi satakli nahi, yeh Bhide chi satakli!\"?",
    "correctAnswer": "Aatmaram Bhide",
    "acceptableAnswers": [
      "bhide",
      "aatmaram bhide"
    ]
  },
  {
    "id": "q_00551",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Buzzer Question: Name the correct one: Who says: \"Jaisi jiski soch! Sahi baat hai sethji\"?",
    "correctAnswer": "Bagha (Bagheshwar)",
    "acceptableAnswers": [
      "bagha",
      "bagheshwar"
    ]
  },
  {
    "id": "q_00552",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Champion Round: Do you remember: Who asks Jethalal: \"Sethji aapne mujhe bulaya? Meri payment badhane ki baat chal rahi hai kya\"?",
    "correctAnswer": "Natu Kaka",
    "acceptableAnswers": [
      "natu kaka",
      "nattu kaka",
      "natu"
    ]
  },
  {
    "id": "q_00553",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Can you guess? Name the correct one: Who yells: \"Goli beta masti nahi!\"?",
    "correctAnswer": "Jethalal Gada",
    "acceptableAnswers": [
      "jethalal",
      "jetha",
      "dr hathi"
    ]
  },
  {
    "id": "q_00554",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Think fast! Do you remember: Who yells: \"Sonu beta masti nahi!\"?",
    "correctAnswer": "Aatmaram Bhide",
    "acceptableAnswers": [
      "bhide",
      "aatmaram bhide"
    ]
  },
  {
    "id": "q_00555",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "True Fan Quiz: Guess the right answer: Who serves soda and groceries outside Gokuldham Society?",
    "correctAnswer": "Abdul",
    "acceptableAnswers": [
      "abdul",
      "abdul bhai"
    ]
  },
  {
    "id": "q_00556",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Instant Guess: Trivia check: What is the name of Jethalal's electronics showroom?",
    "correctAnswer": "Gada Electronics",
    "acceptableAnswers": [
      "gada electronics",
      "gada electronic"
    ]
  },
  {
    "id": "q_00557",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Lock Your Answer: Fun trivia: What award did Patrakar Popatlal win in journalism?",
    "correctAnswer": "Golden Crow Award",
    "acceptableAnswers": [
      "golden crow award",
      "golden crow"
    ]
  },
  {
    "id": "q_00558",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Buzzer Question: Name the correct one: What object does Patrakar Popatlal always carry with him?",
    "correctAnswer": "Umbrella (Chhatri)",
    "acceptableAnswers": [
      "umbrella",
      "chhatri",
      "chata"
    ]
  },
  {
    "id": "q_00559",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Champion Round: Do you remember: What diet vegetable juice does Anjali force Taarak Mehta to drink?",
    "correctAnswer": "Karela Juice (Bitter Gourd)",
    "acceptableAnswers": [
      "karela juice",
      "karela",
      "diet food"
    ]
  },
  {
    "id": "q_00560",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Can you guess? Name the correct one: What is the cricket tournament played between Gokuldham members called?",
    "correctAnswer": "Gokuldham Premier League (GPL)",
    "acceptableAnswers": [
      "gpl",
      "gokuldham premier league"
    ]
  },
  {
    "id": "q_00561",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Think fast! Do you remember: What was the team name led by Jethalal in GPL?",
    "correctAnswer": "Jetha Ke Janbaaz",
    "acceptableAnswers": [
      "jetha ke janbaaz",
      "janbaaz"
    ]
  },
  {
    "id": "q_00562",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "True Fan Quiz: Guess the right answer: What is the name of Natu Kaka's nephew who works in Gada Electronics?",
    "correctAnswer": "Bagha (Bagheshwar)",
    "acceptableAnswers": [
      "bagha",
      "bagheshwar"
    ]
  },
  {
    "id": "q_00563",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Instant Guess: Trivia check: What is the name of the quiet employee in Gada Electronics who rarely speaks?",
    "correctAnswer": "Magan",
    "acceptableAnswers": [
      "magan",
      "magan bhai"
    ]
  },
  {
    "id": "q_00564",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Lock Your Answer: Fun trivia: Who is known as Jethalal's \"Fire Brigade\" for solving all problems?",
    "correctAnswer": "Taarak Mehta",
    "acceptableAnswers": [
      "taarak mehta",
      "tarak mehta",
      "mehta sahab"
    ]
  },
  {
    "id": "q_00565",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Buzzer Question: Name the correct one: What is Dr. Hathi's full first name in TMKOC?",
    "correctAnswer": "Hansraj",
    "acceptableAnswers": [
      "hansraj",
      "hansraj hathi",
      "dr hansraj"
    ]
  },
  {
    "id": "q_00566",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Champion Round: Do you remember: What is Dr. Hathi's son Goli's full formal name?",
    "correctAnswer": "Gulabkumar Hathi",
    "acceptableAnswers": [
      "gulabkumar",
      "gulabkumar hathi",
      "goli"
    ]
  },
  {
    "id": "q_00567",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Can you guess? Name the correct one: Who is the creator and producer of Taarak Mehta Ka Ooltah Chashmah?",
    "correctAnswer": "Asit Kumar Modi",
    "acceptableAnswers": [
      "asit kumar modi",
      "asit modi",
      "asit"
    ]
  },
  {
    "id": "q_00568",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Think fast! Do you remember: Which actor portrays Jethalal Champaklal Gada?",
    "correctAnswer": "Dilip Joshi",
    "acceptableAnswers": [
      "dilip joshi",
      "dilip"
    ]
  },
  {
    "id": "q_00569",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "True Fan Quiz: Guess the right answer: Which actor portrays Patrakar Popatlal?",
    "correctAnswer": "Shyam Pathak",
    "acceptableAnswers": [
      "shyam pathak",
      "shyam"
    ]
  },
  {
    "id": "q_00570",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Instant Guess: Trivia check: Which actor portrayed the beloved Natu Kaka?",
    "correctAnswer": "Ghanshyam Nayak",
    "acceptableAnswers": [
      "ghanshyam nayak",
      "ghanshyam"
    ]
  },
  {
    "id": "q_00571",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Lock Your Answer: Fun trivia: Which actor portrays Krishnan Subramaniam Iyer?",
    "correctAnswer": "Tanuj Mahashabde",
    "acceptableAnswers": [
      "tanuj mahashabde",
      "tanuj"
    ]
  },
  {
    "id": "q_00572",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Buzzer Question: Name the correct one: Which actor portrayed Dr. Hansraj Hathi originally?",
    "correctAnswer": "Kavi Kumar Azad",
    "acceptableAnswers": [
      "kavi kumar azad",
      "kavi kumar",
      "dr hathi"
    ]
  },
  {
    "id": "q_00573",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Champion Round: Do you remember: Which actor portrays Roshan Singh Sodhi originally?",
    "correctAnswer": "Gurucharan Singh",
    "acceptableAnswers": [
      "gurucharan singh",
      "gurucharan"
    ]
  },
  {
    "id": "q_00574",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Can you guess? Name the correct one: In TMKOC, what eerie whistling sound played during the spooky Bhootni episodes?",
    "correctAnswer": "Bhootni Whistling Flute",
    "acceptableAnswers": [
      "bhootni whistle",
      "whistle",
      "flute",
      "spooky whistle"
    ]
  },
  {
    "id": "q_00575",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Think fast! Do you remember: In TMKOC, what siren sound effect plays when Inspector Chalu Pandey arrives on jeep?",
    "correctAnswer": "Police Siren",
    "acceptableAnswers": [
      "police siren",
      "siren",
      "police"
    ]
  },
  {
    "id": "q_00576",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "True Fan Quiz: Guess the right answer: Who says: \"Hey Maa Mataji! Tapu ke papa!\"?",
    "correctAnswer": "Dayaben Gada",
    "acceptableAnswers": [
      "daya",
      "dayaben",
      "daya bhabhi",
      "daya gada"
    ]
  },
  {
    "id": "q_00577",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Instant Guess: Trivia check: Who says: \"Mera cancel kardo!\" whenever marriage talks fail?",
    "correctAnswer": "Patrakar Popatlal",
    "acceptableAnswers": [
      "popatlal",
      "patrakar popatlal",
      "popat"
    ]
  },
  {
    "id": "q_00578",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Lock Your Answer: Fun trivia: Who addresses Jethalal as \"Jethiya!\" whenever angry?",
    "correctAnswer": "Champaklal (Bapuji)",
    "acceptableAnswers": [
      "champaklal",
      "bapuji",
      "champak chacha"
    ]
  },
  {
    "id": "q_00579",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Buzzer Question: Name the correct one: Who introduces himself as: \"Main Aatmaram Tukaram Bhide, Gokuldham Society ka ekmev Secretary\"?",
    "correctAnswer": "Aatmaram Bhide",
    "acceptableAnswers": [
      "bhide",
      "aatmaram bhide",
      "atmaram bhide",
      "aatmaram"
    ]
  },
  {
    "id": "q_00580",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Champion Round: Do you remember: Who frequently reminds everyone: \"Hamare zamane mein aisi padhai hoti thi\"?",
    "correctAnswer": "Aatmaram Bhide",
    "acceptableAnswers": [
      "bhide",
      "aatmaram bhide",
      "atmaram bhide"
    ]
  },
  {
    "id": "q_00581",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Can you guess? Name the correct one: Who says: \"Haye haye galti se mistake ho gayi\"?",
    "correctAnswer": "Bawri Dhondulal Ghadhave",
    "acceptableAnswers": [
      "bawri",
      "baori",
      "bawri dhondulal ghadhave"
    ]
  },
  {
    "id": "q_00582",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Think fast! Do you remember: Who warns criminals: \"Hamara naam hai Inspector Chalu Pandey, jhooth bologe toh padenge dande\"?",
    "correctAnswer": "Inspector Chalu Pandey",
    "acceptableAnswers": [
      "chalu pandey",
      "inspector chalu pandey",
      "pandey ji"
    ]
  },
  {
    "id": "q_00583",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "True Fan Quiz: Guess the right answer: Who calls out lovingly: \"Sundar vira! Mera pyara bhai!\"?",
    "correctAnswer": "Dayaben Gada",
    "acceptableAnswers": [
      "daya",
      "dayaben",
      "daya bhabhi"
    ]
  },
  {
    "id": "q_00584",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Instant Guess: Trivia check: Who says: \"Tapu Sena ready ho jao compound mein match khelne ke liye\"?",
    "correctAnswer": "Tipendra (Tapu)",
    "acceptableAnswers": [
      "tapu",
      "tipendra",
      "tapu gada"
    ]
  },
  {
    "id": "q_00585",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Lock Your Answer: Fun trivia: What is the name of Aatmaram Bhide's vintage yellow scooter?",
    "correctAnswer": "Sakharam",
    "acceptableAnswers": [
      "sakharam",
      "sakharam scooter"
    ]
  },
  {
    "id": "q_00586",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Buzzer Question: Name the correct one: What is the name of Jethalal's electronics showroom?",
    "correctAnswer": "Gada Electronics",
    "acceptableAnswers": [
      "gada electronics",
      "gada electronic"
    ]
  },
  {
    "id": "q_00587",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Champion Round: Do you remember: What is Patrakar Popatlal's workplace newspaper name?",
    "correctAnswer": "Toofan Express",
    "acceptableAnswers": [
      "toofan express",
      "toofan"
    ]
  },
  {
    "id": "q_00588",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Can you guess? Name the correct one: What is written every morning by Bhide on the society notice board?",
    "correctAnswer": "Suvichar (Thought of the Day)",
    "acceptableAnswers": [
      "suvichar",
      "thought of the day"
    ]
  },
  {
    "id": "q_00589",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Think fast! Do you remember: In which residential wing of Gokuldham Society does Jethalal live?",
    "correctAnswer": "Wing B",
    "acceptableAnswers": [
      "b wing",
      "wing b",
      "b"
    ]
  },
  {
    "id": "q_00590",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "True Fan Quiz: Guess the right answer: What was the team name led by Tapu in GPL?",
    "correctAnswer": "Tapu Ke Dhurandhar",
    "acceptableAnswers": [
      "tapu ke dhurandhar",
      "dhurandhar"
    ]
  },
  {
    "id": "q_00591",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Instant Guess: Trivia check: What was the team name led by Mehta Sahab in GPL?",
    "correctAnswer": "Mehta Ke Maharathi",
    "acceptableAnswers": [
      "mehta ke maharathi",
      "maharathi"
    ]
  },
  {
    "id": "q_00592",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Lock Your Answer: Fun trivia: What is the name of Bagha's forgetful fiancee?",
    "correctAnswer": "Bawri Dhondulal Ghadhave",
    "acceptableAnswers": [
      "bawri",
      "bawri dhondulal ghadhave",
      "baori"
    ]
  },
  {
    "id": "q_00593",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Buzzer Question: Name the correct one: What is the name of the quiet employee in Gada Electronics who rarely speaks?",
    "correctAnswer": "Magan",
    "acceptableAnswers": [
      "magan",
      "magan bhai"
    ]
  },
  {
    "id": "q_00594",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Champion Round: Do you remember: What is the name of Dayaben's brother who always asks Jethalal for money?",
    "correctAnswer": "Sundarlal",
    "acceptableAnswers": [
      "sundarlal",
      "sundar",
      "sundar lal"
    ]
  },
  {
    "id": "q_00595",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Can you guess? Name the correct one: Which girl with a speech impediment did Popatlal try to marry?",
    "correctAnswer": "Bulbul",
    "acceptableAnswers": [
      "bulbul"
    ]
  },
  {
    "id": "q_00596",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Think fast! Do you remember: What was the famous ghost's name in the Gokuldham haunted episode?",
    "correctAnswer": "Bhootni (Stree in White Sari)",
    "acceptableAnswers": [
      "bhootni",
      "chudail",
      "stree"
    ]
  },
  {
    "id": "q_00597",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "True Fan Quiz: Guess the right answer: Which actress portrayed the iconic Dayaben?",
    "correctAnswer": "Disha Vakani",
    "acceptableAnswers": [
      "disha vakani",
      "disha"
    ]
  },
  {
    "id": "q_00598",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Instant Guess: Trivia check: Which actor portrays Aatmaram Tukaram Bhide?",
    "correctAnswer": "Mandar Chandwadkar",
    "acceptableAnswers": [
      "mandar chandwadkar",
      "mandar"
    ]
  },
  {
    "id": "q_00599",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Lock Your Answer: Fun trivia: Which actress portrays Babita Ji?",
    "correctAnswer": "Munmun Dutta",
    "acceptableAnswers": [
      "munmun dutta",
      "munmun"
    ]
  },
  {
    "id": "q_00600",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Buzzer Question: Name the correct one: Which actor portrayed the beloved Natu Kaka?",
    "correctAnswer": "Ghanshyam Nayak",
    "acceptableAnswers": [
      "ghanshyam nayak",
      "ghanshyam"
    ]
  },
  {
    "id": "q_00601",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Champion Round: Do you remember: Which actor portrays Bagha in TMKOC?",
    "correctAnswer": "Tanmay Vekaria",
    "acceptableAnswers": [
      "tanmay vekaria",
      "tanmay"
    ]
  },
  {
    "id": "q_00602",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Can you guess? Name the correct one: In TMKOC, which musical instrument plays a sad melody when Popatlal is rejected?",
    "correctAnswer": "Shehnai / Sad Flute",
    "acceptableAnswers": [
      "shehnai",
      "flute",
      "sad flute",
      "bansuri"
    ]
  },
  {
    "id": "q_00603",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Think fast! Do you remember: In TMKOC, which Punjabi instrument beat plays when Sodhi gets excited for party sharty?",
    "correctAnswer": "Bhangra Dhol / Dholak",
    "acceptableAnswers": [
      "bhangra dhol",
      "dhol",
      "punjabi dhol",
      "dholak"
    ]
  },
  {
    "id": "q_00604",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "True Fan Quiz: Guess the right answer: In TMKOC, what peaceful instrument plays when Taarak Mehta delivers the moral ending?",
    "correctAnswer": "Acoustic Sitar / Flute Moral Theme",
    "acceptableAnswers": [
      "sitar",
      "flute",
      "moral theme",
      "ending theme"
    ]
  },
  {
    "id": "q_00605",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Instant Guess: Trivia check: Who says the iconic line: \"Ae pagal aurat!\" in Gokuldham?",
    "correctAnswer": "Jethalal Gada",
    "acceptableAnswers": [
      "jethalal",
      "jetha",
      "jethalal gada"
    ]
  },
  {
    "id": "q_00606",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Lock Your Answer: Fun trivia: Who declares: \"Duniya hila dunga! Patrakar Popatlal Golden Crow Award winner\"?",
    "correctAnswer": "Patrakar Popatlal",
    "acceptableAnswers": [
      "popatlal",
      "patrakar popatlal",
      "popat"
    ]
  },
  {
    "id": "q_00607",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Buzzer Question: Name the correct one: Who says: \"Mera cancel kardo!\" whenever marriage talks fail?",
    "correctAnswer": "Patrakar Popatlal",
    "acceptableAnswers": [
      "popatlal",
      "patrakar popatlal",
      "popat"
    ]
  },
  {
    "id": "q_00608",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Champion Round: Do you remember: Who screams: \"Nahane ja nahane! Ek thappad marunga toh zameen pe gir padega!\"?",
    "correctAnswer": "Champaklal (Bapuji)",
    "acceptableAnswers": [
      "champaklal",
      "bapuji",
      "champak chacha",
      "dadaji"
    ]
  },
  {
    "id": "q_00609",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Can you guess? Name the correct one: Who says sweetly: \"Aap bhi na Jetha ji... hamesha mazaak karte rehte hain\"?",
    "correctAnswer": "Babita Ji",
    "acceptableAnswers": [
      "babita",
      "babitaji",
      "babita ji"
    ]
  },
  {
    "id": "q_00610",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Think fast! Do you remember: Who responds to every dish discussion with: \"Sahi baat hai!\"?",
    "correctAnswer": "Dr. Hansraj Hathi",
    "acceptableAnswers": [
      "dr hathi",
      "doctor hathi",
      "hathi",
      "hansraj hathi"
    ]
  },
  {
    "id": "q_00611",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "True Fan Quiz: Guess the right answer: Who says: \"Behen Dayaben ke ghar se kabhi khaali haath nahi laut-te\"?",
    "correctAnswer": "Sundarlal",
    "acceptableAnswers": [
      "sundarlal",
      "sundar",
      "sundar lal"
    ]
  },
  {
    "id": "q_00612",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Instant Guess: Trivia check: Who yells: \"Sonu beta masti nahi!\"?",
    "correctAnswer": "Aatmaram Bhide",
    "acceptableAnswers": [
      "bhide",
      "aatmaram bhide"
    ]
  },
  {
    "id": "q_00613",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Lock Your Answer: Fun trivia: Who calls Champaklal: \"Beshisht mhatarya!\" in frustration?",
    "correctAnswer": "Aatmaram Bhide",
    "acceptableAnswers": [
      "bhide",
      "aatmaram bhide",
      "champaklal"
    ]
  },
  {
    "id": "q_00614",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Buzzer Question: Name the correct one: Who says: \"Tapu Sena ready ho jao compound mein match khelne ke liye\"?",
    "correctAnswer": "Tipendra (Tapu)",
    "acceptableAnswers": [
      "tapu",
      "tipendra",
      "tapu gada"
    ]
  },
  {
    "id": "q_00615",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Champion Round: Do you remember: Who serves soda and groceries outside Gokuldham Society?",
    "correctAnswer": "Abdul",
    "acceptableAnswers": [
      "abdul",
      "abdul bhai"
    ]
  },
  {
    "id": "q_00616",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Can you guess? Name the correct one: What is the native Gujarati village of the Gada family?",
    "correctAnswer": "Bhachau (Kutch)",
    "acceptableAnswers": [
      "bhachau",
      "kutch",
      "bhachau kutch"
    ]
  },
  {
    "id": "q_00617",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Think fast! Do you remember: What is the name of Roshan Singh Sodhi's motor workshop?",
    "correctAnswer": "Sodhi Garage",
    "acceptableAnswers": [
      "sodhi garage",
      "garage"
    ]
  },
  {
    "id": "q_00618",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "True Fan Quiz: Guess the right answer: In which residential wing of Gokuldham Society does Aatmaram Bhide live?",
    "correctAnswer": "Wing A",
    "acceptableAnswers": [
      "a wing",
      "wing a",
      "a"
    ]
  },
  {
    "id": "q_00619",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Instant Guess: Trivia check: What was the team name led by Jethalal in GPL?",
    "correctAnswer": "Jetha Ke Janbaaz",
    "acceptableAnswers": [
      "jetha ke janbaaz",
      "janbaaz"
    ]
  },
  {
    "id": "q_00620",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Lock Your Answer: Fun trivia: What was the team name led by Dayaben in GPL?",
    "correctAnswer": "Daya Dandiya Devils",
    "acceptableAnswers": [
      "daya dandiya devils",
      "dandiya devils"
    ]
  },
  {
    "id": "q_00621",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Buzzer Question: Name the correct one: What was the team name led by Mehta Sahab in GPL?",
    "correctAnswer": "Mehta Ke Maharathi",
    "acceptableAnswers": [
      "mehta ke maharathi",
      "maharathi"
    ]
  },
  {
    "id": "q_00622",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Champion Round: Do you remember: What is the name of Natu Kaka's nephew who works in Gada Electronics?",
    "correctAnswer": "Bagha (Bagheshwar)",
    "acceptableAnswers": [
      "bagha",
      "bagheshwar"
    ]
  },
  {
    "id": "q_00623",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Can you guess? Name the correct one: What is Bhide's daughter Sonu's full formal name?",
    "correctAnswer": "Sonakshi Bhide",
    "acceptableAnswers": [
      "sonakshi",
      "sonakshi bhide",
      "sonu"
    ]
  },
  {
    "id": "q_00624",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Think fast! Do you remember: What is Pinku's full name in Tapu Sena?",
    "correctAnswer": "Pankaj Diwan Sahay",
    "acceptableAnswers": [
      "pankaj",
      "pinku",
      "pankaj diwan"
    ]
  },
  {
    "id": "q_00625",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "True Fan Quiz: Guess the right answer: Which politician did Jethalal confront during election campaign arc?",
    "correctAnswer": "Sevaklal",
    "acceptableAnswers": [
      "sevaklal",
      "neta sevaklal"
    ]
  },
  {
    "id": "q_00626",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Instant Guess: Trivia check: Which actor portrays Jethalal Champaklal Gada?",
    "correctAnswer": "Dilip Joshi",
    "acceptableAnswers": [
      "dilip joshi",
      "dilip"
    ]
  },
  {
    "id": "q_00627",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Lock Your Answer: Fun trivia: Which actor portrays Champaklal Gada (Bapuji)?",
    "correctAnswer": "Amit Bhatt",
    "acceptableAnswers": [
      "amit bhatt",
      "amit"
    ]
  },
  {
    "id": "q_00628",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Buzzer Question: Name the correct one: Which actor portrays Aatmaram Tukaram Bhide?",
    "correctAnswer": "Mandar Chandwadkar",
    "acceptableAnswers": [
      "mandar chandwadkar",
      "mandar"
    ]
  },
  {
    "id": "q_00629",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Champion Round: Do you remember: Which actor portrays Patrakar Popatlal?",
    "correctAnswer": "Shyam Pathak",
    "acceptableAnswers": [
      "shyam pathak",
      "shyam"
    ]
  },
  {
    "id": "q_00630",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Can you guess? Name the correct one: Which actor portrays Inspector Chalu Pandey?",
    "correctAnswer": "Daya Shankar Pandey",
    "acceptableAnswers": [
      "daya shankar pandey",
      "dayashankar pandey"
    ]
  },
  {
    "id": "q_00631",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Think fast! Do you remember: In TMKOC, what rhythmic Gujarati drum beat plays whenever Dayaben starts dancing?",
    "correctAnswer": "Garba Dhol Beat",
    "acceptableAnswers": [
      "garba dhol",
      "garba beat",
      "dhol",
      "garba"
    ]
  },
  {
    "id": "q_00632",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "True Fan Quiz: Guess the right answer: In TMKOC, which classical South Indian music plays during Jethalal and Iyer faceoffs?",
    "correctAnswer": "Nadaswaram / Carnatic BGM",
    "acceptableAnswers": [
      "nadaswaram",
      "carnatic",
      "south indian music"
    ]
  },
  {
    "id": "q_00633",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Instant Guess: Trivia check: In TMKOC, what siren sound effect plays when Inspector Chalu Pandey arrives on jeep?",
    "correctAnswer": "Police Siren",
    "acceptableAnswers": [
      "police siren",
      "siren",
      "police"
    ]
  },
  {
    "id": "q_00634",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Lock Your Answer: Fun trivia: Who says: \"Chai piyo, biscuit khao... chai piyo, biscuit khao\"?",
    "correctAnswer": "Jethalal Gada",
    "acceptableAnswers": [
      "jethalal",
      "jetha",
      "jethalal gada",
      "jethabhai"
    ]
  },
  {
    "id": "q_00635",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Buzzer Question: Name the correct one: Who says the iconic line: \"Ae pagal aurat!\" in Gokuldham?",
    "correctAnswer": "Jethalal Gada",
    "acceptableAnswers": [
      "jethalal",
      "jetha",
      "jethalal gada"
    ]
  },
  {
    "id": "q_00636",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Champion Round: Do you remember: Who says: \"Hey Maa Mataji! Tapu ke papa!\"?",
    "correctAnswer": "Dayaben Gada",
    "acceptableAnswers": [
      "daya",
      "dayaben",
      "daya bhabhi",
      "daya gada"
    ]
  },
  {
    "id": "q_00637",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Can you guess? Name the correct one: Who asks Jethalal: \"Sethji aapne mujhe bulaya? Meri payment badhane ki baat chal rahi hai kya\"?",
    "correctAnswer": "Natu Kaka",
    "acceptableAnswers": [
      "natu kaka",
      "nattu kaka",
      "natu"
    ]
  },
  {
    "id": "q_00638",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Think fast! Do you remember: Who greets with: \"Oye paapa ji! Balle Balle! Aaj party sharty hogi\"?",
    "correctAnswer": "Roshan Singh Sodhi",
    "acceptableAnswers": [
      "sodhi",
      "roshan singh sodhi",
      "roshan sodhi"
    ]
  },
  {
    "id": "q_00639",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "True Fan Quiz: Guess the right answer: Who says: \"Oh come on, Hathi ji!\"?",
    "correctAnswer": "Komal Hathi",
    "acceptableAnswers": [
      "komal",
      "komal hathi",
      "komal bhabhi"
    ]
  },
  {
    "id": "q_00640",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Instant Guess: Trivia check: Who warns criminals: \"Hamara naam hai Inspector Chalu Pandey, jhooth bologe toh padenge dande\"?",
    "correctAnswer": "Inspector Chalu Pandey",
    "acceptableAnswers": [
      "chalu pandey",
      "inspector chalu pandey",
      "pandey ji"
    ]
  },
  {
    "id": "q_00641",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Lock Your Answer: Fun trivia: Who yells: \"Goli beta masti nahi!\"?",
    "correctAnswer": "Jethalal Gada",
    "acceptableAnswers": [
      "jethalal",
      "jetha",
      "dr hathi"
    ]
  },
  {
    "id": "q_00642",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Buzzer Question: Name the correct one: Who yells: \"Sonu beta masti nahi!\"?",
    "correctAnswer": "Aatmaram Bhide",
    "acceptableAnswers": [
      "bhide",
      "aatmaram bhide"
    ]
  },
  {
    "id": "q_00643",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Champion Round: Do you remember: Who calls out lovingly: \"Sundar vira! Mera pyara bhai!\"?",
    "correctAnswer": "Dayaben Gada",
    "acceptableAnswers": [
      "daya",
      "dayaben",
      "daya bhabhi"
    ]
  },
  {
    "id": "q_00644",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Can you guess? Name the correct one: What diet vegetable juice does Anjali force Taarak Mehta to drink?",
    "correctAnswer": "Karela Juice (Bitter Gourd)",
    "acceptableAnswers": [
      "karela juice",
      "karela",
      "diet food"
    ]
  },
  {
    "id": "q_00645",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Think fast! Do you remember: What is Jethalal's favorite Sunday morning Gujarati breakfast?",
    "correctAnswer": "Jalebi Fafda",
    "acceptableAnswers": [
      "jalebi fafda",
      "fafda jalebi",
      "fafda",
      "jalebi"
    ]
  },
  {
    "id": "q_00646",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "True Fan Quiz: Guess the right answer: What is the name of Abdul's convenience store outside Gokuldham?",
    "correctAnswer": "All in One General Store",
    "acceptableAnswers": [
      "all in one",
      "all in one general store",
      "general store"
    ]
  },
  {
    "id": "q_00647",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Instant Guess: Trivia check: In which residential wing of Gokuldham Society does Jethalal live?",
    "correctAnswer": "Wing B",
    "acceptableAnswers": [
      "b wing",
      "wing b",
      "b"
    ]
  },
  {
    "id": "q_00648",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Lock Your Answer: Fun trivia: What is the cricket tournament played between Gokuldham members called?",
    "correctAnswer": "Gokuldham Premier League (GPL)",
    "acceptableAnswers": [
      "gpl",
      "gokuldham premier league"
    ]
  },
  {
    "id": "q_00649",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Buzzer Question: Name the correct one: What was the team name led by Jethalal in GPL?",
    "correctAnswer": "Jetha Ke Janbaaz",
    "acceptableAnswers": [
      "jetha ke janbaaz",
      "janbaaz"
    ]
  },
  {
    "id": "q_00650",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Champion Round: Do you remember: What was the team name led by Tapu in GPL?",
    "correctAnswer": "Tapu Ke Dhurandhar",
    "acceptableAnswers": [
      "tapu ke dhurandhar",
      "dhurandhar"
    ]
  },
  {
    "id": "q_00651",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Can you guess? Name the correct one: What is Dr. Hathi's son Goli's full formal name?",
    "correctAnswer": "Gulabkumar Hathi",
    "acceptableAnswers": [
      "gulabkumar",
      "gulabkumar hathi",
      "goli"
    ]
  },
  {
    "id": "q_00652",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Think fast! Do you remember: What is Sodhi's son Gogi's full formal name?",
    "correctAnswer": "Gurucharan Singh Sodhi",
    "acceptableAnswers": [
      "gurucharan",
      "gurucharan singh",
      "gogi"
    ]
  },
  {
    "id": "q_00653",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "True Fan Quiz: Guess the right answer: Which foreign bride was arranged for Popatlal from England?",
    "correctAnswer": "Kerry",
    "acceptableAnswers": [
      "kerry",
      "carry"
    ]
  },
  {
    "id": "q_00654",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Instant Guess: Trivia check: What was the famous ghost's name in the Gokuldham haunted episode?",
    "correctAnswer": "Bhootni (Stree in White Sari)",
    "acceptableAnswers": [
      "bhootni",
      "chudail",
      "stree"
    ]
  },
  {
    "id": "q_00655",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Lock Your Answer: Fun trivia: Who is the creator and producer of Taarak Mehta Ka Ooltah Chashmah?",
    "correctAnswer": "Asit Kumar Modi",
    "acceptableAnswers": [
      "asit kumar modi",
      "asit modi",
      "asit"
    ]
  },
  {
    "id": "q_00656",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Buzzer Question: Name the correct one: Which actor portrays Jethalal Champaklal Gada?",
    "correctAnswer": "Dilip Joshi",
    "acceptableAnswers": [
      "dilip joshi",
      "dilip"
    ]
  },
  {
    "id": "q_00657",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Champion Round: Do you remember: Which actress portrayed the iconic Dayaben?",
    "correctAnswer": "Disha Vakani",
    "acceptableAnswers": [
      "disha vakani",
      "disha"
    ]
  },
  {
    "id": "q_00658",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Can you guess? Name the correct one: Which actor portrays Roshan Singh Sodhi originally?",
    "correctAnswer": "Gurucharan Singh",
    "acceptableAnswers": [
      "gurucharan singh",
      "gurucharan"
    ]
  },
  {
    "id": "q_00659",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Think fast! Do you remember: Which actor played the original Tapu (Tipendra Gada)?",
    "correctAnswer": "Bhavya Gandhi",
    "acceptableAnswers": [
      "bhavya gandhi",
      "bhavya"
    ]
  },
  {
    "id": "q_00660",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "True Fan Quiz: Guess the right answer: In TMKOC, what rapid tension sound effect plays when Jethalal lands in trouble?",
    "correctAnswer": "Dhin-Tana-Na / Tabdeek Tabdeek",
    "acceptableAnswers": [
      "dhin tana na",
      "tabdeek",
      "tension bgm"
    ]
  },
  {
    "id": "q_00661",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Instant Guess: Trivia check: In TMKOC, which Punjabi instrument beat plays when Sodhi gets excited for party sharty?",
    "correctAnswer": "Bhangra Dhol / Dholak",
    "acceptableAnswers": [
      "bhangra dhol",
      "dhol",
      "punjabi dhol",
      "dholak"
    ]
  },
  {
    "id": "q_00662",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Lock Your Answer: Fun trivia: In TMKOC, what eerie whistling sound played during the spooky Bhootni episodes?",
    "correctAnswer": "Bhootni Whistling Flute",
    "acceptableAnswers": [
      "bhootni whistle",
      "whistle",
      "flute",
      "spooky whistle"
    ]
  },
  {
    "id": "q_00663",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Buzzer Question: Name the correct one: In TMKOC, what siren sound effect plays when Inspector Chalu Pandey arrives on jeep?",
    "correctAnswer": "Police Siren",
    "acceptableAnswers": [
      "police siren",
      "siren",
      "police"
    ]
  },
  {
    "id": "q_00664",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Champion Round: Do you remember: In TMKOC, what peaceful instrument plays when Taarak Mehta delivers the moral ending?",
    "correctAnswer": "Acoustic Sitar / Flute Moral Theme",
    "acceptableAnswers": [
      "sitar",
      "flute",
      "moral theme",
      "ending theme"
    ]
  },
  {
    "id": "q_00665",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "In Phir Hera Pheri, how many days did Raju claim it takes to double your money?",
    "correctAnswer": "25 Days",
    "acceptableAnswers": [
      "25",
      "25 days",
      "pachees din",
      "25 din"
    ]
  },
  {
    "id": "q_00666",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "In Hera Pheri, what is the name of Babu Rao's dilapidated garage?",
    "correctAnswer": "Star Garage",
    "acceptableAnswers": [
      "star garage",
      "star"
    ]
  },
  {
    "id": "q_00667",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Who does Babu Rao mistake every incoming caller for on his crossed telephone?",
    "correctAnswer": "Devi Prasad",
    "acceptableAnswers": [
      "devi prasad",
      "deviprasad"
    ]
  },
  {
    "id": "q_00668",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Which stingy character in Phir Hera Pheri offers \"150 rupya dega\"?",
    "correctAnswer": "Kachra Seth",
    "acceptableAnswers": [
      "kachra seth",
      "kachra",
      "manoj joshi"
    ]
  },
  {
    "id": "q_00669",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Complete Babu Rao's iconic line: \"Yeh Baburao ka style hai... Utha le re deva, utha le...\"",
    "correctAnswer": "Mere ko nahi re, in dono ko utha le!",
    "acceptableAnswers": [
      "in dono ko utha le",
      "mere ko nahi re in dono ko",
      "in dono ko"
    ]
  },
  {
    "id": "q_00670",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Complete Raju's famous line to Baburao: \"Zor zor se bolke logon ko...\"",
    "correctAnswer": "Scheme bata de!",
    "acceptableAnswers": [
      "scheme bata de",
      "scheme"
    ]
  },
  {
    "id": "q_00671",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Who says: \"Aye 50 rupya kaat overacting ka\"?",
    "correctAnswer": "Raju (Akshay Kumar)",
    "acceptableAnswers": [
      "raju",
      "akshay kumar",
      "akshay"
    ]
  },
  {
    "id": "q_00672",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "What fraudulent company took money from Raju, Shyam, and Baburao?",
    "correctAnswer": "Laxmi Chit Fund",
    "acceptableAnswers": [
      "laxmi chit fund",
      "laxmi chitfund"
    ]
  },
  {
    "id": "q_00673",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Can you guess? Name the correct one: Where did the trio hide their suitcases of cash in Phir Hera Pheri?",
    "correctAnswer": "Circus",
    "acceptableAnswers": [
      "circus"
    ]
  },
  {
    "id": "q_00674",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Think fast! Do you remember: Who played the speech-impaired gangster Totla Tiwari in Phir Hera Pheri?",
    "correctAnswer": "Sharad Saxena",
    "acceptableAnswers": [
      "sharad saxena",
      "totla tiwari"
    ]
  },
  {
    "id": "q_00675",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "What was Johnny Lever's character name in Phir Hera Pheri?",
    "correctAnswer": "Munna Bhai",
    "acceptableAnswers": [
      "munna bhai",
      "munna"
    ]
  },
  {
    "id": "q_00676",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Who played Babu Rao Ganpatrao Apte in the Hera Pheri series?",
    "correctAnswer": "Paresh Rawal",
    "acceptableAnswers": [
      "paresh rawal",
      "paresh"
    ]
  },
  {
    "id": "q_00677",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Who played Shyam (Ghanshyam) in the Hera Pheri series?",
    "correctAnswer": "Suniel Shetty",
    "acceptableAnswers": [
      "suniel shetty",
      "sunil shetty"
    ]
  },
  {
    "id": "q_00678",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "True Fan Quiz: Guess the right answer: In Welcome, what was the bizarre artistic hobby of Majnu Bhai (Anil Kapoor)?",
    "correctAnswer": "Painting (Horse & Donkey)",
    "acceptableAnswers": [
      "painting",
      "painter",
      "paint",
      "donkey painting"
    ]
  },
  {
    "id": "q_00679",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "What phrase does Uday Shetty repeat to prevent himself from beating someone?",
    "correctAnswer": "Control Uday Control!",
    "acceptableAnswers": [
      "control uday control",
      "control uday",
      "control"
    ]
  },
  {
    "id": "q_00680",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Instant Guess: Trivia check: Who played the supreme underworld don RDX in Welcome?",
    "correctAnswer": "Feroz Khan",
    "acceptableAnswers": [
      "feroz khan",
      "rdx"
    ]
  },
  {
    "id": "q_00681",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "In Welcome, what was the profession of Dr. Ghungroo (Paresh Rawal)?",
    "correctAnswer": "Doctor",
    "acceptableAnswers": [
      "doctor",
      "dr"
    ]
  },
  {
    "id": "q_00682",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Lock Your Answer: Fun trivia: Complete Nana Patekar's line in Welcome: \"Bhagwan ka diya hua sab kuch hai...\"",
    "correctAnswer": "Daulat hai, shohrat hai, izzat hai",
    "acceptableAnswers": [
      "daulat hai shohrat hai",
      "izzat hai",
      "sab kuch hai"
    ]
  },
  {
    "id": "q_00683",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Buzzer Question: Name the correct one: In Welcome, which character pretended: \"Meri ek taang nakli hai, main hockey ka khiladi tha\"?",
    "correctAnswer": "Ballu (Vijay Raaz / Director)",
    "acceptableAnswers": [
      "ballu",
      "vijay raaz",
      "director",
      "hockey player"
    ]
  },
  {
    "id": "q_00684",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Champion Round: Do you remember: What was the character name of Akshay Kumar in Welcome?",
    "correctAnswer": "Rajiv",
    "acceptableAnswers": [
      "rajiv",
      "rajiv saini"
    ]
  },
  {
    "id": "q_00685",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "In Dhamaal, under which giant alphabet in Saint Sebastian Garden was 10 crore hidden?",
    "correctAnswer": "Big W",
    "acceptableAnswers": [
      "w",
      "big w",
      "letter w"
    ]
  },
  {
    "id": "q_00686",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "In Dhamaal, which cockpit button was Boman repeatedly warned never to press?",
    "correctAnswer": "Laal Button (Red Button)",
    "acceptableAnswers": [
      "laal button",
      "red button",
      "lal button"
    ]
  },
  {
    "id": "q_00687",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Who played the smart police inspector Kabir Nayak in Dhamaal?",
    "correctAnswer": "Sanjay Dutt",
    "acceptableAnswers": [
      "sanjay dutt",
      "kabir nayak",
      "kabir"
    ]
  },
  {
    "id": "q_00688",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "What was the hilariously long South Indian name of the passenger in Dhamaal?",
    "correctAnswer": "Muthuswamy Venugopal Iyer",
    "acceptableAnswers": [
      "venugopal iyer",
      "iyer",
      "muthuswamy venugopal iyer",
      "chinnaswamy"
    ]
  },
  {
    "id": "q_00689",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "What luxury sports car did Roy and Boman steal and drive in Dhamaal?",
    "correctAnswer": "Red Ferrari",
    "acceptableAnswers": [
      "ferrari",
      "red ferrari",
      "car"
    ]
  },
  {
    "id": "q_00690",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Who played the dim-witted brother Manav in Dhamaal?",
    "correctAnswer": "Jaaved Jaaferi",
    "acceptableAnswers": [
      "jaaved jaaferi",
      "javed jaffrey",
      "manav"
    ]
  },
  {
    "id": "q_00691",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Who played Adi (Aditya Shrivastav) in Dhamaal?",
    "correctAnswer": "Arshad Warsi",
    "acceptableAnswers": [
      "arshad warsi",
      "adi"
    ]
  },
  {
    "id": "q_00692",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Which character in Golmaal is mute and makes sounds like \"Aeeeee Ooooo\"?",
    "correctAnswer": "Lucky (Tusshar Kapoor)",
    "acceptableAnswers": [
      "lucky",
      "tusshar kapoor",
      "tusshar"
    ]
  },
  {
    "id": "q_00693",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Can you guess? Name the correct one: Which extortionist gangster in Golmaal announces: \"Vasooli collection karne aaya hai\"?",
    "correctAnswer": "Vasooli Bhai (Mukesh Tiwari)",
    "acceptableAnswers": [
      "vasooli bhai",
      "vasooli",
      "mukesh tiwari"
    ]
  },
  {
    "id": "q_00694",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Think fast! Do you remember: What does Babli Bhai (Sanjay Mishra) always tell his henchman in Golmaal?",
    "correctAnswer": "Dhondu, Just Chill!",
    "acceptableAnswers": [
      "dhondu just chill",
      "just chill",
      "dhondu"
    ]
  },
  {
    "id": "q_00695",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Which character in Golmaal forgets everything every 5 seconds?",
    "correctAnswer": "Pappi Bhai (Johnny Lever)",
    "acceptableAnswers": [
      "pappi bhai",
      "pappi",
      "johnny lever"
    ]
  },
  {
    "id": "q_00696",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Who directed the record-breaking Golmaal franchise?",
    "correctAnswer": "Rohit Shetty",
    "acceptableAnswers": [
      "rohit shetty",
      "rohit"
    ]
  },
  {
    "id": "q_00697",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Who played the short-tempered Gopal who is afraid of ghosts in Golmaal?",
    "correctAnswer": "Ajay Devgn",
    "acceptableAnswers": [
      "ajay devgn",
      "ajay devgan",
      "gopal"
    ]
  },
  {
    "id": "q_00698",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Complete Crime Master Gogo's vow: \"Aaya hoon, kuch toh loot kar jaaonga...\"",
    "correctAnswer": "Khaali haath nahi jaaonga!",
    "acceptableAnswers": [
      "khaali haath nahi jaaonga",
      "kuch toh loot kar jaaonga"
    ]
  },
  {
    "id": "q_00699",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Instant Guess: Trivia check: Who played Crime Master Gogo in Andaz Apna Apna?",
    "correctAnswer": "Shakti Kapoor",
    "acceptableAnswers": [
      "shakti kapoor",
      "shakti"
    ]
  },
  {
    "id": "q_00700",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "In Andaz Apna Apna, who says: \"Teja main hoon, mark idhar hai\"?",
    "correctAnswer": "Teja (Paresh Rawal)",
    "acceptableAnswers": [
      "teja",
      "paresh rawal"
    ]
  },
  {
    "id": "q_00701",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Lock Your Answer: Fun trivia: Complete Amar and Prem's flattering line: \"Aap purush hi nahi...\"",
    "correctAnswer": "Mahapurush hain!",
    "acceptableAnswers": [
      "mahapurush",
      "mahapurush hain"
    ]
  },
  {
    "id": "q_00702",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Buzzer Question: Name the correct one: Who played Amar and Prem in Andaz Apna Apna?",
    "correctAnswer": "Aamir Khan and Salman Khan",
    "acceptableAnswers": [
      "aamir khan and salman khan",
      "aamir and salman",
      "salman and aamir"
    ]
  },
  {
    "id": "q_00703",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Champion Round: Do you remember: In Chup Chup Ke, which character says: \"Raha nahi jaata, tadap hi aisi hai\"?",
    "correctAnswer": "Bandya (Rajpal Yadav)",
    "acceptableAnswers": [
      "bandya",
      "rajpal yadav",
      "rajpal"
    ]
  },
  {
    "id": "q_00704",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "In Chup Chup Ke, which disability did Jeetu and Gundya fake?",
    "correctAnswer": "Mute and Deaf (Goonge Behre)",
    "acceptableAnswers": [
      "goonge behre",
      "deaf and mute",
      "goonga behra"
    ]
  },
  {
    "id": "q_00705",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "In Munna Bhai M.B.B.S., what magical healing gesture does Munna give?",
    "correctAnswer": "Jaadu Ki Jhappi",
    "acceptableAnswers": [
      "jaadu ki jhappi",
      "jhappi",
      "hug"
    ]
  },
  {
    "id": "q_00706",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "What is Circuit's signature response when Munna gives an order?",
    "correctAnswer": "Bhai ne bola karne ka toh karne ka!",
    "acceptableAnswers": [
      "bhai ne bola karne ka",
      "bhai ne bola"
    ]
  },
  {
    "id": "q_00707",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Who played Circuit in Munna Bhai M.B.B.S.?",
    "correctAnswer": "Arshad Warsi",
    "acceptableAnswers": [
      "arshad warsi",
      "arshad"
    ]
  },
  {
    "id": "q_00708",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "What was Rancho's de-stressing mantra in 3 Idiots?",
    "correctAnswer": "All Is Well",
    "acceptableAnswers": [
      "all is well",
      "aal izz well",
      "all iz well"
    ]
  },
  {
    "id": "q_00709",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "What was the real name of Rancho in 3 Idiots revealed at Ladakh?",
    "correctAnswer": "Phunsukh Wangdu",
    "acceptableAnswers": [
      "phunsukh wangdu",
      "wangdu",
      "phunsukh"
    ]
  },
  {
    "id": "q_00710",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Who delivered the hilarious \"Chamatkar\" speech in 3 Idiots?",
    "correctAnswer": "Chatur Ramalingam (Silencer)",
    "acceptableAnswers": [
      "chatur",
      "silencer",
      "chatur ramalingam"
    ]
  },
  {
    "id": "q_00711",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "In Bhool Bhulaiyaa, who played the betel-nut chewing Chhote Pandit?",
    "correctAnswer": "Rajpal Yadav",
    "acceptableAnswers": [
      "rajpal yadav",
      "rajpal",
      "chhote pandit"
    ]
  },
  {
    "id": "q_00712",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Can you guess? Name the correct one: In Hungama, who was the suspicious wealthy husband played by Paresh Rawal?",
    "correctAnswer": "Radheshyam Tiwari",
    "acceptableAnswers": [
      "radheshyam tiwari",
      "radheshyam",
      "tiwari"
    ]
  },
  {
    "id": "q_00713",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Think fast! Do you remember: In Phir Hera Pheri, how many days did Raju claim it takes to double your money?",
    "correctAnswer": "25 Days",
    "acceptableAnswers": [
      "25",
      "25 days",
      "pachees din",
      "25 din"
    ]
  },
  {
    "id": "q_00714",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "True Fan Quiz: Guess the right answer: Complete Babu Rao's iconic line: \"Yeh Baburao ka style hai... Utha le re deva, utha le...\"",
    "correctAnswer": "Mere ko nahi re, in dono ko utha le!",
    "acceptableAnswers": [
      "in dono ko utha le",
      "mere ko nahi re in dono ko",
      "in dono ko"
    ]
  },
  {
    "id": "q_00715",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Instant Guess: Trivia check: Who says: \"Aye 50 rupya kaat overacting ka\"?",
    "correctAnswer": "Raju (Akshay Kumar)",
    "acceptableAnswers": [
      "raju",
      "akshay kumar",
      "akshay"
    ]
  },
  {
    "id": "q_00716",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Lock Your Answer: Fun trivia: Where did the trio hide their suitcases of cash in Phir Hera Pheri?",
    "correctAnswer": "Circus",
    "acceptableAnswers": [
      "circus"
    ]
  },
  {
    "id": "q_00717",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Buzzer Question: Name the correct one: Who played the speech-impaired gangster Totla Tiwari in Phir Hera Pheri?",
    "correctAnswer": "Sharad Saxena",
    "acceptableAnswers": [
      "sharad saxena",
      "totla tiwari"
    ]
  },
  {
    "id": "q_00718",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Champion Round: Do you remember: What was Johnny Lever's character name in Phir Hera Pheri?",
    "correctAnswer": "Munna Bhai",
    "acceptableAnswers": [
      "munna bhai",
      "munna"
    ]
  },
  {
    "id": "q_00719",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "In Welcome, what was the bizarre artistic hobby of Majnu Bhai (Anil Kapoor)?",
    "correctAnswer": "Painting (Horse & Donkey)",
    "acceptableAnswers": [
      "painting",
      "painter",
      "paint",
      "donkey painting"
    ]
  },
  {
    "id": "q_00720",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Who played the supreme underworld don RDX in Welcome?",
    "correctAnswer": "Feroz Khan",
    "acceptableAnswers": [
      "feroz khan",
      "rdx"
    ]
  },
  {
    "id": "q_00721",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Complete Nana Patekar's line in Welcome: \"Bhagwan ka diya hua sab kuch hai...\"",
    "correctAnswer": "Daulat hai, shohrat hai, izzat hai",
    "acceptableAnswers": [
      "daulat hai shohrat hai",
      "izzat hai",
      "sab kuch hai"
    ]
  },
  {
    "id": "q_00722",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "In Welcome, which character pretended: \"Meri ek taang nakli hai, main hockey ka khiladi tha\"?",
    "correctAnswer": "Ballu (Vijay Raaz / Director)",
    "acceptableAnswers": [
      "ballu",
      "vijay raaz",
      "director",
      "hockey player"
    ]
  },
  {
    "id": "q_00723",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Can you guess? Name the correct one: What was the character name of Akshay Kumar in Welcome?",
    "correctAnswer": "Rajiv",
    "acceptableAnswers": [
      "rajiv",
      "rajiv saini"
    ]
  },
  {
    "id": "q_00724",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Think fast! Do you remember: In Dhamaal, under which giant alphabet in Saint Sebastian Garden was 10 crore hidden?",
    "correctAnswer": "Big W",
    "acceptableAnswers": [
      "w",
      "big w",
      "letter w"
    ]
  },
  {
    "id": "q_00725",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "True Fan Quiz: Guess the right answer: What luxury sports car did Roy and Boman steal and drive in Dhamaal?",
    "correctAnswer": "Red Ferrari",
    "acceptableAnswers": [
      "ferrari",
      "red ferrari",
      "car"
    ]
  },
  {
    "id": "q_00726",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Instant Guess: Trivia check: Who played Adi (Aditya Shrivastav) in Dhamaal?",
    "correctAnswer": "Arshad Warsi",
    "acceptableAnswers": [
      "arshad warsi",
      "adi"
    ]
  },
  {
    "id": "q_00727",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Lock Your Answer: Fun trivia: Which extortionist gangster in Golmaal announces: \"Vasooli collection karne aaya hai\"?",
    "correctAnswer": "Vasooli Bhai (Mukesh Tiwari)",
    "acceptableAnswers": [
      "vasooli bhai",
      "vasooli",
      "mukesh tiwari"
    ]
  },
  {
    "id": "q_00728",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Buzzer Question: Name the correct one: What does Babli Bhai (Sanjay Mishra) always tell his henchman in Golmaal?",
    "correctAnswer": "Dhondu, Just Chill!",
    "acceptableAnswers": [
      "dhondu just chill",
      "just chill",
      "dhondu"
    ]
  },
  {
    "id": "q_00729",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Champion Round: Do you remember: Which character in Golmaal forgets everything every 5 seconds?",
    "correctAnswer": "Pappi Bhai (Johnny Lever)",
    "acceptableAnswers": [
      "pappi bhai",
      "pappi",
      "johnny lever"
    ]
  },
  {
    "id": "q_00730",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Who played Crime Master Gogo in Andaz Apna Apna?",
    "correctAnswer": "Shakti Kapoor",
    "acceptableAnswers": [
      "shakti kapoor",
      "shakti"
    ]
  },
  {
    "id": "q_00731",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Complete Amar and Prem's flattering line: \"Aap purush hi nahi...\"",
    "correctAnswer": "Mahapurush hain!",
    "acceptableAnswers": [
      "mahapurush",
      "mahapurush hain"
    ]
  },
  {
    "id": "q_00732",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Who played Amar and Prem in Andaz Apna Apna?",
    "correctAnswer": "Aamir Khan and Salman Khan",
    "acceptableAnswers": [
      "aamir khan and salman khan",
      "aamir and salman",
      "salman and aamir"
    ]
  },
  {
    "id": "q_00733",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Can you guess? Name the correct one: In Chup Chup Ke, which character says: \"Raha nahi jaata, tadap hi aisi hai\"?",
    "correctAnswer": "Bandya (Rajpal Yadav)",
    "acceptableAnswers": [
      "bandya",
      "rajpal yadav",
      "rajpal"
    ]
  },
  {
    "id": "q_00734",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Think fast! Do you remember: In Chup Chup Ke, which disability did Jeetu and Gundya fake?",
    "correctAnswer": "Mute and Deaf (Goonge Behre)",
    "acceptableAnswers": [
      "goonge behre",
      "deaf and mute",
      "goonga behra"
    ]
  },
  {
    "id": "q_00735",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "True Fan Quiz: Guess the right answer: What was Rancho's de-stressing mantra in 3 Idiots?",
    "correctAnswer": "All Is Well",
    "acceptableAnswers": [
      "all is well",
      "aal izz well",
      "all iz well"
    ]
  },
  {
    "id": "q_00736",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Instant Guess: Trivia check: Who delivered the hilarious \"Chamatkar\" speech in 3 Idiots?",
    "correctAnswer": "Chatur Ramalingam (Silencer)",
    "acceptableAnswers": [
      "chatur",
      "silencer",
      "chatur ramalingam"
    ]
  },
  {
    "id": "q_00737",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Lock Your Answer: Fun trivia: In Hungama, who was the suspicious wealthy husband played by Paresh Rawal?",
    "correctAnswer": "Radheshyam Tiwari",
    "acceptableAnswers": [
      "radheshyam tiwari",
      "radheshyam",
      "tiwari"
    ]
  },
  {
    "id": "q_00738",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Buzzer Question: Name the correct one: In Phir Hera Pheri, how many days did Raju claim it takes to double your money?",
    "correctAnswer": "25 Days",
    "acceptableAnswers": [
      "25",
      "25 days",
      "pachees din",
      "25 din"
    ]
  },
  {
    "id": "q_00739",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Champion Round: Do you remember: In Hera Pheri, what is the name of Babu Rao's dilapidated garage?",
    "correctAnswer": "Star Garage",
    "acceptableAnswers": [
      "star garage",
      "star"
    ]
  },
  {
    "id": "q_00740",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Where did the trio hide their suitcases of cash in Phir Hera Pheri?",
    "correctAnswer": "Circus",
    "acceptableAnswers": [
      "circus"
    ]
  },
  {
    "id": "q_00741",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Who played the speech-impaired gangster Totla Tiwari in Phir Hera Pheri?",
    "correctAnswer": "Sharad Saxena",
    "acceptableAnswers": [
      "sharad saxena",
      "totla tiwari"
    ]
  },
  {
    "id": "q_00742",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Can you guess? Name the correct one: What was Johnny Lever's character name in Phir Hera Pheri?",
    "correctAnswer": "Munna Bhai",
    "acceptableAnswers": [
      "munna bhai",
      "munna"
    ]
  },
  {
    "id": "q_00743",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Think fast! Do you remember: Who played Babu Rao Ganpatrao Apte in the Hera Pheri series?",
    "correctAnswer": "Paresh Rawal",
    "acceptableAnswers": [
      "paresh rawal",
      "paresh"
    ]
  },
  {
    "id": "q_00744",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "True Fan Quiz: Guess the right answer: Who played the supreme underworld don RDX in Welcome?",
    "correctAnswer": "Feroz Khan",
    "acceptableAnswers": [
      "feroz khan",
      "rdx"
    ]
  },
  {
    "id": "q_00745",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Instant Guess: Trivia check: Complete Nana Patekar's line in Welcome: \"Bhagwan ka diya hua sab kuch hai...\"",
    "correctAnswer": "Daulat hai, shohrat hai, izzat hai",
    "acceptableAnswers": [
      "daulat hai shohrat hai",
      "izzat hai",
      "sab kuch hai"
    ]
  },
  {
    "id": "q_00746",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Lock Your Answer: Fun trivia: What was the character name of Akshay Kumar in Welcome?",
    "correctAnswer": "Rajiv",
    "acceptableAnswers": [
      "rajiv",
      "rajiv saini"
    ]
  },
  {
    "id": "q_00747",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Buzzer Question: Name the correct one: In Dhamaal, under which giant alphabet in Saint Sebastian Garden was 10 crore hidden?",
    "correctAnswer": "Big W",
    "acceptableAnswers": [
      "w",
      "big w",
      "letter w"
    ]
  },
  {
    "id": "q_00748",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Champion Round: Do you remember: In Dhamaal, which cockpit button was Boman repeatedly warned never to press?",
    "correctAnswer": "Laal Button (Red Button)",
    "acceptableAnswers": [
      "laal button",
      "red button",
      "lal button"
    ]
  },
  {
    "id": "q_00749",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Which extortionist gangster in Golmaal announces: \"Vasooli collection karne aaya hai\"?",
    "correctAnswer": "Vasooli Bhai (Mukesh Tiwari)",
    "acceptableAnswers": [
      "vasooli bhai",
      "vasooli",
      "mukesh tiwari"
    ]
  },
  {
    "id": "q_00750",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "What does Babli Bhai (Sanjay Mishra) always tell his henchman in Golmaal?",
    "correctAnswer": "Dhondu, Just Chill!",
    "acceptableAnswers": [
      "dhondu just chill",
      "just chill",
      "dhondu"
    ]
  },
  {
    "id": "q_00751",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Can you guess? Name the correct one: Which character in Golmaal forgets everything every 5 seconds?",
    "correctAnswer": "Pappi Bhai (Johnny Lever)",
    "acceptableAnswers": [
      "pappi bhai",
      "pappi",
      "johnny lever"
    ]
  },
  {
    "id": "q_00752",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Think fast! Do you remember: Who directed the record-breaking Golmaal franchise?",
    "correctAnswer": "Rohit Shetty",
    "acceptableAnswers": [
      "rohit shetty",
      "rohit"
    ]
  },
  {
    "id": "q_00753",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "True Fan Quiz: Guess the right answer: Who played Crime Master Gogo in Andaz Apna Apna?",
    "correctAnswer": "Shakti Kapoor",
    "acceptableAnswers": [
      "shakti kapoor",
      "shakti"
    ]
  },
  {
    "id": "q_00754",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Instant Guess: Trivia check: Complete Amar and Prem's flattering line: \"Aap purush hi nahi...\"",
    "correctAnswer": "Mahapurush hain!",
    "acceptableAnswers": [
      "mahapurush",
      "mahapurush hain"
    ]
  },
  {
    "id": "q_00755",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Lock Your Answer: Fun trivia: In Chup Chup Ke, which character says: \"Raha nahi jaata, tadap hi aisi hai\"?",
    "correctAnswer": "Bandya (Rajpal Yadav)",
    "acceptableAnswers": [
      "bandya",
      "rajpal yadav",
      "rajpal"
    ]
  },
  {
    "id": "q_00756",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Buzzer Question: Name the correct one: In Chup Chup Ke, which disability did Jeetu and Gundya fake?",
    "correctAnswer": "Mute and Deaf (Goonge Behre)",
    "acceptableAnswers": [
      "goonge behre",
      "deaf and mute",
      "goonga behra"
    ]
  },
  {
    "id": "q_00757",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Champion Round: Do you remember: In Munna Bhai M.B.B.S., what magical healing gesture does Munna give?",
    "correctAnswer": "Jaadu Ki Jhappi",
    "acceptableAnswers": [
      "jaadu ki jhappi",
      "jhappi",
      "hug"
    ]
  },
  {
    "id": "q_00758",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "In Hungama, who was the suspicious wealthy husband played by Paresh Rawal?",
    "correctAnswer": "Radheshyam Tiwari",
    "acceptableAnswers": [
      "radheshyam tiwari",
      "radheshyam",
      "tiwari"
    ]
  },
  {
    "id": "q_00759",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Can you guess? Name the correct one: In Hera Pheri, what is the name of Babu Rao's dilapidated garage?",
    "correctAnswer": "Star Garage",
    "acceptableAnswers": [
      "star garage",
      "star"
    ]
  },
  {
    "id": "q_00760",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Think fast! Do you remember: Who does Babu Rao mistake every incoming caller for on his crossed telephone?",
    "correctAnswer": "Devi Prasad",
    "acceptableAnswers": [
      "devi prasad",
      "deviprasad"
    ]
  },
  {
    "id": "q_00761",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "True Fan Quiz: Guess the right answer: Who says: \"Aye 50 rupya kaat overacting ka\"?",
    "correctAnswer": "Raju (Akshay Kumar)",
    "acceptableAnswers": [
      "raju",
      "akshay kumar",
      "akshay"
    ]
  },
  {
    "id": "q_00762",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Instant Guess: Trivia check: Where did the trio hide their suitcases of cash in Phir Hera Pheri?",
    "correctAnswer": "Circus",
    "acceptableAnswers": [
      "circus"
    ]
  },
  {
    "id": "q_00763",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Lock Your Answer: Fun trivia: What was Johnny Lever's character name in Phir Hera Pheri?",
    "correctAnswer": "Munna Bhai",
    "acceptableAnswers": [
      "munna bhai",
      "munna"
    ]
  },
  {
    "id": "q_00764",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Buzzer Question: Name the correct one: Who played Babu Rao Ganpatrao Apte in the Hera Pheri series?",
    "correctAnswer": "Paresh Rawal",
    "acceptableAnswers": [
      "paresh rawal",
      "paresh"
    ]
  },
  {
    "id": "q_00765",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Champion Round: Do you remember: Who played Shyam (Ghanshyam) in the Hera Pheri series?",
    "correctAnswer": "Suniel Shetty",
    "acceptableAnswers": [
      "suniel shetty",
      "sunil shetty"
    ]
  },
  {
    "id": "q_00766",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "What was the character name of Akshay Kumar in Welcome?",
    "correctAnswer": "Rajiv",
    "acceptableAnswers": [
      "rajiv",
      "rajiv saini"
    ]
  },
  {
    "id": "q_00767",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Can you guess? Name the correct one: In Dhamaal, which cockpit button was Boman repeatedly warned never to press?",
    "correctAnswer": "Laal Button (Red Button)",
    "acceptableAnswers": [
      "laal button",
      "red button",
      "lal button"
    ]
  },
  {
    "id": "q_00768",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Think fast! Do you remember: Who played the smart police inspector Kabir Nayak in Dhamaal?",
    "correctAnswer": "Sanjay Dutt",
    "acceptableAnswers": [
      "sanjay dutt",
      "kabir nayak",
      "kabir"
    ]
  },
  {
    "id": "q_00769",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "True Fan Quiz: Guess the right answer: Who played Adi (Aditya Shrivastav) in Dhamaal?",
    "correctAnswer": "Arshad Warsi",
    "acceptableAnswers": [
      "arshad warsi",
      "adi"
    ]
  },
  {
    "id": "q_00770",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Instant Guess: Trivia check: Which extortionist gangster in Golmaal announces: \"Vasooli collection karne aaya hai\"?",
    "correctAnswer": "Vasooli Bhai (Mukesh Tiwari)",
    "acceptableAnswers": [
      "vasooli bhai",
      "vasooli",
      "mukesh tiwari"
    ]
  },
  {
    "id": "q_00771",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Lock Your Answer: Fun trivia: Which character in Golmaal forgets everything every 5 seconds?",
    "correctAnswer": "Pappi Bhai (Johnny Lever)",
    "acceptableAnswers": [
      "pappi bhai",
      "pappi",
      "johnny lever"
    ]
  },
  {
    "id": "q_00772",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Buzzer Question: Name the correct one: Who directed the record-breaking Golmaal franchise?",
    "correctAnswer": "Rohit Shetty",
    "acceptableAnswers": [
      "rohit shetty",
      "rohit"
    ]
  },
  {
    "id": "q_00773",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Champion Round: Do you remember: Who played the short-tempered Gopal who is afraid of ghosts in Golmaal?",
    "correctAnswer": "Ajay Devgn",
    "acceptableAnswers": [
      "ajay devgn",
      "ajay devgan",
      "gopal"
    ]
  },
  {
    "id": "q_00774",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "In Chup Chup Ke, which character says: \"Raha nahi jaata, tadap hi aisi hai\"?",
    "correctAnswer": "Bandya (Rajpal Yadav)",
    "acceptableAnswers": [
      "bandya",
      "rajpal yadav",
      "rajpal"
    ]
  },
  {
    "id": "q_00775",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Can you guess? Name the correct one: In Munna Bhai M.B.B.S., what magical healing gesture does Munna give?",
    "correctAnswer": "Jaadu Ki Jhappi",
    "acceptableAnswers": [
      "jaadu ki jhappi",
      "jhappi",
      "hug"
    ]
  },
  {
    "id": "q_00776",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Think fast! Do you remember: What is Circuit's signature response when Munna gives an order?",
    "correctAnswer": "Bhai ne bola karne ka toh karne ka!",
    "acceptableAnswers": [
      "bhai ne bola karne ka",
      "bhai ne bola"
    ]
  },
  {
    "id": "q_00777",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "True Fan Quiz: Guess the right answer: Who delivered the hilarious \"Chamatkar\" speech in 3 Idiots?",
    "correctAnswer": "Chatur Ramalingam (Silencer)",
    "acceptableAnswers": [
      "chatur",
      "silencer",
      "chatur ramalingam"
    ]
  },
  {
    "id": "q_00778",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Instant Guess: Trivia check: In Hungama, who was the suspicious wealthy husband played by Paresh Rawal?",
    "correctAnswer": "Radheshyam Tiwari",
    "acceptableAnswers": [
      "radheshyam tiwari",
      "radheshyam",
      "tiwari"
    ]
  },
  {
    "id": "q_00779",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Lock Your Answer: Fun trivia: In Hera Pheri, what is the name of Babu Rao's dilapidated garage?",
    "correctAnswer": "Star Garage",
    "acceptableAnswers": [
      "star garage",
      "star"
    ]
  },
  {
    "id": "q_00780",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Buzzer Question: Name the correct one: Who does Babu Rao mistake every incoming caller for on his crossed telephone?",
    "correctAnswer": "Devi Prasad",
    "acceptableAnswers": [
      "devi prasad",
      "deviprasad"
    ]
  },
  {
    "id": "q_00781",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Champion Round: Do you remember: Which stingy character in Phir Hera Pheri offers \"150 rupya dega\"?",
    "correctAnswer": "Kachra Seth",
    "acceptableAnswers": [
      "kachra seth",
      "kachra",
      "manoj joshi"
    ]
  },
  {
    "id": "q_00782",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Can you guess? Name the correct one: Who played Shyam (Ghanshyam) in the Hera Pheri series?",
    "correctAnswer": "Suniel Shetty",
    "acceptableAnswers": [
      "suniel shetty",
      "sunil shetty"
    ]
  },
  {
    "id": "q_00783",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Think fast! Do you remember: In Welcome, what was the bizarre artistic hobby of Majnu Bhai (Anil Kapoor)?",
    "correctAnswer": "Painting (Horse & Donkey)",
    "acceptableAnswers": [
      "painting",
      "painter",
      "paint",
      "donkey painting"
    ]
  },
  {
    "id": "q_00784",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "True Fan Quiz: Guess the right answer: Complete Nana Patekar's line in Welcome: \"Bhagwan ka diya hua sab kuch hai...\"",
    "correctAnswer": "Daulat hai, shohrat hai, izzat hai",
    "acceptableAnswers": [
      "daulat hai shohrat hai",
      "izzat hai",
      "sab kuch hai"
    ]
  },
  {
    "id": "q_00785",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Instant Guess: Trivia check: What was the character name of Akshay Kumar in Welcome?",
    "correctAnswer": "Rajiv",
    "acceptableAnswers": [
      "rajiv",
      "rajiv saini"
    ]
  },
  {
    "id": "q_00786",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Lock Your Answer: Fun trivia: In Dhamaal, which cockpit button was Boman repeatedly warned never to press?",
    "correctAnswer": "Laal Button (Red Button)",
    "acceptableAnswers": [
      "laal button",
      "red button",
      "lal button"
    ]
  },
  {
    "id": "q_00787",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Buzzer Question: Name the correct one: Who played the smart police inspector Kabir Nayak in Dhamaal?",
    "correctAnswer": "Sanjay Dutt",
    "acceptableAnswers": [
      "sanjay dutt",
      "kabir nayak",
      "kabir"
    ]
  },
  {
    "id": "q_00788",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Champion Round: Do you remember: What was the hilariously long South Indian name of the passenger in Dhamaal?",
    "correctAnswer": "Muthuswamy Venugopal Iyer",
    "acceptableAnswers": [
      "venugopal iyer",
      "iyer",
      "muthuswamy venugopal iyer",
      "chinnaswamy"
    ]
  },
  {
    "id": "q_00789",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Can you guess? Name the correct one: Who played the short-tempered Gopal who is afraid of ghosts in Golmaal?",
    "correctAnswer": "Ajay Devgn",
    "acceptableAnswers": [
      "ajay devgn",
      "ajay devgan",
      "gopal"
    ]
  },
  {
    "id": "q_00790",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "True Fan Quiz: Guess the right answer: Complete Amar and Prem's flattering line: \"Aap purush hi nahi...\"",
    "correctAnswer": "Mahapurush hain!",
    "acceptableAnswers": [
      "mahapurush",
      "mahapurush hain"
    ]
  },
  {
    "id": "q_00791",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Instant Guess: Trivia check: In Chup Chup Ke, which character says: \"Raha nahi jaata, tadap hi aisi hai\"?",
    "correctAnswer": "Bandya (Rajpal Yadav)",
    "acceptableAnswers": [
      "bandya",
      "rajpal yadav",
      "rajpal"
    ]
  },
  {
    "id": "q_00792",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Lock Your Answer: Fun trivia: In Munna Bhai M.B.B.S., what magical healing gesture does Munna give?",
    "correctAnswer": "Jaadu Ki Jhappi",
    "acceptableAnswers": [
      "jaadu ki jhappi",
      "jhappi",
      "hug"
    ]
  },
  {
    "id": "q_00793",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Buzzer Question: Name the correct one: What is Circuit's signature response when Munna gives an order?",
    "correctAnswer": "Bhai ne bola karne ka toh karne ka!",
    "acceptableAnswers": [
      "bhai ne bola karne ka",
      "bhai ne bola"
    ]
  },
  {
    "id": "q_00794",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Champion Round: Do you remember: Who played Circuit in Munna Bhai M.B.B.S.?",
    "correctAnswer": "Arshad Warsi",
    "acceptableAnswers": [
      "arshad warsi",
      "arshad"
    ]
  },
  {
    "id": "q_00795",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Can you guess? Name the correct one: Which stingy character in Phir Hera Pheri offers \"150 rupya dega\"?",
    "correctAnswer": "Kachra Seth",
    "acceptableAnswers": [
      "kachra seth",
      "kachra",
      "manoj joshi"
    ]
  },
  {
    "id": "q_00796",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Think fast! Do you remember: Complete Babu Rao's iconic line: \"Yeh Baburao ka style hai... Utha le re deva, utha le...\"",
    "correctAnswer": "Mere ko nahi re, in dono ko utha le!",
    "acceptableAnswers": [
      "in dono ko utha le",
      "mere ko nahi re in dono ko",
      "in dono ko"
    ]
  },
  {
    "id": "q_00797",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "True Fan Quiz: Guess the right answer: Where did the trio hide their suitcases of cash in Phir Hera Pheri?",
    "correctAnswer": "Circus",
    "acceptableAnswers": [
      "circus"
    ]
  },
  {
    "id": "q_00798",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Instant Guess: Trivia check: What was Johnny Lever's character name in Phir Hera Pheri?",
    "correctAnswer": "Munna Bhai",
    "acceptableAnswers": [
      "munna bhai",
      "munna"
    ]
  },
  {
    "id": "q_00799",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Lock Your Answer: Fun trivia: Who played Shyam (Ghanshyam) in the Hera Pheri series?",
    "correctAnswer": "Suniel Shetty",
    "acceptableAnswers": [
      "suniel shetty",
      "sunil shetty"
    ]
  },
  {
    "id": "q_00800",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Buzzer Question: Name the correct one: In Welcome, what was the bizarre artistic hobby of Majnu Bhai (Anil Kapoor)?",
    "correctAnswer": "Painting (Horse & Donkey)",
    "acceptableAnswers": [
      "painting",
      "painter",
      "paint",
      "donkey painting"
    ]
  },
  {
    "id": "q_00801",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Champion Round: Do you remember: What phrase does Uday Shetty repeat to prevent himself from beating someone?",
    "correctAnswer": "Control Uday Control!",
    "acceptableAnswers": [
      "control uday control",
      "control uday",
      "control"
    ]
  },
  {
    "id": "q_00802",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Can you guess? Name the correct one: What was the hilariously long South Indian name of the passenger in Dhamaal?",
    "correctAnswer": "Muthuswamy Venugopal Iyer",
    "acceptableAnswers": [
      "venugopal iyer",
      "iyer",
      "muthuswamy venugopal iyer",
      "chinnaswamy"
    ]
  },
  {
    "id": "q_00803",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Think fast! Do you remember: What luxury sports car did Roy and Boman steal and drive in Dhamaal?",
    "correctAnswer": "Red Ferrari",
    "acceptableAnswers": [
      "ferrari",
      "red ferrari",
      "car"
    ]
  },
  {
    "id": "q_00804",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "True Fan Quiz: Guess the right answer: Which extortionist gangster in Golmaal announces: \"Vasooli collection karne aaya hai\"?",
    "correctAnswer": "Vasooli Bhai (Mukesh Tiwari)",
    "acceptableAnswers": [
      "vasooli bhai",
      "vasooli",
      "mukesh tiwari"
    ]
  },
  {
    "id": "q_00805",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Instant Guess: Trivia check: Which character in Golmaal forgets everything every 5 seconds?",
    "correctAnswer": "Pappi Bhai (Johnny Lever)",
    "acceptableAnswers": [
      "pappi bhai",
      "pappi",
      "johnny lever"
    ]
  },
  {
    "id": "q_00806",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Lock Your Answer: Fun trivia: Who played the short-tempered Gopal who is afraid of ghosts in Golmaal?",
    "correctAnswer": "Ajay Devgn",
    "acceptableAnswers": [
      "ajay devgn",
      "ajay devgan",
      "gopal"
    ]
  },
  {
    "id": "q_00807",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Champion Round: Do you remember: Complete Crime Master Gogo's vow: \"Aaya hoon, kuch toh loot kar jaaonga...\"",
    "correctAnswer": "Khaali haath nahi jaaonga!",
    "acceptableAnswers": [
      "khaali haath nahi jaaonga",
      "kuch toh loot kar jaaonga"
    ]
  },
  {
    "id": "q_00808",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Can you guess? Name the correct one: Who played Circuit in Munna Bhai M.B.B.S.?",
    "correctAnswer": "Arshad Warsi",
    "acceptableAnswers": [
      "arshad warsi",
      "arshad"
    ]
  },
  {
    "id": "q_00809",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Think fast! Do you remember: What was Rancho's de-stressing mantra in 3 Idiots?",
    "correctAnswer": "All Is Well",
    "acceptableAnswers": [
      "all is well",
      "aal izz well",
      "all iz well"
    ]
  },
  {
    "id": "q_00810",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "True Fan Quiz: Guess the right answer: In Hungama, who was the suspicious wealthy husband played by Paresh Rawal?",
    "correctAnswer": "Radheshyam Tiwari",
    "acceptableAnswers": [
      "radheshyam tiwari",
      "radheshyam",
      "tiwari"
    ]
  },
  {
    "id": "q_00811",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Instant Guess: Trivia check: In Hera Pheri, what is the name of Babu Rao's dilapidated garage?",
    "correctAnswer": "Star Garage",
    "acceptableAnswers": [
      "star garage",
      "star"
    ]
  },
  {
    "id": "q_00812",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Lock Your Answer: Fun trivia: Which stingy character in Phir Hera Pheri offers \"150 rupya dega\"?",
    "correctAnswer": "Kachra Seth",
    "acceptableAnswers": [
      "kachra seth",
      "kachra",
      "manoj joshi"
    ]
  },
  {
    "id": "q_00813",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Buzzer Question: Name the correct one: Complete Babu Rao's iconic line: \"Yeh Baburao ka style hai... Utha le re deva, utha le...\"",
    "correctAnswer": "Mere ko nahi re, in dono ko utha le!",
    "acceptableAnswers": [
      "in dono ko utha le",
      "mere ko nahi re in dono ko",
      "in dono ko"
    ]
  },
  {
    "id": "q_00814",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Champion Round: Do you remember: Complete Raju's famous line to Baburao: \"Zor zor se bolke logon ko...\"",
    "correctAnswer": "Scheme bata de!",
    "acceptableAnswers": [
      "scheme bata de",
      "scheme"
    ]
  },
  {
    "id": "q_00815",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Can you guess? Name the correct one: What phrase does Uday Shetty repeat to prevent himself from beating someone?",
    "correctAnswer": "Control Uday Control!",
    "acceptableAnswers": [
      "control uday control",
      "control uday",
      "control"
    ]
  },
  {
    "id": "q_00816",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Think fast! Do you remember: Who played the supreme underworld don RDX in Welcome?",
    "correctAnswer": "Feroz Khan",
    "acceptableAnswers": [
      "feroz khan",
      "rdx"
    ]
  },
  {
    "id": "q_00817",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "True Fan Quiz: Guess the right answer: What was the character name of Akshay Kumar in Welcome?",
    "correctAnswer": "Rajiv",
    "acceptableAnswers": [
      "rajiv",
      "rajiv saini"
    ]
  },
  {
    "id": "q_00818",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Instant Guess: Trivia check: In Dhamaal, which cockpit button was Boman repeatedly warned never to press?",
    "correctAnswer": "Laal Button (Red Button)",
    "acceptableAnswers": [
      "laal button",
      "red button",
      "lal button"
    ]
  },
  {
    "id": "q_00819",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Lock Your Answer: Fun trivia: What was the hilariously long South Indian name of the passenger in Dhamaal?",
    "correctAnswer": "Muthuswamy Venugopal Iyer",
    "acceptableAnswers": [
      "venugopal iyer",
      "iyer",
      "muthuswamy venugopal iyer",
      "chinnaswamy"
    ]
  },
  {
    "id": "q_00820",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Buzzer Question: Name the correct one: What luxury sports car did Roy and Boman steal and drive in Dhamaal?",
    "correctAnswer": "Red Ferrari",
    "acceptableAnswers": [
      "ferrari",
      "red ferrari",
      "car"
    ]
  },
  {
    "id": "q_00821",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Champion Round: Do you remember: Who played the dim-witted brother Manav in Dhamaal?",
    "correctAnswer": "Jaaved Jaaferi",
    "acceptableAnswers": [
      "jaaved jaaferi",
      "javed jaffrey",
      "manav"
    ]
  },
  {
    "id": "q_00822",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Can you guess? Name the correct one: Complete Crime Master Gogo's vow: \"Aaya hoon, kuch toh loot kar jaaonga...\"",
    "correctAnswer": "Khaali haath nahi jaaonga!",
    "acceptableAnswers": [
      "khaali haath nahi jaaonga",
      "kuch toh loot kar jaaonga"
    ]
  },
  {
    "id": "q_00823",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Think fast! Do you remember: Who played Crime Master Gogo in Andaz Apna Apna?",
    "correctAnswer": "Shakti Kapoor",
    "acceptableAnswers": [
      "shakti kapoor",
      "shakti"
    ]
  },
  {
    "id": "q_00824",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "True Fan Quiz: Guess the right answer: In Chup Chup Ke, which character says: \"Raha nahi jaata, tadap hi aisi hai\"?",
    "correctAnswer": "Bandya (Rajpal Yadav)",
    "acceptableAnswers": [
      "bandya",
      "rajpal yadav",
      "rajpal"
    ]
  },
  {
    "id": "q_00825",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Instant Guess: Trivia check: In Munna Bhai M.B.B.S., what magical healing gesture does Munna give?",
    "correctAnswer": "Jaadu Ki Jhappi",
    "acceptableAnswers": [
      "jaadu ki jhappi",
      "jhappi",
      "hug"
    ]
  },
  {
    "id": "q_00826",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Lock Your Answer: Fun trivia: Who played Circuit in Munna Bhai M.B.B.S.?",
    "correctAnswer": "Arshad Warsi",
    "acceptableAnswers": [
      "arshad warsi",
      "arshad"
    ]
  },
  {
    "id": "q_00827",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Buzzer Question: Name the correct one: What was Rancho's de-stressing mantra in 3 Idiots?",
    "correctAnswer": "All Is Well",
    "acceptableAnswers": [
      "all is well",
      "aal izz well",
      "all iz well"
    ]
  },
  {
    "id": "q_00828",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Champion Round: Do you remember: What was the real name of Rancho in 3 Idiots revealed at Ladakh?",
    "correctAnswer": "Phunsukh Wangdu",
    "acceptableAnswers": [
      "phunsukh wangdu",
      "wangdu",
      "phunsukh"
    ]
  },
  {
    "id": "q_00829",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Can you guess? Name the correct one: Complete Raju's famous line to Baburao: \"Zor zor se bolke logon ko...\"",
    "correctAnswer": "Scheme bata de!",
    "acceptableAnswers": [
      "scheme bata de",
      "scheme"
    ]
  },
  {
    "id": "q_00830",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Think fast! Do you remember: Who says: \"Aye 50 rupya kaat overacting ka\"?",
    "correctAnswer": "Raju (Akshay Kumar)",
    "acceptableAnswers": [
      "raju",
      "akshay kumar",
      "akshay"
    ]
  },
  {
    "id": "q_00831",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "True Fan Quiz: Guess the right answer: What was Johnny Lever's character name in Phir Hera Pheri?",
    "correctAnswer": "Munna Bhai",
    "acceptableAnswers": [
      "munna bhai",
      "munna"
    ]
  },
  {
    "id": "q_00832",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Instant Guess: Trivia check: Who played Shyam (Ghanshyam) in the Hera Pheri series?",
    "correctAnswer": "Suniel Shetty",
    "acceptableAnswers": [
      "suniel shetty",
      "sunil shetty"
    ]
  },
  {
    "id": "q_00833",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Lock Your Answer: Fun trivia: What phrase does Uday Shetty repeat to prevent himself from beating someone?",
    "correctAnswer": "Control Uday Control!",
    "acceptableAnswers": [
      "control uday control",
      "control uday",
      "control"
    ]
  },
  {
    "id": "q_00834",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Buzzer Question: Name the correct one: Who played the supreme underworld don RDX in Welcome?",
    "correctAnswer": "Feroz Khan",
    "acceptableAnswers": [
      "feroz khan",
      "rdx"
    ]
  },
  {
    "id": "q_00835",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Champion Round: Do you remember: In Welcome, what was the profession of Dr. Ghungroo (Paresh Rawal)?",
    "correctAnswer": "Doctor",
    "acceptableAnswers": [
      "doctor",
      "dr"
    ]
  },
  {
    "id": "q_00836",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Can you guess? Name the correct one: Who played the dim-witted brother Manav in Dhamaal?",
    "correctAnswer": "Jaaved Jaaferi",
    "acceptableAnswers": [
      "jaaved jaaferi",
      "javed jaffrey",
      "manav"
    ]
  },
  {
    "id": "q_00837",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Think fast! Do you remember: Who played Adi (Aditya Shrivastav) in Dhamaal?",
    "correctAnswer": "Arshad Warsi",
    "acceptableAnswers": [
      "arshad warsi",
      "adi"
    ]
  },
  {
    "id": "q_00838",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "True Fan Quiz: Guess the right answer: Which character in Golmaal forgets everything every 5 seconds?",
    "correctAnswer": "Pappi Bhai (Johnny Lever)",
    "acceptableAnswers": [
      "pappi bhai",
      "pappi",
      "johnny lever"
    ]
  },
  {
    "id": "q_00839",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Instant Guess: Trivia check: Who played the short-tempered Gopal who is afraid of ghosts in Golmaal?",
    "correctAnswer": "Ajay Devgn",
    "acceptableAnswers": [
      "ajay devgn",
      "ajay devgan",
      "gopal"
    ]
  },
  {
    "id": "q_00840",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Lock Your Answer: Fun trivia: Complete Crime Master Gogo's vow: \"Aaya hoon, kuch toh loot kar jaaonga...\"",
    "correctAnswer": "Khaali haath nahi jaaonga!",
    "acceptableAnswers": [
      "khaali haath nahi jaaonga",
      "kuch toh loot kar jaaonga"
    ]
  },
  {
    "id": "q_00841",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Buzzer Question: Name the correct one: Who played Crime Master Gogo in Andaz Apna Apna?",
    "correctAnswer": "Shakti Kapoor",
    "acceptableAnswers": [
      "shakti kapoor",
      "shakti"
    ]
  },
  {
    "id": "q_00842",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Champion Round: Do you remember: In Andaz Apna Apna, who says: \"Teja main hoon, mark idhar hai\"?",
    "correctAnswer": "Teja (Paresh Rawal)",
    "acceptableAnswers": [
      "teja",
      "paresh rawal"
    ]
  },
  {
    "id": "q_00843",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Can you guess? Name the correct one: What was the real name of Rancho in 3 Idiots revealed at Ladakh?",
    "correctAnswer": "Phunsukh Wangdu",
    "acceptableAnswers": [
      "phunsukh wangdu",
      "wangdu",
      "phunsukh"
    ]
  },
  {
    "id": "q_00844",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Think fast! Do you remember: Who delivered the hilarious \"Chamatkar\" speech in 3 Idiots?",
    "correctAnswer": "Chatur Ramalingam (Silencer)",
    "acceptableAnswers": [
      "chatur",
      "silencer",
      "chatur ramalingam"
    ]
  },
  {
    "id": "q_00845",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "True Fan Quiz: Guess the right answer: In Hera Pheri, what is the name of Babu Rao's dilapidated garage?",
    "correctAnswer": "Star Garage",
    "acceptableAnswers": [
      "star garage",
      "star"
    ]
  },
  {
    "id": "q_00846",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Instant Guess: Trivia check: Which stingy character in Phir Hera Pheri offers \"150 rupya dega\"?",
    "correctAnswer": "Kachra Seth",
    "acceptableAnswers": [
      "kachra seth",
      "kachra",
      "manoj joshi"
    ]
  },
  {
    "id": "q_00847",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Lock Your Answer: Fun trivia: Complete Raju's famous line to Baburao: \"Zor zor se bolke logon ko...\"",
    "correctAnswer": "Scheme bata de!",
    "acceptableAnswers": [
      "scheme bata de",
      "scheme"
    ]
  },
  {
    "id": "q_00848",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Buzzer Question: Name the correct one: Who says: \"Aye 50 rupya kaat overacting ka\"?",
    "correctAnswer": "Raju (Akshay Kumar)",
    "acceptableAnswers": [
      "raju",
      "akshay kumar",
      "akshay"
    ]
  },
  {
    "id": "q_00849",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Champion Round: Do you remember: What fraudulent company took money from Raju, Shyam, and Baburao?",
    "correctAnswer": "Laxmi Chit Fund",
    "acceptableAnswers": [
      "laxmi chit fund",
      "laxmi chitfund"
    ]
  },
  {
    "id": "q_00850",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Can you guess? Name the correct one: In Welcome, what was the profession of Dr. Ghungroo (Paresh Rawal)?",
    "correctAnswer": "Doctor",
    "acceptableAnswers": [
      "doctor",
      "dr"
    ]
  },
  {
    "id": "q_00851",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Think fast! Do you remember: Complete Nana Patekar's line in Welcome: \"Bhagwan ka diya hua sab kuch hai...\"",
    "correctAnswer": "Daulat hai, shohrat hai, izzat hai",
    "acceptableAnswers": [
      "daulat hai shohrat hai",
      "izzat hai",
      "sab kuch hai"
    ]
  },
  {
    "id": "q_00852",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "True Fan Quiz: Guess the right answer: In Dhamaal, which cockpit button was Boman repeatedly warned never to press?",
    "correctAnswer": "Laal Button (Red Button)",
    "acceptableAnswers": [
      "laal button",
      "red button",
      "lal button"
    ]
  },
  {
    "id": "q_00853",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Instant Guess: Trivia check: What was the hilariously long South Indian name of the passenger in Dhamaal?",
    "correctAnswer": "Muthuswamy Venugopal Iyer",
    "acceptableAnswers": [
      "venugopal iyer",
      "iyer",
      "muthuswamy venugopal iyer",
      "chinnaswamy"
    ]
  },
  {
    "id": "q_00854",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Lock Your Answer: Fun trivia: Who played the dim-witted brother Manav in Dhamaal?",
    "correctAnswer": "Jaaved Jaaferi",
    "acceptableAnswers": [
      "jaaved jaaferi",
      "javed jaffrey",
      "manav"
    ]
  },
  {
    "id": "q_00855",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Buzzer Question: Name the correct one: Who played Adi (Aditya Shrivastav) in Dhamaal?",
    "correctAnswer": "Arshad Warsi",
    "acceptableAnswers": [
      "arshad warsi",
      "adi"
    ]
  },
  {
    "id": "q_00856",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Champion Round: Do you remember: Which character in Golmaal is mute and makes sounds like \"Aeeeee Ooooo\"?",
    "correctAnswer": "Lucky (Tusshar Kapoor)",
    "acceptableAnswers": [
      "lucky",
      "tusshar kapoor",
      "tusshar"
    ]
  },
  {
    "id": "q_00857",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Can you guess? Name the correct one: In Andaz Apna Apna, who says: \"Teja main hoon, mark idhar hai\"?",
    "correctAnswer": "Teja (Paresh Rawal)",
    "acceptableAnswers": [
      "teja",
      "paresh rawal"
    ]
  },
  {
    "id": "q_00858",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Think fast! Do you remember: Complete Amar and Prem's flattering line: \"Aap purush hi nahi...\"",
    "correctAnswer": "Mahapurush hain!",
    "acceptableAnswers": [
      "mahapurush",
      "mahapurush hain"
    ]
  },
  {
    "id": "q_00859",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "True Fan Quiz: Guess the right answer: In Munna Bhai M.B.B.S., what magical healing gesture does Munna give?",
    "correctAnswer": "Jaadu Ki Jhappi",
    "acceptableAnswers": [
      "jaadu ki jhappi",
      "jhappi",
      "hug"
    ]
  },
  {
    "id": "q_00860",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Instant Guess: Trivia check: Who played Circuit in Munna Bhai M.B.B.S.?",
    "correctAnswer": "Arshad Warsi",
    "acceptableAnswers": [
      "arshad warsi",
      "arshad"
    ]
  },
  {
    "id": "q_00861",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Lock Your Answer: Fun trivia: What was the real name of Rancho in 3 Idiots revealed at Ladakh?",
    "correctAnswer": "Phunsukh Wangdu",
    "acceptableAnswers": [
      "phunsukh wangdu",
      "wangdu",
      "phunsukh"
    ]
  },
  {
    "id": "q_00862",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Buzzer Question: Name the correct one: Who delivered the hilarious \"Chamatkar\" speech in 3 Idiots?",
    "correctAnswer": "Chatur Ramalingam (Silencer)",
    "acceptableAnswers": [
      "chatur",
      "silencer",
      "chatur ramalingam"
    ]
  },
  {
    "id": "q_00863",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Champion Round: Do you remember: In Bhool Bhulaiyaa, who played the betel-nut chewing Chhote Pandit?",
    "correctAnswer": "Rajpal Yadav",
    "acceptableAnswers": [
      "rajpal yadav",
      "rajpal",
      "chhote pandit"
    ]
  },
  {
    "id": "q_00864",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Can you guess? Name the correct one: What fraudulent company took money from Raju, Shyam, and Baburao?",
    "correctAnswer": "Laxmi Chit Fund",
    "acceptableAnswers": [
      "laxmi chit fund",
      "laxmi chitfund"
    ]
  },
  {
    "id": "q_00865",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Think fast! Do you remember: Where did the trio hide their suitcases of cash in Phir Hera Pheri?",
    "correctAnswer": "Circus",
    "acceptableAnswers": [
      "circus"
    ]
  },
  {
    "id": "q_00866",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "True Fan Quiz: Guess the right answer: Who played Shyam (Ghanshyam) in the Hera Pheri series?",
    "correctAnswer": "Suniel Shetty",
    "acceptableAnswers": [
      "suniel shetty",
      "sunil shetty"
    ]
  },
  {
    "id": "q_00867",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Instant Guess: Trivia check: What phrase does Uday Shetty repeat to prevent himself from beating someone?",
    "correctAnswer": "Control Uday Control!",
    "acceptableAnswers": [
      "control uday control",
      "control uday",
      "control"
    ]
  },
  {
    "id": "q_00868",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Lock Your Answer: Fun trivia: In Welcome, what was the profession of Dr. Ghungroo (Paresh Rawal)?",
    "correctAnswer": "Doctor",
    "acceptableAnswers": [
      "doctor",
      "dr"
    ]
  },
  {
    "id": "q_00869",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Buzzer Question: Name the correct one: Complete Nana Patekar's line in Welcome: \"Bhagwan ka diya hua sab kuch hai...\"",
    "correctAnswer": "Daulat hai, shohrat hai, izzat hai",
    "acceptableAnswers": [
      "daulat hai shohrat hai",
      "izzat hai",
      "sab kuch hai"
    ]
  },
  {
    "id": "q_00870",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Champion Round: Do you remember: In Welcome, which character pretended: \"Meri ek taang nakli hai, main hockey ka khiladi tha\"?",
    "correctAnswer": "Ballu (Vijay Raaz / Director)",
    "acceptableAnswers": [
      "ballu",
      "vijay raaz",
      "director",
      "hockey player"
    ]
  },
  {
    "id": "q_00871",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Can you guess? Name the correct one: Which character in Golmaal is mute and makes sounds like \"Aeeeee Ooooo\"?",
    "correctAnswer": "Lucky (Tusshar Kapoor)",
    "acceptableAnswers": [
      "lucky",
      "tusshar kapoor",
      "tusshar"
    ]
  },
  {
    "id": "q_00872",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Think fast! Do you remember: Which extortionist gangster in Golmaal announces: \"Vasooli collection karne aaya hai\"?",
    "correctAnswer": "Vasooli Bhai (Mukesh Tiwari)",
    "acceptableAnswers": [
      "vasooli bhai",
      "vasooli",
      "mukesh tiwari"
    ]
  },
  {
    "id": "q_00873",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "True Fan Quiz: Guess the right answer: Who played the short-tempered Gopal who is afraid of ghosts in Golmaal?",
    "correctAnswer": "Ajay Devgn",
    "acceptableAnswers": [
      "ajay devgn",
      "ajay devgan",
      "gopal"
    ]
  },
  {
    "id": "q_00874",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Instant Guess: Trivia check: Complete Crime Master Gogo's vow: \"Aaya hoon, kuch toh loot kar jaaonga...\"",
    "correctAnswer": "Khaali haath nahi jaaonga!",
    "acceptableAnswers": [
      "khaali haath nahi jaaonga",
      "kuch toh loot kar jaaonga"
    ]
  },
  {
    "id": "q_00875",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Lock Your Answer: Fun trivia: In Andaz Apna Apna, who says: \"Teja main hoon, mark idhar hai\"?",
    "correctAnswer": "Teja (Paresh Rawal)",
    "acceptableAnswers": [
      "teja",
      "paresh rawal"
    ]
  },
  {
    "id": "q_00876",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Buzzer Question: Name the correct one: Complete Amar and Prem's flattering line: \"Aap purush hi nahi...\"",
    "correctAnswer": "Mahapurush hain!",
    "acceptableAnswers": [
      "mahapurush",
      "mahapurush hain"
    ]
  },
  {
    "id": "q_00877",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Champion Round: Do you remember: Who played Amar and Prem in Andaz Apna Apna?",
    "correctAnswer": "Aamir Khan and Salman Khan",
    "acceptableAnswers": [
      "aamir khan and salman khan",
      "aamir and salman",
      "salman and aamir"
    ]
  },
  {
    "id": "q_00878",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Can you guess? Name the correct one: In Bhool Bhulaiyaa, who played the betel-nut chewing Chhote Pandit?",
    "correctAnswer": "Rajpal Yadav",
    "acceptableAnswers": [
      "rajpal yadav",
      "rajpal",
      "chhote pandit"
    ]
  },
  {
    "id": "q_00879",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Think fast! Do you remember: In Hungama, who was the suspicious wealthy husband played by Paresh Rawal?",
    "correctAnswer": "Radheshyam Tiwari",
    "acceptableAnswers": [
      "radheshyam tiwari",
      "radheshyam",
      "tiwari"
    ]
  },
  {
    "id": "q_00880",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "True Fan Quiz: Guess the right answer: Which stingy character in Phir Hera Pheri offers \"150 rupya dega\"?",
    "correctAnswer": "Kachra Seth",
    "acceptableAnswers": [
      "kachra seth",
      "kachra",
      "manoj joshi"
    ]
  },
  {
    "id": "q_00881",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Instant Guess: Trivia check: Complete Raju's famous line to Baburao: \"Zor zor se bolke logon ko...\"",
    "correctAnswer": "Scheme bata de!",
    "acceptableAnswers": [
      "scheme bata de",
      "scheme"
    ]
  },
  {
    "id": "q_00882",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Lock Your Answer: Fun trivia: What fraudulent company took money from Raju, Shyam, and Baburao?",
    "correctAnswer": "Laxmi Chit Fund",
    "acceptableAnswers": [
      "laxmi chit fund",
      "laxmi chitfund"
    ]
  },
  {
    "id": "q_00883",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Buzzer Question: Name the correct one: Where did the trio hide their suitcases of cash in Phir Hera Pheri?",
    "correctAnswer": "Circus",
    "acceptableAnswers": [
      "circus"
    ]
  },
  {
    "id": "q_00884",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Champion Round: Do you remember: Who played the speech-impaired gangster Totla Tiwari in Phir Hera Pheri?",
    "correctAnswer": "Sharad Saxena",
    "acceptableAnswers": [
      "sharad saxena",
      "totla tiwari"
    ]
  },
  {
    "id": "q_00885",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Can you guess? Name the correct one: In Welcome, which character pretended: \"Meri ek taang nakli hai, main hockey ka khiladi tha\"?",
    "correctAnswer": "Ballu (Vijay Raaz / Director)",
    "acceptableAnswers": [
      "ballu",
      "vijay raaz",
      "director",
      "hockey player"
    ]
  },
  {
    "id": "q_00886",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Think fast! Do you remember: What was the character name of Akshay Kumar in Welcome?",
    "correctAnswer": "Rajiv",
    "acceptableAnswers": [
      "rajiv",
      "rajiv saini"
    ]
  },
  {
    "id": "q_00887",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "True Fan Quiz: Guess the right answer: What was the hilariously long South Indian name of the passenger in Dhamaal?",
    "correctAnswer": "Muthuswamy Venugopal Iyer",
    "acceptableAnswers": [
      "venugopal iyer",
      "iyer",
      "muthuswamy venugopal iyer",
      "chinnaswamy"
    ]
  },
  {
    "id": "q_00888",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Instant Guess: Trivia check: Who played the dim-witted brother Manav in Dhamaal?",
    "correctAnswer": "Jaaved Jaaferi",
    "acceptableAnswers": [
      "jaaved jaaferi",
      "javed jaffrey",
      "manav"
    ]
  },
  {
    "id": "q_00889",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Lock Your Answer: Fun trivia: Which character in Golmaal is mute and makes sounds like \"Aeeeee Ooooo\"?",
    "correctAnswer": "Lucky (Tusshar Kapoor)",
    "acceptableAnswers": [
      "lucky",
      "tusshar kapoor",
      "tusshar"
    ]
  },
  {
    "id": "q_00890",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Buzzer Question: Name the correct one: Which extortionist gangster in Golmaal announces: \"Vasooli collection karne aaya hai\"?",
    "correctAnswer": "Vasooli Bhai (Mukesh Tiwari)",
    "acceptableAnswers": [
      "vasooli bhai",
      "vasooli",
      "mukesh tiwari"
    ]
  },
  {
    "id": "q_00891",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Champion Round: Do you remember: What does Babli Bhai (Sanjay Mishra) always tell his henchman in Golmaal?",
    "correctAnswer": "Dhondu, Just Chill!",
    "acceptableAnswers": [
      "dhondu just chill",
      "just chill",
      "dhondu"
    ]
  },
  {
    "id": "q_00892",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Can you guess? Name the correct one: Who played Amar and Prem in Andaz Apna Apna?",
    "correctAnswer": "Aamir Khan and Salman Khan",
    "acceptableAnswers": [
      "aamir khan and salman khan",
      "aamir and salman",
      "salman and aamir"
    ]
  },
  {
    "id": "q_00893",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Think fast! Do you remember: In Chup Chup Ke, which character says: \"Raha nahi jaata, tadap hi aisi hai\"?",
    "correctAnswer": "Bandya (Rajpal Yadav)",
    "acceptableAnswers": [
      "bandya",
      "rajpal yadav",
      "rajpal"
    ]
  },
  {
    "id": "q_00894",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "True Fan Quiz: Guess the right answer: Who played Circuit in Munna Bhai M.B.B.S.?",
    "correctAnswer": "Arshad Warsi",
    "acceptableAnswers": [
      "arshad warsi",
      "arshad"
    ]
  },
  {
    "id": "q_00895",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Instant Guess: Trivia check: What was the real name of Rancho in 3 Idiots revealed at Ladakh?",
    "correctAnswer": "Phunsukh Wangdu",
    "acceptableAnswers": [
      "phunsukh wangdu",
      "wangdu",
      "phunsukh"
    ]
  },
  {
    "id": "q_00896",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Lock Your Answer: Fun trivia: In Bhool Bhulaiyaa, who played the betel-nut chewing Chhote Pandit?",
    "correctAnswer": "Rajpal Yadav",
    "acceptableAnswers": [
      "rajpal yadav",
      "rajpal",
      "chhote pandit"
    ]
  },
  {
    "id": "q_00897",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Buzzer Question: Name the correct one: In Hungama, who was the suspicious wealthy husband played by Paresh Rawal?",
    "correctAnswer": "Radheshyam Tiwari",
    "acceptableAnswers": [
      "radheshyam tiwari",
      "radheshyam",
      "tiwari"
    ]
  },
  {
    "id": "q_00898",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Champion Round: Do you remember: In Phir Hera Pheri, how many days did Raju claim it takes to double your money?",
    "correctAnswer": "25 Days",
    "acceptableAnswers": [
      "25",
      "25 days",
      "pachees din",
      "25 din"
    ]
  },
  {
    "id": "q_00899",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Can you guess? Name the correct one: Who played the speech-impaired gangster Totla Tiwari in Phir Hera Pheri?",
    "correctAnswer": "Sharad Saxena",
    "acceptableAnswers": [
      "sharad saxena",
      "totla tiwari"
    ]
  },
  {
    "id": "q_00900",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Think fast! Do you remember: What was Johnny Lever's character name in Phir Hera Pheri?",
    "correctAnswer": "Munna Bhai",
    "acceptableAnswers": [
      "munna bhai",
      "munna"
    ]
  },
  {
    "id": "q_00901",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "True Fan Quiz: Guess the right answer: What phrase does Uday Shetty repeat to prevent himself from beating someone?",
    "correctAnswer": "Control Uday Control!",
    "acceptableAnswers": [
      "control uday control",
      "control uday",
      "control"
    ]
  },
  {
    "id": "q_00902",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Instant Guess: Trivia check: In Welcome, what was the profession of Dr. Ghungroo (Paresh Rawal)?",
    "correctAnswer": "Doctor",
    "acceptableAnswers": [
      "doctor",
      "dr"
    ]
  },
  {
    "id": "q_00903",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Lock Your Answer: Fun trivia: In Welcome, which character pretended: \"Meri ek taang nakli hai, main hockey ka khiladi tha\"?",
    "correctAnswer": "Ballu (Vijay Raaz / Director)",
    "acceptableAnswers": [
      "ballu",
      "vijay raaz",
      "director",
      "hockey player"
    ]
  },
  {
    "id": "q_00904",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Buzzer Question: Name the correct one: What was the character name of Akshay Kumar in Welcome?",
    "correctAnswer": "Rajiv",
    "acceptableAnswers": [
      "rajiv",
      "rajiv saini"
    ]
  },
  {
    "id": "q_00905",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Champion Round: Do you remember: In Dhamaal, under which giant alphabet in Saint Sebastian Garden was 10 crore hidden?",
    "correctAnswer": "Big W",
    "acceptableAnswers": [
      "w",
      "big w",
      "letter w"
    ]
  },
  {
    "id": "q_00906",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Can you guess? Name the correct one: What does Babli Bhai (Sanjay Mishra) always tell his henchman in Golmaal?",
    "correctAnswer": "Dhondu, Just Chill!",
    "acceptableAnswers": [
      "dhondu just chill",
      "just chill",
      "dhondu"
    ]
  },
  {
    "id": "q_00907",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Think fast! Do you remember: Which character in Golmaal forgets everything every 5 seconds?",
    "correctAnswer": "Pappi Bhai (Johnny Lever)",
    "acceptableAnswers": [
      "pappi bhai",
      "pappi",
      "johnny lever"
    ]
  },
  {
    "id": "q_00908",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "True Fan Quiz: Guess the right answer: Complete Crime Master Gogo's vow: \"Aaya hoon, kuch toh loot kar jaaonga...\"",
    "correctAnswer": "Khaali haath nahi jaaonga!",
    "acceptableAnswers": [
      "khaali haath nahi jaaonga",
      "kuch toh loot kar jaaonga"
    ]
  },
  {
    "id": "q_00909",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Instant Guess: Trivia check: In Andaz Apna Apna, who says: \"Teja main hoon, mark idhar hai\"?",
    "correctAnswer": "Teja (Paresh Rawal)",
    "acceptableAnswers": [
      "teja",
      "paresh rawal"
    ]
  },
  {
    "id": "q_00910",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Lock Your Answer: Fun trivia: Who played Amar and Prem in Andaz Apna Apna?",
    "correctAnswer": "Aamir Khan and Salman Khan",
    "acceptableAnswers": [
      "aamir khan and salman khan",
      "aamir and salman",
      "salman and aamir"
    ]
  },
  {
    "id": "q_00911",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Buzzer Question: Name the correct one: In Chup Chup Ke, which character says: \"Raha nahi jaata, tadap hi aisi hai\"?",
    "correctAnswer": "Bandya (Rajpal Yadav)",
    "acceptableAnswers": [
      "bandya",
      "rajpal yadav",
      "rajpal"
    ]
  },
  {
    "id": "q_00912",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Champion Round: Do you remember: In Chup Chup Ke, which disability did Jeetu and Gundya fake?",
    "correctAnswer": "Mute and Deaf (Goonge Behre)",
    "acceptableAnswers": [
      "goonge behre",
      "deaf and mute",
      "goonga behra"
    ]
  },
  {
    "id": "q_00913",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Can you guess? Name the correct one: In Phir Hera Pheri, how many days did Raju claim it takes to double your money?",
    "correctAnswer": "25 Days",
    "acceptableAnswers": [
      "25",
      "25 days",
      "pachees din",
      "25 din"
    ]
  },
  {
    "id": "q_00914",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Think fast! Do you remember: In Hera Pheri, what is the name of Babu Rao's dilapidated garage?",
    "correctAnswer": "Star Garage",
    "acceptableAnswers": [
      "star garage",
      "star"
    ]
  },
  {
    "id": "q_00915",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "True Fan Quiz: Guess the right answer: Complete Raju's famous line to Baburao: \"Zor zor se bolke logon ko...\"",
    "correctAnswer": "Scheme bata de!",
    "acceptableAnswers": [
      "scheme bata de",
      "scheme"
    ]
  },
  {
    "id": "q_00916",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Instant Guess: Trivia check: What fraudulent company took money from Raju, Shyam, and Baburao?",
    "correctAnswer": "Laxmi Chit Fund",
    "acceptableAnswers": [
      "laxmi chit fund",
      "laxmi chitfund"
    ]
  },
  {
    "id": "q_00917",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Lock Your Answer: Fun trivia: Who played the speech-impaired gangster Totla Tiwari in Phir Hera Pheri?",
    "correctAnswer": "Sharad Saxena",
    "acceptableAnswers": [
      "sharad saxena",
      "totla tiwari"
    ]
  },
  {
    "id": "q_00918",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Buzzer Question: Name the correct one: What was Johnny Lever's character name in Phir Hera Pheri?",
    "correctAnswer": "Munna Bhai",
    "acceptableAnswers": [
      "munna bhai",
      "munna"
    ]
  },
  {
    "id": "q_00919",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Champion Round: Do you remember: Who played Babu Rao Ganpatrao Apte in the Hera Pheri series?",
    "correctAnswer": "Paresh Rawal",
    "acceptableAnswers": [
      "paresh rawal",
      "paresh"
    ]
  },
  {
    "id": "q_00920",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Can you guess? Name the correct one: In Dhamaal, under which giant alphabet in Saint Sebastian Garden was 10 crore hidden?",
    "correctAnswer": "Big W",
    "acceptableAnswers": [
      "w",
      "big w",
      "letter w"
    ]
  },
  {
    "id": "q_00921",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Think fast! Do you remember: In Dhamaal, which cockpit button was Boman repeatedly warned never to press?",
    "correctAnswer": "Laal Button (Red Button)",
    "acceptableAnswers": [
      "laal button",
      "red button",
      "lal button"
    ]
  },
  {
    "id": "q_00922",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "True Fan Quiz: Guess the right answer: Who played the dim-witted brother Manav in Dhamaal?",
    "correctAnswer": "Jaaved Jaaferi",
    "acceptableAnswers": [
      "jaaved jaaferi",
      "javed jaffrey",
      "manav"
    ]
  },
  {
    "id": "q_00923",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Instant Guess: Trivia check: Which character in Golmaal is mute and makes sounds like \"Aeeeee Ooooo\"?",
    "correctAnswer": "Lucky (Tusshar Kapoor)",
    "acceptableAnswers": [
      "lucky",
      "tusshar kapoor",
      "tusshar"
    ]
  },
  {
    "id": "q_00924",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Lock Your Answer: Fun trivia: What does Babli Bhai (Sanjay Mishra) always tell his henchman in Golmaal?",
    "correctAnswer": "Dhondu, Just Chill!",
    "acceptableAnswers": [
      "dhondu just chill",
      "just chill",
      "dhondu"
    ]
  },
  {
    "id": "q_00925",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Buzzer Question: Name the correct one: Which character in Golmaal forgets everything every 5 seconds?",
    "correctAnswer": "Pappi Bhai (Johnny Lever)",
    "acceptableAnswers": [
      "pappi bhai",
      "pappi",
      "johnny lever"
    ]
  },
  {
    "id": "q_00926",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Champion Round: Do you remember: Who directed the record-breaking Golmaal franchise?",
    "correctAnswer": "Rohit Shetty",
    "acceptableAnswers": [
      "rohit shetty",
      "rohit"
    ]
  },
  {
    "id": "q_00927",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Can you guess? Name the correct one: In Chup Chup Ke, which disability did Jeetu and Gundya fake?",
    "correctAnswer": "Mute and Deaf (Goonge Behre)",
    "acceptableAnswers": [
      "goonge behre",
      "deaf and mute",
      "goonga behra"
    ]
  },
  {
    "id": "q_00928",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Think fast! Do you remember: In Munna Bhai M.B.B.S., what magical healing gesture does Munna give?",
    "correctAnswer": "Jaadu Ki Jhappi",
    "acceptableAnswers": [
      "jaadu ki jhappi",
      "jhappi",
      "hug"
    ]
  },
  {
    "id": "q_00929",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "True Fan Quiz: Guess the right answer: What was the real name of Rancho in 3 Idiots revealed at Ladakh?",
    "correctAnswer": "Phunsukh Wangdu",
    "acceptableAnswers": [
      "phunsukh wangdu",
      "wangdu",
      "phunsukh"
    ]
  },
  {
    "id": "q_00930",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Instant Guess: Trivia check: In Bhool Bhulaiyaa, who played the betel-nut chewing Chhote Pandit?",
    "correctAnswer": "Rajpal Yadav",
    "acceptableAnswers": [
      "rajpal yadav",
      "rajpal",
      "chhote pandit"
    ]
  },
  {
    "id": "q_00931",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Lock Your Answer: Fun trivia: In Phir Hera Pheri, how many days did Raju claim it takes to double your money?",
    "correctAnswer": "25 Days",
    "acceptableAnswers": [
      "25",
      "25 days",
      "pachees din",
      "25 din"
    ]
  },
  {
    "id": "q_00932",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Buzzer Question: Name the correct one: In Hera Pheri, what is the name of Babu Rao's dilapidated garage?",
    "correctAnswer": "Star Garage",
    "acceptableAnswers": [
      "star garage",
      "star"
    ]
  },
  {
    "id": "q_00933",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Champion Round: Do you remember: Who does Babu Rao mistake every incoming caller for on his crossed telephone?",
    "correctAnswer": "Devi Prasad",
    "acceptableAnswers": [
      "devi prasad",
      "deviprasad"
    ]
  },
  {
    "id": "q_00934",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Can you guess? Name the correct one: Who played Babu Rao Ganpatrao Apte in the Hera Pheri series?",
    "correctAnswer": "Paresh Rawal",
    "acceptableAnswers": [
      "paresh rawal",
      "paresh"
    ]
  },
  {
    "id": "q_00935",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Think fast! Do you remember: Who played Shyam (Ghanshyam) in the Hera Pheri series?",
    "correctAnswer": "Suniel Shetty",
    "acceptableAnswers": [
      "suniel shetty",
      "sunil shetty"
    ]
  },
  {
    "id": "q_00936",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "True Fan Quiz: Guess the right answer: In Welcome, what was the profession of Dr. Ghungroo (Paresh Rawal)?",
    "correctAnswer": "Doctor",
    "acceptableAnswers": [
      "doctor",
      "dr"
    ]
  },
  {
    "id": "q_00937",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Instant Guess: Trivia check: In Welcome, which character pretended: \"Meri ek taang nakli hai, main hockey ka khiladi tha\"?",
    "correctAnswer": "Ballu (Vijay Raaz / Director)",
    "acceptableAnswers": [
      "ballu",
      "vijay raaz",
      "director",
      "hockey player"
    ]
  },
  {
    "id": "q_00938",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Lock Your Answer: Fun trivia: In Dhamaal, under which giant alphabet in Saint Sebastian Garden was 10 crore hidden?",
    "correctAnswer": "Big W",
    "acceptableAnswers": [
      "w",
      "big w",
      "letter w"
    ]
  },
  {
    "id": "q_00939",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Buzzer Question: Name the correct one: In Dhamaal, which cockpit button was Boman repeatedly warned never to press?",
    "correctAnswer": "Laal Button (Red Button)",
    "acceptableAnswers": [
      "laal button",
      "red button",
      "lal button"
    ]
  },
  {
    "id": "q_00940",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Champion Round: Do you remember: Who played the smart police inspector Kabir Nayak in Dhamaal?",
    "correctAnswer": "Sanjay Dutt",
    "acceptableAnswers": [
      "sanjay dutt",
      "kabir nayak",
      "kabir"
    ]
  },
  {
    "id": "q_00941",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Can you guess? Name the correct one: Who directed the record-breaking Golmaal franchise?",
    "correctAnswer": "Rohit Shetty",
    "acceptableAnswers": [
      "rohit shetty",
      "rohit"
    ]
  },
  {
    "id": "q_00942",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Think fast! Do you remember: Who played the short-tempered Gopal who is afraid of ghosts in Golmaal?",
    "correctAnswer": "Ajay Devgn",
    "acceptableAnswers": [
      "ajay devgn",
      "ajay devgan",
      "gopal"
    ]
  },
  {
    "id": "q_00943",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "True Fan Quiz: Guess the right answer: In Andaz Apna Apna, who says: \"Teja main hoon, mark idhar hai\"?",
    "correctAnswer": "Teja (Paresh Rawal)",
    "acceptableAnswers": [
      "teja",
      "paresh rawal"
    ]
  },
  {
    "id": "q_00944",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Instant Guess: Trivia check: Who played Amar and Prem in Andaz Apna Apna?",
    "correctAnswer": "Aamir Khan and Salman Khan",
    "acceptableAnswers": [
      "aamir khan and salman khan",
      "aamir and salman",
      "salman and aamir"
    ]
  },
  {
    "id": "q_00945",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Lock Your Answer: Fun trivia: In Chup Chup Ke, which disability did Jeetu and Gundya fake?",
    "correctAnswer": "Mute and Deaf (Goonge Behre)",
    "acceptableAnswers": [
      "goonge behre",
      "deaf and mute",
      "goonga behra"
    ]
  },
  {
    "id": "q_00946",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Buzzer Question: Name the correct one: In Munna Bhai M.B.B.S., what magical healing gesture does Munna give?",
    "correctAnswer": "Jaadu Ki Jhappi",
    "acceptableAnswers": [
      "jaadu ki jhappi",
      "jhappi",
      "hug"
    ]
  },
  {
    "id": "q_00947",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Champion Round: Do you remember: What is Circuit's signature response when Munna gives an order?",
    "correctAnswer": "Bhai ne bola karne ka toh karne ka!",
    "acceptableAnswers": [
      "bhai ne bola karne ka",
      "bhai ne bola"
    ]
  },
  {
    "id": "q_00948",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Can you guess? Name the correct one: Who does Babu Rao mistake every incoming caller for on his crossed telephone?",
    "correctAnswer": "Devi Prasad",
    "acceptableAnswers": [
      "devi prasad",
      "deviprasad"
    ]
  },
  {
    "id": "q_00949",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Think fast! Do you remember: Which stingy character in Phir Hera Pheri offers \"150 rupya dega\"?",
    "correctAnswer": "Kachra Seth",
    "acceptableAnswers": [
      "kachra seth",
      "kachra",
      "manoj joshi"
    ]
  },
  {
    "id": "q_00950",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "True Fan Quiz: Guess the right answer: What fraudulent company took money from Raju, Shyam, and Baburao?",
    "correctAnswer": "Laxmi Chit Fund",
    "acceptableAnswers": [
      "laxmi chit fund",
      "laxmi chitfund"
    ]
  },
  {
    "id": "q_00951",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Instant Guess: Trivia check: Who played the speech-impaired gangster Totla Tiwari in Phir Hera Pheri?",
    "correctAnswer": "Sharad Saxena",
    "acceptableAnswers": [
      "sharad saxena",
      "totla tiwari"
    ]
  },
  {
    "id": "q_00952",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Lock Your Answer: Fun trivia: Who played Babu Rao Ganpatrao Apte in the Hera Pheri series?",
    "correctAnswer": "Paresh Rawal",
    "acceptableAnswers": [
      "paresh rawal",
      "paresh"
    ]
  },
  {
    "id": "q_00953",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Buzzer Question: Name the correct one: Who played Shyam (Ghanshyam) in the Hera Pheri series?",
    "correctAnswer": "Suniel Shetty",
    "acceptableAnswers": [
      "suniel shetty",
      "sunil shetty"
    ]
  },
  {
    "id": "q_00954",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Champion Round: Do you remember: In Welcome, what was the bizarre artistic hobby of Majnu Bhai (Anil Kapoor)?",
    "correctAnswer": "Painting (Horse & Donkey)",
    "acceptableAnswers": [
      "painting",
      "painter",
      "paint",
      "donkey painting"
    ]
  },
  {
    "id": "q_00955",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Can you guess? Name the correct one: Who played the smart police inspector Kabir Nayak in Dhamaal?",
    "correctAnswer": "Sanjay Dutt",
    "acceptableAnswers": [
      "sanjay dutt",
      "kabir nayak",
      "kabir"
    ]
  },
  {
    "id": "q_00956",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Think fast! Do you remember: What was the hilariously long South Indian name of the passenger in Dhamaal?",
    "correctAnswer": "Muthuswamy Venugopal Iyer",
    "acceptableAnswers": [
      "venugopal iyer",
      "iyer",
      "muthuswamy venugopal iyer",
      "chinnaswamy"
    ]
  },
  {
    "id": "q_00957",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "True Fan Quiz: Guess the right answer: Which character in Golmaal is mute and makes sounds like \"Aeeeee Ooooo\"?",
    "correctAnswer": "Lucky (Tusshar Kapoor)",
    "acceptableAnswers": [
      "lucky",
      "tusshar kapoor",
      "tusshar"
    ]
  },
  {
    "id": "q_00958",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Instant Guess: Trivia check: What does Babli Bhai (Sanjay Mishra) always tell his henchman in Golmaal?",
    "correctAnswer": "Dhondu, Just Chill!",
    "acceptableAnswers": [
      "dhondu just chill",
      "just chill",
      "dhondu"
    ]
  },
  {
    "id": "q_00959",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Lock Your Answer: Fun trivia: Who directed the record-breaking Golmaal franchise?",
    "correctAnswer": "Rohit Shetty",
    "acceptableAnswers": [
      "rohit shetty",
      "rohit"
    ]
  },
  {
    "id": "q_00960",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Buzzer Question: Name the correct one: Who played the short-tempered Gopal who is afraid of ghosts in Golmaal?",
    "correctAnswer": "Ajay Devgn",
    "acceptableAnswers": [
      "ajay devgn",
      "ajay devgan",
      "gopal"
    ]
  },
  {
    "id": "q_00961",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Can you guess? Name the correct one: What is Circuit's signature response when Munna gives an order?",
    "correctAnswer": "Bhai ne bola karne ka toh karne ka!",
    "acceptableAnswers": [
      "bhai ne bola karne ka",
      "bhai ne bola"
    ]
  },
  {
    "id": "q_00962",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Think fast! Do you remember: Who played Circuit in Munna Bhai M.B.B.S.?",
    "correctAnswer": "Arshad Warsi",
    "acceptableAnswers": [
      "arshad warsi",
      "arshad"
    ]
  },
  {
    "id": "q_00963",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "True Fan Quiz: Guess the right answer: In Bhool Bhulaiyaa, who played the betel-nut chewing Chhote Pandit?",
    "correctAnswer": "Rajpal Yadav",
    "acceptableAnswers": [
      "rajpal yadav",
      "rajpal",
      "chhote pandit"
    ]
  },
  {
    "id": "q_00964",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Instant Guess: Trivia check: In Phir Hera Pheri, how many days did Raju claim it takes to double your money?",
    "correctAnswer": "25 Days",
    "acceptableAnswers": [
      "25",
      "25 days",
      "pachees din",
      "25 din"
    ]
  },
  {
    "id": "q_00965",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Lock Your Answer: Fun trivia: Who does Babu Rao mistake every incoming caller for on his crossed telephone?",
    "correctAnswer": "Devi Prasad",
    "acceptableAnswers": [
      "devi prasad",
      "deviprasad"
    ]
  },
  {
    "id": "q_00966",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Buzzer Question: Name the correct one: Which stingy character in Phir Hera Pheri offers \"150 rupya dega\"?",
    "correctAnswer": "Kachra Seth",
    "acceptableAnswers": [
      "kachra seth",
      "kachra",
      "manoj joshi"
    ]
  },
  {
    "id": "q_00967",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Champion Round: Do you remember: Complete Babu Rao's iconic line: \"Yeh Baburao ka style hai... Utha le re deva, utha le...\"",
    "correctAnswer": "Mere ko nahi re, in dono ko utha le!",
    "acceptableAnswers": [
      "in dono ko utha le",
      "mere ko nahi re in dono ko",
      "in dono ko"
    ]
  },
  {
    "id": "q_00968",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Can you guess? Name the correct one: In Welcome, what was the bizarre artistic hobby of Majnu Bhai (Anil Kapoor)?",
    "correctAnswer": "Painting (Horse & Donkey)",
    "acceptableAnswers": [
      "painting",
      "painter",
      "paint",
      "donkey painting"
    ]
  },
  {
    "id": "q_00969",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Think fast! Do you remember: What phrase does Uday Shetty repeat to prevent himself from beating someone?",
    "correctAnswer": "Control Uday Control!",
    "acceptableAnswers": [
      "control uday control",
      "control uday",
      "control"
    ]
  },
  {
    "id": "q_00970",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "True Fan Quiz: Guess the right answer: In Welcome, which character pretended: \"Meri ek taang nakli hai, main hockey ka khiladi tha\"?",
    "correctAnswer": "Ballu (Vijay Raaz / Director)",
    "acceptableAnswers": [
      "ballu",
      "vijay raaz",
      "director",
      "hockey player"
    ]
  },
  {
    "id": "q_00971",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Instant Guess: Trivia check: In Dhamaal, under which giant alphabet in Saint Sebastian Garden was 10 crore hidden?",
    "correctAnswer": "Big W",
    "acceptableAnswers": [
      "w",
      "big w",
      "letter w"
    ]
  },
  {
    "id": "q_00972",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Lock Your Answer: Fun trivia: Who played the smart police inspector Kabir Nayak in Dhamaal?",
    "correctAnswer": "Sanjay Dutt",
    "acceptableAnswers": [
      "sanjay dutt",
      "kabir nayak",
      "kabir"
    ]
  },
  {
    "id": "q_00973",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Buzzer Question: Name the correct one: What was the hilariously long South Indian name of the passenger in Dhamaal?",
    "correctAnswer": "Muthuswamy Venugopal Iyer",
    "acceptableAnswers": [
      "venugopal iyer",
      "iyer",
      "muthuswamy venugopal iyer",
      "chinnaswamy"
    ]
  },
  {
    "id": "q_00974",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Champion Round: Do you remember: What luxury sports car did Roy and Boman steal and drive in Dhamaal?",
    "correctAnswer": "Red Ferrari",
    "acceptableAnswers": [
      "ferrari",
      "red ferrari",
      "car"
    ]
  },
  {
    "id": "q_00975",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Think fast! Do you remember: Complete Crime Master Gogo's vow: \"Aaya hoon, kuch toh loot kar jaaonga...\"",
    "correctAnswer": "Khaali haath nahi jaaonga!",
    "acceptableAnswers": [
      "khaali haath nahi jaaonga",
      "kuch toh loot kar jaaonga"
    ]
  },
  {
    "id": "q_00976",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "True Fan Quiz: Guess the right answer: Who played Amar and Prem in Andaz Apna Apna?",
    "correctAnswer": "Aamir Khan and Salman Khan",
    "acceptableAnswers": [
      "aamir khan and salman khan",
      "aamir and salman",
      "salman and aamir"
    ]
  },
  {
    "id": "q_00977",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Instant Guess: Trivia check: In Chup Chup Ke, which disability did Jeetu and Gundya fake?",
    "correctAnswer": "Mute and Deaf (Goonge Behre)",
    "acceptableAnswers": [
      "goonge behre",
      "deaf and mute",
      "goonga behra"
    ]
  },
  {
    "id": "q_00978",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Lock Your Answer: Fun trivia: What is Circuit's signature response when Munna gives an order?",
    "correctAnswer": "Bhai ne bola karne ka toh karne ka!",
    "acceptableAnswers": [
      "bhai ne bola karne ka",
      "bhai ne bola"
    ]
  },
  {
    "id": "q_00979",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Buzzer Question: Name the correct one: Who played Circuit in Munna Bhai M.B.B.S.?",
    "correctAnswer": "Arshad Warsi",
    "acceptableAnswers": [
      "arshad warsi",
      "arshad"
    ]
  },
  {
    "id": "q_00980",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Champion Round: Do you remember: What was Rancho's de-stressing mantra in 3 Idiots?",
    "correctAnswer": "All Is Well",
    "acceptableAnswers": [
      "all is well",
      "aal izz well",
      "all iz well"
    ]
  },
  {
    "id": "q_00981",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Can you guess? Name the correct one: Complete Babu Rao's iconic line: \"Yeh Baburao ka style hai... Utha le re deva, utha le...\"",
    "correctAnswer": "Mere ko nahi re, in dono ko utha le!",
    "acceptableAnswers": [
      "in dono ko utha le",
      "mere ko nahi re in dono ko",
      "in dono ko"
    ]
  },
  {
    "id": "q_00982",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Think fast! Do you remember: Complete Raju's famous line to Baburao: \"Zor zor se bolke logon ko...\"",
    "correctAnswer": "Scheme bata de!",
    "acceptableAnswers": [
      "scheme bata de",
      "scheme"
    ]
  },
  {
    "id": "q_00983",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "True Fan Quiz: Guess the right answer: Who played the speech-impaired gangster Totla Tiwari in Phir Hera Pheri?",
    "correctAnswer": "Sharad Saxena",
    "acceptableAnswers": [
      "sharad saxena",
      "totla tiwari"
    ]
  },
  {
    "id": "q_00984",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Instant Guess: Trivia check: Who played Babu Rao Ganpatrao Apte in the Hera Pheri series?",
    "correctAnswer": "Paresh Rawal",
    "acceptableAnswers": [
      "paresh rawal",
      "paresh"
    ]
  },
  {
    "id": "q_00985",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Lock Your Answer: Fun trivia: In Welcome, what was the bizarre artistic hobby of Majnu Bhai (Anil Kapoor)?",
    "correctAnswer": "Painting (Horse & Donkey)",
    "acceptableAnswers": [
      "painting",
      "painter",
      "paint",
      "donkey painting"
    ]
  },
  {
    "id": "q_00986",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Buzzer Question: Name the correct one: What phrase does Uday Shetty repeat to prevent himself from beating someone?",
    "correctAnswer": "Control Uday Control!",
    "acceptableAnswers": [
      "control uday control",
      "control uday",
      "control"
    ]
  },
  {
    "id": "q_00987",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Champion Round: Do you remember: Who played the supreme underworld don RDX in Welcome?",
    "correctAnswer": "Feroz Khan",
    "acceptableAnswers": [
      "feroz khan",
      "rdx"
    ]
  },
  {
    "id": "q_00988",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Can you guess? Name the correct one: What luxury sports car did Roy and Boman steal and drive in Dhamaal?",
    "correctAnswer": "Red Ferrari",
    "acceptableAnswers": [
      "ferrari",
      "red ferrari",
      "car"
    ]
  },
  {
    "id": "q_00989",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Think fast! Do you remember: Who played the dim-witted brother Manav in Dhamaal?",
    "correctAnswer": "Jaaved Jaaferi",
    "acceptableAnswers": [
      "jaaved jaaferi",
      "javed jaffrey",
      "manav"
    ]
  },
  {
    "id": "q_00990",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "True Fan Quiz: Guess the right answer: What does Babli Bhai (Sanjay Mishra) always tell his henchman in Golmaal?",
    "correctAnswer": "Dhondu, Just Chill!",
    "acceptableAnswers": [
      "dhondu just chill",
      "just chill",
      "dhondu"
    ]
  },
  {
    "id": "q_00991",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Instant Guess: Trivia check: Who directed the record-breaking Golmaal franchise?",
    "correctAnswer": "Rohit Shetty",
    "acceptableAnswers": [
      "rohit shetty",
      "rohit"
    ]
  },
  {
    "id": "q_00992",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Buzzer Question: Name the correct one: Complete Crime Master Gogo's vow: \"Aaya hoon, kuch toh loot kar jaaonga...\"",
    "correctAnswer": "Khaali haath nahi jaaonga!",
    "acceptableAnswers": [
      "khaali haath nahi jaaonga",
      "kuch toh loot kar jaaonga"
    ]
  },
  {
    "id": "q_00993",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Champion Round: Do you remember: Who played Crime Master Gogo in Andaz Apna Apna?",
    "correctAnswer": "Shakti Kapoor",
    "acceptableAnswers": [
      "shakti kapoor",
      "shakti"
    ]
  },
  {
    "id": "q_00994",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Can you guess? Name the correct one: What was Rancho's de-stressing mantra in 3 Idiots?",
    "correctAnswer": "All Is Well",
    "acceptableAnswers": [
      "all is well",
      "aal izz well",
      "all iz well"
    ]
  },
  {
    "id": "q_00995",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Think fast! Do you remember: What was the real name of Rancho in 3 Idiots revealed at Ladakh?",
    "correctAnswer": "Phunsukh Wangdu",
    "acceptableAnswers": [
      "phunsukh wangdu",
      "wangdu",
      "phunsukh"
    ]
  },
  {
    "id": "q_00996",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "True Fan Quiz: Guess the right answer: In Phir Hera Pheri, how many days did Raju claim it takes to double your money?",
    "correctAnswer": "25 Days",
    "acceptableAnswers": [
      "25",
      "25 days",
      "pachees din",
      "25 din"
    ]
  },
  {
    "id": "q_00997",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Instant Guess: Trivia check: Who does Babu Rao mistake every incoming caller for on his crossed telephone?",
    "correctAnswer": "Devi Prasad",
    "acceptableAnswers": [
      "devi prasad",
      "deviprasad"
    ]
  },
  {
    "id": "q_00998",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Lock Your Answer: Fun trivia: Complete Babu Rao's iconic line: \"Yeh Baburao ka style hai... Utha le re deva, utha le...\"",
    "correctAnswer": "Mere ko nahi re, in dono ko utha le!",
    "acceptableAnswers": [
      "in dono ko utha le",
      "mere ko nahi re in dono ko",
      "in dono ko"
    ]
  },
  {
    "id": "q_00999",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Buzzer Question: Name the correct one: Complete Raju's famous line to Baburao: \"Zor zor se bolke logon ko...\"",
    "correctAnswer": "Scheme bata de!",
    "acceptableAnswers": [
      "scheme bata de",
      "scheme"
    ]
  },
  {
    "id": "q_01000",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Champion Round: Do you remember: Who says: \"Aye 50 rupya kaat overacting ka\"?",
    "correctAnswer": "Raju (Akshay Kumar)",
    "acceptableAnswers": [
      "raju",
      "akshay kumar",
      "akshay"
    ]
  },
  {
    "id": "q_01001",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Can you guess? Name the correct one: Who played the supreme underworld don RDX in Welcome?",
    "correctAnswer": "Feroz Khan",
    "acceptableAnswers": [
      "feroz khan",
      "rdx"
    ]
  },
  {
    "id": "q_01002",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Think fast! Do you remember: In Welcome, what was the profession of Dr. Ghungroo (Paresh Rawal)?",
    "correctAnswer": "Doctor",
    "acceptableAnswers": [
      "doctor",
      "dr"
    ]
  },
  {
    "id": "q_01003",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "True Fan Quiz: Guess the right answer: In Dhamaal, under which giant alphabet in Saint Sebastian Garden was 10 crore hidden?",
    "correctAnswer": "Big W",
    "acceptableAnswers": [
      "w",
      "big w",
      "letter w"
    ]
  },
  {
    "id": "q_01004",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Instant Guess: Trivia check: Who played the smart police inspector Kabir Nayak in Dhamaal?",
    "correctAnswer": "Sanjay Dutt",
    "acceptableAnswers": [
      "sanjay dutt",
      "kabir nayak",
      "kabir"
    ]
  },
  {
    "id": "q_01005",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Lock Your Answer: Fun trivia: What luxury sports car did Roy and Boman steal and drive in Dhamaal?",
    "correctAnswer": "Red Ferrari",
    "acceptableAnswers": [
      "ferrari",
      "red ferrari",
      "car"
    ]
  },
  {
    "id": "q_01006",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Buzzer Question: Name the correct one: Who played the dim-witted brother Manav in Dhamaal?",
    "correctAnswer": "Jaaved Jaaferi",
    "acceptableAnswers": [
      "jaaved jaaferi",
      "javed jaffrey",
      "manav"
    ]
  },
  {
    "id": "q_01007",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Champion Round: Do you remember: Who played Adi (Aditya Shrivastav) in Dhamaal?",
    "correctAnswer": "Arshad Warsi",
    "acceptableAnswers": [
      "arshad warsi",
      "adi"
    ]
  },
  {
    "id": "q_01008",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Can you guess? Name the correct one: Who played Crime Master Gogo in Andaz Apna Apna?",
    "correctAnswer": "Shakti Kapoor",
    "acceptableAnswers": [
      "shakti kapoor",
      "shakti"
    ]
  },
  {
    "id": "q_01009",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Think fast! Do you remember: In Andaz Apna Apna, who says: \"Teja main hoon, mark idhar hai\"?",
    "correctAnswer": "Teja (Paresh Rawal)",
    "acceptableAnswers": [
      "teja",
      "paresh rawal"
    ]
  },
  {
    "id": "q_01010",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "True Fan Quiz: Guess the right answer: In Chup Chup Ke, which disability did Jeetu and Gundya fake?",
    "correctAnswer": "Mute and Deaf (Goonge Behre)",
    "acceptableAnswers": [
      "goonge behre",
      "deaf and mute",
      "goonga behra"
    ]
  },
  {
    "id": "q_01011",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Instant Guess: Trivia check: What is Circuit's signature response when Munna gives an order?",
    "correctAnswer": "Bhai ne bola karne ka toh karne ka!",
    "acceptableAnswers": [
      "bhai ne bola karne ka",
      "bhai ne bola"
    ]
  },
  {
    "id": "q_01012",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Lock Your Answer: Fun trivia: What was Rancho's de-stressing mantra in 3 Idiots?",
    "correctAnswer": "All Is Well",
    "acceptableAnswers": [
      "all is well",
      "aal izz well",
      "all iz well"
    ]
  },
  {
    "id": "q_01013",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Buzzer Question: Name the correct one: What was the real name of Rancho in 3 Idiots revealed at Ladakh?",
    "correctAnswer": "Phunsukh Wangdu",
    "acceptableAnswers": [
      "phunsukh wangdu",
      "wangdu",
      "phunsukh"
    ]
  },
  {
    "id": "q_01014",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Champion Round: Do you remember: Who delivered the hilarious \"Chamatkar\" speech in 3 Idiots?",
    "correctAnswer": "Chatur Ramalingam (Silencer)",
    "acceptableAnswers": [
      "chatur",
      "silencer",
      "chatur ramalingam"
    ]
  },
  {
    "id": "q_01015",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Can you guess? Name the correct one: Who says: \"Aye 50 rupya kaat overacting ka\"?",
    "correctAnswer": "Raju (Akshay Kumar)",
    "acceptableAnswers": [
      "raju",
      "akshay kumar",
      "akshay"
    ]
  },
  {
    "id": "q_01016",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Think fast! Do you remember: What fraudulent company took money from Raju, Shyam, and Baburao?",
    "correctAnswer": "Laxmi Chit Fund",
    "acceptableAnswers": [
      "laxmi chit fund",
      "laxmi chitfund"
    ]
  },
  {
    "id": "q_01017",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "True Fan Quiz: Guess the right answer: Who played Babu Rao Ganpatrao Apte in the Hera Pheri series?",
    "correctAnswer": "Paresh Rawal",
    "acceptableAnswers": [
      "paresh rawal",
      "paresh"
    ]
  },
  {
    "id": "q_01018",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Instant Guess: Trivia check: In Welcome, what was the bizarre artistic hobby of Majnu Bhai (Anil Kapoor)?",
    "correctAnswer": "Painting (Horse & Donkey)",
    "acceptableAnswers": [
      "painting",
      "painter",
      "paint",
      "donkey painting"
    ]
  },
  {
    "id": "q_01019",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Lock Your Answer: Fun trivia: Who played the supreme underworld don RDX in Welcome?",
    "correctAnswer": "Feroz Khan",
    "acceptableAnswers": [
      "feroz khan",
      "rdx"
    ]
  },
  {
    "id": "q_01020",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Buzzer Question: Name the correct one: In Welcome, what was the profession of Dr. Ghungroo (Paresh Rawal)?",
    "correctAnswer": "Doctor",
    "acceptableAnswers": [
      "doctor",
      "dr"
    ]
  },
  {
    "id": "q_01021",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Champion Round: Do you remember: Complete Nana Patekar's line in Welcome: \"Bhagwan ka diya hua sab kuch hai...\"",
    "correctAnswer": "Daulat hai, shohrat hai, izzat hai",
    "acceptableAnswers": [
      "daulat hai shohrat hai",
      "izzat hai",
      "sab kuch hai"
    ]
  },
  {
    "id": "q_01022",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Can you guess? Name the correct one: Who played Adi (Aditya Shrivastav) in Dhamaal?",
    "correctAnswer": "Arshad Warsi",
    "acceptableAnswers": [
      "arshad warsi",
      "adi"
    ]
  },
  {
    "id": "q_01023",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Think fast! Do you remember: Which character in Golmaal is mute and makes sounds like \"Aeeeee Ooooo\"?",
    "correctAnswer": "Lucky (Tusshar Kapoor)",
    "acceptableAnswers": [
      "lucky",
      "tusshar kapoor",
      "tusshar"
    ]
  },
  {
    "id": "q_01024",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "True Fan Quiz: Guess the right answer: Who directed the record-breaking Golmaal franchise?",
    "correctAnswer": "Rohit Shetty",
    "acceptableAnswers": [
      "rohit shetty",
      "rohit"
    ]
  },
  {
    "id": "q_01025",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Lock Your Answer: Fun trivia: Who played Crime Master Gogo in Andaz Apna Apna?",
    "correctAnswer": "Shakti Kapoor",
    "acceptableAnswers": [
      "shakti kapoor",
      "shakti"
    ]
  },
  {
    "id": "q_01026",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Buzzer Question: Name the correct one: In Andaz Apna Apna, who says: \"Teja main hoon, mark idhar hai\"?",
    "correctAnswer": "Teja (Paresh Rawal)",
    "acceptableAnswers": [
      "teja",
      "paresh rawal"
    ]
  },
  {
    "id": "q_01027",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Champion Round: Do you remember: Complete Amar and Prem's flattering line: \"Aap purush hi nahi...\"",
    "correctAnswer": "Mahapurush hain!",
    "acceptableAnswers": [
      "mahapurush",
      "mahapurush hain"
    ]
  },
  {
    "id": "q_01028",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Can you guess? Name the correct one: Who delivered the hilarious \"Chamatkar\" speech in 3 Idiots?",
    "correctAnswer": "Chatur Ramalingam (Silencer)",
    "acceptableAnswers": [
      "chatur",
      "silencer",
      "chatur ramalingam"
    ]
  },
  {
    "id": "q_01029",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Think fast! Do you remember: In Bhool Bhulaiyaa, who played the betel-nut chewing Chhote Pandit?",
    "correctAnswer": "Rajpal Yadav",
    "acceptableAnswers": [
      "rajpal yadav",
      "rajpal",
      "chhote pandit"
    ]
  },
  {
    "id": "q_01030",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "True Fan Quiz: Guess the right answer: Who does Babu Rao mistake every incoming caller for on his crossed telephone?",
    "correctAnswer": "Devi Prasad",
    "acceptableAnswers": [
      "devi prasad",
      "deviprasad"
    ]
  },
  {
    "id": "q_01031",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Instant Guess: Trivia check: Complete Babu Rao's iconic line: \"Yeh Baburao ka style hai... Utha le re deva, utha le...\"",
    "correctAnswer": "Mere ko nahi re, in dono ko utha le!",
    "acceptableAnswers": [
      "in dono ko utha le",
      "mere ko nahi re in dono ko",
      "in dono ko"
    ]
  },
  {
    "id": "q_01032",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Lock Your Answer: Fun trivia: Who says: \"Aye 50 rupya kaat overacting ka\"?",
    "correctAnswer": "Raju (Akshay Kumar)",
    "acceptableAnswers": [
      "raju",
      "akshay kumar",
      "akshay"
    ]
  },
  {
    "id": "q_01033",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Buzzer Question: Name the correct one: What fraudulent company took money from Raju, Shyam, and Baburao?",
    "correctAnswer": "Laxmi Chit Fund",
    "acceptableAnswers": [
      "laxmi chit fund",
      "laxmi chitfund"
    ]
  },
  {
    "id": "q_01034",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Champion Round: Do you remember: Where did the trio hide their suitcases of cash in Phir Hera Pheri?",
    "correctAnswer": "Circus",
    "acceptableAnswers": [
      "circus"
    ]
  },
  {
    "id": "q_01035",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Can you guess? Name the correct one: Complete Nana Patekar's line in Welcome: \"Bhagwan ka diya hua sab kuch hai...\"",
    "correctAnswer": "Daulat hai, shohrat hai, izzat hai",
    "acceptableAnswers": [
      "daulat hai shohrat hai",
      "izzat hai",
      "sab kuch hai"
    ]
  },
  {
    "id": "q_01036",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Think fast! Do you remember: In Welcome, which character pretended: \"Meri ek taang nakli hai, main hockey ka khiladi tha\"?",
    "correctAnswer": "Ballu (Vijay Raaz / Director)",
    "acceptableAnswers": [
      "ballu",
      "vijay raaz",
      "director",
      "hockey player"
    ]
  },
  {
    "id": "q_01037",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "True Fan Quiz: Guess the right answer: Who played the smart police inspector Kabir Nayak in Dhamaal?",
    "correctAnswer": "Sanjay Dutt",
    "acceptableAnswers": [
      "sanjay dutt",
      "kabir nayak",
      "kabir"
    ]
  },
  {
    "id": "q_01038",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Instant Guess: Trivia check: What luxury sports car did Roy and Boman steal and drive in Dhamaal?",
    "correctAnswer": "Red Ferrari",
    "acceptableAnswers": [
      "ferrari",
      "red ferrari",
      "car"
    ]
  },
  {
    "id": "q_01039",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Lock Your Answer: Fun trivia: Who played Adi (Aditya Shrivastav) in Dhamaal?",
    "correctAnswer": "Arshad Warsi",
    "acceptableAnswers": [
      "arshad warsi",
      "adi"
    ]
  },
  {
    "id": "q_01040",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Buzzer Question: Name the correct one: Which character in Golmaal is mute and makes sounds like \"Aeeeee Ooooo\"?",
    "correctAnswer": "Lucky (Tusshar Kapoor)",
    "acceptableAnswers": [
      "lucky",
      "tusshar kapoor",
      "tusshar"
    ]
  },
  {
    "id": "q_01041",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Champion Round: Do you remember: Which extortionist gangster in Golmaal announces: \"Vasooli collection karne aaya hai\"?",
    "correctAnswer": "Vasooli Bhai (Mukesh Tiwari)",
    "acceptableAnswers": [
      "vasooli bhai",
      "vasooli",
      "mukesh tiwari"
    ]
  },
  {
    "id": "q_01042",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Can you guess? Name the correct one: Complete Amar and Prem's flattering line: \"Aap purush hi nahi...\"",
    "correctAnswer": "Mahapurush hain!",
    "acceptableAnswers": [
      "mahapurush",
      "mahapurush hain"
    ]
  },
  {
    "id": "q_01043",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Think fast! Do you remember: Who played Amar and Prem in Andaz Apna Apna?",
    "correctAnswer": "Aamir Khan and Salman Khan",
    "acceptableAnswers": [
      "aamir khan and salman khan",
      "aamir and salman",
      "salman and aamir"
    ]
  },
  {
    "id": "q_01044",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "True Fan Quiz: Guess the right answer: What is Circuit's signature response when Munna gives an order?",
    "correctAnswer": "Bhai ne bola karne ka toh karne ka!",
    "acceptableAnswers": [
      "bhai ne bola karne ka",
      "bhai ne bola"
    ]
  },
  {
    "id": "q_01045",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Instant Guess: Trivia check: What was Rancho's de-stressing mantra in 3 Idiots?",
    "correctAnswer": "All Is Well",
    "acceptableAnswers": [
      "all is well",
      "aal izz well",
      "all iz well"
    ]
  },
  {
    "id": "q_01046",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Lock Your Answer: Fun trivia: Who delivered the hilarious \"Chamatkar\" speech in 3 Idiots?",
    "correctAnswer": "Chatur Ramalingam (Silencer)",
    "acceptableAnswers": [
      "chatur",
      "silencer",
      "chatur ramalingam"
    ]
  },
  {
    "id": "q_01047",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Buzzer Question: Name the correct one: In Bhool Bhulaiyaa, who played the betel-nut chewing Chhote Pandit?",
    "correctAnswer": "Rajpal Yadav",
    "acceptableAnswers": [
      "rajpal yadav",
      "rajpal",
      "chhote pandit"
    ]
  },
  {
    "id": "q_01048",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "Champion Round: Do you remember: In Hungama, who was the suspicious wealthy husband played by Paresh Rawal?",
    "correctAnswer": "Radheshyam Tiwari",
    "acceptableAnswers": [
      "radheshyam tiwari",
      "radheshyam",
      "tiwari"
    ]
  },
  {
    "id": "q_01049",
    "category": "🏏 Cricket Legends & Shots",
    "question": "Whose trademark batting shot is the world-famous \"Helicopter Shot\"?",
    "correctAnswer": "MS Dhoni",
    "acceptableAnswers": [
      "ms dhoni",
      "dhoni",
      "mahi"
    ]
  },
  {
    "id": "q_01050",
    "category": "🏏 Cricket Legends & Shots",
    "question": "Whose textbook signature cricket shot is the majestic \"Cover Drive\"?",
    "correctAnswer": "Virat Kohli",
    "acceptableAnswers": [
      "virat kohli",
      "virat",
      "kohli",
      "king kohli"
    ]
  },
  {
    "id": "q_01051",
    "category": "🏏 Cricket Legends & Shots",
    "question": "Whose signature effortless shot in cricket is the \"Pull Shot\"?",
    "correctAnswer": "Rohit Sharma",
    "acceptableAnswers": [
      "rohit sharma",
      "rohit",
      "hitman"
    ]
  },
  {
    "id": "q_01052",
    "category": "🏏 Cricket Legends & Shots",
    "question": "Who popularized the fearless \"Upper Cut\" over third man against express pacers?",
    "correctAnswer": "Virender Sehwag",
    "acceptableAnswers": [
      "virender sehwag",
      "sehwag",
      "sachin tendulkar"
    ]
  },
  {
    "id": "q_01053",
    "category": "🏏 Cricket Legends & Shots",
    "question": "Who is nicknamed \"Mr. 360\" of Indian cricket for his audacious Supla scoop shot?",
    "correctAnswer": "Suryakumar Yadav (SKY)",
    "acceptableAnswers": [
      "suryakumar yadav",
      "sky",
      "surya"
    ]
  },
  {
    "id": "q_01054",
    "category": "🏏 Cricket Legends & Shots",
    "question": "Whose signature one-legged balanced shot was the legendary \"Natraj Shot\"?",
    "correctAnswer": "Kapil Dev",
    "acceptableAnswers": [
      "kapil dev",
      "kapil"
    ]
  },
  {
    "id": "q_01055",
    "category": "🏏 Cricket Legends & Shots",
    "question": "Whose signature classic shot was the glorious \"Straight Drive\" off the front foot?",
    "correctAnswer": "Sachin Tendulkar",
    "acceptableAnswers": [
      "sachin tendulkar",
      "sachin",
      "master blaster"
    ]
  },
  {
    "id": "q_01056",
    "category": "🏏 Cricket Legends & Shots",
    "question": "What is MS Dhoni's legendary jersey number for Team India and CSK?",
    "correctAnswer": "7",
    "acceptableAnswers": [
      "7",
      "seven"
    ]
  },
  {
    "id": "q_01057",
    "category": "🏏 Cricket Legends & Shots",
    "question": "Can you guess? Name the correct one: What is Virat Kohli's iconic jersey number for Team India and RCB?",
    "correctAnswer": "18",
    "acceptableAnswers": [
      "18",
      "eighteen"
    ]
  },
  {
    "id": "q_01058",
    "category": "🏏 Cricket Legends & Shots",
    "question": "Think fast! Do you remember: What is Rohit Sharma's official jersey number for Team India and MI?",
    "correctAnswer": "45",
    "acceptableAnswers": [
      "45",
      "forty five"
    ]
  },
  {
    "id": "q_01059",
    "category": "🏏 Cricket Legends & Shots",
    "question": "What was Sachin Tendulkar's retired legendary jersey number?",
    "correctAnswer": "10",
    "acceptableAnswers": [
      "10",
      "ten"
    ]
  },
  {
    "id": "q_01060",
    "category": "🏏 Cricket Legends & Shots",
    "question": "What was Yuvraj Singh's iconic jersey number for Team India?",
    "correctAnswer": "12",
    "acceptableAnswers": [
      "12",
      "twelve"
    ]
  },
  {
    "id": "q_01061",
    "category": "🏏 Cricket Legends & Shots",
    "question": "What is Jasprit Bumrah's official jersey number for Team India?",
    "correctAnswer": "93",
    "acceptableAnswers": [
      "93",
      "ninety three"
    ]
  },
  {
    "id": "q_01062",
    "category": "🏏 Cricket Legends & Shots",
    "question": "True Fan Quiz: Guess the right answer: What is Hardik Pandya's official jersey number for Team India?",
    "correctAnswer": "33",
    "acceptableAnswers": [
      "33",
      "thirty three"
    ]
  },
  {
    "id": "q_01063",
    "category": "🏏 Cricket Legends & Shots",
    "question": "Who hit the iconic match-winning six off Nuwan Kulasekara in the 2011 World Cup Final?",
    "correctAnswer": "MS Dhoni",
    "acceptableAnswers": [
      "ms dhoni",
      "dhoni",
      "mahi"
    ]
  },
  {
    "id": "q_01064",
    "category": "🏏 Cricket Legends & Shots",
    "question": "Instant Guess: Trivia check: Who hit 6 sixes in one over off Stuart Broad in the 2007 T20 World Cup?",
    "correctAnswer": "Yuvraj Singh",
    "acceptableAnswers": [
      "yuvraj singh",
      "yuvraj",
      "yuvi"
    ]
  },
  {
    "id": "q_01065",
    "category": "🏏 Cricket Legends & Shots",
    "question": "Who bowled the historic final over in the 2007 T20 World Cup Final against Pakistan?",
    "correctAnswer": "Joginder Sharma",
    "acceptableAnswers": [
      "joginder sharma",
      "joginder"
    ]
  },
  {
    "id": "q_01066",
    "category": "🏏 Cricket Legends & Shots",
    "question": "Lock Your Answer: Fun trivia: Who took the boundary catch of David Miller in the 2024 T20 World Cup Final?",
    "correctAnswer": "Suryakumar Yadav (SKY)",
    "acceptableAnswers": [
      "suryakumar yadav",
      "sky",
      "surya"
    ]
  },
  {
    "id": "q_01067",
    "category": "🏏 Cricket Legends & Shots",
    "question": "Buzzer Question: Name the correct one: Who defended 16 runs in the final over of the 2024 T20 World Cup Final?",
    "correctAnswer": "Hardik Pandya",
    "acceptableAnswers": [
      "hardik pandya",
      "hardik"
    ]
  },
  {
    "id": "q_01068",
    "category": "🏏 Cricket Legends & Shots",
    "question": "Champion Round: Do you remember: Who holds the record for the highest individual score in ODI history (264 runs)?",
    "correctAnswer": "Rohit Sharma",
    "acceptableAnswers": [
      "rohit sharma",
      "rohit",
      "hitman"
    ]
  },
  {
    "id": "q_01069",
    "category": "🏏 Cricket Legends & Shots",
    "question": "Who is the only batsman in cricket history to score 100 international centuries?",
    "correctAnswer": "Sachin Tendulkar",
    "acceptableAnswers": [
      "sachin tendulkar",
      "sachin",
      "master blaster"
    ]
  },
  {
    "id": "q_01070",
    "category": "🏏 Cricket Legends & Shots",
    "question": "Who took all 10 wickets in a single Test innings against Pakistan in 1999?",
    "correctAnswer": "Anil Kumble",
    "acceptableAnswers": [
      "anil kumble",
      "kumble",
      "jumbo"
    ]
  },
  {
    "id": "q_01071",
    "category": "🏏 Cricket Legends & Shots",
    "question": "Which captain waved his jersey on the Lord's balcony after winning the 2002 NatWest Final?",
    "correctAnswer": "Sourav Ganguly (Dada)",
    "acceptableAnswers": [
      "sourav ganguly",
      "ganguly",
      "dada"
    ]
  },
  {
    "id": "q_01072",
    "category": "🏏 Cricket Legends & Shots",
    "question": "Which batsman earned the nickname \"The Wall\" for his rock-solid Test defence?",
    "correctAnswer": "Rahul Dravid",
    "acceptableAnswers": [
      "rahul dravid",
      "dravid",
      "the wall"
    ]
  },
  {
    "id": "q_01073",
    "category": "🏏 Cricket Legends & Shots",
    "question": "Who scored 175 not out against Zimbabwe in the 1983 World Cup when India was 17/5?",
    "correctAnswer": "Kapil Dev",
    "acceptableAnswers": [
      "kapil dev",
      "kapil"
    ]
  },
  {
    "id": "q_01074",
    "category": "🏏 Cricket Legends & Shots",
    "question": "Which Indian captain is celebrated across the nation with the nickname \"Thala\"?",
    "correctAnswer": "MS Dhoni",
    "acceptableAnswers": [
      "ms dhoni",
      "dhoni",
      "thala",
      "mahi"
    ]
  },
  {
    "id": "q_01075",
    "category": "🏏 Cricket Legends & Shots",
    "question": "Which modern batting giant is affectionately called \"King Kohli\" and \"Cheeku\"?",
    "correctAnswer": "Virat Kohli",
    "acceptableAnswers": [
      "virat kohli",
      "virat",
      "kohli"
    ]
  },
  {
    "id": "q_01076",
    "category": "🏏 Cricket Legends & Shots",
    "question": "Which Indian opener is famous worldwide by the nickname \"Hitman\"?",
    "correctAnswer": "Rohit Sharma",
    "acceptableAnswers": [
      "rohit sharma",
      "rohit",
      "hitman"
    ]
  },
  {
    "id": "q_01077",
    "category": "🏏 Cricket Legends & Shots",
    "question": "Can you guess? Name the correct one: Which legendary Indian pacer is known as \"Boom Boom\" for his unplayable yorkers?",
    "correctAnswer": "Jasprit Bumrah",
    "acceptableAnswers": [
      "jasprit bumrah",
      "bumrah",
      "boom boom"
    ]
  },
  {
    "id": "q_01078",
    "category": "🏏 Cricket Legends & Shots",
    "question": "Think fast! Do you remember: Which former Indian opener was nicknamed the \"Nawab of Najafgarh\"?",
    "correctAnswer": "Virender Sehwag",
    "acceptableAnswers": [
      "virender sehwag",
      "sehwag"
    ]
  },
  {
    "id": "q_01079",
    "category": "🏏 Cricket Legends & Shots",
    "question": "Which Indian left-handed spinner is affectionately nicknamed \"Sir\" by fans and Dhoni?",
    "correctAnswer": "Ravindra Jadeja",
    "acceptableAnswers": [
      "ravindra jadeja",
      "jadeja",
      "sir jadeja"
    ]
  },
  {
    "id": "q_01080",
    "category": "🏏 Cricket Legends & Shots",
    "question": "Which Indian spinner is nicknamed \"Jumbo\" for his skidding pace?",
    "correctAnswer": "Anil Kumble",
    "acceptableAnswers": [
      "anil kumble",
      "kumble",
      "jumbo"
    ]
  },
  {
    "id": "q_01081",
    "category": "🏏 Cricket Legends & Shots",
    "question": "True Fan Quiz: Guess the right answer: Whose textbook signature cricket shot is the majestic \"Cover Drive\"?",
    "correctAnswer": "Virat Kohli",
    "acceptableAnswers": [
      "virat kohli",
      "virat",
      "kohli",
      "king kohli"
    ]
  },
  {
    "id": "q_01082",
    "category": "🏏 Cricket Legends & Shots",
    "question": "Instant Guess: Trivia check: Who popularized the fearless \"Upper Cut\" over third man against express pacers?",
    "correctAnswer": "Virender Sehwag",
    "acceptableAnswers": [
      "virender sehwag",
      "sehwag",
      "sachin tendulkar"
    ]
  },
  {
    "id": "q_01083",
    "category": "🏏 Cricket Legends & Shots",
    "question": "Lock Your Answer: Fun trivia: Whose signature one-legged balanced shot was the legendary \"Natraj Shot\"?",
    "correctAnswer": "Kapil Dev",
    "acceptableAnswers": [
      "kapil dev",
      "kapil"
    ]
  },
  {
    "id": "q_01084",
    "category": "🏏 Cricket Legends & Shots",
    "question": "Buzzer Question: Name the correct one: Whose signature classic shot was the glorious \"Straight Drive\" off the front foot?",
    "correctAnswer": "Sachin Tendulkar",
    "acceptableAnswers": [
      "sachin tendulkar",
      "sachin",
      "master blaster"
    ]
  },
  {
    "id": "q_01085",
    "category": "🏏 Cricket Legends & Shots",
    "question": "Champion Round: Do you remember: What is MS Dhoni's legendary jersey number for Team India and CSK?",
    "correctAnswer": "7",
    "acceptableAnswers": [
      "7",
      "seven"
    ]
  },
  {
    "id": "q_01086",
    "category": "🏏 Cricket Legends & Shots",
    "question": "What is Virat Kohli's iconic jersey number for Team India and RCB?",
    "correctAnswer": "18",
    "acceptableAnswers": [
      "18",
      "eighteen"
    ]
  },
  {
    "id": "q_01087",
    "category": "🏏 Cricket Legends & Shots",
    "question": "What is Rohit Sharma's official jersey number for Team India and MI?",
    "correctAnswer": "45",
    "acceptableAnswers": [
      "45",
      "forty five"
    ]
  },
  {
    "id": "q_01088",
    "category": "🏏 Cricket Legends & Shots",
    "question": "What is Hardik Pandya's official jersey number for Team India?",
    "correctAnswer": "33",
    "acceptableAnswers": [
      "33",
      "thirty three"
    ]
  },
  {
    "id": "q_01089",
    "category": "🏏 Cricket Legends & Shots",
    "question": "Who hit 6 sixes in one over off Stuart Broad in the 2007 T20 World Cup?",
    "correctAnswer": "Yuvraj Singh",
    "acceptableAnswers": [
      "yuvraj singh",
      "yuvraj",
      "yuvi"
    ]
  },
  {
    "id": "q_01090",
    "category": "🏏 Cricket Legends & Shots",
    "question": "Can you guess? Name the correct one: Who bowled the historic final over in the 2007 T20 World Cup Final against Pakistan?",
    "correctAnswer": "Joginder Sharma",
    "acceptableAnswers": [
      "joginder sharma",
      "joginder"
    ]
  },
  {
    "id": "q_01091",
    "category": "🏏 Cricket Legends & Shots",
    "question": "Think fast! Do you remember: Who took the boundary catch of David Miller in the 2024 T20 World Cup Final?",
    "correctAnswer": "Suryakumar Yadav (SKY)",
    "acceptableAnswers": [
      "suryakumar yadav",
      "sky",
      "surya"
    ]
  },
  {
    "id": "q_01092",
    "category": "🏏 Cricket Legends & Shots",
    "question": "Who defended 16 runs in the final over of the 2024 T20 World Cup Final?",
    "correctAnswer": "Hardik Pandya",
    "acceptableAnswers": [
      "hardik pandya",
      "hardik"
    ]
  },
  {
    "id": "q_01093",
    "category": "🏏 Cricket Legends & Shots",
    "question": "Who holds the record for the highest individual score in ODI history (264 runs)?",
    "correctAnswer": "Rohit Sharma",
    "acceptableAnswers": [
      "rohit sharma",
      "rohit",
      "hitman"
    ]
  },
  {
    "id": "q_01094",
    "category": "🏏 Cricket Legends & Shots",
    "question": "True Fan Quiz: Guess the right answer: Who took all 10 wickets in a single Test innings against Pakistan in 1999?",
    "correctAnswer": "Anil Kumble",
    "acceptableAnswers": [
      "anil kumble",
      "kumble",
      "jumbo"
    ]
  },
  {
    "id": "q_01095",
    "category": "🏏 Cricket Legends & Shots",
    "question": "Instant Guess: Trivia check: Which batsman earned the nickname \"The Wall\" for his rock-solid Test defence?",
    "correctAnswer": "Rahul Dravid",
    "acceptableAnswers": [
      "rahul dravid",
      "dravid",
      "the wall"
    ]
  },
  {
    "id": "q_01096",
    "category": "🏏 Cricket Legends & Shots",
    "question": "Lock Your Answer: Fun trivia: Which Indian captain is celebrated across the nation with the nickname \"Thala\"?",
    "correctAnswer": "MS Dhoni",
    "acceptableAnswers": [
      "ms dhoni",
      "dhoni",
      "thala",
      "mahi"
    ]
  },
  {
    "id": "q_01097",
    "category": "🏏 Cricket Legends & Shots",
    "question": "Buzzer Question: Name the correct one: Which modern batting giant is affectionately called \"King Kohli\" and \"Cheeku\"?",
    "correctAnswer": "Virat Kohli",
    "acceptableAnswers": [
      "virat kohli",
      "virat",
      "kohli"
    ]
  },
  {
    "id": "q_01098",
    "category": "🏏 Cricket Legends & Shots",
    "question": "Champion Round: Do you remember: Which Indian opener is famous worldwide by the nickname \"Hitman\"?",
    "correctAnswer": "Rohit Sharma",
    "acceptableAnswers": [
      "rohit sharma",
      "rohit",
      "hitman"
    ]
  },
  {
    "id": "q_01099",
    "category": "🏏 Cricket Legends & Shots",
    "question": "Which legendary Indian pacer is known as \"Boom Boom\" for his unplayable yorkers?",
    "correctAnswer": "Jasprit Bumrah",
    "acceptableAnswers": [
      "jasprit bumrah",
      "bumrah",
      "boom boom"
    ]
  },
  {
    "id": "q_01100",
    "category": "🏏 Cricket Legends & Shots",
    "question": "Which former Indian opener was nicknamed the \"Nawab of Najafgarh\"?",
    "correctAnswer": "Virender Sehwag",
    "acceptableAnswers": [
      "virender sehwag",
      "sehwag"
    ]
  },
  {
    "id": "q_01101",
    "category": "🏏 Cricket Legends & Shots",
    "question": "Can you guess? Name the correct one: Who is nicknamed \"Mr. 360\" of Indian cricket for his audacious Supla scoop shot?",
    "correctAnswer": "Suryakumar Yadav (SKY)",
    "acceptableAnswers": [
      "suryakumar yadav",
      "sky",
      "surya"
    ]
  },
  {
    "id": "q_01102",
    "category": "🏏 Cricket Legends & Shots",
    "question": "Think fast! Do you remember: Whose signature one-legged balanced shot was the legendary \"Natraj Shot\"?",
    "correctAnswer": "Kapil Dev",
    "acceptableAnswers": [
      "kapil dev",
      "kapil"
    ]
  },
  {
    "id": "q_01103",
    "category": "🏏 Cricket Legends & Shots",
    "question": "True Fan Quiz: Guess the right answer: What is Rohit Sharma's official jersey number for Team India and MI?",
    "correctAnswer": "45",
    "acceptableAnswers": [
      "45",
      "forty five"
    ]
  },
  {
    "id": "q_01104",
    "category": "🏏 Cricket Legends & Shots",
    "question": "Instant Guess: Trivia check: What was Yuvraj Singh's iconic jersey number for Team India?",
    "correctAnswer": "12",
    "acceptableAnswers": [
      "12",
      "twelve"
    ]
  },
  {
    "id": "q_01105",
    "category": "🏏 Cricket Legends & Shots",
    "question": "Lock Your Answer: Fun trivia: What is Hardik Pandya's official jersey number for Team India?",
    "correctAnswer": "33",
    "acceptableAnswers": [
      "33",
      "thirty three"
    ]
  },
  {
    "id": "q_01106",
    "category": "🏏 Cricket Legends & Shots",
    "question": "Buzzer Question: Name the correct one: Who hit the iconic match-winning six off Nuwan Kulasekara in the 2011 World Cup Final?",
    "correctAnswer": "MS Dhoni",
    "acceptableAnswers": [
      "ms dhoni",
      "dhoni",
      "mahi"
    ]
  },
  {
    "id": "q_01107",
    "category": "🏏 Cricket Legends & Shots",
    "question": "Champion Round: Do you remember: Who hit 6 sixes in one over off Stuart Broad in the 2007 T20 World Cup?",
    "correctAnswer": "Yuvraj Singh",
    "acceptableAnswers": [
      "yuvraj singh",
      "yuvraj",
      "yuvi"
    ]
  },
  {
    "id": "q_01108",
    "category": "🏏 Cricket Legends & Shots",
    "question": "Who took the boundary catch of David Miller in the 2024 T20 World Cup Final?",
    "correctAnswer": "Suryakumar Yadav (SKY)",
    "acceptableAnswers": [
      "suryakumar yadav",
      "sky",
      "surya"
    ]
  },
  {
    "id": "q_01109",
    "category": "🏏 Cricket Legends & Shots",
    "question": "Can you guess? Name the correct one: Who scored 175 not out against Zimbabwe in the 1983 World Cup when India was 17/5?",
    "correctAnswer": "Kapil Dev",
    "acceptableAnswers": [
      "kapil dev",
      "kapil"
    ]
  },
  {
    "id": "q_01110",
    "category": "🏏 Cricket Legends & Shots",
    "question": "Think fast! Do you remember: Which Indian captain is celebrated across the nation with the nickname \"Thala\"?",
    "correctAnswer": "MS Dhoni",
    "acceptableAnswers": [
      "ms dhoni",
      "dhoni",
      "thala",
      "mahi"
    ]
  },
  {
    "id": "q_01111",
    "category": "🏏 Cricket Legends & Shots",
    "question": "True Fan Quiz: Guess the right answer: Which former Indian opener was nicknamed the \"Nawab of Najafgarh\"?",
    "correctAnswer": "Virender Sehwag",
    "acceptableAnswers": [
      "virender sehwag",
      "sehwag"
    ]
  },
  {
    "id": "q_01112",
    "category": "🏏 Cricket Legends & Shots",
    "question": "Instant Guess: Trivia check: Which Indian spinner is nicknamed \"Jumbo\" for his skidding pace?",
    "correctAnswer": "Anil Kumble",
    "acceptableAnswers": [
      "anil kumble",
      "kumble",
      "jumbo"
    ]
  },
  {
    "id": "q_01113",
    "category": "🏏 Cricket Legends & Shots",
    "question": "Lock Your Answer: Fun trivia: Whose textbook signature cricket shot is the majestic \"Cover Drive\"?",
    "correctAnswer": "Virat Kohli",
    "acceptableAnswers": [
      "virat kohli",
      "virat",
      "kohli",
      "king kohli"
    ]
  },
  {
    "id": "q_01114",
    "category": "🏏 Cricket Legends & Shots",
    "question": "Buzzer Question: Name the correct one: Whose signature effortless shot in cricket is the \"Pull Shot\"?",
    "correctAnswer": "Rohit Sharma",
    "acceptableAnswers": [
      "rohit sharma",
      "rohit",
      "hitman"
    ]
  },
  {
    "id": "q_01115",
    "category": "🏏 Cricket Legends & Shots",
    "question": "Champion Round: Do you remember: Who popularized the fearless \"Upper Cut\" over third man against express pacers?",
    "correctAnswer": "Virender Sehwag",
    "acceptableAnswers": [
      "virender sehwag",
      "sehwag",
      "sachin tendulkar"
    ]
  },
  {
    "id": "q_01116",
    "category": "🏏 Cricket Legends & Shots",
    "question": "Can you guess? Name the correct one: What is Jasprit Bumrah's official jersey number for Team India?",
    "correctAnswer": "93",
    "acceptableAnswers": [
      "93",
      "ninety three"
    ]
  },
  {
    "id": "q_01117",
    "category": "🏏 Cricket Legends & Shots",
    "question": "Think fast! Do you remember: What is Hardik Pandya's official jersey number for Team India?",
    "correctAnswer": "33",
    "acceptableAnswers": [
      "33",
      "thirty three"
    ]
  },
  {
    "id": "q_01118",
    "category": "🏏 Cricket Legends & Shots",
    "question": "True Fan Quiz: Guess the right answer: Who took the boundary catch of David Miller in the 2024 T20 World Cup Final?",
    "correctAnswer": "Suryakumar Yadav (SKY)",
    "acceptableAnswers": [
      "suryakumar yadav",
      "sky",
      "surya"
    ]
  },
  {
    "id": "q_01119",
    "category": "🏏 Cricket Legends & Shots",
    "question": "Instant Guess: Trivia check: Who holds the record for the highest individual score in ODI history (264 runs)?",
    "correctAnswer": "Rohit Sharma",
    "acceptableAnswers": [
      "rohit sharma",
      "rohit",
      "hitman"
    ]
  },
  {
    "id": "q_01120",
    "category": "🏏 Cricket Legends & Shots",
    "question": "Lock Your Answer: Fun trivia: Who took all 10 wickets in a single Test innings against Pakistan in 1999?",
    "correctAnswer": "Anil Kumble",
    "acceptableAnswers": [
      "anil kumble",
      "kumble",
      "jumbo"
    ]
  },
  {
    "id": "q_01121",
    "category": "🏏 Cricket Legends & Shots",
    "question": "Buzzer Question: Name the correct one: Which captain waved his jersey on the Lord's balcony after winning the 2002 NatWest Final?",
    "correctAnswer": "Sourav Ganguly (Dada)",
    "acceptableAnswers": [
      "sourav ganguly",
      "ganguly",
      "dada"
    ]
  },
  {
    "id": "q_01122",
    "category": "🏏 Cricket Legends & Shots",
    "question": "Champion Round: Do you remember: Which batsman earned the nickname \"The Wall\" for his rock-solid Test defence?",
    "correctAnswer": "Rahul Dravid",
    "acceptableAnswers": [
      "rahul dravid",
      "dravid",
      "the wall"
    ]
  },
  {
    "id": "q_01123",
    "category": "🏏 Cricket Legends & Shots",
    "question": "Can you guess? Name the correct one: Whose trademark batting shot is the world-famous \"Helicopter Shot\"?",
    "correctAnswer": "MS Dhoni",
    "acceptableAnswers": [
      "ms dhoni",
      "dhoni",
      "mahi"
    ]
  },
  {
    "id": "q_01124",
    "category": "🏏 Cricket Legends & Shots",
    "question": "Think fast! Do you remember: Whose textbook signature cricket shot is the majestic \"Cover Drive\"?",
    "correctAnswer": "Virat Kohli",
    "acceptableAnswers": [
      "virat kohli",
      "virat",
      "kohli",
      "king kohli"
    ]
  },
  {
    "id": "q_01125",
    "category": "🏏 Cricket Legends & Shots",
    "question": "True Fan Quiz: Guess the right answer: Whose signature one-legged balanced shot was the legendary \"Natraj Shot\"?",
    "correctAnswer": "Kapil Dev",
    "acceptableAnswers": [
      "kapil dev",
      "kapil"
    ]
  },
  {
    "id": "q_01126",
    "category": "🏏 Cricket Legends & Shots",
    "question": "Instant Guess: Trivia check: What is MS Dhoni's legendary jersey number for Team India and CSK?",
    "correctAnswer": "7",
    "acceptableAnswers": [
      "7",
      "seven"
    ]
  },
  {
    "id": "q_01127",
    "category": "🏏 Cricket Legends & Shots",
    "question": "Lock Your Answer: Fun trivia: What is Rohit Sharma's official jersey number for Team India and MI?",
    "correctAnswer": "45",
    "acceptableAnswers": [
      "45",
      "forty five"
    ]
  },
  {
    "id": "q_01128",
    "category": "🏏 Cricket Legends & Shots",
    "question": "Buzzer Question: Name the correct one: What was Sachin Tendulkar's retired legendary jersey number?",
    "correctAnswer": "10",
    "acceptableAnswers": [
      "10",
      "ten"
    ]
  },
  {
    "id": "q_01129",
    "category": "🏏 Cricket Legends & Shots",
    "question": "Champion Round: Do you remember: What was Yuvraj Singh's iconic jersey number for Team India?",
    "correctAnswer": "12",
    "acceptableAnswers": [
      "12",
      "twelve"
    ]
  },
  {
    "id": "q_01130",
    "category": "🏏 Cricket Legends & Shots",
    "question": "Can you guess? Name the correct one: Who is the only batsman in cricket history to score 100 international centuries?",
    "correctAnswer": "Sachin Tendulkar",
    "acceptableAnswers": [
      "sachin tendulkar",
      "sachin",
      "master blaster"
    ]
  },
  {
    "id": "q_01131",
    "category": "🏏 Cricket Legends & Shots",
    "question": "Think fast! Do you remember: Who took all 10 wickets in a single Test innings against Pakistan in 1999?",
    "correctAnswer": "Anil Kumble",
    "acceptableAnswers": [
      "anil kumble",
      "kumble",
      "jumbo"
    ]
  },
  {
    "id": "q_01132",
    "category": "🏏 Cricket Legends & Shots",
    "question": "True Fan Quiz: Guess the right answer: Which Indian captain is celebrated across the nation with the nickname \"Thala\"?",
    "correctAnswer": "MS Dhoni",
    "acceptableAnswers": [
      "ms dhoni",
      "dhoni",
      "thala",
      "mahi"
    ]
  },
  {
    "id": "q_01133",
    "category": "🏏 Cricket Legends & Shots",
    "question": "Instant Guess: Trivia check: Which Indian opener is famous worldwide by the nickname \"Hitman\"?",
    "correctAnswer": "Rohit Sharma",
    "acceptableAnswers": [
      "rohit sharma",
      "rohit",
      "hitman"
    ]
  },
  {
    "id": "q_01134",
    "category": "🏏 Cricket Legends & Shots",
    "question": "Lock Your Answer: Fun trivia: Which former Indian opener was nicknamed the \"Nawab of Najafgarh\"?",
    "correctAnswer": "Virender Sehwag",
    "acceptableAnswers": [
      "virender sehwag",
      "sehwag"
    ]
  },
  {
    "id": "q_01135",
    "category": "🏏 Cricket Legends & Shots",
    "question": "Buzzer Question: Name the correct one: Which Indian left-handed spinner is affectionately nicknamed \"Sir\" by fans and Dhoni?",
    "correctAnswer": "Ravindra Jadeja",
    "acceptableAnswers": [
      "ravindra jadeja",
      "jadeja",
      "sir jadeja"
    ]
  },
  {
    "id": "q_01136",
    "category": "🏏 Cricket Legends & Shots",
    "question": "Champion Round: Do you remember: Which Indian spinner is nicknamed \"Jumbo\" for his skidding pace?",
    "correctAnswer": "Anil Kumble",
    "acceptableAnswers": [
      "anil kumble",
      "kumble",
      "jumbo"
    ]
  },
  {
    "id": "q_01137",
    "category": "🧠 Indian General Knowledge",
    "question": "Which ISRO mission made India the 1st country to land on Moon's South Pole?",
    "correctAnswer": "Chandrayaan-3",
    "acceptableAnswers": [
      "chandrayaan 3",
      "chandrayaan-3",
      "chandrayaan3",
      "chandrayaan"
    ]
  },
  {
    "id": "q_01138",
    "category": "🧠 Indian General Knowledge",
    "question": "What is the name of the lander on India's historic Chandrayaan-3 mission?",
    "correctAnswer": "Vikram Lander",
    "acceptableAnswers": [
      "vikram",
      "vikram lander"
    ]
  },
  {
    "id": "q_01139",
    "category": "🧠 Indian General Knowledge",
    "question": "What is the name of the rover on India's historic Chandrayaan-3 mission?",
    "correctAnswer": "Pragyan Rover",
    "acceptableAnswers": [
      "pragyan",
      "pragyan rover"
    ]
  },
  {
    "id": "q_01140",
    "category": "🧠 Indian General Knowledge",
    "question": "Which ISRO satellite was launched to study the Sun from Lagrange point L1?",
    "correctAnswer": "Aditya-L1",
    "acceptableAnswers": [
      "aditya l1",
      "aditya-l1",
      "adityal1",
      "aditya"
    ]
  },
  {
    "id": "q_01141",
    "category": "🧠 Indian General Knowledge",
    "question": "Which is the world's tallest statue, located in Gujarat, India?",
    "correctAnswer": "Statue of Unity (Sardar Patel)",
    "acceptableAnswers": [
      "statue of unity",
      "sardar patel statue",
      "statue of unity gujarat"
    ]
  },
  {
    "id": "q_01142",
    "category": "🧠 Indian General Knowledge",
    "question": "Who is recognized as the chief architect and Father of the Indian Constitution?",
    "correctAnswer": "Dr. B.R. Ambedkar",
    "acceptableAnswers": [
      "br ambedkar",
      "bhimrao ambedkar",
      "ambedkar",
      "dr b r ambedkar"
    ]
  },
  {
    "id": "q_01143",
    "category": "🧠 Indian General Knowledge",
    "question": "Who was the first Prime Minister of independent India?",
    "correctAnswer": "Jawaharlal Nehru",
    "acceptableAnswers": [
      "jawaharlal nehru",
      "nehru",
      "pandit nehru"
    ]
  },
  {
    "id": "q_01144",
    "category": "🧠 Indian General Knowledge",
    "question": "Who was the first President of independent India?",
    "correctAnswer": "Dr. Rajendra Prasad",
    "acceptableAnswers": [
      "rajendra prasad",
      "dr rajendra prasad",
      "rajendra babu"
    ]
  },
  {
    "id": "q_01145",
    "category": "🧠 Indian General Knowledge",
    "question": "Can you guess? Name the correct one: Which Indian scientist and former President is known as the \"Missile Man of India\"?",
    "correctAnswer": "Dr. A.P.J. Abdul Kalam",
    "acceptableAnswers": [
      "apj abdul kalam",
      "abdul kalam",
      "dr abdul kalam",
      "kalam"
    ]
  },
  {
    "id": "q_01146",
    "category": "🧠 Indian General Knowledge",
    "question": "Think fast! Do you remember: Which Indian city is globally recognized as the \"Silicon Valley of India\"?",
    "correctAnswer": "Bengaluru (Bangalore)",
    "acceptableAnswers": [
      "bangalore",
      "bengaluru"
    ]
  },
  {
    "id": "q_01147",
    "category": "🧠 Indian General Knowledge",
    "question": "Which city in Rajasthan is famously celebrated as the \"Pink City\"?",
    "correctAnswer": "Jaipur",
    "acceptableAnswers": [
      "jaipur"
    ]
  },
  {
    "id": "q_01148",
    "category": "🧠 Indian General Knowledge",
    "question": "Which city in Rajasthan is celebrated as the \"Blue City\" and \"Sun City\"?",
    "correctAnswer": "Jodhpur",
    "acceptableAnswers": [
      "jodhpur"
    ]
  },
  {
    "id": "q_01149",
    "category": "🧠 Indian General Knowledge",
    "question": "Which city in Rajasthan is renowned as the \"City of Lakes\"?",
    "correctAnswer": "Udaipur",
    "acceptableAnswers": [
      "udaipur"
    ]
  },
  {
    "id": "q_01150",
    "category": "🧠 Indian General Knowledge",
    "question": "True Fan Quiz: Guess the right answer: What is the official National Animal of India?",
    "correctAnswer": "Royal Bengal Tiger",
    "acceptableAnswers": [
      "tiger",
      "bengal tiger",
      "royal bengal tiger"
    ]
  },
  {
    "id": "q_01151",
    "category": "🧠 Indian General Knowledge",
    "question": "What is the official National Bird of India?",
    "correctAnswer": "Indian Peacock",
    "acceptableAnswers": [
      "peacock",
      "indian peacock",
      "mor"
    ]
  },
  {
    "id": "q_01152",
    "category": "🧠 Indian General Knowledge",
    "question": "Instant Guess: Trivia check: What is the official National Aquatic Animal of India?",
    "correctAnswer": "Ganges River Dolphin",
    "acceptableAnswers": [
      "ganges river dolphin",
      "river dolphin",
      "dolphin",
      "ganga dolphin"
    ]
  },
  {
    "id": "q_01153",
    "category": "🧠 Indian General Knowledge",
    "question": "What is the official National Tree of India?",
    "correctAnswer": "Banyan Tree (Bargad)",
    "acceptableAnswers": [
      "banyan",
      "banyan tree",
      "bargad"
    ]
  },
  {
    "id": "q_01154",
    "category": "🧠 Indian General Knowledge",
    "question": "Lock Your Answer: Fun trivia: What is the official National Fruit of India?",
    "correctAnswer": "Mango (Aam)",
    "acceptableAnswers": [
      "mango",
      "aam"
    ]
  },
  {
    "id": "q_01155",
    "category": "🧠 Indian General Knowledge",
    "question": "Buzzer Question: Name the correct one: What is the official National Heritage Animal of India?",
    "correctAnswer": "Indian Elephant",
    "acceptableAnswers": [
      "elephant",
      "indian elephant",
      "haathi"
    ]
  },
  {
    "id": "q_01156",
    "category": "🧠 Indian General Knowledge",
    "question": "Champion Round: Do you remember: What is the longest river flowing entirely within Indian territory?",
    "correctAnswer": "Ganga",
    "acceptableAnswers": [
      "ganga",
      "ganges"
    ]
  },
  {
    "id": "q_01157",
    "category": "🧠 Indian General Knowledge",
    "question": "Which is the largest state in India by total geographical area?",
    "correctAnswer": "Rajasthan",
    "acceptableAnswers": [
      "rajasthan"
    ]
  },
  {
    "id": "q_01158",
    "category": "🧠 Indian General Knowledge",
    "question": "Which Indian state boasts the highest literacy rate in the country?",
    "correctAnswer": "Kerala",
    "acceptableAnswers": [
      "kerala"
    ]
  },
  {
    "id": "q_01159",
    "category": "🧠 Indian General Knowledge",
    "question": "Who designed the official currency symbol of the Indian Rupee (₹)?",
    "correctAnswer": "Udaya Kumar Dharmalingam",
    "acceptableAnswers": [
      "udaya kumar",
      "d udaya kumar",
      "udayakumar"
    ]
  },
  {
    "id": "q_01160",
    "category": "🧠 Indian General Knowledge",
    "question": "Which Indian freedom fighter coined the immortal slogan \"Tum mujhe khoon do, main tumhe azaadi doonga\"?",
    "correctAnswer": "Subhas Chandra Bose (Netaji)",
    "acceptableAnswers": [
      "subhas chandra bose",
      "netaji",
      "subhash chandra bose"
    ]
  },
  {
    "id": "q_01161",
    "category": "🧠 Indian General Knowledge",
    "question": "Which revolutionary hero gave the resounding call \"Inquilab Zindabad\"?",
    "correctAnswer": "Bhagat Singh",
    "acceptableAnswers": [
      "bhagat singh",
      "shaheed bhagat singh"
    ]
  },
  {
    "id": "q_01162",
    "category": "🧠 Indian General Knowledge",
    "question": "Can you guess? Name the correct one: Which ISRO satellite was launched to study the Sun from Lagrange point L1?",
    "correctAnswer": "Aditya-L1",
    "acceptableAnswers": [
      "aditya l1",
      "aditya-l1",
      "adityal1",
      "aditya"
    ]
  },
  {
    "id": "q_01163",
    "category": "🧠 Indian General Knowledge",
    "question": "Think fast! Do you remember: Which is the world's tallest statue, located in Gujarat, India?",
    "correctAnswer": "Statue of Unity (Sardar Patel)",
    "acceptableAnswers": [
      "statue of unity",
      "sardar patel statue",
      "statue of unity gujarat"
    ]
  },
  {
    "id": "q_01164",
    "category": "🧠 Indian General Knowledge",
    "question": "True Fan Quiz: Guess the right answer: Which Indian scientist and former President is known as the \"Missile Man of India\"?",
    "correctAnswer": "Dr. A.P.J. Abdul Kalam",
    "acceptableAnswers": [
      "apj abdul kalam",
      "abdul kalam",
      "dr abdul kalam",
      "kalam"
    ]
  },
  {
    "id": "q_01165",
    "category": "🧠 Indian General Knowledge",
    "question": "Which Indian city is globally recognized as the \"Silicon Valley of India\"?",
    "correctAnswer": "Bengaluru (Bangalore)",
    "acceptableAnswers": [
      "bangalore",
      "bengaluru"
    ]
  },
  {
    "id": "q_01166",
    "category": "🧠 Indian General Knowledge",
    "question": "Instant Guess: Trivia check: Which city in Rajasthan is famously celebrated as the \"Pink City\"?",
    "correctAnswer": "Jaipur",
    "acceptableAnswers": [
      "jaipur"
    ]
  },
  {
    "id": "q_01167",
    "category": "🧠 Indian General Knowledge",
    "question": "Lock Your Answer: Fun trivia: Which city in Rajasthan is renowned as the \"City of Lakes\"?",
    "correctAnswer": "Udaipur",
    "acceptableAnswers": [
      "udaipur"
    ]
  },
  {
    "id": "q_01168",
    "category": "🧠 Indian General Knowledge",
    "question": "Buzzer Question: Name the correct one: What is the official National Animal of India?",
    "correctAnswer": "Royal Bengal Tiger",
    "acceptableAnswers": [
      "tiger",
      "bengal tiger",
      "royal bengal tiger"
    ]
  },
  {
    "id": "q_01169",
    "category": "🧠 Indian General Knowledge",
    "question": "Champion Round: Do you remember: What is the official National Bird of India?",
    "correctAnswer": "Indian Peacock",
    "acceptableAnswers": [
      "peacock",
      "indian peacock",
      "mor"
    ]
  },
  {
    "id": "q_01170",
    "category": "🧠 Indian General Knowledge",
    "question": "What is the official National Aquatic Animal of India?",
    "correctAnswer": "Ganges River Dolphin",
    "acceptableAnswers": [
      "ganges river dolphin",
      "river dolphin",
      "dolphin",
      "ganga dolphin"
    ]
  },
  {
    "id": "q_01171",
    "category": "🧠 Indian General Knowledge",
    "question": "What is the official National Fruit of India?",
    "correctAnswer": "Mango (Aam)",
    "acceptableAnswers": [
      "mango",
      "aam"
    ]
  },
  {
    "id": "q_01172",
    "category": "🧠 Indian General Knowledge",
    "question": "What is the official National Heritage Animal of India?",
    "correctAnswer": "Indian Elephant",
    "acceptableAnswers": [
      "elephant",
      "indian elephant",
      "haathi"
    ]
  },
  {
    "id": "q_01173",
    "category": "🧠 Indian General Knowledge",
    "question": "What is the longest river flowing entirely within Indian territory?",
    "correctAnswer": "Ganga",
    "acceptableAnswers": [
      "ganga",
      "ganges"
    ]
  },
  {
    "id": "q_01174",
    "category": "🧠 Indian General Knowledge",
    "question": "Can you guess? Name the correct one: Which Indian freedom fighter coined the immortal slogan \"Tum mujhe khoon do, main tumhe azaadi doonga\"?",
    "correctAnswer": "Subhas Chandra Bose (Netaji)",
    "acceptableAnswers": [
      "subhas chandra bose",
      "netaji",
      "subhash chandra bose"
    ]
  },
  {
    "id": "q_01175",
    "category": "🧠 Indian General Knowledge",
    "question": "Think fast! Do you remember: Which revolutionary hero gave the resounding call \"Inquilab Zindabad\"?",
    "correctAnswer": "Bhagat Singh",
    "acceptableAnswers": [
      "bhagat singh",
      "shaheed bhagat singh"
    ]
  },
  {
    "id": "q_01176",
    "category": "🧠 Indian General Knowledge",
    "question": "True Fan Quiz: Guess the right answer: Which ISRO satellite was launched to study the Sun from Lagrange point L1?",
    "correctAnswer": "Aditya-L1",
    "acceptableAnswers": [
      "aditya l1",
      "aditya-l1",
      "adityal1",
      "aditya"
    ]
  },
  {
    "id": "q_01177",
    "category": "🧠 Indian General Knowledge",
    "question": "Instant Guess: Trivia check: Who is recognized as the chief architect and Father of the Indian Constitution?",
    "correctAnswer": "Dr. B.R. Ambedkar",
    "acceptableAnswers": [
      "br ambedkar",
      "bhimrao ambedkar",
      "ambedkar",
      "dr b r ambedkar"
    ]
  },
  {
    "id": "q_01178",
    "category": "🧠 Indian General Knowledge",
    "question": "Lock Your Answer: Fun trivia: Who was the first President of independent India?",
    "correctAnswer": "Dr. Rajendra Prasad",
    "acceptableAnswers": [
      "rajendra prasad",
      "dr rajendra prasad",
      "rajendra babu"
    ]
  },
  {
    "id": "q_01179",
    "category": "🧠 Indian General Knowledge",
    "question": "Buzzer Question: Name the correct one: Which Indian scientist and former President is known as the \"Missile Man of India\"?",
    "correctAnswer": "Dr. A.P.J. Abdul Kalam",
    "acceptableAnswers": [
      "apj abdul kalam",
      "abdul kalam",
      "dr abdul kalam",
      "kalam"
    ]
  },
  {
    "id": "q_01180",
    "category": "🧠 Indian General Knowledge",
    "question": "Champion Round: Do you remember: Which Indian city is globally recognized as the \"Silicon Valley of India\"?",
    "correctAnswer": "Bengaluru (Bangalore)",
    "acceptableAnswers": [
      "bangalore",
      "bengaluru"
    ]
  },
  {
    "id": "q_01181",
    "category": "🧠 Indian General Knowledge",
    "question": "What is the official National Animal of India?",
    "correctAnswer": "Royal Bengal Tiger",
    "acceptableAnswers": [
      "tiger",
      "bengal tiger",
      "royal bengal tiger"
    ]
  },
  {
    "id": "q_01182",
    "category": "🧠 Indian General Knowledge",
    "question": "Can you guess? Name the correct one: What is the official National Heritage Animal of India?",
    "correctAnswer": "Indian Elephant",
    "acceptableAnswers": [
      "elephant",
      "indian elephant",
      "haathi"
    ]
  },
  {
    "id": "q_01183",
    "category": "🧠 Indian General Knowledge",
    "question": "Think fast! Do you remember: What is the longest river flowing entirely within Indian territory?",
    "correctAnswer": "Ganga",
    "acceptableAnswers": [
      "ganga",
      "ganges"
    ]
  },
  {
    "id": "q_01184",
    "category": "🧠 Indian General Knowledge",
    "question": "True Fan Quiz: Guess the right answer: Which Indian freedom fighter coined the immortal slogan \"Tum mujhe khoon do, main tumhe azaadi doonga\"?",
    "correctAnswer": "Subhas Chandra Bose (Netaji)",
    "acceptableAnswers": [
      "subhas chandra bose",
      "netaji",
      "subhash chandra bose"
    ]
  },
  {
    "id": "q_01185",
    "category": "🧠 Indian General Knowledge",
    "question": "Instant Guess: Trivia check: Which ISRO mission made India the 1st country to land on Moon's South Pole?",
    "correctAnswer": "Chandrayaan-3",
    "acceptableAnswers": [
      "chandrayaan 3",
      "chandrayaan-3",
      "chandrayaan3",
      "chandrayaan"
    ]
  },
  {
    "id": "q_01186",
    "category": "🧠 Indian General Knowledge",
    "question": "Lock Your Answer: Fun trivia: What is the name of the rover on India's historic Chandrayaan-3 mission?",
    "correctAnswer": "Pragyan Rover",
    "acceptableAnswers": [
      "pragyan",
      "pragyan rover"
    ]
  },
  {
    "id": "q_01187",
    "category": "🧠 Indian General Knowledge",
    "question": "Buzzer Question: Name the correct one: Which ISRO satellite was launched to study the Sun from Lagrange point L1?",
    "correctAnswer": "Aditya-L1",
    "acceptableAnswers": [
      "aditya l1",
      "aditya-l1",
      "adityal1",
      "aditya"
    ]
  },
  {
    "id": "q_01188",
    "category": "🧠 Indian General Knowledge",
    "question": "Champion Round: Do you remember: Which is the world's tallest statue, located in Gujarat, India?",
    "correctAnswer": "Statue of Unity (Sardar Patel)",
    "acceptableAnswers": [
      "statue of unity",
      "sardar patel statue",
      "statue of unity gujarat"
    ]
  },
  {
    "id": "q_01189",
    "category": "🧠 Indian General Knowledge",
    "question": "Which Indian scientist and former President is known as the \"Missile Man of India\"?",
    "correctAnswer": "Dr. A.P.J. Abdul Kalam",
    "acceptableAnswers": [
      "apj abdul kalam",
      "abdul kalam",
      "dr abdul kalam",
      "kalam"
    ]
  },
  {
    "id": "q_01190",
    "category": "🧠 Indian General Knowledge",
    "question": "Can you guess? Name the correct one: What is the official National Animal of India?",
    "correctAnswer": "Royal Bengal Tiger",
    "acceptableAnswers": [
      "tiger",
      "bengal tiger",
      "royal bengal tiger"
    ]
  },
  {
    "id": "q_01191",
    "category": "🧠 Indian General Knowledge",
    "question": "Think fast! Do you remember: What is the official National Bird of India?",
    "correctAnswer": "Indian Peacock",
    "acceptableAnswers": [
      "peacock",
      "indian peacock",
      "mor"
    ]
  },
  {
    "id": "q_01192",
    "category": "🧠 Indian General Knowledge",
    "question": "True Fan Quiz: Guess the right answer: What is the official National Heritage Animal of India?",
    "correctAnswer": "Indian Elephant",
    "acceptableAnswers": [
      "elephant",
      "indian elephant",
      "haathi"
    ]
  },
  {
    "id": "q_01193",
    "category": "🧠 Indian General Knowledge",
    "question": "Instant Guess: Trivia check: Which is the largest state in India by total geographical area?",
    "correctAnswer": "Rajasthan",
    "acceptableAnswers": [
      "rajasthan"
    ]
  },
  {
    "id": "q_01194",
    "category": "🧠 Indian General Knowledge",
    "question": "Lock Your Answer: Fun trivia: Who designed the official currency symbol of the Indian Rupee (₹)?",
    "correctAnswer": "Udaya Kumar Dharmalingam",
    "acceptableAnswers": [
      "udaya kumar",
      "d udaya kumar",
      "udayakumar"
    ]
  },
  {
    "id": "q_01195",
    "category": "🧠 Indian General Knowledge",
    "question": "Buzzer Question: Name the correct one: Which Indian freedom fighter coined the immortal slogan \"Tum mujhe khoon do, main tumhe azaadi doonga\"?",
    "correctAnswer": "Subhas Chandra Bose (Netaji)",
    "acceptableAnswers": [
      "subhas chandra bose",
      "netaji",
      "subhash chandra bose"
    ]
  },
  {
    "id": "q_01196",
    "category": "🧠 Indian General Knowledge",
    "question": "Champion Round: Do you remember: Which revolutionary hero gave the resounding call \"Inquilab Zindabad\"?",
    "correctAnswer": "Bhagat Singh",
    "acceptableAnswers": [
      "bhagat singh",
      "shaheed bhagat singh"
    ]
  },
  {
    "id": "q_new_0001",
    "category": "📺 Indian Web Series & Cult Hits",
    "question": "In the web series Panchayat, what is the official designation of Abhishek Tripathi (played by Jitendra Kumar)?",
    "correctAnswer": "Panchayat Secretary (Sachiv Ji)",
    "acceptableAnswers": [
      "panchayat secretary",
      "sachiv ji",
      "sachiv",
      "secretary",
      "gram sachiv"
    ]
  },
  {
    "id": "q_new_0002",
    "category": "📺 Indian Web Series & Cult Hits",
    "question": "In Panchayat, what is the name of the fictional village in Uttar Pradesh where the series is set?",
    "correctAnswer": "Phulera",
    "acceptableAnswers": [
      "phulera",
      "fulera",
      "fulehra"
    ]
  },
  {
    "id": "q_new_0003",
    "category": "📺 Indian Web Series & Cult Hits",
    "question": "In Panchayat, which character is notoriously nicknamed 'Banrakas' by the villagers?",
    "correctAnswer": "Bhushan",
    "acceptableAnswers": [
      "bhushan",
      "banrakas",
      "bhushan ji"
    ]
  },
  {
    "id": "q_new_0004",
    "category": "📺 Indian Web Series & Cult Hits",
    "question": "In Panchayat, what examination is Sachiv Ji (Abhishek Tripathi) constantly studying for?",
    "correctAnswer": "CAT",
    "acceptableAnswers": [
      "cat",
      "cat exam",
      "mba",
      "iim"
    ]
  },
  {
    "id": "q_new_0005",
    "category": "📺 Indian Web Series & Cult Hits",
    "question": "In Panchayat, who is the real official Pradhan of Phulera, while her husband acts as Pradhan-Pati?",
    "correctAnswer": "Manju Devi",
    "acceptableAnswers": [
      "manju devi",
      "manju",
      "neena gupta"
    ]
  },
  {
    "id": "q_new_0006",
    "category": "📺 Indian Web Series & Cult Hits",
    "question": "In Scam 1992, which stockbroker's rise and fall is depicted, famously played by Pratik Gandhi?",
    "correctAnswer": "Harshad Mehta",
    "acceptableAnswers": [
      "harshad mehta",
      "harshad",
      "the big bull",
      "big bull"
    ]
  },
  {
    "id": "q_new_0007",
    "category": "📺 Indian Web Series & Cult Hits",
    "question": "What is the iconic dialogue spoken by Harshad Mehta in Scam 1992 about risk and love?",
    "correctAnswer": "Risk Hai Toh Ishq Hai",
    "acceptableAnswers": [
      "risk hai toh ishq hai",
      "risk",
      "ishq",
      "risk hai to ishq hai"
    ]
  },
  {
    "id": "q_new_0008",
    "category": "📺 Indian Web Series & Cult Hits",
    "question": "In The Family Man, what is the name of Srikant Tiwari's secretive counter-terrorism intelligence agency?",
    "correctAnswer": "TASC",
    "acceptableAnswers": [
      "tasc",
      "t.a.s.c",
      "threat analysis and surveillance cell"
    ]
  },
  {
    "id": "q_new_0009",
    "category": "📺 Indian Web Series & Cult Hits",
    "question": "In The Family Man Season 2, who is the omniscient retired intelligence officer Srikant calls for answers to everything?",
    "correctAnswer": "Chellam Sir",
    "acceptableAnswers": [
      "chellam sir",
      "chellam",
      "chelam sir"
    ]
  },
  {
    "id": "q_new_0010",
    "category": "📺 Indian Web Series & Cult Hits",
    "question": "In Kota Factory, what is the beloved physics mentor played by Jitendra Kumar universally called?",
    "correctAnswer": "Jeetu Bhaiya",
    "acceptableAnswers": [
      "jeetu bhaiya",
      "jeetu sir",
      "jeetu",
      "jitendra kumar"
    ]
  },
  {
    "id": "q_new_0011",
    "category": "📺 Indian Web Series & Cult Hits",
    "question": "In Gullak, what is the surname of the middle-class family consisting of Santosh, Shanti, Annu, and Aman?",
    "correctAnswer": "Mishra",
    "acceptableAnswers": [
      "mishra",
      "mishra family",
      "mishras"
    ]
  },
  {
    "id": "q_new_0012",
    "category": "📺 Indian Web Series & Cult Hits",
    "question": "In Mirzapur, what lucrative family business does Akhandanand Tripathi (Kaleen Bhaiya) run as a front?",
    "correctAnswer": "Carpet Manufacturing",
    "acceptableAnswers": [
      "carpet",
      "carpets",
      "kaleen",
      "kaleen business",
      "rugs"
    ]
  },
  {
    "id": "q_new_0013",
    "category": "📺 Indian Television & Reality TV",
    "question": "Which Shark Tank India judge became a viral meme sensation with the dialogue 'Yeh sab doglapan hai'?",
    "correctAnswer": "Ashneer Grover",
    "acceptableAnswers": [
      "ashneer grover",
      "ashneer",
      "grover",
      "bharatpe founder"
    ]
  },
  {
    "id": "q_new_0014",
    "category": "📺 Indian Television & Reality TV",
    "question": "Which Shark Tank India judge famously declares 'Meri isme expertise nahi hai, isliye I am out'?",
    "correctAnswer": "Namita Thapar",
    "acceptableAnswers": [
      "namita thapar",
      "namita",
      "emcure"
    ]
  },
  {
    "id": "q_new_0015",
    "category": "📺 Indian Television & Reality TV",
    "question": "In CID, what does ACP Pradyuman famously shout to Senior Inspector Daya whenever a door is locked?",
    "correctAnswer": "Daya Darwaza Tod Do",
    "acceptableAnswers": [
      "daya darwaza tod do",
      "darwaza tod",
      "tod do",
      "darwaza tod do",
      "break the door"
    ]
  },
  {
    "id": "q_new_0016",
    "category": "📺 Indian Television & Reality TV",
    "question": "In CID, what is the name of the eccentric forensic doctor who works in the CID laboratory?",
    "correctAnswer": "Dr. Salunkhe",
    "acceptableAnswers": [
      "dr salunkhe",
      "salunkhe",
      "doctor salunkhe",
      "salunke",
      "dr salunke"
    ]
  },
  {
    "id": "q_new_0017",
    "category": "📺 Indian Television & Reality TV",
    "question": "In CID, what is Senior Inspector Abhijeet's sharp signature skill often showcased in shootouts?",
    "correctAnswer": "Sharpshooting (Never misses an aim)",
    "acceptableAnswers": [
      "sharpshooting",
      "shooting",
      "sharp shooter",
      "aim",
      "gun"
    ]
  },
  {
    "id": "q_new_0018",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "In Hera Pheri, who is the real owner of Star Garage that Baburao Apte inherited?",
    "correctAnswer": "Baburao Ganpatrao Apte",
    "acceptableAnswers": [
      "baburao",
      "baburao apte",
      "star garage owner",
      "babu bhaiya"
    ]
  },
  {
    "id": "q_new_0019",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "In Phir Hera Pheri, what was the name of the scam company through which Anuradha promised to double money in 25 days?",
    "correctAnswer": "Laxmi Chit Fund",
    "acceptableAnswers": [
      "laxmi chit fund",
      "lakshmi chit fund",
      "laxmi",
      "chit fund"
    ]
  },
  {
    "id": "q_new_0020",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "In Phir Hera Pheri, what is the name of the stuttering gangster played by Sharad Saxena?",
    "correctAnswer": "Tiwari Seth",
    "acceptableAnswers": [
      "tiwari",
      "tiwari seth",
      "totla tiwari"
    ]
  },
  {
    "id": "q_new_0021",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "In Phir Hera Pheri, what is the name of the eccentric don played by Johnny Lever who constantly forgets words?",
    "correctAnswer": "Munna Mobile",
    "acceptableAnswers": [
      "munna mobile",
      "munna",
      "johnny lever"
    ]
  },
  {
    "id": "q_new_0022",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "In Welcome, what is Majnu Bhai's (Anil Kapoor) secret artistic passion in his free time?",
    "correctAnswer": "Painting",
    "acceptableAnswers": [
      "painting",
      "painter",
      "drawing",
      "art"
    ]
  },
  {
    "id": "q_new_0023",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "In Welcome, who plays the don't-mess-with-me underworld don RDX who has an emotional breakdown over his son?",
    "correctAnswer": "Feroz Khan",
    "acceptableAnswers": [
      "feroz khan",
      "rdx",
      "feroz"
    ]
  },
  {
    "id": "q_new_0024",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "In Dhamaal, which tree in Goa's St. Sebastian Garden hides 10 crore rupees under a giant 'W'?",
    "correctAnswer": "Four Palm Trees shaped like W",
    "acceptableAnswers": [
      "w",
      "big w",
      "four palm trees",
      "palm trees",
      "under the w"
    ]
  },
  {
    "id": "q_new_0025",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "In Dhamaal, what was the hilariously long and impossible South Indian name recited by the passenger in the car with Adi?",
    "correctAnswer": "Muthuswami Venugopal Iyer",
    "acceptableAnswers": [
      "muthuswami venugopal iyer",
      "venugopal iyer",
      "iyer",
      "muthuswami"
    ]
  },
  {
    "id": "q_new_0026",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "In Munna Bhai M.B.B.S., what is the medical term Munna coins for treating patients with warmth and hugs?",
    "correctAnswer": "Jaadu Ki Jhappi",
    "acceptableAnswers": [
      "jaadu ki jhappi",
      "jadu ki jhappi",
      "jhappi",
      "hug"
    ]
  },
  {
    "id": "q_new_0027",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "In Munna Bhai M.B.B.S., who plays Munna's loyal best friend and sidekick Circuit?",
    "correctAnswer": "Arshad Warsi",
    "acceptableAnswers": [
      "arshad warsi",
      "arshad",
      "circuit"
    ]
  },
  {
    "id": "q_new_0028",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "In 3 Idiots, what machine does Chatur Ramalingam famously demonstrate at the Imperial College of Engineering speech?",
    "correctAnswer": "Silencer's Balatkar Speech (Pranks by Rancho)",
    "acceptableAnswers": [
      "chatur speech",
      "speech",
      "chatur",
      "balatkar speech"
    ]
  },
  {
    "id": "q_new_0029",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "In 3 Idiots, what was the real passion that Farhan Qureshi (R. Madhavan) wanted to pursue instead of engineering?",
    "correctAnswer": "Wildlife Photography",
    "acceptableAnswers": [
      "wildlife photography",
      "photography",
      "photographer",
      "wildlife"
    ]
  },
  {
    "id": "q_new_0030",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "In 3 Idiots, which world-renowned Hungarian inventor inspired the astronaut pen question posed by Rancho to Virus?",
    "correctAnswer": "Paul C. Fisher (Space Pen / Pencil)",
    "acceptableAnswers": [
      "pencil",
      "astronaut pen",
      "space pen",
      "why not pencil"
    ]
  },
  {
    "id": "q_new_0031",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "In Andaz Apna Apna, who is the legendary crime master whose eyes 'goti khelne ke kaam aati hain'?",
    "correctAnswer": "Crime Master Gogo",
    "acceptableAnswers": [
      "crime master gogo",
      "gogo",
      "shakti kapoor"
    ]
  },
  {
    "id": "q_new_0032",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "In Andaz Apna Apna, what did Amar and Prem claim their fathers were when trying to impress Raveena?",
    "correctAnswer": "Millionaire Industrialists",
    "acceptableAnswers": [
      "millionaires",
      "rich",
      "industrialists",
      "businessmen"
    ]
  },
  {
    "id": "q_new_0033",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "In Chup Chup Ke, which character pretends to be deaf and mute to escape money lenders, played by Shahid Kapoor?",
    "correctAnswer": "Jeetu",
    "acceptableAnswers": [
      "jeetu",
      "shahid kapoor",
      "shahid"
    ]
  },
  {
    "id": "q_new_0034",
    "category": "🎬 Bollywood Comedy & Dialogues",
    "question": "In Chup Chup Ke, which comic actor plays the hysterical boat owner Gundya who hires Jeetu and Bandya?",
    "correctAnswer": "Paresh Rawal",
    "acceptableAnswers": [
      "paresh rawal",
      "gundya",
      "gundya bhai"
    ]
  },
  {
    "id": "q_new_0035",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "In Taarak Mehta Ka Ooltah Chashmah, what is the full name of Jethalal's father?",
    "correctAnswer": "Champaklal Jayantilal Gada",
    "acceptableAnswers": [
      "champaklal jayantilal gada",
      "champaklal",
      "champak lal",
      "bapuji",
      "jayantilal gada"
    ]
  },
  {
    "id": "q_new_0036",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "What is the village in Kutch, Gujarat from which the Gada family hails?",
    "correctAnswer": "Bhachau",
    "acceptableAnswers": [
      "bhachau",
      "bachau",
      "kutch bhachau"
    ]
  },
  {
    "id": "q_new_0037",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "What Gujarati snack is Jethalal's ultimate Sunday morning addiction?",
    "correctAnswer": "Jalebi Fafda",
    "acceptableAnswers": [
      "jalebi fafda",
      "fafda jalebi",
      "fafda",
      "jalebi"
    ]
  },
  {
    "id": "q_new_0038",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "What is the name of Jethalal's mischievous brother-in-law from Ahmedabad who constantly takes money from him?",
    "correctAnswer": "Sundarlal (Sundar)",
    "acceptableAnswers": [
      "sundarlal",
      "sundar",
      "sunder",
      "sunderlal",
      "daya brother"
    ]
  },
  {
    "id": "q_new_0039",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "What is the name of the agency or travel scheme Sundar frequently uses to trick Jethalal?",
    "correctAnswer": "Sundar Travels / Schemes",
    "acceptableAnswers": [
      "sundar travels",
      "topi",
      "ahmedabad travels",
      "schemes"
    ]
  },
  {
    "id": "q_new_0040",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "What newspaper does Patrakar Popatlal work for as a senior crime reporter?",
    "correctAnswer": "Toofan Express",
    "acceptableAnswers": [
      "toofan express",
      "toofan",
      "tufan express"
    ]
  },
  {
    "id": "q_new_0041",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "What prestigious national journalism award has Patrakar Popatlal won?",
    "correctAnswer": "Golden Crow Award",
    "acceptableAnswers": [
      "golden crow award",
      "golden crow",
      "golden crow trophy"
    ]
  },
  {
    "id": "q_new_0042",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "What is the name of Aatmaram Tukaram Bhide's home-business pickle and papad brand managed by Madhavi?",
    "correctAnswer": "Madhur Papad & Achar",
    "acceptableAnswers": [
      "madhur",
      "papad achar",
      "madhavi papad",
      "madhur papad",
      "achar papad"
    ]
  },
  {
    "id": "q_new_0043",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "What is the name of the beloved vintage scooter owned by Aatmaram Bhide?",
    "correctAnswer": "Sakharam",
    "acceptableAnswers": [
      "sakharam",
      "sakharam scooter",
      "yellow scooter"
    ]
  },
  {
    "id": "q_new_0044",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "What scientific research organization does Krishnan Subramaniam Iyer work for as a scientist?",
    "correctAnswer": "Indian Space Research (ISRO / Space Organization)",
    "acceptableAnswers": [
      "isro",
      "space",
      "scientist",
      "space scientist",
      "space research"
    ]
  },
  {
    "id": "q_new_0045",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "Which Indian state is Babita Ji originally from?",
    "correctAnswer": "West Bengal (Kolkata)",
    "acceptableAnswers": [
      "west bengal",
      "bengal",
      "kolkata",
      "bengali"
    ]
  },
  {
    "id": "q_new_0046",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "What is the name of the cozy hangout shop run by Abdul outside Gokuldham Society?",
    "correctAnswer": "All in One General Store (Abdul Soda Shop)",
    "acceptableAnswers": [
      "abdul soda shop",
      "soda shop",
      "abdul shop",
      "all in one general store"
    ]
  },
  {
    "id": "q_new_0047",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "What is the favorite evening beverage all male members of Gokuldham gather to drink at Abdul's shop?",
    "correctAnswer": "Soda",
    "acceptableAnswers": [
      "soda",
      "lemon soda",
      "jeera soda",
      "masala soda"
    ]
  },
  {
    "id": "q_new_0048",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "What is the nickname given to the mischievous group of Gokuldham kids led by Tipendra Gada?",
    "correctAnswer": "Tapu Sena",
    "acceptableAnswers": [
      "tapu sena",
      "tappu sena",
      "tapu brigade"
    ]
  },
  {
    "id": "q_new_0049",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "What is the full name of Pinku from Tapu Sena?",
    "correctAnswer": "Pankaj Diwan Sahay (Pinku)",
    "acceptableAnswers": [
      "pankaj",
      "pinku",
      "pankaj diwan sahay"
    ]
  },
  {
    "id": "q_new_0050",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "What is the name of Bagha's eccentric fiancée who works at a mobile store and has a trademark catchphrase?",
    "correctAnswer": "Bawri (Bawri Dhondulal Kanpuria)",
    "acceptableAnswers": [
      "bawri",
      "bavari",
      "bawri kanpuria",
      "galti se mistake ho gayi"
    ]
  },
  {
    "id": "q_new_0051",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "What is Bawri's signature catchphrase whenever she mistakenly says the wrong name?",
    "correctAnswer": "Galti Se Mistake Ho Gayi",
    "acceptableAnswers": [
      "galti se mistake ho gayi",
      "galti se mistake",
      "mistake ho gayi"
    ]
  },
  {
    "id": "q_new_0052",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "What is the name of Nattu Kaka's nephew who works together with him at Gada Electronics?",
    "correctAnswer": "Bagheshwar (Bagha)",
    "acceptableAnswers": [
      "bagha",
      "bagheshwar",
      "bagha boy"
    ]
  },
  {
    "id": "q_new_0053",
    "category": "👓 TMKOC Trivia & Comedy",
    "question": "What famous cricket tournament is organized between the society members in Gokuldham?",
    "correctAnswer": "Gokuldham Premiere League (GPL)",
    "acceptableAnswers": [
      "gpl",
      "gokuldham premiere league",
      "gokuldham premier league"
    ]
  },
  {
    "id": "q_new_0054",
    "category": "🏏 Cricket Legends & Shots",
    "question": "Which Indian captain hit the iconic World Cup winning six over long-on in the 2011 final at Wankhede?",
    "correctAnswer": "MS Dhoni",
    "acceptableAnswers": [
      "ms dhoni",
      "dhoni",
      "mahendra singh dhoni",
      "thala",
      "captain cool"
    ]
  },
  {
    "id": "q_new_0055",
    "category": "🏏 Cricket Legends & Shots",
    "question": "What is the signature helicopter shot invented and popularized worldwide by MS Dhoni?",
    "correctAnswer": "Helicopter Shot",
    "acceptableAnswers": [
      "helicopter shot",
      "helicopter",
      "heli shot"
    ]
  },
  {
    "id": "q_new_0056",
    "category": "🏏 Cricket Legends & Shots",
    "question": "Which Indian batter holds the world record for the highest individual ODI score of 264 runs against Sri Lanka?",
    "correctAnswer": "Rohit Sharma",
    "acceptableAnswers": [
      "rohit sharma",
      "rohit",
      "hitman",
      "sharma"
    ]
  },
  {
    "id": "q_new_0057",
    "category": "🏏 Cricket Legends & Shots",
    "question": "How many double centuries has Rohit Sharma scored in One Day Internationals (ODI)?",
    "correctAnswer": "3 Double Centuries",
    "acceptableAnswers": [
      "3",
      "three",
      "3 double centuries"
    ]
  },
  {
    "id": "q_new_0058",
    "category": "🏏 Cricket Legends & Shots",
    "question": "Which Indian cricket legend holds the immortal record of scoring 100 international centuries?",
    "correctAnswer": "Sachin Tendulkar",
    "acceptableAnswers": [
      "sachin tendulkar",
      "sachin",
      "master blaster",
      "god of cricket",
      "tendulkar"
    ]
  },
  {
    "id": "q_new_0059",
    "category": "🏏 Cricket Legends & Shots",
    "question": "Which Indian batter surpassed Sachin Tendulkar to reach 50 ODI centuries during the 2023 ICC World Cup semi-final?",
    "correctAnswer": "Virat Kohli",
    "acceptableAnswers": [
      "virat kohli",
      "virat",
      "king kohli",
      "kohli",
      "cheeku"
    ]
  },
  {
    "id": "q_new_0060",
    "category": "🏏 Cricket Legends & Shots",
    "question": "What is the iconic official jersey number worn by Virat Kohli for India and RCB?",
    "correctAnswer": "18",
    "acceptableAnswers": [
      "18",
      "jersey 18",
      "eighteen",
      "no 18"
    ]
  },
  {
    "id": "q_new_0061",
    "category": "🏏 Cricket Legends & Shots",
    "question": "What is the iconic jersey number permanently retired by BCCI in honor of MS Dhoni?",
    "correctAnswer": "7",
    "acceptableAnswers": [
      "7",
      "jersey 7",
      "seven",
      "no 7"
    ]
  },
  {
    "id": "q_new_0062",
    "category": "🏏 Cricket Legends & Shots",
    "question": "Which Indian pacer is world-famous for bowling pinpoint yorkers with a unique sling action?",
    "correctAnswer": "Jasprit Bumrah",
    "acceptableAnswers": [
      "jasprit bumrah",
      "bumrah",
      "jassi",
      "boom boom"
    ]
  },
  {
    "id": "q_new_0063",
    "category": "🏏 Cricket Legends & Shots",
    "question": "Which Indian all-rounder captained the underdog Indian team to their historic maiden World Cup victory in 1983?",
    "correctAnswer": "Kapil Dev",
    "acceptableAnswers": [
      "kapil dev",
      "kapil",
      "haryana hurricane",
      "kapil paaji"
    ]
  },
  {
    "id": "q_new_0064",
    "category": "🏏 Cricket Legends & Shots",
    "question": "What historic knock of 175 not out against Zimbabwe in the 1983 World Cup was not recorded by BBC due to a strike?",
    "correctAnswer": "Kapil Dev's 175*",
    "acceptableAnswers": [
      "kapil dev",
      "175",
      "kapil dev 175",
      "kapil"
    ]
  },
  {
    "id": "q_new_0065",
    "category": "🏏 Cricket Legends & Shots",
    "question": "Which former Indian captain famously took off his jersey at the Lord's balcony after winning the 2002 NatWest trophy?",
    "correctAnswer": "Sourav Ganguly",
    "acceptableAnswers": [
      "sourav ganguly",
      "ganguly",
      "dada",
      "prince of kolkata"
    ]
  },
  {
    "id": "q_new_0066",
    "category": "🏏 Cricket Legends & Shots",
    "question": "Which Indian batter hit 6 consecutive sixes in an over off Stuart Broad during the 2007 T20 World Cup?",
    "correctAnswer": "Yuvraj Singh",
    "acceptableAnswers": [
      "yuvraj singh",
      "yuvraj",
      "yuvi"
    ]
  },
  {
    "id": "q_new_0067",
    "category": "🏏 Cricket Legends & Shots",
    "question": "What is the home ground of Kolkata Knight Riders known as the Mecca of Indian Cricket?",
    "correctAnswer": "Eden Gardens",
    "acceptableAnswers": [
      "eden gardens",
      "eden",
      "kolkata eden gardens"
    ]
  },
  {
    "id": "q_new_0068",
    "category": "🏏 Cricket Legends & Shots",
    "question": "What is the world's largest cricket stadium by seating capacity, located in Ahmedabad, Gujarat?",
    "correctAnswer": "Narendra Modi Stadium (Motera)",
    "acceptableAnswers": [
      "narendra modi stadium",
      "motera",
      "motera stadium",
      "ahmedabad stadium"
    ]
  },
  {
    "id": "q_new_0069",
    "category": "🏏 Cricket Legends & Shots",
    "question": "Which team has won 5 IPL trophies under the captaincy of MS Dhoni in yellow jersey?",
    "correctAnswer": "Chennai Super Kings (CSK)",
    "acceptableAnswers": [
      "csk",
      "chennai super kings",
      "chennai"
    ]
  },
  {
    "id": "q_new_0070",
    "category": "🏏 Cricket Legends & Shots",
    "question": "Which team has won 5 IPL trophies under the captaincy of Rohit Sharma in blue jersey?",
    "correctAnswer": "Mumbai Indians (MI)",
    "acceptableAnswers": [
      "mumbai indians",
      "mi",
      "mumbai"
    ]
  },
  {
    "id": "q_new_0071",
    "category": "🎬 Indian Blockbusters & Action",
    "question": "In Pushpa: The Rise, what red forestry timber does Pushpa Raj smuggle across the Seshachalam hills?",
    "correctAnswer": "Red Sandalwood (Raktachandan)",
    "acceptableAnswers": [
      "red sandalwood",
      "sandalwood",
      "raktachandan",
      "lal chandan"
    ]
  },
  {
    "id": "q_new_0072",
    "category": "🎬 Indian Blockbusters & Action",
    "question": "In Pushpa, what is Allu Arjun's world-famous gesture under his chin accompanied by 'Main Jhukega Nahi'?",
    "correctAnswer": "Beard swipe under the chin",
    "acceptableAnswers": [
      "chin swipe",
      "beard swipe",
      "hand under chin",
      "jhukega nahi gesture"
    ]
  },
  {
    "id": "q_new_0073",
    "category": "🎬 Indian Blockbusters & Action",
    "question": "In KGF, what is the fictional town in Karnataka where the gold mines are situated?",
    "correctAnswer": "Kolar Gold Fields (Narachi)",
    "acceptableAnswers": [
      "kgf",
      "kolar gold fields",
      "narachi",
      "kolar"
    ]
  },
  {
    "id": "q_new_0074",
    "category": "🎬 Indian Blockbusters & Action",
    "question": "In KGF Chapter 2, who played the fierce antagonist Adheera inspired by Vikings, opposite Yash?",
    "correctAnswer": "Sanjay Dutt",
    "acceptableAnswers": [
      "sanjay dutt",
      "adheera",
      "sanju"
    ]
  },
  {
    "id": "q_new_0075",
    "category": "🎬 Indian Blockbusters & Action",
    "question": "In SS Rajamouli's Baahubali, which kingdom's throne are Amarendra Baahubali and Bhallaladeva competing for?",
    "correctAnswer": "Mahishmati",
    "acceptableAnswers": [
      "mahishmati",
      "mahismati",
      "maheshmati"
    ]
  },
  {
    "id": "q_new_0076",
    "category": "🎬 Indian Blockbusters & Action",
    "question": "What historical question became India's biggest cliffhanger meme after Baahubali: The Beginning in 2015?",
    "correctAnswer": "Why Kattappa Killed Baahubali (Katappa ne Baahubali ko kyu maara)",
    "acceptableAnswers": [
      "why kattappa killed baahubali",
      "katappa ne baahubali ko kyu maara",
      "kattappa",
      "why katappa killed baahubali"
    ]
  },
  {
    "id": "q_new_0077",
    "category": "🎬 Indian Blockbusters & Action",
    "question": "Which SS Rajamouli film won the Academy Award (Oscar) for Best Original Song for 'Naatu Naatu'?",
    "correctAnswer": "RRR",
    "acceptableAnswers": [
      "rrr",
      "r r r"
    ]
  },
  {
    "id": "q_new_0078",
    "category": "🎬 Indian Blockbusters & Action",
    "question": "Who composed the Oscar-winning song 'Naatu Naatu' from the movie RRR?",
    "correctAnswer": "M. M. Keeravani",
    "acceptableAnswers": [
      "m m keeravani",
      "keeravani",
      "m.m. keeravani",
      "mm keeravani"
    ]
  },
  {
    "id": "q_new_0079",
    "category": "🎬 Bollywood Blockbusters & Action",
    "question": "In Sholay, what was the name of Basanti's beloved mare (horse) that drove her tanga?",
    "correctAnswer": "Dhanno",
    "acceptableAnswers": [
      "dhanno",
      "dhanno ghodi",
      "chal dhanno"
    ]
  },
  {
    "id": "q_new_0080",
    "category": "🎬 Bollywood Blockbusters & Action",
    "question": "In Sholay, what was the name of Thakur Baldev Singh's village where Gabbar Singh terrorized the people?",
    "correctAnswer": "Ramgarh",
    "acceptableAnswers": [
      "ramgarh",
      "ramgadh"
    ]
  },
  {
    "id": "q_new_0081",
    "category": "🎬 Bollywood Blockbusters & Action",
    "question": "In Sholay, who played the legendary dacoit Gabbar Singh who uttered 'Kitne aadmi the'?",
    "correctAnswer": "Amjad Khan",
    "acceptableAnswers": [
      "amjad khan",
      "amjad",
      "gabbar"
    ]
  },
  {
    "id": "q_new_0082",
    "category": "🎬 Bollywood Blockbusters & Action",
    "question": "In Dilwale Dulhania Le Jayenge (DDLJ), what European country do Raj and Simran travel through when they fall in love?",
    "correctAnswer": "Switzerland",
    "acceptableAnswers": [
      "switzerland",
      "swiss",
      "europe"
    ]
  },
  {
    "id": "q_new_0083",
    "category": "🎬 Bollywood Blockbusters & Action",
    "question": "In Lagaan, what game do Bhuvan and the villagers of Champaner have to win to get their taxes waived for 3 years?",
    "correctAnswer": "Cricket",
    "acceptableAnswers": [
      "cricket",
      "cricket match"
    ]
  },
  {
    "id": "q_new_0084",
    "category": "🎬 Bollywood Blockbusters & Action",
    "question": "In Dangal, which real-life Indian wrestling coach does Aamir Khan portray?",
    "correctAnswer": "Mahavir Singh Phogat",
    "acceptableAnswers": [
      "mahavir singh phogat",
      "mahavir phogat",
      "phogat"
    ]
  },
  {
    "id": "q_new_0085",
    "category": "🎬 Bollywood Blockbusters & Action",
    "question": "In Chak De! India, what was Kabir Khan's (Shah Rukh Khan) famous motivational speech duration before the final match?",
    "correctAnswer": "Sattar Minute (70 Minutes)",
    "acceptableAnswers": [
      "sattar minute",
      "70 minute",
      "70 minutes",
      "sattar"
    ]
  }
];

module.exports = questions;
