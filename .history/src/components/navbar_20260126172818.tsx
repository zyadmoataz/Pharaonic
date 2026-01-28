"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import { Logo } from "./ui/logo";
import { cn } from "@/lib/utils";

interface NavItem {
    name: string;
    href: string;
}

const navItems: NavItem[] = [
    { name: "Services", href: "/services" },
    { name: "AI Planner", href: "/ai-planner" },
    { name: "Pricing", href: "/pricing" },
    { name: "About", href: "/about" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex-shrink-0">
                        <Link href="/">
                            <Logo size="md" />
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-sm font-medium text-neutral-400 hover:text-gold transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            className="bg-gold hover:bg-white text-black px-6 py-2.5 rounded-xl text-sm font-bold transition-all shadow-lg shadow-gold/20 flex items-center gap-2"
                        >
                            Contact Expert <ChevronRight className="w-4 h-4" />
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
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-zinc-950 border-t border-white/5"
                    >
                        <div className="px-4 py-8 space-y-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block p-4 text-lg font-medium text-white hover:bg-white/5 rounded-2xl border border-transparent hover:border-white/10 transition-all"
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <Link
                                href="/contact"
                                onClick={() => setIsOpen(false)}
                                className="block p-5 bg-gold text-black rounded-2xl font-bold text-center shadow-lg shadow-gold/10"
                            >
                                Contact Expert
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
