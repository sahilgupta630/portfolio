import React from "react";
import { motion } from "framer-motion";

export default function Experience() {
    const experiences = [
        {
            role: "AI Model Developer Intern",
            company: "Sponsored Research & Industrial Consultancy (SRIC) | IIT Kharagpur",
            duration: "Dec 2025 - Present",
            description: [
                "Developed SRIC Dristikon, an analytics platform featuring 8 KPIs and interactive dashboards for project analysis",
                "Architected ML-driven modules to automate faculty profiling and identify gaps in project management workflows",
                "Built SRIC Compass, an RAG-based assistant utilizing semantic search and LLMs to parse complex GFR policy docs",
                "Deployed a production-ready bot on official SRIC website, enabling real-time, high-precision policy query resolution",
            ],
        },
        {
            role: "Research and Development Intern",
            company: "IIT Kharagpur",
            duration: "Dec 2025 - Mar 2026",
            description: [
                "Engineered and optimized high-fidelity Deep Learning models for real-time signal processing and predictive diagnostics, leveraging Python to architect end-to-end pipelines that transform high-dimensional sensor data into actionable insights within a rigorous R&D environment.",
            ],
        },
        {
            role: "Web Development Intern",
            company: "SR INDIA",
            duration: "Jan 2026 - Feb 2026",
            description: [
                "Engineered and deployed responsive, mobile-first web applications, integrating dynamic API-driven features and optimizing frontend architecture to ensure high-performance user experiences across all device platforms.",
            ],
        },
        {
            role: "Software Development Intern",
            company: "Collegedunia",
            duration: "Sep 2025 - Dec 2025",
            description: [
                "Engineered and optimized user-facing components for the main education portal, improving UI responsiveness and ensuring seamless navigation for millions of monthly active users.",
                "Designed and implemented robust RESTful APIs using Python to streamline data retrieval processes, effectively reducing server response time by approximately 15% through optimized query logic.",
                "Authored comprehensive unit tests and performed rigorous debugging to ensure high-performance code, following Agile methodologies to deliver production-ready features.",
            ],
        },
        {
            role: "Machine Learning Trainee",
            company: "Amazon ML Summer School",
            duration: "Jul 2025 - Sep 2025",
            description: [
                "Completed an immersive ML training program mentored by Amazon Applied Scientists, focusing on industry-standard data science practices.",
                "Applied theoretical knowledge to develop a multi-class classification model for e-commerce product categorization using Python, achieving an 85% validation accuracy.",
                "Analyzed large datasets to uncover trends, demonstrating proficiency in data preprocessing, feature engineering, and model evaluation.",
            ],
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
                                className="glass-card p-6 flex flex-col group"
                            >
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-200 group-hover:text-cyan-400 transition-colors">
                                            {exp.role}
                                        </h3>
                                        <p className="text-slate-400 font-medium text-lg">@ {exp.company}</p>
                                    </div>
                                    <div className="mt-2 md:mt-0">
                                        <span className="text-slate-500 font-mono text-sm">{exp.duration}</span>
                                    </div>
                                </div>
                                {exp.description && (
                                    <ul className="list-disc list-inside space-y-2 text-slate-400 text-base">
                                        {exp.description.map((point, i) => (
                                            <li key={i} className="pl-2 -indent-5 ml-5">
                                                <span className="text-slate-300">{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>

    );
}
