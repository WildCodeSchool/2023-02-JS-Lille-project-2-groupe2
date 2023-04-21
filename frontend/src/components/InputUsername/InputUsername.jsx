import React, { useState } from "react";
import "./InputUsername.scss";

function InputUserName() {
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  function handleClick(e) {
    setText(name);
    e.preventDefault();
  }

  return (
    <div className="input-username">
      <h2>Enter Username : {text} </h2>
      <form className="form-username" onSubmit={handleClick}>
        <input type="text" onChange={handleChange} placeholder="Username" />
        <button type="submit">Play !</button>
      </form>
    </div>
  );
}

export default InputUserName;
