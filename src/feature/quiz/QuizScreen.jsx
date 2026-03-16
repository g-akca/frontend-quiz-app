import { useState } from "react";
import ListItemButton from "/src/components/ListItemButton";
import SubmitButton from "/src/components/SubmitButton";
import errorIcon from "/images/icon-error.svg";
import correctIcon from "/images/icon-correct.svg";
import incorrectIcon from "/images/icon-incorrect.svg";

function QuizScreen({ endQuiz, quiz, incrementScore }) {
  const [questionNum, setQuestionNum] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);
  const [error, setError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const totalQuestions = quiz.questions.length;
  const currentQuestion = quiz.questions[questionNum - 1];

  const handleSubmit = () => {
    if (selectedOption === null) {
      setError(true);
      return;
    }

    setError(false);

    if (submitted) {
      if (questionNum < totalQuestions) {
        setQuestionNum(prev => prev + 1);
        setSelectedOption(null);
        setSubmitted(false);
      }
      else {
        endQuiz();
      }

      return;
    }

    const selectedAnswer = currentQuestion.options[selectedOption];

    if (selectedAnswer === currentQuestion.answer) {
      incrementScore();
    }

    setSubmitted(true);
  };

  return (
    <section className="flex flex-col gap-10 desktop:grow desktop:flex-row desktop:gap-32">
      <div className="desktop:w-120 desktop:shrink-0">
        <h2 className="text-grey-500 italic mb-4 tablet:mb-6">Question {questionNum} of {totalQuestions}</h2>
        <p className="text-[20px] leading-[120%] font-medium mb-6 tablet:mb-10 tablet:text-[36px] desktop:mb-46">{currentQuestion.question}</p>

        <div className="h-4 bg-white p-1 rounded-full">
          <div
            className="bg-purple-600 h-full rounded-full transition-all"
            style={{ width: `${(questionNum / totalQuestions) * 100}%` }}
          ></div>
        </div>
      </div>
      
      <div className="flex flex-col gap-4 tablet:gap-8 desktop:grow">
        <div className="grid auto-rows-[72px] gap-4 tablet:gap-6 tablet:auto-rows-[88px] desktop:auto-rows-[104px] desktop:gap-4">
          {currentQuestion.options.map((option, index) => {
            const isSelected = selectedOption === index;
            const isCorrect = option === currentQuestion.answer;

            return (
              <ListItemButton
                key={index}
                handleClick={() => !submitted && setSelectedOption(index)}
                className={`group transition-all
                  ${
                    submitted && isSelected && isCorrect ? "border-3 border-green-500"
                    : submitted && isSelected && !isCorrect ? "border-3 border-red-500"
                    : isSelected ? "border-3 border-purple-600"
                    : !submitted ? "border-3 border-transparent hover:border-purple-600"
                    : "border-3 border-transparent"
                  }
                `}
              >
                <div className="flex gap-4 items-center tablet:gap-8">
                  <div 
                    className={`shrink-0 h-10 w-10 flex justify-center items-center rounded-md transition-all 
                      tablet:h-14 tablet:w-14 tablet:rounded-xl
                      ${
                        submitted && isSelected && isCorrect ? "bg-green-500 text-white"
                        : submitted && isSelected && !isCorrect ? "bg-red-500 text-white"
                        : isSelected ? "bg-purple-600 text-white" 
                        : !submitted ? "bg-grey-50 text-grey-500 group-hover:bg-purple-600 group-hover:text-white"
                        : "bg-grey-50 text-grey-500"
                      }
                    `}
                  >
                    <span className="text-lg font-medium leading-[100%] tablet:text-[28px]">{String.fromCharCode(65 + index)}</span>
                  </div>

                  <p className="font-medium leading-[100%] text-lg text-start tablet:text-[28px]">{option}</p>
                </div>

                {submitted && isCorrect && (
                  <img src={correctIcon} alt="Correct icon" className="w-8 h-8 tablet:w-10 tablet:h-10" />
                )}

                {submitted && isSelected && !isCorrect && (
                  <img src={incorrectIcon} alt="Incorrect icon" className="w-8 h-8 tablet:w-10 tablet:h-10"  />
                )}
              </ListItemButton>
            );
          })}
        </div>

        <SubmitButton
          handleClick={handleSubmit}
          disabled={selectedOption === null && !submitted}
        >
          {submitted && questionNum >= totalQuestions ? "See Results" : submitted ? "Next Question" : "Submit Answer"}
        </SubmitButton>

        {error && (
          <div className="flex justify-center items-center gap-2">
            <img src={errorIcon} alt="Error icon" className="w-8 h-8 tablet:w-10 tablet:h-10" />
            <p className="text-red-500 font-medium text-lg leading-[100%] tablet:text-2xl tablet:leading-base tablet:font-normal">Please select an answer</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default QuizScreen;