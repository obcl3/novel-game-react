import React from 'react';
import { useGame } from '../context/GameContext';
import '../styles/progressBar.css';

export default function ProgressBar() {
  const { currentSceneIndex, totalScenes, currentScene } = useGame();

  const progress = ((currentSceneIndex + 1) / totalScenes) * 100;
  const dayNumber = currentScene?.day || 1;
  const totalDays = 5; // シナリオの総日数

  return (
    <div className="progress-container">
      <div className="progress-bar-wrapper">
        <div 
          className="progress-bar-fill" 
          style={{ width: `${progress}%` }}
        />
      </div>
      <span className="progress-text">
        Day {dayNumber} / {totalDays}
      </span>
    </div>
  );
}
