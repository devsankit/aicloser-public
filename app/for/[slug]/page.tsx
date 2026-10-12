import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { DemoLink, MarketingLayout, loginUrl } from '../../marketing-layout';
import { roles, getRole } from '../../../lib/roles';
import { StickyMobileBar } from '../../blog/[slug]/blog-interactive-widgets';
import { VerticalRoiCalculator } from './vertical-roi-calculator';

type RolePageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return roles.map((role) => ({ slug: role.slug }));
}

export async function generateMetadata({ params }: RolePageProps): Promise<Metadata> {
  const { slug } = await params;
  const role = getRole(slug);
  if (!role) return {};
  return {
    title: role.seoTitle,
    description: role.seoDescription,
    alternates: { canonical: `/for/${role.slug}` },
    openGraph: {
      type: 'article',
      title: `${role.seoTitle} | AI Closer`,
      description: role.seoDescription,
      url: `https://aicloser.in/for/${role.slug}`,
      images: [{ url: 'https://aicloser.in/assets/reference/hero-dashboard.png', alt: `AI Closer for ${role.roleName}` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${role.seoTitle} | AI Closer`,
      description: role.seoDescription,
      images: ['https://aicloser.in/assets/reference/hero-dashboard.png'],
    },
  };
}

export default async function RoleDetailPage({ params }: RolePageProps) {
  const { slug } = await params;
  const role = getRole(slug);
  if (!role) notFound();

  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://aicloser.in/' },
      { '@type': 'ListItem', position: 2, name: 'Solutions by Role', item: 'https://aicloser.in/for' },
      { '@type': 'ListItem', position: 3, name: role.roleName, item: `https://aicloser.in/for/${role.slug}` },
    ],
  };

  const faqData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: role.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  const softwareData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: `AI Closer for ${role.roleName}`,
    applicationCategory: 'BusinessApplication',
    applicationSubCategory: 'Sales CRM & SIM Telephony Software',
    operatingSystem: 'Android, Web, iOS, Cloud',
    description: role.seoDescription,
    url: `https://aicloser.in/for/${role.slug}`,
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
      reviewCount: '156',
      bestRating: '5',
      worstRating: '1',
    },
  };

  return (
    <MarketingLayout active="features">
      <article>
        {/* Hero Section */}
        <section className="page-hero section-pad" style={{ textAlign: 'left', paddingBottom: '32px' }}>
          <div style={{ marginBottom: '16px' }}>
            <Link href="/" style={{ color: '#94a3b8', fontSize: '13px', textDecoration: 'none' }}>
              Home
            </Link>
            <span style={{ color: '#475569', margin: '0 8px' }}>/</span>
            <span style={{ color: '#f97316', fontSize: '13px' }}>Solutions for {role.roleName}</span>
          </div>

          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              background: 'rgba(249, 115, 22, 0.1)',
              border: '1px solid rgba(249, 115, 22, 0.25)',
              borderRadius: '999px',
              fontSize: '11px',
              fontWeight: 700,
              color: '#f97316',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '20px',
            }}
          >
            {role.heroBadge}
          </div>

          <h1 style={{ fontSize: 'clamp(32px, 4.5vw, 54px)', lineHeight: 1.15, fontWeight: 900, color: '#f8fafc', marginBottom: '20px' }}>
            {role.heroHeadline}
          </h1>

          <p style={{ fontSize: '18px', lineHeight: 1.6, color: '#94a3b8', maxWidth: '780px', marginBottom: '32px' }}>
            {role.heroSubheadline}
          </p>

          <div className="page-actions" style={{ justifyContent: 'flex-start', gap: '16px' }}>
            <DemoLink />
            <a className="button button-muted" href={loginUrl}>
              Sign in to Cockpit
            </a>
          </div>
        </section>

        {/* Pain Points Section */}
        <section className="section-pad" style={{ paddingTop: '16px', paddingBottom: '48px' }}>
          <div className="section-label">THE REAL SALES FLOOR REALITY</div>
          <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#f8fafc', marginBottom: '24px' }}>
            Why standard CRMs fail {role.roleName.toLowerCase()}<span className="accent">.</span>
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {role.painPoints.map((pain, idx) => (
              <div
                key={pain.title}
                style={{
                  background: 'rgba(239, 68, 68, 0.05)',
                  border: '1px solid rgba(239, 68, 68, 0.2)',
                  borderRadius: '16px',
                  padding: '24px',
                }}
              >
                <div style={{ color: '#ef4444', fontSize: '12px', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '8px' }}>
                  CHALLENGE 0{idx + 1}
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#f8fafc', marginBottom: '10px' }}>{pain.title}</h3>
                <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#94a3b8', margin: 0 }}>{pain.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Core Pillars Section */}
        <section className="section-pad" style={{ paddingTop: '16px', paddingBottom: '48px' }}>
          <div className="section-label">THE AI CLOSER ADVANTAGE</div>
          <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#f8fafc', marginBottom: '32px' }}>
            Engineered for high closing conversion<span className="accent">.</span>
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
            {role.corePillars.map((pillar, idx) => (
              <div
                key={pillar.title}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                  gap: '32px',
                  alignItems: 'center',
                  background: '#090d16',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '20px',
                  padding: '32px',
                }}
              >
                <div style={{ order: idx % 2 === 1 ? 2 : 1 }}>
                  <div
                    style={{
                      display: 'inline-block',
                      padding: '4px 10px',
                      background: 'rgba(249, 115, 22, 0.1)',
                      border: '1px solid rgba(249, 115, 22, 0.25)',
                      borderRadius: '6px',
                      fontSize: '11px',
                      fontWeight: 700,
                      color: '#f97316',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      marginBottom: '14px',
                    }}
                  >
                    {pillar.badge}
                  </div>
                  <h3 style={{ fontSize: '24px', fontWeight: 800, color: '#f8fafc', marginBottom: '12px' }}>{pillar.title}</h3>
                  <p style={{ fontSize: '15px', lineHeight: 1.6, color: '#94a3b8', marginBottom: '20px' }}>{pillar.description}</p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {pillar.bullets.map((b) => (
                      <li key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '14px', color: '#cbd5e1' }}>
                        <span style={{ color: '#22c55e', fontWeight: 900 }}>✓</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div style={{ order: idx % 2 === 1 ? 1 : 2, textAlign: 'center' }}>
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    style={{
                      maxWidth: '100%',
                      height: 'auto',
                      borderRadius: '12px',
                      border: '1px solid rgba(255,255,255,0.1)',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Workflow Steps Section */}
        <section className="section-pad" style={{ paddingTop: '16px', paddingBottom: '48px' }}>
          <div className="section-label">THE HIGH-VELOCITY WORKFLOW</div>
          <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#f8fafc', marginBottom: '24px' }}>
            How your day looks with AI Closer<span className="accent">.</span>
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
            {role.workflowSteps.map((step, idx) => (
              <div
                key={step.title}
                style={{
                  background: '#090d16',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '16px',
                  padding: '24px',
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: '#f97316',
                    color: '#000',
                    fontWeight: 900,
                    fontSize: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '16px',
                  }}
                >
                  {idx + 1}
                </div>
                <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#f8fafc', marginBottom: '8px' }}>{step.title}</h3>
                <p style={{ fontSize: '13px', lineHeight: 1.6, color: '#94a3b8', margin: 0 }}>{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Feature Comparison Table */}
        <section className="section-pad" style={{ paddingTop: '16px', paddingBottom: '48px' }}>
          <div className="section-label">EXECUTION COMPARISON</div>
          <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#f8fafc', marginBottom: '24px' }}>
            Traditional System vs AI Closer<span className="accent">.</span>
          </h2>

          <div style={{ overflowX: 'auto', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', background: '#090d16' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.02)' }}>
                  <th style={{ padding: '16px 20px', fontSize: '13px', fontWeight: 700, color: '#94a3b8' }}>CAPABILITY / WORKFLOW</th>
                  <th style={{ padding: '16px 20px', fontSize: '13px', fontWeight: 700, color: '#ef4444' }}>TRADITIONAL LEGACY CRM</th>
                  <th style={{ padding: '16px 20px', fontSize: '13px', fontWeight: 700, color: '#22c55e' }}>AI CLOSER COCKPIT</th>
                </tr>
              </thead>
              <tbody>
                {role.comparisonRows.map((row, idx) => (
                  <tr key={row.featureName} style={{ borderBottom: idx < role.comparisonRows.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                    <td style={{ padding: '16px 20px', fontSize: '14px', fontWeight: 600, color: '#f8fafc' }}>{row.featureName}</td>
                    <td style={{ padding: '16px 20px', fontSize: '13px', color: '#94a3b8', background: 'rgba(239, 68, 68, 0.02)' }}>
                      <span style={{ color: '#ef4444', marginRight: '6px' }}>✗</span>
                      {row.traditionalWay}
                    </td>
                    <td style={{ padding: '16px 20px', fontSize: '13px', color: '#f8fafc', fontWeight: 600, background: 'rgba(34, 197, 94, 0.03)' }}>
                      <span style={{ color: '#22c55e', marginRight: '6px' }}>✓</span>
                      {row.aiCloserWay}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Tailored ROI Calculator Widget */}
        <VerticalRoiCalculator slug={role.slug} />

        {/* FAQ Section */}
        <section className="section-pad" style={{ paddingTop: '16px', paddingBottom: '48px' }}>
          <div className="section-label">FREQUENTLY ASKED QUESTIONS</div>
          <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#f8fafc', marginBottom: '24px' }}>
            Questions answered for {role.roleName.toLowerCase()}<span className="accent">.</span>
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '800px' }}>
            {role.faqs.map((faq) => (
              <details
                key={faq.question}
                style={{
                  background: '#090d16',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '12px',
                  padding: '18px 24px',
                  cursor: 'pointer',
                }}
              >
                <summary style={{ fontSize: '16px', fontWeight: 700, color: '#f8fafc', listStyle: 'none' }}>
                  {faq.question}
                </summary>
                <p style={{ marginTop: '12px', fontSize: '14px', lineHeight: 1.6, color: '#94a3b8' }}>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Related Guides Section */}
        {role.relatedGuides && role.relatedGuides.length > 0 && (
          <section className="section-pad" style={{ paddingTop: '16px', paddingBottom: '48px' }}>
            <div className="section-label">RECOMMENDED SALES PLAYBOOKS</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', marginTop: '16px' }}>
              {role.relatedGuides.map((guide) => (
                <Link
                  key={guide.slug}
                  href={`/blog/${guide.slug}`}
                  style={{
                    background: '#090d16',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '12px',
                    padding: '20px',
                    textDecoration: 'none',
                    display: 'block',
                    transition: 'border-color 0.2s',
                  }}
                >
                  <div style={{ fontSize: '11px', color: '#f97316', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '6px' }}>
                    IN-DEPTH PLAYBOOK
                  </div>
                  <div style={{ fontSize: '15px', fontWeight: 700, color: '#f8fafc' }}>{guide.title} →</div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Bottom CTA */}
        <section className="section-pad" style={{ textAlign: 'center', padding: '60px 24px', background: 'radial-gradient(ellipse at center, rgba(249, 115, 22, 0.15), transparent 70%)' }}>
          <div className="section-label">GET STARTED IN UNDER 3 MINUTES</div>
          <h2 style={{ fontSize: '36px', fontWeight: 900, color: '#f8fafc', marginBottom: '16px' }}>
            Equip your team with the modern closing cockpit<span className="accent">.</span>
          </h2>
          <p style={{ fontSize: '16px', color: '#94a3b8', maxWidth: '600px', margin: '0 auto 28px' }}>
            Flat ₹399 per seat per month. Unlimited calling with your own mobile SIM cards. Zero VoIP per-minute charges.
          </p>
          <div className="page-actions" style={{ justifyContent: 'center', gap: '16px' }}>
            <DemoLink />
            <a className="button button-muted" href={loginUrl}>
              Sign in to Cockpit
            </a>
          </div>
        </section>

        <StickyMobileBar />

        {/* JSON-LD Schemas */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareData) }} />
      </article>
    </MarketingLayout>
  );
}
