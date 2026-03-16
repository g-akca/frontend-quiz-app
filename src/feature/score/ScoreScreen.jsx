import Subject from "/src/components/Subject";
import SubmitButton from "/src/components/SubmitButton";

function ScoreScreen({ resetQuiz, quiz, score }) {
  return (
    <section className="flex flex-col gap-10">
      <h1 className="text-[40px] leading-[100%] font-light">
        <p>Quiz completed</p>
        <p className="mt-2 font-medium">You scored...</p>
      </h1>

      <div className="flex flex-col gap-4">
        <div className="bg-white p-8 flex flex-col gap-4 items-center rounded-xl">
          <Subject subject={quiz.title} iconUrl={quiz.icon} iconBgColor={quiz.color} />

          <div className="text-center flex flex-col items-center gap-4">
            <p className="font-medium text-[88px] leading-[100%]">{score}</p>
            <p className="font-medium text-[18px] text-grey-500 leading-[100%]">out of {quiz.questions.length}</p>
          </div>
        </div>

        <SubmitButton handleClick={resetQuiz}>
          Play Again
        </SubmitButton>
      </div>
    </section>
  )
}

export default ScoreScreen;