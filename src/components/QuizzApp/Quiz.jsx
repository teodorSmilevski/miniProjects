import { useState } from "react";
import QUESTIONS from "./questions";
import quizComplete from "../../assets/quiz-complete.png";
export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const currentQuestionIndex = userAnswers.length;

  const isQuizOver = userAnswers.length === QUESTIONS.length;

  function handleSelectAnswer(selectedAnswer) {
    setUserAnswers((prevAnswers) => {
      return [...prevAnswers, selectedAnswer];
    });
    console.log(userAnswers, selectedAnswer);
  }

  if (isQuizOver) {
    return (
      <div className="mt-10 py-7 bg-violet-600 w-[35rem] flex flex-col items-center gap-3 rounded-3xl bg-opacity-50 shadow-2xl">
        <img
          src={quizComplete}
          alt="quiz is complete"
          className="w-[8rem] bg-violet-400 p-7 rounded-full shadow-2xl"
        />
        <h1 className="text-5xl text-violet-50 font-semibold">
          QUIZ COMPLETED
        </h1>
      </div>
    );
  }
  const shuffledAnswers = [...QUESTIONS[currentQuestionIndex].answers];
  shuffledAnswers.sort(() => Math.random() - 0.5);
  return (
    <div className="mt-10 p-10 rounded-xl bg-violet-500 bg-opacity-40 shadow-2xl min-w-[45rem] min-h-[20rem] text-center min-w-15">
      {/* NOTE: IDEA - switch between questions / if answered right save question and answer / if not end game */}
      <p className="text-xl text-violet-50 font-semibold pb-4">
        {QUESTIONS[currentQuestionIndex].text}
      </p>
      <ul>
        {shuffledAnswers.map((answer) => (
          <li
            key={answer}
            className="mb-2 text-sm text-violet-50 bg-blue-400 p-2 rounded-full bg-opacity-50 hover:bg-violet-500 "
          >
            <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
