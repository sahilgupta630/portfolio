import React from "react";
import { motion } from "framer-motion";
import { Award, Zap, Trophy, Shield, Star, Award as AwardIcon } from "lucide-react";

export default function Achievements() {
    const achievements = [
        { text: "Candidate Master at Codeforces (1900+)", icon: <Trophy size={24} className="text-cyan-400" /> },
        { text: "4-Star Coder at CodeChef (1950+)", icon: <Star size={24} className="text-yellow-400" /> },
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
                    <div className="flex items-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 flex items-center">
                            Achievements & Awards
                        </h2>
                        <div className="h-[1px] bg-slate-700 ml-6 flex-grow rounded" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {achievements.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ scale: 1.02 }}
                                className="glass-card p-6 flex items-start gap-4 transition-transform hover:shadow-cyan-500/10 hover:shadow-lg"
                            >
                                <div className="mt-1 flex-shrink-0 p-2 bg-slate-800/80 rounded-full border border-slate-700">
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
