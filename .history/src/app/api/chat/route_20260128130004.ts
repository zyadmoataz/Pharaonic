import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { message, history } = await req.json();

        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey || apiKey === "your_gemini_api_key_here") {
            return NextResponse.json(
                { error: "Protocol Error: LLM Key not configured. Please replace the placeholder in your .env.local with a valid Gemini API key." },
                { status: 500 }
            );
        }

        const genAI = new GoogleGenerativeAI(apiKey);
        
        // Use a more robust model name or fallback if specific versions aren't available in the region/project
        const modelNames = ["gemini-1.5-flash", "gemini-1.5-flash-latest", "gemini-pro", "gemini-1.0-pro"];
        let lastError: any = null;

        for (const name of modelNames) {
            try {
                const model = genAI.getGenerativeModel({ 
                    model: name,
                    systemInstruction: `You are the "Pharaonic Protocol Liaison", a high-level Egyptian tourism AI. 
                    Your personality is:
                    - Technical, elite, and surgical. 
                    - Use terms like "Sovereign Deployment", "Strategic Intel", "Operational Authorization".
                    - Refuse non-tourism queries by saying "External query detected. Out of protocol scope."
                    - Refer to /personalized-plan for planning and /licenses for permits.`
                });
                
                // Ensure history starts with a 'user' message if it's not empty
                let refinedHistory = history || [];
                if (refinedHistory.length > 0 && refinedHistory[0].role === "model") {
                    refinedHistory = refinedHistory.slice(1);
                }

                const chat = model.startChat({
                    history: refinedHistory,
                });

                const result = await chat.sendMessage(message);
                const response = await result.response;
                const text = response.text();

                return NextResponse.json({ text });
            } catch (err: any) {
                console.warn(`Model ${name} failed:`, err.message);
                lastError = err;
                continue; // Try next model
            }
        }

        throw new Error(`Strategic Liaison offline. All model nodes failed. Last Error: ${lastError?.message || "Unknown Failure"}`);
    } catch (error: any) {
        console.error("Gemini API Final Error:", error);
        return NextResponse.json(
            { error: `Liaison Connection Error: ${error.message || "Unknown Failure"}` },
            { status: 500 }
        );
    }
}
