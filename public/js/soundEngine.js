/**
 * Fun Guessing - Clean Sound & Audio Engine
 * Handles question audio clips, meme taunts, buzzer chimes, and lobby sound check.
 * ZERO unwanted background loops.
 */

class SoundEngine {
  constructor() {
    this.audioCtx = null;
    this.analyser = null;
    this.sourceNodes = new Map();
    this.currentAudioEl = null;
    this.tauntAudioEl = null;
    this.isMuted = false;
    this.visualizerCanvas = null;
    this.visualizerCtx = null;
    this.animFrameId = null;
    this.dataArray = null;
  }

  init() {
    if (!this.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.audioCtx = new AudioContext();
      this.analyser = this.audioCtx.createAnalyser();
      this.analyser.fftSize = 64;
      this.dataArray = new Uint8Array(this.analyser.frequencyBinCount);
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  setVisualizer(canvasElement) {
    this.visualizerCanvas = canvasElement;
    if (canvasElement) {
      this.visualizerCtx = canvasElement.getContext('2d');
      this.drawIdleVisualizer();
    }
  }

  drawIdleVisualizer() {
    if (!this.visualizerCtx || !this.visualizerCanvas) return;
    const ctx = this.visualizerCtx;
    const width = this.visualizerCanvas.width;
    const height = this.visualizerCanvas.height;

    ctx.clearRect(0, 0, width, height);
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'rgba(245, 158, 11, 0.35)';
    ctx.beginPath();
    ctx.moveTo(0, height / 2);
    ctx.lineTo(width, height / 2);
    ctx.stroke();
  }

  startVisualizerAnimation() {
    if (!this.visualizerCtx || !this.visualizerCanvas) return;

    const render = () => {
      if (!this.currentAudioEl || this.currentAudioEl.paused) {
        this.drawIdleVisualizer();
        return;
      }

      const ctx = this.visualizerCtx;
      const width = this.visualizerCanvas.width;
      const height = this.visualizerCanvas.height;

      ctx.clearRect(0, 0, width, height);

      if (this.analyser && this.dataArray) {
        this.analyser.getByteFrequencyData(this.dataArray);
      }

      const bars = 28;
      const barWidth = width / bars;
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, '#f59e0b');
      gradient.addColorStop(0.5, '#3b82f6');
      gradient.addColorStop(1, '#10b981');

      ctx.fillStyle = gradient;

      for (let i = 0; i < bars; i++) {
        let value = this.dataArray ? (this.dataArray[i % this.dataArray.length] / 255) : 0.4;
        if (value < 0.08) value = Math.random() * 0.18 + 0.08;

        const barHeight = Math.max(4, value * (height * 0.85));
        const x = i * barWidth + 2;
        const y = (height - barHeight) / 2;
        ctx.fillRect(x, y, barWidth - 4, barHeight);
      }

      this.animFrameId = requestAnimationFrame(render);
    };

    if (this.animFrameId) cancelAnimationFrame(this.animFrameId);
    this.animFrameId = requestAnimationFrame(render);
  }

  stopVisualizerAnimation() {
    if (this.animFrameId) cancelAnimationFrame(this.animFrameId);
    this.drawIdleVisualizer();
  }

  // Question Audio Clues
  playAudioFile(audioUrl, onComplete) {
    if (this.isMuted || !audioUrl) {
      if (onComplete) onComplete();
      return;
    }

    this.init();
    this.stopAllAudio();

    const audio = new Audio(audioUrl);
    this.currentAudioEl = audio;
    audio.crossOrigin = 'anonymous';

    try {
      if (this.audioCtx && !this.sourceNodes.has(audioUrl)) {
        const source = this.audioCtx.createMediaElementSource(audio);
        source.connect(this.analyser);
        this.analyser.connect(this.audioCtx.destination);
        this.sourceNodes.set(audioUrl, source);
      }
    } catch (e) {}

    this.startVisualizerAnimation();

    audio.play().catch(() => {
      this.stopVisualizerAnimation();
      if (onComplete) onComplete();
    });

    audio.onended = () => {
      this.stopVisualizerAnimation();
      if (onComplete) onComplete();
    };

    audio.onerror = () => {
      this.stopVisualizerAnimation();
      if (onComplete) onComplete();
    };
  }

  // Meme Soundboard Taunt
  playMemeTaunt(audioUrl, onComplete) {
    if (this.isMuted || !audioUrl) {
      if (onComplete) onComplete();
      return;
    }
    this.init();

    if (this.tauntAudioEl) {
      this.tauntAudioEl.pause();
      this.tauntAudioEl.currentTime = 0;
    }

    const audio = new Audio(audioUrl);
    this.tauntAudioEl = audio;
    audio.volume = 0.85;

    audio.play().catch(() => {});
    audio.onended = () => {
      this.tauntAudioEl = null;
      if (onComplete) onComplete();
    };
  }

  stopAllAudio() {
    if (this.currentAudioEl) {
      this.currentAudioEl.pause();
      this.currentAudioEl.currentTime = 0;
      this.currentAudioEl = null;
    }
    if (this.tauntAudioEl) {
      this.tauntAudioEl.pause();
      this.tauntAudioEl.currentTime = 0;
      this.tauntAudioEl = null;
    }
    this.stopVisualizerAnimation();
  }

  // Tone SFX (Synthesized Web Audio, no lag)
  playCorrect() {
    if (this.isMuted) return;
    this.init();
    try {
      const now = this.audioCtx.currentTime;
      [587.33, 880.0].forEach((freq, idx) => {
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.1);
        gain.gain.setValueAtTime(0.14, now + idx * 0.1);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.1 + 0.22);
        osc.connect(gain);
        gain.connect(this.audioCtx.destination);
        osc.start(now + idx * 0.1);
        osc.stop(now + idx * 0.1 + 0.22);
      });
    } catch (e) {}
  }

  playWrong() {
    if (this.isMuted) return;
    this.init();
    try {
      const now = this.audioCtx.currentTime;
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(150, now);
      osc.frequency.linearRampToValueAtTime(100, now + 0.25);
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.25);
    } catch (e) {}
  }

  playBuzzerHit() {
    if (this.isMuted) return;
    this.init();
    try {
      const now = this.audioCtx.currentTime;
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.type = 'square';
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.setValueAtTime(880, now + 0.08);
      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.35);
    } catch (e) {}
  }

  playBuzzerFail() {
    if (this.isMuted) return;
    this.init();
    try {
      const now = this.audioCtx.currentTime;
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(130, now);
      osc.frequency.setValueAtTime(90, now + 0.15);
      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.4);
    } catch (e) {}
  }

  playLobbyTest() {
    if (this.isMuted) return;
    this.init();
    try {
      const now = this.audioCtx.currentTime;
      [523.25, 659.25, 783.99].forEach((freq, idx) => {
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.1);
        gain.gain.setValueAtTime(0.15, now + idx * 0.1);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.1 + 0.25);
        osc.connect(gain);
        gain.connect(this.audioCtx.destination);
        osc.start(now + idx * 0.1);
        osc.stop(now + idx * 0.1 + 0.25);
      });
    } catch (e) {}
  }

  playWinFanfare() {
    if (this.isMuted) return;
    this.init();
    try {
      const now = this.audioCtx.currentTime;
      [523.25, 659.25, 783.99, 1046.5].forEach((freq, idx) => {
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + idx * 0.12);
        gain.gain.setValueAtTime(0.2, now + idx * 0.12);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.12 + 0.35);
        osc.connect(gain);
        gain.connect(this.audioCtx.destination);
        osc.start(now + idx * 0.12);
        osc.stop(now + idx * 0.12 + 0.35);
      });
    } catch (e) {}
  }

  playUrgentTick() {
    if (this.isMuted) return;
    this.init();
    try {
      const now = this.audioCtx.currentTime;
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, now);
      gain.gain.setValueAtTime(0.05, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.05);
    } catch (e) {}
  }

  playTick() {}
}

window.soundEngine = new SoundEngine();
