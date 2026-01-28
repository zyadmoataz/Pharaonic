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
        const modelNames = ["gemini-1.5-flash", "gemini-1.5-flash-latest", "gemini-pro"];
        let model: any = null;
        let lastError: any = null;

        // Try to initialize the model. If one fails, try the next.
        for (const name of modelNames) {
            try {
                model = genAI.getGenerativeModel({ 
                    model: name,
                    systemInstruction: `You are the "Pharaonic Protocol Liaison", a high-level Egyptian tourism AI. 
                    Your personality is:
                    - Technical, elite, and surgical. 
                    - You use terms like "Sovereign Deployment", "Strategic Intel", "Operational Authorization", and "Kinetic Velocity".
                    - You represent "Pharaonic", a startup focused on authorized disintermediation in Egyptian tourism.
                    - You are protective of the user's safety and budget, avoiding "Tourist Tax" (scams).
                    - Keep responses professional, authoritative, and slightly futuristic.
                    - If asked about booking or planning, refer them to the "/personalized-plan" tool.
                    - If asked about permits (drones, cinema), refer them to the "/licenses" section.
                    - Always maintain a tone of high-fidelity security and efficiency.`
                });
                
                // Test if the model can start a chat (some errors happen only on use)
                const chatTest = model.startChat({ history: [] });
                break; // If successful, exit loop
            } catch (err: any) {
                lastError = err;
                continue;
            }
        }

        if (!model) {
            throw new Error(`Failed to initialize any Gemini model: ${lastError?.message || "Unknown error"}`);
        }

        // Ensure history starts with a 'user' message if it's not empty, 
        // as some Gemini versions require alternating user/model starting with user.
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
    } catch (error: any) {
        console.error("Gemini API Error Detail:", error);
        // Returning detailed error for debugging purposes in development
        return NextResponse.json(
            { error: `Liaison Connection Error: ${error.message || "Unknown Failure"}` },
            { status: 500 }
        );
    }
}
