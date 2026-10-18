import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { DemoLink, MarketingLayout, loginUrl } from '../../marketing-layout';
import { locations, getLocation } from '../../../lib/locations';
import { TelephonySavingsCalculator, StickyMobileBar } from '../../blog/[slug]/blog-interactive-widgets';

const WHATSAPP_NUMBER = '919589510954';

type LocationPageProps = { params: Promise<{ city: string }> };

export function generateStaticParams() {
  return locations.map((loc) => ({ city: loc.slug }));
}

export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const { city } = await params;
  const loc = getLocation(city);
  if (!loc) return {};

  const cleanCity = loc.city.split(' (')[0];
  const cleanTitle = `Telecalling CRM in ${cleanCity} (2026)`;
  const cleanDescription = `Boost sales closures in ${cleanCity}: 95% pickup SIM calling, automated WhatsApp sync, and in-call UPI closing at flat ₹399/user/month.`;

  return {
    title: cleanTitle,
    description: cleanDescription,
    alternates: { canonical: `/locations/${loc.slug}` },
    openGraph: {
      type: 'website',
      title: `${cleanTitle} | AI Closer`,
      description: cleanDescription,
      url: `https://aicloser.in/locations/${loc.slug}`,
      images: [{ url: 'https://aicloser.in/assets/reference/hero-dashboard.png', alt: `AI Closer in ${loc.city}` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${cleanTitle} | AI Closer`,
      description: cleanDescription,
      images: ['https://aicloser.in/assets/reference/hero-dashboard.png'],
    },
  };
}

export default async function LocationCityPage({ params }: LocationPageProps) {
  const { city } = await params;
  const loc = getLocation(city);
  if (!loc) notFound();

  const mapUrl = `https://maps.google.com/maps?q=${loc.lat},${loc.lng}&z=13&output=embed`;
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hello AI Closer, I am looking for SIM-based telecalling CRM software for our sales team in ${loc.city}. Please share a live demo.`
  )}`;

  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://aicloser.in/' },
      { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://aicloser.in/locations' },
      { '@type': 'ListItem', position: 3, name: loc.city, item: `https://aicloser.in/locations/${loc.slug}` },
    ],
  };

  const localBusinessData = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'SoftwareApplication'],
    name: `AI Closer — ${loc.city}`,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Android, Web',
    telephone: '+91 95895 10954',
    url: `https://aicloser.in/locations/${loc.slug}`,
    image: 'https://aicloser.in/assets/closer-logo.png',
    priceRange: '₹399 / user / month',
    description: `Leading SIM-based sales CRM and automatic call recording software for ${loc.city} businesses across ${loc.hubs}.`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: loc.city,
      addressRegion: loc.state,
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: loc.lat,
      longitude: loc.lng,
    },
    hasMap: mapUrl,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      ratingCount: '128',
      bestRating: '5',
    },
    offers: {
      '@type': 'Offer',
      price: '399',
      priceCurrency: 'INR',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '399',
        priceCurrency: 'INR',
        unitText: 'user/month',
      },
    },
  };

  const faqs = [
    {
      question: `Why do sales teams in ${loc.city} choose SIM calling over cloud telephony?`,
      answer: `Cloud telephony virtual numbers (080/022 prefixes) are aggressively flagged as spam on Truecaller, resulting in poor 25%–35% pickup rates in ${loc.city}. AI Closer dials from authentic 10-digit mobile SIM cards inside Android phones, achieving verified 85%–95% pickup rates with zero per-minute call charges.`,
    },
    {
      question: `Which commercial areas in ${loc.city} does AI Closer support?`,
      answer: `AI Closer is used by sales teams across ${loc.hubs} in ${loc.city}, providing automated lead round-robin distribution, WhatsApp chat sync, and centralized web audio recording.`,
    },
    {
      question: `How does in-call Dynamic UPI QR help closers in ${loc.city}?`,
      answer: `Instead of sending static payment links after the call where 60% of buyers reconsider, telecallers generate a 15-minute Dynamic UPI QR code while still on the call, locking token advances before hanging up.`,
    },
    {
      question: `What is the monthly pricing for ${loc.city} sales teams?`,
      answer: `AI Closer costs a flat ₹399 per user per month with zero onboarding fees, zero user minimums, and zero per-minute pulse charges. Everything is included.`,
    },
  ];

  const faqData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  const hubsList = loc.hubs.split(',').map((h) => h.trim());

  return (
    <MarketingLayout active="features">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />

      {/* Hero Section */}
      <section className="page-hero section-pad">
        <div className="section-label">
          {loc.tier} TELECALLING HUBS · {loc.state.toUpperCase()}
        </div>
        <h1>
          SIM-Based Sales CRM & Telecalling App in {loc.city}<span className="accent">.</span>
        </h1>
        <p className="page-hero-copy">
          Empowering outbound sales and telecalling teams across {loc.city} ({loc.hubs}) with 95% call pickup rates, 100% automated background SIM recording, and personal WhatsApp sync at flat ₹399/user/month.
        </p>
        <div className="page-actions">
          <a className="button button-primary" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            Book Live Demo in {loc.city} →
          </a>
          <a className="button button-muted" href="/pricing">
            See Pricing (₹399/mo) <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      {/* Main Container */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px 64px 24px' }}>
        {/* Direct AEO Summary */}
        <div
          style={{
            background: 'rgba(255, 255, 255, 0.03)',
            borderLeft: '4px solid #f97316',
            borderRadius: '12px',
            padding: '24px 28px',
            marginBottom: '40px',
          }}
        >
          <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#f8fafc', margin: 0 }}>
            <strong>Executive Verdict for {loc.city}:</strong> Indian sales teams in {loc.city} lose thousands of hot leads every month because prospects reject spam-flagged virtual cloud IVR numbers. <strong>AI Closer provides a native Android SIM-based telecalling CRM</strong> that dials through authentic 10-digit mobile SIM cards, delivering 90%+ connection rates, automated WhatsApp quote dispatch, and in-call Dynamic UPI QR payments across {loc.industries} at an unbeatable flat ₹399/user/month.
          </p>
        </div>

        {/* Google Maps & Commercial Hubs Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px', marginBottom: '48px' }}>
          {/* Map Embed */}
          <div
            style={{
              background: '#090d16',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 12px 32px rgba(0,0,0,0.5)',
            }}
          >
            <div style={{ padding: '16px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '13px', fontWeight: 800, color: '#f97316', textTransform: 'uppercase' }}>
                GOOGLE MAP CITATION · {loc.city.toUpperCase()}
              </span>
              <span style={{ fontSize: '12px', color: '#94a3b8' }}>Verified Coordinates</span>
            </div>
            <iframe
              src={mapUrl}
              width="100%"
              height="320"
              style={{ border: 0, display: 'block', filter: 'invert(90%) hue-rotate(180deg)' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Google Map Citation for AI Closer in ${loc.city}`}
            />
          </div>

          {/* Key Hubs & Coverage */}
          <div
            style={{
              background: '#090d16',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '16px',
              padding: '24px 28px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <span style={{ fontSize: '12px', fontWeight: 800, color: '#38bdf8', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                COMMERCIAL & INDUSTRIAL ZONES
              </span>
              <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#ffffff', margin: '8px 0 16px 0' }}>
                Active Coverage Across {loc.city}
              </h2>
              <p style={{ fontSize: '14px', color: '#94a3b8', lineHeight: 1.6, marginBottom: '20px' }}>
                AI Closer telecallers operate across all major business clusters and business parks in {loc.city}:
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
                {hubsList.map((h) => (
                  <span
                    key={h}
                    style={{
                      background: 'rgba(255, 255, 255, 0.06)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      padding: '6px 14px',
                      borderRadius: '999px',
                      fontSize: '12px',
                      color: '#f8fafc',
                      fontWeight: 600,
                    }}
                  >
                    📍 {h}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '16px' }}>
              <div style={{ fontSize: '12px', color: '#cbd5e1' }}>
                Primary Sectors: <strong>{loc.industries}</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison Matrix */}
        <section style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '26px', fontWeight: 800, color: '#ffffff', marginBottom: '20px' }}>
            Why {loc.city} Businesses Outperform With AI Closer
          </h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '14px', border: '1px solid #1e293b' }}>
              <thead>
                <tr style={{ background: '#0f172a', color: '#ffffff' }}>
                  <th style={{ padding: '14px 16px', border: '1px solid #334155' }}>Feature</th>
                  <th style={{ padding: '14px 16px', border: '1px solid #334155' }}>AI Closer (SIM-Based CRM)</th>
                  <th style={{ padding: '14px 16px', border: '1px solid #334155' }}>Traditional Cloud Telephony in {loc.city}</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ background: 'rgba(255, 255, 255, 0.02)' }}>
                  <td style={{ padding: '12px 16px', fontWeight: 700, border: '1px solid #1e293b' }}>Pickup (Connect) Rate</td>
                  <td style={{ padding: '12px 16px', color: '#22c55e', fontWeight: 700, border: '1px solid #1e293b' }}>85% – 95% (Clean 10-Digit SIMs)</td>
                  <td style={{ padding: '12px 16px', color: '#ef4444', border: '1px solid #1e293b' }}>25% – 35% (Spam-Flagged 080 Lines)</td>
                </tr>
                <tr>
                  <td style={{ padding: '12px 16px', fontWeight: 700, border: '1px solid #1e293b' }}>Call Minute Costs</td>
                  <td style={{ padding: '12px 16px', color: '#22c55e', fontWeight: 700, border: '1px solid #1e293b' }}>₹0 / min (Included in unlimited SIM packs)</td>
                  <td style={{ padding: '12px 16px', border: '1px solid #1e293b' }}>₹0.60 – ₹0.85 per pulse</td>
                </tr>
                <tr style={{ background: 'rgba(255, 255, 255, 0.02)' }}>
                  <td style={{ padding: '12px 16px', fontWeight: 700, border: '1px solid #1e293b' }}>Software License Fee</td>
                  <td style={{ padding: '12px 16px', color: '#f97316', fontWeight: 700, border: '1px solid #1e293b' }}>Flat ₹399 / user / month</td>
                  <td style={{ padding: '12px 16px', border: '1px solid #1e293b' }}>₹1,500 – ₹2,500 / seat + rentals</td>
                </tr>
                <tr>
                  <td style={{ padding: '12px 16px', fontWeight: 700, border: '1px solid #1e293b' }}>WhatsApp Workflows</td>
                  <td style={{ padding: '12px 16px', color: '#22c55e', fontWeight: 700, border: '1px solid #1e293b' }}>Native Web QR sync + 1-Tap dispatch</td>
                  <td style={{ padding: '12px 16px', border: '1px solid #1e293b' }}>Requires costly external API integration</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Telephony Savings Calculator */}
        <section style={{ marginBottom: '48px' }}>
          <TelephonySavingsCalculator />
        </section>

        {/* FAQ Section */}
        <section style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '26px', fontWeight: 800, color: '#ffffff', marginBottom: '20px' }}>
            Frequently Asked Questions in {loc.city}
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {faqs.map((f, idx) => (
              <div
                key={idx}
                style={{
                  background: '#090d16',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '12px',
                  padding: '20px 24px',
                }}
              >
                <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#ffffff', marginBottom: '8px' }}>
                  {f.question}
                </h3>
                <p style={{ fontSize: '14px', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>
                  {f.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action Banner */}
        <div
          style={{
            background: 'linear-gradient(135deg, #111827 0%, #1f2937 100%)',
            border: '1px solid rgba(249, 115, 22, 0.3)',
            borderRadius: '16px',
            padding: '40px',
            textAlign: 'center',
          }}
        >
          <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#ffffff', margin: '0 0 12px 0' }}>
            Ready to Accelerate Sales in {loc.city}?
          </h2>
          <p style={{ fontSize: '15px', color: '#cbd5e1', maxWidth: '650px', margin: '0 auto 24px auto', lineHeight: 1.6 }}>
            Join leading companies across {loc.city} getting 95% pickup rates, automated call recordings, and in-call UPI closing at flat ₹399/user/month.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '14px 28px',
              background: '#22c55e',
              color: '#000000',
              borderRadius: '10px',
              fontWeight: 800,
              fontSize: '15px',
              textDecoration: 'none',
              boxShadow: '0 8px 24px rgba(34, 197, 94, 0.35)',
            }}
          >
            Chat with {loc.city} Sales Specialist on WhatsApp →
          </a>
        </div>
      </div>

      <StickyMobileBar />
    </MarketingLayout>
  );
}
