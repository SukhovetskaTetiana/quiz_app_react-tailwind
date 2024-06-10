import { useState, useCallback } from "react";

import QUESTIONS from "../questions.js";
import QuestionsTimer from "./QuestionsTimer.jsx";
import logoCompleted from "../assets/completed-logo.png";

export default function Quis() {
  const buttonClasses =
    "inline-block w-[100%] h-[10%] size-[0.9rem] py-[0.5rem] px-[2rem] rounded-3xl bg-gradient-to-b from-blau-100 to-blau-200 cursor-pointer transition-all duration-200 ease-in-out hover:from-pink hover:to-blau-700 hover:text-white";

  const quizContainerClasses =
    "max-w-[50rem] m-auto p-[2rem] bg-gradient-to-r from-blau-800 from-[0%] via-blau-900 via-[100%] rounded-lg shadow-sm text-center";

  const divIsCompletedAnswersClasses =
    "max-w-2xl my-[2rem] mx-auto p-[2rem] bg-gradient-to-r from-pinkLight-100 from-[0%] via-pinkLight-200 via-[100%] text-[#191321] rounded-lg shadow-xm animate-slide-in-from-bottom";

  const imgIsCompletedAnswersClasses =
    "block w-[8rem] h-[8rem] object-contain mt-0 mx-auto mb-[1rem] p-[1rem] drop-shadow-xl border-2 border-blau-800 rounded-full bg-blau-100";

  const h2IsCompletedAnswersClasses =
    "text-[3rem] text-center m-0 uppercase text-blau-800";

  const answerCssClass = "w-[90%] my-[1rem] mx-auto";

  const selectedCssClass = "bg-[#f5a76c] text-[#2c203d]";

  const correctCssClass = "bg-[#5af59d] text-[#2c203d]";

  const wrongCssClass = "bg-[#f55a98] text-[#2c203d]";

  const [answerState, setAnswerState] = useState("");
  const [userAnswer, setUserAnswer] = useState([]);
  // const [selectedAnswer, setSelectedAnswer] = useState(null);

  const activeIndexQuestion =
    answerState === "" ? userAnswer.length : userAnswer.length - 1;

  const isCompletedQuiz = activeIndexQuestion === QUESTIONS.length;

  const handleAnswerClick = useCallback(
    function handleAnswerClick(selectedAnswer) {
      // setSelectedAnswer(selectedAnswer);
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
          // setSelectedAnswer(null);
        }, 3000);
      }, 2000);
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

  const shufflingAnswersArray = [...QUESTIONS[activeIndexQuestion].answers];
  shufflingAnswersArray.sort(() => Math.random() - 0.5);

  return (
    <div className={quizContainerClasses}>
      <div className="question">
        <QuestionsTimer
          key={activeIndexQuestion}
          timeout={10000}
          onTimeout={handleSkipAnswers}
        />
        <h2 className="text-2xl font-normal mx-0 mt-2 mb-10 text-white">
          {QUESTIONS[activeIndexQuestion].text}
        </h2>
      </div>
      <div className="list-none m-0 p-0 flex flex-col items-center gap-2">
        <ul>
          {shufflingAnswersArray.map((answer) => {
            const isSelected = userAnswer[userAnswer.length - 1] === answer;
            let answerAdditionalCssClass = "";

            if (answerState === "answered" && isSelected) {
              answerAdditionalCssClass = selectedCssClass;
            }
            if (
              (answerState === correctCssClass ||
                answerState === wrongCssClass) &&
              isSelected
            ) {
              answerAdditionalCssClass = answerState;
            }

            return (
              <li key={answer} className={answerCssClass}>
                <button
                  onClick={() => handleAnswerClick(answer)}
                  className={`${buttonClasses} ${answerAdditionalCssClass}`}
                >
                  {answer}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
