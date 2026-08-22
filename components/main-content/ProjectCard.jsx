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
  priority,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="flex h-full flex-col p-5 bg-[#2d2d33] rounded-sm"
    >
      <div className="relative">
        {imageSrc ? (
          <Image
            src={`/${imageSrc}`}
            width={500}
            height={300}
            alt={imageAlt}
            priority={priority}
            className="mb-5 h-44 w-full rounded-sm object-cover"
          />
        ) : (
          <div
            role="img"
            aria-label={imageAlt}
            className="mb-5 flex h-44 w-full items-center justify-center rounded-sm border border-white/5 bg-[#232329] px-6 text-center font-mono text-sm text-gray-500"
          >
            {projectName}
          </div>
        )}
      </div>

      <h2 className="text-lg font-medium leading-snug text-white">
        {projectName}
      </h2>

      {subTitle ? (
        <span className="mt-1 block text-xs italic text-gray-400">
          {subTitle}
        </span>
      ) : null}

      <p className="mt-3 text-sm leading-relaxed text-gray-300">
        {projectDescription}
      </p>
      <div className="mt-auto pt-4">{techStack}</div>
      {(liveDemo || repo) && (
        <div className="flex flex-row gap-4 justify-between border-t border-white/5 pt-3">
          {liveDemo && (
            <Link href={liveDemo} target="_blank" rel="noopener noreferrer">
              <span className="flex cursor-pointer items-center gap-2 text-sm font-medium hover:text-gray-400">
                <RiLiveFill /> Live Demo
              </span>
            </Link>
          )}
          {repo && (
            <Link href={repo} target="_blank" rel="noopener noreferrer">
              <span className="flex cursor-pointer items-center gap-2 text-sm font-medium hover:text-gray-400">
                <FaGithub /> View Code
              </span>
            </Link>
          )}
        </div>
      )}
    </motion.div>
  );
};

export default ProjectCard;
