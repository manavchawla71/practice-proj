import React from "react";
import { useState } from "react";
import qBank from "./../backend/qbank";
import Question from "./Question";
import Score from "./Score";
import "bootstrap/dist/css/bootstrap.min.css";
import "./QuizApp.css";
const QuizApp = () => {
  const [questionbank, setquestionbank] = useState(qBank);
  const [currentquestion, setcurrentquestion] = useState(0);
  const [quizend, setquizend] = useState(false);
  const [score, setscore] = useState(0);
  const [selectedoption, setselectedoption] = useState("");
  const handleoptionchange = (e) => {
    console.log(e);
    setselectedoption(e);
  };
  const handleformsubmit = (e) => {
    e.preventDefault();
    checkanswer();
    handlenextquestion();
  };
  const handlenextquestion = () => {
    if (currentquestion + 1 < qBank.length) {
      setcurrentquestion(currentquestion + 1);
      setselectedoption("");
    } else {
      setquizend(true);
    }
  };
  const checkanswer = () => {
    debugger;
    if (selectedoption == qBank[currentquestion].answer) {
      debugger;
      setscore(score + 1);
      debugger;
    }
  };
  return (
    <div className="App d-flex flex-column align-items-center justify-content-center">
      <h1 className="app-title">QUIZ APP</h1>
      {!quizend ? (
        <Question
          question={qBank[currentquestion]}
          selectedoption={selectedoption}
          onoptionchange={handleoptionchange}
          onSubmit={handleformsubmit}
        />
      ) : (
        <Score
          score={score}
          onNextQuestion={handlenextquestion}
          className="score"
        />
      )}
    </div>
  );
};

export default QuizApp;
