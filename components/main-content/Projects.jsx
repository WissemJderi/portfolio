import ProjectCard from "./ProjectCard";
import { myProjects } from "./data/myProjects";
const Projects = ({ sectionStyle, titleStyle }) => {
  const projectCards = myProjects.map((project) => (
    <ProjectCard
      projectName={project.projectName}
      projectDescription={project.projectDescription}
      imageSrc={project.imageSrc}
      imageAlt={project.imageAlt}
      repo={project.repo}
      key={project.projectName}
    />
  ));
  return (
    <section id="My Projects" className={`${sectionStyle}`}>
      <h1 className={`${titleStyle}`}>My Projects:</h1>
      <section className="grid xl:grid-cols-2 grid-cols-1 gap-4">
        {projectCards}
      </section>
    </section>
  );
};

export default Projects;
