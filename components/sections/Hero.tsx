/**
 * Hero Section (Grand Entrance Hall)
 * 
 * The primary landing viewport for the portfolio.
 * Features a grand typographic introduction, subtle background patterns, and floating particles.
 * Establishes the "Apple meets Greek Kingdom" aesthetic immediately upon loading.
 */
"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, FileText, Landmark } from "lucide-react";
import { personalInfo } from "@/lib/data";
import GreekPattern from "@/components/custom/GreekPattern";

const words = [
  "AI / ML Engineer",
  "Deep Learning Researcher",
  "Full Stack Web Architect",
  "Accessibilities Developer"
];

export default function Hero() {
  // Note: useState holds data that changes over time and triggers UI updates.
  // 'index' tracks which word from the 'words' array is currently being displayed.
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleScrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      // Note: 'min-h-screen' ensures the section takes up at least 100% of the viewport height.
      // 'overflow-hidden' prevents decorative background elements from causing unwanted scrollbars.
      className="relative min-h-screen w-full flex flex-col items-center justify-center bg-obsidian-950 px-6 overflow-hidden"
    >
      {/* Background Radial Gold Glow */}
      {/* Note: Tailwind's arbitrary values feature `bg-[...]` lets us write raw CSS.
          We use a radial gradient to create a subtle spotlight effect behind the text. */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.04)_0%,transparent_70%)] pointer-events-none" />

      {/* Ancient Greek Pattern Grid Overlay - Faint */}
      <GreekPattern variant="panel" opacity={0.12} className="absolute inset-0" />

      {/* Decorative Floating Border Frame - Architectural Style */}
      <div className="absolute inset-8 border border-gold-500/10 pointer-events-none md:inset-12 lg:inset-16">
        <GreekPattern variant="corner" opacity={0.25} className="absolute top-0 left-0" />
        <GreekPattern variant="corner" opacity={0.25} className="absolute top-0 right-0 rotate-90" />
        <GreekPattern variant="corner" opacity={0.25} className="absolute bottom-0 left-0 -rotate-90" />
        <GreekPattern variant="corner" opacity={0.25} className="absolute bottom-0 right-0 rotate-180" />
      </div>

      {/* Content Container */}
      <div className="z-10 text-center max-w-4xl flex flex-col items-center justify-center px-4">
        
        {/* Emblem / Monogram */}
        {/* Note: motion.div is a Framer Motion component. 
            'initial' sets the starting state (invisible, slightly shrunk).
            'animate' defines the final state (visible, full size). */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="mb-8 p-3 rounded-full border border-gold-500/30 bg-obsidian-900/60 shadow-[0_0_15px_rgba(212,175,55,0.05)]"
        >
          <Landmark className="h-8 w-8 text-gold-500" />
        </motion.div>

        {/* Small Intro Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold-500/10 bg-obsidian-900/40 text-xs font-semibold tracking-widest text-gold-400 uppercase"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
          Welcome
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <h1 className="serif-heading font-bold text-5xl md:text-7xl lg:text-8xl tracking-tight text-ivory mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-ivory to-parchment">
              Aryan Khanna
            </span>
          </h1>
        </motion.div>

        {/* Subtitle / Animated Typing Text */}
        <div className="h-10 md:h-12 flex items-center justify-center mb-8">
          {/* Note: AnimatePresence allows elements to animate OUT when they are removed from the React DOM.
              By giving motion.div a 'key' of {index}, React knows it's a completely new element when the index changes,
              triggering the 'exit' animation for the old word, and the 'initial' animation for the new word. */}
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="text-gold-400 font-mono text-base md:text-2xl tracking-widest uppercase"
            >
              {words[index]}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="max-w-xl text-parchment/70 text-sm md:text-base leading-relaxed tracking-wide font-sans mb-12"
        >
          {personalInfo.tagline}
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          {/* CTA: Primary */}
          <button
            onClick={handleScrollToAbout}
            className="flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-500 hover:to-gold-400 text-obsidian-950 font-bold uppercase tracking-widest text-xs rounded border border-gold-400/20 hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
          >
            <span>Explore</span>
            <ArrowDown className="h-4 w-4" />
          </button>

          {/* CTA: Secondary */}
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            className="flex items-center justify-center gap-2 px-8 py-3.5 bg-obsidian-900 hover:bg-obsidian-850 hover:text-white text-gold-400 hover:border-gold-400 font-bold uppercase tracking-widest text-xs rounded border border-gold-500/20 transition-all duration-300"
          >
            <FileText className="h-4 w-4" />
            <span>View Resume</span>
          </a>
        </motion.div>

      </div>

      {/* Down Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-8 cursor-pointer flex flex-col items-center gap-2"
        onClick={handleScrollToAbout}
      >
        <span className="text-xs uppercase tracking-widest text-parchment/40">Scroll Down</span>
        <ArrowDown className="h-4 w-4 text-gold-500/50" />
      </motion.div>
    </section>
  );
}
