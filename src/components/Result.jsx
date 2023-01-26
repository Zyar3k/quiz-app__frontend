import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  attempts_Number,
  earnPoints_Number,
  flagResult,
} from "../helper/helper";
import { resetAllAction } from "../redux/question_reducer";
import { resetResultAction } from "../redux/result_reducer";

import ResultTable from "./ResultTable";

const Result = () => {
  const dispatch = useDispatch();
  const {
    questions: { queue, answers },
    result: { result, userId },
  } = useSelector((state) => state);

  const totalPoints = queue.length * 10;
  const attempts = attempts_Number(result);
  const earnPoints = earnPoints_Number(result, answers, 10);
  const flag = flagResult(totalPoints, earnPoints);

  function onRestart() {
    dispatch(resetAllAction());
    dispatch(resetResultAction());
  }
  return (
    <div className="container">
      <h1 className="title">Quiz App</h1>

      <div className="result">
        <div>
          <span>username</span>
          <span>Alice</span>
        </div>
        <div>
          <span>Total Quiz Points :</span>
          <span>{totalPoints || 0}</span>
        </div>
        <div>
          <span>Total Questions :</span>
          <span>{queue.length || 0}</span>
        </div>
        <div>
          <span>Total Attempts :</span>
          <span>{attempts || 0}</span>
        </div>
        <div>
          <span>Total earn points :</span>
          <span>{earnPoints || 0}</span>
        </div>
        <div>
          <span>Quiz result</span>
          <span>{flag ? "Passed" : "Failed"}</span>
        </div>
      </div>

      <div className="start">
        <Link to={"/"} onClick={onRestart}>
          Restart
        </Link>
      </div>

      <div className="container">
        <ResultTable />
      </div>
    </div>
  );
};

export default Result;
