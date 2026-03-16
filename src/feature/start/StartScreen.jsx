import StartItem from "./StartItem";
import data from "/src/data/data.json";

function StartScreen({ startQuiz, setQuiz }) {
  return (
    <section className="flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        <h1 className="text-[40px] leading-[100%] font-light">
          <p>Welcome to the</p>
          <p className="mt-2 font-medium">Frontend Quiz!</p>
        </h1>

        <p className="italic text-grey-500">Pick a subject to get started.</p>
      </div>

      <div className="grid auto-rows-[72px] gap-4">
        {data.quizzes.map(item => (
          <StartItem 
            key={item.title} 
            startQuiz={() => { startQuiz(); setQuiz(item); }} 
            subject={item.title} 
            iconUrl={item.icon} 
            iconBgColor={item.color}
          />
        ))}
      </div>
    </section>
  )
}

export default StartScreen;