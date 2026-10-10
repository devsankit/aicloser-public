
const BLOG_IMAGES = [
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

import type { Metadata } from 'next';
import { MarketingLayout } from '../marketing-layout';
import { fetchLiveBlogPosts } from '../../lib/blog-posts';

export const metadata: Metadata = {
  title: 'Sales CRM Insights and Strategies',
  description: 'Practical sales operations insights from the AI Closer team: call recording, lead management, follow-ups, and sales coaching.',
  alternates: { canonical: '/blog' },
  openGraph: { title: 'AI Closer Sales Insights', description: 'Practical guidance for business owners building a stronger sales process.', url: 'https://aicloser.in/blog' },
};

export default async function BlogPage() {
  const posts = await fetchLiveBlogPosts();
  return (
    <MarketingLayout active="blog">
      <section className="page-hero section-pad">
        <div className="section-label">AI CLOSER JOURNAL</div>
        <h1>Sales insights for teams that do the work<span className="accent">.</span></h1>
        <p className="page-hero-copy">Clear ideas for managing sales calls, distributing leads, and coaching from real conversations.</p>
      </section>
      <section className="article-grid section-pad">
        {posts.length > 0 ? (
          posts.map((post, index) => (
            <a
              className="article-card"
              href={`/blog/${post.slug}`}
              key={post.slug}
              style={{ backgroundImage: `linear-gradient(180deg, rgba(16,16,16,.2), rgba(16,16,16,.92)), url('${BLOG_IMAGES[index % BLOG_IMAGES.length]}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              <small>{post.date}</small>
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
              <span>Read story →</span>
            </a>
          ))
        ) : (
          <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '60px 20px', color: '#888' }}>
            <p style={{ fontSize: '1.1rem', marginBottom: '8px', color: '#ccc' }}>No blog articles published yet.</p>
            <p style={{ fontSize: '0.9rem', color: '#777' }}>New insights and sales strategies will appear here once published from WordPress.</p>
          </div>
        )}
      </section>
    </MarketingLayout>
  );
}
