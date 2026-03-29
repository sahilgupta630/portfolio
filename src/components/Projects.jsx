import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Folder } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
    const projects = [
        {
            title: "Terminal-based Chess Engine",
            description: "A fully functional chess engine implemented in the terminal.",
            tech: ["C++", "Algorithms"],
            links: { github: "#", external: "#" },
        },
        {
            title: "Cube Solver",
            description: "A specialized problem-solving algorithm tool to solve standard logic cubes.",
            tech: ["Python", "Search Alg"],
            links: { github: "#", external: "#" },
        },
        {
            title: "Vibecoder Extension",
            description: "A Chrome extension built to enhance coding workflows and developer experience.",
            tech: ["Javascript", "React", "Chrome APIs"],
            links: { github: "#", external: "#" },
        },
        {
            title: "Expense Tracker Web Application",
            description: "Full-stack web application to track daily expenses, visualize spending, and manage budgets.",
            tech: ["React", "Node.js", "MongoDB"],
            links: { github: "#", external: "#" },
        },
        {
            title: "Face-Mask-MTCNN",
            description: "Machine Learning model utilizing MTCNN for real-time face mask detection.",
            tech: ["Python", "ML", "Computer Vision"],
            links: { github: "#", external: "#" },
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <section id="projects" className="py-24 bg-slate-900 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-100 flex items-center">
                        Featured Projects
                    </h2>
                    <div className="h-[1px] bg-slate-700 ml-6 flex-grow rounded" />
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -10 }}
                            className="glass-card p-8 flex flex-col justify-between h-full group"
                        >
                            <div>
                                <div className="flex justify-between items-center mb-6">
                                    <Folder size={40} className="text-cyan-400" />
                                    <div className="flex gap-4">
                                        <a
                                            href={project.links.github}
                                            className="text-slate-400 hover:text-cyan-400 transition-colors"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <FaGithub size={20} />
                                        </a>
                                        <a
                                            href={project.links.external}
                                            className="text-slate-400 hover:text-cyan-400 transition-colors"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <ExternalLink size={20} />
                                        </a>
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold text-slate-200 mb-4 group-hover:text-cyan-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-slate-400 leading-relaxed mb-8">
                                    {project.description}
                                </p>
                            </div>
                            <ul className="flex flex-wrap gap-3 font-mono text-sm text-slate-500">
                                {project.tech.map((tech, i) => (
                                    <li key={i}>{tech}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="mt-20 flex flex-col items-center text-center space-y-6"
                >
                    <p className="text-xl text-slate-300">
                        Look at my GitHub for more projects:
                    </p>
                    <a
                        href="https://github.com/sahilgupta630"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-slate-700 bg-slate-800/50 hover:bg-slate-700 hover:border-cyan-500 text-slate-200 hover:text-cyan-400 transition-all shadow-lg hover:shadow-cyan-500/20 font-mono text-lg group"
                    >
                        <FaGithub size={24} className="group-hover:scale-110 transition-transform" />
                        github.com/sahilgupta630
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
