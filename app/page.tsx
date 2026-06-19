import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Achievements from "@/components/sections/Achievements";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import GoldDivider from "@/components/custom/GoldDivider";

export default function Home() {
  return (
    <>
      {/* Floating Glass Navbar */}
      <Navbar />

      {/* Main Content Layout */}
      <main className="flex-grow flex flex-col w-full relative z-10">
        {/* Entrance Hall */}
        <Hero />

        {/* Legacy Chamber */}
        <About />
        <GoldDivider />

        {/* Hall of Service */}
        <Experience />
        <GoldDivider />

        {/* Hall of Innovation */}
        <Projects />
        <GoldDivider />

        {/* Arsenal of Knowledge */}
        <Skills />
        <GoldDivider />

        {/* Hall of Honors */}
        <Achievements />
        <GoldDivider />

        {/* Final Audience Chamber */}
        <Contact />
      </main>

      {/* Royal Signature Footer */}
      <Footer />
    </>
  );
}
