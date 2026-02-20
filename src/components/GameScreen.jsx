import React, { useEffect } from 'react';
import { useGame } from '../context/GameContext';
import ProgressBar from './ProgressBar';
import TextWindow from './TextWindow';
import SystemMenu from './SystemMenu';
import '../styles/gameScreen.css';

export default function GameScreen() {
  const { 
    nextScene, 
    toggleMenu, 
    currentScene,
    currentSceneIndex,
    totalScenes
  } = useGame();

  // キーボード操作
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Space' || e.code === 'Enter') {
        e.preventDefault();
        nextScene();
      }
      if (e.code === 'Escape') {
        toggleMenu();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextScene, toggleMenu]);

  // シーン終了時のチェック
  useEffect(() => {
    if (currentSceneIndex >= totalScenes) {
      // エンディング画面へ遷移（App.jsx で管理）
    }
  }, [currentSceneIndex, totalScenes]);

  if (!currentScene) return null;

  const bgImagePath = currentScene.bgImage 
    ? `/assets/images/${currentScene.bgImage}`
    : null;

  return (
    <div className="game-screen">
      {/* 背景画像 */}
      {bgImagePath && (
        <div 
          className="bg-image"
          style={{ backgroundImage: `url('${bgImagePath}')` }}
        />
      )}

      {/* UI オーバーレイ */}
      <div className="game-ui-overlay">
        {/* プログレスバー */}
        <ProgressBar />

        {/* テキストウィンドウ */}
        <TextWindow />

        {/* 次へボタン */}
        <button 
          className="btn-next"
          onClick={nextScene}
          title="Space/Enter キーまたはクリック"
        >
          ▶ 次へ
        </button>

        {/* システムメニュー */}
        <button 
          className="btn-menu-toggle"
          onClick={toggleMenu}
          title="Escape キー"
        >
          ≡ メニュー
        </button>
      </div>

      {/* メニュー */}
      <SystemMenu />
    </div>
  );
}
