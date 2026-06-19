/**
 * Global Footer Component
 * 
 * Displays copyright information, a thematic tagline, and quick links to social profiles.
 * Anchors the bottom of the page with a subtle Greek pattern border.
 */
"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-obsidian-950 greek-border-top border-t border-gold-500/10 py-12 px-6 md:px-12 mt-auto">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-parchment/60">
        
        {/* Left Side: Brand Signature */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="serif-heading font-semibold text-base tracking-wider text-gold-500">
            THE ROYAL ARCHIVE
          </span>
          <p className="text-xs">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
        </div>

        {/* Center: Quote / Tagline */}
        <p className="text-center italic text-xs max-w-xs text-parchment/40 font-serif">
          &ldquo;Architectural elegance meets digital innovation. Timeless design for modern intelligence.&rdquo;
        </p>

        {/* Right Side: Quick Social Links */}
        <div className="flex items-center gap-4">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-gold-500/10 hover:border-gold-500/30 text-parchment/70 hover:text-gold-400 bg-obsidian-900/40 hover:bg-obsidian-900 transition-all duration-300"
            aria-label="GitHub Profile"
          >
            <Github className="h-4.5 w-4.5" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-gold-500/10 hover:border-gold-500/30 text-parchment/70 hover:text-gold-400 bg-obsidian-900/40 hover:bg-obsidian-900 transition-all duration-300"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="h-4.5 w-4.5" />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="p-2 rounded-full border border-gold-500/10 hover:border-gold-500/30 text-parchment/70 hover:text-gold-400 bg-obsidian-900/40 hover:bg-obsidian-900 transition-all duration-300"
            aria-label="Send Email"
          >
            <Mail className="h-4.5 w-4.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
