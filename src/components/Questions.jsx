import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useFetchQuestions } from "../hooks/FetchQuestions";
import { updateResult } from "../hooks/setResult";

const Questions = ({ onChecked }) => {
  const [checked, setChecked] = useState(undefined);
  const dispatch = useDispatch();
  const [{ isLoading, apiData, serverError }] = useFetchQuestions();

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

  if (isLoading) return <h3>Loading...</h3>;
  if (serverError) return <h3>{serverError || "Unknown error"}</h3>;

  return (
    <div>
      <h2>{questions?.question}</h2>
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
            <label htmlFor={`q${i}-option`}>{q}</label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Questions;
