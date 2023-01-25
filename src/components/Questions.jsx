import { useState } from "react";

const Questions = () => {
  const [checked, setChecked] = useState(undefined);

  function onSelect() {
    console.log("radio btn change");
  }
  return (
    <div>
      <h2>Simple question 1</h2>
      <ul>
        <li>
          <input
            type="radio"
            value={checked}
            name="options"
            id="q1-option"
            onChange={onSelect}
          />
          <label htmlFor="q1-option">option</label>
        </li>
      </ul>
    </div>
  );
};

export default Questions;
