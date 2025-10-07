const ProjectCard = () => {
  return (
    <div className="p-4 bg-black  rounded-2xl ">
      {" "}
      <img
        src="https://cdn.prod.website-files.com/5e3b3ad7af6930fad8539619/5ef14e4bbcf20a0d0a3eca2e_social-1.png"
        alt=""
      />
      <h1>Simple Notes</h1>
      <p>A simple cli app that help you make and delete notes</p>
      <button className="bg-white text-black rounded-4xl px-2 py-1">
        Python
      </button>
    </div>
  );
};

export default ProjectCard;
