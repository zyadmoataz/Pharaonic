# Pharaonic — Egypt Travel & AI Itinerary Platform

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=flat-square&logo=vercel&logoColor=white)](https://pharaonic.vercel.app/)

A modern **Next.js 16 & TypeScript** travel platform for visitors exploring Egypt—combining AI-assisted itinerary planning, digital travel permit workflows, verified private guide discovery, and tiered membership benefits.

**Live Demo:** [https://pharaonic.vercel.app](https://pharaonic.vercel.app)

---

## Key Features & Architecture

- **AI Trip Planner & Liaison (`Gemini`):** Interactive multi-step itinerary builder and `/api/chat` liaison with strict input validation, 15s timeouts, and automatic model fallback (`gemini-2.5-flash` → `gemini-2.0-flash`).
- **Resilient Authentication (`Clerk`):** Protected routes (`/checkout`, `/personalized-plan/results`) via `src/proxy.ts` with a graceful `AppAuthProvider` fallback so static builds and unconfigured preview environments never fail.
- **Digital Travel Permits & Private Guides:** Structured permit application workflows and a filterable directory of licensed Egyptologists and private tour specialists.
- **Enterprise Resilience:** Route-level (`src/app/error.tsx`) and root-level (`src/app/global-error.tsx`) error boundaries, accessible `ToastProvider` (`aria-live="polite"`), `OfflineBanner` network detection, and Content Security Policy headers in `next.config.ts`.
- **Technical SEO & Performance:** Dynamic `sitemap.ts`, `robots.ts`, `next/font` (`Poppins` & `Roboto`), Open Graph & Twitter Cards, and responsive dark/gold editorial styling.

---

## Tech Stack

- **Framework:** Next.js 16 (App Router, Turbopack, React 19, React Compiler)
- **Language:** TypeScript 5
- **Styling & UI:** Tailwind CSS v4, Framer Motion, Lucide Icons
- **Auth & AI:** Clerk (`@clerk/nextjs`), Google Gemini API
- **Deployment:** Vercel

---

## Run Locally

1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy `.env.example` to `.env.local` and add your keys:
   ```bash
   cp .env.example .env.local
   ```
3. Start development or verify production build:
   ```bash
   npm run dev     # Starts local development server at http://localhost:3000
   npx tsc --noEmit
   npm run lint
   npm run build   # Builds optimized production bundle
   ```

---

## Environment Variables (Vercel)

Configure these in **Vercel Project Settings → Environment Variables** (Production & Preview):

| Variable | Required | Description |
| --- | --- | --- |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Yes (for Auth) | Clerk publishable key (`pk_...`) |
| `CLERK_SECRET_KEY` | Yes (for Auth) | Clerk secret key (`sk_...`) |
| `NEXT_PUBLIC_CLERK_SIGN_IN_URL` | Optional | `/sign-in` |
| `NEXT_PUBLIC_CLERK_SIGN_UP_URL` | Optional | `/sign-up` |
| `GEMINI_API_KEY` | Yes (for AI Chat) | Google AI Studio API key |
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | Optional | EmailJS service ID |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | Optional | EmailJS template ID |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | Optional | EmailJS public key |
| `NEXT_PUBLIC_SITE_URL` | Optional | Canonical deployment URL (`https://pharaonic.vercel.app`) |
