import React from "react";
import "./RulesPage.scss";

function RulesPage() {
  return (
    <div className="container">
      <div className="rules">
        <h2 className="title">The Rules</h2>
        <li className="rules_list">
          <ul>
            The aim of the game is to select all the duplicate cards till there
            are no more!
          </ul>
          <ul>
            Each round you will choose two cards and every time you click a card
            it will be counted.
          </ul>
          <ul>
            Choosing two of the same cards in a round will get you closer to the
            end! When you start to get the hang of it we'll start making it more
            challenging.
          </ul>
          <ul>
            Keep an eye on your life! You only get X chances to make a pair or
            else, you're out.
          </ul>
        </li>
      </div>
      <div className="button_div">
        <button className="GoBack" type="button">
          Go back
        </button>
      </div>
    </div>
  );
}
export default RulesPage;
