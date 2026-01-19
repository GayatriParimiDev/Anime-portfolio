"use client";

import { motion } from "framer-motion";
import resumeData from "@/data/resume.json";
import { Award } from "lucide-react";

export default function Certifications() {
    return (
        <section className="py-20 px-6 max-w-4xl mx-auto">
            <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-4xl md:text-5xl font-cinematic text-[#f0e6d2] mb-12 text-center drop-shadow-md"
            >
                Honors & Certifications
            </motion.h2>

            <div className="space-y-6">
                {resumeData.certifications.map((cert, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-4 bg-[#1a1a2e]/60 border border-[#ffffff]/10 p-4 rounded-lg hover:bg-[#1a1a2e]/90 transition-colors group"
                    >
                        <div className="p-3 bg-[#ffd700]/10 rounded-full text-[#ffd700] group-hover:scale-110 transition-transform">
                            <Award size={24} />
                        </div>
                        <p className="text-[#e2e8f0] font-serif text-lg tracking-wide group-hover:text-[#ffd700] transition-colors">
                            {cert}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
