"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle, Image as ImageIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface SafeImageProps {
    src: string;
    alt: string;
    className?: string;
    fallbackGradient?: string;
    priority?: boolean;
    fill?: boolean;
}

export const SafeImage: React.FC<SafeImageProps> = ({
    src,
    alt,
    className = "",
    fallbackGradient = "from-zinc-900 via-zinc-800 to-black",
    priority = false,
    fill = false
}) => {
    const [status, setStatus] = useState<"loading" | "loaded" | "error">("loading");
    const [imgSrc, setImgSrc] = useState(src);

    useEffect(() => {
        // Optimize Unsplash URLs if they don't have parameters
        if (src.includes("images.unsplash.com") && !src.includes("auto=format")) {
            const separator = src.includes("?") ? "&" : "?";
            setImgSrc(`${src}${separator}auto=format&fit=crop&q=80&w=1200`);
        } else {
            setImgSrc(src);
        }
    }, [src]);

    return (
        <div className={`relative overflow-hidden ${className}`}>
            <AnimatePresence mode="wait">
                {status === "loading" && (
                    <motion.div
                        key="skeleton"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className={`absolute inset-0 bg-zinc-900 animate-pulse flex items-center justify-center z-10`}
                    >
                        <ImageIcon className="w-8 h-8 text-zinc-800" />
                    </motion.div>
                )}

                {status === "error" && (
                    <motion.div
                        key="fallback"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className={`absolute inset-0 bg-gradient-to-br ${fallbackGradient} flex flex-col items-center justify-center p-6 text-center z-20`}
                    >
                        <AlertCircle className="w-6 h-6 text-gold/40 mb-2" />
                        <span className="text-[8px] font-black uppercase tracking-[0.2em] text-zinc-600">
                            Asset Connection Interrupted
                        </span>
                        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                    </motion.div>
                )}
            </AnimatePresence>

            <Image
                src={imgSrc}
                alt={alt}
                priority={priority}
                fill={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className={`object-cover transition-opacity duration-700 ${status === "loaded" ? "opacity-100" : "opacity-0"
                    }`}
                onLoad={() => setStatus("loaded")}
                onError={() => setStatus("error")}
                unoptimized={!imgSrc.startsWith("/") && !imgSrc.includes("unsplash")}
            />

            {/* Technical Scanline Overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] z-30" />
        </div>
    );
};
