import { useNavigate } from "react-router";

function StartButton() {
  // The start button only appears when another button is clicked.
  // Animation should be smooth

  // when start btn is clicked, navigate to the game page
  const navigate = useNavigate();
  const routeChange = () => {
    navigate(`/game`);
  };

  return (
    <>
      {/* Once the user enters his name and chosses a theme and clicks the Start btn, 
    he can go the game route */}

      {/* onClick, timer starts */}
      <button
        type="submit"
        className="myButton"
        id="start"
        onClick={() => {
          routeChange();
        }}
      >
        Start
      </button>
    </>
  );
}

export default StartButton;
