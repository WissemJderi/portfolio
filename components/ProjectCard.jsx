import { RiLiveFill } from "react-icons/ri";
import Image from "next/image";
import { FaPython, FaGithub } from "react-icons/fa";
const ProjectCard = () => {
  return (
    <div className="p-4 bg-gray-900  rounded-2xl ">
      {" "}
      <img src={Image} alt="" />
      <Image
        src="/focus_note.png"
        width={500}
        height={500}
        alt="Picture of the author"
        className="mb-3"
      />
      <h1 className="text-xl font-bold flex gap-2">Focus Note </h1>
      <p className="text-sm"> A minimalist note-taking app for the terminal.</p>
      <FaPython color="white" size={20} />
      <div className="flex flex-row gap-2 justify-between mt-2">
        <h1 className="text-sm cursor-pointer font-bold flex gap-2 items-center hover:text-gray-400">
          Live Demo <RiLiveFill />
        </h1>
        <h1 className="text-sm cursor-pointer font-bold flex gap-2 items-center hover:text-gray-400">
          View Code <FaGithub />
        </h1>
      </div>
    </div>
  );
};

export default ProjectCard;
