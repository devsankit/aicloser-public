'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { SpeedToLeadCalculator } from '@/components/speed-to-lead-calculator';

const WHATSAPP_NUMBER = '919589510954';

/**
 * Interactive WhatsApp Speed-to-Lead Lead Decay Widget
 * Designed for embedding directly inside high-authority WhatsApp & speed-to-lead blog posts.
 */
export function SpeedToLeadCalculatorWidget({
  defaultTeamSize = 5,
  compact = false,
}: {
  defaultTeamSize?: number;
  compact?: boolean;
}) {
  return (
    <aside
      aria-label="Interactive Speed to Lead Calculator"
      style={{
        margin: '48px 0',
        background: 'linear-gradient(135deg, #090d16 0%, #131b2e 100%)',
        border: '1px solid rgba(249,115,22,0.35)',
        borderRadius: '16px',
        padding: compact ? '20px' : '32px 24px',
        boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
        color: '#ffffff',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
        <span
          style={{
            fontSize: '11px',
            fontWeight: 800,
            color: '#f97316',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}
        >
          INTERACTIVE LEAD DECAY AUDITOR
        </span>
      </div>
      <h3 style={{ fontSize: '24px', fontWeight: 800, margin: '0 0 10px 0', color: '#ffffff', lineHeight: 1.3 }}>
        Calculate Your WhatsApp Speed-to-Lead ROI
      </h3>
      <p style={{ color: '#94a3b8', fontSize: '15px', margin: '0 0 24px 0', lineHeight: 1.5 }}>
        See how much ad spend and closed pipeline revenue your sales team loses each month by delaying responses beyond 60 seconds.
      </p>

      {/* Embedded Client-Side Calculator */}
      <SpeedToLeadCalculator standalone={false} defaultTeamSize={defaultTeamSize} />

      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <Link
          href="/calculator"
          style={{
            color: '#fdba74',
            fontSize: '13px',
            textDecoration: 'underline',
            textUnderlineOffset: '3px',
            fontWeight: 600,
          }}
        >
          Open Full Interactive ROI Calculator with Cloud Telephony Comparison &rarr;
        </Link>
      </div>
    </aside>
  );
}

/**
 * Telephony Savings Calculator (Retained for backwards compatibility across /vs and /for routes)
 */
export function TelephonySavingsCalculator() {
  const [reps, setReps] = useState(5);

  // Industry average: Virtual VoIP / Cloud telephony + legacy CRM costs ~₹2,200/seat/mo
  // AI Closer is flat ₹399/seat/mo
  const legacyCostPerRep = 2200;
  const aiCloserCostPerRep = 399;

  const legacyTotal = reps * legacyCostPerRep;
  const aiCloserTotal = reps * aiCloserCostPerRep;
  const monthlySavings = legacyTotal - aiCloserTotal;
  const annualSavings = monthlySavings * 12;

  const formattedMonthlySavings = new Intl.NumberFormat('en-IN').format(monthlySavings);
  const formattedAnnualSavings = new Intl.NumberFormat('en-IN').format(annualSavings);

  const whatsappMessage = encodeURIComponent(
    `Hello AI Closer, I have ${reps} sales reps. I saw we can save ₹${formattedMonthlySavings}/month by switching to AI Closer SIM CRM at flat ₹399/user/month. Can I get a free demo?`
  );
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

  return (
    <div style={{
      margin: '44px 0',
      background: 'linear-gradient(135deg, #090d16 0%, #131b2e 100%)',
      border: '1px solid rgba(249,115,22,0.3)',
      borderRadius: '16px',
      padding: '32px 28px',
      boxShadow: '0 16px 36px rgba(0,0,0,0.35)',
      color: '#ffffff',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
        <span style={{ fontSize: '11px', fontWeight: 800, color: '#f97316', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          INTERACTIVE ROI CALCULATOR
        </span>
      </div>
      <h3 style={{ fontSize: '24px', fontWeight: 800, margin: '0 0 10px 0', color: '#ffffff', lineHeight: 1.3 }}>
        Calculate Your Telephony Cost Savings
      </h3>
      <p style={{ color: '#94a3b8', fontSize: '15px', margin: '0 0 24px 0', lineHeight: 1.5 }}>
        See how much your sales floor saves each month by replacing expensive virtual 080 VoIP dialers with AI Closer native SIM CRM at flat ₹399/user/month.
      </p>

      <div style={{ background: 'rgba(255,255,255,0.04)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)', marginBottom: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', marginBottom: '14px' }}>
          <label style={{ fontSize: '15px', fontWeight: 600, color: '#cbd5e1' }}>
            Number of Sales Reps / Telecallers:
          </label>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button
              type="button"
              onClick={() => setReps((prev) => Math.max(1, prev - 1))}
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                border: '1px solid rgba(255,255,255,0.2)',
                background: '#1e293b',
                color: '#ffffff',
                fontSize: '18px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              aria-label="Decrease reps"
            >
              −
            </button>
            <span style={{ fontSize: '22px', fontWeight: 800, color: '#f97316', minWidth: '40px', textAlign: 'center' }}>
              {reps}
            </span>
            <button
              type="button"
              onClick={() => setReps((prev) => Math.min(100, prev + 1))}
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                border: '1px solid rgba(255,255,255,0.2)',
                background: '#1e293b',
                color: '#ffffff',
                fontSize: '18px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              aria-label="Increase reps"
            >
              +
            </button>
          </div>
        </div>

        <input
          type="range"
          min="1"
          max="50"
          value={reps}
          onChange={(e) => setReps(parseInt(e.target.value, 10))}
          style={{
            width: '100%',
            accentColor: '#f97316',
            cursor: 'pointer',
            height: '6px',
          }}
          aria-label="Number of Sales Reps"
        />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px', marginBottom: '24px' }}>
        <div style={{ background: '#0d131f', padding: '16px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ fontSize: '12px', color: '#94a3b8' }}>Virtual VoIP / Cloud CRM</div>
          <div style={{ fontSize: '20px', fontWeight: 800, color: '#ef4444', marginTop: '4px' }}>
            ₹{new Intl.NumberFormat('en-IN').format(legacyTotal)}<span style={{ fontSize: '12px', fontWeight: 400 }}>/mo</span>
          </div>
          <div style={{ fontSize: '11px', color: '#64748b', marginTop: '2px' }}>₹2,200/seat avg + minutes</div>
        </div>

        <div style={{ background: '#0d131f', padding: '16px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ fontSize: '12px', color: '#94a3b8' }}>AI Closer SIM CRM</div>
          <div style={{ fontSize: '20px', fontWeight: 800, color: '#22c55e', marginTop: '4px' }}>
            ₹{new Intl.NumberFormat('en-IN').format(aiCloserTotal)}<span style={{ fontSize: '12px', fontWeight: 400 }}>/mo</span>
          </div>
          <div style={{ fontSize: '11px', color: '#64748b', marginTop: '2px' }}>Flat ₹399/seat with manager</div>
        </div>

        <div style={{ background: 'rgba(249,115,22,0.1)', padding: '16px', borderRadius: '10px', border: '1px solid rgba(249,115,22,0.3)' }}>
          <div style={{ fontSize: '12px', color: '#f97316', fontWeight: 700 }}>Your Net Savings</div>
          <div style={{ fontSize: '24px', fontWeight: 900, color: '#f97316', marginTop: '4px' }}>
            ₹{formattedMonthlySavings}<span style={{ fontSize: '12px', fontWeight: 500, color: '#fed7aa' }}>/mo</span>
          </div>
          <div style={{ fontSize: '11px', color: '#fdba74', marginTop: '2px' }}>₹{formattedAnnualSavings}/year saved!</div>
        </div>
      </div>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          width: '100%',
          background: '#25D366',
          color: '#ffffff',
          fontWeight: 800,
          fontSize: '16px',
          padding: '16px 24px',
          borderRadius: '12px',
          textDecoration: 'none',
          boxShadow: '0 4px 16px rgba(37,211,102,0.3)',
          transition: 'all 0.2s ease',
        }}
      >
        <span>💬 Claim This ₹399 Plan &amp; Demo on WhatsApp</span>
        <span aria-hidden="true">→</span>
      </a>
    </div>
  );
}

export function StickyMobileBar() {
  return (
    <aside
      className="mobile-sticky-cta"
      aria-label="Quick contact"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        background: '#090d16',
        borderTop: '1px solid rgba(249,115,22,0.3)',
        padding: '10px 16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '12px',
        boxShadow: '0 -8px 24px rgba(0,0,0,0.5)',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span style={{ fontSize: '13px', fontWeight: 800, color: '#ffffff', lineHeight: 1.2 }}>
          AI Closer SIM CRM
        </span>
        <span style={{ fontSize: '11px', color: '#f97316', fontWeight: 700 }}>
          ₹399/mo • 95% Pickup Rate
        </span>
      </div>

      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello AI Closer, I would like to book a free demo for my team.')}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          background: '#25D366',
          color: '#ffffff',
          fontWeight: 800,
          fontSize: '13px',
          padding: '10px 16px',
          borderRadius: '8px',
          textDecoration: 'none',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          boxShadow: '0 2px 8px rgba(37,211,102,0.3)',
          whiteSpace: 'nowrap',
        }}
      >
        <span>Chat on WhatsApp</span>
        <span aria-hidden="true">→</span>
      </a>
    </aside>
  );
}

export { SpeedToLeadCalculator };
