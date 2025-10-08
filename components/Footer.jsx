"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const buttonsList = [
    { id: 1, icon: <FaGithub />, link: "https://github.com/WissemJderi" },
    { id: 2, icon: <FaLinkedin />, link: "https://github.com/WissemJderi" },
    { id: 3, icon: <MdEmail />, link: "https://github.com/WissemJderi" },
  ];
  const buttonStyle =
    "flex items-center gap-x-2 bg-gray-900 text-white px-4 py-2 rounded-2xl hover:bg-gray-800 cursor-pointer";
  return (
    <div className="text-center text-white hidden sm:block">
      <p className="text-2xl font-[poppins]">Get In Touch</p>
      <p className="text-sm">
        Let's turn your vision into reality. Reach out and let's start building
        something extraordinary together.
      </p>

      <div className="flex gap-5 justify-center mt-4 ">
        {buttonsList.map((button) => (
          <motion.button
            key={button.id}
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex items-center gap-x-2 bg-gray-900 text-white px-4 py-2 rounded-2xl hover:bg-gray-800 cursor-pointer"
            type=""
          >
            {button.icon}
          </motion.button>
        ))}
      </div>
      <hr className="sm:w-1/2 m-auto my-3 text-gray-500" />
      <p className="text-gray-300">
        {" "}
        © {currentYear} Wissem Jderi. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
