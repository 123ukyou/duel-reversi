/**
 * DUEL REVERSI - Real-Time P2P Online Synchronizer (WebRTC / PeerJS)
 * リアルタイム対戦オセロの「石配置・カーソル移動・天空光柱アイテム・クライマックス奇跡・310種ドット絵初期配置」を
 * サーバーを介さずブラウザ間で直接同期する超低遅延P2P通信エンジン
 */
class DuelNetworkManager {
  constructor() {
    this.peer = null;
    this.conn = null;
    this.isHost = false;
    this.isConnected = false;
    this.roomId = null;
    this.pingMs = 0;
    this.pingTimer = null;
  }

  generateRoomCode() {
    const num = Math.floor(1000 + Math.random() * 9000);
    return `DUEL-${num}`;
  }

  createRoom(onCreated, onError) {
    this.cleanup();
    if (typeof Peer === 'undefined') {
      if (onError) onError('PeerJSライブラリの読み込みに失敗しました（ネット接続を確認してください）');
      return;
    }

    this.isHost = true;
    const code = this.generateRoomCode();
    const peerId = `duel-reversi-rt-${code.toLowerCase()}`;

    try {
      this.peer = new Peer(peerId, { debug: 1 });
    } catch (e) {
      if (onError) onError('P2P初期化エラー: ' + e.message);
      return;
    }

    this.peer.on('open', () => {
      this.roomId = code;
      if (onCreated) onCreated(code);
    });

    this.peer.on('connection', (connection) => {
      if (this.conn && this.conn.open) {
        connection.close();
        return;
      }
      this.bindConnection(connection);
    });

    this.peer.on('error', (err) => {
      console.warn('PeerJS Host Error:', err);
      if (onError) onError('通信エラー: ' + (err.type || err.message));
    });
  }

  joinRoom(rawCode, onConnecting, onError) {
    this.cleanup();
    if (typeof Peer === 'undefined') {
      if (onError) onError('PeerJSライブラリが読み込まれていません');
      return;
    }

    const clean = (rawCode || '').trim().toUpperCase();
    if (!clean) {
      if (onError) onError('ルームIDを入力してください');
      return;
    }

    this.isHost = false;
    this.roomId = clean.startsWith('DUEL-') ? clean : `DUEL-${clean}`;
    const targetPeerId = `duel-reversi-rt-${this.roomId.toLowerCase()}`;

    if (onConnecting) onConnecting(this.roomId);

    try {
      this.peer = new Peer({ debug: 1 });
    } catch (e) {
      if (onError) onError('P2P初期化エラー: ' + e.message);
      return;
    }

    this.peer.on('open', () => {
      const connection = this.peer.connect(targetPeerId, {
        reliable: true,
        serialization: 'json'
      });
      this.bindConnection(connection);
    });

    this.peer.on('error', (err) => {
      console.warn('PeerJS Join Error:', err);
      if (onError) onError('部屋が見つからないか接続できませんでした (' + (err.type || err.message) + ')');
    });
  }

  bindConnection(connection) {
    this.conn = connection;

    this.conn.on('open', () => {
      this.isConnected = true;
      this.startPingLoop();

      const g = window.duelGame;
      if (g) {
        g.mode = 'PVP_ONLINE';
        g.onlineRole = this.isHost ? 'HOST' : 'GUEST';
        g.onlineRoomId = this.roomId;
        g.state = 'MODE_SELECT';
        if (typeof audio !== 'undefined') {
          audio.init();
          audio.playItemGet();
        }
        const roleText = this.isHost ? 'ホスト(1P/黒)' : 'ゲスト(2P/白)';
        g.showBanner(`🌐 P2P接続完了！あなたは【${roleText}】です！`, '#c084fc', 3.0);
      }

      if (window.updateOnlineLobbyUI) {
        window.updateOnlineLobbyUI('connected', `接続完了！ルーム [${this.roomId}] (${this.isHost ? '1P ホスト' : '2P ゲスト'})`);
      }
      setTimeout(() => {
        if (window.closeOnlineLobbyModal) window.closeOnlineLobbyModal();
      }, 650);
    });

    this.conn.on('data', (packet) => {
      if (!packet || typeof packet !== 'object') return;

      if (packet.t === 'PING') {
        this.send({ t: 'PONG', ts: packet.ts });
        return;
      }
      if (packet.t === 'PONG') {
        this.pingMs = Math.max(1, Math.round(performance.now() - packet.ts));
        if (window.duelGame) window.duelGame.onlinePing = this.pingMs;
        const badge = document.getElementById('p2p-floating-btn');
        if (badge && this.isConnected) {
          badge.textContent = `🌐 ONLINE: ${this.roomId} (${this.pingMs}ms)`;
        }
        return;
      }

      const g = window.duelGame;
      if (!g) return;

      if (packet.t === 'START_MATCH') {
        g.mode = 'PVP_ONLINE';
        g.startMatch(packet);
      } else if (packet.t === 'MOVE') {
        const targetPlayer = packet.p === 1 ? g.p1 : g.p2;
        targetPlayer.cursor = { r: packet.r, c: packet.c };
        g.executeMove(targetPlayer, packet.r, packet.c, true);
      } else if (packet.t === 'CURSOR') {
        const targetPlayer = packet.p === 1 ? g.p1 : g.p2;
        targetPlayer.cursor = { r: packet.r, c: packet.c };
      } else if (packet.t === 'SPAWN_ITEM') {
        g.spawnItem(packet);
      } else if (packet.t === 'CLIMAX') {
        g.triggerClimax(packet.event);
      }
    });

    this.conn.on('close', () => {
      const wasConnected = this.isConnected;
      this.cleanup();
      if (wasConnected) {
        const g = window.duelGame;
        if (g) {
          g.onlineRole = null;
          g.onlineRoomId = null;
          if (g.mode === 'PVP_ONLINE') g.mode = 'PVP_LOCAL';
          g.showBanner('⚠️ 相手のP2P通信が切断されました（ローカルモードに戻ります）', '#ef4444', 3.0);
        }
        if (window.updateOnlineLobbyUI) {
          window.updateOnlineLobbyUI('offline', '通信が切断されました');
        }
      }
    });
  }

  send(packet) {
    if (this.conn && this.conn.open) {
      try {
        this.conn.send(packet);
      } catch (e) {}
    }
  }

  startPingLoop() {
    if (this.pingTimer) clearInterval(this.pingTimer);
    this.pingTimer = setInterval(() => {
      if (this.isConnected) {
        this.send({ t: 'PING', ts: performance.now() });
      }
    }, 2000);
  }

  cleanup() {
    this.isConnected = false;
    if (this.pingTimer) {
      clearInterval(this.pingTimer);
      this.pingTimer = null;
    }
    if (this.conn) {
      try { this.conn.close(); } catch (e) {}
      this.conn = null;
    }
    if (this.peer) {
      try { this.peer.destroy(); } catch (e) {}
      this.peer = null;
    }
    const badge = document.getElementById('p2p-floating-btn');
    if (badge) {
      badge.textContent = '🌐 P2Pオンライン通信';
      badge.classList.remove('connected');
    }
  }
}

window.duelNet = new DuelNetworkManager();

// UIバインディング
window.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('p2p-lobby-modal');
  const floatingBtn = document.getElementById('p2p-floating-btn');
  const closeBtn = document.getElementById('p2p-close-btn');
  const createBtn = document.getElementById('p2p-create-btn');
  const joinBtn = document.getElementById('p2p-join-btn');
  const disconnectBtn = document.getElementById('p2p-disconnect-btn');
  const copyIdBtn = document.getElementById('p2p-copy-id');
  const copyUrlBtn = document.getElementById('p2p-copy-url');
  const roomInput = document.getElementById('p2p-room-input');
  const hostBox = document.getElementById('p2p-host-box');
  const hostCodeEl = document.getElementById('p2p-host-code');
  const statusDot = document.getElementById('p2p-status-dot');
  const statusText = document.getElementById('p2p-status-text');

  window.openOnlineLobbyModal = () => {
    if (modal) modal.classList.remove('hidden');
  };

  window.closeOnlineLobbyModal = () => {
    if (modal) modal.classList.add('hidden');
  };

  window.updateOnlineLobbyUI = (state, msg) => {
    if (statusText) statusText.textContent = msg;
    if (statusDot) {
      statusDot.className = 'p2p-dot ' + state;
    }
    if (floatingBtn) {
      if (state === 'connected') {
        floatingBtn.textContent = `🌐 ONLINE: ${window.duelNet.roomId}`;
        floatingBtn.classList.add('connected');
        if (disconnectBtn) disconnectBtn.classList.remove('hidden');
      } else {
        floatingBtn.textContent = '🌐 P2Pオンライン通信';
        floatingBtn.classList.remove('connected');
        if (disconnectBtn) disconnectBtn.classList.add('hidden');
      }
    }
  };

  if (floatingBtn) {
    floatingBtn.addEventListener('click', () => window.openOnlineLobbyModal());
  }
  if (closeBtn) {
    closeBtn.addEventListener('click', () => window.closeOnlineLobbyModal());
  }

  if (createBtn) {
    createBtn.addEventListener('click', () => {
      window.updateOnlineLobbyUI('waiting', 'ルームIDを発行しています...');
      window.duelNet.createRoom(
        (code) => {
          if (hostBox) hostBox.classList.remove('hidden');
          if (hostCodeEl) hostCodeEl.textContent = code;
          window.updateOnlineLobbyUI('waiting', `ルーム [${code}] を作成しました。友達の接続を待っています...`);
        },
        (err) => window.updateOnlineLobbyUI('offline', err)
      );
    });
  }

  if (joinBtn) {
    joinBtn.addEventListener('click', () => {
      const code = roomInput ? roomInput.value : '';
      window.duelNet.joinRoom(
        code,
        (c) => window.updateOnlineLobbyUI('waiting', `ルーム [${c}] に接続しています...`),
        (err) => window.updateOnlineLobbyUI('offline', err)
      );
    });
  }

  if (copyIdBtn) {
    copyIdBtn.addEventListener('click', () => {
      const code = hostCodeEl ? hostCodeEl.textContent : '';
      navigator.clipboard.writeText(code);
      copyIdBtn.textContent = '✅ コピー完了!';
      setTimeout(() => { copyIdBtn.textContent = '📋 IDをコピー'; }, 1500);
    });
  }

  if (copyUrlBtn) {
    copyUrlBtn.addEventListener('click', () => {
      const code = hostCodeEl ? hostCodeEl.textContent : '';
      const url = `${window.location.origin}${window.location.pathname}?room=${code}`;
      navigator.clipboard.writeText(url);
      copyUrlBtn.textContent = '✅ URLコピー完了!';
      setTimeout(() => { copyUrlBtn.textContent = '🔗 招待URLコピー'; }, 1500);
    });
  }

  if (disconnectBtn) {
    disconnectBtn.addEventListener('click', () => {
      window.duelNet.cleanup();
      if (hostBox) hostBox.classList.add('hidden');
      if (window.duelGame) {
        window.duelGame.onlineRole = null;
        window.duelGame.onlineRoomId = null;
        if (window.duelGame.mode === 'PVP_ONLINE') window.duelGame.mode = 'PVP_LOCAL';
      }
      window.updateOnlineLobbyUI('offline', '通信を切断し、ローカルモードに戻りました');
    });
  }

  // URLパラメータ ?room=DUEL-XXXX からの自動ロビー展開
  const params = new URLSearchParams(window.location.search);
  const roomParam = params.get('room');
  if (roomParam && roomInput) {
    roomInput.value = roomParam;
    window.openOnlineLobbyModal();
  }
});
