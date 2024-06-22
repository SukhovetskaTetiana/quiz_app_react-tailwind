import { useState, useCallback } from "react";

import QUESTIONS from "../questions.js";
import Question from "./Question.jsx";
import Summary from "./Summary.jsx";

export default function Quis() {
  const quizContainerClasses =
    "max-w-[50rem] m-auto p-[2rem] bg-gradient-to-r from-blau-800 from-[0%] via-blau-900 via-[100%] rounded-lg shadow-sm text-center";

  const [userAnswer, setUserAnswer] = useState([]);

  const activeIndexQuestion = userAnswer.length;

  const isCompletedQuiz = activeIndexQuestion === QUESTIONS.length;

  const handleAnswerClick = useCallback(function handleAnswerClick(
    selectedAnswer
  ) {
    setUserAnswer((prevUserAnswer) => {
      return [...prevUserAnswer, selectedAnswer];
    });
  },
  []);

  const handleSkipAnswers = useCallback(
    () => handleAnswerClick(null),
    [handleAnswerClick]
  );

  if (isCompletedQuiz) {
    return <Summary userAnswer={userAnswer} />;
  }

  return (
    <div className={quizContainerClasses}>
      <Question
        key={activeIndexQuestion}
        index={activeIndexQuestion}
        onSkipAnswer={handleSkipAnswers}
        onSelectAnswer={handleAnswerClick}
      />
    </div>
  );
}
