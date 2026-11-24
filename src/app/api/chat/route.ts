import { NextResponse } from "next/server";

const MAX_MESSAGE_LENGTH = 2000;
const SYSTEM_PROMPT = `You are the "Pharaonic Protocol Liaison", a high-level Egyptian tourism AI.
Personality: Technical, elite, surgical.
Rules: Max 3 sentences. Answer only tourism queries.`;

const CANDIDATE_MODELS = ["gemini-2.5-flash", "gemini-2.0-flash"] as const;

interface GeminiResponse {
  candidates?: Array<{
    content?: {
      parts?: Array<{ text?: string }>;
    };
  }>;
  error?: { message?: string };
}

export async function POST(req: Request) {
  try {
    const body = (await req.json().catch(() => null)) as { message?: unknown } | null;
    const rawMessage = typeof body?.message === "string" ? body.message.trim() : "";

    if (!rawMessage) {
      return NextResponse.json(
        { error: "Please enter a valid travel query." },
        { status: 400 }
      );
    }

    if (rawMessage.length > MAX_MESSAGE_LENGTH) {
      return NextResponse.json(
        { error: `Query exceeds ${MAX_MESSAGE_LENGTH} characters.` },
        { status: 400 }
      );
    }

    const apiKey = process.env.GEMINI_API_KEY?.trim();
    if (!apiKey || apiKey === "your_gemini_api_key_here") {
      return NextResponse.json(
        { error: "AI Liaison service is not configured." },
        { status: 503 }
      );
    }

    for (const model of CANDIDATE_MODELS) {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          signal: AbortSignal.timeout(15000),
          body: JSON.stringify({
            contents: [
              {
                role: "user",
                parts: [{ text: `${SYSTEM_PROMPT}\n\nUser: ${rawMessage}` }],
              },
            ],
          }),
        }
      );

      if (!response.ok) {
        continue;
      }

      const data = (await response.json()) as GeminiResponse;
      const reply = data.candidates?.[0]?.content?.parts?.[0]?.text?.trim();
      if (reply) {
        return NextResponse.json({ text: reply });
      }
    }

    return NextResponse.json(
      { error: "Liaison temporarily unavailable. Please try again shortly." },
      { status: 502 }
    );
  } catch (error: unknown) {
    if (process.env.NODE_ENV !== "production") {
      console.error("Chat API error:", error);
    }
    return NextResponse.json(
      { error: "Unable to process request right now." },
      { status: 500 }
    );
  }
}
