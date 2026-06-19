/**
 * Reusable Section Wrapper Component
 * 
 * Standardizes the layout structure (margins, padding, max-width) for all major page sections.
 * Automatically wraps children in a Framer Motion div for consistent entrance animations, 
 * which can be toggled via the `animate` prop.
 */
"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: ReactNode;
  id: string;
  className?: string;
  animate?: boolean;
}

export default function SectionWrapper({
  children,
  id,
  className,
  animate = true,
}: SectionWrapperProps) {
  if (!animate) {
    return (
      <section
        id={id}
        className={cn(
          "w-full max-w-6xl mx-auto px-6 md:px-8 py-16 md:py-24 scroll-mt-24 relative",
          className
        )}
      >
        {children}
      </section>
    );
  }

  return (
    <section
      id={id}
      className={cn(
        "w-full max-w-6xl mx-auto px-6 md:px-8 py-16 md:py-24 scroll-mt-24 relative",
        className
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </section>
  );
}
