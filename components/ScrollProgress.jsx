"use client";
import { useEffect } from "react";
import { motion, useSpring } from "framer-motion";

const ScrollProgress = () => {
  const progress = useSpring(0, { stiffness: 120, damping: 30 });

  useEffect(() => {
    const update = () => {
      const container = document.getElementById("main-scroll");
      const useWindow =
        !container || container.scrollHeight <= container.clientHeight;

      const scrollTop = useWindow
        ? window.scrollY || document.documentElement.scrollTop
        : container.scrollTop;
      const scrollHeight = useWindow
        ? document.documentElement.scrollHeight
        : container.scrollHeight;
      const clientHeight = useWindow
        ? window.innerHeight
        : container.clientHeight;

      const max = scrollHeight - clientHeight;
      progress.set(max > 0 ? Math.min(scrollTop / max, 1) : 0);
    };

    update();
    window.addEventListener("scroll", update, { passive: true, capture: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update, { capture: true });
      window.removeEventListener("resize", update);
    };
  }, [progress]);

  return (
    <motion.div
      style={{ scaleX: progress }}
      className="fixed top-0 left-0 right-0 h-1 origin-left z-[60] bg-[#ddddc3]"
      aria-hidden="true"
    />
  );
};

export default ScrollProgress;
