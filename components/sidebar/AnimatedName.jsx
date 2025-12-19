"use client";
import SplitText from "./SplitText";

const AnimatedName = () => {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  return (
    <h1 className="text-center tracking-wide  text-3xl sm:text-3xl md:text-4xl font-medium text-white">
      <SplitText
        text="Wissem Jderi"
        delay={100}
        duration={0.6}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-200px"
        onLetterAnimationComplete={handleAnimationComplete}
      />
    </h1>
  );
};

export default AnimatedName;
