import { RiLiveFill } from "react-icons/ri";
import Image from "next/image";
import { FaPython, FaGithub } from "react-icons/fa";
import Link from "next/link";
const ProjectCard = ({
  projectName,
  projectDescription,
  imageSrc,
  imageAlt,
  repo,
}) => {
  return (
    <div className="p-4 bg-gray-900  rounded-2xl ">
      {" "}
      <Image
        src={`/${imageSrc}`}
        width={500}
        height={500}
        alt={imageAlt}
        className="mb-3"
      />
      <h1 className="text-xl font-bold flex gap-2">{projectName}</h1>
      <p className="text-sm">{projectDescription}</p>
      <FaPython color="white" size={20} />
      <div className="flex flex-row gap-2 justify-between mt-2">
        <Link href={repo}>
          <h1 className="text-sm cursor-pointer font-bold flex gap-2 items-center hover:text-gray-400">
            <RiLiveFill /> Live Demo
          </h1>
        </Link>

        <Link href={repo}>
          <h1 className="text-sm cursor-pointer font-bold flex gap-2 items-center hover:text-gray-400">
            <FaGithub /> View Code
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
