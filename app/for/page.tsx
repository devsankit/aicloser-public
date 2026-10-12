import type { Metadata } from 'next';
import Link from 'next/link';
import { DemoLink, MarketingLayout } from '../marketing-layout';
import { roles } from '../../lib/roles';

export const metadata: Metadata = {
  title: 'Sales CRM Solutions by Role | AI Closer',
  description: 'Explore tailored sales execution workflows for High Ticket Closers, Marketing Agencies, and Sales Managers. Native Android SIM calling, WhatsApp CRM, and 1-tap UPI closing.',
  alternates: { canonical: '/for' },
  openGraph: {
    title: 'AI Closer Solutions by Role — Closers, Agencies & Managers',
    description: 'Designed specifically for the roles that drive high-velocity revenue: sales closers, performance agencies, and sales supervisors.',
    url: 'https://aicloser.in/for',
    images: [{ url: 'https://aicloser.in/assets/reference/hero-dashboard.png', alt: 'AI Closer Solutions by Role' }],
  },
};

export default function RolesHubPage() {
  return (
    <MarketingLayout active="features">
      <section className="page-hero section-pad">
        <div className="section-label">SOLUTIONS TAILORED BY ROLE</div>
        <h1>Built for the people who actually drive revenue<span className="accent">.</span></h1>
        <p className="page-hero-copy">
          Whether you are closing deals on the phone, driving inbound leads as an agency, or coaching a floor of 20 telecallers — AI Closer is engineered for your specific daily workflow.
        </p>
        <div className="page-actions">
          <DemoLink />
          <a className="button button-muted" href="/pricing">
            See pricing (₹399/mo) <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      <section className="section-pad" aria-label="Solutions by role directory" style={{ maxWidth: '1100px', margin: '0 auto', paddingTop: '0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
          {roles.map((role) => (
            <article
              key={role.slug}
              style={{
                background: '#090d16',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '16px',
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
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
                    marginBottom: '16px',
                  }}
                >
                  {role.eyebrow}
                </div>
                <h2 style={{ fontSize: '22px', fontWeight: 800, color: '#f8fafc', marginBottom: '10px' }}>
                  {role.roleName}
                </h2>
                <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#94a3b8', marginBottom: '20px' }}>
                  {role.tagline}
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
                  {role.painPoints.slice(0, 2).map((pain) => (
                    <div key={pain.title} style={{ fontSize: '13px', color: '#cbd5e1', display: 'flex', gap: '8px' }}>
                      <span style={{ color: '#22c55e' }}>✓</span>
                      <span>{pain.title}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href={`/for/${role.slug}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  padding: '12px 20px',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '10px',
                  color: '#f8fafc',
                  fontSize: '14px',
                  fontWeight: 700,
                  textDecoration: 'none',
                  transition: 'background 0.2s',
                }}
              >
                <span>Explore {role.roleName} Solution</span>
                <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </MarketingLayout>
  );
}
