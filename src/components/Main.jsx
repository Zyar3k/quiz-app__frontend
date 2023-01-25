import React, { useRef } from "react";
import { Link } from "react-router-dom";

const Main = () => {
  const inputRef = useRef();

  return (
    <div className="container">
      <h1 className="title">Quiz App</h1>

      <ol>
        <li>You will be askd 10 questions one after another.</li>
        <li>10 points is awarded for the correct answer.</li>
        <li>
          Each question has three optins. You can choose only one options.
        </li>
        <li>You can review and change answers before the quiz finish.</li>
        <li>The resutl will be declared at the end of the quiz.</li>
      </ol>

      <form id="form">
        <input
          ref={inputRef}
          className="userId"
          type="text"
          placeholder="Username*"
        />
      </form>

      <div className="start">
        <Link className="btn" to={"quiz"}>
          Start Quiz
        </Link>
      </div>
    </div>
  );
};

export default Main;
