import React, { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid"; // import uuid library
import "./ShowPictures.scss";

const imageList = [
  {
    name: "baba",
    url: "https://www.wallpapers13.com/wp-content/uploads/2015/12/Nature-Lake-Bled.-Desktop-background-image-840x525.jpg",
    stat: "",
  },
  {
    name: "dudu",
    url: "https://www.wallpapers13.com/wp-content/uploads/2015/12/Scenery-Lake-Sunrises-and-sunsets-Sky-Tree-stump-Grass-Nature-410519-730x456.jpg",
    stat: "",
  },
];
//  Temporary array will be fetched data from props

function ShowPictures() {
  // Count for limit turn to 2 clicks on different cards
  const count = useRef(0);
  // Save the img src for comparing if the cards match
  const [clickedSrc, setClickedSrc] = useState([]);
  // Savec the id of each cards to verify it's not the same card clicked
  const [clickedId, setClickedId] = useState([]);
  // Save all the img to an array
  const [card, setCard] = useState([]);
  // Start game when all the card are ready on useEffect
  const [ready, setReady] = useState();
  const [flipped, setFlipped] = useState(false);

  // function to reset the clicked card
  const resetClicked = () => {
    setClickedId([]);
    setClickedSrc([]);
  };
  // function to set the clickedsrc and clickedid to the one that are clicked
  const setClicked = (event) => {
    setClickedId((oldId) => [...oldId, event.target.id]);
    setClickedSrc((oldSrc) => [...oldSrc, event.target.name]);
  };
  // limit the click to 2
  const clikedImg = (event) => {
    if (count.current < 2) {
      setClicked(event);
      count.current += 1;
    }
  };
  // call the clickedImg function on click
  const handleClick = (event) => {
    clikedImg(event);
    setFlipped(true);
  };

  // Map through given aray and create all the cards
  const createCard = (array) => {
    array.map(({ url }) =>
      setCard((oldCard) =>
        [
          ...oldCard,
          <div className={`card-outer ${flipped === true ? "flipped" : ""}`}>
            <div className="card">
              <input
                className="back"
                type="image"
                key={`${uuidv4()}`}
                id={`${uuidv4()}`}
                alt=""
                src=""
                name={url}
                onClick={(event) => handleClick(event)}
              />
              ,
              <input
                className="front "
                type="image"
                // onClick={(event) => handleClick(event)}
                onDragStart={(e) => e.preventDefault()}
                alt="memorycard"
                key={`${uuidv4()}`}
                name={`${url}`}
                id={`${uuidv4()}`}
                src={`${url}`}
              />
              ,
            </div>
            ,
          </div>,
        ].sort(() => Math.random() - 0.5)
      )
    );
    // set the state to ready for useeffect
    setReady(true);
  };

  //  When clickedSrc is set compare the cards to see if the src match and the id is different
  useEffect(() => {
    if (count.current === 2) {
      count.current = 0;
      if (clickedSrc[0] === clickedSrc[1]) {
        if (clickedId[0] !== clickedId[1]) {
          resetClicked();
          console.info("TRUE");
        } else {
          resetClicked();
          console.info("FALSE");
        }
      } else {
        resetClicked();
        console.info("FALSE");
      }
    }
  }, [clickedSrc]);

  // create the cards when the data are ready
  useEffect(() => {
    createCard(imageList);
  }, [ready]);

  return (
    <div onDragStart={(e) => e.preventDefault()}>
      <div onDragStart={(e) => e.preventDefault()} className="imageGrid">
        {card}
      </div>
    </div>
  );
}
export default ShowPictures;
