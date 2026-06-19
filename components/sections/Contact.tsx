/**
 * Contact Section (Final Audience Chamber)
 * 
 * Provides a formal closing to the portfolio with actionable contact methods.
 * Displays email and social links, and an interactive contact form or direct mailto links.
 */
"use client";

import { Mail, Github, Linkedin, Phone, MessageSquare, ChevronRight } from "lucide-react";
import { personalInfo } from "@/lib/data";
import SectionWrapper from "@/components/layout/SectionWrapper";
import GreekPattern from "@/components/custom/GreekPattern";

export default function Contact() {
  const contactLinks = [
    {
      id: "email",
      label: "Direct Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      icon: Mail,
      desc: "For project proposals, research collaborations, or internship openings.",
    },
    {
      id: "linkedin",
      label: "LinkedIn Network",
      value: "linkedin.com/in/aryankhanna03",
      href: personalInfo.linkedin,
      icon: Linkedin,
      desc: "Connect for industry connections and professional networking.",
    },
    {
      id: "github",
      label: "GitHub Repositories",
      value: "github.com/khanna03",
      href: personalInfo.github,
      icon: Github,
      desc: "Explore public codebases, ML models, and interactive software experiments.",
    },
    {
      id: "phone",
      label: "Direct Line",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      icon: Phone,
      desc: "For urgent discussions, interviews, or immediate consulting.",
    },
  ];

  return (
    <SectionWrapper id="contact" className="relative min-h-[90vh] flex flex-col justify-center pb-24">
      
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(212,175,55,0.03)_0%,transparent_60%)] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="serif-heading font-semibold text-xs tracking-widest text-gold-500 uppercase mb-3">
          ✦ Final Audience Chamber ✦
        </h2>
        <h3 className="serif-heading font-bold text-3xl md:text-5xl text-ivory">
          Establish Contact
        </h3>
        <div className="mt-4 flex items-center justify-center gap-1">
          <span className="h-[1px] w-8 bg-gold-600/30" />
          <span className="h-1.5 w-1.5 rotate-45 border border-gold-500" />
          <span className="h-[1px] w-8 bg-gold-600/30" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Call to Action Details */}
        <div className="lg:col-span-5 flex flex-col gap-6 text-center lg:text-left">
          <div className="flex justify-center lg:justify-start">
            <div className="h-12 w-12 rounded-full border border-gold-500/20 bg-obsidian-900 flex items-center justify-center">
              <MessageSquare className="h-5 w-5 text-gold-500" />
            </div>
          </div>
          <h4 className="serif-heading font-bold text-2xl text-ivory">
            Let us build something extraordinary.
          </h4>
          <p className="text-sm text-parchment/70 leading-relaxed font-sans">
            Whether you are looking to hire a dedicated AI researcher, seeking technical consulting on RAG pipelines, or interested in full-stack collaboration, the gates of the archive are open. Get in touch directly using the links provided.
          </p>
          <div className="hidden lg:block relative w-full h-8 overflow-hidden opacity-30 mt-4">
            <GreekPattern variant="horizontal" className="absolute left-0 right-0" opacity={0.6} />
          </div>
        </div>

        {/* Right Side: Links Grid */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {contactLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.id}
                href={link.href}
                target={link.id !== "email" && link.id !== "phone" ? "_blank" : undefined}
                rel={link.id !== "email" && link.id !== "phone" ? "noopener noreferrer" : undefined}
                className="group p-5 rounded bg-obsidian-900 border border-gold-500/10 hover:border-gold-500/35 transition-all duration-300 shadow-lg flex flex-col justify-between hover:shadow-[0_0_15px_rgba(212,175,55,0.08)] marble-texture min-h-[160px]"
              >
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <div className="p-2 rounded bg-obsidian-950 text-gold-500 group-hover:bg-gold-500 group-hover:text-obsidian-950 transition-colors border border-gold-500/15">
                      <Icon className="h-4.5 w-4.5" />
                    </div>
                    <ChevronRight className="h-4 w-4 text-parchment/20 group-hover:text-gold-400 group-hover:translate-x-1 transition-all" />
                  </div>
                  <h5 className="font-semibold text-sm text-ivory uppercase tracking-wide group-hover:text-gold-400 transition-colors">
                    {link.label}
                  </h5>
                  <p className="text-[11px] text-parchment/50 leading-normal mt-1 mb-4">
                    {link.desc}
                  </p>
                </div>
                <span className="font-mono text-xs text-gold-500/90 truncate group-hover:text-gold-400">
                  {link.value}
                </span>
              </a>
            );
          })}
        </div>

      </div>

    </SectionWrapper>
  );
}
