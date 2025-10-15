import Main from "@/components/Main";
import Squares from "@/components/Squares";

export default function Home() {
  return (
    <div>
      <div className="fixed top-0 left-0 w-full h-screen z-[-1]">
        <div className="absolute inset-0 bg-[#111312]/70"></div>
        <div className="w-full h-full relative">
          <Squares
            speed={0.7}
            squareSize={80}
            direction="down" // up, down, left, right, diagonal
            borderColor="#000"
            hoverFillColor="#222"
          />
        </div>
      </div>
      <Main />
    </div>
  );
}
