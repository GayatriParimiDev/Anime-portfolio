"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export default function IntroScroll({ onComplete }: { onComplete: () => void }) {
    const [stage, setStage] = useState<"sealed" | "opening" | "reading" | "finished">("sealed");

    const startJourney = () => {
        setStage("opening");
        setTimeout(() => setStage("reading"), 1500);
    };

    const finishJourney = () => {
        setStage("finished");
        setTimeout(onComplete, 1000); // Allow fade out
    };

    return (
        <AnimatePresence>
            {stage !== "finished" && (
                <motion.div
                    key="intro-overlay"
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
                    exit={{ opacity: 0, transition: { duration: 1 } }}
                >
                    {/* STAGE 1: SEALED SCROLL */}
                    {stage === "sealed" && (
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            whileHover={{ scale: 1.05 }}
                            onClick={startJourney}
                            className="cursor-pointer flex flex-col items-center gap-4"
                        >
                            <div className="w-16 h-64 bg-[#f0e6d2] rounded-full shadow-[0_0_50px_rgba(255,215,0,0.3)] border-2 border-[#8b4513] relative overflow-hidden flex items-center justify-center">
                                {/* Scroll Cylinder Texture */}
                                <div className="absolute inset-x-0 top-4 h-[1px] bg-[#8b4513]/20" />
                                <div className="absolute inset-x-0 bottom-4 h-[1px] bg-[#8b4513]/20" />
                                <span className="text-3xl text-[#8b4513] animate-pulse">📜</span>
                            </div>
                            <p className="text-[#f0e6d2] font-serif tracking-widest text-sm animate-pulse">
                                CLICK TO OPEN THE SCROLL
                            </p>
                        </motion.div>
                    )}

                    {/* STAGE 2: OPENING SCROLL */}
                    {stage === "opening" && (
                        <motion.div
                            layoutId="scroll"
                            className="w-[10px] h-[300px] bg-[#f0e6d2] overflow-hidden"
                            animate={{ width: 600 }}
                            transition={{ duration: 1.2, ease: "easeInOut" }}
                        />
                    )}

                    {/* STAGE 3: READING THE SCROLL */}
                    {stage === "reading" && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="relative w-[90vw] md:w-[600px] h-auto min-h-[400px] bg-[#f0e6d2] p-8 md:p-12 shadow-2xl rounded-sm border-t-8 border-b-8 border-[#8b4513]"
                            style={{
                                backgroundImage: "url('https://www.transparenttextures.com/patterns/aged-paper.png')",
                            }}
                        >
                            <div className="flex flex-col items-center text-center space-y-6 text-[#3e2723]">
                                <motion.h2
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className="text-4xl font-serif font-bold text-[#5d4037] border-b-2 border-[#5d4037] pb-2"
                                >
                                    Greetings
                                </motion.h2>

                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 1, duration: 2 }}
                                    className="font-serif text-lg leading-relaxed italic"
                                >
                                    <p>Welcome, Traveler.</p>
                                    <p className="mt-4">
                                        You have arrived at the digital realm of <strong>Gayatri Parimi</strong>.
                                    </p>
                                    <p className="mt-2">
                                        A story of code, creativity, and data awaits you.
                                    </p>
                                </motion.div>

                                <motion.button
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{ delay: 3.5 }}
                                    onClick={finishJourney}
                                    className="mt-8 px-8 py-3 bg-[#5d4037] text-[#f0e6d2] font-bold rounded-full text-sm hover:bg-[#3e2723] transition-colors"
                                >
                                    ENTER THE WORLD
                                </motion.button>
                            </div>
                        </motion.div>
                    )}
                </motion.div>
            )}
        </AnimatePresence>
    );
}
