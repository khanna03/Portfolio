/**
 * Skills Section (Arsenal of Knowledge)
 * 
 * Organizes and displays technical proficiencies categorized by domain (e.g., Languages, Frameworks).
 * Renders sleek, modern skill tags or progress bars to highlight technical capabilities.
 */
"use client";

import { motion, Variants } from "framer-motion";
import { skillsData } from "@/lib/data";
import SectionWrapper from "@/components/layout/SectionWrapper";

export default function Skills() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const orbVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <SectionWrapper id="skills" className="relative">
      
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="serif-heading font-semibold text-xs tracking-widest text-gold-500 uppercase mb-3">
          Skills
        </h2>
        <h3 className="serif-heading font-bold text-3xl md:text-5xl text-ivory">
          My Technical Skills
        </h3>
        <div className="mt-4 flex items-center justify-center gap-1">
          <span className="h-[1px] w-8 bg-gold-600/30" />
          <span className="h-1.5 w-1.5 rotate-45 border border-gold-500" />
          <span className="h-[1px] w-8 bg-gold-600/30" />
        </div>
      </div>

      {/* Skills Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {skillsData.map((category) => (
          <div
            key={category.id}
            className="p-6 rounded bg-obsidian-900 border border-gold-500/10 shadow-xl marble-texture flex flex-col gap-6"
          >
            {/* Category Name */}
            <div className="border-b border-obsidian-800 pb-3 flex justify-between items-center">
              <h4 className="serif-heading font-bold text-base text-gold-400 tracking-wide">
                {category.name}
              </h4>
              <span className="h-1 w-1 rounded-full bg-gold-500" />
            </div>

            {/* Category Skills */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              className="flex flex-wrap gap-2.5"
            >
              {category.skills.map((skill) => (
                <motion.div
                  key={skill}
                  variants={orbVariants}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 12px rgba(212, 175, 55, 0.25)",
                    borderColor: "rgba(212, 175, 55, 0.6)",
                  }}
                  className="px-3.5 py-1.5 text-xs font-mono bg-obsidian-950 border border-gold-500/10 text-parchment hover:text-gold-400 rounded-full transition-all duration-300 cursor-default select-none"
                >
                  {skill}
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>

    </SectionWrapper>
  );
}
