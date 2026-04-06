import { useState, useRef, useCallback } from "react";
import type { GamePhase } from "../types/game";

const GAME_DURATION = 5;
const COUNTDOWN_MESSAGES: GamePhase[] = [
  "countdown-preparados",
  "countdown-listos",
  "countdown-ya",
];

interface UseGameReturn {
  phase: GamePhase;
  count: number;
  timeLeft: number;
  highScore: number;
  startGame: () => void;
  handleClick: () => void;
}

export function useGame(): UseGameReturn {
  const [phase, setPhase] = useState<GamePhase>("idle");
  const [count, setCount] = useState(0);
  const [timeLeft, setTimeLeft] = useState(GAME_DURATION);
  const [highScore, setHighScore] = useState(0);

  const countdownIndexRef = useRef(0);
  const countRef = useRef(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const clearTimers = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (intervalRef.current) clearInterval(intervalRef.current);
  }, []);

  const endGame = useCallback(() => {
    clearTimers();
    setPhase("finished");
    setTimeLeft(0);
    setHighScore((prev) => Math.max(prev, countRef.current));
  }, [clearTimers]);

  const startPlaying = useCallback(() => {
    setPhase("playing");
    countRef.current = 0;
    setCount(0);
    setTimeLeft(GAME_DURATION);

    let remaining = GAME_DURATION;

    intervalRef.current = setInterval(() => {
      remaining -= 1;
      setTimeLeft(remaining);
      if (remaining <= 0) {
        clearTimers();
        endGame();
      }
    }, 1000);
  }, [clearTimers, endGame]);

  const runCountdown = useCallback(() => {
    countdownIndexRef.current = 0;

    const nextStep = () => {
      const currentPhase = COUNTDOWN_MESSAGES[countdownIndexRef.current];
      setPhase(currentPhase);

      if (currentPhase === "countdown-ya") {
        timerRef.current = setTimeout(() => {
          startPlaying();
        }, 1000);
        return;
      }

      countdownIndexRef.current += 1;
      timerRef.current = setTimeout(nextStep, 1000);
    };

    nextStep();
  }, [startPlaying]);

  const startGame = useCallback(() => {
    if (phase !== "idle" && phase !== "finished") return;
    clearTimers();
    runCountdown();
  }, [phase, clearTimers, runCountdown]);

  const handleClick = useCallback(() => {
    if (phase !== "playing") return;
    countRef.current += 1;
    setCount(countRef.current);
  }, [phase]);

  return { phase, count, timeLeft, highScore, startGame, handleClick };
}
