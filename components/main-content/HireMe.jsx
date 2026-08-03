import { motion } from "framer-motion";
import Magnetic from "../Magnetic";
import {
  FaReact,
  FaNodeJs,
  FaCode,
  FaPenNib,
  FaBriefcase,
  FaCube,
  FaWrench,
  FaRocket,
  FaEnvelope,
} from "react-icons/fa";

const services = [
  {
    icon: <FaReact size={28} className="text-blue-400" />,
    title: "Frontend Development",
    description: "Interactive UIs built with React, Next.js, and Tailwind.",
  },
  {
    icon: <FaNodeJs size={28} className="text-[#68A063]" />,
    title: "Backend Development",
    description: "APIs and servers with Node.js, Express, and Python.",
  },
  {
    icon: <FaCode size={28} className="text-white" />,
    title: "Full-Stack Applications",
    description: "From database design to polished UI — shipped end-to-end.",
  },
  {
    icon: <FaPenNib size={28} className="text-yellow-300" />,
    title: "Landing Pages & UI",
    description: "Focused, conversion-ready pages and clean interface work.",
  },
  {
    icon: <FaBriefcase size={28} className="text-gray-300" />,
    title: "Portfolio Websites",
    description: "A site that presents your work the way you want.",
  },
  {
    icon: <FaCube size={28} className="text-purple-400" />,
    title: "Small Web Apps & Tools",
    description: "Dashed-off utilities and mini apps that solve real problems.",
  },
  {
    icon: <FaWrench size={28} className="text-orange-400" />,
    title: "Bug Fixes & Maintenance",
    description: "Fixing issues, upgrading dependencies, keeping things alive.",
  },
  {
    icon: <FaRocket size={28} className="text-cyan-400" />,
    title: "Deployment & Hosting",
    description: "Getting your site from localhost to production, reliably.",
  },
];

const HireMe = ({ sectionStyle, titleStyle }) => {
  return (
    <section id="Hire Me" className={sectionStyle}>
      <h2 className={`${titleStyle} flex items-center gap-3`}>
        Open to Work
        <span className="relative flex h-3 w-3" title="Available for new projects">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
        </span>
      </h2>

      <p className="mb-7">
        Currently accepting freelance work — here's what I can build for you.
      </p>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {services.map((service) => (
          <motion.div
            key={service.title}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="flex gap-4 rounded-sm bg-[#3a3a35] p-4"
          >
            <div className="mt-0.5">{service.icon}</div>
            <div>
              <h3 className="font-semibold text-white">{service.title}</h3>
              <p className="text-sm text-gray-400">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mt-8 rounded-sm bg-[#ddddc3] p-6 text-center text-[#111312]"
      >
        <p className="text-xl font-semibold mb-2">Let's work together</p>
        <p className="mb-5 opacity-80">
          Have a project in mind, or just want to say hi? My inbox is always
          open.
        </p>
        <Magnetic>
          <a
            href="mailto:wissemjderi@outlook.com?subject=Project%20inquiry"
            className="inline-flex items-center gap-2 rounded-sm bg-[#111312] px-6 py-3 font-semibold text-[#ddddc3] transition-colors duration-300 hover:bg-black"
          >
            <FaEnvelope /> Get In Touch
          </a>
        </Magnetic>
      </motion.div>
    </section>
  );
};

export default HireMe;