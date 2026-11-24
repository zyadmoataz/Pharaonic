import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/env";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/services",
    "/stories",
    "/why-us",
    "/card",
    "/ai-generator",
    "/personalized-plan",
    "/recommendations",
    "/licenses",
    "/tour-guide",
    "/blogs",
    "/help",
    "/contact",
    "/privacy",
    "/terms",
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));
}
