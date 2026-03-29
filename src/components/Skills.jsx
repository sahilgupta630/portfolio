import React from "react";
import { motion } from "framer-motion";
import { Terminal, Cpu, Database, Layout, Settings, Code2, Globe, Box } from "lucide-react";

export default function Skills() {
    const skillCategories = [
        {
            title: "Programming & Web",
            icon: <Globe className="text-cyan-400" size={24} />,
            skills: ["C", "C++", "Python", "JavaScript", "SQL", "HTML", "CSS"],
        },
        {
            title: "Frameworks & Libraries",
            icon: <Box className="text-blue-400" size={24} />,
            skills: ["C++ STL", "React.js", "Node.js", "Express.js", "FastAPI", "Bootstrap", "LangChain", "Streamlit"],
        },
        {
            title: "Tools & Platforms",
            icon: <Settings className="text-purple-400" size={24} />,
            skills: ["Git", "GitHub", "GitHub Actions", "Docker Compose", "VS Code", "Arduino IDE", "Postman", "Figma"],
        },
        {
            title: "Core CS & Expertise",
            icon: <Database className="text-emerald-400" size={24} />,
            skills: ["DSA", "Object-Oriented Programming", "Web App Development", "DBMS", "Generative AI", "RAG"],
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <section id="skills" className="py-24 bg-slate-900 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="mb-16 text-center">
                        <h2 className="inline-block text-3xl md:text-4xl font-bold text-slate-100 relative">
                            Skills & Expertise
                            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-cyan-500 rounded-full" />
                        </h2>
                    </div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    >
                        {skillCategories.map((category, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="glass-card p-8 rounded-2xl border border-slate-800 hover:border-cyan-500/30 transition-all group"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 bg-slate-800/50 rounded-lg group-hover:scale-110 transition-transform">
                                        {category.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-100">{category.title}</h3>
                                </div>
                                <div className="flex flex-wrap gap-2 text-slate-200">
                                    {category.skills.map((skill, i) => (
                                        <span
                                            key={i}
                                            className="px-4 py-2 bg-slate-800/40 rounded-lg border border-slate-700/50 text-sm font-medium hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-all cursor-default"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
