"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SafeSignedOut, SafeSignInButton } from "@/lib/auth-client";
import { cn } from "@/lib/utils";
import { navItems } from "./nav-data";

interface MobileMenuProps {
  isActive: (path: string) => boolean;
  onClose: () => void;
}

export function MobileMenu({ isActive, onClose }: MobileMenuProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -10, scale: 0.99 }}
      transition={{ type: "spring", damping: 25, stiffness: 200 }}
      className="absolute top-full left-0 w-full mt-4 bg-zinc-950/98 backdrop-blur-[30px] border border-white/10 rounded-[2.5rem] p-10 space-y-10 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.8)] overflow-hidden max-h-[85vh] overflow-y-auto"
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 blur-[80px] -translate-y-1/2 translate-x-1/2" />

      <nav aria-label="Mobile Navigation" className="space-y-8 relative z-10">
        {navItems.map((item) => (
          <div key={item.name} className="space-y-6">
            <Link
              href={item.href}
              onClick={onClose}
              className={cn(
                "block text-3xl font-bold uppercase tracking-tighter transition-colors",
                isActive(item.href) ? "text-gold" : "text-white"
              )}
            >
              {item.name}
            </Link>
            {item.dropdown && (
              <div className="pl-6 grid grid-cols-1 gap-5 border-l border-white/10">
                {item.dropdown.map((sub) => (
                  <Link
                    key={sub.name}
                    href={sub.href}
                    onClick={onClose}
                    className={cn(
                      "flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] transition-colors",
                      isActive(sub.href) ? "text-gold" : "text-zinc-400 hover:text-zinc-300"
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
        <SafeSignedOut>
          <SafeSignInButton mode="modal">
            <button
              type="button"
              className="w-full py-5 bg-white/5 border border-white/10 text-white rounded-[1.5rem] text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-white/10 transition-all cursor-pointer"
            >
              Access Portal
            </button>
          </SafeSignInButton>
        </SafeSignedOut>
        <Link
          href="/contact"
          onClick={onClose}
          className="block w-full py-5 bg-white text-black rounded-[1.5rem] text-[10px] font-black uppercase tracking-[0.3em] text-center shadow-xl shadow-white/5"
        >
          Initiate Protocol
        </Link>
      </div>
    </motion.div>
  );
}
