import ProjectCard from "./ProjectCard";

const MainContent = () => {
  return (
    // no-scrollbar
    <div className="col-span-3 p-10 sm:overflow-y-auto">
      <section className="mb-3">
        <h1 className="text-2xl font-bold font-[poppins]">About Me:</h1>
        <p className="text-md font-[Geist]">
          An explorer in the digital landscape, I navigate complex technical
          terrain to map simpler paths forward. My craft is revealing the
          elegant core within complicated systems—creating solutions that feel
          intuitive while handling the heavy lifting behind the scenes. Every
          unknown challenge is a new frontier to understand and master.
        </p>
      </section>
      <section className="mb-3">
        <h1 className="text-2xl font-bold font-[poppins]">My Porjects:</h1>
        <section className="grid sm:grid-cols-2 gap-4">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </section>
        <section className="mt-3">
          <h1 className="text-2xl font-bold font-[poppins]">Tech Stack</h1>
        </section>
      </section>
    </div>
  );
};

export default MainContent;
