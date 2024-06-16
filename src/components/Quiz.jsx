import { useState, useCallback } from "react";

import QUESTIONS from "../questions.js";
import Question from "./Question.jsx";
import logoCompleted from "../assets/completed-logo.png";

export default function Quis() {
  const quizContainerClasses =
    "max-w-[50rem] m-auto p-[2rem] bg-gradient-to-r from-blau-800 from-[0%] via-blau-900 via-[100%] rounded-lg shadow-sm text-center";

  const divIsCompletedAnswersClasses =
    "max-w-2xl my-[2rem] mx-auto p-[2rem] bg-gradient-to-r from-pinkLight-100 from-[0%] via-pinkLight-200 via-[100%] text-[#191321] rounded-lg shadow-xm animate-slide-in-from-bottom";

  const imgIsCompletedAnswersClasses =
    "block w-[8rem] h-[8rem] object-contain mt-0 mx-auto mb-[1rem] p-[1rem] drop-shadow-xl border-2 border-blau-800 rounded-full bg-blau-100";

  const h2IsCompletedAnswersClasses =
    "text-[3rem] text-center m-0 uppercase text-blau-800";

  const correctCssClass = "bg-[#5af59d] text-[#2c203d]";

  const wrongCssClass = "bg-[#f55a98] text-[#2c203d]";

  const [answerState, setAnswerState] = useState("");
  const [userAnswer, setUserAnswer] = useState([]);

  const activeIndexQuestion =
    answerState === "" ? userAnswer.length : userAnswer.length - 1;

  const isCompletedQuiz = activeIndexQuestion === QUESTIONS.length;

  const handleAnswerClick = useCallback(
    function handleAnswerClick(selectedAnswer) {
      setAnswerState("answered");

      setUserAnswer((prevUserAnswer) => {
        return [...prevUserAnswer, selectedAnswer];
      });

      setTimeout(() => {
        if (selectedAnswer === QUESTIONS[activeIndexQuestion].answers[0]) {
          setAnswerState(correctCssClass);
        } else {
          setAnswerState(wrongCssClass);
        }

        setTimeout(() => {
          setAnswerState("");
        }, 2000);
      }, 1000);
    },
    [activeIndexQuestion]
  );

  const handleSkipAnswers = useCallback(
    () => handleAnswerClick(null),
    [handleAnswerClick]
  );

  if (isCompletedQuiz) {
    return (
      <div className={divIsCompletedAnswersClasses}>
        <img
          src={logoCompleted}
          alt="The man did the work"
          className={imgIsCompletedAnswersClasses}
        />
        <h2 className={h2IsCompletedAnswersClasses}>Quiz Completed!</h2>
      </div>
    );
  }

  return (
    <div className={quizContainerClasses}>
      <Question
        key={activeIndexQuestion}
        questionText={QUESTIONS[activeIndexQuestion].text}
        answers={QUESTIONS[activeIndexQuestion].answers}
        answerState={answerState}
        selectedAnswer={userAnswer[userAnswer.length - 1]}
        onSkipAnswers={handleSkipAnswers}
        onAnswerClick={handleAnswerClick}
        correctCssClass={correctCssClass}
        wrongCssClass={wrongCssClass}
      />
    </div>
  );
}
