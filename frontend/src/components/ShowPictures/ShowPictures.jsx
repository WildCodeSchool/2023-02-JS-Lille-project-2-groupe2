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
  {
    name: "baba",
    url: "https://pixabay.com/get/g52508e6b637e99f3f9b4b2693ab8625d9da8227d24019af9cd969fee6a95c511b9f1d5aa5bb182a223953ed5c66cb30f962e84e81b253a635219dbd3c202e27d_640.jpg",
    stat: "",
  },
  {
    name: "dudu",
    url: "https://pixabay.com/get/g7b6e48dce3b661b5da746aea62c6b401ec5bc9b83d1124917971979c948471d8a2f347558c3e692e5ca2708c4a7668c65c6bca554b27f998903ccfe511e3aa4a_640.png",
    stat: "",
  },
  {
    name: "baba",
    url: "https://pixabay.com/get/g6b987b9941af2eeaea89044cda5d6e08a1ea558a9ae755ae8e0f51a2c6e9ebe290c7ed8741ca32b9c41629e802a54f26c208638c5e52049a3d5ba63f57eb4c19_640.png",
    stat: "",
  },
  {
    name: "baba",
    url: "https://pixabay.com/get/gf8f95db6525cc7192c007e68977bbf1a6c2f3e1e1f7f6b20c0812f98b6855fb4c37c6355d3d39995c578c0240540bdbd59a2cf39ab9460a896e2ab3d5f99c7b6_640.png",
    stat: "",
  },
  {
    name: "baba",
    url: "https://pixabay.com/get/gfd2b2a6261a49c4ba60cea83354302673dade03ddfa5130efc73f3fd4d87f460a67e545463959e502946802382fb9471337d416e96effd50951d9d07325223fb_640.jpg",
    stat: "",
  },
  {
    name: "baba",
    url: "https://pixabay.com/get/gfeea425c35b1cf24c221608cc9e6d6f965b832bff3903a3583be76cde38011d25590a0da7d071f3da38a5e2841bdcdc24356bb9c73dd2220a5bee6c70061e193_640.png",
    stat: "",
  },
  {
    name: "baba",
    url: "https://pixabay.com/get/gd48eb31c3a30008c5c474ea1a3abf2502982b3c3f70898c9cccc64a465ff39edebf8bcd094f0d95eb4b4d89eda17ad60_640.jpg",
    stat: "",
  },
];
//  Temporary array will be fetched data from props

function ShowPictures() {
  const count = useRef(0);
  const [clickedSrc, setClickedSrc] = useState([]);
  const [clickedId, setClickedId] = useState([]);
  const [card, setCard] = useState([]);
  const [ready, setReady] = useState();
  const resetClicked = () => {
    setClickedId([]);
    setClickedSrc([]);
  };

  const setClicked = (event) => {
    setClickedId((oldId) => [...oldId, event.target.id]);
    setClickedSrc((oldSrc) => [...oldSrc, event.target.src]);
  };

  const clikedImg = (event) => {
    if (count.current < 2) {
      setClicked(event);
      count.current += 1;
    }
  };

  const handleClick = (event) => {
    clikedImg(event);
  };

  const createCard = (array) => {
    array.map(({ url }) =>
      setCard((oldCard) =>
        [
          ...oldCard,
          <input
            type="image"
            onClick={(event) => handleClick(event)}
            onDragStart={(e) => e.preventDefault()}
            style={{
              margin: "auto",
              height: "200px",
              width: "150px",
            }}
            alt="memorycard"
            key={`${uuidv4()}`}
            src={`${url}`}
            id={`${uuidv4()}`}
          />,
        ].sort(() => Math.random() - 0.5)
      )
    );
    setReady(true);
  };

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

  useEffect(() => {
    createCard(imageList);
  }, [ready]);

  return (
    <div onDragStart={(e) => e.preventDefault()} className="App">
      <div
        onDragStart={(e) => e.preventDefault()}
        className="card-container"
        style={{
          margin: "10px",
          height: "70%",
          width: "80%",
        }}
      >
        {card}
      </div>
    </div>
  );
}
export default ShowPictures;
