"use client";

import { useState, useEffect } from "react";
import { Menu, X, Landmark } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
  { id: "hero", label: "Entrance" },
  { id: "about", label: "Legacy" },
  { id: "experience", label: "Service" },
  { id: "projects", label: "Innovation" },
  { id: "skills", label: "Arsenal" },
  { id: "achievements", label: "Honors" },
  { id: "contact", label: "Audience" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 1. Navbar color transition on scroll
      setIsScrolled(window.scrollY > 50);

      // 2. ScrollSpy logic
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200; // Offset for trigger

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section) {
          const rect = section.getBoundingClientRect();
          const top = rect.top + window.scrollY;
          if (scrollPosition >= top) {
            setActiveSection(navItems[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Trigger once on load
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-500 py-4 px-6 md:px-12",
          isScrolled
            ? "bg-obsidian-950/80 backdrop-blur-md border-b border-gold-500/10 shadow-lg py-3"
            : "bg-transparent border-b border-transparent"
        )}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Logo / Brand Symbol */}
          <button
            onClick={() => scrollTo("hero")}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="relative flex items-center justify-center h-9 w-9 rounded-md border border-gold-500/40 bg-obsidian-900 overflow-hidden group-hover:border-gold-400 transition-colors">
              <Landmark className="h-5 w-5 text-gold-500 group-hover:scale-110 transition-transform duration-300" />
              {/* Subtle glass reflection */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            </div>
            <span className="serif-heading font-semibold text-lg tracking-wider text-ivory group-hover:text-gold-400 transition-colors">
              THE ROYAL ARCHIVE
            </span>
          </button>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={cn(
                  "relative px-4 py-2 text-sm uppercase tracking-widest transition-colors font-sans hover:text-gold-400 cursor-pointer",
                  activeSection === item.id ? "text-gold-500 font-medium" : "text-parchment/70"
                )}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-gold-500 to-transparent"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-parchment hover:text-gold-400 transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 z-50 w-72 max-w-[80vw] bg-obsidian-900 border-l border-gold-500/20 px-6 py-24 flex flex-col gap-6 shadow-2xl md:hidden"
            >
              {/* Greek pattern as side design */}
              <div className="absolute left-0 top-0 bottom-0 w-2 opacity-25 overflow-hidden">
                <div className="h-full w-full bg-gradient-to-b from-gold-600 via-gold-500 to-gold-700" style={{
                  backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='6' height='16' viewBox='0 0 6 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 0V10H5V6H3V8H4V7H3.5V6H2.5V9H5.5V0H1Z' fill='%23d4af37' fill-opacity='0.4'/%3E%3C/svg%3E\")",
                  backgroundRepeat: "repeat-y"
                }} />
              </div>

              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={cn(
                    "text-left px-4 py-3 uppercase tracking-widest text-base border-b border-obsidian-800 transition-colors cursor-pointer",
                    activeSection === item.id
                      ? "text-gold-500 border-gold-500/30"
                      : "text-parchment/80 hover:text-gold-400"
                  )}
                >
                  {item.label}
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
