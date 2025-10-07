const Sidebar = () => {
  return (
    <div className="col-span-1 sm:border-r-1 border-gray-700 flex flex-col flex-wrap gap-2 p-10">
      <h1 className="text-center font-bold text-4xl tracking-widest font-[poppins]">
        Wissem Jderi
      </h1>
      <p className="text-center text-md opacity-85 text-indigo-200">
        Full-Stack Developer
      </p>
      <hr className="sm:w-1/2 m-auto mt-2 mb-0.5" />
      <p className="text-2xl text-center font-[poppins]">
        Errors teach. Simplicity endures.
      </p>
    </div>
  );
};

export default Sidebar;
