
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
import { BlogListingClient } from './blog-listing-client';

export const metadata: Metadata = {
  title: 'Sales CRM Insights, Blueprints & Strategies (2026)',
  description: 'Explore 100+ practical sales operations playbooks: SIM call recording, WhatsApp Web CRM, speed-to-lead automation, and Truecaller spam mitigation.',
  alternates: { canonical: '/blog' },
  openGraph: { title: 'AI Closer Sales Insights & Playbooks', description: 'Practical guidance for business owners building a stronger sales process.', url: 'https://aicloser.in/blog' },
};

export default async function BlogPage() {
  const posts = await fetchLiveBlogPosts();
  return (
    <MarketingLayout active="blog">
      <section className="page-hero section-pad" style={{ paddingBottom: '32px' }}>
        <div className="section-label">AI CLOSER JOURNAL · {posts.length} IN-DEPTH PLAYBOOKS</div>
        <h1>Sales insights for teams that do the work<span className="accent">.</span></h1>
        <p className="page-hero-copy">
          Explore practical execution guides on SIM telecalling, WhatsApp sales workflows, Truecaller spam mitigation, and closing high-ticket deals in India.
        </p>
      </section>
      <section className="section-pad" style={{ paddingTop: '10px', maxWidth: '1240px', margin: '0 auto', width: '100%' }}>
        <BlogListingClient posts={posts} />
      </section>
    </MarketingLayout>
  );
}
