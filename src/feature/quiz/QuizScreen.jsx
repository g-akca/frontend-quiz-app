import { useState } from "react";
import ButtonItem from "/src/components/ButtonItem";

function QuizScreen({ endQuiz, quiz }) {
  const [questionNum, setQuestionNum] = useState(1);
  const totalQuestions = quiz.questions.length;
  const currentQuestion = quiz.questions[questionNum - 1];

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
          {currentQuestion.options.map((option, index) => (
            <ButtonItem key={index}>
              <div className="flex gap-4 items-center">
                <div className="shrink-0 bg-grey-50 h-10 w-10 flex justify-center items-center rounded-md">
                  <span className="text-lg font-medium leading-[100%] text-grey-500">{String.fromCharCode(65 + index)}</span>
                </div>

                <p className="font-medium leading-[100%] text-lg text-start">{option}</p>
              </div>
            </ButtonItem>
          ))}
        </div>

        <button className="bg-purple-600 p-4 h-14 text-white text-lg leading-[100%] font-medium rounded-xl">Submit Answer</button>
      </div>
    </section>
  );
}

export default QuizScreen;