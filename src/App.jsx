import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Header from "./layout/Header";
import StartScreen from "./feature/start/StartScreen";
import QuizScreen from "./feature/quiz/QuizScreen";
import ScoreScreen from "./feature/score/ScoreScreen";

function App() {
  const [screen, setScreen] = useState("start");
  const [quiz, setQuiz] = useState(null);
  const [score, setScore] = useState(0);

  function resetQuiz() {
    setScreen("start");
    setScore(0);
    setQuiz(null);
  }

  const screenVariants = {
    initial: { x: "-100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 }
  };

  const screenTransition = {
    duration: 0.4,
    ease: "easeInOut"
  };

  return (
    <div 
      className="min-h-screen text-base leading-base text-blue-900 dark:text-white 
      overflow-x-hidden bg-grey-50 dark:bg-blue-900 bg-no-repeat 
      dark:bg-[url('/images/pattern-background-mobile-dark.svg')] bg-[url('/images/pattern-background-mobile-light.svg')]
      tablet:text-[20px] tablet:bg-[url('/images/pattern-background-tablet-light.svg')] tablet:dark:bg-[url('/images/pattern-background-tablet-dark.svg')]
      desktop:bg-cover desktop:bg-[url('/images/pattern-background-desktop-light.svg')] desktop:dark:bg-[url('/images/pattern-background-desktop-dark.svg')]"
    >
      <Header quizStarted={screen === "quiz" || screen === "score"} quiz={quiz} />

      <main className="py-8 px-6 flex justify-center tablet:px-16 tablet:pt-2 tablet:pb-10 desktop:px-35 desktop:pt-0.5 desktop:pb-20">
        <AnimatePresence mode="wait" initial={false}>
          {screen === "start" && (
            <motion.div
              key="start"
              variants={screenVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={screenTransition}
              className="w-full flex justify-center"
            >
              <StartScreen startQuiz={() => setScreen("quiz")} setQuiz={setQuiz} />
            </motion.div>
          )}

          {screen === "quiz" && (
            <motion.div
              key="quiz"
              variants={screenVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={screenTransition}
              className="w-full flex justify-center"
            >
              <QuizScreen
                endQuiz={() => setScreen("score")}
                quiz={quiz}
                incrementScore={() => setScore(prev => prev + 1)}
              />
            </motion.div>
          )}

          {screen === "score" && (
            <motion.div
              key="score"
              variants={screenVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={screenTransition}
              className="w-full flex justify-center"
            >
              <ScoreScreen resetQuiz={resetQuiz} quiz={quiz} score={score} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;