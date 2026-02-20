import React from 'react';
import { GameProvider, useGame } from './context/GameContext';
import TitleScreen from './components/TitleScreen';
import GameScreen from './components/GameScreen';
import EndingScreen from './components/EndingScreen';
import './styles/global.css';

function AppContent() {
  const { gameState } = useGame();

  return (
    <div className="app-container" style={{ width: '100%', height: '100%' }}>
      {gameState === 'title' && <TitleScreen />}
      {gameState === 'playing' && <GameScreen />}
      {gameState === 'ending' && <EndingScreen />}
    </div>
  );
}

export default function App() {
  return (
    <GameProvider>
      <AppContent />
    </GameProvider>
  );
}
