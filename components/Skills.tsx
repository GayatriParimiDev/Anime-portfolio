"use client";

import { motion } from "framer-motion";
import resumeData from "@/data/resume.json";

export default function Skills() {
    return (
        <section className="py-20 px-6 max-w-5xl mx-auto">
            <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-4xl md:text-5xl font-cinematic text-[#f0e6d2] mb-12 text-center"
            >
                Arsenal & Skills
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Technical Skills */}
                <div className="bg-[#1a1a2e]/40 p-8 rounded-2xl border border-[#ffffff]/5">
                    <h3 className="text-xl font-bold text-[#ffd700] mb-6 tracking-widest uppercase text-center md:text-left">Technical</h3>
                    <div className="flex flex-wrap gap-3">
                        {resumeData.skills.technical.map((skill, i) => (
                            <motion.div
                                key={i}
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{ delay: i * 0.05 }}
                                whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 183, 197, 0.2)" }}
                                className="px-4 py-2 bg-[#ffffff]/5 text-[#f0e6d2] border border-[#ffffff]/10 rounded-full cursor-default backdrop-blur-sm"
                            >
                                {skill}
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Soft Skills & Languages */}
                <div className="space-y-8">
                    <div className="bg-[#1a1a2e]/40 p-8 rounded-2xl border border-[#ffffff]/5">
                        <h3 className="text-xl font-bold text-[#ffb7c5] mb-6 tracking-widest uppercase">Soft Skills</h3>
                        <ul className="space-y-2">
                            {resumeData.skills.soft.map((skill, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ x: -20, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-center gap-2 text-[#a0a0c0]"
                                >
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#ffb7c5]" /> {skill}
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-[#1a1a2e]/40 p-8 rounded-2xl border border-[#ffffff]/5">
                        <h3 className="text-xl font-bold text-[#81d4fa] mb-6 tracking-widest uppercase">Languages</h3>
                        <p className="text-[#a0a0c0] leading-relaxed">
                            {resumeData.skills.spoken.join(" • ")}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
