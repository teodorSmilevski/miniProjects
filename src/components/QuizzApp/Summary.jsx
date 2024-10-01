/* eslint-disable react/prop-types */
import quizComplete from "../../assets/quiz-complete.png";
import QUESTIONS from "./questions";
export default function Summary({ answers }) {
  const skippedAnswers = answers.filter((ans) => ans === null);
  const correctAnswers = answers.filter(
    (ans, index) => ans === QUESTIONS[index].answers[0]
  );
  const wrongAnswers = answers.filter(
    (ans, index) => ans !== QUESTIONS[index].answers[0] && ans !== null
  );

  const skippedAnswersShare = Math.round(
    (skippedAnswers.length / answers.length) * 100
  );
  const correctAnswersShare = Math.round(
    (correctAnswers.length / answers.length) * 100
  );
  const wrongAnswersShare = Math.round(
    (wrongAnswers.length / answers.length) * 100
  );

  return (
    <div className="mt-10 py-7 px-5 bg-violet-600 w-[35rem] flex flex-col items-center gap-3 rounded-3xl bg-opacity-50 shadow-2xl text-center">
      <img
        src={quizComplete}
        alt="quiz is complete"
        className="w-[8rem] bg-violet-400 p-7 rounded-full shadow-2xl"
      />
      <h1 className="text-5xl text-violet-50 font-semibold">QUIZ COMPLETED</h1>

      <div className="my-5 w-full flex justify-evenly">
        <p className="flex flex-col w-1/3">
          <span className="text-2xl font-bold text-red-300">
            {skippedAnswersShare}%
          </span>
          <span className="text-lg text-violet-100 font-semibold ">
            Skipped Questions
          </span>
        </p>
        <p className="flex flex-col w-1/3">
          <span className="text-2xl font-bold text-green-500">
            {correctAnswersShare}%
          </span>
          <span className="text-lg text-violet-100 font-semibold ">
            Answered Correctly
          </span>
        </p>
        <p className="flex flex-col w-1/3">
          <span className="text-2xl font-bold text-red-700">
            {wrongAnswersShare}%
          </span>
          <span className="text-lg text-violet-100 font-semibold ">
            Answered Incorrectly
          </span>
        </p>
      </div>
      <ol>
        {answers.map((answer, index) => {
          let cssClass = "";
          if (answer === QUESTIONS[index].answers[0])
            cssClass = "text-green-500";
          else if (answer !== QUESTIONS[index].answers[0] && answer !== null)
            cssClass = "text-red-700";
          else cssClass = "text-red-300";
          return (
            <li key={index}>
              <h3 className="p-1 text-md">{index + 1}</h3>
              <p className="text-xl">{QUESTIONS[index].text}</p>
              <p className={`${cssClass}  font-semibold`}>
                {answer ? answer : "Not answered."}
              </p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
