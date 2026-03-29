import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Code, Menu, X } from "lucide-react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Experience", href: "#experience" },
        { name: "Projects", href: "#projects" },
        { name: "Achievements", href: "#achievements" },
        { name: "Contact", href: "#contact" },
    ];

    const socialLinks = [
        { name: "GitHub", href: "https://github.com/sahilgupta630", icon: <Github size={20} /> },
        { name: "LinkedIn", href: "https://www.linkedin.com/in/sahil-gupta-904332293/", icon: <Linkedin size={20} /> },
        { name: "Codeforces", href: "https://codeforces.com/profile/skg630", icon: <Code size={20} /> },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-slate-900/80 backdrop-blur-md shadow-lg shadow-cyan-900/10 py-4 border-b border-slate-700/50" : "bg-transparent py-6"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
                {/* Logo */}
                <a href="#" className="text-xl font-bold font-mono tracking-tighter hover:text-cyan-400 transition-colors">
                    <span className="text-cyan-400">&lt;</span>
                    Sahil{" "}
                    <span className="text-cyan-400">/&gt;</span>
                </a>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Social Icons Desktop */}
                <div className="hidden md:flex items-center space-x-4">
                    {socialLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-slate-300 hover:text-cyan-400 hover:bg-white/5 rounded-full transition-all"
                        >
                            {link.icon}
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-slate-300 hover:text-cyan-400 focus:outline-none"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="md:hidden bg-slate-900 border-b border-slate-700/50"
                >
                    <div className="px-6 py-4 space-y-4 flex flex-col">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                        <div className="pt-4 border-t border-slate-700/50 flex space-x-4">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 text-slate-300 hover:text-cyan-400 hover:bg-white/5 rounded-full transition-all"
                                >
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </motion.div>
            )}
        </motion.nav>
    );
}
