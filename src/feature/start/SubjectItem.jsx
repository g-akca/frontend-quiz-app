import htmlIcon from "/images/icon-html.svg";

function SubjectItem() {
  return (
    <button className="p-4 bg-white rounded-xl flex justify-start gap-4 items-center">
      <div className="bg-orange-50 h-full aspect-square flex justify-center items-center rounded-md">
        <img src={htmlIcon} alt="HTML icon" className="h-7 w-7" />
      </div>

      <p className="font-medium leading-[100%] text-lg">HTML</p>
    </button>
  )
}

export default SubjectItem;