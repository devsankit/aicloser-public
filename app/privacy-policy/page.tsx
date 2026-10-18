import type { Metadata } from 'next';
import { MarketingLayout } from '../marketing-layout';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: "AI Closer Privacy Policy: Learn how we protect call recordings, WhatsApp sync, customer data, and comply with India's DPDP Act 2023.",
  alternates: { canonical: 'https://aicloser.in/privacy-policy' },
  openGraph: {
    title: 'Privacy Policy | AI Closer',
    description: 'Learn how AI Closer collects, encrypts, and protects customer data, call recordings, and WhatsApp messaging logs.',
    url: 'https://aicloser.in/privacy-policy',
    images: [{ url: 'https://aicloser.in/assets/closer-logo.png', alt: 'AI Closer Privacy Policy' }],
  },
};

export default function PrivacyPolicyPage() {
  return (
    <MarketingLayout active="about">
      <section className="page-hero section-pad" style={{ paddingBottom: '32px' }}>
        <div className="section-label">TRUST &amp; COMPLIANCE</div>
        <h1>Privacy Policy<span className="accent">.</span></h1>
        <p className="page-hero-copy">
          Last updated: October 2026. Compliant with the Indian Digital Personal Data Protection Act (DPDP Act 2023), IT Act 2000, and Meta WhatsApp Business Platform policies.
        </p>
      </section>

      <section className="section-pad" style={{ paddingTop: '0', maxWidth: '900px', margin: '0 auto' }}>
        <div style={{
          background: '#0d131f',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '16px',
          padding: '40px 36px',
          color: '#cbd5e1',
          lineHeight: 1.8,
          fontSize: '15px',
        }}>
          <h2 style={{ color: '#ffffff', fontSize: '22px', fontWeight: 800, marginTop: 0, marginBottom: '16px' }}>
            1. Introduction &amp; Corporate Identity
          </h2>
          <p>
            AI Closer (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is a business-to-business sales CRM platform owned and operated by <strong>Gigxomi</strong>. We are committed to protecting the privacy, confidentiality, and data sovereignty of our enterprise clients, their sales representatives, and prospective end-customers whose data is processed through our systems.
          </p>
          <p>
            This Privacy Policy explains how AI Closer collects, uses, stores, protects, and discloses personal data when you use our web workspace, Android mobile applications, APIs, SIM call recording utilities, and omnichannel messaging integrations (including WhatsApp Cloud API, WhatsApp Web QR Scanner, and Instagram DMs).
          </p>

          <hr style={{ borderColor: 'rgba(255,255,255,0.08)', margin: '32px 0' }} />

          <h2 style={{ color: '#ffffff', fontSize: '22px', fontWeight: 800, marginBottom: '16px' }}>
            2. Categories of Data We Process
          </h2>
          <p>To provide high-velocity sales workflows, AI Closer processes the following categories of data:</p>
          <ul style={{ paddingLeft: '24px', marginBottom: '20px' }}>
            <li><strong>Account &amp; Administrative Data:</strong> Name, work email address, phone number, company name, billing records, and user authentication credentials.</li>
            <li><strong>SIM Telephony &amp; Call Recording Data:</strong> Phone numbers of callers and call recipients, call duration, timestamp, SIM slot identification, call outcome dispositions, notes, and dual-channel audio recordings captured via the AI Closer Android companion app.</li>
            <li><strong>Omnichannel Messaging Data:</strong> Inbound and outbound WhatsApp messages transmitted via official Meta Cloud APIs, messaging sessions synchronized through the localized WhatsApp Web QR scanner, and Instagram Direct Messages routed into the team inbox.</li>
            <li><strong>Lead &amp; Pipeline Data:</strong> Customer contact details ingested from web forms, Meta Ads lead generation webhooks, IndiaMART / TradeIndia integrations, CSV imports, and manually logged deal stages.</li>
            <li><strong>Device &amp; Telemetry Data:</strong> IP address, mobile device model, Android OS version, battery optimization exceptions, network state, and application performance crash reports.</li>
          </ul>

          <hr style={{ borderColor: 'rgba(255,255,255,0.08)', margin: '32px 0' }} />

          <h2 style={{ color: '#ffffff', fontSize: '22px', fontWeight: 800, marginBottom: '16px' }}>
            3. Legal Grounds &amp; Purposes of Processing
          </h2>
          <p>
            Under the Digital Personal Data Protection Act, 2023 (DPDP Act), AI Closer acts primarily as a <strong>Data Processor</strong> on behalf of our enterprise clients (who act as the Data Fiduciaries). We process information solely under the client&apos;s lawful instructions for:
          </p>
          <ul style={{ paddingLeft: '24px', marginBottom: '20px' }}>
            <li>Recording and archiving commercial business conversations for quality training, dispute resolution, and regulatory audit compliance.</li>
            <li>Enabling real-time lead routing and speed-to-lead auto-dialing within 60 seconds of prospect inquiry.</li>
            <li>Facilitating unified customer messaging across WhatsApp, Instagram, and SMS.</li>
            <li>Generating AI conversation insights, objection pattern recognition, and salesperson coaching scorecards.</li>
            <li>Preventing fraudulent access, account abuse, and unauthorized APK tampering.</li>
          </ul>

          <hr style={{ borderColor: 'rgba(255,255,255,0.08)', margin: '32px 0' }} />

          <h2 style={{ color: '#ffffff', fontSize: '22px', fontWeight: 800, marginBottom: '16px' }}>
            4. Call Recording Consent &amp; Legal Admissibility
          </h2>
          <p>
            AI Closer enables automatic call recording on authorized corporate and business-dedicated SIM cards. In compliance with Indian telecom regulations and judicial standards:
          </p>
          <ul style={{ paddingLeft: '24px', marginBottom: '20px' }}>
            <li><strong>Employer-Employee Authorization:</strong> Clients are responsible for notifying their sales personnel that calls made via the authorized AI Closer business workspace are monitored and recorded for quality assurance.</li>
            <li><strong>Two-Party Notice:</strong> For outbound customer calls, clients may configure automated WhatsApp acknowledgment messages or verbal disclosures advising prospects that conversations are recorded for quality assurance.</li>
            <li><strong>Tamper-Proof Audio Hashes:</strong> Call audio records are timestamped with cryptographic SHA-256 checksums to preserve chain-of-custody integrity under Section 65B of the Indian Evidence Act / Bharatiya Sakshya Adhiniyam, 2023.</li>
          </ul>

          <hr style={{ borderColor: 'rgba(255,255,255,0.08)', margin: '32px 0' }} />

          <h2 style={{ color: '#ffffff', fontSize: '22px', fontWeight: 800, marginBottom: '16px' }}>
            5. Data Hosting, Security &amp; Indian Data Sovereignty
          </h2>
          <p>
            We enforce strict security controls to ensure customer data never leaves secure custody:
          </p>
          <ul style={{ paddingLeft: '24px', marginBottom: '20px' }}>
            <li><strong>Indian Data Residency:</strong> Core application databases and raw audio object storage are hosted in tier-4 cloud facilities located in the <strong>Mumbai, India</strong> region.</li>
            <li><strong>Encryption Standards:</strong> Data in transit is secured using TLS 1.3 encryption. Call recordings and stored message payload logs are encrypted at rest using industry-standard <strong>AES-256</strong> encryption.</li>
            <li><strong>Access Controls:</strong> Multi-tenant logical isolation ensures no client can ever access another client&apos;s lead data or call recordings. Administrative access enforces multi-factor authentication (MFA) and least-privilege role boundaries.</li>
            <li><strong>No Data Brokering:</strong> We never sell, rent, monetize, or license your proprietary sales call recordings, lead phone numbers, or WhatsApp conversations to data brokers, advertising networks, or third-party AI scrapers.</li>
          </ul>

          <hr style={{ borderColor: 'rgba(255,255,255,0.08)', margin: '32px 0' }} />

          <h2 style={{ color: '#ffffff', fontSize: '22px', fontWeight: 800, marginBottom: '16px' }}>
            6. Third-Party Sub-Processors &amp; APIs
          </h2>
          <p>To deliver essential telephony and messaging capabilities, AI Closer integrates with selected enterprise sub-processors:</p>
          <ul style={{ paddingLeft: '24px', marginBottom: '20px' }}>
            <li><strong>Meta Platforms (WhatsApp Cloud API):</strong> Used for delivering official WhatsApp template notifications and inbound webhook ingestion.</li>
            <li><strong>Amazon Web Services / Cloudflare:</strong> For encrypted audio object storage (S3), CDN caching, and DDoS mitigation.</li>
            <li><strong>Payment Gateways (Razorpay / Stripe):</strong> For processing subscription payments. AI Closer does not store full credit card or debit card numbers on its servers.</li>
          </ul>

          <hr style={{ borderColor: 'rgba(255,255,255,0.08)', margin: '32px 0' }} />

          <h2 style={{ color: '#ffffff', fontSize: '22px', fontWeight: 800, marginBottom: '16px' }}>
            7. Data Subject Rights (DPDP Act 2023)
          </h2>
          <p>
            Under applicable privacy legislation, data principals hold the following rights regarding their personal data:
          </p>
          <ul style={{ paddingLeft: '24px', marginBottom: '20px' }}>
            <li><strong>Right to Access:</strong> You may request a summary of personal data held about you and processing activities undertaken.</li>
            <li><strong>Right to Correction &amp; Erasure:</strong> You may request the correction of inaccurate data or the permanent deletion of call recordings and customer records, subject to regulatory retention obligations.</li>
            <li><strong>Right to Data Portability:</strong> Account administrators can export complete call logs, audio URLs, and lead databases in structured CSV / JSON formats at any time.</li>
            <li><strong>Right to Grievance Redressal:</strong> You have the right to register complaints regarding data privacy directly with our designated Grievance Officer.</li>
          </ul>

          <hr style={{ borderColor: 'rgba(255,255,255,0.08)', margin: '32px 0' }} />

          <h2 style={{ color: '#ffffff', fontSize: '22px', fontWeight: 800, marginBottom: '16px' }}>
            8. Grievance Officer &amp; Regulatory Redressal
          </h2>
          <p>
            In compliance with Section 5(9) of the Digital Personal Data Protection Act, 2023 and Rule 3(2) of the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021, the contact details of our designated Grievance Officer are:
          </p>
          <div style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '12px',
            padding: '20px',
            marginTop: '16px',
          }}>
            <p style={{ margin: '0 0 8px 0' }}><strong>Officer:</strong> Nodal Grievance &amp; Privacy Officer</p>
            <p style={{ margin: '0 0 8px 0' }}><strong>Organization:</strong> AI Closer (Gigxomi)</p>
            <p style={{ margin: '0 0 8px 0' }}><strong>Email:</strong> <a href="mailto:aicloser.in@gmail.com" style={{ color: '#f97316' }}>aicloser.in@gmail.com</a></p>
            <p style={{ margin: '0 0 8px 0' }}><strong>Direct Phone / WhatsApp:</strong> +91 95895 10954</p>
            <p style={{ margin: 0 }}><strong>SLA:</strong> Grievance inquiries are acknowledged within 24 business hours and resolved within 15 calendar days.</p>
          </div>
        </div>
      </section>
    </MarketingLayout>
  );
}
