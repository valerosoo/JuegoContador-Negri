import React from "react";

interface ScoreBoardProps {
  count: number;
  highScore: number;
  timeLeft: number;
  isPlaying: boolean;
}

const ScoreBoard: React.FC<ScoreBoardProps> = ({
  count,
  highScore,
  timeLeft,
  isPlaying,
}) => {
  return (
    <div className="scoreboard">
      <div className="score-item">
        <span className="score-label">Puntaje Máximo</span>
        <span className="score-value high-score">{highScore}</span>
      </div>
      {isPlaying && (
        <>
          <div className="score-item">
            <span className="score-label">Clicks</span>
            <span className="score-value current-count">{count}</span>
          </div>
          <div className="score-item">
            <span className="score-label">Tiempo restante</span>
            <span
              className={`score-value time-left ${timeLeft <= 2 ? "urgent" : ""}`}
            >
              {timeLeft}s
            </span>
          </div>
        </>
      )}
    </div>
  );
};

export default ScoreBoard;
