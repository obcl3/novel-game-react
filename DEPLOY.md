# デプロイガイド

『さよならをダウンロード中』をWeb上に公開するための手順

## 概要

| プラットフォーム | セットアップ時間 | コスト | おすすめ度 |
|---------|-----------|------|---------|
| **Netlify** | 5分 | 無料 | ⭐⭐⭐⭐⭐ |
| **Vercel** | 5分 | 無料 | ⭐⭐⭐⭐ |
| **GitHub Pages** | 10分 | 無料 | ⭐⭐⭐ |
| **itch.io** | 10分 | 無料 | ⭐⭐⭐⭐ |

---

## 1. Netlify (推奨) 🚀

最も簡単で高速。GitHubとの統合も簡単。

### ステップ 1: ビルド

```bash
cd /home/obino/.openclaw/workspace/novel-game-react
npm run build
```

### ステップ 2: Netlifyアカウント作成

1. https://netlify.com にアクセス
2. 「Sign Up」から GitHub アカウントでサインアップ
3. メール確認

### ステップ 3: サイトをデプロイ

#### 方法 A: ドラッグ&ドロップ（最速）

```bash
# build済みの dist/ フォルダをNetlifyのアップロード画面にドラッグ
```

#### 方法 B: GitHubリポジトリ連携（推奨）

1. GitHub にリポジトリをpush
2. Netlifyで「New site from Git」を選択
3. GitHubリポジトリを選択
4. ビルドコマンド: `npm run build`
5. 公開ディレクトリ: `dist`
6. 「Deploy」ボタンをクリック

### 自動更新設定

リポジトリにpushすると自動的にデプロイされます。

---

## 2. Vercel

Viteとの相性が良く、パフォーマンスも高速。

### ステップ 1: Vercelアカウント作成

https://vercel.com にアクセスして GitHub でサインアップ

### ステップ 2: GitHubリポジトリをインポート

1. 「Import Project」をクリック
2. GitHubリポジトリURLを入力
3. 自動で設定が検出されます
4. 「Deploy」をクリック

設定項目：
- **Framework**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`

---

## 3. GitHub Pages

GitHubリポジトリのみで実現。追加サービス不要。

### ステップ 1: vite.config.js を編集

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/novel-game-react/',  // リポジトリ名に変更
  plugins: [react()],
})
```

### ステップ 2: ビルド

```bash
npm run build
```

### ステップ 3: GitHub にpush

```bash
git add dist/
git commit -m "Deploy: built files"
git push origin main
```

### ステップ 4: GitHub Settings で有効化

1. リポジトリの Settings を開く
2. Pages セクションで
3. Source: Deploy from a branch を選択
4. Branch: main, Folder: / (root) を選択
5. Save

**公開URL**: `https://username.github.io/novel-game-react/`

---

## 4. itch.io (ゲーム配布プラットフォーム)

ゲーム配布に特化。セキュリティが高い。

### ステップ 1: itch.io アカウント作成

https://itch.io でアカウントを作成

### ステップ 2: ゲームページ作成

1. Dashboard → 「Upload new project」
2. プロジェクト名: 『さよならをダウンロード中』
3. ジャンル: Visual Novel
4. 言語: Japanese
5. コンテンツ評価: 適切に設定

### ステップ 3: ファイルアップロード

```bash
# dist フォルダを zip にして、itch.io にアップロード
cd dist
zip -r ../novel-game.zip .
# itch.io の Upload 画面から選択
```

または、itch.io の Butler CLI を使用：

```bash
npm install -g itch
itch login
itch push dist username/game-name:html
```

---

## 環境変数（オプション）

```bash
# .env ファイル (コミットしないこと)
VITE_GAME_TITLE=『さよならをダウンロード中』
```

---

## トラブルシューティング

### 画像が表示されない

dist/ フォルダに assets/images/ が含まれているか確認：

```bash
ls -la dist/assets/
```

### スタイルが反映されない

キャッシュをクリア：
- Ctrl+Shift+Del（Windows）
- Cmd+Shift+Del（Mac）

### エラーメッセージが出る

ブラウザのコンソールで詳細を確認：
- F12 キーを押してDeveloper Tools を開く
- Console タブで エラーを確認

---

## 推奨デプロイフロー

```
ローカル開発
    ↓
npm run dev（テスト）
    ↓
npm run build（ビルド）
    ↓
GitHub push
    ↓
Netlify自動デプロイ
    ↓
https://xxx.netlify.app で公開
```

---

## カスタムドメイン設定

### Netlifyでカスタムドメイン

1. Site Settings → Domain management
2. 「Add custom domain」
3. ドメイン名を入力
4. DNS設定を確認

### DNS指定

例: `example.com` でホストしたい場合
```
CNAME: xxx.netlify.app
```

---

## パフォーマンス最適化

### 画像最適化

```bash
# WebPに変換
cwebp notebook-farewell.png -o notebook-farewell.webp
```

### キャッシュ制御

Netlify環境変数で _headers ファイルを作成：

```
/dist/*
  Cache-Control: public, max-age=31536000, immutable

/dist/index.html
  Cache-Control: public, max-age=0, must-revalidate
```

---

## モニタリング

### Google Analytics

index.html に以下を追加：

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

### Netlify Analytics

Netlify Dashboard で有効化（有料）

---

## 参考リンク

- [Vite デプロイガイド](https://vitejs.dev/guide/static-deploy.html)
- [Netlify](https://netlify.com)
- [Vercel](https://vercel.com)
- [GitHub Pages](https://pages.github.com)
- [itch.io](https://itch.io)
