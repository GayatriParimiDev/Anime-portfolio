"use client";

import { useState } from "react";
import SakuraBackground from "@/components/SakuraBackground";
import IntroScroll from "@/components/IntroScroll";
import Hero from "@/components/Hero";
import JourneyMap from "@/components/JourneyMap";
import ProjectShowcase from "@/components/ProjectShowcase";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import { AnimatePresence, motion } from "framer-motion";

export default function Home() {
  const [introFinished, setIntroFinished] = useState(false);

  return (
    <main className="relative min-h-screen w-full bg-[#0a0a1a] text-[#fdf6e3] overflow-x-hidden">
      {/* 1. Global Background Effects */}
      <SakuraBackground />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1a1a2e] via-[#0a0a1a] to-[#000000] -z-10" />

      {/* 2. Intro Sequence */}
      {!introFinished && (
        <IntroScroll onComplete={() => setIntroFinished(true)} />
      )}

      {/* 3. Main Content (Revealed after intro) */}
      <AnimatePresence>
        {introFinished && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-full"
          >
            <Hero />

            {/* SECTIONS */}
            <div id="journey" className="relative z-10 w-full">
              <JourneyMap />
            </div>

            <div id="projects" className="relative z-10 w-full bg-gradient-to-b from-transparent to-[#050510]">
              <ProjectShowcase />
            </div>

            <div id="skills" className="relative z-10 w-full">
              <Skills />
            </div>

            <div id="certifications" className="relative z-10 w-full bg-[#0a0a1a]">
              <Certifications />
            </div>

            <div id="contact" className="relative z-10 w-full mt-10">
              <Contact />
            </div>

            {/* Footer */}
            <footer className="py-12 text-center text-gray-500 text-sm pb-24 border-t border-white/5 mx-auto max-w-6xl">
              <p>Designed with Anime Aesthetics</p>
              <p>© 2026 Gayatri Parimi</p>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
