import type { ReactNode } from 'react';
import { ArrowRight, ArrowUpRight, ChevronDown, X } from 'lucide-react';
import { features } from '../lib/features';

export const loginUrl = 'https://app.aicloser.in/login';
export const whatsappNumber = '919589510954';
export const demoUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hello AI Closer, I would like to book a free demo.')}`;
export const supportUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hello AI Closer, I need support.')}`;

type NavKey = 'home' | 'features' | 'pricing' | 'about' | 'blog';

function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <span className={`css-logo ${dark ? 'css-logo-dark' : 'css-logo-light'}`}>
      <span className="css-logo-mark">AI</span>
      <span className="css-logo-word">Closer</span>
    </span>
  );
}

export function DemoLink({ children = 'Get Free Demo' }: { children?: ReactNode }) {
  return (
    <a className="button button-primary" href={demoUrl} data-demo-trigger>
      {children} <ArrowRight className="icon-inline" aria-hidden="true" size={16} strokeWidth={2} />
    </a>
  );
}

export function MarketingHeader({ active }: { active: NavKey }) {
  const links: Array<[NavKey, string, string]> = [
    ['features', 'Features', '/features'],
    ['pricing', 'Pricing', '/pricing'],
    ['about', 'About', '/about'],
    ['blog', 'Blog', '/blog'],
  ];

  return (
    <header className="site-header" data-header>
      <a className="brand" href="/" aria-label="AI Closer home"><Logo /></a>
      <nav className="nav-links" aria-label="Primary navigation">
        <div className="nav-dropdown">
          <a className="nav-dropdown-trigger" href="/features" aria-haspopup="true" aria-current={active === 'features' ? 'page' : undefined}>
            Features <ChevronDown className="nav-chevron" aria-hidden="true" size={14} strokeWidth={2} />
          </a>
          <div className="feature-menu" role="menu" aria-label="AI Closer features">
            <div className="feature-menu-heading">Explore all features</div>
            {features.map((feature) => (
              <a key={feature.slug} href={`/features/${feature.slug}`} role="menuitem">
                <small>{feature.category}</small>
                {feature.name}
              </a>
            ))}
            <a className="feature-menu-all" href="/features" role="menuitem">View all features <ArrowRight className="icon-inline" aria-hidden="true" size={15} strokeWidth={2} /></a>
          </div>
        </div>
        {links.filter(([key]) => key !== 'features').map(([key, label, href]) => (
          <a key={key} href={href} aria-current={active === key ? 'page' : undefined}>{label}</a>
        ))}
        <a href={loginUrl}>Login</a>
        <a className="nav-contact" href={demoUrl} data-demo-trigger>Get Free Demo <ArrowUpRight className="icon-inline" aria-hidden="true" size={15} strokeWidth={2} /></a>
      </nav>
      <button className="menu-button" aria-label="Open menu" aria-expanded="false"><span></span><span></span></button>
    </header>
  );
}

export function DemoDialog() {
  return (
    <dialog className="demo-dialog" aria-labelledby="demo-dialog-title">
      <form className="demo-form" data-demo-form>
        <button className="demo-dialog-close" type="button" data-demo-close aria-label="Close demo request"><X aria-hidden="true" size={18} strokeWidth={2} /></button>
        <div className="section-label">BOOK A DEMO</div>
        <h2 id="demo-dialog-title">See AI Closer in action<span className="accent">.</span></h2>
        <p>Share a few details and we will continue the conversation on WhatsApp.</p>
        <label htmlFor="demo-name">Your name</label>
        <input id="demo-name" name="name" type="text" autoComplete="name" required />
        <label htmlFor="demo-company">Company</label>
        <input id="demo-company" name="company" type="text" autoComplete="organization" />
        <label htmlFor="demo-phone">Phone number</label>
        <input id="demo-phone" name="phone" type="tel" autoComplete="tel" required />
        <p className="demo-form-status" data-demo-status role="status" aria-live="polite"></p>
        <button className="button button-primary demo-form-submit" type="submit">Continue to WhatsApp <ArrowRight className="icon-inline" aria-hidden="true" size={16} strokeWidth={2} /></button>
      </form>
    </dialog>
  );
}

export function WhatsAppSupport() {
  return (
    <>
      <div className="whatsapp-hint" aria-hidden="true">Hi, I&apos;m here to help you out<span className="whatsapp-hint-tail" /></div>
      <a className="whatsapp-support" href={supportUrl} aria-label="Chat with AI Closer support on WhatsApp">
        <span className="whatsapp-support-icon" aria-hidden="true"><svg viewBox="0 0 24 24" focusable="false"><path d="M19.1 4.9A9.9 9.9 0 0 0 3.5 16.8L2 22l5.3-1.5A9.9 9.9 0 1 0 19.1 4.9Zm-7.2 15.3c-1.6 0-3.1-.4-4.5-1.2l-.3-.2-3.1.9.9-3-.2-.3a8.2 8.2 0 1 1 7.2 3.8Zm4.5-6.1c-.2-.1-1.3-.7-1.5-.8-.2-.1-.4-.1-.6.1l-.7.9c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-2-1.2 7.3 7.3 0 0 1-1.4-1.7c-.1-.2 0-.4.1-.5l.4-.5c.1-.2.2-.3.2-.5s0-.3-.1-.5l-.7-1.7c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.2-.9.9-.9 2.2s.9 2.5 1 2.7c.1.2 1.8 2.8 4.4 3.9.6.3 1.1.4 1.5.5.6.2 1.2.2 1.7.1.5-.1 1.3-.5 1.5-1 .2-.5.2-.9.2-1 0-.2-.2-.3-.4-.4Z" /></svg></span><span className="sr-only">WhatsApp support</span>
      </a>
    </>
  );
}

export function MarketingFooter() {
  return (
    <footer id="contact" className="site-footer section-pad">
      <div className="newsletter">
        <div><h2>Stay updated with <span>AI Closer</span></h2><p>Get practical sales operations insights and product updates from Gigxomi.</p></div>
        <form><label className="sr-only" htmlFor="email">Email address</label><input id="email" type="email" placeholder="Your email address" required /><button type="submit">Submit</button></form>
        <small className="form-note">By subscribing, you agree to our Data Use Policy.</small>
      </div>
      <div className="footer-grid">
        <div><a className="brand" href="/"><Logo /></a><p className="footer-note">AI Closer is the SIM-based sales CRM built inside Gigxomi for teams that want every call and follow-up to count.</p></div>
        <div><h4>PRODUCT</h4><a href="/">Home</a><a href="/features">Features</a><a href="/about">About us</a><a href="/pricing">Pricing</a><a href={loginUrl}>Login</a><a href={demoUrl} data-demo-trigger>Get Free Demo</a></div>
        <div><h4>CONNECT</h4><a href="https://www.facebook.com/AICloser.in" target="_blank" rel="noopener noreferrer">Facebook</a><a href="https://www.instagram.com/aicloser.in/" target="_blank" rel="noopener noreferrer">Instagram</a><a href={supportUrl}>WhatsApp</a></div>
      </div>
      <div className="footer-bottom"><span className="footer-bottom-logo"><span className="css-logo css-logo-dark"><span className="css-logo-mark">AI</span><span className="css-logo-word">Closer</span></span></span><span>© 2026 AI Closer. All rights reserved. Powered by Gigxomi</span><a href="/about#terms">Terms of Service</a></div>
    </footer>
  );
}

export function MarketingLayout({ active, children }: { active: NavKey; children: ReactNode }) {
  return <div className="page-shell multipage-shell"><MarketingHeader active={active} /><main id="top">{children}</main><MarketingFooter /><DemoDialog /><WhatsAppSupport /></div>;
}
