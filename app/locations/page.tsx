import type { Metadata } from 'next';
import Link from 'next/link';
import { DemoLink, MarketingLayout } from '../marketing-layout';
import { locations, getLocationsByTier } from '../../lib/locations';

const GOOGLE_MAP_MID = '1t51YpnssZkeUJb692umFEpcGH93njRE';
const MAP_EMBED_URL = `https://www.google.com/maps/d/embed?mid=${GOOGLE_MAP_MID}&ehbc=2E312F`;
const MAP_VIEWER_URL = `https://www.google.com/maps/d/viewer?mid=${GOOGLE_MAP_MID}`;

export const metadata: Metadata = {
  title: 'Pan-India Telecalling CRM Locations',
  description: 'AI Closer SIM-based telecalling CRM & automatic call recording software across 30+ Indian commercial hubs in Tier 1, Tier 2, and Tier 3 cities at flat ₹399/mo.',
  alternates: { canonical: '/locations' },
  openGraph: {
    title: 'Pan-India Telecalling CRM Locations | AI Closer',
    description: 'Explore AI Closer across 30+ Indian cities: 95% call pickup rates from native SIM cards, automated WhatsApp sync, and in-call UPI closing at flat ₹399/user/month.',
    url: 'https://aicloser.in/locations',
    images: [{ url: 'https://aicloser.in/assets/reference/hero-dashboard.png', alt: 'AI Closer Pan-India Locations' }],
  },
};

export default function LocationsHubPage() {
  const tier1 = getLocationsByTier('Tier 1');
  const tier2 = getLocationsByTier('Tier 2');
  const tier3 = getLocationsByTier('Tier 3');

  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://aicloser.in/' },
      { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://aicloser.in/locations' },
    ],
  };

  const organizationData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'AI Closer',
    url: 'https://aicloser.in',
    logo: 'https://aicloser.in/assets/closer-logo.png',
    telephone: '+91 95895 10954',
    hasMap: MAP_VIEWER_URL,
    sameAs: [
      MAP_VIEWER_URL,
      'https://aicloser.in/locations',
    ],
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
  };

  return (
    <MarketingLayout active="features">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />

      <section className="page-hero section-pad">
        <div className="section-label">PAN-INDIA TELECALLING NETWORK</div>
        <h1>Powering Telesales Across 30+ Indian Commercial Hubs<span className="accent">.</span></h1>
        <p className="page-hero-copy">
          From Tier 1 tech capitals to high-growth Tier 2 and Tier 3 industrial markets, sales teams across India achieve 95% call pickup rates using AI Closer's SIM-based CRM at flat ₹399/user/month.
        </p>
        <div className="page-actions">
          <DemoLink />
          <a className="button button-muted" href="/pricing">
            See flat pricing (₹399/mo) <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      {/* Interactive Google Map Citations Section */}
      <section className="section-pad" style={{ maxWidth: '1150px', margin: '0 auto', paddingTop: '0', paddingBottom: '32px' }}>
        <div
          style={{
            background: 'linear-gradient(180deg, rgba(30, 41, 59, 0.4) 0%, rgba(15, 23, 42, 0.6) 100%)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '20px',
            padding: '24px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', marginBottom: '16px' }}>
            <div>
              <span style={{ fontSize: '11px', fontWeight: 800, color: '#22c55e', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                LIVE GOOGLE MAP CITATION LAYER (30 CITIES)
              </span>
              <h2 style={{ fontSize: '22px', fontWeight: 800, color: '#ffffff', margin: '4px 0 0 0' }}>
                Pan-India Commercial Presence Map
              </h2>
            </div>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <a
                href={MAP_VIEWER_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: '12px',
                  fontWeight: 700,
                  color: '#38bdf8',
                  background: 'rgba(56, 189, 248, 0.1)',
                  border: '1px solid rgba(56, 189, 248, 0.3)',
                  borderRadius: '8px',
                  padding: '8px 14px',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                Open in Google Maps ↗
              </a>
              <a
                href="/downloads/ai_closer_india_citations_master.kml"
                download
                style={{
                  fontSize: '12px',
                  fontWeight: 700,
                  color: '#94a3b8',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px',
                  padding: '8px 14px',
                  textDecoration: 'none',
                }}
              >
                Download KML
              </a>
              <a
                href="/downloads/ai_closer_india_citations_master.csv"
                download
                style={{
                  fontSize: '12px',
                  fontWeight: 700,
                  color: '#94a3b8',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px',
                  padding: '8px 14px',
                  textDecoration: 'none',
                }}
              >
                Download CSV
              </a>
            </div>
          </div>

          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '460px',
              borderRadius: '14px',
              overflow: 'hidden',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              background: '#090d16',
            }}
          >
            <iframe
              src={MAP_EMBED_URL}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="AI Closer Pan-India Google Map Citations Layer"
            />
          </div>
          <p style={{ fontSize: '12px', color: '#64748b', marginTop: '10px', textAlign: 'center' }}>
            Interactive Google Map Layer covering Tier 1, Tier 2, and Tier 3 commercial centers. Click any pin to view localized telecalling features and pricing.
          </p>
        </div>
      </section>

      {/* Tier 1 Section */}
      <section className="section-pad" style={{ maxWidth: '1150px', margin: '0 auto', paddingTop: '16px' }}>
        <div style={{ marginBottom: '24px' }}>
          <span style={{ fontSize: '12px', fontWeight: 800, color: '#f97316', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            TIER 1 METRO TECH & SALES CAPITALS
          </span>
          <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#ffffff', marginTop: '6px' }}>
            Primary Startup, SaaS & Real Estate Hubs
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', marginBottom: '48px' }}>
          {tier1.map((loc) => (
            <Link
              key={loc.slug}
              href={`/locations/${loc.slug}`}
              style={{
                background: '#090d16',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '14px',
                padding: '22px',
                textDecoration: 'none',
                display: 'block',
                transition: 'border-color 0.2s',
              }}
            >
              <div style={{ fontSize: '11px', color: '#f97316', fontWeight: 700, marginBottom: '6px' }}>
                {loc.state}
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#f8fafc', marginBottom: '8px' }}>
                {loc.city}
              </h3>
              <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.5, marginBottom: '14px' }}>
                {loc.industries}
              </p>
              <div style={{ fontSize: '12px', color: '#22c55e', fontWeight: 700 }}>
                Explore {loc.city} Hub →
              </div>
            </Link>
          ))}
        </div>

        {/* Tier 2 Section */}
        <div style={{ marginBottom: '24px' }}>
          <span style={{ fontSize: '12px', fontWeight: 800, color: '#38bdf8', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            TIER 2 COMMERCIAL GROWTH HUBS
          </span>
          <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#ffffff', marginTop: '6px' }}>
            High-Density DSA Loans, Coaching & SME Markets
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', marginBottom: '48px' }}>
          {tier2.map((loc) => (
            <Link
              key={loc.slug}
              href={`/locations/${loc.slug}`}
              style={{
                background: '#090d16',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '14px',
                padding: '22px',
                textDecoration: 'none',
                display: 'block',
                transition: 'border-color 0.2s',
              }}
            >
              <div style={{ fontSize: '11px', color: '#38bdf8', fontWeight: 700, marginBottom: '6px' }}>
                {loc.state}
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#f8fafc', marginBottom: '8px' }}>
                {loc.city}
              </h3>
              <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.5, marginBottom: '14px' }}>
                {loc.industries}
              </p>
              <div style={{ fontSize: '12px', color: '#22c55e', fontWeight: 700 }}>
                Explore {loc.city} Hub →
              </div>
            </Link>
          ))}
        </div>

        {/* Tier 3 Section */}
        <div style={{ marginBottom: '24px' }}>
          <span style={{ fontSize: '12px', fontWeight: 800, color: '#a855f7', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            TIER 3 INDUSTRIAL & REGIONAL HUBS
          </span>
          <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#ffffff', marginTop: '6px' }}>
            Manufacturing, Dealerships & Regional Sales Floors
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', marginBottom: '32px' }}>
          {tier3.map((loc) => (
            <Link
              key={loc.slug}
              href={`/locations/${loc.slug}`}
              style={{
                background: '#090d16',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '14px',
                padding: '22px',
                textDecoration: 'none',
                display: 'block',
                transition: 'border-color 0.2s',
              }}
            >
              <div style={{ fontSize: '11px', color: '#a855f7', fontWeight: 700, marginBottom: '6px' }}>
                {loc.state}
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#f8fafc', marginBottom: '8px' }}>
                {loc.city}
              </h3>
              <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.5, marginBottom: '14px' }}>
                {loc.industries}
              </p>
              <div style={{ fontSize: '12px', color: '#22c55e', fontWeight: 700 }}>
                Explore {loc.city} Hub →
              </div>
            </Link>
          ))}
        </div>
      </section>
    </MarketingLayout>
  );
}
