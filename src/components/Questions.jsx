import { useState, useEffect } from "react";
import data from "../database/data";

const Questions = () => {
  const [checked, setChecked] = useState(undefined);

  function onSelect() {
    console.log("radio btn change");
  }

  const question = data[0];

  useEffect(() => {
    console.log(data);
    console.log(question);
  }, []);

  return (
    <div>
      <h2>{question.question}</h2>
      <ul key={question.id}>
        {question.options.map((q, i) => (
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
