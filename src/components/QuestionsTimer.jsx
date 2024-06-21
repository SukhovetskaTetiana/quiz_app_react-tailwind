import { useState, useEffect } from "react";

export default function QuestionsTimer({ timeout, onTimeout, mode }) {
  const progressCssStyle = "w-1/2 h-2 rounded-full progress-bar m-0";

  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    console.log("setTimeout");
    const timer = setTimeout(onTimeout, timeout);

    return () => {
      clearTimeout(timer);
    };
  }, [onTimeout, timeout]);

  useEffect(() => {
    console.log("setInterval");
    const interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <progress
      className={`${progressCssStyle} ${mode}`}
      max={timeout}
      value={remainingTime}
    />
  );
}
