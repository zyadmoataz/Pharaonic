export const siteConfig = {
  name: "Pharaonic Protocol",
  shortName: "Pharaonic",
  description:
    "The world's most sophisticated gateway to Egyptian heritage. Authorized permits, luxury logistics, and AI-driven strategic planning.",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://pharaonic.vercel.app").replace(/\/+$/, ""),
} as const;

export function getClerkPublishableKey(): string | undefined {
  const key = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY?.trim();
  if (!key || !key.startsWith("pk_")) {
    return undefined;
  }
  return key;
}

export function isClerkConfigured(): boolean {
  return Boolean(getClerkPublishableKey());
}

export function isClerkServerConfigured(): boolean {
  const secret = process.env.CLERK_SECRET_KEY?.trim();
  return isClerkConfigured() && Boolean(secret && secret.startsWith("sk_"));
}

export function getEmailJsConfig() {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID?.trim();
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID?.trim();
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY?.trim();

  if (!serviceId || !templateId || !publicKey) {
    return null;
  }

  return { serviceId, templateId, publicKey };
}
