import { useEffect } from "react";
import Questions from "./Questions";

import { useSelector } from "react-redux";

const Quiz = () => {
  const state = useSelector((state) => state);

  useEffect(() => {
    console.log(state);
  }, []);
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
