"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle, Image as ImageIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface SafeImageProps {
    src: string;
    alt: string;
    className?: string;
    fallbackGradient?: string;
    priority?: boolean;
    fill?: boolean;
    width?: number;
    height?: number;
}

export const SafeImage: React.FC<SafeImageProps> = ({
    src,
    alt,
    className = "",
    fallbackGradient = "from-zinc-900 via-zinc-800 to-black",
    priority = false,
    fill = false,
    width,
    height
}) => {
    const [status, setStatus] = useState<"loading" | "loaded" | "error">("loading");
    const [imgSrc, setImgSrc] = useState(src);

    useEffect(() => {
        // Optimize Unsplash URLs if they don't have parameters
        if (src && src.includes("images.unsplash.com") && !src.includes("auto=format")) {
            const separator = src && src.includes("?") ? "&" : "?";
            setImgSrc(`${src}${separator}auto=format&fit=crop&q=80&w=1200`);
        } else {
            setImgSrc(src);
        }
    }, [src]);

    // Handle fill vs fixed dimensions
    const isFill = fill || (!width && !height);

    return (
        <div className={cn("relative overflow-hidden", className)}>
            <AnimatePresence mode="wait">
                {status === "loading" && (
                    <motion.div
                        key="skeleton"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-zinc-900 animate-pulse flex items-center justify-center z-10"
                    >
                        <ImageIcon className="w-8 h-8 text-zinc-800" />
                    </motion.div>
                )}

                {status === "error" && (
                    <motion.div
                        key="fallback"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className={cn(
                            "absolute inset-0 bg-zinc-900 flex flex-col items-center justify-center p-6 text-center z-20",
                            fallbackGradient
                        )}
                    >
                        <div className="relative group/fallback cursor-pointer" onClick={() => setStatus("loading")}>
                            <div className="absolute inset-0 bg-gold/20 blur-xl opacity-0 group-hover/fallback:opacity-100 transition-opacity" />
                            <AlertCircle className="w-6 h-6 text-gold/40 mb-2 relative z-10" />
                        </div>
                        <span className="text-[8px] font-black uppercase tracking-[0.2em] text-zinc-700">
                            Connection Offline
                        </span>
                        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                    </motion.div>
                )}
            </AnimatePresence>

            {imgSrc && imgSrc.startsWith("http") ? (
                <img
                    src={imgSrc}
                    alt={alt}
                    className={cn(
                        "transition-opacity duration-700",
                        isFill ? "w-full h-full object-cover" : "",
                        status === "loaded" ? "opacity-100" : "opacity-0"
                    )}
                    onLoad={() => setStatus("loaded")}
                    onError={(e) => {
                        console.error(`SafeImage error loading: ${imgSrc}`, e);
                        setStatus("error");
                    }}
                />
            ) : (
                <Image
                    src={imgSrc}
                    alt={alt}
                    priority={priority}
                    fill={isFill}
                    width={!isFill ? width : undefined}
                    height={!isFill ? height : undefined}
                    sizes={isFill ? "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" : undefined}
                    className={cn(
                        "transition-opacity duration-700",
                        isFill ? "object-cover" : "",
                        status === "loaded" ? "opacity-100" : "opacity-0"
                    )}
                    onLoad={() => setStatus("loaded")}
                    onError={(e) => {
                        console.error(`SafeImage error loading: ${imgSrc}`, e);
                        setStatus("error");
                    }}
                />
            )}

            {/* Technical Scanline Overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] z-30" />
        </div>
    );
};
