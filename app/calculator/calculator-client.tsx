'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { SpeedToLeadCalculator } from '@/components/speed-to-lead-calculator';

export function CalculatorClient() {
  const [activeTab, setActiveTab] = useState<'speed-to-lead' | 'telecom-savings'>('speed-to-lead');

  // Telecom Savings State
  const [teamSize, setTeamSize] = useState<number>(8);
  const [callsPerRep, setCallsPerRep] = useState<number>(60);
  const [callDuration, setCallDuration] = useState<number>(2.5);
  const [provider, setProvider] = useState<string>('cloud'); // 'cloud', 'telecrm', 'leadsquared'

  const workingDays = 26;

  // Cloud Telephony Cost Calculation
  const cloudPickupRate = 0.18;
  const connectedCallsCloud = callsPerRep * cloudPickupRate;
  const connectedMinutesCloud = connectedCallsCloud * callDuration * workingDays;
  const telephonyPerMinRate = 0.85; // dual-leg pulse rate
  const cloudCallingCostPerRep = connectedMinutesCloud * telephonyPerMinRate;
  const cloudSoftwareFeePerRep = provider === 'leadsquared' ? 2200 : provider === 'telecrm' ? 1200 : 1200;
  const virtualNumberRental = (800 / teamSize); // amortized virtual number rent
  const totalCloudCostPerRep = cloudCallingCostPerRep + cloudSoftwareFeePerRep + virtualNumberRental;
  const totalCloudMonthly = Math.round(totalCloudCostPerRep * teamSize);

  // AI Closer Cost Calculation: Strictly Flat ₹399/user/month + ₹249 unlimited mobile SIM pack
  const aicloserSoftwareFee = 399;
  const aicloserSimPack = 249;
  const totalAicloserCostPerRep = aicloserSoftwareFee + aicloserSimPack;
  const totalAicloserMonthly = Math.round(totalAicloserCostPerRep * teamSize);

  const monthlySavings = Math.max(0, totalCloudMonthly - totalAicloserMonthly);
  const annualSavings = monthlySavings * 12;
  const savingsPercent = totalCloudMonthly > 0 ? Math.round((monthlySavings / totalCloudMonthly) * 100) : 0;

  // Pickup rate comparison
  const cloudEstimatedPickupsDaily = Math.round(callsPerRep * 0.18);
  const aicloserEstimatedPickupsDaily = Math.round(callsPerRep * 0.88);
  const extraConversationsMonthly = Math.round((aicloserEstimatedPickupsDaily - cloudEstimatedPickupsDaily) * workingDays * teamSize);

  const formatINR = (val: number) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(val);
  };

  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', color: '#f8fafc' }}>
      {/* Dual-Tab Mode Selector */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '12px',
          marginBottom: '28px',
          flexWrap: 'wrap',
        }}
      >
        <button
          type="button"
          onClick={() => setActiveTab('speed-to-lead')}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '12px 24px',
            borderRadius: '12px',
            fontSize: '15px',
            fontWeight: activeTab === 'speed-to-lead' ? 800 : 600,
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            border: activeTab === 'speed-to-lead'
              ? '2px solid #f97316'
              : '1px solid rgba(255,255,255,0.12)',
            background: activeTab === 'speed-to-lead'
              ? 'linear-gradient(135deg, rgba(249,115,22,0.2) 0%, rgba(17,24,39,0.9) 100%)'
              : '#0d131f',
            color: activeTab === 'speed-to-lead' ? '#ffffff' : '#94a3b8',
            boxShadow: activeTab === 'speed-to-lead'
              ? '0 8px 24px rgba(249,115,22,0.25)'
              : 'none',
          }}
        >
          <span>💬</span>
          <span>WhatsApp Speed-to-Lead ROI</span>
          <span
            style={{
              fontSize: '11px',
              padding: '2px 8px',
              borderRadius: '20px',
              background: activeTab === 'speed-to-lead' ? '#f97316' : 'rgba(255,255,255,0.1)',
              color: '#ffffff',
              fontWeight: 700,
            }}
          >
            NEW
          </span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('telecom-savings')}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '12px 24px',
            borderRadius: '12px',
            fontSize: '15px',
            fontWeight: activeTab === 'telecom-savings' ? 800 : 600,
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            border: activeTab === 'telecom-savings'
              ? '2px solid #22c55e'
              : '1px solid rgba(255,255,255,0.12)',
            background: activeTab === 'telecom-savings'
              ? 'linear-gradient(135deg, rgba(34,197,94,0.2) 0%, rgba(17,24,39,0.9) 100%)'
              : '#0d131f',
            color: activeTab === 'telecom-savings' ? '#ffffff' : '#94a3b8',
            boxShadow: activeTab === 'telecom-savings'
              ? '0 8px 24px rgba(34,197,94,0.25)'
              : 'none',
          }}
        >
          <span>📞</span>
          <span>Cloud vs SIM Calling Savings</span>
        </button>
      </div>

      {/* Tab 1: WhatsApp Speed-to-Lead Interactive Calculator */}
      {activeTab === 'speed-to-lead' && (
        <SpeedToLeadCalculator standalone={false} />
      )}

      {/* Tab 2: SIM Calling vs Cloud Telephony Cost Savings Calculator */}
      {activeTab === 'telecom-savings' && (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px',
            background: '#090d16',
            border: '1px solid rgba(249,115,22,0.3)',
            borderRadius: '16px',
            padding: '28px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
          }}
        >
          {/* Left Column: Interactive Sliders */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <label style={{ fontSize: '14px', fontWeight: 600, color: '#e2e8f0' }}>Sales Team Size (Reps)</label>
                <span style={{ fontSize: '16px', fontWeight: 700, color: '#f97316' }}>{teamSize} Reps</span>
              </div>
              <input
                type="range"
                min="1"
                max="50"
                value={teamSize}
                onChange={(e) => setTeamSize(Number(e.target.value))}
                style={{ width: '100%', accentColor: '#f97316', cursor: 'pointer' }}
                aria-label="Sales Team Size"
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#64748b' }}>
                <span>1 Solo Rep</span>
                <span>25 Mid-Sized</span>
                <span>50 Enterprise</span>
              </div>
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <label style={{ fontSize: '14px', fontWeight: 600, color: '#e2e8f0' }}>Daily Outbound Calls per Rep</label>
                <span style={{ fontSize: '16px', fontWeight: 700, color: '#f97316' }}>{callsPerRep} Dials / Day</span>
              </div>
              <input
                type="range"
                min="20"
                max="120"
                step="5"
                value={callsPerRep}
                onChange={(e) => setCallsPerRep(Number(e.target.value))}
                style={{ width: '100%', accentColor: '#f97316', cursor: 'pointer' }}
                aria-label="Daily Outbound Calls per Rep"
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#64748b' }}>
                <span>20 Calls</span>
                <span>60 Average</span>
                <span>120 High Volume</span>
              </div>
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <label style={{ fontSize: '14px', fontWeight: 600, color: '#e2e8f0' }}>Average Connected Call Duration</label>
                <span style={{ fontSize: '16px', fontWeight: 700, color: '#f97316' }}>{callDuration} Minutes</span>
              </div>
              <input
                type="range"
                min="1"
                max="6"
                step="0.5"
                value={callDuration}
                onChange={(e) => setCallDuration(Number(e.target.value))}
                style={{ width: '100%', accentColor: '#f97316', cursor: 'pointer' }}
                aria-label="Average Connected Call Duration"
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#64748b' }}>
                <span>1.0 min</span>
                <span>2.5 min</span>
                <span>6.0 min</span>
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#e2e8f0', marginBottom: '8px' }}>
                Current Setup / Competitor Provider
              </label>
              <select
                value={provider}
                onChange={(e) => setProvider(e.target.value)}
                style={{
                  width: '100%',
                  background: '#111827',
                  border: '1px solid rgba(255,255,255,0.15)',
                  color: '#ffffff',
                  padding: '10px 14px',
                  borderRadius: '8px',
                  fontSize: '14px',
                  cursor: 'pointer',
                }}
              >
                <option value="cloud">Virtual Cloud Telephony (Exotel, Knowlarity, MyOperator)</option>
                <option value="telecrm">TeleCRM (₹1,200/seat/mo)</option>
                <option value="leadsquared">LeadSquared (₹2,200/seat/mo + Telephony)</option>
              </select>
            </div>
          </div>

          {/* Right Column: Dynamic Real-Time Results & ROI Callout */}
          <div
            style={{
              background: 'linear-gradient(145deg, #111827, #0b1120)',
              border: '1px solid rgba(249,115,22,0.25)',
              borderRadius: '12px',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <span style={{ fontSize: '13px', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Your Monthly Cost Comparison
                </span>
                <span
                  style={{
                    background: 'rgba(34,197,94,0.15)',
                    border: '1px solid #22c55e',
                    color: '#4ade80',
                    fontSize: '11px',
                    fontWeight: 700,
                    padding: '3px 8px',
                    borderRadius: '20px',
                  }}
                >
                  Save {savingsPercent}%
                </span>
              </div>

              {/* Price Stack Bars */}
              <div style={{ marginBottom: '18px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '4px' }}>
                  <span style={{ color: '#ef4444' }}>Current Monthly Spend:</span>
                  <span style={{ fontWeight: 700, color: '#ef4444' }}>{formatINR(totalCloudMonthly)} / mo</span>
                </div>
                <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.08)', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ width: '100%', height: '100%', background: '#ef4444' }} />
                </div>
              </div>

              <div style={{ marginBottom: '22px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '4px' }}>
                  <span style={{ color: '#22c55e' }}>With AI Closer (₹399 + SIM):</span>
                  <span style={{ fontWeight: 700, color: '#22c55e' }}>{formatINR(totalAicloserMonthly)} / mo</span>
                </div>
                <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.08)', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ width: `${Math.max(8, 100 - savingsPercent)}%`, height: '100%', background: '#22c55e' }} />
                </div>
              </div>

              {/* Glowing Annual Savings Badge */}
              <div
                style={{
                  background: 'rgba(249,115,22,0.1)',
                  border: '1px solid rgba(249,115,22,0.4)',
                  borderRadius: '10px',
                  padding: '16px',
                  textAlign: 'center',
                  marginBottom: '20px',
                }}
              >
                <div style={{ fontSize: '12px', color: '#fdba74', textTransform: 'uppercase', fontWeight: 600 }}>
                  Estimated Annual Cash Savings
                </div>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: '#f97316', margin: '4px 0' }}>
                  {formatINR(annualSavings)}
                </div>
                <div style={{ fontSize: '12px', color: '#94a3b8' }}>
                  Directly added to your bottom-line profit margins
                </div>
              </div>

              {/* Pickup Rate Comparison Telemetry */}
              <div style={{ background: '#090d16', borderRadius: '8px', padding: '12px 14px', marginBottom: '20px' }}>
                <div style={{ fontSize: '12px', color: '#94a3b8', marginBottom: '6px' }}>⚡ Connection Advantage:</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                  <span>Virtual 080 Pickup:</span>
                  <span style={{ color: '#f87171', fontWeight: 600 }}>~18% (Spam flagged)</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginTop: '4px' }}>
                  <span>Native SIM Pickup:</span>
                  <span style={{ color: '#4ade80', fontWeight: 700 }}>88% - 95% (Clean 10-Digit)</span>
                </div>
                <div style={{ fontSize: '11px', color: '#38bdf8', marginTop: '6px', fontStyle: 'italic' }}>
                  👉 Approx. <strong>+{extraConversationsMonthly.toLocaleString('en-IN')}</strong> additional customer conversations per month!
                </div>
              </div>
            </div>

            {/* Action CTAs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <Link
                href="https://app.aicloser.in/register"
                style={{
                  display: 'block',
                  background: '#f97316',
                  color: '#ffffff',
                  fontWeight: 700,
                  textAlign: 'center',
                  padding: '12px 20px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontSize: '14px',
                }}
              >
                Start Free Trial at Flat ₹399/User/Month &rarr;
              </Link>
              <Link
                href="/contact"
                style={{
                  display: 'block',
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  color: '#e2e8f0',
                  fontWeight: 600,
                  textAlign: 'center',
                  padding: '10px 20px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontSize: '13px',
                }}
              >
                Book a 15-Minute Live Sales Floor Walkthrough
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
