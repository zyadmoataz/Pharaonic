import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { message, history } = await req.json();

        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey || apiKey === "your_gemini_api_key_here") {
            return NextResponse.json(
                { error: "Protocol Error: LLM Key not configured." },
                { status: 500 }
            );
        }

        const systemPrompt = `You are the "Pharaonic Protocol Liaison", a high-level Egyptian tourism AI. 
        Personality: Technical, elite, surgical. 
        Rules: Max 3 sentences. Answer only tourism queries.`;

        // Direct fetch to v1 stable endpoint
        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    contents: [
                        { role: "user", parts: [{ text: systemPrompt + "\n\nUser: " + message }] }
                    ]
                })
            }
        );

        const data = await response.json();

        if (!response.ok) {
        console.error("Gemini API Error:", data);
            return NextResponse.json(
                { error: `Liaison Connection Error: ${data.error?.message || response.statusText}` },
                { status: 500 }
            );
        }

        if (data.candidates && data.candidates[0].content && data.candidates[0].content.parts[0].text) {
            return NextResponse.json({ text: data.candidates[0].content.parts[0].text });
        } else {
            console.error("Gemini Unexpected Response:", data);
            return NextResponse.json(
                { error: "Liaison Error: No intelligent response received." },
                { status: 500 }
            );
        }
    } catch (error: any) {
        console.error("Gemini API Final Error:", error);
        return NextResponse.json(
            { error: `Liaison Connection Error: ${error.message}` },
            { status: 500 }
        );
    }
}
