import { useState } from "react";
import Header from "./components/Header";
import StartScreen from "./feature/start/StartScreen";
import QuizScreen from "./feature/quiz/QuizScreen";
import ScoreScreen from "./feature/score/ScoreScreen";

function App() {
  const [screen, setScreen] = useState("start");

  return (
    <div>
      <Header quizStarted={screen === "quiz" || screen === "score"} />

      <main>
        {screen === "start" && <StartScreen startQuiz={() => setScreen("quiz")} />}
        {screen === "quiz" && <QuizScreen endQuiz={() => setScreen("score")} />}
        {screen === "score" && <ScoreScreen goToStart={() => setScreen("start")} />}
      </main>
    </div>
  );
}

export default App;