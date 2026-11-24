"use client";

import { useEffect, useState } from "react";
import { WifiOff } from "lucide-react";

export function OfflineBanner() {
  const [isOffline, setIsOffline] = useState(false);

  useEffect(() => {
    const updateStatus = () => setIsOffline(!navigator.onLine);
    updateStatus();

    window.addEventListener("online", updateStatus);
    window.addEventListener("offline", updateStatus);
    return () => {
      window.removeEventListener("online", updateStatus);
      window.removeEventListener("offline", updateStatus);
    };
  }, []);

  if (!isOffline) return null;

  return (
    <div
      role="alert"
      className="fixed top-0 inset-x-0 z-[110] bg-red-950/95 border-b border-red-500/30 text-red-200 px-4 py-2.5 text-center text-xs font-semibold flex items-center justify-center gap-2 backdrop-blur-md"
    >
      <WifiOff className="w-4 h-4 text-red-400" />
      <span>You are currently offline. Some live AI and booking features are paused until your connection returns.</span>
    </div>
  );
}
