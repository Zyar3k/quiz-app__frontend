import React from "react";
import Questions from "./Questions";

const Quiz = () => {
  function onNext() {
    console.log("next");
  }
  function onPrev() {
    console.log("prev");
  }
  return (
    <div className="container">
      <h1 className="title">Quiz App</h1>

      <Questions />

      <div>
        <button className="prev" onClick={onPrev}>
          Prev
        </button>
        <button className="next" onClick={onNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Quiz;
