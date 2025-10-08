"use client";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaDatabase,
  FaLinux,
  FaGithub,
  FaFigma,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiJavascript,
  SiPostgresql,
  SiExpress,
  SiNextdotjs,
  SiTypescript,
} from "react-icons/si";
import OpenForHire from "./OpenForHire";

const MainContent = () => {
  const titleStyle = "text-3xl mb-5 font-bold font-stretch-75% tracking-wide";
  const techCategories = [
    {
      category: "Frontend",
      techs: [
        {
          name: "React",
          icon: <FaReact size={36} className="text-blue-500" />,
        },
        {
          name: "Next.js",
          icon: <SiNextdotjs size={36} className="text-gray-900" />,
        },
        {
          name: "TypeScript",
          icon: <SiTypescript size={36} className="text-blue-600" />,
        },
        {
          name: "JavaScript",
          icon: <SiJavascript size={36} className="text-yellow-400" />,
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss size={36} className="text-teal-400" />,
        },
        // { name: "Next.js",}
      ],
    },
    {
      category: "Backend",
      techs: [
        {
          name: "Node.js",
          icon: <FaNodeJs size={36} className="text-green-500" />,
        },
        {
          name: "Express",
          icon: <SiExpress size={36} className="text-gray-700" />,
        },
        {
          name: "Python",
          icon: <FaPython size={36} className="text-blue-600" />,
        },
      ],
    },
    {
      category: "Database",
      techs: [
        {
          name: "PostgreSQL",
          icon: <SiPostgresql size={36} className="text-blue-700" />,
        },
      ],
    },
    {
      category: "Tools",
      techs: [
        {
          name: "Linux",
          icon: <FaLinux size={36} className="text-black" />,
        },

        { name: "Git", icon: <FaGitAlt size={36} className="text-red-500" /> },

        {
          name: "GitHub",
          icon: <FaGithub size={36} className="text-black" />,
        },
        {
          name: "Figma",
          icon: <FaFigma size={36} className="text-black" />,
        },
      ],
    },
  ];
  const sectionStyle = " text-white mb-12  bg-black rounded-2xl py-10 px-10 ";
  return (
    // no-scrollbar
    <div className="col-span-3 p-10 sm:overflow-y-auto overflow-hidden">
      <section className={`${sectionStyle}`}>
        <h1 className={`${titleStyle}`}>My Projects:</h1>
        <section className="grid sm:grid-cols-2 gap-4">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </section>
      </section>
      <motion.section
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
        className={`${sectionStyle}`}
      >
        <h2 className={`${titleStyle}`}>About Me:</h2>
        <p className="text-gray-200 leading-relaxed mb-6">
          I'm <span className="font-bold">Wissem</span>, a self-taught developer
          who sees programming as more than just writing code;{" "}
          <span className="font-bold">
            it's a way to bring clarity to complexity and turn ideas into
            tangible products
          </span>
          . I believe that software should serve a purpose, be elegant, and have
          clear intention, quietly improving life without creating unnecessary
          noise.
        </p>
        <p className="text-gray-200 leading-relaxed mb-6">
          I strive to create tools that are simple, precise, and
          enduring—products that reflect thought rather than trend.
          <span className="font-bold">
            I prefer elegance over excess, intention over impulse, and
            meaningful experiences over flashy appearances.
          </span>
          Every line of code, every feature, is an opportunity to craft
          something that lasts and makes a subtle but significant difference.
        </p>
        <p className="text-gray-200 leading-relaxed">
          I view development as both a <span className="font-bold">craft</span>{" "}
          and a <span className="font-bold">discipline</span>: a space where
          <span className="font-bold"> logic meets creativity</span>, and
          curiosity meets careful execution. My work is guided by patience,
          thoughtfulness, and a desire to create things that are{" "}
          <span className="font-bold">
            useful, beautiful, and timeless.
          </span>{" "}
        </p>
      </motion.section>

      <section
        id="technologies"
        // className="bg-black max-w-5xl mx-auto px-6 py-10 rounded-2xl text-white"
        className={sectionStyle}
      >
        <h2 className={`${titleStyle}`}>Technologies I Use:</h2>
        <p className="mb-10">
          The tools, languages, and frameworks I specialize in to deliver
          efficient solutions.
        </p>

        <div className="grid gap-8 text-white">
          {techCategories.map((cat) => (
            <div key={cat.category} className="bg-gray-800 rounded-2xl p-5">
              <h3 className="text-xl font-semibold mb-6 text-white">
                {`${cat.category}:`}
              </h3>
              <div className="flex flex-wrap gap-6">
                {cat.techs.map((tech) => (
                  <div
                    key={tech.name}
                    className="relative group flex flex-col items-center"
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
      <section>
        {/* <h1>Open For Hire : and then a list</h1> */}
        {/* <h1>Certificates</h1> */}
        {/* <h1>Dark and light theme</h1> */}
      </section>
      <OpenForHire style={sectionStyle} titleStyle={titleStyle} />
      <button>Download CV</button>
    </div>
  );
};

export default MainContent;
