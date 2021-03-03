import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";

function App() {
  let [questionNo, setQuestionNo] = useState(0);
  let [answered, setIsAnswered] = useState(false);
  let correct_choice_index = data[questionNo].question.correct_choice_index;
  let display_answer = data[questionNo].question.choices[correct_choice_index];

  function NumberQuestion() {
    setQuestionNo(questionNo + 1);
  }

  return (
    <div className="app">
      <h1>Trivia!</h1>
      <h4>
        <Question
          text={data[questionNo].question.text}
          choices={data[questionNo].question.choices}
        />
      </h4>
      <button onClick={() => setIsAnswered(true)}>Answer</button>
      {answered ? <h3>The correct answer is {display_answer} </h3> : ""}
      {questionNo === data.length - 1 ? null : (
        <NextQuestion sequence={NumberQuestion} answered={setIsAnswered} />
      )}
    </div>
  );
}

function Question(props) {
  return (
    <div className="Question">
      {props.text}

      {props.choices.map((choice) => {
        return (
          <p>
            {" "}
            <Choice text={choice} />{" "}
          </p>
        );
      })}
    </div>
  );
}

function NextQuestion(props) {
  return (
    <button
      onClick={() => {
        props.sequence();
        props.answered(false);
      }}
    >
      {" "}
      Click Me!{" "}
    </button>
  );
}

function Choice(props) {
  return <div> {props.text} </div>;
}

export default App;
