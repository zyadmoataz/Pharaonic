"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X, Shield, Globe, HelpCircle, PhoneCall } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Why Guidly", href: "/why-us" },
    { name: "Pricing", href: "/pricing" },
    { name: "Guidly Card", href: "/card" },
    { name: "AI Planner", href: "/ai-planner" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <nav className="fixed top-0 w-full z-50 glass border-b border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex items-center gap-2">
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="w-10 h-10 bg-gold rounded-xl flex items-center justify-center shadow-lg shadow-gold/20 group-hover:scale-110 transition-transform">
                                <Globe className="text-black w-6 h-6" />
                            </div>
                            <span className="text-2xl font-bold tracking-tighter text-white">
                                Guidly<span className="text-gold">.</span>
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:block">
                        <div className="flex items-baseline space-x-8">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-gray-300 hover:text-gold transition-colors text-sm font-medium"
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <Link
                                href="/contact"
                                className="bg-gold text-black px-6 py-2 rounded-full text-sm font-bold hover:bg-gold-light transition-colors shadow-lg shadow-gold/10"
                            >
                                Get Started
                            </Link>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-400 hover:text-white p-2"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden glass border-t border-white/5"
                >
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="block px-3 py-4 text-gray-300 hover:text-gold text-base font-medium border-b border-white/5 last:border-0"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            className="block w-full text-center bg-gold text-black px-6 py-4 rounded-xl text-base font-bold mt-4"
                            onClick={() => setIsOpen(false)}
                        >
                            Get Started
                        </Link>
                    </div>
                </motion.div>
            )}
        </nav>
    );
}
