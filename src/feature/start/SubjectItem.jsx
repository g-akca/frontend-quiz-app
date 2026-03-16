function SubjectItem({ startQuiz, subject, iconUrl, iconBgColor }) {
  return (
    <button className="p-4 bg-white rounded-xl flex justify-start gap-4 items-center" onClick={startQuiz}>
      <div className={`${iconBgColor} h-full aspect-square flex justify-center items-center rounded-md`}>
        <img src={iconUrl} alt={`${subject} icon`} className="h-7 w-7" />
      </div>

      <p className="font-medium leading-[100%] text-lg">{subject}</p>
    </button>
  )
}

export default SubjectItem;