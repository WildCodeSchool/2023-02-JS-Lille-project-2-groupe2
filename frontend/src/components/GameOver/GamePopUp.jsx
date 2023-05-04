import React from "react";
import "./GamePopUp.scss";
import PropTypes from "prop-types";
import Restart from "../Restart/Restart";

function GamePopUp({ win, score, turns, finished }) {
  if (win === true)
    return (
      <div className={`popup ${win ? "win-container" : "lose-container"}`}>
        <h2 className={`${win ? "win-title" : "hide"}`}>You Win !</h2>
        <img alt="logo" className="logo-popup" src=".\src\assets\logo.png" />
        <h3 className="score-popup">Score : {score}</h3>
        <h3 className="turns-popup">Turns : {turns}</h3>
        <Restart />
      </div>
    );
  if (win === false && finished)
    return (
      <div className={`popup ${win ? "win-container" : "lose-container"}`}>
        <h2 className={`${win ? "win-title" : "hide"}`}>You Lose !</h2>
        <img alt="logo" className="logo-popup" src=".\src\assets\logo.png" />
        <h3 className="score-popup">Score : {score}</h3>
        <h3 className="turns-popup">Turns : {turns}</h3>
        <Restart />
      </div>
    );
}
export default GamePopUp;
GamePopUp.propTypes = {
  win: PropTypes.bool.isRequired,
  finished: PropTypes.bool.isRequired,

  score: PropTypes.number.isRequired,
  turns: PropTypes.number.isRequired,
};
