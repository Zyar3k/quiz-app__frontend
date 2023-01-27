import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useFetchQuestions } from "../hooks/FetchQuestions";
import { updateResult } from "../hooks/setResult";

const Questions = ({ onChecked }) => {
  const [checked, setChecked] = useState(undefined);
  const dispatch = useDispatch();
  const [{ isLoading, serverError }] = useFetchQuestions();
  const result = useSelector((state) => state.result.result);
  const { trace } = useSelector((state) => state.questions);
  const questions = useSelector(
    (state) => state.questions.queue[state.questions.trace]
  );

  useEffect(() => {
    dispatch(updateResult({ trace, checked }));
  }, [checked]);

  function onSelect(e) {
    onChecked(e);
    setChecked(e);
  }

  if (isLoading) return <h3 className="text-light">Loading...</h3>;
  if (serverError)
    return <h3 className="text-light">{serverError || "Unknown error"}</h3>;

  return (
    <div className="questions">
      <h2 className="text-light">{questions?.question}</h2>
      <ul key={questions?.id}>
        {questions?.options.map((q, i) => (
          <li key={i}>
            <input
              type="radio"
              value={checked}
              name="options"
              id={`q${i}-option`}
              onChange={() => onSelect(i)}
            />
            <label className="text-light" htmlFor={`q${i}-option`}>
              {q}
            </label>
            <div
              className={`check ${result[trace] == i ? "checked" : ""}`}
            ></div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Questions;
