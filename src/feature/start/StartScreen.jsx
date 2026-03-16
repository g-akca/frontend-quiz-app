import ListItemButton from "/src/components/ListItemButton";
import Subject from "/src/components/Subject";
import data from "/src/data/data.json";

function StartScreen({ startQuiz, setQuiz }) {
  return (
    <section className="flex flex-col gap-10 max-w-7xl tablet:gap-16 desktop:grow desktop:flex-row desktop:gap-32">
      <div className="flex flex-col gap-4 desktop:gap-12">
        <h1 className="text-[40px] leading-[100%] font-light tablet:text-[64px]">
          <p>Welcome to the</p>
          <p className="mt-2 font-medium">Frontend Quiz!</p>
        </h1>

        <p className="italic text-grey-500">Pick a subject to get started.</p>
      </div>

      <div className="grid auto-rows-[72px] gap-4 tablet:auto-rows-[88px] tablet:gap-6 desktop:grow desktop:gap-4 desktop:auto-rows-[104px]">
        {data.quizzes.map(item => (
          <ListItemButton key={item.title} handleClick={() => { setQuiz(item); startQuiz(); }}>
            <Subject subject={item.title} iconUrl={item.icon} iconBgColor={item.color} />
          </ListItemButton>
        ))}
      </div>
    </section>
  )
}

export default StartScreen;