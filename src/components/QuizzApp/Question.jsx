/* eslint-disable react/prop-types */
import { useState } from "react";

import QUESTIONS from "./questions";

import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";

export default function Question({
  handleSkipQuestion,
  index,
  handleSelectAnswer,
}) {
  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });

  let timer = 10000;

  if (answer.selectedAnswer) timer = 1000;
  if (answer.isCorrect !== null) timer = 2000;
  function onSelectAnswer(answer) {
    setAnswer({ selectedAnswer: answer, isCorrect: null });

    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: answer === QUESTIONS[index].answers[0],
      });

      setTimeout(() => handleSelectAnswer(answer), 2000);
    }, 1000);
  }

  let answerState = "";

  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? "correct" : "false";
  } else if (answer.selectedAnswer) {
    answerState = "answered";
  }

  return (
    <div className="mt-10 p-10 rounded-xl bg-violet-500 bg-opacity-40 shadow-2xl min-w-[45rem] min-h-[20rem] text-center min-w-15">
      <QuestionTimer
        key={timer}
        timeout={timer}
        onTimeout={answer.selectedAnswer === "" ? handleSkipQuestion : null}
      />
      <p className="text-xl text-violet-50 font-semibold pb-4">
        {QUESTIONS[index].text}
      </p>
      <Answers
        answers={QUESTIONS[index].answers}
        selectedAnswer={answer.selectedAnswer}
        answerState={answerState}
        handleSelectAnswer={onSelectAnswer}
      />
    </div>
  );
}
