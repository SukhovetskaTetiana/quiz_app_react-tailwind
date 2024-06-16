import { useRef } from "react";

export default function Answers({
  answers,
  userSelectedAnswer,
  onAnswerClick,
  answerState,
  correctCssClass,
  wrongCssClass,
}) {
  const buttonClasses =
    "inline-block w-[100%] h-[10%] size-[0.9rem] py-[0.5rem] px-[2rem] rounded-3xl bg-gradient-to-b from-blau-100 to-blau-200 cursor-pointer transition-all duration-200 ease-in-out hover:from-pink hover:to-blau-700 hover:text-white";

  const answerCssClass = "w-[90%] my-[0.5rem] mx-auto";

  const selectedCssClass = "bg-[#f5a76c] text-[#2c203d]";

  let shufflingAnswersArray = useRef();

  if (!shufflingAnswersArray.current) {
    shufflingAnswersArray.current = [...answers];
    shufflingAnswersArray.current.sort(() => Math.random() - 0.5);
  }

  return (
    <ul className="list-none m-0 p-0 flex flex-col items-center">
      {shufflingAnswersArray.current.map((answer) => {
        const isSelected = userSelectedAnswer === answer;
        let answerAdditionalCssClass = "";

        if (answerState === "answered" && isSelected) {
          answerAdditionalCssClass = selectedCssClass;
        }
        if (
          (answerState === correctCssClass || answerState === wrongCssClass) &&
          isSelected
        ) {
          answerAdditionalCssClass = answerState;
        }

        return (
          <li key={answer} className={answerCssClass}>
            <button
              onClick={() => onAnswerClick(answer)}
              className={`${buttonClasses} ${answerAdditionalCssClass}`}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
