"use client";

import { AlertTriangle, RotateCcw } from "lucide-react";

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-[#020202] text-zinc-100 flex items-center justify-center p-6 font-sans antialiased">
        <div className="max-w-lg w-full rounded-[2.5rem] bg-zinc-950 border border-white/10 p-10 text-center space-y-6 shadow-2xl">
          <div className="mx-auto w-14 h-14 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400">
            <AlertTriangle className="w-7 h-7" />
          </div>
          <div className="space-y-2">
            <p className="text-[10px] font-black uppercase tracking-[0.35em] text-red-400">
              Critical System Boundary
            </p>
            <h1 className="text-3xl font-black uppercase tracking-tight text-white">
              System Reset Required
            </h1>
            <p className="text-sm text-zinc-400 leading-relaxed">
              We encountered a root-level error. Please reload to restore normal operation.
            </p>
            {error.digest && (
              <p className="text-[11px] font-mono text-zinc-500 pt-1">
                Reference: {error.digest}
              </p>
            )}
          </div>
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#D4AF37] text-zinc-950 text-xs font-black uppercase tracking-widest hover:bg-white transition-colors cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            Restore Application
          </button>
        </div>
      </body>
    </html>
  );
}
