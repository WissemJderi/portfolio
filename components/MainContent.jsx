import ProjectCard from "./ProjectCard";
import TechStackCard from "./TechStackCard";

const MainContent = () => {
  const sectionStyle = "mb-4  bg-black rounded-2xl py-15 px-10 ";
  return (
    // no-scrollbar
    <div className="col-span-3 p-10 sm:overflow-y-auto ">
      <section className={`${sectionStyle}`}>
        <h1 className="text-2xl font-bold font-[poppins]">About Me:</h1>
        <p className="text-2xl font-[Geist] py-10">
          An explorer in the digital landscape, I navigate complex technical
          terrain to map simpler paths forward. My craft is revealing the
          elegant core within complicated systems—creating solutions that feel
          intuitive while handling the heavy lifting behind the scenes. Every
          unknown challenge is a new frontier to understand and master.
        </p>
      </section>

      <section className={`${sectionStyle}`}>
        <h1 className="text-2xl font-bold font-[poppins]">My Porjects:</h1>
        <section className="grid sm:grid-cols-2 gap-4">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </section>
      </section>
      <section className={`${sectionStyle}`}>
        <h1 className="text-2xl font-bold font-[poppins]">
          Technologies I Use:
        </h1>
        <p>
          The tools, languages, and frameworks I specialize in to deliver
          efficient solutions.
        </p>
        <section className="sm:grid sm:grid-cols-1">
          <TechStackCard />
          <TechStackCard />
        </section>
      </section>
    </div>
  );
};

export default MainContent;
