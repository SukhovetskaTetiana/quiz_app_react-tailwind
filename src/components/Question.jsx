import QuestionsTimer from "./QuestionsTimer.jsx";
import Answers from "./Answers.jsx";

export default function Question({
  questionText,
  answers,
  answerState,
  selectedAnswer,
  onSkipAnswers,
  onAnswerClick,
  correctCssClass,
  wrongCssClass,
}) {
  const h2CssClasses = "text-2xl font-normal mx-0 mt-2 mb-10 text-white";
  return (
    <>
      <div className="question">
        <QuestionsTimer timeout={10000} onTimeout={onSkipAnswers} />
        <h2 className={h2CssClasses}>{questionText}</h2>
        <Answers
          answers={answers}
          userSelectedAnswer={selectedAnswer}
          onAnswerClick={onAnswerClick}
          answerState={answerState}
          correctCssClass={correctCssClass}
          wrongCssClass={wrongCssClass}
        />
      </div>
    </>
  );
}
