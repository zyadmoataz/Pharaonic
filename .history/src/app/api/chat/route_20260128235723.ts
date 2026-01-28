import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { message } = await req.json();

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

        // 1. DYNAMIC MODEL DISCOVERY
        // We first ask Google: "What models does this key have access to?"
        // This avoids 404s by only using models that are explicitly listed as available.
        let targetModel = "models/gemini-1.5-flash"; // Default preference
        
        try {
            const listReq = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`);
            const listData = await listReq.json();
            
            if (listData.models) {
                // Find the first model that supports 'generateContent'
                const validModel = listData.models.find((m: any) => 
                    m.supportedGenerationMethods.includes("generateContent") &&
                    (m.name.includes("flash") || m.name.includes("pro")) // Prefer faster/better models
                );
                
                if (validModel) {
                    targetModel = validModel.name;
                    console.log("Selected Dynamic Model:", targetModel);
                }
            }
        } catch (e) {
            console.warn("Model list failed, falling back to default:", e);
        }

        // 2. GENERATE CONTENT
        // Use the discovered model directly
        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/${targetModel}:generateContent?key=${apiKey}`,
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
                { error: `Liaison Connection Error: ${data.error?.message || response.statusText} (Tried: ${targetModel})` },
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
