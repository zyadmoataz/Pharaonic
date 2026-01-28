import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://pharaonic.vercel.app/'; // Enterprise domain placeholder

  const routes = [
    '',
    '/about',
    '/services',
    '/stories',
    '/why-us',
    '/pricing',
    '/card',
    '/personalized-plan',
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
