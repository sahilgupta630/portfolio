import React from "react";
import { motion } from "framer-motion";
import { Terminal, Cpu, Database, Layout, Settings, Server, ShieldCheck, Layers } from "lucide-react";

export default function Skills() {
    const skillCategories = [
        {
            title: "Languages & Core CS",
            icon: <Terminal className="text-cyan-400" size={24} />,
            skills: ["C++", "Python", "JavaScript", "TypeScript", "C", "SQL", "DSA", "OOP", "System Design", "Distributed Systems", "Microservices"],
        },
        {
            title: "Frontend Development",
            icon: <Layout className="text-blue-400" size={24} />,
            skills: ["HTML5", "CSS3", "React.js", "Next.js", "Redux Toolkit", "Tailwind CSS", "Material UI", "Framer Motion", "Bootstrap", "Rough.js"],
        },
        {
            title: "Backend & Cloud",
            icon: <Server className="text-purple-400" size={24} />,
            skills: ["Node.js", "Express.js", "FastAPI", "REST APIs", "WebSockets", "Socket.IO", "Kafka", "Redis", "Firebase Functions", "AWS", "GCP", "Azure"],
        },
        {
            title: "AI & Data Expertise",
            icon: <Cpu className="text-emerald-400" size={24} />,
            skills: ["Generative AI", "RAG", "LangChain", "LLMs", "TensorFlow.js", "Streamlit", "PostgreSQL", "MongoDB", "MySQL", "PostGIS", "Firebase"],
        },
        {
            title: "DevOps & Testing",
            icon: <ShieldCheck className="text-orange-400" size={24} />,
            skills: ["Docker", "Docker Compose", "Kubernetes", "GitHub Actions", "CI/CD Pipelines", "Jest", "Performance Tuning", "Scalability", "Optimization"],
        },
        {
            title: "Tools & Platforms",
            icon: <Layers className="text-pink-400" size={24} />,
            skills: ["Git", "GitHub", "VS Code", "Postman", "Vercel", "Netlify", "MongoDB Compass", "Figma", "Arduino IDE", "WebRTC", "Real-time Collaboration"],
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
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {skillCategories.map((category, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="glass-card p-8 rounded-2xl border border-slate-800 hover:border-cyan-500/30 transition-all group flex flex-col h-full"
                            >
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="p-3 bg-slate-800/50 rounded-lg group-hover:scale-110 transition-transform">
                                        {category.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-100 leading-tight">{category.title}</h3>
                                </div>
                                <div className="flex flex-wrap gap-x-2 gap-y-3 text-slate-200">
                                    {category.skills.map((skill, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1.5 bg-slate-800/40 rounded-lg border border-slate-700/50 text-sm font-medium hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-all cursor-default"
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

