import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";
import Question from "./Question";
import NextQuestion from "./NextQuestion";

function App() {
  let [questionNo, setQuestionNo] = useState(0);
  let [SelectedAnswer, setSelectedAnswer] = useState(false);
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
          setSelectedAnswer={setSelectedAnswer}
          text={data[questionNo].question.text}
          choices={data[questionNo].question.choices}
        />
      </h4>
      {SelectedAnswer === false ? null : (
        <div>
          {SelectedAnswer === correct_choice_index ? (
            <h3>Correct! The answer is {display_answer} </h3>
          ) : (
            <h3> Wrong! The correct answer is {display_answer} </h3>
          )}
        </div>
      )}
      {questionNo === data.length - 1 ? null : (
        <NextQuestion sequence={NumberQuestion} answered={setSelectedAnswer} />
      )}
    </div>
  );
}

export default App;
