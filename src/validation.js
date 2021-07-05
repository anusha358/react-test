import React from "react";
import Char from "./Char";

function Validation(props) {
  const createBox = [...props.text].map((letter) => (
    <Char text={letter}></Char>
  ));

  return props.length < 5 ? (
    <p> text is too short( less than 5) </p>
  ) : props.length > 20 ? (
    <p> Text is too long(more than 20) </p>
  ) : (
    <div>
      <ul> {createBox} </ul>
      <p> your text contains {props.length} words</p>
    </div>
  );
}

export default Validation;
