"use client";
import { useState } from "react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // The items that will be shown in the navbar
  const navbarItems = ["My Projects", "About Me", "Tech I Use", "Hire Me"];
  const linkStyle = "cursor-pointer";

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
      className="text-sm text-white sm:text-xl cursor-pointer hover:text-[#987CD3] font-[poppins]"
      key={item}
      onClick={() => {
        scrollToSection(item);
      }}
    >
      {item}
    </p>
  ));
  return (
    <div className="text-center flex flex-row justify-center sm:gap-7 gap-4 border-b-1 border-white px-3 py-5 lg:static ">
      {navbarItemsContent}
    </div>
  );
};

export default Navbar;
