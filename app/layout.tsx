import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import './legacy.css';

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      name: 'AI Closer',
      url: 'https://aicloser.in',
      logo: 'https://aicloser.in/assets/closer-logo.png',
      sameAs: ['https://www.facebook.com/AICloser.in', 'https://www.instagram.com/aicloser.in/'],
      brand: { '@type': 'Brand', name: 'AI Closer' },
      parentOrganization: { '@type': 'Organization', name: 'Gigxomi' },
    },
    {
      '@type': 'SoftwareApplication',
      name: 'AI Closer',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web, Android',
      url: 'https://aicloser.in',
      image: 'https://aicloser.in/assets/closer-logo.png',
      description: 'SIM-based sales CRM for telecalling, automatic call recording, lead management, and AI sales coaching.',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        ratingCount: '128',
        bestRating: '5',
      },
      offers: {
        '@type': 'Offer',
        price: '299',
        priceCurrency: 'INR',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '299',
          priceCurrency: 'INR',
          unitText: 'user/month',
        },
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is AI Closer and how does SIM-based call recording work?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'AI Closer is an AI-powered sales CRM designed for telecalling and closing teams in India. It works directly with your sales reps regular SIM cards via the AI Closer Android app, automatically recording inbound and outbound calls and logging durations without expensive cloud telephony or IVR setup.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why choose a SIM-based CRM over cloud telephony like Exotel or TeleCRM?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Cloud telephony uses virtual numbers that often get flagged as spam, leading to poor pickup rates (30-40%) and expensive per-minute charges. AI Closer uses standard mobile SIM cards, delivering 95%+ pickup rates, zero per-minute calling charges, and crystal-clear call quality at just ₹299/user/month.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does AI Closer automate lead management and follow-up reminders?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'AI Closer connects to your lead sources (Meta Ads, Google Forms, websites, WhatsApp) and automatically distributes leads to telecallers via round-robin. Reps receive automated follow-up notifications and WhatsApp shortcuts so hot prospects never slip through the cracks.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can sales managers listen to call recordings and track daily telecaller activity?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. The AI Closer admin dashboard gives managers centralized access to every call recording, daily call duration, connected calls count, and lead status updates across the entire sales team in real time.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is included in the ₹299/user/month pricing plan?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Everything is included with zero hidden fees: automatic SIM call recording, Android mobile app, admin dashboard, lead management, visual pipeline, WhatsApp integration, centralized audio playback, and AI sales conversation insights.',
          },
        },
      ],
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL('https://aicloser.in'),
  title: {
    default: 'AI Closer — SIM-Based Sales CRM & Automatic Call Recording',
    template: '%s | AI Closer',
  },
  description: "AI Closer is India's premier SIM-based sales CRM. Record calls directly from your SIM, manage leads, automate follow-ups, and coach sales teams at ₹299/mo.",
  keywords: [
    'AI Closer',
    'AI Closer CRM',
    'SIM based CRM India',
    'sales CRM for small business',
    'sales call recording software',
    'telecalling CRM software',
    'outbound call recording CRM',
    'lead management software',
    'WhatsApp sales CRM',
    'AI sales coaching',
  ],
  alternates: { canonical: '/' },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '192x192' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    url: 'https://aicloser.in',
    siteName: 'AI Closer',
    title: 'AI Closer — SIM-Based Sales CRM & Automatic Call Recording',
    description: 'Automatically record sales calls from your SIM, manage leads, automate follow-ups, and coach sales teams with AI Closer at ₹299/mo.',
    images: [{ url: '/assets/reference/hero-dashboard.png', alt: 'AI Closer sales CRM dashboard' }],
  },
  twitter: {
    card: 'summary',
    title: 'AI Closer — SIM-Based Sales CRM & Automatic Call Recording',
    description: 'Automatically record sales calls from your SIM, manage leads, automate follow-ups, and coach sales teams with AI Closer at ₹299/mo.',
    images: ['/assets/reference/hero-dashboard.png'],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-QE4JTTD2WD';

  return (
    <html lang="en">
      <body>
        {gaMeasurementId ? (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '${gaMeasurementId}');`,
              }}
            />
          </>
        ) : null}
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Script src="/site-runtime.js?v=next-migration" strategy="afterInteractive" />
      </body>
    </html>
  );
}
