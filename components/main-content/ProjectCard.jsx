import { RiLiveFill } from "react-icons/ri";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const ProjectCard = ({
  projectName,
  subTitle,
  projectDescription,
  imageSrc,
  imageAlt,
  repo,
  liveDemo,
  techStack,
  featured,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="flex flex-col justify-between p-4 bg-[#2d2d33] rounded-sm"
    >
      <div className="relative">
        {featured && (
          <span className="absolute top-2 right-2 z-10 text-xs px-2 py-1 bg-white text-black font-mono rounded-sm">
            Featured
          </span>
        )}
        <Image
          src={`/${imageSrc}`}
          width={500}
          height={300}
          alt={imageAlt}
          className="h-50 mb-4"
        />
      </div>

      <h2 className="md:text-2xl text-sm font-medium flex gap-2">
        {projectName}
      </h2>

      {subTitle ? (
        <p className="text-xs sm:text-sm  italic text-gray-200">{subTitle}</p>
      ) : null}

      <p className="sm:text-lg text-sm">{projectDescription}</p>
      {techStack}
      <div className="flex flex-row gap-2 justify-between mt-2">
        <Link href={liveDemo} target="_blank" rel="noopener noreferrer">
          <span className="sm:text-lg text-sm cursor-pointer font-medium flex gap-2 items-center hover:text-gray-400">
            <RiLiveFill /> Live Demo
          </span>
        </Link>
        <Link href={repo} target="_blank" rel="noopener noreferrer">
          <span className="sm:text-lg text-sm cursor-pointer font-medium flex gap-2 items-center hover:text-gray-400">
            <FaGithub /> View Code
          </span>
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
