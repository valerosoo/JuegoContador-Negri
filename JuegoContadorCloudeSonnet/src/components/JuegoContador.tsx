import React, { useEffect, useRef } from "react";
import { useGame } from "../hooks/useGame";
import CountdownDisplay from "./CountdownDisplay";
import ScoreBoard from "./ScoreBoard";
import ResultBanner from "./ResultBanner";

const JuegoContador: React.FC = () => {
  const { phase, count, timeLeft, highScore, startGame, handleClick } =
    useGame();

  const isIdle = phase === "idle";
  const isCountdown =
    phase === "countdown-preparados" ||
    phase === "countdown-listos" ||
    phase === "countdown-ya";
  const isPlaying = phase === "playing";
  const isFinished = phase === "finished";

  const isNewRecord = isFinished && count > 0 && count >= highScore;

  const clickButtonRef = useRef<HTMLButtonElement>(null);

  // Auto-focus click button when game starts
  useEffect(() => {
    if (isPlaying) {
      clickButtonRef.current?.focus();
    }
  }, [isPlaying]);

  return (
    <div className="game-wrapper">
      <header className="game-header">
        <h1 className="game-title">JuegoContador</h1>
        <p className="game-subtitle">¿Cuántos clicks podés hacer en 5 segundos?</p>
      </header>

      <main className="game-main">
        <ScoreBoard
          count={count}
          highScore={highScore}
          timeLeft={timeLeft}
          isPlaying={isPlaying}
        />

        {isCountdown && <CountdownDisplay phase={phase} />}

        {isFinished && (
          <ResultBanner
            count={count}
            highScore={highScore}
            isNewRecord={isNewRecord}
          />
        )}

        <div className="game-controls">
          <button
            className="btn btn-start"
            onClick={startGame}
            disabled={isCountdown || isPlaying}
            aria-label="Iniciar juego"
          >
            {isIdle ? "¡Iniciar!" : isFinished ? "Jugar de nuevo" : "Esperá..."}
          </button>

          <button
            ref={clickButtonRef}
            className="btn btn-click"
            onClick={handleClick}
            disabled={!isPlaying}
            aria-label="Clickear"
          >
            {isPlaying ? `👆 ¡Click! (${count})` : "👆 Click"}
          </button>
        </div>
      </main>
    </div>
  );
};

export default JuegoContador;
