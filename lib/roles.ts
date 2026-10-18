export type RoleComparisonRow = {
  featureName: string;
  traditionalWay: string;
  aiCloserWay: string;
};

export type RoleFaq = {
  question: string;
  answer: string;
};

export type RoleDefinition = {
  slug: string;
  roleName: string;
  eyebrow: string;
  tagline: string;
  seoTitle: string;
  seoDescription: string;
  heroBadge: string;
  heroHeadline: string;
  heroSubheadline: string;
  painPoints: Array<{ title: string; description: string }>;
  corePillars: Array<{
    title: string;
    description: string;
    badge: string;
    bullets: string[];
    image: string;
  }>;
  workflowSteps: Array<{ title: string; description: string }>;
  comparisonRows: RoleComparisonRow[];
  faqs: RoleFaq[];
  relatedGuides: Array<{ title: string; slug: string }>;
};

export const roles: RoleDefinition[] = [
  {
    slug: 'sales-closers',
    roleName: 'Sales Closers & Telecallers',
    eyebrow: 'BUILT SPECIFICALLY FOR CLOSERS',
    tagline: 'The Distraction-Free Cockpit Built for High-Ticket Closers to Dial Fast and Close Same-Day',
    seoTitle: 'CRM for High Ticket Closers & Telecallers (2026)',
    seoDescription: 'Built for sales closers: Fast grab queue, Power dialer with auto-advance, Lead-IQ objection busters, and 1-tap dynamic UPI closing links at flat ₹399/mo.',
    heroBadge: 'ZERO ADMIN CLUTTER · 100% CLOSING VELOCITY',
    heroHeadline: 'Stop Wrestling with Clunky CRMs. Start Closing Deals.',
    heroSubheadline: 'AI Closer gives sales reps and telecallers a focused cockpit stripped of corporate bloat. Grab hot inbound leads in seconds, dial with real SIM cards, handle objections with Lead-IQ, and lock payments on-call.',
    painPoints: [
      {
        title: 'Clunky Admin Busywork Burns 40% of Calling Time',
        description: 'Traditional enterprise CRMs force reps to navigate dozens of tabs, fill out 15 mandatory fields, and manually log timestamps, cutting into active selling hours.',
      },
      {
        title: 'Prospects Stop Answering 080 Virtual Numbers',
        description: 'Virtual VoIP lines are flagged as "Spam Telemarketer" by Truecaller, dropping answer rates below 30% and demoralizing top reps.',
      },
      {
        title: 'Deals Drop Off After "WhatsApp Pe QR Code Bhej Do"',
        description: 'Sending static QR code screenshots creates friction and delay. The prospect gets distracted, goes cold, and you spend days chasing bank reference UTRs.',
      },
    ],
    corePillars: [
      {
        title: 'Private Sales Cockpit with Zero Data Leakage',
        description: 'Closers see strictly their assigned pipeline and daily targets. No distracting corporate spreadsheets or peer competition clutter.',
        badge: 'DISTRACTION-FREE',
        bullets: [
          'My Leads Only view with instant status filters',
          'Daily targets bar: calls dialed, talk minutes, deals closed',
          'Protected prospect contact details and confidential notes',
        ],
        image: 'https://aicloser.in/blog/wp-content/uploads/2026/10/sales-closer-cockpit-private.png',
      },
      {
        title: 'Grab Leads Fast-Action Queue',
        description: 'First to click claims the hottest inbound inquiries. Fast-action pool rewards energetic closers with instant lead assignment and race-condition locking.',
        badge: 'GAMIFIED SPEED',
        bullets: [
          'Inbound inquiries land in real-time pool (< 2 seconds)',
          '1-Click "Claim Lead" moves lead immediately into your personal pipeline',
          'Instant Android push alert with 1-tap direct SIM dial',
        ],
        image: 'https://aicloser.in/blog/wp-content/uploads/2026/10/lead-grab-queue-pool.png',
      },
      {
        title: 'Power Dialer with Auto-Advance Cooldown',
        description: 'Fly through calling queues with a continuous dialing cadence. 5-second cooldown timer between calls gives just enough time to tag dispositions.',
        badge: '2X CALLING VOLUME',
        bullets: [
          'Sequential SIM dialing without repetitive manual clicking',
          'Floating Caller-ID overlay shows prospect deal size on incoming rings',
          'Instant call dispositions: Pitch Completed, Callback, Payment Pending',
        ],
        image: 'https://aicloser.in/blog/wp-content/uploads/2026/10/power-dialer-modal.png',
      },
      {
        title: '1-Tap Dynamic UPI Payment Links (/pay/[token])',
        description: 'Lock verbal commitments while still on the phone. Generate custom payment links with 15-minute countdown timers and 0% gateway fees.',
        badge: 'LOCK DEALS ON CALL',
        bullets: [
          '1-Tap "Open UPI App" launches Google Pay, PhonePe, Paytm with pre-filled amount',
          'Visual countdown timer creates authentic buying urgency',
          'Customer uploads UTR screenshot directly on checkout for 1-click approval',
        ],
        image: 'https://aicloser.in/blog/wp-content/uploads/2026/10/dynamic-upi-payment-links.png',
      },
    ],
    workflowSteps: [
      { title: 'Claim Inbound Lead from Grab Pool', description: 'Hear the notification chime, claim the lead, and dial via your physical SIM within 30 seconds.' },
      { title: 'Pitch with Lead-IQ Objection Scripts', description: 'Address price, competitor, and timing objections instantly using context-aware AI battlecards.' },
      { title: 'Generate Dynamic UPI Link on Call', description: 'Send a 15-minute expiring payment link over WhatsApp while guiding the customer to tap GPay and pay.' },
      { title: 'Track Your 20% Closed Deal Commissions', description: 'Watch deals reflect in your personal payouts dashboard with real-time earnings ledger.' },
    ],
    comparisonRows: [
      { featureName: 'Calling Architecture', traditionalWay: 'Virtual VoIP / 080 Trunks with 30% answer rate', aiCloserWay: 'Native GSM SIM calling with 95%+ answer rate' },
      { featureName: 'Payment Closing', traditionalWay: 'Static QR screenshots or delayed bank details', aiCloserWay: 'Dynamic 1-tap UPI links with 15-min countdown timer' },
      { featureName: 'Lead Access', traditionalWay: 'Unfair manual distribution by managers', aiCloserWay: 'Gamified Grab Leads pool + Weighted Round Robin' },
      { featureName: 'Objection Handling', traditionalWay: 'Memory-based guesses during customer hesitation', aiCloserWay: 'Lead-IQ instant objection battlecards on call screen' },
      { featureName: 'WhatsApp Integration', traditionalWay: 'Personal unlogged phone or rigid bot templates', aiCloserWay: 'Personal Web QR sync + in-browser voice note recorder' },
    ],
    faqs: [
      { question: 'Why do closers prefer AI Closer over Salesforce or HubSpot?', answer: 'Enterprise CRMs are built for managers to run reports, not for reps to close deals. AI Closer is built from the ground up as a fast sales execution cockpit: native SIM calling, 1-click WhatsApp follow-ups, and instant UPI checkout links.' },
      { question: 'Can I use AI Closer on my existing Android smartphone?', answer: 'Yes! AI Closer runs smoothly on any Android phone, utilizing your normal SIM card and unlimited calling plan with zero setup hassle.' },
      { question: 'How do dynamic UPI payment links help me hit targets?', answer: 'Most prospects who promise "I will pay tonight" change their minds. Generating a time-limited dynamic UPI link while still on the call lets the buyer open Google Pay in 1 tap, locking the sale before hanging up.' },
    ],
    relatedGuides: [
      { title: 'Why Deals Drop Off and How Dynamic UPI Links Solve It', slug: 'why-deals-drop-off-upi-qr-dynamic-payment-links' },
      { title: 'How to Double Daily Calling Volume with Power Dialer', slug: 'how-to-double-daily-calling-volume-power-dialer-playbook' },
      { title: 'How to Handle Sales Objections on Call: Closing Playbook', slug: 'how-to-handle-sales-objections-on-call-closing-playbook' },
    ],
  },
  {
    slug: 'marketing-agencies',
    roleName: 'Performance Marketing & Lead Gen Agencies',
    eyebrow: 'MAXIMIZE ROAS & CLIENT RETENTION',
    tagline: 'The Agency Operating System for Sub-60s Lead Distribution, Zero Data Leakage, and Verified Telephony Telemetry',
    seoTitle: 'Agency Client Lead Distribution CRM & Speed-to-Lead Software (2026)',
    seoDescription: 'Supercharge agency ROAS: Sub-60s Meta Lead Ads webhook routing, client WhatsApp privacy, live call recordings, and team performance dashboards in AI Closer.',
    heroBadge: 'STOP DONATING AD SPEND TO META · CONVERT INQUIRIES FASTER',
    heroHeadline: 'Deliver 3X Better Client Conversion on Every Inbound Campaign.',
    heroSubheadline: 'Great ad campaigns fail when client sales teams take 4 hours to call leads. AI Closer ingests Meta and Google ad leads in under 2 seconds, alerts reps instantly, and proves campaign ROI with audio call telemetry.',
    painPoints: [
      {
        title: 'Clients Complain "Leads Are Junk" Because Reps Call 6 Hours Late',
        description: 'Prospects forget submitting a form within 30 minutes. When reps wait hours, leads answer with "Maine kab apply kiya?" (When did I apply?) and reject the call.',
      },
      {
        title: 'Agency Has Zero Visibility into Client Follow-Up Quality',
        description: 'You generate 500 qualified leads, but the client claims none closed. Without call recordings, you cannot prove whether their telecallers pitched properly or dialed at all.',
      },
      {
        title: 'Expensive Middleware Bills for Zapier & Lead Routing',
        description: 'Connecting Facebook Lead Forms to Google Sheets and CRMs racks up hundreds of dollars in Zapier/Make fees that break periodically.',
      },
    ],
    corePillars: [
      {
        title: 'Sub-60s Direct Webhook Lead Ingestion',
        description: 'Direct Meta Lead Ads Graph API integration and embeddable form builders ingest inquiries in under 2 seconds with zero third-party middleware fees.',
        badge: 'ZERO ZAPIER BILLS',
        bullets: [
          'Direct Meta Facebook & Instagram Lead Ads webhook connectors',
          'Embeddable drag-and-drop form builder for landing pages',
          'Smart duplicate phone number detection and auto-merge',
        ],
        image: 'https://aicloser.in/blog/wp-content/uploads/2026/10/speed-to-lead-60-seconds.png',
      },
      {
        title: 'Weighted Round Robin & Client Lead Distribution',
        description: 'Route inquiries immediately across the client’s active sales reps based on current workload capacity or to a competitive Grab pool.',
        badge: 'AUTOMATED DISTRIBUTION',
        bullets: [
          'Weighted capacity routing based on agent availability',
          'SLA breach fallback if lead is not contacted within 15 minutes',
          'Immediate Android push alerts with floating Caller-ID',
        ],
        image: 'https://aicloser.in/blog/wp-content/uploads/2026/10/lead-grab-queue-pool.png',
      },
      {
        title: 'Audio Call Telemetry Proves Campaign Quality',
        description: 'Give agency account managers and clients access to 100% of recorded sales conversations to audit pitch quality and objection handling.',
        badge: 'PROVE CAMPAIGN ROI',
        bullets: [
          'Listen to real sales calls at 1.5x–2x speed',
          'Verify whether reps actually pitched features or gave up in 10 seconds',
          'Turn recorded objections into refined creative hooks and ad copy',
        ],
        image: 'https://aicloser.in/blog/wp-content/uploads/2026/10/call-recording-player-waveform.png',
      },
      {
        title: 'Dual WhatsApp & Client Data Protection',
        description: 'Ensure client sales reps do not poach high-ticket leads onto personal unmonitored accounts. All WhatsApp and Instagram conversations stay archived.',
        badge: 'ASSET PROTECTION',
        bullets: [
          'Official Meta WhatsApp Business Cloud API for automated confirmations',
          'Personal WhatsApp Web QR synchronization for 1:1 closing',
          'Centralized conversation timeline preserved permanently',
        ],
        image: 'https://aicloser.in/blog/wp-content/uploads/2026/10/whatsapp-crm-dual-chat.png',
      },
    ],
    workflowSteps: [
      { title: 'Plug Meta Ad Accounts in 2 Minutes', description: 'Connect Facebook lead forms directly into AI Closer via secure webhooks without Zapier.' },
      { title: 'Configure Round Robin Routing', description: 'Set rep allocation rules, lead capacity caps, and instant WhatsApp acknowledgment drips.' },
      { title: 'Reps Dial within 60 Seconds', description: 'Prospect receives call while still looking at the ad creative, multiplying conversion rates by 21x.' },
      { title: 'Review Quality & Scale Budgets', description: 'Audit call recordings alongside client stakeholders to justify scaling monthly ad spend.' },
    ],
    comparisonRows: [
      { featureName: 'Meta Lead Ingestion', traditionalWay: 'Delayed Google Sheets sync via expensive Zapier', aiCloserWay: 'Direct native webhook ingestion in < 2 seconds' },
      { featureName: 'Speed to Lead', traditionalWay: 'Average 3–6 hours before first telecaller contact', aiCloserWay: 'Sub-60 seconds automated push alert & SIM dialing' },
      { featureName: 'Lead Quality Proof', traditionalWay: 'Word-of-mouth client claims ("leads are cold")', aiCloserWay: 'Verifiable call recordings with talk-time telemetry' },
      { featureName: 'Software Cost for 10 Reps', traditionalWay: '₹20,000+/mo (CRM + Zapier + PBX lines)', aiCloserWay: 'Flat ₹3,990/mo all-inclusive with zero per-minute bills' },
      { featureName: 'WhatsApp Retargeting', traditionalWay: 'Manual message copy-pasted by individual reps', aiCloserWay: 'Automated 3-second WhatsApp confirmation + calendar link' },
    ],
    faqs: [
      { question: 'How does AI Closer help agencies retain marketing clients longer?', answer: 'Agencies lose clients because client telecallers fail to follow up on leads fast enough, blaming poor ad quality. AI Closer provides proof: instant sub-60s routing, millisecond call logs, and audio recordings showing how leads were handled, demonstrating that the agency delivered high-intent buyers.' },
      { question: 'Do we need Zapier to connect Facebook Lead Ads?', answer: 'No. AI Closer has direct native Meta Graph API webhooks that ingest ad inquiries into the CRM within 2 seconds at ₹0 additional cost.' },
      { question: 'Can agency account managers listen to calls without seeing sensitive financial data?', answer: 'Yes! Granular role-based access control (RBAC) lets agency supervisors audit call recordings and stage conversions without exposing sensitive margins.' },
    ],
    relatedGuides: [
      { title: 'How to Fix Speed-to-Lead and Convert More Inquiries', slug: 'how-to-fix-speed-to-lead-convert-more-inquiries' },
      { title: 'How to Track Sales Team Productivity and Stop Fake Reports', slug: 'how-to-track-sales-team-productivity-stop-fake-reports' },
      { title: 'How to Prevent Sales Reps Stealing Client WhatsApp Chats', slug: 'how-to-prevent-sales-reps-stealing-client-whatsapp-chats' },
    ],
  },
  {
    slug: 'sales-managers',
    roleName: 'Sales Directors & Supervisors',
    eyebrow: '100% SALES FLOOR ACCOUNTABILITY',
    tagline: 'End the "Kitne Calls Kiye Aaj?" Guessing Game with Live Hardware Telemetry and Call Coaching',
    seoTitle: 'Telecaller Monitoring Software & Accountability CRM for Managers (2026)',
    seoDescription: 'Empower sales managers: Live team presence and battery tracking, 2x call audio scrubber, SLA breach matrix, and missed call recovery at flat ₹399/user/month.',
    heroBadge: 'LISTEN TO REAL PITCHES · NOT EXCUSES',
    heroHeadline: 'Never Ask Your Team for Daily Calling Reports Again.',
    heroSubheadline: 'Eliminate forged Excel sheets and unverified call logs. AI Closer gives supervisors real-time hardware telemetry from every rep’s handset, synced audio recordings at 2x speed, and automatic SLA breach alerts.',
    painPoints: [
      {
        title: 'Fabricated Daily Call Reports Hide Rep Inactivity',
        description: 'Telecallers report 60 calls on spreadsheets, but in reality made 15 quick 20-second dials to wrong numbers, leaving valuable leads untouched.',
      },
      {
        title: 'Valuable Inbound Callbacks are Lost to Missed Calls',
        description: 'When prospects call back while reps are busy or off-shift, the call vanishes into the phone log with zero recovery workflow.',
      },
      {
        title: 'Coaching Junior Reps Takes Hours of Manual Shadowing',
        description: 'Listening to live calls in real-time is impossible for busy managers. Supervisors lack an efficient way to review pitches and train underperformers.',
      },
    ],
    corePillars: [
      {
        title: 'Live Team Presence & Hardware Telemetry',
        description: 'Monitor your sales floor live: rep status (Online, On Call, Idle), phone model, battery percentage, network connection, and daily talk-time totals.',
        badge: 'REAL-TIME TELEMETRY',
        bullets: [
          'Live agent status indicators and talk-time leaderboard',
          'Device health metrics: battery %, network signal, app version',
          'Accurate connect rate % separating dials from real conversations',
        ],
        image: 'https://aicloser.in/blog/wp-content/uploads/2026/10/manager-team-activity-telemetry.png',
      },
      {
        title: 'Call Recording Player with 1.5x–3.0x Waveform Scrubber',
        description: 'Audit 3x more sales pitches in less time. High-fidelity audio waveforms with 10s skip buttons and variable playback speeds.',
        badge: 'HIGH-VELOCITY QA',
        bullets: [
          'Variable playback speeds (1.0x, 1.5x, 2.0x, 3.0x)',
          'Synchronized cloud playback within 2 seconds of call hangup',
          'Disposition verification: check rep honesty vs actual call outcome',
        ],
        image: 'https://aicloser.in/blog/wp-content/uploads/2026/10/call-recording-player-waveform.png',
      },
      {
        title: 'Responsibility & SLA Breach Matrix',
        description: 'Instant exception filters highlight untouched leads, overdue follow-ups, stale inquiries (>48h), and deals lacking a scheduled next action.',
        badge: 'ZERO DROPPED LEADS',
        bullets: [
          'Untouched leads filter: assigned to rep but never dialed',
          'Overdue follow-ups filter: passed SLA callback deadline',
          '1-Click lead reassignment from inactive closers to top performers',
        ],
        image: 'https://aicloser.in/blog/wp-content/uploads/2026/10/sales-closer-cockpit-private.png',
      },
      {
        title: 'Missed Calls Auto-Recovery Queue',
        description: 'Capture every inbound missed call with 3-second automated WhatsApp acknowledgments and a dedicated callback SLA queue.',
        badge: 'RECOVER 30% LEADS',
        bullets: [
          'Automated WhatsApp dispatch: "Sorry we missed your call, dialing back in 2 mins"',
          'Dedicated supervisor queue with SLA timer tracking callback speed',
          '1-Click SIM callback dialer with automated disposition update',
        ],
        image: 'https://aicloser.in/blog/wp-content/uploads/2026/10/missed-calls-recovery-queue.png',
      },
    ],
    workflowSteps: [
      { title: 'Check Morning Activity Dashboard', description: 'View active reps, battery status, and untouched leads requiring immediate re-assignment.' },
      { title: 'Audit 5 Best & 5 Worst Pitches at 2x Speed', description: 'Use the waveform scrubber to evaluate objection handling and praise winning closes.' },
      { title: 'Clear Missed Calls Recovery Queue', description: 'Verify that every inbound missed inquiry received an automated WhatsApp and timely phone callback.' },
      { title: 'Approve Verified UTR Payment Proofs', description: 'Review customer-submitted payment screenshots in 1 click and track revenue realization.' },
    ],
    comparisonRows: [
      { featureName: 'Call Logging Accuracy', traditionalWay: 'Self-reported spreadsheets with fake numbers', aiCloserWay: 'Millisecond hardware telephony telemetry + audio files' },
      { featureName: 'Call Review Velocity', traditionalWay: 'Listening in real-time or hunting through recordings', aiCloserWay: 'Waveform scrubber with 1.5x–3x speed & 10s skips' },
      { featureName: 'Lead SLA Governance', traditionalWay: 'Leads sit untouched for days without manager alert', aiCloserWay: 'Live exception matrix flags untouched & overdue leads' },
      { featureName: 'Missed Calls', traditionalWay: 'Forgotten in rep mobile log; lost forever', aiCloserWay: '3-second auto WhatsApp alert + dedicated recovery queue' },
      { featureName: 'Hardware Monitoring', traditionalWay: 'Zero visibility into rep phone battery or status', aiCloserWay: 'Live battery %, connection signal, and Online/On Call status' },
    ],
    faqs: [
      { question: 'How does AI Closer prevent sales reps from fabricating daily call counts?', answer: 'AI Closer uses native Android system telemetry (PhoneStateReceiver) that logs exact network-level offhook and idle timestamps. It only credits calls that actually connected, and pairs every call with a cloud audio recording.' },
      { question: 'Can managers reassign leads from non-performing reps in 1 click?', answer: 'Yes! The Responsibility Reporting matrix allows supervisors to filter all untouched or overdue leads for any specific rep and transfer them to active closers in a single action.' },
      { question: 'How quickly do call recordings appear in the manager dashboard?', answer: 'Recordings are compressed locally and uploaded via Android WorkManager within 2 seconds of call completion, ready for immediate playback.' },
    ],
    relatedGuides: [
      { title: 'How to Track Sales Team Productivity and Stop Fake Calling Reports', slug: 'how-to-track-sales-team-productivity-stop-fake-reports' },
      { title: 'How to Recover Missed Calls and Stop Losing Inbound Leads', slug: 'how-to-recover-missed-calls-stop-losing-inbound-leads' },
      { title: 'How to Handle Sales Objections on Call: Closing Playbook', slug: 'how-to-handle-sales-objections-on-call-closing-playbook' },
    ],
  },

  {
    slug: 'real-estate-crm',
    roleName: 'Real Estate Telecalling CRM',
    eyebrow: 'BUILT FOR BROKERS & BUILDERS',
    tagline: 'High-Velocity SIM Calling & Site Visit Scheduling CRM for Indian Real Estate Teams',
    seoTitle: 'Real Estate Telecalling CRM (2026 Guide)',
    seoDescription: 'Boost property sales with AI Closer SIM CRM: 95% pickup rates, sub-60s lead sync, site visit tracking, and dynamic UPI token booking at flat ₹399/mo.',
    heroBadge: 'ZERO TRUECALLER SPAM · 3X SITE VISITS',
    heroHeadline: 'Stop Burning Meta Property Leads. Book 3x More Site Visits.',
    heroSubheadline: 'Real estate leads go cold in minutes. AI Closer connects Meta Ads, 99acres, and MagicBricks inquiries directly to telecallers with native SIM calling, instant WhatsApp brochures, and automated site visit scheduling.',
    painPoints: [
      {
        title: 'Virtual 080 Numbers Killed Property Lead Pickup Rates (<20%)',
        description: 'Buyers reject cloud telephony numbers thinking they are spam telemarketers. AI Closer calls from standard 10-digit SIM cards delivering 85%+ pickup rates.',
      },
      {
        title: 'Brokers Struggle to Track Telecaller Activity and Call Pitches',
        description: 'Without automated call recording, managers have zero visibility into whether reps are pitching inventory correctly or dropping hot buyers.',
      },
      {
        title: 'Site Visit Follow-ups Slip Through Spreadsheet Cracks',
        description: 'Over 60% of real estate deals require 4 to 6 follow-ups. Manual spreadsheets cause missed callbacks and lost commissions.',
      },
    ],
    corePillars: [
      {
        title: 'Native SIM Calling with 95% Pickup Rate',
        description: 'Dial property buyers directly from rep mobile SIM cards. No virtual numbers, no spam alerts, zero per-minute calling charges.',
        badge: '95% CONNECT RATE',
        bullets: [
          'Direct 10-digit mobile SIM dialing (Airtel / Jio)',
          'Automated background call recording with cloud sync',
          'Round-robin distribution of Meta, Google, and portal leads',
        ],
        image: 'https://aicloser.in/blog/wp-content/uploads/2026/10/real-estate-telecalling-crm.png',
      },
      {
        title: '1-Tap WhatsApp Project Brochure & Video Tour',
        description: 'Send floor plans, price sheets, and location walkthroughs on WhatsApp immediately during or after the sales call.',
        badge: 'SPEED TO LEAD',
        bullets: [
          'Pre-approved WhatsApp brochure templates with 1-tap send',
          'Personal WhatsApp Web QR sync so client chats stay in the CRM',
          'Automated site visit confirmation reminders with Google Maps pin',
        ],
        image: 'https://aicloser.in/blog/wp-content/uploads/2026/10/whatsapp-brochure-dispatch.png',
      },
      {
        title: 'Visual Kanban Deal & Site Visit Pipeline',
        description: 'Track property buyers across New Inquiry, Qualified, Site Visit Scheduled, Site Visit Completed, Token Received, and Agreement Closed.',
        badge: 'SITE VISIT ACCELERATOR',
        bullets: [
          'Drag-and-drop stage updates with follow-up timers',
          'Automated SLA alerts if a fresh buyer is not dialed in 5 minutes',
          'Dynamic in-call UPI QR for booking token advance payments',
        ],
        image: 'https://aicloser.in/blog/wp-content/uploads/2026/10/real-estate-kanban-pipeline.png',
      },
      {
        title: 'Centralized Audio Vault & Sales Coaching',
        description: 'Listen to customer objections (price negotiations, location hesitation, Vastu concerns) and coach reps to close on the second touch.',
        badge: 'COACHING TELEMETRY',
        bullets: [
          'Waveform scrubber with 2x speed playback',
          'Automated call duration and talktime leaderboards',
          'Disposition tracking: Hot Prospect, Site Visit, Follow-up, Junk',
        ],
        image: 'https://aicloser.in/blog/wp-content/uploads/2026/10/call-recording-player-waveform.png',
      },
    ],
    workflowSteps: [
      { title: 'Inbound Portal Lead Capture', description: 'Meta, 99acres, and Google inquiries arrive instantly and assign to reps via round robin.' },
      { title: 'Instant SIM Call (<60s)', description: 'Telecaller dials from Airtel/Jio SIM; call records silently in background.' },
      { title: '1-Tap Brochure Dispatch', description: 'Rep triggers project brochure, floor plans, and video link on WhatsApp.' },
      { title: 'Schedule Site Visit & Collect Token', description: 'Lock visit date on visual calendar or collect booking advance via Dynamic UPI QR.' },
    ],
    comparisonRows: [
      { featureName: 'Outbound Calling Engine', traditionalWay: '080 Virtual Landline (Flagged as Spam; 18% pickup)', aiCloserWay: '10-Digit Mobile SIM (Verified; 85%+ pickup)' },
      { featureName: 'Call Recording Mechanism', traditionalWay: 'Manual rep logging or no recordings', aiCloserWay: '100% Automatic background recording' },
      { featureName: 'Brochure Sharing', traditionalWay: 'Switching to personal WhatsApp; leads lost when rep exits', aiCloserWay: 'Unified CRM WhatsApp sync + project templates' },
      { featureName: 'Cost per Telecaller', traditionalWay: '₹2,500/seat + per-minute cloud fees', aiCloserWay: 'Flat ₹399/user/month (All-inclusive)' },
    ],
    faqs: [
      { question: 'Can real estate agents record calls without Google Dialer warning?', answer: 'Yes! AI Closer uses hardware-level background recording that captures both sides of the conversation without triggering Google Phone loud announcement.' },
      { question: 'Does AI Closer integrate with 99acres and Meta Ads?', answer: 'Yes! AI Closer automatically syncs incoming leads from Meta Lead Forms, Google Ads, website inquiry forms, and CSV imports in real time.' },
      { question: 'Can we collect token amounts on live calls?', answer: 'Yes! AI Closer generates a Dynamic UPI QR code with a 15-minute timer that buyers can scan with PhonePe/GooglePay to lock site visit tokens.' },
    ],
    relatedGuides: [
      { title: 'Sell.Do vs LeadSquared vs TeleCRM vs AI Closer: Real Estate CRM Comparison (2026)', slug: 'real-estate-crm-india-selldo-telecrm-leadsquared-comparison-guide-2026' },
      { title: 'Why Telecalling Leads Decline: Virtual 080 Calls vs SIM Calling', slug: 'why-telecalling-leads-decline-virtual-080-calls-truecaller-spam-roi-blueprint-8274' },
      { title: 'Stop Losing Leads: Zero Leakage Telecalling System', slug: 'stop-losing-leads-zero-leakage-inbox-followup-system' },
    ],
  },
  {
    slug: 'loan-dsa-calling-crm',
    roleName: 'DSA & Loan Telecalling Software',
    eyebrow: 'BUILT FOR LOAN DSAS & FINTECH CLOSERS',
    tagline: 'High-Volume SIM Dialer & Document Collection CRM for Personal & Business Loans',
    seoTitle: 'Loan DSA Telecalling CRM (2026 Guide)',
    seoDescription: 'Scale loan disbursements with AI Closer: Native SIM dialer, 92% pickup rate, automated borrower WhatsApp reminders, and call recordings at flat ₹399/seat/mo.',
    heroBadge: 'HIGH-VOLUME DIALING · 1-TAP DOC COLLECTION',
    heroHeadline: 'Scale Loan Telecalling & Disbursals with Native SIM Calling.',
    heroSubheadline: 'DSA teams make 150+ calls a day chasing borrower documents and bank sanctions. AI Closer provides progressive auto-dialing, instant WhatsApp document collection, and call recording at flat ₹399/mo.',
    painPoints: [
      {
        title: 'Expensive Cloud Telephony Eats Into DSA Profit Margins',
        description: 'Cloud telephony charges ₹1/minute for every dial. For a 20-caller floor, phone bills exceed ₹30,000/month. AI Closer uses ordinary SIM cards with zero pulse fees.',
      },
      {
        title: 'Borrowers Abandon Loans When Document Collection Drags',
        description: 'Waiting days for PAN, Aadhaar, and bank statements leads to dropped files. AI Closer automates instant WhatsApp document checklists.',
      },
      {
        title: 'Dispute Over Interest Rates & Processing Fees',
        description: 'Borrowers often dispute what was promised over the phone. AI Closer keeps permanent cloud audio recordings of every agreement.',
      },
    ],
    corePillars: [
      {
        title: 'Progressive SIM Dialer for High-Volume Outreach',
        description: 'Auto-advance through loan lead lists without manual number dialing. Ramping daily calls per agent from 80 to 180.',
        badge: 'HIGH-VOLUME DIALING',
        bullets: [
          'Progressive dialer with customizable human pause time',
          'Automatic detection of connected vs unanswered calls',
          'Support for Dual-SIM smartphones to rotate Airtel and Jio',
        ],
        image: 'https://aicloser.in/blog/wp-content/uploads/2026/10/loan-dsa-progressive-dialer.png',
      },
      {
        title: '1-Tap WhatsApp Document Collection Checklists',
        description: 'Trigger pre-formatted WhatsApp document requests (ITR, salary slips, bank statements) with 1 tap right as the call ends.',
        badge: 'ZERO FILE LEAKAGE',
        bullets: [
          'Automated WhatsApp templates for KYC and income proofs',
          'Document receipt status tracker inside borrower profile',
          'Automated follow-up reminders before bank sanction deadlines',
        ],
        image: 'https://aicloser.in/blog/wp-content/uploads/2026/10/whatsapp-document-collection.png',
      },
      {
        title: 'Bank & NBFC Pipeline Stages',
        description: 'Track loan files across: New Lead, Document Received, File Logged with Bank, Credit Approved, Disbursed, and Commission Claimed.',
        badge: 'PIPELINE MASTERY',
        bullets: [
          'Visual Kanban board configured for financial DSAs',
          'Filter by loan type (Personal, Business, Home, LAP)',
          'Track agent disbursal totals and payout commissions',
        ],
        image: 'https://aicloser.in/blog/wp-content/uploads/2026/10/loan-kanban-pipeline.png',
      },
      {
        title: 'Regulatory Audio Compliance & Verification',
        description: 'Protect your DSA business against customer disputes and RBI compliance audits with crystal-clear call audio backups.',
        badge: 'AUDIO COMPLIANCE',
        bullets: [
          'Two-way audio recording stored securely in the cloud',
          'Section 65B compliant call logs with exact timestamps',
          'Instant keyword search across call dispositions',
        ],
        image: 'https://aicloser.in/blog/wp-content/uploads/2026/10/call-recording-player-waveform.png',
      },
    ],
    workflowSteps: [
      { title: 'Load DSA Lead Database', description: 'Import personal/business loan inquiries via CSV or API with automated round robin.' },
      { title: 'Auto-Dial with Progressive SIM Engine', description: 'Telecallers connect at 85%+ pickup rates via 10-digit SIM cards.' },
      { title: 'Trigger WhatsApp KYC Checklist', description: 'Send instant document collection links while borrower is warm.' },
      { title: 'Log File to Bank & Disburse', description: 'Move deal to Disbursed stage and calculate telecaller commission automatically.' },
    ],
    comparisonRows: [
      { featureName: 'Calling Costs', traditionalWay: '₹1.20/min cloud VoIP pulse rate (₹1,500/caller)', aiCloserWay: '₹0 pulse charges via standard mobile SIM recharge' },
      { featureName: 'Doc Collection Velocity', traditionalWay: 'Manual WhatsApp texting on agent personal phones', aiCloserWay: '1-Tap pre-formatted document checklists in CRM' },
      { featureName: 'Call Audit & Dispute Defense', traditionalWay: 'Zero recordings; agent word vs customer word', aiCloserWay: '100% Cloud call recording with instant waveform scrub' },
      { featureName: 'Subscription Pricing', traditionalWay: '₹1,500–₹3,000/seat/mo on enterprise CRMs', aiCloserWay: 'Flat ₹399/user/month with zero setup fees' },
    ],
    faqs: [
      { question: 'Can loan DSAs use their existing Airtel/Jio SIM cards?', answer: 'Yes! AI Closer runs on telecaller Android phones and uses their existing SIM cards with unlimited calling packs, completely eliminating expensive per-minute VoIP bills.' },
      { question: 'How does AI Closer help collect loan documents faster?', answer: 'Telecallers can trigger WhatsApp document requests with one click directly from the call screen, prompting borrowers to send salary slips and bank statements immediately.' },
      { question: 'Is call recording legal for financial telecalling in India?', answer: 'Yes, recording customer sales and advisory calls is standard business compliance under Indian telecom and consumer protection guidelines for dispute resolution.' },
    ],
    relatedGuides: [
      { title: 'Loan Sales Telecalling CRM for DSAs in India', slug: 'loan-sales-telecalling-crm-dsa-india' },
      { title: 'How to Prevent Telecalling SIM Cards from Getting Blocked by Airtel & Jio', slug: 'how-to-prevent-telecalling-sim-blocked-airtel-jio-trai-2026' },
      { title: 'Personal Loan Telecalling Dialer App Best Practices', slug: 'personal-loan-telecalling-dialer-app' },
    ],
  },
  {
    slug: 'edtech-admissions-dialer',
    roleName: 'EdTech & Admissions Dialer',
    eyebrow: 'BUILT FOR COUNSELORS & COACHING INSTITUTES',
    tagline: 'Admission Counseling Dialer & Fee Collection CRM for Universities and Coaching Institutes',
    seoTitle: 'Admission Counseling CRM (2026 Guide)',
    seoDescription: 'Convert 3x more students with AI Closer: Sub-60s admissions inquiry dialing, WhatsApp brochure drips, and 2x call audio scrubber at flat ₹399/user/month.',
    heroBadge: 'HIGHER ADMISSIONS · ZERO TRUECALLER SPAM',
    heroHeadline: 'Close More Student Admissions. Coach Every Counselor Pitch.',
    heroSubheadline: 'Students and parents ignore virtual landlines. AI Closer gives academic admission teams native SIM calling, counseling call recording, automated brochure dispatch, and in-call registration fee collection at flat ₹399/mo.',
    painPoints: [
      {
        title: 'Parents and Students Ignore 080 Cloud Numbers (70% Unanswered)',
        description: 'Virtual numbers get labeled as spam course telemarketers on Truecaller. AI Closer dials from authentic 10-digit SIMs ensuring 85%+ connect rates.',
      },
      {
        title: 'Counselors Give Inconsistent or Inaccurate Course Pitching',
        description: 'Without call recordings, academic directors cannot verify how counselors explain curriculum, fee structures, or scholarship details.',
      },
      {
        title: 'High Drop-Off Between Free Demo Class and Paid Enrollment',
        description: 'Students attend demo lectures but delay paying registration fees. AI Closer generates dynamic in-call UPI QR codes to collect enrollment fees immediately.',
      },
    ],
    corePillars: [
      {
        title: '10-Digit Mobile SIM Calling with 90% Pickup',
        description: 'Parents recognize a genuine counselor number instead of an automated call center. 3x more counseling conversations per day.',
        badge: '90% PICKUP RATE',
        bullets: [
          'High pickup rate on Airtel and Jio SIM cards',
          'Automatic two-way call recording without Google announcement',
          'Round-robin distribution of Meta, Google, and portal leads',
        ],
        image: 'https://aicloser.in/blog/wp-content/uploads/2026/10/edtech-admissions-dialer.png',
      },
      {
        title: 'Automated Syllabus & Demo Link on WhatsApp',
        description: 'Trigger detailed course syllabus PDFs, demo video links, and fee breakdowns on WhatsApp with one click right after the call.',
        badge: 'INSTANT WHATSAPP ENGAGEMENT',
        bullets: [
          'Dual WhatsApp sync: Personal Web QR for counselor trust + Meta API',
          'Pre-configured templates for webinar reminders and fee deadlines',
          'Automated student attendance tracking for demo lectures',
        ],
        image: 'https://aicloser.in/blog/wp-content/uploads/2026/10/whatsapp-brochure-dispatch.png',
      },
      {
        title: 'In-Call Dynamic UPI Fee Collection (15-Min Timer)',
        description: 'Collect registration, test series, or admission reservation fees while the parent is live on the call using Dynamic UPI QR.',
        badge: 'INSTANT FEE CLOSING',
        bullets: [
          'Generate dynamic UPI QR directly on counselor screen',
          'Instant webhook confirmation when GooglePay/PhonePe payment settles',
          'Automatic receipt delivery to parent on WhatsApp',
        ],
        image: 'https://aicloser.in/blog/wp-content/uploads/2026/10/in-call-dynamic-upi-qr.png',
      },
      {
        title: 'Counseling Pitch Audits & Waveform Scrubbing',
        description: 'Directors and supervisors can audit 5 winning and 5 losing calls daily to train counselors on handling parent fee hesitations.',
        badge: 'COUNSELOR COACHING',
        bullets: [
          'Waveform scrubber with 1.5x–2.0x playback speed',
          'Counselor talk-time leaderboard and daily dial telemetry',
          'Track conversion ratios from lead to paid admission',
        ],
        image: 'https://aicloser.in/blog/wp-content/uploads/2026/10/call-recording-player-waveform.png',
      },
    ],
    workflowSteps: [
      { title: 'Student Inquiry Capture', description: 'Website, Meta Ads, and webinar registrations assign to academic counselors automatically.' },
      { title: 'Counseling Call via SIM', description: 'Counselor connects on SIM; call records automatically to cloud cockpit.' },
      { title: 'Syllabus & Demo WhatsApp Dispatch', description: 'Send course brochure and webinar link with 1 tap.' },
      { title: 'Collect Registration Fee', description: 'Generate in-call Dynamic UPI QR and confirm student admission in 15 minutes.' },
    ],
    comparisonRows: [
      { featureName: 'Call Pickup by Parents', traditionalWay: 'Sub-25% on 080/011 virtual numbers (Spam tagged)', aiCloserWay: '85%–90% on authentic 10-digit mobile SIMs' },
      { featureName: 'Counseling Quality QA', traditionalWay: 'Zero call recordings; subjective counselor reports', aiCloserWay: '100% Background call recordings with waveform scrubber' },
      { featureName: 'Admission Fee Collection', traditionalWay: 'Sending static links; 70% parents reconsider & drop', aiCloserWay: 'In-call Dynamic UPI QR locked before call ends' },
      { featureName: 'Platform Cost', traditionalWay: '₹2,000–₹4,000/counselor/mo on heavy EdTech CRMs', aiCloserWay: 'Flat ₹399/user/month with zero setup fees' },
    ],
    faqs: [
      { question: 'How does AI Closer help coaching institutes boost admissions?', answer: 'By switching from 080 virtual numbers to SIM calling, counselors connect with 3x more parents daily. In-call UPI QR enables collecting admission tokens while interest is highest.' },
      { question: 'Can academic heads listen to counselor calls remotely?', answer: 'Yes! The AI Closer admin dashboard allows directors to listen to any counselor recording from web or mobile with 2x speed playback.' },
      { question: 'Does AI Closer support automated webinar and demo reminders?', answer: 'Yes! Counselors can dispatch automated WhatsApp reminders for upcoming demo lectures and webinars with Google Calendar/Maps links.' },
    ],
    relatedGuides: [
      { title: 'Higher Education Admission Dialer & Call Recording Guide (2026)', slug: 'higher-education-admission-dialer-call-recording-best-practices-2026-1651' },
      { title: 'EdTech Student Counseling Call Recording CRM Guide', slug: 'edtech-student-counseling-call-recording-crm' },
      { title: 'Course Inquiry Follow Up Dialer Best Practices', slug: 'course-inquiry-follow-up-dialer-system' },
    ],
  },
  {
    slug: 'insurance-posp-crm',
    roleName: 'Insurance POSP Telecalling CRM',
    eyebrow: 'BUILT FOR BROKERS & POSP TEAMS',
    tagline: 'Motor, Health & Life Insurance Telecalling Software with Silent Call Recording',
    seoTitle: 'Insurance Telecalling CRM (2026 Guide)',
    seoDescription: 'Protect renewal retention with AI Closer: Zero Truecaller spam SIM calling, instant WhatsApp policy quotes, and 1-tap UPI payment at flat ₹399/user/month.',
    heroBadge: 'POLICY CLOSING SPEED · IRDAI AUDIT SAFE',
    heroHeadline: 'Sell More Insurance Policies. Automate Renewals & Audits.',
    heroSubheadline: 'Insurance telecalling requires trust, speed, and strict audio record-keeping. AI Closer provides SIM-based calling, silent call recording, WhatsApp quote sharing, and renewal tracking at flat ₹399/mo.',
    painPoints: [
      {
        title: 'Customers Hang Up on Spam 080 Telemarketer Numbers',
        description: 'Insurance buyers are skeptical of cold calls from landlines. AI Closer uses mobile SIM cards that look personal and verified, lifting pickups to 85%+.',
      },
      {
        title: 'IRDAI Compliance & Mis-Selling Dispute Risks',
        description: 'Without tamper-proof call recordings, insurance agencies have no defense if a policyholder claims benefits were mis-sold. AI Closer stores permanent cloud audio.',
      },
      {
        title: 'Policy Renewal Lapses Cost 40% of Recurring Commissions',
        description: 'Agents forget to follow up 30 days before motor and health policy expiry. AI Closer automates renewal queues with WhatsApp nudges.',
      },
    ],
    corePillars: [
      {
        title: 'Authentic SIM Calling with Silent Recording',
        description: 'Dials directly from rep SIM cards with background audio capture that never triggers the loud "This call is being recorded" alert.',
        badge: '85% PICKUP RATE',
        bullets: [
          'High connection rate on Airtel/Jio mobile SIMs',
          'Two-way audio recording with secure cloud storage',
          'Protects agency against mis-selling allegations',
        ],
        image: 'https://aicloser.in/blog/wp-content/uploads/2026/10/insurance-telecalling-crm.png',
      },
      {
        title: '1-Tap Policy Quote Delivery on WhatsApp',
        description: 'Send premium comparison tables, policy brochures, and proposal links on WhatsApp immediately while on the phone with the customer.',
        badge: 'INSTANT QUOTE DISPATCH',
        bullets: [
          'Pre-formatted motor & health insurance comparison templates',
          'Personal WhatsApp Web QR synchronization keeps chats in the CRM',
          'Track whether customer opened and reviewed the quote',
        ],
        image: 'https://aicloser.in/blog/wp-content/uploads/2026/10/whatsapp-brochure-dispatch.png',
      },
      {
        title: 'Automated Policy Renewal Reminder Engine',
        description: 'Never miss an annual motor or health renewal. Automated 30-day, 15-day, and 3-day renewal queues with WhatsApp payment links.',
        badge: 'ZERO POLICY LAPSES',
        bullets: [
          'Dedicated Renewal Pipeline stage with expiry countdown',
          'Automated WhatsApp renewal reminders with policy number',
          '1-Click SIM callback dialer for POSP renewal specialists',
        ],
        image: 'https://aicloser.in/blog/wp-content/uploads/2026/10/insurance-renewal-pipeline.png',
      },
      {
        title: 'In-Call Premium Advance Collection via UPI',
        description: 'Lock proposal submissions instantly by generating Dynamic UPI QR codes while the policyholder is on the line.',
        badge: 'INSTANT PREMIUM PAYMENT',
        bullets: [
          '15-Minute live dynamic UPI QR code on caller screen',
          'Real-time webhook payment confirmation',
          'Immediate policy receipt delivery on WhatsApp',
        ],
        image: 'https://aicloser.in/blog/wp-content/uploads/2026/10/in-call-dynamic-upi-qr.png',
      },
    ],
    workflowSteps: [
      { title: 'Lead or Renewal Import', description: 'Import motor/health inquiries or expiry lists via CSV or portal API.' },
      { title: 'SIM Call with Silent Recording', description: 'Connect at 85%+ pickup rate and discuss coverage needs with customer.' },
      { title: '1-Tap WhatsApp Quote', description: 'Send insurer comparison chart and premium calculation on WhatsApp.' },
      { title: 'Collect Premium & Issue Policy', description: 'Generate in-call Dynamic UPI QR and confirm proposal submission.' },
    ],
    comparisonRows: [
      { featureName: 'Call Connect Rate', traditionalWay: '18%–25% on 080 virtual numbers (Spam flagged)', aiCloserWay: '80%–88% on authentic 10-digit mobile SIMs' },
      { featureName: 'Mis-Selling Protection', traditionalWay: 'No recordings; vulnerable to customer disputes', aiCloserWay: 'Permanent cloud call recording with exact timestamps' },
      { featureName: 'Renewal Follow-Up', traditionalWay: 'Manual diaries & spreadsheets; 40% policies lapse', aiCloserWay: 'Automated 30-day renewal countdown in CRM' },
      { featureName: 'Cost per Agent', traditionalWay: '₹2,500/seat on enterprise insurance CRMs', aiCloserWay: 'Flat ₹399/user/month with zero setup fees' },
    ],
    faqs: [
      { question: 'Why is silent call recording important for insurance telecalling?', answer: 'Call recordings protect brokers and agencies against mis-selling complaints by providing indisputable proof of customer consent and terms agreed over the phone.' },
      { question: 'Can insurance agencies track telecaller talk-time and dials?', answer: 'Yes! The AI Closer admin dashboard provides live telemetry showing daily dials, connected talk-time, and call recordings for every agent in real time.' },
      { question: 'Does AI Closer work for freelance POSP agents?', answer: 'Yes! POSP agents can download the lightweight AI Closer Android app on their personal phones and start dialing immediately with zero hardware setup.' },
    ],
    relatedGuides: [
      { title: 'POSP Agent Call Recording and Lead CRM Guide', slug: 'posp-agent-call-recording-and-lead-crm-execution-framework-6604' },
      { title: 'Credit Card & Insurance Telesales CRM with SIM Support', slug: 'credit-card-telesales-crm-with-sim-support' },
      { title: 'How to Prevent Telecalling SIM Cards from Getting Blocked', slug: 'how-to-prevent-telecalling-sim-blocked-airtel-jio-trai-2026' },
    ],
  },

  {
    slug: 'automobile-dealership-crm',
    roleName: 'Automobile Dealership CRM',
    eyebrow: 'BUILT FOR SHOWROOMS & WORKSHOPS',
    tagline: 'Car & Two-Wheeler Dealership Telecalling CRM with 94% Pickup Rate & Test Drive Tracking',
    seoTitle: 'Automobile Dealership CRM (2026 Guide)',
    seoDescription: 'Boost test drive bookings & service retention: 94% call pickup rate with SIM cards, instant WhatsApp brochures, and call recording at flat ₹399/user/month.',
    heroBadge: 'TEST DRIVE BOOKING SPEED · SERVICE RETENTION',
    heroHeadline: 'Turn Car & Bike Inquiries into Showroom Walk-Ins.',
    heroSubheadline: 'Car buyers never pick up spam-flagged 080 numbers. AI Closer equips dealership DSEs and service reminder callers with mobile SIM dialing, instant WhatsApp brochure sharing, and automated test drive tracking at flat ₹399/mo.',
    painPoints: [
      {
        title: 'Car Buyers Ignore Virtual 080 Numbers on Truecaller',
        description: 'Buyers researching cars online get bombarded with calls. When dealerships call from virtual cloud IVRs, Truecaller flags them as spam, driving pickup rates below 30%.',
      },
      {
        title: 'Test Drive Drop-Offs & Slow Speed-to-Lead',
        description: 'Meta Car Lead Forms decay within 15 minutes. Dealership executives call after 4 hours, losing high-intent buyers to rival showrooms down the street.',
      },
      {
        title: 'Service Due Reminders Lost in Spreadsheets',
        description: 'Dealership service departments lose 45% of recurring vehicle servicing revenue because telecallers miss 6-month Periodic Maintenance Service (PMS) cadences.',
      },
    ],
    corePillars: [
      {
        title: 'Authentic 10-Digit Mobile SIM Calling',
        description: 'DSEs dial directly from standard Airtel/Jio SIMs inside company Android phones, eliminating spam flags and delivering 85%+ pickup rates.',
        badge: '85%+ PICKUP RATE',
        bullets: [
          'Direct connection from clean 10-digit mobile caller IDs',
          'Automatic two-way call recording without external announcements',
          'Zero per-minute call pulse bills for high-volume showroom teams',
        ],
        image: 'https://aicloser.in/assets/reference/hero-dashboard.png',
      },
      {
        title: '1-Tap Vehicle Brochure & Quotation on WhatsApp',
        description: 'Send variant brochures, on-road price breakdowns, and EMI calculator links instantly on WhatsApp while the customer is on the phone.',
        badge: 'INSTANT BROCHURE DISPATCH',
        bullets: [
          'Pre-formatted variant spec sheets and on-road price estimates',
          'Sync personal WhatsApp Web chats directly with customer CRM record',
          'Track when customers open and review the pricing breakdown',
        ],
        image: 'https://aicloser.in/assets/reference/leads-view.png',
      },
      {
        title: 'Automated Test Drive Scheduling & Showroom Pins',
        description: 'Track test drive commitments with calendar alerts and Google Maps showroom location pins sent automatically via WhatsApp.',
        badge: 'ZERO WALK-IN NO-SHOWS',
        bullets: [
          'Dedicated Test Drive Pipeline stage with date/time scheduling',
          'Automated WhatsApp reminder 2 hours before the scheduled appointment',
          'Instant Google Maps navigation link sent to buyer smartphone',
        ],
        image: 'https://aicloser.in/assets/reference/pipeline-view.png',
      },
      {
        title: 'Periodic Maintenance Service (PMS) Booking Engine',
        description: 'Never lose vehicle servicing revenue. Automated 6-month and 1-year service reminders with 1-click power dialing.',
        badge: 'RECURRING SERVICE REVENUE',
        bullets: [
          'Automated 180-day service expiry queue for workshop telecallers',
          'Pre-filled service discount vouchers sent via WhatsApp',
          'Live telecaller activity tracking for workshop receptionists',
        ],
        image: 'https://aicloser.in/assets/reference/hero-dashboard.png',
      },
    ],
    workflowSteps: [
      { title: 'Inquiry Intake', description: 'Instant lead capture from Meta ads, CarWale, CarDekho, or showroom walk-ins.' },
      { title: 'Sub-60s SIM Call', description: 'Connect with high-intent car buyer at 90%+ pickup rate using native mobile SIM.' },
      { title: '1-Tap WhatsApp Spec Sheet', description: 'Send on-road price breakdown, finance options, and showroom map pin.' },
      { title: 'Confirm Test Drive / Service Slot', description: 'Lock appointment in CRM with automated WhatsApp confirmation and reminders.' },
    ],
    comparisonRows: [
      { featureName: 'Call Connect Rate', traditionalWay: '25%–32% on Cloud IVR (Spam Flagged)', aiCloserWay: '85%–94% on Authentic 10-Digit Mobile SIMs' },
      { featureName: 'Quotation Speed', traditionalWay: '30-minute email delay; buyer visits rival', aiCloserWay: '1-Tap Instant WhatsApp EMI & Price Chart' },
      { featureName: 'Service Renewal Tracking', traditionalWay: 'Lost in Excel sheets; 45% customers lapse', aiCloserWay: 'Automated PMS Service Queue with WhatsApp Nudges' },
      { featureName: 'Cost per DSE / Agent', traditionalWay: '₹2,500/seat on heavy auto enterprise CRMs', aiCloserWay: 'Flat ₹399/user/month with zero setup fees' },
    ],
    faqs: [
      { question: 'How does AI Closer help car dealerships increase test drive conversions?', answer: 'By dialing leads within 60 seconds from clean mobile SIMs, dealership executives connect before the buyer forgets the inquiry, locking test drives 3x faster than delayed calls.' },
      { question: 'Can dealership general managers listen to executive customer pitches?', answer: 'Yes! Complete call audio is automatically synced to the web admin dashboard with talk-time analytics, daily dials, and playback on desktop and mobile.' },
      { question: 'Does AI Closer support workshop service outbound calling?', answer: 'Yes! Workshop telecallers can load monthly Periodic Maintenance Service (PMS) customer lists and dial with 1-click power dialing and WhatsApp service vouchers.' },
    ],
    relatedGuides: [
      { title: 'Commercial Telesales Tracking App Implementation Guide', slug: 'commercial-solar-telesales-tracking-app-implementation-guide-3377' },
      { title: 'Best Telecalling Apps for Android Smartphones in India', slug: 'best-telecalling-apps-for-android-smartphones-india-complete-playbook-8489' },
      { title: 'How to Fix Truecaller Spam Tagging on Sales Calls', slug: 'how-to-fix-truecaller-spam-tagging-sales-calls-execution-framework-5433' },
    ],
  },
  {
    slug: 'healthcare-clinic-crm',
    roleName: 'Healthcare & Clinic Calling CRM',
    eyebrow: 'BUILT FOR HOSPITALS, CLINICS & LABS',
    tagline: 'Patient Appointment & Tele-Consultation Calling CRM with Zero Spam Flagging',
    seoTitle: 'Healthcare Telecalling CRM (2026 Guide)',
    seoDescription: 'Cut patient no-shows by 60%: High-pickup SIM calling, automated WhatsApp appointment reminders, and digital consultation booking at flat ₹399/user/month.',
    heroBadge: 'PATIENT RETENTION · ZERO NO-SHOW APPOINTMENTS',
    heroHeadline: 'Fill Clinic Calendars & Eliminate Patient No-Shows.',
    heroSubheadline: 'Patients ignore spam-tagged corporate 080 landlines. AI Closer enables clinic receptionists, hospital counselors, and diagnostic coordinators to call from trusted mobile SIMs with automated WhatsApp reminders at flat ₹399/mo.',
    painPoints: [
      {
        title: 'Patients Reject Spam-Flagged Hospital Landlines',
        description: 'Patients awaiting consultation slots or lab reports ignore cold calls from virtual call center lines, leading to missed appointments and delayed care.',
      },
      {
        title: '35%–45% No-Show Rates for OPD Consultations & Procedures',
        description: 'Patients forget booked OPD appointments without timely WhatsApp confirmations and doctor location instructions.',
      },
      {
        title: 'Fragmented Patient History Across Registers',
        description: 'Receptionists scramble to find previous consultation notes and prescribed diagnostic packages during follow-up calls.',
      },
    ],
    corePillars: [
      {
        title: 'Trusted Mobile SIM Calling for Patient Care',
        description: 'Dials from clean, verified SIM cards that look like personal clinic numbers, lifting call-to-connect rates to 92%+.',
        badge: '92% PATIENT CONNECTION',
        bullets: [
          'High connection rate on standard 10-digit mobile SIM cards',
          'Two-way audio recording with encrypted cloud storage',
          'Protects clinic staff against miscommunication disputes',
        ],
        image: 'https://aicloser.in/assets/reference/hero-dashboard.png',
      },
      {
        title: 'Automated WhatsApp Appointment Confirmations',
        description: 'Dispatches instant appointment time, doctor details, preparation checklist, and clinic Google Maps location.',
        badge: 'ZERO NO-SHOW APPOINTMENTS',
        bullets: [
          'Instant WhatsApp appointment slip with doctor name and time',
          'Fasting & test preparation instructions sent automatically',
          'Automated reminder message 2 hours prior to consultation',
        ],
        image: 'https://aicloser.in/assets/reference/leads-view.png',
      },
      {
        title: 'Diagnostic Report & Follow-Up Tracking Queue',
        description: 'Maintains daily follow-up queues for post-procedure checkups, routine health checkups, and chronic care re-visits.',
        badge: 'PATIENT CARE RETENTION',
        bullets: [
          'Scheduled follow-up queue for post-surgery and routine checkups',
          '1-Click WhatsApp report delivery to patient mobile',
          'Centralized patient call history and communication timeline',
        ],
        image: 'https://aicloser.in/assets/reference/pipeline-view.png',
      },
      {
        title: 'In-Call Dynamic UPI Consultation Advance Collection',
        description: 'Lock consultation slots and surgery token advances on the call via secure Dynamic UPI QR codes.',
        badge: 'INSTANT CONSULTATION PAYMENT',
        bullets: [
          '15-Minute live dynamic UPI QR code on caller screen',
          'Real-time payment confirmation for advance OPD bookings',
          'Immediate digital receipt delivery on WhatsApp',
        ],
        image: 'https://aicloser.in/assets/reference/hero-dashboard.png',
      },
    ],
    workflowSteps: [
      { title: 'Inquiry & Lead Intake', description: 'Receive patient inquiries from website, Google Business Profile, or Practo.' },
      { title: 'SIM Call Connection', description: 'Receptionist connects at 92%+ pickup rate to understand medical requirements.' },
      { title: 'Send WhatsApp Slip & Prep Guide', description: 'Dispatch doctor slot, clinic Google Maps location, and test instructions.' },
      { title: 'Automated Reminder & OPD Visit', description: 'Automated T-24h and T-2h WhatsApp notifications prevent missed appointments.' },
    ],
    comparisonRows: [
      { featureName: 'Patient Pickup Rate', traditionalWay: '28% on Spam Virtual 080 Numbers', aiCloserWay: '90%+ on Authentic Clinic Mobile SIMs' },
      { featureName: 'Appointment No-Shows', traditionalWay: '35%–45% without reminders', aiCloserWay: 'Under 10% with Automated WhatsApp Reminders' },
      { featureName: 'Consultation Advance', traditionalWay: 'Manual bank transfers & lost bookings', aiCloserWay: 'In-Call 1-Tap Dynamic UPI QR Code' },
      { featureName: 'Software Cost', traditionalWay: '₹3,000–₹5,000/seat on hospital HMS modules', aiCloserWay: 'Flat ₹399/user/month (zero setup fee)' },
    ],
    faqs: [
      { question: 'How does AI Closer prevent patient appointment no-shows?', answer: 'By sending automated WhatsApp confirmation tickets with location pins immediately after the call and automated reminder alerts 2 hours prior to the appointment.' },
      { question: 'Is patient call recording safe and confidential?', answer: 'Yes! All call recordings are stored with encrypted cloud access restricted exclusively to clinic administrators and medical directors.' },
      { question: 'Can diagnostic centers use AI Closer for home sample collection bookings?', answer: 'Yes! Diagnostic lab booking agents can verify patient addresses and confirm phlebotomist collection slots with 1-click power dialing.' },
    ],
    relatedGuides: [
      { title: 'Customer Privacy Notices in Automated WhatsApp Lead Acknowledgments', slug: 'customer-privacy-notices-in-automated-whatsapp-lead-acknowledgmen' },
      { title: 'Preventing Call Recording Tampering with Cryptographic Verification', slug: 'preventing-call-recording-tampering-cryptographic-hash-verificati' },
      { title: 'TeleCRM vs Runo vs AI Closer Comparison (2026)', slug: 'telecrm-vs-runo-vs-ai-closer-sim-crm-comparison-2026' },
    ],
  },

];

export function getRole(slug: string): RoleDefinition | undefined {
  const normalized = slug.replace(/^for-/, '');
  return roles.find((r) => r.slug === normalized || r.slug === slug);
}
