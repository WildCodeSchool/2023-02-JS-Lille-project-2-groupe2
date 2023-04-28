import "./ShowPictures.scss";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid"; // import uuid library
import { shuffle } from "lodash";
import backImg from "../../assets/point.svg";
import poke from "../../assets/pokemon.png";
import w from "../../assets/w.png";
import k from "../../assets/k.jpg";
import logo from "../../assets/logo.png";
import nature from "../../assets/nature.jpg";
import flower from "../../assets/flower.jpg";
import princess from "../../assets/princess.png";
import dog from "../../assets/dog.jpg";

const imageList = [
  {
    id: "imgbaba",
    name: "baba",
    url: flower,
    stat: "",
  },
  { id: "kgjfvifh", name: "dudu", url: poke, stat: "" },
  {
    id: "pepepepep",
    name: "baba",
    url: nature,
    stat: "",
  },
  {
    id: "jvifojiojvjf",
    name: "dudu",
    url: "https://picsum.photos/seed/picsum/200/300",
    stat: "",
  },
  {
    id: " hidfuvhdfuivhd",
    name: "baba",
    url: dog,
    stat: "",
  },
  {
    id: "juihih",
    name: "baba",
    url: k,
    stat: "",
  },
  {
    id: "jinikodfvhfuivn",
    name: "baba",
    url: w,
    stat: "",
  },
  {
    id: "fjiovdjvjiodf",
    name: "baba",
    url: logo,
    stat: "",
  },
  {
    id: " xsxzdidzuihd",
    name: "baba",
    url: backImg,
    stat: "",
  },
];
//  Temporary array will be fetched data from props

function ShowPictures() {
  const newArray = (count) => {
    return imageList.map((obj, index) => {
      // eslint-disable-next-line no-dupe-keys
      return { ...obj, id: index + count };
    });
  };
  // const newArray = imageList.map((obj, index) => {
  //   // eslint-disable-next-line no-dupe-keys
  //   return { ...obj, id: index + 1 };
  // });
  const [cards] = useState(shuffle([...newArray(1), ...newArray(99)])); // shuffle cards everytime
  const [clickedImg, setClickedImg] = useState([]); // the chosen img
  const [matchedCards, setMatchedCards] = useState([]); // array of identical imgs
  const [pairNum, setpairNum] = useState(0); // this shows how many times the player clicked (2 clicks = 1 turn)
  const [num, setNum] = useState(1);

  // when a card is selected, it stays open until we make a second choice.
  // It no match, both cards flip back

  const flipCard = (index) => {
    if (clickedImg.length === 0) {
      setClickedImg([index]);
    } else if (clickedImg.length === 1) {
      const firstChoice = clickedImg[0];
      const secondChoice = index;

      if (cards[firstChoice] === cards[secondChoice]) {
        setMatchedCards([...matchedCards, firstChoice, secondChoice]);
        console.warn("match !");
      } else {
        console.warn("not a match !");
      }
      setClickedImg([...clickedImg, index]);
    } else if (clickedImg.length === 2) {
      setClickedImg([index]);
    }
  };

  // when the player finds all the pairs, an animation of a princess shows up
  if (matchedCards.length === 18) {
    return (
      <div>
        <input
          type="image"
          id="princess"
          className=""
          alt="princess img"
          src={princess}
        />
      </div>
    );
  }

  const turns = () => {
    setNum(num + 1);
    if (num % 2 === 0) {
      setpairNum(pairNum + 1);
    }
  };

  return (
    <>
      <div className="imageGrid">
        {cards.map((card, index) => {
          const displayedCard =
            clickedImg.indexOf(index) !== -1 ||
            matchedCards.indexOf(index) !== -1;
          return (
            /* eslint-disable */
            <div
              key={card.id}
              className={`card-outer ${displayedCard ? "flipped" : ""}`}
              onClick={() => {
                flipCard(index);
                turns();
              }}
            >
              <div className="card">
                <div className="front">
                  <input
                    type="image"
                    className="front"
                    onDragStart={(e) => e.preventDefault()}
                    alt="memorycard"
                    key={`${uuidv4()}`}
                    src={card.url}
                    id={`${uuidv4()}`}
                  />
                </div>
                <div className="back">
                  <input type="image" src="" key={`${uuidv4()}`} alt="" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <StopWatch setMatchedCards={setMatchedCards} />
      <div className="ClickCounterBtn">
        <button className="myButton" type="submit">
          {pairNum} Turns
        </button>
      </div>
    </>
  );
}
export default ShowPictures;
