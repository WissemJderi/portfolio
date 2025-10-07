import MainContent from "./MainContent";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Main = () => {
  return (
    <div className="bg-[#111312] sm:w-2/3 m-auto w-full  shadow-xl/30 shadow-black sm:h-screen">
      {" "}
      <Navbar />
      <div className="sm:grid grid-flow-col grid-col-2 p-3 sm:h-10/12">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
};

export default Main;
