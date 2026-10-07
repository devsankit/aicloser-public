import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MarketingLayout } from '../../marketing-layout';
import { blogPosts, getBlogPost, getLiveBlogPost } from '../../../lib/blog-posts';

export function generateStaticParams() { return blogPosts.map((post) => ({ slug: post.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const post = await getLiveBlogPost((await params).slug);
  if (!post) return { title: 'Story not found' };
  return { title: post.title, description: post.excerpt, alternates: { canonical: `/blog/${post.slug}` }, openGraph: { type: 'article', title: post.title, description: post.excerpt, url: `https://aicloser.in/blog/${post.slug}` } };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const post = await getLiveBlogPost((await params).slug);
  if (!post) notFound();
  const structuredData = { '@context': 'https://schema.org', '@type': 'BlogPosting', headline: post.title, description: post.excerpt, datePublished: new Date(post.date).toISOString(), dateModified: new Date(post.date).toISOString(), author: { '@type': 'Organization', name: 'AI Closer' }, publisher: { '@type': 'Organization', name: 'AI Closer' }, mainEntityOfPage: `https://aicloser.in/blog/${post.slug}` };
  return (
    <MarketingLayout active="blog">
      <article className="article-page section-pad">
        <a className="breadcrumb" href="/blog">← Back to insights</a>
        <div className="section-label">{post.date}</div>
        <h1>{post.title}<span className="accent">.</span></h1>
        <p className="article-lead">{post.excerpt}</p>
        <div className="article-body" dangerouslySetInnerHTML={{ __html: post.body.join('\n') }} />
        <a className="button button-primary" href="/features">Explore AI Closer features <span aria-hidden="true">→</span></a>
      </article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </MarketingLayout>
  );
}
