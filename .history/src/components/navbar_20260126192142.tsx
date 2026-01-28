"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Logo } from "./ui/logo";
import { cn } from "@/lib/utils";

interface NavItem {
    name: string;
    href: string;
}

const navItems: NavItem[] = [
    { name: "Services", href: "/services" },
    { name: "AI Planner", href: "/ai-planner" },
    { name: "Guidly Card", href: "/card" },
    { name: "About", href: "/about" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

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
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-xs font-black uppercase tracking-[0.2em] text-neutral-500 hover:text-white transition-all hover:scale-105"
                        >
                            {item.name}
                        </Link>
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
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="block text-2xl font-black uppercase tracking-tighter text-white hover:text-gold transition-colors"
                            >
                                {item.name}
                            </Link>
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
