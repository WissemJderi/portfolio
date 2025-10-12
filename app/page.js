import Main from "@/components/Main";
import MovingSquaresBackground from "@/components/MovingSquaresBackground";
// import Squares from "@/components/Squares";

export default function Home() {
  return (
    <div className="background-color">
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        {/* <div style={{ width: "100%", height: "100%", position: "relative" }}> */}
        {/* <Squares */}
        {/*   speed={0.7} */}
        {/*   squareSize={80} */}
        {/*   direction="down" // up, down, left, right, diagonal */}
        {/*   borderColor="#000" */}
        {/*   hoverFillColor="#222" */}
        {/* /> */}
        {/* </div> */}
        {/* <Aurora */}
        {/*   colorStops={["#613583", "#C0BFBC", "#3D3846"]} */}
        {/*   blend={0.5} */}
        {/*   amplitude={1.0} */}
        {/*   speed={0.8} */}
        {/* /> */}
      </div>
      <Main />

      <MovingSquaresBackground />
    </div>
  );
}
