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
              style={{ backgroundImage: `linear-gradient(180deg, rgba(16,16,16,.08), rgba(16,16,16,.9)), url('/assets/reference/blog-${(index % 3) + 1}.jpg')` }}
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
