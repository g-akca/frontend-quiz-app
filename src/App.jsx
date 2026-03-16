import { useState } from "react";
import Header from "./layout/Header";
import StartScreen from "./feature/start/StartScreen";
import QuizScreen from "./feature/quiz/QuizScreen";
import ScoreScreen from "./feature/score/ScoreScreen";

function App() {
  const [screen, setScreen] = useState("start");
  const [quiz, setQuiz] = useState(null);

  return (
    <div 
      className="min-h-screen text-base leading-base text-blue-900
      bg-grey-50 bg-cover bg-[url('/images/pattern-background-mobile-light.svg')]"
    >
      <Header quizStarted={screen === "quiz" || screen === "score"} quiz={quiz} />

      <main className="pt-8 px-6">
        {screen === "start" && <StartScreen startQuiz={() => setScreen("quiz")} setQuiz={setQuiz} />}
        {screen === "quiz" && <QuizScreen endQuiz={() => setScreen("score")} quiz={quiz} />}
        {screen === "score" && <ScoreScreen goToStart={() => setScreen("start")} quiz={quiz} />}
      </main>
    </div>
  );
}

export default App;