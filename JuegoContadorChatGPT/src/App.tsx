import { useState, useEffect, useRef } from "react";

import StartButton from "./components/StartButton";
import ClickButton from "./components/ClickButton";
import ScoreBoard from "./components/ScoreBoard";
import Countdown from "./components/Countdown";
import GameInfo from "./components/GameInfo";

function App() {

  const [gameState, setGameState] = useState<"idle" | "countdown" | "playing">("idle");
  const [count, setCount] = useState<number>(0);
  const [maxScore, setMaxScore] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState<number>(5);
  const [countdownText, setCountdownText] = useState<string>("");

  const countRef = useRef(0);

  const startGame = () => {
    setCount(0);
    countRef.current = 0;
    setTimeLeft(5);
    setCountdownText("Preparados");
    setGameState("countdown");
  };

  // COUNTDOWN
  useEffect(() => {

    if (gameState !== "countdown") return;

    const steps = ["Preparados", "Listos", "Ya"];
    let index = 0;

    const interval = setInterval(() => {

      index++;

      if (index < steps.length) {
        setCountdownText(steps[index]);
      } else {
        clearInterval(interval);
        setGameState("playing");
      }

    }, 1000);

    return () => clearInterval(interval);

  }, [gameState]);


  // TIMER
  useEffect(() => {

    if (gameState !== "playing") return;

    const timer = setInterval(() => {

      setTimeLeft((prev) => {

        if (prev <= 1) {

          clearInterval(timer);

          setMaxScore((max) =>
            countRef.current > max ? countRef.current : max
          );

          setGameState("idle");

          return 0;
        }

        return prev - 1;

      });

    }, 1000);

    return () => clearInterval(timer);

  }, [gameState]);


  const handleClick = () => {

    if (gameState === "playing") {

      setCount((prev) => {
        const newCount = prev + 1;
        countRef.current = newCount;
        return newCount;
      });

    }

  };


  return (

    <div className="container">

      <h1>Juego Contador</h1>

      <ScoreBoard maxScore={maxScore} />

      {gameState === "countdown" && (
        <Countdown text={countdownText} />
      )}

      {gameState === "playing" && (
        <GameInfo timeLeft={timeLeft} count={count} />
      )}

      <StartButton
        startGame={startGame}
        disabled={gameState !== "idle"}
      />

      <ClickButton
        handleClick={handleClick}
        disabled={gameState !== "playing"}
      />

    </div>

  );
}

export default App;