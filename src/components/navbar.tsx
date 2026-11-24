"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { SafeSignedIn, SafeSignedOut, SafeSignInButton, SafeUserButton } from "@/lib/auth-client";
import { cn } from "@/lib/utils";
import { Logo } from "./ui/logo";
import { navItems } from "./navbar/nav-data";
import { DesktopDropdown } from "./navbar/DesktopDropdown";
import { MobileMenu } from "./navbar/MobileMenu";

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
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveDropdown(null);
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const isActive = (path: string) => pathname === path;

  return (
    <nav
      aria-label="Primary Navigation"
      className={cn(
        "fixed top-12 md:top-14 left-1/2 -translate-x-1/2 w-full md:w-[95%] max-w-[85%] z-50 transition-all duration-700",
        scrolled
          ? "bg-zinc-950/80 backdrop-blur-3xl border-white/10 py-3 shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)]"
          : "bg-transparent border-white/5 py-5",
        "border rounded-[2rem] md:rounded-full px-6 md:px-10"
      )}
    >
      <div className="flex justify-between items-center h-12 md:h-14">
        <div className="flex-shrink-0">
          <Link href="/" className="group" aria-label="Pharaonic Home">
            <Logo size="md" className="group-hover:scale-105 transition-transform duration-500" />
          </Link>
        </div>

        <div ref={navRef} className="hidden 2xl:flex items-center space-x-10 xl:space-x-14 h-full">
          {navItems.map((item) => (
            <div key={item.name} className="relative h-full flex items-center">
              {item.dropdown ? (
                <button
                  type="button"
                  onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                  aria-expanded={activeDropdown === item.name}
                  className={cn(
                    "text-[10px] xl:text-[11px] font-black uppercase tracking-[0.25em] transition-all flex items-center gap-2 py-4 relative group/link cursor-pointer",
                    isActive(item.href) || item.dropdown.some((d) => isActive(d.href))
                      ? "text-white"
                      : "text-zinc-400 hover:text-zinc-200"
                  )}
                >
                  <span className="tracking-[0.2em]">{item.name}</span>
                  <ChevronDown
                    className={cn(
                      "w-3.5 h-3.5 transition-transform duration-500 opacity-50",
                      activeDropdown === item.name && "rotate-180 opacity-100"
                    )}
                  />
                  <span
                    className={cn(
                      "absolute bottom-2 left-0 w-0 h-px bg-gold transition-all duration-500 group-hover/link:w-full",
                      (isActive(item.href) || item.dropdown.some((d) => isActive(d.href))) && "w-full"
                    )}
                  />
                </button>
              ) : (
                <Link
                  href={item.href}
                  className={cn(
                    "text-[10px] xl:text-[11px] font-black uppercase tracking-[0.25em] transition-all flex items-center gap-2 py-4 relative group/link",
                    isActive(item.href) ? "text-white" : "text-zinc-400 hover:text-zinc-200"
                  )}
                >
                  <span className="tracking-[0.2em]">{item.name}</span>
                  <span
                    className={cn(
                      "absolute bottom-2 left-0 w-0 h-px bg-gold transition-all duration-500 group-hover/link:w-full",
                      isActive(item.href) && "w-full"
                    )}
                  />
                </Link>
              )}

              <AnimatePresence>
                {item.dropdown && activeDropdown === item.name && (
                  <DesktopDropdown
                    items={item.dropdown}
                    isActive={isActive}
                    onClose={() => setActiveDropdown(null)}
                  />
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="hidden 2xl:flex items-center gap-8">
          <SafeSignedOut>
            <SafeSignInButton mode="modal">
              <button
                type="button"
                className="text-[9px] font-bold uppercase tracking-[0.3em] text-zinc-400 hover:text-gold transition-colors cursor-pointer"
              >
                Access Portal
              </button>
            </SafeSignInButton>
          </SafeSignedOut>
          <SafeSignedIn>
            <SafeUserButton
              appearance={{
                elements: {
                  userButtonAvatarBox: "w-9 h-9 border-2 border-white/10 hover:border-gold/50 transition-all duration-500",
                  userButtonPopoverCard: "bg-zinc-950 border border-white/10 shadow-2xl rounded-3xl",
                },
              }}
            />
          </SafeSignedIn>
          <Link
            href="/contact"
            className="bg-white text-zinc-950 px-10 py-4 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-gold transition-all duration-500 shadow-xl shadow-white/5"
          >
            Initiate Protocol
          </Link>
        </div>

        <div className="2xl:hidden flex items-center gap-4">
          <SafeSignedIn>
            <SafeUserButton />
          </SafeSignedIn>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="p-2.5 rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-white transition-all transform active:scale-95 cursor-pointer"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && <MobileMenu isActive={isActive} onClose={() => setIsOpen(false)} />}
      </AnimatePresence>
    </nav>
  );
}
