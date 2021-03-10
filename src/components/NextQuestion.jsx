import React from "react";

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

export default NextQuestion;
