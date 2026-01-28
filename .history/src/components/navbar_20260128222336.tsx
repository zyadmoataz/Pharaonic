"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Plane, Sparkles, User, Shield, Zap, Globe, Menu, X, Star, ChevronDown } from "lucide-react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Logo } from "./ui/logo";
import { cn } from "@/lib/utils";

interface NavItem {
    name: string;
    href: string;
    dropdown?: { name: string; href: string; description: string; icon: React.ReactNode; category: string }[];
}

const navItems: NavItem[] = [
    { name: "Home", href: "/" },
    {
        name: "Services",
        href: "/services",
        dropdown: [
            {
                name: "AI Trip Planner",
                href: "/ai-generator",
                description: "Personalized trip planning using our advanced AI to match your travel personality.",
                icon: <Sparkles className="w-4 h-4" />,
                category: "Planning"
            },
            {
                name: "Travel Permits",
                href: "/licenses",
                description: "Quick and easy authorization for photography, research, and technical deployment.",
                icon: <Globe className="w-4 h-4" />,
                category: "Planning"
            },
            {
                name: "Custom Itinerary",
                href: "/personalized-plan",
                description: "Design your own perfect Egyptian journey with our flexible planning framework.",
                icon: <Zap className="w-4 h-4" />,
                category: "Planning"
            },
            {
                name: "Sovereign Card",
                href: "/card",
                description: "Secure payments with automated VAT refunds and integrated transit across Egypt.",
                icon: <Shield className="w-4 h-4" />,
                category: "Essential"
            },
            {
                name: "Private Guides",
                href: "/tour-guide",
                description: "Expert local guides providing personalized support and historical insights.",
                icon: <User className="w-4 h-4" />,
                category: "Essential"
            },
            {
                name: "Top Recommendations",
                href: "/recommendations",
                description: "Hand-picked travel routes verified by our local experts for the best experience.",
                icon: <Star className="w-4 h-4" />,
                category: "Essential"
            },
        ]
    },
    {
        name: "Stories & Info",
        href: "/about",
        dropdown: [
            {
                name: "Travel Stories",
                href: "/stories",
                description: "Explore unique experiences and hidden gems from our community of travelers.",
                icon: <ArrowRight className="w-4 h-4" />,
                category: "Discovery"
            },
            {
                name: "Why Choose Us",
                href: "/why-us",
                description: "Learn about our commitment to excellence and authentic travel experiences.",
                icon: <Shield className="w-4 h-4" />,
                category: "Discovery"
            },
            {
                name: "Our Blog",
                href: "/blogs",
                description: "Latest news, travel tips, and updates from the heart of Egyptian tourism.",
                icon: <Zap className="w-4 h-4" />,
                category: "Discovery"
            },
            {
                name: "Terms of Service",
                href: "/terms",
                description: "Our clear and simple guidelines for a safe and enjoyable booking experience.",
                icon: <Shield className="w-4 h-4" />,
                category: "Support"
            },
            {
                name: "Privacy Policy",
                href: "/privacy",
                description: "How we protect your data and ensure your personal information stays private.",
                icon: <Globe className="w-4 h-4" />,
                category: "Support"
            },
        ]
    },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
];

export function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [scrolled, setScrolled] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        const handleClickOutside = (event: MouseEvent) => {
            if (navRef.current && !navRef.current.contains(event.target as Node)) {
                setActiveDropdown(null);
            }
        };

        window.addEventListener("scroll", handleScroll);
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const isActive = (path: string) => pathname === path;

    return (
        <nav className={cn(
            "fixed top-12 md:top-14 left-1/2 -translate-x-1/2  md:w-[95%] max-w-[75%] z-50 transition-all duration-700",
            scrolled
                ? "bg-zinc-950/80 backdrop-blur-3xl border-white/10 py-3 shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)]"
                : "bg-transparent border-white/5 py-5",
            "border rounded-[2rem] md:rounded-full px-6 md:px-10"
        )}>
            <div className="flex justify-between items-center h-12 md:h-14">
                <div className="flex-shrink-0">
                    <Link href="/" className="group">
                        <Logo size="md" className="group-hover:scale-105 transition-transform duration-500" />
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div ref={navRef} className="hidden xl:flex items-center space-x-10 xl:space-x-14 h-full">
                    {navItems.map((item) => (
                        <div
                            key={item.name}
                            className="relative h-full flex items-center"
                        >
                            <button
                                onClick={() => {
                                    if (item.dropdown) {
                                        setActiveDropdown(activeDropdown === item.name ? null : item.name);
                                    }
                                }}
                                className={cn(
                                    "text-[10px] xl:text-[11px] font-black uppercase tracking-[0.25em] transition-all flex items-center gap-2 py-4 relative group/link",
                                    isActive(item.href) || (item.dropdown && item.dropdown.some(d => isActive(d.href)))
                                        ? "text-white" : "text-zinc-400 hover:text-zinc-200"
                                )}
                            >
                                <span className="tracking-[0.2em]">{item.name}</span>
                                {item.dropdown && <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-500 opacity-50", activeDropdown === item.name && "rotate-180 opacity-100")} />}

                                <span className={cn(
                                    "absolute bottom-2 left-0 w-0 h-px bg-gold transition-all duration-500 group-hover/link:w-full",
                                    (isActive(item.href) || (item.dropdown && item.dropdown.some(d => isActive(d.href)))) && "w-full"
                                )} />
                            </button>

                            <AnimatePresence>
                                {item.dropdown && activeDropdown === item.name && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 15, scale: 0.98 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.99 }}
                                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                                        className="absolute top-[100%] left-1/2 -translate-x-1/2 mt-4 w-[1000px] bg-zinc-950/95 backdrop-blur-[40px] border border-white/10 rounded-[3rem] p-12 shadow-[0_20px_80px_-20px_rgba(0,0,0,0.8)] z-[60] overflow-hidden"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent pointer-events-none" />

                                        <div className={cn(
                                            "grid gap-14 relative z-10",
                                            Array.from(new Set(item.dropdown?.map(d => (d as any).category))).length === 1 ? "grid-cols-1 max-w-sm mx-auto" :
                                                Array.from(new Set(item.dropdown?.map(d => (d as any).category))).length === 2 ? "grid-cols-2 max-w-4xl mx-auto" : "grid-cols-3"
                                        )}>
                                            {Array.from(new Set(item.dropdown?.map(d => (d as any).category))).map((cat) => (
                                                <div key={cat} className="space-y-8">
                                                    <div className="flex items-center gap-4">
                                                        <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold">{cat}</h4>
                                                        <div className="h-px flex-1 bg-white/10" />
                                                    </div>
                                                    <div className="space-y-6">
                                                        {item.dropdown?.filter(d => (d as any).category === cat).map((subItem) => (
                                                            <Link
                                                                key={subItem.name}
                                                                href={subItem.href}
                                                                onClick={() => setActiveDropdown(null)}
                                                                className={cn(
                                                                    "group/item flex items-start gap-5 p-2 -m-2 rounded-2xl transition-all duration-300",
                                                                    isActive(subItem.href) ? "opacity-100" : "opacity-60 hover:opacity-100"
                                                                )}
                                                            >
                                                                <div className={cn(
                                                                    "w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-500 flex-shrink-0 border mt-0.5",
                                                                    isActive(subItem.href)
                                                                        ? "bg-gold border-gold text-black"
                                                                        : "bg-white/5 border-white/10 text-gold group-hover/item:scale-110 group-hover/item:bg-white group-hover/item:border-white group-hover/item:text-black"
                                                                )}>
                                                                    {subItem.icon}
                                                                </div>
                                                                <div className="flex-1">
                                                                    <div className={cn("text-xs font-black mb-1 tracking-[0.1em] uppercase", isActive(subItem.href) ? "text-gold" : "text-white")}>{subItem.name}</div>
                                                                    <div className="text-[11px] text-zinc-400 font-medium leading-relaxed uppercase tracking-[0.05em]">{subItem.description}</div>
                                                                </div>
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="mt-14 pt-10 border-t border-white/5 flex items-center justify-between relative z-10">
                                            <div className="flex items-center gap-6">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                                                    <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-zinc-500">Live Authorization</span>
                                                </div>
                                                <div className="w-px h-3 bg-white/10" />
                                                <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-zinc-600">Version 2.0.4 - Secure Layer</span>
                                            </div>
                                            <Link href="/services" onClick={() => setActiveDropdown(null)} className="text-[10px] font-bold uppercase tracking-[0.2em] text-white hover:text-gold transition-colors flex items-center gap-4 group/all">
                                                Complete Ecosystem <div className="p-2 rounded-full bg-white/10 group-hover/all:bg-gold transition-colors"><ArrowRight className="w-4 h-4 group-hover/all:text-black transition-colors" /></div>
                                            </Link>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

                <div className="hidden lg:flex items-center gap-8">
                    <SignedOut>
                        <SignInButton mode="modal">
                            <button className="text-[9px] font-bold uppercase tracking-[0.3em] text-zinc-400 hover:text-gold transition-colors">
                                Access Portal
                            </button>
                        </SignInButton>
                    </SignedOut>
                    <SignedIn>
                        <UserButton
                            appearance={{
                                elements: {
                                    userButtonAvatarBox: "w-9 h-9 border-2 border-white/10 hover:border-gold/50 transition-all duration-500",
                                    userButtonPopoverCard: "bg-zinc-950 border border-white/10 shadow-2xl rounded-3xl",
                                }
                            }}
                        />
                    </SignedIn>

                    <Link
                        href="/contact"
                        className="bg-white text-zinc-950 px-10 py-4 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-gold transition-all duration-500 shadow-xl shadow-white/5 cursor-pointer"
                    >
                        Initiate Protocol
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="xl:hidden flex items-center gap-4">
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2.5 rounded-full bg-white/5 border border-white/10 text-neutral-400 hover:text-white transition-all transform active:scale-95"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.99 }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="absolute top-full left-0 w-full mt-4 bg-zinc-950/98 backdrop-blur-[30px] border border-white/10 rounded-[2.5rem] p-10 space-y-10 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.8)] overflow-hidden max-h-[85vh] overflow-y-auto"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 blur-[80px] -translate-y-1/2 translate-x-1/2" />

                        <nav className="space-y-8 relative z-10">
                            {navItems.map((item) => (
                                <div key={item.name} className="space-y-6">
                                    <Link
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className={cn(
                                            "block text-3xl font-bold uppercase tracking-tighter transition-colors",
                                            isActive(item.href) ? "text-gold" : "text-white"
                                        )}
                                    >
                                        {item.name}
                                    </Link>
                                    {item.dropdown && (
                                        <div className="pl-6 grid grid-cols-1 gap-5 border-l border-white/10">
                                            {item.dropdown.map(sub => (
                                                <Link
                                                    key={sub.name}
                                                    href={sub.href}
                                                    onClick={() => setIsOpen(false)}
                                                    className={cn(
                                                        "flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] transition-colors",
                                                        isActive(sub.href) ? "text-gold" : "text-zinc-500 hover:text-zinc-300"
                                                    )}
                                                >
                                                    <div className="w-1.5 h-1.5 rounded-full bg-gold/30" />
                                                    {sub.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </nav>

                        <div className="pt-10 border-t border-white/5 space-y-5 relative z-10">
                            <SignedOut>
                                <SignInButton mode="modal">
                                    <button className="w-full py-5 bg-white/5 border border-white/10 text-white rounded-[1.5rem] text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-white/10 transition-all">Access Portal</button>
                                </SignInButton>
                            </SignedOut>
                            <Link
                                href="/contact"
                                onClick={() => setIsOpen(false)}
                                className="block w-full py-5 bg-white text-black rounded-[1.5rem] text-[10px] font-black uppercase tracking-[0.3em] text-center shadow-xl shadow-white/5"
                            >
                                Initiate Protocol
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
