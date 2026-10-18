'use client';

import { useState, useMemo } from 'react';
import type { BlogPost } from '../../lib/blog-posts';

interface BlogListingClientProps {
  posts: BlogPost[];
}

const CATEGORIES = [
  'All',
  'CRM Alternatives',
  'SIM Call Recording',
  'AI CRM Intelligence',
  'WhatsApp & Omnichannel',
  'Sales Operations',
];

export function BlogListingClient({ posts }: BlogListingClientProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(36);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory =
        selectedCategory === 'All' ||
        post.category?.toLowerCase() === selectedCategory.toLowerCase();

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.slug.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [posts, selectedCategory, searchQuery]);

  const displayedPosts = useMemo(() => {
    return filteredPosts.slice(0, visibleCount);
  }, [filteredPosts, visibleCount]);

  const hasMore = visibleCount < filteredPosts.length;

  return (
    <div>
      {/* Search Bar & Filter Tabs */}
      <div style={{ marginBottom: '36px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {/* Search Input */}
        <div style={{ position: 'relative', maxWidth: '640px' }}>
          <input
            type="text"
            placeholder="Search 1,500+ CRM comparisons, AI workflows, or calling playbooks..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setVisibleCount(36);
            }}
            style={{
              width: '100%',
              padding: '14px 20px 14px 44px',
              background: '#0d131f',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: '12px',
              color: '#ffffff',
              fontSize: '15px',
              outline: 'none',
              boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
            }}
          />
          <svg
            style={{
              position: 'absolute',
              left: '16px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '18px',
              height: '18px',
              color: '#94a3b8',
            }}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        {/* Category Pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          {CATEGORIES.map((cat) => {
            const count =
              cat === 'All'
                ? posts.length
                : posts.filter((p) => p.category?.toLowerCase() === cat.toLowerCase()).length;
            const isActive = selectedCategory === cat;

            return (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setVisibleCount(36);
                }}
                style={{
                  background: isActive ? '#f97316' : 'rgba(255,255,255,0.06)',
                  color: isActive ? '#ffffff' : '#94a3b8',
                  padding: '7px 16px',
                  borderRadius: '24px',
                  fontSize: '13px',
                  fontWeight: isActive ? 600 : 500,
                  border: isActive ? '1px solid #f97316' : '1px solid rgba(255,255,255,0.08)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                {cat} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Results Count */}
      <div style={{ marginBottom: '24px', fontSize: '14px', color: '#64748b' }}>
        Showing {displayedPosts.length} of {filteredPosts.length} articles
        {searchQuery ? ` matching "${searchQuery}"` : ''}
      </div>

      {/* Grid of Articles */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: '28px',
        }}
      >
        {displayedPosts.map((post) => (
          <a
            href={`/blog/${post.slug}`}
            key={post.slug}
            style={{
              display: 'flex',
              flexDirection: 'column',
              background: '#0d131f',
              borderRadius: '16px',
              border: '1px solid rgba(255,255,255,0.08)',
              overflow: 'hidden',
              textDecoration: 'none',
              color: '#ffffff',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease',
              boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
            }}
            className="blog-grid-card"
          >
            {/* Real Feature Thumbnail Header */}
            <div
              style={{
                position: 'relative',
                height: '190px',
                width: '100%',
                background: '#020617',
                overflow: 'hidden',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <img
                src={post.image}
                alt={post.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  opacity: 0.9,
                  transition: 'transform 0.3s ease',
                }}
                loading="lazy"
              />
              <div
                style={{
                  position: 'absolute',
                  top: '12px',
                  left: '12px',
                  background: 'rgba(9, 13, 22, 0.85)',
                  backdropFilter: 'blur(6px)',
                  color: '#f97316',
                  fontSize: '11px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  padding: '4px 10px',
                  borderRadius: '6px',
                  border: '1px solid rgba(249,115,22,0.3)',
                }}
              >
                {post.category || 'Sales CRM'}
              </div>
            </div>

            {/* Card Content Body */}
            <div style={{ padding: '22px 20px', display: 'flex', flexDirection: 'column', flex: 1, gap: '10px' }}>
              <span style={{ fontSize: '12px', color: '#64748b', fontWeight: 500 }}>{post.date}</span>
              <h2
                style={{
                  fontSize: '18px',
                  fontWeight: 700,
                  color: '#f8fafc',
                  lineHeight: 1.35,
                  margin: 0,
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                }}
              >
                {post.title}
              </h2>
              <p
                style={{
                  fontSize: '14px',
                  color: '#94a3b8',
                  lineHeight: 1.55,
                  margin: 0,
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  flex: 1,
                }}
              >
                {post.excerpt}
              </p>
              <div
                style={{
                  marginTop: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: '#f97316',
                  fontSize: '13px',
                  fontWeight: 600,
                }}
              >
                Read guide <span aria-hidden="true">→</span>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Load More Button */}
      {hasMore && (
        <div style={{ textAlign: 'center', marginTop: '48px', marginBottom: '32px' }}>
          <button
            onClick={() => setVisibleCount((prev) => prev + 36)}
            style={{
              background: '#f97316',
              color: '#ffffff',
              padding: '14px 36px',
              borderRadius: '10px',
              fontWeight: 700,
              fontSize: '16px',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 6px 20px rgba(249,115,22,0.35)',
              transition: 'transform 0.2s ease',
            }}
          >
            Load More Articles ({filteredPosts.length - visibleCount} remaining)
          </button>
        </div>
      )}

      {/* Curated Topic Clusters & Architectural Knowledge Base */}
      <div style={{ marginTop: '72px', paddingTop: '48px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div style={{ marginBottom: '28px', textAlign: 'center' }}>
          <span style={{ fontSize: '12px', fontWeight: 700, color: '#f97316', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            ARCHITECTURAL PLAYBOOKS &amp; KNOWLEDGE DIRECTORY
          </span>
          <h3 style={{ fontSize: '24px', fontWeight: 800, color: '#ffffff', margin: '6px 0 10px 0' }}>
            Explore AI Closer by Core Solution Pillar
          </h3>
          <p style={{ color: '#94a3b8', fontSize: '15px', maxWidth: '640px', margin: '0 auto' }}>
            Deep-dive into our competitor comparisons, telephony engineering guides, and omnichannel conversion frameworks.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
          }}
        >
          {/* Pillar 1: CRM Alternatives & Competitors */}
          <div
            style={{
              background: '#0d131f',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '16px',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <span style={{ fontSize: '20px' }}>⚡</span>
              <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#f8fafc', margin: 0 }}>
                CRM Alternatives &amp; Comparisons
              </h4>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13px' }}>
              <li>
                <a href="/blog/telecrm-alternative" style={{ color: '#cbd5e1', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: '#f97316', fontWeight: 700 }}>›</span> TeleCRM Alternative: SIM Dialer &amp; Dual WhatsApp
                </a>
              </li>
              <li>
                <a href="/blog/telecmi-alternative" style={{ color: '#cbd5e1', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: '#f97316', fontWeight: 700 }}>›</span> TeleCMI vs AI Closer: GSM SIM vs Cloud Telephony
                </a>
              </li>
              <li>
                <a href="/blog/runo-alternative-sim-crm" style={{ color: '#cbd5e1', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: '#f97316', fontWeight: 700 }}>›</span> Runo Alternative: WhatsApp QR Scanner &amp; Inboxes
                </a>
              </li>
              <li>
                <a href="/blog/bitrix24-alternative" style={{ color: '#cbd5e1', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: '#f97316', fontWeight: 700 }}>›</span> Bitrix24 Alternative for Indian Telecalling Teams
                </a>
              </li>
              <li>
                <a href="/blog/zoho-crm-alternative" style={{ color: '#cbd5e1', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: '#f97316', fontWeight: 700 }}>›</span> Zoho CRM Alternative: Native SIM Call Recording
                </a>
              </li>
            </ul>
          </div>

          {/* Pillar 2: SIM Calling & Telephony */}
          <div
            style={{
              background: '#0d131f',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '16px',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <span style={{ fontSize: '20px' }}>📞</span>
              <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#f8fafc', margin: 0 }}>
                SIM Telephony &amp; Call Recording
              </h4>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13px' }}>
              <li>
                <a href="/blog/best-sim-based-calling-crm-for-outbound-sales-teams" style={{ color: '#cbd5e1', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: '#f97316', fontWeight: 700 }}>›</span> Best SIM-Based Calling CRMs for Outbound Sales
                </a>
              </li>
              <li>
                <a href="/features/automatic-sales-call-recording" style={{ color: '#cbd5e1', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: '#f97316', fontWeight: 700 }}>›</span> Automatic Android SIM Call Recording Breakdown
                </a>
              </li>
              <li>
                <a href="/features/salesperson-sim-support" style={{ color: '#cbd5e1', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: '#f97316', fontWeight: 700 }}>›</span> Salesperson SIM Support: Achieve 95% Pickup Rates
                </a>
              </li>
              <li>
                <a href="/features/centralized-call-history" style={{ color: '#cbd5e1', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: '#f97316', fontWeight: 700 }}>›</span> Centralized Team Call History &amp; Audio Playback
                </a>
              </li>
              <li>
                <a href="/blog/sales-call-recording-for-growing-teams" style={{ color: '#cbd5e1', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: '#f97316', fontWeight: 700 }}>›</span> Why Call Recording Belongs Inside Your Core CRM
                </a>
              </li>
            </ul>
          </div>

          {/* Pillar 3: WhatsApp & Omnichannel Closing */}
          <div
            style={{
              background: '#0d131f',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '16px',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <span style={{ fontSize: '20px' }}>💬</span>
              <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#f8fafc', margin: 0 }}>
                WhatsApp &amp; Omnichannel Inboxes
              </h4>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13px' }}>
              <li>
                <a href="/blog/whatsapp-web-qr-scanner-crm-integration" style={{ color: '#cbd5e1', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: '#f97316', fontWeight: 700 }}>›</span> WhatsApp Web QR Scanner CRM Integration Guide
                </a>
              </li>
              <li>
                <a href="/features/sales-team-mobile-app" style={{ color: '#cbd5e1', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: '#f97316', fontWeight: 700 }}>›</span> Mobile App Workspace with In-App WhatsApp Chat
                </a>
              </li>
              <li>
                <a href="/features/lead-distribution-assignment" style={{ color: '#cbd5e1', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: '#f97316', fontWeight: 700 }}>›</span> Sub-60s Instant Lead Distribution via Webhooks
                </a>
              </li>
              <li>
                <a href="/features/notifications-reminders" style={{ color: '#cbd5e1', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: '#f97316', fontWeight: 700 }}>›</span> Automated WhatsApp Follow-Up Reminders
                </a>
              </li>
              <li>
                <a href="/blog/lead-distribution-and-follow-up-management" style={{ color: '#cbd5e1', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: '#f97316', fontWeight: 700 }}>›</span> Accountability Blueprint for Distributed Sales Teams
                </a>
              </li>
            </ul>
          </div>

          {/* Pillar 4: AI Intelligence & Coaching */}
          <div
            style={{
              background: '#0d131f',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '16px',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <span style={{ fontSize: '20px' }}>🤖</span>
              <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#f8fafc', margin: 0 }}>
                AI Intelligence &amp; Deal Coaching
              </h4>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13px' }}>
              <li>
                <a href="/blog/ai-conversation-intelligence-roi-measuring-closing-gains" style={{ color: '#cbd5e1', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: '#f97316', fontWeight: 700 }}>›</span> AI Conversation Intelligence: Measuring Closing ROI
                </a>
              </li>
              <li>
                <a href="/blog/the-hybrid-ai-human-sales-floor-the-optimal-2026-closing-architec" style={{ color: '#cbd5e1', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: '#f97316', fontWeight: 700 }}>›</span> The Hybrid AI-Human Sales Floor Architecture
                </a>
              </li>
              <li>
                <a href="/blog/sales-coaching-from-real-conversations" style={{ color: '#cbd5e1', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: '#f97316', fontWeight: 700 }}>›</span> Rep Coaching from Real Conversations, Not Guesswork
                </a>
              </li>
              <li>
                <a href="/features/salesperson-performance-tracking" style={{ color: '#cbd5e1', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: '#f97316', fontWeight: 700 }}>›</span> Rep Activity Tracking &amp; Conversion Velocity
                </a>
              </li>
              <li>
                <a href="/pricing" style={{ color: '#cbd5e1', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: '#f97316', fontWeight: 700 }}>›</span> Transparent ₹399/mo Pricing &amp; Dedicated Support
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
