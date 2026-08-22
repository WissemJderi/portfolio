import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { myProjects } from "./data/myProjects";

const Projects = ({ sectionStyle, titleStyle }) => {
  const [showAll, setShowAll] = useState(false);

  const selected = myProjects.filter((project) => project.featured);
  const rest = myProjects.filter((project) => !project.featured);
  const visible = showAll ? [...selected, ...rest] : selected;

  const projectCards = visible.map((project, index) => (
    <ProjectCard
      projectName={project.projectName}
      subTitle={project.subTitle}
      projectDescription={project.projectDescription}
      imageSrc={project.imageSrc}
      imageAlt={project.imageAlt}
      repo={project.repo}
      liveDemo={project.liveDemo}
      key={project.projectName}
      techStack={project.techStack}
      priority={index === 0}
    />
  ));

  return (
    <section id="My Projects" className={`${sectionStyle}`}>
      <h1 className={`${titleStyle}`}>My Projects:</h1>
      <section className="grid xl:grid-cols-2 grid-cols-1 gap-4">
        {projectCards}
      </section>

      {rest.length > 0 && (
        <button
          type="button"
          onClick={() => setShowAll((previous) => !previous)}
          className="mt-6 w-full rounded-sm border border-white/10 bg-[#3a3a35] px-4 py-3 text-sm text-gray-300 transition-colors hover:border-[#ddddc3]/40 hover:text-[#ddddc3]"
        >
          {showAll ? "Show less" : `Show ${rest.length} earlier projects`}
        </button>
      )}
    </section>
  );
};

export default Projects;
