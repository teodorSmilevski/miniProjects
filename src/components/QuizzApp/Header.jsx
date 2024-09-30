import quizLogo from "../../assets/quiz-logo.png";

export default function Header() {
  return (
    <header className="flex flex-col items-center">
      <img src={quizLogo} alt="quiz logo" className="w-[3rem]" />
      <h1 className=" uppercase font-bold  text-4xl text-violet-50 tracking-[.35rem]">
        Quizzy
      </h1>
    </header>
  );
}
