import Image from "next/image";
import { FaReact, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";

import {
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiTypescript,
  SiFastapi,
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
        {
          name: "C",
          icon: <Image src="/logos/c.svg" alt="C" width={36} height={36} />,
        },
        {
          name: "Java",
          icon: (
            <Image src="/logos/java.svg" alt="Java" width={36} height={36} />
          ),
        },
      ],
    },
    {
      category: "Backend",
      techs: [
        {
          name: "FastAPI",
          icon: <SiFastapi size={36} className="text-[#14b8a6]" />,
        },
        {
          name: "Node.js",
          icon: <FaNodeJs size={36} className="text-[#68A063]" />,
        },
        {
          name: "Express",
          icon: <SiExpress size={36} className="text-gray-300" />,
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
        // {
        //   name: "Docker",
        //   icon: <FaDocker size={36} className="text-[#1D63ED]" />,
        // },
        { name: "Git", icon: <FaGitAlt size={36} className="text-red-500" /> },
        {
          name: "GitHub",
          icon: <FaGithub size={36} className="text-black" />,
        },
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
        The tools, languages, and frameworks I specialize in to deliver
        efficient solutions.
      </p>

      <div className="grid sm:grid-cols-2 gap-8 text-white">
        {techCategories.map((cat) => (
          <div key={cat.category} className="bg-[#3a3a35] rounded-sm p-5">
            <h3 className="text-xl font-semibold mb-6 text-white">
              {`${cat.category}:`}
            </h3>
            <div className="flex flex-wrap gap-6">
              {cat.techs.map((tech) => (
                <div
                  key={tech.name}
                  className="relative group flex flex-col items-center transition-transform duration-200 hover:-translate-y-1.5 ease-in-out"
                >
                  {tech.icon}
                  <span
                    className="absolute bottom-full mb-2 opacity-0 group-hover:opacity-100 
                                   bg-black text-white text-xs px-2 py-1 rounded transition-opacity 
                                   whitespace-nowrap"
                  >
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
