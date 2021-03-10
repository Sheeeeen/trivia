import React from "react";

function Choice(props) {
  return <button onClick={props.onClick}> {props.text} </button>;
}

export default Choice;
