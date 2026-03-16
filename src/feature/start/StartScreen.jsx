import SubjectItem from "./SubjectItem";

function StartScreen() {
  return (
    <section className="flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        <h1 className="text-[40px] leading-[100%] font-light">
          <p>Welcome to the</p>
          <p className="mt-2 font-medium">Frontend Quiz!</p>
        </h1>

        <p className="italic text-grey-500">Pick a subject to get started.</p>
      </div>

      <div className="flex flex-col gap-4">
        <SubjectItem />
        <SubjectItem />
        <SubjectItem />
        <SubjectItem />
      </div>
    </section>
  )
}

export default StartScreen;