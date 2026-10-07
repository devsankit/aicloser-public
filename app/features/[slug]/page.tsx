import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { DemoLink, MarketingLayout, loginUrl } from '../../marketing-layout';
import { features, getFeature } from '../../../lib/features';

type FeaturePageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return features.map((feature) => ({ slug: feature.slug }));
}

export async function generateMetadata({ params }: FeaturePageProps): Promise<Metadata> {
  const { slug } = await params;
  const feature = getFeature(slug);
  if (!feature) return {};
  return {
    title: feature.seoTitle,
    description: feature.seoDescription,
    alternates: { canonical: `/features/${feature.slug}` },
    openGraph: { type: 'article', title: feature.seoTitle, description: feature.seoDescription, url: `https://aicloser.in/features/${feature.slug}`, images: [{ url: feature.image, alt: feature.name }] },
    twitter: { card: 'summary_large_image', title: feature.seoTitle, description: feature.seoDescription, images: [feature.image] },
  };
}

export default async function FeatureDetailPage({ params }: FeaturePageProps) {
  const { slug } = await params;
  const feature = getFeature(slug);
  if (!feature) notFound();

  const related = features.filter((item) => item.slug !== feature.slug && item.category === feature.category).slice(0, 3);
  const breadcrumbData = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://aicloser.in/' }, { '@type': 'ListItem', position: 2, name: 'Features', item: 'https://aicloser.in/features' }, { '@type': 'ListItem', position: 3, name: feature.name, item: `https://aicloser.in/features/${feature.slug}` }] };
  const faqData = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: feature.faqs.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })) };

  return (
    <MarketingLayout active="features">
      <article>
        <section className="feature-detail-hero section-pad">
          <a className="breadcrumb" href="/features">Features / {feature.category.toLowerCase()}</a>
          <div className="section-label">{feature.eyebrow}</div>
          <h1>{feature.name}<span className="accent">.</span></h1>
          <p className="feature-detail-lead">{feature.description}</p>
          <div className="page-actions" style={{ justifyContent: 'flex-start' }}><DemoLink /><a className="button button-muted" href={loginUrl}>Sign in</a></div>
        </section>

        <section className="feature-detail-grid section-pad" aria-label={`${feature.name} details`}>
          <div className="feature-detail-visual"><img className="feature-visual-image" src={feature.image} alt={`${feature.name} workflow in AI Closer`} width={1200} height={750} /></div>
          <div className="feature-detail-copy"><div className="section-label">WHY IT MATTERS</div><h2>Make the next move easier to see<span className="accent">.</span></h2><ul className="feature-detail-benefits">{feature.benefits.map((benefit) => <li key={benefit}><span aria-hidden="true">✓</span>{benefit}</li>)}</ul></div>
        </section>

        <section className="feature-detail-steps" aria-labelledby="workflow-title"><div className="section-label">HOW IT WORKS</div><h2 id="workflow-title">From activity to action<span className="accent">.</span></h2><div className="feature-detail-steps-grid">{feature.steps.map((step, index) => <article className="feature-detail-step" key={step.title}><small>0{index + 1}</small><h3>{step.title}</h3><p>{step.description}</p></article>)}</div></section>

        <section className="feature-detail-faq section-pad" aria-labelledby="faq-title"><div className="section-label">FAQ</div><h2 id="faq-title">Questions, answered<span className="accent">.</span></h2>{feature.faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</section>

        <section className="feature-detail-related section-pad" aria-labelledby="related-title"><div className="section-label">KEEP EXPLORING</div><h2 id="related-title">Related capabilities<span className="accent">.</span></h2><div className="feature-detail-related-grid">{related.map((item) => <a className="feature-related-link" href={`/features/${item.slug}`} key={item.slug}>{item.name}<span aria-hidden="true"> ↗</span></a>)}</div></section>

        <section className="feature-detail-cta section-pad"><h2>Bring this workflow into your sales floor<span className="accent">.</span></h2><div className="page-actions"><DemoLink /><a className="button button-light-outline" href={loginUrl}>Sign in</a></div></section>
      </article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />
    </MarketingLayout>
  );
}
