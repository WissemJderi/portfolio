import CurvedLoop from "./CurvedLoop";
import AnimatedName from "./AnimatedName";
import Footer from "./Footer";

const Sidebar = () => {
  return (
    <div className="col-span-1 sm:border-r-1 border-white flex flex-col justify-between flex-wrap gap-2 p-10">
      <div>
        <AnimatedName />
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
      <Footer />
    </div>
  );
};

export default Sidebar;
