"use client";
import { useEffect, useState } from "react";

const Navbar = () => {
  // The items that will be shown in the navbar
  const navbarItems = [
    "My Projects",
    "About Me",
    "Tech I Use",
    "Hire Me",
    "Certificates",
    "Contact",
  ];
  // Maps nav item labels to the section id they should scroll to
  const sectionIdMap = { Contact: "Hire Me" };
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    const sectionIds = [
      ...new Set(navbarItems.map((item) => sectionIdMap[item] ?? item)),
    ];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const intersecting = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (intersecting.length > 0) {
          setActiveId(intersecting[0].target.id);
        }
      },
      { root: null, rootMargin: "-80px 0px -65% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const linkStyle =
    "text-sm sm:text-xl cursor-pointer font-semibold transition-colors duration-300";

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(
      sectionIdMap[sectionId] ?? sectionId,
    );
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  const navbarItemsContent = navbarItems.map((item) => {
    const sectionId = sectionIdMap[item] ?? item;
    const isActive = activeId === sectionId;
    return (
      <button
        className={`${linkStyle} ${
          isActive ? "text-[#ddddc3]" : "text-white hover:text-[#ddddc3]"
        }`}
        key={item}
        onClick={() => {
          scrollToSection(item);
        }}
      >
        {item}
      </button>
    );
  });
  return (
    <div className="text-center flex flex-row justify-center sm:gap-7 gap-2 border-b border-white px-3 py-5 sm:bg-transparent bg-[#111312] fixed sm:relative top-0 z-50 ">
      {navbarItemsContent}
    </div>
  );
};

export default Navbar;
