/**
 * Fun Guessing - Comprehensive Client Logic
 * Clean, modern party game with Buzzer Mode, Team Battles, Paisa Double,
 * Meme Soundboard, Typo Protection, Smart Letter Hints, and Live Ticker.
 */

const socket = io();

const state = {
  socketId: null,
  playerName: '',
  avatar: '🦁',
  roomCode: '',
  isHost: false,
  status: 'auth',
  players: [],
  targetPoints: 10,
  selectedCategory: 'all',
  timerDuration: 30,
  gameMode: 'type_first', // 'type_first' | 'buzzer'
  isTeamMode: false,
  teamScores: { jetha: 0, baburao: 0 },
  myTeam: 'jetha',
  currentQuestion: null,
  myScore: 0,
  myStreak: 0,
  paisaDoubleRemaining: 1,
  paisaDoubleActive: false,
  isBuzzerClaimant: false,
  isBuzzerLockedOut: false
};

// ==========================================
// DOM ELEMENTS
// ==========================================

// Screens
const authScreen = document.getElementById('authScreen');
const lobbyScreen = document.getElementById('lobbyScreen');
const gameScreen = document.getElementById('gameScreen');
const victoryScreen = document.getElementById('victoryScreen');

// Header
const headerRoomCode = document.getElementById('headerRoomCode');
const headerCodeText = document.getElementById('headerCodeText');
const copyHeaderCodeBtn = document.getElementById('copyHeaderCodeBtn');
const openPointTableBtn = document.getElementById('openPointTableBtn');
const myScoreBadge = document.getElementById('myScoreBadge');
const soundToggleBtn = document.getElementById('soundToggleBtn');
const tauntToast = document.getElementById('tauntToast');
const tauntToastAvatar = document.getElementById('tauntToastAvatar');
const tauntToastSender = document.getElementById('tauntToastSender');
const tauntToastQuote = document.getElementById('tauntToastQuote');

// Auth Screen
const playerNameInput = document.getElementById('playerNameInput');
const avatarPicker = document.getElementById('avatarPicker');
const tabCreateBtn = document.getElementById('tabCreateBtn');
const tabJoinBtn = document.getElementById('tabJoinBtn');
const createRoomPanel = document.getElementById('createRoomPanel');
const joinRoomPanel = document.getElementById('joinRoomPanel');
const createRoomBtn = document.getElementById('createRoomBtn');
const roomCodeInput = document.getElementById('roomCodeInput');
const joinRoomBtn = document.getElementById('joinRoomBtn');
const joinErrorMsg = document.getElementById('joinErrorMsg');

// Lobby Screen
const lobbyCodeText = document.getElementById('lobbyCodeText');
const copyLobbyCodeBtn = document.getElementById('copyLobbyCodeBtn');
const lobbyTestSoundBtn = document.getElementById('lobbyTestSoundBtn');
const playerCount = document.getElementById('playerCount');
const lobbyPlayersGrid = document.getElementById('lobbyPlayersGrid');
const hostControls = document.getElementById('hostControls');
const startGameBtn = document.getElementById('startGameBtn');
const playerWaitingNotice = document.getElementById('playerWaitingNotice');
const lobbyTargetDisplay = document.getElementById('lobbyTargetDisplay');
const lobbyModeDisplay = document.getElementById('lobbyModeDisplay');

// Lobby Team Selector
const teamSelectorZone = document.getElementById('teamSelectorZone');
const chooseTeamJethaBtn = document.getElementById('chooseTeamJethaBtn');
const chooseTeamBaburaoBtn = document.getElementById('chooseTeamBaburaoBtn');

// Lobby Host Controls
const categoryPreview = document.getElementById('categoryPreview');
const modePreview = document.getElementById('modePreview');
const targetPointsPreview = document.getElementById('targetPointsPreview');
const customTargetInput = document.getElementById('customTargetInput');

// Game Arena
const teamScoreBanner = document.getElementById('teamScoreBanner');
const teamJethaScore = document.getElementById('teamJethaScore');
const teamBaburaoScore = document.getElementById('teamBaburaoScore');
const gameTargetPoints = document.getElementById('gameTargetPoints');
const categoryPill = document.getElementById('categoryPill');
const modeStatusBadge = document.getElementById('modeStatusBadge');
const hotStreakBadge = document.getElementById('hotStreakBadge');
const timerText = document.getElementById('timerText');
const timerCircle = document.getElementById('timerCircle');
const timerProgressBar = document.getElementById('timerProgressBar');
const questionPrompt = document.getElementById('questionPrompt');
const smartHintBox = document.getElementById('smartHintBox');
const smartHintText = document.getElementById('smartHintText');

// Audio Visualizer
const audioPlayerZone = document.getElementById('audioPlayerZone');
const visualizerCanvas = document.getElementById('visualizerCanvas');
const playAudioBtn = document.getElementById('playAudioBtn');
const audioPlayIcon = document.getElementById('audioPlayIcon');
const audioPlayLabel = document.getElementById('audioPlayLabel');

// Buzzer Mode UI
const buzzerZone = document.getElementById('buzzerZone');
const bigBuzzBtn = document.getElementById('bigBuzzBtn');
const buzzerStatusCard = document.getElementById('buzzerStatusCard');
const buzzerClaimantAvatar = document.getElementById('buzzerClaimantAvatar');
const buzzerClaimantName = document.getElementById('buzzerClaimantName');
const buzzerCountdownSec = document.getElementById('buzzerCountdownSec');

// Answer & Utilities
const paisaDoubleBtn = document.getElementById('paisaDoubleBtn');
const paisaDoubleLabel = document.getElementById('paisaDoubleLabel');
const openTauntModalBtn = document.getElementById('openTauntModalBtn');
const typoBanner = document.getElementById('typoBanner');
const typoText = document.getElementById('typoText');
const feedbackBanner = document.getElementById('feedbackBanner');
const feedbackText = document.getElementById('feedbackText');
const answerForm = document.getElementById('answerForm');
const answerInput = document.getElementById('answerInput');
const submitAnswerBtn = document.getElementById('submitAnswerBtn');

// Live Ticker
const tickerContent = document.getElementById('tickerContent');

// Modals
const roundRevealModal = document.getElementById('roundRevealModal');
const revealWinnerSection = document.getElementById('revealWinnerSection');
const revealWinnerAvatar = document.getElementById('revealWinnerAvatar');
const revealWinnerName = document.getElementById('revealWinnerName');
const revealPointDelta = document.getElementById('revealPointDelta');
const revealCorrectAnswer = document.getElementById('revealCorrectAnswer');
const nextCountdownSec = document.getElementById('nextCountdownSec');

const tauntModal = document.getElementById('tauntModal');
const closeTauntModalBtn = document.getElementById('closeTauntModalBtn');
const dismissTauntModalBtn = document.getElementById('dismissTauntModalBtn');

const pointTableModal = document.getElementById('pointTableModal');
const closePointTableBtn = document.getElementById('closePointTableBtn');
const dismissPointTableBtn = document.getElementById('dismissPointTableBtn');
const pointTableList = document.getElementById('pointTableList');
const modalTeamScores = document.getElementById('modalTeamScores');
const modalJethaScore = document.getElementById('modalJethaScore');
const modalBaburaoScore = document.getElementById('modalBaburaoScore');

// Victory Screen
const victoryHeaderTitle = document.getElementById('victoryHeaderTitle');
const winnerHero = document.getElementById('winnerHero');
const winnerAvatar = document.getElementById('winnerAvatar');
const winnerName = document.getElementById('winnerName');
const winnerPointsBadge = document.getElementById('winnerPointsBadge');
const playAgainBtn = document.getElementById('playAgainBtn');
const victoryPointTableBtn = document.getElementById('victoryPointTableBtn');
const victoryWaitingNotice = document.getElementById('victoryWaitingNotice');
const awardMvpName = document.getElementById('awardMvpName');
const awardSpeedName = document.getElementById('awardSpeedName');
const awardSniperName = document.getElementById('awardSniperName');
const awardStreakName = document.getElementById('awardStreakName');

// ==========================================
// INITIAL SETUP
// ==========================================

window.addEventListener('DOMContentLoaded', () => {
  if (window.soundEngine && visualizerCanvas) {
    window.soundEngine.setVisualizer(visualizerCanvas);
  }

  // Auto-detect ?room= URL parameter for direct invite links
  const urlParams = new URLSearchParams(window.location.search);
  const roomParam = urlParams.get('room');
  if (roomParam) {
    roomCodeInput.value = roomParam.toUpperCase().trim();
    tabJoinBtn.click();
  }
});

// Avatar selection
avatarPicker.querySelectorAll('.avatar-option').forEach(btn => {
  btn.addEventListener('click', () => {
    avatarPicker.querySelectorAll('.avatar-option').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.avatar = btn.dataset.avatar;
  });
});

// Auth Tabs
tabCreateBtn.addEventListener('click', () => {
  tabCreateBtn.classList.add('active');
  tabJoinBtn.classList.remove('active');
  createRoomPanel.classList.add('active');
  joinRoomPanel.classList.remove('active');
  joinErrorMsg.classList.add('hidden');
});

tabJoinBtn.addEventListener('click', () => {
  tabJoinBtn.classList.add('active');
  tabCreateBtn.classList.remove('active');
  joinRoomPanel.classList.add('active');
  createRoomPanel.classList.remove('active');
});

// Sound Toggle
soundToggleBtn.addEventListener('click', () => {
  window.soundEngine.isMuted = !window.soundEngine.isMuted;
  soundToggleBtn.textContent = window.soundEngine.isMuted ? '🔇' : '🔊';
  if (window.soundEngine.isMuted) {
    window.soundEngine.stopAllAudio();
  }
});

// Copy Invite Link (copies direct full clickable URL)
function copyRoomCode(code) {
  const inviteUrl = `${window.location.origin}/?room=${encodeURIComponent(code)}`;
  navigator.clipboard.writeText(inviteUrl).then(() => {
    const original = copyLobbyCodeBtn.textContent;
    copyLobbyCodeBtn.textContent = 'Link Copied! ✅';
    setTimeout(() => {
      copyLobbyCodeBtn.textContent = original;
    }, 1500);
  }).catch(() => {
    alert(`Invite Link: ${inviteUrl}`);
  });
}

copyLobbyCodeBtn.addEventListener('click', () => copyRoomCode(state.roomCode));
headerRoomCode.addEventListener('click', () => copyRoomCode(state.roomCode));

// Lobby Sound Test
lobbyTestSoundBtn.addEventListener('click', () => {
  window.soundEngine.init();
  window.soundEngine.playLobbyTest();
});

// Switch Screen helper
function switchScreen(screenName) {
  state.status = screenName;
  [authScreen, lobbyScreen, gameScreen, victoryScreen].forEach(el => el.classList.remove('active'));

  if (screenName === 'auth') authScreen.classList.add('active');
  if (screenName === 'lobby') lobbyScreen.classList.add('active');
  if (screenName === 'game') gameScreen.classList.add('active');
  if (screenName === 'victory') victoryScreen.classList.add('active');

  if (screenName === 'auth') {
    headerRoomCode.classList.add('hidden');
  } else {
    headerRoomCode.classList.remove('hidden');
    headerCodeText.textContent = state.roomCode;
  }
}

// ==========================================
// HOST SETTINGS SYNC
// ==========================================

function emitHostSettingsUpdate() {
  if (!state.isHost) return;
  socket.emit('set_game_settings', {
    roomCode: state.roomCode,
    targetPoints: state.targetPoints,
    selectedCategory: state.selectedCategory,
    timerDuration: state.timerDuration,
    gameMode: state.gameMode,
    isTeamMode: state.isTeamMode
  });
}

// Category Chips
document.querySelectorAll('#categoryChips .chip-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    if (!state.isHost) return;
    document.querySelectorAll('#categoryChips .chip-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.selectedCategory = btn.dataset.category;
    categoryPreview.textContent = btn.textContent;
    emitHostSettingsUpdate();
  });
});

// Mode Chips
document.querySelectorAll('#modeChips .chip-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    if (!state.isHost) return;
    document.querySelectorAll('#modeChips .chip-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.gameMode = btn.dataset.mode;
    modePreview.textContent = btn.textContent;
    emitHostSettingsUpdate();
  });
});

// Timer Chips
document.querySelectorAll('#timerChips .chip-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    if (!state.isHost) return;
    document.querySelectorAll('#timerChips .chip-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.timerDuration = parseInt(btn.dataset.time, 10);
    emitHostSettingsUpdate();
  });
});

// Match Format (Solo vs Team Battle)
document.querySelectorAll('#teamChips .chip-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    if (!state.isHost) return;
    document.querySelectorAll('#teamChips .chip-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.isTeamMode = (btn.dataset.teamMode === 'true');
    emitHostSettingsUpdate();
  });
});

// Target Points Buttons
document.querySelectorAll('.target-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    if (!state.isHost) return;
    const pts = parseInt(btn.dataset.pts, 10);
    if (customTargetInput) customTargetInput.value = '';
    state.targetPoints = pts;
    updateTargetPointsUI(pts);
    emitHostSettingsUpdate();
  });
});

if (customTargetInput) {
  customTargetInput.addEventListener('input', () => {
    if (!state.isHost) return;
    const val = parseInt(customTargetInput.value, 10);
    if (!isNaN(val) && val >= 1 && val <= 100) {
      state.targetPoints = val;
      updateTargetPointsUI(val);
      emitHostSettingsUpdate();
    }
  });
}

function updateTargetPointsUI(pts) {
  const target = parseInt(pts, 10) || 10;
  state.targetPoints = target;

  if (targetPointsPreview) targetPointsPreview.textContent = `${target} Points`;
  if (lobbyTargetDisplay) lobbyTargetDisplay.textContent = `${target} Pts`;
  if (gameTargetPoints) gameTargetPoints.textContent = `${target} Pts`;

  document.querySelectorAll('.target-btn').forEach(btn => {
    if (parseInt(btn.dataset.pts, 10) === target) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  if (![5, 10, 15, 20].includes(target) && customTargetInput) {
    customTargetInput.value = target;
  }
}

// Team switching in Lobby
chooseTeamJethaBtn.addEventListener('click', () => {
  chooseTeamJethaBtn.classList.add('active');
  chooseTeamBaburaoBtn.classList.remove('active');
  state.myTeam = 'jetha';
  socket.emit('join_team', { roomCode: state.roomCode, team: 'jetha' });
});

chooseTeamBaburaoBtn.addEventListener('click', () => {
  chooseTeamBaburaoBtn.classList.add('active');
  chooseTeamJethaBtn.classList.remove('active');
  state.myTeam = 'baburao';
  socket.emit('join_team', { roomCode: state.roomCode, team: 'baburao' });
});

// ==========================================
// ROOM CREATION & JOINING
// ==========================================

createRoomBtn.addEventListener('click', () => {
  const name = playerNameInput.value.trim() || 'Player 1';
  state.playerName = name;
  window.soundEngine.init();

  socket.emit('create_room', {
    playerName: name,
    avatar: state.avatar,
    targetPoints: state.targetPoints
  }, response => {
    if (response.success) {
      state.roomCode = response.roomCode;
      state.isHost = true;
      state.players = response.players;
      state.selectedCategory = response.selectedCategory || 'all';
      state.timerDuration = response.timerDuration || 30;
      state.gameMode = response.gameMode || 'type_first';
      state.isTeamMode = !!response.isTeamMode;
      state.teamScores = response.teamScores || { jetha: 0, baburao: 0 };
      if (response.targetPoints) updateTargetPointsUI(response.targetPoints);

      lobbyCodeText.textContent = state.roomCode;
      updateLobbyUI();
      switchScreen('lobby');
    }
  });
});

joinRoomBtn.addEventListener('click', () => {
  const name = playerNameInput.value.trim() || 'Player';
  const code = roomCodeInput.value.trim().toUpperCase();

  if (!code || code.length !== 6) {
    joinErrorMsg.textContent = 'Enter a valid 6-digit Code!';
    joinErrorMsg.classList.remove('hidden');
    return;
  }

  state.playerName = name;
  window.soundEngine.init();

  socket.emit('join_room', {
    roomCode: code,
    playerName: name,
    avatar: state.avatar
  }, response => {
    if (response.success) {
      state.roomCode = response.roomCode;
      state.isHost = response.isHost;
      state.players = response.players;
      state.selectedCategory = response.selectedCategory || 'all';
      state.timerDuration = response.timerDuration || 30;
      state.gameMode = response.gameMode || 'type_first';
      state.isTeamMode = !!response.isTeamMode;
      state.teamScores = response.teamScores || { jetha: 0, baburao: 0 };
      if (response.targetPoints) updateTargetPointsUI(response.targetPoints);

      lobbyCodeText.textContent = state.roomCode;
      updateLobbyUI();
      switchScreen('lobby');
    } else {
      joinErrorMsg.textContent = response.message || 'Room not found';
      joinErrorMsg.classList.remove('hidden');
    }
  });
});

// Host Starts Match
startGameBtn.addEventListener('click', () => {
  if (!state.isHost) return;
  window.soundEngine.init();
  socket.emit('start_game', {
    roomCode: state.roomCode,
    targetPoints: state.targetPoints
  });
});

// Update Lobby UI
function updateLobbyUI() {
  playerCount.textContent = state.players.length;
  lobbyPlayersGrid.innerHTML = '';
  if (lobbyTargetDisplay) lobbyTargetDisplay.textContent = `${state.targetPoints} Pts`;
  if (lobbyModeDisplay) {
    lobbyModeDisplay.textContent = state.gameMode === 'buzzer' ? 'Buzzer Mode' : 'Type-First';
  }

  // Toggle Team Selector visibility
  if (state.isTeamMode) {
    teamSelectorZone.classList.remove('hidden');
  } else {
    teamSelectorZone.classList.add('hidden');
  }

  state.players.forEach(p => {
    const tile = document.createElement('div');
    tile.className = `player-tile ${p.isHost ? 'is-host' : ''} ${p.id === socket.id ? 'is-me' : ''}`;

    let kickHtml = '';
    if (state.isHost && p.id !== socket.id) {
      kickHtml = `<button class="kick-player-btn" data-id="${p.id}" title="Kick ${escapeHtml(p.name)}">✕</button>`;
    }

    let teamBadgeHtml = '';
    if (state.isTeamMode) {
      const isJetha = (p.team === 'jetha');
      teamBadgeHtml = `<span class="tile-team-badge ${isJetha ? 'jetha' : 'baburao'}">${isJetha ? '🏢 Jetha' : '🕶️ Baburao'}</span>`;
    }

    tile.innerHTML = `
      ${p.isHost ? '<span class="host-crown-badge">HOST</span>' : ''}
      ${kickHtml}
      <span class="tile-avatar">${p.avatar}</span>
      <span class="tile-name">${escapeHtml(p.name)}</span>
      ${teamBadgeHtml}
    `;

    // Bind kick event
    const kickBtn = tile.querySelector('.kick-player-btn');
    if (kickBtn) {
      kickBtn.addEventListener('click', e => {
        e.stopPropagation();
        if (confirm(`Remove ${p.name} from the lobby?`)) {
          socket.emit('kick_player', {
            roomCode: state.roomCode,
            targetSocketId: p.id
          });
        }
      });
    }

    lobbyPlayersGrid.appendChild(tile);
  });

  if (state.isHost) {
    hostControls.classList.remove('hidden');
    playerWaitingNotice.classList.add('hidden');
  } else {
    hostControls.classList.add('hidden');
    playerWaitingNotice.classList.remove('hidden');
  }
}

// Match Started or Restarted: Revive Paisa Double Token (1 use per match)
socket.on('game_started', data => {
  state.paisaDoubleRemaining = 1;
  state.paisaDoubleActive = false;
  if (paisaDoubleBtn) {
    paisaDoubleBtn.classList.remove('active', 'disabled');
    paisaDoubleBtn.disabled = false;
  }
  if (paisaDoubleLabel) {
    paisaDoubleLabel.textContent = '💰 Paisa Double (1 Token Left)';
  }
  if (data && data.targetPoints) updateTargetPointsUI(data.targetPoints);
  if (data && data.leaderboard) {
    state.players = data.leaderboard;
    renderLeaderboardUpdates();
  }
});

socket.on('new_question', q => {
  state.currentQuestion = q;
  state.players = q.leaderboard;
  state.gameMode = q.gameMode || 'type_first';
  state.isTeamMode = !!q.isTeamMode;
  state.teamScores = q.teamScores || { jetha: 0, baburao: 0 };
  state.isBuzzerClaimant = false;
  state.isBuzzerLockedOut = false;

  // Sync Paisa Double button state
  if (paisaDoubleBtn && paisaDoubleLabel) {
    if (state.paisaDoubleActive) {
      paisaDoubleBtn.classList.add('active');
      paisaDoubleBtn.classList.remove('disabled');
      paisaDoubleBtn.disabled = false;
      paisaDoubleLabel.textContent = '💰 Paisa Double ACTIVE (+2 / -2 pts)';
    } else if (state.paisaDoubleRemaining > 0) {
      paisaDoubleBtn.classList.remove('active', 'disabled');
      paisaDoubleBtn.disabled = false;
      paisaDoubleLabel.textContent = '💰 Paisa Double (1 Token Left)';
    } else {
      paisaDoubleBtn.classList.add('disabled');
      paisaDoubleBtn.classList.remove('active');
      paisaDoubleBtn.disabled = true;
      paisaDoubleLabel.textContent = '💰 Paisa Double (Used)';
    }
  }

  if (q.targetPoints) updateTargetPointsUI(q.targetPoints);

  roundRevealModal.classList.add('hidden');
  pointTableModal.classList.add('hidden');
  feedbackBanner.classList.add('hidden');
  typoBanner.classList.add('hidden');
  smartHintBox.classList.add('hidden');

  switchScreen('game');

  categoryPill.textContent = q.category;
  questionPrompt.textContent = q.question;

  // Mode Status Badge
  modeStatusBadge.textContent = state.gameMode === 'buzzer' ? '🔔 Buzzer Mode' : '⌨️ Type-First';

  // Team Score Banner
  if (state.isTeamMode) {
    teamScoreBanner.classList.remove('hidden');
    teamJethaScore.textContent = state.teamScores.jetha || 0;
    teamBaburaoScore.textContent = state.teamScores.baburao || 0;
  } else {
    teamScoreBanner.classList.add('hidden');
  }

  // Hot Streak Badge
  const me = state.players.find(p => p.id === socket.id);
  if (me && me.streak >= 2) {
    hotStreakBadge.textContent = `🔥 ${me.streak} Streak!`;
    hotStreakBadge.classList.remove('hidden');
  } else {
    hotStreakBadge.classList.add('hidden');
  }

  // Setup Buzzer or Type-First Input
  if (state.gameMode === 'buzzer') {
    buzzerZone.classList.remove('hidden');
    buzzerStatusCard.classList.add('hidden');
    bigBuzzBtn.disabled = false;
    bigBuzzBtn.style.opacity = '1';

    // Disable input until player claims buzzer
    answerInput.value = '';
    answerInput.disabled = true;
    submitAnswerBtn.disabled = true;
    answerInput.placeholder = 'Hit 🔔 BUZZ first to answer!';
  } else {
    buzzerZone.classList.add('hidden');
    answerInput.value = '';
    answerInput.disabled = false;
    submitAnswerBtn.disabled = false;
    answerInput.placeholder = 'Type your answer here...';
    answerInput.focus();
  }

  updateTimerVisual(q.roundTimer || 30, q.roundTimer || 30);

  // Audio Clue Handling
  if (q.audioFile) {
    audioPlayerZone.classList.remove('hidden');
    playCurrentAudioClue();
  } else {
    audioPlayerZone.classList.add('hidden');
    window.soundEngine.stopAllAudio();
  }
});

// Timer Visual Update
socket.on('timer_tick', ({ timeLeft, totalDuration }) => {
  updateTimerVisual(timeLeft, totalDuration || 30);

  if (timeLeft <= 5 && timeLeft > 0) {
    window.soundEngine.playUrgentTick();
  }
});

function updateTimerVisual(seconds, total) {
  timerText.textContent = seconds;
  const max = total || 30;
  const pct = Math.max(0, (seconds / max) * 100);
  timerProgressBar.style.width = `${pct}%`;

  timerCircle.classList.remove('warning', 'danger');
  timerProgressBar.classList.remove('danger');

  if (seconds <= 5) {
    timerCircle.classList.add('danger');
    timerProgressBar.classList.add('danger');
  } else if (seconds <= 10) {
    timerCircle.classList.add('warning');
  }
}

// Smart Letter Hint at Half-Time
socket.on('reveal_hint', ({ hint }) => {
  if (hint && smartHintBox && smartHintText) {
    smartHintText.textContent = hint;
    smartHintBox.classList.remove('hidden');
  }
});

// ==========================================
// BUZZER MODE CLIENT HANDLERS
// ==========================================

bigBuzzBtn.addEventListener('click', () => {
  if (state.isBuzzerLockedOut) return;
  window.soundEngine.init();
  socket.emit('hit_buzzer', { roomCode: state.roomCode });
});

// A player claimed the buzzer
socket.on('buzzer_claimed', data => {
  window.soundEngine.playBuzzerHit();

  buzzerStatusCard.classList.remove('hidden');
  buzzerClaimantAvatar.textContent = data.playerAvatar;
  buzzerClaimantName.textContent = data.playerName;
  buzzerCountdownSec.textContent = data.countdown;

  bigBuzzBtn.disabled = true;
  bigBuzzBtn.style.opacity = '0.4';

  if (data.playerId === socket.id) {
    state.isBuzzerClaimant = true;
    answerInput.disabled = false;
    submitAnswerBtn.disabled = false;
    answerInput.placeholder = '⚡ You claimed buzzer! Type answer now!';
    answerInput.focus();
  } else {
    state.isBuzzerClaimant = false;
    answerInput.disabled = true;
    submitAnswerBtn.disabled = true;
    answerInput.placeholder = `${data.playerName} buzzed! Waiting...`;
  }
});

socket.on('buzzer_tick', ({ countdown, playerId }) => {
  buzzerCountdownSec.textContent = countdown;
});

// Buzzer failed (wrong answer or timeout)
socket.on('buzzer_failed', data => {
  window.soundEngine.playBuzzerFail();
  buzzerStatusCard.classList.add('hidden');

  if (data.leaderboard) {
    state.players = data.leaderboard;
    renderLeaderboardUpdates();
  }

  if (data.teamScores) {
    state.teamScores = data.teamScores;
    teamJethaScore.textContent = data.teamScores.jetha || 0;
    teamBaburaoScore.textContent = data.teamScores.baburao || 0;
  }

  if (data.playerId === socket.id) {
    state.isBuzzerLockedOut = true;
    state.isBuzzerClaimant = false;
    bigBuzzBtn.disabled = true;
    bigBuzzBtn.style.opacity = '0.3';
    answerInput.disabled = true;
    submitAnswerBtn.disabled = true;
    feedbackText.textContent = `❌ ${data.reason || 'Buzzer failed! (-1 pt)'}`;
    feedbackBanner.classList.remove('hidden');
  } else {
    // Unlock buzzer for remaining players
    if (!state.isBuzzerLockedOut) {
      bigBuzzBtn.disabled = false;
      bigBuzzBtn.style.opacity = '1';
    }
  }
});

// ==========================================
// PAISA DOUBLE COMEBACK TOKEN
// ==========================================

paisaDoubleBtn.addEventListener('click', () => {
  if (state.paisaDoubleRemaining <= 0 || state.paisaDoubleActive) return;
  window.soundEngine.init();

  if (confirm('Activate "25 Din Mein Paisa Double"?\n\n+2 Points if you answer correctly first!\n-2 Points penalty if wrong or timeout!')) {
    socket.emit('activate_paisa_double', { roomCode: state.roomCode });
  }
});

socket.on('paisa_double_confirmed', data => {
  state.paisaDoubleRemaining = 0;
  state.paisaDoubleActive = true;

  paisaDoubleBtn.classList.add('active');
  paisaDoubleLabel.textContent = '💰 Paisa Double ACTIVE (+2 / -2 pts)';
  window.soundEngine.playLobbyTest();
});

// ==========================================
// MEME SOUNDBOARD & TAUNTS
// ==========================================

if (openTauntModalBtn) {
  openTauntModalBtn.addEventListener('click', () => {
    if (tauntModal) tauntModal.classList.remove('hidden');
  });
}

if (closeTauntModalBtn) {
  closeTauntModalBtn.addEventListener('click', () => {
    if (tauntModal) tauntModal.classList.add('hidden');
  });
}

if (dismissTauntModalBtn) {
  dismissTauntModalBtn.addEventListener('click', () => {
    if (tauntModal) tauntModal.classList.add('hidden');
  });
}

document.querySelectorAll('.in-game-taunt-pill, .taunt-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const tauntId = btn.dataset.taunt;
    if (!tauntId) return;
    window.soundEngine.init();
    socket.emit('send_meme_taunt', {
      roomCode: state.roomCode,
      tauntId
    });
    if (tauntModal) tauntModal.classList.add('hidden');
  });
});

// Broadcasted Taunt
socket.on('meme_taunt_broadcast', data => {
  // Play sound
  window.soundEngine.playMemeTaunt(data.audioUrl);

  // Show floating toast
  tauntToastAvatar.textContent = data.playerAvatar;
  tauntToastSender.textContent = data.playerName;
  tauntToastQuote.textContent = `"${data.label}"`;
  tauntToast.classList.remove('hidden');

  setTimeout(() => {
    tauntToast.classList.add('hidden');
  }, 3200);
});

// ==========================================
// LIVE BREAKING-NEWS TICKER
// ==========================================

socket.on('ticker_message', ({ text }) => {
  if (tickerContent && text) {
    tickerContent.textContent = text;
  }
  const revealTickerText = document.getElementById('revealTickerText');
  if (revealTickerText && text) {
    revealTickerText.textContent = text;
  }
});

// Typo Protection Alert
socket.on('typo_warning', ({ message }) => {
  typoText.textContent = message;
  typoBanner.classList.remove('hidden');
  window.soundEngine.playUrgentTick();
});

// ==========================================
// SUBMIT ANSWER
// ==========================================

answerForm.addEventListener('submit', e => {
  e.preventDefault();
  submitCurrentAnswer();
});

function submitCurrentAnswer() {
  const ans = answerInput.value.trim();
  if (!ans) return;

  socket.emit('submit_answer', {
    roomCode: state.roomCode,
    answer: ans
  });

  feedbackBanner.classList.add('hidden');
  typoBanner.classList.add('hidden');
}

socket.on('answer_feedback', data => {
  feedbackText.textContent = data.message;
  feedbackBanner.classList.remove('hidden');
  window.soundEngine.playWrong();
});

// Audio Playback
function playCurrentAudioClue() {
  if (!state.currentQuestion || !state.currentQuestion.audioFile) return;

  audioPlayLabel.textContent = 'Playing Audio...';
  audioPlayIcon.textContent = '🔊';

  window.soundEngine.playAudioFile(state.currentQuestion.audioFile, () => {
    audioPlayLabel.textContent = 'Replay Real Audio';
    audioPlayIcon.textContent = '🔄';
  });
}

playAudioBtn.addEventListener('click', () => {
  window.soundEngine.init();
  playCurrentAudioClue();
});

// Virtual Touch Keypad
document.querySelectorAll('.key-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const key = btn.dataset.key;
    if (key === 'BACKSPACE') {
      answerInput.value = answerInput.value.slice(0, -1);
    } else if (key === 'CLEAR') {
      answerInput.value = '';
    } else if (key === 'SPACE') {
      answerInput.value += ' ';
    } else {
      answerInput.value += key;
    }
    answerInput.focus();
  });
});

// ==========================================
// ROUND REVEAL & POINT TABLE
// ==========================================

socket.on('round_reveal', data => {
  state.players = data.leaderboard;
  window.soundEngine.stopAllAudio();
  renderLeaderboardUpdates();

  if (data.teamScores) {
    state.teamScores = data.teamScores;
    teamJethaScore.textContent = data.teamScores.jetha || 0;
    teamBaburaoScore.textContent = data.teamScores.baburao || 0;
  }

  // Reset Paisa Double visual state for next round
  if (state.paisaDoubleActive) {
    state.paisaDoubleActive = false;
    paisaDoubleBtn.classList.remove('active');
    paisaDoubleBtn.classList.add('disabled');
    paisaDoubleLabel.textContent = '💰 Paisa Double (Used)';
  }

  if (data.winner) {
    revealWinnerSection.classList.remove('hidden');
    revealWinnerAvatar.textContent = data.winner.avatar;
    revealWinnerName.textContent = data.winner.name;
    revealPointDelta.textContent = `+${data.winner.pointsEarned || 1} Point${data.winner.pointsEarned > 1 ? 's' : ''}`;

    window.soundEngine.playCorrect();

    if (data.winner.id === socket.id && window.confetti) {
      window.confetti({ particleCount: 75, spread: 60, origin: { y: 0.6 } });
    }
  } else {
    revealWinnerSection.classList.add('hidden');
    window.soundEngine.playWrong();
  }

  revealCorrectAnswer.textContent = data.correctAnswer;

  const revealTickerText = document.getElementById('revealTickerText');
  if (revealTickerText && tickerContent && tickerContent.textContent) {
    revealTickerText.textContent = tickerContent.textContent;
  }

  roundRevealModal.classList.remove('hidden');

  let nextCount = 5;
  nextCountdownSec.textContent = nextCount;
  const interval = setInterval(() => {
    nextCount -= 1;
    if (nextCount >= 0) {
      nextCountdownSec.textContent = nextCount;
    } else {
      clearInterval(interval);
    }
  }, 1000);
});

// Render Leaderboard updates
function renderLeaderboardUpdates() {
  const me = state.players.find(p => p.id === socket.id);
  if (me) {
    state.myScore = me.score;
    myScoreBadge.textContent = `${me.score} pts`;
  }
}

// Point Table Modal
function renderPointTable(players) {
  pointTableList.innerHTML = '';
  const sorted = [...players].sort((a, b) => b.score - a.score);
  const target = state.targetPoints || 10;

  if (state.isTeamMode) {
    modalTeamScores.classList.remove('hidden');
    modalJethaScore.textContent = `${state.teamScores.jetha || 0} pts`;
    modalBaburaoScore.textContent = `${state.teamScores.baburao || 0} pts`;
  } else {
    modalTeamScores.classList.add('hidden');
  }

  sorted.forEach((p, index) => {
    const isFirst = index === 0 && p.score > 0;
    const rankLabel = index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : `#${index + 1}`;
    const progressPercent = Math.min(100, (p.score / target) * 100);

    const row = document.createElement('div');
    row.className = `pt-row ${isFirst ? 'is-first' : ''}`;
    row.innerHTML = `
      <span class="pt-rank">${rankLabel}</span>
      <span class="pt-avatar">${p.avatar}</span>
      <div class="pt-info">
        <div class="pt-name-row">
          <span class="pt-name">${escapeHtml(p.name)} ${p.id === socket.id ? '(You)' : ''}</span>
          <span class="pt-score">${p.score} / ${target} pts</span>
        </div>
        <div class="pt-progress-bg">
          <div class="pt-progress-bar" style="width: ${progressPercent}%;"></div>
        </div>
      </div>
    `;
    pointTableList.appendChild(row);
  });
}

openPointTableBtn.addEventListener('click', () => {
  socket.emit('get_point_table', { roomCode: state.roomCode }, res => {
    if (res && res.leaderboard) {
      if (res.targetPoints) updateTargetPointsUI(res.targetPoints);
      renderPointTable(res.leaderboard);
      pointTableModal.classList.remove('hidden');
    }
  });
});

if (victoryPointTableBtn) {
  victoryPointTableBtn.addEventListener('click', () => {
    socket.emit('get_point_table', { roomCode: state.roomCode }, res => {
      if (res && res.leaderboard) {
        if (res.targetPoints) updateTargetPointsUI(res.targetPoints);
        renderPointTable(res.leaderboard);
        pointTableModal.classList.remove('hidden');
      }
    });
  });
}

closePointTableBtn.addEventListener('click', () => pointTableModal.classList.add('hidden'));
dismissPointTableBtn.addEventListener('click', () => pointTableModal.classList.add('hidden'));

// ==========================================
// GAME OVER & AWARDS
// ==========================================

socket.on('game_over', data => {
  roundRevealModal.classList.add('hidden');
  switchScreen('victory');

  if (data.isTeamMode) {
    victoryHeaderTitle.textContent = 'TEAM BATTLE CHAMPIONS!';
    winnerAvatar.textContent = data.winningTeam === 'jetha' ? '🏢' : '🕶️';
    winnerName.textContent = data.winningTeamName;
    winnerPointsBadge.textContent = 'TARGET REACHED!';
  } else {
    victoryHeaderTitle.textContent = 'MATCH WINNER!';
    winnerAvatar.textContent = data.winner.avatar;
    winnerName.textContent = data.winner.name;
    winnerPointsBadge.textContent = `${data.targetPoints || 10} POINTS WON!`;
  }

  // Populate Post-Game Awards
  if (data.awards) {
    const a = data.awards;
    if (a.mvp) awardMvpName.textContent = `${a.mvp.avatar} ${a.mvp.name} (${a.mvp.score} pts)`;
    if (a.speedDemon) awardSpeedName.textContent = `${a.speedDemon.avatar} ${a.speedDemon.name} (${a.speedDemon.time})`;
    if (a.sniper) awardSniperName.textContent = `${a.sniper.avatar} ${a.sniper.name} (${a.sniper.accuracy})`;
    if (a.streakKing) awardStreakName.textContent = `${a.streakKing.avatar} ${a.streakKing.name} (${a.streakKing.streak} wins)`;
  }

  window.soundEngine.playWinFanfare();
  if (window.confetti) {
    window.confetti({ particleCount: 160, spread: 80, origin: { y: 0.5 } });
  }

  if (state.isHost) {
    playAgainBtn.classList.remove('hidden');
    victoryWaitingNotice.classList.add('hidden');
  } else {
    playAgainBtn.classList.add('hidden');
    victoryWaitingNotice.classList.remove('hidden');
  }
});

playAgainBtn.addEventListener('click', () => {
  if (state.isHost) {
    socket.emit('start_game', {
      roomCode: state.roomCode,
      targetPoints: state.targetPoints
    });
  }
});

// ==========================================
// SOCKET GENERAL EVENTS
// ==========================================

socket.on('connect', () => {
  state.socketId = socket.id;
});

socket.on('game_settings_updated', data => {
  if (data.targetPoints) updateTargetPointsUI(data.targetPoints);
  if (data.selectedCategory) state.selectedCategory = data.selectedCategory;
  if (data.timerDuration) state.timerDuration = data.timerDuration;
  if (data.gameMode) state.gameMode = data.gameMode;
  if (typeof data.isTeamMode === 'boolean') state.isTeamMode = data.isTeamMode;
  if (data.teamScores) state.teamScores = data.teamScores;
});

socket.on('room_update', data => {
  state.players = data.players;
  state.roomCode = data.roomCode;
  if (data.targetPoints) updateTargetPointsUI(data.targetPoints);
  if (data.selectedCategory) state.selectedCategory = data.selectedCategory;
  if (data.timerDuration) state.timerDuration = data.timerDuration;
  if (data.gameMode) state.gameMode = data.gameMode;
  if (typeof data.isTeamMode === 'boolean') state.isTeamMode = data.isTeamMode;
  if (data.teamScores) state.teamScores = data.teamScores;

  renderLeaderboardUpdates();

  if (state.status === 'lobby') {
    updateLobbyUI();
  }
});

socket.on('kicked_from_room', data => {
  alert(data.message || 'You were removed from the room.');
  window.location.reload();
});

function escapeHtml(str) {
  if (!str) return '';
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
