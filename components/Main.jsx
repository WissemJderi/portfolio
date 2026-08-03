"use client";
import MainContent from "./MainContent";
import Navbar from "./Navbar";
import Sidebar from "./sidebar/Sidebar";
import ScrollProgress from "./ScrollProgress";
import CommandPalette from "./CommandPalette";
import { motion } from "framer-motion";

const Main = ({ posts }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 90 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="bg-[#111312]/70 bg-opacity-20 sm:w-2/3 m-auto w-full shadow-xl/30 shadow-black sm:h-screen"
      >
        <ScrollProgress />
        <Navbar />
        <div className="sm:grid grid-flow-col grid-cols-3 xl:p-10 p-2 sm:h-10/12">
          <Sidebar />
          <MainContent posts={posts} />
        </div>
      </motion.div>
      <CommandPalette />
    </>
  );
};
export default Main;
