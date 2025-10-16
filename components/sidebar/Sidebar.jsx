import AnimatedName from "./AnimatedName";
import Footer from "./Footer";
import { motion } from "framer-motion";

const Sidebar = () => {
  return (
    <div className="sm:border-r-1 col-span-1 flex flex-col justify-between items-center gap-2 p-4 sm:p-6">
      <div className="text-center sm:mt-1 mt-20">
        {" "}
        <AnimatedName />
        <p className="text-sm opacity-85 text-indigo-200">
          Full-Stack Web Developer
        </p>
        <motion.div
          animate={{
            scale: 2,
            transition: { duration: 1 },
          }}
        >
          <hr className="w-1/2 mx-auto mt-2 mb-1" />
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Sidebar;
