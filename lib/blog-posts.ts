export type BlogPost = {
  slug: string;
  date: string;
  title: string;
  excerpt: string;
  body: string[];
};

export const blogPosts: BlogPost[] = [];

const WORDPRESS_API_BASE = 'https://blog.aicloser.in/wp-json/wp/v2';

function stripHtml(html: string): string {
  return html.replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/&#8217;/g, "'").replace(/&#8216;/g, "'").replace(/&#8220;/g, '"').replace(/&#8221;/g, '"').trim();
}

export async function fetchLiveBlogPosts(): Promise<BlogPost[]> {
  try {
    const res = await fetch(`${WORDPRESS_API_BASE}/posts?_embed=true&per_page=50`, {
      headers: { 'User-Agent': 'AI Closer Blog Sync' },
      next: { revalidate: 60 },
    });
    if (!res.ok) return blogPosts;
    const data = await res.json();
    if (!Array.isArray(data) || data.length === 0) return blogPosts;

    return data.map((item: any) => ({
      slug: item.slug,
      date: new Date(item.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      title: stripHtml(item.title?.rendered || ''),
      excerpt: stripHtml(item.excerpt?.rendered || ''),
      body: item.content?.rendered ? [item.content.rendered] : [],
    }));
  } catch {
    return blogPosts;
  }
}

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export async function getLiveBlogPost(slug: string): Promise<BlogPost | undefined> {
  try {
    const res = await fetch(`${WORDPRESS_API_BASE}/posts?slug=${encodeURIComponent(slug)}&_embed=true`, {
      headers: { 'User-Agent': 'AI Closer Blog Sync' },
      next: { revalidate: 60 },
    });
    if (!res.ok) return getBlogPost(slug);
    const data = await res.json();
    if (!Array.isArray(data) || data.length === 0) return getBlogPost(slug);

    const item = data[0];
    return {
      slug: item.slug,
      date: new Date(item.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      title: stripHtml(item.title?.rendered || ''),
      excerpt: stripHtml(item.excerpt?.rendered || ''),
      body: item.content?.rendered ? [item.content.rendered] : [],
    };
  } catch {
    return getBlogPost(slug);
  }
}
