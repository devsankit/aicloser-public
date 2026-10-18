import type { Metadata } from 'next';
import Link from 'next/link';
import { MarketingLayout } from '../marketing-layout';
import { CalculatorClient } from './calculator-client';

export const metadata: Metadata = {
  title: 'WhatsApp Speed-to-Lead & ROI Calculator',
  description: 'Calculate lead decay ROI comparing <60s WhatsApp contact vs delayed calling. See how much pipeline you recover with AI Closer at flat ₹399/user/month.',
  alternates: { canonical: 'https://aicloser.in/calculator' },
  openGraph: {
    title: 'WhatsApp Speed-to-Lead & Telecom ROI Calculator — AI Closer',
    description: 'Compare <60s WhatsApp speed-to-lead vs delayed calling and calculate cloud telephony vs SIM savings at flat ₹399/user/month.',
    url: 'https://aicloser.in/calculator',
    images: [{ url: 'https://aicloser.in/assets/reference/hero-dashboard.png', alt: 'AI Closer Speed-to-Lead and Telecom Savings Calculator' }],
  },
};

export default function CalculatorPage() {
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'WhatsApp Speed-to-Lead & Telecom ROI Calculator',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'All',
      url: 'https://aicloser.in/calculator',
      description: 'Interactive calculator comparing <60s WhatsApp response vs delayed calling and cloud telephony vs SIM CRM savings at flat ₹399/user/month.',
      offers: {
        '@type': 'Offer',
        price: '399',
        priceCurrency: 'INR',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://aicloser.in',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'ROI Calculator',
          item: 'https://aicloser.in/calculator',
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Why does lead response speed matter so much for WhatsApp speed-to-lead?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Responding to inbound digital inquiries within 60 seconds delivers an 86% contact rate and up to 391% higher qualification rates. Waiting 4 hours drops contact rates to 19%, burning your Meta and Google Ads budget on unreachable leads.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why does cloud telephony cost 4x to 6x more than SIM calling in India?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Cloud telephony charges per-minute bridging rates for two concurrent call legs (agent leg and customer leg), resulting in ₹0.60 to ₹1.20 per minute fees. AI Closer uses standard mobile SIM cards with unlimited domestic calling for under ₹250/month, reducing per-minute telephony charges to zero.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why do virtual 080 numbers suffer from low call pickup rates?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Virtual 080 and 011 numbers are heavily flagged by Truecaller, Samsung Smart Call, and Google Phone spam filters due to past telemarketing history. Prospects immediately decline unrecognized landline calls, driving pickup rates below 18%. Native 10-digit SIM numbers deliver 85% to 95% pickup rates.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is included in the ₹399 per seat per month price?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'AI Closer includes native Android call recording, cloud playback scrubbers, lead pipeline management, dual WhatsApp CRM integration (Cloud API + Web QR), dynamic in-call UPI payment links, and manager oversight at a strict flat ₹399 per user per month with zero setup fees.',
          },
        },
      ],
    },
  ];

  return (
    <MarketingLayout active="pricing">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div style={{ padding: '60px 20px 100px', background: '#030712', minHeight: '100vh' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          {/* Header Block */}
          <div style={{ textAlign: 'center', marginBottom: '44px' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(249,115,22,0.12)',
                border: '1px solid rgba(249,115,22,0.3)',
                padding: '6px 14px',
                borderRadius: '20px',
                marginBottom: '16px',
              }}
            >
              <span style={{ fontSize: '12px', fontWeight: 700, color: '#f97316', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Interactive Sales ROI &amp; Lead Decay Engine
              </span>
            </div>

            <h1
              style={{
                fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
                fontWeight: 800,
                color: '#ffffff',
                letterSpacing: '-0.02em',
                lineHeight: 1.15,
                margin: '0 0 16px',
              }}
            >
              WhatsApp Speed-to-Lead &amp; Telecom ROI Calculator
            </h1>

            <p
              style={{
                fontSize: '1.1rem',
                color: '#94a3b8',
                maxWidth: '750px',
                margin: '0 auto',
                lineHeight: 1.6,
              }}
            >
              Simulate how automated &lt;60s WhatsApp greetings stop inbound lead decay, or calculate how much your sales floor saves switching from expensive virtual 080 VoIP dialers to AI Closer native SIM CRM at flat <strong>₹399/user/month</strong>.
            </p>
          </div>

          {/* Interactive Dual-Tab Calculator */}
          <CalculatorClient />

          {/* Educational Economic Deep Dive */}
          <div style={{ marginTop: '70px', color: '#cbd5e1', lineHeight: 1.8 }}>
            <h2 style={{ fontSize: '1.8rem', color: '#ffffff', fontWeight: 700, margin: '40px 0 20px' }}>
              The 60-Second Rule: Why Inbound Leads Die Within 4 Hours
            </h2>
            <p>
              According to the landmark Harvard Business Review Speed-to-Lead study, sales teams that contact digital inquiries within <strong>60 seconds</strong> are <strong>391% more likely to qualify and close</strong> than those responding after 30 minutes. By 4 hours, contact probability drops to just 19%, leaving founders and marketing directors bleeding expensive CPL ad budgets.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', margin: '30px 0' }}>
              <div style={{ background: '#090d16', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '20px' }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>⚡</div>
                <h3 style={{ color: '#f97316', fontSize: '1.1rem', marginTop: 0 }}>1. The Micro-Moment Window</h3>
                <p style={{ fontSize: '0.9rem', color: '#94a3b8', margin: 0 }}>
                  A prospect who fills a Meta or Google inquiry form is holding their phone right now. An automated WhatsApp message establishes contact instantly while intent is at 100%.
                </p>
              </div>

              <div style={{ background: '#090d16', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '20px' }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>🚫</div>
                <h3 style={{ color: '#f97316', fontSize: '1.1rem', marginTop: 0 }}>2. Truecaller Spam Penalties</h3>
                <p style={{ fontSize: '0.9rem', color: '#94a3b8', margin: 0 }}>
                  Recycled virtual 080 numbers are heavily flagged as spam telemarketers. When prospects reject 080 calls, you waste ad spend and demoralize telecallers with sub-18% pickup rates.
                </p>
              </div>

              <div style={{ background: '#090d16', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '20px' }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>🔒</div>
                <h3 style={{ color: '#f97316', fontSize: '1.1rem', marginTop: 0 }}>3. Rep WhatsApp Data Hijacking</h3>
                <p style={{ fontSize: '0.9rem', color: '#94a3b8', margin: 0 }}>
                  When CRM tools lack personal WhatsApp Web QR syncing, reps chat on private phones. When a rep leaves, customer leads and active pipelines disappear forever.
                </p>
              </div>
            </div>

            <h2 style={{ fontSize: '1.8rem', color: '#ffffff', fontWeight: 700, margin: '40px 0 20px' }}>
              How AI Closer Slashes Overhead by 80%
            </h2>
            <p>
              By combining native Android hardware call recording (<Link href="/features/calling-crm" style={{ color: '#f97316', fontWeight: 600 }}>Calling CRM</Link>), high-velocity auto-advance dialers (<Link href="/features/power-dialer" style={{ color: '#f97316', fontWeight: 600 }}>Power Dialer</Link>), dual WhatsApp engines (<Link href="/features/whatsapp-crm" style={{ color: '#f97316', fontWeight: 600 }}>WhatsApp CRM</Link>), and in-call dynamic UPI QR codes (<Link href="/features/upi-payment-collection" style={{ color: '#f97316', fontWeight: 600 }}>UPI Payment Collection</Link>), AI Closer gives sales leaders enterprise telemetry at a flat <strong>₹399/user/month</strong>.
            </p>

            {/* Strategic Silo Box */}
            <div style={{ background: 'linear-gradient(135deg, #090d16, #111827)', border: '1px solid rgba(249,115,22,0.3)', borderRadius: '12px', padding: '24px', margin: '40px 0' }}>
              <h3 style={{ color: '#f97316', fontSize: '1.2rem', marginTop: 0, marginBottom: '12px' }}>
                📌 Deep Dive Strategy Playbooks &amp; Tools
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.92rem', marginBottom: '16px' }}>
                Read our in-depth guides to scaling sales floors, automating WhatsApp lead response, and eliminating spam penalties:
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '10px' }}>
                <li><Link href="/blog/customer-privacy-notices-in-automated-whatsapp-lead-acknowledgmen" style={{ color: '#fdba74', textDecoration: 'none', fontSize: '0.88rem', fontWeight: 600 }}>💬 WhatsApp Lead Automation Guide (2026)</Link></li>
                <li><Link href="/tools/truecaller-spam-checker" style={{ color: '#fdba74', textDecoration: 'none', fontSize: '0.88rem', fontWeight: 600 }}>🛡️ Truecaller Spam Score &amp; Unlisting Tool</Link></li>
                <li><Link href="/blog/how-to-fix-speed-to-lead-convert-more-inquiries" style={{ color: '#fdba74', textDecoration: 'none', fontSize: '0.88rem', fontWeight: 600 }}>⚡ Sub-60s Inbound Response Playbook</Link></li>
                <li><Link href="/blog/telecrm-vs-ai-closer-sim-based-crm-comparison" style={{ color: '#fdba74', textDecoration: 'none', fontSize: '0.88rem', fontWeight: 600 }}>⚡ TeleCRM vs AI Closer Comparison (2026)</Link></li>
                <li><Link href="/blog/why-sim-based-calling-crm-beats-cloud-telephony-in-india" style={{ color: '#fdba74', textDecoration: 'none', fontSize: '0.88rem', fontWeight: 600 }}>📞 Why SIM Calling Beats 080 Cloud Numbers</Link></li>
                <li><Link href="/blog/how-to-track-sales-team-productivity-calls-followups-closures" style={{ color: '#fdba74', textDecoration: 'none', fontSize: '0.88rem', fontWeight: 600 }}>📊 How to Track Sales Team Productivity</Link></li>
                <li><Link href="/blog/stop-losing-leads-zero-leakage-inbox-followup-system" style={{ color: '#fdba74', textDecoration: 'none', fontSize: '0.88rem', fontWeight: 600 }}>🎯 Stop Losing Inbound Leads: Zero Leakage</Link></li>
                <li><Link href="/vs/telecrm" style={{ color: '#f97316', textDecoration: 'none', fontSize: '0.88rem', fontWeight: 700 }}>🔍 Compare AI Closer vs TeleCRM</Link></li>
              </ul>
            </div>

            {/* FAQs Section */}
            <h2 style={{ fontSize: '1.8rem', color: '#ffffff', fontWeight: 700, margin: '40px 0 20px' }}>
              Frequently Asked Questions (FAQ)
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ background: '#090d16', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '18px 22px' }}>
                <h3 style={{ fontSize: '1.05rem', color: '#ffffff', marginTop: 0, marginBottom: '8px' }}>
                  Why does lead response speed matter so much for WhatsApp speed-to-lead?
                </h3>
                <p style={{ color: '#94a3b8', fontSize: '0.92rem', margin: 0, lineHeight: 1.6 }}>
                  Responding to inbound digital inquiries within 60 seconds delivers an 86% contact rate and up to 391% higher qualification rates. Waiting 4 hours drops contact rates to 19%, burning your Meta and Google Ads budget on unreachable leads.
                </p>
              </div>

              <div style={{ background: '#090d16', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '18px 22px' }}>
                <h3 style={{ fontSize: '1.05rem', color: '#ffffff', marginTop: 0, marginBottom: '8px' }}>
                  Why does cloud telephony cost 4x to 6x more than SIM calling in India?
                </h3>
                <p style={{ color: '#94a3b8', fontSize: '0.92rem', margin: 0, lineHeight: 1.6 }}>
                  Cloud telephony charges per-minute bridging rates for two concurrent call legs (agent leg and customer leg), resulting in ₹0.60 to ₹1.20 per minute fees. AI Closer uses standard mobile SIM cards with unlimited domestic calling for under ₹250/month, reducing per-minute telephony charges to zero.
                </p>
              </div>

              <div style={{ background: '#090d16', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '18px 22px' }}>
                <h3 style={{ fontSize: '1.05rem', color: '#ffffff', marginTop: 0, marginBottom: '8px' }}>
                  Why do virtual 080 numbers suffer from low call pickup rates?
                </h3>
                <p style={{ color: '#94a3b8', fontSize: '0.92rem', margin: 0, lineHeight: 1.6 }}>
                  Virtual 080 and 011 numbers are heavily flagged by Truecaller, Samsung Smart Call, and Google Phone spam filters due to past telemarketing history. Prospects immediately decline unrecognized landline calls, driving pickup rates below 18%. Native 10-digit SIM numbers deliver 85% to 95% pickup rates.
                </p>
              </div>

              <div style={{ background: '#090d16', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '18px 22px' }}>
                <h3 style={{ fontSize: '1.05rem', color: '#ffffff', marginTop: 0, marginBottom: '8px' }}>
                  What is included in the ₹399 per seat per month price?
                </h3>
                <p style={{ color: '#94a3b8', fontSize: '0.92rem', margin: 0, lineHeight: 1.6 }}>
                  AI Closer includes native Android call recording, cloud playback scrubbers, lead pipeline management, dual WhatsApp CRM integration (Cloud API + Web QR), dynamic in-call UPI payment links, and manager oversight at a strict flat ₹399 per user per month with zero setup fees.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MarketingLayout>
  );
}
