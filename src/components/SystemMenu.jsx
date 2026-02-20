import React from 'react';
import { useGame } from '../context/GameContext';
import '../styles/systemMenu.css';

export default function SystemMenu() {
  const { 
    isMenuOpen, 
    toggleMenu, 
    saveGame, 
    loadGame, 
    returnToTitle 
  } = useGame();

  if (!isMenuOpen) return null;

  return (
    <div className="system-menu-overlay" onClick={toggleMenu}>
      <div className="system-menu" onClick={(e) => e.stopPropagation()}>
        <button className="btn-menu" onClick={saveGame}>
          💾 セーブ
        </button>
        <button className="btn-menu" onClick={loadGame}>
          📂 ロード
        </button>
        <button className="btn-menu" onClick={returnToTitle}>
          🏠 タイトル
        </button>
        <button className="btn-menu" onClick={toggleMenu}>
          ✖ メニューを閉じる
        </button>
      </div>
    </div>
  );
}
