"use client";
import Projects from "./main-content/Projects";
import AboutMe from "./main-content/AboutMe";
import TechStack from "./main-content/TechStack";
import HireMe from "./main-content/HireMe";
import Certificates from "./main-content/Certificates";
import BottomFooter from "./sidebar/BottomFooter";

const MainContent = () => {
  const titleStyle = "text-3xl mb-5 font-bold font-stretch-75% tracking-wide";
  const sectionStyle = "text-white mb-12  bg-black rounded-2xl py-10 px-10";
  return (
    <div className="col-span-2 p-4 overflow-y-[scroll] overflow-x-hidden">
      <Projects sectionStyle={sectionStyle} titleStyle={titleStyle} />
      <AboutMe sectionStyle={sectionStyle} titleStyle={titleStyle} />
      <TechStack sectionStyle={sectionStyle} titleStyle={titleStyle} />
      <HireMe sectionStyle={sectionStyle} titleStyle={titleStyle} />
      <Certificates sectionStyle={sectionStyle} titleStyle={titleStyle} />
      <BottomFooter />
    </div>
  );
};

export default MainContent;
