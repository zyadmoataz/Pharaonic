import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  // Strict Type Checking Enabled
  typescript: {
    // ignoreBuildErrors: false, // Default is false, which is correct for Senior Code Quality
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: "camera=(), microphone=(), geolocation=(), interest-cohort=()"
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://*.clerk.accounts.dev https://clerk.pharaonic.ai",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "img-src 'self' data: https: https://*.unsplash.com https://grainy-gradients.vercel.app",
              "font-src 'self' https://fonts.gstatic.com",
              "connect-src 'self' https://*.clerk.accounts.dev https://clerk.pharaonic.ai https://api.emailjs.com https://api.formspree.io",
              "frame-src 'self' https://*.clerk.accounts.dev https://clerk.pharaonic.ai",
              "worker-src 'self' blob:"
            ].join('; ')
          }
        ],
      },
    ];
  },
};

export default nextConfig;
