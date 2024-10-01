/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

export default function QuestionTimer({ timeout, onTimeout }) {
  const [timeInterval, setTimeInterval] = useState(timeout);

  useEffect(() => {
    const timer = setTimeout(onTimeout, timeout);

    return () => {
      clearTimeout(timer);
    };
  }, [timeout, onTimeout]);
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeInterval((oldTime) => oldTime - 100);
    }, 100);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <progress
      max={timeout}
      value={timeInterval}
      className="[&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg   [&::-webkit-progress-bar]:bg-slate-200 [&::-webkit-progress-value]:bg-violet-600 [&::-moz-progress-bar]:bg-violet-600
      [&::-webkit-progress-bar]:h-2
      "
    />
  );
}
