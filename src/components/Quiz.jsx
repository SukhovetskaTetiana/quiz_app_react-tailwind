import { useState } from "react";
import QUESTIONS from "../questions.js";

export default function Quis() {
  const [userAnswer, setUserAnswer] = useState([]);

  const activeIndexQuestion = userAnswer.length;

  const handleAnswerClick = (selectAnswer) => {
    setUserAnswer((prevAnswer) => {
      return [...prevAnswer, selectAnswer];
    });
  };

  const buttonClasses =
    "inline-block w-[100%] h-[10%] size-[0.9rem] py-[0.5rem] px-[2rem] rounded-3xl bg-gradient-to-b from-blau-100 to-blau-200 cursor-pointer transition-all duration-200 ease-in-out hover:from-pink hover:to-blau-700 hover:text-white";

  const quizContainerClasses =
    "max-w-[50rem] m-auto p-[2rem] bg-gradient-to-r from-blau-800 from-[0%] via-blau-900 via-[100%] rounded-lg shadow-sm text-center";

  return (
    <div className={quizContainerClasses}>
      <div className="question">
        <h2 className="text-2xl font-normal mx-0 mt-2 mb-10 text-white">
          {QUESTIONS[activeIndexQuestion].text}
        </h2>
      </div>
      <div className="list-none m-0 p-0 flex flex-col items-center gap-2">
        <ul>
          {QUESTIONS[activeIndexQuestion].answers.map((answer) => (
            <li key={answer} className="w-[90%] mx-auto my-[1rem]">
              <button
                onClick={() => handleAnswerClick(answer)}
                className={buttonClasses}
              >
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
