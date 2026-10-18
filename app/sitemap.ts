import { locations } from '../lib/locations';
import type { MetadataRoute } from 'next';
import { features } from '../lib/features';
import { competitors } from '../lib/competitors';
import { roles } from '../lib/roles';
import { fetchLiveBlogPosts } from '../lib/blog-posts';

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await fetchLiveBlogPosts();

  const staticPathList = [
    '',
    '/pricing',
    '/calculator',
    '/tools/truecaller-spam-checker',
    '/features',
    '/vs',
    '/locations',
    ...locations.map((l) => `/locations/${l.slug}`),
    '/for',
    '/for/real-estate-crm',
    '/for/loan-dsa-calling-crm',
    '/for/edtech-admissions-dialer',
    '/for/insurance-posp-crm',
    '/for/automobile-dealership-crm',
    '/for/healthcare-clinic-crm',
    ...roles.map((r) => `/for/${r.slug}`),
    ...features.map((f) => `/features/${f.slug}`),
    ...competitors.map((c) => `/vs/${c.slug}`),
    '/about',
    '/contact',
    '/security',
    '/blog',
    '/privacy',
    '/terms',
    '/refund-policy',
  ];

  // Deduplicate static paths
  const uniqueStaticPaths = Array.from(new Set(staticPathList));

  const staticEntries: MetadataRoute.Sitemap = uniqueStaticPaths.map((route, index) => {
    let priority = 0.85;
    let changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] = 'weekly';

    if (route === '') {
      priority = 1.0;
      changeFrequency = 'daily';
    } else if (route === '/pricing' || route === '/calculator' || route === '/tools/truecaller-spam-checker') {
      priority = 0.95;
      changeFrequency = 'daily';
    } else if (route.startsWith('/for/') || route.startsWith('/locations/')) {
      priority = 0.9;
      changeFrequency = 'weekly';
    } else if (route === '/about' || route === '/contact' || route === '/security' || route === '/privacy' || route === '/terms' || route === '/refund-policy') {
      priority = 0.7;
      changeFrequency = 'monthly';
    }

    return {
      url: `https://aicloser.in${route}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
    };
  });

  const blogEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `https://aicloser.in/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.75,
  }));

  return [...staticEntries, ...blogEntries];
}
