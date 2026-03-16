import { useState } from "react";
import ButtonItem from "/src/components/ButtonItem";
import errorIcon from "/images/icon-error.svg";

function QuizScreen({ endQuiz, quiz }) {
  const [questionNum, setQuestionNum] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);
  const [error, setError] = useState(false);

  const totalQuestions = quiz.questions.length;
  const currentQuestion = quiz.questions[questionNum - 1];

  const handleSubmit = () => {
    if (selectedOption === null) {
      setError(true);
      return;
    }
  };

  return (
    <section className="flex flex-col gap-10">
      <div>
        <h2 className="text-grey-500 italic mb-4">Question {questionNum} of {totalQuestions}</h2>
        <p className="text-[20px] leading-[120%] font-medium mb-6">{currentQuestion.question}</p>

        <div className="h-4 bg-white p-1 rounded-full">
          <div
            className="bg-purple-600 h-full rounded-full"
            style={{ width: `${(questionNum / totalQuestions) * 100}%` }}
          ></div>
        </div>
      </div>
      
      <div className="flex flex-col gap-4">
        <div className="grid auto-rows-[72px] gap-4">
          {currentQuestion.options.map((option, index) => {
            const isSelected = selectedOption === index;

            return (
              <ButtonItem 
                key={index} 
                handleClick={() => setSelectedOption(index)} 
                className={`group hover:border-purple-600 transition-all 
                  ${isSelected ? "border-3 border-purple-600" : "border-3 border-transparent"}`}
              >
                <div className="flex gap-4 items-center">
                  <div className={`shrink-0 h-10 w-10 flex justify-center items-center rounded-md
                    group-hover:bg-purple-600 group-hover:text-white transition-all
                    ${isSelected ? "bg-purple-600 text-white" : "bg-grey-50 text-grey-500"}`}
                  >
                    <span className="text-lg font-medium leading-[100%]">{String.fromCharCode(65 + index)}</span>
                  </div>

                  <p className="font-medium leading-[100%] text-lg text-start">{option}</p>
                </div>
              </ButtonItem>
            );
          })}
        </div>

        <button
          onClick={handleSubmit}
          className="bg-purple-600 p-4 h-14 
          text-white text-lg leading-[100%] font-medium 
          rounded-xl cursor-pointer transition-all"
        >
          Submit Answer
        </button>

        {error && selectedOption === null && (
          <div className="flex justify-center items-center gap-2">
            <img src={errorIcon} alt="Error icon" className="w-8 h-8" />
            <p className="text-red-500 font-medium text-lg">Please select an answer</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default QuizScreen;