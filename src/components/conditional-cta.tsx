"use client";

import { usePathname } from "next/navigation";
import { GlobalCTA } from "./global-cta";

export function ConditionalCTA() {
    const pathname = usePathname();

    // Do not show CTA on contact page
    if (pathname === "/contact" || pathname === "/ar/contact") {
        return null;
    }

    return <GlobalCTA />;
}
