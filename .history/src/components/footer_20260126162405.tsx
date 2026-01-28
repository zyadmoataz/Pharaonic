import Link from "next/link";
import { Globe, Twitter, Instagram, Linkedin, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-[#080808] border-t border-white/5 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 bg-gold rounded-lg flex items-center justify-center">
                                <Globe className="text-black w-5 h-5" />
                            </div>
                            <span className="text-xl font-bold tracking-tighter text-white">
                                Guidly<span className="text-gold">.</span>
                            </span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Egypt's premier enterprise platform for safe, transparent, and
                            unforgettable travel experiences. Authorized by the Ministry of Tourism.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Product</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><Link href="/services" className="hover:text-gold">AI Travel Planner</Link></li>
                            <li><Link href="/services" className="hover:text-gold">Safe Marketplace</Link></li>
                            <li><Link href="/services" className="hover:text-gold">Guide Verification</Link></li>
                            <li><Link href="/services" className="hover:text-gold">Permit Portal</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Company</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><Link href="/about" className="hover:text-gold">About Us</Link></li>
                            <li><Link href="/stories" className="hover:text-gold">Tourist Stories</Link></li>
                            <li><Link href="/contact" className="hover:text-gold">Contact</Link></li>
                            <li><Link href="/help" className="hover:text-gold">Help Center</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Newsletter</h4>
                        <p className="text-sm text-gray-400 mb-4">
                            Get the latest updates on safe travel in Egypt.
                        </p>
                        <form className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:border-gold/50"
                            />
                            <button className="bg-gold text-black px-4 py-2 rounded-lg text-sm font-bold hover:bg-gold-light transition-colors">
                                <Mail className="w-4 h-4" />
                            </button>
                        </form>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-xs text-gray-500">
                        © 2026 Guidly Inc. All rights reserved. Made for Egypt Discovery.
                    </p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="text-xs text-gray-500 hover:text-white transition-colors">Privacy</Link>
                        <Link href="/terms" className="text-xs text-gray-500 hover:text-white transition-colors">Terms</Link>
                        <div className="flex gap-4 ml-4">
                            <Twitter className="w-4 h-4 text-gray-500 hover:text-white cursor-pointer" />
                            <Instagram className="w-4 h-4 text-gray-500 hover:text-white cursor-pointer" />
                            <Linkedin className="w-4 h-4 text-gray-500 hover:text-white cursor-pointer" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
