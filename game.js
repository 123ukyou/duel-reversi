/**
 * DUEL REVERSI - Constants & Definitions
 */

const P1_COLOR = 1;
const P2_COLOR = 2;

const ITEM_TYPES = {
  MAGNET: { id: 'MAGNET', name: '/**
 * DUEL REVERSI - Constants & Definitions
 */

const P1_COLOR = 1;
const P2_COLOR = 2;

const ITEM_TYPES = {
  MAGNET: { id: 'MAGNET', name: '磁気破砕', icon: '🧲', desc: '重力ブラックホールで2x2を更地化' },
  PAINT: { id: 'PAINT', name: '領域侵食', icon: '🎨', desc: '魔法陣で周囲2x2を一瞬で自色化' },
  GOLD: { id: 'GOLD', name: '不壊金石', icon: '👑', desc: '【終盤限定】雷撃ズドン！永久不壊の神石' },
  HYPER: { id: 'HYPER', name: '神速魔力', icon: '⚡', desc: '4秒間クールダウン0連打' },
  FREEZE: { id: 'FREEZE', name: '絶対凍結', icon: '❄️', desc: '相手の行動を3秒完全停止' },
  POTION: { id: 'POTION', name: '生命の秘薬', icon: '💖', desc: '【緊急回復】周囲に自色の石を一気に3〜4枚再展開！' }
};

// 5大ボス デフォルト美麗ベクターイラスト (SVG Data URIs)
const BOSS_DEFAULT_IMAGES = {
  1: 'data:image/svg+xml;utf8,' + encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 320">
      <defs>
        <radialGradient id="bg1" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#0e7490" />
          <stop offset="60%" stop-color="#083344" />
          <stop offset="100%" stop-color="#020617" />
        </radialGradient>
        <linearGradient id="frost" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#67e8f9" />
          <stop offset="100%" stop-color="#bae6fd" />
        </linearGradient>
      </defs>
      <rect width="320" height="320" rx="16" fill="url(#bg1)" />
      <polygon points="160,20 175,90 230,60 190,115 255,135 185,155 240,205 170,195 160,260 150,195 80,205 135,155 65,135 130,115 90,60 145,90" fill="url(#frost)" opacity="0.25"/>
      <path d="M100 280 C90 200, 110 130, 160 100 C210 130, 230 200, 220 280 Z" fill="#0f172a" stroke="#38bdf8" stroke-width="3"/>
      <circle cx="160" cy="125" r="42" fill="#f8fafc"/>
      <path d="M125 105 C135 70, 185 70, 195 105 C210 135, 215 165, 215 190 C185 185, 135 185, 105 190 C105 165, 110 135, 125 105 Z" fill="#38bdf8" opacity="0.9"/>
      <ellipse cx="148" cy="125" rx="5" ry="7" fill="#0284c7"/>
      <ellipse cx="172" cy="125" rx="5" ry="7" fill="#0284c7"/>
      <circle cx="149" cy="123" r="2" fill="#ffffff"/>
      <circle cx="173" cy="123" r="2" fill="#ffffff"/>
      <path d="M152 142 Q160 148 168 142" stroke="#0284c7" stroke-width="2" fill="none"/>
      <polygon points="160,50 172,75 198,75 177,90 185,115 160,100 135,115 143,90 122,75 148,75" fill="#a5f3fc" stroke="#38bdf8" stroke-width="2"/>
      <text x="160" y="300" font-size="16" font-weight="bold" fill="#7dd3fc" text-anchor="middle" font-family="sans-serif">❄️ 氷結の魔女 エルサリア</text>
    </svg>`),
  2: 'data:image/svg+xml;utf8,' + encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 320">
      <defs>
        <radialGradient id="bg2" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#7f1d1d" />
          <stop offset="60%" stop-color="#450a0a" />
          <stop offset="100%" stop-color="#020617" />
        </radialGradient>
      </defs>
      <rect width="320" height="320" rx="16" fill="url(#bg2)" />
      <circle cx="160" cy="140" r="70" fill="#1c1917" stroke="#ea580c" stroke-width="5"/>
      <path d="M160 70 Q180 40 205 35" stroke="#f97316" stroke-width="4" fill="none"/>
      <circle cx="207" cy="34" r="7" fill="#facc15"/>
      <rect x="130" y="115" width="22" height="15" rx="3" fill="#f97316"/>
      <rect x="168" y="115" width="22" height="15" rx="3" fill="#f97316"/>
      <path d="M135 155 Q160 180 185 155" stroke="#ea580c" stroke-width="5" fill="none"/>
      <text x="160" y="300" font-size="16" font-weight="bold" fill="#fdba74" text-anchor="middle" font-family="sans-serif">💣 狂乱の爆撃卿 ボンバート</text>
    </svg>`),
  3: 'data:image/svg+xml;utf8,' + encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 320">
      <defs>
        <radialGradient id="bg3" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#1e1b4b" />
          <stop offset="60%" stop-color="#0f172a" />
          <stop offset="100%" stop-color="#020617" />
        </radialGradient>
      </defs>
      <rect width="320" height="320" rx="16" fill="url(#bg3)" />
      <polygon points="160,50 200,90 190,140 220,130 180,180 230,170 170,230 160,250 150,230 90,170 140,180 100,130 130,140 120,90" fill="#60a5fa" opacity="0.3"/>
      <circle cx="160" cy="140" r="50" fill="#0f172a" stroke="#00f0ff" stroke-width="4"/>
      <polygon points="160,70 185,130 145,130 170,190 135,140 155,140" fill="#facc15"/>
      <text x="160" y="300" font-size="16" font-weight="bold" fill="#93c5fd" text-anchor="middle" font-family="sans-serif">⚡ 電脳の神速王 ヴォルテクス</text>
    </svg>`),
  4: 'data:image/svg+xml;utf8,' + encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 320">
      <defs>
        <radialGradient id="bg4" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#064e3b" />
          <stop offset="60%" stop-color="#022c22" />
          <stop offset="100%" stop-color="#020617" />
        </radialGradient>
      </defs>
      <rect width="320" height="320" rx="16" fill="url(#bg4)" />
      <rect x="100" y="80" width="120" height="120" rx="20" fill="#1e293b" stroke="#10b981" stroke-width="6"/>
      <rect x="120" y="110" width="80" height="20" rx="6" fill="#065f46"/>
      <circle cx="145" cy="120" r="6" fill="#34d399"/>
      <circle cx="175" cy="120" r="6" fill="#34d399"/>
      <rect x="130" y="145" width="60" height="35" rx="4" fill="#047857"/>
      <text x="160" y="300" font-size="16" font-weight="bold" fill="#6ee7b7" text-anchor="middle" font-family="sans-serif">🗿 不壊の巨神兵 ゴレムス</text>
    </svg>`),
  5: 'data:image/svg+xml;utf8,' + encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 320">
      <defs>
        <radialGradient id="bg5" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#3b0764" />
          <stop offset="60%" stop-color="#1e0136" />
          <stop offset="100%" stop-color="#020617" />
        </radialGradient>
      </defs>
      <rect width="320" height="320" rx="16" fill="url(#bg5)" />
      <circle cx="160" cy="140" r="80" fill="none" stroke="#a855f7" stroke-width="2" stroke-dasharray="8 6"/>
      <circle cx="160" cy="140" r="55" fill="#090012" stroke="#c084fc" stroke-width="4"/>
      <ellipse cx="160" cy="140" rx="28" ry="16" fill="#f43f5e"/>
      <circle cx="160" cy="140" r="9" fill="#ffffff"/>
      <text x="160" y="300" font-size="16" font-weight="bold" fill="#e9d5ff" text-anchor="middle" font-family="sans-serif">👁️ 虚無の魔神 デウス・エクス・マキナ</text>
    </svg>`)
};

// ダンジョン5大ボス定義


// --- ドットアート初期配置定義 (黒白同数・1手目挟み反転数学的保証) ---
const DOT_ART_PATTERNS = {
  "SNOWFLAKE": [
    {
      "r": 2,
      "c": 3,
      "color": 1
    },
    {
      "r": 2,
      "c": 4,
      "color": 2
    },
    {
      "r": 3,
      "c": 2,
      "color": 2
    },
    {
      "r": 3,
      "c": 5,
      "color": 1
    },
    {
      "r": 3,
      "c": 3,
      "color": 1
    },
    {
      "r": 3,
      "c": 4,
      "color": 2
    },
    {
      "r": 4,
      "c": 3,
      "color": 2
    },
    {
      "r": 4,
      "c": 4,
      "color": 1
    },
    {
      "r": 4,
      "c": 2,
      "color": 1
    },
    {
      "r": 4,
      "c": 5,
      "color": 2
    },
    {
      "r": 5,
      "c": 3,
      "color": 2
    },
    {
      "r": 5,
      "c": 4,
      "color": 1
    }
  ],
  "SKULL": [
    {
      "r": 2,
      "c": 2,
      "color": 2
    },
    {
      "r": 2,
      "c": 3,
      "color": 2
    },
    {
      "r": 2,
      "c": 4,
      "color": 1
    },
    {
      "r": 2,
      "c": 5,
      "color": 1
    },
    {
      "r": 3,
      "c": 2,
      "color": 1
    },
    {
      "r": 3,
      "c": 3,
      "color": 1
    },
    {
      "r": 3,
      "c": 4,
      "color": 2
    },
    {
      "r": 3,
      "c": 5,
      "color": 2
    },
    {
      "r": 4,
      "c": 3,
      "color": 2
    },
    {
      "r": 4,
      "c": 4,
      "color": 1
    },
    {
      "r": 5,
      "c": 3,
      "color": 1
    },
    {
      "r": 5,
      "c": 4,
      "color": 2
    }
  ],
  "THUNDER": [
    {
      "r": 1,
      "c": 4,
      "color": 2
    },
    {
      "r": 2,
      "c": 3,
      "color": 2
    },
    {
      "r": 2,
      "c": 4,
      "color": 1
    },
    {
      "r": 3,
      "c": 2,
      "color": 1
    },
    {
      "r": 3,
      "c": 3,
      "color": 2
    },
    {
      "r": 3,
      "c": 4,
      "color": 1
    },
    {
      "r": 4,
      "c": 3,
      "color": 1
    },
    {
      "r": 4,
      "c": 4,
      "color": 2
    },
    {
      "r": 4,
      "c": 5,
      "color": 1
    },
    {
      "r": 5,
      "c": 3,
      "color": 1
    },
    {
      "r": 5,
      "c": 4,
      "color": 2
    },
    {
      "r": 6,
      "c": 3,
      "color": 2
    }
  ],
  "SHIELD": [
    {
      "r": 2,
      "c": 2,
      "color": 2
    },
    {
      "r": 2,
      "c": 3,
      "color": 2
    },
    {
      "r": 2,
      "c": 4,
      "color": 1
    },
    {
      "r": 2,
      "c": 5,
      "color": 1
    },
    {
      "r": 3,
      "c": 2,
      "color": 1
    },
    {
      "r": 3,
      "c": 3,
      "color": 1
    },
    {
      "r": 3,
      "c": 4,
      "color": 2
    },
    {
      "r": 3,
      "c": 5,
      "color": 2
    },
    {
      "r": 4,
      "c": 3,
      "color": 2
    },
    {
      "r": 4,
      "c": 4,
      "color": 1
    },
    {
      "r": 5,
      "c": 3,
      "color": 1
    },
    {
      "r": 5,
      "c": 4,
      "color": 2
    }
  ],
  "PROVIDENCE": [
    {
      "r": 2,
      "c": 3,
      "color": 1
    },
    {
      "r": 2,
      "c": 4,
      "color": 2
    },
    {
      "r": 3,
      "c": 2,
      "color": 2
    },
    {
      "r": 3,
      "c": 3,
      "color": 2
    },
    {
      "r": 3,
      "c": 4,
      "color": 2
    },
    {
      "r": 3,
      "c": 5,
      "color": 1
    },
    {
      "r": 4,
      "c": 2,
      "color": 1
    },
    {
      "r": 4,
      "c": 3,
      "color": 1
    },
    {
      "r": 4,
      "c": 4,
      "color": 1
    },
    {
      "r": 4,
      "c": 5,
      "color": 2
    },
    {
      "r": 5,
      "c": 3,
      "color": 2
    },
    {
      "r": 5,
      "c": 4,
      "color": 1
    }
  ],
  "CIRCLE": [
    {
      "r": 2,
      "c": 3,
      "color": 1
    },
    {
      "r": 2,
      "c": 4,
      "color": 2
    },
    {
      "r": 3,
      "c": 2,
      "color": 2
    },
    {
      "r": 3,
      "c": 5,
      "color": 1
    },
    {
      "r": 4,
      "c": 2,
      "color": 1
    },
    {
      "r": 4,
      "c": 5,
      "color": 2
    },
    {
      "r": 5,
      "c": 3,
      "color": 2
    },
    {
      "r": 5,
      "c": 4,
      "color": 1
    },
    {
      "r": 3,
      "c": 3,
      "color": 2
    },
    {
      "r": 3,
      "c": 4,
      "color": 1
    },
    {
      "r": 4,
      "c": 3,
      "color": 2
    },
    {
      "r": 4,
      "c": 4,
      "color": 1
    }
  ],
  "CROSS": [
    {
      "r": 2,
      "c": 3,
      "color": 2
    },
    {
      "r": 2,
      "c": 4,
      "color": 1
    },
    {
      "r": 3,
      "c": 1,
      "color": 1
    },
    {
      "r": 3,
      "c": 2,
      "color": 1
    },
    {
      "r": 3,
      "c": 5,
      "color": 2
    },
    {
      "r": 3,
      "c": 6,
      "color": 2
    },
    {
      "r": 3,
      "c": 3,
      "color": 2
    },
    {
      "r": 3,
      "c": 4,
      "color": 1
    },
    {
      "r": 4,
      "c": 3,
      "color": 1
    },
    {
      "r": 4,
      "c": 4,
      "color": 2
    },
    {
      "r": 5,
      "c": 3,
      "color": 1
    },
    {
      "r": 5,
      "c": 4,
      "color": 2
    }
  ],
  "LETTER_M": [
    {
      "r": 2,
      "c": 2,
      "color": 1
    },
    {
      "r": 2,
      "c": 5,
      "color": 2
    },
    {
      "r": 3,
      "c": 2,
      "color": 2
    },
    {
      "r": 3,
      "c": 3,
      "color": 2
    },
    {
      "r": 3,
      "c": 4,
      "color": 1
    },
    {
      "r": 3,
      "c": 5,
      "color": 1
    },
    {
      "r": 4,
      "c": 2,
      "color": 1
    },
    {
      "r": 4,
      "c": 3,
      "color": 1
    },
    {
      "r": 4,
      "c": 4,
      "color": 2
    },
    {
      "r": 4,
      "c": 5,
      "color": 2
    },
    {
      "r": 5,
      "c": 2,
      "color": 1
    },
    {
      "r": 5,
      "c": 5,
      "color": 2
    }
  ],
  "STAR": [
    {
      "r": 2,
      "c": 3,
      "color": 2
    },
    {
      "r": 2,
      "c": 4,
      "color": 1
    },
    {
      "r": 3,
      "c": 2,
      "color": 1
    },
    {
      "r": 3,
      "c": 5,
      "color": 2
    },
    {
      "r": 3,
      "c": 3,
      "color": 1
    },
    {
      "r": 3,
      "c": 4,
      "color": 2
    },
    {
      "r": 4,
      "c": 3,
      "color": 2
    },
    {
      "r": 4,
      "c": 4,
      "color": 1
    },
    {
      "r": 4,
      "c": 2,
      "color": 2
    },
    {
      "r": 4,
      "c": 5,
      "color": 1
    },
    {
      "r": 5,
      "c": 3,
      "color": 1
    },
    {
      "r": 5,
      "c": 4,
      "color": 2
    }
  ],
  "INVADER": [
    {
      "r": 2,
      "c": 2,
      "color": 1
    },
    {
      "r": 2,
      "c": 5,
      "color": 2
    },
    {
      "r": 3,
      "c": 2,
      "color": 2
    },
    {
      "r": 3,
      "c": 3,
      "color": 2
    },
    {
      "r": 3,
      "c": 4,
      "color": 1
    },
    {
      "r": 3,
      "c": 5,
      "color": 1
    },
    {
      "r": 4,
      "c": 2,
      "color": 1
    },
    {
      "r": 4,
      "c": 3,
      "color": 1
    },
    {
      "r": 4,
      "c": 4,
      "color": 2
    },
    {
      "r": 4,
      "c": 5,
      "color": 2
    },
    {
      "r": 5,
      "c": 2,
      "color": 1
    },
    {
      "r": 5,
      "c": 5,
      "color": 2
    }
  ],
  "CROWN": [
    {
      "r": 2,
      "c": 2,
      "color": 1
    },
    {
      "r": 2,
      "c": 3,
      "color": 2
    },
    {
      "r": 2,
      "c": 4,
      "color": 1
    },
    {
      "r": 2,
      "c": 5,
      "color": 2
    },
    {
      "r": 3,
      "c": 2,
      "color": 2
    },
    {
      "r": 3,
      "c": 5,
      "color": 1
    },
    {
      "r": 4,
      "c": 2,
      "color": 1
    },
    {
      "r": 4,
      "c": 3,
      "color": 1
    },
    {
      "r": 4,
      "c": 4,
      "color": 2
    },
    {
      "r": 4,
      "c": 5,
      "color": 2
    },
    {
      "r": 5,
      "c": 3,
      "color": 2
    },
    {
      "r": 5,
      "c": 4,
      "color": 1
    }
  ]
};

// ★外部拡張ドットアートライブラリ (全266種) が読み込まれていれば自動合流！
if (typeof DOT_ART_LIBRARY !== 'undefined') {
  for (const [key, item] of Object.entries(DOT_ART_LIBRARY)) {
    if (!DOT_ART_PATTERNS[key]) {
      DOT_ART_PATTERNS[key] = item.stones;
    }
  }
}

// ローグライクダンジョン：各階層3ステージ定義 (1-1前哨戦, 1-2精鋭戦, 1-3大ボス戦)
const DUNGEON_STAGES = {
  1: {
    minion: { name: 'スノーインプ', title: 'STAGE 1-1: 氷雪の尖兵', color: '#7dd3fc', icon: '❄️', aiLevel: 'ELEMENTARY', matchDuration: 45, ruleName: 'サクッと突破' },
    elite: { name: 'フロストナイト', title: 'STAGE 1-2: 氷壁の精鋭騎士', color: '#38bdf8', icon: '🛡️', aiLevel: 'ELEMENTARY', matchDuration: 60, ruleName: '氷壁防衛線' },
    boss: { name: '氷結の魔女 エルサリア', title: 'STAGE 1-3: 永久凍土の魔女', color: '#0284c7', icon: '🧙‍♀️', aiLevel: 'ELEMENTARY', matchDuration: 90, dotArt: 'SNOWFLAKE', desc: '【固有能力：凍てつく吐息】ボスの置く石が氷結トラップ化！' }
  },
  2: {
    minion: { name: 'マグマバット', title: 'STAGE 2-1: 爆炎の斥候', color: '#fb923c', icon: '🦇', aiLevel: 'ELEMENTARY', matchDuration: 45, ruleName: '超速ターボ' },
    elite: { name: 'ヘルハウンド', title: 'STAGE 2-2: 業火の魔獣', color: '#f97316', icon: '🐺', aiLevel: 'ADULT', matchDuration: 60, ruleName: '火炎地獄' },
    boss: { name: '狂乱の爆撃卿 ボンバート', title: 'STAGE 2-3: 爆炎の要塞', color: '#ef4444', icon: '💣', aiLevel: 'ADULT', matchDuration: 90, dotArt: 'SKULL', desc: '【固有能力：爆縮擲弾】6秒ごとに手榴弾を投下し周囲を爆縮強制反転！' }
  },
  3: {
    minion: { name: 'ネオンビット', title: 'STAGE 3-1: 電脳迎撃機', color: '#fde047', icon: '🛸', aiLevel: 'ADULT', matchDuration: 45, ruleName: 'アイテムフィーバー' },
    elite: { name: 'サンダーバード', title: 'STAGE 3-2: 紫電の怪鳥', color: '#eab308', icon: '🦅', aiLevel: 'ADULT', matchDuration: 60, ruleName: '放電ショック' },
    boss: { name: '電脳の神速王 ヴォルテクス', title: 'STAGE 3-3: 神速電脳空間', color: '#facc15', icon: '⚡', aiLevel: 'AI', matchDuration: 90, dotArt: 'THUNDER', desc: '【固有能力：超絶クロックアップ】ボスのクールダウンが常時超速！' }
  },
  4: {
    minion: { name: 'アイアンガーディアン', title: 'STAGE 4-1: 鋼鉄の番兵', color: '#34d399', icon: '🛡️', aiLevel: 'ADULT', matchDuration: 45, ruleName: '四隅チャージ' },
    elite: { name: 'アイアンゴーレム', title: 'STAGE 4-2: 鉄壁の巨兵', color: '#10b981', icon: '🗿', aiLevel: 'ADULT', matchDuration: 60, ruleName: '岩塊シールド' },
    boss: { name: '不壊の巨神兵 ゴレムス', title: 'STAGE 4-3: 鋼鉄の重力神殿', color: '#059669', icon: '🏰', aiLevel: 'AI', matchDuration: 90, dotArt: 'SHIELD', desc: '【固有能力：永久不壊装甲】3手ごとに永久不壊金石を召喚！' }
  },
  5: {
    minion: { name: 'ヴォイドシーカー', title: 'STAGE 5-1: 虚無の先兵', color: '#c084fc', icon: '👁️‍🗨️', aiLevel: 'ADULT', matchDuration: 45, ruleName: '虚無の波動' },
    elite: { name: 'アカシックレコード', title: 'STAGE 5-2: 世界の記録者', color: '#a855f7', icon: '📜', aiLevel: 'AI', matchDuration: 60, ruleName: '因果律崩壊' },
    boss: { name: '虚無の魔神 デウス・エクス・マキナ', title: 'FINAL: 神話の頂点', color: '#9333ea', icon: '👁️', aiLevel: 'AI', matchDuration: 90, dotArt: 'PROVIDENCE', desc: '【固有能力：神話支配】全ボス能力複合発動＆盤面10×10拡張！' }
  }
};

const DUNGEON_BOSSES = [
  DUNGEON_STAGES[1].boss,
  DUNGEON_STAGES[2].boss,
  DUNGEON_STAGES[3].boss,
  DUNGEON_STAGES[4].boss,
  DUNGEON_STAGES[5].boss
];
// アビリティプール (全21種)
const ABILITY_POOL = [
  { id: 'POTION_ITEM', name: '生命の秘薬ストック', rarity: 'SR', color: '#ec4899', desc: '次回戦闘開始時、【💖 生命の秘薬】を手元に即装填した状態でスタート！' },
  { id: 'N_CD', name: '敏捷の足輪', rarity: 'N', color: '#94a3b8', desc: '自身のクールダウンが常時 -0.15秒 短縮される。' },
  { id: 'N_OVERRIDE', name: '鋼鉄の楔', rarity: 'N', color: '#94a3b8', desc: '相手の石を上書きした際のクールダウン倍率が1.45倍➔1.15倍に軽減。' },
  { id: 'N_GOLD_START', name: '黄金の布石', rarity: 'N', color: '#94a3b8', desc: '試合開始時、自分の初期石の1つが【永久不壊金石】になる。' },
  { id: 'N_CHAIN_GOLD', name: '連鎖の錬金術', rarity: 'N', color: '#94a3b8', desc: '一度に2枚以上反転させると、ボーナス+50Gを獲得。' },
  { id: 'N_STUN_STEAL', name: '妨害ショック', rarity: 'N', color: '#94a3b8', desc: '相手がアイテムを獲得した時、相手に電撃を浴びせ0.8秒スタン。' },
  { id: 'N_CORNER_RESET', name: '要塞の恵み', rarity: 'N', color: '#94a3b8', desc: '角マスを取ると、自身のクールダウンが即座に0秒リセット。' },
  { id: 'SR_ITEM_MAGNET', name: '強奪の磁界', rarity: 'SR', color: '#a855f7', desc: 'アイテムを拾った時、周囲2x2の相手石をまとめて自色化！' },
  { id: 'SR_FREEZE_BUFF', name: '絶対氷壁', rarity: 'SR', color: '#38bdf8', desc: '自身が受けるフリーズおよびスタンの持続時間を常時50%短縮。' },
  { id: 'SR_START_HYPER', name: '開幕の閃光', rarity: 'SR', color: '#facc15', desc: '試合開始から3.5秒間、クールダウン0秒の【神速魔力】で猛攻可能！' },
  { id: 'SR_STEAL_SCORE', name: '魔力強奪', rarity: 'SR', color: '#ec4899', desc: '相手の石を上書きするたび、相手のクールダウンを+0.5秒遅延！' },
  { id: 'SR_PAINT_BURST', name: '彩光の大輪', rarity: 'SR', color: '#34d399', desc: '魔法ペイント発動時、さらに外周マスをランダム2箇所自色に染色！' },
  { id: 'UR_CORNER_GOLD', name: '絶対支配者', rarity: 'UR', color: '#f59e0b', desc: '角マスに置いた石がすべて【永久不壊金石】に昇華する！' },
  { id: 'UR_DOUBLE_PHOENIX', name: '不死鳥の加護', rarity: 'UR', color: '#ef4444', desc: '自駒全滅時、2回まで全回復復活＆神速5秒バフ獲得！' },
  { id: 'UR_OVERRIDE_BURST', name: '連鎖爆縮', rarity: 'UR', color: '#f97316', desc: '相手の石を上書きした時、周囲1マスの相手石を巻き添え反転！' },
  { id: 'UR_BOARD10', name: '神界拡張', rarity: 'UR', color: '#6366f1', desc: '階層開始時から盤面が10×10の広大な戦場に拡張される！' },
  { id: 'UR_MINI_VORTEX', name: '魔導引力', rarity: 'UR', color: '#38bdf8', desc: '石を置くたび、周囲1マスの空白マスに小型ブラックホール発生！' },
  { id: 'LR_AUTO_ITEM', name: '天界の降臨', rarity: 'LR', color: '#ec4899', desc: '【神話】5秒ごとにランダムアイテムが手元に自動装填！' },
  { id: 'LR_ALWAYS_HYPER', name: '常時神速覚醒', rarity: 'LR', color: '#ec4899', desc: '【神話】試合中ずっと神速モード（クールダウン常時0.3秒以下）！' },
  { id: 'LR_PUNISH_THUNDER', name: '神罰代行', rarity: 'LR', color: '#ec4899', desc: '【神話】相手が石を置くたび、25%の確率で裁きの神雷（1.5秒スタン）！' }
];

// 盤面ステージテーマ
const BOARD_THEMES = {
  DEFAULT: { id: 'DEFAULT', name: 'サイバー・グリッド', line: 'rgba(0, 240, 255, 0.45)', bg0: '#0f172a', bg1: '#020617', bg2: '#000000' },
  ABYSS: { id: 'ABYSS', name: '深淵の祭壇', line: 'rgba(56, 189, 248, 0.4)', bg0: '#082f49', bg1: '#0c4a6e', bg2: '#020617' },
  INFERNO: { id: 'INFERNO', name: '紅蓮の煉獄', line: 'rgba(239, 68, 68, 0.5)', bg0: '#450a0a', bg1: '#1c0404', bg2: '#000000' },
  SANCTUARY: { id: 'SANCTUARY', name: '黄金神殿', line: 'rgba(234, 179, 8, 0.45)', bg0: '#3a2403', bg1: '#180f01', bg2: '#000000' }
};

// Alias for compatibility
const BOSS_DEFAULT_SVGS = BOSS_DEFAULT_IMAGES;


/**
 * DUEL REVERSI - Skins Definition & Passive Attributes (13 Skins)
 */

const SKINS_DATA = {
  CLASSIC: {
    id: 'CLASSIC',
    name: '伝統の白黒 (ノーマル)',
    rarity: 3,
    color: '#94a3b8',
    passiveName: '無能力 (PURE REVERSI)',
    passiveDesc: '【純粋腕前勝負】特殊能力・短縮・妨害は一切なし！オセロの腕前と配置戦術のみで真剣勝負！',
    desc: '魔導の加護を持たない伝統的なオセロ石。純粋な実力勝負を楽しみたいプレイヤー向け。',
    p1: { grad0: '#262626', grad1: '#171717', grad2: '#0a0a0a', stroke: '#52525b', core: '#71717a' },
    p2: { grad0: '#ffffff', grad1: '#f4f4f5', grad2: '#e4e4e7', stroke: '#a1a1aa', core: '#d4d4d8' }
  },
  DEFAULT: {
    id: 'DEFAULT',
    name: 'サイバー・ネオン',
    rarity: 3,
    color: '#00f0ff',
    passiveName: '電脳ハック＆オーバークロック',
    passiveDesc: '【電脳】配置時に敵CTを+0.25秒ハッキング遅延！さらに自身が3手置くごとに次手CTが0秒（即時配置）！',
    desc: '電脳仮想空間から召喚されたサイバーオセロ。シアンネオンの電脳回路が脈動する。',
    p1: { grad0: '#334155', grad1: '#0f172a', grad2: '#020617', stroke: '#00f0ff', core: '#00f0ff' },
    p2: { grad0: '#ffffff', grad1: '#cbd5e1', grad2: '#64748b', stroke: '#fbbf24', core: '#fbbf24' }
  },
  INFERNO: {
    id: 'INFERNO',
    name: '紅蓮の煉獄',
    rarity: 4,
    color: '#ef4444',
    passiveName: '紅蓮の爆砕陣',
    passiveDesc: '上書き配置のクールダウンペナルティが通常1.45倍➔1.20倍に大幅短縮！',
    desc: '燃え盛る火山岩。打撃時に激しい火炎破片と火の粉エフェクトが舞う。',
    p1: { grad0: '#7f1d1d', grad1: '#450a0a', grad2: '#1a0505', stroke: '#ef4444', core: '#f87171' },
    p2: { grad0: '#fff7ed', grad1: '#fdba74', grad2: '#c2410c', stroke: '#f97316', core: '#fb923c' }
  },
  OCEAN: {
    id: 'OCEAN',
    name: '深海の碧玉',
    rarity: 4,
    color: '#06b6d4',
    passiveName: '氷点下の潮汐',
    passiveDesc: '絶対凍結の効果時間+0.8秒！さらに自身の被状態異常時間を20%軽減！',
    desc: '深海アビスと白蝶貝。水滴の波紋エフェクトと神秘的なアクアの輝き。',
    p1: { grad0: '#064e3b', grad1: '#022c22', grad2: '#021612', stroke: '#10b981', core: '#34d399' },
    p2: { grad0: '#ecfeff', grad1: '#a5f3fc', grad2: '#0e7490', stroke: '#06b6d4', core: '#22d3ee' }
  },
  SAKURA: {
    id: 'SAKURA',
    name: '夜桜吹雪',
    rarity: 4,
    color: '#ec4899',
    passiveName: '夜桜の残影',
    passiveDesc: '相手からのあらゆる状態異常（凍結・スタン）の持続時間を常時35%軽減！',
    desc: '満月の夜に舞い散る花びら。石を置くと優雅な桜の花弁パーティクルが舞う。',
    p1: { grad0: '#500724', grad1: '#2e0214', grad2: '#15010a', stroke: '#ec4899', core: '#f472b6' },
    p2: { grad0: '#fff1f2', grad1: '#fecdd3', grad2: '#be123c', stroke: '#fb7185', core: '#fda4af' }
  },
  THUNDER: {
    id: 'THUNDER',
    name: '紫電の雷神',
    rarity: 4,
    color: '#3b82f6',
    passiveName: '紫電の過負荷',
    passiveDesc: '神速魔力（ハイパー）時間+1.5秒！さらに神速中の石配置スコア+50%！',
    desc: '帯電した青紫の避雷針。配置の瞬間に激しい青白きプラズマ放電が炸裂！',
    p1: { grad0: '#1e1b4b', grad1: '#0f172a', grad2: '#020617', stroke: '#60a5fa', core: '#93c5fd' },
    p2: { grad0: '#eff6ff', grad1: '#bfdbfe', grad2: '#3b82f6', stroke: '#38bdf8', core: '#e0f2fe' }
  },
  CRYSTAL: {
    id: 'CRYSTAL',
    name: '氷晶の宝冠',
    rarity: 4,
    color: '#2dd4bf',
    passiveName: '絶対零度の角城',
    passiveDesc: '角を取ると相手を1.0秒凍結させ、自身のクールダウンを即座にリセット！',
    desc: '純度100%のダイヤモンドとエメラルド。透明感あるプリズム光彩が輝く。',
    p1: { grad0: '#0f766e', grad1: '#115e59', grad2: '#042f2e', stroke: '#2dd4bf', core: '#5eead4' },
    p2: { grad0: '#f0fdfa', grad1: '#ccfbf1', grad2: '#0d9488', stroke: '#14b8a6', core: '#f0fdf4' }
  },
  MECHA: {
    id: 'MECHA',
    name: '機巧蒸気重機',
    rarity: 4,
    color: '#f59e0b',
    passiveName: '蒸気重装甲カウンター',
    passiveDesc: '相手が自分の石を上書きした時、反動衝撃で相手のCTを+0.6秒遅延！',
    desc: '重厚な鋼鉄歯車と真鍮ピストン。配置時に白煙スチームと火花が噴き出す！',
    p1: { grad0: '#451a03', grad1: '#292524', grad2: '#1c1917', stroke: '#d97706', core: '#f59e0b' },
    p2: { grad0: '#fafaf9', grad1: '#d6d3d1', grad2: '#78716c', stroke: '#a8a29e', core: '#f5f5f4' }
  },
  RETRO: {
    id: 'RETRO',
    name: '8-BITドット',
    rarity: 3,
    color: '#22c55e',
    passiveName: 'ピクセル・コンボ',
    passiveDesc: '連鎖反転時のスコア獲得倍率が常時+15%アップ！',
    desc: '懐かしのファミコン風。石を置くと角ばったピクセルチップがポンッと飛び散る！',
    p1: { grad0: '#18181b', grad1: '#09090b', grad2: '#000000', stroke: '#22c55e', core: '#4ade80' },
    p2: { grad0: '#ffffff', grad1: '#e4e4e7', grad2: '#a1a1aa', stroke: '#e11d48', core: '#f43f5e' }
  },
  VOID: {
    id: 'VOID',
    name: '混沌の虚無',
    rarity: 5,
    color: '#a855f7',
    passiveName: '虚無の引力特異点',
    passiveDesc: '磁気破砕の範囲が3×3拡大＆アイテムスコア+1500！2連鎖時15%で敵スタン！',
    desc: '【SSR】事象の地平面から抽出した暗黒物質。時空が歪む重力渦が周囲を呑み込む。',
    p1: { grad0: '#3b0764', grad1: '#1e0136', grad2: '#090012', stroke: '#a855f7', core: '#c084fc' },
    p2: { grad0: '#faf5ff', grad1: '#e9d5ff', grad2: '#6b21a8', stroke: '#d8b4fe', core: '#e9d5ff' }
  },
  SOLAR: {
    id: 'SOLAR',
    name: '神聖なる太陽',
    rarity: 5,
    color: '#eab308',
    passiveName: '太陽神の天寵',
    passiveDesc: '開始時中央に不壊金石配置！金石配置で+150G＆常時CT-0.10秒！',
    desc: '【SSR】太陽神の祝福を受けた究極石。黄金フレアと十字光芒が盤面に降り注ぐ。',
    p1: { grad0: '#422006', grad1: '#261202', grad2: '#100600', stroke: '#eab308', core: '#facc15' },
    p2: { grad0: '#fefce8', grad1: '#fef08a', grad2: '#a16207', stroke: '#fde047', core: '#fef08a' }
  },
  GENESIS: {
    id: 'GENESIS',
    name: '創世神竜の極光',
    rarity: 6,
    color: '#ec4899',
    passiveName: '創世神竜の全能覇権',
    passiveDesc: '【★6 LR ぶっ壊れ】全CT-0.5s超速化！配置時周囲8マスの敵石を強制全反転！3手毎に最強アイテム自動装填！状態異常完全無効＆上書きペナルティ0！反転時+100G！',
    desc: '【★6 LR】排出率1.5%の幻の最高神スキン！神竜の極彩虹炎と回転魔導環がもわもわと立ち昇る！',
    p1: { grad0: '#2e1065', grad1: '#17063b', grad2: '#090117', stroke: '#ec4899', core: '#00f0ff' },
    p2: { grad0: '#fffbeb', grad1: '#fde68a', grad2: '#b45309', stroke: '#f59e0b', core: '#ffffff' }
  },
  CHRONOS: {
    id: 'CHRONOS',
    name: '終焉冥王クロノス',
    rarity: 6,
    color: '#f43f5e',
    passiveName: '時空改変・ザ・ワールド',
    passiveDesc: '【★6 LR ぶっ壊れ】敵CT常時+0.4s遅延！配置マスと対称マスへ時空同時配置！5手毎に敵を2.5秒完全時間停止！自石は敵の上書きを完全拒絶＆反撃凍結！',
    desc: '【★6 LR】時空を統べる終焉の冥王オセロ。深紅の時空時計と黒炎オーラが盤面を支配する！',
    p1: { grad0: '#4c0519', grad1: '#1f020a', grad2: '#000000', stroke: '#f43f5e', core: '#fb7185' },
    p2: { grad0: '#fdf2f8', grad1: '#fbcfe8', grad2: '#be185d', stroke: '#fda4af', core: '#f43f5e' }
  }
};


class DuelReversi {
  constructor() {
    this.canvas = document.getElementById('gameCanvas');
    this.ctx = this.canvas.getContext('2d');
    
    this.state = 'TITLE';
    this.mode = 'VS_CPU';
    this.cpuLevel = 'ADULT';
    this.speedMode = 'NORMAL';
    this.matchDuration = 90;

    this.gridSize = 8;
    this.board = [];
    this.itemsOnBoard = [];

    this.timeLeft = 90;
    this.isClimaxActive = false;
    this.climaxEvent = null;

    this.phoenixCooldown = 0;
    this.freezeOverlayTimer = 0;
    this.matchResultAwarded = false;
    this.isPaused = false;
    this.is3DView = true; // ★3D立体石＆放物線宙返り演出 (ON/OFF切替可能)
    this.onlineRole = null; // 'HOST' | 'GUEST' | null
    this.onlineRoomId = null;
    this.onlinePing = 0;
    this.lastCursorSync = 0;
    window.duelGame = this;
    this.screenFlash = 0;
    this.itemGetPopups = []; // { text, icon, x, y, life, maxLife }
    this.flyingOrbs = []; // { x, y, targetX, targetY, color, progress }
    this.blackHoles = []; // { x, y, life, maxLife, radius }
    this.magicCircles = []; // { x, y, life, maxLife, radius, color }

    this.stats = {
      p1SpeedSum: 0, p1Moves: 0,
      p2SpeedSum: 0, p2Moves: 0,
      p1Items: 0, p2Items: 0,
      p1Overwrites: 0, p2Overwrites: 0,
      p1Corners: 0, p2Corners: 0,
      p1MaxFlips: 0, p2MaxFlips: 0
    };

    this.p1 = {
      color: P1_COLOR,
      name: '1P (黒)',
      cooldown: 0,
      maxCooldown: 1.5,
      hyperTimer: 0,
      freezeTimer: 0,
      stunTimer: 0,
      hasteTimer: 0,
      nextItem: null,
      slotFlash: 0,
      cursor: { r: 3, c: 2 },
      score: 2
    };

    this.p2 = {
      color: P2_COLOR,
      name: '2P (白)',
      cooldown: 0,
      maxCooldown: 1.5,
      hyperTimer: 0,
      freezeTimer: 0,
      stunTimer: 0,
      hasteTimer: 0,
      nextItem: null,
      slotFlash: 0,
      cursor: { r: 4, c: 5 },
      score: 2
    };

    this.cpuActionTimer = 0;

    this.particles = [];
    this.shockwaves = [];
    this.lightningBolts = [];
    this.screenShake = 0;
    this.bannerText = null;
    this.bannerColor = null;
    this.bannerTimer = 0;

    // --- カットイン演出エンジン ---
    this.cutIn = null; // { text, sub, color, life, maxLife }

    // --- ローグライク魔導ダンジョン ---
    this.dungeonFloor = 1;
    this.playerAbilities = [];
    this.draftAbilities = [];
    this.bossActionTimer = 0;
    this.bossMoveCount = 0;

    // --- ボス用カスタムAI画像ストレージ ---
        // --- 5大ボス イラストストレージ（標準SVG＋カスタムAI画像） ---
    this.bossDefaultImages = {};
    for (let f = 1; f <= 5; f++) {
      const img = new Image();
      img.src = BOSS_DEFAULT_SVGS[f];
      this.bossDefaultImages[f] = img;
    }

    this.customBossImages = {};
    for (let f = 1; f <= 5; f++) {
      try {
        const saved = localStorage.getItem(`duel_reversi_boss_${f}`);
        if (saved) {
          const img = new Image();
          img.src = saved;
          this.customBossImages[f] = img;
        }
      } catch(e) {}
    }

    this.dungeonBosses = [
      {
        floor: 1,
        name: '氷結の魔女 エルサリア',
        title: '第1層：氷結の尖塔',
        icon: '🧙‍♀️',
        color: '#38bdf8',
        desc: '【固有能力：凍てつく吐息】\nボスの置く石が氷結トラップ化！プレイヤーが隣接マスに置くと0.8秒凍結される。',
        aiLevel: 'ELEMENTARY'
      },
      {
        floor: 2,
        name: '狂乱の爆撃卿 ボンバート',
        title: '第2層：爆縮の火口',
        icon: '💣',
        color: '#ef4444',
        desc: '【固有能力：爆縮擲弾】\n6秒ごとに擲弾を投下！爆風に巻き込まれた周囲（3×3）の石を強制反転し、ボスの石に染め上げる！',
        aiLevel: 'ADULT'
      },
      {
        floor: 3,
        name: '電脳の神速王 ヴォルテクス',
        title: '第3層：紫電の神殿',
        icon: '⚡',
        color: '#facc15',
        desc: '【固有能力：電光石火】\nボスのクールダウンが常時0.65秒！人間離れした神速連射で盤面を支配する！',
        aiLevel: 'ADULT'
      },
      {
        floor: 4,
        name: '不壊の巨神兵 ゴレムス',
        title: '第4層：鉄壁の巨城',
        icon: '🗿',
        color: '#10b981',
        desc: '【固有能力：金剛不壊】\nボスが3手に1回、絶対に裏返せない【不壊金石】を打ち込んでくる！',
        aiLevel: 'AI'
      },
      {
        floor: 5,
        name: '虚無の魔神 デウス・エクス・マキナ',
        title: '最深層：虚無の特異点',
        icon: '👁️',
        color: '#a855f7',
        desc: '【固有能力：理不尽なる神話支配】\n常時10×10盤面！4秒ごとにアイテム自動乱舞！定期的に全反転やギガボムを撃ってくる規格外チート神！',
        aiLevel: 'AI'
      }
    ];

    this.abilityPool = [
      // N (ノーマル 6種)
      { id: 'N_CD', name: '俊敏のルーン', rarity: 'N', color: '#94a3b8', desc: 'クールダウンが常に0.15秒短縮される。' },
      { id: 'N_OVERRIDE', name: '強奪の心得', rarity: 'N', color: '#94a3b8', desc: '上書き配置のクールダウンが0.4秒短縮される。' },
      { id: 'N_GOLD_START', name: '黄金の布石', rarity: 'N', color: '#94a3b8', desc: '試合開始時、ランダムな自色石が1つ不壊金石になる。' },
      { id: 'N_CHAIN_GOLD', name: '連鎖の錬金術', rarity: 'N', color: '#94a3b8', desc: '2枚以上反転させるたびにゴールド +50G 獲得。' },
      { id: 'N_STUN_STEAL', name: '妨害ショック', rarity: 'N', color: '#94a3b8', desc: '相手がアイテムを獲得した瞬間、相手を0.8秒スタンさせる。' },
      { id: 'N_CORNER_RESET', name: '要塞の恵み', rarity: 'N', color: '#94a3b8', desc: '角（四隅）を取ると、クールダウンが即座に0秒リセット！' },

      // UR (ウルトラレア 5種)
      { id: 'UR_BOARD10', name: '盤面無限界', rarity: 'UR', color: '#38bdf8', desc: '常に10×10マスの超広大盤面でバトルが開始される！' },
      { id: 'UR_CORNER_GOLD', name: '絶対支配者', rarity: 'UR', color: '#38bdf8', desc: '自分が取った角（四隅）が全て【永久不壊金石】に変化！' },
      { id: 'UR_OVERRIDE_BURST', name: '連鎖爆縮', rarity: 'UR', color: '#38bdf8', desc: '相手の石を上書きするたび、周囲1マスを巻き添え反転！' },
      { id: 'UR_DOUBLE_PHOENIX', name: '不死鳥の加護', rarity: 'UR', color: '#38bdf8', desc: '0枚時のフェニックス復活が2回可能になり、復活時神速5秒付与！' },
      { id: 'UR_MINI_VORTEX', name: '魔導引力', rarity: 'UR', color: '#38bdf8', desc: '石を置くたび、周囲1マスの空白マスに小型ブラックホール発生！' },

      // LR (レジェンドレア 3種 - ぶっ壊れ)
      { id: 'LR_AUTO_ITEM', name: '天界の降臨', rarity: 'LR', color: '#ec4899', desc: '【神話】5秒ごとにランダムアイテムが手元に自動装填！' },
      { id: 'LR_ALWAYS_HYPER', name: '常時神速覚醒', rarity: 'LR', color: '#ec4899', desc: '【神話】試合中ずっと神速モード（クールダウン常時0.3秒以下）！' },
      { id: 'LR_PUNISH_THUNDER', name: '神罰代行', rarity: 'LR', color: '#ec4899', desc: '【神話】相手が石を置くたび25%の確率で雷直撃1.5秒スタン！' }
    ];
    // --- スコア＆コンボシステム (一人プレイ用) ---
    this.currentScore = 0;
    this.displayScore = 0;
    this.highScore = 0;
    this.isNewHighScore = false;
    this.floatingTexts = [];

    // --- 経済＆BETシステム (1P/2P個別ウォレット) ---
    this.p1Gold = 1000;
    this.p2Gold = 1000;
    this.gold = 1000;
    this.betAmounts = [0, 100, 300, 500, 'ALL_IN'];
    this.selectedBetIndex = 0;
    this.currentBet = 0;

    // --- ルールモード (CHAOS: アイテム＆奇跡あり / CLASSIC: 競技オセロ純粋勝負) ---
    this.ruleMode = 'CHAOS';

    // --- 盤面ステージスキン ---
    this.equippedBoardId = 'DEFAULT';
    this.boardThemes = {
      DEFAULT: { id: 'DEFAULT', name: 'サイバー・ネオン', bg0: '#0a0f1d', bg1: '#030712', bg2: '#000000', frame: '#334155', cellA: '#1e293b', cellB: '#141e30', center: 'rgba(56, 189, 248, 0.035)' },
      INFERNO: { id: 'INFERNO', name: '溶岩マグマの闘技場', bg0: '#1c0505', bg1: '#0a0202', bg2: '#000000', frame: '#ef4444', cellA: '#2b0c0c', cellB: '#1a0606', center: 'rgba(239, 68, 68, 0.08)' },
      COSMOS: { id: 'COSMOS', name: '宇宙・銀河のチェス盤', bg0: '#1e1035', bg1: '#0b0416', bg2: '#000000', frame: '#a855f7', cellA: '#1a102e', cellB: '#100720', center: 'rgba(168, 85, 247, 0.08)' },
      ZEN: { id: 'ZEN', name: '和風枯山水の石庭', bg0: '#141a14', bg1: '#070b07', bg2: '#000000', frame: '#10b981', cellA: '#162316', cellB: '#0e180e', center: 'rgba(16, 185, 129, 0.08)' },
      TEMPLE: { id: 'TEMPLE', name: '古代黄金の神殿', bg0: '#1c1505', bg1: '#0c0801', bg2: '#000000', frame: '#f59e0b', cellA: '#241a06', cellB: '#181104', center: 'rgba(245, 158, 11, 0.08)' }
    };

    // --- スキン＆限界突破オーラ ---
    this.ownedSkins = ['CLASSIC', 'DEFAULT'];
    this.skinAuraLevel = { DEFAULT: 1 };
    this.equippedSkinId = 'DEFAULT';
    this.selectedBaseColor = 'BLACK'; // 'BLACK' (魔導の浸食) or 'WHITE' (聖光の守護)
    this.gachaResults = null;
    this.matchResultAwarded = false;
    this.isPaused = false;
    this.lastResultBanner = '';
    this.resultGuardTimer = 0;
    this.isPaused = false;

        this.skins = {
      CLASSIC: {
        id: 'CLASSIC',
        name: '伝統の白黒 (ノーマル)',
        rarity: 3,
        color: '#94a3b8',
        passiveName: '無能力 (PURE REVERSI)',
        passiveDesc: '【純粋腕前勝負】特殊能力・短縮・妨害は一切なし！オセロの腕前と配置戦術のみで真剣勝負！',
        desc: '魔導の加護を持たない伝統的なオセロ石。純粋な実力勝負を楽しみたいプレイヤー向け。',
        p1: { grad0: '#262626', grad1: '#171717', grad2: '#0a0a0a', stroke: '#52525b', core: '#71717a' },
        p2: { grad0: '#ffffff', grad1: '#f4f4f5', grad2: '#e4e4e7', stroke: '#a1a1aa', core: '#d4d4d8' }
      },
      DEFAULT: {
        id: 'DEFAULT',
        name: 'サイバー・ネオン',
        rarity: 3,
        color: '#00f0ff',
        passiveName: '電脳ハック＆オーバークロック',
        passiveDesc: '【電脳】配置時に敵CTを+0.25秒ハッキング遅延！さらに自身が3手置くごとに次手CTが0秒（即時配置）！',
        desc: '電脳仮想空間から召喚されたサイバーオセロ。シアンネオンの電脳回路が脈動する。',
        p1: { grad0: '#334155', grad1: '#0f172a', grad2: '#020617', stroke: '#00f0ff', core: '#00f0ff' },
        p2: { grad0: '#ffffff', grad1: '#cbd5e1', grad2: '#64748b', stroke: '#fbbf24', core: '#fbbf24' }
      },
      INFERNO: {
        id: 'INFERNO',
        name: '紅蓮の煉獄',
        rarity: 4,
        color: '#ef4444',
        passiveName: '紅蓮の爆砕陣',
        passiveDesc: '上書き配置のクールダウンペナルティが通常1.45倍➔1.20倍に大幅短縮！',
        desc: '燃え盛る火山岩。打撃時に激しい火炎破片と火の粉エフェクトが舞う。',
        p1: { grad0: '#7f1d1d', grad1: '#450a0a', grad2: '#1a0505', stroke: '#ef4444', core: '#f87171' },
        p2: { grad0: '#fff7ed', grad1: '#fdba74', grad2: '#c2410c', stroke: '#f97316', core: '#fb923c' }
      },
      OCEAN: {
        id: 'OCEAN',
        name: '深海の碧玉',
        rarity: 4,
        color: '#06b6d4',
        passiveName: '氷点下の潮汐',
        passiveDesc: '絶対凍結の効果時間+0.8秒！さらに自身の被状態異常時間を20%軽減！',
        desc: '深海アビスと白蝶貝。水滴の波紋エフェクトと神秘的なアクアの輝き。',
        p1: { grad0: '#064e3b', grad1: '#022c22', grad2: '#021612', stroke: '#10b981', core: '#34d399' },
        p2: { grad0: '#ecfeff', grad1: '#a5f3fc', grad2: '#0e7490', stroke: '#06b6d4', core: '#22d3ee' }
      },
      SAKURA: {
        id: 'SAKURA',
        name: '夜桜吹雪',
        rarity: 4,
        color: '#ec4899',
        passiveName: '夜桜の残影',
        passiveDesc: '相手からのあらゆる状態異常（凍結・スタン）の持続時間を常時35%軽減！',
        desc: '満月の夜に舞い散る花びら。石を置くと優雅な桜の花弁パーティクルが舞う。',
        p1: { grad0: '#500724', grad1: '#2e0214', grad2: '#15010a', stroke: '#ec4899', core: '#f472b6' },
        p2: { grad0: '#fff1f2', grad1: '#fecdd3', grad2: '#be123c', stroke: '#fb7185', core: '#fda4af' }
      },
      THUNDER: {
        id: 'THUNDER',
        name: '紫電の雷神',
        rarity: 4,
        color: '#3b82f6',
        passiveName: '紫電の過負荷',
        passiveDesc: '神速魔力（ハイパー）時間+1.5秒！さらに神速中の石配置スコア+50%！',
        desc: '帯電した青紫の避雷針。配置の瞬間に激しい青白きプラズマ放電が炸裂！',
        p1: { grad0: '#1e1b4b', grad1: '#0f172a', grad2: '#020617', stroke: '#60a5fa', core: '#93c5fd' },
        p2: { grad0: '#eff6ff', grad1: '#bfdbfe', grad2: '#3b82f6', stroke: '#38bdf8', core: '#e0f2fe' }
      },
      CRYSTAL: {
        id: 'CRYSTAL',
        name: '氷晶の宝冠',
        rarity: 4,
        color: '#2dd4bf',
        passiveName: '絶対零度の角城',
        passiveDesc: '角を取ると相手を1.0秒凍結させ、自身のクールダウンを即座にリセット！',
        desc: '純度100%のダイヤモンドとエメラルド。透明感あるプリズム光彩が輝く。',
        p1: { grad0: '#0f766e', grad1: '#115e59', grad2: '#042f2e', stroke: '#2dd4bf', core: '#5eead4' },
        p2: { grad0: '#f0fdfa', grad1: '#ccfbf1', grad2: '#0d9488', stroke: '#14b8a6', core: '#f0fdf4' }
      },
      MECHA: {
        id: 'MECHA',
        name: '機巧蒸気重機',
        rarity: 4,
        color: '#f59e0b',
        passiveName: '蒸気重装甲カウンター',
        passiveDesc: '相手が自分の石を上書きした時、反動衝撃で相手のCTを+0.6秒遅延！',
        desc: '重厚な鋼鉄歯車と真鍮ピストン。配置時に白煙スチームと火花が噴き出す！',
        p1: { grad0: '#451a03', grad1: '#292524', grad2: '#1c1917', stroke: '#d97706', core: '#f59e0b' },
        p2: { grad0: '#fafaf9', grad1: '#d6d3d1', grad2: '#78716c', stroke: '#a8a29e', core: '#f5f5f4' }
      },
      RETRO: {
        id: 'RETRO',
        name: '8-BITドット',
        rarity: 3,
        color: '#22c55e',
        passiveName: 'ピクセル・コンボ',
        passiveDesc: '連鎖反転時のスコア獲得倍率が常時+15%アップ！',
        desc: '懐かしのファミコン風。石を置くと角ばったピクセルチップがポンッと飛び散る！',
        p1: { grad0: '#18181b', grad1: '#09090b', grad2: '#000000', stroke: '#22c55e', core: '#4ade80' },
        p2: { grad0: '#ffffff', grad1: '#e4e4e7', grad2: '#a1a1aa', stroke: '#e11d48', core: '#f43f5e' }
      },
      VOID: {
        id: 'VOID',
        name: '混沌の虚無',
        rarity: 5,
        color: '#a855f7',
        passiveName: '虚無の引力特異点',
        passiveDesc: '磁気破砕の範囲が3×3拡大＆アイテムスコア+1500！2連鎖時15%で敵スタン！',
        desc: '【SSR】事象の地平面から抽出した暗黒物質。時空が歪む重力渦が周囲を呑み込む。',
        p1: { grad0: '#3b0764', grad1: '#1e0136', grad2: '#090012', stroke: '#a855f7', core: '#c084fc' },
        p2: { grad0: '#faf5ff', grad1: '#e9d5ff', grad2: '#6b21a8', stroke: '#d8b4fe', core: '#e9d5ff' }
      },
      SOLAR: {
        id: 'SOLAR',
        name: '神聖なる太陽',
        rarity: 5,
        color: '#eab308',
        passiveName: '太陽神の天寵',
        passiveDesc: '開始時中央に不壊金石配置！金石配置で+150G＆常時CT-0.10秒！',
        desc: '【SSR】太陽神の祝福を受けた究極石。黄金フレアと十字光芒が盤面に降り注ぐ。',
        p1: { grad0: '#422006', grad1: '#261202', grad2: '#100600', stroke: '#eab308', core: '#facc15' },
        p2: { grad0: '#fefce8', grad1: '#fef08a', grad2: '#a16207', stroke: '#fde047', core: '#fef08a' }
      },
      GENESIS: {
        id: 'GENESIS',
        name: '創世神竜の極光',
        rarity: 6,
        color: '#ec4899',
        passiveName: '創世神竜の全能覇権',
        passiveDesc: '【★6 LR ぶっ壊れ】全CT-0.5s超速化！配置時周囲8マスの敵石を強制全反転！3手毎に最強アイテム自動装填！状態異常完全無効＆上書きペナルティ0！反転時+100G！',
        desc: '【★6 LR】排出率1.5%の幻の最高神スキン！神竜の極彩虹炎と回転魔導環がもわもわと立ち昇る！',
        p1: { grad0: '#2e1065', grad1: '#17063b', grad2: '#090117', stroke: '#ec4899', core: '#00f0ff' },
        p2: { grad0: '#fffbeb', grad1: '#fde68a', grad2: '#b45309', stroke: '#f59e0b', core: '#ffffff' }
      },
      CHRONOS: {
        id: 'CHRONOS',
        name: '終焉冥王クロノス',
        rarity: 6,
        color: '#f43f5e',
        passiveName: '時空改変・ザ・ワールド',
        passiveDesc: '【★6 LR ぶっ壊れ】敵CT常時+0.4s遅延！配置マスと対称マスへ時空同時配置！5手毎に敵を2.5秒完全時間停止！自石は敵の上書きを完全拒絶＆反撃凍結！',
        desc: '【★6 LR】時空を統べる終焉の冥王オセロ。深紅の時空時計と黒炎オーラが盤面を支配する！',
        p1: { grad0: '#4c0519', grad1: '#1f020a', grad2: '#000000', stroke: '#f43f5e', core: '#fb7185' },
        p2: { grad0: '#fdf2f8', grad1: '#fbcfe8', grad2: '#be185d', stroke: '#fda4af', core: '#f43f5e' }
      }
    };
    this.loadUserData();
    this.keysDown = {};
    this.keyRepeatInitialDelay = 0.18; // 初回リピート遅延 (秒)
    this.keyRepeatRate = 0.075; // 連続移動速度 (秒)
    this.initEvents();
    this.initBoard(8, this.currentDotArt || (this.pvpUseDotArt ? 'INVADER' : null));
    // ★5 SOLAR (神聖なる太陽) パッシブ：試合開始時に自色石が1つ不壊金石化
    if (this.equippedSkinId === 'SOLAR') {
      setTimeout(() => {
        const mid = Math.floor(this.gridSize / 2);
        if (this.board[mid - 1] && this.board[mid - 1][mid]) {
          this.board[mid - 1][mid].isGold = true;
          this.board[mid - 1][mid].scale = 1.4;
        }
      }, 100);
    }
  }

  get gold() { return this.p1Gold; }
  set gold(v) { this.p1Gold = v; }

  loadUserData() {
    try {
      const data = localStorage.getItem('duel_reversi_save_v16') || localStorage.getItem('duel_reversi_save');
      if (data) {
        const p = JSON.parse(data);
        if (typeof p.p1Gold === 'number' && !isNaN(p.p1Gold)) this.p1Gold = p.p1Gold;
        else if (typeof p.gold === 'number' && !isNaN(p.gold)) this.p1Gold = p.gold;
        if (typeof p.p2Gold === 'number' && !isNaN(p.p2Gold)) this.p2Gold = p.p2Gold;
        if (typeof p.highScore === 'number') this.highScore = p.highScore;
        if (Array.isArray(p.ownedSkins)) this.ownedSkins = p.ownedSkins;
        if (p.skinAuraLevel && typeof p.skinAuraLevel === 'object') this.skinAuraLevel = p.skinAuraLevel;
        if (p.equippedSkinId && this.skins[p.equippedSkinId]) this.equippedSkinId = p.equippedSkinId;
        if (p.equippedBoardId && this.boardThemes[p.equippedBoardId]) this.equippedBoardId = p.equippedBoardId;
      }
    } catch (e) {
      console.warn('LocalStorage not accessible:', e);
    }
    // 安全保証（破産防止 & 初期資金保証）
    if (typeof this.p1Gold !== 'number' || isNaN(this.p1Gold) || this.p1Gold < 200) this.p1Gold = 3000;
    if (typeof this.p2Gold !== 'number' || isNaN(this.p2Gold)) this.p2Gold = 1000;
    if (!Array.isArray(this.ownedSkins)) this.ownedSkins = ['CLASSIC', 'DEFAULT'];
    if (!this.ownedSkins.includes('DEFAULT')) this.ownedSkins.push('DEFAULT');
    if (!this.ownedSkins.includes('CLASSIC')) this.ownedSkins.unshift('CLASSIC');
    if (!this.skinAuraLevel || typeof this.skinAuraLevel !== 'object') this.skinAuraLevel = {};
    if (!this.skinAuraLevel['DEFAULT']) this.skinAuraLevel['DEFAULT'] = 1;
    if (!this.skinAuraLevel['CLASSIC']) this.skinAuraLevel['CLASSIC'] = 1;
  }

  saveUserData() {
    try {
      localStorage.setItem('duel_reversi_save_v16', JSON.stringify({
        p1Gold: this.p1Gold,
        p2Gold: this.p2Gold,
        highScore: this.highScore,
        ownedSkins: this.ownedSkins,
        skinAuraLevel: this.skinAuraLevel,
        equippedSkinId: this.equippedSkinId,
        equippedBoardId: this.equippedBoardId
      }));
    } catch (e) {
      // ignore
    }
  }

  pullGacha(count = 1) {
    const cost = count === 10 ? 1800 : 200;
    if (this.p1Gold < cost) {
      this.showBanner('1Pのゴールドが足りません！', '#ef4444', 1.5);
      audio.playWarning();
      return;
    }
    this.p1Gold -= cost;
    const results = [];
    let hasSSR = false;

    for (let i = 0; i < count; i++) {
      const rand = Math.random();
      let pickedId = 'DEFAULT';
      let isLR = false;
      if (rand < 0.02) {
        // 【★6 LR】(2.0%の幻！ 創世神竜 or 終焉冥王)
        pickedId = Math.random() < 0.5 ? 'GENESIS' : 'CHRONOS';
        isLR = true;
        hasSSR = true;
      } else if (rand < 0.15) {
        // 【★5 SSR】(13.5%)
        pickedId = Math.random() < 0.5 ? 'VOID' : 'SOLAR';
        hasSSR = true;
      } else if (rand < 0.70) {
        // 【★4 SR】(55%)
        const pool = ['INFERNO', 'OCEAN', 'SAKURA', 'THUNDER', 'CRYSTAL', 'MECHA'];
        pickedId = pool[Math.floor(Math.random() * pool.length)];
      } else {
        // 【★3 R】(30%)
        pickedId = Math.random() < 0.5 ? 'DEFAULT' : 'RETRO';
      }

      const isNew = !this.ownedSkins.includes(pickedId);
      let isLimitBreak = false;
      let newLv = 1;

      if (isNew) {
        this.ownedSkins.push(pickedId);
        this.skinAuraLevel[pickedId] = 1;
      } else {
        // 【新機能】被りでオーラ限界突破（Lv.1〜3 MAX）
        const curLv = this.skinAuraLevel[pickedId] || 1;
        if (curLv < 3) {
          this.skinAuraLevel[pickedId] = curLv + 1;
          newLv = curLv + 1;
          isLimitBreak = true;
        } else {
          this.p1Gold += 200; // MAX時返還
        }
      }

      results.push({
        skin: this.skins[pickedId],
        isNew: isNew,
        isLimitBreak: isLimitBreak,
        newLv: newLv
      });
    }

    this.saveUserData();
    this.gachaResults = results;
    if (hasSSR) {
      audio.playLightningBoom();
      this.triggerScreenShake(24);
      this.screenFlash = 0.5;
    } else {
      audio.playItemGet();
      this.triggerScreenShake(10);
    }
  }

  initBoard(size = 8, dotArtKey = null) {
    this.gridSize = size;
    this.board = [];
    for (let r = 0; r < size; r++) {
      this.board[r] = [];
      for (let c = 0; c < size; c++) {
        this.board[r][c] = { color: 0, scale: 1.0, isGold: false, glow: 0, flipTimer: 0, flipDur: 0.34, flipDelay: 0, prevColor: 0 };
      }
    }

    if (dotArtKey && DOT_ART_PATTERNS[dotArtKey]) {
      const pattern = DOT_ART_PATTERNS[dotArtKey];
      // ★10x10盤面の場合、8x8ドット絵を中央(+1, +1)にセンタリング配置！
      // これにより外周に1マスのゆとりが生まれ、絵柄の潰れを解消＆ダイナミックな外周回り込みを実現！
      // パターンの最大座標を自動検出 (8x8パターンなら中央+1オフセット、10x10フルキャンバスなら等倍配置)
      const maxCoord = pattern.reduce((m, p) => Math.max(m, p.r, p.c), 0);
      const offsetR = (size === 10 && maxCoord <= 7) ? 1 : 0;
      const offsetC = (size === 10 && maxCoord <= 7) ? 1 : 0;

      pattern.forEach(p => {
        const tr = p.r + offsetR;
        const tc = p.c + offsetC;
        if (this.board[tr] && this.board[tr][tc]) {
          this.board[tr][tc].color = p.color;
          this.board[tr][tc].scale = 1.35;
        }
      });
    } else {
      const mid = Math.floor(size / 2);
      this.board[mid - 1][mid - 1].color = P2_COLOR;
      this.board[mid - 1][mid].color = P1_COLOR;
      this.board[mid][mid - 1].color = P1_COLOR;
      this.board[mid][mid].color = P2_COLOR;
    }

    this.itemsOnBoard = [];
    this.particles = [];
    this.floatingTexts = [];
    this.updateScores();
  }

  expandBoard() {
    if (this.gridSize >= 10) return;
    const oldSize = this.gridSize;
    const newSize = 10;
    const offset = Math.floor((newSize - oldSize) / 2);
    const newBoard = [];
    for (let r = 0; r < newSize; r++) {
      newBoard[r] = [];
      for (let c = 0; c < newSize; c++) {
        newBoard[r][c] = { color: 0, isGold: false, scale: 0.1, glow: 1.0, flipTimer: 0, flipDur: 0.34, flipDelay: 0, prevColor: 0 };
      }
    }
    for (let r = 0; r < oldSize; r++) {
      for (let c = 0; c < oldSize; c++) {
        if (this.board[r] && this.board[r][c]) {
          newBoard[r + offset][c + offset] = this.board[r][c];
        }
      }
    }
    this.itemsOnBoard.forEach(item => {
      item.r += offset;
      item.c += offset;
    });
    this.p1.cursor.r = Math.min(newSize - 1, this.p1.cursor.r + offset);
    this.p1.cursor.c = Math.min(newSize - 1, this.p1.cursor.c + offset);
    this.p2.cursor.r = Math.min(newSize - 1, this.p2.cursor.r + offset);
    this.p2.cursor.c = Math.min(newSize - 1, this.p2.cursor.c + offset);

    this.gridSize = newSize;
    this.board = newBoard;
    this.triggerScreenShake(26);
    this.showBanner('結界崩壊！盤面拡張 10×10！', '#f59e0b', 3.0);
    audio.playWarning();
  }

  isPvpFairMode() {
    return this.mode === 'PVP' || this.mode === 'PVP_LOCAL' || this.mode === 'PVP_ONLINE';
  }

  startMatch(syncPacket = null) {
    if (window.duelNet && window.duelNet.isConnected && this.mode !== 'DUNGEON' && this.mode !== 'VS_CPU') {
      this.mode = 'PVP_ONLINE';
    }

    let targetGridSize = 8;
    let chosenDotArt = this.currentDotArt;

    if (syncPacket) {
      targetGridSize = syncPacket.gridSize || 8;
      chosenDotArt = syncPacket.dotArt || null;
      this.pvpUseDotArt = !!chosenDotArt;
      if (syncPacket.speedMode) this.speedMode = syncPacket.speedMode;
      if (syncPacket.matchDuration) this.matchDuration = syncPacket.matchDuration;
      if (syncPacket.ruleMode) this.ruleMode = syncPacket.ruleMode;
      if (typeof syncPacket.betIndex === 'number') this.selectedBetIndex = syncPacket.betIndex;
    } else if (this.isPvpFairMode() || this.mode === 'VS_CPU') {
      if (this.pvpUseDotArt) {
        // ★ドット絵選択時はPVP・CPU戦問わず【確定で10×10】に拡張し、310種からランダム展開！
        targetGridSize = 10;
        const artKeys = Object.keys(DOT_ART_PATTERNS);
        chosenDotArt = artKeys[Math.floor(Math.random() * artKeys.length)];
      } else {
        // 通常オセロ配置は 8×8 (中央2×2)
        targetGridSize = 8;
        chosenDotArt = null;
      }
      if (this.mode === 'PVP_ONLINE' && window.duelNet && window.duelNet.isConnected) {
        window.duelNet.send({
          t: 'START_MATCH',
          gridSize: targetGridSize,
          dotArt: chosenDotArt,
          speedMode: this.speedMode,
          matchDuration: this.matchDuration,
          ruleMode: this.ruleMode,
          betIndex: this.selectedBetIndex
        });
      }
    } else if (this.mode === 'DUNGEON') {
      if (this.playerAbilities.includes('UR_BOARD10') || (this.dungeonSubStage === 'BOSS' && this.dungeonFloor === 5)) {
        targetGridSize = 10;
      } else {
        targetGridSize = 8;
      }
    } else {
      targetGridSize = 8;
    }

    this.initBoard(targetGridSize, chosenDotArt);
    // カーソル位置を盤面中央付近にリセット
    const mid = Math.floor(targetGridSize / 2);
    this.p1.cursor = { r: mid, c: mid - 1 };
    this.p2.cursor = { r: mid - 1, c: mid };
    this.timeLeft = this.matchDuration;
    this.currentScore = 0;
    this.displayScore = 0;
    this.isNewHighScore = false;
    this.floatingTexts = [];
    this.isClimaxActive = false;
    this.climaxEvent = null;
    this.phoenixCooldown = 0;
    this.freezeOverlayTimer = 0;
    this.matchResultAwarded = false;
    this.isPaused = false;
    this.resultGuardTimer = 1.5; // 【改善点①】1.5秒誤爆ガードタイマー

    // BET額の確定
    const betSetting = this.betAmounts[this.selectedBetIndex];
    if (betSetting === 'ALL_IN') {
      this.currentBet = Math.min(this.p1Gold, this.p2Gold);
    } else {
      this.currentBet = Math.min(betSetting, this.p1Gold, this.p2Gold);
    }
    let baseCT = this.speedMode === 'TURBO' ? 1.0 : 1.5;

    // スキン固有の基本CT短縮パッシブ (※PVP対人戦では完全公平のため無効化)
    const eqSkin = this.skins[this.equippedSkinId] || this.skins['DEFAULT'];
    if (!this.isPvpFairMode() && this.ruleMode !== 'CLASSIC') {
      if (eqSkin.id === 'SOLAR') baseCT -= 0.10; // ★5 SOLAR: -0.10s
      else if (eqSkin.id === 'GENESIS') baseCT -= 0.50; // ★6 LR GENESIS (神竜): 常時-0.50sぶっ壊れ超速化！
    }
    baseCT = Math.max(0.2, baseCT);

    
    this.stats = {
      p1SpeedSum: 0, p1Moves: 0,
      p2SpeedSum: 0, p2Moves: 0,
      p1Items: 0, p2Items: 0,
      p1Overwrites: 0, p2Overwrites: 0,
      p1Corners: 0, p2Corners: 0,
      p1MaxFlips: 0, p2MaxFlips: 0
    };

    this.p1.maxCooldown = baseCT;
    this.p1.cooldown = 0;
    this.p1.nextItem = null;
    this.p1.slotFlash = 0;
    this.p1.hyperTimer = 0;
    this.p1.freezeTimer = 0;
    this.p1.stunTimer = 0;
    this.p1.hasteTimer = 0;
    this.p1.cursor = { r: 3, c: 2 };

    this.p2.maxCooldown = baseCT;
    if (!this.isPvpFairMode() && this.ruleMode !== 'CLASSIC' && eqSkin.id === 'CHRONOS') {
      this.p2.maxCooldown += 0.40; // ★6 LR CHRONOS: 相手CT常時+0.40s遅延
    }
    this.p2.cooldown = 0;
    this.p2.nextItem = null;
    this.p2.slotFlash = 0;
    this.p2.hyperTimer = 0;
    this.p2.freezeTimer = 0;
    this.p2.stunTimer = 0;
    this.p2.hasteTimer = 0;
    this.p2.cursor = { r: 4, c: 5 };
    if (this.mode === 'PVP_ONLINE') {
      this.p1.name = this.onlineRole === 'HOST' ? '1P (YOU/黒)' : '1P (HOST/黒)';
      this.p2.name = this.onlineRole === 'GUEST' ? '2P (YOU/白)' : '2P (GUEST/白)';
    } else {
      this.p1.name = '1P (黒)';
      this.p2.name = this.mode === 'VS_CPU' 
        ? `CPU [${this.cpuLevel === 'ELEMENTARY' ? '小学生' : this.cpuLevel === 'ADULT' ? '大人' : '超知能AI'}]`
        : '2P (白)';
    }

    this.state = 'COUNTDOWN';
    this.countdownSec = 3.2;
    this.isClimaxActive = false;
    audio.init();
    audio.setClimax(false); // ★試合開始時は確実に通常速度 (1.0倍) にリセット！
    audio.startBgm();
  }

  updateScores() {
    let p1Count = 0;
    let p2Count = 0;
    let p1Corners = 0;
    let p2Corners = 0;

    for (let r = 0; r < this.gridSize; r++) {
      for (let c = 0; c < this.gridSize; c++) {
        const col = this.board[r][c].color;
        if (col === P1_COLOR) {
          p1Count++;
          if ((r === 0 || r === this.gridSize - 1) && (c === 0 || c === this.gridSize - 1)) p1Corners++;
        }
        if (col === P2_COLOR) {
          p2Count++;
          if ((r === 0 || r === this.gridSize - 1) && (c === 0 || c === this.gridSize - 1)) p2Corners++;
        }
      }
    }
    this.p1.score = p1Count;
    this.p2.score = p2Count;
    this.stats.p1Corners = Math.max(this.stats.p1Corners, p1Corners);
    this.stats.p2Corners = Math.max(this.stats.p2Corners, p2Corners);
  }

  getFlips(r, c, color) {
    if (r < 0 || r >= this.gridSize || c < 0 || c >= this.gridSize) return [];
    const opp = color === P1_COLOR ? P2_COLOR : P1_COLOR;
    const dirs = [
      [-1, -1], [-1, 0], [-1, 1],
      [0, -1],           [0, 1],
      [1, -1],  [1, 0],  [1, 1]
    ];
    let allFlips = [];

    for (const [dr, dc] of dirs) {
      let cr = r + dr;
      let cc = c + dc;
      let line = [];
      while (cr >= 0 && cr < this.gridSize && cc >= 0 && cc < this.gridSize) {
        const cell = this.board[cr][cc];
        if (cell.color === opp) {
          if (cell.isGold) break;
          line.push({ r: cr, c: cc });
        } else if (cell.color === color) {
          if (line.length > 0) allFlips = allFlips.concat(line);
          break;
        } else {
          break;
        }
        cr += dr;
        cc += dc;
      }
    }
    return allFlips;
  }

  canPlace(r, c, color, activeItem = null) {
    if (this.board[r][c].color !== 0) {
      // 上書き配置の場合のチェックなど
      const cell = this.board[r][c];
      if (cell.color === color) return false; // 自分の色の上には置けない
      // 相手の色の場合は、オセロ本来の挟み判定または特定ルールを満たしていればOK
    }

    // ★【神機能ブロッキング復活】同じマスに両者のカーソルが重なっている場合は配置不可！
    if (this.mode === 'PVP_LOCAL' || this.mode === 'PVP_ONLINE' || this.mode === 'PVP') {
      if (this.p1.cursor.r === r && this.p1.cursor.c === c && 
          this.p2.cursor.r === r && this.p2.cursor.c === c) {
        return false; // 両者のカーソルが完全バッティング中は置けない！
      }
    }

    // （以降、通常のオセロの挟み判定ロジックが続きます）


  // --- 石の色＆スキン属性によるパッシブ能力システム ---
  applyStoneColorPassives(player, isOverride, isCorner, flips, moveR = player.cursor.r, moveC = player.cursor.c) {
    // ★2人対戦(PVP/PVP_LOCAL/PVP_ONLINE)時はパッシブスキルを完全無効化！(フェアな実力勝負)
    if (this.isPvpFairMode() || this.ruleMode === 'CLASSIC' || this.ruleMode === 'PURE' || this.equippedSkinId === 'CLASSIC') return;

    const r = (moveR !== undefined) ? moveR : player.cursor.r;
    const c = (moveC !== undefined) ? moveC : player.cursor.c;
    const isP1 = player.color === P1_COLOR;
    const pos = this.cellToPixel(r, c);

    // 基本石色パッシブ (黒石: 浸食反転 / 白石: 聖光シールド)
    if (this.equippedSkinId !== 'CLASSIC') {
      if (player.color === P1_COLOR) {
        if (Math.random() < 0.28 && flips.length > 0) {
          const adj = [[-1,0],[1,0],[0,-1],[0,1]];
          for (const [dr, dc] of adj) {
            const nr = r + dr, nc = c + dc;
            if (nr >= 0 && nr < this.gridSize && nc >= 0 && nc < this.gridSize) {
              if (this.board[nr][nc].color === P2_COLOR && !this.board[nr][nc].isGold) {
                this.board[nr][nc].color = P1_COLOR;
                this.board[nr][nc].scale = 1.35;
                this.addFloatingText('🌑 黒石浸食！隣接石を反転！', '#38bdf8', pos.x, pos.y - 25, 0.9);
                this.addShockwave(nr, nc, '#38bdf8', 40);
                break;
              }
            }
          }
        }
      } else {
        if (isCorner || flips.length >= 3) {
          player.whiteAegisBuff = true;
          this.addFloatingText('🛡️ 白石聖光！次回上書きペナルティ無効！', '#fde047', pos.x, pos.y - 25, 0.9);
        }
      }
    }

    // スキン固有パッシブ (ダンジョン/VS CPU時のみ発動)
    const skin = this.skins[this.equippedSkinId];
    if (!skin || !skin.passive) return;

    switch (this.equippedSkinId) {
      case 'INFERNO':
        if (isP1 && isOverride && Math.random() < 0.40) {
          const other = player === this.p1 ? this.p2 : this.p1;
          other.cooldown += 0.45;
          this.addFloatingText('🔥 業火熱波！敵CT+0.45s！', '#f97316', pos.x, pos.y - 30, 0.9);
        }
        break;
      case 'OCEAN':
        if (isP1 && isCorner) {
          player.hasteTimer = 3.5;
          this.addFloatingText('🌊 海流加速！CT半減！', '#38bdf8', pos.x, pos.y - 30, 1.0);
        }
        break;
      case 'THUNDER':
        if (isP1 && flips.length >= 2 && Math.random() < 0.35) {
          player.hyperTimer = 2.0;
          this.addFloatingText('⚡ 迅雷覚醒！2秒神速！', '#facc15', pos.x, pos.y - 30, 1.0);
          audio.playLightningBoom();
        }
        break;
      case 'GENESIS':
        if (isP1 && Math.random() < 0.20 && flips.length > 0) {
          const randFlip = flips[Math.floor(Math.random() * flips.length)];
          this.board[randFlip.r][randFlip.c].isGold = true;
          this.addShockwave(randFlip.r, randFlip.c, '#facc15', 75);
          this.addFloatingText('👑 創世奇跡！不壊金石化！', '#facc15', pos.x, pos.y - 35, 1.1);
        }
        break;
    }
  }
  executeMove(player, r, c, fromNetwork = false) {
    if (!fromNetwork) {
      if (player.cooldown > 0 && player.hyperTimer <= 0) return false;
      if (player.freezeTimer > 0 || player.stunTimer > 0) return false;
    }

    const activeItem = player.nextItem;
    if (!fromNetwork && !this.canPlace(r, c, player.color, activeItem)) return false;

    const cell = this.board[r][c];
    const isOverride = cell.color !== 0 && cell.color !== player.color;

    // ★6 LR CHRONOS: 相手(P2)がP1の石を上書きしようとした場合、拒絶＆反撃凍結！
    if (!this.isPvpFairMode() && player === this.p2 && isOverride && cell.color === P1_COLOR && this.equippedSkinId === 'CHRONOS') {
      player.cooldown += 1.5;
      player.freezeTimer = 1.5;
      this.showBanner('⏳ 冥王障壁：上書きを拒絶し敵を凍結カウンター！', '#f43f5e', 1.5);
      audio.playFreezeGlass();
      return false;
    }

    // 同時激突相殺（双方がほぼ同フレーム 0.08秒以内に同一マスへ配置を試みた場合のみ）
    const nowSec = performance.now() / 1000;
    const otherPlayer = player === this.p1 ? this.p2 : this.p1;
    if (this.lastMoveAttempt && 
        this.lastMoveAttempt.player === otherPlayer &&
        this.lastMoveAttempt.r === r && 
        this.lastMoveAttempt.c === c && 
        (nowSec - this.lastMoveAttempt.time) < 0.08) {
      this.p1.stunTimer = 0.6;
      this.p2.stunTimer = 0.6;
      this.triggerScreenShake(18);
      this.addShockwave(r, c, '#f59e0b', 95);
      this.addLightning(r, c);
      this.triggerCutIn('💥 CLASH BURST!!', '激突相殺！双方が0.6秒スタン！', '#ef4444');
      this.showBanner('💥 CLASH BURST! 激突相殺！', '#ef4444', 1.0);
      audio.playLightningBoom();
      this.lastMoveAttempt = null;
      return false;
    }
    this.lastMoveAttempt = { player, r, c, time: nowSec };

    const flips = this.getFlips(r, c, player.color);
    const isCorner = (r === 0 || r === this.gridSize - 1) && (c === 0 || c === this.gridSize - 1);
    const flipCount = flips.length;

    // ========================================================
    // ★【不壊のオセロ基本処理：何があっても最優先で確定！】
    // ========================================================
    // 1) 石を配置 (★3Dバウンスアニメーション付与)
    cell.prevColor = cell.color || player.color;
    cell.color = player.color;
    cell.scale = 1.48;
    cell.flipDelay = 0;
    cell.flipDur = 0.24;
    cell.flipTimer = isOverride ? 0.28 : 0;

    // P2Pオンライン対戦時：自分の配置パケットを相手へ即座に送信
    if (!fromNetwork && this.mode === 'PVP_ONLINE' && window.duelNet && window.duelNet.isConnected) {
      window.duelNet.send({
        t: 'MOVE',
        p: player === this.p1 ? 1 : 2,
        r: r,
        c: c
      });
    }

    // 2) クールタイムを即座に計算・設定（1.5秒を確実に保証）
    if (player.hyperTimer <= 0) {
      let overrideMult = 1.45;
      if (!this.isPvpFairMode()) {
        if (player === this.p1 && this.equippedSkinId === 'INFERNO') overrideMult = 1.20;
        if (player === this.p1 && (this.equippedSkinId === 'GENESIS' || this.equippedSkinId === 'CHRONOS')) overrideMult = 1.0;
        if (player === this.p1 && this.mode === 'DUNGEON' && this.playerAbilities.includes('N_OVERRIDE')) overrideMult = Math.min(overrideMult, 1.15);
        if (player.whiteAegisBuff) { overrideMult = 1.0; player.whiteAegisBuff = false; }
      }

      let base = isOverride ? player.maxCooldown * overrideMult : player.maxCooldown;
      if (player.hasteTimer > 0) base *= 0.5;
      player.cooldown = base; // ★確実にセット
    }

    // 3) 挟んだ相手の石を即座に反転！（★3D放物線ジャンプ＆180度宙返りウェーブ！）
    if (!activeItem || activeItem.id !== 'PAINT') {
      flips.forEach((pos, idx) => {
        const target = this.board[pos.r][pos.c];
        target.prevColor = target.color;
        target.color = player.color;
        target.scale = 1.38;
        target.flipDelay = idx * 0.035;
        target.flipDur = 0.34;
        target.flipTimer = 0.34;
        try {
          setTimeout(() => audio.playFlip(idx, this.equippedSkinId), idx * 35);
          this.addSkinPlacementVfx(pos.r, pos.c, player.color, this.equippedSkinId);
        } catch (e) {}
      });
    }

    // 4) 統計情報・スコア更新
    if (player === this.p1) {
      this.stats.p1Moves++;
      this.stats.p1MaxFlips = Math.max(this.stats.p1MaxFlips, flipCount);
      if (isOverride) this.stats.p1Overwrites++;

      if (this.mode === 'VS_CPU' || this.mode === 'DUNGEON') {
        let comboMult = 1.0;
        if (flipCount === 2) comboMult = 1.3;
        else if (flipCount === 3) comboMult = 1.6;
        else if (flipCount === 4) comboMult = 2.0;
        else if (flipCount >= 5) comboMult = 2.5 + (flipCount - 5) * 0.4;
        if (this.equippedSkinId === 'RETRO') comboMult *= 1.15;
        if (this.equippedSkinId === 'THUNDER' && player.hyperTimer > 0) comboMult *= 1.5;

        let turnPts = 100;
        if (isOverride) turnPts += 300;
        if (isCorner) turnPts += 1000;
        turnPts += flipCount * 80;

        const totalEarned = Math.floor(turnPts * comboMult);
        this.currentScore += totalEarned;

        const pCoord = this.cellToPixel(r, c);
        if (flipCount >= 4) {
          this.addFloatingText(`🔥 ${flipCount}連鎖 COMBO! +${totalEarned.toLocaleString()}`, '#facc15', pCoord.x, pCoord.y - 18, 1.35);
        } else if (isCorner) {
          this.addFloatingText(`🏰 四隅奪取!! +${totalEarned.toLocaleString()}`, '#38bdf8', pCoord.x, pCoord.y - 18, 1.25);
        } else if (isOverride) {
          this.addFloatingText(`💥 上書き成功! +${totalEarned.toLocaleString()}`, '#f97316', pCoord.x, pCoord.y - 18, 1.15);
        } else {
          this.addFloatingText(`+${totalEarned.toLocaleString()}`, '#38bdf8', pCoord.x, pCoord.y - 18, 1.0);
        }
      }
    } else {
      this.stats.p2Moves++;
      this.stats.p2MaxFlips = Math.max(this.stats.p2MaxFlips, flips.length);
      if (isOverride) this.stats.p2Overwrites++;
    }

    
        // 雑魚戦特殊ルール: GOLD_RUSH (反転ごとに+25G)
        if (this.activeRuleMod === 'GOLD_RUSH' && player === this.p1 && flipCount > 0) {
          const rushGold = flipCount * 25;
          this.p1Gold += rushGold;
          const grPos = this.cellToPixel(r, c); this.addFloatingText(`💰 ゴールドラッシュ +${rushGold}G!`, '#fbbf24', grPos.x, grPos.y - 30, 1.2);
        }
        // 雑魚戦特殊ルール: CORNER_RUSH (角でCT即リセット)
        if (this.activeRuleMod === 'CORNER_RUSH' && isCorner) {
          player.cooldown = 0;
          const crPos = this.cellToPixel(r, c); this.addFloatingText('⚡ 四隅チャージ！CT即時リセット！', '#facc15', crPos.x, crPos.y - 30, 1.2);
        }

    this.updateScores();

    // ========================================================
    // ★【効果音・演出・スキル・ダンジョン処理（安全防護）】
    // ========================================================
    try {
      // 効果音＆シェイク
      if (player.hyperTimer > 0) {
        audio.playHyperBlastBoom();
        this.triggerScreenShake(14);
        this.screenFlash = 0.25;
        this.addSkinPlacementVfx(r, c, player.color, 'THUNDER');
      } else if (activeItem) {
        audio.playEnchantSlam();
        this.triggerScreenShake(16);
      } else if (isOverride) {
        audio.playOverrideCrash();
        this.triggerScreenShake(8);
      } else {
        audio.playClick(this.equippedSkinId);
        this.triggerScreenShake(3);
      }

      this.addShockwave(r, c, player.color === P1_COLOR ? '#00f0ff' : '#fbbf24', isOverride ? 85 : 45);

      // アイテム発動
      if (activeItem) {
        if (player === this.p1) this.stats.p1Items++;
        else this.stats.p2Items++;
        this.applyItemEffect(player, r, c, activeItem, flips);
        player.nextItem = null;
      }

      // ダンジョン第1層ボス戦：氷結の魔女 エルサリアの氷結トラップ (案3+マイルド調整)
      if (this.mode === 'DUNGEON' && this.dungeonFloor === 1 && this.dungeonSubStage === 'BOSS' && player === this.p1) {
        if (!this.elsariaTrapCooldown || this.elsariaTrapCooldown <= 0) {
          let nearBossStone = false;
          for (let dr = -1; dr <= 1; dr++) {
            for (let dc = -1; dc <= 1; dc++) {
              if (dr === 0 && dc === 0) continue;
              const nr = r + dr, nc = c + dc;
              if (nr >= 0 && nr < this.gridSize && nc >= 0 && nc < this.gridSize) {
                if (this.board[nr][nc].color === this.p2.color) nearBossStone = true;
              }
            }
          }
          // 確率を15%にマイルド化、凍結0.4秒、5秒間の安全クールタイム
          if (nearBossStone && Math.random() < 0.15) {
            this.p1.freezeTimer = 0.4;
            this.freezeOverlayTimer = 0.4;
            this.elsariaTrapCooldown = 5.0; // 5秒間は絶対に再発動しない！
            this.showBanner('❄️ エルサリアの氷結トラップ！0.4秒間凍結（安全時間発動）', '#38bdf8', 1.1);
            audio.playFreezeGlass();
          }
        }
      }

      // ダンジョン第4層：ゴレムスの不壊金石配置
      if (this.mode === 'DUNGEON' && this.dungeonFloor === 4 && this.dungeonSubStage === 'BOSS' && player === this.p2) {
        this.bossMoveCount = (this.bossMoveCount || 0) + 1;
        if (this.bossMoveCount % 4 === 0) {
          cell.isGold = true;
          this.showBanner('🗿 ゴレムスが【不壊金石】を配置！', '#10b981', 1.2);
        }
      }

      // スキンパッシブ能力発動
      this.applyStoneColorPassives(player, isOverride, isCorner, flips, r, c);

      // アイテム回収 (着弾済みアイテム)
      const itemIndex = this.itemsOnBoard.findIndex(it => it.r === r && it.c === c && it.active && it.dropTimer <= 0);
      if (itemIndex >= 0) {
        const it = this.itemsOnBoard[itemIndex];
        if (!player.nextItem) {
          this.awardItem(player, it.type, r, c);
          if (player === this.p1 && (this.mode === 'VS_CPU' || this.mode === 'DUNGEON')) {
            this.currentScore += 500;
            this.addFloatingText('🧲 アイテムボーナス +500', '#c084fc', this.cellToPixel(r, c).x, this.cellToPixel(r, c).y - 40, 1.2);
          }
          this.itemsOnBoard.splice(itemIndex, 1);
        }
      }

      // 魔導ダンジョン：アビリティ発動チェック＆実行
      if (this.mode === 'DUNGEON') {
        const pos = this.cellToPixel(r, c);

        // 1. N_CHAIN_GOLD (連鎖の錬金術): 2枚以上反転で+50G
        if (player === this.p1 && flips.length >= 2 && this.playerAbilities.includes('N_CHAIN_GOLD')) {
          this.p1Gold += 50;
          this.addFloatingText('💰 連鎖錬金 +50G', '#fbbf24', pos.x, pos.y - 35, 1.2);
        }

        // 2. N_CORNER_RESET (要塞の恵み): 角を取るとCTが即座に0秒リセット！
        if (player === this.p1 && isCorner && this.playerAbilities.includes('N_CORNER_RESET')) {
          this.p1.cooldown = 0;
          this.addFloatingText('⚡ 角奪取！CT即座リセット！', '#fde047', pos.x, pos.y - 45, 1.3);
          audio.playClick('THUNDER');
        }

        // 3. UR_CORNER_GOLD (絶対支配者): 角が全て【永久不壊金石】に昇華！
        if (player === this.p1 && isCorner && this.playerAbilities.includes('UR_CORNER_GOLD')) {
          cell.isGold = true;
          cell.scale = 1.5;
          this.addShockwave(r, c, '#facc15', 95);
          this.showBanner('👑 絶対支配者！角が【永久不壊金石】に昇華！', '#facc15', 1.2);
          audio.playEnchantSlam();
        }

        // 4. UR_OVERRIDE_BURST (連鎖爆縮): 上書き時に周囲1マスの敵石を巻き添え反転！
        if (player === this.p1 && isOverride && this.playerAbilities.includes('UR_OVERRIDE_BURST')) {
          let burstCount = 0;
          for (let dr = -1; dr <= 1; dr++) {
            for (let dc = -1; dc <= 1; dc++) {
              const nr = r + dr, nc = c + dc;
              if (nr >= 0 && nr < this.gridSize && nc >= 0 && nc < this.gridSize) {
                const target = this.board[nr][nc];
                if (target.color === this.p2.color && !target.isGold) {
                  target.color = this.p1.color;
                  target.scale = 1.35;
                  burstCount++;
                  this.addSparks(nr, nc, '#38bdf8', 6);
                }
              }
            }
          }
          if (burstCount > 0) {
            this.triggerScreenShake(14);
            this.showBanner(`💥 連鎖爆縮！周囲${burstCount}個の敵石を巻き添え反転！`, '#38bdf8', 1.2);
            audio.playNoiseHit(0.2, 500, 0.7);
          }
        }

        // 5. UR_MINI_VORTEX (魔導引力): 石を置くたび周囲の敵石を引き込み反転
        if (player === this.p1 && this.playerAbilities.includes('UR_MINI_VORTEX') && Math.random() < 0.6) {
          for (let dr = -1; dr <= 1; dr++) {
            for (let dc = -1; dc <= 1; dc++) {
              const nr = r + dr, nc = c + dc;
              if (nr >= 0 && nr < this.gridSize && nc >= 0 && nc < this.gridSize) {
                const target = this.board[nr][nc];
                if (target.color === this.p2.color && !target.isGold) {
                  target.color = this.p1.color;
                  target.scale = 1.35;
                  this.addShockwave(nr, nc, '#a855f7', 45);
                  this.addFloatingText('🌀 魔導引力反転！', '#a855f7', pos.x, pos.y - 30, 0.9);
                  dr = 2; dc = 2; // 1つ反転したら終了
                }
              }
            }
          }
        }

        // 6. LR_PUNISH_THUNDER (神罰代行): 相手が石を置いた時25%で相手に雷直撃1.5秒スタン
        if (player === this.p2 && this.playerAbilities.includes('LR_PUNISH_THUNDER') && Math.random() < 0.25) {
          this.p2.stunTimer = 1.5;
          this.addLightning(r, c);
          this.triggerScreenShake(18);
          this.showBanner('⚡ 神罰代行！ボスに裁きの神雷直撃（1.5秒スタン）！', '#ec4899', 1.5);
          audio.playLightningBoom();
        }
      }
    } catch (err) {
      console.warn('executeMove decoration warning:', err);
    }

    this.updateScores();
    return true;
  }

  awardItem(player, itemType, r, c) {
    player.nextItem = itemType;
    player.slotFlash = 1.0;
    audio.playItemGet();

    // 【ダンジョン能力：N_STUN_STEAL 妨害ショック】相手がアイテム獲得時、相手を0.8秒スタン
    if (this.mode === 'DUNGEON' && player === this.p2 && this.playerAbilities.includes('N_STUN_STEAL')) {
      this.p2.stunTimer = 0.8;
      this.addShockwave(this.p2.cursor.r, this.p2.cursor.c, '#38bdf8', 75);
      this.showBanner('⚡ 妨害ショック！アイテムを奪った相手を0.8秒スタン！', '#38bdf8', 1.2);
      audio.playNoiseHit(0.2, 550, 0.7);
    }

    const pPos = this.cellToPixel(r, c);
    const targetX = player === this.p1 ? 145 : (1280 - 145);
    const targetY = 410;

    // 光のエネルギー球飛翔演出
    this.flyingOrbs.push({
      x: pPos.x, y: pPos.y,
      targetX, targetY,
      color: player === this.p1 ? '#00f0ff' : '#fbbf24',
      icon: itemType.icon,
      progress: 0
    });

    // 獲得ポップアップ
    this.itemGetPopups.push({
      text: `GET! 【${itemType.name}】`,
      icon: itemType.icon,
      x: pPos.x, y: pPos.y - 30,
      life: 1.2, maxLife: 1.2,
      color: '#f59e0b'
    });

    this.addShockwave(r, c, '#f59e0b', 75);
    this.addSparks(r, c, '#fbbf24', 16);
    this.showBanner(`${player.name}が【${itemType.name}】を獲得！`, '#10b981', 1.2);
  }

  // 各アイテムの圧倒的VFX発動
  applyItemEffect(player, r, c, item, preFlips) {
    const opp = player === this.p1 ? this.p2 : this.p1;
    if (item.id === 'HYPER') this.triggerCutIn('⚡ HYPER BURST!!', `${player.name} 神速覚醒！4秒間クールダウン0秒連射！`, '#facc15');
    else if (item.id === 'FREEZE') this.triggerCutIn('❄️ ABSOLUTE FREEZE!!', `${opp.name} を3秒間完全氷結拘束！`, '#38bdf8');
    else if (item.id === 'POTION') this.triggerCutIn('💖 LIFE RECOVERY!!', `${player.name} 生命のエリクサー発動！自石を緊急再展開！`, '#ec4899');
    this.showBanner(`${player.name}【${item.name}】発動！`, '#38bdf8', 1.5);
    const pos = this.cellToPixel(r, c);

    if (item.id === 'MAGNET') {
      // 巨大ブラックホール重力渦
      audio.playBlackHole();
      this.triggerScreenShake(24);
      this.blackHoles.push({ x: pos.x, y: pos.y, radius: 110, life: 1.0, maxLife: 1.0 });

      for (let dr = -1; dr <= 1; dr++) {
        for (let dc = -1; dc <= 1; dc++) {
          const nr = r + dr, nc = c + dc;
          if (nr >= 0 && nr < this.gridSize && nc >= 0 && nc < this.gridSize) {
            if (nr !== r || nc !== c) {
              this.board[nr][nc].color = 0;
              this.board[nr][nc].isGold = false;
              this.addSparks(nr, nc, '#94a3b8', 16);
            }
          }
        }
      }
    } else if (item.id === 'PAINT') {
      // 蒼光大魔法陣展開
      audio.playMagicPaint();
      this.triggerScreenShake(15);
      this.magicCircles.push({
        x: pos.x, y: pos.y, radius: 100, life: 0.8, maxLife: 0.8,
        color: player.color === P1_COLOR ? '#00f0ff' : '#fbbf24'
      });

      for (let dr = -1; dr <= 1; dr++) {
        for (let dc = -1; dc <= 1; dc++) {
          const nr = r + dr, nc = c + dc;
          if (nr >= 0 && nr < this.gridSize && nc >= 0 && nc < this.gridSize) {
            if (!this.board[nr][nc].isGold) {
              this.board[nr][nc].color = player.color;
              this.board[nr][nc].scale = 1.4;
              this.addSparks(nr, nc, player.color === P1_COLOR ? '#00f0ff' : '#fbbf24', 12);
            }
          }
        }
      }
    } else if (item.id === 'POTION') {
      // 💖 生命のエリクサー: 周囲3x3のマスに自色の石を最大3〜4枚再展開！
      if (audio.playPotion) audio.playPotion();
      else audio.playItemGet();
      this.triggerScreenShake(12);
      this.screenFlash = 0.35;

      let recovered = 0;
      for (let dr = -1; dr <= 1 && recovered < 4; dr++) {
        for (let dc = -1; dc <= 1 && recovered < 4; dc++) {
          const nr = r + dr, nc = c + dc;
          if (nr >= 0 && nr < this.gridSize && nc >= 0 && nc < this.gridSize) {
            const targetCell = this.board[nr][nc];
            if (targetCell.color !== player.color && !targetCell.isGold) {
              targetCell.color = player.color;
              targetCell.scale = 1.4;
              this.addSparks(nr, nc, '#ec4899', 14);
              this.addShockwave(nr, nc, '#ec4899', 50);
              recovered++;
            }
          }
        }
      }
      this.addFloatingText(`💖 生命回復！自石+${recovered}枚！`, '#ec4899', pos.x, pos.y - 35, 1.3);
      this.showBanner(`💖 生命のエリクサー発動！自石を${recovered}枚緊急リカバリー！`, '#ec4899', 1.5);
    } else if (item.id === 'GOLD') {
      // 極太黄金雷撃ズドン！
      this.board[r][c].isGold = true;
      audio.playLightningBoom();
      this.triggerScreenShake(25);
      this.addLightning(r, c);
      this.addShockwave(r, c, '#f59e0b', 110);
      this.addSparks(r, c, '#fef08a', 20);
    } else if (item.id === 'HYPER') {
      let hyperDur = 4.0;
      if (player === this.p1) {
        if (this.equippedSkinId === 'THUNDER') hyperDur += 1.5;
        if (this.equippedSkinId === 'GENESIS') hyperDur += 2.0;
      }
      player.hyperTimer = hyperDur;
      audio.playThunderHyper();
      this.triggerScreenShake(26);
      this.screenFlash = 0.5;
      this.addLightning(r, c);
      this.addShockwave(r, c, '#facc15', 130);
      this.addSkinPlacementVfx(r, c, player.color, 'THUNDER');
    } else if (item.id === 'FREEZE') {
      let freezeDur = 3.0;
      if (player === this.p1) {
        if (this.equippedSkinId === 'OCEAN') freezeDur += 0.8;
        if (this.equippedSkinId === 'GENESIS') freezeDur += 2.0;
      }
      opp.freezeTimer = freezeDur;
      this.freezeOverlayTimer = 1.6;
      audio.playFreezeGlass();
      this.triggerScreenShake(24);
      this.screenFlash = 0.55;
      this.addShockwave(opp.cursor.r, opp.cursor.c, '#38bdf8', 140);
      this.addSkinPlacementVfx(opp.cursor.r, opp.cursor.c, opp.color, 'CRYSTAL');
    }

    preFlips.forEach((posCoord, idx) => {
      this.board[posCoord.r][posCoord.c].color = player.color;
      setTimeout(() => audio.playFlip(idx, this.equippedSkinId), idx * 35);
    });
  }

  spawnItem(forcedData = null) {
    if (this.mode === 'PVP_ONLINE' && this.onlineRole === 'GUEST' && !forcedData) {
      return; // オンラインゲスト時はホストからの同期パケットでアイテムを生成
    }
    const min = this.gridSize === 10 ? 2 : 1;
    const max = this.gridSize === 10 ? 7 : 6;
    const r = forcedData ? forcedData.r : (Math.floor(Math.random() * (max - min + 1)) + min);
    const c = forcedData ? forcedData.c : (Math.floor(Math.random() * (max - min + 1)) + min);

    const keys = Object.keys(ITEM_TYPES);
    const pool = this.isClimaxActive ? keys : keys.filter(k => k !== 'GOLD');
    const pickedKey = (forcedData && forcedData.key && ITEM_TYPES[forcedData.key])
      ? forcedData.key
      : pool[Math.floor(Math.random() * pool.length)];
    const itemType = ITEM_TYPES[pickedKey];

    this.itemsOnBoard.push({
      r, c,
      type: itemType,
      active: true,
      dropTimer: 2.8
    });

    if (!forcedData && this.mode === 'PVP_ONLINE' && this.onlineRole === 'HOST' && window.duelNet && window.duelNet.isConnected) {
      window.duelNet.send({ t: 'SPAWN_ITEM', r, c, key: pickedKey });
    }
  }

  resolveItemLanding(item) {
    if (!item || !this.board[item.r] || !this.board[item.r][item.c]) return;
    const cell = this.board[item.r][item.c];
    if (cell.color !== 0) {
      const recipient = cell.color === P1_COLOR ? this.p1 : this.p2;
      if (recipient && !recipient.nextItem) {
        this.awardItem(recipient, item.type, item.r, item.c);
      }
      item.active = false;
    } else {
      audio.playClick();
      this.addShockwave(item.r, item.c, '#a855f7', 55);
    }
  }

  triggerPhoenixResurrection(victim) {
    if (victim === this.p1) {
      const maxPhoenix = (this.mode === 'DUNGEON' && this.playerAbilities.includes('UR_DOUBLE_PHOENIX')) ? 2 : 1;
      this.phoenixUsedCount = (this.phoenixUsedCount || 0) + 1;
      if (this.phoenixUsedCount > maxPhoenix) return;
    }
    this.phoenixCooldown = 5.0;

    this.screenFlash = 0.85;
    this.triggerScreenShake(28);
    audio.playLightningBoom();
    this.showBanner(`⚡ PHOENIX RESURRECTION! 不死鳥の雷撃で奇跡の大復活！`, '#facc15', 3.0);
    if (this.mode === 'DUNGEON' && victim === this.p1 && this.playerAbilities.includes('UR_DOUBLE_PHOENIX')) {
      this.p1.hyperTimer = 5.0; // 不死鳥の加護：復活時神速5秒付与！
      this.showBanner('🔥 不死鳥の加護発動！神速5.0秒ボーナス付与！', '#ef4444', 2.0);
    }

    const mid = Math.floor(this.gridSize / 2);
    for (let dr = -1; dr <= 0; dr++) {
      for (let dc = -1; dc <= 0; dc++) {
        const r = mid + dr;
        const c = mid + dc;
        this.board[r][c].color = victim.color;
        this.board[r][c].isGold = false;
        this.board[r][c].scale = 1.6;
        this.addLightning(r, c);
        this.addSparks(r, c, '#facc15', 16);
      }
    }

    victim.nextItem = ITEM_TYPES.HYPER;
    victim.hyperTimer = 3.5;
    this.updateScores();
  }

  // 自力1マス移動（自由操作）
  updateKeyRepeat(dt) {
    const now = performance.now() / 1000;
    for (const code in this.keysDown) {
      const k = this.keysDown[code];
      const elapsed = now - k.firstPressed;
      if (elapsed > this.keyRepeatInitialDelay) {
        if (now - k.lastRepeat >= this.keyRepeatRate) {
          k.lastRepeat = now;
          this.handlePlayerMoveInput(code);
        }
      }
    }
  }

  handlePlayerMoveInput(code) {
    if (this.mode === 'PVP_ONLINE') {
      const myPlayer = this.onlineRole === 'GUEST' ? this.p2 : this.p1;
      if (code === 'KeyW' || code === 'ArrowUp') this.directMove(myPlayer, -1, 0);
      if (code === 'KeyS' || code === 'ArrowDown') this.directMove(myPlayer, 1, 0);
      if (code === 'KeyA' || code === 'ArrowLeft') this.directMove(myPlayer, 0, -1);
      if (code === 'KeyD' || code === 'ArrowRight') this.directMove(myPlayer, 0, 1);
      if (window.duelNet && window.duelNet.isConnected) {
        window.duelNet.send({
          t: 'CURSOR',
          p: this.onlineRole === 'GUEST' ? 2 : 1,
          r: myPlayer.cursor.r,
          c: myPlayer.cursor.c
        });
      }
      return;
    }

    // 1P: WASD
    if (code === 'KeyW') this.directMove(this.p1, -1, 0);
    if (code === 'KeyS') this.directMove(this.p1, 1, 0);
    if (code === 'KeyA') this.directMove(this.p1, 0, -1);
    if (code === 'KeyD') this.directMove(this.p1, 0, 1);

    // 2P: 矢印キー
    if (this.mode === 'PVP_LOCAL' || this.mode === 'PVP') {
      if (code === 'ArrowUp') this.directMove(this.p2, -1, 0);
      if (code === 'ArrowDown') this.directMove(this.p2, 1, 0);
      if (code === 'ArrowLeft') this.directMove(this.p2, 0, -1);
      if (code === 'ArrowRight') this.directMove(this.p2, 0, 1);
    }
  }

  directMove(player, dr, dc) {
    player.cursor.r = Math.max(0, Math.min(this.gridSize - 1, player.cursor.r + dr));
    player.cursor.c = Math.max(0, Math.min(this.gridSize - 1, player.cursor.c + dc));
  }

  smartSnap(player, dr, dc) {
    const validMoves = [];
    for (let r = 0; r < this.gridSize; r++) {
      for (let c = 0; c < this.gridSize; c++) {
        if (this.canPlace(r, c, player.color, player.nextItem)) {
          validMoves.push({ r, c });
        }
      }
    }
    if (validMoves.length === 0) {
      player.cursor.r = Math.max(0, Math.min(this.gridSize - 1, player.cursor.r + dr));
      player.cursor.c = Math.max(0, Math.min(this.gridSize - 1, player.cursor.c + dc));
      return;
    }

    let best = null;
    let bestDist = Infinity;
    const cur = player.cursor;

    for (const m of validMoves) {
      const dRow = m.r - cur.r;
      const dCol = m.c - cur.c;
      const dot = dRow * dr + dCol * dc;
      if (dot > 0) {
        const dist = Math.hypot(dRow, dCol);
        if (dist < bestDist) {
          bestDist = dist;
          best = m;
        }
      }
    }

    if (best) {
      player.cursor = { r: best.r, c: best.c };
    } else {
      let minGlobal = Infinity;
      let closest = validMoves[0];
      for (const m of validMoves) {
        const dist = Math.hypot(m.r - cur.r, m.c - cur.c);
        if (dist < minGlobal) {
          minGlobal = dist;
          closest = m;
        }
      }
      player.cursor = { r: closest.r, c: closest.c };
    }
  }

  updateCpu(dt) {
    if (this.mode !== 'VS_CPU' && this.mode !== 'DUNGEON') return;
    const cpu = this.p2;
    if (cpu.cooldown > 0 && cpu.hyperTimer <= 0) return;
    if (cpu.freezeTimer > 0 || cpu.stunTimer > 0) return;

    this.cpuActionTimer += dt;
    let delay = 0.75;
    if (this.mode === 'DUNGEON') {
      if (this.dungeonFloor === 3) delay = 0.32 + Math.random() * 0.15; // 神速王
      else if (this.dungeonFloor === 5) delay = 0.18 + Math.random() * 0.12; // ラスボス
      else if (this.cpuLevel === 'ELEMENTARY') delay = (this.mode === 'DUNGEON' && this.dungeonFloor === 1 && this.dungeonSubStage === 'BOSS') ? (0.75 + Math.random() * 0.25) : (0.50 + Math.random() * 0.25);
      else if (this.cpuLevel === 'ADULT') delay = 0.65 + Math.random() * 0.25;
      else delay = 0.28 + Math.random() * 0.15;
    } else {
      delay = this.cpuLevel === 'ELEMENTARY' ? (1.3 + Math.random() * 0.5) : this.cpuLevel === 'ADULT' ? (0.8 + Math.random() * 0.35) : (0.32 + Math.random() * 0.15);
    }
    if (this.cpuActionTimer < delay) return;
    this.cpuActionTimer = 0;

    const candidates = [];
    for (let r = 0; r < this.gridSize; r++) {
      for (let c = 0; c < this.gridSize; c++) {
        if (this.canPlace(r, c, cpu.color, cpu.nextItem)) {
          const flips = this.getFlips(r, c, cpu.color).length;
          const isCorner = (r === 0 || r === this.gridSize - 1) && (c === 0 || c === this.gridSize - 1);
          const hasItem = this.itemsOnBoard.some(it => it.r === r && it.c === c);

          // ★思考強化：減点ではなく「大量獲得（ビッグフリップ）」を最重要視！
          let flipScore = flips * 14;
          if (flips >= 3) flipScore += flips * 10; // 3枚以上で大加点
          if (flips >= 5) flipScore += 55;        // 5枚以上で超爆発加点

          let cornerScore = isCorner ? (this.cpuLevel === 'ELEMENTARY' ? 35 : 130) : 0;
          let itemScore = hasItem ? (this.cpuLevel === 'ELEMENTARY' ? 25 : 45) : 0;

          let score = flipScore + cornerScore + itemScore;
          candidates.push({ r, c, flips, isCorner, hasItem, score });
        }
      }
    }

    if (candidates.length === 0) {
      this.cpuActionTimer = delay * 0.5;
      return;
    }

    // スコア降順ソート
    candidates.sort((a, b) => b.score - a.score);

    // ★同じマス叩きループ根絶：最高評価付近（差が6点以内）の最良候補グループから分散選択！
    const topScore = candidates[0].score;
    const topCandidates = candidates.filter(c => c.score >= topScore - 6);
    const chosen = topCandidates[Math.floor(Math.random() * topCandidates.length)];
    if (chosen) {
      cpu.cursor = { r: chosen.r, c: chosen.c };
      this.executeMove(cpu, chosen.r, chosen.c);
    }
  }

  triggerClimax(forcedEvent = null) {
    if (this.mode === 'PVP_ONLINE' && this.onlineRole === 'GUEST' && !forcedEvent) {
      return; // ゲストはホストからのCLIMAXパケットで同時発動
    }
    this.isClimaxActive = true;
    audio.setClimax(true);
    audio.playWarning();

    const events = ['COLOR_SWAP', 'GIGA_BOMB', 'HASTE_BURST', 'EXPANSION', 'CHAOS_FESTIVAL'];
    this.climaxEvent = forcedEvent || events[Math.floor(Math.random() * events.length)];

    if (!forcedEvent && this.mode === 'PVP_ONLINE' && this.onlineRole === 'HOST' && window.duelNet && window.duelNet.isConnected) {
      window.duelNet.send({ t: 'CLIMAX', event: this.climaxEvent });
    }

    const loser = this.p1.score < this.p2.score ? this.p1 : (this.p2.score < this.p1.score ? this.p2 : (Math.random() < 0.5 ? this.p1 : this.p2));

    if (this.climaxEvent === 'EXPANSION') {
      this.expandBoard();
    } else if (this.climaxEvent === 'CHAOS_FESTIVAL') {
      this.showBanner('魔導暴走！アイテム混沌フェスティバル！', '#a855f7', 3.0);
      this.triggerScreenShake(20);
      audio.playLightningBoom();
      for (let i = 0; i < 4; i++) {
        setTimeout(() => this.spawnItem(), i * 250);
      }
    } else {
      this.showBanner('⚠ 残り30秒！クライマックス・ラッシュ突入！ ⚠', '#ef4444', 1.5);
      this.triggerScreenShake(16);
      setTimeout(() => {
        this.applySuperMiracle(loser, this.climaxEvent);
      }, 1000);
    }
  }

  update(dt) {
    if (this.isPaused) return;
    if (this.screenShake > 0) this.screenShake = Math.max(0, this.screenShake - dt * 30);
    if (this.screenFlash > 0) this.screenFlash = Math.max(0, this.screenFlash - dt * 2.2);
    if (this.resultGuardTimer > 0) this.resultGuardTimer = Math.max(0, this.resultGuardTimer - dt);
    if (this.abilitySelectGuardTimer > 0) this.abilitySelectGuardTimer = Math.max(0, this.abilitySelectGuardTimer - dt);
    if (this.bannerTimer > 0) this.bannerTimer -= dt;
    if (this.cutIn && this.cutIn.life > 0) this.cutIn.life -= dt;
    if (this.phoenixCooldown > 0) this.phoenixCooldown -= dt;
    if (this.freezeOverlayTimer > 0) this.freezeOverlayTimer -= dt;

    if (this.elsariaTrapCooldown > 0) this.elsariaTrapCooldown -= dt;
    // 雑魚戦特殊ルール: ITEM_FEVER (4秒ごとにアイテム投下)
    if (this.mode === 'DUNGEON' && this.dungeonSubStage === 'MINION' && this.activeRuleMod === 'ITEM_FEVER') {
      this.feverItemTimer = (this.feverItemTimer || 0) + dt;
      if (this.feverItemTimer >= 4.0) {
        this.feverItemTimer = 0;
        this.spawnItem();
      }
    }


    if (this.p1.slotFlash > 0) this.p1.slotFlash = Math.max(0, this.p1.slotFlash - dt * 2);
    if (this.p2.slotFlash > 0) this.p2.slotFlash = Math.max(0, this.p2.slotFlash - dt * 2);

    if (this.state === 'COUNTDOWN') {
      this.countdownSec -= dt;
      if (this.countdownSec <= 0) {
        this.state = 'PLAYING';
        this.showBanner('DUEL START!!', '#00f0ff', 1.0);
      }
      return;
    }

    if (this.state !== 'PLAYING') return;
    // ダンジョンボス専用ギミック進行 ＆ プレイヤー能力自動進行
    if (this.mode === 'DUNGEON') {
      // LR_AUTO_ITEM (天界の降臨): 5秒ごとにランダムアイテム自動装填
      if (this.playerAbilities.includes('LR_AUTO_ITEM')) {
        this.autoItemTimer = (this.autoItemTimer || 0) + dt;
        if (this.autoItemTimer >= 5.0) {
          this.autoItemTimer = 0;
          if (!this.p1.nextItem) {
            const items = [
              { id: 'PAINT', icon: '🎨', name: '領域侵食（ペイント）', color: '#38bdf8' },
              { id: 'GOLD', icon: '👑', name: '不壊金石（ゴールド）', color: '#facc15' },
              { id: 'HYPER', icon: '⚡', name: '神速魔力（ハイパー）', color: '#fde047' },
              { id: 'FREEZE', icon: '❄️', name: '絶対凍結（フリーズ）', color: '#67e8f9' },
              { id: 'MAGNET', icon: '🧲', name: '磁気破砕（マグネット）', color: '#a855f7' }
            ];
            const pick = items[Math.floor(Math.random() * items.length)];
            this.p1.nextItem = pick;
            this.p1.slotFlash = 1.0;
            this.showBanner(`✨ 天界の降臨！【${pick.name}】が自動装填！`, '#ec4899', 1.2);
            audio.playItemGet();
          }
        }
      }

      // LR_ALWAYS_HYPER (常時神速覚醒): 常時ハイパー維持
      if (this.playerAbilities.includes('LR_ALWAYS_HYPER')) {
        this.p1.hyperTimer = 10.0;
        this.p1.maxCooldown = 0.25;
      }
      this.bossActionTimer = (this.bossActionTimer || 0) + dt;
      // 第2層：狂乱の爆撃卿 ボンバートの爆縮擲弾 (6秒ごとに周囲の石を強制反転)
      if (this.dungeonFloor === 2 && this.dungeonSubStage === 'BOSS' && this.bossActionTimer >= 7.5) {
        this.bossActionTimer = 0;
        // プレイヤーの石があるマス、または盤面中央付近を狙う
        let targetCells = [];
        for (let r = 1; r < this.gridSize - 1; r++) {
          for (let c = 1; c < this.gridSize - 1; c++) {
            if (this.board[r][c].color === this.p1.color) {
              targetCells.push({ r, c });
            }
          }
        }
        let br, bc;
        if (targetCells.length > 0) {
          const picked = targetCells[Math.floor(Math.random() * targetCells.length)];
          br = picked.r;
          bc = picked.c;
        } else {
          br = Math.floor(Math.random() * (this.gridSize - 2)) + 1;
          bc = Math.floor(Math.random() * (this.gridSize - 2)) + 1;
        }

        let flippedCount = 0;
        for (let dr = -1; dr <= 1; dr++) {
          for (let dc = -1; dc <= 1; dc++) {
            const nr = br + dr, nc = bc + dc;
            if (nr >= 0 && nr < this.gridSize && nc >= 0 && nc < this.gridSize) {
              const cell = this.board[nr][nc];
              // 駒が存在し、不壊金石でない場合、ボスの色に強制反転！更地化しないので詰まない
              if (cell.color !== 0 && !cell.isGold) {
                if (cell.color !== this.p2.color) {
                  cell.color = this.p2.color;
                  cell.scale = 1.4;
                  flippedCount++;
                }
              }
            }
          }
        }
        // 爆心地マスは空マスでもボスの石を配置して爆発の余波を盤面に残す
        if (!this.board[br][bc].isGold) {
          this.board[br][bc].color = this.p2.color;
          this.board[br][bc].scale = 1.45;
        }
        this.updateScores();
        audio.playNoiseHit(0.35, 450, 0.9);
        this.triggerScreenShake(18);
        this.addShockwave(br, bc, '#ef4444', 85);
        this.addSparks(br, bc, '#f59e0b', 18);
        this.showBanner('💣 爆撃卿の擲弾炸裂！周囲の石がボンバートの色に爆縮反転！', '#ef4444', 1.5);
      }
      // 第5層：デウス・エクス・マキナのチート神話支配
      if (this.dungeonFloor === 5 && this.bossActionTimer >= 5.5) {
        this.bossActionTimer = 0;
        const rng = Math.random();
        if (rng < 0.5) {
          this.spawnItem();
          this.spawnItem();
          this.showBanner('👁️ デウス・エクス・マキナが神の恵み（アイテム2体）を降臨！', '#a855f7', 1.2);
        } else {
          // プレイヤーの石を1〜2個強制変換
          let flipped = 0;
          for (let tryCount = 0; tryCount < 25 && flipped < 2; tryCount++) {
            const tr = Math.floor(Math.random() * this.gridSize);
            const tc = Math.floor(Math.random() * this.gridSize);
            if (this.board[tr][tc].color === this.p1.color && !this.board[tr][tc].isGold) {
              this.board[tr][tc].color = this.p2.color;
              this.board[tr][tc].scale = 1.35;
              flipped++;
            }
          }
          if (flipped > 0) {
            this.showBanner('👁️ 虚無の神威！プレイヤーの石が強制浸食された！', '#a855f7', 1.2);
            this.triggerScreenShake(12);
            audio.playNoiseHit(0.2, 350, 0.6);
          }
        }
      }
    }
    // キー長押し連続移動処理
    this.updateKeyRepeat(dt);


    this.timeLeft -= dt;

    // CLASSICモード時はクライマックス奇跡なし
    if (this.ruleMode === 'CHAOS') {
      const climaxThreshold = this.matchDuration === 90 ? 30 : 20;
      if (this.timeLeft <= climaxThreshold && !this.isClimaxActive) {
        this.triggerClimax();
      }
    }



// ====================================================================
    // 勝敗・試合終了判定（全マス埋没・タイムアップ・ローグライク完全制覇・不死鳥救済）
    // ====================================================================

    // ① 盤面全マス埋没判定（空きマス0：これ以上置けないため即座に完全決着！）
    const totalSlots = this.gridSize * this.gridSize;
    if ((this.p1.score + this.p2.score >= totalSlots) && (this.stats.p1Moves > 0 || this.stats.p2Moves > 0)) {
      this.timeLeft = 0;
      this.state = 'RESULT';
      this.resultGuardTimer = 2.0;
      this.isClimaxActive = false;
      audio.setClimax(false);
      audio.stopBgm();
      audio.playVictory();
      this.showBanner('🏁 全マス埋没！盤面完全制圧により決着！', '#38bdf8', 3.0);
      return;
    }

    // ② タイムアップ判定
    if (this.timeLeft <= 0) {
      this.timeLeft = 0;
      this.state = 'RESULT';
      this.resultGuardTimer = 2.0;
      this.isClimaxActive = false;
      audio.setClimax(false);
      audio.stopBgm();
      audio.playVictory();
      return;
    }

    // ③ モード別の全滅・制覇ルール
    if (this.mode === 'DUNGEON') {
      // --- ダンジョンモード（ローグライク）---
      
      // ★プレイヤー全滅時 (p1.score === 0)
      if (this.p1.score === 0 && (this.stats.p1Moves > 0 || this.stats.p2Moves > 0)) {
        // 不死鳥の加護（UR_DOUBLE_PHOENIX）所持かつ上限回数内なら奇跡の復活！
        const maxPhoenix = this.playerAbilities.includes('UR_DOUBLE_PHOENIX') ? 2 : 0;
        if ((this.phoenixUsedCount || 0) < maxPhoenix) {
          this.triggerPhoenixResurrection(this.p1);
        } else {
          // 不死鳥なし（または回数消費済み）➔ 即座に全滅ゲームオーバー！
          this.timeLeft = 0;
          this.winner = '2P';
          this.state = 'RESULT';
          this.resultGuardTimer = 2.0;
          this.isClimaxActive = false;
          this.lastResultBanner = '💀 DUNGEON FAILED... 自駒全滅によりゲームオーバー！';
          audio.setClimax(false);
          audio.stopBgm();
          audio.playWarning();
          this.triggerCutIn('💀 GAME OVER', '自駒全滅！ダンジョン敗北…', '#ef4444');
          return;
        }
      }
      // ★敵・ボス駒全滅時 (p2.score === 0) ➔ プレイヤーの完全制覇勝利！敵は絶対に復活しない！！
      else if (this.p2.score === 0 && (this.stats.p1Moves > 0 || this.stats.p2Moves > 0)) {
        this.timeLeft = 0;
        this.winner = '1P';
        this.state = 'RESULT';
        this.resultGuardTimer = 2.0;
        this.isClimaxActive = false;
        this.lastResultBanner = '👑 DUNGEON STAGE CLEAR!! 敵駒全滅による完全制圧勝利！';
        audio.setClimax(false);
        audio.stopBgm();
        audio.playVictory();
        this.triggerCutIn('👑 STAGE CLEAR!', '敵駒全滅！完全制圧勝利！', '#22c55e');
        return;
      }
    } else {
      // --- 通常モード・2人対戦（PVP / VS_CPU）---
      // 0枚になっても雷撃で即座に不死鳥復活し、タイムアップまで全力で戦い続ける！
      if (this.p1.score === 0 && (this.stats.p1Moves > 0 || this.stats.p2Moves > 0)) {
        this.triggerPhoenixResurrection(this.p1);
        this.showBanner('🔥 1Pが不死鳥の雷撃で奇跡の復活！大逆転を狙え！', '#00f0ff', 2.0);
      } else if (this.p2.score === 0 && (this.stats.p1Moves > 0 || this.stats.p2Moves > 0)) {
        this.triggerPhoenixResurrection(this.p2);
        this.showBanner('🔥 2Pが不死鳥の雷撃で奇跡の復活！大逆転を狙え！', '#f59e0b', 2.0);
      }
    }

    [this.p1, this.p2].forEach(p => {
      // 白石パッシブ＆スキンパッシブによる状態異常軽減
      const isP1 = p.color === P1_COLOR;
      const p1HasWhite = (this.selectedBaseColor || 'BLACK') === 'WHITE';
      const playerUsesWhite = isP1 ? p1HasWhite : !p1HasWhite;
      let ccReductionMult = playerUsesWhite ? 1.33 : 1.0; // 白石: 25%軽減

      if (isP1) {
        if (this.equippedSkinId === 'SAKURA') ccReductionMult *= 1.54; // ★4 夜桜: 35%軽減
        else if (this.equippedSkinId === 'OCEAN') ccReductionMult *= 1.25; // ★4 深海: 20%軽減
        else if (this.equippedSkinId === 'GENESIS' || this.equippedSkinId === 'CHRONOS') ccReductionMult = 9999; // ★6 LR: 状態異常100%完全無効！
      }
      const debuffRate = dt * ccReductionMult;
      if (p.cooldown > 0) p.cooldown = Math.max(0, p.cooldown - dt);
      if (p.hyperTimer > 0) p.hyperTimer = Math.max(0, p.hyperTimer - dt);
      if (p.freezeTimer > 0) p.freezeTimer = Math.max(0, p.freezeTimer - debuffRate);
      if (p.stunTimer > 0) p.stunTimer = Math.max(0, p.stunTimer - debuffRate);
      if (p.hasteTimer > 0) p.hasteTimer = Math.max(0, p.hasteTimer - dt);
    });

    const itemInterval = this.isClimaxActive 
      ? (8.0 + Math.random() * 2.0) 
      : (16.0 + Math.random() * 4.0);
    
    // CLASSICモード時はアイテム出現なし
    if (this.ruleMode === 'CHAOS') {
      this.itemSpawnTimer = (this.itemSpawnTimer || 0) + dt;
      if (this.itemSpawnTimer >= itemInterval) {
        this.itemSpawnTimer = 0;
        this.spawnItem();
      }
    }

    // 予兆タイマー進行
    for (let i = this.itemsOnBoard.length - 1; i >= 0; i--) {
      const it = this.itemsOnBoard[i];
      if (it.dropTimer > 0) {
        it.dropTimer -= dt;
        if (it.dropTimer <= 0) {
          it.dropTimer = 0;
          this.resolveItemLanding(it);
        }
      }
      if (!it.active) {
        this.itemsOnBoard.splice(i, 1);
      }
    }

    // スコアのアーケード風スムーズ加算
    if (this.displayScore < this.currentScore) {
      const sDiff = this.currentScore - this.displayScore;
      this.displayScore += Math.max(15, Math.floor(sDiff * dt * 14));
      if (this.displayScore > this.currentScore) this.displayScore = this.currentScore;
    }
    this.updateFloatingTexts(dt);

    // 演出オブジェクト更新
    this.updateVfx(dt);

    for (let r = 0; r < this.gridSize; r++) {
      for (let c = 0; c < this.gridSize; c++) {
        const cell = this.board[r][c];
        if (cell.scale > 1.0) cell.scale = Math.max(1.0, cell.scale - dt * 2.5);
        if (cell.flipDelay > 0) {
          cell.flipDelay = Math.max(0, cell.flipDelay - dt);
        } else if (cell.flipTimer > 0) {
          cell.flipTimer = Math.max(0, cell.flipTimer - dt);
        }
      }
    }

    this.updateParticles(dt);
    this.updateCpu(dt);
  }

  updateVfx(dt) {
    // 飛翔エネルギー球
    for (let i = this.flyingOrbs.length - 1; i >= 0; i--) {
      const orb = this.flyingOrbs[i];
      orb.progress += dt * 2.5;
      if (orb.progress >= 1.0) {
        this.flyingOrbs.splice(i, 1);
      }
    }
    // アイテムゲットポップアップ
    for (let i = this.itemGetPopups.length - 1; i >= 0; i--) {
      const pop = this.itemGetPopups[i];
      pop.life -= dt;
      pop.y -= dt * 25;
      if (pop.life <= 0) {
        this.itemGetPopups.splice(i, 1);
      }
    }
    // ブラックホール
    for (let i = this.blackHoles.length - 1; i >= 0; i--) {
      const bh = this.blackHoles[i];
      bh.life -= dt;
      if (bh.life <= 0) this.blackHoles.splice(i, 1);
    }
    // 魔法陣
    for (let i = this.magicCircles.length - 1; i >= 0; i--) {
      const mc = this.magicCircles[i];
      mc.life -= dt;
      if (mc.life <= 0) this.magicCircles.splice(i, 1);
    }
  }

  // --- 描画 (Canvas) ---
  draw() {
    this.ctx.save();
    if (this.screenShake > 0) {
      const dx = (Math.random() - 0.5) * this.screenShake;
      const dy = (Math.random() - 0.5) * this.screenShake;
      this.ctx.translate(dx, dy);
    }

    this.drawBackground();

    if (this.state === 'TITLE') {
      this.drawTitleScreen();
    } else if (this.state === 'HOW_TO_PLAY') {
      this.drawHowToPlayScreen();
    } else if (this.state === 'GACHA') {
      this.drawGachaScreen();
    } else if (this.state === 'MODE_SELECT') {
      this.drawModeSelectScreen();
    } else if (this.state === 'DUNGEON_SKIN_SELECT') {
      this.drawDungeonSkinSelectScreen();
    } else if (this.state === 'BOSS_INTRO') {
      this.drawBossIntroScreen();
    } else if (this.state === 'ABILITY_SELECT') {
      this.drawAbilitySelectScreen();
    } else {
      this.drawBattleScreen();
    }

    this.drawCutIn();

    if (this.bannerTimer > 0 && this.bannerText) {
      this.drawBanner();
    }

    if (this.screenFlash > 0) {
      this.ctx.fillStyle = `rgba(255, 255, 255, ${this.screenFlash})`;
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    // フリーズ氷結オーバーレイ演出
    if (this.freezeOverlayTimer > 0) {
      const alpha = Math.min(0.65, this.freezeOverlayTimer);
      this.ctx.save();
      const grad = this.ctx.createRadialGradient(this.canvas.width/2, this.canvas.height/2, 180, this.canvas.width/2, this.canvas.height/2, 680);
      grad.addColorStop(0, 'rgba(56, 189, 248, 0)');
      grad.addColorStop(0.6, `rgba(56, 189, 248, ${alpha * 0.35})`);
      grad.addColorStop(1, `rgba(224, 242, 254, ${alpha * 0.75})`);
      this.ctx.fillStyle = grad;
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

      this.ctx.strokeStyle = `rgba(224, 242, 254, ${alpha})`;
      this.ctx.lineWidth = 8;
      this.ctx.strokeRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.restore();
    }

    this.ctx.restore();
  }

  drawBackground() {
    const w = this.canvas.width;
    const h = this.canvas.height;
    const theme = this.boardThemes[this.equippedBoardId] || this.boardThemes['DEFAULT'];

    const grad = this.ctx.createRadialGradient(w/2, h/2, 100, w/2, h/2, 700);
    grad.addColorStop(0, theme.bg0);
    grad.addColorStop(0.6, theme.bg1);
    grad.addColorStop(1, theme.bg2);
    this.ctx.fillStyle = grad;
    this.ctx.fillRect(0, 0, w, h);

    this.ctx.strokeStyle = 'rgba(30, 41, 59, 0.4)';
    this.ctx.lineWidth = 1;
    for (let x = 0; x < w; x += 60) {
      this.ctx.beginPath();
      this.ctx.moveTo(x, 0);
      this.ctx.lineTo(x, h);
      this.ctx.stroke();
    }
    for (let y = 0; y < h; y += 60) {
      this.ctx.beginPath();
      this.ctx.moveTo(0, y);
      this.ctx.lineTo(w, y);
      this.ctx.stroke();
    }

    this.ctx.save();
    this.ctx.translate(w/2, h/2);
    this.ctx.strokeStyle = this.isClimaxActive ? 'rgba(239, 68, 68, 0.2)' : 'rgba(0, 240, 255, 0.09)';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.arc(0, 0, 320, 0, Math.PI * 2);
    this.ctx.stroke();
    this.ctx.restore();
  }

  drawGachaScreen() {
    const w = this.canvas.width;
    const h = this.canvas.height;

    // 背景
    this.ctx.fillStyle = 'rgba(2, 6, 23, 0.96)';
    this.ctx.fillRect(0, 0, w, h);

    // ヘッダーバー
    this.drawButton(50, 30, 160, 42, '← 戻る (BACK)', '#1e293b');

    this.ctx.textAlign = 'center';
    this.ctx.fillStyle = '#ffffff';
    this.ctx.font = '900 34px sans-serif';
    this.ctx.shadowColor = '#a855f7';
    this.ctx.shadowBlur = 20;
    this.ctx.fillText('🎰 魔導召喚の祭壇 (SKIN GACHA & VAULT)', w / 2, 60);
    this.ctx.shadowBlur = 0;

    // 右上 所持金 ＆ 補充ボタン
    this.ctx.textAlign = 'right';
    this.ctx.fillStyle = '#fbbf24';
    this.ctx.font = 'bold 20px sans-serif';
    this.ctx.fillText(`💰 1P: ${this.p1Gold} G  |  2P: ${this.p2Gold} G`, w - 210, 58);
    this.drawButton(w - 190, 32, 140, 38, '🪙 +3000G補充', '#059669', true);

    // --- 左側: ガチャ召喚エリア (幅480px) ---
    const gBoxX = 50;
    const gBoxY = 95;
    const gBoxW = 480;
    const gBoxH = 590;

    this.ctx.fillStyle = 'rgba(15, 23, 42, 0.88)';
    this.ctx.strokeStyle = '#7c3aed';
    this.ctx.lineWidth = 2.5;
    this.ctx.fillRect(gBoxX, gBoxY, gBoxW, gBoxH);
    this.ctx.strokeRect(gBoxX, gBoxY, gBoxW, gBoxH);

    this.ctx.textAlign = 'center';
    this.ctx.fillStyle = '#c084fc';
    this.ctx.font = 'bold 20px sans-serif';
    this.ctx.fillText('✨ 神秘の魔導石召喚 ✨', gBoxX + gBoxW / 2, gBoxY + 40);

    // 中央召喚オーブ演出
    const orbX = gBoxX + gBoxW / 2;
    const orbY = gBoxY + 195;
    const nowSec = performance.now() / 1000;
    const pulse = Math.sin(nowSec * 3) * 6;

    const orbGrad = this.ctx.createRadialGradient(orbX, orbY, 10, orbX, orbY, 85 + pulse);
    orbGrad.addColorStop(0, '#ffffff');
    orbGrad.addColorStop(0.3, '#c084fc');
    orbGrad.addColorStop(0.7, '#6b21a8');
    orbGrad.addColorStop(1, 'rgba(15, 23, 42, 0)');
    this.ctx.fillStyle = orbGrad;
    this.ctx.beginPath();
    this.ctx.arc(orbX, orbY, 85 + pulse, 0, Math.PI * 2);
    this.ctx.fill();

    this.ctx.save();
    this.ctx.translate(orbX, orbY);
    this.ctx.rotate(nowSec * 1.5);
    this.ctx.strokeStyle = '#facc15';
    this.ctx.lineWidth = 3;
    this.ctx.strokeRect(-50, -50, 100, 100);
    this.ctx.restore();

    this.ctx.font = '50px sans-serif';
    this.ctx.fillText('🔮', orbX, orbY + 16);

    // 排出確率テーブル
    this.ctx.fillStyle = '#94a3b8';
    this.ctx.font = '13px sans-serif';
    this.ctx.fillText('【排出確率】 ★6 LR 1.5% / ★5 SSR 13.5% / ★4 SR 55% / ★3 R 30%', orbX, gBoxY + 340);
    this.ctx.fillText('※ 重複したスキンは自動で【+150 G】キャッシュバック！', orbX, gBoxY + 365);
    this.ctx.fillText('※ 対戦で勝つと報酬ゴールドを獲得できます。', orbX, gBoxY + 390);

    // 召喚ボタン
    this.drawButton(gBoxX + 30, gBoxY + 430, 200, 58, '1回召喚 (200G)', '#0284c7');
    this.drawButton(gBoxX + 250, gBoxY + 430, 200, 58, '10連召喚 (1800G)', '#f59e0b', true);

    this.ctx.fillStyle = '#fde047';
    this.ctx.font = 'bold 12px sans-serif';
    this.ctx.fillText('⚡ 10連召喚は10%割引でお得！', gBoxX + 350, gBoxY + 510);

    // --- 右側: スキンコレクション＆装備エリア (幅670px) ---
    const sBoxX = 560;
    const sBoxY = 95;
    const sBoxW = 670;
    const sBoxH = 590;

    this.ctx.fillStyle = 'rgba(15, 23, 42, 0.88)';
    this.ctx.strokeStyle = '#3b82f6';
    this.ctx.lineWidth = 2;
    this.ctx.fillRect(sBoxX, sBoxY, sBoxW, sBoxH);
    this.ctx.strokeRect(sBoxX, sBoxY, sBoxW, sBoxH);

    const skinKeys = Object.keys(this.skins);

    this.ctx.textAlign = 'left';
    this.ctx.fillStyle = '#38bdf8';
    this.ctx.font = 'bold 18px sans-serif';
    this.ctx.fillText(`👑 スキンコレクション（所持: ${this.ownedSkins.length} / ${skinKeys.length}）`, sBoxX + 25, sBoxY + 35);
    const colW = 86;
    const rowH = 175;
    const gapX = 6;
    const gapY = 12;
    const gridStartX = sBoxX + 13;
    const gridStartY = sBoxY + 52;

    skinKeys.forEach((key, idx) => {
      const skin = this.skins[key];
      const colIdx = idx % 7;
      const rowIdx = Math.floor(idx / 7);
      const cxPos = gridStartX + colIdx * (colW + gapX);
      const cyPos = gridStartY + rowIdx * (rowH + gapY);

      const isOwned = this.ownedSkins.includes(key);
      const isEquipped = (this.equippedSkinId === key);

      // カード背景
      this.ctx.fillStyle = isEquipped ? 'rgba(30, 58, 138, 0.65)' : isOwned ? 'rgba(2, 6, 23, 0.85)' : 'rgba(2, 6, 23, 0.4)';
      this.ctx.strokeStyle = isEquipped ? '#38bdf8' : isOwned ? (skin.rarity === 5 ? '#f59e0b' : skin.rarity === 4 ? '#c084fc' : '#475569') : '#334155';
      this.ctx.lineWidth = isEquipped ? 2.5 : 1;
      this.ctx.fillRect(cxPos, cyPos, colW, rowH);
      this.ctx.strokeRect(cxPos, cyPos, colW, rowH);

      // レアリティ
      this.ctx.textAlign = 'center';
      const rStars = skin.rarity === 6 ? '★6 LR' : skin.rarity === 5 ? '★5 SSR' : skin.rarity === 4 ? '★4 SR' : '★3 R';
      this.ctx.fillStyle = skin.rarity === 6 ? '#ec4899' : (skin.rarity === 5 ? '#f59e0b' : (skin.rarity === 4 ? '#c084fc' : '#94a3b8'));
      this.ctx.font = 'bold 10px sans-serif';
      this.ctx.fillText(rStars, cxPos + colW / 2, cyPos + 16);

      // スキン名
      this.ctx.fillStyle = isOwned ? '#ffffff' : '#64748b';
      this.ctx.font = 'bold 11px sans-serif';
      this.ctx.fillText(skin.name, cxPos + colW / 2, cyPos + 32);

      // コマプレビュー (1P & 2P)
      if (isOwned) {
        this.drawSampleStone(cxPos + 35, cyPos + 68, 17, skin, P1_COLOR);
        this.drawSampleStone(cxPos + 83, cyPos + 68, 17, skin, P2_COLOR);

        const aLv = this.skinAuraLevel[key] || 1;
        this.ctx.textAlign = 'center';
        this.ctx.fillStyle = aLv === 3 ? '#facc15' : aLv === 2 ? '#c084fc' : '#94a3b8';
        this.ctx.font = 'bold 9.5px sans-serif';
        this.ctx.fillText(aLv === 3 ? 'オーラ Lv.3 MAX' : `オーラ Lv.${aLv}`, cxPos + colW / 2, cyPos + 100);

        // 装備ボタン
        if (isEquipped) {
          this.drawButton(cxPos + 8, cyPos + 115, colW - 16, 30, '装備中', '#059669', true);
        } else {
          this.drawButton(cxPos + 8, cyPos + 115, colW - 16, 30, '装備', '#0284c7');
        }
      } else {
        // 未所持ロック
        this.ctx.textAlign = 'center';
        this.ctx.fillStyle = '#64748b';
        this.ctx.font = '28px sans-serif';
        this.ctx.fillText('🔒', cxPos + colW / 2, cyPos + 82);
        this.ctx.font = 'bold 11px sans-serif';
        this.ctx.fillText('未所持', cxPos + colW / 2, cyPos + 130);
      }
    });

    // 現在装備中のスキンの説明
    const curSkin = this.skins[this.equippedSkinId] || this.skins['DEFAULT'];
    this.ctx.fillStyle = 'rgba(15, 23, 42, 0.9)';
    this.ctx.strokeStyle = '#38bdf8';
    this.ctx.lineWidth = 1;
    this.ctx.fillRect(sBoxX + 24, sBoxY + 445, sBoxW - 48, 120);
    this.ctx.strokeRect(sBoxX + 24, sBoxY + 445, sBoxW - 48, 120);

    this.ctx.textAlign = 'left';
    this.ctx.fillStyle = '#fbbf24';
    this.ctx.font = 'bold 15px sans-serif';
    this.ctx.fillText(`現在装備中: 【${curSkin.name}】`, sBoxX + 45, sBoxY + 478);

    this.ctx.fillStyle = '#cbd5e1';
    this.ctx.font = '13px sans-serif';
    this.ctx.fillText(curSkin.desc, sBoxX + 45, sBoxY + 510);
    this.ctx.fillStyle = '#38bdf8';
    this.ctx.fillText('※ このスキンは「1P vs CPU」「2P対人戦」両方の対戦盤面に即座に適用されます！', sBoxX + 45, sBoxY + 538);

    // ガチャ結果ポップアップ (存在する場合)
    if (this.gachaResults) {
      this.drawGachaResultsModal();
    }
  }

  drawSampleStone(cx, cy, radius, skin, color) {
    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    const st = (color === P1_COLOR) ? skin.p1 : skin.p2;
    const grad = this.ctx.createRadialGradient(cx - radius*0.3, cy - radius*0.3, 2, cx, cy, radius);
    grad.addColorStop(0, st.grad0);
    grad.addColorStop(0.7, st.grad1);
    grad.addColorStop(1, st.grad2);
    this.ctx.fillStyle = grad;
    this.ctx.fill();
    this.ctx.strokeStyle = st.stroke;
    this.ctx.lineWidth = 2.5;
    this.ctx.stroke();

    this.ctx.fillStyle = st.core;
    this.ctx.beginPath();
    this.ctx.arc(cx, cy, radius * 0.35, 0, Math.PI * 2);
    this.ctx.fill();

    if (skin.rarity === 5) {
      this.ctx.strokeStyle = st.core;
      this.ctx.lineWidth = 1.5;
      this.ctx.strokeRect(cx - radius*0.48, cy - radius*0.48, radius*0.96, radius*0.96);
    }
    this.ctx.restore();
  }

  drawGachaResultsModal() {
    const w = this.canvas.width;
    const h = this.canvas.height;

    // 暗転
    this.ctx.fillStyle = 'rgba(2, 6, 23, 0.94)';
    this.ctx.fillRect(0, 0, w, h);

    const mBoxW = 860;
    const mBoxH = 540;
    const mBoxX = (w - mBoxW) / 2;
    const mBoxY = (h - mBoxH) / 2;

    this.ctx.fillStyle = 'rgba(15, 23, 42, 0.98)';
    this.ctx.strokeStyle = '#a855f7';
    this.ctx.lineWidth = 3;
    this.ctx.fillRect(mBoxX, mBoxY, mBoxW, mBoxH);
    this.ctx.strokeRect(mBoxX, mBoxY, mBoxW, mBoxH);

    this.ctx.textAlign = 'center';
    this.ctx.fillStyle = '#ffffff';
    this.ctx.font = '900 32px sans-serif';
    this.ctx.shadowColor = '#00f0ff';
    this.ctx.shadowBlur = 20;
    this.ctx.fillText('✨ 召 喚 結 果 (SUMMON RESULTS) ✨', w / 2, mBoxY + 50);
    this.ctx.shadowBlur = 0;

    // 結果カード一覧 (最大10連: 2行 x 5列)
    const count = this.gachaResults.length;
    const cols = count === 1 ? 1 : 5;
    const cW = count === 1 ? 260 : 145;
    const cH = count === 1 ? 240 : 165;
    const gap = count === 1 ? 0 : 14;

    const totalW = cols * cW + (cols - 1) * gap;
    const startX = (w - totalW) / 2;
    const startY = count === 1 ? mBoxY + 110 : mBoxY + 95;

    this.gachaResults.forEach((res, idx) => {
      const cIdx = count === 1 ? 0 : (idx % 5);
      const rIdx = count === 1 ? 0 : Math.floor(idx / 5);
      const x = startX + cIdx * (cW + gap);
      const y = startY + rIdx * (cH + 14);

      const skin = res.skin;

      this.ctx.fillStyle = 'rgba(2, 6, 23, 0.9)';
      this.ctx.strokeStyle = skin.rarity === 6 ? '#ec4899' : (skin.rarity === 5 ? '#f59e0b' : (skin.rarity === 4 ? '#c084fc' : '#475569'));
      this.ctx.lineWidth = skin.rarity >= 5 ? 3 : 1.5;
      this.ctx.fillRect(x, y, cW, cH);
      this.ctx.strokeRect(x, y, cW, cH);

      // レアリティ
      this.ctx.textAlign = 'center';
      this.ctx.fillStyle = skin.rarity === 6 ? '#ec4899' : (skin.rarity === 5 ? '#f59e0b' : (skin.rarity === 4 ? '#c084fc' : '#94a3b8'));
      this.ctx.font = `bold ${count === 1 ? 15 : 11}px sans-serif`;
      this.ctx.fillText(skin.rarity === 6 ? '★6 LR' : (skin.rarity === 5 ? '★5 SSR' : (skin.rarity === 4 ? '★4 SR' : '★3 R')), x + cW / 2, y + (count === 1 ? 28 : 18));

      // コマプレビュー
      this.drawSampleStone(x + cW / 2 - (count === 1 ? 40 : 25), y + (count === 1 ? 95 : 65), count === 1 ? 30 : 18, skin, P1_COLOR);
      this.drawSampleStone(x + cW / 2 + (count === 1 ? 40 : 25), y + (count === 1 ? 95 : 65), count === 1 ? 30 : 18, skin, P2_COLOR);

      // スキン名
      this.ctx.fillStyle = '#ffffff';
      this.ctx.font = `bold ${count === 1 ? 18 : 12}px sans-serif`;
      this.ctx.fillText(skin.name, x + cW / 2, y + (count === 1 ? 165 : 115));

      // 【改善点①】NEW! / オーラ限界突破 / MAX返還バッジ
      if (res.isNew) {
        this.ctx.fillStyle = '#ef4444';
        this.ctx.fillRect(x + cW / 2 - (count === 1 ? 40 : 30), y + (count === 1 ? 185 : 130), count === 1 ? 80 : 60, count === 1 ? 26 : 20);
        this.ctx.fillStyle = '#ffffff';
        this.ctx.font = `bold ${count === 1 ? 14 : 10}px sans-serif`;
        this.ctx.fillText('NEW!!', x + cW / 2, y + (count === 1 ? 203 : 144));
      } else if (res.isLimitBreak) {
        this.ctx.fillStyle = '#7c3aed';
        this.ctx.fillRect(x + cW / 2 - (count === 1 ? 65 : 48), y + (count === 1 ? 185 : 130), count === 1 ? 130 : 96, count === 1 ? 26 : 20);
        this.ctx.fillStyle = '#fde047';
        this.ctx.font = `bold ${count === 1 ? 13 : 9}px sans-serif`;
        this.ctx.fillText(`🌟オーラLv.${res.newLv}!`, x + cW / 2, y + (count === 1 ? 202 : 144));
      } else {
        this.ctx.fillStyle = '#334155';
        this.ctx.fillRect(x + cW / 2 - (count === 1 ? 55 : 40), y + (count === 1 ? 185 : 130), count === 1 ? 110 : 80, count === 1 ? 26 : 20);
        this.ctx.fillStyle = '#94a3b8';
        this.ctx.font = `bold ${count === 1 ? 12 : 9}px sans-serif`;
        this.ctx.fillText('MAX返還 +200G', x + cW / 2, y + (count === 1 ? 202 : 144));
      }
    });

    // OKボタン
    this.drawButton(w / 2 - 140, mBoxY + mBoxH - 75, 280, 52, '確認 (OK)', '#0284c7', true);
  }

  // --- ローグライク魔導ダンジョン開始 ---
  startDungeonRun() {
    this.mode = 'DUNGEON';
    this.dungeonFloor = 1;
    this.dungeonSubStage = 'MINION'; // 1-1 前哨戦から開始！
    this.playerAbilities = [];
    this.startMinionMatch();
    audio.init();
  }

  // 1-1 前哨戦 (MINION, 45秒, 通常2x2配置)
  startMinionMatch() {
    this.mode = 'DUNGEON';
    this.dungeonSubStage = 'MINION';
    const stage = DUNGEON_STAGES[this.dungeonFloor] || DUNGEON_STAGES[1];
    const enemy = stage.minion;
    this.matchDuration = enemy.matchDuration || 45;
    this.cpuLevel = enemy.aiLevel || 'ELEMENTARY';
    this.activeRuleMod = null;
    this.currentDotArt = null; // 通常2x2配置でサクッと突破！

    this.startMatch();
    this.p2.name = `${enemy.icon} ${enemy.name}`;
    this.showBanner(`⚔️ ${enemy.title} [${enemy.ruleName}]`, enemy.color, 2.5);
    this.applyDungeonAbilitiesToMatch();
  }

  // 1-2 精鋭中ボス戦 (ELITE, 60秒, 通常2x2配置)
  startEliteMatch() {
    this.mode = 'DUNGEON';
    this.dungeonSubStage = 'ELITE';
    const stage = DUNGEON_STAGES[this.dungeonFloor] || DUNGEON_STAGES[1];
    const enemy = stage.elite;
    this.matchDuration = enemy.matchDuration || 60;
    this.cpuLevel = enemy.aiLevel || 'ADULT';
    this.activeRuleMod = null;
    this.currentDotArt = null;

    this.startMatch();
    this.p2.name = `${enemy.icon} ${enemy.name}`;
    this.showBanner(`⚔️ ${enemy.title} [${enemy.ruleName}]`, enemy.color, 2.5);
    this.applyDungeonAbilitiesToMatch();
  }

  // 1-3 エリア大ボス戦 (BOSS, 90秒, ボス専用ドットアート配置！)
  startBossMatch() {
    this.mode = 'DUNGEON';
    this.dungeonSubStage = 'BOSS';
    const stage = DUNGEON_STAGES[this.dungeonFloor] || DUNGEON_STAGES[1];
    const boss = stage.boss;
    this.matchDuration = boss.matchDuration || 90;
    this.cpuLevel = boss.aiLevel;
    this.bossActionTimer = 0;
    this.bossMoveCount = 0;
    this.elsariaTrapCooldown = 0;
    this.activeRuleMod = null;

    // ★ボス専用ドットアート配置を展開！
    this.currentDotArt = boss.dotArt;

    this.startMatch();
    this.phoenixUsedCount = 0;
    this.p2.name = `BOSS: ${boss.name}`;

    // ボス固有クールダウン設定
    if (this.dungeonFloor === 3) {
      this.p2.maxCooldown = 0.65;
    } else if (this.dungeonFloor === 5) {
      this.p2.maxCooldown = 0.55;
    }
    this.showBanner(`🔥 ${boss.title} 決闘開始！`, boss.color, 3.0);
    this.applyDungeonAbilitiesToMatch();
  }

  applyDungeonAbilitiesToMatch() {
    // プレイヤーの獲得能力の反映
    if (this.playerAbilities.includes('N_CD')) this.p1.maxCooldown = Math.max(0.3, this.p1.maxCooldown - 0.15);
    if (this.playerAbilities.includes('UR_BOARD10') || (this.dungeonSubStage === 'BOSS' && this.dungeonFloor === 5)) {
      setTimeout(() => this.expandBoard(), 200);
    }
    if (this.playerAbilities.includes('N_GOLD_START')) {
      setTimeout(() => {
        for (let r = 0; r < this.gridSize; r++) {
          for (let c = 0; c < this.gridSize; c++) {
            if (this.board[r][c].color === this.p1.color) {
              this.board[r][c].isGold = true;
              this.board[r][c].scale = 1.4;
              this.addShockwave(r, c, '#facc15', 70);
              this.showBanner('👑 黄金の布石発動！自石が【不壊金石】化！', '#facc15', 1.2);
              return;
            }
          }
        }
      }, 200);
    }
    if (this.playerAbilities.includes('POTION_ITEM')) {
      this.p1.nextItem = ITEM_TYPES.POTION;
      this.p1.slotFlash = 1.0;
      this.showBanner('💖 秘薬ストック！生命のエリクサーを即時装填！', '#ec4899', 1.5);
    }
    if (this.playerAbilities.includes('LR_ALWAYS_HYPER')) {
      this.p1.hyperTimer = 999.0;
    }
  }

  // ボスポートレート描画エンジン（SVG / カスタムAI画像 / フォールバック描画）
  drawBossPortrait(floor, x, y, w, h, rounded = true) {
    const ctx = this.ctx;
    ctx.save();

    if (rounded) {
      ctx.beginPath();
      ctx.roundRect(x, y, w, h, 12);
      ctx.clip();
    }

    // 画像取得：カスタムAI画像があれば最優先、なければ標準美麗SVG、なければフォールバック
    const customImg = this.customBossImages[floor];
    const defaultImg = this.bossDefaultImages[floor];
    const img = (customImg && customImg.complete && customImg.naturalWidth > 0) ? customImg : defaultImg;

    if (img && img.complete && img.naturalWidth > 0) {
      const imgRatio = img.width / img.height;
      const boxRatio = w / h;
      let dw, dh, dx, dy;
      if (imgRatio > boxRatio) {
        dh = h;
        dw = dh * imgRatio;
        dx = x - (dw - w) / 2;
        dy = y;
      } else {
        dw = w;
        dh = dw / imgRatio;
        dx = x;
        dy = y - (dh - h) / 2;
      }
      ctx.drawImage(img, dx, dy, dw, dh);
    } else {
      // 即時フォールバックプロシージャル描画
      this.drawProceduralBoss(floor, x + w / 2, y + h / 2, Math.min(w, h));
    }

    ctx.restore();
  }

  // フォールバック用プロシージャル描画
  drawProceduralBoss(floor, cx, cy, size) {
    const ctx = this.ctx;
    ctx.save();
    ctx.translate(cx, cy);
    const bgRad = size * 0.46;
    const bgGrad = ctx.createRadialGradient(0, 0, bgRad * 0.2, 0, 0, bgRad);

    if (floor === 1) {
      bgGrad.addColorStop(0, '#0284c7');
      bgGrad.addColorStop(1, '#020617');
      ctx.fillStyle = bgGrad;
      ctx.beginPath();
      ctx.arc(0, 0, bgRad, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#bae6fd';
      ctx.font = 'bold 28px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('❄️ 氷結魔女', 0, 8);
    } else if (floor === 2) {
      bgGrad.addColorStop(0, '#b91c1c');
      bgGrad.addColorStop(1, '#0a0505');
      ctx.fillStyle = bgGrad;
      ctx.beginPath();
      ctx.arc(0, 0, bgRad, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#fef08a';
      ctx.font = 'bold 28px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('💣 爆撃卿', 0, 8);
    } else if (floor === 3) {
      bgGrad.addColorStop(0, '#ca8a04');
      bgGrad.addColorStop(1, '#020617');
      ctx.fillStyle = bgGrad;
      ctx.beginPath();
      ctx.arc(0, 0, bgRad, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#fef08a';
      ctx.font = 'bold 28px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('⚡ 神速王', 0, 8);
    } else if (floor === 4) {
      bgGrad.addColorStop(0, '#059669');
      bgGrad.addColorStop(1, '#021c14');
      ctx.fillStyle = bgGrad;
      ctx.beginPath();
      ctx.arc(0, 0, bgRad, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#a7f3d0';
      ctx.font = 'bold 28px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('🗿 巨神兵', 0, 8);
    } else {
      bgGrad.addColorStop(0, '#9333ea');
      bgGrad.addColorStop(1, '#080012');
      ctx.fillStyle = bgGrad;
      ctx.beginPath();
      ctx.arc(0, 0, bgRad, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#f3e8ff';
      ctx.font = 'bold 28px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('👁️ 虚無神', 0, 8);
    }
    ctx.restore();
  }

  // 1. 戦前ボス紹介カットイン画面（美麗2カラム・AI画像インポート完全対応）
  // 出撃前オセロ（コマ＆属性パッシブ）選択画面
  drawDungeonSkinSelectScreen() {
    const w = this.canvas.width;
    const h = this.canvas.height;
    const cx = w / 2;
    const skinKeys = Object.keys(this.skins);
    if (this.dungeonSelectedSkinIndex === undefined) {
      this.dungeonSelectedSkinIndex = Math.max(0, skinKeys.indexOf(this.equippedSkinId));
    }
    const curKey = skinKeys[this.dungeonSelectedSkinIndex] || 'DEFAULT';
    const curSkin = this.skins[curKey];
    const isOwned = this.ownedSkins.includes(curKey);
    const auraLv = (this.skinAuraLevel && this.skinAuraLevel[curKey]) || 1;

    this.ctx.fillStyle = 'rgba(2, 6, 23, 0.96)';
    this.ctx.fillRect(0, 0, w, h);

    // ヘッダー
    this.ctx.textAlign = 'center';
    this.ctx.fillStyle = '#f59e0b';
    this.ctx.font = 'bold 20px sans-serif';
    this.ctx.fillText('⚔️ ROGUELIKE BOSS RUSH PREPARATION ⚔️', cx, 42);

    this.ctx.fillStyle = '#ffffff';
    this.ctx.font = '900 34px sans-serif';
    this.ctx.shadowColor = '#00f0ff';
    this.ctx.shadowBlur = 20;
    this.ctx.fillText('魔導ダンジョン 出撃オセロ選択', cx, 80);
    this.ctx.shadowBlur = 0;

    // --- 左側カード：コマの3Dプレビュー＆基本情報 (w: 440, h: 485) ---
    const lX = 80, lY = 105, lW = 440, lH = 485;
    this.ctx.fillStyle = 'rgba(15, 23, 42, 0.9)';
    this.ctx.strokeStyle = curSkin.color;
    this.ctx.lineWidth = 2.5;
    this.ctx.fillRect(lX, lY, lW, lH);
    this.ctx.strokeRect(lX, lY, lW, lH);

    // ネオンコーナー装飾
    this.ctx.strokeStyle = curSkin.color;
    this.ctx.lineWidth = 3;
    this.ctx.beginPath();
    this.ctx.moveTo(lX, lY + 20); this.ctx.lineTo(lX, lY); this.ctx.lineTo(lX + 20, lY);
    this.ctx.moveTo(lX + lW - 20, lY); this.ctx.lineTo(lX + lW, lY); this.ctx.lineTo(lX + lW, lY + 20);
    this.ctx.moveTo(lX, lY + lH - 20); this.ctx.lineTo(lX, lY + lH); this.ctx.lineTo(lX + 20, lY + lH);
    this.ctx.moveTo(lX + lW - 20, lY + lH); this.ctx.lineTo(lX + lW, lY + lH); this.ctx.lineTo(lX + lW, lY + lH - 20);
    this.ctx.stroke();

    // 3D コマの描画 (中央 cx: lX + lW/2, cy: lY + 125, 半径 68)
    const stoneCx = lX + lW / 2;
    const stoneCy = lY + 125;
    this.drawSampleStone(stoneCx, stoneCy, 56, curSkin, P1_COLOR);

    // スキン名
    this.ctx.textAlign = 'center';
    this.ctx.fillStyle = '#ffffff';
    this.ctx.font = '900 28px sans-serif';
    this.ctx.shadowColor = curSkin.color;
    this.ctx.shadowBlur = 15;
    this.ctx.fillText(curSkin.name, stoneCx, lY + 235);
    this.ctx.shadowBlur = 0;

    // レアリティ ＆ オーラレベルバッジ
    this.ctx.fillStyle = '#facc15';
    this.ctx.font = 'bold 16px sans-serif';
    this.ctx.fillText(`[${curSkin.rarity}]  🌟 オーラ Lv.${auraLv} ${auraLv === 3 ? '(MAX)' : ''}`, stoneCx, lY + 268);

    // 所持状況表示
    this.ctx.fillStyle = isOwned ? '#10b981' : '#f59e0b';
    this.ctx.font = 'bold 15px sans-serif';
    this.ctx.fillText(isOwned ? '✨ 所持中（ダンジョンで使用可能）' : '🎁 特別開放中（お試し出撃可能！）', stoneCx, lY + 298);

    // スキン説明
    this.ctx.fillStyle = '#cbd5e1';
    this.ctx.font = '13px sans-serif';
    this.ctx.fillText(curSkin.desc || '古代魔導の英知が宿る神話のオセロ。', stoneCx, lY + 335);

    // 左右切替ナビゲーション矢印
    this.drawButton(lX + 30, lY + 390, 80, 42, '◀ 前へ', '#1e293b');
    this.ctx.fillStyle = '#94a3b8';
    this.ctx.font = 'bold 14px sans-serif';
    this.ctx.fillText(`${this.dungeonSelectedSkinIndex + 1} / ${skinKeys.length}`, stoneCx, lY + 416);
    this.drawButton(lX + lW - 110, lY + 390, 80, 42, '次へ ▶', '#1e293b');

    // キー操作Tips
    this.ctx.fillStyle = '#64748b';
    this.ctx.font = '12px sans-serif';
    this.ctx.fillText('※ [←][→] または [A][D] キーでも切り替え可能', stoneCx, lY + 460);

    // --- 右側カード：戦闘性能・パッシブ能力＆特別ルール (w: 640, h: 485) ---
    const rX = 560, rY = 105, rW = 640, rH = 485;
    this.ctx.fillStyle = 'rgba(15, 23, 42, 0.9)';
    this.ctx.strokeStyle = '#38bdf8';
    this.ctx.lineWidth = 2.5;
    this.ctx.fillRect(rX, rY, rW, rH);
    this.ctx.strokeRect(rX, rY, rW, rH);

    this.ctx.textAlign = 'left';
    this.ctx.fillStyle = '#facc15';
    this.ctx.font = 'bold 18px sans-serif';
    this.ctx.fillText('◆ 出撃オセロのパッシブ能力 ＆ 戦闘特性', rX + 25, rY + 35);

    // ボックス1: 属性カラーパッシブ
    this.ctx.fillStyle = 'rgba(2, 6, 23, 0.85)';
    this.ctx.strokeStyle = curSkin.color;
    this.ctx.lineWidth = 1.5;
    this.ctx.fillRect(rX + 25, rY + 52, rW - 50, 95);
    this.ctx.strokeRect(rX + 25, rY + 52, rW - 50, 95);

    this.ctx.fillStyle = curSkin.color || '#38bdf8';
    this.ctx.font = 'bold 16px sans-serif';
    this.ctx.fillText(`✨ 属性パッシブ: 【${curSkin.passiveName || curSkin.name}】`, rX + 40, rY + 78);
    this.ctx.fillStyle = '#ffffff';
    this.ctx.font = '13px sans-serif';
    const pDesc = curSkin.passiveDesc || '特殊パッシブ能力が戦闘中に発動します。';
    if (pDesc.length > 36) {
      const splitIdx = pDesc.indexOf('！', 22);
      if (splitIdx !== -1 && splitIdx < 45) {
        this.ctx.fillText(pDesc.slice(0, splitIdx + 1), rX + 40, rY + 104);
        this.ctx.fillText(pDesc.slice(splitIdx + 1), rX + 40, rY + 126);
      } else {
        this.ctx.fillText(pDesc.slice(0, 36), rX + 40, rY + 104);
        this.ctx.fillText(pDesc.slice(36), rX + 40, rY + 126);
      }
    } else {
      this.ctx.fillText(pDesc, rX + 40, rY + 112);
    }

    // ボックス2: 基本石色パッシブ切替（黒石 vs 白石）
    const isBlack = (this.selectedBaseColor || 'BLACK') === 'BLACK';
    this.ctx.fillStyle = 'rgba(2, 6, 23, 0.85)';
    this.ctx.strokeStyle = isBlack ? '#38bdf8' : '#facc15';
    this.ctx.lineWidth = 1.5;
    this.ctx.fillRect(rX + 25, rY + 160, rW - 50, 92);
    this.ctx.strokeRect(rX + 25, rY + 160, rW - 50, 92);

    this.ctx.fillStyle = isBlack ? '#38bdf8' : '#facc15';
    this.ctx.font = 'bold 15px sans-serif';
    this.ctx.fillText(isBlack ? '🌑 選択中の石色: 【黒の石：魔導の浸食】' : '⚪ 選択中の石色: 【白の石：聖光の守護】', rX + 40, rY + 188);

    // 切替ボタン (rX + rW - 225, rY + 166, 190, 32)
    this.drawButton(rX + rW - 225, rY + 166, 190, 32, isBlack ? '🔄 白の聖光へ切替' : '🔄 黒の魔導へ切替', isBlack ? '#f59e0b' : '#38bdf8', true);

    this.ctx.fillStyle = '#cbd5e1';
    this.ctx.font = '13px sans-serif';
    this.ctx.fillText(isBlack ? '2連鎖で自身のCT短縮(-0.1s)、3連鎖で相手のCTを+0.2s遅延させる先手必勝型！' : '状態異常（フリーズ・スタン）時間を常時25%軽減＆外周・角配置で次手上書き免除！', rX + 40, rY + 224);

    // ボックス3: 魔導ダンジョン全滅即死ルール
    this.ctx.fillStyle = 'rgba(2, 6, 23, 0.85)';
    this.ctx.strokeStyle = '#ef4444';
    this.ctx.lineWidth = 1.5;
    this.ctx.fillRect(rX + 25, rY + 265, rW - 50, 95);
    this.ctx.strokeRect(rX + 25, rY + 265, rW - 50, 95);

    this.ctx.fillStyle = '#ef4444';
    this.ctx.font = 'bold 15px sans-serif';
    this.ctx.fillText('💀 魔導ダンジョン専用ルール：【自駒全滅即死 ＆ 不死鳥復活】', rX + 40, rY + 293);
    this.ctx.fillStyle = '#fde047';
    this.ctx.font = '13px sans-serif';
    this.ctx.fillText('・自分の石が0枚になると【即座にゲームオーバー（敗北）】となります！', rX + 40, rY + 318);
    this.ctx.fillText('・階層クリアで【不死鳥の加護（UR）】を獲得していれば、全滅時に奇跡の大復活が可能！', rX + 40, rY + 340);

    // コマ選択ミニグリッド (11種)
    this.ctx.fillStyle = '#94a3b8';
    this.ctx.font = 'bold 13px sans-serif';
    this.ctx.fillText('◆ 出撃コマ クイック選択:', rX + 25, rY + 382);

    skinKeys.forEach((key, idx) => {
      const btnX = rX + 25 + (idx % 7) * 85;
      const btnY = rY + 396 + Math.floor(idx / 7) * 36;
      const isSelected = idx === this.dungeonSelectedSkinIndex;
      const sk = this.skins[key];
      this.drawButton(btnX, btnY, 80, 32, sk.name.slice(0, 5), isSelected ? (sk.color || '#38bdf8') : '#1e293b');
    });

    // --- 下部ボタントレイ ---
    this.drawButton(80, 615, 230, 56, '🏠 タイトルへ戻る (Esc)', '#1e293b');
    this.drawButton(335, 615, 865, 56, `⚡ 【${curSkin.name}】でダンジョンへ出撃する (START RUN - Space)`, curSkin.color, true);
  }

  drawBossIntroScreen() {
    const w = this.canvas.width;
    const h = this.canvas.height;
    const cx = w / 2;
    const boss = this.dungeonBosses[this.dungeonFloor - 1];

    this.ctx.fillStyle = 'rgba(2, 6, 23, 0.96)';
    this.ctx.fillRect(0, 0, w, h);

    // ヘッダー
    this.ctx.textAlign = 'center';
    this.ctx.fillStyle = '#f59e0b';
    this.ctx.font = 'bold 20px sans-serif';
    this.ctx.fillText('⚔️ ROGUE-LIKE BOSS RUSH ⚔️', cx, 48);

    this.ctx.fillStyle = boss.color;
    this.ctx.font = '900 36px sans-serif';
    this.ctx.shadowColor = boss.color;
    this.ctx.shadowBlur = 20;
    this.ctx.fillText(`${boss.title}`, cx, 88);
    this.ctx.shadowBlur = 0;

    // ボス紹介大カード (幅1020px, 高さ450px)
    const bW = 1020, bH = 450, bX = cx - bW / 2, bY = 112;
    this.ctx.fillStyle = 'rgba(15, 23, 42, 0.9)';
    this.ctx.strokeStyle = boss.color;
    this.ctx.lineWidth = 2.5;
    this.ctx.fillRect(bX, bY, bW, bH);
    this.ctx.strokeRect(bX, bY, bW, bH);

    // 【左カラム：ボス立ち絵ポートレートフレーム】 (幅310px, 高さ350px)
    const pX = bX + 30, pY = bY + 25, pW = 300, pH = 345;
    this.ctx.fillStyle = 'rgba(2, 6, 23, 0.95)';
    this.ctx.strokeStyle = '#334155';
    this.ctx.lineWidth = 1.5;
    this.ctx.fillRect(pX, pY, pW, pH);
    this.ctx.strokeRect(pX, pY, pW, pH);

    // ボス立ち絵の描画
    this.drawBossPortrait(this.dungeonFloor, pX + 5, pY + 5, pW - 10, pH - 10, true);

    // ネオンコーナーフレーム装飾
    this.ctx.strokeStyle = boss.color;
    this.ctx.lineWidth = 3;
    this.ctx.beginPath();
    this.ctx.moveTo(pX, pY + 20); this.ctx.lineTo(pX, pY); this.ctx.lineTo(pX + 20, pY);
    this.ctx.moveTo(pX + pW - 20, pY); this.ctx.lineTo(pX + pW, pY); this.ctx.lineTo(pX + pW, pY + 20);
    this.ctx.moveTo(pX, pY + pH - 20); this.ctx.lineTo(pX, pY + pH); this.ctx.lineTo(pX + 20, pY + pH);
    this.ctx.moveTo(pX + pW - 20, pY + pH); this.ctx.lineTo(pX + pW, pY + pH); this.ctx.lineTo(pX + pW, pY + pH - 20);
    this.ctx.stroke();

    const customImg = this.customBossImages[this.dungeonFloor];
    // AIイラスト適用ボタン＆解除ボタン (y: bY + 386)
    this.drawButton(pX, bY + 386, customImg ? 195 : pW, 38, customImg ? '📁 AI画像変更' : '📁 AIイラスト適用', '#0284c7');
    if (customImg) {
      this.drawButton(pX + 208, bY + 386, 92, 38, '✖ 解除', '#475569');
    }

    // 【右カラム：ボス情報・能力・バフ一覧】 (幅630px)
    const rX = bX + 360, rY = bY + 25;
    this.ctx.textAlign = 'left';

    // ボス名 & サブタイトル
    this.ctx.fillStyle = '#ffffff';
    this.ctx.font = '900 32px sans-serif';
    this.ctx.fillText(boss.name, rX, rY + 32);

    // バッジ（危険度 / AIタイプ）
    this.ctx.fillStyle = '#94a3b8';
    this.ctx.font = 'bold 15px sans-serif';
    const stars = '★'.repeat(this.dungeonFloor) + '☆'.repeat(5 - this.dungeonFloor);
    this.ctx.fillText('危険度: ', rX, rY + 68);
    this.ctx.fillStyle = '#f59e0b';
    this.ctx.fillText(`${stars}`, rX + 60, rY + 68);

    this.ctx.fillStyle = '#94a3b8';
    this.ctx.fillText('AI知能: ', rX + 170, rY + 68);
    this.ctx.fillStyle = boss.color;
    const aiDesc = boss.floor === 3 ? '⚡ 神速CT 0.65s' : boss.floor === 5 ? '👁️ 超神話級' : boss.aiLevel === 'ELEMENTARY' ? '初級' : boss.aiLevel === 'ADULT' ? '上級' : '超知能';
    this.ctx.fillText(aiDesc, rX + 230, rY + 68);

    // 能力説明ボックス
    this.ctx.fillStyle = 'rgba(2, 6, 23, 0.85)';
    this.ctx.strokeStyle = '#334155';
    this.ctx.lineWidth = 1;
    this.ctx.fillRect(rX, rY + 92, 630, 135);
    this.ctx.strokeRect(rX, rY + 92, 630, 135);

    this.ctx.fillStyle = '#fde047';
    this.ctx.font = 'bold 16px sans-serif';
    const lines = boss.desc.split("\n");
    lines.forEach((l, lIdx) => {
      this.ctx.fillText(l, rX + 18, rY + 130 + lIdx * 30);
    });

    // プレイヤーの現在能力バッジ
    this.ctx.fillStyle = 'rgba(2, 6, 23, 0.85)';
    this.ctx.fillRect(rX, rY + 242, 630, 140);
    this.ctx.strokeRect(rX, rY + 242, 630, 140);

    this.ctx.fillStyle = '#38bdf8';
    this.ctx.font = 'bold 15px sans-serif';
    this.ctx.fillText(`🛡️ プレイヤーの習得能力 (${this.playerAbilities.length}個):`, rX + 18, rY + 270);

    if (this.playerAbilities.length === 0) {
      this.ctx.fillStyle = '#64748b';
      this.ctx.font = '14px sans-serif';
      this.ctx.fillText('まだ能力を獲得していません。このボスを撃破すると3択ドラフトが発生！', rX + 18, rY + 305);
    } else {
      let badgeX = rX + 18;
      let badgeY = rY + 292;
      this.playerAbilities.forEach(id => {
        const ab = this.abilityPool.find(x => x.id === id);
        if (!ab) return;
        this.ctx.font = 'bold 13px sans-serif';
        const txt = `[${ab.rarity}] ${ab.name}`;
        const tw = this.ctx.measureText(txt).width + 16;
        if (badgeX + tw > rX + 610) {
          badgeX = rX + 18;
          badgeY += 28;
        }
        this.ctx.fillStyle = 'rgba(15, 23, 42, 0.9)';
        this.ctx.strokeStyle = ab.color;
        this.ctx.lineWidth = 1.5;
        this.ctx.fillRect(badgeX, badgeY, tw, 24);
        this.ctx.strokeRect(badgeX, badgeY, tw, 24);
        this.ctx.fillStyle = ab.color;
        this.ctx.fillText(txt, badgeX + 8, badgeY + 17);
        badgeX += tw + 10;
      });
    }

    // ドラッグ＆ドロップ注記
    this.ctx.textAlign = 'center';
    this.ctx.fillStyle = '#64748b';
    this.ctx.font = '13px sans-serif';
    this.ctx.fillText('💡 お手持ちのAI生成画像（PNG/JPG）を画面にドラッグ＆ドロップでもボスの立ち絵に即座に設定できます', cx, 584);

    // 決闘開始ボタン
    this.drawButton(cx - 190, 608, 380, 58, '⚔️ 決闘開始 (FIGHT! - Space)', boss.color, true);
  }

  // 2. 3択ローグライク能力ドラフト画面
  drawAbilitySelectScreen() {
    const w = this.canvas.width;
    const h = this.canvas.height;
    const cx = w / 2;

    this.ctx.fillStyle = 'rgba(2, 6, 23, 0.96)';
    this.ctx.fillRect(0, 0, w, h);

    this.ctx.textAlign = 'center';
    this.ctx.fillStyle = '#f59e0b';
    this.ctx.font = 'bold 20px sans-serif';
    this.ctx.fillText(`🎉 FLOOR ${this.dungeonFloor} CLEARED!! 🎉`, cx, 65);

    this.ctx.fillStyle = '#ffffff';
    this.ctx.font = '900 38px sans-serif';
    this.ctx.shadowColor = '#a855f7';
    this.ctx.shadowBlur = 20;
    this.ctx.fillText('魔導の加護選択 (CHOOSE YOUR ABILITY)', cx, 115);
    this.ctx.shadowBlur = 0;

    this.ctx.fillStyle = '#94a3b8';
    this.ctx.font = '14px sans-serif';
    this.ctx.fillText('次戦へ進むために能力を1つ選択してください [マウスクリック または 数字キー 1 / 2 / 3]', cx, 150);

    // 3枚の能力カード
    const cardW = 320, cardH = 340, gap = 30;
    const totalW = cardW * 3 + gap * 2;
    const startX = (w - totalW) / 2;
    const cardY = 190;

    this.draftAbilities.forEach((ab, idx) => {
      const x = startX + idx * (cardW + gap);

      this.ctx.fillStyle = 'rgba(15, 23, 42, 0.9)';
      this.ctx.strokeStyle = ab.rarity === 'LR' ? '#ec4899' : (ab.rarity === 'UR' ? '#38bdf8' : '#94a3b8');
      this.ctx.lineWidth = ab.rarity === 'LR' ? 3.5 : 2;
      this.ctx.fillRect(x, cardY, cardW, cardH);
      this.ctx.strokeRect(x, cardY, cardW, cardH);

      // レアリティ
      this.ctx.textAlign = 'center';
      this.ctx.fillStyle = ab.color;
      this.ctx.font = 'bold 15px sans-serif';
      this.ctx.fillText(ab.rarity === 'LR' ? '★6 LR (神話級)' : (ab.rarity === 'UR' ? '★5 UR (超強力)' : '★3 N (基礎能力)'), x + cardW / 2, cardY + 38);

      // アイコン
      this.ctx.font = '48px sans-serif';
      this.ctx.fillText(ab.rarity === 'LR' ? '👑' : (ab.rarity === 'UR' ? '⚡' : '📜'), x + cardW / 2, cardY + 98);

      // 名前
      this.ctx.fillStyle = '#ffffff';
      this.ctx.font = 'bold 22px sans-serif';
      this.ctx.fillText(ab.name, x + cardW / 2, cardY + 145);

      // 区切り線
      this.ctx.strokeStyle = 'rgba(148, 163, 184, 0.25)';
      this.ctx.lineWidth = 1;
      this.ctx.beginPath();
      this.ctx.moveTo(x + 20, cardY + 165);
      this.ctx.lineTo(x + cardW - 20, cardY + 165);
      this.ctx.stroke();

      // 説明文
      this.ctx.fillStyle = '#cbd5e1';
      this.ctx.font = '14px sans-serif';
      this.ctx.fillText(ab.desc, x + cardW / 2, cardY + 205);

      // 選択ボタン
            const btnLabel = this.abilitySelectGuardTimer > 0 ? '⏱ 選択待機中...' : `[${idx + 1}] この能力を習得`;
      this.drawButton(x + 30, cardY + 265, cardW - 60, 48, btnLabel, ab.color, true);
    });
  }

  // 3択ドラフト抽選
  // アビリティ選択処理 (マウス・1/2/3キー共通)
  chooseAbility(idx) {
    if (this.state !== 'ABILITY_SELECT') return;
    if (this.abilitySelectGuardTimer > 0) return;
    if (!this.draftAbilities || !this.draftAbilities[idx]) return;

    const ab = this.draftAbilities[idx];
    this.playerAbilities.push(ab.id);
    audio.playItemGet();

    if (this.dungeonSubStage === 'MINION') {
      // 1-1 (MINION) 突破 ➔ 1-2 (ELITE) 中ボス戦へ突入！
      this.startEliteMatch();
      this.showBanner(`【${ab.name}】獲得！精鋭中ボス戦へ突入！`, '#38bdf8', 2.0);
    } else if (this.dungeonSubStage === 'ELITE') {
      // 1-2 (ELITE) 突破 ➔ 1-3 (BOSS) 大ボス戦前紹介画面へ！
      this.state = 'BOSS_INTRO';
      const stage = DUNGEON_STAGES[this.dungeonFloor] || DUNGEON_STAGES[1];
      this.showBanner(`【${ab.name}】獲得！エリア大ボス【${stage.boss.name}】決闘へ！`, '#facc15', 2.5);
    } else {
      // ボス戦後は次階層へ
      if (this.dungeonFloor < 5) {
        this.dungeonFloor++;
        this.dungeonSubStage = 'MINION';
        this.startMinionMatch();
      } else {
        this.state = 'TITLE';
      }
    }
  }

  // リザルト画面での次のアクション (スペース/Enter・マウスクリック共通)
  handleResultNextAction() {
    if (this.resultGuardTimer > 0) return;

    const isP1Win = this.winner === '1P' || (this.p1.score > this.p2.score);

    if (this.mode === 'DUNGEON') {
      if (isP1Win) {
        if (this.dungeonSubStage === 'MINION' || this.dungeonSubStage === 'ELITE') {
          // 1-1 または 1-2 勝利 ➔ 能力選択へ！
          this.prepareAbilityDraft();
        } else if (this.dungeonFloor < 5) {
          // 1-3 (BOSS) 勝利 ➔ 次の階層の1-1へ！
          this.dungeonFloor++;
          this.dungeonSubStage = 'MINION';
          this.startMinionMatch();
          this.showBanner(`🎉 第${this.dungeonFloor-1}層 突破！第${this.dungeonFloor}層 突入！`, '#f59e0b', 2.5);
        } else {
          // 第5層大ボス勝利 ➔ 全制覇！
          this.state = 'TITLE';
          this.showBanner('👑 魔導ダンジョン全5層完全制覇！！真の英雄！！', '#facc15', 5.0);
        }
      } else {
        // 敗北時はタイトルへ
        this.state = 'TITLE';
      }
    } else {
      // 通常対戦・PVP時は再戦！
      this.startMatch();
    }
  }

  prepareAbilityDraft() {
    const unowned = this.abilityPool.filter(a => !this.playerAbilities.includes(a.id));
    const pool = unowned.length >= 3 ? unowned : this.abilityPool;

    // ガチャ風重み付け確率抽選（各枠ごとにレアリティ抽選: LR 4%, UR 24%, N 72%）
    const selectedAbilities = [];
    const availablePool = [...pool];

    for (let slot = 0; slot < 3; slot++) {
      const rand = Math.random();
      let targetRarity = 'N';
      if (rand < 0.04) targetRarity = 'LR';
      else if (rand < 0.28) targetRarity = 'UR';
      else targetRarity = 'N';

      // 該当レアリティで未選択のアビリティを探す
      let candidates = availablePool.filter(a => a.rarity === targetRarity && !selectedAbilities.some(s => s.id === a.id));

      // 該当レアリティが枯渇している場合のフォールバック
      if (candidates.length === 0) {
        if (targetRarity === 'LR') {
          candidates = availablePool.filter(a => a.rarity === 'UR' && !selectedAbilities.some(s => s.id === a.id));
          if (candidates.length === 0) candidates = availablePool.filter(a => a.rarity === 'N' && !selectedAbilities.some(s => s.id === a.id));
        } else if (targetRarity === 'UR') {
          candidates = availablePool.filter(a => a.rarity === 'N' && !selectedAbilities.some(s => s.id === a.id));
          if (candidates.length === 0) candidates = availablePool.filter(a => a.rarity === 'LR' && !selectedAbilities.some(s => s.id === a.id));
        } else {
          candidates = availablePool.filter(a => a.rarity === 'UR' && !selectedAbilities.some(s => s.id === a.id));
          if (candidates.length === 0) candidates = availablePool.filter(a => a.rarity === 'LR' && !selectedAbilities.some(s => s.id === a.id));
        }
      }

      if (candidates.length === 0) {
        candidates = this.abilityPool.filter(a => !selectedAbilities.some(s => s.id === a.id));
      }

      if (candidates.length > 0) {
        const picked = candidates[Math.floor(Math.random() * candidates.length)];
        selectedAbilities.push(picked);
      }
    }

    this.draftAbilities = selectedAbilities;
    this.state = 'ABILITY_SELECT';
    this.abilitySelectGuardTimer = 0.5; // ★誤爆防止ガードタイマー0.5秒！
    audio.playItemGet();
  }

  drawHowToPlayScreen() {
    const cx = this.canvas.width / 2;

    this.ctx.fillStyle = 'rgba(2, 6, 23, 0.96)';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.textAlign = 'center';
    this.ctx.fillStyle = '#ffffff';
    this.ctx.font = '900 36px sans-serif';
    this.ctx.shadowColor = '#00f0ff';
    this.ctx.shadowBlur = 20;
    this.ctx.fillText('📖 30秒でわかる！遊び方ガイド', cx, 75);
    this.ctx.shadowBlur = 0;

    const cardW = 270;
    const cardH = 370;
    const gap = 20;
    const totalW = cardW * 4 + gap * 3;
    const startX = (this.canvas.width - totalW) / 2;
    const cardY = 115;

    const cards = [
      {
        num: '① 基本ルール',
        title: '早い者勝ちオセロ！',
        icon: '⚡',
        lines: [
          'ターン制は一切なし！',
          '挟めるマスに同時に置く',
          'ハイスピード陣地争い！',
          '（通常クールダウン: 1.5秒）'
        ],
        color: '#38bdf8'
      },
      {
        num: '② 逆転の掟',
        title: '上書き配置！',
        icon: '💥',
        lines: [
          '挟める場所なら相手の',
          '石の上にも重ねて置ける！',
          '要所を力づくで奪取せよ！',
          '（上書きクールダウン: 2.2秒）'
        ],
        color: '#f59e0b'
      },
      {
        num: '③ 必殺技',
        title: '光の柱とアイテム！',
        icon: '🧲',
        lines: [
          '天から降る光の柱（予兆2.8秒）！',
          '落ちる前に挟んで領地化せよ！',
          '適度な出現頻度でオセロの',
          '本格戦略性と大逆転が両立！'
        ],
        color: '#c084fc'
      },
      {
        num: '④ 操作方法',
        title: '公平キーボード！',
        icon: '🎮',
        lines: [
          '1P(青): [W][A][S][D] + [Space]',
          '2P(金): [↑][↓][←][→] + [Enter]',
          '（キー長押しで高速スムーズ移動！）',
          '（VS CPU時はマウス操作もOK）'
        ],
        color: '#34d399'
      }
    ];

    cards.forEach((c, idx) => {
      const x = startX + idx * (cardW + gap);
      // カード背景
      this.ctx.fillStyle = 'rgba(15, 23, 42, 0.9)';
      this.ctx.strokeStyle = c.color;
      this.ctx.lineWidth = 2.5;
      this.ctx.fillRect(x, cardY, cardW, cardH);
      this.ctx.strokeRect(x, cardY, cardW, cardH);

      // 番号
      this.ctx.fillStyle = c.color;
      this.ctx.font = 'bold 15px sans-serif';
      this.ctx.fillText(c.num, x + cardW / 2, cardY + 36);

      // アイコン
      this.ctx.font = '48px sans-serif';
      this.ctx.fillText(c.icon, x + cardW / 2, cardY + 98);

      // タイトル
      this.ctx.fillStyle = '#ffffff';
      this.ctx.font = 'bold 20px sans-serif';
      this.ctx.fillText(c.title, x + cardW / 2, cardY + 155);

      // 区切り線
      this.ctx.strokeStyle = 'rgba(148, 163, 184, 0.25)';
      this.ctx.lineWidth = 1;
      this.ctx.beginPath();
      this.ctx.moveTo(x + 25, cardY + 175);
      this.ctx.lineTo(x + cardW - 25, cardY + 175);
      this.ctx.stroke();

      // 説明文（行ごとに確実に改行描画）
      this.ctx.fillStyle = '#cbd5e1';
      this.ctx.font = '13.5px sans-serif';
      c.lines.forEach((line, lIdx) => {
        this.ctx.fillText(line, x + cardW / 2, cardY + 210 + lIdx * 28);
      });
    });

    // 閉じるボタン
    this.drawButton(cx - 160, 535, 320, 55, '理解した！決闘へ戻る (CLOSE)', '#0284c7', true);
  }

  drawTitleScreen() {
    const cx = this.canvas.width / 2;
    const cy = this.canvas.height / 2;

    this.ctx.textAlign = 'center';
    
    this.ctx.fillStyle = '#38bdf8';
    this.ctx.font = 'bold 20px sans-serif';
    this.ctx.fillText('REAL-TIME TACTICAL REVERSI', cx, cy - 145);

    this.ctx.fillStyle = '#ffffff';
    this.ctx.font = '900 64px Cinzel, sans-serif';
    this.ctx.shadowColor = '#00f0ff';
    this.ctx.shadowBlur = 10;
    this.ctx.fillText('DUEL REVERSI', cx, cy - 75);
    this.ctx.shadowBlur = 0;

    this.ctx.fillStyle = '#f59e0b';
    this.ctx.font = 'bold 22px sans-serif';
    this.ctx.fillText('〜 魔 導 神 話 決 闘 〜', cx, cy - 30);

    // 2大メインモードを一番目立つ位置に配置
    this.drawButton(cx - 220, cy + 5, 440, 48, '👥 ２人対戦 (2P - パッシブなし・フェア勝負)', '#0284c7', true);
    this.drawButton(cx - 220, cy + 62, 440, 48, '🏰 魔導ダンジョン (DUNGEON - ボス連戦＆ガチャ)', '#f59e0b', true);
    this.drawButton(cx - 220, cy + 119, 440, 44, '🤖 CPU練習対決 (VS CPU)', '#10b981', true);
    this.drawButton(cx - 220, cy + 172, 440, 42, '🎰 魔導ガチャ＆スキン召喚 (GACHA)', '#7c3aed');
    this.drawButton(cx - 220, cy + 223, 440, 38, '📖 遊び方 ＆ ルール (HOW TO PLAY)', '#1e293b');
    
    this.ctx.fillStyle = '#94a3b8';
    this.ctx.font = '13px sans-serif';
    this.ctx.fillText('※ クリックまたはスペースキーで開始', cx, cy + 285);

    // タイトル右上 所持金表示
    this.ctx.textAlign = 'right';
    this.ctx.fillStyle = '#fbbf24';
    this.ctx.font = 'bold 16px sans-serif';
    this.ctx.fillText(`💰 所持金: ${this.p1Gold} G`, this.canvas.width - 45, 45);
  }
  drawModeSelectScreen() {
    const cx = this.canvas.width / 2;

    this.ctx.textAlign = 'center';
    this.ctx.fillStyle = '#ffffff';
    this.ctx.font = 'bold 30px sans-serif';
    this.ctx.shadowColor = '#00f0ff';
    this.ctx.shadowBlur = 15;
    this.ctx.fillText('決闘設定 ＆ 対戦レギュレーション (DUEL SETTINGS)', cx - 120, 48);
    this.ctx.shadowBlur = 0;

    // 右上 所持金表示
    this.ctx.textAlign = 'right';
    this.ctx.fillStyle = '#fbbf24';
    this.ctx.font = 'bold 16px sans-serif';
    this.ctx.fillText(`💰 1P: ${this.p1Gold} G | 2P: ${this.p2Gold} G`, this.canvas.width - 50, 48);

    // --- 左カラム: 対戦設定コントロール (幅530px) ---
    // 1. 対戦形式 ＆ ルールモード
    this.ctx.textAlign = 'left';
    this.ctx.fillStyle = '#38bdf8';
    this.ctx.font = 'bold 14px sans-serif';
    this.ctx.fillText('◆ 対戦形式 (ローカル / P2Pオンライン)', 60, 95);
    this.drawButton(60, 108, 130, 40, '1P vs CPU', this.mode === 'VS_CPU' ? '#0284c7' : '#1e293b');
    this.drawButton(200, 108, 140, 40, '2P 対人(1台)', this.mode === 'PVP_LOCAL' ? '#0284c7' : '#1e293b');
    const netLabel = (window.duelNet && window.duelNet.isConnected) ? `🌐 接続中(${this.onlineRoomId})` : '🌐 P2P通信対戦';
    this.drawButton(350, 108, 160, 40, netLabel, this.mode === 'PVP_ONLINE' ? '#9333ea' : '#3b0764', true);

    // ルールモード (CHAOS / CLASSIC)
    this.ctx.fillText('◆ ルールモード (アイテム/奇跡)', 60, 165);
    this.drawButton(60, 178, 210, 36, '⚡ CHAOS (大乱闘)', this.ruleMode === 'CHAOS' ? '#7c3aed' : '#1e293b');
    this.drawButton(280, 178, 210, 36, '🏆 CLASSIC (競技オセロ)', this.ruleMode === 'CLASSIC' ? '#059669' : '#1e293b');

    // ★初期配置選択 (通常 2x2 vs ランダム・ドット絵)
    this.ctx.fillText('◆ 盤面初期配置 (オセロ vs ランダムアート)', 60, 230);
    this.drawButton(60, 242, 205, 36, '⚪ 通常配置 (2×2)', !this.pvpUseDotArt ? '#0284c7' : '#1e293b');
    this.drawButton(275, 242, 215, 36, '🎨 ランダム・ドット絵 (確定10×10)', this.pvpUseDotArt ? '#7c3aed' : '#1e293b');

    // 2. BET賭け金 (PVP時) or CPU難易度
    if (this.mode === 'PVP_LOCAL' || this.mode === 'PVP_ONLINE') {
      this.ctx.fillText(`◆ 決闘ゴールドBET [1P: ${this.p1Gold}G / 2P: ${this.p2Gold}G]`, 60, 295);
      const bOpts = ['なし', '100G', '300G', '500G', '🔥ALL-IN'];
      bOpts.forEach((bText, bIdx) => {
        const bx = 60 + bIdx * 88;
        this.drawButton(bx, 308, 80, 36, bText, this.selectedBetIndex === bIdx ? '#f59e0b' : '#1e293b');
      });
    } else {
      this.ctx.fillText('◆ CPU難易度', 60, 295);
      this.drawButton(60, 308, 135, 36, '🎒 小学生', this.cpuLevel === 'ELEMENTARY' ? '#10b981' : '#1e293b');
      this.drawButton(205, 308, 135, 36, '👔 大人', this.cpuLevel === 'ADULT' ? '#0284c7' : '#1e293b');
      this.drawButton(350, 308, 140, 36, '🤖 超知能AI', this.cpuLevel === 'AI' ? '#ef4444' : '#1e293b');
    }

    // 3. ゲームスピード ＆ 試合時間
    this.ctx.fillText('◆ 速度 / 時間', 60, 360);
    this.drawButton(60, 372, 105, 36, '標準 1.5s', this.speedMode === 'NORMAL' ? '#0284c7' : '#1e293b');
    this.drawButton(175, 372, 110, 36, 'TURBO 1.0s', this.speedMode === 'TURBO' ? '#f59e0b' : '#1e293b');
    this.drawButton(295, 372, 95, 36, '90秒', this.matchDuration === 90 ? '#0284c7' : '#1e293b');
    this.drawButton(400, 372, 90, 36, '60秒', this.matchDuration === 60 ? '#0284c7' : '#1e293b');

    // 4. BGMセレクター ＆ 盤面ステージ
    const curTrackName = audio.bgmTracks[audio.currentTrackIndex].name;
    const curBoardName = this.boardThemes[this.equippedBoardId].name;
    this.ctx.fillText('◆ BGM / 盤面ステージ', 60, 425);
    const trackLabels = [
      '🎵 神話決闘 (Acid)',
      '🎵 電脳空間 (8-Bit)',
      '🎵 紅蓮闘技 (Rock)',
      '🎵 静寂神殿 (Ambient)'
    ];
    this.drawButton(60, 438, 215, 36, trackLabels[audio.currentTrackIndex] || `🎵 ${curTrackName.split(' ')[0]}`, '#0284c7');
    this.drawButton(285, 438, 205, 36, `🏛 ${curBoardName.split('の')[0]}`, '#475569');

    // 5. 試合開始ボタン
    this.drawButton(80, 500, 430, 60, '⚡ 試合開始 (DUEL START - Space)', '#f59e0b', true);
    this.ctx.textAlign = 'center';
    this.ctx.fillStyle = '#94a3b8';
    this.ctx.font = '12px sans-serif';
    this.ctx.fillText('※ [Space] または [Enter] キーで即試合開始！', 295, 580);

    // --- 右カラム: アイテム魔導録パネル (幅580px) ---
    const panelX = 640;
    const panelY = 95;
    const panelW = 570;
    const panelH = 590;

    this.ctx.fillStyle = 'rgba(15, 23, 42, 0.88)';
    this.ctx.strokeStyle = '#3b82f6';
    this.ctx.lineWidth = 2;
    this.ctx.fillRect(panelX, panelY, panelW, panelH);
    this.ctx.strokeRect(panelX, panelY, panelW, panelH);

    // パネルヘッダー
    this.ctx.textAlign = 'left';
    this.ctx.fillStyle = '#fbbf24';
    this.ctx.font = 'bold 18px sans-serif';
    this.ctx.fillText('📜 出現アイテム魔導録（全5種）', panelX + 20, panelY + 34);

    this.ctx.strokeStyle = 'rgba(148, 163, 184, 0.25)';
    this.ctx.lineWidth = 1;
    this.ctx.beginPath();
    this.ctx.moveTo(panelX + 20, panelY + 48);
    this.ctx.lineTo(panelX + panelW - 20, panelY + 48);
    this.ctx.stroke();

    const items = [
      {
        icon: '🧲',
        name: '磁気破砕（マグネット）',
        color: '#c084fc',
        desc: '周囲2×2マスの石を重力ブラックホールで吸い上げ、何もない更地に戻す！相手の要塞を粉砕する切り札。'
      },
      {
        icon: '🎨',
        name: '領域侵食（ペイント）',
        color: '#38bdf8',
        desc: '挟む必要なし！蒼光の大魔法陣を展開し、周囲2×2マスの石を無条件で一瞬で自分の色に塗り替える！'
      },
      {
        icon: '👑',
        name: '不壊金石（ゴールド）',
        color: '#facc15',
        desc: '【終盤限定】天から極太金雷ズドン！絶対に裏返されず、上書きもされない永久無敵の神石を打ち込む！'
      },
      {
        icon: '⚡',
        name: '神速魔力（ハイパー）',
        color: '#fde047',
        desc: '4秒間クールダウンがゼロに！挟めるマスがあればマシンガンのように石を高速連打配置できる！'
      },
      {
        icon: '❄️',
        name: '絶対凍結（フリーズ）',
        color: '#67e8f9',
        desc: '相手の手元を氷漬けにして3.0秒間完全停止！相手の反撃を完全に封じて安全に盤面を制圧する妨害技！'
      }
    ];

    const rowStartY = panelY + 62;
    const rowH = 86;

    items.forEach((it, idx) => {
      const ry = rowStartY + idx * rowH;
      // カード枠
      this.ctx.fillStyle = 'rgba(2, 6, 23, 0.75)';
      this.ctx.strokeStyle = it.color;
      this.ctx.lineWidth = 1.5;
      this.ctx.fillRect(panelX + 18, ry, panelW - 36, rowH - 10);
      this.ctx.strokeRect(panelX + 18, ry, panelW - 36, rowH - 10);

      // アイコン
      this.ctx.font = '36px sans-serif';
      this.ctx.textAlign = 'center';
      this.ctx.textBaseline = 'middle';
      this.ctx.fillText(it.icon, panelX + 52, ry + 38);

      // 名前
      this.ctx.textAlign = 'left';
      this.ctx.fillStyle = it.color;
      this.ctx.font = 'bold 15px sans-serif';
      this.ctx.fillText(it.name, panelX + 88, ry + 24);

      // 説明文
      this.ctx.fillStyle = '#cbd5e1';
      this.ctx.font = '12px sans-serif';
      this.ctx.fillText(it.desc, panelX + 88, ry + 50);
    });

    // パネルフッターTips
    this.ctx.fillStyle = '#fde047';
    this.ctx.font = 'bold 12.5px sans-serif';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('💡 天空光柱に急行！石を置くか、すでに自色マスなら即座に自動獲得！', panelX + panelW / 2, panelY + panelH - 18);
  }

  drawBattleScreen() {
    this.drawTopBar();
    this.drawPlayerPanels();
    this.drawBoard();
    this.drawParticles();
    this.drawVfxElements();
    this.drawLightning();
    this.drawFloatingTexts();

    if (this.state === 'COUNTDOWN') {
      const cx = this.canvas.width / 2;
      const cy = this.canvas.height / 2;
      this.ctx.fillStyle = 'rgba(0,0,0,0.65)';
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.textAlign = 'center';
      this.ctx.fillStyle = '#ffffff';
      this.ctx.font = '900 110px sans-serif';
      const sec = Math.ceil(this.countdownSec);
      this.ctx.shadowColor = '#00f0ff';
      this.ctx.shadowBlur = 40;
      this.ctx.fillText(sec > 0 ? sec : 'DUEL!', cx, cy + 35);
      this.ctx.shadowBlur = 0;
    }

    if (this.state === 'RESULT') {
      this.drawResultScreen();
    }

    if (this.isPaused) {
      this.drawPauseModal();
    }
  }

  drawTopBar() {
    const w = this.canvas.width;
    const barW = 680;
    const barH = 22;
    const barX = (w - barW) / 2;
    const barY = 22;

    const total = Math.max(1, this.p1.score + this.p2.score);
    const p1Ratio = this.p1.score / total;

    this.ctx.fillStyle = '#0f172a';
    this.ctx.fillRect(barX - 4, barY - 4, barW + 8, barH + 8);
    this.ctx.strokeStyle = '#334155';
    this.ctx.strokeRect(barX - 4, barY - 4, barW + 8, barH + 8);

    this.ctx.fillStyle = '#0284c7';
    this.ctx.fillRect(barX, barY, barW * p1Ratio, barH);

    this.ctx.fillStyle = '#f59e0b';
    this.ctx.fillRect(barX + barW * p1Ratio, barY, barW * (1 - p1Ratio), barH);

    const pinX = barX + barW * p1Ratio;
    this.ctx.fillStyle = '#ffffff';
    this.ctx.fillRect(pinX - 2, barY - 6, 4, barH + 12);

    this.ctx.font = 'bold 20px sans-serif';
    this.ctx.textAlign = 'right';
    this.ctx.fillStyle = '#38bdf8';
    this.ctx.fillText(`1P: ${this.p1.score}枚`, barX - 15, barY + 18);

    this.ctx.textAlign = 'left';
    this.ctx.fillStyle = '#fbbf24';
    this.ctx.fillText(`2P: ${this.p2.score}枚`, barX + barW + 15, barY + 18);

    this.ctx.textAlign = 'center';
    const isRed = this.timeLeft <= 30;
    this.ctx.fillStyle = isRed ? '#ef4444' : '#ffffff';
    this.ctx.font = `bold ${isRed ? 36 : 28}px sans-serif`;
    const m = Math.floor(this.timeLeft / 60);
    const s = Math.floor(this.timeLeft % 60);
    this.ctx.fillText(`⏱ ${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`, w / 2, barY + 52);

    // 一人プレイ時：SCORE ＆ HIGH SCORE 常時表示
    if (this.mode === 'VS_CPU') {
      this.ctx.textAlign = 'left';
      this.ctx.fillStyle = '#38bdf8';
      this.ctx.font = 'bold 15px sans-serif';
      this.ctx.fillText(`SCORE: ${this.displayScore.toLocaleString().padStart(7, ' ')}`, barX + 15, barY + 52);

      this.ctx.textAlign = 'right';
      this.ctx.fillStyle = '#facc15';
      this.ctx.font = 'bold 15px sans-serif';
      const best = Math.max(this.highScore, this.currentScore);
      this.ctx.fillText(`HIGH: ${best.toLocaleString().padStart(7, ' ')}`, barX + barW - 15, barY + 52);
    }

    if (this.isClimaxActive) {
      this.ctx.font = 'bold 13px sans-serif';
      this.ctx.fillStyle = '#ef4444';
      this.ctx.fillText('⚠ CLIMAX RUSH (残り30秒) ⚠', w / 2, barY + 70);
    }

    // P2Pオンライン対戦中の通信ステータス表示
    if (this.mode === 'PVP_ONLINE' && window.duelNet && window.duelNet.isConnected) {
      this.ctx.textAlign = 'left';
      this.ctx.fillStyle = '#c084fc';
      this.ctx.font = 'bold 13px sans-serif';
      this.ctx.fillText(`🌐 P2P [${this.onlineRoomId}] PING: ${this.onlinePing}ms`, 45, 38);
    }

    // 画面右上 3D立体演出切替ボタン (KeyV) ＆ PAUSE ボタン
    this.drawButton(1005, 16, 125, 34, this.is3DView ? '🎥 3D立体: ON' : '🎥 2D標準', this.is3DView ? '#0284c7' : '#334155');
    this.drawButton(1140, 16, 105, 34, '⏸️ PAUSE', '#1e293b');
  }

  drawPlayerPanels() {
    this.drawSidePanel(this.p1, 50, 110, true);
    this.drawSidePanel(this.p2, 1280 - 240, 110, false);
  }

  drawSidePanel(player, x, y, isLeft) {
    const isP1 = player.color === P1_COLOR;
    const accentColor = isP1 ? '#00f0ff' : '#f59e0b';

    this.ctx.fillStyle = 'rgba(15, 23, 42, 0.78)';
    this.ctx.strokeStyle = accentColor;
    this.ctx.lineWidth = 2;
    this.ctx.strokeRect(x, y, 190, 480);
    this.ctx.fillRect(x, y, 190, 480);

    this.ctx.textAlign = 'center';
    this.ctx.fillStyle = '#ffffff';
    this.ctx.font = 'bold 20px sans-serif';
    this.ctx.fillText(player.name, x + 95, y + 35);

    this.ctx.fillStyle = '#94a3b8';
    this.ctx.font = '12px sans-serif';
    if (this.mode === 'PVP_ONLINE') {
      if (isP1) {
        this.ctx.fillText(this.onlineRole === 'HOST' ? 'あなた: マウス/WASD' : '相手: P2P ONLINE', x + 95, y + 60);
      } else {
        this.ctx.fillText(this.onlineRole === 'GUEST' ? 'あなた: マウス/WASD/矢印' : '相手: P2P ONLINE', x + 95, y + 60);
      }
    } else if (isP1) {
      this.ctx.fillText(this.mode === 'PVP_LOCAL' ? '[W][A][S][D] + [Space]' : 'マウス移動 + [Space]', x + 95, y + 60);
    } else {
      this.ctx.fillText(this.mode === 'PVP_LOCAL' ? '[↑][↓][←][→] + [Enter]' : 'AUTO CPU', x + 95, y + 60);
    }

    const circleX = x + 95;
    const circleY = y + 155;
    const radius = 52;
    const cdRatio = player.cooldown / player.maxCooldown;

    // ダンジョンボスの場合は円内にボスポートレートを描画
    if (this.mode === 'DUNGEON' && !isP1) {
      this.ctx.save();
      this.ctx.beginPath();
      this.ctx.arc(circleX, circleY, radius - 4, 0, Math.PI * 2);
      this.ctx.clip();
      this.drawBossPortrait(this.dungeonFloor, circleX - (radius - 4), circleY - (radius - 4), (radius - 4) * 2, (radius - 4) * 2, true);
      this.ctx.restore();
    }

    this.ctx.beginPath();
    this.ctx.arc(circleX, circleY, radius, 0, Math.PI * 2);
    this.ctx.strokeStyle = '#1e293b';
    this.ctx.lineWidth = 10;
    this.ctx.stroke();

    if (player.freezeTimer > 0) {
      this.ctx.beginPath();
      this.ctx.arc(circleX, circleY, radius, 0, Math.PI * 2);
      this.ctx.strokeStyle = '#38bdf8';
      this.ctx.stroke();
      this.ctx.fillStyle = '#38bdf8';
      this.ctx.font = 'bold 18px sans-serif';
      this.ctx.fillText('❄️ 凍結中', circleX, circleY + 6);
    } else if (player.stunTimer > 0) {
      this.ctx.fillStyle = '#ef4444';
      this.ctx.font = 'bold 18px sans-serif';
      this.ctx.fillText('💥 スタン', circleX, circleY + 6);
    } else if (player.hasteTimer > 0) {
      this.ctx.strokeStyle = '#facc15';
      this.ctx.beginPath();
      this.ctx.arc(circleX, circleY, radius, 0, Math.PI * 2);
      this.ctx.stroke();
      this.ctx.fillStyle = '#facc15';
      this.ctx.font = 'bold 15px sans-serif';
      this.ctx.fillText(`⚡ CT半減 ${player.hasteTimer.toFixed(1)}s`, circleX, circleY + 6);
    } else if (player.hyperTimer > 0) {
      this.ctx.strokeStyle = '#eab308';
      this.ctx.beginPath();
      this.ctx.arc(circleX, circleY, radius, 0, Math.PI * 2);
      this.ctx.stroke();
      this.ctx.fillStyle = '#eab308';
      this.ctx.font = 'bold 16px sans-serif';
      this.ctx.fillText('⚡ 神速0秒', circleX, circleY + 6);
    } else {
      this.ctx.beginPath();
      this.ctx.arc(circleX, circleY, radius, -Math.PI/2, -Math.PI/2 + (Math.PI * 2 * (1 - cdRatio)));
      this.ctx.strokeStyle = cdRatio > 0 ? '#ef4444' : accentColor;
      this.ctx.stroke();

      this.ctx.fillStyle = '#ffffff';
      this.ctx.font = 'bold 18px sans-serif';
      this.ctx.fillText(cdRatio > 0 ? `${player.cooldown.toFixed(1)}s` : 'READY', circleX, circleY + 6);
    }

    this.ctx.fillStyle = '#64748b';
    this.ctx.font = 'bold 13px sans-serif';
    this.ctx.fillText('- NEXT ENCHANT -', x + 95, y + 260);

    // NEXT ITEM スロット（獲得時フラッシュ発光）
    const slotX = x + 30;
    const slotY = y + 280;
    this.ctx.fillStyle = player.slotFlash > 0 ? 'rgba(245, 158, 11, 0.4)' : '#020617';
    this.ctx.strokeStyle = player.nextItem ? (player.slotFlash > 0 ? '#ffffff' : '#f59e0b') : '#334155';
    this.ctx.lineWidth = player.slotFlash > 0 ? 4 : 2;
    this.ctx.strokeRect(slotX, slotY, 130, 130);
    this.ctx.fillRect(slotX, slotY, 130, 130);

    if (player.nextItem) {
      this.ctx.font = '54px sans-serif';
      this.ctx.fillText(player.nextItem.icon, x + 95, slotY + 65);
      this.ctx.font = 'bold 15px sans-serif';
      this.ctx.fillStyle = '#f59e0b';
      this.ctx.fillText(player.nextItem.name, x + 95, slotY + 98);
      this.ctx.font = '11px sans-serif';
      this.ctx.fillStyle = '#94a3b8';
      this.ctx.fillText('次手自動エンチャント', x + 95, slotY + 118);
    } else {
      this.ctx.font = '13px sans-serif';
      this.ctx.fillStyle = '#475569';
      this.ctx.fillText('なし', x + 95, slotY + 70);
    }

    // 石の色パッシブ能力の常時表示 (選択中の石色パッシブに連動)
    const p1UsesBlack = (this.selectedBaseColor || 'BLACK') === 'BLACK';
    const playerUsesBlack = isP1 ? p1UsesBlack : !p1UsesBlack;
    const passiveName = playerUsesBlack ? '【黒石】魔導の浸食' : '【白石】聖光の守護';
    const passiveDesc = playerUsesBlack ? '連鎖時CT短縮＆敵遅延' : '状態異常25%軽減＆外周強化';
    this.ctx.fillStyle = playerUsesBlack ? '#38bdf8' : '#fbbf24';
    this.ctx.font = 'bold 12px sans-serif';
    this.ctx.fillText(`✨ ${passiveName}`, x + 95, y + 434);
    this.ctx.fillStyle = '#94a3b8';
    this.ctx.font = '10px sans-serif';
    this.ctx.fillText(passiveDesc, x + 95, y + 450);
    if (isP1) {
      const s = this.skins[this.equippedSkinId];
      if (s && s.passiveName) {
        this.ctx.fillStyle = '#facc15';
        this.ctx.fillText(`属性: ${s.passiveName.slice(0, 9)}`, x + 95, y + 466);
      }
    }
  }

  drawBoard() {
    const cx = this.canvas.width / 2;
    const cy = this.canvas.height / 2 + 25;
    const boardPx = 480;
    const cellSize = boardPx / this.gridSize;
    const startX = cx - boardPx / 2;
    const startY = cy - boardPx / 2;

    const theme = this.boardThemes[this.equippedBoardId] || this.boardThemes['DEFAULT'];

    // ★3D立体モード時：古代石板×サイバー台座の3D奥行きベベル＆ネオンアンダーグローを描画
    if (this.is3DView) {
      this.ctx.save();
      this.ctx.fillStyle = 'rgba(0, 0, 0, 0.72)';
      this.ctx.fillRect(startX - 14, startY + 6, boardPx + 28, boardPx + 26);

      // 立体側面台座 (下側の厚み)
      const bevelGrad = this.ctx.createLinearGradient(startX, startY + boardPx + 10, startX, startY + boardPx + 26);
      bevelGrad.addColorStop(0, this.isClimaxActive ? '#7f1d1d' : '#1e293b');
      bevelGrad.addColorStop(1, '#020617');
      this.ctx.fillStyle = bevelGrad;
      this.ctx.beginPath();
      this.ctx.moveTo(startX - 12, startY + boardPx + 10);
      this.ctx.lineTo(startX + boardPx + 12, startY + boardPx + 10);
      this.ctx.lineTo(startX + boardPx + 20, startY + boardPx + 24);
      this.ctx.lineTo(startX - 20, startY + boardPx + 24);
      this.ctx.closePath();
      this.ctx.fill();
      this.ctx.strokeStyle = this.isClimaxActive ? '#ef4444' : '#00f0ff';
      this.ctx.lineWidth = 1.5;
      this.ctx.stroke();
      this.ctx.restore();
    }

    this.ctx.fillStyle = '#0f172a';
    this.ctx.strokeStyle = this.isClimaxActive ? '#ef4444' : theme.frame;
    this.ctx.lineWidth = 8;
    this.ctx.strokeRect(startX - 10, startY - 10, boardPx + 20, boardPx + 20);
    this.ctx.fillRect(startX - 10, startY - 10, boardPx + 20, boardPx + 20);

    for (let r = 0; r < this.gridSize; r++) {
      for (let c = 0; c < this.gridSize; c++) {
        const x = startX + c * cellSize;
        const y = startY + r * cellSize;
        const cell = this.board[r][c];

        this.ctx.fillStyle = (r + c) % 2 === 0 ? theme.cellA : theme.cellB;
        this.ctx.fillRect(x + 1, y + 1, cellSize - 2, cellSize - 2);

        const minArea = this.gridSize === 10 ? 2 : 1;
        const maxArea = this.gridSize === 10 ? 7 : 6;
        if (r >= minArea && r <= maxArea && c >= minArea && c <= maxArea) {
          this.ctx.fillStyle = theme.center;
          this.ctx.fillRect(x + 1, y + 1, cellSize - 2, cellSize - 2);
        }

        if ((this.mode === 'VS_CPU' || this.mode === 'DUNGEON') && this.canPlace(r, c, this.p1.color, this.p1.nextItem) && this.p1.cooldown <= 0) {
          this.ctx.strokeStyle = 'rgba(0, 240, 255, 0.45)';
          this.ctx.lineWidth = 2;
          this.ctx.strokeRect(x + 3, y + 3, cellSize - 6, cellSize - 6);
        }

        // --- 【大改良】天空光柱ビーコン ＆ 回転ターゲット魔法陣 ---
        const it = this.itemsOnBoard.find(item => item.r === r && item.c === c);
        if (it) {
          if (it.dropTimer > 0) {
            const progress = 1 - (it.dropTimer / 2.8);
            const cellCx = x + cellSize / 2;
            const cellCy = y + cellSize / 2;

            // 1. 天空から降り注ぐ垂直光柱 (ビーコンライト)
            const bGrad = this.ctx.createLinearGradient(cellCx, 0, cellCx, cellCy);
            bGrad.addColorStop(0, 'rgba(245, 158, 11, 0.1)');
            bGrad.addColorStop(0.7, 'rgba(245, 158, 11, 0.45)');
            bGrad.addColorStop(1, 'rgba(251, 191, 36, 0.85)');
            this.ctx.fillStyle = bGrad;
            this.ctx.fillRect(cellCx - 14, 0, 28, cellCy);

            // 2. 床の回転ターゲット魔法陣
            this.ctx.save();
            this.ctx.translate(cellCx, cellCy);
            this.ctx.rotate(progress * Math.PI * 4);
            this.ctx.strokeStyle = '#f59e0b';
            this.ctx.lineWidth = 3;
            this.ctx.strokeRect(-cellSize*0.4, -cellSize*0.4, cellSize*0.8, cellSize*0.8);
            this.ctx.beginPath();
            this.ctx.arc(0, 0, cellSize*0.45, 0, Math.PI * 2);
            this.ctx.stroke();
            this.ctx.restore();

            // 3. アイテム落下アイコン ＆ カウントダウン
            const dropY = cellCy - (1 - progress) * 180;
            this.ctx.font = `${cellSize * 0.65}px sans-serif`;
            this.ctx.textAlign = 'center';
            this.ctx.textBaseline = 'middle';
            this.ctx.fillText(it.type.icon, cellCx, dropY);

            // 落下警報テキスト
            this.ctx.fillStyle = '#facc15';
            this.ctx.font = 'bold 12px sans-serif';
            this.ctx.fillText(`▼ ${(it.dropTimer).toFixed(1)}s`, cellCx, cellCy + cellSize * 0.4);
          } else {
            // 着弾済みアイテム
            this.ctx.font = `${cellSize * 0.6}px sans-serif`;
            this.ctx.textAlign = 'center';
            this.ctx.textBaseline = 'middle';
            this.ctx.fillText(it.type.icon, x + cellSize / 2, y + cellSize / 2);
          }
        }

        // オンラインゲスト(2P)時またはCPU対戦時の置けるマスガイド表示
        if (this.mode === 'PVP_ONLINE') {
          const myP = this.onlineRole === 'GUEST' ? this.p2 : this.p1;
          if (this.canPlace(r, c, myP.color, myP.nextItem) && myP.cooldown <= 0) {
            this.ctx.strokeStyle = this.onlineRole === 'GUEST' ? 'rgba(251, 191, 36, 0.45)' : 'rgba(0, 240, 255, 0.45)';
            this.ctx.lineWidth = 2;
            this.ctx.strokeRect(x + 3, y + 3, cellSize - 6, cellSize - 6);
          }
        }

        if (cell.color !== 0) {
          this.drawStone(x + cellSize / 2, y + cellSize / 2, (cellSize / 2 - 4) * cell.scale, cell.color, cell.isGold, cell.scale, cell);
        }

        if (this.p1.cursor.r === r && this.p1.cursor.c === c) {
          this.ctx.strokeStyle = '#00f0ff';
          this.ctx.lineWidth = 3;
          this.ctx.strokeRect(x + 2, y + 2, cellSize - 4, cellSize - 4);
        }

        if (this.p2.cursor.r === r && this.p2.cursor.c === c) {
          this.ctx.strokeStyle = '#f59e0b';
          this.ctx.lineWidth = 3;
          this.ctx.strokeRect(x + 4, y + 4, cellSize - 8, cellSize - 8);
        }
      }
    }
  }

  drawStone(cx, cy, radius, color, isGold, scale = 1.0, cell = null) {
    this.ctx.save();

    // ★Zero-Lag 3D立体円柱 ＆ 放物線ジャンプ180度宙返りアニメーション
    if (this.is3DView) {
      let renderColor = color;
      let scaleX = 1.0;
      let jumpLift = Math.max(0, (scale - 1.0) * 16);

      if (cell && cell.flipTimer > 0) {
        if (cell.flipDelay > 0) {
          renderColor = cell.prevColor || color;
        } else {
          const dur = cell.flipDur || 0.34;
          const progress = Math.max(0, Math.min(1, 1.0 - (cell.flipTimer / dur)));
          const cosVal = Math.cos(progress * Math.PI);
          scaleX = Math.max(0.08, Math.abs(cosVal)); // 空中90度でエッジになる3D回転
          jumpLift = Math.sin(progress * Math.PI) * 22; // 放物線ジャンプ高度
          renderColor = progress < 0.5 ? (cell.prevColor || color) : color;
        }
      }

      // 1) 盤面に落ちる3Dダイナミック・ドロップシャドウ
      this.ctx.fillStyle = 'rgba(0, 0, 0, 0.55)';
      this.ctx.beginPath();
      this.ctx.ellipse(
        cx + 2.5 + jumpLift * 0.18,
        cy + 4.5 + jumpLift * 0.24,
        Math.max(2, radius * scaleX * 0.96),
        Math.max(2, radius * 0.92),
        0, 0, Math.PI * 2
      );
      this.ctx.fill();

      // 2) 石の浮き上がり＆3D回転変換
      const drawY = cy - jumpLift;
      this.ctx.translate(cx, drawY);
      this.ctx.scale(scaleX, 1.0);

      // 3) 3D円柱の側面リム（石の立体的な厚み）
      const rimThickness = Math.max(3.5, 4.5 + jumpLift * 0.1);
      const skinForRim = this.skins[this.equippedSkinId] || this.skins['DEFAULT'];
      const stRim = (renderColor === P1_COLOR) ? skinForRim.p1 : skinForRim.p2;
      this.ctx.fillStyle = isGold ? '#713f12' : stRim.grad2;
      this.ctx.strokeStyle = isGold ? '#eab308' : stRim.stroke;
      this.ctx.lineWidth = 1.5;
      this.ctx.beginPath();
      this.ctx.arc(0, rimThickness, radius, 0, Math.PI * 2);
      this.ctx.fill();
      this.ctx.stroke();

      // 元の描画ロジックをそのまま使えるよう (-cx, -cy) オフセット
      this.ctx.translate(-cx, -cy);
      color = renderColor;
    }

    this.ctx.beginPath();
    this.ctx.arc(cx, cy, radius, 0, Math.PI * 2);

    if (isGold) {
      const grad = this.ctx.createRadialGradient(cx - radius*0.3, cy - radius*0.3, 2, cx, cy, radius);
      grad.addColorStop(0, '#fef08a');
      grad.addColorStop(0.5, '#eab308');
      grad.addColorStop(1, '#854d0e');
      this.ctx.fillStyle = grad;
      this.ctx.fill();
      this.ctx.strokeStyle = '#fef08a';
      this.ctx.lineWidth = 3;
      this.ctx.stroke();

      this.ctx.fillStyle = '#ffffff';
      this.ctx.font = `${radius * 0.9}px sans-serif`;
      this.ctx.textAlign = 'center';
      this.ctx.textBaseline = 'middle';
      this.ctx.fillText('👑', cx, cy);
    } else {
      const skin = this.skins[this.equippedSkinId] || this.skins['DEFAULT'];
      const st = (color === P1_COLOR) ? skin.p1 : skin.p2;

      const grad = this.ctx.createRadialGradient(cx - radius*0.3, cy - radius*0.3, 2, cx, cy, radius);
      grad.addColorStop(0, st.grad0);
      grad.addColorStop(0.7, st.grad1);
      grad.addColorStop(1, st.grad2);
      this.ctx.fillStyle = grad;
      this.ctx.fill();
      this.ctx.strokeStyle = st.stroke;
      this.ctx.lineWidth = 2.5;
      this.ctx.stroke();

      // 内側の魔導コア発光
      this.ctx.fillStyle = st.core;
      this.ctx.beginPath();
      this.ctx.arc(cx, cy, radius * 0.35, 0, Math.PI * 2);
      this.ctx.fill();

      // --- 【有機的もわもわオーラ描画】 ---
      const nowSec = performance.now() / 1000;
      const auraLv = this.skinAuraLevel[this.equippedSkinId] || 1;

      // レアリティまたはオーラレベルに応じた「もわもわ煙炎」
      if (!this.isPvpFairMode() && (scale > 1.05 || isGold) && (skin.rarity >= 5 || auraLv >= 2)) {
        const numLobes = skin.rarity === 6 ? 6 : (skin.rarity === 5 ? 4 : 3);
        const maxDist = radius * (skin.rarity === 6 ? 1.55 : (skin.rarity === 5 ? 1.35 : 1.2));

        for (let i = 0; i < numLobes; i++) {
          const angle = (Math.PI * 2 / numLobes) * i + nowSec * (i % 2 === 0 ? 1.8 : -1.5);
          const pulse = Math.sin(nowSec * 3.5 + i * 1.5) * (radius * 0.22);
          const lx = cx + Math.cos(angle) * (radius * 0.45 + pulse);
          const ly = cy + Math.sin(angle) * (radius * 0.45 + pulse);

          const auraGrad = this.ctx.createRadialGradient(lx, ly, 2, cx, cy, maxDist);
          const aColor = skin.rarity === 6 
            ? (i % 2 === 0 ? 'rgba(0, 240, 255, 0.45)' : 'rgba(236, 72, 153, 0.45)')
            : (skin.rarity === 5 ? (color === P1_COLOR ? 'rgba(168, 85, 247, 0.4)' : 'rgba(245, 158, 11, 0.4)') : 'rgba(56, 189, 248, 0.25)');
          
          auraGrad.addColorStop(0, aColor);
          auraGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
          this.ctx.fillStyle = auraGrad;
          this.ctx.beginPath();
          this.ctx.arc(cx, cy, maxDist, 0, Math.PI * 2);
          this.ctx.fill();
        }
      }

      // 【★6 LR 創世神竜専用】回転する古代魔導陣環 ＆ 虹彩リング
      if (skin.rarity === 6) {
        this.ctx.save();
        this.ctx.translate(cx, cy);
        this.ctx.rotate(nowSec * 2);
        this.ctx.strokeStyle = color === P1_COLOR ? '#ec4899' : '#facc15';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.arc(0, 0, radius * 1.15, 0, Math.PI * 2);
        this.ctx.stroke();
        this.ctx.strokeRect(-radius * 0.65, -radius * 0.65, radius * 1.3, radius * 1.3);
        this.ctx.restore();
      } else if (skin.rarity === 5 || auraLv >= 3) {
        // ★5 SSR専用の光芒フレーム
        this.ctx.save();
        this.ctx.translate(cx, cy);
        this.ctx.rotate(nowSec * 1.2);
        this.ctx.strokeStyle = st.core;
        this.ctx.lineWidth = 1.5;
        this.ctx.strokeRect(-radius * 0.55, -radius * 0.55, radius * 1.1, radius * 1.1);
        this.ctx.restore();
      }
    }
    this.ctx.restore();
  }

  // --- 特殊VFX要素の描画 ---
  drawVfxElements() {
    // 1. ブラックホール描画
    this.blackHoles.forEach(bh => {
      this.ctx.save();
      const alpha = bh.life / bh.maxLife;
      const curRadius = bh.radius * (1 - alpha * 0.2);
      
      const bhGrad = this.ctx.createRadialGradient(bh.x, bh.y, 10, bh.x, bh.y, curRadius);
      bhGrad.addColorStop(0, '#000000');
      bhGrad.addColorStop(0.4, 'rgba(88, 28, 135, 0.9)');
      bhGrad.addColorStop(0.8, 'rgba(168, 85, 247, 0.4)');
      bhGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      
      this.ctx.fillStyle = bhGrad;
      this.ctx.beginPath();
      this.ctx.arc(bh.x, bh.y, curRadius, 0, Math.PI * 2);
      this.ctx.fill();

      // 事象の地平面リング
      this.ctx.strokeStyle = '#c084fc';
      this.ctx.lineWidth = 3;
      this.ctx.beginPath();
      this.ctx.arc(bh.x, bh.y, curRadius * 0.5, 0, Math.PI * 2);
      this.ctx.stroke();
      this.ctx.restore();
    });

    // 2. 魔法陣ペイント描画
    this.magicCircles.forEach(mc => {
      this.ctx.save();
      const alpha = mc.life / mc.maxLife;
      this.ctx.translate(mc.x, mc.y);
      this.ctx.rotate((1 - alpha) * Math.PI * 3);
      this.ctx.strokeStyle = mc.color;
      this.ctx.globalAlpha = alpha;
      this.ctx.lineWidth = 4;
      this.ctx.beginPath();
      this.ctx.arc(0, 0, mc.radius * (1 - alpha * 0.3), 0, Math.PI * 2);
      this.ctx.stroke();
      this.ctx.strokeRect(-mc.radius*0.6, -mc.radius*0.6, mc.radius*1.2, mc.radius*1.2);
      this.ctx.restore();
    });

    // 3. 飛翔エネルギー球 (盤面 -> 手元スロット)
    this.flyingOrbs.forEach(orb => {
      this.ctx.save();
      const curX = orb.x + (orb.targetX - orb.x) * orb.progress;
      const curY = orb.y + (orb.targetY - orb.y) * orb.progress - Math.sin(orb.progress * Math.PI) * 70;
      
      this.ctx.fillStyle = orb.color;
      this.ctx.shadowColor = orb.color;
      this.ctx.shadowBlur = 20;
      this.ctx.beginPath();
      this.ctx.arc(curX, curY, 14, 0, Math.PI * 2);
      this.ctx.fill();

      this.ctx.font = '22px sans-serif';
      this.ctx.textAlign = 'center';
      this.ctx.textBaseline = 'middle';
      this.ctx.fillText(orb.icon, curX, curY);
      this.ctx.restore();
    });

    // 4. アイテムGETポップアップ
    this.itemGetPopups.forEach(pop => {
      this.ctx.save();
      const alpha = pop.life / pop.maxLife;
      this.ctx.fillStyle = pop.color;
      this.ctx.shadowColor = '#000000';
      this.ctx.shadowBlur = 10;
      this.ctx.globalAlpha = alpha;
      this.ctx.font = 'bold 22px sans-serif';
      this.ctx.textAlign = 'center';
      this.ctx.fillText(`${pop.icon} ${pop.text}`, pop.x, pop.y);
      this.ctx.restore();
    });
  }

  drawButton(x, y, w, h, text, bg, isPrimary = false) {
    this.ctx.save();
    this.ctx.fillStyle = bg;
    this.ctx.strokeStyle = isPrimary ? '#ffffff' : '#475569';
    this.ctx.lineWidth = isPrimary ? 3 : 1;
    this.ctx.fillRect(x, y, w, h);
    this.ctx.strokeRect(x, y, w, h);

    this.ctx.fillStyle = '#ffffff';
    this.ctx.font = 'bold 18px sans-serif';
    this.ctx.textAlign = 'center';
    this.ctx.textBaseline = 'middle';
    this.ctx.fillText(text, x + w / 2, y + h / 2);
    this.ctx.restore();
  }

  // 残り30秒の特別大逆転システム（3大奇跡）
  applySuperMiracle(loser, miracleType) {
    this.screenFlash = 0.8;
    this.triggerScreenShake(30);
    audio.playLightningBoom();

    if (miracleType === 'COLOR_SWAP') {
      // 1. 【運命反転 (Color Swap)】: 全盤面の自分と相手の石の色を一斉反転！
      for (let r = 0; r < this.gridSize; r++) {
        for (let c = 0; c < this.gridSize; c++) {
          const cell = this.board[r][c];
          if (cell.color === P1_COLOR) {
            cell.color = P2_COLOR;
            cell.scale = 1.4;
          } else if (cell.color === P2_COLOR) {
            cell.color = P1_COLOR;
            cell.scale = 1.4;
          }
        }
      }
      this.updateScores();
      this.triggerCutIn('🌌 REVERSE DESTINY!!', '運命反転！全盤面の石の色が完全入れ替わり！', '#c084fc');
      this.showBanner(`🌌 奇跡発動！【運命反転】全盤面の色が完全反転！`, '#a855f7', 3.5);
    } else if (miracleType === 'GIGA_BOMB') {
      // 2. 【超巨大ギガボム】: 盤面中央から円形範囲（半径3マス）を大爆砕・更地化！
      const mid = (this.gridSize - 1) / 2;
      const blastRadius = 1.85; // 3.2から1.85へ適正化！中央付近の約8〜12マスを更地化
      let clearCount = 0;

      for (let r = 0; r < this.gridSize; r++) {
        for (let c = 0; c < this.gridSize; c++) {
          const dist = Math.hypot(r - mid, c - mid);
          if (dist <= blastRadius) {
            this.board[r][c].color = 0;
            this.board[r][c].isGold = false;
            this.addSkinPlacementVfx(r, c, loser.color, 'INFERNO');
            clearCount++;
          }
        }
      }
      this.updateScores();
      this.triggerCutIn('💥 GIGA BOMB BURST!!', `超巨大ギガボム着弾！中央円形${clearCount}マスを消滅爆砕！`, '#ef4444');
      this.showBanner(`💥 奇跡発動！【ギガボム】中央円形${clearCount}マスを消滅爆砕！`, '#ef4444', 3.5);
      audio.playNoiseHit(0.5, 380, 1.3);
    } else if (miracleType === 'HASTE_BURST') {
      // 3. 【神速覚醒・CT半減】: 負けてる側のクールダウンを10秒間半分に！
      loser.hasteTimer = 10.0;
      this.triggerCutIn('⚡ HASTE OVERDRIVE!!', `神速覚醒！劣勢の${loser.name}のCTが10秒間半減！`, '#facc15');
      this.showBanner(`⚡ 奇跡発動！【神速覚醒】劣勢の${loser.name}のCTが10秒間半減！`, '#facc15', 3.5);
    }
  }

  drawPauseModal() {
    const ctx = this.ctx;
    const w = this.canvas.width;
    const h = this.canvas.height;

    // 半透明背景暗転
    ctx.save();
    ctx.fillStyle = 'rgba(2, 6, 23, 0.88)';
    ctx.fillRect(0, 0, w, h);

    // ダイアログボックス
    const boxW = 500;
    const boxH = 420;
    const boxX = (w - boxW) / 2;
    const boxY = (h - boxH) / 2;

    ctx.fillStyle = '#0f172a';
    ctx.fillRect(boxX, boxY, boxW, boxH);
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 3;
    ctx.strokeRect(boxX, boxY, boxW, boxH);

    // タイトル
    ctx.textAlign = 'center';
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 34px Cinzel, sans-serif';
    ctx.fillText('⏸️ PAUSE (一時停止中)', w / 2, boxY + 55);

    // 現在の対戦情報
    ctx.fillStyle = '#94a3b8';
    ctx.font = '17px sans-serif';
    let info = '';
    if (this.mode === 'DUNGEON') {
      const stage = DUNGEON_STAGES[this.dungeonFloor] || DUNGEON_STAGES[1];
      if (this.dungeonSubStage === 'MINION') {
        info = `STAGE ${this.dungeonFloor}-1 [前哨戦: ${stage.minion.name}]`;
      } else if (this.dungeonSubStage === 'ELITE') {
        info = `STAGE ${this.dungeonFloor}-2 [精鋭戦: ${stage.elite.name}]`;
      } else {
        info = `STAGE ${this.dungeonFloor}-3 [大ボス戦: ${stage.boss.name}]`;
      }
    } else if (this.mode === 'PVP_ONLINE') {
      info = `🌐 P2Pオンライン対戦 [ROOM: ${this.onlineRoomId || 'ONLINE'}]`;
    } else if (this.isPvpFairMode()) {
      info = '👥 ２人対戦 (パッシブなし・フェア勝負)';
    } else {
      info = '🤖 CPU練習対決';
    }
    ctx.fillText(info, w / 2, boxY + 98);

    // スコアと残り時間
    const m = Math.floor(this.timeLeft / 60);
    const s = Math.floor(this.timeLeft % 60);
    ctx.fillStyle = '#facc15';
    ctx.font = 'bold 22px monospace';
    ctx.fillText(`⏱️ 残り時間: ${m}:${s < 10 ? '0' : ''}${s}  |  スコア: 1P ${this.p1.score} - ${this.p2.score} 2P`, w / 2, boxY + 138);

    // ボタン3つ
    // 1. 再開 (boxX + 60, boxY + 175, 380, 52)
    this.drawButton(boxX + 60, boxY + 175, 380, 52, '▶️ 決闘再開 (RESUME / Esc)', '#0284c7', true);

    // 2. 音声ミュート切替 (boxX + 60, boxY + 245, 380, 50)
    const muteText = audio.isMuted ? '🔇 音声: OFF ➔ ONにする' : '🔊 音声: ON ➔ ミュートにする';
    this.drawButton(boxX + 60, boxY + 245, 380, 50, muteText, audio.isMuted ? '#475569' : '#10b981', true);

    // 3. 降参・タイトルへ (boxX + 60, boxY + 312, 380, 50)
    this.drawButton(boxX + 60, boxY + 312, 380, 50, '🏳️ 降参してタイトルへ (GIVE UP)', '#dc2626', true);

    ctx.restore();
  }

  drawResultScreen() {
    const w = this.canvas.width;
    const h = this.canvas.height;
    const cx = w / 2;

    this.ctx.fillStyle = 'rgba(2, 6, 23, 0.96)';
    this.ctx.fillRect(0, 0, w, h);

    // 勝敗判定ロジック
    let winner = null;
    let winReason = '';
    if (this.p1.score > this.p2.score) {
      winner = this.p1.name;
      winReason = `枚数制圧勝利 (${this.p1.score}枚 vs ${this.p2.score}枚)`;
    } else if (this.p2.score > this.p1.score) {
      winner = this.p2.name;
      winReason = `枚数制圧勝利 (${this.p2.score}枚 vs ${this.p1.score})`;
    } else {
      let p1Badges = 0, p2Badges = 0;
      if (this.stats.p1Moves > this.stats.p2Moves) p1Badges++; else p2Badges++;
      if (this.stats.p1Items > this.stats.p2Items) p1Badges++; else p2Badges++;
      if (this.stats.p1Overwrites > this.stats.p2Overwrites) p1Badges++; else p2Badges++;
      if (this.stats.p1Corners > this.stats.p2Corners) p1Badges++; else p2Badges++;
      if (this.stats.p1MaxFlips > this.stats.p2MaxFlips) p1Badges++; else p2Badges++;

      if (p1Badges > p2Badges) {
        winner = this.p1.name;
        winReason = `同点判定勝ち！5大アワード ${p1Badges}冠 vs ${p2Badges}冠`;
      } else {
        winner = this.p2.name;
        winReason = `同点判定勝ち！5大アワード ${p2Badges}冠 vs ${p1Badges}冠`;
      }
    }

    // 報酬・BET精算 (1度のみ実行)
    if (!this.matchResultAwarded) {
      this.matchResultAwarded = true;
      if (this.mode === 'DUNGEON') {
        // ダンジョン進行判定
        if (winner === this.p1.name) {
          this.p1Gold += 350;
          this.lastResultBanner = `🏆 FLOOR ${this.dungeonFloor} 突破！報酬 +350 G 獲得！`;
        } else {
          this.lastResultBanner = `💀 DUNGEON FAILED... 魔導ダンジョン敗北`;
        }
      } else if (this.currentBet > 0) {
        if (winner === this.p1.name) {
          this.p1Gold += this.currentBet;
          this.p2Gold = Math.max(0, this.p2Gold - this.currentBet);
          this.lastResultBanner = `🔥 1Pが 2Pから賭け金 ${this.currentBet} G を総取り！！`;
        } else if (winner === this.p2.name) {
          this.p2Gold += this.currentBet;
          this.p1Gold = Math.max(0, this.p1Gold - this.currentBet);
          this.lastResultBanner = `🔥 2Pが 1Pから賭け金 ${this.currentBet} G を総取り！！`;
        } else {
          this.lastResultBanner = `🤝 引き分け！賭け金 ${this.currentBet} G は両者に返還。`;
        }
        this.p1Gold += 150;
        this.p2Gold += 150;
      } else {
        this.lastResultBanner = `🎉 決闘完了！両者に参加賞 +150 G！`;
        this.p1Gold += 150;
        this.p2Gold += 150;
      }
      this.saveUserData();
    }

    // --- 上部ヘッダー (y: 35〜130) ---
    this.ctx.textAlign = 'center';
    this.ctx.fillStyle = '#ffffff';
    this.ctx.font = '900 44px sans-serif';
    this.ctx.shadowColor = '#00f0ff';
    this.ctx.shadowBlur = 20;
    this.ctx.fillText('DUEL FINISH!!', cx, 52);
    this.ctx.shadowBlur = 0;

    this.ctx.font = 'bold 28px sans-serif';
    this.ctx.fillStyle = winner === this.p1.name ? '#00f0ff' : '#f59e0b';
    this.ctx.fillText(`🏆 WINNER: 【${winner}】！`, cx, 92);

    this.ctx.font = 'bold 16px sans-serif';
    this.ctx.fillStyle = '#fde047';
    this.ctx.fillText(winReason, cx, 122);

    // --- 左パネル: 決闘戦績・アワード (幅540px, x: 70) ---
    const p1X = 70, pY = 145, pW = 540, pH = 430;
    this.ctx.fillStyle = 'rgba(15, 23, 42, 0.9)';
    this.ctx.strokeStyle = '#3b82f6';
    this.ctx.lineWidth = 2;
    this.ctx.fillRect(p1X, pY, pW, pH);
    this.ctx.strokeRect(p1X, pY, pW, pH);

    this.ctx.textAlign = 'left';
    this.ctx.fillStyle = '#38bdf8';
    this.ctx.font = 'bold 18px sans-serif';
    this.ctx.fillText('📊 決闘戦績 ＆ 5大アワード', p1X + 24, pY + 34);

    this.ctx.strokeStyle = 'rgba(148, 163, 184, 0.25)';
    this.ctx.lineWidth = 1;
    this.ctx.beginPath();
    this.ctx.moveTo(p1X + 20, pY + 48);
    this.ctx.lineTo(p1X + pW - 20, pY + 48);
    this.ctx.stroke();

    const statRows = [
      `⚡ 総手数: 1P ${this.stats.p1Moves}手  /  2P ${this.stats.p2Moves}手`,
      `🧲 アイテム獲得: 1P ${this.stats.p1Items}個  /  2P ${this.stats.p2Items}個`,
      `💥 上書き成功: 1P ${this.stats.p1Overwrites}回  /  2P ${this.stats.p2Overwrites}回`,
      `🏰 四隅支配: 1P ${this.stats.p1Corners}箇所  /  2P ${this.stats.p2Corners}箇所`,
      `🌊 最大連鎖数: 1P ${this.stats.p1MaxFlips}枚  /  2P ${this.stats.p2MaxFlips}枚`
    ];

    this.ctx.fillStyle = '#cbd5e1';
    this.ctx.font = '15px sans-serif';
    statRows.forEach((sText, sIdx) => {
      this.ctx.fillText(sText, p1X + 28, pY + 85 + sIdx * 34);
    });

    // スコア＆ランクボックス (一人プレイ / ダンジョン時)
    if (this.mode === 'VS_CPU' || this.mode === 'DUNGEON') {
      const sBoxY = pY + 265;
      this.ctx.fillStyle = 'rgba(2, 6, 23, 0.85)';
      this.ctx.strokeStyle = '#facc15';
      this.ctx.lineWidth = 1.5;
      this.ctx.fillRect(p1X + 20, sBoxY, pW - 40, 140);
      this.ctx.strokeRect(p1X + 20, sBoxY, pW - 40, 140);

      let rank = 'C', rankColor = '#94a3b8', rankTitle = '初級挑戦者';
      if (this.currentScore >= 35000) { rank = 'S'; rankColor = '#facc15'; rankTitle = '神話級マスター'; }
      else if (this.currentScore >= 22000) { rank = 'A'; rankColor = '#38bdf8'; rankTitle = '上級オセロ魔導士'; }
      else if (this.currentScore >= 14000) { rank = 'B'; rankColor = '#10b981'; rankTitle = '中級決闘者'; }

      if (this.currentScore > this.highScore) {
        this.highScore = this.currentScore;
        this.isNewHighScore = true;
        this.saveUserData();
      }

      this.ctx.textAlign = 'left';
      this.ctx.fillStyle = '#ffffff';
      this.ctx.font = 'bold 20px sans-serif';
      this.ctx.fillText(`FINAL SCORE: ${this.currentScore.toLocaleString()} pts`, p1X + 40, sBoxY + 40);

      this.ctx.fillStyle = rankColor;
      this.ctx.font = '900 24px sans-serif';
      this.ctx.fillText(`RANK: [${rank}] ${rankTitle}`, p1X + 40, sBoxY + 80);

      if (this.isNewHighScore) {
        this.ctx.fillStyle = '#ef4444';
        this.ctx.font = 'bold 15px sans-serif';
        this.ctx.fillText(`🎉 NEW HIGH SCORE RECORD!! (+300G ボーナス)`, p1X + 40, sBoxY + 115);
      }
    }

    // --- 右パネル: 報酬精算 ＆ 所持金 (幅540px, x: 670) ---
    const p2X = 670;
    this.ctx.fillStyle = 'rgba(15, 23, 42, 0.9)';
    this.ctx.strokeStyle = '#f59e0b';
    this.ctx.lineWidth = 2;
    this.ctx.fillRect(p2X, pY, pW, pH);
    this.ctx.strokeRect(p2X, pY, pW, pH);

    this.ctx.textAlign = 'left';
    this.ctx.fillStyle = '#fbbf24';
    this.ctx.font = 'bold 18px sans-serif';
    this.ctx.fillText('💰 決闘報酬 ＆ 所持金精算', p2X + 24, pY + 34);

    this.ctx.strokeStyle = 'rgba(148, 163, 184, 0.25)';
    this.ctx.lineWidth = 1;
    this.ctx.beginPath();
    this.ctx.moveTo(p2X + 20, pY + 48);
    this.ctx.lineTo(p2X + pW - 20, pY + 48);
    this.ctx.stroke();

    // 決闘リザルトバナー
    this.ctx.textAlign = 'center';
    this.ctx.fillStyle = '#fde047';
    this.ctx.font = 'bold 20px sans-serif';
    this.ctx.fillText(this.lastResultBanner, p2X + pW / 2, pY + 95);

    this.ctx.fillStyle = '#94a3b8';
    this.ctx.font = '13px sans-serif';
    this.ctx.fillText('(基本参加賞: 両者に +150 G 加算完了)', p2X + pW / 2, pY + 125);

    // 1P & 2P ウォレットカード (横並び)
    const cardW = 230, cardH = 110, cardY = pY + 155;
    // 1P
    this.ctx.fillStyle = 'rgba(2, 6, 23, 0.85)';
    this.ctx.strokeStyle = '#00f0ff';
    this.ctx.lineWidth = 2;
    this.ctx.fillRect(p2X + 25, cardY, cardW, cardH);
    this.ctx.strokeRect(p2X + 25, cardY, cardW, cardH);
    this.ctx.textAlign = 'center';
    this.ctx.fillStyle = '#38bdf8';
    this.ctx.font = 'bold 14px sans-serif';
    this.ctx.fillText('1P (黒) 所持金', p2X + 25 + cardW / 2, cardY + 32);
    this.ctx.fillStyle = '#ffffff';
    this.ctx.font = '900 26px sans-serif';
    this.ctx.fillText(`💰 ${this.p1Gold.toLocaleString()} G`, p2X + 25 + cardW / 2, cardY + 76);

    // 2P
    this.ctx.fillStyle = 'rgba(2, 6, 23, 0.85)';
    this.ctx.strokeStyle = '#f59e0b';
    this.ctx.lineWidth = 2;
    this.ctx.fillRect(p2X + 285, cardY, cardW, cardH);
    this.ctx.strokeRect(p2X + 285, cardY, cardW, cardH);
    this.ctx.fillStyle = '#fbbf24';
    this.ctx.font = 'bold 14px sans-serif';
    this.ctx.fillText('2P (白) 所持金', p2X + 285 + cardW / 2, cardY + 32);
    this.ctx.fillStyle = '#ffffff';
    this.ctx.font = '900 26px sans-serif';
    this.ctx.fillText(`💰 ${this.p2Gold.toLocaleString()} G`, p2X + 285 + cardW / 2, cardY + 76);

    // ヒント案内
    this.ctx.textAlign = 'left';
    this.ctx.fillStyle = '#94a3b8';
    this.ctx.font = '13px sans-serif';
    this.ctx.fillText('💡 獲得したゴールドで「魔導ガチャ」から新スキンを獲得可能！', p2X + 30, pY + 315);
    this.ctx.fillText('✨ ガチャ被りでオーラがLv.1 ➔ Lv.2 ➔ Lv.3 MAXへ限界突破！', p2X + 30, pY + 345);
    this.ctx.fillText('🎰 ★6 レジェンドレア「創世神竜の極光」(1.5%) を目指せ！', p2X + 30, pY + 375);

    // --- 下部アクションボタンバー (y: 600, h: 54) ---
    if (this.mode === 'DUNGEON' && winner === this.p1.name && this.dungeonFloor < 5) {
      this.drawButton(cx - 200, 600, 400, 56, '🎁 能力選択へ進む (NEXT FLOOR)', '#7c3aed', true);
    } else {
      // 1.5秒誤爆ガード中の表示
      if (this.resultGuardTimer > 0) {
        this.drawButton(140, 600, 300, 56, `⏱ 確認中 (${this.resultGuardTimer.toFixed(1)}s)...`, '#334155');
      } else {
        this.drawButton(140, 600, 300, 56, '⚡ 再戦する (REMATCH - Space/R)', '#0284c7', true);
      }
      this.drawButton(490, 600, 300, 56, '🎰 魔導ガチャ (GACHA)', '#7c3aed', true);
      this.drawButton(840, 600, 300, 56, '🏠 タイトルへ戻る (TITLE)', '#1e293b');
    }
  }

  showBanner(text, color, duration = 1.5) {
    this.bannerText = text;
    this.bannerColor = color;
    this.bannerTimer = duration;
  }

  drawBanner() {
    const cx = this.canvas.width / 2;
    this.ctx.save();
    this.ctx.fillStyle = 'rgba(15, 23, 42, 0.94)';
    this.ctx.strokeStyle = this.bannerColor || '#00f0ff';
    this.ctx.lineWidth = 2;
    this.ctx.fillRect(cx - 380, 160, 760, 55);
    this.ctx.strokeRect(cx - 380, 160, 760, 55);

    this.ctx.textAlign = 'center';
    this.ctx.fillStyle = this.bannerColor || '#ffffff';
    this.ctx.font = 'bold 22px sans-serif';
    this.ctx.fillText(this.bannerText, cx, 196);
    this.ctx.restore();
  }

  addShockwave(r, c, color, maxRadius = 50) {
    const pos = this.cellToPixel(r, c);
    this.shockwaves.push({ x: pos.x, y: pos.y, radius: 5, maxRadius, color, alpha: 1.0 });
  }

  addLightning(r, c) {
    const pos = this.cellToPixel(r, c);
    this.lightningBolts.push({ x: pos.x, y: pos.y, life: 0.35 });
  }

  // スキン固有の配置VFX演出
  addFloatingText(text, color, x, y, scale = 1.0) {
    this.floatingTexts.push({
      text, color, x, y,
      life: 1.2, maxLife: 1.2,
      scale
    });
  }

  updateFloatingTexts(dt) {
    for (let i = this.floatingTexts.length - 1; i >= 0; i--) {
      const ft = this.floatingTexts[i];
      ft.life -= dt;
      ft.y -= dt * 32;
      if (ft.life <= 0) {
        this.floatingTexts.splice(i, 1);
      }
    }
  }

  drawFloatingTexts() {
    this.floatingTexts.forEach(ft => {
      this.ctx.save();
      const alpha = ft.life / ft.maxLife;
      this.ctx.globalAlpha = Math.max(0, alpha);
      this.ctx.fillStyle = ft.color;
      this.ctx.shadowColor = '#000000';
      this.ctx.shadowBlur = 8;
      this.ctx.font = `bold ${Math.floor(18 * ft.scale)}px sans-serif`;
      this.ctx.textAlign = 'center';
      this.ctx.fillText(ft.text, ft.x, ft.y);
      this.ctx.restore();
    });
  }

  // --- 劇的シネマティック・カットイン演出 ---
  triggerCutIn(text, sub, color = '#00f0ff') {
    this.cutIn = {
      text, sub, color,
      life: 1.35, maxLife: 1.35
    };
    audio.playLightningBoom();
    this.triggerScreenShake(22);
  }

  drawCutIn() {
    if (!this.cutIn || this.cutIn.life <= 0) return;
    const w = this.canvas.width;
    const h = this.canvas.height;
    const c = this.cutIn;
    // 【改善点①：盤面が透けて見えるシースルー透明ガラス仕様】
    const alpha = Math.min(0.85, (c.life / (c.maxLife * 0.25)) * 0.85);

    this.ctx.save();
    this.ctx.globalAlpha = alpha;

    // 水平カットイン帯 (スリム＆高透明度ガラスグラデーション)
    const bandH = 92;
    const bandY = h / 2 - bandH / 2;
    const bGrad = this.ctx.createLinearGradient(0, bandY, 0, bandY + bandH);
    bGrad.addColorStop(0, 'rgba(15, 23, 42, 0)');
    bGrad.addColorStop(0.2, 'rgba(15, 23, 42, 0.28)');
    bGrad.addColorStop(0.8, 'rgba(15, 23, 42, 0.28)');
    bGrad.addColorStop(1, 'rgba(15, 23, 42, 0)');
    this.ctx.fillStyle = bGrad;
    this.ctx.fillRect(0, bandY, w, bandH);

    // 繊細なネオンレーザー境界線（細く光らせて視界を遮らない）
    this.ctx.strokeStyle = c.color;
    this.ctx.lineWidth = 1.5;
    this.ctx.shadowColor = c.color;
    this.ctx.shadowBlur = 14;
    this.ctx.beginPath();
    this.ctx.moveTo(0, bandY + 8);
    this.ctx.lineTo(w, bandY + 8);
    this.ctx.moveTo(0, bandY + bandH - 8);
    this.ctx.lineTo(w, bandY + bandH - 8);
    this.ctx.stroke();

    // メイン極太テキスト (透明感のある鮮烈発光)
    this.ctx.textAlign = 'center';
    this.ctx.fillStyle = '#ffffff';
    this.ctx.font = '900 38px sans-serif';
    this.ctx.shadowColor = c.color;
    this.ctx.shadowBlur = 22;
    this.ctx.fillText(c.text, w / 2, h / 2 - 4);

    // サブタイトル
    this.ctx.fillStyle = c.color;
    this.ctx.font = 'bold 15px sans-serif';
    this.ctx.shadowBlur = 8;
    this.ctx.fillText(c.sub, w / 2, h / 2 + 26);

    this.ctx.restore();
  }

  addSkinPlacementVfx(r, c, color, skinId = 'DEFAULT') {
    const pos = this.cellToPixel(r, c);
    const pColor = color === P1_COLOR ? '#00f0ff' : '#fbbf24';

    switch (skinId) {
      case 'INFERNO': // 激しい炎・火の粉
        for (let i = 0; i < 14; i++) {
          const angle = Math.random() * Math.PI * 2;
          const speed = Math.random() * 110 + 40;
          this.particles.push({
            x: pos.x, y: pos.y,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed - 35, // 上昇気流
            color: Math.random() < 0.5 ? '#ef4444' : '#f97316',
            life: 0.5 + Math.random() * 0.3,
            maxLife: 0.8,
            type: 'EMBER'
          });
        }
        this.addShockwave(r, c, '#ef4444', 65);
        break;

      case 'OCEAN': // 水滴の飛沫 ＆ 拡大波紋
        for (let i = 0; i < 10; i++) {
          const angle = Math.random() * Math.PI * 2;
          const speed = Math.random() * 90 + 30;
          this.particles.push({
            x: pos.x, y: pos.y,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            color: Math.random() < 0.5 ? '#06b6d4' : '#34d399',
            life: 0.45 + Math.random() * 0.25,
            maxLife: 0.7,
            type: 'BUBBLE'
          });
        }
        this.addShockwave(r, c, '#06b6d4', 60);
        break;

      case 'SAKURA': // 優雅に舞い散る夜桜花弁
        for (let i = 0; i < 12; i++) {
          const angle = Math.random() * Math.PI * 2;
          const speed = Math.random() * 70 + 20;
          this.particles.push({
            x: pos.x, y: pos.y,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed * 0.5 + 20, // はらりと落ちる
            rot: Math.random() * Math.PI * 2,
            rotSpeed: (Math.random() - 0.5) * 8,
            color: Math.random() < 0.5 ? '#ec4899' : '#fbcfe8',
            life: 0.6 + Math.random() * 0.3,
            maxLife: 0.9,
            type: 'PETAL'
          });
        }
        this.addShockwave(r, c, '#f472b6', 55);
        break;

      case 'THUNDER': // 鋭利な青雷放電スパーク
        for (let i = 0; i < 12; i++) {
          const angle = Math.random() * Math.PI * 2;
          const speed = Math.random() * 140 + 60;
          this.particles.push({
            x: pos.x, y: pos.y,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            color: '#60a5fa',
            life: 0.35 + Math.random() * 0.2,
            maxLife: 0.55,
            type: 'LIGHTNING'
          });
        }
        this.addShockwave(r, c, '#38bdf8', 70);
        break;

      case 'CRYSTAL': // 宝石ダイヤモンドの幾何学プリズム
        for (let i = 0; i < 10; i++) {
          const angle = Math.random() * Math.PI * 2;
          const speed = Math.random() * 85 + 30;
          this.particles.push({
            x: pos.x, y: pos.y,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            rot: Math.random() * Math.PI,
            color: Math.random() < 0.5 ? '#5eead4' : '#f0fdf4',
            life: 0.5 + Math.random() * 0.3,
            maxLife: 0.8,
            type: 'PRISM'
          });
        }
        this.addShockwave(r, c, '#2dd4bf', 60);
        break;

      case 'MECHA': // 蒸気スチーム白煙 ＆ 鉄粉火花
        for (let i = 0; i < 12; i++) {
          const angle = Math.random() * Math.PI * 2;
          const speed = Math.random() * 75 + 25;
          this.particles.push({
            x: pos.x, y: pos.y,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed - 20,
            color: Math.random() < 0.6 ? '#cbd5e1' : '#f59e0b',
            life: 0.5 + Math.random() * 0.3,
            maxLife: 0.8,
            type: 'STEAM'
          });
        }
        this.addShockwave(r, c, '#f59e0b', 65);
        break;

      case 'RETRO': // 懐かしのドットピクセル四角破片
        for (let i = 0; i < 12; i++) {
          const angle = (Math.floor(Math.random() * 8) * Math.PI) / 4; // 8方向
          const speed = Math.random() * 100 + 40;
          this.particles.push({
            x: pos.x, y: pos.y,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            color: Math.random() < 0.5 ? '#22c55e' : '#f43f5e',
            life: 0.45 + Math.random() * 0.25,
            maxLife: 0.7,
            type: 'PIXEL'
          });
        }
        this.addShockwave(r, c, '#22c55e', 55);
        break;

      case 'VOID': // 暗黒重力渦パルス
        for (let i = 0; i < 16; i++) {
          const angle = Math.random() * Math.PI * 2;
          const speed = Math.random() * 100 + 35;
          this.particles.push({
            x: pos.x, y: pos.y,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            color: '#c084fc',
            life: 0.6 + Math.random() * 0.3,
            maxLife: 0.9,
            type: 'VORTEX'
          });
        }
        this.addShockwave(r, c, '#a855f7', 80);
        break;

      case 'SOLAR': // 太陽神の極光フレア光線
        for (let i = 0; i < 16; i++) {
          const angle = Math.random() * Math.PI * 2;
          const speed = Math.random() * 130 + 50;
          this.particles.push({
            x: pos.x, y: pos.y,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            color: '#facc15',
            life: 0.55 + Math.random() * 0.3,
            maxLife: 0.85,
            type: 'SOLAR'
          });
        }
        this.addShockwave(r, c, '#eab308', 85);
        break;

      case 'GENESIS': // 創世神竜の虹色極光フレア
        for (let i = 0; i < 22; i++) {
          const angle = Math.random() * Math.PI * 2;
          const speed = Math.random() * 150 + 60;
          this.particles.push({
            x: pos.x, y: pos.y,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            color: ['#ec4899', '#00f0ff', '#facc15', '#a855f7', '#34d399'][Math.floor(Math.random() * 5)],
            life: 0.65 + Math.random() * 0.35,
            maxLife: 1.0,
            type: 'SPARK'
          });
        }
        this.addShockwave(r, c, '#ec4899', 95);
        break;

      case 'CHRONOS': // 終焉冥王の深紅時計＆黒炎
        for (let i = 0; i < 20; i++) {
          const angle = Math.random() * Math.PI * 2;
          const speed = Math.random() * 130 + 40;
          this.particles.push({
            x: pos.x, y: pos.y,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed - 25,
            color: Math.random() < 0.6 ? '#f43f5e' : '#a855f7',
            life: 0.6 + Math.random() * 0.3,
            maxLife: 0.9,
            type: 'VORTEX'
          });
        }
        this.addShockwave(r, c, '#f43f5e', 90);
        break;

      default: // サイバー・ネオン
        for (let i = 0; i < 10; i++) {
          const angle = Math.random() * Math.PI * 2;
          const speed = Math.random() * 90 + 40;
          this.particles.push({
            x: pos.x, y: pos.y,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            color: pColor,
            life: 0.45 + Math.random() * 0.35,
            maxLife: 0.8,
            type: 'SPARK'
          });
        }
        this.addShockwave(r, c, pColor, 55);
        break;
    }
  }

  addSparks(r, c, color, count = 8) {
    const pos = this.cellToPixel(r, c);
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 90 + 40;
      this.particles.push({
        x: pos.x, y: pos.y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        color,
        life: 0.45 + Math.random() * 0.35,
        maxLife: 0.8
      });
    }
  }

  updateParticles(dt) {
    for (let i = this.shockwaves.length - 1; i >= 0; i--) {
      const sw = this.shockwaves[i];
      sw.radius += dt * 190;
      sw.alpha -= dt * 2.2;
      if (sw.alpha <= 0) this.shockwaves.splice(i, 1);
    }
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.x += p.vx * dt;
      p.y += p.vy * dt;
      p.life -= dt;
      if (p.life <= 0) this.particles.splice(i, 1);
    }
    for (let i = this.lightningBolts.length - 1; i >= 0; i--) {
      this.lightningBolts[i].life -= dt;
      if (this.lightningBolts[i].life <= 0) this.lightningBolts.splice(i, 1);
    }
  }

  drawParticles() {
    this.shockwaves.forEach(sw => {
      this.ctx.save();
      this.ctx.beginPath();
      this.ctx.arc(sw.x, sw.y, sw.radius, 0, Math.PI * 2);
      this.ctx.strokeStyle = sw.color;
      this.ctx.globalAlpha = Math.max(0, sw.alpha);
      this.ctx.lineWidth = 3;
      this.ctx.stroke();
      this.ctx.restore();
    });

    this.particles.forEach(p => {
      this.ctx.save();
      const alpha = Math.max(0, p.life / p.maxLife);
      this.ctx.globalAlpha = alpha;

      if (p.type === 'PETAL') {
        // 桜の花びら
        this.ctx.translate(p.x, p.y);
        this.ctx.rotate(p.rot || 0);
        this.ctx.fillStyle = p.color;
        this.ctx.beginPath();
        this.ctx.ellipse(0, 0, 7, 3.5, 0, 0, Math.PI * 2);
        this.ctx.fill();
      } else if (p.type === 'BUBBLE') {
        // 水滴バブル
        this.ctx.strokeStyle = p.color;
        this.ctx.lineWidth = 1.5;
        this.ctx.beginPath();
        this.ctx.arc(p.x, p.y, (1 - alpha) * 10 + 3, 0, Math.PI * 2);
        this.ctx.stroke();
      } else if (p.type === 'PRISM') {
        // クリスタルひし形
        this.ctx.translate(p.x, p.y);
        this.ctx.rotate(p.rot || 0);
        this.ctx.fillStyle = p.color;
        this.ctx.beginPath();
        this.ctx.moveTo(0, -6);
        this.ctx.lineTo(4, 0);
        this.ctx.lineTo(0, 6);
        this.ctx.lineTo(-4, 0);
        this.ctx.closePath();
        this.ctx.fill();
      } else if (p.type === 'PIXEL') {
        // レトロ角丸ドット
        this.ctx.fillStyle = p.color;
        this.ctx.fillRect(p.x - 3, p.y - 3, 6, 6);
      } else if (p.type === 'VORTEX' || p.type === 'SOLAR') {
        // 特殊グローオーブ
        this.ctx.fillStyle = p.color;
        this.ctx.shadowColor = p.color;
        this.ctx.shadowBlur = 10;
        this.ctx.beginPath();
        this.ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
        this.ctx.fill();
      } else {
        // デフォルト矩形
        this.ctx.fillStyle = p.color;
        this.ctx.fillRect(p.x - 2, p.y - 2, 4, 4);
      }
      this.ctx.restore();
    });
  }

  drawLightning() {
    this.lightningBolts.forEach(bolt => {
      this.ctx.save();
      this.ctx.strokeStyle = '#fef08a';
      this.ctx.lineWidth = 6;
      this.ctx.shadowColor = '#facc15';
      this.ctx.shadowBlur = 25;

      this.ctx.beginPath();
      this.ctx.moveTo(bolt.x, 0);
      let curX = bolt.x;
      let curY = 0;
      while (curY < bolt.y) {
        curX += (Math.random() - 0.5) * 45;
        curY += 25;
        this.ctx.lineTo(curX, Math.min(bolt.y, curY));
      }
      this.ctx.stroke();
      this.ctx.restore();
    });
  }

  cellToPixel(r, c) {
    const cx = this.canvas.width / 2;
    const cy = this.canvas.height / 2 + 25;
    const boardPx = 480;
    const cellSize = boardPx / this.gridSize;
    const startX = cx - boardPx / 2;
    const startY = cy - boardPx / 2;
    return {
      x: startX + c * cellSize + cellSize / 2,
      y: startY + r * cellSize + cellSize / 2
    };
  }

  pixelToCell(px, py) {
    const cx = this.canvas.width / 2;
    const cy = this.canvas.height / 2 + 25;
    const boardPx = 480;
    const cellSize = boardPx / this.gridSize;
    const startX = cx - boardPx / 2;
    const startY = cy - boardPx / 2;
    const c = Math.floor((px - startX) / cellSize);
    const r = Math.floor((py - startY) / cellSize);
    if (r >= 0 && r < this.gridSize && c >= 0 && c < this.gridSize) {
      return { r, c };
    }
    return null;
  }

  triggerScreenShake(amt) {
    this.screenShake = amt;
    const container = document.getElementById('game-container');
    if (container && container.style) {
      const sx = (Math.random() - 0.5) * amt;
      const sy = (Math.random() - 0.5) * amt;
      container.style.transform = `translate(${sx.toFixed(1)}px, ${sy.toFixed(1)}px)`;
      setTimeout(() => {
        if (container && container.style) container.style.transform = 'translate(0px, 0px)';
      }, 50);
    }
  }

  initEvents() {
    window.addEventListener('keyup', (e) => {
      delete this.keysDown[e.code];
    });
    // AIイラスト取り込み用ファイル入力ハンドラ
    const fileInput = document.getElementById('bossCustomImageInput');
    if (fileInput) {
      fileInput.addEventListener('change', (ev) => {
        if (ev.target.files && ev.target.files[0]) {
          const file = ev.target.files[0];
          const reader = new FileReader();
          reader.onload = (loadEv) => {
            const img = new Image();
            img.onload = () => {
              this.customBossImages[this.dungeonFloor] = img;
              try {
                localStorage.setItem(`duel_reversi_boss_${this.dungeonFloor}`, loadEv.target.result);
              } catch (err) {
                console.warn('LocalStorage save error:', err);
              }
              audio.playItemGet();
              this.showBanner('✨ AIイラストをボス画像として適用しました！', '#38bdf8', 1.5);
            };
            img.src = loadEv.target.result;
          };
          reader.readAsDataURL(file);
        }
      });
    }

    // ドラッグ＆ドロップで画像取り込み
    this.canvas.addEventListener('dragover', (e) => e.preventDefault());
    this.canvas.addEventListener('drop', (e) => {
      e.preventDefault();
      if (this.state === 'BOSS_INTRO' && e.dataTransfer.files && e.dataTransfer.files[0]) {
        const file = e.dataTransfer.files[0];
        if (file.type.startsWith('image/')) {
          const reader = new FileReader();
          reader.onload = (loadEv) => {
            const img = new Image();
            img.onload = () => {
              this.customBossImages[this.dungeonFloor] = img;
              try {
                localStorage.setItem(`duel_reversi_boss_${this.dungeonFloor}`, loadEv.target.result);
              } catch (err) {}
              audio.playItemGet();
              this.showBanner('✨ AIイラストをボス画像として適用しました！', '#38bdf8', 1.5);
            };
            img.src = loadEv.target.result;
          };
          reader.readAsDataURL(file);
        }
      }
    });

    window.addEventListener('keydown', (e) => {
      audio.init();

      if (this.state === 'TITLE') {
        if (e.code === 'Space' || e.code === 'Enter') {
          this.state = 'MODE_SELECT';
        }
        return;
      }

      if (this.state === 'MODE_SELECT') {
        if (e.code === 'Space' || e.code === 'Enter') {
          this.startMatch();
        }
        return;
      }

      if (this.state === 'DUNGEON_SKIN_SELECT') {
        const skinKeys = Object.keys(this.skins);
        if (e.code === 'KeyC' || e.code === 'Tab') {
          e.preventDefault();
          this.selectedBaseColor = (this.selectedBaseColor === 'BLACK') ? 'WHITE' : 'BLACK';
          this.saveUserData();
          audio.playClick('DEFAULT');
          this.showBanner(`石色パッシブを【${this.selectedBaseColor === 'BLACK' ? '黒石：魔導の浸食' : '白石：聖光の守護'}】に切り替えました！`, this.selectedBaseColor === 'BLACK' ? '#38bdf8' : '#facc15', 1.2);
          return;
        } else if (e.code === 'ArrowLeft' || e.code === 'KeyA') {
          this.dungeonSelectedSkinIndex = (this.dungeonSelectedSkinIndex - 1 + skinKeys.length) % skinKeys.length;
          audio.playClick('DEFAULT');
        } else if (e.code === 'ArrowRight' || e.code === 'KeyD') {
          this.dungeonSelectedSkinIndex = (this.dungeonSelectedSkinIndex + 1) % skinKeys.length;
          audio.playClick('DEFAULT');
        } else if (e.code === 'Space' || e.code === 'Enter') {
          const curKey = skinKeys[this.dungeonSelectedSkinIndex];
          this.equippedSkinId = curKey;
          this.saveUserData();
          this.startDungeonRun();
        } else if (e.code === 'Escape') {
          this.state = 'TITLE';
        }
        return;
      }

      if (this.state === 'BOSS_INTRO') {
        if (e.code === 'Space' || e.code === 'Enter') {
          this.startBossMatch();
        }
        return;
      }

      if (this.state === 'HOW_TO_PLAY') {
        if (e.code === 'Space' || e.code === 'Enter' || e.code === 'Escape') {
          this.state = 'TITLE';
        }
        return;
      }

      if (this.state === 'RESULT') {
        if (this.resultGuardTimer <= 0) {
          if (e.code === 'Space' || e.code === 'Enter') {
            // ★スペース/Enterで再戦ループせず確実に次へ進行！
            this.handleResultNextAction();
          } else if (e.code === 'KeyR') {
            // Rキーで手動リトライ
            this.startMatch();
          }
        }
        return;
      }

      // ★ABILITY_SELECT 画面：誤爆防止しつつ、1/2/3キーやA/S/Dキー、マウスクリックで快適選択！
      if (this.state === 'ABILITY_SELECT') {
        if (this.abilitySelectGuardTimer <= 0) {
          if (e.code === 'Digit1' || e.code === 'Numpad1' || e.code === 'KeyA') {
            this.chooseAbility(0);
          } else if (e.code === 'Digit2' || e.code === 'Numpad2' || e.code === 'KeyS') {
            this.chooseAbility(1);
          } else if (e.code === 'Digit3' || e.code === 'Numpad3' || e.code === 'KeyD') {
            this.chooseAbility(2);
          }
        }
        return;
      }

      // PAUSE切り替え (Escape または KeyP)
      if (e.code === 'Escape' || e.code === 'KeyP') {
        if (this.state === 'PLAYING') {
          this.isPaused = !this.isPaused;
          audio.playClick('DEFAULT');
          return;
        }
      }

      // ポーズ中の解除 (Space または Enter)
      if (this.isPaused && (e.code === 'Space' || e.code === 'Enter')) {
        this.isPaused = false;
        audio.playClick('DEFAULT');
        return;
      }

      if (e.code === 'KeyV' && this.state === 'PLAYING') {
        this.is3DView = !this.is3DView;
        audio.playClick('DEFAULT');
        this.showBanner(this.is3DView ? '🎥 3D立体宙返り演出: ON' : '🎥 2D標準表示: ON', '#38bdf8', 1.0);
        return;
      }

      if (this.state === 'PLAYING' && !this.isPaused) {
        const moveKeys = ['KeyW', 'KeyS', 'KeyA', 'KeyD', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];
        if (moveKeys.includes(e.code)) {
          if (!this.keysDown[e.code]) {
            const now = performance.now() / 1000;
            this.keysDown[e.code] = { firstPressed: now, lastRepeat: now };
            this.handlePlayerMoveInput(e.code);
          }
        }

        if (this.mode === 'PVP_ONLINE') {
          if (e.code === 'Space' || e.code === 'Enter') {
            const myP = this.onlineRole === 'GUEST' ? this.p2 : this.p1;
            this.executeMove(myP, myP.cursor.r, myP.cursor.c);
          }
          return;
        }

        if (e.code === 'Space') {
          this.executeMove(this.p1, this.p1.cursor.r, this.p1.cursor.c);
        }

        if ((this.mode === 'PVP' || this.mode === 'PVP_LOCAL') && e.code === 'Enter') {
          this.executeMove(this.p2, this.p2.cursor.r, this.p2.cursor.c);
        }
      }
    });

    this.canvas.addEventListener('click', (e) => {
      audio.init();
      const rect = this.canvas.getBoundingClientRect();
      const scaleX = this.canvas.width / rect.width;
      const scaleY = this.canvas.height / rect.height;
      const mx = (e.clientX - rect.left) * scaleX;
      const my = (e.clientY - rect.top) * scaleY;

      if (this.state === 'TITLE') {
        if (audio.startTitleAmbient) audio.startTitleAmbient();
        const cx = this.canvas.width / 2;
        const cy = this.canvas.height / 2;
        // 1. 2人対戦 (y: cy + 5〜53) ➔ 必ず決闘設定画面(MODE_SELECT)へ！
        if (mx >= cx - 220 && mx <= cx + 220 && my >= cy + 5 && my <= cy + 53) {
          this.mode = 'PVP_LOCAL';
          this.state = 'MODE_SELECT';
          audio.playClick('DEFAULT');
          return;
        }
        // 2. 魔導ダンジョン (y: cy + 62〜110)
        if (mx >= cx - 220 && mx <= cx + 220 && my >= cy + 62 && my <= cy + 110) {
          const skinKeys = Object.keys(this.skins);
          this.dungeonSelectedSkinIndex = Math.max(0, skinKeys.indexOf(this.equippedSkinId));
          this.state = 'DUNGEON_SKIN_SELECT';
          audio.playClick('DEFAULT');
          return;
        }
        // 3. CPU練習対決 (y: cy + 119〜163)
        if (mx >= cx - 220 && mx <= cx + 220 && my >= cy + 119 && my <= cy + 163) {
          this.mode = 'VS_CPU';
          this.state = 'MODE_SELECT';
          audio.playClick('DEFAULT');
          return;
        }
        // 4. 魔導ガチャ (y: cy + 172〜214)
        if (mx >= cx - 220 && mx <= cx + 220 && my >= cy + 172 && my <= cy + 214) {
          this.state = 'GACHA';
          audio.playClick('DEFAULT');
          return;
        }
        // 5. 遊び方 (y: cy + 223〜261)
        if (mx >= cx - 220 && mx <= cx + 220 && my >= cy + 223 && my <= cy + 261) {
          this.state = 'HOW_TO_PLAY';
          audio.playClick('DEFAULT');
          return;
        }
        return;
      }

      if (this.state === 'DUNGEON_SKIN_SELECT') {
        const skinKeys = Object.keys(this.skins);
        if (this.dungeonSelectedSkinIndex === undefined) {
          this.dungeonSelectedSkinIndex = Math.max(0, skinKeys.indexOf(this.equippedSkinId));
        }
        const lX = 80, lY = 105, lW = 440, lH = 485;
        const rX = 560, rY = 105, rW = 640, rH = 485;

        // 基本石色切替ボタン (rX + rW - 225, rY + 166, 190, 32)
        if (mx >= rX + rW - 225 && mx <= rX + rW - 35 && my >= rY + 166 && my <= rY + 198) {
          this.selectedBaseColor = (this.selectedBaseColor === 'BLACK') ? 'WHITE' : 'BLACK';
          this.saveUserData();
          audio.playClick('DEFAULT');
          this.showBanner(`石色パッシブを【${this.selectedBaseColor === 'BLACK' ? '黒石：魔導の浸食' : '白石：聖光の守護'}】に切り替えました！`, this.selectedBaseColor === 'BLACK' ? '#38bdf8' : '#facc15', 1.2);
          return;
        }

        // 前へボタン (lX + 30, lY + 390, 80, 42)
        if (mx >= lX + 30 && mx <= lX + 110 && my >= lY + 390 && my <= lY + 432) {
          this.dungeonSelectedSkinIndex = (this.dungeonSelectedSkinIndex - 1 + skinKeys.length) % skinKeys.length;
          audio.playClick('DEFAULT');
          return;
        }
        // 次へボタン (lX + lW - 110, lY + 390, 80, 42)
        if (mx >= lX + lW - 110 && mx <= lX + lW - 30 && my >= lY + 390 && my <= lY + 432) {
          this.dungeonSelectedSkinIndex = (this.dungeonSelectedSkinIndex + 1) % skinKeys.length;
          audio.playClick('DEFAULT');
          return;
        }

        // コマの3Dプレビュー領域タップ/クリックでも切り替え可能（左半分で前へ、右半分で次へ）
        const stoneCx = lX + lW / 2;
        const stoneCy = lY + 125;
        if (Math.hypot(mx - stoneCx, my - stoneCy) <= 80) {
          if (mx < stoneCx) {
            this.dungeonSelectedSkinIndex = (this.dungeonSelectedSkinIndex - 1 + skinKeys.length) % skinKeys.length;
          } else {
            this.dungeonSelectedSkinIndex = (this.dungeonSelectedSkinIndex + 1) % skinKeys.length;
          }
          audio.playClick('DEFAULT');
          return;
        }

        // コマ選択ミニグリッド (7列 x 2行)
        skinKeys.forEach((key, idx) => {
          const btnX = rX + 25 + (idx % 7) * 85;
          const btnY = rY + 396 + Math.floor(idx / 7) * 36;
          if (mx >= btnX && mx <= btnX + 80 && my >= btnY && my <= btnY + 32) {
            this.dungeonSelectedSkinIndex = idx;
            audio.playClick('DEFAULT');
          }
        });

        // タイトルへ戻るボタン (80, 615, 230, 56)
        if (mx >= 80 && mx <= 310 && my >= 615 && my <= 671) {
          this.state = 'TITLE';
          audio.playClick('DEFAULT');
          return;
        }

        // 出撃ボタン (335, 615, 865, 56)
        if (mx >= 335 && mx <= 1200 && my >= 615 && my <= 671) {
          const curKey = skinKeys[this.dungeonSelectedSkinIndex];
          this.equippedSkinId = curKey;
          this.saveUserData();
          this.startDungeonRun();
          return;
        }
        return;
      }

      if (this.state === 'BOSS_INTRO') {
        const cx = this.canvas.width / 2;
        const bW = 1020, bX = cx - bW / 2, bY = 112;
        const pX = bX + 30;
        const customImg = this.customBossImages[this.dungeonFloor];

        // 1. AIイラスト適用ボタン (x: pX, y: bY + 386, w: customImg ? 195 : 300, h: 38)
        const btnW = customImg ? 195 : 300;
        if (mx >= pX && mx <= pX + btnW && my >= bY + 386 && my <= bY + 424) {
          const fileInput = document.getElementById('bossCustomImageInput');
          if (fileInput) {
            fileInput.value = '';
            fileInput.click();
          }
          return;
        }

        // 2. 解除ボタン (x: pX + 208, y: bY + 386, w: 92, h: 38)
        if (customImg && mx >= pX + 208 && mx <= pX + 300 && my >= bY + 386 && my <= bY + 424) {
          delete this.customBossImages[this.dungeonFloor];
          try {
            localStorage.removeItem(`duel_reversi_boss_${this.dungeonFloor}`);
          } catch(e) {}
          audio.playClick('DEFAULT');
          this.showBanner('デフォルトの立ち絵に戻しました。', '#94a3b8', 1.2);
          return;
        }

        // 3. 決闘開始ボタン (cx - 190, 608, 380, 58)
        if (mx >= cx - 190 && mx <= cx + 190 && my >= 608 && my <= 666) {
          this.startBossMatch();
          return;
        }
        return;
      }

      if (this.state === 'ABILITY_SELECT') {
        const cardW = 320, cardH = 340, gap = 30;
        const totalW = cardW * 3 + gap * 2;
        const startX = (this.canvas.width - totalW) / 2;
        const cardY = 190;

        this.draftAbilities.forEach((ab, idx) => {
          const x = startX + idx * (cardW + gap);
          // ★カード全体（枠・イラスト・テキスト・ボタンどこでも）をクリックで選択可能に！
          if (mx >= x && mx <= x + cardW && my >= cardY && my <= cardY + cardH) {
            this.chooseAbility(idx);
          }
        });
        return;
      }

      if (this.state === 'GACHA') {
        const w = this.canvas.width;
        const h = this.canvas.height;

        // もしガチャ結果モーダルが出ている場合
        if (this.gachaResults) {
          const mBoxW = 860;
          const mBoxH = 540;
          const mBoxY = (h - mBoxH) / 2;
          if (mx >= w / 2 - 140 && mx <= w / 2 + 140 && my >= mBoxY + mBoxH - 75 && my <= mBoxY + mBoxH - 23) {
            this.gachaResults = null;
          }
          return;
        }

        // 戻るボタン (x: 50〜210, y: 30〜72)
        if (mx >= 50 && mx <= 210 && my >= 30 && my <= 72) {
          this.state = 'TITLE';
          return;
        }

        // ゴールド補充ボタン (w - 190〜w - 50, y: 32〜70)
        if (mx >= w - 190 && mx <= w - 50 && my >= 32 && my <= 70) {
          this.p1Gold += 3000;
          this.saveUserData();
          audio.playClick('DEFAULT');
          this.showBanner('💰 ゴールド +3000G を補充しました！', '#facc15', 1.2);
          return;
        }

        const gBoxX = 50;
        const gBoxY = 95;
        // 1回召喚ボタン (gBoxX + 30〜230, gBoxY + 430〜488)
        if (mx >= gBoxX + 30 && mx <= gBoxX + 230 && my >= gBoxY + 430 && my <= gBoxY + 488) {
          this.pullGacha(1);
          return;
        }
        // 10連召喚ボタン (gBoxX + 250〜450, gBoxY + 430〜488)
        if (mx >= gBoxX + 250 && mx <= gBoxX + 450 && my >= gBoxY + 430 && my <= gBoxY + 488) {
          this.pullGacha(10);
          return;
        }

        // スキン装備クリック (2行 x 7列グリッド)
        const sBoxX = 560;
        const sBoxY = 95;
        const colW = 86;
        const rowH = 175;
        const gapX = 6;
        const gapY = 12;
        const gridStartX = sBoxX + 13;
        const gridStartY = sBoxY + 52;
        const skinKeys = Object.keys(this.skins);

        skinKeys.forEach((key, idx) => {
          const colIdx = idx % 7;
          const rowIdx = Math.floor(idx / 7);
          const cxPos = gridStartX + colIdx * (colW + gapX);
          const cyPos = gridStartY + rowIdx * (rowH + gapY);

          // 装備ボタン位置
          if (mx >= cxPos + 6 && mx <= cxPos + colW - 6 && my >= cyPos + 115 && my <= cyPos + 145) {
            if (this.ownedSkins.includes(key)) {
              this.equippedSkinId = key;
              this.saveUserData();
              audio.playClick(key);
              this.showBanner(`【${this.skins[key].name}】を装備しました！`, '#38bdf8', 1.2);
            }
          }
        });
        return;
      }

      if (this.state === 'HOW_TO_PLAY') {
        const cx = this.canvas.width / 2;
        if (mx >= cx - 160 && mx <= cx + 160 && my >= 520 && my <= 578) {
          this.state = 'TITLE';
        }
        return;
      }

      if (this.state === 'MODE_SELECT') {
        // 対戦形式 (y: 108〜148)
        if (mx >= 60 && mx <= 190 && my >= 108 && my <= 148) { this.mode = 'VS_CPU'; audio.playClick('DEFAULT'); }
        if (mx >= 200 && mx <= 340 && my >= 108 && my <= 148) { this.mode = 'PVP_LOCAL'; audio.playClick('DEFAULT'); }
        if (mx >= 350 && mx <= 510 && my >= 108 && my <= 148) {
          this.mode = 'PVP_ONLINE';
          audio.playClick('DEFAULT');
          if (window.openOnlineLobbyModal) window.openOnlineLobbyModal();
          return;
        }

        // ルールモード (y: 178〜214)
        if (mx >= 60 && mx <= 270 && my >= 178 && my <= 214) { this.ruleMode = 'CHAOS'; audio.playClick('DEFAULT'); }
        if (mx >= 280 && mx <= 490 && my >= 178 && my <= 214) { this.ruleMode = 'CLASSIC'; audio.playClick('DEFAULT'); }

        // 初期配置切り替え (y: 242〜278)
        if (mx >= 60 && mx <= 265 && my >= 242 && my <= 278) { this.pvpUseDotArt = false; audio.playClick('DEFAULT'); }
        if (mx >= 275 && mx <= 490 && my >= 242 && my <= 278) { this.pvpUseDotArt = true; audio.playClick('DEFAULT'); }

        // BET選択 (PVP時) or CPU難易度 (y: 308〜344)
        if (this.mode === 'PVP_LOCAL' || this.mode === 'PVP_ONLINE') {
          for (let bIdx = 0; bIdx < 5; bIdx++) {
            const bx = 60 + bIdx * 88;
            if (mx >= bx && mx <= bx + 80 && my >= 308 && my <= 344) {
              this.selectedBetIndex = bIdx;
              audio.playClick('DEFAULT');
            }
          }
        } else {
          if (mx >= 60 && mx <= 195 && my >= 308 && my <= 344) { this.cpuLevel = 'ELEMENTARY'; audio.playClick('DEFAULT'); }
          if (mx >= 205 && mx <= 340 && my >= 308 && my <= 344) { this.cpuLevel = 'ADULT'; audio.playClick('DEFAULT'); }
          if (mx >= 350 && mx <= 490 && my >= 308 && my <= 344) { this.cpuLevel = 'AI'; audio.playClick('DEFAULT'); }
        }

        // 速度 (y: 372〜408)
        if (mx >= 60 && mx <= 165 && my >= 372 && my <= 408) { this.speedMode = 'NORMAL'; audio.playClick('DEFAULT'); }
        if (mx >= 175 && mx <= 285 && my >= 372 && my <= 408) { this.speedMode = 'TURBO'; audio.playClick('DEFAULT'); }
        // 時間
        if (mx >= 295 && mx <= 390 && my >= 372 && my <= 408) { this.matchDuration = 90; audio.playClick('DEFAULT'); }
        if (mx >= 400 && mx <= 490 && my >= 372 && my <= 408) { this.matchDuration = 60; audio.playClick('DEFAULT'); }

        // BGM切替 (y: 438〜474 に完全整合！)
        if (mx >= 60 && mx <= 275 && my >= 438 && my <= 474) {
          audio.init();
          audio.setTrack(audio.currentTrackIndex + 1);
          const tName = audio.bgmTracks[audio.currentTrackIndex].name;
          this.showBanner(`🎵 BGM変更: ${tName}（試聴再生中！）`, '#38bdf8', 2.0);
          audio.playClick('DEFAULT');
        }
        // 盤面切替 (y: 438〜474 に完全整合！)
        if (mx >= 285 && mx <= 490 && my >= 438 && my <= 474) {
          const bKeys = Object.keys(this.boardThemes);
          const nextIdx = (bKeys.indexOf(this.equippedBoardId) + 1) % bKeys.length;
          this.equippedBoardId = bKeys[nextIdx];
          this.saveUserData();
          audio.playClick('DEFAULT');
        }

        // 試合開始ボタン (y: 500〜560)
        if (mx >= 80 && mx <= 510 && my >= 500 && my <= 560) {
          this.startMatch();
        }
        return;
      }

      // ポーズ中のクリック判定
      if (this.isPaused) {
        const w = this.canvas.width;
        const h = this.canvas.height;
        const boxW = 500;
        const boxH = 420;
        const boxX = (w - boxW) / 2;
        const boxY = (h - boxH) / 2;

        // 1. 再開ボタン (boxX + 60, boxY + 175, 380, 52)
        if (mx >= boxX + 60 && mx <= boxX + 440 && my >= boxY + 175 && my <= boxY + 227) {
          this.isPaused = false;
          audio.playClick('DEFAULT');
          return;
        }
        // 2. 音声ミュート切替 (boxX + 60, boxY + 245, 380, 50)
        if (mx >= boxX + 60 && mx <= boxX + 440 && my >= boxY + 245 && my <= boxY + 295) {
          audio.isMuted = !audio.isMuted;
          audio.playClick('DEFAULT');
          return;
        }
        // 3. 降参・タイトルへ (boxX + 60, boxY + 312, 380, 50)
        if (mx >= boxX + 60 && mx <= boxX + 440 && my >= boxY + 312 && my <= boxY + 362) {
          this.isPaused = false;
          this.state = 'TITLE';
          audio.stopBgm();
          audio.playClick('DEFAULT');
          return;
        }
        return;
      }

      if (this.state === 'PLAYING') {
        // 右上 3D立体演出切替ボタン (x: 1005〜1130, y: 16〜50)
        if (mx >= 1005 && mx <= 1130 && my >= 16 && my <= 50) {
          this.is3DView = !this.is3DView;
          audio.playClick('DEFAULT');
          this.showBanner(this.is3DView ? '🎥 3D立体宙返り演出: ON' : '🎥 2D標準表示: ON', '#38bdf8', 1.0);
          return;
        }

        // 右上 PAUSE ボタン (x: 1140〜1245, y: 16〜50)
        if (mx >= 1140 && mx <= 1245 && my >= 16 && my <= 50) {
          this.isPaused = true;
          audio.playClick('DEFAULT');
          return;
        }

        if (this.mode === 'PVP_ONLINE') {
          const cell = this.pixelToCell(mx, my);
          if (cell) {
            const myP = this.onlineRole === 'GUEST' ? this.p2 : this.p1;
            myP.cursor = { r: cell.r, c: cell.c };
            this.executeMove(myP, cell.r, cell.c);
          }
        } else if (this.mode === 'VS_CPU' || this.mode === 'DUNGEON') {
          const cell = this.pixelToCell(mx, my);
          if (cell) {
            this.p1.cursor = { r: cell.r, c: cell.c };
            this.executeMove(this.p1, cell.r, cell.c);
          }
        }
      }

      if (this.state === 'RESULT') {
        const cx = this.canvas.width / 2;
        // ダンジョンクリアでの分岐 (★1-1 ➔ 1-2 ➔ 1-3 の順序進行を完全保証)
        if (this.mode === 'DUNGEON' && this.p1.score > this.p2.score) {
          if (mx >= cx - 200 && mx <= cx + 200 && my >= 600 && my <= 656) {
            this.handleResultNextAction();
            return;
          }
        }

        // 下部3ボタン (y: 600〜656)
        // 1. 再戦する (x: 140〜440)
        if (mx >= 140 && mx <= 440 && my >= 600 && my <= 656) {
          if (this.resultGuardTimer <= 0) {
            if (this.mode === 'DUNGEON') this.startBossMatch();
            else this.startMatch();
          }
        }
        // 2. ガチャ (x: 490〜790)
        if (mx >= 490 && mx <= 790 && my >= 600 && my <= 656) {
          this.state = 'GACHA';
        }
        // 3. タイトル (x: 840〜1140)
        if (mx >= 840 && mx <= 1140 && my >= 600 && my <= 656) {
          this.state = 'TITLE';
        }
        return;
      }
    });

    this.canvas.addEventListener('mousemove', (e) => {
      const rect = this.canvas.getBoundingClientRect();
      const scaleX = this.canvas.width / rect.width;
      const scaleY = this.canvas.height / rect.height;
      const mx = (e.clientX - rect.left) * scaleX;
      const my = (e.clientY - rect.top) * scaleY;
      const cell = this.pixelToCell(mx, my);
      if (cell && this.state === 'PLAYING') {
        if (this.mode === 'PVP_ONLINE') {
          const myP = this.onlineRole === 'GUEST' ? this.p2 : this.p1;
          if (myP.cursor.r !== cell.r || myP.cursor.c !== cell.c) {
            myP.cursor = { r: cell.r, c: cell.c };
            const now = performance.now();
            if (now - this.lastCursorSync > 45 && window.duelNet && window.duelNet.isConnected) {
              this.lastCursorSync = now;
              window.duelNet.send({
                t: 'CURSOR',
                p: this.onlineRole === 'GUEST' ? 2 : 1,
                r: cell.r,
                c: cell.c
              });
            }
          }
        } else if (this.mode === 'VS_CPU' || this.mode === 'DUNGEON') {
          this.p1.cursor = { r: cell.r, c: cell.c };
        }
      }

      // 出撃オセロ選択画面でのマウスホバーカーソル (pointer)
      if (this.state === 'DUNGEON_SKIN_SELECT') {
        const lX = 80, lY = 105, lW = 440;
        const rX = 560, rY = 105, rW = 640;
        const stoneCx = lX + lW / 2, stoneCy = lY + 125;
        let isHover = false;
        if (mx >= rX + rW - 225 && mx <= rX + rW - 35 && my >= rY + 166 && my <= rY + 198) isHover = true;
        else if (mx >= lX + 30 && mx <= lX + 110 && my >= lY + 390 && my <= lY + 432) isHover = true;
        else if (mx >= lX + lW - 110 && mx <= lX + lW - 30 && my >= lY + 390 && my <= lY + 432) isHover = true;
        else if (Math.hypot(mx - stoneCx, my - stoneCy) <= 80) isHover = true;
        else if (mx >= 80 && mx <= 310 && my >= 615 && my <= 671) isHover = true;
        else if (mx >= 335 && mx <= 1200 && my >= 615 && my <= 671) isHover = true;
        else {
          const skinKeys = Object.keys(this.skins);
          for (let idx = 0; idx < skinKeys.length; idx++) {
            const btnX = rX + 25 + (idx % 7) * 85;
            const btnY = rY + 396 + Math.floor(idx / 7) * 36;
            if (mx >= btnX && mx <= btnX + 80 && my >= btnY && my <= btnY + 32) {
              isHover = true;
              break;
            }
          }
        }
        this.canvas.style.cursor = isHover ? 'pointer' : 'default';
      } else if (this.state === 'PLAYING') {
        this.canvas.style.cursor = 'default';
      }
    });

    // マウスホイールでの出撃オセロスキン切り替え
    this.canvas.addEventListener('wheel', (e) => {
      if (this.state === 'DUNGEON_SKIN_SELECT') {
        e.preventDefault();
        const skinKeys = Object.keys(this.skins);
        if (e.deltaY > 0) {
          this.dungeonSelectedSkinIndex = (this.dungeonSelectedSkinIndex + 1) % skinKeys.length;
        } else if (e.deltaY < 0) {
          this.dungeonSelectedSkinIndex = (this.dungeonSelectedSkinIndex - 1 + skinKeys.length) % skinKeys.length;
        }
        audio.playClick('DEFAULT');
      }
    }, { passive: false });
  }
}

window.addEventListener('load', () => {
  const game = new DuelReversi();
  let lastTime = performance.now();

  function loop(now) {
    const dt = Math.min((now - lastTime) / 1000, 0.1);
    lastTime = now;
    try {
      game.update(dt);
      game.draw();
    } catch (err) {
      console.error('Game loop recovery:', err);
    }
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);
});
磁気破砕', icon: '🧲', desc: '重力ブラックホールで2x2を更地化' },
  PAINT: { id: 'PAINT', name: '領域侵食', icon: '🎨', desc: '魔法陣で周囲2x2を一瞬で自色化' },
  GOLD: { id: 'GOLD', name: '不壊金石', icon: '👑', desc: '【終盤限定】雷撃ズドン！永久不壊の神石' },
  HYPER: { id: 'HYPER', name: '神速魔力', icon: '⚡', desc: '4秒間クールダウン0連打' },
  FREEZE: { id: 'FREEZE', name: '絶対凍結', icon: '❄️', desc: '相手の行動を3秒完全停止' },
  POTION: { id: 'POTION', name: '生命の秘薬', icon: '💖', desc: '【緊急回復】周囲に自色の石を一気に3〜4枚再展開！' }
};

// 5大ボス デフォルト美麗ベクターイラスト (SVG Data URIs)
const BOSS_DEFAULT_IMAGES = {
  1: 'data:image/svg+xml;utf8,' + encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 320">
      <defs>
        <radialGradient id="bg1" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#0e7490" />
          <stop offset="60%" stop-color="#083344" />
          <stop offset="100%" stop-color="#020617" />
        </radialGradient>
        <linearGradient id="frost" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#67e8f9" />
          <stop offset="100%" stop-color="#bae6fd" />
        </linearGradient>
      </defs>
      <rect width="320" height="320" rx="16" fill="url(#bg1)" />
      <polygon points="160,20 175,90 230,60 190,115 255,135 185,155 240,205 170,195 160,260 150,195 80,205 135,155 65,135 130,115 90,60 145,90" fill="url(#frost)" opacity="0.25"/>
      <path d="M100 280 C90 200, 110 130, 160 100 C210 130, 230 200, 220 280 Z" fill="#0f172a" stroke="#38bdf8" stroke-width="3"/>
      <circle cx="160" cy="125" r="42" fill="#f8fafc"/>
      <path d="M125 105 C135 70, 185 70, 195 105 C210 135, 215 165, 215 190 C185 185, 135 185, 105 190 C105 165, 110 135, 125 105 Z" fill="#38bdf8" opacity="0.9"/>
      <ellipse cx="148" cy="125" rx="5" ry="7" fill="#0284c7"/>
      <ellipse cx="172" cy="125" rx="5" ry="7" fill="#0284c7"/>
      <circle cx="149" cy="123" r="2" fill="#ffffff"/>
      <circle cx="173" cy="123" r="2" fill="#ffffff"/>
      <path d="M152 142 Q160 148 168 142" stroke="#0284c7" stroke-width="2" fill="none"/>
      <polygon points="160,50 172,75 198,75 177,90 185,115 160,100 135,115 143,90 122,75 148,75" fill="#a5f3fc" stroke="#38bdf8" stroke-width="2"/>
      <text x="160" y="300" font-size="16" font-weight="bold" fill="#7dd3fc" text-anchor="middle" font-family="sans-serif">❄️ 氷結の魔女 エルサリア</text>
    </svg>`),
  2: 'data:image/svg+xml;utf8,' + encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 320">
      <defs>
        <radialGradient id="bg2" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#7f1d1d" />
          <stop offset="60%" stop-color="#450a0a" />
          <stop offset="100%" stop-color="#020617" />
        </radialGradient>
      </defs>
      <rect width="320" height="320" rx="16" fill="url(#bg2)" />
      <circle cx="160" cy="140" r="70" fill="#1c1917" stroke="#ea580c" stroke-width="5"/>
      <path d="M160 70 Q180 40 205 35" stroke="#f97316" stroke-width="4" fill="none"/>
      <circle cx="207" cy="34" r="7" fill="#facc15"/>
      <rect x="130" y="115" width="22" height="15" rx="3" fill="#f97316"/>
      <rect x="168" y="115" width="22" height="15" rx="3" fill="#f97316"/>
      <path d="M135 155 Q160 180 185 155" stroke="#ea580c" stroke-width="5" fill="none"/>
      <text x="160" y="300" font-size="16" font-weight="bold" fill="#fdba74" text-anchor="middle" font-family="sans-serif">💣 狂乱の爆撃卿 ボンバート</text>
    </svg>`),
  3: 'data:image/svg+xml;utf8,' + encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 320">
      <defs>
        <radialGradient id="bg3" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#1e1b4b" />
          <stop offset="60%" stop-color="#0f172a" />
          <stop offset="100%" stop-color="#020617" />
        </radialGradient>
      </defs>
      <rect width="320" height="320" rx="16" fill="url(#bg3)" />
      <polygon points="160,50 200,90 190,140 220,130 180,180 230,170 170,230 160,250 150,230 90,170 140,180 100,130 130,140 120,90" fill="#60a5fa" opacity="0.3"/>
      <circle cx="160" cy="140" r="50" fill="#0f172a" stroke="#00f0ff" stroke-width="4"/>
      <polygon points="160,70 185,130 145,130 170,190 135,140 155,140" fill="#facc15"/>
      <text x="160" y="300" font-size="16" font-weight="bold" fill="#93c5fd" text-anchor="middle" font-family="sans-serif">⚡ 電脳の神速王 ヴォルテクス</text>
    </svg>`),
  4: 'data:image/svg+xml;utf8,' + encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 320">
      <defs>
        <radialGradient id="bg4" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#064e3b" />
          <stop offset="60%" stop-color="#022c22" />
          <stop offset="100%" stop-color="#020617" />
        </radialGradient>
      </defs>
      <rect width="320" height="320" rx="16" fill="url(#bg4)" />
      <rect x="100" y="80" width="120" height="120" rx="20" fill="#1e293b" stroke="#10b981" stroke-width="6"/>
      <rect x="120" y="110" width="80" height="20" rx="6" fill="#065f46"/>
      <circle cx="145" cy="120" r="6" fill="#34d399"/>
      <circle cx="175" cy="120" r="6" fill="#34d399"/>
      <rect x="130" y="145" width="60" height="35" rx="4" fill="#047857"/>
      <text x="160" y="300" font-size="16" font-weight="bold" fill="#6ee7b7" text-anchor="middle" font-family="sans-serif">🗿 不壊の巨神兵 ゴレムス</text>
    </svg>`),
  5: 'data:image/svg+xml;utf8,' + encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 320">
      <defs>
        <radialGradient id="bg5" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#3b0764" />
          <stop offset="60%" stop-color="#1e0136" />
          <stop offset="100%" stop-color="#020617" />
        </radialGradient>
      </defs>
      <rect width="320" height="320" rx="16" fill="url(#bg5)" />
      <circle cx="160" cy="140" r="80" fill="none" stroke="#a855f7" stroke-width="2" stroke-dasharray="8 6"/>
      <circle cx="160" cy="140" r="55" fill="#090012" stroke="#c084fc" stroke-width="4"/>
      <ellipse cx="160" cy="140" rx="28" ry="16" fill="#f43f5e"/>
      <circle cx="160" cy="140" r="9" fill="#ffffff"/>
      <text x="160" y="300" font-size="16" font-weight="bold" fill="#e9d5ff" text-anchor="middle" font-family="sans-serif">👁️ 虚無の魔神 デウス・エクス・マキナ</text>
    </svg>`)
};

// ダンジョン5大ボス定義


// --- ドットアート初期配置定義 (黒白同数・1手目挟み反転数学的保証) ---
const DOT_ART_PATTERNS = {
  "SNOWFLAKE": [
    {
      "r": 2,
      "c": 3,
      "color": 1
    },
    {
      "r": 2,
      "c": 4,
      "color": 2
    },
    {
      "r": 3,
      "c": 2,
      "color": 2
    },
    {
      "r": 3,
      "c": 5,
      "color": 1
    },
    {
      "r": 3,
      "c": 3,
      "color": 1
    },
    {
      "r": 3,
      "c": 4,
      "color": 2
    },
    {
      "r": 4,
      "c": 3,
      "color": 2
    },
    {
      "r": 4,
      "c": 4,
      "color": 1
    },
    {
      "r": 4,
      "c": 2,
      "color": 1
    },
    {
      "r": 4,
      "c": 5,
      "color": 2
    },
    {
      "r": 5,
      "c": 3,
      "color": 2
    },
    {
      "r": 5,
      "c": 4,
      "color": 1
    }
  ],
  "SKULL": [
    {
      "r": 2,
      "c": 2,
      "color": 2
    },
    {
      "r": 2,
      "c": 3,
      "color": 2
    },
    {
      "r": 2,
      "c": 4,
      "color": 1
    },
    {
      "r": 2,
      "c": 5,
      "color": 1
    },
    {
      "r": 3,
      "c": 2,
      "color": 1
    },
    {
      "r": 3,
      "c": 3,
      "color": 1
    },
    {
      "r": 3,
      "c": 4,
      "color": 2
    },
    {
      "r": 3,
      "c": 5,
      "color": 2
    },
    {
      "r": 4,
      "c": 3,
      "color": 2
    },
    {
      "r": 4,
      "c": 4,
      "color": 1
    },
    {
      "r": 5,
      "c": 3,
      "color": 1
    },
    {
      "r": 5,
      "c": 4,
      "color": 2
    }
  ],
  "THUNDER": [
    {
      "r": 1,
      "c": 4,
      "color": 2
    },
    {
      "r": 2,
      "c": 3,
      "color": 2
    },
    {
      "r": 2,
      "c": 4,
      "color": 1
    },
    {
      "r": 3,
      "c": 2,
      "color": 1
    },
    {
      "r": 3,
      "c": 3,
      "color": 2
    },
    {
      "r": 3,
      "c": 4,
      "color": 1
    },
    {
      "r": 4,
      "c": 3,
      "color": 1
    },
    {
      "r": 4,
      "c": 4,
      "color": 2
    },
    {
      "r": 4,
      "c": 5,
      "color": 1
    },
    {
      "r": 5,
      "c": 3,
      "color": 1
    },
    {
      "r": 5,
      "c": 4,
      "color": 2
    },
    {
      "r": 6,
      "c": 3,
      "color": 2
    }
  ],
  "SHIELD": [
    {
      "r": 2,
      "c": 2,
      "color": 2
    },
    {
      "r": 2,
      "c": 3,
      "color": 2
    },
    {
      "r": 2,
      "c": 4,
      "color": 1
    },
    {
      "r": 2,
      "c": 5,
      "color": 1
    },
    {
      "r": 3,
      "c": 2,
      "color": 1
    },
    {
      "r": 3,
      "c": 3,
      "color": 1
    },
    {
      "r": 3,
      "c": 4,
      "color": 2
    },
    {
      "r": 3,
      "c": 5,
      "color": 2
    },
    {
      "r": 4,
      "c": 3,
      "color": 2
    },
    {
      "r": 4,
      "c": 4,
      "color": 1
    },
    {
      "r": 5,
      "c": 3,
      "color": 1
    },
    {
      "r": 5,
      "c": 4,
      "color": 2
    }
  ],
  "PROVIDENCE": [
    {
      "r": 2,
      "c": 3,
      "color": 1
    },
    {
      "r": 2,
      "c": 4,
      "color": 2
    },
    {
      "r": 3,
      "c": 2,
      "color": 2
    },
    {
      "r": 3,
      "c": 3,
      "color": 2
    },
    {
      "r": 3,
      "c": 4,
      "color": 2
    },
    {
      "r": 3,
      "c": 5,
      "color": 1
    },
    {
      "r": 4,
      "c": 2,
      "color": 1
    },
    {
      "r": 4,
      "c": 3,
      "color": 1
    },
    {
      "r": 4,
      "c": 4,
      "color": 1
    },
    {
      "r": 4,
      "c": 5,
      "color": 2
    },
    {
      "r": 5,
      "c": 3,
      "color": 2
    },
    {
      "r": 5,
      "c": 4,
      "color": 1
    }
  ],
  "CIRCLE": [
    {
      "r": 2,
      "c": 3,
      "color": 1
    },
    {
      "r": 2,
      "c": 4,
      "color": 2
    },
    {
      "r": 3,
      "c": 2,
      "color": 2
    },
    {
      "r": 3,
      "c": 5,
      "color": 1
    },
    {
      "r": 4,
      "c": 2,
      "color": 1
    },
    {
      "r": 4,
      "c": 5,
      "color": 2
    },
    {
      "r": 5,
      "c": 3,
      "color": 2
    },
    {
      "r": 5,
      "c": 4,
      "color": 1
    },
    {
      "r": 3,
      "c": 3,
      "color": 2
    },
    {
      "r": 3,
      "c": 4,
      "color": 1
    },
    {
      "r": 4,
      "c": 3,
      "color": 2
    },
    {
      "r": 4,
      "c": 4,
      "color": 1
    }
  ],
  "CROSS": [
    {
      "r": 2,
      "c": 3,
      "color": 2
    },
    {
      "r": 2,
      "c": 4,
      "color": 1
    },
    {
      "r": 3,
      "c": 1,
      "color": 1
    },
    {
      "r": 3,
      "c": 2,
      "color": 1
    },
    {
      "r": 3,
      "c": 5,
      "color": 2
    },
    {
      "r": 3,
      "c": 6,
      "color": 2
    },
    {
      "r": 3,
      "c": 3,
      "color": 2
    },
    {
      "r": 3,
      "c": 4,
      "color": 1
    },
    {
      "r": 4,
      "c": 3,
      "color": 1
    },
    {
      "r": 4,
      "c": 4,
      "color": 2
    },
    {
      "r": 5,
      "c": 3,
      "color": 1
    },
    {
      "r": 5,
      "c": 4,
      "color": 2
    }
  ],
  "LETTER_M": [
    {
      "r": 2,
      "c": 2,
      "color": 1
    },
    {
      "r": 2,
      "c": 5,
      "color": 2
    },
    {
      "r": 3,
      "c": 2,
      "color": 2
    },
    {
      "r": 3,
      "c": 3,
      "color": 2
    },
    {
      "r": 3,
      "c": 4,
      "color": 1
    },
    {
      "r": 3,
      "c": 5,
      "color": 1
    },
    {
      "r": 4,
      "c": 2,
      "color": 1
    },
    {
      "r": 4,
      "c": 3,
      "color": 1
    },
    {
      "r": 4,
      "c": 4,
      "color": 2
    },
    {
      "r": 4,
      "c": 5,
      "color": 2
    },
    {
      "r": 5,
      "c": 2,
      "color": 1
    },
    {
      "r": 5,
      "c": 5,
      "color": 2
    }
  ],
  "STAR": [
    {
      "r": 2,
      "c": 3,
      "color": 2
    },
    {
      "r": 2,
      "c": 4,
      "color": 1
    },
    {
      "r": 3,
      "c": 2,
      "color": 1
    },
    {
      "r": 3,
      "c": 5,
      "color": 2
    },
    {
      "r": 3,
      "c": 3,
      "color": 1
    },
    {
      "r": 3,
      "c": 4,
      "color": 2
    },
    {
      "r": 4,
      "c": 3,
      "color": 2
    },
    {
      "r": 4,
      "c": 4,
      "color": 1
    },
    {
      "r": 4,
      "c": 2,
      "color": 2
    },
    {
      "r": 4,
      "c": 5,
      "color": 1
    },
    {
      "r": 5,
      "c": 3,
      "color": 1
    },
    {
      "r": 5,
      "c": 4,
      "color": 2
    }
  ],
  "INVADER": [
    {
      "r": 2,
      "c": 2,
      "color": 1
    },
    {
      "r": 2,
      "c": 5,
      "color": 2
    },
    {
      "r": 3,
      "c": 2,
      "color": 2
    },
    {
      "r": 3,
      "c": 3,
      "color": 2
    },
    {
      "r": 3,
      "c": 4,
      "color": 1
    },
    {
      "r": 3,
      "c": 5,
      "color": 1
    },
    {
      "r": 4,
      "c": 2,
      "color": 1
    },
    {
      "r": 4,
      "c": 3,
      "color": 1
    },
    {
      "r": 4,
      "c": 4,
      "color": 2
    },
    {
      "r": 4,
      "c": 5,
      "color": 2
    },
    {
      "r": 5,
      "c": 2,
      "color": 1
    },
    {
      "r": 5,
      "c": 5,
      "color": 2
    }
  ],
  "CROWN": [
    {
      "r": 2,
      "c": 2,
      "color": 1
    },
    {
      "r": 2,
      "c": 3,
      "color": 2
    },
    {
      "r": 2,
      "c": 4,
      "color": 1
    },
    {
      "r": 2,
      "c": 5,
      "color": 2
    },
    {
      "r": 3,
      "c": 2,
      "color": 2
    },
    {
      "r": 3,
      "c": 5,
      "color": 1
    },
    {
      "r": 4,
      "c": 2,
      "color": 1
    },
    {
      "r": 4,
      "c": 3,
      "color": 1
    },
    {
      "r": 4,
      "c": 4,
      "color": 2
    },
    {
      "r": 4,
      "c": 5,
      "color": 2
    },
    {
      "r": 5,
      "c": 3,
      "color": 2
    },
    {
      "r": 5,
      "c": 4,
      "color": 1
    }
  ]
};

// ★外部拡張ドットアートライブラリ (全266種) が読み込まれていれば自動合流！
if (typeof DOT_ART_LIBRARY !== 'undefined') {
  for (const [key, item] of Object.entries(DOT_ART_LIBRARY)) {
    if (!DOT_ART_PATTERNS[key]) {
      DOT_ART_PATTERNS[key] = item.stones;
    }
  }
}

// ローグライクダンジョン：各階層3ステージ定義 (1-1前哨戦, 1-2精鋭戦, 1-3大ボス戦)
const DUNGEON_STAGES = {
  1: {
    minion: { name: 'スノーインプ', title: 'STAGE 1-1: 氷雪の尖兵', color: '#7dd3fc', icon: '❄️', aiLevel: 'ELEMENTARY', matchDuration: 45, ruleName: 'サクッと突破' },
    elite: { name: 'フロストナイト', title: 'STAGE 1-2: 氷壁の精鋭騎士', color: '#38bdf8', icon: '🛡️', aiLevel: 'ELEMENTARY', matchDuration: 60, ruleName: '氷壁防衛線' },
    boss: { name: '氷結の魔女 エルサリア', title: 'STAGE 1-3: 永久凍土の魔女', color: '#0284c7', icon: '🧙‍♀️', aiLevel: 'ELEMENTARY', matchDuration: 90, dotArt: 'SNOWFLAKE', desc: '【固有能力：凍てつく吐息】ボスの置く石が氷結トラップ化！' }
  },
  2: {
    minion: { name: 'マグマバット', title: 'STAGE 2-1: 爆炎の斥候', color: '#fb923c', icon: '🦇', aiLevel: 'ELEMENTARY', matchDuration: 45, ruleName: '超速ターボ' },
    elite: { name: 'ヘルハウンド', title: 'STAGE 2-2: 業火の魔獣', color: '#f97316', icon: '🐺', aiLevel: 'ADULT', matchDuration: 60, ruleName: '火炎地獄' },
    boss: { name: '狂乱の爆撃卿 ボンバート', title: 'STAGE 2-3: 爆炎の要塞', color: '#ef4444', icon: '💣', aiLevel: 'ADULT', matchDuration: 90, dotArt: 'SKULL', desc: '【固有能力：爆縮擲弾】6秒ごとに手榴弾を投下し周囲を爆縮強制反転！' }
  },
  3: {
    minion: { name: 'ネオンビット', title: 'STAGE 3-1: 電脳迎撃機', color: '#fde047', icon: '🛸', aiLevel: 'ADULT', matchDuration: 45, ruleName: 'アイテムフィーバー' },
    elite: { name: 'サンダーバード', title: 'STAGE 3-2: 紫電の怪鳥', color: '#eab308', icon: '🦅', aiLevel: 'ADULT', matchDuration: 60, ruleName: '放電ショック' },
    boss: { name: '電脳の神速王 ヴォルテクス', title: 'STAGE 3-3: 神速電脳空間', color: '#facc15', icon: '⚡', aiLevel: 'AI', matchDuration: 90, dotArt: 'THUNDER', desc: '【固有能力：超絶クロックアップ】ボスのクールダウンが常時超速！' }
  },
  4: {
    minion: { name: 'アイアンガーディアン', title: 'STAGE 4-1: 鋼鉄の番兵', color: '#34d399', icon: '🛡️', aiLevel: 'ADULT', matchDuration: 45, ruleName: '四隅チャージ' },
    elite: { name: 'アイアンゴーレム', title: 'STAGE 4-2: 鉄壁の巨兵', color: '#10b981', icon: '🗿', aiLevel: 'ADULT', matchDuration: 60, ruleName: '岩塊シールド' },
    boss: { name: '不壊の巨神兵 ゴレムス', title: 'STAGE 4-3: 鋼鉄の重力神殿', color: '#059669', icon: '🏰', aiLevel: 'AI', matchDuration: 90, dotArt: 'SHIELD', desc: '【固有能力：永久不壊装甲】3手ごとに永久不壊金石を召喚！' }
  },
  5: {
    minion: { name: 'ヴォイドシーカー', title: 'STAGE 5-1: 虚無の先兵', color: '#c084fc', icon: '👁️‍🗨️', aiLevel: 'ADULT', matchDuration: 45, ruleName: '虚無の波動' },
    elite: { name: 'アカシックレコード', title: 'STAGE 5-2: 世界の記録者', color: '#a855f7', icon: '📜', aiLevel: 'AI', matchDuration: 60, ruleName: '因果律崩壊' },
    boss: { name: '虚無の魔神 デウス・エクス・マキナ', title: 'FINAL: 神話の頂点', color: '#9333ea', icon: '👁️', aiLevel: 'AI', matchDuration: 90, dotArt: 'PROVIDENCE', desc: '【固有能力：神話支配】全ボス能力複合発動＆盤面10×10拡張！' }
  }
};

const DUNGEON_BOSSES = [
  DUNGEON_STAGES[1].boss,
  DUNGEON_STAGES[2].boss,
  DUNGEON_STAGES[3].boss,
  DUNGEON_STAGES[4].boss,
  DUNGEON_STAGES[5].boss
];
// アビリティプール (全21種)
const ABILITY_POOL = [
  { id: 'POTION_ITEM', name: '生命の秘薬ストック', rarity: 'SR', color: '#ec4899', desc: '次回戦闘開始時、【💖 生命の秘薬】を手元に即装填した状態でスタート！' },
  { id: 'N_CD', name: '敏捷の足輪', rarity: 'N', color: '#94a3b8', desc: '自身のクールダウンが常時 -0.15秒 短縮される。' },
  { id: 'N_OVERRIDE', name: '鋼鉄の楔', rarity: 'N', color: '#94a3b8', desc: '相手の石を上書きした際のクールダウン倍率が1.45倍➔1.15倍に軽減。' },
  { id: 'N_GOLD_START', name: '黄金の布石', rarity: 'N', color: '#94a3b8', desc: '試合開始時、自分の初期石の1つが【永久不壊金石】になる。' },
  { id: 'N_CHAIN_GOLD', name: '連鎖の錬金術', rarity: 'N', color: '#94a3b8', desc: '一度に2枚以上反転させると、ボーナス+50Gを獲得。' },
  { id: 'N_STUN_STEAL', name: '妨害ショック', rarity: 'N', color: '#94a3b8', desc: '相手がアイテムを獲得した時、相手に電撃を浴びせ0.8秒スタン。' },
  { id: 'N_CORNER_RESET', name: '要塞の恵み', rarity: 'N', color: '#94a3b8', desc: '角マスを取ると、自身のクールダウンが即座に0秒リセット。' },
  { id: 'SR_ITEM_MAGNET', name: '強奪の磁界', rarity: 'SR', color: '#a855f7', desc: 'アイテムを拾った時、周囲2x2の相手石をまとめて自色化！' },
  { id: 'SR_FREEZE_BUFF', name: '絶対氷壁', rarity: 'SR', color: '#38bdf8', desc: '自身が受けるフリーズおよびスタンの持続時間を常時50%短縮。' },
  { id: 'SR_START_HYPER', name: '開幕の閃光', rarity: 'SR', color: '#facc15', desc: '試合開始から3.5秒間、クールダウン0秒の【神速魔力】で猛攻可能！' },
  { id: 'SR_STEAL_SCORE', name: '魔力強奪', rarity: 'SR', color: '#ec4899', desc: '相手の石を上書きするたび、相手のクールダウンを+0.5秒遅延！' },
  { id: 'SR_PAINT_BURST', name: '彩光の大輪', rarity: 'SR', color: '#34d399', desc: '魔法ペイント発動時、さらに外周マスをランダム2箇所自色に染色！' },
  { id: 'UR_CORNER_GOLD', name: '絶対支配者', rarity: 'UR', color: '#f59e0b', desc: '角マスに置いた石がすべて【永久不壊金石】に昇華する！' },
  { id: 'UR_DOUBLE_PHOENIX', name: '不死鳥の加護', rarity: 'UR', color: '#ef4444', desc: '自駒全滅時、2回まで全回復復活＆神速5秒バフ獲得！' },
  { id: 'UR_OVERRIDE_BURST', name: '連鎖爆縮', rarity: 'UR', color: '#f97316', desc: '相手の石を上書きした時、周囲1マスの相手石を巻き添え反転！' },
  { id: 'UR_BOARD10', name: '神界拡張', rarity: 'UR', color: '#6366f1', desc: '階層開始時から盤面が10×10の広大な戦場に拡張される！' },
  { id: 'UR_MINI_VORTEX', name: '魔導引力', rarity: 'UR', color: '#38bdf8', desc: '石を置くたび、周囲1マスの空白マスに小型ブラックホール発生！' },
  { id: 'LR_AUTO_ITEM', name: '天界の降臨', rarity: 'LR', color: '#ec4899', desc: '【神話】5秒ごとにランダムアイテムが手元に自動装填！' },
  { id: 'LR_ALWAYS_HYPER', name: '常時神速覚醒', rarity: 'LR', color: '#ec4899', desc: '【神話】試合中ずっと神速モード（クールダウン常時0.3秒以下）！' },
  { id: 'LR_PUNISH_THUNDER', name: '神罰代行', rarity: 'LR', color: '#ec4899', desc: '【神話】相手が石を置くたび、25%の確率で裁きの神雷（1.5秒スタン）！' }
];

// 盤面ステージテーマ
const BOARD_THEMES = {
  DEFAULT: { id: 'DEFAULT', name: 'サイバー・グリッド', line: 'rgba(0, 240, 255, 0.45)', bg0: '#0f172a', bg1: '#020617', bg2: '#000000' },
  ABYSS: { id: 'ABYSS', name: '深淵の祭壇', line: 'rgba(56, 189, 248, 0.4)', bg0: '#082f49', bg1: '#0c4a6e', bg2: '#020617' },
  INFERNO: { id: 'INFERNO', name: '紅蓮の煉獄', line: 'rgba(239, 68, 68, 0.5)', bg0: '#450a0a', bg1: '#1c0404', bg2: '#000000' },
  SANCTUARY: { id: 'SANCTUARY', name: '黄金神殿', line: 'rgba(234, 179, 8, 0.45)', bg0: '#3a2403', bg1: '#180f01', bg2: '#000000' }
};

// Alias for compatibility
const BOSS_DEFAULT_SVGS = BOSS_DEFAULT_IMAGES;


/**
 * DUEL REVERSI - Skins Definition & Passive Attributes (13 Skins)
 */

const SKINS_DATA = {
  CLASSIC: {
    id: 'CLASSIC',
    name: '伝統の白黒 (ノーマル)',
    rarity: 3,
    color: '#94a3b8',
    passiveName: '無能力 (PURE REVERSI)',
    passiveDesc: '【純粋腕前勝負】特殊能力・短縮・妨害は一切なし！オセロの腕前と配置戦術のみで真剣勝負！',
    desc: '魔導の加護を持たない伝統的なオセロ石。純粋な実力勝負を楽しみたいプレイヤー向け。',
    p1: { grad0: '#262626', grad1: '#171717', grad2: '#0a0a0a', stroke: '#52525b', core: '#71717a' },
    p2: { grad0: '#ffffff', grad1: '#f4f4f5', grad2: '#e4e4e7', stroke: '#a1a1aa', core: '#d4d4d8' }
  },
  DEFAULT: {
    id: 'DEFAULT',
    name: 'サイバー・ネオン',
    rarity: 3,
    color: '#00f0ff',
    passiveName: '電脳ハック＆オーバークロック',
    passiveDesc: '【電脳】配置時に敵CTを+0.25秒ハッキング遅延！さらに自身が3手置くごとに次手CTが0秒（即時配置）！',
    desc: '電脳仮想空間から召喚されたサイバーオセロ。シアンネオンの電脳回路が脈動する。',
    p1: { grad0: '#334155', grad1: '#0f172a', grad2: '#020617', stroke: '#00f0ff', core: '#00f0ff' },
    p2: { grad0: '#ffffff', grad1: '#cbd5e1', grad2: '#64748b', stroke: '#fbbf24', core: '#fbbf24' }
  },
  INFERNO: {
    id: 'INFERNO',
    name: '紅蓮の煉獄',
    rarity: 4,
    color: '#ef4444',
    passiveName: '紅蓮の爆砕陣',
    passiveDesc: '上書き配置のクールダウンペナルティが通常1.45倍➔1.20倍に大幅短縮！',
    desc: '燃え盛る火山岩。打撃時に激しい火炎破片と火の粉エフェクトが舞う。',
    p1: { grad0: '#7f1d1d', grad1: '#450a0a', grad2: '#1a0505', stroke: '#ef4444', core: '#f87171' },
    p2: { grad0: '#fff7ed', grad1: '#fdba74', grad2: '#c2410c', stroke: '#f97316', core: '#fb923c' }
  },
  OCEAN: {
    id: 'OCEAN',
    name: '深海の碧玉',
    rarity: 4,
    color: '#06b6d4',
    passiveName: '氷点下の潮汐',
    passiveDesc: '絶対凍結の効果時間+0.8秒！さらに自身の被状態異常時間を20%軽減！',
    desc: '深海アビスと白蝶貝。水滴の波紋エフェクトと神秘的なアクアの輝き。',
    p1: { grad0: '#064e3b', grad1: '#022c22', grad2: '#021612', stroke: '#10b981', core: '#34d399' },
    p2: { grad0: '#ecfeff', grad1: '#a5f3fc', grad2: '#0e7490', stroke: '#06b6d4', core: '#22d3ee' }
  },
  SAKURA: {
    id: 'SAKURA',
    name: '夜桜吹雪',
    rarity: 4,
    color: '#ec4899',
    passiveName: '夜桜の残影',
    passiveDesc: '相手からのあらゆる状態異常（凍結・スタン）の持続時間を常時35%軽減！',
    desc: '満月の夜に舞い散る花びら。石を置くと優雅な桜の花弁パーティクルが舞う。',
    p1: { grad0: '#500724', grad1: '#2e0214', grad2: '#15010a', stroke: '#ec4899', core: '#f472b6' },
    p2: { grad0: '#fff1f2', grad1: '#fecdd3', grad2: '#be123c', stroke: '#fb7185', core: '#fda4af' }
  },
  THUNDER: {
    id: 'THUNDER',
    name: '紫電の雷神',
    rarity: 4,
    color: '#3b82f6',
    passiveName: '紫電の過負荷',
    passiveDesc: '神速魔力（ハイパー）時間+1.5秒！さらに神速中の石配置スコア+50%！',
    desc: '帯電した青紫の避雷針。配置の瞬間に激しい青白きプラズマ放電が炸裂！',
    p1: { grad0: '#1e1b4b', grad1: '#0f172a', grad2: '#020617', stroke: '#60a5fa', core: '#93c5fd' },
    p2: { grad0: '#eff6ff', grad1: '#bfdbfe', grad2: '#3b82f6', stroke: '#38bdf8', core: '#e0f2fe' }
  },
  CRYSTAL: {
    id: 'CRYSTAL',
    name: '氷晶の宝冠',
    rarity: 4,
    color: '#2dd4bf',
    passiveName: '絶対零度の角城',
    passiveDesc: '角を取ると相手を1.0秒凍結させ、自身のクールダウンを即座にリセット！',
    desc: '純度100%のダイヤモンドとエメラルド。透明感あるプリズム光彩が輝く。',
    p1: { grad0: '#0f766e', grad1: '#115e59', grad2: '#042f2e', stroke: '#2dd4bf', core: '#5eead4' },
    p2: { grad0: '#f0fdfa', grad1: '#ccfbf1', grad2: '#0d9488', stroke: '#14b8a6', core: '#f0fdf4' }
  },
  MECHA: {
    id: 'MECHA',
    name: '機巧蒸気重機',
    rarity: 4,
    color: '#f59e0b',
    passiveName: '蒸気重装甲カウンター',
    passiveDesc: '相手が自分の石を上書きした時、反動衝撃で相手のCTを+0.6秒遅延！',
    desc: '重厚な鋼鉄歯車と真鍮ピストン。配置時に白煙スチームと火花が噴き出す！',
    p1: { grad0: '#451a03', grad1: '#292524', grad2: '#1c1917', stroke: '#d97706', core: '#f59e0b' },
    p2: { grad0: '#fafaf9', grad1: '#d6d3d1', grad2: '#78716c', stroke: '#a8a29e', core: '#f5f5f4' }
  },
  RETRO: {
    id: 'RETRO',
    name: '8-BITドット',
    rarity: 3,
    color: '#22c55e',
    passiveName: 'ピクセル・コンボ',
    passiveDesc: '連鎖反転時のスコア獲得倍率が常時+15%アップ！',
    desc: '懐かしのファミコン風。石を置くと角ばったピクセルチップがポンッと飛び散る！',
    p1: { grad0: '#18181b', grad1: '#09090b', grad2: '#000000', stroke: '#22c55e', core: '#4ade80' },
    p2: { grad0: '#ffffff', grad1: '#e4e4e7', grad2: '#a1a1aa', stroke: '#e11d48', core: '#f43f5e' }
  },
  VOID: {
    id: 'VOID',
    name: '混沌の虚無',
    rarity: 5,
    color: '#a855f7',
    passiveName: '虚無の引力特異点',
    passiveDesc: '磁気破砕の範囲が3×3拡大＆アイテムスコア+1500！2連鎖時15%で敵スタン！',
    desc: '【SSR】事象の地平面から抽出した暗黒物質。時空が歪む重力渦が周囲を呑み込む。',
    p1: { grad0: '#3b0764', grad1: '#1e0136', grad2: '#090012', stroke: '#a855f7', core: '#c084fc' },
    p2: { grad0: '#faf5ff', grad1: '#e9d5ff', grad2: '#6b21a8', stroke: '#d8b4fe', core: '#e9d5ff' }
  },
  SOLAR: {
    id: 'SOLAR',
    name: '神聖なる太陽',
    rarity: 5,
    color: '#eab308',
    passiveName: '太陽神の天寵',
    passiveDesc: '開始時中央に不壊金石配置！金石配置で+150G＆常時CT-0.10秒！',
    desc: '【SSR】太陽神の祝福を受けた究極石。黄金フレアと十字光芒が盤面に降り注ぐ。',
    p1: { grad0: '#422006', grad1: '#261202', grad2: '#100600', stroke: '#eab308', core: '#facc15' },
    p2: { grad0: '#fefce8', grad1: '#fef08a', grad2: '#a16207', stroke: '#fde047', core: '#fef08a' }
  },
  GENESIS: {
    id: 'GENESIS',
    name: '創世神竜の極光',
    rarity: 6,
    color: '#ec4899',
    passiveName: '創世神竜の全能覇権',
    passiveDesc: '【★6 LR ぶっ壊れ】全CT-0.5s超速化！配置時周囲8マスの敵石を強制全反転！3手毎に最強アイテム自動装填！状態異常完全無効＆上書きペナルティ0！反転時+100G！',
    desc: '【★6 LR】排出率1.5%の幻の最高神スキン！神竜の極彩虹炎と回転魔導環がもわもわと立ち昇る！',
    p1: { grad0: '#2e1065', grad1: '#17063b', grad2: '#090117', stroke: '#ec4899', core: '#00f0ff' },
    p2: { grad0: '#fffbeb', grad1: '#fde68a', grad2: '#b45309', stroke: '#f59e0b', core: '#ffffff' }
  },
  CHRONOS: {
    id: 'CHRONOS',
    name: '終焉冥王クロノス',
    rarity: 6,
    color: '#f43f5e',
    passiveName: '時空改変・ザ・ワールド',
    passiveDesc: '【★6 LR ぶっ壊れ】敵CT常時+0.4s遅延！配置マスと対称マスへ時空同時配置！5手毎に敵を2.5秒完全時間停止！自石は敵の上書きを完全拒絶＆反撃凍結！',
    desc: '【★6 LR】時空を統べる終焉の冥王オセロ。深紅の時空時計と黒炎オーラが盤面を支配する！',
    p1: { grad0: '#4c0519', grad1: '#1f020a', grad2: '#000000', stroke: '#f43f5e', core: '#fb7185' },
    p2: { grad0: '#fdf2f8', grad1: '#fbcfe8', grad2: '#be185d', stroke: '#fda4af', core: '#f43f5e' }
  }
};


class DuelReversi {
  constructor() {
    this.canvas = document.getElementById('gameCanvas');
    this.ctx = this.canvas.getContext('2d');
    
    this.state = 'TITLE';
    this.mode = 'VS_CPU';
    this.cpuLevel = 'ADULT';
    this.speedMode = 'NORMAL';
    this.matchDuration = 90;

    this.gridSize = 8;
    this.board = [];
    this.itemsOnBoard = [];

    this.timeLeft = 90;
    this.isClimaxActive = false;
    this.climaxEvent = null;

    this.phoenixCooldown = 0;
    this.freezeOverlayTimer = 0;
    this.matchResultAwarded = false;
    this.isPaused = false;
    this.is3DView = true; // ★3D立体石＆放物線宙返り演出 (ON/OFF切替可能)
    this.onlineRole = null; // 'HOST' | 'GUEST' | null
    this.onlineRoomId = null;
    this.onlinePing = 0;
    this.lastCursorSync = 0;
    window.duelGame = this;
    this.screenFlash = 0;
    this.itemGetPopups = []; // { text, icon, x, y, life, maxLife }
    this.flyingOrbs = []; // { x, y, targetX, targetY, color, progress }
    this.blackHoles = []; // { x, y, life, maxLife, radius }
    this.magicCircles = []; // { x, y, life, maxLife, radius, color }

    this.stats = {
      p1SpeedSum: 0, p1Moves: 0,
      p2SpeedSum: 0, p2Moves: 0,
      p1Items: 0, p2Items: 0,
      p1Overwrites: 0, p2Overwrites: 0,
      p1Corners: 0, p2Corners: 0,
      p1MaxFlips: 0, p2MaxFlips: 0
    };

    this.p1 = {
      color: P1_COLOR,
      name: '1P (黒)',
      cooldown: 0,
      maxCooldown: 1.5,
      hyperTimer: 0,
      freezeTimer: 0,
      stunTimer: 0,
      hasteTimer: 0,
      nextItem: null,
      slotFlash: 0,
      cursor: { r: 3, c: 2 },
      score: 2
    };

    this.p2 = {
      color: P2_COLOR,
      name: '2P (白)',
      cooldown: 0,
      maxCooldown: 1.5,
      hyperTimer: 0,
      freezeTimer: 0,
      stunTimer: 0,
      hasteTimer: 0,
      nextItem: null,
      slotFlash: 0,
      cursor: { r: 4, c: 5 },
      score: 2
    };

    this.cpuActionTimer = 0;

    this.particles = [];
    this.shockwaves = [];
    this.lightningBolts = [];
    this.screenShake = 0;
    this.bannerText = null;
    this.bannerColor = null;
    this.bannerTimer = 0;

    // --- カットイン演出エンジン ---
    this.cutIn = null; // { text, sub, color, life, maxLife }

    // --- ローグライク魔導ダンジョン ---
    this.dungeonFloor = 1;
    this.playerAbilities = [];
    this.draftAbilities = [];
    this.bossActionTimer = 0;
    this.bossMoveCount = 0;

    // --- ボス用カスタムAI画像ストレージ ---
        // --- 5大ボス イラストストレージ（標準SVG＋カスタムAI画像） ---
    this.bossDefaultImages = {};
    for (let f = 1; f <= 5; f++) {
      const img = new Image();
      img.src = BOSS_DEFAULT_SVGS[f];
      this.bossDefaultImages[f] = img;
    }

    this.customBossImages = {};
    for (let f = 1; f <= 5; f++) {
      try {
        const saved = localStorage.getItem(`duel_reversi_boss_${f}`);
        if (saved) {
          const img = new Image();
          img.src = saved;
          this.customBossImages[f] = img;
        }
      } catch(e) {}
    }

    this.dungeonBosses = [
      {
        floor: 1,
        name: '氷結の魔女 エルサリア',
        title: '第1層：氷結の尖塔',
        icon: '🧙‍♀️',
        color: '#38bdf8',
        desc: '【固有能力：凍てつく吐息】\nボスの置く石が氷結トラップ化！プレイヤーが隣接マスに置くと0.8秒凍結される。',
        aiLevel: 'ELEMENTARY'
      },
      {
        floor: 2,
        name: '狂乱の爆撃卿 ボンバート',
        title: '第2層：爆縮の火口',
        icon: '💣',
        color: '#ef4444',
        desc: '【固有能力：爆縮擲弾】\n6秒ごとに擲弾を投下！爆風に巻き込まれた周囲（3×3）の石を強制反転し、ボスの石に染め上げる！',
        aiLevel: 'ADULT'
      },
      {
        floor: 3,
        name: '電脳の神速王 ヴォルテクス',
        title: '第3層：紫電の神殿',
        icon: '⚡',
        color: '#facc15',
        desc: '【固有能力：電光石火】\nボスのクールダウンが常時0.65秒！人間離れした神速連射で盤面を支配する！',
        aiLevel: 'ADULT'
      },
      {
        floor: 4,
        name: '不壊の巨神兵 ゴレムス',
        title: '第4層：鉄壁の巨城',
        icon: '🗿',
        color: '#10b981',
        desc: '【固有能力：金剛不壊】\nボスが3手に1回、絶対に裏返せない【不壊金石】を打ち込んでくる！',
        aiLevel: 'AI'
      },
      {
        floor: 5,
        name: '虚無の魔神 デウス・エクス・マキナ',
        title: '最深層：虚無の特異点',
        icon: '👁️',
        color: '#a855f7',
        desc: '【固有能力：理不尽なる神話支配】\n常時10×10盤面！4秒ごとにアイテム自動乱舞！定期的に全反転やギガボムを撃ってくる規格外チート神！',
        aiLevel: 'AI'
      }
    ];

    this.abilityPool = [
      // N (ノーマル 6種)
      { id: 'N_CD', name: '俊敏のルーン', rarity: 'N', color: '#94a3b8', desc: 'クールダウンが常に0.15秒短縮される。' },
      { id: 'N_OVERRIDE', name: '強奪の心得', rarity: 'N', color: '#94a3b8', desc: '上書き配置のクールダウンが0.4秒短縮される。' },
      { id: 'N_GOLD_START', name: '黄金の布石', rarity: 'N', color: '#94a3b8', desc: '試合開始時、ランダムな自色石が1つ不壊金石になる。' },
      { id: 'N_CHAIN_GOLD', name: '連鎖の錬金術', rarity: 'N', color: '#94a3b8', desc: '2枚以上反転させるたびにゴールド +50G 獲得。' },
      { id: 'N_STUN_STEAL', name: '妨害ショック', rarity: 'N', color: '#94a3b8', desc: '相手がアイテムを獲得した瞬間、相手を0.8秒スタンさせる。' },
      { id: 'N_CORNER_RESET', name: '要塞の恵み', rarity: 'N', color: '#94a3b8', desc: '角（四隅）を取ると、クールダウンが即座に0秒リセット！' },

      // UR (ウルトラレア 5種)
      { id: 'UR_BOARD10', name: '盤面無限界', rarity: 'UR', color: '#38bdf8', desc: '常に10×10マスの超広大盤面でバトルが開始される！' },
      { id: 'UR_CORNER_GOLD', name: '絶対支配者', rarity: 'UR', color: '#38bdf8', desc: '自分が取った角（四隅）が全て【永久不壊金石】に変化！' },
      { id: 'UR_OVERRIDE_BURST', name: '連鎖爆縮', rarity: 'UR', color: '#38bdf8', desc: '相手の石を上書きするたび、周囲1マスを巻き添え反転！' },
      { id: 'UR_DOUBLE_PHOENIX', name: '不死鳥の加護', rarity: 'UR', color: '#38bdf8', desc: '0枚時のフェニックス復活が2回可能になり、復活時神速5秒付与！' },
      { id: 'UR_MINI_VORTEX', name: '魔導引力', rarity: 'UR', color: '#38bdf8', desc: '石を置くたび、周囲1マスの空白マスに小型ブラックホール発生！' },

      // LR (レジェンドレア 3種 - ぶっ壊れ)
      { id: 'LR_AUTO_ITEM', name: '天界の降臨', rarity: 'LR', color: '#ec4899', desc: '【神話】5秒ごとにランダムアイテムが手元に自動装填！' },
      { id: 'LR_ALWAYS_HYPER', name: '常時神速覚醒', rarity: 'LR', color: '#ec4899', desc: '【神話】試合中ずっと神速モード（クールダウン常時0.3秒以下）！' },
      { id: 'LR_PUNISH_THUNDER', name: '神罰代行', rarity: 'LR', color: '#ec4899', desc: '【神話】相手が石を置くたび25%の確率で雷直撃1.5秒スタン！' }
    ];
    // --- スコア＆コンボシステム (一人プレイ用) ---
    this.currentScore = 0;
    this.displayScore = 0;
    this.highScore = 0;
    this.isNewHighScore = false;
    this.floatingTexts = [];

    // --- 経済＆BETシステム (1P/2P個別ウォレット) ---
    this.p1Gold = 1000;
    this.p2Gold = 1000;
    this.gold = 1000;
    this.betAmounts = [0, 100, 300, 500, 'ALL_IN'];
    this.selectedBetIndex = 0;
    this.currentBet = 0;

    // --- ルールモード (CHAOS: アイテム＆奇跡あり / CLASSIC: 競技オセロ純粋勝負) ---
    this.ruleMode = 'CHAOS';

    // --- 盤面ステージスキン ---
    this.equippedBoardId = 'DEFAULT';
    this.boardThemes = {
      DEFAULT: { id: 'DEFAULT', name: 'サイバー・ネオン', bg0: '#0a0f1d', bg1: '#030712', bg2: '#000000', frame: '#334155', cellA: '#1e293b', cellB: '#141e30', center: 'rgba(56, 189, 248, 0.035)' },
      INFERNO: { id: 'INFERNO', name: '溶岩マグマの闘技場', bg0: '#1c0505', bg1: '#0a0202', bg2: '#000000', frame: '#ef4444', cellA: '#2b0c0c', cellB: '#1a0606', center: 'rgba(239, 68, 68, 0.08)' },
      COSMOS: { id: 'COSMOS', name: '宇宙・銀河のチェス盤', bg0: '#1e1035', bg1: '#0b0416', bg2: '#000000', frame: '#a855f7', cellA: '#1a102e', cellB: '#100720', center: 'rgba(168, 85, 247, 0.08)' },
      ZEN: { id: 'ZEN', name: '和風枯山水の石庭', bg0: '#141a14', bg1: '#070b07', bg2: '#000000', frame: '#10b981', cellA: '#162316', cellB: '#0e180e', center: 'rgba(16, 185, 129, 0.08)' },
      TEMPLE: { id: 'TEMPLE', name: '古代黄金の神殿', bg0: '#1c1505', bg1: '#0c0801', bg2: '#000000', frame: '#f59e0b', cellA: '#241a06', cellB: '#181104', center: 'rgba(245, 158, 11, 0.08)' }
    };

    // --- スキン＆限界突破オーラ ---
    this.ownedSkins = ['CLASSIC', 'DEFAULT'];
    this.skinAuraLevel = { DEFAULT: 1 };
    this.equippedSkinId = 'DEFAULT';
    this.selectedBaseColor = 'BLACK'; // 'BLACK' (魔導の浸食) or 'WHITE' (聖光の守護)
    this.gachaResults = null;
    this.matchResultAwarded = false;
    this.isPaused = false;
    this.lastResultBanner = '';
    this.resultGuardTimer = 0;
    this.isPaused = false;

        this.skins = {
      CLASSIC: {
        id: 'CLASSIC',
        name: '伝統の白黒 (ノーマル)',
        rarity: 3,
        color: '#94a3b8',
        passiveName: '無能力 (PURE REVERSI)',
        passiveDesc: '【純粋腕前勝負】特殊能力・短縮・妨害は一切なし！オセロの腕前と配置戦術のみで真剣勝負！',
        desc: '魔導の加護を持たない伝統的なオセロ石。純粋な実力勝負を楽しみたいプレイヤー向け。',
        p1: { grad0: '#262626', grad1: '#171717', grad2: '#0a0a0a', stroke: '#52525b', core: '#71717a' },
        p2: { grad0: '#ffffff', grad1: '#f4f4f5', grad2: '#e4e4e7', stroke: '#a1a1aa', core: '#d4d4d8' }
      },
      DEFAULT: {
        id: 'DEFAULT',
        name: 'サイバー・ネオン',
        rarity: 3,
        color: '#00f0ff',
        passiveName: '電脳ハック＆オーバークロック',
        passiveDesc: '【電脳】配置時に敵CTを+0.25秒ハッキング遅延！さらに自身が3手置くごとに次手CTが0秒（即時配置）！',
        desc: '電脳仮想空間から召喚されたサイバーオセロ。シアンネオンの電脳回路が脈動する。',
        p1: { grad0: '#334155', grad1: '#0f172a', grad2: '#020617', stroke: '#00f0ff', core: '#00f0ff' },
        p2: { grad0: '#ffffff', grad1: '#cbd5e1', grad2: '#64748b', stroke: '#fbbf24', core: '#fbbf24' }
      },
      INFERNO: {
        id: 'INFERNO',
        name: '紅蓮の煉獄',
        rarity: 4,
        color: '#ef4444',
        passiveName: '紅蓮の爆砕陣',
        passiveDesc: '上書き配置のクールダウンペナルティが通常1.45倍➔1.20倍に大幅短縮！',
        desc: '燃え盛る火山岩。打撃時に激しい火炎破片と火の粉エフェクトが舞う。',
        p1: { grad0: '#7f1d1d', grad1: '#450a0a', grad2: '#1a0505', stroke: '#ef4444', core: '#f87171' },
        p2: { grad0: '#fff7ed', grad1: '#fdba74', grad2: '#c2410c', stroke: '#f97316', core: '#fb923c' }
      },
      OCEAN: {
        id: 'OCEAN',
        name: '深海の碧玉',
        rarity: 4,
        color: '#06b6d4',
        passiveName: '氷点下の潮汐',
        passiveDesc: '絶対凍結の効果時間+0.8秒！さらに自身の被状態異常時間を20%軽減！',
        desc: '深海アビスと白蝶貝。水滴の波紋エフェクトと神秘的なアクアの輝き。',
        p1: { grad0: '#064e3b', grad1: '#022c22', grad2: '#021612', stroke: '#10b981', core: '#34d399' },
        p2: { grad0: '#ecfeff', grad1: '#a5f3fc', grad2: '#0e7490', stroke: '#06b6d4', core: '#22d3ee' }
      },
      SAKURA: {
        id: 'SAKURA',
        name: '夜桜吹雪',
        rarity: 4,
        color: '#ec4899',
        passiveName: '夜桜の残影',
        passiveDesc: '相手からのあらゆる状態異常（凍結・スタン）の持続時間を常時35%軽減！',
        desc: '満月の夜に舞い散る花びら。石を置くと優雅な桜の花弁パーティクルが舞う。',
        p1: { grad0: '#500724', grad1: '#2e0214', grad2: '#15010a', stroke: '#ec4899', core: '#f472b6' },
        p2: { grad0: '#fff1f2', grad1: '#fecdd3', grad2: '#be123c', stroke: '#fb7185', core: '#fda4af' }
      },
      THUNDER: {
        id: 'THUNDER',
        name: '紫電の雷神',
        rarity: 4,
        color: '#3b82f6',
        passiveName: '紫電の過負荷',
        passiveDesc: '神速魔力（ハイパー）時間+1.5秒！さらに神速中の石配置スコア+50%！',
        desc: '帯電した青紫の避雷針。配置の瞬間に激しい青白きプラズマ放電が炸裂！',
        p1: { grad0: '#1e1b4b', grad1: '#0f172a', grad2: '#020617', stroke: '#60a5fa', core: '#93c5fd' },
        p2: { grad0: '#eff6ff', grad1: '#bfdbfe', grad2: '#3b82f6', stroke: '#38bdf8', core: '#e0f2fe' }
      },
      CRYSTAL: {
        id: 'CRYSTAL',
        name: '氷晶の宝冠',
        rarity: 4,
        color: '#2dd4bf',
        passiveName: '絶対零度の角城',
        passiveDesc: '角を取ると相手を1.0秒凍結させ、自身のクールダウンを即座にリセット！',
        desc: '純度100%のダイヤモンドとエメラルド。透明感あるプリズム光彩が輝く。',
        p1: { grad0: '#0f766e', grad1: '#115e59', grad2: '#042f2e', stroke: '#2dd4bf', core: '#5eead4' },
        p2: { grad0: '#f0fdfa', grad1: '#ccfbf1', grad2: '#0d9488', stroke: '#14b8a6', core: '#f0fdf4' }
      },
      MECHA: {
        id: 'MECHA',
        name: '機巧蒸気重機',
        rarity: 4,
        color: '#f59e0b',
        passiveName: '蒸気重装甲カウンター',
        passiveDesc: '相手が自分の石を上書きした時、反動衝撃で相手のCTを+0.6秒遅延！',
        desc: '重厚な鋼鉄歯車と真鍮ピストン。配置時に白煙スチームと火花が噴き出す！',
        p1: { grad0: '#451a03', grad1: '#292524', grad2: '#1c1917', stroke: '#d97706', core: '#f59e0b' },
        p2: { grad0: '#fafaf9', grad1: '#d6d3d1', grad2: '#78716c', stroke: '#a8a29e', core: '#f5f5f4' }
      },
      RETRO: {
        id: 'RETRO',
        name: '8-BITドット',
        rarity: 3,
        color: '#22c55e',
        passiveName: 'ピクセル・コンボ',
        passiveDesc: '連鎖反転時のスコア獲得倍率が常時+15%アップ！',
        desc: '懐かしのファミコン風。石を置くと角ばったピクセルチップがポンッと飛び散る！',
        p1: { grad0: '#18181b', grad1: '#09090b', grad2: '#000000', stroke: '#22c55e', core: '#4ade80' },
        p2: { grad0: '#ffffff', grad1: '#e4e4e7', grad2: '#a1a1aa', stroke: '#e11d48', core: '#f43f5e' }
      },
      VOID: {
        id: 'VOID',
        name: '混沌の虚無',
        rarity: 5,
        color: '#a855f7',
        passiveName: '虚無の引力特異点',
        passiveDesc: '磁気破砕の範囲が3×3拡大＆アイテムスコア+1500！2連鎖時15%で敵スタン！',
        desc: '【SSR】事象の地平面から抽出した暗黒物質。時空が歪む重力渦が周囲を呑み込む。',
        p1: { grad0: '#3b0764', grad1: '#1e0136', grad2: '#090012', stroke: '#a855f7', core: '#c084fc' },
        p2: { grad0: '#faf5ff', grad1: '#e9d5ff', grad2: '#6b21a8', stroke: '#d8b4fe', core: '#e9d5ff' }
      },
      SOLAR: {
        id: 'SOLAR',
        name: '神聖なる太陽',
        rarity: 5,
        color: '#eab308',
        passiveName: '太陽神の天寵',
        passiveDesc: '開始時中央に不壊金石配置！金石配置で+150G＆常時CT-0.10秒！',
        desc: '【SSR】太陽神の祝福を受けた究極石。黄金フレアと十字光芒が盤面に降り注ぐ。',
        p1: { grad0: '#422006', grad1: '#261202', grad2: '#100600', stroke: '#eab308', core: '#facc15' },
        p2: { grad0: '#fefce8', grad1: '#fef08a', grad2: '#a16207', stroke: '#fde047', core: '#fef08a' }
      },
      GENESIS: {
        id: 'GENESIS',
        name: '創世神竜の極光',
        rarity: 6,
        color: '#ec4899',
        passiveName: '創世神竜の全能覇権',
        passiveDesc: '【★6 LR ぶっ壊れ】全CT-0.5s超速化！配置時周囲8マスの敵石を強制全反転！3手毎に最強アイテム自動装填！状態異常完全無効＆上書きペナルティ0！反転時+100G！',
        desc: '【★6 LR】排出率1.5%の幻の最高神スキン！神竜の極彩虹炎と回転魔導環がもわもわと立ち昇る！',
        p1: { grad0: '#2e1065', grad1: '#17063b', grad2: '#090117', stroke: '#ec4899', core: '#00f0ff' },
        p2: { grad0: '#fffbeb', grad1: '#fde68a', grad2: '#b45309', stroke: '#f59e0b', core: '#ffffff' }
      },
      CHRONOS: {
        id: 'CHRONOS',
        name: '終焉冥王クロノス',
        rarity: 6,
        color: '#f43f5e',
        passiveName: '時空改変・ザ・ワールド',
        passiveDesc: '【★6 LR ぶっ壊れ】敵CT常時+0.4s遅延！配置マスと対称マスへ時空同時配置！5手毎に敵を2.5秒完全時間停止！自石は敵の上書きを完全拒絶＆反撃凍結！',
        desc: '【★6 LR】時空を統べる終焉の冥王オセロ。深紅の時空時計と黒炎オーラが盤面を支配する！',
        p1: { grad0: '#4c0519', grad1: '#1f020a', grad2: '#000000', stroke: '#f43f5e', core: '#fb7185' },
        p2: { grad0: '#fdf2f8', grad1: '#fbcfe8', grad2: '#be185d', stroke: '#fda4af', core: '#f43f5e' }
      }
    };
    this.loadUserData();
    this.keysDown = {};
    this.keyRepeatInitialDelay = 0.18; // 初回リピート遅延 (秒)
    this.keyRepeatRate = 0.075; // 連続移動速度 (秒)
    this.initEvents();
    this.initBoard(8, this.currentDotArt || (this.pvpUseDotArt ? 'INVADER' : null));
    // ★5 SOLAR (神聖なる太陽) パッシブ：試合開始時に自色石が1つ不壊金石化
    if (this.equippedSkinId === 'SOLAR') {
      setTimeout(() => {
        const mid = Math.floor(this.gridSize / 2);
        if (this.board[mid - 1] && this.board[mid - 1][mid]) {
          this.board[mid - 1][mid].isGold = true;
          this.board[mid - 1][mid].scale = 1.4;
        }
      }, 100);
    }
  }

  get gold() { return this.p1Gold; }
  set gold(v) { this.p1Gold = v; }

  loadUserData() {
    try {
      const data = localStorage.getItem('duel_reversi_save_v16') || localStorage.getItem('duel_reversi_save');
      if (data) {
        const p = JSON.parse(data);
        if (typeof p.p1Gold === 'number' && !isNaN(p.p1Gold)) this.p1Gold = p.p1Gold;
        else if (typeof p.gold === 'number' && !isNaN(p.gold)) this.p1Gold = p.gold;
        if (typeof p.p2Gold === 'number' && !isNaN(p.p2Gold)) this.p2Gold = p.p2Gold;
        if (typeof p.highScore === 'number') this.highScore = p.highScore;
        if (Array.isArray(p.ownedSkins)) this.ownedSkins = p.ownedSkins;
        if (p.skinAuraLevel && typeof p.skinAuraLevel === 'object') this.skinAuraLevel = p.skinAuraLevel;
        if (p.equippedSkinId && this.skins[p.equippedSkinId]) this.equippedSkinId = p.equippedSkinId;
        if (p.equippedBoardId && this.boardThemes[p.equippedBoardId]) this.equippedBoardId = p.equippedBoardId;
      }
    } catch (e) {
      console.warn('LocalStorage not accessible:', e);
    }
    // 安全保証（破産防止 & 初期資金保証）
    if (typeof this.p1Gold !== 'number' || isNaN(this.p1Gold) || this.p1Gold < 200) this.p1Gold = 3000;
    if (typeof this.p2Gold !== 'number' || isNaN(this.p2Gold)) this.p2Gold = 1000;
    if (!Array.isArray(this.ownedSkins)) this.ownedSkins = ['CLASSIC', 'DEFAULT'];
    if (!this.ownedSkins.includes('DEFAULT')) this.ownedSkins.push('DEFAULT');
    if (!this.ownedSkins.includes('CLASSIC')) this.ownedSkins.unshift('CLASSIC');
    if (!this.skinAuraLevel || typeof this.skinAuraLevel !== 'object') this.skinAuraLevel = {};
    if (!this.skinAuraLevel['DEFAULT']) this.skinAuraLevel['DEFAULT'] = 1;
    if (!this.skinAuraLevel['CLASSIC']) this.skinAuraLevel['CLASSIC'] = 1;
  }

  saveUserData() {
    try {
      localStorage.setItem('duel_reversi_save_v16', JSON.stringify({
        p1Gold: this.p1Gold,
        p2Gold: this.p2Gold,
        highScore: this.highScore,
        ownedSkins: this.ownedSkins,
        skinAuraLevel: this.skinAuraLevel,
        equippedSkinId: this.equippedSkinId,
        equippedBoardId: this.equippedBoardId
      }));
    } catch (e) {
      // ignore
    }
  }

  pullGacha(count = 1) {
    const cost = count === 10 ? 1800 : 200;
    if (this.p1Gold < cost) {
      this.showBanner('1Pのゴールドが足りません！', '#ef4444', 1.5);
      audio.playWarning();
      return;
    }
    this.p1Gold -= cost;
    const results = [];
    let hasSSR = false;

    for (let i = 0; i < count; i++) {
      const rand = Math.random();
      let pickedId = 'DEFAULT';
      let isLR = false;
      if (rand < 0.02) {
        // 【★6 LR】(2.0%の幻！ 創世神竜 or 終焉冥王)
        pickedId = Math.random() < 0.5 ? 'GENESIS' : 'CHRONOS';
        isLR = true;
        hasSSR = true;
      } else if (rand < 0.15) {
        // 【★5 SSR】(13.5%)
        pickedId = Math.random() < 0.5 ? 'VOID' : 'SOLAR';
        hasSSR = true;
      } else if (rand < 0.70) {
        // 【★4 SR】(55%)
        const pool = ['INFERNO', 'OCEAN', 'SAKURA', 'THUNDER', 'CRYSTAL', 'MECHA'];
        pickedId = pool[Math.floor(Math.random() * pool.length)];
      } else {
        // 【★3 R】(30%)
        pickedId = Math.random() < 0.5 ? 'DEFAULT' : 'RETRO';
      }

      const isNew = !this.ownedSkins.includes(pickedId);
      let isLimitBreak = false;
      let newLv = 1;

      if (isNew) {
        this.ownedSkins.push(pickedId);
        this.skinAuraLevel[pickedId] = 1;
      } else {
        // 【新機能】被りでオーラ限界突破（Lv.1〜3 MAX）
        const curLv = this.skinAuraLevel[pickedId] || 1;
        if (curLv < 3) {
          this.skinAuraLevel[pickedId] = curLv + 1;
          newLv = curLv + 1;
          isLimitBreak = true;
        } else {
          this.p1Gold += 200; // MAX時返還
        }
      }

      results.push({
        skin: this.skins[pickedId],
        isNew: isNew,
        isLimitBreak: isLimitBreak,
        newLv: newLv
      });
    }

    this.saveUserData();
    this.gachaResults = results;
    if (hasSSR) {
      audio.playLightningBoom();
      this.triggerScreenShake(24);
      this.screenFlash = 0.5;
    } else {
      audio.playItemGet();
      this.triggerScreenShake(10);
    }
  }

  initBoard(size = 8, dotArtKey = null) {
    this.gridSize = size;
    this.board = [];
    for (let r = 0; r < size; r++) {
      this.board[r] = [];
      for (let c = 0; c < size; c++) {
        this.board[r][c] = { color: 0, scale: 1.0, isGold: false, glow: 0, flipTimer: 0, flipDur: 0.34, flipDelay: 0, prevColor: 0 };
      }
    }

    if (dotArtKey && DOT_ART_PATTERNS[dotArtKey]) {
      const pattern = DOT_ART_PATTERNS[dotArtKey];
      // ★10x10盤面の場合、8x8ドット絵を中央(+1, +1)にセンタリング配置！
      // これにより外周に1マスのゆとりが生まれ、絵柄の潰れを解消＆ダイナミックな外周回り込みを実現！
      // パターンの最大座標を自動検出 (8x8パターンなら中央+1オフセット、10x10フルキャンバスなら等倍配置)
      const maxCoord = pattern.reduce((m, p) => Math.max(m, p.r, p.c), 0);
      const offsetR = (size === 10 && maxCoord <= 7) ? 1 : 0;
      const offsetC = (size === 10 && maxCoord <= 7) ? 1 : 0;

      pattern.forEach(p => {
        const tr = p.r + offsetR;
        const tc = p.c + offsetC;
        if (this.board[tr] && this.board[tr][tc]) {
          this.board[tr][tc].color = p.color;
          this.board[tr][tc].scale = 1.35;
        }
      });
    } else {
      const mid = Math.floor(size / 2);
      this.board[mid - 1][mid - 1].color = P2_COLOR;
      this.board[mid - 1][mid].color = P1_COLOR;
      this.board[mid][mid - 1].color = P1_COLOR;
      this.board[mid][mid].color = P2_COLOR;
    }

    this.itemsOnBoard = [];
    this.particles = [];
    this.floatingTexts = [];
    this.updateScores();
  }

  expandBoard() {
    if (this.gridSize >= 10) return;
    const oldSize = this.gridSize;
    const newSize = 10;
    const offset = Math.floor((newSize - oldSize) / 2);
    const newBoard = [];
    for (let r = 0; r < newSize; r++) {
      newBoard[r] = [];
      for (let c = 0; c < newSize; c++) {
        newBoard[r][c] = { color: 0, isGold: false, scale: 0.1, glow: 1.0, flipTimer: 0, flipDur: 0.34, flipDelay: 0, prevColor: 0 };
      }
    }
    for (let r = 0; r < oldSize; r++) {
      for (let c = 0; c < oldSize; c++) {
        if (this.board[r] && this.board[r][c]) {
          newBoard[r + offset][c + offset] = this.board[r][c];
        }
      }
    }
    this.itemsOnBoard.forEach(item => {
      item.r += offset;
      item.c += offset;
    });
    this.p1.cursor.r = Math.min(newSize - 1, this.p1.cursor.r + offset);
    this.p1.cursor.c = Math.min(newSize - 1, this.p1.cursor.c + offset);
    this.p2.cursor.r = Math.min(newSize - 1, this.p2.cursor.r + offset);
    this.p2.cursor.c = Math.min(newSize - 1, this.p2.cursor.c + offset);

    this.gridSize = newSize;
    this.board = newBoard;
    this.triggerScreenShake(26);
    this.showBanner('結界崩壊！盤面拡張 10×10！', '#f59e0b', 3.0);
    audio.playWarning();
  }

  isPvpFairMode() {
    return this.mode === 'PVP' || this.mode === 'PVP_LOCAL' || this.mode === 'PVP_ONLINE';
  }

  startMatch(syncPacket = null) {
    if (window.duelNet && window.duelNet.isConnected && this.mode !== 'DUNGEON' && this.mode !== 'VS_CPU') {
      this.mode = 'PVP_ONLINE';
    }

    let targetGridSize = 8;
    let chosenDotArt = this.currentDotArt;

    if (syncPacket) {
      targetGridSize = syncPacket.gridSize || 8;
      chosenDotArt = syncPacket.dotArt || null;
      this.pvpUseDotArt = !!chosenDotArt;
      if (syncPacket.speedMode) this.speedMode = syncPacket.speedMode;
      if (syncPacket.matchDuration) this.matchDuration = syncPacket.matchDuration;
      if (syncPacket.ruleMode) this.ruleMode = syncPacket.ruleMode;
      if (typeof syncPacket.betIndex === 'number') this.selectedBetIndex = syncPacket.betIndex;
    } else if (this.isPvpFairMode() || this.mode === 'VS_CPU') {
      if (this.pvpUseDotArt) {
        // ★ドット絵選択時はPVP・CPU戦問わず【確定で10×10】に拡張し、310種からランダム展開！
        targetGridSize = 10;
        const artKeys = Object.keys(DOT_ART_PATTERNS);
        chosenDotArt = artKeys[Math.floor(Math.random() * artKeys.length)];
      } else {
        // 通常オセロ配置は 8×8 (中央2×2)
        targetGridSize = 8;
        chosenDotArt = null;
      }
      if (this.mode === 'PVP_ONLINE' && window.duelNet && window.duelNet.isConnected) {
        window.duelNet.send({
          t: 'START_MATCH',
          gridSize: targetGridSize,
          dotArt: chosenDotArt,
          speedMode: this.speedMode,
          matchDuration: this.matchDuration,
          ruleMode: this.ruleMode,
          betIndex: this.selectedBetIndex
        });
      }
    } else if (this.mode === 'DUNGEON') {
      if (this.playerAbilities.includes('UR_BOARD10') || (this.dungeonSubStage === 'BOSS' && this.dungeonFloor === 5)) {
        targetGridSize = 10;
      } else {
        targetGridSize = 8;
      }
    } else {
      targetGridSize = 8;
    }

    this.initBoard(targetGridSize, chosenDotArt);
    // カーソル位置を盤面中央付近にリセット
    const mid = Math.floor(targetGridSize / 2);
    this.p1.cursor = { r: mid, c: mid - 1 };
    this.p2.cursor = { r: mid - 1, c: mid };
    this.timeLeft = this.matchDuration;
    this.currentScore = 0;
    this.displayScore = 0;
    this.isNewHighScore = false;
    this.floatingTexts = [];
    this.isClimaxActive = false;
    this.climaxEvent = null;
    this.phoenixCooldown = 0;
    this.freezeOverlayTimer = 0;
    this.matchResultAwarded = false;
    this.isPaused = false;
    this.resultGuardTimer = 1.5; // 【改善点①】1.5秒誤爆ガードタイマー

    // BET額の確定
    const betSetting = this.betAmounts[this.selectedBetIndex];
    if (betSetting === 'ALL_IN') {
      this.currentBet = Math.min(this.p1Gold, this.p2Gold);
    } else {
      this.currentBet = Math.min(betSetting, this.p1Gold, this.p2Gold);
    }
    let baseCT = this.speedMode === 'TURBO' ? 1.0 : 1.5;

    // スキン固有の基本CT短縮パッシブ (※PVP対人戦では完全公平のため無効化)
    const eqSkin = this.skins[this.equippedSkinId] || this.skins['DEFAULT'];
    if (!this.isPvpFairMode() && this.ruleMode !== 'CLASSIC') {
      if (eqSkin.id === 'SOLAR') baseCT -= 0.10; // ★5 SOLAR: -0.10s
      else if (eqSkin.id === 'GENESIS') baseCT -= 0.50; // ★6 LR GENESIS (神竜): 常時-0.50sぶっ壊れ超速化！
    }
    baseCT = Math.max(0.2, baseCT);

    
    this.stats = {
      p1SpeedSum: 0, p1Moves: 0,
      p2SpeedSum: 0, p2Moves: 0,
      p1Items: 0, p2Items: 0,
      p1Overwrites: 0, p2Overwrites: 0,
      p1Corners: 0, p2Corners: 0,
      p1MaxFlips: 0, p2MaxFlips: 0
    };

    this.p1.maxCooldown = baseCT;
    this.p1.cooldown = 0;
    this.p1.nextItem = null;
    this.p1.slotFlash = 0;
    this.p1.hyperTimer = 0;
    this.p1.freezeTimer = 0;
    this.p1.stunTimer = 0;
    this.p1.hasteTimer = 0;
    this.p1.cursor = { r: 3, c: 2 };

    this.p2.maxCooldown = baseCT;
    if (!this.isPvpFairMode() && this.ruleMode !== 'CLASSIC' && eqSkin.id === 'CHRONOS') {
      this.p2.maxCooldown += 0.40; // ★6 LR CHRONOS: 相手CT常時+0.40s遅延
    }
    this.p2.cooldown = 0;
    this.p2.nextItem = null;
    this.p2.slotFlash = 0;
    this.p2.hyperTimer = 0;
    this.p2.freezeTimer = 0;
    this.p2.stunTimer = 0;
    this.p2.hasteTimer = 0;
    this.p2.cursor = { r: 4, c: 5 };
    if (this.mode === 'PVP_ONLINE') {
      this.p1.name = this.onlineRole === 'HOST' ? '1P (YOU/黒)' : '1P (HOST/黒)';
      this.p2.name = this.onlineRole === 'GUEST' ? '2P (YOU/白)' : '2P (GUEST/白)';
    } else {
      this.p1.name = '1P (黒)';
      this.p2.name = this.mode === 'VS_CPU' 
        ? `CPU [${this.cpuLevel === 'ELEMENTARY' ? '小学生' : this.cpuLevel === 'ADULT' ? '大人' : '超知能AI'}]`
        : '2P (白)';
    }

    this.state = 'COUNTDOWN';
    this.countdownSec = 3.2;
    this.isClimaxActive = false;
    audio.init();
    audio.setClimax(false); // ★試合開始時は確実に通常速度 (1.0倍) にリセット！
    audio.startBgm();
  }

  updateScores() {
    let p1Count = 0;
    let p2Count = 0;
    let p1Corners = 0;
    let p2Corners = 0;

    for (let r = 0; r < this.gridSize; r++) {
      for (let c = 0; c < this.gridSize; c++) {
        const col = this.board[r][c].color;
        if (col === P1_COLOR) {
          p1Count++;
          if ((r === 0 || r === this.gridSize - 1) && (c === 0 || c === this.gridSize - 1)) p1Corners++;
        }
        if (col === P2_COLOR) {
          p2Count++;
          if ((r === 0 || r === this.gridSize - 1) && (c === 0 || c === this.gridSize - 1)) p2Corners++;
        }
      }
    }
    this.p1.score = p1Count;
    this.p2.score = p2Count;
    this.stats.p1Corners = Math.max(this.stats.p1Corners, p1Corners);
    this.stats.p2Corners = Math.max(this.stats.p2Corners, p2Corners);
  }

  getFlips(r, c, color) {
    if (r < 0 || r >= this.gridSize || c < 0 || c >= this.gridSize) return [];
    const opp = color === P1_COLOR ? P2_COLOR : P1_COLOR;
    const dirs = [
      [-1, -1], [-1, 0], [-1, 1],
      [0, -1],           [0, 1],
      [1, -1],  [1, 0],  [1, 1]
    ];
    let allFlips = [];

    for (const [dr, dc] of dirs) {
      let cr = r + dr;
      let cc = c + dc;
      let line = [];
      while (cr >= 0 && cr < this.gridSize && cc >= 0 && cc < this.gridSize) {
        const cell = this.board[cr][cc];
        if (cell.color === opp) {
          if (cell.isGold) break;
          line.push({ r: cr, c: cc });
        } else if (cell.color === color) {
          if (line.length > 0) allFlips = allFlips.concat(line);
          break;
        } else {
          break;
        }
        cr += dr;
        cc += dc;
      }
    }
    return allFlips;
  }

  canPlace(r, c, color, activeItem = null) {
    if (r < 0 || r >= this.gridSize || c < 0 || c >= this.gridSize) return false;
    const cell = this.board[r][c];

    if (cell.isGold) return false;
    if (activeItem && activeItem.id === 'PAINT') return true;

    if (cell.color === 0) {
      return this.getFlips(r, c, color).length > 0;
    }
    if (cell.color !== color) {
      return this.getFlips(r, c, color).length > 0;
    }
    return false;
  }


  // --- 石の色＆スキン属性によるパッシブ能力システム ---
  applyStoneColorPassives(player, isOverride, isCorner, flips, moveR = player.cursor.r, moveC = player.cursor.c) {
    // ★2人対戦(PVP/PVP_LOCAL/PVP_ONLINE)時はパッシブスキルを完全無効化！(フェアな実力勝負)
    if (this.isPvpFairMode() || this.ruleMode === 'CLASSIC' || this.ruleMode === 'PURE' || this.equippedSkinId === 'CLASSIC') return;

    const r = (moveR !== undefined) ? moveR : player.cursor.r;
    const c = (moveC !== undefined) ? moveC : player.cursor.c;
    const isP1 = player.color === P1_COLOR;
    const pos = this.cellToPixel(r, c);

    // 基本石色パッシブ (黒石: 浸食反転 / 白石: 聖光シールド)
    if (this.equippedSkinId !== 'CLASSIC') {
      if (player.color === P1_COLOR) {
        if (Math.random() < 0.28 && flips.length > 0) {
          const adj = [[-1,0],[1,0],[0,-1],[0,1]];
          for (const [dr, dc] of adj) {
            const nr = r + dr, nc = c + dc;
            if (nr >= 0 && nr < this.gridSize && nc >= 0 && nc < this.gridSize) {
              if (this.board[nr][nc].color === P2_COLOR && !this.board[nr][nc].isGold) {
                this.board[nr][nc].color = P1_COLOR;
                this.board[nr][nc].scale = 1.35;
                this.addFloatingText('🌑 黒石浸食！隣接石を反転！', '#38bdf8', pos.x, pos.y - 25, 0.9);
                this.addShockwave(nr, nc, '#38bdf8', 40);
                break;
              }
            }
          }
        }
      } else {
        if (isCorner || flips.length >= 3) {
          player.whiteAegisBuff = true;
          this.addFloatingText('🛡️ 白石聖光！次回上書きペナルティ無効！', '#fde047', pos.x, pos.y - 25, 0.9);
        }
      }
    }

    // スキン固有パッシブ (ダンジョン/VS CPU時のみ発動)
    const skin = this.skins[this.equippedSkinId];
    if (!skin || !skin.passive) return;

    switch (this.equippedSkinId) {
      case 'INFERNO':
        if (isP1 && isOverride && Math.random() < 0.40) {
          const other = player === this.p1 ? this.p2 : this.p1;
          other.cooldown += 0.45;
          this.addFloatingText('🔥 業火熱波！敵CT+0.45s！', '#f97316', pos.x, pos.y - 30, 0.9);
        }
        break;
      case 'OCEAN':
        if (isP1 && isCorner) {
          player.hasteTimer = 3.5;
          this.addFloatingText('🌊 海流加速！CT半減！', '#38bdf8', pos.x, pos.y - 30, 1.0);
        }
        break;
      case 'THUNDER':
        if (isP1 && flips.length >= 2 && Math.random() < 0.35) {
          player.hyperTimer = 2.0;
          this.addFloatingText('⚡ 迅雷覚醒！2秒神速！', '#facc15', pos.x, pos.y - 30, 1.0);
          audio.playLightningBoom();
        }
        break;
      case 'GENESIS':
        if (isP1 && Math.random() < 0.20 && flips.length > 0) {
          const randFlip = flips[Math.floor(Math.random() * flips.length)];
          this.board[randFlip.r][randFlip.c].isGold = true;
          this.addShockwave(randFlip.r, randFlip.c, '#facc15', 75);
          this.addFloatingText('👑 創世奇跡！不壊金石化！', '#facc15', pos.x, pos.y - 35, 1.1);
        }
        break;
    }
  }
  executeMove(player, r, c, fromNetwork = false) {
    if (!fromNetwork) {
      if (player.cooldown > 0 && player.hyperTimer <= 0) return false;
      if (player.freezeTimer > 0 || player.stunTimer > 0) return false;
    }

    const activeItem = player.nextItem;
    if (!fromNetwork && !this.canPlace(r, c, player.color, activeItem)) return false;

    const cell = this.board[r][c];
    const isOverride = cell.color !== 0 && cell.color !== player.color;

    // ★6 LR CHRONOS: 相手(P2)がP1の石を上書きしようとした場合、拒絶＆反撃凍結！
    if (!this.isPvpFairMode() && player === this.p2 && isOverride && cell.color === P1_COLOR && this.equippedSkinId === 'CHRONOS') {
      player.cooldown += 1.5;
      player.freezeTimer = 1.5;
      this.showBanner('⏳ 冥王障壁：上書きを拒絶し敵を凍結カウンター！', '#f43f5e', 1.5);
      audio.playFreezeGlass();
      return false;
    }

    // 同時激突相殺（双方がほぼ同フレーム 0.08秒以内に同一マスへ配置を試みた場合のみ）
    const nowSec = performance.now() / 1000;
    const otherPlayer = player === this.p1 ? this.p2 : this.p1;
    if (this.lastMoveAttempt && 
        this.lastMoveAttempt.player === otherPlayer &&
        this.lastMoveAttempt.r === r && 
        this.lastMoveAttempt.c === c && 
        (nowSec - this.lastMoveAttempt.time) < 0.08) {
      this.p1.stunTimer = 0.6;
      this.p2.stunTimer = 0.6;
      this.triggerScreenShake(18);
      this.addShockwave(r, c, '#f59e0b', 95);
      this.addLightning(r, c);
      this.triggerCutIn('💥 CLASH BURST!!', '激突相殺！双方が0.6秒スタン！', '#ef4444');
      this.showBanner('💥 CLASH BURST! 激突相殺！', '#ef4444', 1.0);
      audio.playLightningBoom();
      this.lastMoveAttempt = null;
      return false;
    }
    this.lastMoveAttempt = { player, r, c, time: nowSec };

    const flips = this.getFlips(r, c, player.color);
    const isCorner = (r === 0 || r === this.gridSize - 1) && (c === 0 || c === this.gridSize - 1);
    const flipCount = flips.length;

    // ========================================================
    // ★【不壊のオセロ基本処理：何があっても最優先で確定！】
    // ========================================================
    // 1) 石を配置 (★3Dバウンスアニメーション付与)
    cell.prevColor = cell.color || player.color;
    cell.color = player.color;
    cell.scale = 1.48;
    cell.flipDelay = 0;
    cell.flipDur = 0.24;
    cell.flipTimer = isOverride ? 0.28 : 0;

    // P2Pオンライン対戦時：自分の配置パケットを相手へ即座に送信
    if (!fromNetwork && this.mode === 'PVP_ONLINE' && window.duelNet && window.duelNet.isConnected) {
      window.duelNet.send({
        t: 'MOVE',
        p: player === this.p1 ? 1 : 2,
        r: r,
        c: c
      });
    }

    // 2) クールタイムを即座に計算・設定（1.5秒を確実に保証）
    if (player.hyperTimer <= 0) {
      let overrideMult = 1.45;
      if (!this.isPvpFairMode()) {
        if (player === this.p1 && this.equippedSkinId === 'INFERNO') overrideMult = 1.20;
        if (player === this.p1 && (this.equippedSkinId === 'GENESIS' || this.equippedSkinId === 'CHRONOS')) overrideMult = 1.0;
        if (player === this.p1 && this.mode === 'DUNGEON' && this.playerAbilities.includes('N_OVERRIDE')) overrideMult = Math.min(overrideMult, 1.15);
        if (player.whiteAegisBuff) { overrideMult = 1.0; player.whiteAegisBuff = false; }
      }

      let base = isOverride ? player.maxCooldown * overrideMult : player.maxCooldown;
      if (player.hasteTimer > 0) base *= 0.5;
      player.cooldown = base; // ★確実にセット
    }

    // 3) 挟んだ相手の石を即座に反転！（★3D放物線ジャンプ＆180度宙返りウェーブ！）
    if (!activeItem || activeItem.id !== 'PAINT') {
      flips.forEach((pos, idx) => {
        const target = this.board[pos.r][pos.c];
        target.prevColor = target.color;
        target.color = player.color;
        target.scale = 1.38;
        target.flipDelay = idx * 0.035;
        target.flipDur = 0.34;
        target.flipTimer = 0.34;
        try {
          setTimeout(() => audio.playFlip(idx, this.equippedSkinId), idx * 35);
          this.addSkinPlacementVfx(pos.r, pos.c, player.color, this.equippedSkinId);
        } catch (e) {}
      });
    }

    // 4) 統計情報・スコア更新
    if (player === this.p1) {
      this.stats.p1Moves++;
      this.stats.p1MaxFlips = Math.max(this.stats.p1MaxFlips, flipCount);
      if (isOverride) this.stats.p1Overwrites++;

      if (this.mode === 'VS_CPU' || this.mode === 'DUNGEON') {
        let comboMult = 1.0;
        if (flipCount === 2) comboMult = 1.3;
        else if (flipCount === 3) comboMult = 1.6;
        else if (flipCount === 4) comboMult = 2.0;
        else if (flipCount >= 5) comboMult = 2.5 + (flipCount - 5) * 0.4;
        if (this.equippedSkinId === 'RETRO') comboMult *= 1.15;
        if (this.equippedSkinId === 'THUNDER' && player.hyperTimer > 0) comboMult *= 1.5;

        let turnPts = 100;
        if (isOverride) turnPts += 300;
        if (isCorner) turnPts += 1000;
        turnPts += flipCount * 80;

        const totalEarned = Math.floor(turnPts * comboMult);
        this.currentScore += totalEarned;

        const pCoord = this.cellToPixel(r, c);
        if (flipCount >= 4) {
          this.addFloatingText(`🔥 ${flipCount}連鎖 COMBO! +${totalEarned.toLocaleString()}`, '#facc15', pCoord.x, pCoord.y - 18, 1.35);
        } else if (isCorner) {
          this.addFloatingText(`🏰 四隅奪取!! +${totalEarned.toLocaleString()}`, '#38bdf8', pCoord.x, pCoord.y - 18, 1.25);
        } else if (isOverride) {
          this.addFloatingText(`💥 上書き成功! +${totalEarned.toLocaleString()}`, '#f97316', pCoord.x, pCoord.y - 18, 1.15);
        } else {
          this.addFloatingText(`+${totalEarned.toLocaleString()}`, '#38bdf8', pCoord.x, pCoord.y - 18, 1.0);
        }
      }
    } else {
      this.stats.p2Moves++;
      this.stats.p2MaxFlips = Math.max(this.stats.p2MaxFlips, flips.length);
      if (isOverride) this.stats.p2Overwrites++;
    }

    
        // 雑魚戦特殊ルール: GOLD_RUSH (反転ごとに+25G)
        if (this.activeRuleMod === 'GOLD_RUSH' && player === this.p1 && flipCount > 0) {
          const rushGold = flipCount * 25;
          this.p1Gold += rushGold;
          const grPos = this.cellToPixel(r, c); this.addFloatingText(`💰 ゴールドラッシュ +${rushGold}G!`, '#fbbf24', grPos.x, grPos.y - 30, 1.2);
        }
        // 雑魚戦特殊ルール: CORNER_RUSH (角でCT即リセット)
        if (this.activeRuleMod === 'CORNER_RUSH' && isCorner) {
          player.cooldown = 0;
          const crPos = this.cellToPixel(r, c); this.addFloatingText('⚡ 四隅チャージ！CT即時リセット！', '#facc15', crPos.x, crPos.y - 30, 1.2);
        }

    this.updateScores();

    // ========================================================
    // ★【効果音・演出・スキル・ダンジョン処理（安全防護）】
    // ========================================================
    try {
      // 効果音＆シェイク
      if (player.hyperTimer > 0) {
        audio.playHyperBlastBoom();
        this.triggerScreenShake(14);
        this.screenFlash = 0.25;
        this.addSkinPlacementVfx(r, c, player.color, 'THUNDER');
      } else if (activeItem) {
        audio.playEnchantSlam();
        this.triggerScreenShake(16);
      } else if (isOverride) {
        audio.playOverrideCrash();
        this.triggerScreenShake(8);
      } else {
        audio.playClick(this.equippedSkinId);
        this.triggerScreenShake(3);
      }

      this.addShockwave(r, c, player.color === P1_COLOR ? '#00f0ff' : '#fbbf24', isOverride ? 85 : 45);

      // アイテム発動
      if (activeItem) {
        if (player === this.p1) this.stats.p1Items++;
        else this.stats.p2Items++;
        this.applyItemEffect(player, r, c, activeItem, flips);
        player.nextItem = null;
      }

      // ダンジョン第1層ボス戦：氷結の魔女 エルサリアの氷結トラップ (案3+マイルド調整)
      if (this.mode === 'DUNGEON' && this.dungeonFloor === 1 && this.dungeonSubStage === 'BOSS' && player === this.p1) {
        if (!this.elsariaTrapCooldown || this.elsariaTrapCooldown <= 0) {
          let nearBossStone = false;
          for (let dr = -1; dr <= 1; dr++) {
            for (let dc = -1; dc <= 1; dc++) {
              if (dr === 0 && dc === 0) continue;
              const nr = r + dr, nc = c + dc;
              if (nr >= 0 && nr < this.gridSize && nc >= 0 && nc < this.gridSize) {
                if (this.board[nr][nc].color === this.p2.color) nearBossStone = true;
              }
            }
          }
          // 確率を15%にマイルド化、凍結0.4秒、5秒間の安全クールタイム
          if (nearBossStone && Math.random() < 0.15) {
            this.p1.freezeTimer = 0.4;
            this.freezeOverlayTimer = 0.4;
            this.elsariaTrapCooldown = 5.0; // 5秒間は絶対に再発動しない！
            this.showBanner('❄️ エルサリアの氷結トラップ！0.4秒間凍結（安全時間発動）', '#38bdf8', 1.1);
            audio.playFreezeGlass();
          }
        }
      }

      // ダンジョン第4層：ゴレムスの不壊金石配置
      if (this.mode === 'DUNGEON' && this.dungeonFloor === 4 && this.dungeonSubStage === 'BOSS' && player === this.p2) {
        this.bossMoveCount = (this.bossMoveCount || 0) + 1;
        if (this.bossMoveCount % 4 === 0) {
          cell.isGold = true;
          this.showBanner('🗿 ゴレムスが【不壊金石】を配置！', '#10b981', 1.2);
        }
      }

      // スキンパッシブ能力発動
      this.applyStoneColorPassives(player, isOverride, isCorner, flips, r, c);

      // アイテム回収 (着弾済みアイテム)
      const itemIndex = this.itemsOnBoard.findIndex(it => it.r === r && it.c === c && it.active && it.dropTimer <= 0);
      if (itemIndex >= 0) {
        const it = this.itemsOnBoard[itemIndex];
        if (!player.nextItem) {
          this.awardItem(player, it.type, r, c);
          if (player === this.p1 && (this.mode === 'VS_CPU' || this.mode === 'DUNGEON')) {
            this.currentScore += 500;
            this.addFloatingText('🧲 アイテムボーナス +500', '#c084fc', this.cellToPixel(r, c).x, this.cellToPixel(r, c).y - 40, 1.2);
          }
          this.itemsOnBoard.splice(itemIndex, 1);
        }
      }

      // 魔導ダンジョン：アビリティ発動チェック＆実行
      if (this.mode === 'DUNGEON') {
        const pos = this.cellToPixel(r, c);

        // 1. N_CHAIN_GOLD (連鎖の錬金術): 2枚以上反転で+50G
        if (player === this.p1 && flips.length >= 2 && this.playerAbilities.includes('N_CHAIN_GOLD')) {
          this.p1Gold += 50;
          this.addFloatingText('💰 連鎖錬金 +50G', '#fbbf24', pos.x, pos.y - 35, 1.2);
        }

        // 2. N_CORNER_RESET (要塞の恵み): 角を取るとCTが即座に0秒リセット！
        if (player === this.p1 && isCorner && this.playerAbilities.includes('N_CORNER_RESET')) {
          this.p1.cooldown = 0;
          this.addFloatingText('⚡ 角奪取！CT即座リセット！', '#fde047', pos.x, pos.y - 45, 1.3);
          audio.playClick('THUNDER');
        }

        // 3. UR_CORNER_GOLD (絶対支配者): 角が全て【永久不壊金石】に昇華！
        if (player === this.p1 && isCorner && this.playerAbilities.includes('UR_CORNER_GOLD')) {
          cell.isGold = true;
          cell.scale = 1.5;
          this.addShockwave(r, c, '#facc15', 95);
          this.showBanner('👑 絶対支配者！角が【永久不壊金石】に昇華！', '#facc15', 1.2);
          audio.playEnchantSlam();
        }

        // 4. UR_OVERRIDE_BURST (連鎖爆縮): 上書き時に周囲1マスの敵石を巻き添え反転！
        if (player === this.p1 && isOverride && this.playerAbilities.includes('UR_OVERRIDE_BURST')) {
          let burstCount = 0;
          for (let dr = -1; dr <= 1; dr++) {
            for (let dc = -1; dc <= 1; dc++) {
              const nr = r + dr, nc = c + dc;
              if (nr >= 0 && nr < this.gridSize && nc >= 0 && nc < this.gridSize) {
                const target = this.board[nr][nc];
                if (target.color === this.p2.color && !target.isGold) {
                  target.color = this.p1.color;
                  target.scale = 1.35;
                  burstCount++;
                  this.addSparks(nr, nc, '#38bdf8', 6);
                }
              }
            }
          }
          if (burstCount > 0) {
            this.triggerScreenShake(14);
            this.showBanner(`💥 連鎖爆縮！周囲${burstCount}個の敵石を巻き添え反転！`, '#38bdf8', 1.2);
            audio.playNoiseHit(0.2, 500, 0.7);
          }
        }

        // 5. UR_MINI_VORTEX (魔導引力): 石を置くたび周囲の敵石を引き込み反転
        if (player === this.p1 && this.playerAbilities.includes('UR_MINI_VORTEX') && Math.random() < 0.6) {
          for (let dr = -1; dr <= 1; dr++) {
            for (let dc = -1; dc <= 1; dc++) {
              const nr = r + dr, nc = c + dc;
              if (nr >= 0 && nr < this.gridSize && nc >= 0 && nc < this.gridSize) {
                const target = this.board[nr][nc];
                if (target.color === this.p2.color && !target.isGold) {
                  target.color = this.p1.color;
                  target.scale = 1.35;
                  this.addShockwave(nr, nc, '#a855f7', 45);
                  this.addFloatingText('🌀 魔導引力反転！', '#a855f7', pos.x, pos.y - 30, 0.9);
                  dr = 2; dc = 2; // 1つ反転したら終了
                }
              }
            }
          }
        }

        // 6. LR_PUNISH_THUNDER (神罰代行): 相手が石を置いた時25%で相手に雷直撃1.5秒スタン
        if (player === this.p2 && this.playerAbilities.includes('LR_PUNISH_THUNDER') && Math.random() < 0.25) {
          this.p2.stunTimer = 1.5;
          this.addLightning(r, c);
          this.triggerScreenShake(18);
          this.showBanner('⚡ 神罰代行！ボスに裁きの神雷直撃（1.5秒スタン）！', '#ec4899', 1.5);
          audio.playLightningBoom();
        }
      }
    } catch (err) {
      console.warn('executeMove decoration warning:', err);
    }

    this.updateScores();
    return true;
  }

  awardItem(player, itemType, r, c) {
    player.nextItem = itemType;
    player.slotFlash = 1.0;
    audio.playItemGet();

    // 【ダンジョン能力：N_STUN_STEAL 妨害ショック】相手がアイテム獲得時、相手を0.8秒スタン
    if (this.mode === 'DUNGEON' && player === this.p2 && this.playerAbilities.includes('N_STUN_STEAL')) {
      this.p2.stunTimer = 0.8;
      this.addShockwave(this.p2.cursor.r, this.p2.cursor.c, '#38bdf8', 75);
      this.showBanner('⚡ 妨害ショック！アイテムを奪った相手を0.8秒スタン！', '#38bdf8', 1.2);
      audio.playNoiseHit(0.2, 550, 0.7);
    }

    const pPos = this.cellToPixel(r, c);
    const targetX = player === this.p1 ? 145 : (1280 - 145);
    const targetY = 410;

    // 光のエネルギー球飛翔演出
    this.flyingOrbs.push({
      x: pPos.x, y: pPos.y,
      targetX, targetY,
      color: player === this.p1 ? '#00f0ff' : '#fbbf24',
      icon: itemType.icon,
      progress: 0
    });

    // 獲得ポップアップ
    this.itemGetPopups.push({
      text: `GET! 【${itemType.name}】`,
      icon: itemType.icon,
      x: pPos.x, y: pPos.y - 30,
      life: 1.2, maxLife: 1.2,
      color: '#f59e0b'
    });

    this.addShockwave(r, c, '#f59e0b', 75);
    this.addSparks(r, c, '#fbbf24', 16);
    this.showBanner(`${player.name}が【${itemType.name}】を獲得！`, '#10b981', 1.2);
  }

  // 各アイテムの圧倒的VFX発動
  applyItemEffect(player, r, c, item, preFlips) {
    const opp = player === this.p1 ? this.p2 : this.p1;
    if (item.id === 'HYPER') this.triggerCutIn('⚡ HYPER BURST!!', `${player.name} 神速覚醒！4秒間クールダウン0秒連射！`, '#facc15');
    else if (item.id === 'FREEZE') this.triggerCutIn('❄️ ABSOLUTE FREEZE!!', `${opp.name} を3秒間完全氷結拘束！`, '#38bdf8');
    else if (item.id === 'POTION') this.triggerCutIn('💖 LIFE RECOVERY!!', `${player.name} 生命のエリクサー発動！自石を緊急再展開！`, '#ec4899');
    this.showBanner(`${player.name}【${item.name}】発動！`, '#38bdf8', 1.5);
    const pos = this.cellToPixel(r, c);

    if (item.id === 'MAGNET') {
      // 巨大ブラックホール重力渦
      audio.playBlackHole();
      this.triggerScreenShake(24);
      this.blackHoles.push({ x: pos.x, y: pos.y, radius: 110, life: 1.0, maxLife: 1.0 });

      for (let dr = -1; dr <= 1; dr++) {
        for (let dc = -1; dc <= 1; dc++) {
          const nr = r + dr, nc = c + dc;
          if (nr >= 0 && nr < this.gridSize && nc >= 0 && nc < this.gridSize) {
            if (nr !== r || nc !== c) {
              this.board[nr][nc].color = 0;
              this.board[nr][nc].isGold = false;
              this.addSparks(nr, nc, '#94a3b8', 16);
            }
          }
        }
      }
    } else if (item.id === 'PAINT') {
      // 蒼光大魔法陣展開
      audio.playMagicPaint();
      this.triggerScreenShake(15);
      this.magicCircles.push({
        x: pos.x, y: pos.y, radius: 100, life: 0.8, maxLife: 0.8,
        color: player.color === P1_COLOR ? '#00f0ff' : '#fbbf24'
      });

      for (let dr = -1; dr <= 1; dr++) {
        for (let dc = -1; dc <= 1; dc++) {
          const nr = r + dr, nc = c + dc;
          if (nr >= 0 && nr < this.gridSize && nc >= 0 && nc < this.gridSize) {
            if (!this.board[nr][nc].isGold) {
              this.board[nr][nc].color = player.color;
              this.board[nr][nc].scale = 1.4;
              this.addSparks(nr, nc, player.color === P1_COLOR ? '#00f0ff' : '#fbbf24', 12);
            }
          }
        }
      }
    } else if (item.id === 'POTION') {
      // 💖 生命のエリクサー: 周囲3x3のマスに自色の石を最大3〜4枚再展開！
      if (audio.playPotion) audio.playPotion();
      else audio.playItemGet();
      this.triggerScreenShake(12);
      this.screenFlash = 0.35;

      let recovered = 0;
      for (let dr = -1; dr <= 1 && recovered < 4; dr++) {
        for (let dc = -1; dc <= 1 && recovered < 4; dc++) {
          const nr = r + dr, nc = c + dc;
          if (nr >= 0 && nr < this.gridSize && nc >= 0 && nc < this.gridSize) {
            const targetCell = this.board[nr][nc];
            if (targetCell.color !== player.color && !targetCell.isGold) {
              targetCell.color = player.color;
              targetCell.scale = 1.4;
              this.addSparks(nr, nc, '#ec4899', 14);
              this.addShockwave(nr, nc, '#ec4899', 50);
              recovered++;
            }
          }
        }
      }
      this.addFloatingText(`💖 生命回復！自石+${recovered}枚！`, '#ec4899', pos.x, pos.y - 35, 1.3);
      this.showBanner(`💖 生命のエリクサー発動！自石を${recovered}枚緊急リカバリー！`, '#ec4899', 1.5);
    } else if (item.id === 'GOLD') {
      // 極太黄金雷撃ズドン！
      this.board[r][c].isGold = true;
      audio.playLightningBoom();
      this.triggerScreenShake(25);
      this.addLightning(r, c);
      this.addShockwave(r, c, '#f59e0b', 110);
      this.addSparks(r, c, '#fef08a', 20);
    } else if (item.id === 'HYPER') {
      let hyperDur = 4.0;
      if (player === this.p1) {
        if (this.equippedSkinId === 'THUNDER') hyperDur += 1.5;
        if (this.equippedSkinId === 'GENESIS') hyperDur += 2.0;
      }
      player.hyperTimer = hyperDur;
      audio.playThunderHyper();
      this.triggerScreenShake(26);
      this.screenFlash = 0.5;
      this.addLightning(r, c);
      this.addShockwave(r, c, '#facc15', 130);
      this.addSkinPlacementVfx(r, c, player.color, 'THUNDER');
    } else if (item.id === 'FREEZE') {
      let freezeDur = 3.0;
      if (player === this.p1) {
        if (this.equippedSkinId === 'OCEAN') freezeDur += 0.8;
        if (this.equippedSkinId === 'GENESIS') freezeDur += 2.0;
      }
      opp.freezeTimer = freezeDur;
      this.freezeOverlayTimer = 1.6;
      audio.playFreezeGlass();
      this.triggerScreenShake(24);
      this.screenFlash = 0.55;
      this.addShockwave(opp.cursor.r, opp.cursor.c, '#38bdf8', 140);
      this.addSkinPlacementVfx(opp.cursor.r, opp.cursor.c, opp.color, 'CRYSTAL');
    }

    preFlips.forEach((posCoord, idx) => {
      this.board[posCoord.r][posCoord.c].color = player.color;
      setTimeout(() => audio.playFlip(idx, this.equippedSkinId), idx * 35);
    });
  }

  spawnItem(forcedData = null) {
    if (this.mode === 'PVP_ONLINE' && this.onlineRole === 'GUEST' && !forcedData) {
      return; // オンラインゲスト時はホストからの同期パケットでアイテムを生成
    }
    const min = this.gridSize === 10 ? 2 : 1;
    const max = this.gridSize === 10 ? 7 : 6;
    const r = forcedData ? forcedData.r : (Math.floor(Math.random() * (max - min + 1)) + min);
    const c = forcedData ? forcedData.c : (Math.floor(Math.random() * (max - min + 1)) + min);

    const keys = Object.keys(ITEM_TYPES);
    const pool = this.isClimaxActive ? keys : keys.filter(k => k !== 'GOLD');
    const pickedKey = (forcedData && forcedData.key && ITEM_TYPES[forcedData.key])
      ? forcedData.key
      : pool[Math.floor(Math.random() * pool.length)];
    const itemType = ITEM_TYPES[pickedKey];

    this.itemsOnBoard.push({
      r, c,
      type: itemType,
      active: true,
      dropTimer: 2.8
    });

    if (!forcedData && this.mode === 'PVP_ONLINE' && this.onlineRole === 'HOST' && window.duelNet && window.duelNet.isConnected) {
      window.duelNet.send({ t: 'SPAWN_ITEM', r, c, key: pickedKey });
    }
  }

  resolveItemLanding(item) {
    if (!item || !this.board[item.r] || !this.board[item.r][item.c]) return;
    const cell = this.board[item.r][item.c];
    if (cell.color !== 0) {
      const recipient = cell.color === P1_COLOR ? this.p1 : this.p2;
      if (recipient && !recipient.nextItem) {
        this.awardItem(recipient, item.type, item.r, item.c);
      }
      item.active = false;
    } else {
      audio.playClick();
      this.addShockwave(item.r, item.c, '#a855f7', 55);
    }
  }

  triggerPhoenixResurrection(victim) {
    if (victim === this.p1) {
      const maxPhoenix = (this.mode === 'DUNGEON' && this.playerAbilities.includes('UR_DOUBLE_PHOENIX')) ? 2 : 1;
      this.phoenixUsedCount = (this.phoenixUsedCount || 0) + 1;
      if (this.phoenixUsedCount > maxPhoenix) return;
    }
    this.phoenixCooldown = 5.0;

    this.screenFlash = 0.85;
    this.triggerScreenShake(28);
    audio.playLightningBoom();
    this.showBanner(`⚡ PHOENIX RESURRECTION! 不死鳥の雷撃で奇跡の大復活！`, '#facc15', 3.0);
    if (this.mode === 'DUNGEON' && victim === this.p1 && this.playerAbilities.includes('UR_DOUBLE_PHOENIX')) {
      this.p1.hyperTimer = 5.0; // 不死鳥の加護：復活時神速5秒付与！
      this.showBanner('🔥 不死鳥の加護発動！神速5.0秒ボーナス付与！', '#ef4444', 2.0);
    }

    const mid = Math.floor(this.gridSize / 2);
    for (let dr = -1; dr <= 0; dr++) {
      for (let dc = -1; dc <= 0; dc++) {
        const r = mid + dr;
        const c = mid + dc;
        this.board[r][c].color = victim.color;
        this.board[r][c].isGold = false;
        this.board[r][c].scale = 1.6;
        this.addLightning(r, c);
        this.addSparks(r, c, '#facc15', 16);
      }
    }

    victim.nextItem = ITEM_TYPES.HYPER;
    victim.hyperTimer = 3.5;
    this.updateScores();
  }

  // 自力1マス移動（自由操作）
  updateKeyRepeat(dt) {
    const now = performance.now() / 1000;
    for (const code in this.keysDown) {
      const k = this.keysDown[code];
      const elapsed = now - k.firstPressed;
      if (elapsed > this.keyRepeatInitialDelay) {
        if (now - k.lastRepeat >= this.keyRepeatRate) {
          k.lastRepeat = now;
          this.handlePlayerMoveInput(code);
        }
      }
    }
  }

  handlePlayerMoveInput(code) {
    if (this.mode === 'PVP_ONLINE') {
      const myPlayer = this.onlineRole === 'GUEST' ? this.p2 : this.p1;
      if (code === 'KeyW' || code === 'ArrowUp') this.directMove(myPlayer, -1, 0);
      if (code === 'KeyS' || code === 'ArrowDown') this.directMove(myPlayer, 1, 0);
      if (code === 'KeyA' || code === 'ArrowLeft') this.directMove(myPlayer, 0, -1);
      if (code === 'KeyD' || code === 'ArrowRight') this.directMove(myPlayer, 0, 1);
      if (window.duelNet && window.duelNet.isConnected) {
        window.duelNet.send({
          t: 'CURSOR',
          p: this.onlineRole === 'GUEST' ? 2 : 1,
          r: myPlayer.cursor.r,
          c: myPlayer.cursor.c
        });
      }
      return;
    }

    // 1P: WASD
    if (code === 'KeyW') this.directMove(this.p1, -1, 0);
    if (code === 'KeyS') this.directMove(this.p1, 1, 0);
    if (code === 'KeyA') this.directMove(this.p1, 0, -1);
    if (code === 'KeyD') this.directMove(this.p1, 0, 1);

    // 2P: 矢印キー
    if (this.mode === 'PVP_LOCAL' || this.mode === 'PVP') {
      if (code === 'ArrowUp') this.directMove(this.p2, -1, 0);
      if (code === 'ArrowDown') this.directMove(this.p2, 1, 0);
      if (code === 'ArrowLeft') this.directMove(this.p2, 0, -1);
      if (code === 'ArrowRight') this.directMove(this.p2, 0, 1);
    }
  }

  directMove(player, dr, dc) {
    player.cursor.r = Math.max(0, Math.min(this.gridSize - 1, player.cursor.r + dr));
    player.cursor.c = Math.max(0, Math.min(this.gridSize - 1, player.cursor.c + dc));
  }

  smartSnap(player, dr, dc) {
    const validMoves = [];
    for (let r = 0; r < this.gridSize; r++) {
      for (let c = 0; c < this.gridSize; c++) {
        if (this.canPlace(r, c, player.color, player.nextItem)) {
          validMoves.push({ r, c });
        }
      }
    }
    if (validMoves.length === 0) {
      player.cursor.r = Math.max(0, Math.min(this.gridSize - 1, player.cursor.r + dr));
      player.cursor.c = Math.max(0, Math.min(this.gridSize - 1, player.cursor.c + dc));
      return;
    }

    let best = null;
    let bestDist = Infinity;
    const cur = player.cursor;

    for (const m of validMoves) {
      const dRow = m.r - cur.r;
      const dCol = m.c - cur.c;
      const dot = dRow * dr + dCol * dc;
      if (dot > 0) {
        const dist = Math.hypot(dRow, dCol);
        if (dist < bestDist) {
          bestDist = dist;
          best = m;
        }
      }
    }

    if (best) {
      player.cursor = { r: best.r, c: best.c };
    } else {
      let minGlobal = Infinity;
      let closest = validMoves[0];
      for (const m of validMoves) {
        const dist = Math.hypot(m.r - cur.r, m.c - cur.c);
        if (dist < minGlobal) {
          minGlobal = dist;
          closest = m;
        }
      }
      player.cursor = { r: closest.r, c: closest.c };
    }
  }

  updateCpu(dt) {
    if (this.mode !== 'VS_CPU' && this.mode !== 'DUNGEON') return;
    const cpu = this.p2;
    if (cpu.cooldown > 0 && cpu.hyperTimer <= 0) return;
    if (cpu.freezeTimer > 0 || cpu.stunTimer > 0) return;

    this.cpuActionTimer += dt;
    let delay = 0.75;
    if (this.mode === 'DUNGEON') {
      if (this.dungeonFloor === 3) delay = 0.32 + Math.random() * 0.15; // 神速王
      else if (this.dungeonFloor === 5) delay = 0.18 + Math.random() * 0.12; // ラスボス
      else if (this.cpuLevel === 'ELEMENTARY') delay = (this.mode === 'DUNGEON' && this.dungeonFloor === 1 && this.dungeonSubStage === 'BOSS') ? (0.75 + Math.random() * 0.25) : (0.50 + Math.random() * 0.25);
      else if (this.cpuLevel === 'ADULT') delay = 0.65 + Math.random() * 0.25;
      else delay = 0.28 + Math.random() * 0.15;
    } else {
      delay = this.cpuLevel === 'ELEMENTARY' ? (1.3 + Math.random() * 0.5) : this.cpuLevel === 'ADULT' ? (0.8 + Math.random() * 0.35) : (0.32 + Math.random() * 0.15);
    }
    if (this.cpuActionTimer < delay) return;
    this.cpuActionTimer = 0;

    const candidates = [];
    for (let r = 0; r < this.gridSize; r++) {
      for (let c = 0; c < this.gridSize; c++) {
        if (this.canPlace(r, c, cpu.color, cpu.nextItem)) {
          const flips = this.getFlips(r, c, cpu.color).length;
          const isCorner = (r === 0 || r === this.gridSize - 1) && (c === 0 || c === this.gridSize - 1);
          const hasItem = this.itemsOnBoard.some(it => it.r === r && it.c === c);

          // ★思考強化：減点ではなく「大量獲得（ビッグフリップ）」を最重要視！
          let flipScore = flips * 14;
          if (flips >= 3) flipScore += flips * 10; // 3枚以上で大加点
          if (flips >= 5) flipScore += 55;        // 5枚以上で超爆発加点

          let cornerScore = isCorner ? (this.cpuLevel === 'ELEMENTARY' ? 35 : 130) : 0;
          let itemScore = hasItem ? (this.cpuLevel === 'ELEMENTARY' ? 25 : 45) : 0;

          let score = flipScore + cornerScore + itemScore;
          candidates.push({ r, c, flips, isCorner, hasItem, score });
        }
      }
    }

    if (candidates.length === 0) {
      this.cpuActionTimer = delay * 0.5;
      return;
    }

    // スコア降順ソート
    candidates.sort((a, b) => b.score - a.score);

    // ★同じマス叩きループ根絶：最高評価付近（差が6点以内）の最良候補グループから分散選択！
    const topScore = candidates[0].score;
    const topCandidates = candidates.filter(c => c.score >= topScore - 6);
    const chosen = topCandidates[Math.floor(Math.random() * topCandidates.length)];
    if (chosen) {
      cpu.cursor = { r: chosen.r, c: chosen.c };
      this.executeMove(cpu, chosen.r, chosen.c);
    }
  }

  triggerClimax(forcedEvent = null) {
    if (this.mode === 'PVP_ONLINE' && this.onlineRole === 'GUEST' && !forcedEvent) {
      return; // ゲストはホストからのCLIMAXパケットで同時発動
    }
    this.isClimaxActive = true;
    audio.setClimax(true);
    audio.playWarning();

    const events = ['COLOR_SWAP', 'GIGA_BOMB', 'HASTE_BURST', 'EXPANSION', 'CHAOS_FESTIVAL'];
    this.climaxEvent = forcedEvent || events[Math.floor(Math.random() * events.length)];

    if (!forcedEvent && this.mode === 'PVP_ONLINE' && this.onlineRole === 'HOST' && window.duelNet && window.duelNet.isConnected) {
      window.duelNet.send({ t: 'CLIMAX', event: this.climaxEvent });
    }

    const loser = this.p1.score < this.p2.score ? this.p1 : (this.p2.score < this.p1.score ? this.p2 : (Math.random() < 0.5 ? this.p1 : this.p2));

    if (this.climaxEvent === 'EXPANSION') {
      this.expandBoard();
    } else if (this.climaxEvent === 'CHAOS_FESTIVAL') {
      this.showBanner('魔導暴走！アイテム混沌フェスティバル！', '#a855f7', 3.0);
      this.triggerScreenShake(20);
      audio.playLightningBoom();
      for (let i = 0; i < 4; i++) {
        setTimeout(() => this.spawnItem(), i * 250);
      }
    } else {
      this.showBanner('⚠ 残り30秒！クライマックス・ラッシュ突入！ ⚠', '#ef4444', 1.5);
      this.triggerScreenShake(16);
      setTimeout(() => {
        this.applySuperMiracle(loser, this.climaxEvent);
      }, 1000);
    }
  }

  update(dt) {
    if (this.isPaused) return;
    if (this.screenShake > 0) this.screenShake = Math.max(0, this.screenShake - dt * 30);
    if (this.screenFlash > 0) this.screenFlash = Math.max(0, this.screenFlash - dt * 2.2);
    if (this.resultGuardTimer > 0) this.resultGuardTimer = Math.max(0, this.resultGuardTimer - dt);
    if (this.abilitySelectGuardTimer > 0) this.abilitySelectGuardTimer = Math.max(0, this.abilitySelectGuardTimer - dt);
    if (this.bannerTimer > 0) this.bannerTimer -= dt;
    if (this.cutIn && this.cutIn.life > 0) this.cutIn.life -= dt;
    if (this.phoenixCooldown > 0) this.phoenixCooldown -= dt;
    if (this.freezeOverlayTimer > 0) this.freezeOverlayTimer -= dt;

    if (this.elsariaTrapCooldown > 0) this.elsariaTrapCooldown -= dt;
    // 雑魚戦特殊ルール: ITEM_FEVER (4秒ごとにアイテム投下)
    if (this.mode === 'DUNGEON' && this.dungeonSubStage === 'MINION' && this.activeRuleMod === 'ITEM_FEVER') {
      this.feverItemTimer = (this.feverItemTimer || 0) + dt;
      if (this.feverItemTimer >= 4.0) {
        this.feverItemTimer = 0;
        this.spawnItem();
      }
    }


    if (this.p1.slotFlash > 0) this.p1.slotFlash = Math.max(0, this.p1.slotFlash - dt * 2);
    if (this.p2.slotFlash > 0) this.p2.slotFlash = Math.max(0, this.p2.slotFlash - dt * 2);

    if (this.state === 'COUNTDOWN') {
      this.countdownSec -= dt;
      if (this.countdownSec <= 0) {
        this.state = 'PLAYING';
        this.showBanner('DUEL START!!', '#00f0ff', 1.0);
      }
      return;
    }

    if (this.state !== 'PLAYING') return;
    // ダンジョンボス専用ギミック進行 ＆ プレイヤー能力自動進行
    if (this.mode === 'DUNGEON') {
      // LR_AUTO_ITEM (天界の降臨): 5秒ごとにランダムアイテム自動装填
      if (this.playerAbilities.includes('LR_AUTO_ITEM')) {
        this.autoItemTimer = (this.autoItemTimer || 0) + dt;
        if (this.autoItemTimer >= 5.0) {
          this.autoItemTimer = 0;
          if (!this.p1.nextItem) {
            const items = [
              { id: 'PAINT', icon: '🎨', name: '領域侵食（ペイント）', color: '#38bdf8' },
              { id: 'GOLD', icon: '👑', name: '不壊金石（ゴールド）', color: '#facc15' },
              { id: 'HYPER', icon: '⚡', name: '神速魔力（ハイパー）', color: '#fde047' },
              { id: 'FREEZE', icon: '❄️', name: '絶対凍結（フリーズ）', color: '#67e8f9' },
              { id: 'MAGNET', icon: '🧲', name: '磁気破砕（マグネット）', color: '#a855f7' }
            ];
            const pick = items[Math.floor(Math.random() * items.length)];
            this.p1.nextItem = pick;
            this.p1.slotFlash = 1.0;
            this.showBanner(`✨ 天界の降臨！【${pick.name}】が自動装填！`, '#ec4899', 1.2);
            audio.playItemGet();
          }
        }
      }

      // LR_ALWAYS_HYPER (常時神速覚醒): 常時ハイパー維持
      if (this.playerAbilities.includes('LR_ALWAYS_HYPER')) {
        this.p1.hyperTimer = 10.0;
        this.p1.maxCooldown = 0.25;
      }
      this.bossActionTimer = (this.bossActionTimer || 0) + dt;
      // 第2層：狂乱の爆撃卿 ボンバートの爆縮擲弾 (6秒ごとに周囲の石を強制反転)
      if (this.dungeonFloor === 2 && this.dungeonSubStage === 'BOSS' && this.bossActionTimer >= 7.5) {
        this.bossActionTimer = 0;
        // プレイヤーの石があるマス、または盤面中央付近を狙う
        let targetCells = [];
        for (let r = 1; r < this.gridSize - 1; r++) {
          for (let c = 1; c < this.gridSize - 1; c++) {
            if (this.board[r][c].color === this.p1.color) {
              targetCells.push({ r, c });
            }
          }
        }
        let br, bc;
        if (targetCells.length > 0) {
          const picked = targetCells[Math.floor(Math.random() * targetCells.length)];
          br = picked.r;
          bc = picked.c;
        } else {
          br = Math.floor(Math.random() * (this.gridSize - 2)) + 1;
          bc = Math.floor(Math.random() * (this.gridSize - 2)) + 1;
        }

        let flippedCount = 0;
        for (let dr = -1; dr <= 1; dr++) {
          for (let dc = -1; dc <= 1; dc++) {
            const nr = br + dr, nc = bc + dc;
            if (nr >= 0 && nr < this.gridSize && nc >= 0 && nc < this.gridSize) {
              const cell = this.board[nr][nc];
              // 駒が存在し、不壊金石でない場合、ボスの色に強制反転！更地化しないので詰まない
              if (cell.color !== 0 && !cell.isGold) {
                if (cell.color !== this.p2.color) {
                  cell.color = this.p2.color;
                  cell.scale = 1.4;
                  flippedCount++;
                }
              }
            }
          }
        }
        // 爆心地マスは空マスでもボスの石を配置して爆発の余波を盤面に残す
        if (!this.board[br][bc].isGold) {
          this.board[br][bc].color = this.p2.color;
          this.board[br][bc].scale = 1.45;
        }
        this.updateScores();
        audio.playNoiseHit(0.35, 450, 0.9);
        this.triggerScreenShake(18);
        this.addShockwave(br, bc, '#ef4444', 85);
        this.addSparks(br, bc, '#f59e0b', 18);
        this.showBanner('💣 爆撃卿の擲弾炸裂！周囲の石がボンバートの色に爆縮反転！', '#ef4444', 1.5);
      }
      // 第5層：デウス・エクス・マキナのチート神話支配
      if (this.dungeonFloor === 5 && this.bossActionTimer >= 5.5) {
        this.bossActionTimer = 0;
        const rng = Math.random();
        if (rng < 0.5) {
          this.spawnItem();
          this.spawnItem();
          this.showBanner('👁️ デウス・エクス・マキナが神の恵み（アイテム2体）を降臨！', '#a855f7', 1.2);
        } else {
          // プレイヤーの石を1〜2個強制変換
          let flipped = 0;
          for (let tryCount = 0; tryCount < 25 && flipped < 2; tryCount++) {
            const tr = Math.floor(Math.random() * this.gridSize);
            const tc = Math.floor(Math.random() * this.gridSize);
            if (this.board[tr][tc].color === this.p1.color && !this.board[tr][tc].isGold) {
              this.board[tr][tc].color = this.p2.color;
              this.board[tr][tc].scale = 1.35;
              flipped++;
            }
          }
          if (flipped > 0) {
            this.showBanner('👁️ 虚無の神威！プレイヤーの石が強制浸食された！', '#a855f7', 1.2);
            this.triggerScreenShake(12);
            audio.playNoiseHit(0.2, 350, 0.6);
          }
        }
      }
    }
    // キー長押し連続移動処理
    this.updateKeyRepeat(dt);


    this.timeLeft -= dt;

    // CLASSICモード時はクライマックス奇跡なし
    if (this.ruleMode === 'CHAOS') {
      const climaxThreshold = this.matchDuration === 90 ? 30 : 20;
      if (this.timeLeft <= climaxThreshold && !this.isClimaxActive) {
        this.triggerClimax();
      }
    }



// ====================================================================
    // 勝敗・試合終了判定（全マス埋没・タイムアップ・ローグライク完全制覇・不死鳥救済）
    // ====================================================================

    // ① 盤面全マス埋没判定（空きマス0：これ以上置けないため即座に完全決着！）
    const totalSlots = this.gridSize * this.gridSize;
    if ((this.p1.score + this.p2.score >= totalSlots) && (this.stats.p1Moves > 0 || this.stats.p2Moves > 0)) {
      this.timeLeft = 0;
      this.state = 'RESULT';
      this.resultGuardTimer = 2.0;
      this.isClimaxActive = false;
      audio.setClimax(false);
      audio.stopBgm();
      audio.playVictory();
      this.showBanner('🏁 全マス埋没！盤面完全制圧により決着！', '#38bdf8', 3.0);
      return;
    }

    // ② タイムアップ判定
    if (this.timeLeft <= 0) {
      this.timeLeft = 0;
      this.state = 'RESULT';
      this.resultGuardTimer = 2.0;
      this.isClimaxActive = false;
      audio.setClimax(false);
      audio.stopBgm();
      audio.playVictory();
      return;
    }

    // ③ モード別の全滅・制覇ルール
    if (this.mode === 'DUNGEON') {
      // --- ダンジョンモード（ローグライク）---
      
      // ★プレイヤー全滅時 (p1.score === 0)
      if (this.p1.score === 0 && (this.stats.p1Moves > 0 || this.stats.p2Moves > 0)) {
        // 不死鳥の加護（UR_DOUBLE_PHOENIX）所持かつ上限回数内なら奇跡の復活！
        const maxPhoenix = this.playerAbilities.includes('UR_DOUBLE_PHOENIX') ? 2 : 0;
        if ((this.phoenixUsedCount || 0) < maxPhoenix) {
          this.triggerPhoenixResurrection(this.p1);
        } else {
          // 不死鳥なし（または回数消費済み）➔ 即座に全滅ゲームオーバー！
          this.timeLeft = 0;
          this.winner = '2P';
          this.state = 'RESULT';
          this.resultGuardTimer = 2.0;
          this.isClimaxActive = false;
          this.lastResultBanner = '💀 DUNGEON FAILED... 自駒全滅によりゲームオーバー！';
          audio.setClimax(false);
          audio.stopBgm();
          audio.playWarning();
          this.triggerCutIn('💀 GAME OVER', '自駒全滅！ダンジョン敗北…', '#ef4444');
          return;
        }
      }
      // ★敵・ボス駒全滅時 (p2.score === 0) ➔ プレイヤーの完全制覇勝利！敵は絶対に復活しない！！
      else if (this.p2.score === 0 && (this.stats.p1Moves > 0 || this.stats.p2Moves > 0)) {
        this.timeLeft = 0;
        this.winner = '1P';
        this.state = 'RESULT';
        this.resultGuardTimer = 2.0;
        this.isClimaxActive = false;
        this.lastResultBanner = '👑 DUNGEON STAGE CLEAR!! 敵駒全滅による完全制圧勝利！';
        audio.setClimax(false);
        audio.stopBgm();
        audio.playVictory();
        this.triggerCutIn('👑 STAGE CLEAR!', '敵駒全滅！完全制圧勝利！', '#22c55e');
        return;
      }
    } else {
      // --- 通常モード・2人対戦（PVP / VS_CPU）---
      // 0枚になっても雷撃で即座に不死鳥復活し、タイムアップまで全力で戦い続ける！
      if (this.p1.score === 0 && (this.stats.p1Moves > 0 || this.stats.p2Moves > 0)) {
        this.triggerPhoenixResurrection(this.p1);
        this.showBanner('🔥 1Pが不死鳥の雷撃で奇跡の復活！大逆転を狙え！', '#00f0ff', 2.0);
      } else if (this.p2.score === 0 && (this.stats.p1Moves > 0 || this.stats.p2Moves > 0)) {
        this.triggerPhoenixResurrection(this.p2);
        this.showBanner('🔥 2Pが不死鳥の雷撃で奇跡の復活！大逆転を狙え！', '#f59e0b', 2.0);
      }
    }

    [this.p1, this.p2].forEach(p => {
      // 白石パッシブ＆スキンパッシブによる状態異常軽減
      const isP1 = p.color === P1_COLOR;
      const p1HasWhite = (this.selectedBaseColor || 'BLACK') === 'WHITE';
      const playerUsesWhite = isP1 ? p1HasWhite : !p1HasWhite;
      let ccReductionMult = playerUsesWhite ? 1.33 : 1.0; // 白石: 25%軽減

      if (isP1) {
        if (this.equippedSkinId === 'SAKURA') ccReductionMult *= 1.54; // ★4 夜桜: 35%軽減
        else if (this.equippedSkinId === 'OCEAN') ccReductionMult *= 1.25; // ★4 深海: 20%軽減
        else if (this.equippedSkinId === 'GENESIS' || this.equippedSkinId === 'CHRONOS') ccReductionMult = 9999; // ★6 LR: 状態異常100%完全無効！
      }
      const debuffRate = dt * ccReductionMult;
      if (p.cooldown > 0) p.cooldown = Math.max(0, p.cooldown - dt);
      if (p.hyperTimer > 0) p.hyperTimer = Math.max(0, p.hyperTimer - dt);
      if (p.freezeTimer > 0) p.freezeTimer = Math.max(0, p.freezeTimer - debuffRate);
      if (p.stunTimer > 0) p.stunTimer = Math.max(0, p.stunTimer - debuffRate);
      if (p.hasteTimer > 0) p.hasteTimer = Math.max(0, p.hasteTimer - dt);
    });

    const itemInterval = this.isClimaxActive 
      ? (8.0 + Math.random() * 2.0) 
      : (16.0 + Math.random() * 4.0);
    
    // CLASSICモード時はアイテム出現なし
    if (this.ruleMode === 'CHAOS') {
      this.itemSpawnTimer = (this.itemSpawnTimer || 0) + dt;
      if (this.itemSpawnTimer >= itemInterval) {
        this.itemSpawnTimer = 0;
        this.spawnItem();
      }
    }

    // 予兆タイマー進行
    for (let i = this.itemsOnBoard.length - 1; i >= 0; i--) {
      const it = this.itemsOnBoard[i];
      if (it.dropTimer > 0) {
        it.dropTimer -= dt;
        if (it.dropTimer <= 0) {
          it.dropTimer = 0;
          this.resolveItemLanding(it);
        }
      }
      if (!it.active) {
        this.itemsOnBoard.splice(i, 1);
      }
    }

    // スコアのアーケード風スムーズ加算
    if (this.displayScore < this.currentScore) {
      const sDiff = this.currentScore - this.displayScore;
      this.displayScore += Math.max(15, Math.floor(sDiff * dt * 14));
      if (this.displayScore > this.currentScore) this.displayScore = this.currentScore;
    }
    this.updateFloatingTexts(dt);

    // 演出オブジェクト更新
    this.updateVfx(dt);

    for (let r = 0; r < this.gridSize; r++) {
      for (let c = 0; c < this.gridSize; c++) {
        const cell = this.board[r][c];
        if (cell.scale > 1.0) cell.scale = Math.max(1.0, cell.scale - dt * 2.5);
        if (cell.flipDelay > 0) {
          cell.flipDelay = Math.max(0, cell.flipDelay - dt);
        } else if (cell.flipTimer > 0) {
          cell.flipTimer = Math.max(0, cell.flipTimer - dt);
        }
      }
    }

    this.updateParticles(dt);
    this.updateCpu(dt);
  }

  updateVfx(dt) {
    // 飛翔エネルギー球
    for (let i = this.flyingOrbs.length - 1; i >= 0; i--) {
      const orb = this.flyingOrbs[i];
      orb.progress += dt * 2.5;
      if (orb.progress >= 1.0) {
        this.flyingOrbs.splice(i, 1);
      }
    }
    // アイテムゲットポップアップ
    for (let i = this.itemGetPopups.length - 1; i >= 0; i--) {
      const pop = this.itemGetPopups[i];
      pop.life -= dt;
      pop.y -= dt * 25;
      if (pop.life <= 0) {
        this.itemGetPopups.splice(i, 1);
      }
    }
    // ブラックホール
    for (let i = this.blackHoles.length - 1; i >= 0; i--) {
      const bh = this.blackHoles[i];
      bh.life -= dt;
      if (bh.life <= 0) this.blackHoles.splice(i, 1);
    }
    // 魔法陣
    for (let i = this.magicCircles.length - 1; i >= 0; i--) {
      const mc = this.magicCircles[i];
      mc.life -= dt;
      if (mc.life <= 0) this.magicCircles.splice(i, 1);
    }
  }

  // --- 描画 (Canvas) ---
  draw() {
    this.ctx.save();
    if (this.screenShake > 0) {
      const dx = (Math.random() - 0.5) * this.screenShake;
      const dy = (Math.random() - 0.5) * this.screenShake;
      this.ctx.translate(dx, dy);
    }

    this.drawBackground();

    if (this.state === 'TITLE') {
      this.drawTitleScreen();
    } else if (this.state === 'HOW_TO_PLAY') {
      this.drawHowToPlayScreen();
    } else if (this.state === 'GACHA') {
      this.drawGachaScreen();
    } else if (this.state === 'MODE_SELECT') {
      this.drawModeSelectScreen();
    } else if (this.state === 'DUNGEON_SKIN_SELECT') {
      this.drawDungeonSkinSelectScreen();
    } else if (this.state === 'BOSS_INTRO') {
      this.drawBossIntroScreen();
    } else if (this.state === 'ABILITY_SELECT') {
      this.drawAbilitySelectScreen();
    } else {
      this.drawBattleScreen();
    }

    this.drawCutIn();

    if (this.bannerTimer > 0 && this.bannerText) {
      this.drawBanner();
    }

    if (this.screenFlash > 0) {
      this.ctx.fillStyle = `rgba(255, 255, 255, ${this.screenFlash})`;
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    // フリーズ氷結オーバーレイ演出
    if (this.freezeOverlayTimer > 0) {
      const alpha = Math.min(0.65, this.freezeOverlayTimer);
      this.ctx.save();
      const grad = this.ctx.createRadialGradient(this.canvas.width/2, this.canvas.height/2, 180, this.canvas.width/2, this.canvas.height/2, 680);
      grad.addColorStop(0, 'rgba(56, 189, 248, 0)');
      grad.addColorStop(0.6, `rgba(56, 189, 248, ${alpha * 0.35})`);
      grad.addColorStop(1, `rgba(224, 242, 254, ${alpha * 0.75})`);
      this.ctx.fillStyle = grad;
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

      this.ctx.strokeStyle = `rgba(224, 242, 254, ${alpha})`;
      this.ctx.lineWidth = 8;
      this.ctx.strokeRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.restore();
    }

    this.ctx.restore();
  }

  drawBackground() {
    const w = this.canvas.width;
    const h = this.canvas.height;
    const theme = this.boardThemes[this.equippedBoardId] || this.boardThemes['DEFAULT'];

    const grad = this.ctx.createRadialGradient(w/2, h/2, 100, w/2, h/2, 700);
    grad.addColorStop(0, theme.bg0);
    grad.addColorStop(0.6, theme.bg1);
    grad.addColorStop(1, theme.bg2);
    this.ctx.fillStyle = grad;
    this.ctx.fillRect(0, 0, w, h);

    this.ctx.strokeStyle = 'rgba(30, 41, 59, 0.4)';
    this.ctx.lineWidth = 1;
    for (let x = 0; x < w; x += 60) {
      this.ctx.beginPath();
      this.ctx.moveTo(x, 0);
      this.ctx.lineTo(x, h);
      this.ctx.stroke();
    }
    for (let y = 0; y < h; y += 60) {
      this.ctx.beginPath();
      this.ctx.moveTo(0, y);
      this.ctx.lineTo(w, y);
      this.ctx.stroke();
    }

    this.ctx.save();
    this.ctx.translate(w/2, h/2);
    this.ctx.strokeStyle = this.isClimaxActive ? 'rgba(239, 68, 68, 0.2)' : 'rgba(0, 240, 255, 0.09)';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.arc(0, 0, 320, 0, Math.PI * 2);
    this.ctx.stroke();
    this.ctx.restore();
  }

  drawGachaScreen() {
    const w = this.canvas.width;
    const h = this.canvas.height;

    // 背景
    this.ctx.fillStyle = 'rgba(2, 6, 23, 0.96)';
    this.ctx.fillRect(0, 0, w, h);

    // ヘッダーバー
    this.drawButton(50, 30, 160, 42, '← 戻る (BACK)', '#1e293b');

    this.ctx.textAlign = 'center';
    this.ctx.fillStyle = '#ffffff';
    this.ctx.font = '900 34px sans-serif';
    this.ctx.shadowColor = '#a855f7';
    this.ctx.shadowBlur = 20;
    this.ctx.fillText('🎰 魔導召喚の祭壇 (SKIN GACHA & VAULT)', w / 2, 60);
    this.ctx.shadowBlur = 0;

    // 右上 所持金 ＆ 補充ボタン
    this.ctx.textAlign = 'right';
    this.ctx.fillStyle = '#fbbf24';
    this.ctx.font = 'bold 20px sans-serif';
    this.ctx.fillText(`💰 1P: ${this.p1Gold} G  |  2P: ${this.p2Gold} G`, w - 210, 58);
    this.drawButton(w - 190, 32, 140, 38, '🪙 +3000G補充', '#059669', true);

    // --- 左側: ガチャ召喚エリア (幅480px) ---
    const gBoxX = 50;
    const gBoxY = 95;
    const gBoxW = 480;
    const gBoxH = 590;

    this.ctx.fillStyle = 'rgba(15, 23, 42, 0.88)';
    this.ctx.strokeStyle = '#7c3aed';
    this.ctx.lineWidth = 2.5;
    this.ctx.fillRect(gBoxX, gBoxY, gBoxW, gBoxH);
    this.ctx.strokeRect(gBoxX, gBoxY, gBoxW, gBoxH);

    this.ctx.textAlign = 'center';
    this.ctx.fillStyle = '#c084fc';
    this.ctx.font = 'bold 20px sans-serif';
    this.ctx.fillText('✨ 神秘の魔導石召喚 ✨', gBoxX + gBoxW / 2, gBoxY + 40);

    // 中央召喚オーブ演出
    const orbX = gBoxX + gBoxW / 2;
    const orbY = gBoxY + 195;
    const nowSec = performance.now() / 1000;
    const pulse = Math.sin(nowSec * 3) * 6;

    const orbGrad = this.ctx.createRadialGradient(orbX, orbY, 10, orbX, orbY, 85 + pulse);
    orbGrad.addColorStop(0, '#ffffff');
    orbGrad.addColorStop(0.3, '#c084fc');
    orbGrad.addColorStop(0.7, '#6b21a8');
    orbGrad.addColorStop(1, 'rgba(15, 23, 42, 0)');
    this.ctx.fillStyle = orbGrad;
    this.ctx.beginPath();
    this.ctx.arc(orbX, orbY, 85 + pulse, 0, Math.PI * 2);
    this.ctx.fill();

    this.ctx.save();
    this.ctx.translate(orbX, orbY);
    this.ctx.rotate(nowSec * 1.5);
    this.ctx.strokeStyle = '#facc15';
    this.ctx.lineWidth = 3;
    this.ctx.strokeRect(-50, -50, 100, 100);
    this.ctx.restore();

    this.ctx.font = '50px sans-serif';
    this.ctx.fillText('🔮', orbX, orbY + 16);

    // 排出確率テーブル
    this.ctx.fillStyle = '#94a3b8';
    this.ctx.font = '13px sans-serif';
    this.ctx.fillText('【排出確率】 ★6 LR 1.5% / ★5 SSR 13.5% / ★4 SR 55% / ★3 R 30%', orbX, gBoxY + 340);
    this.ctx.fillText('※ 重複したスキンは自動で【+150 G】キャッシュバック！', orbX, gBoxY + 365);
    this.ctx.fillText('※ 対戦で勝つと報酬ゴールドを獲得できます。', orbX, gBoxY + 390);

    // 召喚ボタン
    this.drawButton(gBoxX + 30, gBoxY + 430, 200, 58, '1回召喚 (200G)', '#0284c7');
    this.drawButton(gBoxX + 250, gBoxY + 430, 200, 58, '10連召喚 (1800G)', '#f59e0b', true);

    this.ctx.fillStyle = '#fde047';
    this.ctx.font = 'bold 12px sans-serif';
    this.ctx.fillText('⚡ 10連召喚は10%割引でお得！', gBoxX + 350, gBoxY + 510);

    // --- 右側: スキンコレクション＆装備エリア (幅670px) ---
    const sBoxX = 560;
    const sBoxY = 95;
    const sBoxW = 670;
    const sBoxH = 590;

    this.ctx.fillStyle = 'rgba(15, 23, 42, 0.88)';
    this.ctx.strokeStyle = '#3b82f6';
    this.ctx.lineWidth = 2;
    this.ctx.fillRect(sBoxX, sBoxY, sBoxW, sBoxH);
    this.ctx.strokeRect(sBoxX, sBoxY, sBoxW, sBoxH);

    const skinKeys = Object.keys(this.skins);

    this.ctx.textAlign = 'left';
    this.ctx.fillStyle = '#38bdf8';
    this.ctx.font = 'bold 18px sans-serif';
    this.ctx.fillText(`👑 スキンコレクション（所持: ${this.ownedSkins.length} / ${skinKeys.length}）`, sBoxX + 25, sBoxY + 35);
    const colW = 86;
    const rowH = 175;
    const gapX = 6;
    const gapY = 12;
    const gridStartX = sBoxX + 13;
    const gridStartY = sBoxY + 52;

    skinKeys.forEach((key, idx) => {
      const skin = this.skins[key];
      const colIdx = idx % 7;
      const rowIdx = Math.floor(idx / 7);
      const cxPos = gridStartX + colIdx * (colW + gapX);
      const cyPos = gridStartY + rowIdx * (rowH + gapY);

      const isOwned = this.ownedSkins.includes(key);
      const isEquipped = (this.equippedSkinId === key);

      // カード背景
      this.ctx.fillStyle = isEquipped ? 'rgba(30, 58, 138, 0.65)' : isOwned ? 'rgba(2, 6, 23, 0.85)' : 'rgba(2, 6, 23, 0.4)';
      this.ctx.strokeStyle = isEquipped ? '#38bdf8' : isOwned ? (skin.rarity === 5 ? '#f59e0b' : skin.rarity === 4 ? '#c084fc' : '#475569') : '#334155';
      this.ctx.lineWidth = isEquipped ? 2.5 : 1;
      this.ctx.fillRect(cxPos, cyPos, colW, rowH);
      this.ctx.strokeRect(cxPos, cyPos, colW, rowH);

      // レアリティ
      this.ctx.textAlign = 'center';
      const rStars = skin.rarity === 6 ? '★6 LR' : skin.rarity === 5 ? '★5 SSR' : skin.rarity === 4 ? '★4 SR' : '★3 R';
      this.ctx.fillStyle = skin.rarity === 6 ? '#ec4899' : (skin.rarity === 5 ? '#f59e0b' : (skin.rarity === 4 ? '#c084fc' : '#94a3b8'));
      this.ctx.font = 'bold 10px sans-serif';
      this.ctx.fillText(rStars, cxPos + colW / 2, cyPos + 16);

      // スキン名
      this.ctx.fillStyle = isOwned ? '#ffffff' : '#64748b';
      this.ctx.font = 'bold 11px sans-serif';
      this.ctx.fillText(skin.name, cxPos + colW / 2, cyPos + 32);

      // コマプレビュー (1P & 2P)
      if (isOwned) {
        this.drawSampleStone(cxPos + 35, cyPos + 68, 17, skin, P1_COLOR);
        this.drawSampleStone(cxPos + 83, cyPos + 68, 17, skin, P2_COLOR);

        const aLv = this.skinAuraLevel[key] || 1;
        this.ctx.textAlign = 'center';
        this.ctx.fillStyle = aLv === 3 ? '#facc15' : aLv === 2 ? '#c084fc' : '#94a3b8';
        this.ctx.font = 'bold 9.5px sans-serif';
        this.ctx.fillText(aLv === 3 ? 'オーラ Lv.3 MAX' : `オーラ Lv.${aLv}`, cxPos + colW / 2, cyPos + 100);

        // 装備ボタン
        if (isEquipped) {
          this.drawButton(cxPos + 8, cyPos + 115, colW - 16, 30, '装備中', '#059669', true);
        } else {
          this.drawButton(cxPos + 8, cyPos + 115, colW - 16, 30, '装備', '#0284c7');
        }
      } else {
        // 未所持ロック
        this.ctx.textAlign = 'center';
        this.ctx.fillStyle = '#64748b';
        this.ctx.font = '28px sans-serif';
        this.ctx.fillText('🔒', cxPos + colW / 2, cyPos + 82);
        this.ctx.font = 'bold 11px sans-serif';
        this.ctx.fillText('未所持', cxPos + colW / 2, cyPos + 130);
      }
    });

    // 現在装備中のスキンの説明
    const curSkin = this.skins[this.equippedSkinId] || this.skins['DEFAULT'];
    this.ctx.fillStyle = 'rgba(15, 23, 42, 0.9)';
    this.ctx.strokeStyle = '#38bdf8';
    this.ctx.lineWidth = 1;
    this.ctx.fillRect(sBoxX + 24, sBoxY + 445, sBoxW - 48, 120);
    this.ctx.strokeRect(sBoxX + 24, sBoxY + 445, sBoxW - 48, 120);

    this.ctx.textAlign = 'left';
    this.ctx.fillStyle = '#fbbf24';
    this.ctx.font = 'bold 15px sans-serif';
    this.ctx.fillText(`現在装備中: 【${curSkin.name}】`, sBoxX + 45, sBoxY + 478);

    this.ctx.fillStyle = '#cbd5e1';
    this.ctx.font = '13px sans-serif';
    this.ctx.fillText(curSkin.desc, sBoxX + 45, sBoxY + 510);
    this.ctx.fillStyle = '#38bdf8';
    this.ctx.fillText('※ このスキンは「1P vs CPU」「2P対人戦」両方の対戦盤面に即座に適用されます！', sBoxX + 45, sBoxY + 538);

    // ガチャ結果ポップアップ (存在する場合)
    if (this.gachaResults) {
      this.drawGachaResultsModal();
    }
  }

  drawSampleStone(cx, cy, radius, skin, color) {
    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    const st = (color === P1_COLOR) ? skin.p1 : skin.p2;
    const grad = this.ctx.createRadialGradient(cx - radius*0.3, cy - radius*0.3, 2, cx, cy, radius);
    grad.addColorStop(0, st.grad0);
    grad.addColorStop(0.7, st.grad1);
    grad.addColorStop(1, st.grad2);
    this.ctx.fillStyle = grad;
    this.ctx.fill();
    this.ctx.strokeStyle = st.stroke;
    this.ctx.lineWidth = 2.5;
    this.ctx.stroke();

    this.ctx.fillStyle = st.core;
    this.ctx.beginPath();
    this.ctx.arc(cx, cy, radius * 0.35, 0, Math.PI * 2);
    this.ctx.fill();

    if (skin.rarity === 5) {
      this.ctx.strokeStyle = st.core;
      this.ctx.lineWidth = 1.5;
      this.ctx.strokeRect(cx - radius*0.48, cy - radius*0.48, radius*0.96, radius*0.96);
    }
    this.ctx.restore();
  }

  drawGachaResultsModal() {
    const w = this.canvas.width;
    const h = this.canvas.height;

    // 暗転
    this.ctx.fillStyle = 'rgba(2, 6, 23, 0.94)';
    this.ctx.fillRect(0, 0, w, h);

    const mBoxW = 860;
    const mBoxH = 540;
    const mBoxX = (w - mBoxW) / 2;
    const mBoxY = (h - mBoxH) / 2;

    this.ctx.fillStyle = 'rgba(15, 23, 42, 0.98)';
    this.ctx.strokeStyle = '#a855f7';
    this.ctx.lineWidth = 3;
    this.ctx.fillRect(mBoxX, mBoxY, mBoxW, mBoxH);
    this.ctx.strokeRect(mBoxX, mBoxY, mBoxW, mBoxH);

    this.ctx.textAlign = 'center';
    this.ctx.fillStyle = '#ffffff';
    this.ctx.font = '900 32px sans-serif';
    this.ctx.shadowColor = '#00f0ff';
    this.ctx.shadowBlur = 20;
    this.ctx.fillText('✨ 召 喚 結 果 (SUMMON RESULTS) ✨', w / 2, mBoxY + 50);
    this.ctx.shadowBlur = 0;

    // 結果カード一覧 (最大10連: 2行 x 5列)
    const count = this.gachaResults.length;
    const cols = count === 1 ? 1 : 5;
    const cW = count === 1 ? 260 : 145;
    const cH = count === 1 ? 240 : 165;
    const gap = count === 1 ? 0 : 14;

    const totalW = cols * cW + (cols - 1) * gap;
    const startX = (w - totalW) / 2;
    const startY = count === 1 ? mBoxY + 110 : mBoxY + 95;

    this.gachaResults.forEach((res, idx) => {
      const cIdx = count === 1 ? 0 : (idx % 5);
      const rIdx = count === 1 ? 0 : Math.floor(idx / 5);
      const x = startX + cIdx * (cW + gap);
      const y = startY + rIdx * (cH + 14);

      const skin = res.skin;

      this.ctx.fillStyle = 'rgba(2, 6, 23, 0.9)';
      this.ctx.strokeStyle = skin.rarity === 6 ? '#ec4899' : (skin.rarity === 5 ? '#f59e0b' : (skin.rarity === 4 ? '#c084fc' : '#475569'));
      this.ctx.lineWidth = skin.rarity >= 5 ? 3 : 1.5;
      this.ctx.fillRect(x, y, cW, cH);
      this.ctx.strokeRect(x, y, cW, cH);

      // レアリティ
      this.ctx.textAlign = 'center';
      this.ctx.fillStyle = skin.rarity === 6 ? '#ec4899' : (skin.rarity === 5 ? '#f59e0b' : (skin.rarity === 4 ? '#c084fc' : '#94a3b8'));
      this.ctx.font = `bold ${count === 1 ? 15 : 11}px sans-serif`;
      this.ctx.fillText(skin.rarity === 6 ? '★6 LR' : (skin.rarity === 5 ? '★5 SSR' : (skin.rarity === 4 ? '★4 SR' : '★3 R')), x + cW / 2, y + (count === 1 ? 28 : 18));

      // コマプレビュー
      this.drawSampleStone(x + cW / 2 - (count === 1 ? 40 : 25), y + (count === 1 ? 95 : 65), count === 1 ? 30 : 18, skin, P1_COLOR);
      this.drawSampleStone(x + cW / 2 + (count === 1 ? 40 : 25), y + (count === 1 ? 95 : 65), count === 1 ? 30 : 18, skin, P2_COLOR);

      // スキン名
      this.ctx.fillStyle = '#ffffff';
      this.ctx.font = `bold ${count === 1 ? 18 : 12}px sans-serif`;
      this.ctx.fillText(skin.name, x + cW / 2, y + (count === 1 ? 165 : 115));

      // 【改善点①】NEW! / オーラ限界突破 / MAX返還バッジ
      if (res.isNew) {
        this.ctx.fillStyle = '#ef4444';
        this.ctx.fillRect(x + cW / 2 - (count === 1 ? 40 : 30), y + (count === 1 ? 185 : 130), count === 1 ? 80 : 60, count === 1 ? 26 : 20);
        this.ctx.fillStyle = '#ffffff';
        this.ctx.font = `bold ${count === 1 ? 14 : 10}px sans-serif`;
        this.ctx.fillText('NEW!!', x + cW / 2, y + (count === 1 ? 203 : 144));
      } else if (res.isLimitBreak) {
        this.ctx.fillStyle = '#7c3aed';
        this.ctx.fillRect(x + cW / 2 - (count === 1 ? 65 : 48), y + (count === 1 ? 185 : 130), count === 1 ? 130 : 96, count === 1 ? 26 : 20);
        this.ctx.fillStyle = '#fde047';
        this.ctx.font = `bold ${count === 1 ? 13 : 9}px sans-serif`;
        this.ctx.fillText(`🌟オーラLv.${res.newLv}!`, x + cW / 2, y + (count === 1 ? 202 : 144));
      } else {
        this.ctx.fillStyle = '#334155';
        this.ctx.fillRect(x + cW / 2 - (count === 1 ? 55 : 40), y + (count === 1 ? 185 : 130), count === 1 ? 110 : 80, count === 1 ? 26 : 20);
        this.ctx.fillStyle = '#94a3b8';
        this.ctx.font = `bold ${count === 1 ? 12 : 9}px sans-serif`;
        this.ctx.fillText('MAX返還 +200G', x + cW / 2, y + (count === 1 ? 202 : 144));
      }
    });

    // OKボタン
    this.drawButton(w / 2 - 140, mBoxY + mBoxH - 75, 280, 52, '確認 (OK)', '#0284c7', true);
  }

  // --- ローグライク魔導ダンジョン開始 ---
  startDungeonRun() {
    this.mode = 'DUNGEON';
    this.dungeonFloor = 1;
    this.dungeonSubStage = 'MINION'; // 1-1 前哨戦から開始！
    this.playerAbilities = [];
    this.startMinionMatch();
    audio.init();
  }

  // 1-1 前哨戦 (MINION, 45秒, 通常2x2配置)
  startMinionMatch() {
    this.mode = 'DUNGEON';
    this.dungeonSubStage = 'MINION';
    const stage = DUNGEON_STAGES[this.dungeonFloor] || DUNGEON_STAGES[1];
    const enemy = stage.minion;
    this.matchDuration = enemy.matchDuration || 45;
    this.cpuLevel = enemy.aiLevel || 'ELEMENTARY';
    this.activeRuleMod = null;
    this.currentDotArt = null; // 通常2x2配置でサクッと突破！

    this.startMatch();
    this.p2.name = `${enemy.icon} ${enemy.name}`;
    this.showBanner(`⚔️ ${enemy.title} [${enemy.ruleName}]`, enemy.color, 2.5);
    this.applyDungeonAbilitiesToMatch();
  }

  // 1-2 精鋭中ボス戦 (ELITE, 60秒, 通常2x2配置)
  startEliteMatch() {
    this.mode = 'DUNGEON';
    this.dungeonSubStage = 'ELITE';
    const stage = DUNGEON_STAGES[this.dungeonFloor] || DUNGEON_STAGES[1];
    const enemy = stage.elite;
    this.matchDuration = enemy.matchDuration || 60;
    this.cpuLevel = enemy.aiLevel || 'ADULT';
    this.activeRuleMod = null;
    this.currentDotArt = null;

    this.startMatch();
    this.p2.name = `${enemy.icon} ${enemy.name}`;
    this.showBanner(`⚔️ ${enemy.title} [${enemy.ruleName}]`, enemy.color, 2.5);
    this.applyDungeonAbilitiesToMatch();
  }

  // 1-3 エリア大ボス戦 (BOSS, 90秒, ボス専用ドットアート配置！)
  startBossMatch() {
    this.mode = 'DUNGEON';
    this.dungeonSubStage = 'BOSS';
    const stage = DUNGEON_STAGES[this.dungeonFloor] || DUNGEON_STAGES[1];
    const boss = stage.boss;
    this.matchDuration = boss.matchDuration || 90;
    this.cpuLevel = boss.aiLevel;
    this.bossActionTimer = 0;
    this.bossMoveCount = 0;
    this.elsariaTrapCooldown = 0;
    this.activeRuleMod = null;

    // ★ボス専用ドットアート配置を展開！
    this.currentDotArt = boss.dotArt;

    this.startMatch();
    this.phoenixUsedCount = 0;
    this.p2.name = `BOSS: ${boss.name}`;

    // ボス固有クールダウン設定
    if (this.dungeonFloor === 3) {
      this.p2.maxCooldown = 0.65;
    } else if (this.dungeonFloor === 5) {
      this.p2.maxCooldown = 0.55;
    }
    this.showBanner(`🔥 ${boss.title} 決闘開始！`, boss.color, 3.0);
    this.applyDungeonAbilitiesToMatch();
  }

  applyDungeonAbilitiesToMatch() {
    // プレイヤーの獲得能力の反映
    if (this.playerAbilities.includes('N_CD')) this.p1.maxCooldown = Math.max(0.3, this.p1.maxCooldown - 0.15);
    if (this.playerAbilities.includes('UR_BOARD10') || (this.dungeonSubStage === 'BOSS' && this.dungeonFloor === 5)) {
      setTimeout(() => this.expandBoard(), 200);
    }
    if (this.playerAbilities.includes('N_GOLD_START')) {
      setTimeout(() => {
        for (let r = 0; r < this.gridSize; r++) {
          for (let c = 0; c < this.gridSize; c++) {
            if (this.board[r][c].color === this.p1.color) {
              this.board[r][c].isGold = true;
              this.board[r][c].scale = 1.4;
              this.addShockwave(r, c, '#facc15', 70);
              this.showBanner('👑 黄金の布石発動！自石が【不壊金石】化！', '#facc15', 1.2);
              return;
            }
          }
        }
      }, 200);
    }
    if (this.playerAbilities.includes('POTION_ITEM')) {
      this.p1.nextItem = ITEM_TYPES.POTION;
      this.p1.slotFlash = 1.0;
      this.showBanner('💖 秘薬ストック！生命のエリクサーを即時装填！', '#ec4899', 1.5);
    }
    if (this.playerAbilities.includes('LR_ALWAYS_HYPER')) {
      this.p1.hyperTimer = 999.0;
    }
  }

  // ボスポートレート描画エンジン（SVG / カスタムAI画像 / フォールバック描画）
  drawBossPortrait(floor, x, y, w, h, rounded = true) {
    const ctx = this.ctx;
    ctx.save();

    if (rounded) {
      ctx.beginPath();
      ctx.roundRect(x, y, w, h, 12);
      ctx.clip();
    }

    // 画像取得：カスタムAI画像があれば最優先、なければ標準美麗SVG、なければフォールバック
    const customImg = this.customBossImages[floor];
    const defaultImg = this.bossDefaultImages[floor];
    const img = (customImg && customImg.complete && customImg.naturalWidth > 0) ? customImg : defaultImg;

    if (img && img.complete && img.naturalWidth > 0) {
      const imgRatio = img.width / img.height;
      const boxRatio = w / h;
      let dw, dh, dx, dy;
      if (imgRatio > boxRatio) {
        dh = h;
        dw = dh * imgRatio;
        dx = x - (dw - w) / 2;
        dy = y;
      } else {
        dw = w;
        dh = dw / imgRatio;
        dx = x;
        dy = y - (dh - h) / 2;
      }
      ctx.drawImage(img, dx, dy, dw, dh);
    } else {
      // 即時フォールバックプロシージャル描画
      this.drawProceduralBoss(floor, x + w / 2, y + h / 2, Math.min(w, h));
    }

    ctx.restore();
  }

  // フォールバック用プロシージャル描画
  drawProceduralBoss(floor, cx, cy, size) {
    const ctx = this.ctx;
    ctx.save();
    ctx.translate(cx, cy);
    const bgRad = size * 0.46;
    const bgGrad = ctx.createRadialGradient(0, 0, bgRad * 0.2, 0, 0, bgRad);

    if (floor === 1) {
      bgGrad.addColorStop(0, '#0284c7');
      bgGrad.addColorStop(1, '#020617');
      ctx.fillStyle = bgGrad;
      ctx.beginPath();
      ctx.arc(0, 0, bgRad, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#bae6fd';
      ctx.font = 'bold 28px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('❄️ 氷結魔女', 0, 8);
    } else if (floor === 2) {
      bgGrad.addColorStop(0, '#b91c1c');
      bgGrad.addColorStop(1, '#0a0505');
      ctx.fillStyle = bgGrad;
      ctx.beginPath();
      ctx.arc(0, 0, bgRad, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#fef08a';
      ctx.font = 'bold 28px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('💣 爆撃卿', 0, 8);
    } else if (floor === 3) {
      bgGrad.addColorStop(0, '#ca8a04');
      bgGrad.addColorStop(1, '#020617');
      ctx.fillStyle = bgGrad;
      ctx.beginPath();
      ctx.arc(0, 0, bgRad, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#fef08a';
      ctx.font = 'bold 28px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('⚡ 神速王', 0, 8);
    } else if (floor === 4) {
      bgGrad.addColorStop(0, '#059669');
      bgGrad.addColorStop(1, '#021c14');
      ctx.fillStyle = bgGrad;
      ctx.beginPath();
      ctx.arc(0, 0, bgRad, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#a7f3d0';
      ctx.font = 'bold 28px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('🗿 巨神兵', 0, 8);
    } else {
      bgGrad.addColorStop(0, '#9333ea');
      bgGrad.addColorStop(1, '#080012');
      ctx.fillStyle = bgGrad;
      ctx.beginPath();
      ctx.arc(0, 0, bgRad, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#f3e8ff';
      ctx.font = 'bold 28px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('👁️ 虚無神', 0, 8);
    }
    ctx.restore();
  }

  // 1. 戦前ボス紹介カットイン画面（美麗2カラム・AI画像インポート完全対応）
  // 出撃前オセロ（コマ＆属性パッシブ）選択画面
  drawDungeonSkinSelectScreen() {
    const w = this.canvas.width;
    const h = this.canvas.height;
    const cx = w / 2;
    const skinKeys = Object.keys(this.skins);
    if (this.dungeonSelectedSkinIndex === undefined) {
      this.dungeonSelectedSkinIndex = Math.max(0, skinKeys.indexOf(this.equippedSkinId));
    }
    const curKey = skinKeys[this.dungeonSelectedSkinIndex] || 'DEFAULT';
    const curSkin = this.skins[curKey];
    const isOwned = this.ownedSkins.includes(curKey);
    const auraLv = (this.skinAuraLevel && this.skinAuraLevel[curKey]) || 1;

    this.ctx.fillStyle = 'rgba(2, 6, 23, 0.96)';
    this.ctx.fillRect(0, 0, w, h);

    // ヘッダー
    this.ctx.textAlign = 'center';
    this.ctx.fillStyle = '#f59e0b';
    this.ctx.font = 'bold 20px sans-serif';
    this.ctx.fillText('⚔️ ROGUELIKE BOSS RUSH PREPARATION ⚔️', cx, 42);

    this.ctx.fillStyle = '#ffffff';
    this.ctx.font = '900 34px sans-serif';
    this.ctx.shadowColor = '#00f0ff';
    this.ctx.shadowBlur = 20;
    this.ctx.fillText('魔導ダンジョン 出撃オセロ選択', cx, 80);
    this.ctx.shadowBlur = 0;

    // --- 左側カード：コマの3Dプレビュー＆基本情報 (w: 440, h: 485) ---
    const lX = 80, lY = 105, lW = 440, lH = 485;
    this.ctx.fillStyle = 'rgba(15, 23, 42, 0.9)';
    this.ctx.strokeStyle = curSkin.color;
    this.ctx.lineWidth = 2.5;
    this.ctx.fillRect(lX, lY, lW, lH);
    this.ctx.strokeRect(lX, lY, lW, lH);

    // ネオンコーナー装飾
    this.ctx.strokeStyle = curSkin.color;
    this.ctx.lineWidth = 3;
    this.ctx.beginPath();
    this.ctx.moveTo(lX, lY + 20); this.ctx.lineTo(lX, lY); this.ctx.lineTo(lX + 20, lY);
    this.ctx.moveTo(lX + lW - 20, lY); this.ctx.lineTo(lX + lW, lY); this.ctx.lineTo(lX + lW, lY + 20);
    this.ctx.moveTo(lX, lY + lH - 20); this.ctx.lineTo(lX, lY + lH); this.ctx.lineTo(lX + 20, lY + lH);
    this.ctx.moveTo(lX + lW - 20, lY + lH); this.ctx.lineTo(lX + lW, lY + lH); this.ctx.lineTo(lX + lW, lY + lH - 20);
    this.ctx.stroke();

    // 3D コマの描画 (中央 cx: lX + lW/2, cy: lY + 125, 半径 68)
    const stoneCx = lX + lW / 2;
    const stoneCy = lY + 125;
    this.drawSampleStone(stoneCx, stoneCy, 56, curSkin, P1_COLOR);

    // スキン名
    this.ctx.textAlign = 'center';
    this.ctx.fillStyle = '#ffffff';
    this.ctx.font = '900 28px sans-serif';
    this.ctx.shadowColor = curSkin.color;
    this.ctx.shadowBlur = 15;
    this.ctx.fillText(curSkin.name, stoneCx, lY + 235);
    this.ctx.shadowBlur = 0;

    // レアリティ ＆ オーラレベルバッジ
    this.ctx.fillStyle = '#facc15';
    this.ctx.font = 'bold 16px sans-serif';
    this.ctx.fillText(`[${curSkin.rarity}]  🌟 オーラ Lv.${auraLv} ${auraLv === 3 ? '(MAX)' : ''}`, stoneCx, lY + 268);

    // 所持状況表示
    this.ctx.fillStyle = isOwned ? '#10b981' : '#f59e0b';
    this.ctx.font = 'bold 15px sans-serif';
    this.ctx.fillText(isOwned ? '✨ 所持中（ダンジョンで使用可能）' : '🎁 特別開放中（お試し出撃可能！）', stoneCx, lY + 298);

    // スキン説明
    this.ctx.fillStyle = '#cbd5e1';
    this.ctx.font = '13px sans-serif';
    this.ctx.fillText(curSkin.desc || '古代魔導の英知が宿る神話のオセロ。', stoneCx, lY + 335);

    // 左右切替ナビゲーション矢印
    this.drawButton(lX + 30, lY + 390, 80, 42, '◀ 前へ', '#1e293b');
    this.ctx.fillStyle = '#94a3b8';
    this.ctx.font = 'bold 14px sans-serif';
    this.ctx.fillText(`${this.dungeonSelectedSkinIndex + 1} / ${skinKeys.length}`, stoneCx, lY + 416);
    this.drawButton(lX + lW - 110, lY + 390, 80, 42, '次へ ▶', '#1e293b');

    // キー操作Tips
    this.ctx.fillStyle = '#64748b';
    this.ctx.font = '12px sans-serif';
    this.ctx.fillText('※ [←][→] または [A][D] キーでも切り替え可能', stoneCx, lY + 460);

    // --- 右側カード：戦闘性能・パッシブ能力＆特別ルール (w: 640, h: 485) ---
    const rX = 560, rY = 105, rW = 640, rH = 485;
    this.ctx.fillStyle = 'rgba(15, 23, 42, 0.9)';
    this.ctx.strokeStyle = '#38bdf8';
    this.ctx.lineWidth = 2.5;
    this.ctx.fillRect(rX, rY, rW, rH);
    this.ctx.strokeRect(rX, rY, rW, rH);

    this.ctx.textAlign = 'left';
    this.ctx.fillStyle = '#facc15';
    this.ctx.font = 'bold 18px sans-serif';
    this.ctx.fillText('◆ 出撃オセロのパッシブ能力 ＆ 戦闘特性', rX + 25, rY + 35);

    // ボックス1: 属性カラーパッシブ
    this.ctx.fillStyle = 'rgba(2, 6, 23, 0.85)';
    this.ctx.strokeStyle = curSkin.color;
    this.ctx.lineWidth = 1.5;
    this.ctx.fillRect(rX + 25, rY + 52, rW - 50, 95);
    this.ctx.strokeRect(rX + 25, rY + 52, rW - 50, 95);

    this.ctx.fillStyle = curSkin.color || '#38bdf8';
    this.ctx.font = 'bold 16px sans-serif';
    this.ctx.fillText(`✨ 属性パッシブ: 【${curSkin.passiveName || curSkin.name}】`, rX + 40, rY + 78);
    this.ctx.fillStyle = '#ffffff';
    this.ctx.font = '13px sans-serif';
    const pDesc = curSkin.passiveDesc || '特殊パッシブ能力が戦闘中に発動します。';
    if (pDesc.length > 36) {
      const splitIdx = pDesc.indexOf('！', 22);
      if (splitIdx !== -1 && splitIdx < 45) {
        this.ctx.fillText(pDesc.slice(0, splitIdx + 1), rX + 40, rY + 104);
        this.ctx.fillText(pDesc.slice(splitIdx + 1), rX + 40, rY + 126);
      } else {
        this.ctx.fillText(pDesc.slice(0, 36), rX + 40, rY + 104);
        this.ctx.fillText(pDesc.slice(36), rX + 40, rY + 126);
      }
    } else {
      this.ctx.fillText(pDesc, rX + 40, rY + 112);
    }

    // ボックス2: 基本石色パッシブ切替（黒石 vs 白石）
    const isBlack = (this.selectedBaseColor || 'BLACK') === 'BLACK';
    this.ctx.fillStyle = 'rgba(2, 6, 23, 0.85)';
    this.ctx.strokeStyle = isBlack ? '#38bdf8' : '#facc15';
    this.ctx.lineWidth = 1.5;
    this.ctx.fillRect(rX + 25, rY + 160, rW - 50, 92);
    this.ctx.strokeRect(rX + 25, rY + 160, rW - 50, 92);

    this.ctx.fillStyle = isBlack ? '#38bdf8' : '#facc15';
    this.ctx.font = 'bold 15px sans-serif';
    this.ctx.fillText(isBlack ? '🌑 選択中の石色: 【黒の石：魔導の浸食】' : '⚪ 選択中の石色: 【白の石：聖光の守護】', rX + 40, rY + 188);

    // 切替ボタン (rX + rW - 225, rY + 166, 190, 32)
    this.drawButton(rX + rW - 225, rY + 166, 190, 32, isBlack ? '🔄 白の聖光へ切替' : '🔄 黒の魔導へ切替', isBlack ? '#f59e0b' : '#38bdf8', true);

    this.ctx.fillStyle = '#cbd5e1';
    this.ctx.font = '13px sans-serif';
    this.ctx.fillText(isBlack ? '2連鎖で自身のCT短縮(-0.1s)、3連鎖で相手のCTを+0.2s遅延させる先手必勝型！' : '状態異常（フリーズ・スタン）時間を常時25%軽減＆外周・角配置で次手上書き免除！', rX + 40, rY + 224);

    // ボックス3: 魔導ダンジョン全滅即死ルール
    this.ctx.fillStyle = 'rgba(2, 6, 23, 0.85)';
    this.ctx.strokeStyle = '#ef4444';
    this.ctx.lineWidth = 1.5;
    this.ctx.fillRect(rX + 25, rY + 265, rW - 50, 95);
    this.ctx.strokeRect(rX + 25, rY + 265, rW - 50, 95);

    this.ctx.fillStyle = '#ef4444';
    this.ctx.font = 'bold 15px sans-serif';
    this.ctx.fillText('💀 魔導ダンジョン専用ルール：【自駒全滅即死 ＆ 不死鳥復活】', rX + 40, rY + 293);
    this.ctx.fillStyle = '#fde047';
    this.ctx.font = '13px sans-serif';
    this.ctx.fillText('・自分の石が0枚になると【即座にゲームオーバー（敗北）】となります！', rX + 40, rY + 318);
    this.ctx.fillText('・階層クリアで【不死鳥の加護（UR）】を獲得していれば、全滅時に奇跡の大復活が可能！', rX + 40, rY + 340);

    // コマ選択ミニグリッド (11種)
    this.ctx.fillStyle = '#94a3b8';
    this.ctx.font = 'bold 13px sans-serif';
    this.ctx.fillText('◆ 出撃コマ クイック選択:', rX + 25, rY + 382);

    skinKeys.forEach((key, idx) => {
      const btnX = rX + 25 + (idx % 7) * 85;
      const btnY = rY + 396 + Math.floor(idx / 7) * 36;
      const isSelected = idx === this.dungeonSelectedSkinIndex;
      const sk = this.skins[key];
      this.drawButton(btnX, btnY, 80, 32, sk.name.slice(0, 5), isSelected ? (sk.color || '#38bdf8') : '#1e293b');
    });

    // --- 下部ボタントレイ ---
    this.drawButton(80, 615, 230, 56, '🏠 タイトルへ戻る (Esc)', '#1e293b');
    this.drawButton(335, 615, 865, 56, `⚡ 【${curSkin.name}】でダンジョンへ出撃する (START RUN - Space)`, curSkin.color, true);
  }

  drawBossIntroScreen() {
    const w = this.canvas.width;
    const h = this.canvas.height;
    const cx = w / 2;
    const boss = this.dungeonBosses[this.dungeonFloor - 1];

    this.ctx.fillStyle = 'rgba(2, 6, 23, 0.96)';
    this.ctx.fillRect(0, 0, w, h);

    // ヘッダー
    this.ctx.textAlign = 'center';
    this.ctx.fillStyle = '#f59e0b';
    this.ctx.font = 'bold 20px sans-serif';
    this.ctx.fillText('⚔️ ROGUE-LIKE BOSS RUSH ⚔️', cx, 48);

    this.ctx.fillStyle = boss.color;
    this.ctx.font = '900 36px sans-serif';
    this.ctx.shadowColor = boss.color;
    this.ctx.shadowBlur = 20;
    this.ctx.fillText(`${boss.title}`, cx, 88);
    this.ctx.shadowBlur = 0;

    // ボス紹介大カード (幅1020px, 高さ450px)
    const bW = 1020, bH = 450, bX = cx - bW / 2, bY = 112;
    this.ctx.fillStyle = 'rgba(15, 23, 42, 0.9)';
    this.ctx.strokeStyle = boss.color;
    this.ctx.lineWidth = 2.5;
    this.ctx.fillRect(bX, bY, bW, bH);
    this.ctx.strokeRect(bX, bY, bW, bH);

    // 【左カラム：ボス立ち絵ポートレートフレーム】 (幅310px, 高さ350px)
    const pX = bX + 30, pY = bY + 25, pW = 300, pH = 345;
    this.ctx.fillStyle = 'rgba(2, 6, 23, 0.95)';
    this.ctx.strokeStyle = '#334155';
    this.ctx.lineWidth = 1.5;
    this.ctx.fillRect(pX, pY, pW, pH);
    this.ctx.strokeRect(pX, pY, pW, pH);

    // ボス立ち絵の描画
    this.drawBossPortrait(this.dungeonFloor, pX + 5, pY + 5, pW - 10, pH - 10, true);

    // ネオンコーナーフレーム装飾
    this.ctx.strokeStyle = boss.color;
    this.ctx.lineWidth = 3;
    this.ctx.beginPath();
    this.ctx.moveTo(pX, pY + 20); this.ctx.lineTo(pX, pY); this.ctx.lineTo(pX + 20, pY);
    this.ctx.moveTo(pX + pW - 20, pY); this.ctx.lineTo(pX + pW, pY); this.ctx.lineTo(pX + pW, pY + 20);
    this.ctx.moveTo(pX, pY + pH - 20); this.ctx.lineTo(pX, pY + pH); this.ctx.lineTo(pX + 20, pY + pH);
    this.ctx.moveTo(pX + pW - 20, pY + pH); this.ctx.lineTo(pX + pW, pY + pH); this.ctx.lineTo(pX + pW, pY + pH - 20);
    this.ctx.stroke();

    const customImg = this.customBossImages[this.dungeonFloor];
    // AIイラスト適用ボタン＆解除ボタン (y: bY + 386)
    this.drawButton(pX, bY + 386, customImg ? 195 : pW, 38, customImg ? '📁 AI画像変更' : '📁 AIイラスト適用', '#0284c7');
    if (customImg) {
      this.drawButton(pX + 208, bY + 386, 92, 38, '✖ 解除', '#475569');
    }

    // 【右カラム：ボス情報・能力・バフ一覧】 (幅630px)
    const rX = bX + 360, rY = bY + 25;
    this.ctx.textAlign = 'left';

    // ボス名 & サブタイトル
    this.ctx.fillStyle = '#ffffff';
    this.ctx.font = '900 32px sans-serif';
    this.ctx.fillText(boss.name, rX, rY + 32);

    // バッジ（危険度 / AIタイプ）
    this.ctx.fillStyle = '#94a3b8';
    this.ctx.font = 'bold 15px sans-serif';
    const stars = '★'.repeat(this.dungeonFloor) + '☆'.repeat(5 - this.dungeonFloor);
    this.ctx.fillText('危険度: ', rX, rY + 68);
    this.ctx.fillStyle = '#f59e0b';
    this.ctx.fillText(`${stars}`, rX + 60, rY + 68);

    this.ctx.fillStyle = '#94a3b8';
    this.ctx.fillText('AI知能: ', rX + 170, rY + 68);
    this.ctx.fillStyle = boss.color;
    const aiDesc = boss.floor === 3 ? '⚡ 神速CT 0.65s' : boss.floor === 5 ? '👁️ 超神話級' : boss.aiLevel === 'ELEMENTARY' ? '初級' : boss.aiLevel === 'ADULT' ? '上級' : '超知能';
    this.ctx.fillText(aiDesc, rX + 230, rY + 68);

    // 能力説明ボックス
    this.ctx.fillStyle = 'rgba(2, 6, 23, 0.85)';
    this.ctx.strokeStyle = '#334155';
    this.ctx.lineWidth = 1;
    this.ctx.fillRect(rX, rY + 92, 630, 135);
    this.ctx.strokeRect(rX, rY + 92, 630, 135);

    this.ctx.fillStyle = '#fde047';
    this.ctx.font = 'bold 16px sans-serif';
    const lines = boss.desc.split("\n");
    lines.forEach((l, lIdx) => {
      this.ctx.fillText(l, rX + 18, rY + 130 + lIdx * 30);
    });

    // プレイヤーの現在能力バッジ
    this.ctx.fillStyle = 'rgba(2, 6, 23, 0.85)';
    this.ctx.fillRect(rX, rY + 242, 630, 140);
    this.ctx.strokeRect(rX, rY + 242, 630, 140);

    this.ctx.fillStyle = '#38bdf8';
    this.ctx.font = 'bold 15px sans-serif';
    this.ctx.fillText(`🛡️ プレイヤーの習得能力 (${this.playerAbilities.length}個):`, rX + 18, rY + 270);

    if (this.playerAbilities.length === 0) {
      this.ctx.fillStyle = '#64748b';
      this.ctx.font = '14px sans-serif';
      this.ctx.fillText('まだ能力を獲得していません。このボスを撃破すると3択ドラフトが発生！', rX + 18, rY + 305);
    } else {
      let badgeX = rX + 18;
      let badgeY = rY + 292;
      this.playerAbilities.forEach(id => {
        const ab = this.abilityPool.find(x => x.id === id);
        if (!ab) return;
        this.ctx.font = 'bold 13px sans-serif';
        const txt = `[${ab.rarity}] ${ab.name}`;
        const tw = this.ctx.measureText(txt).width + 16;
        if (badgeX + tw > rX + 610) {
          badgeX = rX + 18;
          badgeY += 28;
        }
        this.ctx.fillStyle = 'rgba(15, 23, 42, 0.9)';
        this.ctx.strokeStyle = ab.color;
        this.ctx.lineWidth = 1.5;
        this.ctx.fillRect(badgeX, badgeY, tw, 24);
        this.ctx.strokeRect(badgeX, badgeY, tw, 24);
        this.ctx.fillStyle = ab.color;
        this.ctx.fillText(txt, badgeX + 8, badgeY + 17);
        badgeX += tw + 10;
      });
    }

    // ドラッグ＆ドロップ注記
    this.ctx.textAlign = 'center';
    this.ctx.fillStyle = '#64748b';
    this.ctx.font = '13px sans-serif';
    this.ctx.fillText('💡 お手持ちのAI生成画像（PNG/JPG）を画面にドラッグ＆ドロップでもボスの立ち絵に即座に設定できます', cx, 584);

    // 決闘開始ボタン
    this.drawButton(cx - 190, 608, 380, 58, '⚔️ 決闘開始 (FIGHT! - Space)', boss.color, true);
  }

  // 2. 3択ローグライク能力ドラフト画面
  drawAbilitySelectScreen() {
    const w = this.canvas.width;
    const h = this.canvas.height;
    const cx = w / 2;

    this.ctx.fillStyle = 'rgba(2, 6, 23, 0.96)';
    this.ctx.fillRect(0, 0, w, h);

    this.ctx.textAlign = 'center';
    this.ctx.fillStyle = '#f59e0b';
    this.ctx.font = 'bold 20px sans-serif';
    this.ctx.fillText(`🎉 FLOOR ${this.dungeonFloor} CLEARED!! 🎉`, cx, 65);

    this.ctx.fillStyle = '#ffffff';
    this.ctx.font = '900 38px sans-serif';
    this.ctx.shadowColor = '#a855f7';
    this.ctx.shadowBlur = 20;
    this.ctx.fillText('魔導の加護選択 (CHOOSE YOUR ABILITY)', cx, 115);
    this.ctx.shadowBlur = 0;

    this.ctx.fillStyle = '#94a3b8';
    this.ctx.font = '14px sans-serif';
    this.ctx.fillText('次戦へ進むために能力を1つ選択してください [マウスクリック または 数字キー 1 / 2 / 3]', cx, 150);

    // 3枚の能力カード
    const cardW = 320, cardH = 340, gap = 30;
    const totalW = cardW * 3 + gap * 2;
    const startX = (w - totalW) / 2;
    const cardY = 190;

    this.draftAbilities.forEach((ab, idx) => {
      const x = startX + idx * (cardW + gap);

      this.ctx.fillStyle = 'rgba(15, 23, 42, 0.9)';
      this.ctx.strokeStyle = ab.rarity === 'LR' ? '#ec4899' : (ab.rarity === 'UR' ? '#38bdf8' : '#94a3b8');
      this.ctx.lineWidth = ab.rarity === 'LR' ? 3.5 : 2;
      this.ctx.fillRect(x, cardY, cardW, cardH);
      this.ctx.strokeRect(x, cardY, cardW, cardH);

      // レアリティ
      this.ctx.textAlign = 'center';
      this.ctx.fillStyle = ab.color;
      this.ctx.font = 'bold 15px sans-serif';
      this.ctx.fillText(ab.rarity === 'LR' ? '★6 LR (神話級)' : (ab.rarity === 'UR' ? '★5 UR (超強力)' : '★3 N (基礎能力)'), x + cardW / 2, cardY + 38);

      // アイコン
      this.ctx.font = '48px sans-serif';
      this.ctx.fillText(ab.rarity === 'LR' ? '👑' : (ab.rarity === 'UR' ? '⚡' : '📜'), x + cardW / 2, cardY + 98);

      // 名前
      this.ctx.fillStyle = '#ffffff';
      this.ctx.font = 'bold 22px sans-serif';
      this.ctx.fillText(ab.name, x + cardW / 2, cardY + 145);

      // 区切り線
      this.ctx.strokeStyle = 'rgba(148, 163, 184, 0.25)';
      this.ctx.lineWidth = 1;
      this.ctx.beginPath();
      this.ctx.moveTo(x + 20, cardY + 165);
      this.ctx.lineTo(x + cardW - 20, cardY + 165);
      this.ctx.stroke();

      // 説明文
      this.ctx.fillStyle = '#cbd5e1';
      this.ctx.font = '14px sans-serif';
      this.ctx.fillText(ab.desc, x + cardW / 2, cardY + 205);

      // 選択ボタン
            const btnLabel = this.abilitySelectGuardTimer > 0 ? '⏱ 選択待機中...' : `[${idx + 1}] この能力を習得`;
      this.drawButton(x + 30, cardY + 265, cardW - 60, 48, btnLabel, ab.color, true);
    });
  }

  // 3択ドラフト抽選
  // アビリティ選択処理 (マウス・1/2/3キー共通)
  chooseAbility(idx) {
    if (this.state !== 'ABILITY_SELECT') return;
    if (this.abilitySelectGuardTimer > 0) return;
    if (!this.draftAbilities || !this.draftAbilities[idx]) return;

    const ab = this.draftAbilities[idx];
    this.playerAbilities.push(ab.id);
    audio.playItemGet();

    if (this.dungeonSubStage === 'MINION') {
      // 1-1 (MINION) 突破 ➔ 1-2 (ELITE) 中ボス戦へ突入！
      this.startEliteMatch();
      this.showBanner(`【${ab.name}】獲得！精鋭中ボス戦へ突入！`, '#38bdf8', 2.0);
    } else if (this.dungeonSubStage === 'ELITE') {
      // 1-2 (ELITE) 突破 ➔ 1-3 (BOSS) 大ボス戦前紹介画面へ！
      this.state = 'BOSS_INTRO';
      const stage = DUNGEON_STAGES[this.dungeonFloor] || DUNGEON_STAGES[1];
      this.showBanner(`【${ab.name}】獲得！エリア大ボス【${stage.boss.name}】決闘へ！`, '#facc15', 2.5);
    } else {
      // ボス戦後は次階層へ
      if (this.dungeonFloor < 5) {
        this.dungeonFloor++;
        this.dungeonSubStage = 'MINION';
        this.startMinionMatch();
      } else {
        this.state = 'TITLE';
      }
    }
  }

  // リザルト画面での次のアクション (スペース/Enter・マウスクリック共通)
  handleResultNextAction() {
    if (this.resultGuardTimer > 0) return;

    const isP1Win = this.winner === '1P' || (this.p1.score > this.p2.score);

    if (this.mode === 'DUNGEON') {
      if (isP1Win) {
        if (this.dungeonSubStage === 'MINION' || this.dungeonSubStage === 'ELITE') {
          // 1-1 または 1-2 勝利 ➔ 能力選択へ！
          this.prepareAbilityDraft();
        } else if (this.dungeonFloor < 5) {
          // 1-3 (BOSS) 勝利 ➔ 次の階層の1-1へ！
          this.dungeonFloor++;
          this.dungeonSubStage = 'MINION';
          this.startMinionMatch();
          this.showBanner(`🎉 第${this.dungeonFloor-1}層 突破！第${this.dungeonFloor}層 突入！`, '#f59e0b', 2.5);
        } else {
          // 第5層大ボス勝利 ➔ 全制覇！
          this.state = 'TITLE';
          this.showBanner('👑 魔導ダンジョン全5層完全制覇！！真の英雄！！', '#facc15', 5.0);
        }
      } else {
        // 敗北時はタイトルへ
        this.state = 'TITLE';
      }
    } else {
      // 通常対戦・PVP時は再戦！
      this.startMatch();
    }
  }

  prepareAbilityDraft() {
    const unowned = this.abilityPool.filter(a => !this.playerAbilities.includes(a.id));
    const pool = unowned.length >= 3 ? unowned : this.abilityPool;

    // ガチャ風重み付け確率抽選（各枠ごとにレアリティ抽選: LR 4%, UR 24%, N 72%）
    const selectedAbilities = [];
    const availablePool = [...pool];

    for (let slot = 0; slot < 3; slot++) {
      const rand = Math.random();
      let targetRarity = 'N';
      if (rand < 0.04) targetRarity = 'LR';
      else if (rand < 0.28) targetRarity = 'UR';
      else targetRarity = 'N';

      // 該当レアリティで未選択のアビリティを探す
      let candidates = availablePool.filter(a => a.rarity === targetRarity && !selectedAbilities.some(s => s.id === a.id));

      // 該当レアリティが枯渇している場合のフォールバック
      if (candidates.length === 0) {
        if (targetRarity === 'LR') {
          candidates = availablePool.filter(a => a.rarity === 'UR' && !selectedAbilities.some(s => s.id === a.id));
          if (candidates.length === 0) candidates = availablePool.filter(a => a.rarity === 'N' && !selectedAbilities.some(s => s.id === a.id));
        } else if (targetRarity === 'UR') {
          candidates = availablePool.filter(a => a.rarity === 'N' && !selectedAbilities.some(s => s.id === a.id));
          if (candidates.length === 0) candidates = availablePool.filter(a => a.rarity === 'LR' && !selectedAbilities.some(s => s.id === a.id));
        } else {
          candidates = availablePool.filter(a => a.rarity === 'UR' && !selectedAbilities.some(s => s.id === a.id));
          if (candidates.length === 0) candidates = availablePool.filter(a => a.rarity === 'LR' && !selectedAbilities.some(s => s.id === a.id));
        }
      }

      if (candidates.length === 0) {
        candidates = this.abilityPool.filter(a => !selectedAbilities.some(s => s.id === a.id));
      }

      if (candidates.length > 0) {
        const picked = candidates[Math.floor(Math.random() * candidates.length)];
        selectedAbilities.push(picked);
      }
    }

    this.draftAbilities = selectedAbilities;
    this.state = 'ABILITY_SELECT';
    this.abilitySelectGuardTimer = 0.5; // ★誤爆防止ガードタイマー0.5秒！
    audio.playItemGet();
  }

  drawHowToPlayScreen() {
    const cx = this.canvas.width / 2;

    this.ctx.fillStyle = 'rgba(2, 6, 23, 0.96)';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.textAlign = 'center';
    this.ctx.fillStyle = '#ffffff';
    this.ctx.font = '900 36px sans-serif';
    this.ctx.shadowColor = '#00f0ff';
    this.ctx.shadowBlur = 20;
    this.ctx.fillText('📖 30秒でわかる！遊び方ガイド', cx, 75);
    this.ctx.shadowBlur = 0;

    const cardW = 270;
    const cardH = 370;
    const gap = 20;
    const totalW = cardW * 4 + gap * 3;
    const startX = (this.canvas.width - totalW) / 2;
    const cardY = 115;

    const cards = [
      {
        num: '① 基本ルール',
        title: '早い者勝ちオセロ！',
        icon: '⚡',
        lines: [
          'ターン制は一切なし！',
          '挟めるマスに同時に置く',
          'ハイスピード陣地争い！',
          '（通常クールダウン: 1.5秒）'
        ],
        color: '#38bdf8'
      },
      {
        num: '② 逆転の掟',
        title: '上書き配置！',
        icon: '💥',
        lines: [
          '挟める場所なら相手の',
          '石の上にも重ねて置ける！',
          '要所を力づくで奪取せよ！',
          '（上書きクールダウン: 2.2秒）'
        ],
        color: '#f59e0b'
      },
      {
        num: '③ 必殺技',
        title: '光の柱とアイテム！',
        icon: '🧲',
        lines: [
          '天から降る光の柱（予兆2.8秒）！',
          '落ちる前に挟んで領地化せよ！',
          '適度な出現頻度でオセロの',
          '本格戦略性と大逆転が両立！'
        ],
        color: '#c084fc'
      },
      {
        num: '④ 操作方法',
        title: '公平キーボード！',
        icon: '🎮',
        lines: [
          '1P(青): [W][A][S][D] + [Space]',
          '2P(金): [↑][↓][←][→] + [Enter]',
          '（キー長押しで高速スムーズ移動！）',
          '（VS CPU時はマウス操作もOK）'
        ],
        color: '#34d399'
      }
    ];

    cards.forEach((c, idx) => {
      const x = startX + idx * (cardW + gap);
      // カード背景
      this.ctx.fillStyle = 'rgba(15, 23, 42, 0.9)';
      this.ctx.strokeStyle = c.color;
      this.ctx.lineWidth = 2.5;
      this.ctx.fillRect(x, cardY, cardW, cardH);
      this.ctx.strokeRect(x, cardY, cardW, cardH);

      // 番号
      this.ctx.fillStyle = c.color;
      this.ctx.font = 'bold 15px sans-serif';
      this.ctx.fillText(c.num, x + cardW / 2, cardY + 36);

      // アイコン
      this.ctx.font = '48px sans-serif';
      this.ctx.fillText(c.icon, x + cardW / 2, cardY + 98);

      // タイトル
      this.ctx.fillStyle = '#ffffff';
      this.ctx.font = 'bold 20px sans-serif';
      this.ctx.fillText(c.title, x + cardW / 2, cardY + 155);

      // 区切り線
      this.ctx.strokeStyle = 'rgba(148, 163, 184, 0.25)';
      this.ctx.lineWidth = 1;
      this.ctx.beginPath();
      this.ctx.moveTo(x + 25, cardY + 175);
      this.ctx.lineTo(x + cardW - 25, cardY + 175);
      this.ctx.stroke();

      // 説明文（行ごとに確実に改行描画）
      this.ctx.fillStyle = '#cbd5e1';
      this.ctx.font = '13.5px sans-serif';
      c.lines.forEach((line, lIdx) => {
        this.ctx.fillText(line, x + cardW / 2, cardY + 210 + lIdx * 28);
      });
    });

    // 閉じるボタン
    this.drawButton(cx - 160, 535, 320, 55, '理解した！決闘へ戻る (CLOSE)', '#0284c7', true);
  }

  drawTitleScreen() {
    const cx = this.canvas.width / 2;
    const cy = this.canvas.height / 2;

    this.ctx.textAlign = 'center';
    
    this.ctx.fillStyle = '#38bdf8';
    this.ctx.font = 'bold 20px sans-serif';
    this.ctx.fillText('REAL-TIME TACTICAL REVERSI', cx, cy - 145);

    this.ctx.fillStyle = '#ffffff';
    this.ctx.font = '900 64px Cinzel, sans-serif';
    this.ctx.shadowColor = '#00f0ff';
    this.ctx.shadowBlur = 10;
    this.ctx.fillText('DUEL REVERSI', cx, cy - 75);
    this.ctx.shadowBlur = 0;

    this.ctx.fillStyle = '#f59e0b';
    this.ctx.font = 'bold 22px sans-serif';
    this.ctx.fillText('〜 魔 導 神 話 決 闘 〜', cx, cy - 30);

    // 2大メインモードを一番目立つ位置に配置
    this.drawButton(cx - 220, cy + 5, 440, 48, '👥 ２人対戦 (2P - パッシブなし・フェア勝負)', '#0284c7', true);
    this.drawButton(cx - 220, cy + 62, 440, 48, '🏰 魔導ダンジョン (DUNGEON - ボス連戦＆ガチャ)', '#f59e0b', true);
    this.drawButton(cx - 220, cy + 119, 440, 44, '🤖 CPU練習対決 (VS CPU)', '#10b981', true);
    this.drawButton(cx - 220, cy + 172, 440, 42, '🎰 魔導ガチャ＆スキン召喚 (GACHA)', '#7c3aed');
    this.drawButton(cx - 220, cy + 223, 440, 38, '📖 遊び方 ＆ ルール (HOW TO PLAY)', '#1e293b');
    
    this.ctx.fillStyle = '#94a3b8';
    this.ctx.font = '13px sans-serif';
    this.ctx.fillText('※ クリックまたはスペースキーで開始', cx, cy + 285);

    // タイトル右上 所持金表示
    this.ctx.textAlign = 'right';
    this.ctx.fillStyle = '#fbbf24';
    this.ctx.font = 'bold 16px sans-serif';
    this.ctx.fillText(`💰 所持金: ${this.p1Gold} G`, this.canvas.width - 45, 45);
  }
  drawModeSelectScreen() {
    const cx = this.canvas.width / 2;

    this.ctx.textAlign = 'center';
    this.ctx.fillStyle = '#ffffff';
    this.ctx.font = 'bold 30px sans-serif';
    this.ctx.shadowColor = '#00f0ff';
    this.ctx.shadowBlur = 15;
    this.ctx.fillText('決闘設定 ＆ 対戦レギュレーション (DUEL SETTINGS)', cx - 120, 48);
    this.ctx.shadowBlur = 0;

    // 右上 所持金表示
    this.ctx.textAlign = 'right';
    this.ctx.fillStyle = '#fbbf24';
    this.ctx.font = 'bold 16px sans-serif';
    this.ctx.fillText(`💰 1P: ${this.p1Gold} G | 2P: ${this.p2Gold} G`, this.canvas.width - 50, 48);

    // --- 左カラム: 対戦設定コントロール (幅530px) ---
    // 1. 対戦形式 ＆ ルールモード
    this.ctx.textAlign = 'left';
    this.ctx.fillStyle = '#38bdf8';
    this.ctx.font = 'bold 14px sans-serif';
    this.ctx.fillText('◆ 対戦形式 (ローカル / P2Pオンライン)', 60, 95);
    this.drawButton(60, 108, 130, 40, '1P vs CPU', this.mode === 'VS_CPU' ? '#0284c7' : '#1e293b');
    this.drawButton(200, 108, 140, 40, '2P 対人(1台)', this.mode === 'PVP_LOCAL' ? '#0284c7' : '#1e293b');
    const netLabel = (window.duelNet && window.duelNet.isConnected) ? `🌐 接続中(${this.onlineRoomId})` : '🌐 P2P通信対戦';
    this.drawButton(350, 108, 160, 40, netLabel, this.mode === 'PVP_ONLINE' ? '#9333ea' : '#3b0764', true);

    // ルールモード (CHAOS / CLASSIC)
    this.ctx.fillText('◆ ルールモード (アイテム/奇跡)', 60, 165);
    this.drawButton(60, 178, 210, 36, '⚡ CHAOS (大乱闘)', this.ruleMode === 'CHAOS' ? '#7c3aed' : '#1e293b');
    this.drawButton(280, 178, 210, 36, '🏆 CLASSIC (競技オセロ)', this.ruleMode === 'CLASSIC' ? '#059669' : '#1e293b');

    // ★初期配置選択 (通常 2x2 vs ランダム・ドット絵)
    this.ctx.fillText('◆ 盤面初期配置 (オセロ vs ランダムアート)', 60, 230);
    this.drawButton(60, 242, 205, 36, '⚪ 通常配置 (2×2)', !this.pvpUseDotArt ? '#0284c7' : '#1e293b');
    this.drawButton(275, 242, 215, 36, '🎨 ランダム・ドット絵 (確定10×10)', this.pvpUseDotArt ? '#7c3aed' : '#1e293b');

    // 2. BET賭け金 (PVP時) or CPU難易度
    if (this.mode === 'PVP_LOCAL' || this.mode === 'PVP_ONLINE') {
      this.ctx.fillText(`◆ 決闘ゴールドBET [1P: ${this.p1Gold}G / 2P: ${this.p2Gold}G]`, 60, 295);
      const bOpts = ['なし', '100G', '300G', '500G', '🔥ALL-IN'];
      bOpts.forEach((bText, bIdx) => {
        const bx = 60 + bIdx * 88;
        this.drawButton(bx, 308, 80, 36, bText, this.selectedBetIndex === bIdx ? '#f59e0b' : '#1e293b');
      });
    } else {
      this.ctx.fillText('◆ CPU難易度', 60, 295);
      this.drawButton(60, 308, 135, 36, '🎒 小学生', this.cpuLevel === 'ELEMENTARY' ? '#10b981' : '#1e293b');
      this.drawButton(205, 308, 135, 36, '👔 大人', this.cpuLevel === 'ADULT' ? '#0284c7' : '#1e293b');
      this.drawButton(350, 308, 140, 36, '🤖 超知能AI', this.cpuLevel === 'AI' ? '#ef4444' : '#1e293b');
    }

    // 3. ゲームスピード ＆ 試合時間
    this.ctx.fillText('◆ 速度 / 時間', 60, 360);
    this.drawButton(60, 372, 105, 36, '標準 1.5s', this.speedMode === 'NORMAL' ? '#0284c7' : '#1e293b');
    this.drawButton(175, 372, 110, 36, 'TURBO 1.0s', this.speedMode === 'TURBO' ? '#f59e0b' : '#1e293b');
    this.drawButton(295, 372, 95, 36, '90秒', this.matchDuration === 90 ? '#0284c7' : '#1e293b');
    this.drawButton(400, 372, 90, 36, '60秒', this.matchDuration === 60 ? '#0284c7' : '#1e293b');

    // 4. BGMセレクター ＆ 盤面ステージ
    const curTrackName = audio.bgmTracks[audio.currentTrackIndex].name;
    const curBoardName = this.boardThemes[this.equippedBoardId].name;
    this.ctx.fillText('◆ BGM / 盤面ステージ', 60, 425);
    const trackLabels = [
      '🎵 神話決闘 (Acid)',
      '🎵 電脳空間 (8-Bit)',
      '🎵 紅蓮闘技 (Rock)',
      '🎵 静寂神殿 (Ambient)'
    ];
    this.drawButton(60, 438, 215, 36, trackLabels[audio.currentTrackIndex] || `🎵 ${curTrackName.split(' ')[0]}`, '#0284c7');
    this.drawButton(285, 438, 205, 36, `🏛 ${curBoardName.split('の')[0]}`, '#475569');

    // 5. 試合開始ボタン
    this.drawButton(80, 500, 430, 60, '⚡ 試合開始 (DUEL START - Space)', '#f59e0b', true);
    this.ctx.textAlign = 'center';
    this.ctx.fillStyle = '#94a3b8';
    this.ctx.font = '12px sans-serif';
    this.ctx.fillText('※ [Space] または [Enter] キーで即試合開始！', 295, 580);

    // --- 右カラム: アイテム魔導録パネル (幅580px) ---
    const panelX = 640;
    const panelY = 95;
    const panelW = 570;
    const panelH = 590;

    this.ctx.fillStyle = 'rgba(15, 23, 42, 0.88)';
    this.ctx.strokeStyle = '#3b82f6';
    this.ctx.lineWidth = 2;
    this.ctx.fillRect(panelX, panelY, panelW, panelH);
    this.ctx.strokeRect(panelX, panelY, panelW, panelH);

    // パネルヘッダー
    this.ctx.textAlign = 'left';
    this.ctx.fillStyle = '#fbbf24';
    this.ctx.font = 'bold 18px sans-serif';
    this.ctx.fillText('📜 出現アイテム魔導録（全5種）', panelX + 20, panelY + 34);

    this.ctx.strokeStyle = 'rgba(148, 163, 184, 0.25)';
    this.ctx.lineWidth = 1;
    this.ctx.beginPath();
    this.ctx.moveTo(panelX + 20, panelY + 48);
    this.ctx.lineTo(panelX + panelW - 20, panelY + 48);
    this.ctx.stroke();

    const items = [
      {
        icon: '🧲',
        name: '磁気破砕（マグネット）',
        color: '#c084fc',
        desc: '周囲2×2マスの石を重力ブラックホールで吸い上げ、何もない更地に戻す！相手の要塞を粉砕する切り札。'
      },
      {
        icon: '🎨',
        name: '領域侵食（ペイント）',
        color: '#38bdf8',
        desc: '挟む必要なし！蒼光の大魔法陣を展開し、周囲2×2マスの石を無条件で一瞬で自分の色に塗り替える！'
      },
      {
        icon: '👑',
        name: '不壊金石（ゴールド）',
        color: '#facc15',
        desc: '【終盤限定】天から極太金雷ズドン！絶対に裏返されず、上書きもされない永久無敵の神石を打ち込む！'
      },
      {
        icon: '⚡',
        name: '神速魔力（ハイパー）',
        color: '#fde047',
        desc: '4秒間クールダウンがゼロに！挟めるマスがあればマシンガンのように石を高速連打配置できる！'
      },
      {
        icon: '❄️',
        name: '絶対凍結（フリーズ）',
        color: '#67e8f9',
        desc: '相手の手元を氷漬けにして3.0秒間完全停止！相手の反撃を完全に封じて安全に盤面を制圧する妨害技！'
      }
    ];

    const rowStartY = panelY + 62;
    const rowH = 86;

    items.forEach((it, idx) => {
      const ry = rowStartY + idx * rowH;
      // カード枠
      this.ctx.fillStyle = 'rgba(2, 6, 23, 0.75)';
      this.ctx.strokeStyle = it.color;
      this.ctx.lineWidth = 1.5;
      this.ctx.fillRect(panelX + 18, ry, panelW - 36, rowH - 10);
      this.ctx.strokeRect(panelX + 18, ry, panelW - 36, rowH - 10);

      // アイコン
      this.ctx.font = '36px sans-serif';
      this.ctx.textAlign = 'center';
      this.ctx.textBaseline = 'middle';
      this.ctx.fillText(it.icon, panelX + 52, ry + 38);

      // 名前
      this.ctx.textAlign = 'left';
      this.ctx.fillStyle = it.color;
      this.ctx.font = 'bold 15px sans-serif';
      this.ctx.fillText(it.name, panelX + 88, ry + 24);

      // 説明文
      this.ctx.fillStyle = '#cbd5e1';
      this.ctx.font = '12px sans-serif';
      this.ctx.fillText(it.desc, panelX + 88, ry + 50);
    });

    // パネルフッターTips
    this.ctx.fillStyle = '#fde047';
    this.ctx.font = 'bold 12.5px sans-serif';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('💡 天空光柱に急行！石を置くか、すでに自色マスなら即座に自動獲得！', panelX + panelW / 2, panelY + panelH - 18);
  }

  drawBattleScreen() {
    this.drawTopBar();
    this.drawPlayerPanels();
    this.drawBoard();
    this.drawParticles();
    this.drawVfxElements();
    this.drawLightning();
    this.drawFloatingTexts();

    if (this.state === 'COUNTDOWN') {
      const cx = this.canvas.width / 2;
      const cy = this.canvas.height / 2;
      this.ctx.fillStyle = 'rgba(0,0,0,0.65)';
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.textAlign = 'center';
      this.ctx.fillStyle = '#ffffff';
      this.ctx.font = '900 110px sans-serif';
      const sec = Math.ceil(this.countdownSec);
      this.ctx.shadowColor = '#00f0ff';
      this.ctx.shadowBlur = 40;
      this.ctx.fillText(sec > 0 ? sec : 'DUEL!', cx, cy + 35);
      this.ctx.shadowBlur = 0;
    }

    if (this.state === 'RESULT') {
      this.drawResultScreen();
    }

    if (this.isPaused) {
      this.drawPauseModal();
    }
  }

  drawTopBar() {
    const w = this.canvas.width;
    const barW = 680;
    const barH = 22;
    const barX = (w - barW) / 2;
    const barY = 22;

    const total = Math.max(1, this.p1.score + this.p2.score);
    const p1Ratio = this.p1.score / total;

    this.ctx.fillStyle = '#0f172a';
    this.ctx.fillRect(barX - 4, barY - 4, barW + 8, barH + 8);
    this.ctx.strokeStyle = '#334155';
    this.ctx.strokeRect(barX - 4, barY - 4, barW + 8, barH + 8);

    this.ctx.fillStyle = '#0284c7';
    this.ctx.fillRect(barX, barY, barW * p1Ratio, barH);

    this.ctx.fillStyle = '#f59e0b';
    this.ctx.fillRect(barX + barW * p1Ratio, barY, barW * (1 - p1Ratio), barH);

    const pinX = barX + barW * p1Ratio;
    this.ctx.fillStyle = '#ffffff';
    this.ctx.fillRect(pinX - 2, barY - 6, 4, barH + 12);

    this.ctx.font = 'bold 20px sans-serif';
    this.ctx.textAlign = 'right';
    this.ctx.fillStyle = '#38bdf8';
    this.ctx.fillText(`1P: ${this.p1.score}枚`, barX - 15, barY + 18);

    this.ctx.textAlign = 'left';
    this.ctx.fillStyle = '#fbbf24';
    this.ctx.fillText(`2P: ${this.p2.score}枚`, barX + barW + 15, barY + 18);

    this.ctx.textAlign = 'center';
    const isRed = this.timeLeft <= 30;
    this.ctx.fillStyle = isRed ? '#ef4444' : '#ffffff';
    this.ctx.font = `bold ${isRed ? 36 : 28}px sans-serif`;
    const m = Math.floor(this.timeLeft / 60);
    const s = Math.floor(this.timeLeft % 60);
    this.ctx.fillText(`⏱ ${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`, w / 2, barY + 52);

    // 一人プレイ時：SCORE ＆ HIGH SCORE 常時表示
    if (this.mode === 'VS_CPU') {
      this.ctx.textAlign = 'left';
      this.ctx.fillStyle = '#38bdf8';
      this.ctx.font = 'bold 15px sans-serif';
      this.ctx.fillText(`SCORE: ${this.displayScore.toLocaleString().padStart(7, ' ')}`, barX + 15, barY + 52);

      this.ctx.textAlign = 'right';
      this.ctx.fillStyle = '#facc15';
      this.ctx.font = 'bold 15px sans-serif';
      const best = Math.max(this.highScore, this.currentScore);
      this.ctx.fillText(`HIGH: ${best.toLocaleString().padStart(7, ' ')}`, barX + barW - 15, barY + 52);
    }

    if (this.isClimaxActive) {
      this.ctx.font = 'bold 13px sans-serif';
      this.ctx.fillStyle = '#ef4444';
      this.ctx.fillText('⚠ CLIMAX RUSH (残り30秒) ⚠', w / 2, barY + 70);
    }

    // P2Pオンライン対戦中の通信ステータス表示
    if (this.mode === 'PVP_ONLINE' && window.duelNet && window.duelNet.isConnected) {
      this.ctx.textAlign = 'left';
      this.ctx.fillStyle = '#c084fc';
      this.ctx.font = 'bold 13px sans-serif';
      this.ctx.fillText(`🌐 P2P [${this.onlineRoomId}] PING: ${this.onlinePing}ms`, 45, 38);
    }

    // 画面右上 3D立体演出切替ボタン (KeyV) ＆ PAUSE ボタン
    this.drawButton(1005, 16, 125, 34, this.is3DView ? '🎥 3D立体: ON' : '🎥 2D標準', this.is3DView ? '#0284c7' : '#334155');
    this.drawButton(1140, 16, 105, 34, '⏸️ PAUSE', '#1e293b');
  }

  drawPlayerPanels() {
    this.drawSidePanel(this.p1, 50, 110, true);
    this.drawSidePanel(this.p2, 1280 - 240, 110, false);
  }

  drawSidePanel(player, x, y, isLeft) {
    const isP1 = player.color === P1_COLOR;
    const accentColor = isP1 ? '#00f0ff' : '#f59e0b';

    this.ctx.fillStyle = 'rgba(15, 23, 42, 0.78)';
    this.ctx.strokeStyle = accentColor;
    this.ctx.lineWidth = 2;
    this.ctx.strokeRect(x, y, 190, 480);
    this.ctx.fillRect(x, y, 190, 480);

    this.ctx.textAlign = 'center';
    this.ctx.fillStyle = '#ffffff';
    this.ctx.font = 'bold 20px sans-serif';
    this.ctx.fillText(player.name, x + 95, y + 35);

    this.ctx.fillStyle = '#94a3b8';
    this.ctx.font = '12px sans-serif';
    if (this.mode === 'PVP_ONLINE') {
      if (isP1) {
        this.ctx.fillText(this.onlineRole === 'HOST' ? 'あなた: マウス/WASD' : '相手: P2P ONLINE', x + 95, y + 60);
      } else {
        this.ctx.fillText(this.onlineRole === 'GUEST' ? 'あなた: マウス/WASD/矢印' : '相手: P2P ONLINE', x + 95, y + 60);
      }
    } else if (isP1) {
      this.ctx.fillText(this.mode === 'PVP_LOCAL' ? '[W][A][S][D] + [Space]' : 'マウス移動 + [Space]', x + 95, y + 60);
    } else {
      this.ctx.fillText(this.mode === 'PVP_LOCAL' ? '[↑][↓][←][→] + [Enter]' : 'AUTO CPU', x + 95, y + 60);
    }

    const circleX = x + 95;
    const circleY = y + 155;
    const radius = 52;
    const cdRatio = player.cooldown / player.maxCooldown;

    // ダンジョンボスの場合は円内にボスポートレートを描画
    if (this.mode === 'DUNGEON' && !isP1) {
      this.ctx.save();
      this.ctx.beginPath();
      this.ctx.arc(circleX, circleY, radius - 4, 0, Math.PI * 2);
      this.ctx.clip();
      this.drawBossPortrait(this.dungeonFloor, circleX - (radius - 4), circleY - (radius - 4), (radius - 4) * 2, (radius - 4) * 2, true);
      this.ctx.restore();
    }

    this.ctx.beginPath();
    this.ctx.arc(circleX, circleY, radius, 0, Math.PI * 2);
    this.ctx.strokeStyle = '#1e293b';
    this.ctx.lineWidth = 10;
    this.ctx.stroke();

    if (player.freezeTimer > 0) {
      this.ctx.beginPath();
      this.ctx.arc(circleX, circleY, radius, 0, Math.PI * 2);
      this.ctx.strokeStyle = '#38bdf8';
      this.ctx.stroke();
      this.ctx.fillStyle = '#38bdf8';
      this.ctx.font = 'bold 18px sans-serif';
      this.ctx.fillText('❄️ 凍結中', circleX, circleY + 6);
    } else if (player.stunTimer > 0) {
      this.ctx.fillStyle = '#ef4444';
      this.ctx.font = 'bold 18px sans-serif';
      this.ctx.fillText('💥 スタン', circleX, circleY + 6);
    } else if (player.hasteTimer > 0) {
      this.ctx.strokeStyle = '#facc15';
      this.ctx.beginPath();
      this.ctx.arc(circleX, circleY, radius, 0, Math.PI * 2);
      this.ctx.stroke();
      this.ctx.fillStyle = '#facc15';
      this.ctx.font = 'bold 15px sans-serif';
      this.ctx.fillText(`⚡ CT半減 ${player.hasteTimer.toFixed(1)}s`, circleX, circleY + 6);
    } else if (player.hyperTimer > 0) {
      this.ctx.strokeStyle = '#eab308';
      this.ctx.beginPath();
      this.ctx.arc(circleX, circleY, radius, 0, Math.PI * 2);
      this.ctx.stroke();
      this.ctx.fillStyle = '#eab308';
      this.ctx.font = 'bold 16px sans-serif';
      this.ctx.fillText('⚡ 神速0秒', circleX, circleY + 6);
    } else {
      this.ctx.beginPath();
      this.ctx.arc(circleX, circleY, radius, -Math.PI/2, -Math.PI/2 + (Math.PI * 2 * (1 - cdRatio)));
      this.ctx.strokeStyle = cdRatio > 0 ? '#ef4444' : accentColor;
      this.ctx.stroke();

      this.ctx.fillStyle = '#ffffff';
      this.ctx.font = 'bold 18px sans-serif';
      this.ctx.fillText(cdRatio > 0 ? `${player.cooldown.toFixed(1)}s` : 'READY', circleX, circleY + 6);
    }

    this.ctx.fillStyle = '#64748b';
    this.ctx.font = 'bold 13px sans-serif';
    this.ctx.fillText('- NEXT ENCHANT -', x + 95, y + 260);

    // NEXT ITEM スロット（獲得時フラッシュ発光）
    const slotX = x + 30;
    const slotY = y + 280;
    this.ctx.fillStyle = player.slotFlash > 0 ? 'rgba(245, 158, 11, 0.4)' : '#020617';
    this.ctx.strokeStyle = player.nextItem ? (player.slotFlash > 0 ? '#ffffff' : '#f59e0b') : '#334155';
    this.ctx.lineWidth = player.slotFlash > 0 ? 4 : 2;
    this.ctx.strokeRect(slotX, slotY, 130, 130);
    this.ctx.fillRect(slotX, slotY, 130, 130);

    if (player.nextItem) {
      this.ctx.font = '54px sans-serif';
      this.ctx.fillText(player.nextItem.icon, x + 95, slotY + 65);
      this.ctx.font = 'bold 15px sans-serif';
      this.ctx.fillStyle = '#f59e0b';
      this.ctx.fillText(player.nextItem.name, x + 95, slotY + 98);
      this.ctx.font = '11px sans-serif';
      this.ctx.fillStyle = '#94a3b8';
      this.ctx.fillText('次手自動エンチャント', x + 95, slotY + 118);
    } else {
      this.ctx.font = '13px sans-serif';
      this.ctx.fillStyle = '#475569';
      this.ctx.fillText('なし', x + 95, slotY + 70);
    }

    // 石の色パッシブ能力の常時表示 (選択中の石色パッシブに連動)
    const p1UsesBlack = (this.selectedBaseColor || 'BLACK') === 'BLACK';
    const playerUsesBlack = isP1 ? p1UsesBlack : !p1UsesBlack;
    const passiveName = playerUsesBlack ? '【黒石】魔導の浸食' : '【白石】聖光の守護';
    const passiveDesc = playerUsesBlack ? '連鎖時CT短縮＆敵遅延' : '状態異常25%軽減＆外周強化';
    this.ctx.fillStyle = playerUsesBlack ? '#38bdf8' : '#fbbf24';
    this.ctx.font = 'bold 12px sans-serif';
    this.ctx.fillText(`✨ ${passiveName}`, x + 95, y + 434);
    this.ctx.fillStyle = '#94a3b8';
    this.ctx.font = '10px sans-serif';
    this.ctx.fillText(passiveDesc, x + 95, y + 450);
    if (isP1) {
      const s = this.skins[this.equippedSkinId];
      if (s && s.passiveName) {
        this.ctx.fillStyle = '#facc15';
        this.ctx.fillText(`属性: ${s.passiveName.slice(0, 9)}`, x + 95, y + 466);
      }
    }
  }

  drawBoard() {
    const cx = this.canvas.width / 2;
    const cy = this.canvas.height / 2 + 25;
    const boardPx = 480;
    const cellSize = boardPx / this.gridSize;
    const startX = cx - boardPx / 2;
    const startY = cy - boardPx / 2;

    const theme = this.boardThemes[this.equippedBoardId] || this.boardThemes['DEFAULT'];

    // ★3D立体モード時：古代石板×サイバー台座の3D奥行きベベル＆ネオンアンダーグローを描画
    if (this.is3DView) {
      this.ctx.save();
      this.ctx.fillStyle = 'rgba(0, 0, 0, 0.72)';
      this.ctx.fillRect(startX - 14, startY + 6, boardPx + 28, boardPx + 26);

      // 立体側面台座 (下側の厚み)
      const bevelGrad = this.ctx.createLinearGradient(startX, startY + boardPx + 10, startX, startY + boardPx + 26);
      bevelGrad.addColorStop(0, this.isClimaxActive ? '#7f1d1d' : '#1e293b');
      bevelGrad.addColorStop(1, '#020617');
      this.ctx.fillStyle = bevelGrad;
      this.ctx.beginPath();
      this.ctx.moveTo(startX - 12, startY + boardPx + 10);
      this.ctx.lineTo(startX + boardPx + 12, startY + boardPx + 10);
      this.ctx.lineTo(startX + boardPx + 20, startY + boardPx + 24);
      this.ctx.lineTo(startX - 20, startY + boardPx + 24);
      this.ctx.closePath();
      this.ctx.fill();
      this.ctx.strokeStyle = this.isClimaxActive ? '#ef4444' : '#00f0ff';
      this.ctx.lineWidth = 1.5;
      this.ctx.stroke();
      this.ctx.restore();
    }

    this.ctx.fillStyle = '#0f172a';
    this.ctx.strokeStyle = this.isClimaxActive ? '#ef4444' : theme.frame;
    this.ctx.lineWidth = 8;
    this.ctx.strokeRect(startX - 10, startY - 10, boardPx + 20, boardPx + 20);
    this.ctx.fillRect(startX - 10, startY - 10, boardPx + 20, boardPx + 20);

    for (let r = 0; r < this.gridSize; r++) {
      for (let c = 0; c < this.gridSize; c++) {
        const x = startX + c * cellSize;
        const y = startY + r * cellSize;
        const cell = this.board[r][c];

        this.ctx.fillStyle = (r + c) % 2 === 0 ? theme.cellA : theme.cellB;
        this.ctx.fillRect(x + 1, y + 1, cellSize - 2, cellSize - 2);

        const minArea = this.gridSize === 10 ? 2 : 1;
        const maxArea = this.gridSize === 10 ? 7 : 6;
        if (r >= minArea && r <= maxArea && c >= minArea && c <= maxArea) {
          this.ctx.fillStyle = theme.center;
          this.ctx.fillRect(x + 1, y + 1, cellSize - 2, cellSize - 2);
        }

        if ((this.mode === 'VS_CPU' || this.mode === 'DUNGEON') && this.canPlace(r, c, this.p1.color, this.p1.nextItem) && this.p1.cooldown <= 0) {
          this.ctx.strokeStyle = 'rgba(0, 240, 255, 0.45)';
          this.ctx.lineWidth = 2;
          this.ctx.strokeRect(x + 3, y + 3, cellSize - 6, cellSize - 6);
        }

        // --- 【大改良】天空光柱ビーコン ＆ 回転ターゲット魔法陣 ---
        const it = this.itemsOnBoard.find(item => item.r === r && item.c === c);
        if (it) {
          if (it.dropTimer > 0) {
            const progress = 1 - (it.dropTimer / 2.8);
            const cellCx = x + cellSize / 2;
            const cellCy = y + cellSize / 2;

            // 1. 天空から降り注ぐ垂直光柱 (ビーコンライト)
            const bGrad = this.ctx.createLinearGradient(cellCx, 0, cellCx, cellCy);
            bGrad.addColorStop(0, 'rgba(245, 158, 11, 0.1)');
            bGrad.addColorStop(0.7, 'rgba(245, 158, 11, 0.45)');
            bGrad.addColorStop(1, 'rgba(251, 191, 36, 0.85)');
            this.ctx.fillStyle = bGrad;
            this.ctx.fillRect(cellCx - 14, 0, 28, cellCy);

            // 2. 床の回転ターゲット魔法陣
            this.ctx.save();
            this.ctx.translate(cellCx, cellCy);
            this.ctx.rotate(progress * Math.PI * 4);
            this.ctx.strokeStyle = '#f59e0b';
            this.ctx.lineWidth = 3;
            this.ctx.strokeRect(-cellSize*0.4, -cellSize*0.4, cellSize*0.8, cellSize*0.8);
            this.ctx.beginPath();
            this.ctx.arc(0, 0, cellSize*0.45, 0, Math.PI * 2);
            this.ctx.stroke();
            this.ctx.restore();

            // 3. アイテム落下アイコン ＆ カウントダウン
            const dropY = cellCy - (1 - progress) * 180;
            this.ctx.font = `${cellSize * 0.65}px sans-serif`;
            this.ctx.textAlign = 'center';
            this.ctx.textBaseline = 'middle';
            this.ctx.fillText(it.type.icon, cellCx, dropY);

            // 落下警報テキスト
            this.ctx.fillStyle = '#facc15';
            this.ctx.font = 'bold 12px sans-serif';
            this.ctx.fillText(`▼ ${(it.dropTimer).toFixed(1)}s`, cellCx, cellCy + cellSize * 0.4);
          } else {
            // 着弾済みアイテム
            this.ctx.font = `${cellSize * 0.6}px sans-serif`;
            this.ctx.textAlign = 'center';
            this.ctx.textBaseline = 'middle';
            this.ctx.fillText(it.type.icon, x + cellSize / 2, y + cellSize / 2);
          }
        }

        // オンラインゲスト(2P)時またはCPU対戦時の置けるマスガイド表示
        if (this.mode === 'PVP_ONLINE') {
          const myP = this.onlineRole === 'GUEST' ? this.p2 : this.p1;
          if (this.canPlace(r, c, myP.color, myP.nextItem) && myP.cooldown <= 0) {
            this.ctx.strokeStyle = this.onlineRole === 'GUEST' ? 'rgba(251, 191, 36, 0.45)' : 'rgba(0, 240, 255, 0.45)';
            this.ctx.lineWidth = 2;
            this.ctx.strokeRect(x + 3, y + 3, cellSize - 6, cellSize - 6);
          }
        }

        if (cell.color !== 0) {
          this.drawStone(x + cellSize / 2, y + cellSize / 2, (cellSize / 2 - 4) * cell.scale, cell.color, cell.isGold, cell.scale, cell);
        }

        if (this.p1.cursor.r === r && this.p1.cursor.c === c) {
          this.ctx.strokeStyle = '#00f0ff';
          this.ctx.lineWidth = 3;
          this.ctx.strokeRect(x + 2, y + 2, cellSize - 4, cellSize - 4);
        }

        if (this.p2.cursor.r === r && this.p2.cursor.c === c) {
          this.ctx.strokeStyle = '#f59e0b';
          this.ctx.lineWidth = 3;
          this.ctx.strokeRect(x + 4, y + 4, cellSize - 8, cellSize - 8);
        }
      }
    }
  }

  drawStone(cx, cy, radius, color, isGold, scale = 1.0, cell = null) {
    this.ctx.save();

    // ★Zero-Lag 3D立体円柱 ＆ 放物線ジャンプ180度宙返りアニメーション
    if (this.is3DView) {
      let renderColor = color;
      let scaleX = 1.0;
      let jumpLift = Math.max(0, (scale - 1.0) * 16);

      if (cell && cell.flipTimer > 0) {
        if (cell.flipDelay > 0) {
          renderColor = cell.prevColor || color;
        } else {
          const dur = cell.flipDur || 0.34;
          const progress = Math.max(0, Math.min(1, 1.0 - (cell.flipTimer / dur)));
          const cosVal = Math.cos(progress * Math.PI);
          scaleX = Math.max(0.08, Math.abs(cosVal)); // 空中90度でエッジになる3D回転
          jumpLift = Math.sin(progress * Math.PI) * 22; // 放物線ジャンプ高度
          renderColor = progress < 0.5 ? (cell.prevColor || color) : color;
        }
      }

      // 1) 盤面に落ちる3Dダイナミック・ドロップシャドウ
      this.ctx.fillStyle = 'rgba(0, 0, 0, 0.55)';
      this.ctx.beginPath();
      this.ctx.ellipse(
        cx + 2.5 + jumpLift * 0.18,
        cy + 4.5 + jumpLift * 0.24,
        Math.max(2, radius * scaleX * 0.96),
        Math.max(2, radius * 0.92),
        0, 0, Math.PI * 2
      );
      this.ctx.fill();

      // 2) 石の浮き上がり＆3D回転変換
      const drawY = cy - jumpLift;
      this.ctx.translate(cx, drawY);
      this.ctx.scale(scaleX, 1.0);

      // 3) 3D円柱の側面リム（石の立体的な厚み）
      const rimThickness = Math.max(3.5, 4.5 + jumpLift * 0.1);
      const skinForRim = this.skins[this.equippedSkinId] || this.skins['DEFAULT'];
      const stRim = (renderColor === P1_COLOR) ? skinForRim.p1 : skinForRim.p2;
      this.ctx.fillStyle = isGold ? '#713f12' : stRim.grad2;
      this.ctx.strokeStyle = isGold ? '#eab308' : stRim.stroke;
      this.ctx.lineWidth = 1.5;
      this.ctx.beginPath();
      this.ctx.arc(0, rimThickness, radius, 0, Math.PI * 2);
      this.ctx.fill();
      this.ctx.stroke();

      // 元の描画ロジックをそのまま使えるよう (-cx, -cy) オフセット
      this.ctx.translate(-cx, -cy);
      color = renderColor;
    }

    this.ctx.beginPath();
    this.ctx.arc(cx, cy, radius, 0, Math.PI * 2);

    if (isGold) {
      const grad = this.ctx.createRadialGradient(cx - radius*0.3, cy - radius*0.3, 2, cx, cy, radius);
      grad.addColorStop(0, '#fef08a');
      grad.addColorStop(0.5, '#eab308');
      grad.addColorStop(1, '#854d0e');
      this.ctx.fillStyle = grad;
      this.ctx.fill();
      this.ctx.strokeStyle = '#fef08a';
      this.ctx.lineWidth = 3;
      this.ctx.stroke();

      this.ctx.fillStyle = '#ffffff';
      this.ctx.font = `${radius * 0.9}px sans-serif`;
      this.ctx.textAlign = 'center';
      this.ctx.textBaseline = 'middle';
      this.ctx.fillText('👑', cx, cy);
    } else {
      const skin = this.skins[this.equippedSkinId] || this.skins['DEFAULT'];
      const st = (color === P1_COLOR) ? skin.p1 : skin.p2;

      const grad = this.ctx.createRadialGradient(cx - radius*0.3, cy - radius*0.3, 2, cx, cy, radius);
      grad.addColorStop(0, st.grad0);
      grad.addColorStop(0.7, st.grad1);
      grad.addColorStop(1, st.grad2);
      this.ctx.fillStyle = grad;
      this.ctx.fill();
      this.ctx.strokeStyle = st.stroke;
      this.ctx.lineWidth = 2.5;
      this.ctx.stroke();

      // 内側の魔導コア発光
      this.ctx.fillStyle = st.core;
      this.ctx.beginPath();
      this.ctx.arc(cx, cy, radius * 0.35, 0, Math.PI * 2);
      this.ctx.fill();

      // --- 【有機的もわもわオーラ描画】 ---
      const nowSec = performance.now() / 1000;
      const auraLv = this.skinAuraLevel[this.equippedSkinId] || 1;

      // レアリティまたはオーラレベルに応じた「もわもわ煙炎」
      if (!this.isPvpFairMode() && (scale > 1.05 || isGold) && (skin.rarity >= 5 || auraLv >= 2)) {
        const numLobes = skin.rarity === 6 ? 6 : (skin.rarity === 5 ? 4 : 3);
        const maxDist = radius * (skin.rarity === 6 ? 1.55 : (skin.rarity === 5 ? 1.35 : 1.2));

        for (let i = 0; i < numLobes; i++) {
          const angle = (Math.PI * 2 / numLobes) * i + nowSec * (i % 2 === 0 ? 1.8 : -1.5);
          const pulse = Math.sin(nowSec * 3.5 + i * 1.5) * (radius * 0.22);
          const lx = cx + Math.cos(angle) * (radius * 0.45 + pulse);
          const ly = cy + Math.sin(angle) * (radius * 0.45 + pulse);

          const auraGrad = this.ctx.createRadialGradient(lx, ly, 2, cx, cy, maxDist);
          const aColor = skin.rarity === 6 
            ? (i % 2 === 0 ? 'rgba(0, 240, 255, 0.45)' : 'rgba(236, 72, 153, 0.45)')
            : (skin.rarity === 5 ? (color === P1_COLOR ? 'rgba(168, 85, 247, 0.4)' : 'rgba(245, 158, 11, 0.4)') : 'rgba(56, 189, 248, 0.25)');
          
          auraGrad.addColorStop(0, aColor);
          auraGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
          this.ctx.fillStyle = auraGrad;
          this.ctx.beginPath();
          this.ctx.arc(cx, cy, maxDist, 0, Math.PI * 2);
          this.ctx.fill();
        }
      }

      // 【★6 LR 創世神竜専用】回転する古代魔導陣環 ＆ 虹彩リング
      if (skin.rarity === 6) {
        this.ctx.save();
        this.ctx.translate(cx, cy);
        this.ctx.rotate(nowSec * 2);
        this.ctx.strokeStyle = color === P1_COLOR ? '#ec4899' : '#facc15';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.arc(0, 0, radius * 1.15, 0, Math.PI * 2);
        this.ctx.stroke();
        this.ctx.strokeRect(-radius * 0.65, -radius * 0.65, radius * 1.3, radius * 1.3);
        this.ctx.restore();
      } else if (skin.rarity === 5 || auraLv >= 3) {
        // ★5 SSR専用の光芒フレーム
        this.ctx.save();
        this.ctx.translate(cx, cy);
        this.ctx.rotate(nowSec * 1.2);
        this.ctx.strokeStyle = st.core;
        this.ctx.lineWidth = 1.5;
        this.ctx.strokeRect(-radius * 0.55, -radius * 0.55, radius * 1.1, radius * 1.1);
        this.ctx.restore();
      }
    }
    this.ctx.restore();
  }

  // --- 特殊VFX要素の描画 ---
  drawVfxElements() {
    // 1. ブラックホール描画
    this.blackHoles.forEach(bh => {
      this.ctx.save();
      const alpha = bh.life / bh.maxLife;
      const curRadius = bh.radius * (1 - alpha * 0.2);
      
      const bhGrad = this.ctx.createRadialGradient(bh.x, bh.y, 10, bh.x, bh.y, curRadius);
      bhGrad.addColorStop(0, '#000000');
      bhGrad.addColorStop(0.4, 'rgba(88, 28, 135, 0.9)');
      bhGrad.addColorStop(0.8, 'rgba(168, 85, 247, 0.4)');
      bhGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      
      this.ctx.fillStyle = bhGrad;
      this.ctx.beginPath();
      this.ctx.arc(bh.x, bh.y, curRadius, 0, Math.PI * 2);
      this.ctx.fill();

      // 事象の地平面リング
      this.ctx.strokeStyle = '#c084fc';
      this.ctx.lineWidth = 3;
      this.ctx.beginPath();
      this.ctx.arc(bh.x, bh.y, curRadius * 0.5, 0, Math.PI * 2);
      this.ctx.stroke();
      this.ctx.restore();
    });

    // 2. 魔法陣ペイント描画
    this.magicCircles.forEach(mc => {
      this.ctx.save();
      const alpha = mc.life / mc.maxLife;
      this.ctx.translate(mc.x, mc.y);
      this.ctx.rotate((1 - alpha) * Math.PI * 3);
      this.ctx.strokeStyle = mc.color;
      this.ctx.globalAlpha = alpha;
      this.ctx.lineWidth = 4;
      this.ctx.beginPath();
      this.ctx.arc(0, 0, mc.radius * (1 - alpha * 0.3), 0, Math.PI * 2);
      this.ctx.stroke();
      this.ctx.strokeRect(-mc.radius*0.6, -mc.radius*0.6, mc.radius*1.2, mc.radius*1.2);
      this.ctx.restore();
    });

    // 3. 飛翔エネルギー球 (盤面 -> 手元スロット)
    this.flyingOrbs.forEach(orb => {
      this.ctx.save();
      const curX = orb.x + (orb.targetX - orb.x) * orb.progress;
      const curY = orb.y + (orb.targetY - orb.y) * orb.progress - Math.sin(orb.progress * Math.PI) * 70;
      
      this.ctx.fillStyle = orb.color;
      this.ctx.shadowColor = orb.color;
      this.ctx.shadowBlur = 20;
      this.ctx.beginPath();
      this.ctx.arc(curX, curY, 14, 0, Math.PI * 2);
      this.ctx.fill();

      this.ctx.font = '22px sans-serif';
      this.ctx.textAlign = 'center';
      this.ctx.textBaseline = 'middle';
      this.ctx.fillText(orb.icon, curX, curY);
      this.ctx.restore();
    });

    // 4. アイテムGETポップアップ
    this.itemGetPopups.forEach(pop => {
      this.ctx.save();
      const alpha = pop.life / pop.maxLife;
      this.ctx.fillStyle = pop.color;
      this.ctx.shadowColor = '#000000';
      this.ctx.shadowBlur = 10;
      this.ctx.globalAlpha = alpha;
      this.ctx.font = 'bold 22px sans-serif';
      this.ctx.textAlign = 'center';
      this.ctx.fillText(`${pop.icon} ${pop.text}`, pop.x, pop.y);
      this.ctx.restore();
    });
  }

  drawButton(x, y, w, h, text, bg, isPrimary = false) {
    this.ctx.save();
    this.ctx.fillStyle = bg;
    this.ctx.strokeStyle = isPrimary ? '#ffffff' : '#475569';
    this.ctx.lineWidth = isPrimary ? 3 : 1;
    this.ctx.fillRect(x, y, w, h);
    this.ctx.strokeRect(x, y, w, h);

    this.ctx.fillStyle = '#ffffff';
    this.ctx.font = 'bold 18px sans-serif';
    this.ctx.textAlign = 'center';
    this.ctx.textBaseline = 'middle';
    this.ctx.fillText(text, x + w / 2, y + h / 2);
    this.ctx.restore();
  }

  // 残り30秒の特別大逆転システム（3大奇跡）
  applySuperMiracle(loser, miracleType) {
    this.screenFlash = 0.8;
    this.triggerScreenShake(30);
    audio.playLightningBoom();

    if (miracleType === 'COLOR_SWAP') {
      // 1. 【運命反転 (Color Swap)】: 全盤面の自分と相手の石の色を一斉反転！
      for (let r = 0; r < this.gridSize; r++) {
        for (let c = 0; c < this.gridSize; c++) {
          const cell = this.board[r][c];
          if (cell.color === P1_COLOR) {
            cell.color = P2_COLOR;
            cell.scale = 1.4;
          } else if (cell.color === P2_COLOR) {
            cell.color = P1_COLOR;
            cell.scale = 1.4;
          }
        }
      }
      this.updateScores();
      this.triggerCutIn('🌌 REVERSE DESTINY!!', '運命反転！全盤面の石の色が完全入れ替わり！', '#c084fc');
      this.showBanner(`🌌 奇跡発動！【運命反転】全盤面の色が完全反転！`, '#a855f7', 3.5);
    } else if (miracleType === 'GIGA_BOMB') {
      // 2. 【超巨大ギガボム】: 盤面中央から円形範囲（半径3マス）を大爆砕・更地化！
      const mid = (this.gridSize - 1) / 2;
      const blastRadius = 1.85; // 3.2から1.85へ適正化！中央付近の約8〜12マスを更地化
      let clearCount = 0;

      for (let r = 0; r < this.gridSize; r++) {
        for (let c = 0; c < this.gridSize; c++) {
          const dist = Math.hypot(r - mid, c - mid);
          if (dist <= blastRadius) {
            this.board[r][c].color = 0;
            this.board[r][c].isGold = false;
            this.addSkinPlacementVfx(r, c, loser.color, 'INFERNO');
            clearCount++;
          }
        }
      }
      this.updateScores();
      this.triggerCutIn('💥 GIGA BOMB BURST!!', `超巨大ギガボム着弾！中央円形${clearCount}マスを消滅爆砕！`, '#ef4444');
      this.showBanner(`💥 奇跡発動！【ギガボム】中央円形${clearCount}マスを消滅爆砕！`, '#ef4444', 3.5);
      audio.playNoiseHit(0.5, 380, 1.3);
    } else if (miracleType === 'HASTE_BURST') {
      // 3. 【神速覚醒・CT半減】: 負けてる側のクールダウンを10秒間半分に！
      loser.hasteTimer = 10.0;
      this.triggerCutIn('⚡ HASTE OVERDRIVE!!', `神速覚醒！劣勢の${loser.name}のCTが10秒間半減！`, '#facc15');
      this.showBanner(`⚡ 奇跡発動！【神速覚醒】劣勢の${loser.name}のCTが10秒間半減！`, '#facc15', 3.5);
    }
  }

  drawPauseModal() {
    const ctx = this.ctx;
    const w = this.canvas.width;
    const h = this.canvas.height;

    // 半透明背景暗転
    ctx.save();
    ctx.fillStyle = 'rgba(2, 6, 23, 0.88)';
    ctx.fillRect(0, 0, w, h);

    // ダイアログボックス
    const boxW = 500;
    const boxH = 420;
    const boxX = (w - boxW) / 2;
    const boxY = (h - boxH) / 2;

    ctx.fillStyle = '#0f172a';
    ctx.fillRect(boxX, boxY, boxW, boxH);
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 3;
    ctx.strokeRect(boxX, boxY, boxW, boxH);

    // タイトル
    ctx.textAlign = 'center';
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 34px Cinzel, sans-serif';
    ctx.fillText('⏸️ PAUSE (一時停止中)', w / 2, boxY + 55);

    // 現在の対戦情報
    ctx.fillStyle = '#94a3b8';
    ctx.font = '17px sans-serif';
    let info = '';
    if (this.mode === 'DUNGEON') {
      const stage = DUNGEON_STAGES[this.dungeonFloor] || DUNGEON_STAGES[1];
      if (this.dungeonSubStage === 'MINION') {
        info = `STAGE ${this.dungeonFloor}-1 [前哨戦: ${stage.minion.name}]`;
      } else if (this.dungeonSubStage === 'ELITE') {
        info = `STAGE ${this.dungeonFloor}-2 [精鋭戦: ${stage.elite.name}]`;
      } else {
        info = `STAGE ${this.dungeonFloor}-3 [大ボス戦: ${stage.boss.name}]`;
      }
    } else if (this.mode === 'PVP_ONLINE') {
      info = `🌐 P2Pオンライン対戦 [ROOM: ${this.onlineRoomId || 'ONLINE'}]`;
    } else if (this.isPvpFairMode()) {
      info = '👥 ２人対戦 (パッシブなし・フェア勝負)';
    } else {
      info = '🤖 CPU練習対決';
    }
    ctx.fillText(info, w / 2, boxY + 98);

    // スコアと残り時間
    const m = Math.floor(this.timeLeft / 60);
    const s = Math.floor(this.timeLeft % 60);
    ctx.fillStyle = '#facc15';
    ctx.font = 'bold 22px monospace';
    ctx.fillText(`⏱️ 残り時間: ${m}:${s < 10 ? '0' : ''}${s}  |  スコア: 1P ${this.p1.score} - ${this.p2.score} 2P`, w / 2, boxY + 138);

    // ボタン3つ
    // 1. 再開 (boxX + 60, boxY + 175, 380, 52)
    this.drawButton(boxX + 60, boxY + 175, 380, 52, '▶️ 決闘再開 (RESUME / Esc)', '#0284c7', true);

    // 2. 音声ミュート切替 (boxX + 60, boxY + 245, 380, 50)
    const muteText = audio.isMuted ? '🔇 音声: OFF ➔ ONにする' : '🔊 音声: ON ➔ ミュートにする';
    this.drawButton(boxX + 60, boxY + 245, 380, 50, muteText, audio.isMuted ? '#475569' : '#10b981', true);

    // 3. 降参・タイトルへ (boxX + 60, boxY + 312, 380, 50)
    this.drawButton(boxX + 60, boxY + 312, 380, 50, '🏳️ 降参してタイトルへ (GIVE UP)', '#dc2626', true);

    ctx.restore();
  }

  drawResultScreen() {
    const w = this.canvas.width;
    const h = this.canvas.height;
    const cx = w / 2;

    this.ctx.fillStyle = 'rgba(2, 6, 23, 0.96)';
    this.ctx.fillRect(0, 0, w, h);

    // 勝敗判定ロジック
    let winner = null;
    let winReason = '';
    if (this.p1.score > this.p2.score) {
      winner = this.p1.name;
      winReason = `枚数制圧勝利 (${this.p1.score}枚 vs ${this.p2.score}枚)`;
    } else if (this.p2.score > this.p1.score) {
      winner = this.p2.name;
      winReason = `枚数制圧勝利 (${this.p2.score}枚 vs ${this.p1.score})`;
    } else {
      let p1Badges = 0, p2Badges = 0;
      if (this.stats.p1Moves > this.stats.p2Moves) p1Badges++; else p2Badges++;
      if (this.stats.p1Items > this.stats.p2Items) p1Badges++; else p2Badges++;
      if (this.stats.p1Overwrites > this.stats.p2Overwrites) p1Badges++; else p2Badges++;
      if (this.stats.p1Corners > this.stats.p2Corners) p1Badges++; else p2Badges++;
      if (this.stats.p1MaxFlips > this.stats.p2MaxFlips) p1Badges++; else p2Badges++;

      if (p1Badges > p2Badges) {
        winner = this.p1.name;
        winReason = `同点判定勝ち！5大アワード ${p1Badges}冠 vs ${p2Badges}冠`;
      } else {
        winner = this.p2.name;
        winReason = `同点判定勝ち！5大アワード ${p2Badges}冠 vs ${p1Badges}冠`;
      }
    }

    // 報酬・BET精算 (1度のみ実行)
    if (!this.matchResultAwarded) {
      this.matchResultAwarded = true;
      if (this.mode === 'DUNGEON') {
        // ダンジョン進行判定
        if (winner === this.p1.name) {
          this.p1Gold += 350;
          this.lastResultBanner = `🏆 FLOOR ${this.dungeonFloor} 突破！報酬 +350 G 獲得！`;
        } else {
          this.lastResultBanner = `💀 DUNGEON FAILED... 魔導ダンジョン敗北`;
        }
      } else if (this.currentBet > 0) {
        if (winner === this.p1.name) {
          this.p1Gold += this.currentBet;
          this.p2Gold = Math.max(0, this.p2Gold - this.currentBet);
          this.lastResultBanner = `🔥 1Pが 2Pから賭け金 ${this.currentBet} G を総取り！！`;
        } else if (winner === this.p2.name) {
          this.p2Gold += this.currentBet;
          this.p1Gold = Math.max(0, this.p1Gold - this.currentBet);
          this.lastResultBanner = `🔥 2Pが 1Pから賭け金 ${this.currentBet} G を総取り！！`;
        } else {
          this.lastResultBanner = `🤝 引き分け！賭け金 ${this.currentBet} G は両者に返還。`;
        }
        this.p1Gold += 150;
        this.p2Gold += 150;
      } else {
        this.lastResultBanner = `🎉 決闘完了！両者に参加賞 +150 G！`;
        this.p1Gold += 150;
        this.p2Gold += 150;
      }
      this.saveUserData();
    }

    // --- 上部ヘッダー (y: 35〜130) ---
    this.ctx.textAlign = 'center';
    this.ctx.fillStyle = '#ffffff';
    this.ctx.font = '900 44px sans-serif';
    this.ctx.shadowColor = '#00f0ff';
    this.ctx.shadowBlur = 20;
    this.ctx.fillText('DUEL FINISH!!', cx, 52);
    this.ctx.shadowBlur = 0;

    this.ctx.font = 'bold 28px sans-serif';
    this.ctx.fillStyle = winner === this.p1.name ? '#00f0ff' : '#f59e0b';
    this.ctx.fillText(`🏆 WINNER: 【${winner}】！`, cx, 92);

    this.ctx.font = 'bold 16px sans-serif';
    this.ctx.fillStyle = '#fde047';
    this.ctx.fillText(winReason, cx, 122);

    // --- 左パネル: 決闘戦績・アワード (幅540px, x: 70) ---
    const p1X = 70, pY = 145, pW = 540, pH = 430;
    this.ctx.fillStyle = 'rgba(15, 23, 42, 0.9)';
    this.ctx.strokeStyle = '#3b82f6';
    this.ctx.lineWidth = 2;
    this.ctx.fillRect(p1X, pY, pW, pH);
    this.ctx.strokeRect(p1X, pY, pW, pH);

    this.ctx.textAlign = 'left';
    this.ctx.fillStyle = '#38bdf8';
    this.ctx.font = 'bold 18px sans-serif';
    this.ctx.fillText('📊 決闘戦績 ＆ 5大アワード', p1X + 24, pY + 34);

    this.ctx.strokeStyle = 'rgba(148, 163, 184, 0.25)';
    this.ctx.lineWidth = 1;
    this.ctx.beginPath();
    this.ctx.moveTo(p1X + 20, pY + 48);
    this.ctx.lineTo(p1X + pW - 20, pY + 48);
    this.ctx.stroke();

    const statRows = [
      `⚡ 総手数: 1P ${this.stats.p1Moves}手  /  2P ${this.stats.p2Moves}手`,
      `🧲 アイテム獲得: 1P ${this.stats.p1Items}個  /  2P ${this.stats.p2Items}個`,
      `💥 上書き成功: 1P ${this.stats.p1Overwrites}回  /  2P ${this.stats.p2Overwrites}回`,
      `🏰 四隅支配: 1P ${this.stats.p1Corners}箇所  /  2P ${this.stats.p2Corners}箇所`,
      `🌊 最大連鎖数: 1P ${this.stats.p1MaxFlips}枚  /  2P ${this.stats.p2MaxFlips}枚`
    ];

    this.ctx.fillStyle = '#cbd5e1';
    this.ctx.font = '15px sans-serif';
    statRows.forEach((sText, sIdx) => {
      this.ctx.fillText(sText, p1X + 28, pY + 85 + sIdx * 34);
    });

    // スコア＆ランクボックス (一人プレイ / ダンジョン時)
    if (this.mode === 'VS_CPU' || this.mode === 'DUNGEON') {
      const sBoxY = pY + 265;
      this.ctx.fillStyle = 'rgba(2, 6, 23, 0.85)';
      this.ctx.strokeStyle = '#facc15';
      this.ctx.lineWidth = 1.5;
      this.ctx.fillRect(p1X + 20, sBoxY, pW - 40, 140);
      this.ctx.strokeRect(p1X + 20, sBoxY, pW - 40, 140);

      let rank = 'C', rankColor = '#94a3b8', rankTitle = '初級挑戦者';
      if (this.currentScore >= 35000) { rank = 'S'; rankColor = '#facc15'; rankTitle = '神話級マスター'; }
      else if (this.currentScore >= 22000) { rank = 'A'; rankColor = '#38bdf8'; rankTitle = '上級オセロ魔導士'; }
      else if (this.currentScore >= 14000) { rank = 'B'; rankColor = '#10b981'; rankTitle = '中級決闘者'; }

      if (this.currentScore > this.highScore) {
        this.highScore = this.currentScore;
        this.isNewHighScore = true;
        this.saveUserData();
      }

      this.ctx.textAlign = 'left';
      this.ctx.fillStyle = '#ffffff';
      this.ctx.font = 'bold 20px sans-serif';
      this.ctx.fillText(`FINAL SCORE: ${this.currentScore.toLocaleString()} pts`, p1X + 40, sBoxY + 40);

      this.ctx.fillStyle = rankColor;
      this.ctx.font = '900 24px sans-serif';
      this.ctx.fillText(`RANK: [${rank}] ${rankTitle}`, p1X + 40, sBoxY + 80);

      if (this.isNewHighScore) {
        this.ctx.fillStyle = '#ef4444';
        this.ctx.font = 'bold 15px sans-serif';
        this.ctx.fillText(`🎉 NEW HIGH SCORE RECORD!! (+300G ボーナス)`, p1X + 40, sBoxY + 115);
      }
    }

    // --- 右パネル: 報酬精算 ＆ 所持金 (幅540px, x: 670) ---
    const p2X = 670;
    this.ctx.fillStyle = 'rgba(15, 23, 42, 0.9)';
    this.ctx.strokeStyle = '#f59e0b';
    this.ctx.lineWidth = 2;
    this.ctx.fillRect(p2X, pY, pW, pH);
    this.ctx.strokeRect(p2X, pY, pW, pH);

    this.ctx.textAlign = 'left';
    this.ctx.fillStyle = '#fbbf24';
    this.ctx.font = 'bold 18px sans-serif';
    this.ctx.fillText('💰 決闘報酬 ＆ 所持金精算', p2X + 24, pY + 34);

    this.ctx.strokeStyle = 'rgba(148, 163, 184, 0.25)';
    this.ctx.lineWidth = 1;
    this.ctx.beginPath();
    this.ctx.moveTo(p2X + 20, pY + 48);
    this.ctx.lineTo(p2X + pW - 20, pY + 48);
    this.ctx.stroke();

    // 決闘リザルトバナー
    this.ctx.textAlign = 'center';
    this.ctx.fillStyle = '#fde047';
    this.ctx.font = 'bold 20px sans-serif';
    this.ctx.fillText(this.lastResultBanner, p2X + pW / 2, pY + 95);

    this.ctx.fillStyle = '#94a3b8';
    this.ctx.font = '13px sans-serif';
    this.ctx.fillText('(基本参加賞: 両者に +150 G 加算完了)', p2X + pW / 2, pY + 125);

    // 1P & 2P ウォレットカード (横並び)
    const cardW = 230, cardH = 110, cardY = pY + 155;
    // 1P
    this.ctx.fillStyle = 'rgba(2, 6, 23, 0.85)';
    this.ctx.strokeStyle = '#00f0ff';
    this.ctx.lineWidth = 2;
    this.ctx.fillRect(p2X + 25, cardY, cardW, cardH);
    this.ctx.strokeRect(p2X + 25, cardY, cardW, cardH);
    this.ctx.textAlign = 'center';
    this.ctx.fillStyle = '#38bdf8';
    this.ctx.font = 'bold 14px sans-serif';
    this.ctx.fillText('1P (黒) 所持金', p2X + 25 + cardW / 2, cardY + 32);
    this.ctx.fillStyle = '#ffffff';
    this.ctx.font = '900 26px sans-serif';
    this.ctx.fillText(`💰 ${this.p1Gold.toLocaleString()} G`, p2X + 25 + cardW / 2, cardY + 76);

    // 2P
    this.ctx.fillStyle = 'rgba(2, 6, 23, 0.85)';
    this.ctx.strokeStyle = '#f59e0b';
    this.ctx.lineWidth = 2;
    this.ctx.fillRect(p2X + 285, cardY, cardW, cardH);
    this.ctx.strokeRect(p2X + 285, cardY, cardW, cardH);
    this.ctx.fillStyle = '#fbbf24';
    this.ctx.font = 'bold 14px sans-serif';
    this.ctx.fillText('2P (白) 所持金', p2X + 285 + cardW / 2, cardY + 32);
    this.ctx.fillStyle = '#ffffff';
    this.ctx.font = '900 26px sans-serif';
    this.ctx.fillText(`💰 ${this.p2Gold.toLocaleString()} G`, p2X + 285 + cardW / 2, cardY + 76);

    // ヒント案内
    this.ctx.textAlign = 'left';
    this.ctx.fillStyle = '#94a3b8';
    this.ctx.font = '13px sans-serif';
    this.ctx.fillText('💡 獲得したゴールドで「魔導ガチャ」から新スキンを獲得可能！', p2X + 30, pY + 315);
    this.ctx.fillText('✨ ガチャ被りでオーラがLv.1 ➔ Lv.2 ➔ Lv.3 MAXへ限界突破！', p2X + 30, pY + 345);
    this.ctx.fillText('🎰 ★6 レジェンドレア「創世神竜の極光」(1.5%) を目指せ！', p2X + 30, pY + 375);

    // --- 下部アクションボタンバー (y: 600, h: 54) ---
    if (this.mode === 'DUNGEON' && winner === this.p1.name && this.dungeonFloor < 5) {
      this.drawButton(cx - 200, 600, 400, 56, '🎁 能力選択へ進む (NEXT FLOOR)', '#7c3aed', true);
    } else {
      // 1.5秒誤爆ガード中の表示
      if (this.resultGuardTimer > 0) {
        this.drawButton(140, 600, 300, 56, `⏱ 確認中 (${this.resultGuardTimer.toFixed(1)}s)...`, '#334155');
      } else {
        this.drawButton(140, 600, 300, 56, '⚡ 再戦する (REMATCH - Space/R)', '#0284c7', true);
      }
      this.drawButton(490, 600, 300, 56, '🎰 魔導ガチャ (GACHA)', '#7c3aed', true);
      this.drawButton(840, 600, 300, 56, '🏠 タイトルへ戻る (TITLE)', '#1e293b');
    }
  }

  showBanner(text, color, duration = 1.5) {
    this.bannerText = text;
    this.bannerColor = color;
    this.bannerTimer = duration;
  }

  drawBanner() {
    const cx = this.canvas.width / 2;
    this.ctx.save();
    this.ctx.fillStyle = 'rgba(15, 23, 42, 0.94)';
    this.ctx.strokeStyle = this.bannerColor || '#00f0ff';
    this.ctx.lineWidth = 2;
    this.ctx.fillRect(cx - 380, 160, 760, 55);
    this.ctx.strokeRect(cx - 380, 160, 760, 55);

    this.ctx.textAlign = 'center';
    this.ctx.fillStyle = this.bannerColor || '#ffffff';
    this.ctx.font = 'bold 22px sans-serif';
    this.ctx.fillText(this.bannerText, cx, 196);
    this.ctx.restore();
  }

  addShockwave(r, c, color, maxRadius = 50) {
    const pos = this.cellToPixel(r, c);
    this.shockwaves.push({ x: pos.x, y: pos.y, radius: 5, maxRadius, color, alpha: 1.0 });
  }

  addLightning(r, c) {
    const pos = this.cellToPixel(r, c);
    this.lightningBolts.push({ x: pos.x, y: pos.y, life: 0.35 });
  }

  // スキン固有の配置VFX演出
  addFloatingText(text, color, x, y, scale = 1.0) {
    this.floatingTexts.push({
      text, color, x, y,
      life: 1.2, maxLife: 1.2,
      scale
    });
  }

  updateFloatingTexts(dt) {
    for (let i = this.floatingTexts.length - 1; i >= 0; i--) {
      const ft = this.floatingTexts[i];
      ft.life -= dt;
      ft.y -= dt * 32;
      if (ft.life <= 0) {
        this.floatingTexts.splice(i, 1);
      }
    }
  }

  drawFloatingTexts() {
    this.floatingTexts.forEach(ft => {
      this.ctx.save();
      const alpha = ft.life / ft.maxLife;
      this.ctx.globalAlpha = Math.max(0, alpha);
      this.ctx.fillStyle = ft.color;
      this.ctx.shadowColor = '#000000';
      this.ctx.shadowBlur = 8;
      this.ctx.font = `bold ${Math.floor(18 * ft.scale)}px sans-serif`;
      this.ctx.textAlign = 'center';
      this.ctx.fillText(ft.text, ft.x, ft.y);
      this.ctx.restore();
    });
  }

  // --- 劇的シネマティック・カットイン演出 ---
  triggerCutIn(text, sub, color = '#00f0ff') {
    this.cutIn = {
      text, sub, color,
      life: 1.35, maxLife: 1.35
    };
    audio.playLightningBoom();
    this.triggerScreenShake(22);
  }

  drawCutIn() {
    if (!this.cutIn || this.cutIn.life <= 0) return;
    const w = this.canvas.width;
    const h = this.canvas.height;
    const c = this.cutIn;
    // 【改善点①：盤面が透けて見えるシースルー透明ガラス仕様】
    const alpha = Math.min(0.85, (c.life / (c.maxLife * 0.25)) * 0.85);

    this.ctx.save();
    this.ctx.globalAlpha = alpha;

    // 水平カットイン帯 (スリム＆高透明度ガラスグラデーション)
    const bandH = 92;
    const bandY = h / 2 - bandH / 2;
    const bGrad = this.ctx.createLinearGradient(0, bandY, 0, bandY + bandH);
    bGrad.addColorStop(0, 'rgba(15, 23, 42, 0)');
    bGrad.addColorStop(0.2, 'rgba(15, 23, 42, 0.28)');
    bGrad.addColorStop(0.8, 'rgba(15, 23, 42, 0.28)');
    bGrad.addColorStop(1, 'rgba(15, 23, 42, 0)');
    this.ctx.fillStyle = bGrad;
    this.ctx.fillRect(0, bandY, w, bandH);

    // 繊細なネオンレーザー境界線（細く光らせて視界を遮らない）
    this.ctx.strokeStyle = c.color;
    this.ctx.lineWidth = 1.5;
    this.ctx.shadowColor = c.color;
    this.ctx.shadowBlur = 14;
    this.ctx.beginPath();
    this.ctx.moveTo(0, bandY + 8);
    this.ctx.lineTo(w, bandY + 8);
    this.ctx.moveTo(0, bandY + bandH - 8);
    this.ctx.lineTo(w, bandY + bandH - 8);
    this.ctx.stroke();

    // メイン極太テキスト (透明感のある鮮烈発光)
    this.ctx.textAlign = 'center';
    this.ctx.fillStyle = '#ffffff';
    this.ctx.font = '900 38px sans-serif';
    this.ctx.shadowColor = c.color;
    this.ctx.shadowBlur = 22;
    this.ctx.fillText(c.text, w / 2, h / 2 - 4);

    // サブタイトル
    this.ctx.fillStyle = c.color;
    this.ctx.font = 'bold 15px sans-serif';
    this.ctx.shadowBlur = 8;
    this.ctx.fillText(c.sub, w / 2, h / 2 + 26);

    this.ctx.restore();
  }

  addSkinPlacementVfx(r, c, color, skinId = 'DEFAULT') {
    const pos = this.cellToPixel(r, c);
    const pColor = color === P1_COLOR ? '#00f0ff' : '#fbbf24';

    switch (skinId) {
      case 'INFERNO': // 激しい炎・火の粉
        for (let i = 0; i < 14; i++) {
          const angle = Math.random() * Math.PI * 2;
          const speed = Math.random() * 110 + 40;
          this.particles.push({
            x: pos.x, y: pos.y,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed - 35, // 上昇気流
            color: Math.random() < 0.5 ? '#ef4444' : '#f97316',
            life: 0.5 + Math.random() * 0.3,
            maxLife: 0.8,
            type: 'EMBER'
          });
        }
        this.addShockwave(r, c, '#ef4444', 65);
        break;

      case 'OCEAN': // 水滴の飛沫 ＆ 拡大波紋
        for (let i = 0; i < 10; i++) {
          const angle = Math.random() * Math.PI * 2;
          const speed = Math.random() * 90 + 30;
          this.particles.push({
            x: pos.x, y: pos.y,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            color: Math.random() < 0.5 ? '#06b6d4' : '#34d399',
            life: 0.45 + Math.random() * 0.25,
            maxLife: 0.7,
            type: 'BUBBLE'
          });
        }
        this.addShockwave(r, c, '#06b6d4', 60);
        break;

      case 'SAKURA': // 優雅に舞い散る夜桜花弁
        for (let i = 0; i < 12; i++) {
          const angle = Math.random() * Math.PI * 2;
          const speed = Math.random() * 70 + 20;
          this.particles.push({
            x: pos.x, y: pos.y,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed * 0.5 + 20, // はらりと落ちる
            rot: Math.random() * Math.PI * 2,
            rotSpeed: (Math.random() - 0.5) * 8,
            color: Math.random() < 0.5 ? '#ec4899' : '#fbcfe8',
            life: 0.6 + Math.random() * 0.3,
            maxLife: 0.9,
            type: 'PETAL'
          });
        }
        this.addShockwave(r, c, '#f472b6', 55);
        break;

      case 'THUNDER': // 鋭利な青雷放電スパーク
        for (let i = 0; i < 12; i++) {
          const angle = Math.random() * Math.PI * 2;
          const speed = Math.random() * 140 + 60;
          this.particles.push({
            x: pos.x, y: pos.y,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            color: '#60a5fa',
            life: 0.35 + Math.random() * 0.2,
            maxLife: 0.55,
            type: 'LIGHTNING'
          });
        }
        this.addShockwave(r, c, '#38bdf8', 70);
        break;

      case 'CRYSTAL': // 宝石ダイヤモンドの幾何学プリズム
        for (let i = 0; i < 10; i++) {
          const angle = Math.random() * Math.PI * 2;
          const speed = Math.random() * 85 + 30;
          this.particles.push({
            x: pos.x, y: pos.y,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            rot: Math.random() * Math.PI,
            color: Math.random() < 0.5 ? '#5eead4' : '#f0fdf4',
            life: 0.5 + Math.random() * 0.3,
            maxLife: 0.8,
            type: 'PRISM'
          });
        }
        this.addShockwave(r, c, '#2dd4bf', 60);
        break;

      case 'MECHA': // 蒸気スチーム白煙 ＆ 鉄粉火花
        for (let i = 0; i < 12; i++) {
          const angle = Math.random() * Math.PI * 2;
          const speed = Math.random() * 75 + 25;
          this.particles.push({
            x: pos.x, y: pos.y,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed - 20,
            color: Math.random() < 0.6 ? '#cbd5e1' : '#f59e0b',
            life: 0.5 + Math.random() * 0.3,
            maxLife: 0.8,
            type: 'STEAM'
          });
        }
        this.addShockwave(r, c, '#f59e0b', 65);
        break;

      case 'RETRO': // 懐かしのドットピクセル四角破片
        for (let i = 0; i < 12; i++) {
          const angle = (Math.floor(Math.random() * 8) * Math.PI) / 4; // 8方向
          const speed = Math.random() * 100 + 40;
          this.particles.push({
            x: pos.x, y: pos.y,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            color: Math.random() < 0.5 ? '#22c55e' : '#f43f5e',
            life: 0.45 + Math.random() * 0.25,
            maxLife: 0.7,
            type: 'PIXEL'
          });
        }
        this.addShockwave(r, c, '#22c55e', 55);
        break;

      case 'VOID': // 暗黒重力渦パルス
        for (let i = 0; i < 16; i++) {
          const angle = Math.random() * Math.PI * 2;
          const speed = Math.random() * 100 + 35;
          this.particles.push({
            x: pos.x, y: pos.y,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            color: '#c084fc',
            life: 0.6 + Math.random() * 0.3,
            maxLife: 0.9,
            type: 'VORTEX'
          });
        }
        this.addShockwave(r, c, '#a855f7', 80);
        break;

      case 'SOLAR': // 太陽神の極光フレア光線
        for (let i = 0; i < 16; i++) {
          const angle = Math.random() * Math.PI * 2;
          const speed = Math.random() * 130 + 50;
          this.particles.push({
            x: pos.x, y: pos.y,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            color: '#facc15',
            life: 0.55 + Math.random() * 0.3,
            maxLife: 0.85,
            type: 'SOLAR'
          });
        }
        this.addShockwave(r, c, '#eab308', 85);
        break;

      case 'GENESIS': // 創世神竜の虹色極光フレア
        for (let i = 0; i < 22; i++) {
          const angle = Math.random() * Math.PI * 2;
          const speed = Math.random() * 150 + 60;
          this.particles.push({
            x: pos.x, y: pos.y,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            color: ['#ec4899', '#00f0ff', '#facc15', '#a855f7', '#34d399'][Math.floor(Math.random() * 5)],
            life: 0.65 + Math.random() * 0.35,
            maxLife: 1.0,
            type: 'SPARK'
          });
        }
        this.addShockwave(r, c, '#ec4899', 95);
        break;

      case 'CHRONOS': // 終焉冥王の深紅時計＆黒炎
        for (let i = 0; i < 20; i++) {
          const angle = Math.random() * Math.PI * 2;
          const speed = Math.random() * 130 + 40;
          this.particles.push({
            x: pos.x, y: pos.y,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed - 25,
            color: Math.random() < 0.6 ? '#f43f5e' : '#a855f7',
            life: 0.6 + Math.random() * 0.3,
            maxLife: 0.9,
            type: 'VORTEX'
          });
        }
        this.addShockwave(r, c, '#f43f5e', 90);
        break;

      default: // サイバー・ネオン
        for (let i = 0; i < 10; i++) {
          const angle = Math.random() * Math.PI * 2;
          const speed = Math.random() * 90 + 40;
          this.particles.push({
            x: pos.x, y: pos.y,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            color: pColor,
            life: 0.45 + Math.random() * 0.35,
            maxLife: 0.8,
            type: 'SPARK'
          });
        }
        this.addShockwave(r, c, pColor, 55);
        break;
    }
  }

  addSparks(r, c, color, count = 8) {
    const pos = this.cellToPixel(r, c);
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 90 + 40;
      this.particles.push({
        x: pos.x, y: pos.y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        color,
        life: 0.45 + Math.random() * 0.35,
        maxLife: 0.8
      });
    }
  }

  updateParticles(dt) {
    for (let i = this.shockwaves.length - 1; i >= 0; i--) {
      const sw = this.shockwaves[i];
      sw.radius += dt * 190;
      sw.alpha -= dt * 2.2;
      if (sw.alpha <= 0) this.shockwaves.splice(i, 1);
    }
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.x += p.vx * dt;
      p.y += p.vy * dt;
      p.life -= dt;
      if (p.life <= 0) this.particles.splice(i, 1);
    }
    for (let i = this.lightningBolts.length - 1; i >= 0; i--) {
      this.lightningBolts[i].life -= dt;
      if (this.lightningBolts[i].life <= 0) this.lightningBolts.splice(i, 1);
    }
  }

  drawParticles() {
    this.shockwaves.forEach(sw => {
      this.ctx.save();
      this.ctx.beginPath();
      this.ctx.arc(sw.x, sw.y, sw.radius, 0, Math.PI * 2);
      this.ctx.strokeStyle = sw.color;
      this.ctx.globalAlpha = Math.max(0, sw.alpha);
      this.ctx.lineWidth = 3;
      this.ctx.stroke();
      this.ctx.restore();
    });

    this.particles.forEach(p => {
      this.ctx.save();
      const alpha = Math.max(0, p.life / p.maxLife);
      this.ctx.globalAlpha = alpha;

      if (p.type === 'PETAL') {
        // 桜の花びら
        this.ctx.translate(p.x, p.y);
        this.ctx.rotate(p.rot || 0);
        this.ctx.fillStyle = p.color;
        this.ctx.beginPath();
        this.ctx.ellipse(0, 0, 7, 3.5, 0, 0, Math.PI * 2);
        this.ctx.fill();
      } else if (p.type === 'BUBBLE') {
        // 水滴バブル
        this.ctx.strokeStyle = p.color;
        this.ctx.lineWidth = 1.5;
        this.ctx.beginPath();
        this.ctx.arc(p.x, p.y, (1 - alpha) * 10 + 3, 0, Math.PI * 2);
        this.ctx.stroke();
      } else if (p.type === 'PRISM') {
        // クリスタルひし形
        this.ctx.translate(p.x, p.y);
        this.ctx.rotate(p.rot || 0);
        this.ctx.fillStyle = p.color;
        this.ctx.beginPath();
        this.ctx.moveTo(0, -6);
        this.ctx.lineTo(4, 0);
        this.ctx.lineTo(0, 6);
        this.ctx.lineTo(-4, 0);
        this.ctx.closePath();
        this.ctx.fill();
      } else if (p.type === 'PIXEL') {
        // レトロ角丸ドット
        this.ctx.fillStyle = p.color;
        this.ctx.fillRect(p.x - 3, p.y - 3, 6, 6);
      } else if (p.type === 'VORTEX' || p.type === 'SOLAR') {
        // 特殊グローオーブ
        this.ctx.fillStyle = p.color;
        this.ctx.shadowColor = p.color;
        this.ctx.shadowBlur = 10;
        this.ctx.beginPath();
        this.ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
        this.ctx.fill();
      } else {
        // デフォルト矩形
        this.ctx.fillStyle = p.color;
        this.ctx.fillRect(p.x - 2, p.y - 2, 4, 4);
      }
      this.ctx.restore();
    });
  }

  drawLightning() {
    this.lightningBolts.forEach(bolt => {
      this.ctx.save();
      this.ctx.strokeStyle = '#fef08a';
      this.ctx.lineWidth = 6;
      this.ctx.shadowColor = '#facc15';
      this.ctx.shadowBlur = 25;

      this.ctx.beginPath();
      this.ctx.moveTo(bolt.x, 0);
      let curX = bolt.x;
      let curY = 0;
      while (curY < bolt.y) {
        curX += (Math.random() - 0.5) * 45;
        curY += 25;
        this.ctx.lineTo(curX, Math.min(bolt.y, curY));
      }
      this.ctx.stroke();
      this.ctx.restore();
    });
  }

  cellToPixel(r, c) {
    const cx = this.canvas.width / 2;
    const cy = this.canvas.height / 2 + 25;
    const boardPx = 480;
    const cellSize = boardPx / this.gridSize;
    const startX = cx - boardPx / 2;
    const startY = cy - boardPx / 2;
    return {
      x: startX + c * cellSize + cellSize / 2,
      y: startY + r * cellSize + cellSize / 2
    };
  }

  pixelToCell(px, py) {
    const cx = this.canvas.width / 2;
    const cy = this.canvas.height / 2 + 25;
    const boardPx = 480;
    const cellSize = boardPx / this.gridSize;
    const startX = cx - boardPx / 2;
    const startY = cy - boardPx / 2;
    const c = Math.floor((px - startX) / cellSize);
    const r = Math.floor((py - startY) / cellSize);
    if (r >= 0 && r < this.gridSize && c >= 0 && c < this.gridSize) {
      return { r, c };
    }
    return null;
  }

  triggerScreenShake(amt) {
    this.screenShake = amt;
    const container = document.getElementById('game-container');
    if (container && container.style) {
      const sx = (Math.random() - 0.5) * amt;
      const sy = (Math.random() - 0.5) * amt;
      container.style.transform = `translate(${sx.toFixed(1)}px, ${sy.toFixed(1)}px)`;
      setTimeout(() => {
        if (container && container.style) container.style.transform = 'translate(0px, 0px)';
      }, 50);
    }
  }

  initEvents() {
    window.addEventListener('keyup', (e) => {
      delete this.keysDown[e.code];
    });
    // AIイラスト取り込み用ファイル入力ハンドラ
    const fileInput = document.getElementById('bossCustomImageInput');
    if (fileInput) {
      fileInput.addEventListener('change', (ev) => {
        if (ev.target.files && ev.target.files[0]) {
          const file = ev.target.files[0];
          const reader = new FileReader();
          reader.onload = (loadEv) => {
            const img = new Image();
            img.onload = () => {
              this.customBossImages[this.dungeonFloor] = img;
              try {
                localStorage.setItem(`duel_reversi_boss_${this.dungeonFloor}`, loadEv.target.result);
              } catch (err) {
                console.warn('LocalStorage save error:', err);
              }
              audio.playItemGet();
              this.showBanner('✨ AIイラストをボス画像として適用しました！', '#38bdf8', 1.5);
            };
            img.src = loadEv.target.result;
          };
          reader.readAsDataURL(file);
        }
      });
    }

    // ドラッグ＆ドロップで画像取り込み
    this.canvas.addEventListener('dragover', (e) => e.preventDefault());
    this.canvas.addEventListener('drop', (e) => {
      e.preventDefault();
      if (this.state === 'BOSS_INTRO' && e.dataTransfer.files && e.dataTransfer.files[0]) {
        const file = e.dataTransfer.files[0];
        if (file.type.startsWith('image/')) {
          const reader = new FileReader();
          reader.onload = (loadEv) => {
            const img = new Image();
            img.onload = () => {
              this.customBossImages[this.dungeonFloor] = img;
              try {
                localStorage.setItem(`duel_reversi_boss_${this.dungeonFloor}`, loadEv.target.result);
              } catch (err) {}
              audio.playItemGet();
              this.showBanner('✨ AIイラストをボス画像として適用しました！', '#38bdf8', 1.5);
            };
            img.src = loadEv.target.result;
          };
          reader.readAsDataURL(file);
        }
      }
    });

    window.addEventListener('keydown', (e) => {
      audio.init();

      if (this.state === 'TITLE') {
        if (e.code === 'Space' || e.code === 'Enter') {
          this.state = 'MODE_SELECT';
        }
        return;
      }

      if (this.state === 'MODE_SELECT') {
        if (e.code === 'Space' || e.code === 'Enter') {
          this.startMatch();
        }
        return;
      }

      if (this.state === 'DUNGEON_SKIN_SELECT') {
        const skinKeys = Object.keys(this.skins);
        if (e.code === 'KeyC' || e.code === 'Tab') {
          e.preventDefault();
          this.selectedBaseColor = (this.selectedBaseColor === 'BLACK') ? 'WHITE' : 'BLACK';
          this.saveUserData();
          audio.playClick('DEFAULT');
          this.showBanner(`石色パッシブを【${this.selectedBaseColor === 'BLACK' ? '黒石：魔導の浸食' : '白石：聖光の守護'}】に切り替えました！`, this.selectedBaseColor === 'BLACK' ? '#38bdf8' : '#facc15', 1.2);
          return;
        } else if (e.code === 'ArrowLeft' || e.code === 'KeyA') {
          this.dungeonSelectedSkinIndex = (this.dungeonSelectedSkinIndex - 1 + skinKeys.length) % skinKeys.length;
          audio.playClick('DEFAULT');
        } else if (e.code === 'ArrowRight' || e.code === 'KeyD') {
          this.dungeonSelectedSkinIndex = (this.dungeonSelectedSkinIndex + 1) % skinKeys.length;
          audio.playClick('DEFAULT');
        } else if (e.code === 'Space' || e.code === 'Enter') {
          const curKey = skinKeys[this.dungeonSelectedSkinIndex];
          this.equippedSkinId = curKey;
          this.saveUserData();
          this.startDungeonRun();
        } else if (e.code === 'Escape') {
          this.state = 'TITLE';
        }
        return;
      }

      if (this.state === 'BOSS_INTRO') {
        if (e.code === 'Space' || e.code === 'Enter') {
          this.startBossMatch();
        }
        return;
      }

      if (this.state === 'HOW_TO_PLAY') {
        if (e.code === 'Space' || e.code === 'Enter' || e.code === 'Escape') {
          this.state = 'TITLE';
        }
        return;
      }

      if (this.state === 'RESULT') {
        if (this.resultGuardTimer <= 0) {
          if (e.code === 'Space' || e.code === 'Enter') {
            // ★スペース/Enterで再戦ループせず確実に次へ進行！
            this.handleResultNextAction();
          } else if (e.code === 'KeyR') {
            // Rキーで手動リトライ
            this.startMatch();
          }
        }
        return;
      }

      // ★ABILITY_SELECT 画面：誤爆防止しつつ、1/2/3キーやA/S/Dキー、マウスクリックで快適選択！
      if (this.state === 'ABILITY_SELECT') {
        if (this.abilitySelectGuardTimer <= 0) {
          if (e.code === 'Digit1' || e.code === 'Numpad1' || e.code === 'KeyA') {
            this.chooseAbility(0);
          } else if (e.code === 'Digit2' || e.code === 'Numpad2' || e.code === 'KeyS') {
            this.chooseAbility(1);
          } else if (e.code === 'Digit3' || e.code === 'Numpad3' || e.code === 'KeyD') {
            this.chooseAbility(2);
          }
        }
        return;
      }

      // PAUSE切り替え (Escape または KeyP)
      if (e.code === 'Escape' || e.code === 'KeyP') {
        if (this.state === 'PLAYING') {
          this.isPaused = !this.isPaused;
          audio.playClick('DEFAULT');
          return;
        }
      }

      // ポーズ中の解除 (Space または Enter)
      if (this.isPaused && (e.code === 'Space' || e.code === 'Enter')) {
        this.isPaused = false;
        audio.playClick('DEFAULT');
        return;
      }

      if (e.code === 'KeyV' && this.state === 'PLAYING') {
        this.is3DView = !this.is3DView;
        audio.playClick('DEFAULT');
        this.showBanner(this.is3DView ? '🎥 3D立体宙返り演出: ON' : '🎥 2D標準表示: ON', '#38bdf8', 1.0);
        return;
      }

      if (this.state === 'PLAYING' && !this.isPaused) {
        const moveKeys = ['KeyW', 'KeyS', 'KeyA', 'KeyD', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];
        if (moveKeys.includes(e.code)) {
          if (!this.keysDown[e.code]) {
            const now = performance.now() / 1000;
            this.keysDown[e.code] = { firstPressed: now, lastRepeat: now };
            this.handlePlayerMoveInput(e.code);
          }
        }

        if (this.mode === 'PVP_ONLINE') {
          if (e.code === 'Space' || e.code === 'Enter') {
            const myP = this.onlineRole === 'GUEST' ? this.p2 : this.p1;
            this.executeMove(myP, myP.cursor.r, myP.cursor.c);
          }
          return;
        }

        if (e.code === 'Space') {
          this.executeMove(this.p1, this.p1.cursor.r, this.p1.cursor.c);
        }

        if ((this.mode === 'PVP' || this.mode === 'PVP_LOCAL') && e.code === 'Enter') {
          this.executeMove(this.p2, this.p2.cursor.r, this.p2.cursor.c);
        }
      }
    });

    this.canvas.addEventListener('click', (e) => {
      audio.init();
      const rect = this.canvas.getBoundingClientRect();
      const scaleX = this.canvas.width / rect.width;
      const scaleY = this.canvas.height / rect.height;
      const mx = (e.clientX - rect.left) * scaleX;
      const my = (e.clientY - rect.top) * scaleY;

      if (this.state === 'TITLE') {
        if (audio.startTitleAmbient) audio.startTitleAmbient();
        const cx = this.canvas.width / 2;
        const cy = this.canvas.height / 2;
        // 1. 2人対戦 (y: cy + 5〜53) ➔ 必ず決闘設定画面(MODE_SELECT)へ！
        if (mx >= cx - 220 && mx <= cx + 220 && my >= cy + 5 && my <= cy + 53) {
          this.mode = 'PVP_LOCAL';
          this.state = 'MODE_SELECT';
          audio.playClick('DEFAULT');
          return;
        }
        // 2. 魔導ダンジョン (y: cy + 62〜110)
        if (mx >= cx - 220 && mx <= cx + 220 && my >= cy + 62 && my <= cy + 110) {
          const skinKeys = Object.keys(this.skins);
          this.dungeonSelectedSkinIndex = Math.max(0, skinKeys.indexOf(this.equippedSkinId));
          this.state = 'DUNGEON_SKIN_SELECT';
          audio.playClick('DEFAULT');
          return;
        }
        // 3. CPU練習対決 (y: cy + 119〜163)
        if (mx >= cx - 220 && mx <= cx + 220 && my >= cy + 119 && my <= cy + 163) {
          this.mode = 'VS_CPU';
          this.state = 'MODE_SELECT';
          audio.playClick('DEFAULT');
          return;
        }
        // 4. 魔導ガチャ (y: cy + 172〜214)
        if (mx >= cx - 220 && mx <= cx + 220 && my >= cy + 172 && my <= cy + 214) {
          this.state = 'GACHA';
          audio.playClick('DEFAULT');
          return;
        }
        // 5. 遊び方 (y: cy + 223〜261)
        if (mx >= cx - 220 && mx <= cx + 220 && my >= cy + 223 && my <= cy + 261) {
          this.state = 'HOW_TO_PLAY';
          audio.playClick('DEFAULT');
          return;
        }
        return;
      }

      if (this.state === 'DUNGEON_SKIN_SELECT') {
        const skinKeys = Object.keys(this.skins);
        if (this.dungeonSelectedSkinIndex === undefined) {
          this.dungeonSelectedSkinIndex = Math.max(0, skinKeys.indexOf(this.equippedSkinId));
        }
        const lX = 80, lY = 105, lW = 440, lH = 485;
        const rX = 560, rY = 105, rW = 640, rH = 485;

        // 基本石色切替ボタン (rX + rW - 225, rY + 166, 190, 32)
        if (mx >= rX + rW - 225 && mx <= rX + rW - 35 && my >= rY + 166 && my <= rY + 198) {
          this.selectedBaseColor = (this.selectedBaseColor === 'BLACK') ? 'WHITE' : 'BLACK';
          this.saveUserData();
          audio.playClick('DEFAULT');
          this.showBanner(`石色パッシブを【${this.selectedBaseColor === 'BLACK' ? '黒石：魔導の浸食' : '白石：聖光の守護'}】に切り替えました！`, this.selectedBaseColor === 'BLACK' ? '#38bdf8' : '#facc15', 1.2);
          return;
        }

        // 前へボタン (lX + 30, lY + 390, 80, 42)
        if (mx >= lX + 30 && mx <= lX + 110 && my >= lY + 390 && my <= lY + 432) {
          this.dungeonSelectedSkinIndex = (this.dungeonSelectedSkinIndex - 1 + skinKeys.length) % skinKeys.length;
          audio.playClick('DEFAULT');
          return;
        }
        // 次へボタン (lX + lW - 110, lY + 390, 80, 42)
        if (mx >= lX + lW - 110 && mx <= lX + lW - 30 && my >= lY + 390 && my <= lY + 432) {
          this.dungeonSelectedSkinIndex = (this.dungeonSelectedSkinIndex + 1) % skinKeys.length;
          audio.playClick('DEFAULT');
          return;
        }

        // コマの3Dプレビュー領域タップ/クリックでも切り替え可能（左半分で前へ、右半分で次へ）
        const stoneCx = lX + lW / 2;
        const stoneCy = lY + 125;
        if (Math.hypot(mx - stoneCx, my - stoneCy) <= 80) {
          if (mx < stoneCx) {
            this.dungeonSelectedSkinIndex = (this.dungeonSelectedSkinIndex - 1 + skinKeys.length) % skinKeys.length;
          } else {
            this.dungeonSelectedSkinIndex = (this.dungeonSelectedSkinIndex + 1) % skinKeys.length;
          }
          audio.playClick('DEFAULT');
          return;
        }

        // コマ選択ミニグリッド (7列 x 2行)
        skinKeys.forEach((key, idx) => {
          const btnX = rX + 25 + (idx % 7) * 85;
          const btnY = rY + 396 + Math.floor(idx / 7) * 36;
          if (mx >= btnX && mx <= btnX + 80 && my >= btnY && my <= btnY + 32) {
            this.dungeonSelectedSkinIndex = idx;
            audio.playClick('DEFAULT');
          }
        });

        // タイトルへ戻るボタン (80, 615, 230, 56)
        if (mx >= 80 && mx <= 310 && my >= 615 && my <= 671) {
          this.state = 'TITLE';
          audio.playClick('DEFAULT');
          return;
        }

        // 出撃ボタン (335, 615, 865, 56)
        if (mx >= 335 && mx <= 1200 && my >= 615 && my <= 671) {
          const curKey = skinKeys[this.dungeonSelectedSkinIndex];
          this.equippedSkinId = curKey;
          this.saveUserData();
          this.startDungeonRun();
          return;
        }
        return;
      }

      if (this.state === 'BOSS_INTRO') {
        const cx = this.canvas.width / 2;
        const bW = 1020, bX = cx - bW / 2, bY = 112;
        const pX = bX + 30;
        const customImg = this.customBossImages[this.dungeonFloor];

        // 1. AIイラスト適用ボタン (x: pX, y: bY + 386, w: customImg ? 195 : 300, h: 38)
        const btnW = customImg ? 195 : 300;
        if (mx >= pX && mx <= pX + btnW && my >= bY + 386 && my <= bY + 424) {
          const fileInput = document.getElementById('bossCustomImageInput');
          if (fileInput) {
            fileInput.value = '';
            fileInput.click();
          }
          return;
        }

        // 2. 解除ボタン (x: pX + 208, y: bY + 386, w: 92, h: 38)
        if (customImg && mx >= pX + 208 && mx <= pX + 300 && my >= bY + 386 && my <= bY + 424) {
          delete this.customBossImages[this.dungeonFloor];
          try {
            localStorage.removeItem(`duel_reversi_boss_${this.dungeonFloor}`);
          } catch(e) {}
          audio.playClick('DEFAULT');
          this.showBanner('デフォルトの立ち絵に戻しました。', '#94a3b8', 1.2);
          return;
        }

        // 3. 決闘開始ボタン (cx - 190, 608, 380, 58)
        if (mx >= cx - 190 && mx <= cx + 190 && my >= 608 && my <= 666) {
          this.startBossMatch();
          return;
        }
        return;
      }

      if (this.state === 'ABILITY_SELECT') {
        const cardW = 320, cardH = 340, gap = 30;
        const totalW = cardW * 3 + gap * 2;
        const startX = (this.canvas.width - totalW) / 2;
        const cardY = 190;

        this.draftAbilities.forEach((ab, idx) => {
          const x = startX + idx * (cardW + gap);
          // ★カード全体（枠・イラスト・テキスト・ボタンどこでも）をクリックで選択可能に！
          if (mx >= x && mx <= x + cardW && my >= cardY && my <= cardY + cardH) {
            this.chooseAbility(idx);
          }
        });
        return;
      }

      if (this.state === 'GACHA') {
        const w = this.canvas.width;
        const h = this.canvas.height;

        // もしガチャ結果モーダルが出ている場合
        if (this.gachaResults) {
          const mBoxW = 860;
          const mBoxH = 540;
          const mBoxY = (h - mBoxH) / 2;
          if (mx >= w / 2 - 140 && mx <= w / 2 + 140 && my >= mBoxY + mBoxH - 75 && my <= mBoxY + mBoxH - 23) {
            this.gachaResults = null;
          }
          return;
        }

        // 戻るボタン (x: 50〜210, y: 30〜72)
        if (mx >= 50 && mx <= 210 && my >= 30 && my <= 72) {
          this.state = 'TITLE';
          return;
        }

        // ゴールド補充ボタン (w - 190〜w - 50, y: 32〜70)
        if (mx >= w - 190 && mx <= w - 50 && my >= 32 && my <= 70) {
          this.p1Gold += 3000;
          this.saveUserData();
          audio.playClick('DEFAULT');
          this.showBanner('💰 ゴールド +3000G を補充しました！', '#facc15', 1.2);
          return;
        }

        const gBoxX = 50;
        const gBoxY = 95;
        // 1回召喚ボタン (gBoxX + 30〜230, gBoxY + 430〜488)
        if (mx >= gBoxX + 30 && mx <= gBoxX + 230 && my >= gBoxY + 430 && my <= gBoxY + 488) {
          this.pullGacha(1);
          return;
        }
        // 10連召喚ボタン (gBoxX + 250〜450, gBoxY + 430〜488)
        if (mx >= gBoxX + 250 && mx <= gBoxX + 450 && my >= gBoxY + 430 && my <= gBoxY + 488) {
          this.pullGacha(10);
          return;
        }

        // スキン装備クリック (2行 x 7列グリッド)
        const sBoxX = 560;
        const sBoxY = 95;
        const colW = 86;
        const rowH = 175;
        const gapX = 6;
        const gapY = 12;
        const gridStartX = sBoxX + 13;
        const gridStartY = sBoxY + 52;
        const skinKeys = Object.keys(this.skins);

        skinKeys.forEach((key, idx) => {
          const colIdx = idx % 7;
          const rowIdx = Math.floor(idx / 7);
          const cxPos = gridStartX + colIdx * (colW + gapX);
          const cyPos = gridStartY + rowIdx * (rowH + gapY);

          // 装備ボタン位置
          if (mx >= cxPos + 6 && mx <= cxPos + colW - 6 && my >= cyPos + 115 && my <= cyPos + 145) {
            if (this.ownedSkins.includes(key)) {
              this.equippedSkinId = key;
              this.saveUserData();
              audio.playClick(key);
              this.showBanner(`【${this.skins[key].name}】を装備しました！`, '#38bdf8', 1.2);
            }
          }
        });
        return;
      }

      if (this.state === 'HOW_TO_PLAY') {
        const cx = this.canvas.width / 2;
        if (mx >= cx - 160 && mx <= cx + 160 && my >= 520 && my <= 578) {
          this.state = 'TITLE';
        }
        return;
      }

      if (this.state === 'MODE_SELECT') {
        // 対戦形式 (y: 108〜148)
        if (mx >= 60 && mx <= 190 && my >= 108 && my <= 148) { this.mode = 'VS_CPU'; audio.playClick('DEFAULT'); }
        if (mx >= 200 && mx <= 340 && my >= 108 && my <= 148) { this.mode = 'PVP_LOCAL'; audio.playClick('DEFAULT'); }
        if (mx >= 350 && mx <= 510 && my >= 108 && my <= 148) {
          this.mode = 'PVP_ONLINE';
          audio.playClick('DEFAULT');
          if (window.openOnlineLobbyModal) window.openOnlineLobbyModal();
          return;
        }

        // ルールモード (y: 178〜214)
        if (mx >= 60 && mx <= 270 && my >= 178 && my <= 214) { this.ruleMode = 'CHAOS'; audio.playClick('DEFAULT'); }
        if (mx >= 280 && mx <= 490 && my >= 178 && my <= 214) { this.ruleMode = 'CLASSIC'; audio.playClick('DEFAULT'); }

        // 初期配置切り替え (y: 242〜278)
        if (mx >= 60 && mx <= 265 && my >= 242 && my <= 278) { this.pvpUseDotArt = false; audio.playClick('DEFAULT'); }
        if (mx >= 275 && mx <= 490 && my >= 242 && my <= 278) { this.pvpUseDotArt = true; audio.playClick('DEFAULT'); }

        // BET選択 (PVP時) or CPU難易度 (y: 308〜344)
        if (this.mode === 'PVP_LOCAL' || this.mode === 'PVP_ONLINE') {
          for (let bIdx = 0; bIdx < 5; bIdx++) {
            const bx = 60 + bIdx * 88;
            if (mx >= bx && mx <= bx + 80 && my >= 308 && my <= 344) {
              this.selectedBetIndex = bIdx;
              audio.playClick('DEFAULT');
            }
          }
        } else {
          if (mx >= 60 && mx <= 195 && my >= 308 && my <= 344) { this.cpuLevel = 'ELEMENTARY'; audio.playClick('DEFAULT'); }
          if (mx >= 205 && mx <= 340 && my >= 308 && my <= 344) { this.cpuLevel = 'ADULT'; audio.playClick('DEFAULT'); }
          if (mx >= 350 && mx <= 490 && my >= 308 && my <= 344) { this.cpuLevel = 'AI'; audio.playClick('DEFAULT'); }
        }

        // 速度 (y: 372〜408)
        if (mx >= 60 && mx <= 165 && my >= 372 && my <= 408) { this.speedMode = 'NORMAL'; audio.playClick('DEFAULT'); }
        if (mx >= 175 && mx <= 285 && my >= 372 && my <= 408) { this.speedMode = 'TURBO'; audio.playClick('DEFAULT'); }
        // 時間
        if (mx >= 295 && mx <= 390 && my >= 372 && my <= 408) { this.matchDuration = 90; audio.playClick('DEFAULT'); }
        if (mx >= 400 && mx <= 490 && my >= 372 && my <= 408) { this.matchDuration = 60; audio.playClick('DEFAULT'); }

        // BGM切替 (y: 438〜474 に完全整合！)
        if (mx >= 60 && mx <= 275 && my >= 438 && my <= 474) {
          audio.init();
          audio.setTrack(audio.currentTrackIndex + 1);
          const tName = audio.bgmTracks[audio.currentTrackIndex].name;
          this.showBanner(`🎵 BGM変更: ${tName}（試聴再生中！）`, '#38bdf8', 2.0);
          audio.playClick('DEFAULT');
        }
        // 盤面切替 (y: 438〜474 に完全整合！)
        if (mx >= 285 && mx <= 490 && my >= 438 && my <= 474) {
          const bKeys = Object.keys(this.boardThemes);
          const nextIdx = (bKeys.indexOf(this.equippedBoardId) + 1) % bKeys.length;
          this.equippedBoardId = bKeys[nextIdx];
          this.saveUserData();
          audio.playClick('DEFAULT');
        }

        // 試合開始ボタン (y: 500〜560)
        if (mx >= 80 && mx <= 510 && my >= 500 && my <= 560) {
          this.startMatch();
        }
        return;
      }

      // ポーズ中のクリック判定
      if (this.isPaused) {
        const w = this.canvas.width;
        const h = this.canvas.height;
        const boxW = 500;
        const boxH = 420;
        const boxX = (w - boxW) / 2;
        const boxY = (h - boxH) / 2;

        // 1. 再開ボタン (boxX + 60, boxY + 175, 380, 52)
        if (mx >= boxX + 60 && mx <= boxX + 440 && my >= boxY + 175 && my <= boxY + 227) {
          this.isPaused = false;
          audio.playClick('DEFAULT');
          return;
        }
        // 2. 音声ミュート切替 (boxX + 60, boxY + 245, 380, 50)
        if (mx >= boxX + 60 && mx <= boxX + 440 && my >= boxY + 245 && my <= boxY + 295) {
          audio.isMuted = !audio.isMuted;
          audio.playClick('DEFAULT');
          return;
        }
        // 3. 降参・タイトルへ (boxX + 60, boxY + 312, 380, 50)
        if (mx >= boxX + 60 && mx <= boxX + 440 && my >= boxY + 312 && my <= boxY + 362) {
          this.isPaused = false;
          this.state = 'TITLE';
          audio.stopBgm();
          audio.playClick('DEFAULT');
          return;
        }
        return;
      }

      if (this.state === 'PLAYING') {
        // 右上 3D立体演出切替ボタン (x: 1005〜1130, y: 16〜50)
        if (mx >= 1005 && mx <= 1130 && my >= 16 && my <= 50) {
          this.is3DView = !this.is3DView;
          audio.playClick('DEFAULT');
          this.showBanner(this.is3DView ? '🎥 3D立体宙返り演出: ON' : '🎥 2D標準表示: ON', '#38bdf8', 1.0);
          return;
        }

        // 右上 PAUSE ボタン (x: 1140〜1245, y: 16〜50)
        if (mx >= 1140 && mx <= 1245 && my >= 16 && my <= 50) {
          this.isPaused = true;
          audio.playClick('DEFAULT');
          return;
        }

        if (this.mode === 'PVP_ONLINE') {
          const cell = this.pixelToCell(mx, my);
          if (cell) {
            const myP = this.onlineRole === 'GUEST' ? this.p2 : this.p1;
            myP.cursor = { r: cell.r, c: cell.c };
            this.executeMove(myP, cell.r, cell.c);
          }
        } else if (this.mode === 'VS_CPU' || this.mode === 'DUNGEON') {
          const cell = this.pixelToCell(mx, my);
          if (cell) {
            this.p1.cursor = { r: cell.r, c: cell.c };
            this.executeMove(this.p1, cell.r, cell.c);
          }
        }
      }

      if (this.state === 'RESULT') {
        const cx = this.canvas.width / 2;
        // ダンジョンクリアでの分岐 (★1-1 ➔ 1-2 ➔ 1-3 の順序進行を完全保証)
        if (this.mode === 'DUNGEON' && this.p1.score > this.p2.score) {
          if (mx >= cx - 200 && mx <= cx + 200 && my >= 600 && my <= 656) {
            this.handleResultNextAction();
            return;
          }
        }

        // 下部3ボタン (y: 600〜656)
        // 1. 再戦する (x: 140〜440)
        if (mx >= 140 && mx <= 440 && my >= 600 && my <= 656) {
          if (this.resultGuardTimer <= 0) {
            if (this.mode === 'DUNGEON') this.startBossMatch();
            else this.startMatch();
          }
        }
        // 2. ガチャ (x: 490〜790)
        if (mx >= 490 && mx <= 790 && my >= 600 && my <= 656) {
          this.state = 'GACHA';
        }
        // 3. タイトル (x: 840〜1140)
        if (mx >= 840 && mx <= 1140 && my >= 600 && my <= 656) {
          this.state = 'TITLE';
        }
        return;
      }
    });

    this.canvas.addEventListener('mousemove', (e) => {
      const rect = this.canvas.getBoundingClientRect();
      const scaleX = this.canvas.width / rect.width;
      const scaleY = this.canvas.height / rect.height;
      const mx = (e.clientX - rect.left) * scaleX;
      const my = (e.clientY - rect.top) * scaleY;
      const cell = this.pixelToCell(mx, my);
      if (cell && this.state === 'PLAYING') {
        if (this.mode === 'PVP_ONLINE') {
          const myP = this.onlineRole === 'GUEST' ? this.p2 : this.p1;
          if (myP.cursor.r !== cell.r || myP.cursor.c !== cell.c) {
            myP.cursor = { r: cell.r, c: cell.c };
            const now = performance.now();
            if (now - this.lastCursorSync > 45 && window.duelNet && window.duelNet.isConnected) {
              this.lastCursorSync = now;
              window.duelNet.send({
                t: 'CURSOR',
                p: this.onlineRole === 'GUEST' ? 2 : 1,
                r: cell.r,
                c: cell.c
              });
            }
          }
        } else if (this.mode === 'VS_CPU' || this.mode === 'DUNGEON') {
          this.p1.cursor = { r: cell.r, c: cell.c };
        }
      }

      // 出撃オセロ選択画面でのマウスホバーカーソル (pointer)
      if (this.state === 'DUNGEON_SKIN_SELECT') {
        const lX = 80, lY = 105, lW = 440;
        const rX = 560, rY = 105, rW = 640;
        const stoneCx = lX + lW / 2, stoneCy = lY + 125;
        let isHover = false;
        if (mx >= rX + rW - 225 && mx <= rX + rW - 35 && my >= rY + 166 && my <= rY + 198) isHover = true;
        else if (mx >= lX + 30 && mx <= lX + 110 && my >= lY + 390 && my <= lY + 432) isHover = true;
        else if (mx >= lX + lW - 110 && mx <= lX + lW - 30 && my >= lY + 390 && my <= lY + 432) isHover = true;
        else if (Math.hypot(mx - stoneCx, my - stoneCy) <= 80) isHover = true;
        else if (mx >= 80 && mx <= 310 && my >= 615 && my <= 671) isHover = true;
        else if (mx >= 335 && mx <= 1200 && my >= 615 && my <= 671) isHover = true;
        else {
          const skinKeys = Object.keys(this.skins);
          for (let idx = 0; idx < skinKeys.length; idx++) {
            const btnX = rX + 25 + (idx % 7) * 85;
            const btnY = rY + 396 + Math.floor(idx / 7) * 36;
            if (mx >= btnX && mx <= btnX + 80 && my >= btnY && my <= btnY + 32) {
              isHover = true;
              break;
            }
          }
        }
        this.canvas.style.cursor = isHover ? 'pointer' : 'default';
      } else if (this.state === 'PLAYING') {
        this.canvas.style.cursor = 'default';
      }
    });

    // マウスホイールでの出撃オセロスキン切り替え
    this.canvas.addEventListener('wheel', (e) => {
      if (this.state === 'DUNGEON_SKIN_SELECT') {
        e.preventDefault();
        const skinKeys = Object.keys(this.skins);
        if (e.deltaY > 0) {
          this.dungeonSelectedSkinIndex = (this.dungeonSelectedSkinIndex + 1) % skinKeys.length;
        } else if (e.deltaY < 0) {
          this.dungeonSelectedSkinIndex = (this.dungeonSelectedSkinIndex - 1 + skinKeys.length) % skinKeys.length;
        }
        audio.playClick('DEFAULT');
      }
    }, { passive: false });
  }
}

window.addEventListener('load', () => {
  const game = new DuelReversi();
  let lastTime = performance.now();

  function loop(now) {
    const dt = Math.min((now - lastTime) / 1000, 0.1);
    lastTime = now;
    try {
      game.update(dt);
      game.draw();
    } catch (err) {
      console.error('Game loop recovery:', err);
    }
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);
});
