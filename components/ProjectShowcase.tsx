"use client";

import { motion } from "framer-motion";
import resumeData from "@/data/resume.json";
import { Github, ExternalLink } from "lucide-react";

export default function ProjectShowcase() {
    return (
        <section className="min-h-screen py-20 px-6 max-w-7xl mx-auto">
            <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-4xl md:text-5xl font-cinematic text-[#f0e6d2] mb-16 text-center drop-shadow-md"
            >
                Artifacts & Projects
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {resumeData.projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="group relative bg-[#0f0f1f] border border-[#ffffff]/5 rounded-xl overflow-hidden hover:shadow-[0_0_20px_rgba(255,183,197,0.2)] transition-all duration-500"
                    >
                        {/* Image Placeholder / Gradient Header */}
                        <div className="h-40 bg-gradient-to-br from-[#2a2a4a] to-[#1a1a2e] flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30" />
                            <h3 className="text-2xl font-cinematic text-[#f0e6d2] z-10 group-hover:scale-110 transition-transform duration-500">
                                {project.name}
                            </h3>
                        </div>

                        <div className="p-6 relative z-10">
                            <p className="text-[#ffb7c5] text-sm font-semibold mb-2">{project.tagline}</p>
                            <p className="text-gray-400 text-sm mb-4 line-clamp-3 leading-relaxed">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tech.map((t, i) => (
                                    <span key={i} className="px-2 py-1 text-[10px] uppercase tracking-wider bg-[#ffffff]/5 text-[#a0a0c0] rounded-sm border border-[#ffffff]/10">
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <div className="flex items-center gap-4 mt-auto">
                                <a
                                    href={project.link}
                                    target="_blank"
                                    className="flex items-center gap-2 text-sm text-[#f0e6d2] hover:text-[#ffd700] transition-colors"
                                >
                                    <Github size={16} /> Code
                                </a>
                            </div>
                        </div>

                        {/* Hover Glow */}
                        <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#ffb7c5]/30 rounded-xl transition-colors pointer-events-none" />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
