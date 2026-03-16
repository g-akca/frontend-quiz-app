function Subject({ subject, iconUrl, iconBgColor }) {
  return (
    <div className="flex gap-4 items-center tablet:gap-6">
      <div className={`${iconBgColor} h-10 w-10 flex justify-center items-center rounded-md tablet:h-14 tablet:w-14 tablet:rounded-lg`}>
        <img src={iconUrl} alt={`${subject} icon`} className="h-7 w-7 tablet:h-10 tablet:w-10" />
      </div>

      <p className="font-medium leading-[100%] text-lg tablet:text-[28px]">{subject}</p>
    </div>
  )
}

export default Subject;