import Main from "@/components/Main";
import Squares from "@/components/Squares";

export default function Home() {
  return (
    <div>
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div style={{ width: "100%", height: "100%", position: "relative" }}>
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
