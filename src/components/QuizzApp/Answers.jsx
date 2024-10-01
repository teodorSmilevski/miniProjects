/* eslint-disable react/prop-types */
import { useRef } from "react";

export default function Answers({
  answers,
  selectedAnswer,
  answerState,
  handleSelectAnswer,
}) {
  const shuffledAnswers = useRef();

  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }
  return (
    <ul>
      {shuffledAnswers.current.map((answer) => {
        const isSelected = selectedAnswer === answer;
        let classes;
        if (answerState === "answered" && isSelected) classes = "bg-blue-700";
        else if (answerState === "correct" && isSelected)
          classes = "bg-green-500";
        else if (answerState === "false" && isSelected) classes = "bg-red-500";
        return (
          <li
            key={answer}
            className="mb-2 text-sm text-violet-50 bg-blue-400 p-2 rounded-full bg-opacity-50 hover:bg-violet-500 "
          >
            <button
              onClick={() => handleSelectAnswer(answer)}
              className={classes}
              disabled={answerState !== ""}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
