import type { Metadata } from 'next';
import { DemoLink, MarketingLayout, loginUrl } from '../marketing-layout';

export const metadata: Metadata = {
  title: 'AI Closer Pricing',
  description: 'AI Closer pricing is ₹299 per user per month for SIM-based sales calling, lead management, team monitoring, and AI conversation insights.',
  alternates: { canonical: '/pricing' },
  openGraph: { title: 'AI Closer Pricing — ₹299 per user per month', description: 'One clear plan for calls, leads, follow-ups, performance, and AI coaching.', url: 'https://aicloser.in/pricing' },
};

const features = ['Automatic Sales Call Recording', "Salesperson's Own SIM Support", 'Centralized Call History', 'Call Recording Playback', 'Lead Management', 'Lead Distribution & Assignment', 'Lead Status Tracking', 'Follow-up Management', 'Call Notes', 'Sales Team Mobile App', 'Admin Dashboard', 'Team Activity Monitoring', 'Salesperson Performance Tracking', 'Lead Pipeline Management', 'Sales Conversation Insights', 'Customer Intent & Objection Analysis', 'Salesperson Coaching Insights', 'Notifications & Reminders'];

export default function PricingPage() {
  return (
    <MarketingLayout active="pricing">
      <section className="page-hero section-pad"><div className="section-label">SIMPLE, CLEAR PRICING</div><h1>One plan for the whole sales process<span className="accent">.</span></h1><p className="page-hero-copy">No confusing tiers. AI Closer gives your team the connected workflow it needs for ₹299 per user per month.</p></section>
      <section className="pricing-page-card section-pad" aria-labelledby="pricing-page-title"><div className="pricing-page-header"><div><div className="section-label">AI CLOSER SALES WORKSPACE</div><h2 id="pricing-page-title">Calls, leads, and coaching in one place.</h2></div><div className="pricing-page-price"><strong>₹299</strong><span>per user / month</span></div></div><div className="pricing-page-body"><ul className="pricing-features">{features.map((feature) => <li key={feature}><span aria-hidden="true">✓</span>{feature}</li>)}</ul><aside className="pricing-page-actions"><p>Start with a guided demo for your team.</p><DemoLink /><a className="button button-muted" href={loginUrl}>Sign in</a><small>PERSONALIZED WALKTHROUGH · NO COMMITMENT</small></aside></div></section>
    </MarketingLayout>
  );
}
