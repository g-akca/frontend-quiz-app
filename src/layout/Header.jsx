import { useState } from "react";
import darkSunIcon from "/images/icon-sun-dark.svg";
import darkMoonIcon from "/images/icon-moon-dark.svg";
import Switch from "../components/Switch";
import Subject from "../components/Subject";

function Header({ quizStarted, quiz }) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <header 
      className={`px-6 py-4 h-18 flex ${quizStarted ? "justify-between" : "justify-end"} 
        tablet:px-16 tablet:py-10 tablet:h-34 desktop:px-35 desktop:h-55.5`}
    >
      {quizStarted && (
        <Subject subject={quiz.title} iconUrl={quiz.icon} iconBgColor={quiz.color} />
      )}

      <div className="flex gap-2 items-center tablet:gap-4">
        <img src={darkSunIcon} alt="Sun icon" className="w-4 tablet:w-6" />

        <Switch enabled={darkMode} setEnabled={setDarkMode} />

        <img src={darkMoonIcon} alt="Moon icon" className="w-4 tablet:w-6" />
      </div>
    </header>
  );
}

export default Header;