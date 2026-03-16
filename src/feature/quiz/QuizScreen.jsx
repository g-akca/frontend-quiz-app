import { useState } from "react";
import ButtonItem from "/src/components/ButtonItem";

function QuizScreen({ endQuiz, quiz }) {
  const [questionNum, setQuestionNum] = useState(1);

  const currentQuestion = quiz.questions[questionNum - 1];

  return (
    <section className="flex flex-col gap-10">
      <div>
        <h2>Question {questionNum} of {quiz.questions.length}</h2>
        <p>{currentQuestion.question}</p>

        <div></div>
      </div>
      
      <div className="flex flex-col gap-4">
        <div className="grid auto-rows-[72px] gap-4">
          {currentQuestion.options.map((option, index) => (
            <ButtonItem>
              <div className="flex gap-4 items-center">
                <div className="bg-grey-50 h-10 w-10 flex justify-center items-center rounded-md">
                  <span>{String.fromCharCode(65 + index)}</span>
                </div>

                <p className="font-medium leading-[100%] text-lg text-start">{option}</p>
              </div>
            </ButtonItem>
          ))}
        </div>

        <button>Submit Answer</button>
      </div>
    </section>
  );
}

export default QuizScreen;