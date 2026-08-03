"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoDocumentText } from "react-icons/io5";
import Magnetic from "../Magnetic";
import { useEffect, useState } from "react";
const Footer = () => {
  const [currentYear, setCurrentYear] = useState(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

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
    {
      id: 4,
      icon: <IoDocumentText size={20} />,
      link: "/resume.pdf",
    },
  ];
  return (
    <div className="text-center font-montserrat text-white hidden sm:block px-4 sm:px-0">
      <p className="text-2xl ">Get In Touch</p>
      <p className="text-sm text-gray-300 mt-1">
        Let's turn your vision into reality. Reach out and let's start building
        something extraordinary together.
      </p>

      <div className="flex gap-5 justify-center mt-4">
        {buttonsList.map((button, index) => (
          <Magnetic key={button.id} strength={0.4}>
            <Link
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
                className="flex items-center gap-x-2 text-white rounded-2xl hover:text-[#ddddc3] cursor-pointer"
              >
                {button.icon}
              </motion.button>
            </Link>
          </Magnetic>
        ))}
      </div>

      <hr className="w-1/2 mx-auto my-3 border-gray-100 opacity-50" />
      <p className="text-gray-400 text-sm">
        © {currentYear ?? 2026} Wissem Jderi. All rights reserved.
      </p>

      <button
        type="button"
        onClick={() =>
          window.dispatchEvent(
            new KeyboardEvent("keydown", { key: "k", ctrlKey: true }),
          )
        }
        title="Open command palette"
        className="mx-auto mt-3 flex items-center gap-2 rounded-sm border border-white/10 bg-[#3a3a35] px-2.5 py-1.5 text-xs text-gray-400 transition-colors hover:border-[#ddddc3]/50 hover:text-[#ddddc3]"
      >
        <span className="font-mono text-[10px]">Ctrl K</span>
      </button>
    </div>
  );
};

export default Footer;
