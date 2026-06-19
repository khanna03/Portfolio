/**
 * Experience Section (Hall of Service)
 * 
 * Displays professional work history and internships in an elegant, alternating timeline layout.
 * Uses Framer Motion to animate entries sequentially as the user scrolls down the timeline.
 */
"use client";

import { Briefcase, Calendar, MapPin } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { experiences } from "@/lib/data";
import SectionWrapper from "@/components/layout/SectionWrapper";

export default function Experience() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <SectionWrapper id="experience" className="relative">
      
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="serif-heading font-semibold text-xs tracking-widest text-gold-500 uppercase mb-3">
          ✦ Hall of Service ✦
        </h2>
        <h3 className="serif-heading font-bold text-3xl md:text-5xl text-ivory">
          Professional Legacy
        </h3>
        <div className="mt-4 flex items-center justify-center gap-1">
          <span className="h-[1px] w-8 bg-gold-600/30" />
          <span className="h-1.5 w-1.5 rotate-45 border border-gold-500" />
          <span className="h-[1px] w-8 bg-gold-600/30" />
        </div>
      </div>

      {/* Experience Timeline Grid */}
      <div className="relative max-w-4xl mx-auto px-4">
        
        {/* Animated Gold Center Line */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-gold-500/80 via-gold-500/40 to-transparent origin-top transform md:-translate-x-1/2"
        />

        {/* Timeline Items */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-12"
        >
          {experiences.map((exp, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div
                key={exp.id}
                className="relative flex flex-col md:flex-row md:justify-between items-start md:items-center"
              >
                {/* Center dot containing index/icon */}
                <div className="absolute left-4 md:left-1/2 h-8 w-8 rounded-full border-2 border-gold-500 bg-obsidian-950 flex items-center justify-center z-10 transform -translate-x-1/2 md:shadow-[0_0_10px_rgba(212,175,55,0.2)]">
                  <Briefcase className="h-3.5 w-3.5 text-gold-400" />
                </div>

                {/* Left Column Spacer / Card */}
                <div className={`w-full md:w-[45%] pl-10 md:pl-0 ${isEven ? "md:order-1" : "md:order-3 md:text-right"}`}>
                  <motion.div
                    variants={cardVariants}
                    className="p-6 rounded bg-obsidian-900 border border-gold-500/10 hover:border-gold-500/30 transition-all duration-300 shadow-xl marble-texture relative"
                  >
                    {/* Small layout details */}
                    <div className="absolute top-2 right-2 flex gap-1">
                      <div className="h-1 w-1 bg-gold-500/20" />
                      <div className="h-1 w-1 bg-gold-500/20" />
                    </div>

                    <div className={`flex flex-col gap-1.5 ${!isEven ? "md:items-end" : ""}`}>
                      
                      {/* Period Badge */}
                      <span className="inline-flex items-center gap-1 text-[10px] font-mono tracking-widest text-gold-400 uppercase">
                        <Calendar className="h-3 w-3" />
                        {exp.period}
                      </span>

                      {/* Role & Company */}
                      <h4 className="serif-heading font-bold text-lg text-ivory">
                        {exp.role}
                      </h4>
                      <h5 className="font-semibold text-sm text-gold-500 uppercase tracking-wide">
                        {exp.company}
                      </h5>

                      {/* Location */}
                      <span className="flex items-center gap-1 text-xs text-parchment/40">
                        <MapPin className="h-3.5 w-3.5 text-gold-500/40" />
                        {exp.location}
                      </span>

                      {/* Bullet points summary */}
                      <ul className={`mt-4 space-y-2.5 text-sm text-parchment/80 ${!isEven ? "md:text-right" : "text-left"}`}>
                        {exp.points.map((point, pIdx) => (
                          <li key={pIdx} className="leading-relaxed flex gap-2 items-start text-xs md:text-sm">
                            {/* Left bullet dot (always visible for even/left-aligned items; hidden on desktop for odd/right-aligned items) */}
                            <span className={isEven ? "text-gold-500 mt-1" : "text-gold-500 mt-1 md:hidden"}>•</span>
                            
                            <span>{point}</span>
                            
                            {/* Right bullet dot (visible on desktop for odd/right-aligned items) */}
                            {!isEven && (
                              <span className="text-gold-500 mt-1 hidden md:inline">•</span>
                            )}
                          </li>
                        ))}
                      </ul>

                      {/* Tech stack badges */}
                      <div className="flex flex-wrap gap-1.5 mt-6 pt-4 border-t border-obsidian-800">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 text-[10px] font-mono bg-obsidian-950 border border-gold-500/10 text-gold-400 rounded-sm hover:border-gold-500/30 hover:text-gold-300 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                    </div>
                  </motion.div>
                </div>

                {/* Right Column Spacer for spacing */}
                <div className={`hidden md:block md:w-[45%] ${isEven ? "md:order-3" : "md:order-1"}`} />
              </div>
            );
          })}
        </motion.div>

      </div>

    </SectionWrapper>
  );
}
