"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Globe, Shield, Zap, Sparkles, ArrowRight } from "lucide-react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Logo } from "./ui/logo";
import { cn } from "@/lib/utils";

interface NavItem {
    name: string;
    href: string;
    dropdown?: { name: string; href: string; description: string; icon: React.ReactNode }[];
}

const navItems: NavItem[] = [
    { name: "Home", href: "/" },
    {
        name: "Deployment",
        href: "/ai-planner",
        dropdown: [
            { name: "Strategic Plans", href: "/recommendations", description: "Pre-defined sovereign paths.", icon: <Sparkles className="w-4 h-4" /> },
            { name: "AI Architect", href: "/ai-planner", description: "Custom itinerary protocol.", icon: <Zap className="w-4 h-4" /> },
            { name: "Guidly Card", href: "/card", description: "Monetary security layer.", icon: <Shield className="w-4 h-4" /> },
            { name: "Advantage Audit", href: "/why-us", description: "Why disintermediation wins.", icon: <ArrowRight className="w-4 h-4" /> },
        ]
    },
    { name: "Intelligence", href: "/blogs" },
    { name: "About", href: "/about" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    return (
        <nav className="fixed top-10 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 bg-black/40 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] px-8 py-4 shadow-2xl">
            <div className="flex justify-between items-center h-16">
                <div className="flex-shrink-0">
                    <Link href="/">
                        <Logo size="md" />
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-10">
                    {navItems.map((item) => (
                        <div
                            key={item.name}
                            className="relative group"
                            onMouseEnter={() => setActiveDropdown(item.name)}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            <Link
                                href={item.href}
                                className="text-xs font-black uppercase tracking-[0.2em] text-neutral-500 hover:text-white transition-all flex items-center gap-1 py-4"
                            >
                                {item.name}
                                {item.dropdown && <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform" />}
                            </Link>

                            {item.dropdown && activeDropdown === item.name && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    onMouseEnter={() => setActiveDropdown(item.name)}
                                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80 bg-[#0a0a0a]/95 backdrop-blur-3xl border border-white/10 rounded-3xl p-6 shadow-2xl z-[60]"
                                >
                                    <div className="space-y-4">
                                        {item.dropdown.map((subItem) => (
                                            <Link
                                                key={subItem.name}
                                                href={subItem.href}
                                                className="group/item flex items-start gap-4 p-4 rounded-2xl hover:bg-white/5 transition-all"
                                            >
                                                <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center text-gold group-hover/item:bg-gold group-hover/item:text-black transition-all">
                                                    {subItem.icon}
                                                </div>
                                                <div>
                                                    <div className="text-sm font-black text-white mb-1 tracking-tight">{subItem.name}</div>
                                                    <div className="text-[10px] text-zinc-500 font-medium leading-relaxed uppercase tracking-tighter">{subItem.description}</div>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    ))}

                    <div className="w-px h-6 bg-white/10 mx-4" />

                    <SignedOut>
                        <SignInButton mode="modal">
                            <button className="text-xs font-black uppercase tracking-[0.2em] text-gold hover:text-white transition-all">
                                JOIN NETWORK
                            </button>
                        </SignInButton>
                    </SignedOut>
                    <SignedIn>
                        <UserButton
                            appearance={{
                                elements: {
                                    userButtonAvatarBox: "w-10 h-10 border-2 border-gold/40 hover:border-gold transition-all"
                                }
                            }}
                        />
                    </SignedIn>

                    <Link
                        href="/contact"
                        className="bg-white text-black px-8 py-4 rounded-2xl text-[10px] uppercase font-black tracking-widest hover:bg-gold transition-all"
                    >
                        CONSULT EXPERTS
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-neutral-400 hover:text-white transition-colors"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        className="absolute top-full left-0 w-full mt-4 bg-black/90 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-8 space-y-6 shadow-2xl overflow-hidden"
                    >
                        {navItems.map((item) => (
                            <div key={item.name} className="space-y-4">
                                <Link
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block text-2xl font-black uppercase tracking-tighter text-white hover:text-gold transition-colors"
                                >
                                    {item.name}
                                </Link>
                                {item.dropdown && (
                                    <div className="pl-4 space-y-3 border-l border-white/10 ml-1">
                                        {item.dropdown.map(sub => (
                                            <Link
                                                key={sub.name}
                                                href={sub.href}
                                                onClick={() => setIsOpen(false)}
                                                className="block text-sm font-bold text-zinc-500 hover:text-white uppercase tracking-widest"
                                            >
                                                {sub.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                        <div className="pt-6 border-t border-white/5 space-y-6">
                            <SignedOut>
                                <SignInButton mode="modal">
                                    <button className="w-full py-5 bg-gold text-black rounded-2xl font-black uppercase tracking-widest">JOIN NETWORK</button>
                                </SignInButton>
                            </SignedOut>
                            <Link
                                href="/contact"
                                onClick={() => setIsOpen(false)}
                                className="block w-full py-5 bg-white text-black rounded-2xl font-black uppercase tracking-widest text-center"
                            >
                                CONSULT EXPERTS
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
