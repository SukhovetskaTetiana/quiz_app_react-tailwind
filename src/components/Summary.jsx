import logoCompleted from "../assets/completed-logo.png";
import QUESTIONS from "../questions.js";

export default function Summary({ userAnswer }) {
  const divIsCompletedAnswersClasses =
    "max-w-2xl my-[2rem] mx-auto p-[2rem] bg-gradient-to-r from-pinkLight-100 from-[0%] via-pinkLight-200 via-[100%] text-[#191321] rounded-lg shadow-xm animate-slide-in-from-bottom";

  const imgIsCompletedAnswersClasses =
    "block w-[8rem] h-[8rem] object-contain mt-0 mx-auto mb-[1rem] p-[1rem] drop-shadow-xl border-2 border-blau-800 rounded-full bg-blau-100";

  const h2IsCompletedAnswersClasses =
    "text-[3rem] text-center m-0 uppercase text-gray-700";

  const summaryStatsClasses =
    "flex gap-[3rem] w-[60%] my-[2rem] mx-auto pb-[2rem] border-b-2 border-gray-700";

  const pClasses = "flex flex-1 flex-col m-0";

  const numberSpanClasses = "font-roboto text-4xl text-gray-700 pb-[1.5rem]";

  const textSpanClasses =
    "font-roboto uppercase text-[0.8rem] text-gray-700 mt-[-0.7rem] ml-[0.2rem] tracking-widest";

  const skippedAnswers = userAnswer.filter((answer) => answer === null);
  const correctAnswers = userAnswer.filter(
    (answer, index) => answer === QUESTIONS[index].answers[0]
  );

  const skipppedAnswersShare = Math.round(
    (skippedAnswers.length / userAnswer.length) * 100
  );
  const correctAnswersShare = Math.round(
    (correctAnswers.length / userAnswer.length) * 100
  );
  const wrongAnswersShare = 100 - skipppedAnswersShare - correctAnswersShare;

  return (
    <div className={divIsCompletedAnswersClasses}>
      <img
        src={logoCompleted}
        alt="The man did the work"
        className={imgIsCompletedAnswersClasses}
      />
      <h2 className={h2IsCompletedAnswersClasses}>Quiz Completed!</h2>
      <div className={summaryStatsClasses}>
        <p className={pClasses}>
          <span className={numberSpanClasses}>{skipppedAnswersShare}%</span>
          <span className={textSpanClasses}>skipped</span>
        </p>
        <p className={pClasses}>
          <span className={numberSpanClasses}>{correctAnswersShare}%</span>
          <span className={textSpanClasses}>answered correctly</span>
        </p>
        <p className={pClasses}>
          <span className={numberSpanClasses}>{wrongAnswersShare}%</span>
          <span className={textSpanClasses}>answered incorrectly</span>
        </p>
      </div>
      <ol className="list-none my-8 mx-auto p-0 text-center">
        {userAnswer.map((answer, index) => {
          let cssClass = "font-roboto my-1 font-bold text-blau-900";

          const correctClass = "text-correctGreen";
          const wrongClass = "text-wrongPink";
          const skippedClass = "text-skippedColor font-normal";

          if (answer === null) {
            cssClass += ` ${skippedClass}`;
          } else if (answer === QUESTIONS[index].answers[0]) {
            cssClass += ` ${correctClass}`;
          } else {
            cssClass += ` ${wrongClass}`;
          }

          return (
            <li key={index} className="my-[0.5rem] mx-0">
              <h3 className="font-roboto text-base m-auto flex justify-center items-center bg-blackBg text-gleyLight w-8 h-8 rounded-full">
                {index + 1}
              </h3>
              <p className="my-1 text-base text-gray-700">
                {QUESTIONS[index].text}
              </p>
              <p className={cssClass}>{answer ?? "Skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
