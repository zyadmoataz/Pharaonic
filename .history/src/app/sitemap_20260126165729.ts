import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://guidly.ai'; // Enterprise domain placeholder

  const routes = [
    '',
    '/about',
    '/services',
    '/stories',
    '/why-us',
    '/pricing',
    '/card',
    '/ai-planner',
    '/help',
    '/contact',
    '/privacy',
    '/terms',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));
}
