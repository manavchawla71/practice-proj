import React from "react";
import { useEffect } from "react";
const Options = ({ options, selectedoption, onoptionchange }) => {
  useEffect(() => {
    console.log(selectedoption);
  }, []);
  return (
    <div>
      {options.map((option, index) => (
        <div key={index} className="form-check">
          <input
            type="radio"
            name="option"
            value={option}
            checked={selectedoption === option}
            onChange={() => onoptionchange(option)}
            className="form-check-input"
          />
          <label className="form-check-label">{option}</label>
        </div>
      ))}
    </div>
  );
};

export default Options;
