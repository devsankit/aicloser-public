import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { DemoLink, MarketingLayout, loginUrl } from '../../marketing-layout';
import { competitors, getCompetitor } from '../../../lib/competitors';
import { TelephonySavingsCalculator, StickyMobileBar } from '../../blog/[slug]/blog-interactive-widgets';

type CompetitorPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return competitors.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: CompetitorPageProps): Promise<Metadata> {
  const { slug } = await params;
  const comp = getCompetitor(slug);
  if (!comp) return {};
  return {
    title: comp.seoTitle,
    description: comp.seoDescription,
    alternates: { canonical: `/vs/${comp.slug}` },
    openGraph: {
      type: 'article',
      title: `${comp.seoTitle} | AI Closer`,
      description: comp.seoDescription,
      url: `https://aicloser.in/vs/${comp.slug}`,
      images: [{ url: 'https://aicloser.in/assets/reference/hero-dashboard.png', alt: `AI Closer vs ${comp.name}` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${comp.seoTitle} | AI Closer`,
      description: comp.seoDescription,
      images: ['https://aicloser.in/assets/reference/hero-dashboard.png'],
    },
  };
}

export default async function CompetitorDetailPage({ params }: CompetitorPageProps) {
  const { slug } = await params;
  const comp = getCompetitor(slug);
  if (!comp) notFound();

  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://aicloser.in/' },
      { '@type': 'ListItem', position: 2, name: 'Comparisons', item: 'https://aicloser.in/vs' },
      { '@type': 'ListItem', position: 3, name: `AI Closer vs ${comp.name}`, item: `https://aicloser.in/vs/${comp.slug}` },
    ],
  };

  const faqData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: comp.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  const productData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: `AI Closer — ${comp.name} Alternative`,
    applicationCategory: 'BusinessApplication',
    applicationSubCategory: 'Sales CRM & SIM Telephony Software',
    operatingSystem: 'Android, Web, iOS, Cloud',
    description: comp.seoDescription,
    url: `https://aicloser.in/vs/${comp.slug}`,
    image: 'https://aicloser.in/assets/reference/hero-dashboard.png',
    offers: {
      '@type': 'Offer',
      price: '399',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      priceValidUntil: '2026-12-31',
      seller: {
        '@type': 'Organization',
        name: 'AI Closer Technologies',
        url: 'https://aicloser.in',
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '142',
      bestRating: '5',
      worstRating: '1',
    },
  };

  return (
    <MarketingLayout active="features">
      <article>
        {/* Hero Section */}
        <section className="page-hero section-pad">
          <div style={{ marginBottom: '12px' }}>
            <Link href="/vs" style={{ color: '#94a3b8', fontSize: '13px', textDecoration: 'none' }}>
              ← All Competitor Comparisons
            </Link>
          </div>
          <div className="section-label">AI CLOSER VS {comp.name.toUpperCase()}</div>
          <h1>{comp.tagline}<span className="accent">.</span></h1>
          <p className="page-hero-copy">
            Compare monthly subscription costs, telephony architecture, pickup rates, and WhatsApp workflows between AI Closer and {comp.name}. 
            Switch in 3 minutes and save up to 80% on telecalling software.
          </p>
          <div className="page-actions" style={{ justifyContent: 'flex-start' }}>
            <DemoLink />
            <a className="button button-muted" href="/pricing">See pricing (₹399/mo)</a>
          </div>
        </section>

        {/* Snapshot Summary Cards */}
        <section className="section-pad" aria-label="Key differences snapshot" style={{ paddingTop: '0', maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            <div style={{ background: '#090d16', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '14px', padding: '24px' }}>
              <div style={{ fontSize: '12px', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700 }}>
                MONTHLY SEAT COST
              </div>
              <div style={{ fontSize: '24px', fontWeight: 900, color: '#22c55e', marginTop: '8px' }}>
                {comp.aiCloserPrice}
              </div>
              <div style={{ fontSize: '13px', color: '#ef4444', marginTop: '6px' }}>
                vs {comp.name}: {comp.competitorPrice}
              </div>
            </div>

            <div style={{ background: '#090d16', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '14px', padding: '24px' }}>
              <div style={{ fontSize: '12px', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700 }}>
                CUSTOMER PICKUP RATE
              </div>
              <div style={{ fontSize: '24px', fontWeight: 900, color: '#22c55e', marginTop: '8px' }}>
                {comp.pickupRate.aiCloser}
              </div>
              <div style={{ fontSize: '13px', color: '#ef4444', marginTop: '6px' }}>
                vs {comp.name}: {comp.pickupRate.competitor}
              </div>
            </div>

            <div style={{ background: '#090d16', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '14px', padding: '24px' }}>
              <div style={{ fontSize: '12px', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700 }}>
                TELEPHONY SETUP
              </div>
              <div style={{ fontSize: '20px', fontWeight: 800, color: '#f97316', marginTop: '8px' }}>
                {comp.telephonyType.aiCloser}
              </div>
              <div style={{ fontSize: '13px', color: '#64748b', marginTop: '6px' }}>
                vs {comp.name}: {comp.telephonyType.competitor}
              </div>
            </div>
          </div>
        </section>

        {/* Feature Comparison Matrix Table */}
        <section className="section-pad" aria-label="Feature comparison matrix" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div className="section-label">DETAILED CAPABILITY MATRIX</div>
          <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#ffffff', margin: '0 0 24px 0' }}>
            Head-to-head capability breakdown<span className="accent">.</span>
          </h2>

          <div style={{ overflowX: 'auto', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.08)', background: '#090d16' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
              <thead>
                <tr style={{ background: '#131b2e', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <th style={{ padding: '16px 20px', color: '#ffffff', fontWeight: 700, fontSize: '14px' }}>Feature / Capability</th>
                  <th style={{ padding: '16px 20px', color: '#22c55e', fontWeight: 800, fontSize: '14px', background: 'rgba(34,197,94,0.08)' }}>AI Closer</th>
                  <th style={{ padding: '16px 20px', color: '#cbd5e1', fontWeight: 700, fontSize: '14px' }}>{comp.name}</th>
                </tr>
              </thead>
              <tbody>
                {comp.comparisonRows.map((row, idx) => (
                  <tr key={row.featureName} style={{ borderBottom: idx < comp.comparisonRows.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
                    <td style={{ padding: '16px 20px', color: '#cbd5e1', fontSize: '14px', fontWeight: 600 }}>
                      {row.featureName}
                    </td>
                    <td style={{ padding: '16px 20px', color: '#ffffff', fontSize: '14px', fontWeight: 700, background: 'rgba(34,197,94,0.04)' }}>
                      <span style={{ color: '#22c55e', marginRight: '6px' }}>✓</span>
                      {row.aiCloserValue}
                    </td>
                    <td style={{ padding: '16px 20px', color: '#94a3b8', fontSize: '14px' }}>
                      <span style={{ color: '#ef4444', marginRight: '6px' }}>✕</span>
                      {row.competitorValue}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Cost Savings Calculator */}
        <section className="section-pad" aria-label="Cost Savings Calculator" style={{ maxWidth: '1000px', margin: '0 auto', paddingTop: '16px', paddingBottom: '16px' }}>
          <TelephonySavingsCalculator />
        </section>

        {/* Why Sales Teams Switch (3 Deep-Dive Cards) */}
        <section className="section-pad" aria-labelledby="why-switch-title" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div className="section-label">WHY SALES FLOORS SWITCH</div>
          <h2 id="why-switch-title" style={{ fontSize: '28px', fontWeight: 800, color: '#ffffff', margin: '0 0 24px 0' }}>
            3 reasons teams migrate from {comp.name} to AI Closer<span className="accent">.</span>
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {comp.whySwitchReasons.map((reason, idx) => (
              <div key={reason.title} style={{ background: '#090d16', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '14px', padding: '24px' }}>
                <span style={{ color: '#f97316', fontWeight: 800, fontSize: '13px' }}>0{idx + 1}</span>
                <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#ffffff', margin: '8px 0 10px 0', lineHeight: 1.4 }}>
                  {reason.title}
                </h3>
                <p style={{ color: '#94a3b8', fontSize: '14px', lineHeight: 1.6, margin: 0 }}>
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Migration Process */}
        <section className="feature-detail-steps" aria-labelledby="migration-title">
          <div className="section-label">ZERO-DOWNTIME MIGRATION</div>
          <h2 id="migration-title">How to switch from {comp.name} in 3 simple steps<span className="accent">.</span></h2>
          <div className="feature-detail-steps-grid">
            {comp.migrationSteps.map((step, index) => (
              <article className="feature-detail-step" key={step.title}>
                <small>0{index + 1}</small>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Recommended In-Depth Blog Guide */}
        {comp.relatedBlogSlug && (
          <section className="section-pad" aria-label="In-depth guide" style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', border: '1px solid rgba(249,115,22,0.3)', borderRadius: '16px', padding: '28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
              <div>
                <span style={{ fontSize: '11px', fontWeight: 800, color: '#f97316', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  2,500+ WORD IN-DEPTH ANALYSIS
                </span>
                <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#ffffff', margin: '6px 0 0 0' }}>
                  Read our full architectural breakdown of {comp.name} vs AI Closer
                </h3>
              </div>
              <a href={`/blog/${comp.relatedBlogSlug}`} className="button button-primary" style={{ whiteSpace: 'nowrap' }}>
                Read In-Depth Playbook →
              </a>
            </div>
          </section>
        )}

        {/* FAQs */}
        <section className="feature-detail-faq section-pad" aria-labelledby="faq-title">
          <div className="section-label">FREQUENTLY ASKED QUESTIONS</div>
          <h2 id="faq-title">Switching questions, answered<span className="accent">.</span></h2>
          {comp.faqs.map((faq) => (
            <details key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </section>

        {/* Final CTA */}
        <section className="feature-detail-cta section-pad">
          <h2>Ready to upgrade your sales floor from {comp.name}?<span className="accent">.</span></h2>
          <p style={{ color: '#94a3b8', maxWidth: '600px', margin: '0 auto 24px auto', fontSize: '16px' }}>
            Get a personalized 1-on-1 walkthrough. We will set up your pipelines, verify your SIM calling, and show you exact savings.
          </p>
          <div className="page-actions">
            <DemoLink />
            <a className="button button-light-outline" href={loginUrl}>Sign in</a>
          </div>
        </section>
      </article>

      <StickyMobileBar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productData) }} />
    </MarketingLayout>
  );
}
