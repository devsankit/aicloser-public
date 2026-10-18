import type { Metadata } from 'next';
import { MarketingLayout } from '../marketing-layout';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'AI Closer Terms of Service: Transparent SaaS licensing, ₹399/user pricing, TRAI telecom regulations, and dedicated account manager SLA terms.',
  alternates: { canonical: 'https://aicloser.in/terms-of-service' },
  openGraph: {
    title: 'Terms of Service | AI Closer',
    description: 'Review our transparent terms of service, subscription policies, and acceptable use guidelines.',
    url: 'https://aicloser.in/terms-of-service',
    images: [{ url: 'https://aicloser.in/assets/closer-logo.png', alt: 'AI Closer Terms of Service' }],
  },
};

export default function TermsOfServicePage() {
  return (
    <MarketingLayout active="about">
      <section className="page-hero section-pad" style={{ paddingBottom: '32px' }}>
        <div className="section-label">LEGAL AGREEMENT</div>
        <h1>Terms of Service<span className="accent">.</span></h1>
        <p className="page-hero-copy">
          Last updated: October 2026. Governing your use of AI Closer web workspaces, Android mobile dialer applications, and omnichannel APIs.
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
            1. Agreement to Terms
          </h2>
          <p>
            These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between your business entity (&quot;Customer&quot;, &quot;you&quot;, or &quot;your&quot;) and <strong>Gigxomi</strong>, operating as <strong>AI Closer</strong> (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;).
          </p>
          <p>
            By accessing or subscribing to our website, administrative dashboards, mobile companion applications, and API endpoints, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy.
          </p>

          <hr style={{ borderColor: 'rgba(255,255,255,0.08)', margin: '32px 0' }} />

          <h2 style={{ color: '#ffffff', fontSize: '22px', fontWeight: 800, marginBottom: '16px' }}>
            2. Transparent Subscription &amp; Seat Licensing
          </h2>
          <p>
            AI Closer operates on a simple, transparent seat-based SaaS subscription model:
          </p>
          <ul style={{ paddingLeft: '24px', marginBottom: '20px' }}>
            <li><strong>Seat Price:</strong> Standard access is billed at <strong>₹399 per active salesperson user per month</strong> (exclusive of applicable GST).</li>
            <li><strong>Zero Setup Fees:</strong> We do not charge mandatory implementation fees, pipeline configuration fees, or onboarding penalties.</li>
            <li><strong>Dedicated Account Manager:</strong> Every active customer account receives an assigned technical account manager available via WhatsApp and phone for workflow tuning and rep onboarding.</li>
            <li><strong>Billing Cycle:</strong> Subscriptions are billed in advance on a recurring monthly or annual basis. You may add or remove user seats at any time; billing adjustments are prorated accordingly.</li>
          </ul>

          <hr style={{ borderColor: 'rgba(255,255,255,0.08)', margin: '32px 0' }} />

          <h2 style={{ color: '#ffffff', fontSize: '22px', fontWeight: 800, marginBottom: '16px' }}>
            3. Customer Data Ownership &amp; Intellectual Property
          </h2>
          <p>
            We believe you must always maintain complete sovereign control over your business records:
          </p>
          <ul style={{ paddingLeft: '24px', marginBottom: '20px' }}>
            <li><strong>100% Customer Ownership:</strong> You retain sole and exclusive ownership of all customer lists, phone numbers, call audio recordings, WhatsApp chat histories, notes, and sales pipeline data uploaded to or captured through AI Closer.</li>
            <li><strong>No Data Lock-In:</strong> You may export your complete database and call audio URLs in standard formats (CSV, JSON, MP3/WAV) at any time through the administrative console.</li>
            <li><strong>Platform IP:</strong> AI Closer retains all proprietary rights, trademarks, source code, algorithmic weights, and interface designs of the software platform itself.</li>
          </ul>

          <hr style={{ borderColor: 'rgba(255,255,255,0.08)', margin: '32px 0' }} />

          <h2 style={{ color: '#ffffff', fontSize: '22px', fontWeight: 800, marginBottom: '16px' }}>
            4. Acceptable Use Policy &amp; Telecom Compliance
          </h2>
          <p>
            To maintain telecommunication network integrity, you agree to strictly follow these rules:
          </p>
          <ul style={{ paddingLeft: '24px', marginBottom: '20px' }}>
            <li><strong>TRAI Compliance:</strong> You agree to comply with all applicable Telecom Regulatory Authority of India (TRAI) regulations, including the Telecom Commercial Communications Customer Preference Regulations (TCCCPR, 2018).</li>
            <li><strong>Do Not Call (DND) Registry:</strong> Outbound commercial communications must not violate statutory National Do Not Call registry preferences for unregistered telemarketing.</li>
            <li><strong>No Spam or Phishing:</strong> You may not use AI Closer for illegal spoofing, automated robocalling blasts without human intervention, deceptive caller ID manipulation, or financial scam syndicates. Violation results in immediate account termination with zero refund.</li>
            <li><strong>Lawful Call Recording:</strong> You confirm that you possess the lawful business authority to record telephone conversations conducted by your employees or contractor sales reps for quality, training, or compliance verification.</li>
          </ul>

          <hr style={{ borderColor: 'rgba(255,255,255,0.08)', margin: '32px 0' }} />

          <h2 style={{ color: '#ffffff', fontSize: '22px', fontWeight: 800, marginBottom: '16px' }}>
            5. Hardware &amp; Cellular Carrier Dependencies
          </h2>
          <p>
            AI Closer is a SIM-based software workspace. Please note the operational boundaries:
          </p>
          <ul style={{ paddingLeft: '24px', marginBottom: '20px' }}>
            <li><strong>SIM &amp; Carrier Plans:</strong> Customers supply their own cellular SIM cards (such as Jio, Airtel, Vodafone Idea, BSNL) and underlying mobile voice plans. AI Closer does not charge per-minute telephony markup.</li>
            <li><strong>Carrier Availability:</strong> We are not liable for cellular signal drops, local cell tower downtime, or telecommunication operator outages beyond our software control.</li>
            <li><strong>Android Permissions:</strong> Proper operation of the mobile companion app requires granting specific Android operating system permissions (accessibility services, microphone, call log sync, battery optimization exclusion) as documented in our onboarding guides.</li>
          </ul>

          <hr style={{ borderColor: 'rgba(255,255,255,0.08)', margin: '32px 0' }} />

          <h2 style={{ color: '#ffffff', fontSize: '22px', fontWeight: 800, marginBottom: '16px' }}>
            6. Service Availability &amp; Support SLA
          </h2>
          <ul style={{ paddingLeft: '24px', marginBottom: '20px' }}>
            <li><strong>Uptime Target:</strong> We target 99.9% annual availability for cloud web dashboards, webhook ingestion pipelines, and REST API services.</li>
            <li><strong>Maintenance Windows:</strong> Scheduled system maintenance is conducted during off-peak hours (1:00 AM – 4:00 AM IST) with advance notification.</li>
            <li><strong>Dedicated Account Manager Response:</strong> Inquiries submitted to your designated account manager via WhatsApp or phone are typically answered within 2 hours during standard business days (9:00 AM – 7:00 PM IST).</li>
          </ul>

          <hr style={{ borderColor: 'rgba(255,255,255,0.08)', margin: '32px 0' }} />

          <h2 style={{ color: '#ffffff', fontSize: '22px', fontWeight: 800, marginBottom: '16px' }}>
            7. Limitation of Liability &amp; Disclaimers
          </h2>
          <p>
            To the maximum extent permitted under applicable law, AI Closer and Gigxomi shall not be liable for any indirect, incidental, consequential, special, or punitive damages, including loss of profits, lost sales leads, or business interruption. Our cumulative aggregate liability arising out of any claim shall not exceed the total fees paid by you to AI Closer in the three (3) months preceding the event giving rise to liability.
          </p>

          <hr style={{ borderColor: 'rgba(255,255,255,0.08)', margin: '32px 0' }} />

          <h2 style={{ color: '#ffffff', fontSize: '22px', fontWeight: 800, marginBottom: '16px' }}>
            8. Governing Law &amp; Jurisdiction
          </h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the Republic of India. Any legal action, dispute, or proceeding arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the competent courts in India.
          </p>
          <div style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '12px',
            padding: '20px',
            marginTop: '20px',
          }}>
            <p style={{ margin: '0 0 6px 0' }}><strong>Legal Inquiries:</strong> <a href="mailto:aicloser.in@gmail.com" style={{ color: '#f97316' }}>aicloser.in@gmail.com</a></p>
            <p style={{ margin: 0 }}><strong>Phone / WhatsApp:</strong> +91 95895 10954</p>
          </div>
        </div>
      </section>
    </MarketingLayout>
  );
}
