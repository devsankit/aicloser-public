import type { Metadata } from 'next';
import { MarketingLayout } from '../marketing-layout';

export const metadata: Metadata = {
  title: 'Security & Telecom Compliance Architecture',
  description: 'AI Closer telecom security architecture: AES-256 cloud encryption, Indian data residency, DPDP Act compliance, and Section 65B legal admissibility.',
  alternates: { canonical: 'https://aicloser.in/security' },
  openGraph: {
    title: 'Security & Telecom Compliance Architecture | AI Closer',
    description: 'Enterprise-grade security, Indian data residency, AES-256 encryption, and legal admissibility for SIM call recordings.',
    url: 'https://aicloser.in/security',
    images: [{ url: 'https://aicloser.in/assets/closer-logo.png', alt: 'AI Closer Security' }],
  },
};

export default function SecurityPage() {
  return (
    <MarketingLayout active="about">
      <section className="page-hero section-pad" style={{ paddingBottom: '32px' }}>
        <div className="section-label">ENTERPRISE GRADE ARCHITECTURE</div>
        <h1>Security &amp; Telecom Compliance<span className="accent">.</span></h1>
        <p className="page-hero-copy">
          Designed from the ground up for high-security enterprise telecalling teams. Indian data residency, military-grade AES-256 encryption, and verifiable legal admissibility.
        </p>
      </section>

      <section className="section-pad" style={{ paddingTop: '0', maxWidth: '960px', margin: '0 auto' }}>
        {/* Security Highlights 4-card Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '20px',
          marginBottom: '40px',
        }}>
          <div style={{
            background: '#0d131f',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '14px',
            padding: '24px 20px',
            textAlign: 'center',
          }}>
            <div style={{ fontSize: '30px', marginBottom: '8px' }}>🇮🇳</div>
            <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#f8fafc', margin: '0 0 6px 0' }}>Indian Data Residency</h3>
            <p style={{ fontSize: '13px', color: '#94a3b8', margin: 0, lineHeight: 1.5 }}>
              100% of audio recordings and lead records reside in Tier-4 Indian data centers (Mumbai region).
            </p>
          </div>

          <div style={{
            background: '#0d131f',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '14px',
            padding: '24px 20px',
            textAlign: 'center',
          }}>
            <div style={{ fontSize: '30px', marginBottom: '8px' }}>🔐</div>
            <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#f8fafc', margin: '0 0 6px 0' }}>AES-256 &amp; TLS 1.3</h3>
            <p style={{ fontSize: '13px', color: '#94a3b8', margin: 0, lineHeight: 1.5 }}>
              End-to-end encryption in transit (TLS 1.3) and military-grade AES-256 encryption at rest.
            </p>
          </div>

          <div style={{
            background: '#0d131f',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '14px',
            padding: '24px 20px',
            textAlign: 'center',
          }}>
            <div style={{ fontSize: '30px', marginBottom: '8px' }}>⚖️</div>
            <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#f8fafc', margin: '0 0 6px 0' }}>Section 65B Admissible</h3>
            <p style={{ fontSize: '13px', color: '#94a3b8', margin: 0, lineHeight: 1.5 }}>
              Cryptographic SHA-256 hashing preserves tamper-evident chain of custody for legal dispute resolution.
            </p>
          </div>

          <div style={{
            background: '#0d131f',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '14px',
            padding: '24px 20px',
            textAlign: 'center',
          }}>
            <div style={{ fontSize: '30px', marginBottom: '8px' }}>🛡️</div>
            <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#f8fafc', margin: '0 0 6px 0' }}>DPDP Act 2023 Ready</h3>
            <p style={{ fontSize: '13px', color: '#94a3b8', margin: 0, lineHeight: 1.5 }}>
              Full compliance with India&apos;s Digital Personal Data Protection Act and IT Intermediary Rules.
            </p>
          </div>
        </div>

        {/* Detailed Architecture Breakdown */}
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
            1. Cryptographic Call Audio Architecture
          </h2>
          <p>
            When telecallers use the AI Closer Android companion app, phone calls take place over genuine cellular GSM carrier networks (Airtel, Jio, Vi). To protect conversational privacy while guaranteeing data veracity:
          </p>
          <ul style={{ paddingLeft: '24px', marginBottom: '20px' }}>
            <li><strong>Local Dual-Channel Audio Capture:</strong> The raw audio recording is captured in high-fidelity Opus/AAC format directly on the device with zero cloud intermediary intercept during the active call.</li>
            <li><strong>Immediate SHA-256 Checksum:</strong> As soon as the call terminates, our native engine generates a SHA-256 cryptographic digest of the audio payload before uploading.</li>
            <li><strong>Encrypted Transport:</strong> The audio payload is streamed over TLS 1.3 using pre-signed secure AWS S3 URLs with short 15-minute expirations.</li>
            <li><strong>Immutable Storage:</strong> Once uploaded, the audio file is committed to write-once, read-many (WORM) storage with AES-256 server-side encryption.</li>
          </ul>

          <hr style={{ borderColor: 'rgba(255,255,255,0.08)', margin: '32px 0' }} />

          <h2 style={{ color: '#ffffff', fontSize: '22px', fontWeight: 800, marginBottom: '16px' }}>
            2. Multi-Tenant Isolation &amp; Zero Cross-Contamination
          </h2>
          <p>
            Every customer account operates within a strictly segmented tenancy perimeter:
          </p>
          <ul style={{ paddingLeft: '24px', marginBottom: '20px' }}>
            <li><strong>Row-Level Security (RLS):</strong> Database queries enforce programmatic tenant ID boundaries at the database kernel level, making cross-tenant data leakage technically impossible.</li>
            <li><strong>Role-Based Access Control (RBAC):</strong> Granular permissions prevent sales reps from viewing colleagues&apos; leads, exporting client phone numbers, or deleting call audio records unless granted explicit administrative rights.</li>
            <li><strong>Audit Logging:</strong> All administrative actions—including lead exports, user permission modifications, and audio access—are recorded in an immutable audit ledger.</li>
          </ul>

          <hr style={{ borderColor: 'rgba(255,255,255,0.08)', margin: '32px 0' }} />

          <h2 style={{ color: '#ffffff', fontSize: '22px', fontWeight: 800, marginBottom: '16px' }}>
            3. WhatsApp &amp; Meta Ecosystem Compliance
          </h2>
          <p>
            AI Closer combines official WhatsApp Cloud APIs with local Web QR synchronization. We strictly adhere to Meta developer terms:
          </p>
          <ul style={{ paddingLeft: '24px', marginBottom: '20px' }}>
            <li><strong>Official WhatsApp Cloud API:</strong> Template notifications and business broadcasts are routed through verified Meta Business Manager channels with end-to-end TLS encryption.</li>
            <li><strong>Local QR Scanner Sandboxing:</strong> Personal WhatsApp Web QR sessions run within isolated browser sandboxes. Reps never need to disclose their master WhatsApp account credentials, and sessions are immediately revoked upon employee offboarding.</li>
            <li><strong>Anti-Spam Throttling:</strong> Built-in rate limiting and opt-out workflows ensure compliance with WhatsApp Business messaging policies, preventing number bans.</li>
          </ul>

          <hr style={{ borderColor: 'rgba(255,255,255,0.08)', margin: '32px 0' }} />

          <h2 style={{ color: '#ffffff', fontSize: '22px', fontWeight: 800, marginBottom: '16px' }}>
            4. Vulnerability Management &amp; Penetration Testing
          </h2>
          <p>
            We maintain an aggressive defensive posture against evolving security threats:
          </p>
          <ul style={{ paddingLeft: '24px', marginBottom: '20px' }}>
            <li><strong>Continuous Automated SAST/DAST Scanning:</strong> Code repositories undergo automated static and dynamic security analysis prior to production release.</li>
            <li><strong>Mobile APK Hardening:</strong> The Android application binary is protected with ProGuard/R8 obfuscation, anti-debugging defenses, and certificate pinning to prevent reverse engineering or APK tampering.</li>
            <li><strong>DDoS &amp; Web Application Firewall (WAF):</strong> Edge ingress traffic is routed through Cloudflare Enterprise WAF, filtering volumetric layer-7 attacks and malicious scraping bots.</li>
          </ul>

          <div style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '12px',
            padding: '20px',
            marginTop: '24px',
          }}>
            <h4 style={{ color: '#f8fafc', margin: '0 0 8px 0', fontSize: '16px' }}>Security Questionnaire &amp; Compliance Inquiries</h4>
            <p style={{ margin: '0 0 6px 0' }}>If your enterprise requires custom security audits, SOC2 vendor questionnaires, or Data Processing Agreements (DPA), please contact our security team:</p>
            <p style={{ margin: 0 }}>Email: <a href="mailto:aicloser.in@gmail.com" style={{ color: '#f97316' }}>aicloser.in@gmail.com</a> • WhatsApp: <strong>+91 95895 10954</strong></p>
          </div>
        </div>
      </section>
    </MarketingLayout>
  );
}
