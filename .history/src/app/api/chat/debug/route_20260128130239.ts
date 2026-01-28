import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey || apiKey === "your_gemini_api_key_here") {
            return NextResponse.json({ error: "Key not configured" }, { status: 500 });
        }

        const genAI = new GoogleGenerativeAI(apiKey);
        // The SDK doesn't expose listModels directly easily in some versions, 
        // but we can try to fetch it manually via the REST endpoint to see what's up.
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`);
        const data = await response.json();

        return NextResponse.json(data);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
