import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { useFetchQuestions } from "../hooks/FetchQuestions";

const Questions = () => {
  const [checked, setChecked] = useState(undefined);
  const [{ isLoading, apiData, serverError }] = useFetchQuestions();

  const questions = useSelector(
    (state) => state.questions.queue[state.questions.trace]
  );

  useEffect(() => {
    console.log(questions);
  });

  function onSelect() {
    // console.log("radio btn change");
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
              onChange={onSelect}
            />
            <label htmlFor={`q${i}-option`}>{q}</label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Questions;
