"use client";
import SplitText from "./SplitText";

const AnimatedName = () => {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  return (
    <h1 className="text-center font-bold text-4xl tracking-widest font-[poppins]">
      <SplitText
        text="Wissem Jderi"
        className="text-4xl text-white h-15 font-semibold text-center"
        delay={100}
        duration={0.6}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-200px"
        textAlign="center"
        onLetterAnimationComplete={handleAnimationComplete}
      />
    </h1>
  );
};

export default AnimatedName;
