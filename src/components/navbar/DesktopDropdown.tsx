"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { NavDropdownItem } from "./nav-data";

interface DesktopDropdownProps {
  items: NavDropdownItem[];
  isActive: (path: string) => boolean;
  onClose: () => void;
}

export function DesktopDropdown({ items, isActive, onClose }: DesktopDropdownProps) {
  const categories = Array.from(new Set(items.map((d) => d.category)));
  const gridColsClass =
    categories.length === 1
      ? "grid-cols-1 max-w-sm mx-auto"
      : categories.length === 2
      ? "grid-cols-2 max-w-4xl mx-auto"
      : "grid-cols-3";

  return (
    <motion.div
      initial={{ opacity: 0, y: 15, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.99 }}
      transition={{ type: "spring", damping: 25, stiffness: 200 }}
      className="absolute top-[100%] left-1/2 -translate-x-1/2 mt-4 w-[1000px] bg-zinc-950/95 backdrop-blur-[40px] border border-white/10 rounded-[3rem] p-12 shadow-[0_20px_80px_-20px_rgba(0,0,0,0.8)] z-[60] overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent pointer-events-none" />

      <div className={cn("grid gap-14 relative z-10", gridColsClass)}>
        {categories.map((cat) => (
          <div key={cat} className="space-y-8">
            <div className="flex items-center gap-4">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold">{cat}</h4>
              <div className="h-px flex-1 bg-white/10" />
            </div>
            <div className="space-y-6">
              {items
                .filter((d) => d.category === cat)
                .map((subItem) => (
                  <Link
                    key={subItem.name}
                    href={subItem.href}
                    onClick={onClose}
                    className={cn(
                      "group/item flex items-start gap-5 p-2 -m-2 rounded-2xl transition-all duration-300",
                      isActive(subItem.href) ? "opacity-100" : "opacity-60 hover:opacity-100"
                    )}
                  >
                    <div
                      className={cn(
                        "w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-500 flex-shrink-0 border mt-0.5",
                        isActive(subItem.href)
                          ? "bg-gold border-gold text-black"
                          : "bg-white/5 border-white/10 text-gold group-hover/item:scale-110 group-hover/item:bg-white group-hover/item:border-white group-hover/item:text-black"
                      )}
                    >
                      {subItem.icon}
                    </div>
                    <div className="flex-1">
                      <div
                        className={cn(
                          "text-xs font-black mb-1 tracking-[0.1em] uppercase",
                          isActive(subItem.href) ? "text-gold" : "text-white"
                        )}
                      >
                        {subItem.name}
                      </div>
                      <div className="text-[11px] text-zinc-400 font-medium leading-relaxed uppercase tracking-[0.05em]">
                        {subItem.description}
                      </div>
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
            <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-zinc-400">
              Live Authorization
            </span>
          </div>
          <div className="w-px h-3 bg-white/10" />
          <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-zinc-400">
            Version 2.0.4 - Secure Layer
          </span>
        </div>
        <Link
          href="/services"
          onClick={onClose}
          className="text-[10px] font-bold uppercase tracking-[0.2em] text-white hover:text-gold transition-colors flex items-center gap-4 group/all"
        >
          Complete Ecosystem
          <div className="p-2 rounded-full bg-white/10 group-hover/all:bg-gold transition-colors">
            <ArrowRight className="w-4 h-4 group-hover/all:text-black transition-colors" />
          </div>
        </Link>
      </div>
    </motion.div>
  );
}
