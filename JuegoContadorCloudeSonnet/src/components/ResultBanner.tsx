import React from "react";

interface ResultBannerProps {
  count: number;
  highScore: number;
  isNewRecord: boolean;
}

const ResultBanner: React.FC<ResultBannerProps> = ({
  count,
  isNewRecord,
}) => {
  return (
    <div className={`result-banner ${isNewRecord ? "new-record" : ""}`}>
      {isNewRecord ? (
        <>
          <span className="result-icon">🏆</span>
          <span className="result-title">¡Nuevo récord!</span>
        </>
      ) : (
        <>
          <span className="result-icon">💪</span>
          <span className="result-title">¡Tiempo!</span>
        </>
      )}
      <span className="result-count">{count} clicks</span>
    </div>
  );
};

export default ResultBanner;
