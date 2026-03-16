import { useState } from "react";
import Header from "./layout/Header";
import StartScreen from "./feature/start/StartScreen";
import QuizScreen from "./feature/quiz/QuizScreen";
import ScoreScreen from "./feature/score/ScoreScreen";

function App() {
  const [screen, setScreen] = useState("start");

  return (
    <div className="min-h-screen bg-grey-50 bg-[url('/images/pattern-background-mobile-light.svg')] bg-cover">
      <Header quizStarted={screen === "quiz" || screen === "score"} />

      <main className="pt-8 px-6">
        {screen === "start" && <StartScreen startQuiz={() => setScreen("quiz")} />}
        {screen === "quiz" && <QuizScreen endQuiz={() => setScreen("score")} />}
        {screen === "score" && <ScoreScreen goToStart={() => setScreen("start")} />}
      </main>
    </div>
  );
}

export default App;