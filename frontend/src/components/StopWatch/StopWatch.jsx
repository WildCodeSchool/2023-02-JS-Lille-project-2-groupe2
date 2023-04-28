import React, { useState, useEffect } from "react";
import "./StopWatch.scss";
import "../ShowPictures/ShowPictures";
import "../../pages/GamePage/GamePage";

function StopWatch(setMatchedCards) {
  const [time, setTime] = useState(300);

  const restart = () => {
    setMatchedCards([]);
    setTime(300);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((timee) => {
        if (timee === 0) {
          clearInterval(timer);
          return 0;
        }
        return timee - 1;
      });
    }, 1000);
  }, []);

  return (
    <div className="stopwatch-container">
      <p className="clock">
        {`${Math.floor(time / 60)}`.padStart(2, 0)}:
        {`${time % 60}`.padStart(2, 0)}
      </p>
      <button type="submit" className="restartButton" onClick={restart}>
        Restart
      </button>
    </div>
  );
}

export default StopWatch;
