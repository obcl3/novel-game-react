import React from 'react';
import { useGame } from '../context/GameContext';
import '../styles/endingScreen.css';

export default function EndingScreen() {
  const { restart } = useGame();

  return (
    <div className="ending-screen">
      <div className="ending-content">
        <h2 className="ending-title">THE END</h2>
        <p className="ending-message">
          あなたは『さよならをダウンロード中』をクリアしました。
        </p>
        <p className="ending-message-sub">
          ありがとうございました。
        </p>
        <button className="btn btn-primary" onClick={restart}>
          もう一度遊ぶ
        </button>
      </div>
    </div>
  );
}
