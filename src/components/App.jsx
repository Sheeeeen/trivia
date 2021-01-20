import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";

function App() {
  let questionNo = 0;
  return (
    <div className="app">
      <h1>Trivia!</h1>

      <h4>
        <Question text={data[questionNo].question.text} />
      </h4>
      <NextQuestion />
    </div>
  );
}

function Question(props) {
  return <div className="Question"> {props.text} </div>;
}

function NextQuestion() {
  return <button> Click Me! </button>;
}
export default App;
