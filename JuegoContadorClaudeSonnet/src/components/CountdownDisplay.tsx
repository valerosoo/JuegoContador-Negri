import React from "react";
import type { GamePhase } from "../types/game";

interface CountdownDisplayProps {
  phase: GamePhase;
}

const PHASE_LABELS: Partial<Record<GamePhase, string>> = {
  "countdown-preparados": "Preparados",
  "countdown-listos": "Listos",
  "countdown-ya": "¡YA!",
};

const CountdownDisplay: React.FC<CountdownDisplayProps> = ({ phase }) => {
  const label = PHASE_LABELS[phase];
  if (!label) return null;

  const isYa = phase === "countdown-ya";

  return (
    <div className={`countdown-display ${isYa ? "countdown-ya" : ""}`}>
      <span className="countdown-text">{label}</span>
    </div>
  );
};

export default CountdownDisplay;
