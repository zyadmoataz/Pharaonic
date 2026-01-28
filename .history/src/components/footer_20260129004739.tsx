"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/ui/logo";
import { cn } from "@/lib/utils";

export function Footer() {
    const pathname = usePathname();
    const isActive = (path: string) => pathname === path;

    return (
        <footer className="bg-zinc-950 border-t border-white/5 pt-32 pb-16 overflow-hidden relative">
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[300px] bg-gold/[0.02] blur-[120px] rounded-full -translate-y-1/2" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-20 mb-32">
                    <div className="md:col-span-4 space-y-10">
                        <Link href="/" className="inline-block group">
                            <Logo className="scale-110 group-hover:scale-115 transition-transform duration-500" />
                        </Link>
                        <p className="text-zinc-500 text-sm md:text-base leading-relaxed font-medium max-w-sm">
                            The authorized infrastructure for elite Egyptian tourism. Architecting
                            <span className="text-zinc-200"> sovereign logistics </span>
                            and global membership protocols for the next generation of voyagers.
                        </p>
                        <div className="flex items-center gap-6 pt-4">
                            {["TW", "IG", "LI", "FB"].map((social) => (
                                <Link key={social} href="#" className="text-[10px] font-black tracking-widest text-zinc-600 hover:text-gold transition-colors">{social}</Link>
                            ))}
                        </div>
                    </div>

                    <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
                        <div className="space-y-8">
                            <h4 className="text-white font-black text-xs uppercase tracking-[0.4em]">Intelligence</h4>
                            <ul className="space-y-4 text-[11px] font-bold text-zinc-500 uppercase tracking-widest">
                                <li><Link href="/ai-generator" className={cn("transition-colors block", isActive("/ai-generator") ? "text-gold" : "hover:text-zinc-200")}>AI Trip Planner</Link></li>
                                <li><Link href="/personalized-plan" className={cn("transition-colors block", isActive("/personalized-plan") ? "text-gold" : "hover:text-zinc-200")}>Custom Itinerary</Link></li>
                                <li><Link href="/recommendations" className={cn("transition-colors block", isActive("/recommendations") ? "text-gold" : "hover:text-zinc-200")}>Top Recommendations</Link></li>
                                <li><Link href="/blogs" className={cn("transition-colors block", isActive("/blogs") ? "text-gold" : "hover:text-zinc-200")}>Our Blog</Link></li>
                            </ul>
                        </div>

                        <div className="space-y-8">
                            <h4 className="text-white font-black text-xs uppercase tracking-[0.4em]">Logistics</h4>
                            <ul className="space-y-4 text-[11px] font-bold text-zinc-500 uppercase tracking-widest">
                                <li><Link href="/card" className={cn("transition-colors block", isActive("/card") ? "text-gold" : "hover:text-zinc-200")}>Sovereign Card</Link></li>
                                <li><Link href="/tour-guide" className={cn("transition-colors block", isActive("/tour-guide") ? "text-gold" : "hover:text-zinc-200")}>Private Guides</Link></li>
                                <li><Link href="/licenses" className={cn("transition-colors block", isActive("/licenses") ? "text-gold" : "hover:text-zinc-200")}>Travel Permits</Link></li>
                                <li><Link href="/checkout" className={cn("transition-colors block", isActive("/checkout") ? "text-gold" : "hover:text-zinc-200")}>Secure Gateway</Link></li>
                            </ul>
                        </div>

                        <div className="space-y-8">
                            <h4 className="text-white font-black text-xs uppercase tracking-[0.4em]">Ecosystem</h4>
                            <ul className="space-y-4 text-[11px] font-bold text-zinc-500 uppercase tracking-widest">
                                <li><Link href="/why-us" className={cn("transition-colors block", isActive("/why-us") ? "text-gold" : "hover:text-zinc-200")}>Why Choose Us</Link></li>
                                <li><Link href="/stories" className={cn("transition-colors block", isActive("/stories") ? "text-gold" : "hover:text-zinc-200")}>Travel Stories</Link></li>
                                <li><Link href="/about" className={cn("transition-colors block", isActive("/about") ? "text-gold" : "hover:text-zinc-200")}>About Us</Link></li>
                                <li><Link href="/contact" className={cn("transition-colors block", isActive("/contact") ? "text-gold" : "hover:text-zinc-200")}>Contact</Link></li>
                            </ul>
                        </div>

                        <div className="space-y-8">
                            <h4 className="text-white font-black text-xs uppercase tracking-[0.4em]">Protocol</h4>
                            <ul className="space-y-4 text-[11px] font-bold text-zinc-500 uppercase tracking-widest">
                                <li><Link href="/terms" className={cn("transition-colors block", isActive("/terms") ? "text-gold" : "hover:text-zinc-200")}>Terms of Service</Link></li>
                                <li><Link href="/privacy" className={cn("transition-colors block", isActive("/privacy") ? "text-gold" : "hover:text-zinc-200")}>Privacy Policy</Link></li>
                                <li><Link href="/help" className={cn("transition-colors block", isActive("/help") ? "text-gold" : "hover:text-zinc-200")}>Help Center</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
                    <div className="flex flex-col md:flex-row gap-8 items-center text-[8px] font-bold uppercase tracking-[0.4em] text-zinc-600">
                        <p>© 2026 PHARAONIC GROUP INTEGRATED SYSTEMS</p>
                        <div className="hidden md:block w-px h-3 bg-white/5" />
                        <p className="italic">Authorized Access Only</p>
                    </div>

                    <div className="flex items-center gap-5 py-3 px-8 rounded-full bg-white/[0.02] border border-white/5 backdrop-blur-3xl group hover:border-gold/30 transition-all duration-500">
                        <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-zinc-500 group-hover:text-zinc-300">Authorized by</span>
                        <Link href="https://www.nexeradev.com/en/" target="_blank" className="text-[10px] text-white font-black tracking-[0.2em] hover:text-gold transition-colors pl-5 border-l border-white/10 flex items-center gap-2">
                            NEXERA <div className="w-1 h-1 bg-gold rounded-full animate-pulse" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
