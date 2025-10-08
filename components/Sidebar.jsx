"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import CurvedLoop from "./CurvedLoop";
import SplitText from "./SplitText";

const handleAnimationComplete = () => {
  console.log("All letters have animated!");
};
const currentYear = new Date().getFullYear();

const Sidebar = () => {
  return (
    <div className="col-span-1 sm:border-r-1 border-white flex flex-col justify-between flex-wrap gap-2 p-10">
      <div>
        <h1 className="text-center font-bold text-4xl tracking-widest font-[poppins]">
          <SplitText
            text="Wissem Jderi"
            className="text-4xl text-white h-15 font-semibold text-center"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-200px"
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
          />
        </h1>
        <p className="text-center text-md opacity-85 text-indigo-200">
          Full-Stack Web Developer
        </p>
        <hr className="sm:w-1/2 m-auto mt-2 mb-0.5" />
        <div className="h-10 mt-20">
          <CurvedLoop
            marqueeText="Learn  Build  Serve "
            speed={2}
            curveAmount={0}
            direction="right"
            interactive={true}
            className="h-10"
          />
        </div>
      </div>
      <div className="text-center text-white hidden sm:block">
        <p className="text-2xl font-[poppins]">Get In Touch</p>
        <p className="text-sm">
          Let's turn your vision into reality. Reach out and let's start
          building something extraordinary together.
        </p>
        <div className="flex gap-5 justify-center mt-4 ">
          <motion.button
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex items-center gap-x-2 bg-gray-900 text-white px-4 py-2 rounded-2xl hover:bg-gray-800 cursor-pointer"
            type=""
          >
            <FaGithub />
          </motion.button>
          <motion.button
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex items-center gap-x-2 bg-gray-900 text-white px-4 py-2 rounded-2xl hover:bg-gray-800 cursor-pointer"
            type=""
          >
            <FaLinkedin />{" "}
          </motion.button>
          <motion.button
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex items-center gap-x-2 bg-gray-900 text-white px-4 py-2 rounded-2xl hover:bg-gray-800 cursor-pointer"
            type=""
          >
            <MdEmail />
          </motion.button>
        </div>
        <hr className="sm:w-1/2 m-auto my-3 text-gray-500" />
        <p className="text-gray-500">
          {" "}
          © {currentYear} Wissem Jderi. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
