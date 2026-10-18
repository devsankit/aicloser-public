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
        price: '399',
        priceCurrency: 'INR',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '399',
          priceCurrency: 'INR',
          unitText: 'user/month',
        },
      },
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL('https://aicloser.in'),
  title: {
    default: 'AI Closer — SIM-Based Sales CRM & Automatic Call Recording',
    template: '%s | AI Closer',
  },
  description: "AI Closer is India's premier SIM-based sales CRM. Record calls directly from your SIM, manage leads, automate follow-ups, and coach sales teams at ₹399/mo.",
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
    description: 'Automatically record sales calls from your SIM, manage leads, automate follow-ups, and coach sales teams with AI Closer at ₹399/mo.',
    images: [{ url: '/assets/reference/hero-dashboard.png', alt: 'AI Closer sales CRM dashboard' }],
  },
  twitter: {
    card: 'summary',
    title: 'AI Closer — SIM-Based Sales CRM & Automatic Call Recording',
    description: 'Automatically record sales calls from your SIM, manage leads, automate follow-ups, and coach sales teams with AI Closer at ₹399/mo.',
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
