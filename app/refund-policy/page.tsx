import type { Metadata } from 'next';
import { MarketingLayout } from '../marketing-layout';

export const metadata: Metadata = {
  title: 'Refund & Cancellation Policy',
  description: "Review AI Closer's transparent SaaS refund and cancellation terms, 7-day onboarding trial guarantee, and prorated seat adjustment policies.",
  alternates: { canonical: 'https://aicloser.in/refund-policy' },
  openGraph: {
    title: 'Refund & Cancellation Policy | AI Closer',
    description: 'Clear, transparent refund and cancellation guidelines for AI Closer B2B SaaS customers.',
    url: 'https://aicloser.in/refund-policy',
    images: [{ url: 'https://aicloser.in/assets/closer-logo.png', alt: 'AI Closer Refund Policy' }],
  },
};

export default function RefundPolicyPage() {
  return (
    <MarketingLayout active="about">
      <section className="page-hero section-pad" style={{ paddingBottom: '32px' }}>
        <div className="section-label">FAIR COMMERCE</div>
        <h1>Refund &amp; Cancellation Policy<span className="accent">.</span></h1>
        <p className="page-hero-copy">
          Last updated: October 2026. We believe in total transparency: no hidden cancellation traps, no lock-in contracts, and clear refund timelines.
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
            1. 7-Day New Customer Pilot Guarantee
          </h2>
          <p>
            We want every sales leader to be 100% confident in AI Closer. If you sign up for a new paid subscription and find that our native SIM call recording, WhatsApp synchronization, or team dashboards do not fit your workflow within the first <strong>7 days</strong> of your initial subscription payment, you are entitled to a full 100% refund of your initial seat fees.
          </p>
          <p>
            To claim this guarantee, simply send a message to your dedicated account manager on WhatsApp or email <a href="mailto:aicloser.in@gmail.com" style={{ color: '#f97316' }}>aicloser.in@gmail.com</a> within 7 calendar days of your initial payment.
          </p>

          <hr style={{ borderColor: 'rgba(255,255,255,0.08)', margin: '32px 0' }} />

          <h2 style={{ color: '#ffffff', fontSize: '22px', fontWeight: 800, marginBottom: '16px' }}>
            2. Hassle-Free Cancellation Anytime
          </h2>
          <p>
            You are never locked into multi-year contracts unless explicitly negotiated under enterprise customized master services agreements:
          </p>
          <ul style={{ paddingLeft: '24px', marginBottom: '20px' }}>
            <li><strong>Monthly Subscriptions:</strong> You can cancel your monthly subscription at any time prior to your next renewal date through your account dashboard or by messaging your account manager. Your access will remain active until the end of the paid billing cycle, after which no further charges will occur.</li>
            <li><strong>Annual Subscriptions:</strong> Annual billing plans offer discounted seat pricing. If you cancel an annual plan mid-term after the initial 7-day guarantee window, the remaining unused full months will be refunded, recalculating previous used months at the standard monthly rack rate (₹399/seat).</li>
          </ul>

          <hr style={{ borderColor: 'rgba(255,255,255,0.08)', margin: '32px 0' }} />

          <h2 style={{ color: '#ffffff', fontSize: '22px', fontWeight: 800, marginBottom: '16px' }}>
            3. Dynamic Seat Adjustments &amp; Proration
          </h2>
          <p>
            Sales teams expand and contract. AI Closer makes user management flexible:
          </p>
          <ul style={{ paddingLeft: '24px', marginBottom: '20px' }}>
            <li><strong>Adding Seats:</strong> When you add new telecallers or reps mid-cycle, charges for additional seats are billed on a strictly prorated basis for the remainder of the active billing period.</li>
            <li><strong>Deactivating Seats:</strong> When you deactivate a seat, the change takes effect immediately, and prorated credit is applied against your subsequent renewal invoice.</li>
          </ul>

          <hr style={{ borderColor: 'rgba(255,255,255,0.08)', margin: '32px 0' }} />

          <h2 style={{ color: '#ffffff', fontSize: '22px', fontWeight: 800, marginBottom: '16px' }}>
            4. Refund Processing Timelines
          </h2>
          <p>
            When a refund is approved by our billing team:
          </p>
          <ul style={{ paddingLeft: '24px', marginBottom: '20px' }}>
            <li>Refunds are initiated back to the original method of payment (UPI, Net Banking, Corporate Debit/Credit Card) within <strong>24 to 48 business hours</strong>.</li>
            <li>Depending on your banking institution, funds typically reflect in your account within <strong>5 to 7 business days</strong>.</li>
            <li>We do not charge processing penalties or cancellation fees on approved refunds.</li>
          </ul>

          <hr style={{ borderColor: 'rgba(255,255,255,0.08)', margin: '32px 0' }} />

          <h2 style={{ color: '#ffffff', fontSize: '22px', fontWeight: 800, marginBottom: '16px' }}>
            5. Data Retention Following Cancellation
          </h2>
          <p>
            Upon subscription cancellation, we maintain your account in read-only mode for a <strong>30-day grace period</strong>. During this window, you can export your complete historical lead database, call audio files, and WhatsApp transcripts without charge. Following 30 days, account records are securely sanitized in accordance with our data retention schedule.
          </p>

          <div style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '12px',
            padding: '20px',
            marginTop: '24px',
          }}>
            <h4 style={{ color: '#f8fafc', margin: '0 0 8px 0', fontSize: '16px' }}>Billing &amp; Refund Assistance</h4>
            <p style={{ margin: '0 0 6px 0' }}>Email: <a href="mailto:aicloser.in@gmail.com" style={{ color: '#f97316' }}>aicloser.in@gmail.com</a></p>
            <p style={{ margin: 0 }}>Direct WhatsApp / Phone: <strong>+91 95895 10954</strong></p>
          </div>
        </div>
      </section>
    </MarketingLayout>
  );
}
