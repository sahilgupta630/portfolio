import React from "react";
import { motion } from "framer-motion";

export default function AboutEducation() {
    return (
        <section id="about" className="py-24 bg-slate-900 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex items-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 flex items-center">
                            <span className="text-cyan-400 font-mono text-2xl mr-3">01.</span> About Me
                        </h2>
                        <div className="h-[1px] bg-slate-700 ml-6 flex-grow rounded" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-slate-400">
                        {/* About Text */}
                        <div className="space-y-6 text-lg leading-relaxed">
                            <p>
                                I thrive in collaborative environments and enjoy working at the intersection of engineering, software, and AI. A competitive programmer at heart, I love solving complex problems and turning ideas into real-world impactful solutions.
                            </p>
                            <p>
                                Always excited to connect with people passionate about technology, innovation, and building meaningful products.
                            </p>
                        </div>

                        {/* Education Bento Card */}
                        <div className="glass-card p-6 md:p-8 relative overflow-hidden group">
                            <div className="absolute top-0 left-0 w-2 h-full bg-cyan-500 rounded-l" />
                            <h3 className="text-xl font-bold text-slate-200 mb-4 flex items-center">
                                Education
                            </h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-lg font-semibold text-cyan-400">Pre-Final Year B.Tech (Hons.)</h4>
                                    <p className="text-slate-200 font-medium">IIT Kharagpur</p>
                                    <p className="text-sm mt-2">
                                        Majoring in <span className="text-slate-300 font-medium">Mechanical Engineering</span> with a Minor in <span className="text-slate-300 font-medium">Computer Science</span> and a Micro Specialization in <span className="text-slate-300 font-medium">AI & Applications</span>.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
