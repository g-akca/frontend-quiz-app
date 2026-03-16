import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import darkSunIcon from "/images/icon-sun-dark.svg";
import darkMoonIcon from "/images/icon-moon-dark.svg";
import lightSunIcon from "/images/icon-sun-light.svg";
import lightMoonIcon from "/images/icon-moon-light.svg";

import Switch from "../components/Switch";
import Subject from "../components/Subject";

function Header({ quizStarted, quiz }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const root = document.getElementById("root");

    if (darkMode) {
      root.classList.add("dark");
    }
    else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header className="px-6 py-4 h-18 flex justify-between tablet:px-16 tablet:py-10 tablet:h-34 desktop:px-35 desktop:h-55.5">
      <AnimatePresence>
        {quizStarted && (
          <motion.div
            key="subject"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <Subject subject={quiz.title} iconUrl={quiz.icon} iconBgColor={quiz.color} />
          </motion.div>
        )}
      </AnimatePresence>

      <div className={`flex gap-2 items-center tablet:gap-4 ${quizStarted ? "" : "ml-auto"}`}>
        <img src={darkMode ? lightSunIcon : darkSunIcon} alt="Sun icon" className="w-4 tablet:w-6" />

        <Switch enabled={darkMode} setEnabled={setDarkMode} />

        <img src={darkMode ? lightMoonIcon : darkMoonIcon} alt="Moon icon" className="w-4 tablet:w-6" />
      </div>
    </header>
  );
}

export default Header;