import React from "react";
import Options from "./Options";
const Question = ({ question, selectedoption, onoptionchange, onSubmit }) => {
  return (
    <div>
      <h3>{question.id}</h3>
      <h5 className="mt-2">{question.question}</h5>
      <form onSubmit={onSubmit} className="mt-2 mb-2">
        <Options
          options={question.options}
          selectedoption={selectedoption}
          onoptionchange={onoptionchange}
        />
        <button type="submit" className="btn btn-primary mt-2">
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default Question;
