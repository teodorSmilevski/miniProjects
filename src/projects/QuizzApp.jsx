import Header from "../components/QuizzApp/Header";
import Quiz from "../components/QuizzApp/Quiz";

export default function QuizzApp() {
  return (
    <section className="h-screen w-full bg-violet-400 p-5">
      <div className="container w-full mx-auto flex flex-col items-center">
        <Header />
        <main>
          <Quiz />
        </main>
      </div>
    </section>
  );
}
