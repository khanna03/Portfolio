/**
 * Achievements Section (Hall of Honors)
 * 
 * Highlights notable awards, hackathon wins, publications, and certifications.
 * Uses a grid layout to present each honor with associated icons and descriptive text.
 */
"use client";

import { Award, Star, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { certifications } from "@/lib/data";
import SectionWrapper from "@/components/layout/SectionWrapper";

export default function Achievements() {
  const featuredCerts = certifications.filter((cert) => cert.featured);
  const otherCerts = certifications.filter((cert) => !cert.featured);

  return (
    <SectionWrapper id="achievements" className="relative">
      
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="serif-heading font-semibold text-xs tracking-widest text-gold-500 uppercase mb-3">
          ✦ Hall of Honors ✦
        </h2>
        <h3 className="serif-heading font-bold text-3xl md:text-5xl text-ivory">
          Credentials & Honors
        </h3>
        <div className="mt-4 flex items-center justify-center gap-1">
          <span className="h-[1px] w-8 bg-gold-600/30" />
          <span className="h-1.5 w-1.5 rotate-45 border border-gold-500" />
          <span className="h-[1px] w-8 bg-gold-600/30" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto flex flex-col gap-10">
        
        {/* Featured Credentials (Larger highlights) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredCerts.map((cert) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-6 rounded bg-obsidian-900 border-2 border-gold-500/20 shadow-2xl marble-texture relative flex gap-4 items-start"
            >
              {/* Star corner badge */}
              <div className="absolute top-2 right-2 text-gold-500">
                <Star className="h-4.5 w-4.5 fill-gold-500" />
              </div>

              <div className="p-3 rounded bg-gold-500/10 text-gold-500 border border-gold-500/25 mt-0.5">
                <Award className="h-6 w-6" />
              </div>

              <div className="flex-grow flex flex-col gap-1">
                <span className="text-[10px] font-mono text-gold-400 uppercase tracking-widest">
                  Featured Certification
                </span>
                <h4 className="serif-heading font-bold text-base md:text-lg text-ivory">
                  {cert.title}
                </h4>
                <p className="text-sm text-parchment/70 font-sans">{cert.issuer}</p>
                <span className="text-xs text-parchment/40 mt-1 font-mono">{cert.date}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Regular Credentials List (Muted detailed table/grid) */}
        <div>
          <h4 className="serif-heading font-semibold text-lg text-gold-400 mb-6 border-b border-obsidian-800 pb-2">
            Archived Certificates
          </h4>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherCerts.map((cert, idx) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.05 }}
                className="p-4 rounded bg-obsidian-900/50 border border-gold-500/5 hover:border-gold-500/20 transition-all duration-300 flex gap-3 items-center"
              >
                <div className="p-2 rounded bg-obsidian-950 text-gold-500/60 border border-gold-500/5">
                  <ShieldCheck className="h-4.5 w-4.5" />
                </div>
                <div className="flex flex-col gap-0.5 min-w-0">
                  <h5 className="font-semibold text-xs md:text-sm text-ivory truncate" title={cert.title}>
                    {cert.title}
                  </h5>
                  <p className="text-[11px] text-parchment/50 truncate">{cert.issuer}</p>
                  <span className="text-[10px] text-parchment/30 font-mono mt-0.5">{cert.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

    </SectionWrapper>
  );
}
