/**
 * About Section (Legacy Chamber)
 * 
 * Introduces the professional identity, educational background, and core philosophy.
 * Features animated statistics counters and structured information cards framed with gold accents.
 */
"use client";

import { MapPin, Mail, Phone, GraduationCap, Calendar } from "lucide-react";
import { personalInfo } from "@/lib/data";
import SectionWrapper from "@/components/layout/SectionWrapper";
import AnimatedCounter from "@/components/custom/AnimatedCounter";

export default function About() {
  return (
    <SectionWrapper id="about" className="relative">
      
      {/* Decorative Greek Border Top */}
      <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />

      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="serif-heading font-semibold text-xs tracking-widest text-gold-500 uppercase mb-3">
          About
        </h2>
        <h3 className="serif-heading font-bold text-3xl md:text-5xl text-ivory">
          About Me
        </h3>
        <div className="mt-4 flex items-center justify-center gap-1">
          <span className="h-[1px] w-8 bg-gold-600/30" />
          <span className="h-1.5 w-1.5 rotate-45 border border-gold-500" />
          <span className="h-[1px] w-8 bg-gold-600/30" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
        
        {/* Left Column: Biography & Details (7 cols) */}
        <div className="lg:col-span-7 flex flex-col gap-6 text-parchment/80 text-sm md:text-base leading-relaxed">
          <h4 className="serif-heading font-semibold text-lg text-gold-400">
            My Background
          </h4>
          <p>{personalInfo.bio}</p>
          <p>
            Currently pursuing an engineering degree at SRM Institute of Science and Technology, Chennai, I focus on the confluence of Machine Learning models and efficient full-stack environments. My objective is to build clean, secure, and highly scalable software that translates mathematical models into positive real-world experiences.
          </p>

          {/* Quick Contact & Details grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 pt-6 border-t border-obsidian-800 text-sm">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded bg-obsidian-900 border border-gold-500/10 text-gold-500">
                <MapPin className="h-4 w-4" />
              </div>
              <div>
                <p className="text-xs text-parchment/40">Location</p>
                <p className="text-ivory font-medium">{personalInfo.location}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded bg-obsidian-900 border border-gold-500/10 text-gold-500">
                <Mail className="h-4 w-4" />
              </div>
              <div>
                <p className="text-xs text-parchment/40">Email</p>
                <a href={`mailto:${personalInfo.email}`} className="text-ivory font-medium hover:text-gold-400 transition-colors">
                  {personalInfo.email}
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded bg-obsidian-900 border border-gold-500/10 text-gold-500">
                <Phone className="h-4 w-4" />
              </div>
              <div>
                <p className="text-xs text-parchment/40">Phone</p>
                <a href={`tel:${personalInfo.phone}`} className="text-ivory font-medium hover:text-gold-400 transition-colors">
                  {personalInfo.phone}
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded bg-obsidian-900 border border-gold-500/10 text-gold-500">
                <GraduationCap className="h-4 w-4" />
              </div>
              <div>
                <p className="text-xs text-parchment/40">Affiliation</p>
                <p className="text-ivory font-medium">SRMIST Chennai</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Premium Royal Monogram Placeholder (5 cols) */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-[340px] aspect-[4/5] rounded bg-obsidian-900 border border-gold-500/20 shadow-2xl overflow-hidden marble-texture group p-6 flex flex-col justify-between">
            {/* Corner decorations inside card */}
            <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-gold-500/30" />
            <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-gold-500/30" />
            <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-gold-500/30" />
            <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-gold-500/30" />

            {/* Central Emblem Monogram */}
            <div className="flex-grow flex flex-col items-center justify-center gap-4">
              <div className="relative h-28 w-28 rounded-full border border-gold-500/20 bg-obsidian-950 flex items-center justify-center shadow-inner">
                <span className="serif-heading font-bold text-4xl text-transparent bg-clip-text bg-gradient-to-b from-gold-300 via-gold-500 to-gold-600 tracking-wider">
                  AK
                </span>
                {/* SVG circular Greek fret surrounding monogram */}
                <svg className="absolute inset-0 w-full h-full rotate-45 stroke-gold-500/10 fill-none" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" strokeDasharray="3 3" />
                  <circle cx="50" cy="50" r="41" />
                </svg>
              </div>
              <div className="text-center">
                <h5 className="serif-heading text-lg font-bold text-ivory tracking-wide">Aryan Khanna</h5>
                <p className="text-xs text-gold-400/70 font-mono tracking-widest uppercase mt-1">Class of 2027</p>
              </div>
            </div>

            {/* Minor decorative banner */}
            <div className="w-full text-center border-t border-gold-500/10 pt-4">
              <span className="text-[10px] uppercase font-mono tracking-widest text-parchment/40">
                SOFTWARE ENGINEER
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* Education Timeline Block inside About Section */}
      <div className="mb-16">
        <h4 className="serif-heading font-semibold text-xl text-gold-400 mb-8 border-b border-obsidian-800 pb-2">
          Education
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {personalInfo.education.map((edu, idx) => (
            <div
              key={idx}
              className="p-6 rounded bg-obsidian-900/60 border border-gold-500/5 hover:border-gold-500/20 transition-all duration-300 flex gap-4 items-start"
            >
              <div className="p-2.5 rounded bg-obsidian-950 border border-gold-500/15 text-gold-500">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div className="flex-grow flex flex-col gap-1">
                <span className="text-xs font-mono text-gold-400 uppercase tracking-widest flex items-center gap-1.5">
                  <Calendar className="h-3 w-3" />
                  {edu.period}
                </span>
                <h5 className="serif-heading font-bold text-base text-ivory">{edu.degree}</h5>
                <p className="text-sm text-parchment/80">{edu.institution}</p>
                <p className="text-xs text-parchment/40 mt-1">{edu.location} • {edu.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Statistics Block */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-12">
        {personalInfo.stats.map((stat, idx) => (
          <div
            key={idx}
            className="p-6 rounded bg-obsidian-900 border border-gold-500/10 flex flex-col items-center justify-center text-center hover:border-gold-500/30 transition-colors shadow-lg marble-texture"
          >
            <span className="serif-heading text-3xl md:text-4xl lg:text-5xl font-bold text-gold-500 mb-2">
              <AnimatedCounter value={stat.value} />
              {stat.label === "CGPA" ? "" : "+"}
            </span>
            <span className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-parchment/60">
              {stat.label}
            </span>
          </div>
        ))}
      </div>

    </SectionWrapper>
  );
}
