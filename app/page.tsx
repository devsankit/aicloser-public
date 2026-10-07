import fs from 'node:fs';
import path from 'node:path';
import SiteShell from './site-shell';
import { features } from '../lib/features';

const APP_LOGIN_URL = 'https://app.aicloser.in/login';
const APP_SIGNUP_URL = 'https://app.aicloser.in/signup';
const WHATSAPP_NUMBER = '919589510954';
const WHATSAPP_DEMO_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello AI Closer, I would like to book a free demo.')}`;

function renderCssLogo(surfaceClass = 'css-logo-light'): string {
  if (surfaceClass === 'css-logo-dark') {
    return '<img src="/assets/closer-logo-dark.png" alt="AI Closer" class="closer-logo-image" style="height:32px;width:auto;" />';
  }
  if (surfaceClass === 'css-logo-orange') {
    return '<img src="/assets/closer-logo-dark.png" alt="AI Closer" class="closer-logo-image" style="height:32px;width:auto;" />';
  }
  return '<img src="/assets/closer-logo.png" alt="AI Closer" class="closer-logo-image" style="height:32px;width:auto;" />';
}

// These are the canonical Lucide paths used by the shared React header. The
// homepage is served from legacy HTML, so it receives the same icons as SVG
// strings without requiring a client-side icon hydration pass.
const renderLucideIcon = (className: string, size: number, paths: string) =>
  `<svg class="${className}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${paths}</svg>`;
const legacyChevron = renderLucideIcon('nav-chevron', 14, '<path d="m6 9 6 6 6-6"/>');
const legacyArrow = renderLucideIcon('icon-inline', 16, '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>');
const legacyArrowUpRight = renderLucideIcon('icon-inline', 15, '<path d="M7 17 17 7"/><path d="M7 7h10v10"/>');
const legacyCheck = renderLucideIcon('icon-inline', 15, '<path d="M20 6 9 17l-5-5"/>');
const legacyClose = renderLucideIcon('icon-inline', 18, '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>');

function renderLegacyFeatureMenu(): string {
  return `<div class="nav-dropdown">
  <a class="nav-dropdown-trigger" href="/features" aria-haspopup="true">Features ${legacyChevron}</a>
  <div class="feature-menu" role="menu" aria-label="AI Closer features">
    <div class="feature-menu-heading">Explore all features</div>
    ${features.map((feature) => `<a href="/features/${feature.slug}" role="menuitem"><small>${feature.category}</small>${feature.name}</a>`).join('')}
    <a class="feature-menu-all" href="/features" role="menuitem">View all features ${legacyArrow}</a>
  </div>
</div>`;
}

function renderDemoDialog(): string {
  return `<dialog class="demo-dialog" aria-labelledby="demo-dialog-title">
    <form class="demo-form" data-demo-form>
      <button class="demo-dialog-close" type="button" data-demo-close aria-label="Close demo request">${legacyClose}</button>
      <div class="section-label">BOOK A DEMO</div>
      <h2 id="demo-dialog-title">See AI Closer in action<span class="accent">.</span></h2>
      <p>Share a few details and we will continue the conversation on WhatsApp.</p>
      <label for="demo-name">Your name</label>
      <input id="demo-name" name="name" type="text" autocomplete="name" required />
      <label for="demo-company">Company</label>
      <input id="demo-company" name="company" type="text" autocomplete="organization" />
      <label for="demo-phone">Phone number</label>
      <input id="demo-phone" name="phone" type="tel" autocomplete="tel" required />
      <p class="demo-form-status" data-demo-status role="status" aria-live="polite"></p>
      <button class="button button-primary demo-form-submit" type="submit">Continue to WhatsApp ${legacyArrow}</button>
    </form>
  </dialog>
  <div class="whatsapp-hint" aria-hidden="true">Hi, I&apos;m here to help you out<span class="whatsapp-hint-tail"></span></div>
  <a class="whatsapp-support" href="https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello AI Closer, I need support.') }" aria-label="Chat with AI Closer support on WhatsApp">
    <span class="whatsapp-support-icon" aria-hidden="true"><svg viewBox="0 0 24 24" focusable="false"><path d="M19.1 4.9A9.9 9.9 0 0 0 3.5 16.8L2 22l5.3-1.5A9.9 9.9 0 1 0 19.1 4.9Zm-7.2 15.3c-1.6 0-3.1-.4-4.5-1.2l-.3-.2-3.1.9.9-3-.2-.3a8.2 8.2 0 1 1 7.2 3.8Zm4.5-6.1c-.2-.1-1.3-.7-1.5-.8-.2-.1-.4-.1-.6.1l-.7.9c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-2-1.2 7.3 7.3 0 0 1-1.4-1.7c-.1-.2 0-.4.1-.5l.4-.5c.1-.2.2-.3.2-.5s0-.3-.1-.5l-.7-1.7c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.2-.9.9-.9 2.2s.9 2.5 1 2.7c.1.2 1.8 2.8 4.4 3.9.6.3 1.1.4 1.5.5.6.2 1.2.2 1.7.1.5-.1 1.3-.5 1.5-1 .2-.5.2-.9.2-1 0-.2-.2-.3-.4-.4Z"/></svg></span><span class="sr-only">WhatsApp support</span>
  </a>`;
}

const pricingFeatures = [
  'Automatic Sales Call Recording',
  "Salesperson's Own SIM Support",
  'Centralized Call History',
  'Call Recording Playback',
  'Lead Management',
  'Lead Distribution & Assignment',
  'Lead Status Tracking',
  'Follow-up Management',
  'Call Notes',
  'Sales Team Mobile App',
  'Admin Dashboard',
  'Team Activity Monitoring',
  'Salesperson Performance Tracking',
  'Lead Pipeline Management',
  'Sales Conversation Insights',
  'Customer Intent & Objection Analysis',
  'Salesperson Coaching Insights',
  'Notifications & Reminders',
] as const;

function renderPricingSection(): string {
  const featureMarkup = pricingFeatures
    .map((feature) => `<li>${legacyCheck}<span>${feature}</span></li>`)
    .join('');

  return `<section id="pricing" class="pricing section-pad" aria-labelledby="pricing-title">
    <div class="pricing-intro">
      <div class="section-label">SIMPLE, CLEAR PRICING</div>
      <h2 id="pricing-title">Everything your sales team needs<span class="accent">.</span></h2>
      <p>One focused workspace for calls, leads, follow-ups, team performance, and AI-powered sales coaching.</p>
    </div>
    <article class="pricing-card" aria-label="AI Closer monthly plan">
      <div class="pricing-card-header">
        <div>
          <p class="pricing-eyebrow">AI CLOSER SALES WORKSPACE</p>
          <h3>Close more conversations with one connected system.</h3>
        </div>
        <div class="pricing-price"><strong>₹299</strong><span>/ user / month</span></div>
      </div>
      <div class="pricing-card-body">
        <div>
          <p class="pricing-includes">Everything included</p>
          <ul class="pricing-features">${featureMarkup}</ul>
        </div>
        <div class="pricing-actions">
          <a class="button button-primary" href="${WHATSAPP_DEMO_URL}" data-demo-trigger>Get Free Demo ${legacyArrow}</a>
          <a class="button button-muted" href="${APP_LOGIN_URL}">Sign in</a>
          <small>FREE DEMO · PERSONALIZED WALKTHROUGH · NO COMMITMENT</small>
        </div>
      </div>
    </article>
  </section>`;
}

function enhanceLegacyMarkup(markup: string): string {
  const pricingAnchor = '<section id="pricing" class="cta section-pad">';
  const pricingMarkup = renderPricingSection();

  let enhanced = markup
    .replace(
      pricingAnchor,
      `${pricingMarkup}<section id="cta" class="cta section-pad">`,
    )
    .replace('<a href="#features">Features</a>', renderLegacyFeatureMenu())
    .replace('<a href="#pricing">Pricing</a>', '<a href="/pricing">Pricing</a>')
    .replace('<a href="#about">About</a>', '<a href="/about">About</a>')
    .replace('<a href="#blog">Blog</a>', '<a href="/blog">Blog</a>')
    .replace(/(<a class="nav-contact"[^>]*>Get Free Demo )<span[^>]*>[^<]*<\/span>/, `$1${legacyArrowUpRight}`)
    .replace('<a href="#contact">Terms of Service</a>', '<span class="powered-by">Powered by Gigxomi</span><a href="#contact">Terms of Service</a>')
    .replace(
      'The all-in-one CRM built for high-growth teams. Automate your pipeline and<br class="desktop-only" /> focus on what matters: your customers.',
      'Record every sales call, route every lead, and coach your team from one connected workspace.',
    )
    .replace(
      'Eliminate the lag in communication. Our real-time sync ensures your team always works on the latest version of every task and project.',
      'AI Closer was born inside Gigxomi, a video editing company that needed a better way to manage sales calls, SIM-based outreach, leads, and follow-ups. We built the system our own team needed, then opened it to business owners who want a practical sales CRM.',
    );

  // Render the CSS lockup in the first HTML response so the brand never
  // flashes the legacy diamond mark while the client enhancement loads.
  enhanced = enhanced
    .replace(/(<a class="brand(?:\s+light)?"[^>]*>)[\s\S]*?(<\/a>)/g, (match, opening, closing) => {
      const surface = opening.includes(' light') ? 'css-logo-dark' : 'css-logo-light';
      return `${opening}${renderCssLogo(surface)}${closing}`;
    })
    .replace(/(<div class="mini-brand"[^>]*>)[\s\S]*?(<\/div>)/, `$1${renderCssLogo('css-logo-light')}$2`)
    .replace(/(<div class="cta-brand"[^>]*>)[\s\S]*?(<\/div>)/, `$1${renderCssLogo('css-logo-orange')}$2`)
    .replace(/(<div class="hero-dashboard\b[^>]*>)/, `$1<span class="asset-brand-cover">${renderCssLogo('css-logo-light')}</span>`)
    .replace('<div class="footer-bottom">', `<div class="footer-bottom"><span class="footer-bottom-logo">${renderCssLogo('css-logo-dark')}</span>`)
    .replaceAll('14 DAYS FREE · NO CREDIT CARD · 1-MINUTE SETUP', 'FREE DEMO · PERSONALIZED WALKTHROUGH · NO COMMITMENT')
    .replace(/Ended in:\s*<b data-countdown>[^<]*<\/b>/g, 'Book a demo in minutes')
    .replace('Stay Updated, Instantly.', 'Built from a real sales floor.')
    .replace('Streamline<br />your', 'Streamline <br /> your')
    .replace('What users<br />are saying', 'What users <br /> are saying')
    .replace('Sales Insights<br />&amp; Strategies', 'Sales Insights <br /> &amp; Strategies')
    .replaceAll('https://www.instagram.com/', 'https://www.instagram.com/aicloser.in/')
    .replaceAll('https://www.facebook.com/', 'https://www.facebook.com/AICloser.in')
    .replaceAll('<span>→</span>', legacyArrow)
    .replaceAll('<span class="arrow">↗</span>', legacyArrowUpRight)
    .replaceAll('Read story ↗', `Read story ${legacyArrowUpRight}`)
    .replaceAll('<span>＋</span>', renderLucideIcon('icon-inline faq-plus', 16, '<path d="M5 12h14"/><path d="M12 5v14"/>'))
    .replace('Stay Updated,<br />Instantly<span class="accent">.</span>', 'Built from a real sales floor.')
    .replace('<span>Dark Mode</span><span>Drag &amp; Drop</span><span>Open API</span>', '<span>Dark Mode</span><span>Drag &amp; Drop</span><span>Open API</span><span>Claude</span><span>OpenAI</span><span>Antigravity Supported</span>')
    .replace('<a class="blog-card reveal" href="#blog">', '<a class="blog-card reveal" href="/blog/sales-call-recording-for-growing-teams">')
    .replace('<a class="blog-card reveal delay-1" href="#blog">', '<a class="blog-card reveal delay-1" href="/blog/lead-distribution-and-follow-up-management">')
    .replace('<a class="blog-card reveal delay-2" href="#blog">', '<a class="blog-card reveal delay-2" href="/blog/sales-coaching-from-real-conversations">')
    .replace('<a class="text-link" href="#blog">', '<a class="text-link" href="/blog">')
    .replace(
      /<div class="testimonial-row">([\s\S]*?)<\/div><div class="testimonial-row reverse">([\s\S]*?)<\/div><\/div><\/section>/,
      (_match, firstRow, secondRow) => `<div class="testimonial-row">${firstRow}${firstRow}</div><div class="testimonial-row reverse">${secondRow}${secondRow}</div></div></section>`,
    )
    .replaceAll(`href="${APP_SIGNUP_URL}"`, `href="${WHATSAPP_DEMO_URL}" data-demo-trigger`)
    .replaceAll('https://closer.gigxomi.com/login', APP_LOGIN_URL)
    .replaceAll('https://closer.gigxomi.com', 'https://aicloser.in');

  return `${enhanced}${renderDemoDialog()}`;
}

function readLegacyMarkup(): string {
  const source = fs.readFileSync(path.join(process.cwd(), 'legacy.html'), 'utf8');
  const body = source.match(/<body[^>]*>([\s\S]*?)<\/body>/i)?.[1] ?? '';

  return enhanceLegacyMarkup(body.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, ''));
}

export default function HomePage() {
  return <SiteShell markup={readLegacyMarkup()} />;
}
