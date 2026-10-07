import type { Metadata } from 'next';
import { DemoLink, MarketingLayout } from '../marketing-layout';

export const metadata: Metadata = {
  title: 'About AI Closer and Gigxomi',
  description: 'Learn how Gigxomi built AI Closer from the needs of a real video editing company and made SIM-based sales CRM practical for business owners.',
  alternates: { canonical: '/about' },
  openGraph: { title: 'About AI Closer and Gigxomi', description: 'The story behind AI Closer, a practical SIM-based sales CRM for growing teams.', url: 'https://aicloser.in/about' },
};

export default function AboutPage() {
  return (
    <MarketingLayout active="about">
      <section className="page-hero section-pad">
        <div className="section-label">OUR STORY</div>
        <h1>Built inside a real business<span className="accent">.</span></h1>
        <p className="page-hero-copy">AI Closer started at Gigxomi, our video editing company, because we needed a better way to manage sales calls, leads, follow-ups, and team accountability.</p>
        <div className="page-actions"><DemoLink /><a className="button button-muted" href="/features">Explore features <span aria-hidden="true">→</span></a></div>
      </section>

      <section className="story-section section-pad">
        <div className="story-intro"><div className="section-label">WHY WE BUILT IT</div><h2>From our sales floor to yours<span className="accent">.</span></h2></div>
        <div className="story-copy"><p>Running a video editing company taught us that the quality of a sales process is often limited by the quality of its handoffs. Calls happened on SIM cards, notes were scattered, and owners had little visibility into the next action.</p><p>We built AI Closer for our own team first. It connects the phone conversation to the lead record, follow-up, manager dashboard, and coaching insight. Now we are distributing it to business owners who want a dependable SIM-based CRM without forcing their teams into a complicated workflow.</p></div>
      </section>

      <section className="story-grid section-pad" aria-label="AI Closer principles">
        <article className="story-card"><span className="story-number">01</span><h3>Operator-led</h3><p>We build from the daily reality of selling, delivering work, and managing a growing team.</p></article>
        <article className="story-card"><span className="story-number">02</span><h3>Phone-first</h3><p>Your team can keep using its own SIM-based calling workflow while the business gains a clear record.</p></article>
        <article className="story-card"><span className="story-number">03</span><h3>Useful AI</h3><p>AI Closer surfaces intent, objections, and coaching signals so managers can act with context.</p></article>
      </section>

      <section className="story-section story-section-reverse section-pad" id="terms">
        <div className="story-intro"><div className="section-label">OUR PROMISE</div><h2>Clear systems for better conversations<span className="accent">.</span></h2></div>
        <div className="story-copy"><p>AI Closer is designed for business owners who need visibility without adding busywork. We keep the product focused: capture every call, move every lead forward, and help every salesperson improve.</p><p>AI Closer is a Gigxomi product. We are continuing to build it with the same standard we use for our own client work: practical, accountable, and made to be used every day.</p></div>
      </section>
    </MarketingLayout>
  );
}
