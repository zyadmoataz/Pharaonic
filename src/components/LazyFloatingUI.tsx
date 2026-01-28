"use client";

import dynamic from "next/dynamic";

const Chatbot = dynamic(() => import("@/components/chatbot").then(mod => mod.Chatbot), { ssr: false });
const EmergencyProtocol = dynamic(() => import("@/components/EmergencyProtocol").then(mod => mod.EmergencyProtocol), { ssr: false });

export function LazyFloatingUI() {
    return (
        <>
            <EmergencyProtocol />
            <Chatbot />
        </>
    );
}
