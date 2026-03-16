function Subject({ subject, iconUrl, iconBgColor }) {
  return (
    <div className="flex gap-4 items-center">
      <div className={`${iconBgColor} h-10 w-10 flex justify-center items-center rounded-md`}>
        <img src={iconUrl} alt={`${subject} icon`} className="h-7 w-7" />
      </div>

      <p className="font-medium leading-[100%] text-lg">{subject}</p>
    </div>
  )
}

export default Subject;