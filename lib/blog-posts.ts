export type BlogPost = {
  slug: string;
  date: string;
  title: string;
  excerpt: string;
  body: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'sales-call-recording-for-growing-teams',
    date: 'April 20, 2026',
    title: 'Why sales call recording belongs in your CRM',
    excerpt: 'A practical guide to turning sales conversations into searchable coaching and follow-up context.',
    body: [
      'Sales teams lose momentum when the call, the lead record, and the next action live in different places. Recording calls inside the CRM gives managers a reliable source of truth without asking salespeople to write a second version of every conversation.',
      'AI Closer connects automatic sales call recording with centralized call history, playback, call notes, and follow-up management. That makes the next step visible while the context is still fresh.',
      'For teams using their own SIM cards, the workflow stays close to the way they already work. The result is a more complete record of customer intent, objections, and coaching opportunities.',
    ],
  },
  {
    slug: 'lead-distribution-and-follow-up-management',
    date: 'April 19, 2026',
    title: 'A clearer way to distribute leads and manage follow-ups',
    excerpt: 'How Indian business teams can replace scattered spreadsheets with an accountable lead pipeline.',
    body: [
      'Lead distribution is more than assigning a name to a row in a spreadsheet. A useful process makes ownership, status, priority, and the next follow-up visible to the whole team.',
      'AI Closer brings lead distribution, assignment, status tracking, pipeline management, notes, notifications, and reminders into one workspace. Managers can see where work is waiting and salespeople can focus on the next conversation.',
      'The best pipeline is the one your team actually updates. A focused SIM-based CRM keeps the workflow close to the phone calls that move opportunities forward.',
    ],
  },
  {
    slug: 'sales-coaching-from-real-conversations',
    date: 'April 18, 2026',
    title: 'Coach salespeople from real conversations, not assumptions',
    excerpt: 'Use conversation insights, intent signals, and objection patterns to make team coaching more useful.',
    body: [
      'Performance reviews are stronger when they are grounded in what customers actually said. Conversation insights can reveal recurring objections, buying signals, and moments where a salesperson needs support.',
      'AI Closer combines sales conversation insights with customer intent and objection analysis, salesperson performance tracking, and coaching insights. Managers get a clearer view of what to reinforce in the next one-to-one.',
      'Good coaching remains human. AI should reduce the time spent searching for evidence so leaders can spend more time helping the team improve.',
    ],
  },
];

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
