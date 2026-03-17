function QuizProgress({ progress }) {
  return (
    <div className="h-4 bg-white dark:bg-blue-850 p-1 rounded-full">
      <div
        className="bg-purple-600 h-full rounded-full transition-all"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  )
}

export default QuizProgress;