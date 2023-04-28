import React, { useState, useEffect } from "react";
import "./GamePage.scss";
// eslint-disable-next-line import/no-cycle
import StopWatch from "../../components/StopWatch/StopWatch";
import Countdown from "../../components/Countdown/Countdown";
import ShowPictures from "../../components/ShowPictures/ShowPictures";
import Level from "../../components/Level/Level";
import Score from "../../components/Score/Score";

function GamePage() {
  // hide these components for 5 seconds at the start of the game
  const [showComponent, setShowComponent] = useState(false);

  // show certain components after 5 sec
  useEffect(() => {
    setInterval(() => {
      setShowComponent(!showComponent);
    }, 5000);
  }, []);

  return (
    <div className="game">
      <Countdown />
      <Level />
      {showComponent && <StopWatch />}
      {showComponent && <Score />}
      <ShowPictures />
    </div>
  );
}

export default GamePage;
