import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden" id="home">
            {/* Background gradients */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full z-10">
                <div className="flex flex-col items-center md:items-start text-center md:text-left md:w-2/3">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h2 className="text-cyan-400 font-mono mb-4 text-base md:text-lg">&gt; Hello World, my name is</h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-100 tracking-tight mb-2">
                            Sahil Gupta.
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-400 mb-6 leading-tight">
                            Full-Stack Developer | <span className="text-cyan-400/90">AI/ML Enthusiast</span> | Competitive Programmer
                        </h2>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                        className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-2xl mb-12"
                    >
                        I enjoy building scalable software systems and Generative AI-driven applications,
                        with hands-on experience in full-stack web development, machine learning, and LLM/RAG-based systems.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
                        className="flex flex-col sm:flex-row gap-4 w-full md:w-auto"
                    >
                        <a
                            href="#projects"
                            className="px-8 py-3 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-medium text-center transition-all shadow-[0_0_15px_rgba(6,182,212,0.5)] hover:shadow-[0_0_25px_rgba(6,182,212,0.8)]"
                        >
                            View Projects
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-3 rounded-lg border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 font-medium text-center transition-all"
                        >
                            Contact Me
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
