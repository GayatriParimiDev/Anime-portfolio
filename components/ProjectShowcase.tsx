"use client";

import { AnimatePresence, motion } from "framer-motion";
import resumeData from "@/data/resume.json";
import { ExternalLink, Github, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

type Project = {
    name: string;
    tagline: string;
    description: string;
    tech: string[];
    repo?: string;
    live?: string;
};

type GithubRepo = {
    id: number;
    name: string;
    description: string | null;
    html_url: string;
    homepage: string | null;
    topics: string[];
    language: string | null;
    updated_at: string;
};

export default function ProjectShowcase() {
    const [activeProject, setActiveProject] = useState<Project | null>(null);
    const [githubRepos, setGithubRepos] = useState<GithubRepo[]>([]);
    const [githubError, setGithubError] = useState<string | null>(null);

    const projects = useMemo(() => resumeData.projects as Project[], []);

    const manualRepoKeys = useMemo(() => {
        const normalize = (v: string) => v.trim().toLowerCase().replace(/\.git$/, "");
        const keys = new Set<string>();

        for (const p of projects) {
            if (p.repo) keys.add(normalize(p.repo));
            keys.add(normalize(p.name.replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "")));
        }

        return keys;
    }, [projects]);

    useEffect(() => {
        const controller = new AbortController();
        let cancelled = false;

        const load = async () => {
            try {
                const res = await fetch("/api/github", { method: "GET", signal: controller.signal });
                if (!res.ok) {
                    throw new Error(`GitHub fetch failed: ${res.status}`);
                }
                const data = (await res.json()) as { repos: GithubRepo[] };
                if (!cancelled) {
                    const repos = Array.isArray(data?.repos) ? data.repos : [];
                    const seen = new Set<string>();
                    const normalize = (v: string) => v.trim().toLowerCase().replace(/\.git$/, "");

                    const filtered = repos.filter((r) => {
                        const urlKey = normalize(r.html_url);
                        const nameKey = normalize(r.name);
                        if (manualRepoKeys.has(urlKey) || manualRepoKeys.has(nameKey)) return false;
                        if (seen.has(urlKey)) return false;
                        seen.add(urlKey);
                        return true;
                    });

                    setGithubRepos(filtered);
                }
            } catch {
                if (!cancelled) {
                    setGithubError("Unable to load GitHub projects right now.");
                }
            }
        };

        load();
        return () => {
            cancelled = true;
            controller.abort();
        };
    }, [manualRepoKeys]);

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
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        role="button"
                        tabIndex={0}
                        onClick={() => setActiveProject(project)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") setActiveProject(project);
                        }}
                        className="group relative bg-[#0f0f1f] border border-[#ffffff]/5 rounded-xl overflow-hidden hover:shadow-[0_0_20px_rgba(255,183,197,0.2)] transition-all duration-500 cursor-pointer"
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
                                {project.repo && (
                                    <a
                                        href={project.repo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => e.stopPropagation()}
                                        className="flex items-center gap-2 text-sm text-[#f0e6d2] hover:text-[#ffd700] transition-colors"
                                    >
                                        <Github size={16} /> Repo
                                    </a>
                                )}
                                {project.live && (
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => e.stopPropagation()}
                                        className="flex items-center gap-2 text-sm text-[#f0e6d2] hover:text-[#ffd700] transition-colors"
                                    >
                                        <ExternalLink size={16} /> Live
                                    </a>
                                )}
                            </div>
                        </div>

                        {/* Hover Glow */}
                        <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#ffb7c5]/30 rounded-xl transition-colors pointer-events-none" />
                    </motion.div>
                ))}
            </div>

            <div className="mt-20">
                <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-2xl md:text-3xl font-cinematic text-[#f0e6d2] mb-8 text-center drop-shadow-md"
                >
                    More from GitHub
                </motion.h3>

                {githubError ? (
                    <div className="text-center text-sm text-gray-400">{githubError}</div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {githubRepos.map((repo) => (
                            <a
                                key={repo.id}
                                href={repo.homepage ? repo.homepage : repo.html_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative bg-[#0f0f1f] border border-[#ffffff]/5 rounded-xl overflow-hidden hover:shadow-[0_0_20px_rgba(255,183,197,0.2)] transition-all duration-500"
                            >
                                <div className="h-40 bg-gradient-to-br from-[#2a2a4a] to-[#1a1a2e] flex items-center justify-center relative overflow-hidden">
                                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30" />
                                    <h4 className="text-xl font-cinematic text-[#f0e6d2] z-10 group-hover:scale-110 transition-transform duration-500 px-4 text-center">
                                        {repo.name}
                                    </h4>
                                </div>

                                <div className="p-6 relative z-10">
                                    <p className="text-gray-400 text-sm mb-4 line-clamp-3 leading-relaxed">
                                        {repo.description || ""}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {repo.language && (
                                            <span className="px-2 py-1 text-[10px] uppercase tracking-wider bg-[#ffffff]/5 text-[#a0a0c0] rounded-sm border border-[#ffffff]/10">
                                                {repo.language}
                                            </span>
                                        )}
                                        {repo.topics.slice(0, 4).map((t) => (
                                            <span key={t} className="px-2 py-1 text-[10px] uppercase tracking-wider bg-[#ffffff]/5 text-[#a0a0c0] rounded-sm border border-[#ffffff]/10">
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex items-center gap-4 mt-auto">
                                        <span className="flex items-center gap-2 text-sm text-[#f0e6d2] group-hover:text-[#ffd700] transition-colors">
                                            <Github size={16} /> Open
                                        </span>
                                    </div>
                                </div>

                                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#ffb7c5]/30 rounded-xl transition-colors pointer-events-none" />
                            </a>
                        ))}
                    </div>
                )}
            </div>

            <AnimatePresence>
                {activeProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4"
                        onClick={() => setActiveProject(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 10 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.98, opacity: 0, y: 10 }}
                            transition={{ duration: 0.2 }}
                            className="w-full max-w-2xl bg-[#0f0f1f] border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="relative p-6 border-b border-white/5 bg-gradient-to-br from-[#2a2a4a] to-[#1a1a2e]">
                                <button
                                    type="button"
                                    onClick={() => setActiveProject(null)}
                                    className="absolute right-4 top-4 p-2 rounded-full bg-black/30 hover:bg-black/50 text-[#f0e6d2] transition-colors"
                                    aria-label="Close"
                                >
                                    <X size={18} />
                                </button>
                                <h3 className="text-3xl font-cinematic text-[#f0e6d2]">{activeProject.name}</h3>
                                <p className="text-[#ffb7c5] text-sm font-semibold mt-2">{activeProject.tagline}</p>
                            </div>

                            <div className="p-6">
                                <p className="text-gray-300 text-sm leading-relaxed">{activeProject.description}</p>

                                <div className="flex flex-wrap gap-2 mt-6">
                                    {activeProject.tech.map((t) => (
                                        <span key={t} className="px-2 py-1 text-[10px] uppercase tracking-wider bg-[#ffffff]/5 text-[#a0a0c0] rounded-sm border border-[#ffffff]/10">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex flex-wrap gap-3 mt-8">
                                    {activeProject.repo && (
                                        <a
                                            href={activeProject.repo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#ffffff]/5 text-[#f0e6d2] hover:text-black hover:bg-[#ffd700] transition-colors"
                                        >
                                            <Github size={18} /> Repository
                                        </a>
                                    )}
                                    {activeProject.live && (
                                        <a
                                            href={activeProject.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#ffb7c5]/10 text-[#f0e6d2] hover:text-black hover:bg-[#ffb7c5] transition-colors"
                                        >
                                            <ExternalLink size={18} /> Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
