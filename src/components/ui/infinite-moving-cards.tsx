"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
    items,
    direction = "left",
    speed = "fast",
    pauseOnHover = true,
    className,
}: {
    items: {
        id?: string;
        quote: string;
        name: string;
        title: string;
    }[];
    direction?: "left" | "right";
    speed?: "fast" | "normal" | "slow";
    pauseOnHover?: boolean;
    className?: string;
}) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const scrollerRef = React.useRef<HTMLUListElement>(null);

    useEffect(() => {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children);

            while (scrollerRef.current.children.length > scrollerContent.length) {
                scrollerRef.current.removeChild(scrollerRef.current.lastChild!);
            }

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                scrollerRef.current?.appendChild(duplicatedItem);
            });

            containerRef.current.style.setProperty(
                "--animation-direction",
                direction === "left" ? "forwards" : "reverse"
            );

            const duration = speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
            containerRef.current.style.setProperty("--animation-duration", duration);
            scrollerRef.current.classList.add("animate-scroll");
        }
    }, [direction, speed]);
    return (
        <div
            ref={containerRef}
            className={cn(
                "scroller relative z-20 max-w-7xl overflow-hidden",
                className
            )}
        >
            <ul
                ref={scrollerRef}
                className={cn(
                    "flex min-w-full shrink-0 gap-4 py-4 w-fit flex-nowrap",
                    pauseOnHover && "hover:[animation-play-state:paused]"
                )}
            >
                {items.map((item, idx) => (
                    <li
                        className="w-[350px] max-w-full relative rounded-[2rem] border border-white/10 flex-shrink-0 px-10 py-10 md:w-[500px] bg-zinc-950/40 backdrop-blur-xl group/card hover:bg-zinc-900/60 transition-all duration-700"
                        key={item.id || idx}
                    >
                        <blockquote>
                            <div
                                aria-hidden="true"
                                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
                            ></div>
                            <span className=" relative z-20 text-base md:text-lg leading-relaxed text-zinc-200 font-medium italic">
                                "{item.quote}"
                            </span>
                            <div className="relative z-20 mt-10 flex flex-row items-center gap-4 pt-6 border-t border-white/5">
                                <span className="flex flex-col gap-1.5">
                                    <span className=" text-xs leading-none text-gold font-black uppercase tracking-[0.2em]">
                                        {item.name}
                                    </span>
                                    <span className=" text-[10px] leading-none text-zinc-500 font-bold uppercase tracking-[0.1em]">
                                        {item.title}
                                    </span>
                                </span>
                            </div>
                        </blockquote>
                    </li>
                ))}
            </ul>
        </div>
    );
};
