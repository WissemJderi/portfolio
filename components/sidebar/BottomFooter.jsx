"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const BottomFooter = () => {
  const currentYear = new Date().getFullYear();
  const buttonsList = [
    {
      id: 1,
      icon: <FaGithub size={20} />,
      link: "https://github.com/WissemJderi",
    },
    {
      id: 2,
      icon: <FaLinkedin size={20} />,
      link: "https://www.linkedin.com/in/wissem-jderi-a15765386/",
    },
    {
      id: 3,
      icon: <MdEmail size={20} />,
      link: "mailto:wissemjderi@outlook.com",
    },
  ];
  const buttonStyle =
    "flex items-center gap-x-2 bg-gray-900 text-white px-4 py-2 rounded-2xl hover:bg-gray-800 cursor-pointer";

  return (
    <div className="text-center text-white px-4 sm:px-0 sm:hidden block">
      <p className="text-2xl font-poppins">Get In Touch</p>
      <p className="text-sm text-gray-300 mt-1">
        Let's turn your vision into reality. Reach out and let's start building
        something extraordinary together.
      </p>

      <div className="flex gap-5 justify-center mt-4">
        {buttonsList.map((button, index) => (
          <Link
            key={button.id}
            href={button.link}
            rel="noopener noreferrer"
            target="_blank"
          >
            <motion.button
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="flex items-center gap-x-2 text-white rounded-2xl hover:text-gray-800 cursor-pointer"
            >
              {button.icon}
            </motion.button>
          </Link>
        ))}
      </div>

      <hr className="w-1/2 mx-auto my-3 border-gray-100 opacity-50" />
      <p className="text-gray-400 text-sm">
        © {currentYear} Wissem Jderi. All rights reserved.
      </p>
    </div>
  );
};

export default BottomFooter;
