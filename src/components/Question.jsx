import { useState } from "react";
import QuestionsTimer from "./QuestionsTimer.jsx";
import Answers from "./Answers.jsx";
import QUESTIONS from "../questions.js";

export default function Question({ index, onSkipAnswer, onSelectAnswer }) {
  const h2CssClasses = "text-2xl font-normal mx-0 mt-2 mb-10 text-white";

  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });

  let timer = 10000;

  if (answer.selectedAnswer) {
    timer = 1000;
  }

  if (answer.isCorrect !== null) {
    timer = 2000;
  }

  function handleSelectAnswer(answer) {
    setAnswer({
      selectedAnswer: answer,
      isCorrect: null,
    });

    setTimeout(() => {
      const isCorrect = QUESTIONS[index].answers[0] === answer;

      setAnswer({
        selectedAnswer: answer,
        isCorrect,
      });

      setTimeout(() => {
        onSelectAnswer(answer);
      }, 2000);
    }, 1000);
  }

  let answerState = "";

  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  } else if (answer.selectedAnswer) {
    answerState = "answered";
  }
  return (
    <>
      <div className="question">
        <QuestionsTimer
          key={timer}
          timeout={timer}
          onTimeout={answer.selectedAnswer === "" ? onSkipAnswer : null}
          mode={answerState}
        />
        <h2 className={h2CssClasses}>{QUESTIONS[index].text}</h2>
        <Answers
          answers={QUESTIONS[index].answers}
          userSelectedAnswer={answer.selectedAnswer}
          onSelect={handleSelectAnswer}
          answerState={answerState}
        />
      </div>
    </>
  );
}
