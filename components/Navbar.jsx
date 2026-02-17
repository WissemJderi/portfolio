"use client";
const Navbar = () => {
  // The items that will be shown in the navbar
  const navbarItems = [
    "My Projects",
    "About Me",
    "Tech I Use",
    "Hire Me",
    "Certificates",
  ];
  const linkStyle =
    "text-sm text-white sm:text-xl cursor-pointer hover:text-[#ddddc3] font-semibold";

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  const navbarItemsContent = navbarItems.map((item) => (
    <button
      className={linkStyle}
      key={item}
      onClick={() => {
        scrollToSection(item);
      }}
    >
      {item}
    </button>
  ));
  return (
    <div className="text-center flex flex-row justify-center sm:gap-7 gap-2 border-b border-white px-3 py-5 sm:bg-transparent bg-[#111312] fixed sm:relative top-0 z-50 ">
      {navbarItemsContent}
    </div>
  );
};

export default Navbar;
