import type { Metadata } from 'next';
import { MarketingLayout } from '../../marketing-layout';
import { TruecallerSpamCheckerClient } from './truecaller-spam-checker-client';

export const metadata: Metadata = {
  title: {
    absolute: 'Truecaller Spam Score Checker & Unlisting Tool (2026)',
  },
  description:
    "Check your sales team's Truecaller spam score and pickup rate penalty. Get step-by-step unlisting instructions and switch to SIM CRM at flat ₹399/month.",
  alternates: {
    canonical: 'https://aicloser.in/tools/truecaller-spam-checker',
  },
  openGraph: {
    title: 'Truecaller Spam Score Checker & Unlisting Tool (2026)',
    description:
      "Check your sales team's Truecaller spam score and pickup rate penalty. Get step-by-step unlisting instructions and switch to SIM CRM at flat ₹399/month.",
    url: 'https://aicloser.in/tools/truecaller-spam-checker',
    siteName: 'AI Closer',
    images: [
      {
        url: 'https://aicloser.in/assets/closer-logo.png',
        width: 1200,
        height: 630,
        alt: 'AI Closer Truecaller Spam Score Checker & Unlisting Tool',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Truecaller Spam Score Checker & Unlisting Tool (2026)',
    description:
      "Check your sales team's Truecaller spam score and pickup rate penalty. Get step-by-step unlisting instructions and switch to SIM CRM at flat ₹399/month.",
    images: ['https://aicloser.in/assets/closer-logo.png'],
  },
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Truecaller Spam Score Checker & Telecalling Auditor',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'All',
  url: 'https://aicloser.in/tools/truecaller-spam-checker',
  image: 'https://aicloser.in/assets/closer-logo.png',
  description:
    'Evaluate telecalling spam penalty, lost connect hours, TRAI carrier filter thresholds, and unlisting steps for sales teams in India.',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    ratingCount: '128',
    bestRating: '5',
  },
  offers: {
    '@type': 'Offer',
    price: '399',
    priceCurrency: 'INR',
    priceSpecification: {
      '@type': 'UnitPriceSpecification',
      price: '399',
      priceCurrency: 'INR',
      unitText: 'user/month',
    },
  },
};

const faqPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Why are my sales team's mobile numbers showing as spam on Truecaller?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Truecaller marks numbers as spam when they exceed daily dialing thresholds (over 120 calls/day on Airtel or Jio), have short call durations under 15 seconds, or receive prospect spam reports. Virtual 080 cloud numbers suffer a 70%+ spam rate compared to standard mobile SIM cards.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I remove our sales number from Truecaller spam?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Follow our 4-step unlisting playbook: 1) Submit delisting request at truecaller.com/unlisting. 2) Allow 24 hours for Truecaller public search caches to clear. 3) Verify your business profile via Truecaller for Business to obtain a verified green badge. 4) Switch to AI Closer SIM CRM to cap dials per SIM and send pre-call WhatsApp greetings.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does the Airtel AI spam filter affect telecalling teams?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Airtel active AI spam filter inspects network call velocity in real time. Outbound SIMs exceeding 120 calls/day without proportional inbound engagement are flagged at the carrier switch level, resulting in automatic spam tags on caller screens.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Jio burst dialing heuristic penalty?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Jio network algorithms flag numbers that dial prospects in rapid succession with inter-call spacing under 15 seconds. Human-paced cadences (30s to 60s+ between calls) keep numbers below automated telecom burst triggers.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does AI Closer guarantee 85%+ call pickup rates?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI Closer routes outbound calls through native 10-digit Indian mobile SIM cards (Airtel, Jio, Vi) rather than virtual 080 landline numbers. Combined with automated <60s WhatsApp pre-call greetings that introduce the agent by name, prospects recognize who is calling and answer readily.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the pricing for AI Closer SIM CRM?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI Closer is available at a flat rate of ₹399 per user per month with zero hidden fees, zero cloud telephony pulse charges, and unlimited automatic SIM call recording.',
      },
    },
  ],
};

export default function TruecallerSpamCheckerPage() {
  return (
    <MarketingLayout active="features">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([softwareApplicationSchema, faqPageSchema]),
        }}
      />
      <TruecallerSpamCheckerClient />
    </MarketingLayout>
  );
}
