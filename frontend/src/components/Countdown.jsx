import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "./styles/Countdown.scss";

const renderTime = ({ remainingTime }) => {
  if (remainingTime === 0) {
    // hide countdown
    const countdown = document.querySelector(".timer-wrapper");
    countdown.style.display = "none";
  }

  return (
    <div className="timer">
      <div className="value">{remainingTime}</div>
    </div>
  );
};

function Countdown() {
  // when the page loads, a countdown of 5 seconds starts to remember the cards
  // After the 5seconds, a new timer starts
  // the timer can be reset with the restart btn

  return (
    <div>
      <div className="timer-wrapper">
        <CountdownCircleTimer
          className="timeCircle"
          isPlaying
          duration={5}
          colors={["#fefe4d", "#fefe4d", "#feb74d", "f19101"]}
          colorsTime={[10, 6, 3, 0]}
          onComplete={() => ({ shouldRepeat: true, delay: 1 })}
        >
          {renderTime}
        </CountdownCircleTimer>
      </div>
    </div>
  );
}

export default Countdown;
