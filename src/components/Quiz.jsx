import { useState } from "react";
import QUESTIONS from "../questions.js";
import logoCompleted from "../assets/completed-logo.png";

export default function Quis() {
  const [userAnswer, setUserAnswer] = useState([]);

  const activeIndexQuestion = userAnswer.length;

  const handleAnswerClick = (selectAnswer) => {
    setUserAnswer((prevAnswer) => {
      return [...prevAnswer, selectAnswer];
    });
  };

  const isCompletedAnswers = activeIndexQuestion === QUESTIONS.length;

  if (isCompletedAnswers) {
    return (
      <div className="max-w-2xl my-[2rem] mx-auto p-[2rem] bg-gradient-to-r from-pinkLight-100 from-[0%] via-pinkLight-200 via-[100%] text-[#191321] rounded-lg shadow-xm animate-slide-in-from-bottom">
        <img
          src={logoCompleted}
          alt="The man did the work"
          className="block w-[8rem] h-[8rem] object-contain mt-0 mx-auto mb-[1rem] p-[1rem] drop-shadow-xl border-2 border-blau-800 rounded-full bg-blau-100"
        />
        <h2 className="text-[3rem] text-center m-0 uppercase text-blau-800">
          Quiz Completed!
        </h2>
      </div>
    );
  }

  const shufflingAnswersArray = [...QUESTIONS[activeIndexQuestion].answers];
  shufflingAnswersArray.sort(() => Math.random() - 0.5);

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
          {shufflingAnswersArray.map((answer) => (
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
