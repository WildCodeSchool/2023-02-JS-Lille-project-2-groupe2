import React from "react";
import "./StartButton.scss";

function StartButton() {
  // The start button only appears when another button is clicked.
  // Animation should be smooth
  // Use a UseState to display the button not queryselector
  const OpenGamePage = () => {};

  return (
    <>
      {/* Once the user enters his name and chosses a theme and clicks the Start btn, 
    he can go the game route */}

      {/* onClick, timer starts */}
      <button
        type="submit"
        className="myButton"
        id="start"
        // style={{ display: "none" }}
        onClick={OpenGamePage}
      >
        Start
      </button>
    </>
  );
}

export default StartButton;
