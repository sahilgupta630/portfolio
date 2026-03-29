import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowDown } from "lucide-react";

export default function Hero() {
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const roles = [
        "Mechanical Engineer @ IIT Kharagpur",
        "Competitive Programmer",
        "Full Stack Developer",
        "AI/ML Enthusiast"
    ];

    useEffect(() => {
        const handleType = () => {
            const i = loopNum % roles.length;
            const fullRole = roles[i];

            setText(
                isDeleting
                    ? fullRole.substring(0, text.length - 1)
                    : fullRole.substring(0, text.length + 1)
            );

            setTypingSpeed(isDeleting ? 80 : 150);

            if (!isDeleting && text === fullRole) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && text === "") {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleType, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, typingSpeed]);

    return (
        <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-slate-950" id="home">
            {/* Background elements */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full z-10 flex flex-col items-center text-center">
                {/* Greeting */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-cyan-400 font-mono text-lg mb-4 block">
                        Hello, World! 👋
                    </span>
                </motion.div>

                {/* Name */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <h1 className="text-5xl md:text-8xl font-black text-slate-100 mb-6 tracking-tight">
                        Hi, I'm <span className="text-cyan-400">Sahil Gupta</span>
                    </h1>
                </motion.div>

                {/* Typewriter Role */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="h-12 flex items-center justify-center mb-8"
                >
                    <p className="text-2xl md:text-3xl font-bold text-slate-400 font-mono border-r-4 border-cyan-500 pr-1 animate-pulse-slow">
                        {text}
                    </p>
                </motion.div>

                {/* Description */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="max-w-3xl mb-12"
                >
                    <p className="text-slate-400 text-lg md:text-xl leading-relaxed">
                        I enjoy building scalable software systems and Generative AI-driven applications,
                        with hands-on experience in full-stack web development, machine learning, and LLM/RAG-based systems.
                    </p>
                </motion.div>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
                >
                    <a
                        href="#projects"
                        className="px-10 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-lg transition-all shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2"
                    >
                        View Projects <ArrowDown size={20} />
                    </a>
                    <a
                        href="#contact"
                        className="px-10 py-4 rounded-xl border border-slate-700 bg-slate-900/50 hover:bg-slate-800 text-slate-100 font-bold text-lg transition-all flex items-center justify-center gap-2"
                    >
                        <Mail size={20} /> Contact Me
                    </a>
                </motion.div>
            </div>
        </section>
    );
}

