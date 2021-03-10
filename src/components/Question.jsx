import React from "react";
import Choice from "./Choice";

function Question(props) {
  console.log(props);
  return (
    <div className="Question">
      {props.text}

      {props.choices.map((choice, index) => {
        return (
          <p>
            {" "}
            <Choice
              text={choice}
              onClick={() => props.setSelectedAnswer(index)}
            />{" "}
          </p>
        );
      })}
    </div>
  );
}

export default Question;
