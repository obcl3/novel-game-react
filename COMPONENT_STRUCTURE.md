# React + Vite ノベルゲームエンジン構成

## ディレクトリ構造

```
novel-game-react/
├── src/
│   ├── components/
│   │   ├── TitleScreen.jsx       # タイトル画面
│   │   ├── GameScreen.jsx        # ゲーム画面メイン
│   │   ├── TextWindow.jsx        # テキストウィンドウ
│   │   ├── SystemMenu.jsx        # セーブ/ロードメニュー
│   │   ├── EndingScreen.jsx      # エンディング画面
│   │   └── ProgressBar.jsx       # プログレスバー
│   ├── hooks/
│   │   └── useGameEngine.js      # ゲームロジックカスタムフック
│   ├── context/
│   │   └── GameContext.jsx       # グローバルゲーム状態
│   ├── data/
│   │   └── scenario.js           # シナリオデータ（既存ファイルを再利用）
│   ├── styles/
│   │   └── app.css               # グローバルスタイル
│   ├── assets/
│   │   └── images/               # 背景画像（既存を移動）
│   ├── App.jsx                   # ルートコンポーネント
│   ├── App.css
│   └── main.jsx
├── public/                        # 静的ファイル
├── package.json
├── vite.config.js
└── index.html
```

## コンポーネント設計

### 1. TitleScreen
- ゲーム開始ボタン
- セーブデータ読込ボタン
- タイトルアニメーション

### 2. GameScreen（メイン）
- ProgressBar
- 背景画像（フェード効果）
- TextWindow
- NextButton
- SystemMenu トグル

### 3. TextWindow
- キャラクター名（色分け）
- テキスト（タイプライター効果オプション）
- キャラクター顔アイコン（今後の拡張）

### 4. SystemMenu
- セーブボタン
- ロードボタン
- タイトルに戻るボタン
- メニューを閉じるボタン

### 5. EndingScreen
- エンディングメッセージ
- もう一度遊ぶボタン

### 6. useGameEngine（カスタムフック）
- currentSceneIndex管理
- シーン表示ロジック
- セーブ/ロード処理
- 画像プリロード

## 状態管理

GameContextで以下を管理：
- currentSceneIndex
- gameState (title / playing / ending)
- saveData
- isMenuOpen

## スタイリング戦略

- Tailwind CSS（オプション）または カスタムCSS
- モダンなアニメーション（Framer Motion または CSS3）
- レスポンシブデザイン対応
