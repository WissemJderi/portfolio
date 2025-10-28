import { RiLiveFill } from "react-icons/ri";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
const ProjectCard = ({
  projectName,
  projectDescription,
  imageSrc,
  imageAlt,
  repo,
  liveDemo,
  techStack,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex flex-col justify-between p-4 bg-gray-900  rounded-2xl "
    >
      <Image
        src={`/${imageSrc}`}
        width={500}
        height={500}
        alt={imageAlt}
        className="mb-4"
      />
      <h1 className="md:text-2xl text-sm font-bold flex gap-2">
        {projectName}
      </h1>
      <p className="sm:text-lg text-sm">{projectDescription}</p>
      {techStack}
      <div className="flex flex-row gap-2 justify-between mt-2">
        <Link href={liveDemo}>
          <h1 className="sm:text-lg text-sm cursor-pointer font-bold flex gap-2 items-center hover:text-gray-400">
            <RiLiveFill /> Live Demo
          </h1>
        </Link>

        <Link href={repo}>
          <h1 className="sm:text-lg text-sm cursor-pointer font-bold flex gap-2 items-center hover:text-gray-400">
            <FaGithub /> View Code
          </h1>
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
