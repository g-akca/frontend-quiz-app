import Subject from "/src/components/Subject";
import SubmitButton from "/src/components/SubmitButton";

function ScoreScreen({ resetQuiz, quiz, score }) {
  return (
    <section className="flex flex-col gap-10 tablet:gap-16">
      <h1 className="text-[40px] leading-[100%] font-light tablet:text-[64px]">
        <p>Quiz completed</p>
        <p className="mt-2 font-medium tablet:mt-4">You scored...</p>
      </h1>

      <div className="flex flex-col gap-4 tablet:gap-8">
        <div className="bg-white p-8 flex flex-col gap-4 items-center rounded-xl shadow-[0_16px_40px_rgba(143,160,193,0.14)] tablet:gap-10 tablet:p-12 tablet:rounded-3xl">
          <Subject subject={quiz.title} iconUrl={quiz.icon} iconBgColor={quiz.color} />

          <div className="text-center flex flex-col items-center gap-4">
            <p className="font-medium text-[88px] leading-[100%] tablet:text-[144px]">{score}</p>
            <p className="font-medium text-[18px] text-grey-500 leading-[100%] tablet:text-[24px]">out of {quiz.questions.length}</p>
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