const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');
const cors = require('cors');

const questionsBank = require('./data/questions');
const audioQuestions = questionsBank.filter(q => Boolean(q.audioFile));
const textQuestions = questionsBank.filter(q => !q.audioFile);
console.log(`📚 Loaded ${questionsBank.length} questions (${audioQuestions.length} real audio clips, ${textQuestions.length} text trivia).`);

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Rooms State Memory
const rooms = {};

// Helper: Generate unique 6-character alphanumeric Team Code
function generateRoomCode() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = '';
  do {
    code = '';
    for (let i = 0; i < 6; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
  } while (rooms[code]);
  return code;
}

// Helper: Sanitize player name
function sanitizeName(name) {
  if (!name) return 'Player';
  return String(name)
    .replace(/[<>'"]/g, '')
    .trim()
    .slice(0, 14) || 'Player';
}

// Helper: Normalize answer strings for tolerant matching
function normalizeAnswer(str) {
  if (!str) return '';
  return str
    .toLowerCase()
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?"'’]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

// Helper: Levenshtein distance for Typo Protection ("Almost! Check spelling")
function levenshteinDistance(a, b) {
  if (!a || !b) return (a || '').length + (b || '').length;
  const matrix = [];
  for (let i = 0; i <= b.length; i++) matrix[i] = [i];
  for (let j = 0; j <= a.length; j++) matrix[0][j] = j;

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }
  return matrix[b.length][a.length];
}

// Check if user answer is a close typo (distance 1 or 2)
function checkTypoProximity(userInput, acceptableAnswers, correctAnswer) {
  const cleanInput = normalizeAnswer(userInput);
  if (!cleanInput || cleanInput.length < 3) return false;

  const targetList = [correctAnswer, ...acceptableAnswers].map(a => normalizeAnswer(a));
  for (const target of targetList) {
    if (Math.abs(cleanInput.length - target.length) <= 2) {
      const dist = levenshteinDistance(cleanInput, target);
      if (dist === 1 || dist === 2) return true;
    }
  }
  return false;
}

// Helper: Check if player's input matches any acceptable answer
function checkAnswerMatch(userInput, acceptableAnswers, correctAnswer) {
  const cleanInput = normalizeAnswer(userInput);
  if (!cleanInput) return false;

  const targetList = [correctAnswer, ...acceptableAnswers].map(a => normalizeAnswer(a));

  for (const target of targetList) {
    if (cleanInput === target) return true;
    if (target.length > 3 && cleanInput.includes(target)) return true;
    if (cleanInput.length > 3 && target.includes(cleanInput)) return true;
  }
  return false;
}

// Helper: Generate Smart Letter Hint (reveals first letter of each word + underscores)
function generateLetterHint(answer) {
  if (!answer) return '';
  const words = String(answer).trim().split(/\s+/);
  return words.map(w => {
    if (w.length <= 1) return w.toUpperCase();
    const firstChar = w.charAt(0).toUpperCase();
    const blanks = '_ '.repeat(w.length - 1).trim();
    return `${firstChar} ${blanks}`;
  }).join('   ');
}

// Helper: Get sanitized leaderboard for a room
function getLeaderboard(room) {
  return Object.values(room.players)
    .map(p => ({
      id: p.id,
      name: p.name,
      avatar: p.avatar,
      score: p.score,
      team: p.team || 'jetha',
      streak: p.streak || 0,
      paisaDoubleRemaining: p.paisaDoubleRemaining !== undefined ? p.paisaDoubleRemaining : 1,
      paisaDoubleActive: !!p.paisaDoubleActive,
      isHost: p.id === room.hostSocketId
    }))
    .sort((a, b) => b.score - a.score);
}

// Helper: Compute End-of-Match Awards
function computeMatchAwards(room) {
  const players = Object.values(room.players);
  if (players.length === 0) return {};

  const mvp = [...players].sort((a, b) => b.score - a.score)[0];
  const speedCandidates = players.filter(p => p.fastestBuzzTime && p.fastestBuzzTime < 900);
  const speedDemon = speedCandidates.length > 0
    ? [...speedCandidates].sort((a, b) => a.fastestBuzzTime - b.fastestBuzzTime)[0]
    : mvp;

  const accuracyCandidates = players.filter(p => p.correctCount > 0);
  const sniper = accuracyCandidates.length > 0
    ? [...accuracyCandidates].sort((a, b) => {
        const accA = a.correctCount / (a.correctCount + a.wrongCount);
        const accB = b.correctCount / (b.correctCount + b.wrongCount);
        return accB - accA;
      })[0]
    : mvp;

  const streakCandidates = players.filter(p => (p.maxStreak || 0) > 0);
  const streakKing = streakCandidates.length > 0
    ? [...streakCandidates].sort((a, b) => (b.maxStreak || 0) - (a.maxStreak || 0))[0]
    : mvp;

  return {
    mvp: mvp ? { id: mvp.id, name: mvp.name, avatar: mvp.avatar, score: mvp.score } : null,
    speedDemon: speedDemon ? { id: speedDemon.id, name: speedDemon.name, avatar: speedDemon.avatar, time: speedDemon.fastestBuzzTime ? speedDemon.fastestBuzzTime.toFixed(1) + 's' : '⚡' } : null,
    sniper: sniper ? { id: sniper.id, name: sniper.name, avatar: sniper.avatar, accuracy: `${Math.round((sniper.correctCount / (sniper.correctCount + sniper.wrongCount || 1)) * 100)}%` } : null,
    streakKing: streakKing ? { id: streakKing.id, name: streakKing.name, avatar: streakKing.avatar, streak: streakKing.maxStreak || streakKing.streak || 1 } : null
  };
}

// Socket.io Connection Logic
io.on('connection', socket => {
  // 1. Host Creates Room
  socket.on('create_room', ({ playerName, avatar, targetPoints, selectedCategory, timerDuration, gameMode, isTeamMode }, callback) => {
    const safeName = sanitizeName(playerName);
    const roomCode = generateRoomCode();
    const initialTarget = parseInt(targetPoints, 10);
    const validTarget = (!isNaN(initialTarget) && initialTarget >= 1 && initialTarget <= 100) ? initialTarget : 10;

    rooms[roomCode] = {
      code: roomCode,
      hostSocketId: socket.id,
      players: {
        [socket.id]: {
          id: socket.id,
          name: safeName,
          avatar: avatar || '🦁',
          score: 0,
          team: 'jetha',
          streak: 0,
          maxStreak: 0,
          paisaDoubleRemaining: 1, // 1 Token per game
          paisaDoubleActive: false,
          fastestBuzzTime: 999,
          correctCount: 0,
          wrongCount: 0,
          lastSubmitTime: 0
        }
      },
      status: 'lobby',
      targetPoints: validTarget,
      selectedCategory: (selectedCategory && ['all', 'tmkoc', 'bollywood', 'cricket', 'audio_only'].includes(selectedCategory)) ? selectedCategory : 'all',
      timerDuration: ([15, 30, 45].includes(parseInt(timerDuration, 10))) ? parseInt(timerDuration, 10) : 30,
      gameMode: (gameMode && ['type_first', 'buzzer'].includes(gameMode)) ? gameMode : 'type_first',
      isTeamMode: Boolean(isTeamMode),
      teamScores: { jetha: 0, baburao: 0 },
      buzzerActivePlayerId: null,
      buzzerCountdown: 10,          // 10 Seconds dedicated buzzer window
      buzzerInterval: null,
      buzzerLockedPlayers: new Set(),
      currentQuestion: null,
      usedQuestionIds: new Set(),
      questionCounter: 0,
      roundTimer: 30,
      questionStartTime: 0,
      timerInterval: null,
      revealTimeout: null,
      roundWinner: null
    };

    socket.join(roomCode);
    socket.roomCode = roomCode;

    const room = rooms[roomCode];
    if (callback) {
      callback({
        success: true,
        roomCode,
        isHost: true,
        targetPoints: room.targetPoints,
        selectedCategory: room.selectedCategory,
        timerDuration: room.timerDuration,
        gameMode: room.gameMode,
        isTeamMode: room.isTeamMode,
        teamScores: room.teamScores,
        players: getLeaderboard(room)
      });
    }

    io.to(roomCode).emit('room_update', {
      roomCode,
      targetPoints: room.targetPoints,
      selectedCategory: room.selectedCategory,
      timerDuration: room.timerDuration,
      gameMode: room.gameMode,
      isTeamMode: room.isTeamMode,
      teamScores: room.teamScores,
      players: getLeaderboard(room),
      status: room.status
    });
  });

  // 2. Player Joins Room with Team Code
  socket.on('join_room', ({ roomCode, playerName, avatar }, callback) => {
    const code = (roomCode || '').toUpperCase().trim();
    const room = rooms[code];

    if (!room) {
      return callback && callback({ success: false, message: 'Invalid Team Code! Room does not exist.' });
    }

    if (Object.keys(room.players).length >= 10) {
      return callback && callback({ success: false, message: 'Room is full! Maximum 10 players allowed.' });
    }

    if (room.status !== 'lobby') {
      return callback && callback({ success: false, message: 'Match is already in progress in this room!' });
    }

    const safeName = sanitizeName(playerName);

    // Auto-balance team assignment
    const jethaCount = Object.values(room.players).filter(p => p.team === 'jetha').length;
    const baburaoCount = Object.values(room.players).filter(p => p.team === 'baburao').length;
    const assignedTeam = jethaCount <= baburaoCount ? 'jetha' : 'baburao';

    room.players[socket.id] = {
      id: socket.id,
      name: safeName,
      avatar: avatar || '🎯',
      score: 0,
      team: assignedTeam,
      streak: 0,
      maxStreak: 0,
      paisaDoubleRemaining: 1, // 1 Token per game
      paisaDoubleActive: false,
      fastestBuzzTime: 999,
      correctCount: 0,
      wrongCount: 0,
      lastSubmitTime: 0
    };

    socket.join(code);
    socket.roomCode = code;

    if (callback) {
      callback({
        success: true,
        roomCode: code,
        isHost: socket.id === room.hostSocketId,
        targetPoints: room.targetPoints || 10,
        selectedCategory: room.selectedCategory,
        timerDuration: room.timerDuration,
        gameMode: room.gameMode,
        isTeamMode: room.isTeamMode,
        teamScores: room.teamScores,
        players: getLeaderboard(room)
      });
    }

    io.to(code).emit('room_update', {
      roomCode: code,
      targetPoints: room.targetPoints || 10,
      selectedCategory: room.selectedCategory,
      timerDuration: room.timerDuration,
      gameMode: room.gameMode,
      isTeamMode: room.isTeamMode,
      teamScores: room.teamScores,
      players: getLeaderboard(room),
      status: room.status
    });

    // Broadcast welcome ticker
    io.to(code).emit('ticker_message', {
      text: `👋 ${safeName} joined the room!`,
      type: 'info'
    });
  });

  // Host configures Match Settings
  socket.on('set_game_settings', ({ roomCode, targetPoints, selectedCategory, timerDuration, gameMode, isTeamMode }) => {
    const room = rooms[roomCode];
    if (!room || socket.id !== room.hostSocketId || room.status !== 'lobby') return;

    if (targetPoints) {
      const pts = parseInt(targetPoints, 10);
      if (!isNaN(pts) && pts >= 1 && pts <= 100) room.targetPoints = pts;
    }

    if (selectedCategory && ['all', 'tmkoc', 'bollywood', 'cricket', 'audio_only'].includes(selectedCategory)) {
      room.selectedCategory = selectedCategory;
    }

    if (timerDuration) {
      const duration = parseInt(timerDuration, 10);
      if ([15, 30, 45].includes(duration)) room.timerDuration = duration;
    }

    if (gameMode && ['type_first', 'buzzer'].includes(gameMode)) {
      room.gameMode = gameMode;
    }

    if (typeof isTeamMode === 'boolean') {
      room.isTeamMode = isTeamMode;
    }

    io.to(roomCode).emit('game_settings_updated', {
      targetPoints: room.targetPoints,
      selectedCategory: room.selectedCategory,
      timerDuration: room.timerDuration,
      gameMode: room.gameMode,
      isTeamMode: room.isTeamMode,
      teamScores: room.teamScores
    });

    io.to(roomCode).emit('room_update', {
      roomCode,
      targetPoints: room.targetPoints,
      selectedCategory: room.selectedCategory,
      timerDuration: room.timerDuration,
      gameMode: room.gameMode,
      isTeamMode: room.isTeamMode,
      teamScores: room.teamScores,
      players: getLeaderboard(room),
      status: room.status
    });
  });

  // Legacy event backward compatibility
  socket.on('set_target_points', ({ roomCode, targetPoints }) => {
    const room = rooms[roomCode];
    if (!room || socket.id !== room.hostSocketId || room.status !== 'lobby') return;
    const pts = parseInt(targetPoints, 10);
    if (!isNaN(pts) && pts >= 1 && pts <= 100) {
      room.targetPoints = pts;
      io.to(roomCode).emit('target_points_updated', { targetPoints: room.targetPoints });
    }
  });

  // Player switches team in Team Mode
  socket.on('join_team', ({ roomCode, team }) => {
    const room = rooms[roomCode];
    if (!room || room.status !== 'lobby') return;
    const player = room.players[socket.id];
    if (!player) return;

    if (team === 'jetha' || team === 'baburao') {
      player.team = team;
      io.to(roomCode).emit('room_update', {
        roomCode,
        targetPoints: room.targetPoints,
        selectedCategory: room.selectedCategory,
        timerDuration: room.timerDuration,
        gameMode: room.gameMode,
        isTeamMode: room.isTeamMode,
        teamScores: room.teamScores,
        players: getLeaderboard(room),
        status: room.status
      });
    }
  });

  // Host Moderation: Kick troll/AFK player
  socket.on('kick_player', ({ roomCode, targetSocketId }) => {
    const room = rooms[roomCode];
    if (!room || socket.id !== room.hostSocketId || room.status !== 'lobby') return;
    if (targetSocketId === room.hostSocketId) return;

    const kickedPlayer = room.players[targetSocketId];
    if (kickedPlayer) {
      delete room.players[targetSocketId];

      const targetSocket = io.sockets.sockets.get(targetSocketId);
      if (targetSocket) {
        targetSocket.leave(roomCode);
        targetSocket.emit('kicked_from_room', { message: 'You have been removed from the lobby by the host.' });
      }

      io.to(roomCode).emit('room_update', {
        roomCode,
        targetPoints: room.targetPoints,
        selectedCategory: room.selectedCategory,
        timerDuration: room.timerDuration,
        gameMode: room.gameMode,
        isTeamMode: room.isTeamMode,
        teamScores: room.teamScores,
        players: getLeaderboard(room),
        status: room.status
      });

      io.to(roomCode).emit('ticker_message', {
        text: `👢 Host removed ${kickedPlayer.name} from the room.`,
        type: 'warning'
      });
    }
  });

  // 3. Host Starts Game (or restarts a fresh game)
  socket.on('start_game', ({ roomCode, targetPoints }) => {
    const room = rooms[roomCode];
    if (!room || socket.id !== room.hostSocketId) return;

    if (targetPoints) {
      const pts = parseInt(targetPoints, 10);
      if (!isNaN(pts) && pts >= 1 && pts <= 100) room.targetPoints = pts;
    }

    room.status = 'playing';
    room.teamScores = { jetha: 0, baburao: 0 };
    room.buzzerActivePlayerId = null;
    room.buzzerLockedPlayers.clear();

    if (room.timerInterval) {
      clearInterval(room.timerInterval);
      room.timerInterval = null;
    }
    if (room.revealTimeout) {
      clearTimeout(room.revealTimeout);
      room.revealTimeout = null;
    }
    if (room.buzzerInterval) {
      clearInterval(room.buzzerInterval);
      room.buzzerInterval = null;
    }
    room.roundWinner = null;

    // Reset scores & streaks for fresh match, and REVIVE "Paisa Double" token (1 per game)
    Object.values(room.players).forEach(p => {
      p.score = 0;
      p.streak = 0;
      p.maxStreak = 0;
      p.paisaDoubleRemaining = 1; // REVIVED for the new game!
      p.paisaDoubleActive = false;
      p.fastestBuzzTime = 999;
      p.correctCount = 0;
      p.wrongCount = 0;
      p.lastSubmitTime = 0;
    });

    io.to(roomCode).emit('game_started', {
      targetPoints: room.targetPoints || 10,
      selectedCategory: room.selectedCategory,
      timerDuration: room.timerDuration,
      gameMode: room.gameMode,
      isTeamMode: room.isTeamMode,
      teamScores: room.teamScores,
      leaderboard: getLeaderboard(room)
    });

    io.to(roomCode).emit('ticker_message', {
      text: `🚀 Match started! Target: ${room.targetPoints} Points. Ready... Go!`,
      type: 'highlight'
    });

    nextQuestion(roomCode);
  });

  // 4. BUZZER MODE: Player hits buzzer (Dedicated 10s Window)
  socket.on('hit_buzzer', ({ roomCode }) => {
    const room = rooms[roomCode];
    if (!room || room.status !== 'playing' || room.gameMode !== 'buzzer' || !room.currentQuestion) return;
    if (room.buzzerActivePlayerId) return; // Buzzer already claimed
    if (room.buzzerLockedPlayers.has(socket.id)) return; // Player already failed this question

    const player = room.players[socket.id];
    if (!player) return;

    room.buzzerActivePlayerId = socket.id;
    room.buzzerCountdown = 10; // Exactly 10 seconds dedicated window!

    // Record buzz time
    const buzzElapsed = (Date.now() - room.questionStartTime) / 1000;
    if (buzzElapsed < player.fastestBuzzTime) {
      player.fastestBuzzTime = buzzElapsed;
    }

    // Broadcast buzzer hit to all
    io.to(roomCode).emit('buzzer_claimed', {
      playerId: player.id,
      playerName: player.name,
      playerAvatar: player.avatar,
      countdown: 10,
      buzzElapsed: buzzElapsed.toFixed(2)
    });

    io.to(roomCode).emit('ticker_message', {
      text: `⚡ ${player.name} buzzed in ${buzzElapsed.toFixed(1)}s! 10 seconds to answer!`,
      type: 'warning'
    });

    // Start 10-second countdown for the buzzed player
    if (room.buzzerInterval) clearInterval(room.buzzerInterval);

    room.buzzerInterval = setInterval(() => {
      room.buzzerCountdown -= 1;

      io.to(roomCode).emit('buzzer_tick', {
        countdown: room.buzzerCountdown,
        playerId: player.id
      });

      if (room.buzzerCountdown <= 0) {
        clearInterval(room.buzzerInterval);
        room.buzzerInterval = null;

        // Player ran out of 10s time without answering: -1 Point Penalty!
        handleBuzzerFailure(roomCode, player, '10s Timeout! (-1 pt)');
      }
    }, 1000);
  });

  // Helper: Handle Buzzer Failure (Wrong answer or 10s Timeout)
  function handleBuzzerFailure(roomCode, player, reason) {
    const room = rooms[roomCode];
    if (!room) return;

    const penalty = player.paisaDoubleActive ? 2 : 1;
    player.paisaDoubleActive = false;
    player.score = Math.max(0, player.score - penalty);
    player.wrongCount += 1;
    player.streak = 0;

    if (room.isTeamMode && player.team) {
      room.teamScores[player.team] = Math.max(0, (room.teamScores[player.team] || 0) - penalty);
    }

    room.buzzerLockedPlayers.add(player.id);
    room.buzzerActivePlayerId = null;

    io.to(roomCode).emit('buzzer_failed', {
      playerId: player.id,
      playerName: player.name,
      penalty,
      reason,
      leaderboard: getLeaderboard(room),
      teamScores: room.teamScores
    });

    io.to(roomCode).emit('ticker_message', {
      text: `❌ ${player.name} missed the buzzer! (-${penalty} pt). Buzzer unlocked for others!`,
      type: 'danger'
    });

    // If all players in the room are locked out, end round immediately
    const totalPlayers = Object.keys(room.players).length;
    if (room.buzzerLockedPlayers.size >= totalPlayers) {
      if (room.timerInterval) {
        clearInterval(room.timerInterval);
        room.timerInterval = null;
      }
      endRound(roomCode, null);
    }
  }

  // 5. PAISA DOUBLE TOKEN ACTIVATION (Once Per Match, Revived on Restart)
  socket.on('activate_paisa_double', ({ roomCode }) => {
    const room = rooms[roomCode];
    if (!room || room.status !== 'playing' || !room.currentQuestion) return;

    const player = room.players[socket.id];
    if (!player) return;

    if ((player.paisaDoubleRemaining || 0) <= 0) {
      return socket.emit('answer_feedback', {
        correct: false,
        message: 'You already used your Paisa Double token this match!'
      });
    }

    if (player.paisaDoubleActive) return;

    player.paisaDoubleRemaining = 0; // Consumed for this game
    player.paisaDoubleActive = true;

    socket.emit('paisa_double_confirmed', {
      success: true,
      message: '💰 "25 Din Mein Paisa Double" Activated! Next answer: +2 or -2 Points!'
    });

    io.to(roomCode).emit('ticker_message', {
      text: `💰 ${player.name} risked it all: 25 Din Mein Paisa Double is ACTIVE! (+2 / -2 pts)`,
      type: 'gold'
    });
  });

  // 6. Submit Answer (Buzzer & Type-First Modes + Typo Protection)
  socket.on('submit_answer', ({ roomCode, answer }) => {
    const room = rooms[roomCode];
    if (!room || room.status !== 'playing' || !room.currentQuestion) return;

    const player = room.players[socket.id];
    if (!player) return;

    // Rate-limit submissions to prevent bot spam
    const now = Date.now();
    if (now - player.lastSubmitTime < 350) return;
    player.lastSubmitTime = now;

    // In Buzzer Mode: Only the player who won the buzzer can submit!
    if (room.gameMode === 'buzzer') {
      if (room.buzzerActivePlayerId !== socket.id) {
        return socket.emit('answer_feedback', {
          correct: false,
          message: 'Hit the 🔔 BUZZ button first to answer!'
        });
      }
    }

    const q = room.currentQuestion;
    const isCorrect = checkAnswerMatch(answer, q.acceptableAnswers, q.correctAnswer);

    // Typo Protection Check: If not correct but very close (Levenshtein distance 1 or 2)
    if (!isCorrect && checkTypoProximity(answer, q.acceptableAnswers, q.correctAnswer)) {
      return socket.emit('typo_warning', {
        message: '⚠️ Almost there! Check your spelling: very close!'
      });
    }

    if (isCorrect) {
      // First correct answer wins point
      if (room.roundWinner) return;

      if (room.buzzerInterval) {
        clearInterval(room.buzzerInterval);
        room.buzzerInterval = null;
      }
      if (room.timerInterval) {
        clearInterval(room.timerInterval);
        room.timerInterval = null;
      }

      room.roundWinner = player;
      const pointDelta = player.paisaDoubleActive ? 2 : 1;
      player.paisaDoubleActive = false;
      player.score += pointDelta;
      player.correctCount += 1;
      player.streak += 1;
      if (player.streak > (player.maxStreak || 0)) {
        player.maxStreak = player.streak;
      }

      if (room.isTeamMode && player.team) {
        room.teamScores[player.team] = (room.teamScores[player.team] || 0) + pointDelta;
      }

      const answerTime = (Date.now() - room.questionStartTime) / 1000;
      if (answerTime < player.fastestBuzzTime) {
        player.fastestBuzzTime = answerTime;
      }

      // Check match milestone tickers
      if (player.streak >= 2) {
        io.to(roomCode).emit('ticker_message', {
          text: `🔥 ${player.name} is on a ${player.streak}-Round Winning Streak!`,
          type: 'highlight'
        });
      }

      const target = room.targetPoints || 10;
      if (player.score === target - 1) {
        io.to(roomCode).emit('ticker_message', {
          text: `🚨 MATCH POINT: ${player.name} needs only 1 point to win the match!`,
          type: 'danger'
        });
      }

      endRound(roomCode, player, pointDelta);
    } else {
      // Wrong answer
      player.wrongCount += 1;
      player.streak = 0;

      if (room.gameMode === 'buzzer') {
        if (room.buzzerInterval) {
          clearInterval(room.buzzerInterval);
          room.buzzerInterval = null;
        }
        handleBuzzerFailure(roomCode, player, 'Incorrect answer! (-1 pt)');
      } else {
        // Type-First Mode wrong answer
        if (player.paisaDoubleActive) {
          player.paisaDoubleActive = false;
          player.score = Math.max(0, player.score - 2);
          if (room.isTeamMode && player.team) {
            room.teamScores[player.team] = Math.max(0, (room.teamScores[player.team] || 0) - 2);
          }
          socket.emit('answer_feedback', {
            correct: false,
            message: '❌ Wrong! Paisa Double failed (-2 points penalty)!'
          });
          io.to(roomCode).emit('room_update', {
            roomCode,
            players: getLeaderboard(room),
            teamScores: room.teamScores
          });
        } else {
          socket.emit('answer_feedback', {
            correct: false,
            message: 'Wrong answer! Try again before timer runs out!'
          });
        }
      }
    }
  });

  // 7. MEME TAUNT SOUNDBOARD (Rich verified Indian quotes)
  const lastTauntTime = {};
  socket.on('send_meme_taunt', ({ roomCode, tauntId }) => {
    const room = rooms[roomCode];
    if (!room) return;
    const player = room.players[socket.id];
    if (!player) return;

    // Rate-limit taunts to 1 every 2.5 seconds
    const now = Date.now();
    if (lastTauntTime[socket.id] && now - lastTauntTime[socket.id] < 2500) return;
    lastTauntTime[socket.id] = now;

    const tauntMap = {
      'champaklal_jethiya': { audio: '/audio/champak_lal.mp3', label: 'Ae Jethiya!' },
      'baburao_style': { audio: '/audio/hera_pheri_maja_aayega.mp3', label: 'Arre baba bahut maja aayega!' },
      'baburao_gunda': { audio: '/audio/kya_gunda_banega_re_tu.mp3', label: 'Kya gunda banega re tu!' },
      'paisa_double': { audio: '/audio/akshay_paisa_double.mp3', label: '25 Din Mein Paisa Double!' },
      'akshay_miracle': { audio: '/audio/akshay_miracle.mp3', label: 'Miracle! Miracle!' },
      'nana_control': { audio: '/audio/nana_patekar_laugh.mp3', label: 'Control Uday Control!' },
      'rajpal_tadap': { audio: '/audio/raha_nahi_jaata_rajpal_yadav.mp3', label: 'Aisi tadap hi aisi hai!' },
      'amitabh_crore': { audio: '/audio/7_crore_kbc.mp3', label: 'Saat Crore!!' },
      'pushpa_jhukega': { audio: '/audio/pushpa_dialogue.mp3', label: 'Main jhukega nahi!' },
      'singham_satakli': { audio: '/audio/aata_majhi_satakli.mp3', label: 'Aata majhi satakli!' },
      'daya_garba': { audio: '/audio/dayaben_hey_maa.mp3', label: 'Hey Maa Mataji!' },
      'cid_gadbad': { audio: '/audio/nahi_nahi_saluke_yaha_kuchh_to.mp3', label: 'Kuch toh gadbad hai Daya!' },
      'khatam_tata': { audio: '/audio/khatam_tata_goodbye.mp3', label: 'Khatam... Tata... Goodbye!' },
      'rancho_all_well': { audio: '/audio/rancho_3_idiots.mp3', label: 'Aal Izz Well!' }
    };

    const taunt = tauntMap[tauntId];
    if (taunt) {
      io.to(roomCode).emit('meme_taunt_broadcast', {
        playerId: player.id,
        playerName: player.name,
        playerAvatar: player.avatar,
        audioUrl: taunt.audio,
        label: taunt.label
      });

      // Also announce on the live ticker!
      io.to(roomCode).emit('ticker_message', {
        text: `🎭 ${player.name}: "${taunt.label}"`,
        type: 'highlight'
      });
    }
  });

  // 8. Explicit Point Table request
  socket.on('get_point_table', ({ roomCode }, callback) => {
    const room = rooms[roomCode];
    if (room && callback) {
      callback({
        success: true,
        targetPoints: room.targetPoints || 10,
        selectedCategory: room.selectedCategory,
        isTeamMode: room.isTeamMode,
        teamScores: room.teamScores,
        leaderboard: getLeaderboard(room)
      });
    }
  });

  // 9. Handle Explicit Leave Room / Exit
  socket.on('leave_room', ({ roomCode }, callback) => {
    const code = roomCode || socket.roomCode;
    if (code && rooms[code]) {
      const room = rooms[code];
      const player = room.players[socket.id];
      const playerName = player ? player.name : 'A player';

      delete room.players[socket.id];
      socket.leave(code);
      socket.roomCode = null;

      if (room.buzzerActivePlayerId === socket.id) {
        room.buzzerActivePlayerId = null;
        if (room.buzzerInterval) {
          clearInterval(room.buzzerInterval);
          room.buzzerInterval = null;
        }
      }
      room.buzzerLockedPlayers.delete(socket.id);

      if (socket.id === room.hostSocketId) {
        const remainingIds = Object.keys(room.players);
        if (remainingIds.length > 0) {
          room.hostSocketId = remainingIds[0];
        } else {
          if (room.timerInterval) clearInterval(room.timerInterval);
          if (room.revealTimeout) clearTimeout(room.revealTimeout);
          if (room.buzzerInterval) clearInterval(room.buzzerInterval);
          delete rooms[code];
          if (callback) callback({ success: true });
          return;
        }
      }

      io.to(code).emit('room_update', {
        roomCode: code,
        targetPoints: room.targetPoints,
        selectedCategory: room.selectedCategory,
        timerDuration: room.timerDuration,
        gameMode: room.gameMode,
        isTeamMode: room.isTeamMode,
        teamScores: room.teamScores,
        players: getLeaderboard(room),
        status: room.status
      });

      io.to(code).emit('ticker_message', {
        text: `🚪 ${playerName} exited the room.`,
        type: 'info'
      });
    }

    if (callback) callback({ success: true });
  });

  // 10. Handle Disconnection
  socket.on('disconnect', () => {
    const code = socket.roomCode;
    if (code && rooms[code]) {
      const room = rooms[code];
      const player = room.players[socket.id];
      const playerName = player ? player.name : 'A player';

      delete room.players[socket.id];
      if (room.buzzerActivePlayerId === socket.id) {
        room.buzzerActivePlayerId = null;
        if (room.buzzerInterval) clearInterval(room.buzzerInterval);
      }

      if (socket.id === room.hostSocketId) {
        const remainingIds = Object.keys(room.players);
        if (remainingIds.length > 0) {
          room.hostSocketId = remainingIds[0];
        } else {
          if (room.timerInterval) clearInterval(room.timerInterval);
          if (room.revealTimeout) clearTimeout(room.revealTimeout);
          if (room.buzzerInterval) clearInterval(room.buzzerInterval);
          delete rooms[code];
          return;
        }
      }

      io.to(code).emit('room_update', {
        roomCode: code,
        targetPoints: room.targetPoints,
        selectedCategory: room.selectedCategory,
        timerDuration: room.timerDuration,
        gameMode: room.gameMode,
        isTeamMode: room.isTeamMode,
        teamScores: room.teamScores,
        players: getLeaderboard(room),
        status: room.status
      });

      io.to(code).emit('ticker_message', {
        text: `🚪 ${playerName} left the match.`,
        type: 'info'
      });
    }
  });
});

// Function: Select an unused question according to room's selectedCategory
function getRandomUnusedQuestion(room) {
  let pool = questionsBank;

  if (room.selectedCategory === 'tmkoc') {
    pool = questionsBank.filter(q => q.category.includes('TMKOC'));
  } else if (room.selectedCategory === 'bollywood') {
    pool = questionsBank.filter(q => q.category.includes('Bollywood') || q.category.includes('Movie') || q.category.includes('Celebrity'));
  } else if (room.selectedCategory === 'cricket') {
    pool = questionsBank.filter(q => q.category.includes('Cricket'));
  } else if (room.selectedCategory === 'audio_only') {
    pool = audioQuestions;
  }

  if (!pool || pool.length === 0) pool = questionsBank;

  const unusedFromPool = pool.filter(q => !room.usedQuestionIds.has(q.id));
  if (unusedFromPool.length === 0) {
    room.usedQuestionIds.clear();
  }

  room.questionCounter = (room.questionCounter || 0) + 1;

  // In 'all' mode: balance real audio clue roughly every 3rd question
  if (room.selectedCategory === 'all' && (room.questionCounter % 3 === 0)) {
    const unusedAudio = audioQuestions.filter(q => !room.usedQuestionIds.has(q.id));
    if (unusedAudio.length > 0) {
      const q = unusedAudio[Math.floor(Math.random() * unusedAudio.length)];
      room.usedQuestionIds.add(q.id);
      return q;
    }
  }

  const candidates = pool.filter(q => !room.usedQuestionIds.has(q.id));
  const candidate = candidates.length > 0
    ? candidates[Math.floor(Math.random() * candidates.length)]
    : pool[Math.floor(Math.random() * pool.length)];

  room.usedQuestionIds.add(candidate.id);
  return candidate;
}

// Function: Advance to next question (Safe payload, no answers leaked)
function nextQuestion(roomCode) {
  const room = rooms[roomCode];
  if (!room) return;

  const target = room.targetPoints || 10;

  // Check Team Mode or Solo Mode victory
  if (room.isTeamMode) {
    if ((room.teamScores.jetha || 0) >= target) {
      return declareTeamWinner(roomCode, 'jetha');
    }
    if ((room.teamScores.baburao || 0) >= target) {
      return declareTeamWinner(roomCode, 'baburao');
    }
  } else {
    const matchWinner = Object.values(room.players).find(p => p.score >= target);
    if (matchWinner) {
      return declareMatchWinner(roomCode, matchWinner);
    }
  }

  const q = getRandomUnusedQuestion(room);
  room.currentQuestion = q;
  room.roundWinner = null;
  room.roundTimer = room.timerDuration || 30;
  room.questionStartTime = Date.now();
  room.buzzerActivePlayerId = null;
  room.buzzerLockedPlayers.clear();
  room.status = 'playing';

  const halfTime = Math.floor(room.roundTimer / 2);
  let hintRevealed = false;

  io.to(roomCode).emit('new_question', {
    id: q.id,
    category: q.category,
    question: q.question,
    audioFile: q.audioFile,
    roundTimer: room.roundTimer,
    targetPoints: target,
    gameMode: room.gameMode,
    isTeamMode: room.isTeamMode,
    teamScores: room.teamScores,
    leaderboard: getLeaderboard(room)
  });

  if (room.timerInterval) clearInterval(room.timerInterval);
  if (room.buzzerInterval) clearInterval(room.buzzerInterval);

  room.timerInterval = setInterval(() => {
    room.roundTimer -= 1;

    io.to(roomCode).emit('timer_tick', {
      timeLeft: room.roundTimer,
      totalDuration: room.timerDuration || 30
    });

    if (!hintRevealed && room.roundTimer <= halfTime) {
      hintRevealed = true;
      const maskedHint = generateLetterHint(q.correctAnswer);
      io.to(roomCode).emit('reveal_hint', {
        hint: maskedHint
      });
      io.to(roomCode).emit('ticker_message', {
        text: `💡 Letter hint revealed! Check screen!`,
        type: 'info'
      });
    }

    if (room.roundTimer <= 0) {
      clearInterval(room.timerInterval);
      room.timerInterval = null;
      if (room.buzzerInterval) clearInterval(room.buzzerInterval);
      endRound(roomCode, null);
    }
  }, 1000);
}

// Function: End round (Transition duration = exactly 5 seconds)
function endRound(roomCode, winnerPlayer, pointDelta = 1) {
  const room = rooms[roomCode];
  if (!room) return;

  room.status = 'round_reveal';
  const q = room.currentQuestion;
  const target = room.targetPoints || 10;

  if (room.timerInterval) {
    clearInterval(room.timerInterval);
    room.timerInterval = null;
  }
  if (room.buzzerInterval) {
    clearInterval(room.buzzerInterval);
    room.buzzerInterval = null;
  }

  // Minimal secure reveal: Winner (if any) and Correct Answer only
  io.to(roomCode).emit('round_reveal', {
    winner: winnerPlayer
      ? {
          id: winnerPlayer.id,
          name: winnerPlayer.name,
          avatar: winnerPlayer.avatar,
          team: winnerPlayer.team,
          pointsEarned: pointDelta,
          streak: winnerPlayer.streak
        }
      : null,
    correctAnswer: q.correctAnswer,
    targetPoints: target,
    transitionSeconds: 5, // Exactly 5 seconds duration
    isTeamMode: room.isTeamMode,
    teamScores: room.teamScores,
    leaderboard: getLeaderboard(room)
  });

  // Ticker broadcast visible during transition
  io.to(roomCode).emit('ticker_message', {
    text: winnerPlayer
      ? `🎉 ${winnerPlayer.name} won +${pointDelta} pt! Answer: "${q.correctAnswer}". Next in 5s...`
      : `⏱️ Round Over! Answer: "${q.correctAnswer}". Next question in 5s...`,
    type: 'highlight'
  });

  // Check victory condition
  if (room.isTeamMode) {
    if ((room.teamScores.jetha || 0) >= target) {
      room.revealTimeout = setTimeout(() => declareTeamWinner(roomCode, 'jetha'), 3500);
      return;
    }
    if ((room.teamScores.baburao || 0) >= target) {
      room.revealTimeout = setTimeout(() => declareTeamWinner(roomCode, 'baburao'), 3500);
      return;
    }
  } else if (winnerPlayer && winnerPlayer.score >= target) {
    room.revealTimeout = setTimeout(() => declareMatchWinner(roomCode, winnerPlayer), 3500);
    return;
  }

  // Exactly 5 seconds duration between questions (as explicitly requested!)
  room.revealTimeout = setTimeout(() => {
    nextQuestion(roomCode);
  }, 5000);
}

// Function: Declare Solo Match Winner
function declareMatchWinner(roomCode, winner) {
  const room = rooms[roomCode];
  if (!room) return;

  room.status = 'game_over';

  if (room.timerInterval) clearInterval(room.timerInterval);
  if (room.revealTimeout) clearTimeout(room.revealTimeout);
  if (room.buzzerInterval) clearInterval(room.buzzerInterval);

  const awards = computeMatchAwards(room);

  io.to(roomCode).emit('game_over', {
    winner: {
      id: winner.id,
      name: winner.name,
      avatar: winner.avatar,
      score: winner.score,
      team: winner.team
    },
    isTeamMode: false,
    targetPoints: room.targetPoints || 10,
    awards,
    leaderboard: getLeaderboard(room)
  });

  io.to(roomCode).emit('ticker_message', {
    text: `👑 MATCH OVER: ${winner.name} won the match with ${winner.score} points!`,
    type: 'gold'
  });
}

// Function: Declare Team Battle Winner
function declareTeamWinner(roomCode, winningTeamKey) {
  const room = rooms[roomCode];
  if (!room) return;

  room.status = 'game_over';

  if (room.timerInterval) clearInterval(room.timerInterval);
  if (room.revealTimeout) clearTimeout(room.revealTimeout);
  if (room.buzzerInterval) clearInterval(room.buzzerInterval);

  const teamName = winningTeamKey === 'jetha'
    ? 'Team Jetha Ke Janbaaz 🏢'
    : 'Team Baburao Ke Superstars 🕶️';

  const awards = computeMatchAwards(room);

  io.to(roomCode).emit('game_over', {
    isTeamMode: true,
    winningTeam: winningTeamKey,
    winningTeamName: teamName,
    teamScores: room.teamScores,
    targetPoints: room.targetPoints || 10,
    awards,
    leaderboard: getLeaderboard(room)
  });

  io.to(roomCode).emit('ticker_message', {
    text: `🏆 CHAMPIONS: ${teamName} WON THE TEAM BATTLE!`,
    type: 'gold'
  });
}

// Start Server
server.listen(PORT, () => {
  console.log(`✨ Fun Guessing server running on port ${PORT}`);
  console.log(`🌐 Local URL: http://localhost:${PORT}`);
});
