import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { message, history } = await req.json();

        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey || apiKey === "AIzaSyC_A9eJjgzQDMmJEWwGuRPIpTozMgO7uOI") {
            return NextResponse.json(
                { error: "Protocol Error: LLM Key not configured. Please replace the placeholder in your .env.local with a valid Gemini API key." },
                { status: 500 }
            );
        }

        const genAI = new GoogleGenerativeAI(apiKey);
        
        // Try the most stable model with the simplest setup
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        // Pharaonic Persona System Prompt (Moved to the start of the message for compatibility)
        const systemPrompt = `You are the "Pharaonic Protocol Liaison", a high-level Egyptian tourism AI. 
        Rules: 
        - Technical, elite tone. 
        - Use terms like "Sovereign Deployment", "Strategic Intel". 
        - Max 3 sentences. 
        - Answer the user's query: `;

        try {
            const result = await model.generateContent(systemPrompt + message);
            const response = await result.response;
            const text = response.text();
            return NextResponse.json({ text });
        } catch (err: any) {
            console.error("Gemini GenerateContent Error:", err);
            // If Flash fails, try Pro as a legacy fallback
            const proModel = genAI.getGenerativeModel({ model: "gemini-pro" });
            const proResult = await proModel.generateContent(systemPrompt + message);
            const proText = proResult.response.text();
            return NextResponse.json({ text: proText });
        }
    } catch (error: any) {
        console.error("Gemini API Final Error:", error);
        return NextResponse.json(
            { error: `Liaison Connection Error: ${error.message || "Unknown Failure"}` },
            { status: 500 }
        );
    }
}
