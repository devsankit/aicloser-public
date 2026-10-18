import type { Metadata } from 'next';
import { ArrowDown, CheckCircle2, ShieldCheck, Smartphone } from 'lucide-react';
import { MarketingLayout, loginUrl } from '../marketing-layout';

export const metadata: Metadata = {
  title: 'Download AI Closer Android App (APK)',
  description: 'Download the official AI Closer Android App for SIM-based sales calling, real-time call recording, lead management, and instant notifications.',
  alternates: { canonical: '/download' },
  openGraph: {
    title: 'Download AI Closer Android App (Official APK)',
    description: 'Direct download for the AI Closer mobile app. Native SIM calling, automatic recordings, and CRM sync.',
    url: 'https://aicloser.in/download',
  },
};

export default function DownloadPage() {
  return (
    <MarketingLayout active="features">
      <section className="page-hero section-pad" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
        <div className="section-label">OFFICIAL ANDROID APP</div>
        <h1>
          Download AI Closer for Android<span className="accent">.</span>
        </h1>
        <p className="page-hero-copy" style={{ margin: '16px auto 32px' }}>
          Connect your sales team&apos;s physical phone SIM directly to your CRM. Automatic call recording, lead sync, and instant WhatsApp alerts.
        </p>

        <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
          <a
            href="/aicloser.apk"
            download="aicloser.apk"
            className="button button-primary"
            style={{
              padding: '16px 36px',
              fontSize: '1.15rem',
              fontWeight: 600,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              borderRadius: '12px',
              boxShadow: '0 8px 24px rgba(234, 88, 12, 0.25)',
            }}
          >
            <ArrowDown size={20} /> Download APK (v1.0.24)
          </a>
          <span style={{ fontSize: '0.85rem', color: '#888', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <ShieldCheck size={16} color="#16a34a" /> Verified SHA-256 Signature · Version 1.0.24 (4.15 MB)
          </span>
        </div>
      </section>

      <section className="section-pad" style={{ maxWidth: '960px', margin: '0 auto' }}>
        <div
          style={{
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '20px',
            padding: '36px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '28px',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <Smartphone size={22} className="accent" />
              <h3 style={{ margin: 0, fontSize: '1.25rem' }}>System Requirements</h3>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.95rem', color: '#aaa' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={16} color="#ea580c" /> Android 8.0 (Oreo) and above
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={16} color="#ea580c" /> Compatible with Jio, Airtel, Vi, BSNL SIMs
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={16} color="#ea580c" /> Standard Android phone permissions required
              </li>
            </ul>
          </div>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <ShieldCheck size={22} className="accent" />
              <h3 style={{ margin: 0, fontSize: '1.25rem' }}>How to Install</h3>
            </div>
            <ol style={{ paddingLeft: '20px', margin: 0, display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.95rem', color: '#aaa' }}>
              <li>Click <strong>Download APK</strong> above on your Android phone.</li>
              <li>When prompted by Chrome/browser, allow <em>Install unknown apps</em>.</li>
              <li>Open the downloaded file and tap <strong>Install</strong>.</li>
              <li>Log in with your AI Closer credentials.</li>
            </ol>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '36px' }}>
          <p style={{ color: '#777', fontSize: '0.95rem' }}>
            Already have an account?{' '}
            <a href={loginUrl} style={{ color: '#ea580c', textDecoration: 'underline' }}>
              Sign in to the Web Dashboard
            </a>
          </p>
        </div>
      </section>
    </MarketingLayout>
  );
}
