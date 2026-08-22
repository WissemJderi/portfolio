import Image from "next/image";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGitAlt, FaDocker } from "react-icons/fa";

import {
  SiJavascript,
  SiExpress,
  SiNestjs,
  SiMongodb,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";

const TechStack = ({ sectionStyle, titleStyle }) => {
  const techCategories = [
    {
      category: "Languages",
      techs: [
        {
          name: "JavaScript",
          icon: <SiJavascript size={36} className="text-yellow-400" />,
        },
        {
          name: "TypeScript",
          icon: <SiTypescript size={36} className="text-blue-600" />,
        },
        {
          name: "Python",
          icon: (
            <Image
              src="/logos/python.svg"
              alt="Python"
              width={36}
              height={36}
            />
          ),
        },
      ],
    },
    {
      category: "Frontend",
      techs: [
        {
          name: "React",
          icon: <FaReact size={36} className="text-blue-500" />,
        },
        {
          name: "Next.js",
          icon: <SiNextdotjs size={36} className="text-gray-300" />,
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss size={36} className="text-[#38BDF8]" />,
        },
      ],
    },
    {
      category: "Backend",
      techs: [
        {
          name: "Node.js",
          icon: <FaNodeJs size={36} className="text-[#68A063]" />,
        },
        {
          name: "Express",
          icon: <SiExpress size={36} className="text-gray-300" />,
        },
        {
          name: "NestJS",
          icon: <SiNestjs size={36} className="text-[#E0234E]" />,
        },
      ],
    },
    {
      category: "Database",
      techs: [
        {
          name: "PostgreSQL",
          icon: (
            <Image
              src="/logos/postgresql.svg"
              alt="PostgreSQL"
              width={36}
              height={36}
            />
          ),
        },
        {
          name: "MongoDB",
          icon: <SiMongodb size={36} className="text-[#4DB33D]" />,
        },
      ],
    },
    {
      category: "Testing",
      techs: [
        {
          name: "Vitest",
          icon: (
            <Image
              src="/logos/vitest.svg"
              alt="Vitest"
              width={36}
              height={36}
            />
          ),
        },
        {
          name: "Playwright",
          icon: (
            <Image
              src="/logos/playwright.svg"
              alt="Playwright"
              width={36}
              height={36}
            />
          ),
        },
      ],
    },
    {
      category: "Tools",
      techs: [
        {
          name: "Linux",
          icon: (
            <Image src="/logos/linux.svg" alt="Linux" width={36} height={36} />
          ),
        },
        {
          name: "Docker",
          icon: <FaDocker size={36} className="text-[#1D63ED]" />,
        },
        { name: "Git", icon: <FaGitAlt size={36} className="text-red-500" /> },
        {
          name: "Postman",
          icon: (
            <Image
              src="/logos/postman.svg"
              alt="Postman"
              width={36}
              height={36}
            />
          ),
        },
      ],
    },
  ];

  return (
    <section id="Tech I Use" className={sectionStyle}>
      <h2 className={`${titleStyle}`}>Technologies I Use:</h2>
      <p className="mb-7">
        What I work with day to day. I've left off anything I couldn't answer
        questions about.
      </p>

      <div className="grid gap-3 text-white sm:grid-cols-2">
        {techCategories.map((cat) => (
          <motion.div
            key={cat.category}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="rounded-sm bg-[#3a3a35] p-4"
          >
            <h3 className="mb-6 text-xl font-semibold text-white">
              {`${cat.category}:`}
            </h3>
            <div className="flex flex-wrap gap-6">
              {cat.techs.map((tech) => (
                <div
                  key={tech.name}
                  className="group relative flex flex-col items-center transition-transform duration-200 ease-in-out hover:-translate-y-1.5"
                >
                  <div className="transition-transform duration-200 group-hover:scale-105">
                    {tech.icon}
                  </div>
                  <span
                    className="absolute bottom-full mb-2 whitespace-nowrap rounded-sm border border-white/10 bg-black px-2 py-1 text-xs text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100"
                  >
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;