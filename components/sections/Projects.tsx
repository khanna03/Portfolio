/**
 * Projects Section (Hall of Innovation)
 * 
 * Showcases major software engineering and AI/ML projects.
 * Renders an interactive bento-grid or card layout with hover effects that reveal technology stacks and links.
 */
"use client";

import { useState } from "react";
import { Github, ExternalLink, X, Compass, Sparkles, AlertCircle, Cpu, BarChart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, Project } from "@/lib/data";
import SectionWrapper from "@/components/layout/SectionWrapper";
import GreekPattern from "@/components/custom/GreekPattern";

export default function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <SectionWrapper id="projects" className="relative">
      
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="serif-heading font-semibold text-xs tracking-widest text-gold-500 uppercase mb-3">
          ✦ Hall of Innovation ✦
        </h2>
        <h3 className="serif-heading font-bold text-3xl md:text-5xl text-ivory">
          The Engineering Archives
        </h3>
        <div className="mt-4 flex items-center justify-center gap-1">
          <span className="h-[1px] w-8 bg-gold-600/30" />
          <span className="h-1.5 w-1.5 rotate-45 border border-gold-500" />
          <span className="h-[1px] w-8 bg-gold-600/30" />
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((project) => (
          {/* LEARNING POINT: 'group' class is a powerful Tailwind feature. 
              We put 'group' on the parent container, and then use 'group-hover:text-gold-400' on a child element inside it. 
              This makes the child element react when you hover anywhere over the *parent* container! */}
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="group flex flex-col justify-between p-6 rounded bg-obsidian-900 border border-gold-500/10 hover:border-gold-500/30 transition-all duration-300 shadow-xl marble-texture relative"
          >
            {/* Greek corner highlight */}
            <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-gold-500/10 group-hover:border-gold-500/30 transition-colors" />

            <div>
              <div className="flex justify-between items-start mb-4">
                <span className="text-[10px] font-mono tracking-widest text-gold-500 uppercase">
                  {project.featured ? "★ Featured Archive" : "Standard Entry"}
                </span>
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-parchment/40 hover:text-gold-400 transition-colors"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                )}
              </div>

              <h4 className="serif-heading font-bold text-xl text-ivory group-hover:text-gold-400 transition-colors mb-3">
                {project.title}
              </h4>

              <p className="text-sm text-parchment/70 leading-relaxed mb-6">
                {project.shortDesc}
              </p>
            </div>

            <div>
              {/* Tech Stack List */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.technologies.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 text-[9px] font-mono bg-obsidian-950 border border-gold-500/5 text-gold-400/80 rounded-sm"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 4 && (
                  <span className="px-2 py-0.5 text-[9px] font-mono bg-obsidian-950 border border-gold-500/5 text-parchment/40 rounded-sm">
                    +{project.technologies.length - 4} more
                  </span>
                )}
              </div>

              {/* View CTA */}
              <button
                onClick={() => setActiveProject(project)}
                className="w-full py-2.5 bg-obsidian-950 hover:bg-gold-500 group-hover:border-gold-500/30 text-gold-500 hover:text-obsidian-950 font-bold uppercase tracking-widest text-[10px] rounded border border-gold-500/10 transition-all duration-300 cursor-pointer text-center"
              >
                View Case Study &rarr;
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Case Study Fullscreen Modal */}
      {/* LEARNING POINT: The modal is only rendered if 'activeProject' is not null. 
          When a user clicks "View Case Study", we set 'activeProject' to that project's data.
          When they click outside or on the 'X', we set it back to null to close the modal. */}
      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.85 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProject(null)}
              className="absolute inset-0 bg-black backdrop-blur-md"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: "spring", damping: 30, stiffness: 220 }}
              className="relative w-full max-w-4xl max-h-[85vh] overflow-y-auto bg-obsidian-900 border border-gold-500/20 rounded shadow-2xl z-10 marble-texture p-6 md:p-10"
            >
              {/* Meander border top */}
              <GreekPattern variant="horizontal" opacity={0.3} className="absolute top-0 left-0 right-0 h-3" />

              {/* Close Button */}
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full border border-gold-500/10 hover:border-gold-500/40 text-parchment/60 hover:text-gold-400 bg-obsidian-950 cursor-pointer transition-colors z-20"
                aria-label="Close modal"
              >
                <X className="h-4.5 w-4.5" />
              </button>

              {/* Case Study Content */}
              <div className="mt-4">
                
                {/* Header Title */}
                <div className="mb-8 border-b border-obsidian-800 pb-6">
                  <span className="text-[10px] font-mono tracking-widest text-gold-400 uppercase">
                    Case Study Record #{activeProject.id.toUpperCase()}
                  </span>
                  <h3 className="serif-heading font-bold text-2xl md:text-4xl text-ivory mt-2">
                    {activeProject.title}
                  </h3>
                  <p className="text-sm text-parchment/60 leading-relaxed mt-2 max-w-2xl">
                    {activeProject.description}
                  </p>

                  <div className="flex gap-4 mt-6">
                    {activeProject.githubUrl && (
                      <a
                        href={activeProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gold-600 hover:bg-gold-500 text-obsidian-950 text-xs font-semibold tracking-wider uppercase rounded transition-colors"
                      >
                        <Github className="h-4 w-4" />
                        <span>Source Code</span>
                      </a>
                    )}
                    {activeProject.demoUrl && (
                      <a
                        href={activeProject.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-obsidian-950 hover:bg-obsidian-850 text-gold-400 border border-gold-500/20 text-xs font-semibold tracking-wider uppercase rounded transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Grid Sections: Problem, Approach, Architecture */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-sm">
                  
                  {/* Problem */}
                  <div className="p-5 rounded bg-obsidian-950 border border-gold-500/5">
                    <div className="flex items-center gap-2 text-gold-500 mb-3 font-semibold uppercase tracking-wider text-xs">
                      <AlertCircle className="h-4 w-4" />
                      <span>The Challenge</span>
                    </div>
                    <p className="text-parchment/80 leading-relaxed text-xs md:text-sm">
                      {activeProject.problem}
                    </p>
                  </div>

                  {/* Approach */}
                  <div className="p-5 rounded bg-obsidian-950 border border-gold-500/5">
                    <div className="flex items-center gap-2 text-gold-500 mb-3 font-semibold uppercase tracking-wider text-xs">
                      <Compass className="h-4 w-4" />
                      <span>The Approach</span>
                    </div>
                    <p className="text-parchment/80 leading-relaxed text-xs md:text-sm">
                      {activeProject.approach}
                    </p>
                  </div>

                  {/* Architecture */}
                  <div className="p-5 rounded bg-obsidian-950 border border-gold-500/5">
                    <div className="flex items-center gap-2 text-gold-500 mb-3 font-semibold uppercase tracking-wider text-xs">
                      <Cpu className="h-4 w-4" />
                      <span>Architecture</span>
                    </div>
                    <p className="text-parchment/80 leading-relaxed text-xs md:text-sm">
                      {activeProject.architecture}
                    </p>
                  </div>

                </div>

                {/* Results & Tech stack */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-4 border-t border-obsidian-800">
                  
                  {/* Results Bullet points */}
                  <div className="md:col-span-8">
                    <div className="flex items-center gap-2 text-gold-400 mb-4 font-semibold uppercase tracking-wider text-xs font-mono">
                      <BarChart className="h-4 w-4" />
                      <span>Key Outcomes</span>
                    </div>
                    <ul className="space-y-3">
                      {activeProject.results.map((result, rIdx) => (
                        <li key={rIdx} className="flex gap-2.5 items-start text-xs md:text-sm text-parchment/85 leading-relaxed">
                          <Sparkles className="h-4 w-4 text-gold-500 shrink-0 mt-0.5" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Complete Technologies list */}
                  <div className="md:col-span-4">
                    <div className="text-gold-400 mb-4 font-semibold uppercase tracking-wider text-xs font-mono">
                      Technologies Sourced
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {activeProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs font-mono bg-obsidian-950 border border-gold-500/10 text-gold-400 rounded-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </SectionWrapper>
  );
}
