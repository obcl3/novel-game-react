import React from 'react';
import { useGame } from '../context/GameContext';
import '../styles/textWindow.css';

export default function TextWindow() {
  const { currentScene } = useGame();

  if (!currentScene) return null;

  const isNarration = currentScene.character === 'ナレーション';
  const characterColor = currentScene.character === 'クロウ' ? '#87ceeb' : '#e8e8e8';

  return (
    <div className="text-window">
      {!isNarration && (
        <div className="character-name" style={{ color: characterColor }}>
          {currentScene.character}
        </div>
      )}
      <div className="character-text">
        {currentScene.text}
      </div>
    </div>
  );
}
