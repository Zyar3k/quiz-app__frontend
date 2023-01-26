import { useEffect } from "react";
import Questions from "./Questions";
import { MoveNextQuestion, MovePrevQuestion } from "../hooks/FetchQuestions";
import { useSelector, useDispatch } from "react-redux";

const Quiz = () => {
  // const trace = useSelector((state) => state.questions.trace);
  const { trace, queue } = useSelector((state) => state.questions);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(trace);
  });

  function onNext() {
    // console.log("next");
    if (trace < queue.length) {
      dispatch(MoveNextQuestion());
    }
  }
  function onPrev() {
    // console.log("prev");
    if (trace > 0) {
      dispatch(MovePrevQuestion());
    }
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
