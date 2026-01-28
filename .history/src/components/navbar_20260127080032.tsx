"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
        name: "Services",
        href: "/services",
        dropdown: [
            { name: "Recommended Tours", href: "/recommendations", description: "Curated premium Egyptian journeys.", icon: <Sparkles className="w-4 h-4" /> },
            { name: "AI Trip Planner", href: "/ai-planner", description: "Design your custom itinerary.", icon: <Zap className="w-4 h-4" /> },
            { name: "NileVista Card", href: "/card", description: "Cashless payment security layer.", icon: <Shield className="w-4 h-4" /> },
            { name: "Why NileVista", href: "/why-us", description: "Our competitive advantages.", icon: <ArrowRight className="w-4 h-4" /> },
            { name: "Client Feedback", href: "/feedback", description: "What our tourists says.", icon: <User className="w-4 h-4" /> },
        ]
    },
    { name: "Blogs", href: "/blogs" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
];

export function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const isActive = (path: string) => pathname === path;

    return (
        <nav className={cn(
            "fixed top-6 md:top-10 left-1/2 -translate-x-1/2 w-[92%] md:w-[95%] max-w-7xl z-50 transition-all duration-500",
            scrolled ? "bg-black/80 backdrop-blur-3xl border-white/10 py-3" : "bg-black/40 backdrop-blur-2xl border-white/5 py-4",
            "border rounded-[2rem] md:rounded-[2.5rem] px-6 md:px-8 shadow-2xl"
        )}>
            <div className="flex justify-between items-center h-14 md:h-16">
                <div className="flex-shrink-0">
                    <Link href="/">
                        <Logo size="md" />
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center space-x-8 xl:space-x-10">
                    {navItems.map((item) => (
                        <div
                            key={item.name}
                            className="relative"
                            onMouseEnter={() => setActiveDropdown(item.name)}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            <Link
                                href={item.href}
                                className={cn(
                                    "text-[10px] xl:text-xs font-black uppercase tracking-[0.2em] transition-all flex items-center gap-1 py-4",
                                    isActive(item.href) || (item.dropdown && item.dropdown.some(d => isActive(d.href)))
                                        ? "text-gold" : "text-neutral-500 hover:text-white"
                                )}
                            >
                                {item.name}
                                {item.dropdown && <ChevronDown className={cn("w-3 h-3 transition-transform", activeDropdown === item.name && "rotate-180")} />}
                            </Link>

                            <AnimatePresence>
                                {item.dropdown && activeDropdown === item.name && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 5, scale: 0.98 }}
                                        className="absolute top-[80%] left-1/2 -translate-x-1/2 mt-2 w-80 bg-zinc-950/95 backdrop-blur-3xl border border-white/10 rounded-3xl p-6 shadow-2xl z-[60]"
                                    >
                                        <div className="space-y-4">
                                            {item.dropdown.map((subItem) => (
                                                <Link
                                                    key={subItem.name}
                                                    href={subItem.href}
                                                    onClick={() => setActiveDropdown(null)}
                                                    className={cn(
                                                        "group/item flex items-start gap-4 p-4 rounded-2xl transition-all",
                                                        isActive(subItem.href) ? "bg-white/5 border border-white/5" : "hover:bg-white/5"
                                                    )}
                                                >
                                                    <div className={cn(
                                                        "w-10 h-10 rounded-xl flex items-center justify-center transition-all",
                                                        isActive(subItem.href) ? "bg-gold text-black" : "bg-gold/10 text-gold group-hover/item:bg-gold group-hover/item:text-black"
                                                    )}>
                                                        {subItem.icon}
                                                    </div>
                                                    <div>
                                                        <div className={cn("text-sm font-black mb-1 tracking-tight", isActive(subItem.href) ? "text-gold" : "text-white")}>{subItem.name}</div>
                                                        <div className="text-[10px] text-zinc-500 font-medium leading-relaxed uppercase tracking-tighter">{subItem.description}</div>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}

                    <div className="w-px h-6 bg-white/10 mx-2" />

                    <div className="flex items-center gap-6">
                        <SignedOut>
                            <SignInButton mode="modal">
                                <button className="text-[10px] xl:text-xs font-black uppercase tracking-[0.2em] text-gold hover:text-white transition-all">
                                    JOIN NETWORK
                                </button>
                            </SignInButton>
                        </SignedOut>
                        <SignedIn>
                            <UserButton
                                appearance={{
                                    elements: {
                                        userButtonAvatarBox: "w-9 h-9 md:w-10 h-10 border-2 border-gold/40 hover:border-gold transition-all"
                                    }
                                }}
                            />
                        </SignedIn>

                        <Link
                            href="/contact"
                            className="bg-white text-black px-6 xl:px-8 py-3 xl:py-4 rounded-2xl text-[9px] xl:text-[10px] uppercase font-black tracking-widest hover:bg-gold transition-all"
                        >
                            CONSULT EXPERTS
                        </Link>
                    </div>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="lg:hidden flex items-center gap-4">
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 text-neutral-400 hover:text-white transition-colors"
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
                        className="absolute top-full left-0 w-full mt-4 bg-black/95 backdrop-blur-3xl border border-white/10 rounded-[2rem] p-8 space-y-6 shadow-2xl overflow-hidden max-h-[80vh] overflow-y-auto"
                    >
                        {navItems.map((item) => (
                            <div key={item.name} className="space-y-4">
                                <Link
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className={cn(
                                        "block text-2xl font-black uppercase tracking-tighter transition-colors",
                                        isActive(item.href) ? "text-gold" : "text-white hover:text-gold"
                                    )}
                                >
                                    {item.name}
                                </Link>
                                {item.dropdown && (
                                    <div className="pl-4 space-y-4 border-l border-white/10 ml-1">
                                        {item.dropdown.map(sub => (
                                            <Link
                                                key={sub.name}
                                                href={sub.href}
                                                onClick={() => setIsOpen(false)}
                                                className={cn(
                                                    "block text-xs font-black uppercase tracking-widest transition-colors",
                                                    isActive(sub.href) ? "text-gold" : "text-zinc-500 hover:text-white"
                                                )}
                                            >
                                                {sub.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                        <div className="pt-6 border-t border-white/5 space-y-4">
                            <SignedOut>
                                <SignInButton mode="modal">
                                    <button className="w-full py-5 bg-gold text-black rounded-2xl font-black uppercase tracking-widest text-xs">JOIN NETWORK</button>
                                </SignInButton>
                            </SignedOut>
                            <Link
                                href="/contact"
                                onClick={() => setIsOpen(false)}
                                className="block w-full py-5 bg-white text-black rounded-2xl font-black uppercase tracking-widest text-xs text-center"
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
