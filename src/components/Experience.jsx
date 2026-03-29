import React from "react";
import { motion } from "framer-motion";

export default function Experience() {
    const experiences = [
        {
            role: "AI Model Developer Intern",
            company: "The Sponsored Research & Industrial Consultancy (SRIC)",
            duration: "Dec 2025 - Present",
        },
        {
            role: "Research and Development Intern",
            company: "IIT Kharagpur",
            duration: "Dec 2025 - Mar 2026",
        },
        {
            role: "Web Development Intern",
            company: "SR INDIA",
            duration: "Jan 2026 - Feb 2026",
        },
        {
            role: "Software Development Intern",
            company: "Collegedunia",
            duration: "Sep 2025 - Dec 2025",
        },
        {
            role: "Machine Learning Trainee",
            company: "Amazon ML Summer School",
            duration: "Jul 2025 - Sep 2025",
        },
    ];


    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <section id="experience" className="py-24 bg-slate-950 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="mb-16 text-center">
                        <h2 className="inline-block text-3xl md:text-4xl font-bold text-slate-100 relative">
                            Experience
                            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-cyan-500 rounded-full" />
                        </h2>
                    </div>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    {/* Main Experience */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="space-y-6"
                    >
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="glass-card p-6 flex flex-col md:flex-row md:items-center md:justify-between group"
                            >
                                <div>
                                    <h3 className="text-xl font-bold text-slate-200 group-hover:text-cyan-400 transition-colors">
                                        {exp.role}
                                    </h3>
                                    <p className="text-slate-400 font-medium text-lg">@ {exp.company}</p>
                                </div>
                                <div className="mt-4 md:mt-0">
                                    <span className="text-slate-500 font-mono text-sm">{exp.duration}</span>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
