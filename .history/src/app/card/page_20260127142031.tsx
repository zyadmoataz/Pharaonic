"use client";

import React from "react";
import { MembershipCards } from "@/components/sections/MembershipCards";
import { GlobalCTA } from "@/components/global-cta";

export default function CardPage() {
    return (
        <div className="pt-20">
            <MembershipCards />
            <div className="pb-20">
                <GlobalCTA />
            </div>
        </div>
    );
}
