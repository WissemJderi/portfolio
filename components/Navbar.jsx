"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  // The items that will be shown in the navbar
  const navbarItems = [
    { label: "My Projects", id: "My Projects" },
    { label: "Security", id: "Security" },
    { label: "About Me", id: "About Me" },
    { label: "Tech I Use", id: "Tech I Use" },
    { label: "Open to Work", id: "Open to Work" },
    { label: "Certificates", id: "Certificates" },
    { label: "Blog", id: null },
  ];
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    const sectionIds = navbarItems
      .map((item) => item.id)
      .filter(Boolean);
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
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  const navbarItemsContent = navbarItems.map((item) => {
    const isActive = activeId === item.id;
    return (
      <button
        className={`${linkStyle} ${
          isActive ? "text-[#ddddc3]" : "text-white hover:text-[#ddddc3]"
        }`}
        key={item.label}
        onClick={() => {
          if (item.id === null) {
            router.push("/blog");
          } else {
            scrollToSection(item.id);
          }
        }}
      >
        {item.label}
      </button>
    );
  });
  return (
    <div className="text-center flex flex-row flex-wrap justify-center sm:gap-7 gap-x-3 gap-y-1 border-b border-white px-3 py-5 sm:bg-transparent bg-[#111312] fixed sm:relative top-0 z-50 w-full sm:w-auto">
      {navbarItemsContent}
    </div>
  );
};

export default Navbar;
