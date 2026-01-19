"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import resumeData from "@/data/resume.json";

export default function Hero() {
    return (
        <section className="min-h-screen w-full flex flex-col items-center justify-center relative z-10 px-4">
            {/* Profile Container */}
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="relative group mb-8"
            >
                {/* Glow Effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition duration-1000 animate-pulse" />

                {/* Profile Image */}
                <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-[#fff0f5] shadow-2xl">
                    <Image
                        src="/profile.jpg"
                        alt={resumeData.personal.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                    />
                </div>
            </motion.div>

            {/* Text Content */}
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="text-center space-y-4"
            >
                <h1 className="text-5xl md:text-7xl font-cinematic font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ffd700] via-[#f0e6d2] to-[#ffb7c5] drop-shadow-sm">
                    {resumeData.personal.name}
                </h1>
                <p className="text-xl md:text-2xl text-[#f0e6d2]/80 font-light tracking-wide max-w-2xl mx-auto">
                    {resumeData.personal.tagline}
                </p>

                {/* Social Links */}
                <div className="flex gap-6 justify-center mt-6">
                    <a href={resumeData.personal.links.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#ffb7c5] hover:text-[#fff] transition-colors">
                        <span className="text-xl">in</span> LinkedIn
                    </a>
                    <a href={resumeData.personal.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#ffb7c5] hover:text-[#fff] transition-colors">
                        <span className="text-xl">GitHub</span>
                    </a>
                </div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 2, duration: 2, repeat: Infinity }}
                className="absolute bottom-10"
            >
                <span className="text-2xl text-[#f0e6d2]">↓</span>
            </motion.div>
        </section>
    );
}
