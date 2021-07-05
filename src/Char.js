import React from "react";
import "./Char.css";

function Char(props) {
  return (
    <div className="charBox" onclick={props.delete}>
      {props.text}
    </div>
  );
}

export default Char;
