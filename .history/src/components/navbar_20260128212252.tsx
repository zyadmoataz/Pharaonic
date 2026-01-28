"use client";

import React, { useState, useEffect } from "react";
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
                name: "AI Discovery Engine",
                href: "/ai-generator",
                description: "Personality-driven itinerary architecture using sovereign-grade Egyptian travel data.",
                icon: <Sparkles className="w-4 h-4" />,
                category: "Intelligence"
            },
            {
                name: "Digital Permit Portal",
                href: "/licenses",
                description: "Automated authorization for media, research, and technical deployment licenses.",
                icon: <Globe className="w-4 h-4" />,
                category: "Intelligence"
            },
            {
                name: "Custom Framework",
                href: "/personalized-plan",
                description: "Protocol-driven custom itinerary generation for complex travel nodes.",
                icon: <Zap className="w-4 h-4" />,
                category: "Intelligence"
            },
            {
                name: "Sovereign Card v2",
                href: "/card",
                description: "Secure financial integration with automated VAT refunds and cashless transit.",
                icon: <Shield className="w-4 h-4" />,
                category: "Logistics"
            },
            {
                name: "Liaison Support",
                href: "/tour-guide",
                description: "24/7 human intelligence handlers for direct government and site liaison.",
                icon: <User className="w-4 h-4" />,
                category: "Logistics"
            },
            {
                name: "Operational Base",
                href: "/contact",
                description: "Direct tactical communication with our Cairo-based HQ and logistics team.",
                icon: <User className="w-4 h-4" />,
                category: "Logistics"
            },
            {
                name: "Curated Expeditions",
                href: "/recommendations",
                description: "Pre-verified historical routes optimized for structural integrity and fidelity.",
                icon: <Star className="w-4 h-4" />,
                category: "Experience"
            },
            {
                name: "Heritage Stories",
                href: "/stories",
                description: "Archival footage and narratives from high-stakes Egyptian heritage missions.",
                icon: <ArrowRight className="w-4 h-4" />,
                category: "Experience"
            },
            {
                name: "Systemic Parity",
                href: "/why-us",
                description: "Our competitive advantages and protocol-driven approach to heritage.",
                icon: <Shield className="w-4 h-4" />,
                category: "Experience"
            },
        ]
    },
    {
        name: "Curated Expeditions",
        href: "/recommendations",
        description: "Pre-verified historical routes optimized for structural integrity and archival fidelity.",
        icon: <Star className="w-4 h-4" />,
        category: "Experience"
    },
    {
        name: "Heritage Protocol",
        href: "/heritage",
        description: "Fast-track access to restricted archaeological zones and private museum viewings.",
        icon: <ArrowRight className="w-4 h-4" />,
        category: "Experience"
    },
    {
        name: "Crisis Management",
        href: "/emergency",
        description: "Immediate emergency extraction and diplomatic liaison for global diplomats.",
        icon: <Shield className="w-4 h-4" />,
        category: "Experience"
    },
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
            "fixed top-12 md:top-14 left-1/2 -translate-x-1/2 w-[92%] md:w-[95%] max-w-7xl z-50 transition-all duration-700",
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
                <div className="hidden lg:flex items-center space-x-10 xl:space-x-14">
                    {navItems.map((item) => (
                        <div
                            key={item.name}
                            className="relative h-full flex items-center"
                            onMouseEnter={() => setActiveDropdown(item.name)}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            <Link
                                href={item.href}
                                className={cn(
                                    "text-[10px] xl:text-[11px] font-bold uppercase tracking-[0.2em] transition-all flex items-center gap-2 py-4 relative group/link",
                                    isActive(item.href) || (item.dropdown && item.dropdown.some(d => isActive(d.href)))
                                        ? "text-white" : "text-zinc-400 hover:text-zinc-200"
                                )}
                            >
                                {item.name}
                                {item.dropdown && <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-500 opacity-50", activeDropdown === item.name && "rotate-180 opacity-100")} />}

                                <span className={cn(
                                    "absolute bottom-2 left-0 w-0 h-px bg-gold transition-all duration-500 group-hover/link:w-full",
                                    (isActive(item.href) || (item.dropdown && item.dropdown.some(d => isActive(d.href)))) && "w-full"
                                )} />
                            </Link>

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

                                        <div className="grid grid-cols-3 gap-14 relative z-10">
                                            {["Intelligence", "Logistics", "Experience"].map((cat) => (
                                                <div key={cat} className="space-y-8">
                                                    <div className="flex items-center gap-4">
                                                        <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold">{cat}</h4>
                                                        <div className="h-px flex-1 bg-white/10" />
                                                    </div>
                                                    <div className="space-y-4">
                                                        {item.dropdown?.filter(d => (d as any).category === cat).map((subItem) => (
                                                            <Link
                                                                key={subItem.name}
                                                                href={subItem.href}
                                                                onClick={() => setActiveDropdown(null)}
                                                                className={cn(
                                                                    "group/item flex items-center gap-5 p-2 -m-2 rounded-2xl transition-all duration-300",
                                                                    isActive(subItem.href) ? "opacity-100" : "opacity-60 hover:opacity-100"
                                                                )}
                                                            >
                                                                <div className={cn(
                                                                    "w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-500 flex-shrink-0 border",
                                                                    isActive(subItem.href)
                                                                        ? "bg-gold border-gold text-black"
                                                                        : "bg-white/5 border-white/10 text-gold group-hover/item:scale-110 group-hover/item:bg-white group-hover/item:border-white group-hover/item:text-black"
                                                                )}>
                                                                    {subItem.icon}
                                                                </div>
                                                                <div className="flex-1">
                                                                    <div className={cn("text-sm font-bold mb-1.5 tracking-tight uppercase", isActive(subItem.href) ? "text-gold" : "text-white")}>{subItem.name}</div>
                                                                    <div className="text-[10px] text-zinc-400 font-medium leading-relaxed uppercase tracking-[0.1em]">{subItem.description}</div>
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
                <div className="lg:hidden flex items-center gap-4">
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
