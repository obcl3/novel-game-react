import React, { createContext, useState, useCallback } from 'react';
import { SCENARIO, getAllScenes } from '../data/scenario';

export const GameContext = createContext();

export function GameProvider({ children }) {
  const scenes = getAllScenes();
  
  const [currentSceneIndex, setCurrentSceneIndex] = useState(0);
  const [gameState, setGameState] = useState('title'); // title, playing, ending
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [saveData, setSaveData] = useState(() => loadSaveData());

  const currentScene = scenes[currentSceneIndex] || null;

  const startGame = useCallback(() => {
    setCurrentSceneIndex(0);
    setGameState('playing');
    setIsMenuOpen(false);
  }, []);

  const nextScene = useCallback(() => {
    if (currentSceneIndex + 1 >= scenes.length) {
      setGameState('ending');
    } else {
      setCurrentSceneIndex(prev => prev + 1);
    }
  }, [currentSceneIndex, scenes.length]);

  const saveGame = useCallback(() => {
    const newSaveData = {
      sceneIndex: currentSceneIndex,
      timestamp: new Date().toLocaleString('ja-JP')
    };
    localStorage.setItem('novelGameSave', JSON.stringify(newSaveData));
    setSaveData(newSaveData);
    alert('セーブしました！\n' + newSaveData.timestamp);
  }, [currentSceneIndex]);

  const loadGame = useCallback(() => {
    const data = loadSaveData();
    if (data) {
      setCurrentSceneIndex(data.sceneIndex);
      setGameState('playing');
      setIsMenuOpen(false);
      alert('セーブデータを読み込みました。');
    } else {
      alert('セーブデータが見つかりません。');
    }
  }, []);

  const returnToTitle = useCallback(() => {
    setGameState('title');
    setIsMenuOpen(false);
  }, []);

  const restart = useCallback(() => {
    setCurrentSceneIndex(0);
    setGameState('playing');
    localStorage.removeItem('novelGameSave');
    setIsMenuOpen(false);
  }, []);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const value = {
    // State
    currentSceneIndex,
    gameState,
    isMenuOpen,
    saveData,
    currentScene,
    scenes,
    totalScenes: scenes.length,
    
    // Actions
    startGame,
    nextScene,
    saveGame,
    loadGame,
    returnToTitle,
    restart,
    toggleMenu
  };

  return (
    <GameContext.Provider value={value}>
      {children}
    </GameContext.Provider>
  );
}

function loadSaveData() {
  const data = localStorage.getItem('novelGameSave');
  return data ? JSON.parse(data) : null;
}

export function useGame() {
  const context = React.useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within GameProvider');
  }
  return context;
}
