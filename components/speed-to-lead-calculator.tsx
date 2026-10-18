'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';

export type ResponseDelayTier = 'sub_60s' | '15_min' | '1_hour' | '4_hours' | '24_hours';

export interface SpeedToLeadCalculatorProps {
  standalone?: boolean;
  className?: string;
  defaultTeamSize?: number;
}

interface TierConfig {
  label: string;
  shortLabel: string;
  contactRate: number; // e.g. 0.86
  qualificationMultiplier: number; // e.g. 1.00
  badge: string;
  badgeColor: string;
  description: string;
}

const DELAY_TIERS: Record<ResponseDelayTier, TierConfig> = {
  sub_60s: {
    label: '< 60 Seconds (Instant WhatsApp)',
    shortLabel: '< 60 Sec',
    contactRate: 0.86,
    qualificationMultiplier: 1.0,
    badge: 'Peak Intent (86%)',
    badgeColor: '#22c55e',
    description: 'Lead is actively holding their phone. Maximum conversion probability.',
  },
  '15_min': {
    label: '15 Minutes Delay',
    shortLabel: '15 Min',
    contactRate: 0.54,
    qualificationMultiplier: 0.64,
    badge: 'Rapid Decay (54%)',
    badgeColor: '#eab308',
    description: 'Prospect has exited the form; intent begins steep decline.',
  },
  '1_hour': {
    label: '1 Hour Delay',
    shortLabel: '1 Hour',
    contactRate: 0.36,
    qualificationMultiplier: 0.42,
    badge: 'High Decay (36%)',
    badgeColor: '#f97316',
    description: 'Prospect moved to another task or is researching competitors.',
  },
  '4_hours': {
    label: '4 Hours Delay (Standard Calling)',
    shortLabel: '4 Hours',
    contactRate: 0.19,
    qualificationMultiplier: 0.21,
    badge: 'Severe Collapse (19%)',
    badgeColor: '#ef4444',
    description: 'Standard manual batch calling floor delay. Most leads ignore unrecognized calls.',
  },
  '24_hours': {
    label: '24+ Hours (Next-Day Follow-up)',
    shortLabel: 'Next Day',
    contactRate: 0.07,
    qualificationMultiplier: 0.1,
    badge: 'Dead Lead Zone (7%)',
    badgeColor: '#b91c1c',
    description: 'Prospect often forgets submitting inquiry or already bought elsewhere.',
  },
};

const WHATSAPP_CONTACT_NUMBER = '919589510954';

export function SpeedToLeadCalculator({
  standalone = false,
  className = '',
  defaultTeamSize = 5,
}: SpeedToLeadCalculatorProps) {
  const [monthlyLeads, setMonthlyLeads] = useState<number>(300);
  const [avgDealValue, setAvgDealValue] = useState<number>(25000);
  const [currentResponseDelay, setCurrentResponseDelay] = useState<ResponseDelayTier>('4_hours');
  const [costPerLead, setCostPerLead] = useState<number>(400);
  const [teamSize, setTeamSize] = useState<number>(defaultTeamSize);

  // Economic calculations based on HBR & sales research lead decay models
  const calculations = useMemo(() => {
    const tier = DELAY_TIERS[currentResponseDelay];
    const optimalTier = DELAY_TIERS.sub_60s;

    // Contacted leads
    const currentContacted = Math.round(monthlyLeads * tier.contactRate);
    const optimalContacted = Math.round(monthlyLeads * optimalTier.contactRate);
    const lostUnreachableLeads = Math.max(0, optimalContacted - currentContacted);

    // Ad spend sunk & wasted
    const totalAdSpend = monthlyLeads * costPerLead;
    const wastedAdSpend = lostUnreachableLeads * costPerLead;

    // Deals closed (Baseline qualification 28%, closing rate 15% on qualified)
    const currentDeals = Math.round(
      monthlyLeads * tier.contactRate * 0.28 * tier.qualificationMultiplier * 0.15
    );
    const optimalDeals = Math.round(
      monthlyLeads * optimalTier.contactRate * 0.28 * optimalTier.qualificationMultiplier * 0.15
    );
    const deltaDeals = Math.max(0, optimalDeals - currentDeals);

    // Revenue metrics
    const currentMonthlyRevenue = currentDeals * avgDealValue;
    const optimalMonthlyRevenue = optimalDeals * avgDealValue;
    const recoveredMonthlyRevenue = deltaDeals * avgDealValue;
    const recoveredAnnualRevenue = recoveredMonthlyRevenue * 12;

    // AI Closer Investment (Strict flat ₹399/user/month pricing)
    const aiCloserMonthlyCost = teamSize * 399;
    const aiCloserAnnualCost = aiCloserMonthlyCost * 12;

    // Net ROI Multiple
    const roiMultiple =
      aiCloserMonthlyCost > 0
        ? Math.round(recoveredMonthlyRevenue / aiCloserMonthlyCost)
        : 0;

    return {
      currentContactRatePct: Math.round(tier.contactRate * 100),
      optimalContactRatePct: Math.round(optimalTier.contactRate * 100),
      currentContacted,
      optimalContacted,
      lostUnreachableLeads,
      totalAdSpend,
      wastedAdSpend,
      currentDeals,
      optimalDeals,
      deltaDeals,
      currentMonthlyRevenue,
      optimalMonthlyRevenue,
      recoveredMonthlyRevenue,
      recoveredAnnualRevenue,
      aiCloserMonthlyCost,
      aiCloserAnnualCost,
      roiMultiple,
    };
  }, [monthlyLeads, avgDealValue, currentResponseDelay, costPerLead, teamSize]);

  const formatINR = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  const prefilledWhatsAppUrl = useMemo(() => {
    const tierName = DELAY_TIERS[currentResponseDelay].label;
    const message = `Hello AI Closer! Our sales team gets ${monthlyLeads} leads/month at ₹${costPerLead} CPL. Our current response delay is "${tierName}", costing us ~${formatINR(
      calculations.wastedAdSpend
    )}/mo in wasted ad spend and losing ${calculations.lostUnreachableLeads} unreachable leads. We want to recover +${calculations.deltaDeals} extra closed deals/mo (+${formatINR(
      calculations.recoveredMonthlyRevenue
    )}/mo in pipeline revenue) with AI Closer WhatsApp Speed-to-Lead at flat ₹399/user/month.`;
    return `https://wa.me/${WHATSAPP_CONTACT_NUMBER}?text=${encodeURIComponent(message)}`;
  }, [monthlyLeads, costPerLead, currentResponseDelay, calculations]);

  return (
    <div
      className={className}
      style={{
        maxWidth: standalone ? '1100px' : '100%',
        margin: standalone ? '0 auto' : '0',
        color: '#f8fafc',
      }}
    >
      {/* Top Banner / Summary Highlight */}
      <div
        style={{
          background: 'linear-gradient(135deg, rgba(234, 88, 12, 0.15) 0%, rgba(17, 24, 39, 0.9) 100%)',
          border: '1px solid rgba(249, 115, 22, 0.4)',
          borderRadius: '16px',
          padding: '24px 28px',
          marginBottom: '24px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
        }}
      >
        <div>
          <div
            style={{
              fontSize: '11px',
              fontWeight: 800,
              color: '#f97316',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '4px',
            }}
          >
            ⚡ Lead Decay Economic Model
          </div>
          <h3 style={{ fontSize: '20px', fontWeight: 800, margin: 0, color: '#ffffff' }}>
            Instant &lt;60s WhatsApp Contact vs Manual Calling Delay
          </h3>
          <p style={{ fontSize: '13px', color: '#94a3b8', margin: '4px 0 0 0' }}>
            Prospect qualification collapses by up to 93% if you wait hours to dial. Stop burning Meta &amp; Google ad spend.
          </p>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            background: 'rgba(0,0,0,0.3)',
            padding: '10px 16px',
            borderRadius: '10px',
            border: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '11px', color: '#94a3b8' }}>Current Contact Rate</div>
            <div
              style={{
                fontSize: '18px',
                fontWeight: 800,
                color: DELAY_TIERS[currentResponseDelay].badgeColor,
              }}
            >
              {calculations.currentContactRatePct}%
            </div>
          </div>
          <div style={{ fontSize: '18px', color: '#64748b' }}>vs</div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '11px', color: '#94a3b8' }}>&lt;60s WhatsApp</div>
            <div style={{ fontSize: '18px', fontWeight: 800, color: '#22c55e' }}>86%</div>
          </div>
        </div>
      </div>

      {/* 2-Column Responsive Dashboard */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
          background: '#090d16',
          border: '1px solid rgba(249, 115, 22, 0.3)',
          borderRadius: '16px',
          padding: '28px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
        }}
      >
        {/* Left Column: Interactive Controls */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
          {/* Slider 1: Monthly Leads */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <label style={{ fontSize: '14px', fontWeight: 600, color: '#e2e8f0' }}>
                Monthly Inbound Leads (Meta, Google, Forms)
              </label>
              <span style={{ fontSize: '16px', fontWeight: 700, color: '#f97316' }}>
                {monthlyLeads.toLocaleString('en-IN')} Leads
              </span>
            </div>
            <input
              type="range"
              min="50"
              max="5000"
              step="50"
              value={monthlyLeads}
              onChange={(e) => setMonthlyLeads(Number(e.target.value))}
              style={{ width: '100%', accentColor: '#f97316', cursor: 'pointer' }}
              aria-label="Monthly Inbound Leads"
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#64748b' }}>
              <span>50 Leads</span>
              <span>1,000 Mid-Tier</span>
              <span>5,000 High Volume</span>
            </div>
          </div>

          {/* Slider 2: Average Deal Value */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <label style={{ fontSize: '14px', fontWeight: 600, color: '#e2e8f0' }}>
                Average Deal Value / Contract Revenue
              </label>
              <span style={{ fontSize: '16px', fontWeight: 700, color: '#f97316' }}>
                {formatINR(avgDealValue)}
              </span>
            </div>
            <input
              type="range"
              min="2000"
              max="500000"
              step="2000"
              value={avgDealValue}
              onChange={(e) => setAvgDealValue(Number(e.target.value))}
              style={{ width: '100%', accentColor: '#f97316', cursor: 'pointer' }}
              aria-label="Average Deal Value"
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#64748b' }}>
              <span>₹2,000</span>
              <span>₹50,000</span>
              <span>₹5,00,000</span>
            </div>
          </div>

          {/* Control 3: Current Response Delay Selector */}
          <div>
            <label
              style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: 600,
                color: '#e2e8f0',
                marginBottom: '10px',
              }}
            >
              Current Average Response Time to Inbound Leads
            </label>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                gap: '8px',
              }}
            >
              {(Object.keys(DELAY_TIERS) as ResponseDelayTier[]).map((tierKey) => {
                const tier = DELAY_TIERS[tierKey];
                const isSelected = currentResponseDelay === tierKey;
                return (
                  <button
                    key={tierKey}
                    type="button"
                    onClick={() => setCurrentResponseDelay(tierKey)}
                    style={{
                      padding: '10px 12px',
                      borderRadius: '8px',
                      fontSize: '12px',
                      fontWeight: isSelected ? 700 : 500,
                      cursor: 'pointer',
                      border: isSelected
                        ? '1px solid #f97316'
                        : '1px solid rgba(255,255,255,0.12)',
                      background: isSelected ? 'rgba(249,115,22,0.18)' : '#111827',
                      color: isSelected ? '#ffffff' : '#94a3b8',
                      transition: 'all 0.15s ease',
                      textAlign: 'center',
                    }}
                  >
                    <div>{tier.shortLabel}</div>
                    <div
                      style={{
                        fontSize: '10px',
                        color: isSelected ? '#fdba74' : '#64748b',
                        marginTop: '2px',
                      }}
                    >
                      {Math.round(tier.contactRate * 100)}% Contact
                    </div>
                  </button>
                );
              })}
            </div>
            <div style={{ fontSize: '11px', color: '#64748b', marginTop: '6px', fontStyle: 'italic' }}>
              Selected: {DELAY_TIERS[currentResponseDelay].description}
            </div>
          </div>

          {/* Slider 4: Cost per Lead (CPL) */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <label style={{ fontSize: '14px', fontWeight: 600, color: '#e2e8f0' }}>
                Cost Per Lead (CPL Ad Budget)
              </label>
              <span style={{ fontSize: '16px', fontWeight: 700, color: '#f97316' }}>
                ₹{costPerLead} / lead
              </span>
            </div>
            <input
              type="range"
              min="50"
              max="2500"
              step="50"
              value={costPerLead}
              onChange={(e) => setCostPerLead(Number(e.target.value))}
              style={{ width: '100%', accentColor: '#f97316', cursor: 'pointer' }}
              aria-label="Cost Per Lead"
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#64748b' }}>
              <span>₹50/lead</span>
              <span>₹500/lead</span>
              <span>₹2,500/lead</span>
            </div>
          </div>

          {/* Slider 5: Team Size */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <label style={{ fontSize: '14px', fontWeight: 600, color: '#e2e8f0' }}>
                Sales Telecallers / Reps
              </label>
              <span style={{ fontSize: '16px', fontWeight: 700, color: '#f97316' }}>
                {teamSize} Reps
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="50"
              step="1"
              value={teamSize}
              onChange={(e) => setTeamSize(Number(e.target.value))}
              style={{ width: '100%', accentColor: '#f97316', cursor: 'pointer' }}
              aria-label="Sales Telecallers"
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#64748b' }}>
              <span>1 Solo Closer</span>
              <span>10 Growing Team</span>
              <span>50 Floor Reps</span>
            </div>
          </div>
        </div>

        {/* Right Column: Real-Time Results & Conversion Metrics */}
        <div
          style={{
            background: 'linear-gradient(145deg, #111827, #0b1120)',
            border: '1px solid rgba(249,115,22,0.25)',
            borderRadius: '12px',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '20px',
          }}
        >
          <div>
            {/* Lead Bleed Metric Cards */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '12px',
                marginBottom: '16px',
              }}
            >
              <div
                style={{
                  background: 'rgba(239, 68, 68, 0.1)',
                  border: '1px solid rgba(239, 68, 68, 0.3)',
                  borderRadius: '10px',
                  padding: '14px',
                }}
              >
                <div style={{ fontSize: '11px', color: '#fca5a5', textTransform: 'uppercase', fontWeight: 600 }}>
                  Lost Unreachable Leads
                </div>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#ef4444', margin: '4px 0' }}>
                  {calculations.lostUnreachableLeads}
                  <span style={{ fontSize: '12px', fontWeight: 500, color: '#f87171' }}> /mo</span>
                </div>
                <div style={{ fontSize: '11px', color: '#94a3b8' }}>
                  Ignored dials due to delay
                </div>
              </div>

              <div
                style={{
                  background: 'rgba(239, 68, 68, 0.1)',
                  border: '1px solid rgba(239, 68, 68, 0.3)',
                  borderRadius: '10px',
                  padding: '14px',
                }}
              >
                <div style={{ fontSize: '11px', color: '#fca5a5', textTransform: 'uppercase', fontWeight: 600 }}>
                  Wasted Sunk Ad Spend
                </div>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#ef4444', margin: '4px 0' }}>
                  {formatINR(calculations.wastedAdSpend)}
                  <span style={{ fontSize: '12px', fontWeight: 500, color: '#f87171' }}> /mo</span>
                </div>
                <div style={{ fontSize: '11px', color: '#94a3b8' }}>
                  CPL burned on no-shows
                </div>
              </div>
            </div>

            {/* Glowing Recovery Badge */}
            <div
              style={{
                background: 'linear-gradient(135deg, rgba(34,197,94,0.15) 0%, rgba(17,24,39,0.7) 100%)',
                border: '1px solid rgba(34,197,94,0.4)',
                borderRadius: '12px',
                padding: '18px',
                textAlign: 'center',
                marginBottom: '16px',
              }}
            >
              <div style={{ fontSize: '12px', color: '#86efac', textTransform: 'uppercase', fontWeight: 700 }}>
                🚀 Recoverable Pipeline by Switching to &lt;60s WhatsApp
              </div>
              <div style={{ fontSize: '2.1rem', fontWeight: 900, color: '#4ade80', margin: '4px 0' }}>
                +{formatINR(calculations.recoveredMonthlyRevenue)}
                <span style={{ fontSize: '14px', fontWeight: 600, color: '#86efac' }}> / month</span>
              </div>
              <div style={{ fontSize: '12px', color: '#cbd5e1' }}>
                Equates to <strong>+{calculations.deltaDeals} additional closed deals</strong> per month ({formatINR(
                  calculations.recoveredAnnualRevenue
                )}/year)
              </div>
            </div>

            {/* AI Closer Investment & ROI Telemetry */}
            <div
              style={{
                background: '#090d16',
                borderRadius: '10px',
                border: '1px solid rgba(255,255,255,0.08)',
                padding: '14px 16px',
                marginBottom: '16px',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ fontSize: '13px', color: '#94a3b8' }}>
                  AI Closer Subscription ({teamSize} Reps × flat ₹399/mo):
                </span>
                <span style={{ fontSize: '14px', fontWeight: 700, color: '#ffffff' }}>
                  {formatINR(calculations.aiCloserMonthlyCost)} / mo
                </span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '6px' }}>
                <span style={{ fontSize: '13px', color: '#fdba74', fontWeight: 600 }}>
                  Estimated Net ROI Multiple:
                </span>
                <span
                  style={{
                    background: 'rgba(249,115,22,0.2)',
                    border: '1px solid #f97316',
                    color: '#fdba74',
                    fontSize: '13px',
                    fontWeight: 800,
                    padding: '2px 10px',
                    borderRadius: '20px',
                  }}
                >
                  {calculations.roiMultiple}x Net ROI
                </span>
              </div>

              <div style={{ fontSize: '11px', color: '#38bdf8', marginTop: '10px', lineHeight: 1.4 }}>
                💡 <strong>How it works:</strong> Inbound leads from Meta/Google trigger an automated &lt;60s WhatsApp greeting introducing the rep, locking in 86% response before the first voice call.
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <a
              href={prefilledWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'block',
                background: '#25D366',
                color: '#ffffff',
                fontWeight: 700,
                textAlign: 'center',
                padding: '13px 20px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontSize: '14px',
                boxShadow: '0 4px 14px rgba(37,211,102,0.35)',
              }}
            >
              💬 Claim Speed-to-Lead Automation on WhatsApp &rarr;
            </a>

            <Link
              href="https://app.aicloser.in/register"
              style={{
                display: 'block',
                background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
                color: '#ffffff',
                fontWeight: 700,
                textAlign: 'center',
                padding: '12px 20px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontSize: '13px',
              }}
            >
              Start Free Trial at Flat ₹399/User/Month &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpeedToLeadCalculator;
