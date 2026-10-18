import type { Metadata } from 'next';
import Link from 'next/link';
import { DemoLink, MarketingLayout } from '../marketing-layout';
import { competitors } from '../../lib/competitors';

export const metadata: Metadata = {
  title: 'Sales CRM & Telephony Competitor Comparisons',
  description: 'Compare AI Closer with TeleCRM, LeadSquared, Exotel, Runo, NeoDove, Knowlarity, and MyOperator. See why sales teams switch to native SIM CRM at ₹399/mo.',
  alternates: { canonical: '/vs' },
  openGraph: {
    title: 'AI Closer vs Competitors — Sales CRM Comparisons',
    description: 'Detailed feature, pricing, and telephony comparisons for sales teams that close deals on phone calls and WhatsApp.',
    url: 'https://aicloser.in/vs',
    images: [{ url: 'https://aicloser.in/assets/reference/hero-dashboard.png', alt: 'AI Closer Competitor Comparisons' }],
  },
};

export default function CompetitorsHubPage() {
  return (
    <MarketingLayout active="features">
      <section className="page-hero section-pad">
        <div className="section-label">BUYER'S GUIDE &amp; COMPARISONS</div>
        <h1>Compare AI Closer with legacy sales CRMs<span className="accent">.</span></h1>
        <p className="page-hero-copy">
          Tired of spam-flagged 080 virtual numbers, expensive per-minute telecom bills, and clunky software? 
          See how AI Closer compares with traditional telecalling tools and cloud PBX providers.
        </p>
        <div className="page-actions">
          <DemoLink />
          <a className="button button-muted" href="/pricing">See pricing (₹399/mo) <span aria-hidden="true">→</span></a>
        </div>

        <div style={{ marginTop: '28px', maxWidth: '800px', margin: '28px auto 0' }}>
          <Link
            href="/blog/best-sim-based-crm-in-india"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '12px 20px',
              background: 'rgba(249,115,22,0.12)',
              border: '1px solid rgba(249,115,22,0.3)',
              borderRadius: '30px',
              color: '#f97316',
              fontSize: '14px',
              fontWeight: 700,
              textDecoration: 'none',
              transition: 'background 0.2s ease',
            }}
          >
            <span>🏆 2026 Market Guide: Top 7 Best SIM-Based CRMs in India Compared</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="section-pad" aria-label="Competitor comparison directory" style={{ maxWidth: '1100px', margin: '0 auto', paddingTop: '0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
          {competitors.map((comp) => (
            <article
              key={comp.slug}
              style={{
                background: '#090d16',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '16px',
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
                transition: 'border-color 0.2s ease',
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <span style={{ fontSize: '11px', fontWeight: 800, color: '#f97316', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    HEAD-TO-HEAD
                  </span>
                  <span style={{ fontSize: '11px', background: 'rgba(34,197,94,0.1)', color: '#22c55e', padding: '4px 8px', borderRadius: '6px', fontWeight: 700 }}>
                    Save up to 80%
                  </span>
                </div>
                <h2 style={{ fontSize: '22px', fontWeight: 800, color: '#ffffff', margin: '0 0 10px 0', lineHeight: 1.3 }}>
                  AI Closer vs {comp.name}
                </h2>
                <p style={{ color: '#94a3b8', fontSize: '14px', lineHeight: 1.6, margin: '0 0 20px 0' }}>
                  {comp.tagline}
                </p>

                <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '10px', padding: '14px', border: '1px solid rgba(255,255,255,0.06)', marginBottom: '20px', fontSize: '13px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ color: '#64748b' }}>{comp.name} Cost:</span>
                    <span style={{ color: '#ef4444', fontWeight: 700 }}>{comp.competitorPrice}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#64748b' }}>AI Closer Cost:</span>
                    <span style={{ color: '#22c55e', fontWeight: 800 }}>{comp.aiCloserPrice}</span>
                  </div>
                </div>
              </div>

              <Link
                href={`/vs/${comp.slug}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  width: '100%',
                  padding: '12px 18px',
                  borderRadius: '10px',
                  background: '#1e293b',
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '14px',
                  textDecoration: 'none',
                  border: '1px solid rgba(255,255,255,0.15)',
                  transition: 'background 0.2s ease',
                }}
              >
                <span>Read Full {comp.name} Comparison</span>
                <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="feature-proof section-pad">
        <div>
          <div className="section-label">BUILT FOR REAL SALES FLOORS</div>
          <h2>Switch in minutes. Keep your leads, numbers, and sanity<span className="accent">.</span></h2>
        </div>
        <div>
          <p>
            Our engineering and onboarding teams handle complete lead database migration for free. 
            Give your sales reps 95%+ pickup rates starting today.
          </p>
          <DemoLink />
        </div>
      </section>
    </MarketingLayout>
  );
}
