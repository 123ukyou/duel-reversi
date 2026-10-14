/**
 * DUEL REVERSI - SoundEngine (Zero-Allocation & AudioBuffer Pre-Rendered Edition)
 * 完全メモリ常駐・演奏中ノード生成ゼロ・リファクタリング音響エンジン
 */

class SoundEngine {
  constructor() {
    this.ctx = null;
    this.masterGain = null;
    this.bgmGain = null;
    this.sfxBuffers = {};
    this.bgmBuffers = {};
    this.bgmSource = null;
    this.isMuted = false;
    this.currentTrackIndex = 0;
    this.playingTrackIndex = -1;
    this.isClimax = false;
    this.initialized = false;
    this.titleAmbientPlaying = false;

    this.bgmTracks = [
      { id: 0, name: '神話決闘 (Acid Battle)', bpm: 124 },
      { id: 1, name: '電脳空間 (8-Bit Chiptune)', bpm: 138 },
      { id: 2, name: '紅蓮闘技 (Inferno Rock)', bpm: 130 },
      { id: 3, name: '静寂神殿 (Sacred Minimal)', bpm: 116 }
    ];
  }

  init() {
    if (this.initialized && this.ctx) {
      if (this.ctx.state === 'suspended') this.ctx.resume();
      return;
    }
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;

    try {
      this.ctx = new AudioContextClass();

      // マスターゲイン
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(1.0, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);

      // BGM専用ゲイン
      this.bgmGain = this.ctx.createGain();
      this.bgmGain.gain.setValueAtTime(0.42, this.ctx.currentTime);
      this.bgmGain.connect(this.masterGain);

      // 1. 効果音（SFX）のメモリ事前展開
      this.preloadSfxBuffers();

      // 2. BGMのプリレンダリング（演奏中のオシレーター生成をゼロにする神速設計）
      this.prerenderBgmBuffers();

      this.initialized = true;
    } catch (e) {
      console.warn('Audio init error:', e);
    }
  }

  // --- 1. 効果音 PCM事前合成 ---
  preloadSfxBuffers() {
    if (!this.ctx) return;

    // 石配置音 (click)
// 1) 石配置音 (click): 指先で本物のオセロ石を盤面に「パチッ！」と打ち下ろす硬質アタック音
    this.sfxBuffers['click'] = this.createBuffer(0.08, (t) => {
      // アクリル石と盤面がぶつかる初期衝撃（0〜4ミリ秒の鋭いアタック）
      const snapNoise = (Math.random() * 2 - 1) * Math.exp(-t * 420) * 0.75;
      // 硬質プラスチックの「コンッ/パチッ」という胴鳴り共鳴（木・樹脂の中高音）
      const body1 = Math.sin(2 * Math.PI * (920 * Math.exp(-t * 35) + 420) * t) * Math.exp(-t * 95) * 0.65;
      const body2 = Math.sin(2 * Math.PI * 1950 * t) * Math.exp(-t * 150) * 0.4;
      // 盤面の「トン」という低い振動
      const boardThud = Math.sin(2 * Math.PI * (240 * Math.exp(-t * 45) + 85) * t) * Math.exp(-t * 65) * 0.55;
      return Math.max(-1.0, Math.min(1.0, (snapNoise + body1 + body2 + boardThud) * 0.95));
    });

    // 2) 上書き配置音 (override): 相手の石の上から「バチィンッ！！」と叩き割るように重ねる重厚物理音
    this.sfxBuffers['override'] = this.createBuffer(0.28, (t) => {
      // 石同士が激突する「ガチッ！」という硬質なクラック音
      const crack = (Math.random() * 2 - 1) * Math.exp(-t * 85) * 0.65;
      const clack = Math.sin(2 * Math.PI * (1400 * Math.exp(-t * 50) + 380) * t) * Math.exp(-t * 55) * 0.6;
      const heavyThud = Math.sin(2 * Math.PI * (160 * Math.exp(-t * 18) + 45) * t) * Math.exp(-t * 16) * 0.75;
      return Math.max(-1.0, Math.min(1.0, (crack + clack + heavyThud) * 0.9));
    });

    // 3) 連鎖反転音 (flip_0 〜 flip_7): 現実のオセロ石が「カタッ、カタッ、カタカタッ！」と裏返る2段物理音
    // ※時間差(35ms間隔)で再生されることで、本物の石が波のようにパタパタ倒れる「カタカタ音」になります！
    for (let i = 0; i < 8; i++) {
      // 連鎖が進むにつれてほんの少しだけ石の共鳴ピッチが上がり、爽快感が増す調整
      const pitchShift = 1.0 + i * 0.045;
      this.sfxBuffers[`flip_${i}`] = this.createBuffer(0.11, (t) => {
        // 【第1打: t=0.00s】石のフチが盤面を蹴って浮き上がる「カッ」という軽い音
        const hit1Noise = (Math.random() * 2 - 1) * Math.exp(-t * 500) * 0.45;
        const hit1Res1 = Math.sin(2 * Math.PI * (1150 * pitchShift) * t) * Math.exp(-t * 130) * 0.5;
        const hit1Res2 = Math.sin(2 * Math.PI * (2380 * pitchShift) * t) * Math.exp(-t * 190) * 0.3;
        const part1 = hit1Noise + hit1Res1 + hit1Res2;

        // 【第2打: t=0.032s】空中で180度ひっくり返った石が盤面に「タッ（パチッ）」と着地して収まる音
        let part2 = 0;
        const t2 = t - 0.032;
        if (t2 > 0) {
          const hit2Noise = (Math.random() * 2 - 1) * Math.exp(-t2 * 380) * 0.6;
          // 着地時は少し落ち着いた硬質音（「カタッ」の「タッ」）
          const hit2Res1 = Math.sin(2 * Math.PI * (860 * pitchShift) * t2) * Math.exp(-t2 * 105) * 0.65;
          const hit2Res2 = Math.sin(2 * Math.PI * (1720 * pitchShift) * t2) * Math.exp(-t2 * 150) * 0.38;
          const boardTap = Math.sin(2 * Math.PI * 190 * t2) * Math.exp(-t2 * 80) * 0.4;
          part2 = hit2Noise + hit2Res1 + hit2Res2 + boardTap;
        }

        return Math.max(-1.0, Math.min(1.0, (part1 + part2) * 0.88));
      });
    }

    // アイテム獲得音 (item_get)
    this.sfxBuffers['item_get'] = this.createBuffer(0.35, (t) => {
      const notes = [659.25, 880, 1174.66, 1760];
      const idx = Math.min(3, Math.floor(t / 0.08));
      const subT = t - idx * 0.08;
      return Math.sin(2 * Math.PI * notes[idx] * t) * Math.exp(-subT * 18) * 0.6;
    });

    // 神速・雷撃音 (lightning)
    this.sfxBuffers['lightning'] = this.createBuffer(0.45, (t) => {
      const noise = (Math.random() * 2 - 1) * Math.exp(-t * 15) * 0.7;
      const sub = Math.sin(2 * Math.PI * (200 * Math.exp(-t * 10) + 30) * t) * 0.6;
      return (noise + sub) * Math.exp(-t * 7) * 0.9;
    });

    // 氷結音 (freeze)
    this.sfxBuffers['freeze'] = this.createBuffer(0.4, (t) => {
      const f1 = 3136 * Math.exp(-t * 8);
      const f2 = 4186 * Math.exp(-t * 6);
      const glass = (Math.random() * 2 - 1) * Math.exp(-t * 20) * 0.35;
      return (Math.sin(2 * Math.PI * f1 * t) * 0.4 + Math.sin(2 * Math.PI * f2 * t) * 0.4 + glass) * Math.exp(-t * 9);
    });

    // 生命の秘薬音 (potion)
    this.sfxBuffers['potion'] = this.createBuffer(0.55, (t) => {
      const freqs = [523.25, 659.25, 783.99, 1046.5, 1318.5];
      const idx = Math.min(4, Math.floor(t / 0.09));
      const f = freqs[idx];
      const subT = t - idx * 0.09;
      return (Math.sin(2 * Math.PI * f * t) * 0.6 + Math.sin(2 * Math.PI * f * 2 * t) * 0.2) * Math.exp(-subT * 14) * 0.8;
    });

    // 勝利ファンファーレ (victory)
    this.sfxBuffers['victory'] = this.createBuffer(0.65, (t) => {
      const chords = [523.25, 659.25, 783.99, 1046.5];
      const idx = Math.min(3, Math.floor(t / 0.12));
      const subT = t - idx * 0.12;
      return Math.sin(2 * Math.PI * chords[idx] * t) * Math.exp(-subT * 12) * 0.65;
    });

    // 警報サイレン (alarm)
    this.sfxBuffers['alarm'] = this.createBuffer(0.3, (t) => {
      const f = 620 + Math.sin(t * 30) * 120;
      return Math.sin(2 * Math.PI * f * t) * 0.6;
    });

    // タイトル用重厚アンビエントドローン (title_ambient: 4秒シームレス)
    this.sfxBuffers['title_ambient'] = this.createBuffer(4.0, (t) => {
      const drone1 = Math.sin(2 * Math.PI * 55.0 * t); // A1
      const drone2 = Math.sin(2 * Math.PI * 110.0 * t) * 0.5; // A2
      const bell = Math.sin(2 * Math.PI * 440.0 * t) * Math.exp(-(t % 2.0) * 3) * 0.2;
      return (drone1 * 0.5 + drone2 * 0.3 + bell) * 0.45;
    });
  }

    // --- 2. BGM プリレンダリング（全4トラック完全メモリ常駐シームレスループ） ---
  prerenderBgmBuffers() {
    if (!this.ctx) return;
    const sr = this.ctx.sampleRate;

    // 矩形波ヘルパー (duty比 = 0.5 または 0.25)
    const squareWave = (freq, t, duty = 0.5) => {
      const phase = (freq * t) % 1.0;
      return phase < duty ? 1.0 : -1.0;
    };

    // ==========================================
    // トラック0: 神話決闘 (Acid Battle) - BPM 124
    // ==========================================
    const bpm0 = 124;
    const spb0 = 60 / bpm0;
    const len0 = Math.floor(sr * spb0 * 16);
    const buf0 = this.ctx.createBuffer(1, len0, sr);
    const data0 = buf0.getChannelData(0);
    const root0 = [73.42, 58.27, 65.41, 55.0]; // Dm -> Bb -> C -> Am
    const bPat0 = [0, 12, 0, 12, 3, 12, 0, 7, 0, 12, 0, 12, 3, 12, 5, 12];
    const mel0 = [
      [293.66, 0, 349.23, 0, 392.0, 0, 440.0, 0, 349.23, 0, 293.66, 0, 349.23, 0, 392.0, 0],
      [466.16, 0, 440.0, 0, 392.0, 0, 349.23, 0, 392.0, 0, 440.0, 0, 392.0, 0, 349.23, 0],
      [392.0, 0, 440.0, 0, 523.25, 0, 587.33, 0, 523.25, 0, 440.0, 0, 523.25, 0, 587.33, 0],
      [659.25, 0, 587.33, 0, 554.37, 0, 587.33, 0, 440.0, 0, 349.23, 0, 293.66, 0, 0, 0]
    ];
    for (let i = 0; i < len0; i++) {
      const t = i / sr;
      const beat = t / spb0;
      const step16 = Math.floor(beat * 4) % 16;
      const bar = Math.floor(beat / 4) % 4;
      const stepTime = (beat * 4 - Math.floor(beat * 4)) * (spb0 / 4);
      let s = 0;
      if (step16 === 0 || step16 === 6 || step16 === 8 || step16 === 14) {
        const kFreq = 145 * Math.exp(-stepTime * 28) + 32;
        s += Math.sin(2 * Math.PI * kFreq * stepTime) * Math.exp(-stepTime * 14) * 0.38;
      }
      if (step16 === 4 || step16 === 12) {
        s += (Math.random() * 2 - 1) * Math.exp(-stepTime * 22) * 0.22;
      }
      if (step16 % 4 === 2) {
        s += (Math.random() * 2 - 1) * Math.exp(-stepTime * 55) * 0.12;
      }
      const root = root0[bar];
      const bFreq = root * Math.pow(2, bPat0[step16] / 12);
      const bWave = Math.sin(2 * Math.PI * bFreq * stepTime) * 0.6 + Math.sin(2 * Math.PI * bFreq * 2 * stepTime) * 0.3;
      s += bWave * Math.exp(-stepTime * 10) * 0.28;
      const mFreq = mel0[bar][step16];
      if (mFreq > 0) {
        const mWave = Math.sin(2 * Math.PI * mFreq * stepTime) * 0.7 + Math.sin(2 * Math.PI * mFreq * 2 * stepTime) * 0.2;
        s += mWave * Math.exp(-stepTime * 8) * 0.22;
      }
      data0[i] = Math.max(-1.0, Math.min(1.0, s));
    }
    this.bgmBuffers[0] = buf0;

    // ==========================================
    // トラック1: 電脳空間 (8-Bit Chiptune) - BPM 138
    // ==========================================
    const bpm1 = 138;
    const spb1 = 60 / bpm1;
    const len1 = Math.floor(sr * spb1 * 16);
    const buf1 = this.ctx.createBuffer(1, len1, sr);
    const data1 = buf1.getChannelData(0);
    const root1 = [65.41, 49.0, 55.0, 43.65]; // C2 -> G1 -> A1 -> F1
    const mel1 = [
      [523.25, 0, 659.25, 0, 783.99, 0, 659.25, 0, 523.25, 0, 392.0, 0, 523.25, 0, 587.33, 0],
      [493.88, 0, 587.33, 0, 783.99, 0, 587.33, 0, 493.88, 0, 392.0, 0, 493.88, 0, 523.25, 0],
      [440.0, 0, 523.25, 0, 659.25, 0, 523.25, 0, 440.0, 0, 329.63, 0, 440.0, 0, 493.88, 0],
      [440.0, 0, 523.25, 0, 698.46, 0, 659.25, 0, 587.33, 0, 523.25, 0, 587.33, 0, 493.88, 0]
    ];
    for (let i = 0; i < len1; i++) {
      const t = i / sr;
      const beat = t / spb1;
      const step16 = Math.floor(beat * 4) % 16;
      const bar = Math.floor(beat / 4) % 4;
      const stepTime = (beat * 4 - Math.floor(beat * 4)) * (spb1 / 4);
      let s = 0;
      if (step16 === 0 || step16 === 8 || step16 === 10) {
        const kf = 160 * Math.exp(-stepTime * 35) + 40;
        s += squareWave(kf, stepTime, 0.5) * Math.exp(-stepTime * 18) * 0.28;
      }
      if (step16 === 4 || step16 === 12) {
        const quantNoise = Math.floor(Math.random() * 5 - 2) / 2;
        s += quantNoise * Math.exp(-stepTime * 25) * 0.22;
      }
      if (step16 % 2 === 0) {
        s += (Math.random() > 0.5 ? 1 : -1) * Math.exp(-stepTime * 65) * 0.08;
      }
      const rFreq = root1[bar];
      const octave = (step16 % 4 === 2 || step16 % 4 === 3) ? 2.0 : 1.0;
      s += squareWave(rFreq * octave, stepTime, 0.25) * Math.exp(-stepTime * 8) * 0.24;
      const mFreq = mel1[bar][step16];
      if (mFreq > 0) {
        let curMelFreq = mFreq;
        if (stepTime < 0.03) curMelFreq = mFreq * 1.5;
        s += squareWave(curMelFreq, stepTime, 0.5) * Math.exp(-stepTime * 6) * 0.26;
      }
      data1[i] = Math.max(-1.0, Math.min(1.0, s));
    }
    this.bgmBuffers[1] = buf1;

    // ==========================================
    // トラック2: 紅蓮闘技 (Inferno Rock) - BPM 148
    // ==========================================
    const bpm2 = 148;
    const spb2 = 60 / bpm2;
    const len2 = Math.floor(sr * spb2 * 16);
    const buf2 = this.ctx.createBuffer(1, len2, sr);
    const data2 = buf2.getChannelData(0);
    const root2 = [41.2, 32.7, 36.7, 30.87]; // E1 -> C1 -> D1 -> B0
    const mel2 = [
      [329.63, 392.0, 493.88, 659.25, 587.33, 493.88, 392.0, 329.63, 493.88, 0, 493.88, 0, 587.33, 0, 659.25, 0],
      [523.25, 0, 659.25, 0, 783.99, 0, 659.25, 0, 523.25, 0, 659.25, 0, 783.99, 0, 880.0, 0],
      [587.33, 0, 739.99, 0, 880.0, 0, 739.99, 0, 587.33, 0, 739.99, 0, 880.0, 0, 987.77, 0],
      [493.88, 0, 587.33, 0, 739.99, 0, 880.0, 0, 987.77, 0, 880.0, 0, 739.99, 0, 659.25, 0]
    ];
    for (let i = 0; i < len2; i++) {
      const t = i / sr;
      const beat = t / spb2;
      const step16 = Math.floor(beat * 4) % 16;
      const bar = Math.floor(beat / 4) % 4;
      const stepTime = (beat * 4 - Math.floor(beat * 4)) * (spb2 / 4);
      let s = 0;
      if (step16 === 0 || step16 === 2 || step16 === 6 || step16 === 8 || step16 === 10 || step16 === 14) {
        const kf = 175 * Math.exp(-stepTime * 32) + 38;
        s += Math.sin(2 * Math.PI * kf * stepTime) * Math.exp(-stepTime * 16) * 0.42;
      }
      if (step16 === 4 || step16 === 12) {
        const tone = Math.sin(2 * Math.PI * 220 * stepTime) * Math.exp(-stepTime * 18) * 0.25;
        const crack = (Math.random() * 2 - 1) * Math.exp(-stepTime * 20) * 0.35;
        s += tone + crack;
      }
      s += (Math.random() * 2 - 1) * Math.exp(-stepTime * 50) * (step16 === 0 ? 0.25 : 0.1);

      const r = root2[bar];
      const riffPitch = [0, 0, 7, 0, 10, 0, 7, 0, 0, 0, 7, 0, 12, 10, 7, 5][step16];
      const bFreq = r * Math.pow(2, riffPitch / 12);
      let saw = 0;
      for (let h = 1; h <= 6; h++) saw += (Math.sin(2 * Math.PI * bFreq * h * stepTime) / h) * 0.4;
      saw = Math.tanh(saw * 2.8) * 0.32;
      s += saw * Math.exp(-stepTime * 8);

      const mFreq = mel2[bar][step16];
      if (mFreq > 0) {
        const lead = Math.sin(2 * Math.PI * mFreq * stepTime) * 0.6 + Math.sin(2 * Math.PI * (mFreq * 1.004) * stepTime) * 0.3;
        s += lead * Math.exp(-stepTime * 6) * 0.24;
      }
      data2[i] = Math.max(-1.0, Math.min(1.0, s));
    }
    this.bgmBuffers[2] = buf2;

    // ==========================================
    // トラック3: 静寂神殿 (Sacred Minimal) - BPM 112
    // ==========================================
    const bpm3 = 112;
    const spb3 = 60 / bpm3;
    const len3 = Math.floor(sr * spb3 * 16);
    const buf3 = this.ctx.createBuffer(1, len3, sr);
    const data3 = buf3.getChannelData(0);
    const root3 = [55.0, 43.65, 36.71, 41.2]; // A1 -> F1 -> D1 -> E1
    const arpeggioChords = [
      [440.0, 523.25, 659.25, 880.0],
      [349.23, 440.0, 523.25, 698.46],
      [293.66, 349.23, 440.0, 587.33],
      [329.63, 392.0, 493.88, 659.25]
    ];
    for (let i = 0; i < len3; i++) {
      const t = i / sr;
      const beat = t / spb3;
      const step16 = Math.floor(beat * 4) % 16;
      const bar = Math.floor(beat / 4) % 4;
      const stepTime = (beat * 4 - Math.floor(beat * 4)) * (spb3 / 4);
      let s = 0;
      if (step16 === 0 || step16 === 8) {
        const kf = 110 * Math.exp(-stepTime * 24) + 28;
        s += Math.sin(2 * Math.PI * kf * stepTime) * Math.exp(-stepTime * 10) * 0.35;
      }
      if (step16 === 4 || step16 === 12) {
        s += Math.sin(2 * Math.PI * 1800 * stepTime) * Math.exp(-stepTime * 70) * 0.18;
      }
      if (step16 % 4 === 2) {
        s += (Math.random() * 2 - 1) * Math.exp(-stepTime * 60) * 0.08;
      }
      const r = root3[bar];
      s += Math.sin(2 * Math.PI * r * stepTime) * Math.exp(-stepTime * 5) * 0.32;
      const chord = arpeggioChords[bar];
      const bellFreq = chord[step16 % 4];
      const mod = Math.sin(2 * Math.PI * bellFreq * 3.5 * stepTime) * 2.0 * Math.exp(-stepTime * 14);
      const bell = Math.sin(2 * Math.PI * bellFreq * stepTime + mod) * Math.exp(-stepTime * 5);
      s += bell * 0.22;
      data3[i] = Math.max(-1.0, Math.min(1.0, s));
    }
    this.bgmBuffers[3] = buf3;
  }

  createBuffer(duration, waveFn) {
    const sr = this.ctx.sampleRate;
    const len = Math.floor(sr * duration);
    const buf = this.ctx.createBuffer(1, len, sr);
    const data = buf.getChannelData(0);
    for (let i = 0; i < len; i++) {
      data[i] = waveFn(i / sr);
    }
    return buf;
  }

  // --- 再生メソッド（メモリ直接ストリーム） ---
  play(name, volume = 1.0) {
    if (this.isMuted || !this.ctx || !this.sfxBuffers[name]) return;
    try {
      if (this.ctx.state === 'suspended') this.ctx.resume();
      const src = this.ctx.createBufferSource();
      const gain = this.ctx.createGain();
      src.buffer = this.sfxBuffers[name];
      gain.gain.setValueAtTime(volume, this.ctx.currentTime);
      src.connect(gain);
      gain.connect(this.masterGain);
      src.start(this.ctx.currentTime);
    } catch (e) {}
  }

  playClick(skinId = 'DEFAULT') { this.play('click', 0.8); }
  playOverrideCrash() { this.play('override', 0.95); }
  playFlip(index = 0) {
    const key = `flip_${Math.min(7, Math.max(0, index))}`;
    this.play(key, 0.75);
  }
  playItemGet() { this.play('item_get', 0.8); }
  playLightningBoom() { this.play('lightning', 0.9); }
  playFreezeGlass() { this.play('freeze', 0.8); }
  playPotion() { this.play('potion', 0.9); }
  playVictory() { this.play('victory', 0.85); }
  playWarning() { this.play('alarm', 0.7); }
  playBlackHole() { this.play('override', 0.85); }
  playMagicPaint() { this.play('item_get', 0.8); }
  playHyperBlastBoom() { this.play('lightning', 1.0); }
  playThunderHyper() { this.play('lightning', 1.0); }
  playEnchantSlam() { this.play('override', 1.0); }
  playNoiseHit(d, f, v) { this.play('override', v); }

  // --- タイトル用アンビエント音 ---
  startTitleAmbient() {
    if (this.titleAmbientPlaying || !this.ctx || !this.sfxBuffers['title_ambient']) return;
    try {
      this.titleAmbientSource = this.ctx.createBufferSource();
      this.titleAmbientSource.buffer = this.sfxBuffers['title_ambient'];
      this.titleAmbientSource.loop = true;
      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.35, this.ctx.currentTime);
      this.titleAmbientSource.connect(gain);
      gain.connect(this.masterGain);
      this.titleAmbientSource.start(0);
      this.titleAmbientPlaying = true;
    } catch (e) {}
  }

  stopTitleAmbient() {
    if (this.titleAmbientSource) {
      try {
        this.titleAmbientSource.stop();
        this.titleAmbientSource.disconnect();
      } catch (e) {}
      this.titleAmbientSource = null;
      this.titleAmbientPlaying = false;
    }
  }

    // --- BGM制御（全トラック完全切替・即時試聴・シームレス継続・確実な速度リセット） ---
  startBgm(forceRestart = false) {
    this.stopTitleAmbient();
    if (!forceRestart && this.bgmSource && this.playingTrackIndex === this.currentTrackIndex) {
      return; // 既に同じトラックが再生中なら途切れさせず継続
    }
    this.stopBgm();
    if (!this.ctx) return;
    try {
      if (this.ctx.state === 'suspended') this.ctx.resume();
      const buf = this.bgmBuffers[this.currentTrackIndex] || this.bgmBuffers[0];
      if (!buf) return;

      this.bgmSource = this.ctx.createBufferSource();
      this.bgmSource.buffer = buf;
      this.bgmSource.loop = true;
      // 新規開始時は常に等速 1.0 (クライマックス時のみ 1.22)
      const targetRate = this.isClimax ? 1.22 : 1.0;
      this.bgmSource.playbackRate.setValueAtTime(targetRate, this.ctx.currentTime);
      this.bgmSource.connect(this.bgmGain);
      this.bgmSource.start(0);
      this.playingTrackIndex = this.currentTrackIndex;
    } catch (e) {
      console.warn('startBgm error:', e);
    }
  }

  stopBgm() {
    this.isClimax = false; // クライマックス状態を確実に解除！
    if (this.bgmSource) {
      try {
        if (this.ctx) {
          this.bgmSource.playbackRate.setValueAtTime(1.0, this.ctx.currentTime);
        }
        this.bgmSource.stop();
        this.bgmSource.disconnect();
      } catch (e) {}
      this.bgmSource = null;
      this.playingTrackIndex = -1;
    }
  }

  setClimax(active) {
    this.isClimax = !!active;
    if (active) this.playWarning();
    if (this.bgmSource && this.ctx) {
      try {
        // activeがfalseなら確実に等速 1.0 に戻す！
        this.bgmSource.playbackRate.setValueAtTime(active ? 1.22 : 1.0, this.ctx.currentTime);
      } catch (e) {}
    }
  }

  setTrack(idx, immediate = true) {
    this.isClimax = false; // 曲変更時は必ず等速にリセット！
    this.currentTrackIndex = ((idx % this.bgmTracks.length) + this.bgmTracks.length) % this.bgmTracks.length;
    if (immediate) {
      this.startBgm(true); // 即座に新しい曲を等速で再生（試聴＆本番連動）
    }
  }
}

const audio = new SoundEngine();
