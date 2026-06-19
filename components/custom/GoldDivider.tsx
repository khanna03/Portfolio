/**
 * Thematic Gold Divider Component
 * 
 * An animated horizontal separator inspired by Greek architecture.
 * Features a central geometric emblem flanked by expanding gradient lines.
 * Animates into view as the user scrolls.
 */
"use client";

import { motion } from "framer-motion";

export default function GoldDivider() {
  return (
    <div className="relative w-full flex items-center justify-center my-16 py-4 pointer-events-none select-none">
      {/* Left side thin gold line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="h-[1px] flex-grow bg-gradient-to-r from-transparent via-gold-600/30 to-gold-500/60 origin-right"
      />

      {/* Central ancient Greek architectural emblem (diamond + circles) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mx-4 flex items-center gap-1.5"
      >
        <div className="h-1.5 w-1.5 rotate-45 border border-gold-400 bg-transparent" />
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="stroke-gold-500">
          {/* A clean, minimal Greek geometric key loop */}
          <path
            d="M 2 12 L 8 12 L 8 8 L 16 8 L 16 16 L 12 16 L 12 12"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className="h-1.5 w-1.5 rotate-45 border border-gold-400 bg-transparent" />
      </motion.div>

      {/* Right side thin gold line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="h-[1px] flex-grow bg-gradient-to-l from-transparent via-gold-600/30 to-gold-500/60 origin-left"
      />
    </div>
  );
}
