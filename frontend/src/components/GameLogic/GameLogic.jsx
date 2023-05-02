import "./GameLogic.scss";
import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid"; // import uuid library
import { shuffle } from "lodash";
import StopWatch from "../StopWatch/StopWatch";
import Score from "../Score/Score";
import Countdown from "../Countdown/Countdown";

function GameLogic({ apiName, apiData, apiList }) {
  //  Shuffle the apiData to not get the same image over and over you can modify the "15" value to change number of cards
  const maxIndex = apiData.length - 15;
  const startIndex = Math.floor(Math.random() * (maxIndex + 1));
  const [cards] = useState(
    shuffle([
      ...apiData.slice(startIndex, startIndex + 15),
      ...apiData.slice(startIndex, startIndex + 15),
    ])
  ); // shuffle cards everytime
  const [clickedImg, setClickedImg] = useState([]); // the chosen img
  const [matchedCards, setMatchedCards] = useState([]); // array of identical imgs
  const [turns, setTurns] = useState(0); // this shows how many times the player clicked (2 clicks = 1 turn)
  const [score, setScore] = useState(0);
  // when a card is selected, it stays open until we make a second choice.
  // It no match, both cards flip back

  const [showComponent, setShowComponent] = useState(false);
  const flipCard = (index) => {
    if (showComponent) {
      if (clickedImg.length === 0) {
        setClickedImg([index]);
      } else if (clickedImg.length === 1) {
        const firstChoice = clickedImg[0];
        const secondChoice = index;
        if (firstChoice !== secondChoice) {
          setTurns(turns + 1);
          if (cards[firstChoice] === cards[secondChoice]) {
            setMatchedCards([...matchedCards, firstChoice, secondChoice]);
            console.warn("match !");
            setScore(score + 500);
          } else {
            console.warn("not a match !");
            if (score === 0 || score <= 300) {
              setScore(0);
            } else {
              setScore(score - 150);
            }
          }
          setClickedImg([...clickedImg, index]);
        }
      } else if (clickedImg.length === 2) {
        setClickedImg([index]);
      }
    }
  };

  // show certain components after 5 sec
  useEffect(() => {
    setInterval(() => {
      setShowComponent(!showComponent);
    }, 5000);
  }, []);

  if (matchedCards.length === cards.length) {
    return (
      <div>
        <h1>You Win</h1>
      </div>
    );
  }
  return (
    <>
      <Countdown />
      {showComponent && <StopWatch />}
      {showComponent && <Score score={score} />}
      <div className="imageGrid">
        {cards.map((card, index) => {
          const displayedCard =
            clickedImg.indexOf(index) !== -1 ||
            matchedCards.indexOf(index) !== -1;
          return (
            <div
              key={`${uuidv4()}`}
              role="presentation"
              className={`card-outer ${displayedCard ? "flipped" : ""} ${
                !showComponent ? "flipped" : ""
              }`}
              onClick={() => {
                flipCard(index);
              }}
            >
              <div className="card">
                <div className="front">
                  <input
                    type="image"
                    className="front"
                    onDragStart={(e) => e.preventDefault()}
                    alt="memorycard"
                    src={
                      apiList?.find((api) => api.name === apiName)
                        ?.path_to_image &&
                      _.get(
                        card,
                        apiList?.find((api) => api.name === apiName)
                          ?.path_to_image
                      )
                    }
                  />
                </div>
                <div className="back">
                  <input type="image" src="" alt="" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="ClickCounterBtn">
        <button className="myButton" type="submit">
          {turns} Turns
        </button>
      </div>
    </>
  );
}
GameLogic.propTypes = {
  apiName: PropTypes.string.isRequired,
  apiData: PropTypes.instanceOf(Array).isRequired,
  apiList: PropTypes.instanceOf(Array).isRequired,
};
export default GameLogic;