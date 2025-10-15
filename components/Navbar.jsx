"use client";
import { useState } from "react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // The items that will be shown in the navbar
  const navbarItems = [
    "My Projects",
    "About Me",
    "Tech I Use",
    "Hire Me",
    "Certificates",
  ];
  const linkStyle =
    "text-sm text-white sm:text-xl cursor-pointer hover:text-[#987CD3] font-[poppins]";

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsOpen(false); // Close mobile menu after clicking
  };
  const navbarItemsContent = navbarItems.map((item) => (
    <p
      className={linkStyle}
      key={item}
      onClick={() => {
        scrollToSection(item);
      }}
    >
      {item}
    </p>
  ));
  return (
    <div className="text-center flex flex-row justify-center sm:gap-7 gap-4 border-b border-white px-3 py-5 bg-[#111312] sticky top-0 z-50 z-50">
      {navbarItemsContent}
    </div>
  );
};

export default Navbar;
