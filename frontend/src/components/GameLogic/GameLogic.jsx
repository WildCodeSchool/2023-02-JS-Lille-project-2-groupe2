// import "./GameLogic.scss";
// import React, { useState, useEffect } from "react";
// import { v4 as uuidv4 } from "uuid"; // import uuid library
// import { shuffle } from "lodash";
// import StopWatch from "../StopWatch/StopWatch";
// import Score from "../Score/Score";
// import Countdown from "../Countdown/Countdown";
// import back from '@assets/back.png'; 

// const imageList = [
//   {
//     films: [],
//     shortFilms: [],
//     tvShows: [],
//     videoGames: [],
//     parkAttractions: [],
//     allies: [],
//     enemies: [],
//     _id: 6,
//     name: "'Olu Mel",
//     imageUrl:
//       "https://static.wikia.nocookie.net/disney/images/6/61/Olu_main.png",
//     url: "https://api.disneyapi.dev/characters/6",
//   },
//   {
//     films: [],
//     shortFilms: [],
//     tvShows: ["Gravity Falls"],
//     videoGames: [],
//     parkAttractions: [],
//     allies: [],
//     enemies: [],
//     _id: 7,
//     name: ".GIFfany",
//     imageUrl:
//       "https://static.wikia.nocookie.net/disney/images/5/51/Giffany.png",
//     url: "https://api.disneyapi.dev/characters/7",
//   },
//   {
//     films: [],
//     shortFilms: [],
//     tvShows: ["Lilo & Stitch: The Series", "Stitch!"],
//     videoGames: ["Disney Tsum Tsum (game)"],
//     parkAttractions: [],
//     allies: [],
//     enemies: [],
//     _id: 10,
//     name: "627",
//     imageUrl:
//       "https://static.wikia.nocookie.net/disney/images/8/80/Profile_-_627.png",
//     url: "https://api.disneyapi.dev/characters/10",
//   },
//   {
//     films: [],
//     shortFilms: [],
//     tvShows: [],
//     videoGames: [],
//     parkAttractions: ["The Timekeeper"],
//     allies: [],
//     enemies: [],
//     _id: 11,
//     name: "9-Eye",
//     imageUrl: "https://static.wikia.nocookie.net/disney/images/7/77/9-eye.jpg",
//     url: "https://api.disneyapi.dev/characters/11",
//   },
//   {
//     films: [],
//     shortFilms: [],
//     tvShows: ["Pickle and Peanut"],
//     videoGames: [],
//     parkAttractions: [],
//     allies: [],
//     enemies: [],
//     _id: 12,
//     name: "90's Adventure Bear",
//     imageUrl:
//       "https://static.wikia.nocookie.net/disney/images/3/3f/90%27s_Adventure_Bear_profile.png",
//     url: "https://api.disneyapi.dev/characters/12",
//   },
//   {
//     films: [],
//     shortFilms: [],
//     tvShows: [],
//     videoGames: ["Epic Mickey 2: The Power of Two"],
//     parkAttractions: [],
//     allies: [],
//     enemies: [],
//     _id: 13,
//     name: "A.B.E.",
//     imageUrl: "https://static.wikia.nocookie.net/disney/images/2/20/ABE.jpg",
//     url: "https://api.disneyapi.dev/characters/13",
//   },
//   {
//     films: [
//       "The Computer Wore Tennis Shoes",
//       "Now You See Him, Now You Don't",
//       "The Strongest Man in the World",
//     ],
//     shortFilms: [],
//     tvShows: [],
//     videoGames: [],
//     parkAttractions: [],
//     allies: [],
//     enemies: [],
//     _id: 14,
//     name: "A.J. Arno",
//     imageUrl:
//       "https://static.wikia.nocookie.net/disney/images/2/2c/A.J._Arno.jpg",
//     url: "https://api.disneyapi.dev/characters/14",
//   },
//   {
//     films: [],
//     shortFilms: [],
//     tvShows: ["Puppy Dog Pals"],
//     videoGames: [],
//     parkAttractions: [],
//     allies: [],
//     enemies: [],
//     _id: 15,
//     name: "A.R.F.",
//     imageUrl: "https://static.wikia.nocookie.net/disney/images/b/ba/A.R.F.png",
//     url: "https://api.disneyapi.dev/characters/15",
//   },
//   {
//     films: ["Cheetah"],
//     shortFilms: [],
//     tvShows: [],
//     videoGames: [],
//     parkAttractions: [],
//     allies: [],
//     enemies: [],
//     _id: 16,
//     name: "Abdullah",
//     imageUrl:
//       "https://static.wikia.nocookie.net/disney/images/c/cb/1087603-44532-clp-950.jpg",
//     url: "https://api.disneyapi.dev/characters/16",
//   },
//   {
//     films: [],
//     shortFilms: [],
//     tvShows: ["The Legend of Tarzan"],
//     videoGames: [],
//     parkAttractions: [],
//     allies: [],
//     enemies: [],
//     _id: 17,
//     name: "Abigail Markham",
//     imageUrl:
//       "https://static.wikia.nocookie.net/disney/images/9/95/Abigail_Markham.jpeg",
//     url: "https://api.disneyapi.dev/characters/17",
//   },
//   {
//     films: ["The Fox and the Hound", "The Fox and the Hound 2"],
//     shortFilms: [],
//     tvShows: [],
//     videoGames: [],
//     parkAttractions: [],
//     allies: [],
//     enemies: [],
//     _id: 18,
//     name: "Abigail the Cow",
//     imageUrl:
//       "https://static.wikia.nocookie.net/disney/images/0/05/Fox-disneyscreencaps_com-901.jpg",
//     url: "https://api.disneyapi.dev/characters/18",
//   },
//   {
//     films: [],
//     shortFilms: [],
//     tvShows: ["Once Upon a Time"],
//     videoGames: [],
//     parkAttractions: [],
//     allies: [],
//     enemies: [],
//     _id: 19,
//     name: "Abigail",
//     imageUrl:
//       "https://static.wikia.nocookie.net/disney/images/d/dd/Regalblond.jpg",
//     url: "https://api.disneyapi.dev/characters/19",
//   },
//   {
//     films: [],
//     shortFilms: [],
//     tvShows: ["Elena of Avalor"],
//     videoGames: [],
//     parkAttractions: [],
//     allies: [],
//     enemies: [],
//     _id: 20,
//     name: "Queen Abigail",
//     imageUrl:
//       "https://static.wikia.nocookie.net/disney/images/f/fa/Normal_EoA_S3_E4_0217.jpg",
//     url: "https://api.disneyapi.dev/characters/20",
//   },
//   {
//     films: ["The Return of Jafar", "Aladdin and the King of Thieves"],
//     shortFilms: [],
//     tvShows: ["Aladdin (TV series)"],
//     videoGames: [],
//     parkAttractions: [],
//     allies: [],
//     enemies: [],
//     _id: 21,
//     name: "Abis Mal's Thugs",
//     imageUrl:
//       "https://static.wikia.nocookie.net/disney/images/b/ba/Abis_Mal%27s_Thugs.jpg",
//     url: "https://api.disneyapi.dev/characters/21",
//   },
//   {
//     films: [],
//     shortFilms: [],
//     tvShows: ["Tron: Uprising"],
//     videoGames: [],
//     parkAttractions: [],
//     allies: [],
//     enemies: [],
//     _id: 22,
//     name: "Able",
//     imageUrl: "https://static.wikia.nocookie.net/disney/images/a/af/Able.png",
//     url: "https://api.disneyapi.dev/characters/22",
//   },
// ];
// //  Temporary array will be fetched data from props
// //  1 Fetch
// //  2 uuid
// //  3 intégrer à l'algo la comparaison de l'uuid
// //  4 intégrer la vérification d'url

// function GameLogic() {
//   const [cards] = useState(shuffle([...imageList, ...imageList])); // shuffle cards everytime
//   const [clickedImg, setClickedImg] = useState([]); // the chosen img
//   const [matchedCards, setMatchedCards] = useState([]); // array of identical imgs
//   const [pairNum, setpairNum] = useState(0); // this shows how many times the player clicked (2 clicks = 1 turn)
//   const [num, setNum] = useState(1);
//   const [score, setScore] = useState(0);
//   // when a card is selected, it stays open until we make a second choice.
//   // It no match, both cards flip back

//   const flipCard = (index) => {
//     if (clickedImg.length === 0) {
//       setClickedImg([index]);
//     } else if (clickedImg.length === 1) {
//       const firstChoice = clickedImg[0];
//       const secondChoice = index;
//       if (firstChoice !== secondChoice) {
//         if (cards[firstChoice] === cards[secondChoice]) {
//           setMatchedCards([...matchedCards, firstChoice, secondChoice]);
//           console.warn("match !");
//           setScore(score + 500);
//         } else {
//           console.warn("not a match !");
//           if (score === 0 || score <= 150) {
//             setScore(0);
//           } else {
//             setScore(score - 150);
//           }
//         }
//         setClickedImg([...clickedImg, index]);
//       }
//     } else if (clickedImg.length === 2) {
//       setClickedImg([index]);
//     }
//   };

//   if (matchedCards.length === 30) {
//     return (
//       <div>
//         <input
//           type="image"
//           id="princess"
//           className=""
//           alt="princess img"
//           src={imageList[30]}
//         />
//       </div>
//     );
//   }

//   const turns = () => {
//     setNum(num + 1);
//     if (num % 2 === 0) {
//       setpairNum(pairNum + 1);
//     }
//   };
//   const [showComponent, setShowComponent] = useState(false);

//   // show certain components after 5 sec
//   useEffect(() => {
//     setInterval(() => {
//       setShowComponent(!showComponent);
//     }, 5000);
//   }, []);
//   return (
//     <>
//       <Countdown />
//       {showComponent && <StopWatch />}
//       {showComponent && <Score score={score} />}
//       <div className="imageGrid">
//         {cards.map((card, index) => {
//           const displayedCard =
//             clickedImg.indexOf(index) !== -1 ||
//             matchedCards.indexOf(index) !== -1;
//           return (
//             /* eslint-disable */
//             <div
//               className={`card-outer ${displayedCard ? "flipped" : ""} ${
//                 !showComponent ? "flipped" : ""
//               }`}
//               onClick={() => {
//                 showComponent ? flipCard(index) : "";
//                 showComponent ? turns() : "";
//               }}
//             >
//               <div className="card">
//                 <div className="front" key={`${uuidv4()}`}>
//                   <input
//                     type="image"
//                     className="front"
//                     onDragStart={(e) => e.preventDefault()}
//                     alt="memorycard"
//                     key={`${uuidv4()}`}
//                     src={card.imageUrl}
//                     id={`${uuidv4()}`}
//                   />
//                 </div>
//                 <div className="back" key={`${uuidv4()}`}>
//                   <input type="image" src="" key={`${uuidv4()}`} alt="" />
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//       {showComponent &&
//       <div className="ClickCounterBtn">
//         <button className="myButton" type="submit">
//           {pairNum} Turns
//         </button>
//       </div>
// }
//     </>
//   );
// }
// export default GameLogic;
