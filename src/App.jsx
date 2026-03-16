import { useState } from "react";
import Header from "./layout/Header";
import StartScreen from "./feature/start/StartScreen";
import QuizScreen from "./feature/quiz/QuizScreen";
import ScoreScreen from "./feature/score/ScoreScreen";

function App() {
  const [screen, setScreen] = useState("start");
  const [subject, setSubject] = useState(null);

  return (
    <div 
      className="min-h-screen text-base leading-base text-blue-900
      bg-grey-50 bg-cover bg-[url('/images/pattern-background-mobile-light.svg')]"
    >
      <Header quizStarted={screen === "quiz" || screen === "score"} subject={subject} />

      <main className="pt-8 px-6">
        {screen === "start" && <StartScreen startQuiz={() => setScreen("quiz")} setSubject={setSubject} />}
        {screen === "quiz" && <QuizScreen endQuiz={() => setScreen("score")} />}
        {screen === "score" && <ScoreScreen goToStart={() => setScreen("start")} />}
      </main>
    </div>
  );
}

export default App;