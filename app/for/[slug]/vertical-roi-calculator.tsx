'use client';

import React, { useState } from 'react';
import { TelephonySavingsCalculator } from '../../blog/[slug]/blog-interactive-widgets';

const WHATSAPP_NUMBER = '919589510954';

type VerticalRoiCalculatorProps = {
  slug: string;
};

export function VerticalRoiCalculator({ slug }: VerticalRoiCalculatorProps) {
  // If not one of the 4 specialized verticals, fall back to the generic telephony savings calculator
  if (!['real-estate-crm', 'loan-dsa-calling-crm', 'edtech-admissions-dialer', 'insurance-posp-crm'].includes(slug)) {
    return <TelephonySavingsCalculator />;
  }

  if (slug === 'real-estate-crm') {
    return <RealEstateRoiCalculator />;
  }
  if (slug === 'loan-dsa-calling-crm') {
    return <LoanDsaRoiCalculator />;
  }
  if (slug === 'edtech-admissions-dialer') {
    return <EdtechRoiCalculator />;
  }
  if (slug === 'insurance-posp-crm') {
    return <InsurancePospRoiCalculator />;
  }

  return <TelephonySavingsCalculator />;
}

// -------------------------------------------------------------
// 1. Real Estate Vertical Calculator
// -------------------------------------------------------------
function RealEstateRoiCalculator() {
  const [agents, setAgents] = useState(5);
  const [monthlyLeads, setMonthlyLeads] = useState(500);
  const [avgBrokerage, setAvgBrokerage] = useState(200000);

  // Unit Economic Calculations
  const connectedVoip = Math.round(monthlyLeads * 0.28);
  const connectedSim = Math.round(monthlyLeads * 0.92);
  const extraConnects = connectedSim - connectedVoip;
  const extraDeals = Math.max(1, Math.round(extraConnects * 0.015)); // 1.5% closing conversion on extra connects
  const extraRevenue = extraDeals * avgBrokerage;
  const telephonySavings = agents * (2200 - 399);
  const aiCloserCost = agents * 399;
  const netMonthlyProfit = extraRevenue + telephonySavings;
  const roiMultiplier = Math.max(1, Math.round(netMonthlyProfit / aiCloserCost));

  const fmt = (n: number) => new Intl.NumberFormat('en-IN').format(n);

  const whatsappMessage = encodeURIComponent(
    `Hello AI Closer, we have ${agents} real estate agents handling ~${monthlyLeads} property leads/month. Based on the Real Estate ROI calculator, our projected gain is +₹${fmt(netMonthlyProfit)}/month (${roiMultiplier}x ROI). Can we schedule a demo?`
  );
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

  return (
    <div style={calcContainerStyle}>
      <div style={calcBadgeStyle}>TAILORED REAL ESTATE UNIT ECONOMICS</div>
      <h3 style={calcHeadingStyle}>Real Estate Site Visit & Brokerage ROI Calculator</h3>
      <p style={calcSubtitleStyle}>
        Compare 28% virtual 080 VoIP pickup rates vs 92% native SIM pickup. Calculate the additional token bookings and monthly brokerage unlocked by sub-60s response times.
      </p>

      {/* Sliders Grid */}
      <div style={slidersGridStyle}>
        {/* Slider 1: Agents */}
        <div style={sliderCardStyle}>
          <div style={sliderHeaderStyle}>
            <span style={sliderLabelStyle}>Sales Agents / Telecallers:</span>
            <span style={sliderValueStyle}>{agents} reps</span>
          </div>
          <input
            type="range"
            min={1}
            max={50}
            value={agents}
            onChange={(e) => setAgents(parseInt(e.target.value, 10))}
            style={sliderInputStyle}
          />
          <div style={sliderRangeInfoStyle}><span>1 rep</span><span>50 reps</span></div>
        </div>

        {/* Slider 2: Monthly Leads */}
        <div style={sliderCardStyle}>
          <div style={sliderHeaderStyle}>
            <span style={sliderLabelStyle}>Monthly Inbound Property Leads:</span>
            <span style={sliderValueStyle}>{fmt(monthlyLeads)} leads</span>
          </div>
          <input
            type="range"
            min={100}
            max={5000}
            step={50}
            value={monthlyLeads}
            onChange={(e) => setMonthlyLeads(parseInt(e.target.value, 10))}
            style={sliderInputStyle}
          />
          <div style={sliderRangeInfoStyle}><span>100 leads</span><span>5,000 leads</span></div>
        </div>

        {/* Slider 3: Avg Brokerage */}
        <div style={sliderCardStyle}>
          <div style={sliderHeaderStyle}>
            <span style={sliderLabelStyle}>Avg Brokerage Commission per Deal:</span>
            <span style={sliderValueStyle}>₹{fmt(avgBrokerage)}</span>
          </div>
          <input
            type="range"
            min={50000}
            max={1000000}
            step={25000}
            value={avgBrokerage}
            onChange={(e) => setAvgBrokerage(parseInt(e.target.value, 10))}
            style={sliderInputStyle}
          />
          <div style={sliderRangeInfoStyle}><span>₹50,000</span><span>₹10,00,000</span></div>
        </div>
      </div>

      {/* Metrics Results */}
      <div style={metricsGridStyle}>
        <div style={metricCardStyle}>
          <div style={metricLabelStyle}>ADDITIONAL CONNECTED BUYERS</div>
          <div style={{ ...metricValStyle, color: '#38bdf8' }}>+{fmt(extraConnects)} / mo</div>
          <div style={metricDescStyle}>92% SIM connect vs 28% VoIP pickup</div>
        </div>
        <div style={metricCardStyle}>
          <div style={metricLabelStyle}>EXTRA PROPERTY DEALS CLOSED</div>
          <div style={{ ...metricValStyle, color: '#22c55e' }}>+{extraDeals} deals</div>
          <div style={metricDescStyle}>At conservative 1.5% site-visit closing rate</div>
        </div>
        <div style={metricCardStyle}>
          <div style={metricLabelStyle}>TELEPHONY BILL SAVINGS</div>
          <div style={{ ...metricValStyle, color: '#f59e0b' }}>₹{fmt(telephonySavings)} / mo</div>
          <div style={metricDescStyle}>Saving ~₹1,801/seat vs cloud telephony</div>
        </div>
        <div style={metricCardStyle}>
          <div style={metricLabelStyle}>AI CLOSER SOFTWARE COST</div>
          <div style={{ ...metricValStyle, color: '#f8fafc' }}>₹{fmt(aiCloserCost)} / mo</div>
          <div style={metricDescStyle}>Strict flat ₹399/user/month (0% pulse fees)</div>
        </div>
      </div>

      {/* Net Gain Highlight Banner */}
      <div style={highlightBannerStyle}>
        <div>
          <div style={{ fontSize: '13px', fontWeight: 700, color: '#22c55e', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '4px' }}>
            PROJECTED NET MONTHLY BENEFIT
          </div>
          <div style={{ fontSize: '32px', fontWeight: 900, color: '#ffffff' }}>
            +₹{fmt(netMonthlyProfit)} <span style={{ fontSize: '16px', color: '#94a3b8', fontWeight: 600 }}>/ month</span>
          </div>
          <div style={{ fontSize: '13px', color: '#cbd5e1', marginTop: '4px' }}>
            Net ROI: <strong>{roiMultiplier}x return</strong> on AI Closer subscription
          </div>
        </div>
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" style={ctaButtonStyle}>
          Claim Real Estate ROI on WhatsApp →
        </a>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// 2. Loan DSA Vertical Calculator
// -------------------------------------------------------------
function LoanDsaRoiCalculator() {
  const [agents, setAgents] = useState(8);
  const [dailyDials, setDailyDials] = useState(100);
  const [avgLoanSize, setAvgLoanSize] = useState(500000);
  const [commissionPct, setCommissionPct] = useState(1.5);

  const monthlyDials = agents * dailyDials * 25;
  const extraConnects = Math.round(monthlyDials * (0.90 - 0.22));
  const extraFiles = Math.max(1, Math.round(extraConnects * 0.008)); // 0.8% qualified file conversion
  const extraCommission = Math.round(extraFiles * avgLoanSize * (commissionPct / 100));
  const telephonySavings = agents * (2200 - 399);
  const aiCloserCost = agents * 399;
  const netGain = extraCommission + telephonySavings;
  const roiMultiplier = Math.max(1, Math.round(netGain / aiCloserCost));

  const fmt = (n: number) => new Intl.NumberFormat('en-IN').format(n);

  const whatsappMessage = encodeURIComponent(
    `Hello AI Closer, our loan DSA team has ${agents} telecallers doing ~${dailyDials} dials/day. With AI Closer SIM CRM, our projected payout increase is +₹${fmt(netGain)}/month (${roiMultiplier}x ROI). Can we test this with a demo?`
  );
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

  return (
    <div style={calcContainerStyle}>
      <div style={calcBadgeStyle}>TAILORED LOAN DSA UNIT ECONOMICS</div>
      <h3 style={calcHeadingStyle}>Loan DSA File Disbursal & Commission ROI Calculator</h3>
      <p style={calcSubtitleStyle}>
        See how 90% GSM SIM connect rates and automated WhatsApp KYC document collection translate into approved loan files and monthly DSA commission payout.
      </p>

      {/* Sliders Grid */}
      <div style={slidersGridStyle}>
        <div style={sliderCardStyle}>
          <div style={sliderHeaderStyle}>
            <span style={sliderLabelStyle}>Telecallers / Calling Reps:</span>
            <span style={sliderValueStyle}>{agents} callers</span>
          </div>
          <input
            type="range"
            min={1}
            max={50}
            value={agents}
            onChange={(e) => setAgents(parseInt(e.target.value, 10))}
            style={sliderInputStyle}
          />
          <div style={sliderRangeInfoStyle}><span>1 caller</span><span>50 callers</span></div>
        </div>

        <div style={sliderCardStyle}>
          <div style={sliderHeaderStyle}>
            <span style={sliderLabelStyle}>Daily Outbound Dials per Rep:</span>
            <span style={sliderValueStyle}>{dailyDials} dials/day</span>
          </div>
          <input
            type="range"
            min={50}
            max={200}
            step={10}
            value={dailyDials}
            onChange={(e) => setDailyDials(parseInt(e.target.value, 10))}
            style={sliderInputStyle}
          />
          <div style={sliderRangeInfoStyle}><span>50 dials</span><span>200 dials</span></div>
        </div>

        <div style={sliderCardStyle}>
          <div style={sliderHeaderStyle}>
            <span style={sliderLabelStyle}>Avg Disbursed Loan Ticket:</span>
            <span style={sliderValueStyle}>₹{fmt(avgLoanSize)}</span>
          </div>
          <input
            type="range"
            min={100000}
            max={2500000}
            step={50000}
            value={avgLoanSize}
            onChange={(e) => setAvgLoanSize(parseInt(e.target.value, 10))}
            style={sliderInputStyle}
          />
          <div style={sliderRangeInfoStyle}><span>₹1 Lakh</span><span>₹25 Lakh</span></div>
        </div>

        <div style={sliderCardStyle}>
          <div style={sliderHeaderStyle}>
            <span style={sliderLabelStyle}>DSA Payout Commission %:</span>
            <span style={sliderValueStyle}>{commissionPct.toFixed(1)}%</span>
          </div>
          <input
            type="range"
            min={0.5}
            max={3.0}
            step={0.1}
            value={commissionPct}
            onChange={(e) => setCommissionPct(parseFloat(e.target.value))}
            style={sliderInputStyle}
          />
          <div style={sliderRangeInfoStyle}><span>0.5%</span><span>3.0%</span></div>
        </div>
      </div>

      {/* Metrics Results */}
      <div style={metricsGridStyle}>
        <div style={metricCardStyle}>
          <div style={metricLabelStyle}>ADDITIONAL BORROWERS REACHED</div>
          <div style={{ ...metricValStyle, color: '#38bdf8' }}>+{fmt(extraConnects)} / mo</div>
          <div style={metricDescStyle}>90% SIM pickup vs 22% virtual dialer pickup</div>
        </div>
        <div style={metricCardStyle}>
          <div style={metricLabelStyle}>EXTRA LOAN FILES DISBURSED</div>
          <div style={{ ...metricValStyle, color: '#22c55e' }}>+{extraFiles} files / mo</div>
          <div style={metricDescStyle}>From faster KYC WhatsApp submissions</div>
        </div>
        <div style={metricCardStyle}>
          <div style={metricLabelStyle}>ADDITIONAL DSA COMMISSION</div>
          <div style={{ ...metricValStyle, color: '#f59e0b' }}>+₹{fmt(extraCommission)}</div>
          <div style={metricDescStyle}>At {commissionPct}% commission payout</div>
        </div>
        <div style={metricCardStyle}>
          <div style={metricLabelStyle}>AI CLOSER SOFTWARE COST</div>
          <div style={{ ...metricValStyle, color: '#f8fafc' }}>₹{fmt(aiCloserCost)} / mo</div>
          <div style={metricDescStyle}>Flat ₹399/user/month (zero pulse bills)</div>
        </div>
      </div>

      {/* Highlight Banner */}
      <div style={highlightBannerStyle}>
        <div>
          <div style={{ fontSize: '13px', fontWeight: 700, color: '#22c55e', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '4px' }}>
            PROJECTED NET MONTHLY COMMISSION GAIN
          </div>
          <div style={{ fontSize: '32px', fontWeight: 900, color: '#ffffff' }}>
            +₹{fmt(netGain)} <span style={{ fontSize: '16px', color: '#94a3b8', fontWeight: 600 }}>/ month</span>
          </div>
          <div style={{ fontSize: '13px', color: '#cbd5e1', marginTop: '4px' }}>
            Net ROI: <strong>{roiMultiplier}x return</strong> on AI Closer investment
          </div>
        </div>
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" style={ctaButtonStyle}>
          Claim DSA Commission ROI on WhatsApp →
        </a>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// 3. EdTech Admissions Vertical Calculator
// -------------------------------------------------------------
function EdtechRoiCalculator() {
  const [counselors, setCounselors] = useState(6);
  const [inboundLeads, setInboundLeads] = useState(1000);
  const [avgCourseFee, setAvgCourseFee] = useState(50000);

  const extraContacted = Math.round(inboundLeads * (0.88 - 0.35));
  const extraAdmissions = Math.max(1, Math.round(extraContacted * 0.03)); // 3% admission conversion
  const extraTuition = extraAdmissions * avgCourseFee;
  const telephonySavings = counselors * (2200 - 399);
  const aiCloserCost = counselors * 399;
  const netGain = extraTuition + telephonySavings;
  const roiMultiplier = Math.max(1, Math.round(netGain / aiCloserCost));

  const fmt = (n: number) => new Intl.NumberFormat('en-IN').format(n);

  const whatsappMessage = encodeURIComponent(
    `Hello AI Closer, our education institution has ${counselors} admissions counselors handling ${inboundLeads} inquiries/month. Projected tuition recovery is +₹${fmt(netGain)}/month (${roiMultiplier}x ROI). Can we schedule an onboarding call?`
  );
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

  return (
    <div style={calcContainerStyle}>
      <div style={calcBadgeStyle}>TAILORED EDTECH & COUNSELING UNIT ECONOMICS</div>
      <h3 style={calcHeadingStyle}>Admissions Enrollment & Tuition Fee ROI Calculator</h3>
      <p style={calcSubtitleStyle}>
        Calculate the admissions unlocked by sub-60s dialing, silent call recording, and automated WhatsApp course brochure drips.
      </p>

      {/* Sliders Grid */}
      <div style={slidersGridStyle}>
        <div style={sliderCardStyle}>
          <div style={sliderHeaderStyle}>
            <span style={sliderLabelStyle}>Admissions Counselors:</span>
            <span style={sliderValueStyle}>{counselors} counselors</span>
          </div>
          <input
            type="range"
            min={1}
            max={50}
            value={counselors}
            onChange={(e) => setCounselors(parseInt(e.target.value, 10))}
            style={sliderInputStyle}
          />
          <div style={sliderRangeInfoStyle}><span>1 counselor</span><span>50 counselors</span></div>
        </div>

        <div style={sliderCardStyle}>
          <div style={sliderHeaderStyle}>
            <span style={sliderLabelStyle}>Monthly Inbound Student Inquiries:</span>
            <span style={sliderValueStyle}>{fmt(inboundLeads)} leads</span>
          </div>
          <input
            type="range"
            min={200}
            max={5000}
            step={100}
            value={inboundLeads}
            onChange={(e) => setInboundLeads(parseInt(e.target.value, 10))}
            style={sliderInputStyle}
          />
          <div style={sliderRangeInfoStyle}><span>200 leads</span><span>5,000 leads</span></div>
        </div>

        <div style={sliderCardStyle}>
          <div style={sliderHeaderStyle}>
            <span style={sliderLabelStyle}>Avg Course Tuition Fee:</span>
            <span style={sliderValueStyle}>₹{fmt(avgCourseFee)}</span>
          </div>
          <input
            type="range"
            min={15000}
            max={300000}
            step={5000}
            value={avgCourseFee}
            onChange={(e) => setAvgCourseFee(parseInt(e.target.value, 10))}
            style={sliderInputStyle}
          />
          <div style={sliderRangeInfoStyle}><span>₹15,000</span><span>₹3,00,000</span></div>
        </div>
      </div>

      {/* Metrics Results */}
      <div style={metricsGridStyle}>
        <div style={metricCardStyle}>
          <div style={metricLabelStyle}>ADDITIONAL STUDENTS CONTACTED</div>
          <div style={{ ...metricValStyle, color: '#38bdf8' }}>+{fmt(extraContacted)} / mo</div>
          <div style={metricDescStyle}>88% SIM pickup vs 35% VoIP pickup</div>
        </div>
        <div style={metricCardStyle}>
          <div style={metricLabelStyle}>EXTRA ADMISSIONS ENROLLED</div>
          <div style={{ ...metricValStyle, color: '#22c55e' }}>+{extraAdmissions} students</div>
          <div style={metricDescStyle}>At 3% enrollment conversion rate</div>
        </div>
        <div style={metricCardStyle}>
          <div style={metricLabelStyle}>ADDITIONAL TUITION REVENUE</div>
          <div style={{ ...metricValStyle, color: '#f59e0b' }}>+₹{fmt(extraTuition)}</div>
          <div style={metricDescStyle}>Course fee collected on call</div>
        </div>
        <div style={metricCardStyle}>
          <div style={metricLabelStyle}>AI CLOSER SOFTWARE COST</div>
          <div style={{ ...metricValStyle, color: '#f8fafc' }}>₹{fmt(aiCloserCost)} / mo</div>
          <div style={metricDescStyle}>Flat ₹399/user/month (zero pulse bills)</div>
        </div>
      </div>

      {/* Highlight Banner */}
      <div style={highlightBannerStyle}>
        <div>
          <div style={{ fontSize: '13px', fontWeight: 700, color: '#22c55e', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '4px' }}>
            PROJECTED NET MONTHLY TUITION GAIN
          </div>
          <div style={{ fontSize: '32px', fontWeight: 900, color: '#ffffff' }}>
            +₹{fmt(netGain)} <span style={{ fontSize: '16px', color: '#94a3b8', fontWeight: 600 }}>/ month</span>
          </div>
          <div style={{ fontSize: '13px', color: '#cbd5e1', marginTop: '4px' }}>
            Net ROI: <strong>{roiMultiplier}x return</strong> on AI Closer investment
          </div>
        </div>
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" style={ctaButtonStyle}>
          Claim Admissions ROI on WhatsApp →
        </a>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// 4. Insurance POSP Vertical Calculator
// -------------------------------------------------------------
function InsurancePospRoiCalculator() {
  const [pospAgents, setPospAgents] = useState(10);
  const [monthlyRenewalLeads, setMonthlyRenewalLeads] = useState(150);
  const [avgPremium, setAvgPremium] = useState(15000);
  const [commissionPct, setCommissionPct] = useState(15);

  const totalRenewals = pospAgents * monthlyRenewalLeads;
  const extraConnects = Math.round(totalRenewals * (0.94 - 0.30));
  const extraSaved = Math.max(1, Math.round(extraConnects * 0.08)); // 8% recovery conversion
  const extraCommission = Math.round(extraSaved * avgPremium * (commissionPct / 100));
  const telephonySavings = pospAgents * (2200 - 399);
  const aiCloserCost = pospAgents * 399;
  const netGain = extraCommission + telephonySavings;
  const roiMultiplier = Math.max(1, Math.round(netGain / aiCloserCost));

  const fmt = (n: number) => new Intl.NumberFormat('en-IN').format(n);

  const whatsappMessage = encodeURIComponent(
    `Hello AI Closer, our insurance brokerage has ${pospAgents} POSP agents managing ~${monthlyRenewalLeads} renewals/rep. Projected renewal brokerage retention is +₹${fmt(netGain)}/month (${roiMultiplier}x ROI). Can we get a demo?`
  );
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

  return (
    <div style={calcContainerStyle}>
      <div style={calcBadgeStyle}>TAILORED INSURANCE POSP UNIT ECONOMICS</div>
      <h3 style={calcHeadingStyle}>Policy Renewal Retention & Brokerage ROI Calculator</h3>
      <p style={calcSubtitleStyle}>
        Eliminate lapsed motor and health policies caused by Truecaller spam blocks. Calculate your retained commission through 94% clean SIM reach and automated WhatsApp quotes.
      </p>

      {/* Sliders Grid */}
      <div style={slidersGridStyle}>
        <div style={sliderCardStyle}>
          <div style={sliderHeaderStyle}>
            <span style={sliderLabelStyle}>POSP Calling Reps:</span>
            <span style={sliderValueStyle}>{pospAgents} reps</span>
          </div>
          <input
            type="range"
            min={1}
            max={50}
            value={pospAgents}
            onChange={(e) => setPospAgents(parseInt(e.target.value, 10))}
            style={sliderInputStyle}
          />
          <div style={sliderRangeInfoStyle}><span>1 rep</span><span>50 reps</span></div>
        </div>

        <div style={sliderCardStyle}>
          <div style={sliderHeaderStyle}>
            <span style={sliderLabelStyle}>Monthly Expiring Policies per Rep:</span>
            <span style={sliderValueStyle}>{monthlyRenewalLeads} policies</span>
          </div>
          <input
            type="range"
            min={50}
            max={500}
            step={25}
            value={monthlyRenewalLeads}
            onChange={(e) => setMonthlyRenewalLeads(parseInt(e.target.value, 10))}
            style={sliderInputStyle}
          />
          <div style={sliderRangeInfoStyle}><span>50 policies</span><span>500 policies</span></div>
        </div>

        <div style={sliderCardStyle}>
          <div style={sliderHeaderStyle}>
            <span style={sliderLabelStyle}>Avg Annual Policy Premium:</span>
            <span style={sliderValueStyle}>₹{fmt(avgPremium)}</span>
          </div>
          <input
            type="range"
            min={5000}
            max={50000}
            step={1000}
            value={avgPremium}
            onChange={(e) => setAvgPremium(parseInt(e.target.value, 10))}
            style={sliderInputStyle}
          />
          <div style={sliderRangeInfoStyle}><span>₹5,000</span><span>₹50,000</span></div>
        </div>

        <div style={sliderCardStyle}>
          <div style={sliderHeaderStyle}>
            <span style={sliderLabelStyle}>Renewal Brokerage Commission %:</span>
            <span style={sliderValueStyle}>{commissionPct}%</span>
          </div>
          <input
            type="range"
            min={5}
            max={25}
            step={1}
            value={commissionPct}
            onChange={(e) => setCommissionPct(parseInt(e.target.value, 10))}
            style={sliderInputStyle}
          />
          <div style={sliderRangeInfoStyle}><span>5%</span><span>25%</span></div>
        </div>
      </div>

      {/* Metrics Results */}
      <div style={metricsGridStyle}>
        <div style={metricCardStyle}>
          <div style={metricLabelStyle}>ADDITIONAL POLICYHOLDERS REACHED</div>
          <div style={{ ...metricValStyle, color: '#38bdf8' }}>+{fmt(extraConnects)} / mo</div>
          <div style={metricDescStyle}>94% SIM reach vs 30% spam-flagged 080 reach</div>
        </div>
        <div style={metricCardStyle}>
          <div style={metricLabelStyle}>LAPSED POLICIES SAVED</div>
          <div style={{ ...metricValStyle, color: '#22c55e' }}>+{extraSaved} policies</div>
          <div style={metricDescStyle}>Saved via WhatsApp comparison quotes</div>
        </div>
        <div style={metricCardStyle}>
          <div style={metricLabelStyle}>RETAINED BROKERAGE REVENUE</div>
          <div style={{ ...metricValStyle, color: '#f59e0b' }}>+₹{fmt(extraCommission)}</div>
          <div style={metricDescStyle}>At {commissionPct}% recurring payout</div>
        </div>
        <div style={metricCardStyle}>
          <div style={metricLabelStyle}>AI CLOSER SOFTWARE COST</div>
          <div style={{ ...metricValStyle, color: '#f8fafc' }}>₹{fmt(aiCloserCost)} / mo</div>
          <div style={metricDescStyle}>Flat ₹399/user/month (zero pulse bills)</div>
        </div>
      </div>

      {/* Highlight Banner */}
      <div style={highlightBannerStyle}>
        <div>
          <div style={{ fontSize: '13px', fontWeight: 700, color: '#22c55e', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '4px' }}>
            PROJECTED NET MONTHLY RETENTION GAIN
          </div>
          <div style={{ fontSize: '32px', fontWeight: 900, color: '#ffffff' }}>
            +₹{fmt(netGain)} <span style={{ fontSize: '16px', color: '#94a3b8', fontWeight: 600 }}>/ month</span>
          </div>
          <div style={{ fontSize: '13px', color: '#cbd5e1', marginTop: '4px' }}>
            Net ROI: <strong>{roiMultiplier}x return</strong> on AI Closer investment
          </div>
        </div>
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" style={ctaButtonStyle}>
          Claim POSP Renewal ROI on WhatsApp →
        </a>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// Common CSS-in-JS Styles matching AI Closer Dark Theme
// -------------------------------------------------------------
const calcContainerStyle: React.CSSProperties = {
  margin: '48px 0',
  background: 'linear-gradient(135deg, #090d16 0%, #131b2e 100%)',
  border: '1px solid rgba(249, 115, 22, 0.3)',
  borderRadius: '20px',
  padding: '36px 32px',
  boxShadow: '0 20px 48px rgba(0, 0, 0, 0.45)',
  color: '#ffffff',
};

const calcBadgeStyle: React.CSSProperties = {
  display: 'inline-block',
  fontSize: '11px',
  fontWeight: 800,
  color: '#f97316',
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  marginBottom: '10px',
  background: 'rgba(249, 115, 22, 0.1)',
  border: '1px solid rgba(249, 115, 22, 0.25)',
  padding: '4px 12px',
  borderRadius: '999px',
};

const calcHeadingStyle: React.CSSProperties = {
  fontSize: '26px',
  fontWeight: 800,
  margin: '0 0 10px 0',
  color: '#ffffff',
  lineHeight: 1.3,
};

const calcSubtitleStyle: React.CSSProperties = {
  color: '#94a3b8',
  fontSize: '15px',
  margin: '0 0 28px 0',
  lineHeight: 1.6,
  maxWidth: '750px',
};

const slidersGridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
  gap: '16px',
  marginBottom: '28px',
};

const sliderCardStyle: React.CSSProperties = {
  background: 'rgba(255, 255, 255, 0.04)',
  padding: '18px 20px',
  borderRadius: '14px',
  border: '1px solid rgba(255, 255, 255, 0.08)',
};

const sliderHeaderStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '10px',
};

const sliderLabelStyle: React.CSSProperties = {
  fontSize: '13px',
  fontWeight: 600,
  color: '#cbd5e1',
};

const sliderValueStyle: React.CSSProperties = {
  fontSize: '16px',
  fontWeight: 800,
  color: '#f97316',
};

const sliderInputStyle: React.CSSProperties = {
  width: '100%',
  accentColor: '#f97316',
  cursor: 'pointer',
};

const sliderRangeInfoStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  fontSize: '11px',
  color: '#64748b',
  marginTop: '4px',
};

const metricsGridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: '14px',
  marginBottom: '28px',
};

const metricCardStyle: React.CSSProperties = {
  background: 'rgba(0, 0, 0, 0.35)',
  border: '1px solid rgba(255, 255, 255, 0.08)',
  borderRadius: '12px',
  padding: '16px',
};

const metricLabelStyle: React.CSSProperties = {
  fontSize: '10px',
  fontWeight: 800,
  color: '#94a3b8',
  letterSpacing: '0.06em',
  marginBottom: '6px',
};

const metricValStyle: React.CSSProperties = {
  fontSize: '22px',
  fontWeight: 900,
  marginBottom: '4px',
};

const metricDescStyle: React.CSSProperties = {
  fontSize: '11px',
  color: '#64748b',
  lineHeight: 1.4,
};

const highlightBannerStyle: React.CSSProperties = {
  background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.12) 0%, rgba(249, 115, 22, 0.12) 100%)',
  border: '1px solid rgba(34, 197, 94, 0.3)',
  borderRadius: '16px',
  padding: '24px 28px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '20px',
};

const ctaButtonStyle: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  padding: '12px 24px',
  background: '#22c55e',
  color: '#000000',
  borderRadius: '10px',
  fontWeight: 800,
  fontSize: '14px',
  textDecoration: 'none',
  boxShadow: '0 8px 20px rgba(34, 197, 94, 0.3)',
};
