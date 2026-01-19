"use client";

import { motion } from "framer-motion";
import resumeData from "@/data/resume.json";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

export default function Contact() {
    return (
        <section className="py-20 px-6 max-w-5xl mx-auto text-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-b from-[#1a1a2e] to-[#0a0a1a] border border-[#ffffff]/10 p-12 rounded-3xl relative overflow-hidden"
            >
                {/* Decorative Background */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#ffd700] to-transparent opacity-50" />
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10" />

                <h2 className="text-4xl md:text-5xl font-cinematic text-[#f0e6d2] mb-6">
                    Begin a New Chapter
                </h2>
                <p className="text-[#a0a0c0] text-lg max-w-2xl mx-auto mb-12">
                    Whether you have a question, a project collaboration, or just want to say hi, my inbox is always open.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <a href={`mailto:${resumeData.personal.email}`} className="flex flex-col items-center gap-3 group hover:scale-105 transition-transform">
                        <div className="p-4 bg-[#ffffff]/5 rounded-full text-[#ffb7c5] group-hover:bg-[#ffb7c5] group-hover:text-black transition-colors">
                            <Mail size={24} />
                        </div>
                        <p className="text-[#f0e6d2] text-sm group-hover:text-[#ffb7c5] transition-colors">{resumeData.personal.email}</p>
                    </a>

                    <a href={`tel:${resumeData.personal.contact}`} className="flex flex-col items-center gap-3 group hover:scale-105 transition-transform">
                        <div className="p-4 bg-[#ffffff]/5 rounded-full text-[#81d4fa] group-hover:bg-[#81d4fa] group-hover:text-black transition-colors">
                            <Phone size={24} />
                        </div>
                        <p className="text-[#f0e6d2] text-sm group-hover:text-[#81d4fa] transition-colors">{resumeData.personal.contact}</p>
                    </a>

                    <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(resumeData.personal.location)}`} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 group">
                        <div className="p-4 bg-[#ffffff]/5 rounded-full text-[#ffd700] group-hover:bg-[#ffd700] group-hover:text-black transition-colors">
                            <MapPin size={24} />
                        </div>
                        <p className="text-[#f0e6d2] text-sm group-hover:text-[#ffd700] transition-colors decoration-slice hover:underline">{resumeData.personal.location}</p>
                    </a>
                </div>

                <div className="flex justify-center gap-6">
                    <a
                        href={resumeData.personal.links.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3 bg-[#0077b5] text-white rounded-full font-bold hover:bg-[#006399] hover:scale-105 transition-all flex items-center gap-2 shadow-lg hover:shadow-[#0077b5]/50"
                    >
                        <Linkedin size={20} /> LinkedIn
                    </a>
                    <a
                        href={resumeData.personal.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3 bg-[#333] text-white rounded-full font-bold hover:bg-[#222] hover:scale-105 transition-all flex items-center gap-2 shadow-lg hover:shadow-[#333]/50"
                    >
                        <Github size={20} /> GitHub
                    </a>
                </div>

            </motion.div>
        </section >
    );
}
