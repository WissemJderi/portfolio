const Navbar = () => {
  // The items that will be shown in the navbar
  const navbarItems = ["About Me", "Porjects", "Tech Stack", "Blogs", "Values"];
  const linkStyle = "cursor-pointer";
  const navbarItemsContent = navbarItems.map((item) => (
    <p
      className="text-sm sm:text-xl cursor-pointer hover:text-[#987CD3] font-[poppins]"
      key={item}
    >
      {item}
    </p>
  ));
  return (
    <div className="text-center flex flex-row justify-center sm:gap-7 gap-4 border-b-1 border-gray-700 sm:w-2/3 sm:m-auto p-3 pt-7">
      {navbarItemsContent}
    </div>
  );
};

export default Navbar;
