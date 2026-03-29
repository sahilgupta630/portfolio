import React from "react";
import { motion } from "framer-motion";
import { Award, Zap, Trophy, Shield, Star, Award as AwardIcon } from "lucide-react";
import { SiCodeforces, SiCodechef } from "react-icons/si";

export default function Achievements() {
    const achievements = [
        { text: "Candidate Master at Codeforces (1900+)", icon: <SiCodeforces size={24} className="text-cyan-400" /> },
        { text: "4-Star Coder at CodeChef (1950+)", icon: <SiCodechef size={24} className="text-yellow-400" /> },
        { text: "1st Prize in Technology General Championship (TGC) Product Design 2025 (Seizure Prediction System)", icon: <Award className="text-orange-400" size={24} /> },
        { text: "2nd Position in Open IIT Product Management 2024-25 (FITPASS AI Fitness Platform)", icon: <Award className="text-blue-400" size={24} /> },
        { text: "3rd Prize in Technology General Championship (TGC) OpenSoft 2025", icon: <Award className="text-purple-400" size={24} /> },
        { text: "SDEF Scholar: Selected among the top 1% of applicants nationwide", icon: <AwardIcon className="text-emerald-400" size={24} /> },
        { text: "Department Change Merit Achievement: Awarded branch change to Mechanical Engineering (Top ~5% of first-year batch)", icon: <Zap className="text-yellow-500" size={24} /> },
        { text: "NDA Qualified: Cleared National Defence Academy written exam and received SSB call", icon: <Shield size={24} className="text-red-400" /> },
    ];

    return (
        <section id="achievements" className="py-24 bg-slate-950 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="mb-16 text-center">
                        <h2 className="inline-block text-3xl md:text-4xl font-bold text-slate-100 relative">
                            Achievements & Awards
                            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-cyan-500 rounded-full" />
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-[1fr]">
                        {achievements.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ scale: 1.02 }}
                                className="glass-card p-6 flex items-center h-full gap-4 transition-transform hover:shadow-cyan-500/10 hover:shadow-lg"
                            >
                                <div className="flex-shrink-0 p-2 bg-slate-800/80 rounded-full border border-slate-700">
                                    {item.icon}
                                </div>
                                <p className="text-slate-300 font-medium text-lg leading-relaxed">
                                    {item.text}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
