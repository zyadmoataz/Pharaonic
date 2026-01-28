"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Users, Target, Rocket, Award } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="pt-32 pb-20 bg-[#050505]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-20"
                >
                    <h1 className="text-4xl md:text-7xl font-bold text-white mb-6">
                        The Team Behind <br /> <span className="gold-gradient uppercase tracking-widest text-2xl">The Vision</span>
                    </h1>
                    <p className="text-neutral-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        We are a group of passionate Egyptians dedicated to transforming the
                        tourism experience into something safe, transparent, and truly human.
                    </p>
                </motion.div>

                <div className="relative rounded-[3rem] overflow-hidden border border-white/10 mb-32 shadow-2xl shadow-gold/5">
                    <Image
                        src="/team.jpg"
                        alt="Guidly Team"
                        width={1200}
                        height={600}
                        className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
                            Why <span className="text-gold">Guidly</span> exists.
                        </h2>
                        <p className="text-neutral-400 text-lg leading-relaxed mb-6">
                            Guidly was born out of a desire to solve the "shock" tourists often feel
                            when visiting Egypt. We saw the fragmentation, the trust gap, and the
                            digital void, and we decided to build the bridge.
                        </p>
                        <p className="text-neutral-400 text-lg leading-relaxed">
                            Authorized by the Ministry of Tourism, we prioritize safety and expert
                            guidance above all else. Our goal is to make every visitor feel like an
                            explorer, not a survivor.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 space-y-4">
                            <Users className="w-8 h-8 text-gold" />
                            <h4 className="font-bold text-white text-xl">100% Local</h4>
                            <p className="text-xs text-neutral-500">Deep understanding of Egyptian reality.</p>
                        </div>
                        <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 space-y-4">
                            <Target className="w-8 h-8 text-gold" />
                            <h4 className="font-bold text-white text-xl">Mission Driven</h4>
                            <p className="text-xs text-neutral-500">Transforming chaos into clarity.</p>
                        </div>
                        <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 space-y-4">
                            <Rocket className="w-8 h-8 text-gold" />
                            <h4 className="font-bold text-white text-xl">Enterprise Tech</h4>
                            <p className="text-xs text-neutral-500">Scalable, secure, and AI-powered.</p>
                        </div>
                        <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 space-y-4">
                            <Award className="w-8 h-8 text-gold" />
                            <h4 className="font-bold text-white text-xl">Gov Auth</h4>
                            <p className="text-xs text-neutral-500">Official support from the Ministry.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
