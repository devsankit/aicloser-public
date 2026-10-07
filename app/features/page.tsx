import type { Metadata } from 'next';
import Link from 'next/link';
import { DemoLink, MarketingLayout } from '../marketing-layout';
import { features } from '../../lib/features';

export const metadata: Metadata = {
  title: 'SIM-Based Sales CRM Features',
  description: 'Explore AI Closer features for sales call recording, SIM support, lead management, team monitoring, pipelines, and AI sales coaching.',
  alternates: { canonical: '/features' },
  openGraph: { title: 'AI Closer Sales CRM Features', description: 'Everything teams need to connect calls, leads, follow-ups, and performance.', url: 'https://aicloser.in/features' },
};

const groups = Array.from(new Set(features.map((feature) => feature.category)));

export default function FeaturesPage() {
  return (
    <MarketingLayout active="features">
      <section className="page-hero section-pad">
        <div className="section-label">THE AI CLOSER WORKSPACE</div>
        <h1>Every sales call has a next step<span className="accent">.</span></h1>
        <p className="page-hero-copy">AI Closer combines SIM-based calling, lead operations, manager visibility, and conversation intelligence in one focused sales CRM.</p>
        <div className="page-actions"><DemoLink /><a className="button button-muted" href="/pricing">See pricing <span aria-hidden="true">→</span></a></div>
      </section>
      <section className="feature-page-grid section-pad" aria-label="AI Closer features">
        {groups.map((group) => (
          <article className="feature-page-group" key={group}>
            <div className="section-label">{group}</div>
            <h2>{group === 'CALLS & CONTEXT' ? 'Never lose the conversation.' : group === 'LEADS & PIPELINE' ? 'Make ownership and next steps clear.' : group === 'TEAM OPERATIONS' ? 'Give managers a reliable view of the floor.' : 'Coach from real customer signals.'}</h2>
            <ul>
              {features.filter((feature) => feature.category === group).map((feature) => <li key={feature.slug}><span aria-hidden="true">✓</span><Link href={`/features/${feature.slug}`}>{feature.name}</Link></li>)}
            </ul>
          </article>
        ))}
      </section>
      <section className="feature-proof section-pad"><div><div className="section-label">BUILT FOR OWNERS</div><h2>Simple enough for the team. Clear enough for the owner<span className="accent">.</span></h2></div><div><p>AI Closer keeps the work close to the call and gives leaders the information they need to improve the process.</p><DemoLink /></div></section>
    </MarketingLayout>
  );
}
