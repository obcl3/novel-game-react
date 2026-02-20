import React from 'react';
import { useGame } from '../context/GameContext';
import '../styles/titleScreen.css';

export default function TitleScreen() {
  const { startGame, loadGame, saveData } = useGame();

  return (
    <div className="title-screen">
      <div className="title-content">
        <div className="title-art">🦅</div>
        <h1 className="title-h1">『さよならをダウンロード中』</h1>
        <p className="title-subtitle">A farewell between human and AI</p>
        
        <button className="btn btn-primary" onClick={startGame}>
          ゲーム開始
        </button>
        
        <button 
          className="btn btn-secondary" 
          onClick={loadGame}
          disabled={!saveData}
        >
          {saveData ? 'セーブデータを読込' : 'セーブデータなし'}
        </button>
      </div>
    </div>
  );
}
