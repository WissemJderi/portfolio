"use client";
import Projects from "./main-content/Projects";
import AboutMe from "./main-content/AboutMe";
import Security from "./main-content/Security";
import TechStack from "./main-content/TechStack";
import OpenToWork from "./main-content/OpenToWork";
import Certificates from "./main-content/Certificates";
import BlogPreview from "./main-content/BlogPreview";
import BottomFooter from "./sidebar/BottomFooter";

const MainContent = ({ posts }) => {
  const titleStyle = "text-3xl mb-5 font-bold font-stretch-75% tracking-wide";
  const sectionStyle = "text-white mb-12  bg-[#1c1c18] py-10 px-10";
  return (
    <div id="main-scroll" className="col-span-2 p-4 overflow-y-[scroll] overflow-x-hidden">
      <Projects sectionStyle={sectionStyle} titleStyle={titleStyle} />
      <Security sectionStyle={sectionStyle} titleStyle={titleStyle} />
      <AboutMe sectionStyle={sectionStyle} titleStyle={titleStyle} />
      <TechStack sectionStyle={sectionStyle} titleStyle={titleStyle} />
      <OpenToWork sectionStyle={sectionStyle} titleStyle={titleStyle} />
      <Certificates sectionStyle={sectionStyle} titleStyle={titleStyle} />
      <BlogPreview posts={posts} sectionStyle={sectionStyle} titleStyle={titleStyle} />
      <BottomFooter />
    </div>
  );
};

export default MainContent;
