import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MarketingLayout } from '../../marketing-layout';
import { blogPosts, getBlogPost, getLiveBlogPost } from '../../../lib/blog-posts';
import { SpeedToLeadCalculatorWidget, StickyMobileBar } from './blog-interactive-widgets';

export function generateStaticParams() { return blogPosts.map((post) => ({ slug: post.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const post = await getLiveBlogPost((await params).slug);
  if (!post) return { title: 'Story not found' };
  
  // Clean trailing random numbers (e.g. "8298", "5604") and existing brand suffixes
  let cleanTitle = post.title.replace(/\s*\|\s*AI Closer.*$/i, '').trim();
  cleanTitle = cleanTitle.replace(/\s+\b\d{3,5}\b\s*$/, '').trim();

  // Ensure high-CTR SERP title length with brand anchor
  const absoluteTitle = cleanTitle.length > 54
    ? `${cleanTitle.slice(0, 50).replace(/\s+\S*$/, '')}... | AI Closer`
    : `${cleanTitle} | AI Closer`;

  return {
    title: { absolute: absoluteTitle },
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: 'article',
      title: absoluteTitle,
      description: post.excerpt,
      url: `https://aicloser.in/blog/${post.slug}`,
      siteName: 'AI Closer',
      images: [
        {
          url: 'https://aicloser.in/icon-512.png',
          width: 512,
          height: 512,
          alt: absoluteTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: absoluteTitle,
      description: post.excerpt,
      images: ['https://aicloser.in/icon-512.png'],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const post = await getLiveBlogPost((await params).slug);
  if (!post) notFound();

  const isWhatsAppOrSpeedToLead =
    post.slug.includes('whatsapp') ||
    post.slug.includes('speed-to-lead') ||
    post.slug.includes('lead-decay');

  const fullHtml = post.body.join('\n');
  const extractedFaqs: Array<{ question: string; answer: string }> = [];

  // Primary: Extract from <details><summary>Question</summary><p>Answer</p></details>
  const detailsRegex = /<details[^>]*>\s*<summary[^>]*>([\s\S]*?)<\/summary>\s*<p[^>]*>([\s\S]*?)<\/p>/gi;
  let dm;
  while ((dm = detailsRegex.exec(fullHtml)) !== null && extractedFaqs.length < 8) {
    const qText = dm[1].replace(/<[^>]+>/g, '').trim();
    const aText = dm[2].replace(/<[^>]+>/g, '').trim();
    if (qText.length > 5 && aText.length > 15) {
      extractedFaqs.push({ question: qText, answer: aText });
    }
  }

  // Fallback: Extract from <h3/h4>Question</h3/h4><p>Answer</p>
  if (extractedFaqs.length === 0) {
    const faqRegex = /<h[34][^>]*>([\s\S]*?)<\/h[34]>\s*<p[^>]*>([\s\S]*?)<\/p>/gi;
    let m;
    while ((m = faqRegex.exec(fullHtml)) !== null && extractedFaqs.length < 8) {
      const qText = m[1].replace(/<[^>]+>/g, '').trim();
      const aText = m[2].replace(/<[^>]+>/g, '').trim();
      if ((qText.includes('?') || qText.toLowerCase().includes('what') || qText.toLowerCase().includes('how') || qText.toLowerCase().includes('why')) && aText.length > 25) {
        extractedFaqs.push({ question: qText, answer: aText });
      }
    }
  }

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.excerpt,
        datePublished: new Date(post.date).toISOString(),
        dateModified: new Date(post.date).toISOString(),
        author: { '@type': 'Organization', name: 'AI Closer', url: 'https://aicloser.in' },
        publisher: { '@type': 'Organization', name: 'AI Closer', logo: { '@type': 'ImageObject', url: 'https://aicloser.in/icon-512.png' } },
        mainEntityOfPage: `https://aicloser.in/blog/${post.slug}`,
        image: 'https://aicloser.in/icon-512.png',
      },
      ...(extractedFaqs.length > 0
        ? [
            {
              '@type': 'FAQPage',
              mainEntity: extractedFaqs.map((faq) => ({
                '@type': 'Question',
                name: faq.question,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: faq.answer,
                },
              })),
            },
          ]
        : []),
    ],
  };

  return (
    <MarketingLayout active="blog">
      <article className="article-page section-pad">
        <a className="breadcrumb" href="/blog">← Back to insights</a>
        <div className="section-label">{post.date}</div>
        <h1>{post.title}<span className="accent">.</span></h1>
        <p className="article-lead">{post.excerpt}</p>
        <div className="article-body" dangerouslySetInnerHTML={{ __html: post.body.join('\n') }} />

        {/* Embedded Interactive Lead Decay Widget on Target WhatsApp & Speed-to-Lead Posts */}
        {isWhatsAppOrSpeedToLead && (
          <SpeedToLeadCalculatorWidget defaultTeamSize={5} />
        )}

        <a className="button button-primary" href="/features">Explore AI Closer features <span aria-hidden="true">→</span></a>
      </article>

      <StickyMobileBar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </MarketingLayout>
  );
}
