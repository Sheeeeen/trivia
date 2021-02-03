import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";

function App() {
  let questionNo = 0;
  return (
    <div className="app">
      <h1>Trivia!</h1>

      <h4>
        <Question text = {data[questionNo].question.text} choices = {data[questionNo].question.choices} />
      </h4>
      <NextQuestion />
    </div>
  );
}

function Question(props) {
  return ( <div className="Question"> 
  {props.text} 
   
  {
    props.choices.map((choice) => {
      return (
          <p> <Answer text= {choice} /> </p>
        )
      })
  }
    </div>
  )

}

function NextQuestion() {
  return <button> Click Me! </button>;
}

function Answer(props) {
   return (<div> {props.text} </div> );
}

export default App;
