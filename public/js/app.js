/**
 * Fun Guessing - Clean, Secure Frontend Logic
 * Strictly minimal display with zero spoiler leaks.
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
  currentQuestion: null,
  myScore: 0
};

// DOM Elements
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

// Auth
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

// Lobby
const lobbyCodeText = document.getElementById('lobbyCodeText');
const copyLobbyCodeBtn = document.getElementById('copyLobbyCodeBtn');
const playerCount = document.getElementById('playerCount');
const lobbyPlayersGrid = document.getElementById('lobbyPlayersGrid');
const hostControls = document.getElementById('hostControls');
const startGameBtn = document.getElementById('startGameBtn');
const playerWaitingNotice = document.getElementById('playerWaitingNotice');
const targetPointsPreview = document.getElementById('targetPointsPreview');
const lobbyTargetDisplay = document.getElementById('lobbyTargetDisplay');
const customTargetInput = document.getElementById('customTargetInput');

// Game Arena
const gameTargetPoints = document.getElementById('gameTargetPoints');
const categoryPill = document.getElementById('categoryPill');
const timerText = document.getElementById('timerText');
const timerCircle = document.getElementById('timerCircle');
const timerProgressBar = document.getElementById('timerProgressBar');
const questionPrompt = document.getElementById('questionPrompt');
const audioPlayerZone = document.getElementById('audioPlayerZone');
const visualizerCanvas = document.getElementById('visualizerCanvas');
const playAudioBtn = document.getElementById('playAudioBtn');
const audioPlayIcon = document.getElementById('audioPlayIcon');
const audioPlayLabel = document.getElementById('audioPlayLabel');

// Input & Keypad
const answerForm = document.getElementById('answerForm');
const answerInput = document.getElementById('answerInput');
const submitAnswerBtn = document.getElementById('submitAnswerBtn');
const feedbackBanner = document.getElementById('feedbackBanner');
const feedbackText = document.getElementById('feedbackText');

// Modals
const roundRevealModal = document.getElementById('roundRevealModal');
const revealWinnerSection = document.getElementById('revealWinnerSection');
const revealWinnerAvatar = document.getElementById('revealWinnerAvatar');
const revealWinnerName = document.getElementById('revealWinnerName');
const revealCorrectAnswer = document.getElementById('revealCorrectAnswer');
const nextCountdownSec = document.getElementById('nextCountdownSec');

const pointTableModal = document.getElementById('pointTableModal');
const closePointTableBtn = document.getElementById('closePointTableBtn');
const dismissPointTableBtn = document.getElementById('dismissPointTableBtn');
const pointTableList = document.getElementById('pointTableList');

// Victory
const winnerAvatar = document.getElementById('winnerAvatar');
const winnerName = document.getElementById('winnerName');
const winnerPointsBadge = document.getElementById('winnerPointsBadge');
const playAgainBtn = document.getElementById('playAgainBtn');
const victoryPointTableBtn = document.getElementById('victoryPointTableBtn');
const victoryWaitingNotice = document.getElementById('victoryWaitingNotice');

// Setup
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

// Copy Invite Link (copies full direct clickable URL)
function copyRoomCode(code) {
  const inviteUrl = `${window.location.origin}/?room=${encodeURIComponent(code)}`;
  navigator.clipboard.writeText(inviteUrl).then(() => {
    const original = copyLobbyCodeBtn.textContent;
    copyLobbyCodeBtn.textContent = 'Link Copied!';
    setTimeout(() => {
      copyLobbyCodeBtn.textContent = original;
    }, 1500);
  }).catch(() => {
    alert(`Invite Link: ${inviteUrl}`);
  });
}

copyLobbyCodeBtn.addEventListener('click', () => copyRoomCode(state.roomCode));
headerRoomCode.addEventListener('click', () => copyRoomCode(state.roomCode));

// Switch Screens
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

// Target Points UI Updater
function updateTargetPointsUI(pts) {
  const target = parseInt(pts, 10) || 10;
  state.targetPoints = target;

  if (targetPointsPreview) targetPointsPreview.textContent = `${target} Points`;
  if (lobbyTargetDisplay) lobbyTargetDisplay.textContent = `${target} Points`;
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

// Host selects Target Points
document.querySelectorAll('.target-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    if (!state.isHost) return;
    const pts = parseInt(btn.dataset.pts, 10);
    if (customTargetInput) customTargetInput.value = '';
    updateTargetPointsUI(pts);
    socket.emit('set_target_points', {
      roomCode: state.roomCode,
      targetPoints: pts
    });
  });
});

if (customTargetInput) {
  customTargetInput.addEventListener('input', () => {
    if (!state.isHost) return;
    const val = parseInt(customTargetInput.value, 10);
    if (!isNaN(val) && val >= 1 && val <= 100) {
      updateTargetPointsUI(val);
      socket.emit('set_target_points', {
        roomCode: state.roomCode,
        targetPoints: val
      });
    }
  });
}

// Create Room
createRoomBtn.addEventListener('click', () => {
  const name = playerNameInput.value.trim() || 'Player 1';
  state.playerName = name;
  window.soundEngine.init();

  socket.emit('create_room', { playerName: name, avatar: state.avatar, targetPoints: state.targetPoints }, response => {
    if (response.success) {
      state.roomCode = response.roomCode;
      state.isHost = true;
      state.players = response.players;
      if (response.targetPoints) updateTargetPointsUI(response.targetPoints);

      lobbyCodeText.textContent = state.roomCode;
      updateLobbyUI();
      switchScreen('lobby');
    }
  });
});

// Join Room
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

  socket.emit('join_room', { roomCode: code, playerName: name, avatar: state.avatar }, response => {
    if (response.success) {
      state.roomCode = response.roomCode;
      state.isHost = response.isHost;
      state.players = response.players;
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
  socket.emit('start_game', { roomCode: state.roomCode, targetPoints: state.targetPoints });
});

// Update Lobby UI
function updateLobbyUI() {
  playerCount.textContent = state.players.length;
  lobbyPlayersGrid.innerHTML = '';
  if (lobbyTargetDisplay) lobbyTargetDisplay.textContent = `${state.targetPoints} Points`;

  state.players.forEach(p => {
    const tile = document.createElement('div');
    tile.className = `player-tile ${p.isHost ? 'is-host' : ''} ${p.id === socket.id ? 'is-me' : ''}`;

    tile.innerHTML = `
      ${p.isHost ? '<span class="host-crown-badge">HOST</span>' : ''}
      <span class="tile-avatar">${p.avatar}</span>
      <span class="tile-name">${escapeHtml(p.name)}</span>
    `;
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

// Audio Player
function playCurrentAudioClue() {
  if (!state.currentQuestion || !state.currentQuestion.audioFile) return;

  audioPlayLabel.textContent = 'Playing...';
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

// Submit Answer
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
}

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

// Point Table Modal
function renderPointTable(players) {
  pointTableList.innerHTML = '';
  const sorted = [...players].sort((a, b) => b.score - a.score);
  const target = state.targetPoints || 10;

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

// Socket Events
socket.on('connect', () => {
  state.socketId = socket.id;
});

socket.on('target_points_updated', data => {
  if (data.targetPoints) {
    updateTargetPointsUI(data.targetPoints);
  }
});

socket.on('room_update', data => {
  state.players = data.players;
  state.roomCode = data.roomCode;
  if (data.targetPoints) {
    updateTargetPointsUI(data.targetPoints);
  }

  const me = data.players.find(p => p.id === socket.id);
  if (me) {
    state.myScore = me.score;
    myScoreBadge.textContent = `${me.score} pts`;
  }

  if (state.status === 'lobby') {
    updateLobbyUI();
  }
});

socket.on('game_started', data => {
  state.players = data.leaderboard;
  if (data.targetPoints) {
    updateTargetPointsUI(data.targetPoints);
  }
  switchScreen('game');
});

socket.on('new_question', q => {
  state.currentQuestion = q;
  state.players = q.leaderboard;
  if (q.targetPoints) {
    updateTargetPointsUI(q.targetPoints);
  }

  roundRevealModal.classList.add('hidden');
  pointTableModal.classList.add('hidden');
  feedbackBanner.classList.add('hidden');

  switchScreen('game');

  categoryPill.textContent = q.category;
  questionPrompt.textContent = q.question;

  answerInput.value = '';
  answerInput.disabled = false;
  submitAnswerBtn.disabled = false;
  answerInput.focus();

  updateTimerVisual(30);

  // ONLY play audio if this question actually needs audio!
  if (q.audioFile) {
    audioPlayerZone.classList.remove('hidden');
    playCurrentAudioClue();
  } else {
    audioPlayerZone.classList.add('hidden');
    window.soundEngine.stopAllAudio();
  }
});

socket.on('timer_tick', ({ timeLeft }) => {
  updateTimerVisual(timeLeft);

  if (timeLeft <= 5 && timeLeft > 0) {
    window.soundEngine.playUrgentTick();
  } else if (timeLeft > 0 && timeLeft % 5 === 0) {
    window.soundEngine.playTick();
  }
});

function updateTimerVisual(seconds) {
  timerText.textContent = seconds;
  const pct = Math.max(0, (seconds / 30) * 100);
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

socket.on('answer_feedback', data => {
  feedbackText.textContent = data.message;
  feedbackBanner.classList.remove('hidden');
  window.soundEngine.playWrong();
});

// Round Reveal (Clean: Shows who scored + Correct Answer, or ONLY the Correct Answer if time expired)
socket.on('round_reveal', data => {
  state.players = data.leaderboard;
  window.soundEngine.stopAllAudio();

  const me = data.leaderboard.find(p => p.id === socket.id);
  if (me) {
    state.myScore = me.score;
    myScoreBadge.textContent = `${me.score} pts`;
  }

  if (data.winner) {
    revealWinnerSection.classList.remove('hidden');
    revealWinnerAvatar.textContent = data.winner.avatar;
    revealWinnerName.textContent = data.winner.name;

    window.soundEngine.playCorrect();

    if (data.winner.id === socket.id && window.confetti) {
      window.confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
    }
  } else {
    // If no one gave correct answer: strictly hide winner section, ONLY show correct answer!
    revealWinnerSection.classList.add('hidden');
    window.soundEngine.playWrong();
  }

  revealCorrectAnswer.textContent = data.correctAnswer;
  roundRevealModal.classList.remove('hidden');

  let nextCount = 3;
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

// Match Game Over (Winner reached target points)
socket.on('game_over', data => {
  roundRevealModal.classList.add('hidden');
  switchScreen('victory');

  winnerAvatar.textContent = data.winner.avatar;
  winnerName.textContent = data.winner.name;

  const ptsWon = data.targetPoints || state.targetPoints || 10;
  if (winnerPointsBadge) {
    winnerPointsBadge.textContent = `${ptsWon} POINTS WON!`;
  }

  window.soundEngine.playWinFanfare();
  if (window.confetti) {
    window.confetti({ particleCount: 150, spread: 80, origin: { y: 0.5 } });
  }

  if (state.isHost) {
    playAgainBtn.classList.remove('hidden');
    if (victoryWaitingNotice) victoryWaitingNotice.classList.add('hidden');
  } else {
    playAgainBtn.classList.add('hidden');
    if (victoryWaitingNotice) victoryWaitingNotice.classList.remove('hidden');
  }
});

playAgainBtn.addEventListener('click', () => {
  if (state.isHost) {
    socket.emit('start_game', { roomCode: state.roomCode, targetPoints: state.targetPoints });
  }
});

function escapeHtml(str) {
  if (!str) return '';
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
