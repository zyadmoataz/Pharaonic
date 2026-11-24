"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, ArrowLeft, RotateCcw } from "lucide-react";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") {
      console.error("Route Error Boundary caught:", error);
    }
  }, [error]);

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-6">
      <div className="max-w-lg w-full rounded-[2.5rem] bg-zinc-950/90 border border-white/10 p-10 text-center space-y-6 shadow-2xl">
        <div className="mx-auto w-14 h-14 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400">
          <AlertTriangle className="w-7 h-7" />
        </div>

        <div className="space-y-2">
          <p className="text-[10px] font-black uppercase tracking-[0.35em] text-red-400">
            Sector Disruption Detected
          </p>
          <h1 className="text-3xl font-black uppercase tracking-tight text-white">
            Operational Recovery
          </h1>
          <p className="text-sm text-zinc-400 leading-relaxed">
            An unexpected interruption occurred while loading this view. Your session remains intact.
          </p>
        </div>

        {error.digest && (
          <p className="text-[11px] font-mono text-zinc-500">
            Reference: {error.digest}
          </p>
        )}

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <button
            type="button"
            onClick={reset}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gold text-zinc-950 text-xs font-black uppercase tracking-widest hover:bg-white transition-colors cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            Retry Sector
          </button>
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white text-xs font-black uppercase tracking-widest hover:bg-white/10 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}
