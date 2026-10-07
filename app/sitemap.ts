import type { MetadataRoute } from 'next';
import { features } from '../lib/features';
import { fetchLiveBlogPosts } from '../lib/blog-posts';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await fetchLiveBlogPosts();
  const staticRoutes = ['', '/about', '/features', '/pricing', '/blog', ...features.map((feature) => `/features/${feature.slug}`)];
  const blogRoutes = posts.map((post) => `/blog/${post.slug}`);

  const allRoutes = [...staticRoutes, ...blogRoutes];

  return allRoutes.map((route, index) => ({
    url: `https://aicloser.in${route}`,
    lastModified: new Date(),
    changeFrequency: index === 0 ? 'weekly' : 'monthly',
    priority: index === 0 ? 1 : route.startsWith('/blog') ? 0.7 : 0.9,
  }));
}
