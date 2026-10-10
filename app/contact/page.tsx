import type { Metadata } from 'next';
import { DemoLink, MarketingLayout } from '../marketing-layout';

export const metadata: Metadata = {
  title: 'Contact Us & Grievance Redressal',
  description: 'Contact AI Closer sales, WhatsApp line (+91 95895 10954), support, and Grievance Officer. Fast responses for demos, onboarding, and billing.',
  alternates: { canonical: 'https://aicloser.in/contact' },
  openGraph: {
    title: 'Contact AI Closer | WhatsApp, Support & Grievance Officer',
    description: 'Get in touch with AI Closer. Official WhatsApp line (+91 95895 10954), sales demos, and Grievance Officer.',
    url: 'https://aicloser.in/contact',
    images: [{ url: 'https://aicloser.in/assets/closer-logo.png', alt: 'AI Closer Contact' }],
  },
};

export default function ContactPage() {
  return (
    <MarketingLayout active="about">
      <section className="page-hero section-pad" style={{ paddingBottom: '32px' }}>
        <div className="section-label">GET IN TOUCH</div>
        <h1>Contact AI Closer<span className="accent">.</span></h1>
        <p className="page-hero-copy">
          Whether you want a guided demo, custom pipeline integration, or technical support, our team is on speed dial.
        </p>
      </section>

      <section className="section-pad" style={{ paddingTop: '0', maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
          marginBottom: '48px',
        }}>
          {/* Card 1: Direct WhatsApp Line */}
          <div style={{
            background: '#0d131f',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '16px',
            padding: '32px 28px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
          }}>
            <div>
              <div style={{
                height: '44px',
                width: '44px',
                borderRadius: '12px',
                background: 'rgba(37,211,102,0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#25D366',
                fontSize: '22px',
                marginBottom: '16px',
              }}>
                💬
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#ffffff', margin: '0 0 8px 0' }}>
                WhatsApp Direct Line
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '14px', lineHeight: 1.6, margin: '0 0 16px 0' }}>
                Chat directly with our solutions engineering team. Instant answers on SIM dialing, WhatsApp Cloud API, and feature migrations.
              </p>
              <div style={{ fontSize: '18px', fontWeight: 700, color: '#25D366', marginBottom: '4px' }}>
                +91 95895 10954
              </div>
              <small style={{ color: '#64748b' }}>Available Mon–Sat: 9:00 AM – 9:00 PM IST</small>
            </div>
            <a
              href="https://wa.me/919589510954?text=Hello%20AI%20Closer%2C%20I%20have%20a%20question%20about%20your%20software."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                marginTop: '24px',
                background: '#25D366',
                color: '#ffffff',
                fontWeight: 700,
                padding: '12px 20px',
                borderRadius: '10px',
                textAlign: 'center',
                textDecoration: 'none',
                fontSize: '14px',
                boxShadow: '0 4px 12px rgba(37,211,102,0.3)',
              }}
            >
              Open WhatsApp Chat →
            </a>
          </div>

          {/* Card 2: Official Support Email */}
          <div style={{
            background: '#0d131f',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '16px',
            padding: '32px 28px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
          }}>
            <div>
              <div style={{
                height: '44px',
                width: '44px',
                borderRadius: '12px',
                background: 'rgba(249,115,22,0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#f97316',
                fontSize: '22px',
                marginBottom: '16px',
              }}>
                ✉️
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#ffffff', margin: '0 0 8px 0' }}>
                Corporate Email
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '14px', lineHeight: 1.6, margin: '0 0 16px 0' }}>
                For enterprise procurement, partnership proposals, data processing agreements (DPA), and billing inquiries.
              </p>
              <div style={{ fontSize: '16px', fontWeight: 700, color: '#f97316', marginBottom: '4px' }}>
                aicloser.in@gmail.com
              </div>
              <small style={{ color: '#64748b' }}>Response within 4 business hours</small>
            </div>
            <a
              href="mailto:aicloser.in@gmail.com"
              style={{
                marginTop: '24px',
                background: 'rgba(255,255,255,0.08)',
                color: '#ffffff',
                fontWeight: 700,
                padding: '12px 20px',
                borderRadius: '10px',
                textAlign: 'center',
                textDecoration: 'none',
                fontSize: '14px',
                border: '1px solid rgba(255,255,255,0.12)',
              }}
            >
              Send an Email →
            </a>
          </div>

          {/* Card 3: Free Demo Walkthrough */}
          <div style={{
            background: '#0d131f',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '16px',
            padding: '32px 28px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
          }}>
            <div>
              <div style={{
                height: '44px',
                width: '44px',
                borderRadius: '12px',
                background: 'rgba(59,130,246,0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#3b82f6',
                fontSize: '22px',
                marginBottom: '16px',
              }}>
                🎯
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#ffffff', margin: '0 0 8px 0' }}>
                Book a Live Demo
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '14px', lineHeight: 1.6, margin: '0 0 16px 0' }}>
                See how your sales team can achieve 95% SIM pickup rates and manage WhatsApp chats in one unified workspace.
              </p>
              <div style={{ fontSize: '14px', fontWeight: 600, color: '#93c5fd', marginBottom: '4px' }}>
                Zero Commitment • Free 1-on-1 Walkthrough
              </div>
              <small style={{ color: '#64748b' }}>Customized for your sales team size</small>
            </div>
            <div style={{ marginTop: '24px' }}>
              <DemoLink />
            </div>
          </div>
        </div>

        {/* Office Location & Interactive Google Map Section */}
        <div style={{
          background: '#0d131f',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '16px',
          padding: '36px 32px',
          marginBottom: '32px',
          color: '#cbd5e1',
          boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#f97316', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              PHYSICAL HEADQUARTERS &amp; OFFICE
            </span>
          </div>
          <h2 style={{ fontSize: '22px', fontWeight: 800, color: '#ffffff', margin: '0 0 14px 0' }}>
            Visit Our Headquarters<span style={{ color: '#f97316' }}>.</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '28px', alignItems: 'center' }}>
            <div>
              <p style={{ fontSize: '15px', color: '#e2e8f0', margin: '0 0 10px 0', lineHeight: 1.6 }}>
                <strong>AI Closer Technologies</strong><br />
                33-B, Kalani Bagh, Opposite Padmaja School Gate,<br />
                Behind Sheeba Hotel, Agroha Nagar, Gomti Nagar,<br />
                Dewas, Madhya Pradesh — 455001, India.
              </p>
              <div style={{ margin: '14px 0', fontSize: '14px', color: '#94a3b8' }}>
                <p style={{ margin: '0 0 6px 0' }}>🕒 <strong>Business Hours:</strong> Monday – Saturday (09:00 AM – 07:00 PM IST)</p>
                <p style={{ margin: '0 0 6px 0' }}>📞 <strong>Support Line:</strong> +91 95895 10954</p>
                <p style={{ margin: 0 }}>✉️ <strong>Corporate Email:</strong> aicloser.in@gmail.com</p>
              </div>
              <div style={{ marginTop: '20px' }}>
                <a
                  href="https://maps.google.com/?cid=13991411170720965041"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: '#f97316',
                    color: '#ffffff',
                    fontWeight: 700,
                    padding: '12px 22px',
                    borderRadius: '10px',
                    textDecoration: 'none',
                    fontSize: '14px',
                    boxShadow: '0 4px 14px rgba(249,115,22,0.35)',
                  }}
                >
                  📍 Open Location in Google Maps ↗
                </a>
              </div>
            </div>
            <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.12)', height: '260px', background: '#111827' }}>
              <iframe
                title="AI Closer Technologies Office Location"
                src="https://maps.google.com/maps?q=22.963246,76.0512512&hl=en&z=15&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/* Statutory Grievance Redressal Section */}
        <div style={{
          background: '#0d131f',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '16px',
          padding: '36px 32px',
          color: '#cbd5e1',
          lineHeight: 1.8,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#f97316', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              LEGAL &amp; STATUTORY COMPLIANCE
            </span>
          </div>
          <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#ffffff', margin: '0 0 14px 0' }}>
            Statutory Grievance Redressal Mechanism
          </h2>
          <p style={{ fontSize: '14px', margin: '0 0 16px 0' }}>
            In accordance with the <strong>Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021</strong> and the <strong>Digital Personal Data Protection Act, 2023 (DPDP Act)</strong>, AI Closer has designated a dedicated Nodal Grievance Officer:
          </p>
          <div style={{
            background: 'rgba(255,255,255,0.03)',
            borderRadius: '12px',
            padding: '20px',
            border: '1px solid rgba(255,255,255,0.06)',
            fontSize: '14px',
          }}>
            <p style={{ margin: '0 0 6px 0' }}><strong>Designation:</strong> Nodal Grievance &amp; Compliance Officer</p>
            <p style={{ margin: '0 0 6px 0' }}><strong>Entity:</strong> AI Closer (Gigxomi)</p>
            <p style={{ margin: '0 0 6px 0' }}><strong>Official Grievance Email:</strong> <a href="mailto:aicloser.in@gmail.com" style={{ color: '#f97316' }}>aicloser.in@gmail.com</a></p>
            <p style={{ margin: '0 0 6px 0' }}><strong>Phone / Escalation Desk:</strong> +91 95895 10954</p>
            <p style={{ margin: 0 }}><strong>Statutory Redressal SLA:</strong> Grievance communications are formally acknowledged within 24 hours and fully investigated and resolved within 15 calendar days.</p>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            name: 'Contact AI Closer & Grievance Redressal',
            url: 'https://aicloser.in/contact',
            description: 'Official contact details, WhatsApp line, headquarters address, and statutory Grievance Officer details for AI Closer.',
            mainEntity: {
              '@type': 'LocalBusiness',
              name: 'AI Closer Technologies',
              legalName: 'AI Closer Technologies (Gigxomi)',
              url: 'https://aicloser.in',
              telephone: '+919589510954',
              email: 'aicloser.in@gmail.com',
              image: 'https://aicloser.in/assets/closer-logo.png',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '33-b, Kalani bag, opposite Padmaja School Gate, behind Sheeba hotel, Agroha Nagar, Gomti Nagar',
                addressLocality: 'Dewas',
                addressRegion: 'Madhya Pradesh',
                postalCode: '455001',
                addressCountry: 'IN',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 22.963246,
                longitude: 76.0512512,
              },
              hasMap: 'https://maps.google.com/?cid=13991411170720965041',
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                  opens: '09:00',
                  closes: '19:00',
                },
              ],
            },
          }),
        }}
      />
    </MarketingLayout>
  );
}
