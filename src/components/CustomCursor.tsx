import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 30, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const coreX = useMotionValue(-100);
  const coreY = useMotionValue(-100);
  const coreXSpring = useSpring(coreX, springConfig);
  const coreYSpring = useSpring(coreY, springConfig);

  useEffect(() => {
    // Hide cursor on touch devices
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
      coreX.set(e.clientX - 5);
      coreY.set(e.clientY - 5);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorX, cursorY, coreX, coreY, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer tracking ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-cyan-500/50 pointer-events-none z-50 mix-blend-screen hidden md:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      />
      {/* Inner glowing core */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full pointer-events-none z-50 shadow-[0_0_10px_#3b82f6] hidden md:block"
        style={{
          x: coreXSpring,
          y: coreYSpring,
        }}
      />
    </>
  );
}

