import "./App.css";
import Validation from "./validation";
import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");

  const updateInput = (event) => {
    setInput(event.target.value);
  };
  return (
    <div className="App">
      <h1> number of letters counter </h1>
      <input
        id="input-name"
        type="text"
        placeholder="please enter your name"
        value={input}
        onChange={updateInput}
      ></input>
      <Validation text={input} length={input.length}></Validation>
    </div>
  );
}

export default App;
