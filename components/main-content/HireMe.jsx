import { motion } from "framer-motion";
import { FaEnvelope } from "react-icons/fa";

const HireMe = ({ sectionStyle, titleStyle }) => {
  const openForHire = [
    "Frontend Development – React, Next.js, Tailwind",
    "Backend Development – Node.js, Express, Python",
    "Full-Stack Development – Complete Web Applications",
    "Landing Pages & UI/UX Implementation",
    "Portfolio Websites",
    "Small Web Apps / Tools",
    "Bug Fixes & Maintenance",
    "Website Deployment & Hosting",
  ];

  return (
    <section id="Hire Me" className={sectionStyle}>
      <h2 className={`${titleStyle}`}>Open for Hire:</h2>
      <p className="mb-7">
        If my skills can help your project, I’d be glad to contribute.
      </p>
      <ul className="list-disc list-inside space-y-3 text-gray-600">
        {openForHire.map((job, index) => (
          <li
            key={index}
            className="transition-colors bg-[#3a3a35] text-white list-none rounded-sm py-3 px-5"
          >
            {job}
          </li>
        ))}
      </ul>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mt-8 rounded-sm bg-[#3a3a35] p-6 text-center"
      >
        <p className="text-xl font-semibold mb-2">Let's work together</p>
        <p className="text-gray-200 mb-5">
          Have a project in mind, or just want to say hi? My inbox is always
          open.
        </p>
        <a
          href="mailto:wissemjderi@outlook.com?subject=Project%20inquiry"
          className="inline-flex items-center gap-2 rounded-sm bg-[#ddddc3] px-6 py-3 font-semibold text-[#111312] transition-colors duration-300 hover:bg-white"
        >
          <FaEnvelope /> Get In Touch
        </a>
      </motion.div>
    </section>
  );
};

export default HireMe;
