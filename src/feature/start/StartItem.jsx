import Subject from "/src/components/Subject";

function StartItem({ startQuiz, subject, iconUrl, iconBgColor }) {
  return (
    <button className="p-4 bg-white rounded-xl flex justify-start items-center" onClick={startQuiz}>
      <Subject subject={subject} iconUrl={iconUrl} iconBgColor={iconBgColor} />
    </button>
  )
}

export default StartItem;