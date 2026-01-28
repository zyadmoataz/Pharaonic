"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";

export const BackgroundBeams = ({ className }: { className?: string }) => {
    const [mounted, setMounted] = useState(false);
    const [beams, setBeams] = useState<{ id: number; x: number; y: number; duration: number; rotation: number }[]>([]);

    useEffect(() => {
        setMounted(true);
        const createBeam = () => {
            const id = Math.random();
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            const duration = 2 + Math.random() * 4;
            const rotation = Math.random() * 360;
            setBeams((prev) => [...prev, { id, x, y, duration, rotation }]);
            setTimeout(() => {
                setBeams((prev) => prev.filter((b) => b.id !== id));
            }, duration * 1000);
        };

        const interval = setInterval(createBeam, 500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div
            className={cn(
                "absolute inset-0 z-0 overflow-hidden bg-black",
                className
            )}
        >
            <div className="absolute inset-0 bg-grid-white/[0.02] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
            {mounted && beams.map((beam) => (
                <div
                    key={beam.id}
                    className="absolute h-[1px] w-[200px] bg-gradient-to-r from-transparent via-gold/30 to-transparent blur-[1px]"
                    style={{
                        left: `${beam.x}%`,
                        top: `${beam.y}%`,
                        transform: `rotate(${beam.rotation}deg)`,
                        animation: `beam ${beam.duration}s linear infinite`,
                    }}
                />
            ))}
            <style jsx>{`
        @keyframes beam {
          0% {
            transform: translate(-100%, -100%) rotate(45deg);
            opacity: 0;
          }
          50% {
            opacity: 0.5;
          }
          100% {
            transform: translate(100%, 100%) rotate(45deg);
            opacity: 0;
          }
        }
      `}</style>
        </div>
    );
};
