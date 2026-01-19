"use client";

import { motion } from "framer-motion";
import resumeData from "@/data/resume.json";
import { cn } from "@/lib/utils";

export default function JourneyMap() {
    // Merge Experience and Education for a chronological flow, sorted by recent first
    const journeyItems = [
        ...resumeData.experience.map((e) => ({ type: "experience", ...e, title: e.role, subtitle: e.company, year: e.period })),
        ...resumeData.education.map((e) => ({ type: "education", ...e, title: e.degree, subtitle: e.institution, year: e.year })),
    ].sort((a, b) => { // Simple sort logic (improvements can be made for complex dates)
        return a.year.includes("Present") ? -1 : 1;
    });

    return (
        <section className="min-h-screen py-20 px-6 relative flex flex-col items-center">
            <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-4xl md:text-5xl font-cinematic text-[#f0e6d2] mb-16 text-center drop-shadow-md"
            >
                The Journey
            </motion.h2>

            <div className="relative max-w-4xl w-full">
                {/* Central Line */}
                <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[#ffd700] to-transparent opacity-50" />

                {journeyItems.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className={cn(
                            "relative mb-12 flex flex-col md:flex-row items-center w-full",
                            index % 2 === 0 ? "md:flex-row-reverse" : ""
                        )}
                    >
                        {/* Spacer for alternating layout */}
                        <div className="flex-1 w-full" />

                        {/* Node Point */}
                        <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#f0e6d2] border-2 border-[#ffd700] shadow-[0_0_10px_#ffd700] z-10" />

                        {/* Content Card */}
                        <div className={cn(
                            "flex-1 w-full pl-12 md:pl-0 md:px-8",
                            index % 2 === 0 ? "md:text-right" : "md:text-left"
                        )}>
                            <div className="bg-[#1a1a2e]/60 backdrop-blur-md border border-[#ffffff]/10 p-6 rounded-lg hover:bg-[#1a1a2e]/80 transition-colors duration-300 shadow-xl group">
                                <span className="text-xs font-bold tracking-widest text-[#ffb7c5] uppercase mb-1 block">
                                    {item.year}
                                </span>
                                <h3 className="text-xl font-bold text-[#f0e6d2] group-hover:text-[#ffd700] transition-colors">{item.title}</h3>
                                <h4 className="text-md text-[#a0a0c0] italic mb-2">{item.subtitle}</h4>
                                {/* @ts-expect-error - description exists on some types */}
                                {item.description && (
                                    // @ts-expect-error - description exists on some types
                                    <p className="text-sm text-gray-300 leading-relaxed">{item.description}</p>
                                )}
                                {/* @ts-expect-error - score exists on education */}
                                {item.score && (
                                    // @ts-expect-error - score exists on education
                                    <div className="mt-2 inline-block px-3 py-1 text-xs bg-[#ffd700]/10 text-[#ffd700] rounded-full border border-[#ffd700]/20">
                                        Score: {item.score}
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
