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
                    <div className="mb-16 text-center">
                        <h2 className="inline-block text-3xl md:text-4xl font-bold text-slate-100 relative">
                            About Me
                            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-cyan-500 rounded-full" />
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center text-slate-400">
                        {/* About Text */}
                        <div className="lg:col-span-7 space-y-6 text-lg leading-relaxed">
                            <p>
                                I am a Pre-Final year B.Tech (Hons.) student at IIT Kharagpur, majoring in Mechanical Engineering with a Minor in Computer Science and a Micro Specialization in AI & Applications.
                            </p>
                            <p>
                                I enjoy building scalable software systems and Generative AI–driven applications, with hands-on experience in full-stack web development, machine learning, and LLM/RAG-based systems.
                            </p>
                            <p>
                                A competitive programmer (Codeforces Candidate Master | CodeChef 4★), I love solving complex problems and turning ideas into real-world impactful solutions.
                            </p>
                            <p>
                                I thrive in collaborative environments and enjoy working at the intersection of engineering, software, and AI. Always excited to connect with people passionate about technology, innovation, and building meaningful products.
                            </p>
                        </div>

                        {/* Education Bento Card */}
                        <div className="lg:col-span-5 glass-card p-6 md:p-8 relative overflow-hidden group h-fit">
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
