"use client";
import Projects from "./main-content/Projects";
import AboutMe from "./main-content/AboutMe";
import TechStack from "./main-content/TechStack";
import HireMe from "./main-content/HireMe";

const MainContent = () => {
  const titleStyle = "text-3xl mb-5 font-bold font-stretch-75% tracking-wide";
  const sectionStyle = "text-white mb-12  bg-black rounded-2xl py-10 px-10";
  return (
    // no-scrollbar
    <div className="border-2 border-white col-span-2 p-4 overflow-y-auto overflow-x-hidden scrollbar-always">
      <Projects sectionStyle={sectionStyle} titleStyle={titleStyle} />
      <AboutMe sectionStyle={sectionStyle} titleStyle={titleStyle} />
      <TechStack sectionStyle={sectionStyle} titleStyle={titleStyle} />
      <HireMe sectionStyle={sectionStyle} titleStyle={titleStyle} />
      {/* <h1>Certificates</h1> */}
      {/* <h1>Dark and light theme</h1> */}
      <button>Download CV</button>
    </div>
  );
};

export default MainContent;
