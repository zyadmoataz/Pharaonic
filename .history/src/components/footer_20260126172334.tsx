import Link from "next/link";
import { Mail } from "lucide-react";
import { Logo } from "@/components/ui/logo";

export function Footer() {
    return (
        <footer className="bg-[#080808] border-t border-white/5 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="inline-block mb-6">
                            <Logo />
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Egypt's premier enterprise platform for safe, transparent, and
                            unforgettable travel experiences. Authorized by the Ministry of Tourism.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Product</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><Link href="/services" className="hover:text-gold transition-colors">AI Travel Planner</Link></li>
                            <li><Link href="/card" className="hover:text-gold transition-colors">Guidly Card</Link></li>
                            <li><Link href="/pricing" className="hover:text-gold transition-colors">Pricing Tiers</Link></li>
                            <li><Link href="/why-us" className="hover:text-gold transition-colors">Why Guidly</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Support</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><Link href="/about" className="hover:text-gold transition-colors">About Us</Link></li>
                            <li><Link href="/contact" className="hover:text-gold transition-colors">Contact Expert</Link></li>
                            <li><Link href="/help" className="hover:text-gold transition-colors">Help Center</Link></li>
                            <li className="text-gold font-medium">01012766890</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Newsletter</h4>
                        <p className="text-sm text-gray-400 mb-4">
                            Get exclusive safety updates.
                        </p>
                        <form className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:border-gold/50 transition-all"
                            />
                            <button className="bg-gold text-black px-4 py-2 rounded-lg text-sm font-bold hover:bg-gold-light transition-colors">
                                <Mail className="w-4 h-4" />
                            </button>
                        </form>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-500">
                    <div className="flex flex-col md:flex-row gap-2 md:gap-6 items-center">
                        <p>© 2026 Guidly Analytics. All rights reserved.</p>
                        <div className="flex gap-4">
                            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
                            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
                        </div>
                    </div>
                    <p className="font-medium">
                        Done by <Link href="https://www.nexeradev.com/en/" target="_blank" className="text-gold hover:underline">Nexera Dev</Link>
                    </p>
                </div>
            </div>
        </footer>
    );
}
