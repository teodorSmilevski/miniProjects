import { useCallback, useState } from "react";
import QUESTIONS from "./questions";
import Question from "./Question";
import Summary from "./Summary";
export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const currentQuestionIndex = userAnswers.length;

  const isQuizOver = userAnswers.length === QUESTIONS.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer
  ) {
    setUserAnswers((prevAnswers) => {
      return [...prevAnswers, selectedAnswer];
    });
  },
  []);
  const handleSkipQuestion = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );
  if (isQuizOver) {
    return <Summary answers={userAnswers} />;
  }

  return (
    <>
      <Question
        key={currentQuestionIndex}
        index={currentQuestionIndex}
        handleSkipQuestion={handleSkipQuestion}
        handleSelectAnswer={handleSelectAnswer}
      />
    </>
  );
}
