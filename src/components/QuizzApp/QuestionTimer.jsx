/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

export default function QuestionTimer({ timeout, onTimeout }) {
  const [timeInterval, setTimeInterval] = useState(0);

  useEffect(() => {
    console.log("set timeout");

    setTimeout(onTimeout, timeout);
  }, [timeout, onTimeout]);
  useEffect(() => {
    console.log("set interval");
    setInterval(() => {
      setTimeInterval((oldTime) => oldTime + 100);
    }, 100);
  }, []);

  return (
    <progress
      max={timeout}
      value={timeInterval}
      className="[&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg   [&::-webkit-progress-bar]:bg-slate-200 [&::-webkit-progress-value]:bg-violet-600 [&::-moz-progress-bar]:bg-violet-600"
    />
  );
}
