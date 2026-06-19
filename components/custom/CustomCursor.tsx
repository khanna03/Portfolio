"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 40, stiffness: 400, mass: 0.4 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const innerXSpring = useSpring(cursorX, { damping: 25, stiffness: 600 });
  const innerYSpring = useSpring(cursorY, { damping: 25, stiffness: 600 });

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia("(hover: none)").matches) {
      return;
    }

    setIsVisible(true);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 12);
      cursorY.set(e.clientY - 12);
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    const addHoverListeners = () => {
      document.querySelectorAll("a, button, [role='button'], input, textarea, select, .clickable").forEach((el) => {
        el.addEventListener("mouseenter", () => setIsHovered(true));
        el.addEventListener("mouseleave", () => setIsHovered(false));
      });
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    
    // Initial scan and MutationObserver to hook new elements
    addHoverListeners();
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      observer.disconnect();
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer elegant ring - shaped like a Greek geometric diamond or double circle */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-50 h-6 w-6 rounded-full border border-gold-500/60"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          scale: isClicked ? 0.75 : isHovered ? 1.6 : 1,
          rotate: isHovered ? 45 : 0,
        }}
        transition={{
          rotate: { type: "spring", stiffness: 120, damping: 15 },
          scale: { type: "spring", stiffness: 200, damping: 20 },
        }}
      >
        {/* Greek Motif crosshair inside the outer ring */}
        {isHovered && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-full w-[1px] bg-gold-400/30" />
            <div className="absolute h-[1px] w-full bg-gold-400/30" />
          </div>
        )}
      </motion.div>

      {/* Inner precise dot */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-50 h-2.5 w-2.5 rounded-full bg-gold-500 shadow-[0_0_8px_rgba(212,175,55,0.6)]"
        style={{
          x: innerXSpring,
          y: innerYSpring,
          scale: isClicked ? 1.5 : isHovered ? 0.5 : 1,
        }}
        // Slight offset adjustments to center the dot inside the 24px outer ring
        transformTemplate={({ x, y, scale }) => `translate3d(calc(${x} + 7px), calc(${y} + 7px), 0) scale(${scale})`}
      />
    </>
  );
}
