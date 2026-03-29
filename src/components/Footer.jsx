import React, { useState } from "react";
import { Code, Mail, Check } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
    const [showEmail, setShowEmail] = useState(false);

    const handleEmailClick = () => {
        navigator.clipboard.writeText("skg011105@gmail.com");
        setShowEmail(true);
        setTimeout(() => setShowEmail(false), 3000);
    };

    return (
        <footer id="contact" className="py-16 bg-slate-950 text-center border-t border-slate-800">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">Let's Connect</h2>
                    <p className="text-slate-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                        Whether you have a question, a project idea, or just want to say hi,
                        I'll try my best to get back to you!
                    </p>
                    <button
                        onClick={handleEmailClick}
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-medium text-lg transition-all shadow-[0_0_15px_rgba(6,182,212,0.5)] hover:shadow-[0_0_25px_rgba(6,182,212,0.8)]"
                    >
                        {showEmail ? <Check size={20} /> : <Mail size={20} />}
                        {showEmail ? "skg011105@gmail.com" : "Say Hello"}
                    </button>
                </motion.div>

                <div className="flex justify-center flex-wrap gap-6 mb-10">
                    <a
                        href="https://github.com/sahilgupta630"
                        className="p-3 text-slate-400 hover:text-cyan-400 hover:bg-slate-800 rounded-full transition-all border border-transparent hover:border-cyan-500/30"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub size={24} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/sahil-gupta-904332293/"
                        className="p-3 text-slate-400 hover:text-cyan-400 hover:bg-slate-800 rounded-full transition-all border border-transparent hover:border-cyan-500/30"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedin size={24} />
                    </a>
                    <a
                        href="https://codeforces.com/profile/skg630"
                        className="p-3 text-slate-400 hover:text-cyan-400 hover:bg-slate-800 rounded-full transition-all border border-transparent hover:border-cyan-500/30"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Code size={24} />
                    </a>
                </div>

                <div className="text-slate-500 font-mono text-sm">
                    <p className="mb-2">Let's build something amazing together.</p>
                    <p>
                        Designed & Built by <span className="text-cyan-500">Sahil Gupta</span> &copy; {new Date().getFullYear()}
                    </p>
                </div>
            </div>
        </footer>
    );
}
