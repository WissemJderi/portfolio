// import CurvedLoop from "./CurvedLoop";
import AnimatedName from "./AnimatedName";
import Footer from "./Footer";

const Sidebar = () => {
  return (
    <div className="border-2 sm:border-r-2 border-white col-span-1 flex flex-col justify-between items-center gap-2 p-4 sm:p-6">
      <div className="text-center">
        <AnimatedName />
        <p className="text-md opacity-85 text-indigo-200">
          Full-Stack Web Developer
        </p>
        <hr className="w-1/2 mx-auto mt-2 mb-1" />
      </div>
      <Footer />
    </div>
  );
};

export default Sidebar;
