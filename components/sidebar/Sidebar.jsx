"use client";
import AnimatedName from "./AnimatedName";
import Footer from "./Footer";

const Sidebar = () => {
  return (
    <div className="sm:border-r-1 col-span-1 flex flex-col justify-between items-center gap-2 p-4 sm:p-6">
      <div className="text-center sm:mt-1 mt-20">
        <AnimatedName />
        <p className="text-sm opacity-85 text-[#ddddc3]">
          Full-Stack Web Developer
        </p>
        <hr className="mx-auto my-3 border-gray-100 opacity-30" />
      </div>
      <Footer />
    </div>
  );
};

export default Sidebar;
