"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/ui/logo";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export function Footer() {
    const pathname = usePathname();
    const isActive = (path: string) => pathname === path;

    return (
        <footer className="bg-black border-t border-white/5 pt-40 pb-20 overflow-hidden relative">
            {/* Background Accents */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1400px] h-[400px] bg-gold/[0.03] blur-[150px] rounded-full -translate-y-1/2" />

            <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-40">
                    {/* Brand Intelligence */}
                    <div className="lg:col-span-4 space-y-12">
                        <Link href="/" className="inline-block group">
                            <Logo size="lg" className="scale-110 group-hover:scale-115 transition-transform duration-700" />
                        </Link>
                        <p className="text-zinc-500 text-sm leading-relaxed font-medium max-w-sm">
                            The authorized infrastructure for elite Egyptian tourism. Architecting
                            <span className="text-zinc-200"> sovereign logistics </span>
                            and global membership protocols for the next generation of voyagers.
                        </p>

                        {/* Newsletter Intake */}
                        <div className="space-y-4 pt-4">
                            <h4 className="text-white font-black text-[9px] uppercase tracking-[0.4em]">Intelligence Briefing</h4>
                            <div className="flex gap-2">
                                <input
                                    type="email"
                                    placeholder="Agency Email"
                                    className="flex-1 bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-xs text-white outline-none focus:border-gold/50 transition-all font-medium"
                                />
                                <button className="p-4 bg-white text-black rounded-2xl hover:bg-gold transition-all duration-500 group">
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                                </button>
                            </div>
                            <p className="text-[8px] text-zinc-600 font-bold uppercase tracking-[0.1em]">Authorized data transmission only.</p>
                        </div>
                    </div>

                    {/* Link Ecosystem */}
                    <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-8">
                        {/* Link Group 1 */}
                        <div className="space-y-10">
                            <h4 className="text-white font-black text-[10px] uppercase tracking-[0.5em] flex items-center gap-3">
                                <div className="w-1 h-3 bg-gold" /> Intelligence
                            </h4>
                            <ul className="space-y-5 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
                                <li><Link href="/personalized-plan" className={cn("transition-all block hover:translate-x-1", isActive("/personalized-plan") ? "text-gold" : "hover:text-zinc-200")}>Protocol Architect</Link></li>
                                <li><Link href="/ai-generator" className={cn("transition-all block hover:translate-x-1", isActive("/ai-generator") ? "text-gold" : "hover:text-zinc-200")}>Persona Discovery</Link></li>
                                <li><Link href="/recommendations" className={cn("transition-all block hover:translate-x-1", isActive("/recommendations") ? "text-gold" : "hover:text-zinc-200")}>Verified Streams</Link></li>
                                <li><Link href="/blogs" className={cn("transition-all block hover:translate-x-1", isActive("/blogs") ? "text-gold" : "hover:text-zinc-200")}>Strategic Briefs</Link></li>
                            </ul>
                        </div>

                        {/* Link Group 2 */}
                        <div className="space-y-10">
                            <h4 className="text-white font-black text-[10px] uppercase tracking-[0.5em] flex items-center gap-3">
                                <div className="w-1 h-3 bg-zinc-700" /> Logistics
                            </h4>
                            <ul className="space-y-5 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
                                <li><Link href="/card" className={cn("transition-all block hover:translate-x-1", isActive("/card") ? "text-gold" : "hover:text-zinc-200")}>Sovereign Card</Link></li>
                                <li><Link href="/tour-guide" className={cn("transition-all block hover:translate-x-1", isActive("/tour-guide") ? "text-gold" : "hover:text-zinc-200")}>Verified Assets</Link></li>
                                <li><Link href="/licenses" className={cn("transition-all block hover:translate-x-1", isActive("/licenses") ? "text-gold" : "hover:text-zinc-200")}>Permit Gateway</Link></li>
                                <li><Link href="/checkout" className={cn("transition-all block hover:translate-x-1", isActive("/checkout") ? "text-gold" : "hover:text-zinc-200")}>Transfer Ledger</Link></li>
                            </ul>
                        </div>

                        {/* Link Group 3 */}
                        <div className="space-y-10">
                            <h4 className="text-white font-black text-[10px] uppercase tracking-[0.5em] flex items-center gap-3">
                                <div className="w-1 h-3 bg-zinc-700" /> Infrastructure
                            </h4>
                            <ul className="space-y-5 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
                                <li><Link href="/why-us" className={cn("transition-all block hover:translate-x-1", isActive("/why-us") ? "text-gold" : "hover:text-zinc-200")}>Parity Audit</Link></li>
                                <li><Link href="/about" className={cn("transition-all block hover:translate-x-1", isActive("/about") ? "text-gold" : "hover:text-zinc-200")}>The Consortium</Link></li>
                                <li><Link href="/feedback" className={cn("transition-all block hover:translate-x-1", isActive("/feedback") ? "text-gold" : "hover:text-zinc-200")}>Network Nodes</Link></li>
                                <li><Link href="/contact" className={cn("transition-all block hover:translate-x-1", isActive("/contact") ? "text-gold" : "hover:text-zinc-200")}>Emergency Uplink</Link></li>
                            </ul>
                        </div>

                        {/* Link Group 4 */}
                        <div className="space-y-10">
                            <h4 className="text-white font-black text-[10px] uppercase tracking-[0.5em] flex items-center gap-3">
                                <div className="w-1 h-3 bg-zinc-700" /> Compliance
                            </h4>
                            <ul className="space-y-5 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
                                <li><Link href="/terms" className={cn("transition-all block hover:translate-x-1", isActive("/terms") ? "text-gold" : "hover:text-zinc-200")}>Legal Framework</Link></li>
                                <li><Link href="/privacy" className={cn("transition-all block hover:translate-x-1", isActive("/privacy") ? "text-gold" : "hover:text-zinc-200")}>Sovereign Data</Link></li>
                                <li><Link href="/help" className={cn("transition-all block hover:translate-x-1", isActive("/help") ? "text-gold" : "hover:text-zinc-200")}>Knowledge Base</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom Hardware */}
                <div className="pt-16 border-t border-white/5 flex flex-col xl:flex-row justify-between items-center gap-12">
                    <div className="flex flex-col md:flex-row gap-12 items-center text-[9px] font-black uppercase tracking-[0.5em] text-zinc-600">
                        <div className="flex items-center gap-4">
                            <span className="text-zinc-800">Sector Status:</span>
                            <div className="flex items-center gap-2">
                                <div className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                                <span className="text-emerald-500/80">Operational</span>
                            </div>
                        </div>
                        <div className="hidden md:block w-px h-3 bg-white/10" />
                        <p>© 2026 PHARAONIC GROUP INTEGRATED SYSTEMS</p>
                        <div className="hidden md:block w-px h-3 bg-white/5" />
                        <p className="italic text-zinc-700">Restricted Enterprise Access</p>
                    </div>

                    <div className="flex items-center gap-8">
                        {/* Social Hardware */}
                        <div className="flex items-center gap-8 pr-8 border-r border-white/5">
                            {["X", "IG", "LN", "FB"].map((s) => (
                                <Link key={s} href="#" className="text-[10px] font-black tracking-widest text-zinc-700 hover:text-gold transition-colors">{s}</Link>
                            ))}
                        </div>

                        {/* Authored by */}
                        <Link href="https://www.nexeradev.com/en/" target="_blank" className="group flex items-center gap-4 py-3 px-8 rounded-full bg-white/[0.02] border border-white/5 hover:border-gold/30 transition-all duration-700">
                            <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-zinc-600">Platform by</span>
                            <div className="w-px h-4 bg-white/10" />
                            <span className="text-[11px] text-zinc-400 font-black tracking-[0.2em] group-hover:text-gold transition-colors">NEXERA</span>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
