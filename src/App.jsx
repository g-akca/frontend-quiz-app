import { useState } from "react";

function App() {
  const [screen, setScreen] = useState("start");

  return (
    <main>
      {screen === "start" && <StartScreen setScreen={setScreen} />}
      {screen === "quiz" && <QuizScreen setScreen={setScreen} />}
      {screen === "score" && <ScoreScreen setScreen={setScreen} />}
    </main>
  );
}

export default App;