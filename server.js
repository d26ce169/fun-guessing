const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');
const cors = require('cors');

const questionsBank = require('./data/questions');
const audioQuestions = questionsBank.filter(q => q.audioFile !== null);
const textQuestions = questionsBank.filter(q => q.audioFile === null);
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

// Helper: Sanitize player name against scripts/HTML injection
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

// Helper: Get sanitized leaderboard for a room
function getLeaderboard(room) {
  return Object.values(room.players)
    .map(p => ({
      id: p.id,
      name: p.name,
      avatar: p.avatar,
      score: p.score,
      isHost: p.id === room.hostSocketId
    }))
    .sort((a, b) => b.score - a.score);
}

// Socket.io Connection Logic
io.on('connection', socket => {
  // 1. Host Creates Room
  socket.on('create_room', ({ playerName, avatar, targetPoints }, callback) => {
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
          lastSubmitTime: 0
        }
      },
      status: 'lobby',
      targetPoints: validTarget,
      currentQuestion: null,
      usedQuestionIds: new Set(),
      questionCounter: 0,
      roundTimer: 30,
      timerInterval: null,
      revealTimeout: null,
      roundWinner: null
    };

    socket.join(roomCode);
    socket.roomCode = roomCode;

    if (callback) {
      callback({
        success: true,
        roomCode,
        isHost: true,
        targetPoints: rooms[roomCode].targetPoints,
        players: getLeaderboard(rooms[roomCode])
      });
    }

    io.to(roomCode).emit('room_update', {
      roomCode,
      targetPoints: rooms[roomCode].targetPoints,
      players: getLeaderboard(rooms[roomCode]),
      status: rooms[roomCode].status
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

    room.players[socket.id] = {
      id: socket.id,
      name: safeName,
      avatar: avatar || '🎯',
      score: 0,
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
        players: getLeaderboard(room)
      });
    }

    io.to(code).emit('room_update', {
      roomCode: code,
      targetPoints: room.targetPoints || 10,
      players: getLeaderboard(room),
      status: room.status
    });
  });

  // Host configures winning target points (e.g. 5, 10, 15, 20...)
  socket.on('set_target_points', ({ roomCode, targetPoints }) => {
    const room = rooms[roomCode];
    if (!room || socket.id !== room.hostSocketId || room.status !== 'lobby') return;

    const pts = parseInt(targetPoints, 10);
    if (!isNaN(pts) && pts >= 1 && pts <= 100) {
      room.targetPoints = pts;
      io.to(roomCode).emit('target_points_updated', {
        targetPoints: room.targetPoints
      });
    }
  });

  // 3. Host Starts Game (or Restarts Game after a winner reached target points)
  socket.on('start_game', ({ roomCode, targetPoints }) => {
    const room = rooms[roomCode];
    if (!room || socket.id !== room.hostSocketId) return;

    if (targetPoints) {
      const pts = parseInt(targetPoints, 10);
      if (!isNaN(pts) && pts >= 1 && pts <= 100) {
        room.targetPoints = pts;
      }
    }

    room.status = 'playing';

    // Clear any active timers/timeouts from previous match or round
    if (room.timerInterval) {
      clearInterval(room.timerInterval);
      room.timerInterval = null;
    }
    if (room.revealTimeout) {
      clearTimeout(room.revealTimeout);
      room.revealTimeout = null;
    }
    room.roundWinner = null;

    // Reset scores for fresh game
    Object.values(room.players).forEach(p => {
      p.score = 0;
      p.lastSubmitTime = 0;
    });

    // CRITICAL: room.usedQuestionIds is KEPT INTACT!
    // Never repeat a question in the same room even when game is restarted.

    io.to(roomCode).emit('game_started', {
      targetPoints: room.targetPoints || 10,
      leaderboard: getLeaderboard(room)
    });

    nextQuestion(roomCode);
  });

  // 4. Submit Answer (Strict Rate-Limiting & Race-Safe Scoring)
  socket.on('submit_answer', ({ roomCode, answer }) => {
    const room = rooms[roomCode];
    if (!room || room.status !== 'playing' || !room.currentQuestion) return;

    const player = room.players[socket.id];
    if (!player) return;

    // Rate-limit submissions to prevent bot spam
    const now = Date.now();
    if (now - player.lastSubmitTime < 350) {
      return;
    }
    player.lastSubmitTime = now;

    const q = room.currentQuestion;
    const isCorrect = checkAnswerMatch(answer, q.acceptableAnswers, q.correctAnswer);

    if (isCorrect) {
      // First correct answer wins point
      if (room.roundWinner) return;

      room.roundWinner = player;
      player.score += 1;

      // Stop 30s timer immediately
      if (room.timerInterval) {
        clearInterval(room.timerInterval);
        room.timerInterval = null;
      }

      endRound(roomCode, player);
    } else {
      socket.emit('answer_feedback', {
        correct: false,
        message: 'Wrong answer! Try again before timer runs out!'
      });
    }
  });

  // 5. Explicit Point Table request
  socket.on('get_point_table', ({ roomCode }, callback) => {
    const room = rooms[roomCode];
    if (room && callback) {
      callback({
        success: true,
        targetPoints: room.targetPoints || 10,
        leaderboard: getLeaderboard(room)
      });
    }
  });

  // 6. Handle Disconnection
  socket.on('disconnect', () => {
    const code = socket.roomCode;
    if (code && rooms[code]) {
      const room = rooms[code];
      delete room.players[socket.id];

      // Reassign host if host disconnected
      if (socket.id === room.hostSocketId) {
        const remainingIds = Object.keys(room.players);
        if (remainingIds.length > 0) {
          room.hostSocketId = remainingIds[0];
        } else {
          // Cleanup empty room immediately
          if (room.timerInterval) clearInterval(room.timerInterval);
          if (room.revealTimeout) clearTimeout(room.revealTimeout);
          delete rooms[code];
          return;
        }
      }

      io.to(code).emit('room_update', {
        roomCode: code,
        players: getLeaderboard(room),
        status: room.status
      });
    }
  });
});

// Function: Select an unused question with balanced Audio/Text distribution
function getRandomUnusedQuestion(room) {
  // Only if every single question in the entire database has been used in this room
  if (room.usedQuestionIds.size >= questionsBank.length) {
    room.usedQuestionIds.clear();
  }

  room.questionCounter = (room.questionCounter || 0) + 1;

  // Real Audio Clue roughly every 3rd question if unused audio clips exist
  const wantAudio = (room.questionCounter % 3 === 0);

  if (wantAudio) {
    const unusedAudio = audioQuestions.filter(q => !room.usedQuestionIds.has(q.id));
    if (unusedAudio.length > 0) {
      const q = unusedAudio[Math.floor(Math.random() * unusedAudio.length)];
      room.usedQuestionIds.add(q.id);
      return q;
    }
  }

  // Fast random sampling from text questions
  let attempts = 0;
  while (attempts < 500) {
    const candidate = textQuestions[Math.floor(Math.random() * textQuestions.length)];
    if (!room.usedQuestionIds.has(candidate.id)) {
      room.usedQuestionIds.add(candidate.id);
      return candidate;
    }
    attempts++;
  }

  // Fallback: direct filter if set got dense
  const unused = textQuestions.filter(q => !room.usedQuestionIds.has(q.id));
  if (unused.length > 0) {
    const q = unused[Math.floor(Math.random() * unused.length)];
    room.usedQuestionIds.add(q.id);
    return q;
  }

  // Extreme fallback if all questions played
  room.usedQuestionIds.clear();
  const q = questionsBank[Math.floor(Math.random() * questionsBank.length)];
  room.usedQuestionIds.add(q.id);
  return q;
}

// Function: Advance to next question (Safe payload, no answers leaked)
function nextQuestion(roomCode) {
  const room = rooms[roomCode];
  if (!room) return;

  const target = room.targetPoints || 10;

  // Check if any player already reached the target points
  const matchWinner = Object.values(room.players).find(p => p.score >= target);
  if (matchWinner) {
    declareMatchWinner(roomCode, matchWinner);
    return;
  }

  const q = getRandomUnusedQuestion(room);
  room.currentQuestion = q;
  room.roundWinner = null;
  room.roundTimer = 30;
  room.status = 'playing';

  // Secure payload: NEVER send correctAnswer or acceptableAnswers during active round
  io.to(roomCode).emit('new_question', {
    id: q.id,
    category: q.category,
    question: q.question,
    audioFile: q.audioFile,
    roundTimer: 30,
    targetPoints: target,
    leaderboard: getLeaderboard(room)
  });

  // 30-Second Countdown
  if (room.timerInterval) clearInterval(room.timerInterval);

  room.timerInterval = setInterval(() => {
    room.roundTimer -= 1;

    io.to(roomCode).emit('timer_tick', {
      timeLeft: room.roundTimer
    });

    if (room.roundTimer <= 0) {
      clearInterval(room.timerInterval);
      room.timerInterval = null;
      endRound(roomCode, null);
    }
  }, 1000);
}

// Function: End round (strictly minimal reveal, no clutter)
function endRound(roomCode, winnerPlayer) {
  const room = rooms[roomCode];
  if (!room) return;

  room.status = 'round_reveal';
  const q = room.currentQuestion;
  const target = room.targetPoints || 10;

  // Minimal secure reveal: Winner (if any) and Correct Answer only
  io.to(roomCode).emit('round_reveal', {
    winner: winnerPlayer
      ? { id: winnerPlayer.id, name: winnerPlayer.name, avatar: winnerPlayer.avatar }
      : null,
    correctAnswer: q.correctAnswer,
    targetPoints: target,
    leaderboard: getLeaderboard(room)
  });

  if (winnerPlayer && winnerPlayer.score >= target) {
    room.revealTimeout = setTimeout(() => {
      declareMatchWinner(roomCode, winnerPlayer);
    }, 3200);
    return;
  }

  // Next question after 4 seconds
  room.revealTimeout = setTimeout(() => {
    nextQuestion(roomCode);
  }, 4000);
}

// Function: Declare Match Winner
function declareMatchWinner(roomCode, winner) {
  const room = rooms[roomCode];
  if (!room) return;

  room.status = 'game_over';

  // Stop any active countdown timer or pending reveals
  if (room.timerInterval) {
    clearInterval(room.timerInterval);
    room.timerInterval = null;
  }
  if (room.revealTimeout) {
    clearTimeout(room.revealTimeout);
    room.revealTimeout = null;
  }

  io.to(roomCode).emit('game_over', {
    winner: {
      id: winner.id,
      name: winner.name,
      avatar: winner.avatar,
      score: winner.score
    },
    targetPoints: room.targetPoints || 10,
    leaderboard: getLeaderboard(room)
  });
}

// Start Server
server.listen(PORT, () => {
  console.log(`✨ Fun Guessing server running on port ${PORT}`);
  console.log(`🌐 Local URL: http://localhost:${PORT}`);
});
