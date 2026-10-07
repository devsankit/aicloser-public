import type { MetadataRoute } from 'next';
import { features } from '../lib/features';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/about', '/features', '/pricing', '/blog', '/blog/sales-call-recording-for-growing-teams', '/blog/lead-distribution-and-follow-up-management', '/blog/sales-coaching-from-real-conversations', ...features.map((feature) => `/features/${feature.slug}`)];
  return routes.map((route, index) => ({
    url: `https://aicloser.in${route}`,
    lastModified: new Date(),
    changeFrequency: index === 0 ? 'weekly' : 'monthly',
    priority: index === 0 ? 1 : route.startsWith('/blog/') ? 0.7 : 0.9,
  }));
}
