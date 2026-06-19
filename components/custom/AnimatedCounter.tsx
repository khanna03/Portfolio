"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  value: string; // Target value, e.g. "8.0" or "9"
  duration?: number; // In seconds
}

export default function AnimatedCounter({ value, duration = 1.5 }: AnimatedCounterProps) {
  const [count, setCount] = useState("0");
  const countRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(countRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    const isFloat = value.includes(".");
    const target = parseFloat(value);
    const start = 0;
    const startTime = performance.now();

    let animationFrameId: number;

    const updateCount = (currentTime: number) => {
      const elapsedTime = (currentTime - startTime) / 1000;
      const progress = Math.min(elapsedTime / duration, 1);
      
      // Ease out quad formula
      const easeProgress = progress * (2 - progress);
      const currentVal = start + easeProgress * (target - start);

      if (isFloat) {
        setCount(currentVal.toFixed(1));
      } else {
        setCount(Math.floor(currentVal).toString());
      }

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(updateCount);
      } else {
        setCount(value);
      }
    };

    animationFrameId = requestAnimationFrame(updateCount);

    return () => cancelAnimationFrame(animationFrameId);
  }, [value, duration, isInView]);

  return <span ref={countRef}>{count}</span>;
}
