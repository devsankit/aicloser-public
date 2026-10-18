'use client';

import { useState } from 'react';
import Link from 'next/link';

type TelephonyType = 'cloud_080' | 'mobile_sim';
type CarrierType = 'airtel' | 'jio' | 'vi' | 'bsnl';
type CadenceType = 'burst' | 'steady' | 'progressive';

export function TruecallerSpamCheckerClient() {
  const [telephonyType, setTelephonyType] = useState<TelephonyType>('cloud_080');
  const [carrier, setCarrier] = useState<CarrierType>('airtel');
  const [teamSize, setTeamSize] = useState<number>(10);
  const [callsPerDay, setCallsPerDay] = useState<number>(120);
  const [cadence, setCadence] = useState<CadenceType>('steady');
  const [hasWhatsAppWarmup, setHasWhatsAppWarmup] = useState<boolean>(false);
  const [currentPickup, setCurrentPickup] = useState<number>(25);

  // Carrier Spam Risk Scoring Engine
  let rawScore = telephonyType === 'cloud_080' ? 55 : 10;

  // Carrier heuristics & penalties
  const isAirtel120Triggered = carrier === 'airtel' && callsPerDay > 120;
  if (carrier === 'airtel') {
    rawScore += callsPerDay > 120 ? 22 : 10;
  } else if (carrier === 'jio') {
    rawScore += cadence === 'burst' ? 20 : 10;
  } else if (carrier === 'vi') {
    rawScore += 14;
  } else if (carrier === 'bsnl') {
    rawScore += 18;
  }

  const isJioBurstTriggered = carrier === 'jio' && cadence === 'burst';

  // Daily volume penalty per SIM
  if (callsPerDay >= 300) {
    rawScore += 28;
  } else if (callsPerDay >= 180) {
    rawScore += 22;
  } else if (callsPerDay >= 120) {
    rawScore += 14;
  } else if (callsPerDay >= 80) {
    rawScore += 6;
  }

  // Pacing cadence penalty / bonus
  if (cadence === 'burst') {
    rawScore += 18;
  } else if (cadence === 'steady') {
    rawScore += 8;
  } else if (cadence === 'progressive') {
    rawScore -= 5;
  }

  // WhatsApp warmup bonus (-15% bonus if enabled, +20% penalty if absent)
  if (hasWhatsAppWarmup) {
    rawScore -= 15;
  } else {
    rawScore += 20;
  }

  // Current pickup rate calibration
  if (currentPickup < 20) {
    rawScore += 15;
  } else if (currentPickup < 40) {
    rawScore += 8;
  }

  const spamScore = Math.min(Math.max(rawScore, 5), 99);

  // Risk badges
  let riskLevel = 'LOW RISK';
  let riskColor = '#22c55e';
  let riskBg = 'rgba(34, 197, 94, 0.12)';
  let riskBorder = 'rgba(34, 197, 94, 0.35)';

  if (spamScore >= 75) {
    riskLevel = 'CRITICAL RISK';
    riskColor = '#ef4444';
    riskBg = 'rgba(239, 68, 68, 0.12)';
    riskBorder = 'rgba(239, 68, 68, 0.35)';
  } else if (spamScore >= 55) {
    riskLevel = 'HIGH RISK';
    riskColor = '#f97316';
    riskBg = 'rgba(249, 115, 22, 0.12)';
    riskBorder = 'rgba(249, 115, 22, 0.35)';
  } else if (spamScore >= 35) {
    riskLevel = 'MODERATE RISK';
    riskColor = '#f59e0b';
    riskBg = 'rgba(245, 158, 11, 0.12)';
    riskBorder = 'rgba(245, 158, 11, 0.35)';
  }

  // Telemetry Calculations
  const monthlyTotalCalls = teamSize * callsPerDay * 24;
  const missedCalls = Math.round(monthlyTotalCalls * (1 - currentPickup / 100));
  const lostHours = Math.round((missedCalls * 25) / 3600); // 25s lost per unanswered ring
  const aiCloserPickup = 85;
  const recoverableMonthlyCalls = Math.max(
    0,
    Math.round(monthlyTotalCalls * ((aiCloserPickup - currentPickup) / 100))
  );

  const carrierLabels: Record<CarrierType, string> = {
    airtel: 'Airtel',
    jio: 'Reliance Jio',
    vi: 'Vi (Vodafone Idea)',
    bsnl: 'BSNL',
  };

  const cadenceLabels: Record<CadenceType, string> = {
    burst: 'rapid burst (<15s)',
    steady: 'steady (30s–45s)',
    progressive: 'progressive (60s+)',
  };

  const whatsappMessage = encodeURIComponent(
    `Hello AI Closer, I ran the Truecaller Spam Risk Audit for our team of ${teamSize} telecallers using ${carrierLabels[carrier]} (${callsPerDay} calls/day, ${cadenceLabels[cadence]} cadence). Our spam score is ${spamScore}% (${riskLevel}). We want to fix our pickup rates with AI Closer SIM CRM at flat ₹399/user/month.`
  );
  const whatsappUrl = `https://wa.me/919589510954?text=${whatsappMessage}`;

  return (
    <div style={{ maxWidth: '1120px', margin: '0 auto', padding: '140px 20px 80px' }}>
      {/* Hero Header */}
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <div
          style={{
            display: 'inline-block',
            padding: '6px 16px',
            background: 'rgba(239, 68, 68, 0.1)',
            border: '1px solid rgba(239, 68, 68, 0.3)',
            borderRadius: '999px',
            color: '#ef4444',
            fontSize: '12px',
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: '16px',
          }}
        >
          FREE TELECALLING AUDIT TOOL (2026)
        </div>
        <h1
          style={{
            fontSize: 'clamp(32px, 5vw, 52px)',
            fontWeight: 800,
            color: '#f8fafc',
            margin: '0 0 16px 0',
            letterSpacing: '-0.03em',
            lineHeight: 1.15,
          }}
        >
          Truecaller Spam Score Checker &amp; Unlisting Tool (2026)
        </h1>
        <p
          style={{
            fontSize: '17px',
            color: '#94a3b8',
            maxWidth: '760px',
            margin: '0 auto',
            lineHeight: 1.6,
          }}
        >
          Audit your sales floor spam penalty, evaluate Airtel AI 120-call inspection and Jio burst triggers, and restore 85%+ call pickup rates with native SIM calling at flat ₹399/user/month.
        </p>
      </div>

      {/* Main Interactive Tool Grid */}
      <section
        aria-label="Spam Score Calculator"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '32px',
          marginBottom: '64px',
        }}
      >
        {/* Left Column: Interactive Controls */}
        <div
          style={{
            background: '#090d16',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '20px',
            padding: '32px',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2 style={{ fontSize: '19px', fontWeight: 700, color: '#f8fafc', margin: 0 }}>
              1. Telecalling Floor Parameters
            </h2>
            <span style={{ fontSize: '12px', color: '#ff6b2f', fontWeight: 600 }}>Real-Time Simulator</span>
          </div>

          {/* Telephony Architecture */}
          <div>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#cbd5e1', marginBottom: '8px' }}>
              Telephony Infrastructure
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              <button
                type="button"
                onClick={() => setTelephonyType('cloud_080')}
                style={{
                  padding: '12px',
                  borderRadius: '10px',
                  border: telephonyType === 'cloud_080' ? '2px solid #ef4444' : '1px solid rgba(255,255,255,0.1)',
                  background: telephonyType === 'cloud_080' ? 'rgba(239, 68, 68, 0.15)' : 'transparent',
                  color: '#f8fafc',
                  fontSize: '13px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  textAlign: 'left',
                }}
              >
                <div>Virtual 080 / Cloud PBX</div>
                <div style={{ fontSize: '11px', color: '#94a3b8', marginTop: '2px' }}>+55 Spam Risk Handicap</div>
              </button>
              <button
                type="button"
                onClick={() => setTelephonyType('mobile_sim')}
                style={{
                  padding: '12px',
                  borderRadius: '10px',
                  border: telephonyType === 'mobile_sim' ? '2px solid #22c55e' : '1px solid rgba(255,255,255,0.1)',
                  background: telephonyType === 'mobile_sim' ? 'rgba(34, 197, 94, 0.15)' : 'transparent',
                  color: '#f8fafc',
                  fontSize: '13px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  textAlign: 'left',
                }}
              >
                <div>Native 10-Digit SIM</div>
                <div style={{ fontSize: '11px', color: '#94a3b8', marginTop: '2px' }}>AI Closer Trusted Route</div>
              </button>
            </div>
          </div>

          {/* Carrier Selector */}
          <div>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#cbd5e1', marginBottom: '8px' }}>
              Primary SIM Telecom Operator
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}>
              {(['airtel', 'jio', 'vi', 'bsnl'] as CarrierType[]).map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setCarrier(c)}
                  style={{
                    padding: '10px 6px',
                    borderRadius: '8px',
                    border: carrier === c ? '2px solid #ff6b2f' : '1px solid rgba(255,255,255,0.1)',
                    background: carrier === c ? 'rgba(255, 107, 47, 0.15)' : 'transparent',
                    color: '#f8fafc',
                    fontSize: '12px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    textTransform: 'uppercase',
                  }}
                >
                  {c}
                </button>
              ))}
            </div>
            <div style={{ fontSize: '11px', color: '#94a3b8', marginTop: '6px' }}>
              {carrier === 'airtel' && 'Airtel enforces network-level AI spam filters at 120 calls/day.'}
              {carrier === 'jio' && 'Jio monitors short burst dialing frequency (<15s inter-call intervals).'}
              {carrier === 'vi' && 'Vi flags high outbound-to-inbound asymmetry ratios.'}
              {carrier === 'bsnl' && 'BSNL routes have higher manual user spam tagging probability.'}
            </div>
          </div>

          {/* Call Volume Tiers & Slider */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontSize: '13px', fontWeight: 600, color: '#cbd5e1' }}>Daily Dials per Rep</span>
              <span style={{ fontSize: '15px', fontWeight: 700, color: '#ff6b2f' }}>{callsPerDay} Calls / Day</span>
            </div>
            <div style={{ display: 'flex', gap: '6px', marginBottom: '10px' }}>
              {[50, 100, 200, 500].map((tier) => (
                <button
                  key={tier}
                  type="button"
                  onClick={() => setCallsPerDay(tier)}
                  style={{
                    flex: 1,
                    padding: '6px 4px',
                    fontSize: '11px',
                    fontWeight: 600,
                    borderRadius: '6px',
                    border: callsPerDay === tier ? '1px solid #ff6b2f' : '1px solid rgba(255,255,255,0.08)',
                    background: callsPerDay === tier ? 'rgba(255, 107, 47, 0.2)' : 'rgba(255,255,255,0.03)',
                    color: '#f8fafc',
                    cursor: 'pointer',
                  }}
                >
                  {tier === 500 ? '500+' : `${tier}/day`}
                </button>
              ))}
            </div>
            <input
              type="range"
              min="40"
              max="500"
              step="10"
              value={callsPerDay}
              onChange={(e) => setCallsPerDay(Number(e.target.value))}
              aria-label="Daily Dials per Rep"
              style={{ width: '100%', accentColor: '#ff6b2f' }}
            />
          </div>

          {/* Pacing Cadence */}
          <div>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#cbd5e1', marginBottom: '8px' }}>
              Dialing Cadence &amp; Pacing
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
              <button
                type="button"
                onClick={() => setCadence('burst')}
                style={{
                  padding: '10px 6px',
                  borderRadius: '8px',
                  border: cadence === 'burst' ? '2px solid #ef4444' : '1px solid rgba(255,255,255,0.1)',
                  background: cadence === 'burst' ? 'rgba(239, 68, 68, 0.15)' : 'transparent',
                  color: '#f8fafc',
                  fontSize: '11px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  textAlign: 'center',
                }}
              >
                <div>Rapid Burst</div>
                <div style={{ fontSize: '10px', color: '#94a3b8' }}>&lt;15s gap</div>
              </button>
              <button
                type="button"
                onClick={() => setCadence('steady')}
                style={{
                  padding: '10px 6px',
                  borderRadius: '8px',
                  border: cadence === 'steady' ? '2px solid #f59e0b' : '1px solid rgba(255,255,255,0.1)',
                  background: cadence === 'steady' ? 'rgba(245, 158, 11, 0.15)' : 'transparent',
                  color: '#f8fafc',
                  fontSize: '11px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  textAlign: 'center',
                }}
              >
                <div>Steady Paced</div>
                <div style={{ fontSize: '10px', color: '#94a3b8' }}>30s cadence</div>
              </button>
              <button
                type="button"
                onClick={() => setCadence('progressive')}
                style={{
                  padding: '10px 6px',
                  borderRadius: '8px',
                  border: cadence === 'progressive' ? '2px solid #22c55e' : '1px solid rgba(255,255,255,0.1)',
                  background: cadence === 'progressive' ? 'rgba(34, 197, 94, 0.15)' : 'transparent',
                  color: '#f8fafc',
                  fontSize: '11px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  textAlign: 'center',
                }}
              >
                <div>Progressive</div>
                <div style={{ fontSize: '10px', color: '#94a3b8' }}>60s+ human</div>
              </button>
            </div>
          </div>

          {/* WhatsApp Warmup Toggle */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '14px',
              background: hasWhatsAppWarmup ? 'rgba(34, 197, 94, 0.08)' : 'rgba(255,255,255,0.03)',
              borderRadius: '10px',
              border: hasWhatsAppWarmup ? '1px solid rgba(34, 197, 94, 0.3)' : '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <div>
              <div style={{ fontSize: '13px', fontWeight: 700, color: '#f8fafc' }}>
                Pre-Call WhatsApp Warmup
              </div>
              <div style={{ fontSize: '11px', color: '#94a3b8' }}>
                &lt;60s automated intro before dial (-15% spam risk bonus)
              </div>
            </div>
            <input
              type="checkbox"
              checked={hasWhatsAppWarmup}
              onChange={(e) => setHasWhatsAppWarmup(e.target.checked)}
              aria-label="Toggle Pre-Call WhatsApp Warmup"
              style={{ width: '20px', height: '20px', accentColor: '#22c55e', cursor: 'pointer' }}
            />
          </div>

          {/* Team Size Slider */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ fontSize: '13px', fontWeight: 600, color: '#cbd5e1' }}>Active Telecallers</span>
              <span style={{ fontSize: '15px', fontWeight: 700, color: '#ff6b2f' }}>{teamSize} Reps</span>
            </div>
            <input
              type="range"
              min="1"
              max="50"
              value={teamSize}
              onChange={(e) => setTeamSize(Number(e.target.value))}
              aria-label="Active Telecallers"
              style={{ width: '100%', accentColor: '#ff6b2f' }}
            />
          </div>

          {/* Current Pickup Rate */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ fontSize: '13px', fontWeight: 600, color: '#cbd5e1' }}>Current Call Pickup (CTC %)</span>
              <span style={{ fontSize: '15px', fontWeight: 700, color: currentPickup < 30 ? '#ef4444' : '#f59e0b' }}>
                {currentPickup}%
              </span>
            </div>
            <input
              type="range"
              min="10"
              max="80"
              step="5"
              value={currentPickup}
              onChange={(e) => setCurrentPickup(Number(e.target.value))}
              aria-label="Current Call Pickup Rate"
              style={{ width: '100%', accentColor: '#ff6b2f' }}
            />
          </div>
        </div>

        {/* Right Column: Live Results & Telemetry */}
        <div
          style={{
            background: '#090d16',
            border: `1px solid ${riskBorder}`,
            borderRadius: '20px',
            padding: '32px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: `0 20px 50px ${riskBg}`,
          }}
        >
          <div>
            {/* Top Risk Badge */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <span style={{ fontSize: '12px', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase' }}>
                Estimated Spam Score
              </span>
              <div
                style={{
                  padding: '6px 14px',
                  borderRadius: '999px',
                  background: riskBg,
                  border: `1px solid ${riskBorder}`,
                  color: riskColor,
                  fontWeight: 800,
                  fontSize: '12px',
                  letterSpacing: '0.05em',
                }}
              >
                {riskLevel}
              </div>
            </div>

            {/* Score Visual Gauge */}
            <div style={{ textAlign: 'center', margin: '24px 0' }}>
              <div style={{ fontSize: 'clamp(54px, 8vw, 84px)', fontWeight: 900, color: riskColor, lineHeight: 1 }}>
                {spamScore}<span style={{ fontSize: '32px', color: '#64748b' }}>%</span>
              </div>
              <div style={{ fontSize: '14px', color: '#cbd5e1', marginTop: '10px' }}>
                {spamScore >= 75
                  ? 'Numbers are actively marked as telemarketing spam on Truecaller.'
                  : spamScore >= 55
                  ? 'Elevated risk of automated operator and user spam flagging.'
                  : spamScore >= 35
                  ? 'Moderate risk — pacing and WhatsApp warmup will preserve reputation.'
                  : 'Healthy reputation with minimal telecom filter penalties.'}
              </div>
            </div>

            {/* Carrier Filter Alerts */}
            {isAirtel120Triggered && (
              <div
                style={{
                  background: 'rgba(239, 68, 68, 0.1)',
                  border: '1px solid rgba(239, 68, 68, 0.3)',
                  borderRadius: '10px',
                  padding: '12px',
                  marginBottom: '16px',
                  fontSize: '12px',
                  color: '#fca5a5',
                  lineHeight: 1.5,
                }}
              >
                <strong>⚠️ Airtel AI Spam Filter Triggered:</strong> Dials exceed Airtel&apos;s 120 calls/day threshold. Network-level inspection tags numbers as telemarketing spam at the telecom switch.
              </div>
            )}

            {isJioBurstTriggered && (
              <div
                style={{
                  background: 'rgba(249, 115, 22, 0.1)',
                  border: '1px solid rgba(249, 115, 22, 0.3)',
                  borderRadius: '10px',
                  padding: '12px',
                  marginBottom: '16px',
                  fontSize: '12px',
                  color: '#fdba74',
                  lineHeight: 1.5,
                }}
              >
                <strong>⚠️ Jio Rapid Burst Flag:</strong> Inter-call gaps under 15 seconds trigger Jio&apos;s burst heuristic. Spaced human pacing (&gt;30s) is required to avoid operator spam blacklists.
              </div>
            )}

            {telephonyType === 'cloud_080' && (
              <div
                style={{
                  background: 'rgba(239, 68, 68, 0.08)',
                  border: '1px solid rgba(239, 68, 68, 0.25)',
                  borderRadius: '10px',
                  padding: '12px',
                  marginBottom: '16px',
                  fontSize: '12px',
                  color: '#fca5a5',
                  lineHeight: 1.5,
                }}
              >
                <strong>⚠️ Virtual 080 Handicap (+55 pts):</strong> Landline &amp; cloud IVR numbers suffer 70%+ rejection across India. Mobile callers instinctively ignore unknown 080 prefixes.
              </div>
            )}

            {hasWhatsAppWarmup && (
              <div
                style={{
                  background: 'rgba(34, 197, 94, 0.08)',
                  border: '1px solid rgba(34, 197, 94, 0.25)',
                  borderRadius: '10px',
                  padding: '12px',
                  marginBottom: '16px',
                  fontSize: '12px',
                  color: '#86efac',
                  lineHeight: 1.5,
                }}
              >
                <strong>✅ WhatsApp Warmup Active (-15% Bonus):</strong> Prospects receive personalized WhatsApp greetings before the call, lifting pickup rates to 85%+.
              </div>
            )}

            {/* Telemetry Metrics Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '20px' }}>
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '16px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 600 }}>Unanswered Calls</div>
                <div style={{ fontSize: '20px', fontWeight: 800, color: '#ef4444', marginTop: '4px' }}>
                  {missedCalls.toLocaleString()} <span style={{ fontSize: '12px', fontWeight: 400 }}>/mo</span>
                </div>
              </div>

              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '16px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 600 }}>Wasted Rep Hours</div>
                <div style={{ fontSize: '20px', fontWeight: 800, color: '#f59e0b', marginTop: '4px' }}>
                  {lostHours.toLocaleString()} hrs <span style={{ fontSize: '12px', fontWeight: 400 }}>/mo</span>
                </div>
              </div>
            </div>

            {/* AI Closer Recovery Badge */}
            <div
              style={{
                background: 'rgba(34, 197, 94, 0.08)',
                border: '1px solid rgba(34, 197, 94, 0.25)',
                borderRadius: '12px',
                padding: '16px',
                marginBottom: '24px',
              }}
            >
              <div style={{ fontSize: '12px', fontWeight: 700, color: '#22c55e', textTransform: 'uppercase' }}>
                AI Closer SIM Recovery Potential
              </div>
              <div style={{ fontSize: '14px', color: '#f8fafc', marginTop: '4px', lineHeight: 1.5 }}>
                Switching to AI Closer SIM calling (85% connect rate) will recover{' '}
                <strong style={{ color: '#22c55e' }}>+{recoverableMonthlyCalls.toLocaleString()} live conversations</strong> every month for your {teamSize} telecallers at flat ₹399/user/month!
              </div>
            </div>
          </div>

          {/* Primary Lead Trigger Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              padding: '16px 24px',
              background: '#ff6b2f',
              color: '#ffffff',
              borderRadius: '12px',
              fontSize: '15px',
              fontWeight: 800,
              textDecoration: 'none',
              textAlign: 'center',
              boxShadow: '0 8px 24px rgba(255, 107, 47, 0.35)',
              transition: 'transform 0.15s ease',
            }}
          >
            <span>Fix Pickup Rates on WhatsApp (₹399/mo)</span>
            <span>&rarr;</span>
          </a>
        </div>
      </section>

      {/* Carrier Spam Filter Heuristics Deep-Dive */}
      <section style={{ marginBottom: '64px' }}>
        <h2 style={{ fontSize: '26px', fontWeight: 800, color: '#f8fafc', marginBottom: '20px' }}>
          2. Carrier Spam Filter Analysis: Airtel AI &amp; Jio Burst Heuristics
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
          <div style={{ background: '#090d16', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '14px', padding: '24px' }}>
            <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#ef4444', marginBottom: '10px' }}>
              Airtel AI Spam Filter (120 Calls Cutoff)
            </h3>
            <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>
              Bharti Airtel deploys deep telecom machine learning models at the network switch level. When a single SIM initiates over 120 outgoing calls in a 24-hour cycle with low reciprocal incoming duration, the number is categorized as an unregistered telemarketer, pushing automated spam alerts to called devices.
            </p>
          </div>

          <div style={{ background: '#090d16', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '14px', padding: '24px' }}>
            <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#f97316', marginBottom: '10px' }}>
              Jio Burst Pacing Heuristic (&lt;15s Penalty)
            </h3>
            <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>
              Reliance Jio tracks the delta between consecutive call termination and initiation timestamps. Auto-dialers making calls with inter-call spacing under 15 seconds trigger telecom robotic dialing signatures. Progressive human pacing (30s to 60s) completely circumvents this heuristic.
            </p>
          </div>

          <div style={{ background: '#090d16', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '14px', padding: '24px' }}>
            <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#f59e0b', marginBottom: '10px' }}>
              Virtual 080 Cloud Telephony Failure
            </h3>
            <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>
              Virtual numbers from cloud PBX providers (080, 011, 022) carry an automatic 55-point handicap on Truecaller. Prospects instantly identify landline prefixes as debt collection, loan pitches, or telemarketing, resulting in dismal 12% to 25% connection rates.
            </p>
          </div>

          <div style={{ background: '#090d16', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '14px', padding: '24px' }}>
            <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#22c55e', marginBottom: '10px' }}>
              AI Closer SIM Architecture (85% Connects)
            </h3>
            <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>
              AI Closer uses standard 10-digit mobile SIMs paired with automated &lt;60s WhatsApp pre-call introductions. Prospects recognize the caller name and intent before the phone rings. All calls are recorded silently with zero Google Dialer announcements at flat ₹399/user/month.
            </p>
          </div>
        </div>
      </section>

      {/* Official 4-Step Unlisting Guide */}
      <section style={{ background: '#090d16', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '20px', padding: '40px', marginBottom: '64px' }}>
        <h2 style={{ fontSize: '26px', fontWeight: 800, color: '#f8fafc', marginBottom: '24px' }}>
          3. Official 4-Step Truecaller Spam Unlisting &amp; Prevention Playbook (2026)
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
          <div style={{ background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)' }}>
            <div style={{ fontSize: '24px', fontWeight: 900, color: '#ff6b2f', marginBottom: '8px' }}>01</div>
            <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#f8fafc', marginBottom: '8px' }}>Delist via Unlist Portal</h3>
            <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.6, margin: '0 0 12px 0' }}>
              Submit your 10-digit mobile number with +91 country code directly on Truecaller&apos;s public unlisting portal. Public caches clear within 24 hours.
            </p>
            <a
              href="https://www.truecaller.com/unlisting"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: '12px', color: '#ff6b2f', fontWeight: 700, textDecoration: 'none' }}
            >
              Open Truecaller Unlisting Portal &rarr;
            </a>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)' }}>
            <div style={{ fontSize: '24px', fontWeight: 900, color: '#ff6b2f', marginBottom: '8px' }}>02</div>
            <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#f8fafc', marginBottom: '8px' }}>Verify Business Profile</h3>
            <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>
              Register your organization on Truecaller for Business to obtain a verified green checkmark badge and brand logo. Verified caller IDs reduce prospect spam reports by up to 90%.
            </p>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)' }}>
            <div style={{ fontSize: '24px', fontWeight: 900, color: '#ff6b2f', marginBottom: '8px' }}>03</div>
            <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#f8fafc', marginBottom: '8px' }}>&lt;60s WhatsApp Warmup</h3>
            <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>
              Trigger an automated WhatsApp greeting introducing your sales rep by name immediately when a lead fills a form. When the rep dials 30 seconds later, the lead recognizes who is calling.
            </p>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)' }}>
            <div style={{ fontSize: '24px', fontWeight: 900, color: '#ff6b2f', marginBottom: '8px' }}>04</div>
            <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#f8fafc', marginBottom: '8px' }}>Rotate SIMs on AI Closer</h3>
            <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>
              Cap daily dials at 120 calls per SIM and maintain 30s–60s progressive pacing with AI Closer SIM CRM. Enjoy 85%+ pickup rates at flat ₹399/user/month.
            </p>
          </div>
        </div>
      </section>

      {/* Telephony Architecture Comparison */}
      <section style={{ marginBottom: '64px' }}>
        <h2 style={{ fontSize: '26px', fontWeight: 800, color: '#f8fafc', marginBottom: '20px' }}>
          4. Telephony Architecture Comparison: Cloud 080 vs AI Closer SIM CRM
        </h2>
        <div style={{ overflowX: 'auto', background: '#090d16', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.02)' }}>
                <th style={{ padding: '16px 20px', fontSize: '13px', color: '#94a3b8', textTransform: 'uppercase' }}>Feature</th>
                <th style={{ padding: '16px 20px', fontSize: '13px', color: '#ef4444', textTransform: 'uppercase' }}>Cloud 080 Telephony</th>
                <th style={{ padding: '16px 20px', fontSize: '13px', color: '#f59e0b', textTransform: 'uppercase' }}>Unmanaged Personal SIM</th>
                <th style={{ padding: '16px 20px', fontSize: '13px', color: '#22c55e', textTransform: 'uppercase' }}>AI Closer SIM CRM</th>
              </tr>
            </thead>
            <tbody style={{ fontSize: '13px', color: '#cbd5e1' }}>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <td style={{ padding: '14px 20px', fontWeight: 600, color: '#f8fafc' }}>Average Pickup Rate</td>
                <td style={{ padding: '14px 20px', color: '#ef4444' }}>12% – 28%</td>
                <td style={{ padding: '14px 20px', color: '#f59e0b' }}>35% – 50%</td>
                <td style={{ padding: '14px 20px', color: '#22c55e', fontWeight: 700 }}>85%+ Guaranteed</td>
              </tr>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <td style={{ padding: '14px 20px', fontWeight: 600, color: '#f8fafc' }}>Truecaller Spam Handicap</td>
                <td style={{ padding: '14px 20px', color: '#ef4444' }}>+55 (Critical Risk)</td>
                <td style={{ padding: '14px 20px' }}>Moderate (Carrier AI flags)</td>
                <td style={{ padding: '14px 20px', color: '#22c55e', fontWeight: 700 }}>Low Risk (Pacing &amp; Warmup)</td>
              </tr>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <td style={{ padding: '14px 20px', fontWeight: 600, color: '#f8fafc' }}>Per-Minute Call Pulse Cost</td>
                <td style={{ padding: '14px 20px', color: '#ef4444' }}>₹0.80 – ₹1.50 / min</td>
                <td style={{ padding: '14px 20px' }}>Unlimited (Operator Pack)</td>
                <td style={{ padding: '14px 20px', color: '#22c55e', fontWeight: 700 }}>₹0 (Unlimited SIM Calling)</td>
              </tr>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <td style={{ padding: '14px 20px', fontWeight: 600, color: '#f8fafc' }}>Silent Call Recording</td>
                <td style={{ padding: '14px 20px' }}>Server-side only</td>
                <td style={{ padding: '14px 20px', color: '#ef4444' }}>Google Dialer announcement warning</td>
                <td style={{ padding: '14px 20px', color: '#22c55e', fontWeight: 700 }}>100% Silent Auto Recording</td>
              </tr>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <td style={{ padding: '14px 20px', fontWeight: 600, color: '#f8fafc' }}>Monthly Software Pricing</td>
                <td style={{ padding: '14px 20px', color: '#ef4444' }}>₹1,200 – ₹2,500 / seat</td>
                <td style={{ padding: '14px 20px' }}>₹0 (No centralized CRM)</td>
                <td style={{ padding: '14px 20px', color: '#22c55e', fontWeight: 700 }}>Flat ₹399 / user / month</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Dashboard Visual Image */}
        <div style={{ marginTop: '32px', textAlign: 'center' }}>
          <img
            src="/assets/reference/hero-dashboard.png"
            alt="AI Closer SIM CRM Telecalling Analytics and Pickup Rate Dashboard"
            width={900}
            height={460}
            style={{
              maxWidth: '100%',
              height: 'auto',
              borderRadius: '16px',
              border: '1px solid rgba(255,255,255,0.1)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
            }}
          />
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section style={{ marginBottom: '64px' }}>
        <h2 style={{ fontSize: '26px', fontWeight: 800, color: '#f8fafc', marginBottom: '24px' }}>
          5. Frequently Asked Questions (FAQ)
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
          <div style={{ background: '#090d16', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '24px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#f8fafc', marginBottom: '8px' }}>
              Why are my sales team&apos;s mobile numbers showing as spam on Truecaller?
            </h3>
            <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>
              Truecaller marks numbers as spam when they exceed daily dialing thresholds (over 120 calls/day on Airtel or Jio), have short call durations under 15 seconds, or receive prospect spam reports. Virtual 080 cloud numbers suffer a 70%+ spam rate compared to standard mobile SIM cards.
            </p>
          </div>

          <div style={{ background: '#090d16', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '24px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#f8fafc', marginBottom: '8px' }}>
              How do I remove our sales number from Truecaller spam?
            </h3>
            <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>
              Follow our 4-step unlisting playbook: 1) Submit delisting request at truecaller.com/unlisting. 2) Allow 24 hours for Truecaller public search caches to clear. 3) Verify your business profile via Truecaller for Business to obtain a verified green badge. 4) Switch to AI Closer SIM CRM to cap dials per SIM and send pre-call WhatsApp greetings.
            </p>
          </div>

          <div style={{ background: '#090d16', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '24px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#f8fafc', marginBottom: '8px' }}>
              How does the Airtel AI spam filter affect telecalling teams?
            </h3>
            <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>
              Airtel active AI spam filter inspects network call velocity in real time. Outbound SIMs exceeding 120 calls/day without proportional inbound engagement are flagged at the carrier switch level, resulting in automatic spam tags on caller screens.
            </p>
          </div>

          <div style={{ background: '#090d16', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '24px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#f8fafc', marginBottom: '8px' }}>
              What is the Jio burst dialing heuristic penalty?
            </h3>
            <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>
              Jio network algorithms flag numbers that dial prospects in rapid succession with inter-call spacing under 15 seconds. Human-paced cadences (30s to 60s+ between calls) keep numbers below automated telecom burst triggers.
            </p>
          </div>

          <div style={{ background: '#090d16', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '24px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#f8fafc', marginBottom: '8px' }}>
              How does AI Closer guarantee 85%+ call pickup rates?
            </h3>
            <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>
              AI Closer routes outbound calls through native 10-digit Indian mobile SIM cards (Airtel, Jio, Vi) rather than virtual 080 landline numbers. Combined with automated &lt;60s WhatsApp pre-call greetings that introduce the agent by name, prospects recognize who is calling and answer readily.
            </p>
          </div>

          <div style={{ background: '#090d16', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '24px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#f8fafc', marginBottom: '8px' }}>
              What is the pricing for AI Closer SIM CRM?
            </h3>
            <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>
              AI Closer is available at a flat rate of ₹399 per user per month with zero hidden fees, zero cloud telephony pulse charges, and unlimited automatic SIM call recording.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom Conversion CTA Banner */}
      <div
        style={{
          background: 'linear-gradient(135deg, #111827 0%, #1f2937 100%)',
          border: '1px solid rgba(255,107,47,0.3)',
          borderRadius: '20px',
          padding: '48px 32px',
          textAlign: 'center',
        }}
      >
        <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#f8fafc', margin: '0 0 12px 0' }}>
          Ready to Restore 85%+ Call Pickup Rates for Your Sales Team?
        </h2>
        <p style={{ fontSize: '16px', color: '#d1d5db', maxWidth: '680px', margin: '0 auto 28px auto', lineHeight: 1.6 }}>
          Join leading Indian telecalling teams achieving 85%+ connect rates, silent automated call recording without Google Dialer warnings, and centralized WhatsApp CRM tracking at flat <strong>₹399/user/month</strong>.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '14px 28px',
              background: '#ff6b2f',
              color: '#ffffff',
              borderRadius: '10px',
              fontWeight: 700,
              fontSize: '15px',
              textDecoration: 'none',
              boxShadow: '0 6px 20px rgba(255, 107, 47, 0.35)',
            }}
          >
            <span>Book WhatsApp Demo</span>
            <span>&rarr;</span>
          </a>
          <Link
            href="/pricing"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '14px 28px',
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.15)',
              color: '#f8fafc',
              borderRadius: '10px',
              fontWeight: 700,
              fontSize: '15px',
              textDecoration: 'none',
            }}
          >
            See Pricing (Flat ₹399/mo)
          </Link>
        </div>
      </div>
    </div>
  );
}
