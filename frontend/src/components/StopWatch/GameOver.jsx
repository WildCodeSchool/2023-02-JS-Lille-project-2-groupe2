import React from "react";
//import "./GameOver.scss";
export default function GameOver() {
  const displayPopup = () => {
    const popup = document.querySelector(".popup");
    popup.style.display = "none";
  };
  return (
    <div className="wrapper">
      <button onClick={displayPopup} type="submit">
        Click{" "}
      </button>
      <div className="popup">
        <h1 className="gameover">Game Over!</h1>
        <h2 className="message">You Lose!</h2>
        <h3 className="Lvl">LvL: 30</h3>
        <img alt="logo" className="logopop" src=".\src\assets\logo.png" />
        <h3 className="score">SCORE: XXX</h3>
        <div>
          <button className="restart" type="submit">
            Restart
          </button>
        </div>
      </div>
    </div>
  );
}
