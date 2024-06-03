import { useState, useEffect } from "react";

export default function QuestionsTimer({ timeout, onTimeout }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    setTimeout(onTimeout, timeout);
  }, [onTimeout, timeout]);

  useEffect(() => {
    setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);
  }, []);

  return (
    <progress
      className="w-1/2 h-2 rounded-full progress-bar m-0"
      max={timeout}
      value={remainingTime}
    />
  );
}
