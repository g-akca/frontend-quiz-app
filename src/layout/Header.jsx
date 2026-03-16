import { useState } from "react";
import darkSunIcon from "/images/icon-sun-dark.svg";
import darkMoonIcon from "/images/icon-moon-dark.svg";
import Switch from "../components/Switch";
import Subject from "../components/Subject";

function Header({ quizStarted, quiz }) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <header className={`px-6 py-4 h-18 flex ${quizStarted ? "justify-between" : "justify-end"}`}>
      {quizStarted && (
        <Subject subject={quiz.title} iconUrl={quiz.icon} iconBgColor={quiz.color} />
      )}

      <div className="flex gap-2 items-center">
        <img src={darkSunIcon} alt="Sun icon" className="w-4" />

        <Switch enabled={darkMode} setEnabled={setDarkMode} />

        <img src={darkMoonIcon} alt="Moon icon" className="w-4" />
      </div>
    </header>
  );
}

export default Header;