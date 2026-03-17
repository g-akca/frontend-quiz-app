import errorIcon from "/images/icon-error.svg";

function QuizError() {
  return (
    <div className="flex justify-center items-center gap-2">
      <img src={errorIcon} alt="Error icon" className="w-8 h-8 tablet:w-10 tablet:h-10" />
      <p className="text-red-500 dark:text-white font-medium text-lg leading-[100%] tablet:text-2xl tablet:leading-base tablet:font-normal">Please select an answer</p>
    </div>
  )
}

export default QuizError;