import React, { useState } from "react";
import "./InputUsername.scss";

function InputUserName() {
  const [text, setText] = useState("");
  const [name, setName] = useState("");

  const specialCharsRegex = /[^\w\s]/;
  const [inputValue, setInputValue] = useState("");

  function handleInputChange(event) {
    const { value } = event.target;
    if (!specialCharsRegex.test(value)) {
      setInputValue(value);
      setText(value);
    }
    return value;
  }
  function handleSubmit(event) {
    event.preventDefault();
    setName(text);
    setInputValue("");
  }
  return (
    <div className="input-username">
      <h1 className="pseudo">Your username: {name} </h1>
      <form
        className="form-username"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          type="text"
          id="input"
          value={inputValue}
          onChange={(e) => {
            handleInputChange(e);
          }}
          placeholder="Enter your Nickname"
          maxLength={15}
        />
        <button className="play" type="submit">
          Validate
        </button>
      </form>
    </div>
  );
}

export default InputUserName;
