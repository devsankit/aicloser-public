export type BlogPost = {
  slug: string;
  date: string;
  title: string;
  excerpt: string;
  body: string[];
  category?: string;
  image?: string;
};

export const blogPosts: BlogPost[] = [];

const WORDPRESS_API_BASE = 'https://blog.aicloser.in/wp-json/wp/v2';

const BLOG_FEATURE_IMAGES = [
  '/assets/features/automatic-sales-call-recording.png',
  '/assets/features/salesperson-sim-support.png',
  '/assets/features/lead-management.png',
  '/assets/features/centralized-call-history.png',
  '/assets/features/lead-distribution-assignment.png',
  '/assets/features/sales-team-mobile-app.png',
  '/assets/features/admin-dashboard.png',
  '/assets/features/customer-intent-objection-analysis.png',
  '/assets/features/team-activity-monitoring.png',
  '/assets/features/follow-up-management.png',
  '/assets/features/call-recording-playback.png',
  '/assets/features/salesperson-performance-tracking.png',
  '/assets/features/salesperson-coaching-insights.png',
  '/assets/features/lead-pipeline-management.png',
  '/assets/features/sales-conversation-insights.png',
  '/assets/features/call-notes.png',
  '/assets/features/notifications-reminders.png',
  '/assets/reference/hero-dashboard.png',
  '/assets/reference/feature-analytics.png',
  '/assets/reference/realtime-sync.png'
];

function inferCategory(slug: string, title: string): string {
  const text = `${slug} ${title}`.toLowerCase();
  if (text.includes('telecrm') || text.includes('runo') || text.includes('exotel') || text.includes('zoho') || text.includes('alternative') || text.includes('vs') || text.includes('knowlarity') || text.includes('leadsquared')) {
    return 'CRM Alternatives';
  }
  if (text.includes('sim') || text.includes('pickup') || text.includes('dialer') || text.includes('truecaller') || text.includes('announcement') || text.includes('recording') || text.includes('telecalling')) {
    return 'SIM Call Recording';
  }
  if (text.includes('ai') || text.includes('closer') || text.includes('coaching') || text.includes('intent') || text.includes('objection') || text.includes('intelligence')) {
    return 'AI CRM Intelligence';
  }
  if (text.includes('whatsapp') || text.includes('inbox') || text.includes('dual') || text.includes('meta') || text.includes('otp') || text.includes('shopify') || text.includes('omnichannel')) {
    return 'WhatsApp & Omnichannel';
  }
  return 'Sales Operations';
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/&#8217;/g, "'").replace(/&#8216;/g, "'").replace(/&#8220;/g, '"').replace(/&#8221;/g, '"').trim();
}

export async function fetchLiveBlogPosts(): Promise<BlogPost[]> {
  try {
    const res = await fetch(`${WORDPRESS_API_BASE}/posts?_embed=true&per_page=100`, {
      headers: { 'User-Agent': 'AI Closer Blog Sync' },
      next: { revalidate: 60 },
    });
    if (!res.ok) return blogPosts;
    const data = await res.json();
    if (!Array.isArray(data) || data.length === 0) return blogPosts;

    return data.map((item: any, idx: number) => {
      const title = stripHtml(item.title?.rendered || '');
      const excerpt = stripHtml(item.excerpt?.rendered || '');
      const category = inferCategory(item.slug, title);
      const image = BLOG_FEATURE_IMAGES[idx % BLOG_FEATURE_IMAGES.length];

      return {
        slug: item.slug,
        date: new Date(item.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
        title,
        excerpt,
        body: item.content?.rendered ? [item.content.rendered] : [],
        category,
        image,
      };
    });
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
    const rawExcerpt = item.yoast_head_json?.description || item.excerpt?.rendered || '';
    const cleanExcerpt = stripHtml(rawExcerpt).trim();
    const seoDescription = cleanExcerpt.length > 158
      ? cleanExcerpt.slice(0, 155).replace(/\s+\S*$/, '') + '...'
      : cleanExcerpt;

    return {
      slug: item.slug,
      date: new Date(item.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      title: stripHtml(item.title?.rendered || ''),
      excerpt: seoDescription,
      body: item.content?.rendered ? [item.content.rendered] : [],
    };
  } catch {
    return getBlogPost(slug);
  }
}
