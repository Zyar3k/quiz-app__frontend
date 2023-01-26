import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { resetAllAction } from "../redux/question_reducer";
import { resetResultAction } from "../redux/result_reducer";

import ResultTable from "./ResultTable";

const Result = () => {
  const dispatch = useDispatch();
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
          <span>88</span>
        </div>
        <div>
          <span>Total Questions :</span>
          <span>8</span>
        </div>
        <div>
          <span>Total Attempts :</span>
          <span>8</span>
        </div>
        <div>
          <span>Total earn points :</span>
          <span>8</span>
        </div>
        <div>
          <span>Quiz result</span>
          <span>Passed</span>
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
