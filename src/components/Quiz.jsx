import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Questions from "./Questions";
import { MoveNextQuestion, MovePrevQuestion } from "../hooks/FetchQuestions";
import { PushAnswer } from "../hooks/setResult";

const Quiz = () => {
  const [checked, setChecked] = useState(undefined);
  const state = useSelector((state) => state);
  const { trace, queue } = useSelector((state) => state.questions);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("state", state);
  });

  function onNext() {
    if (trace < queue.length) {
      dispatch(MoveNextQuestion());
      dispatch(PushAnswer(checked));
    }
  }
  function onPrev() {
    if (trace > 0) dispatch(MovePrevQuestion());
  }

  function onChecked(check) {
    console.log(check);
    setChecked(check);
  }
  return (
    <div className="container">
      <h1 className="title">Quiz App</h1>

      <Questions onChecked={onChecked} />

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
