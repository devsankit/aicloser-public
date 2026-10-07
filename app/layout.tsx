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
      '@type': 'Product',
      name: 'AI Closer Sales CRM',
      description: 'SIM-based sales CRM for calls, leads, follow-ups, team monitoring, and sales coaching.',
      brand: { '@type': 'Brand', name: 'AI Closer' },
      offers: {
        '@type': 'Offer',
        url: 'https://aicloser.in/pricing',
        price: '299',
        priceCurrency: 'INR',
        availability: 'https://schema.org/InStock',
        priceValidUntil: '2027-12-31',
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is a sales pipeline?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A sales pipeline is a visual representation of your sales process that helps you track leads and opportunities through each stage.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I automate my sales pipeline?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Connect lead sources, create custom stages, and let AI Closer automate follow-ups and reminders.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is included in AI Closer pricing?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'AI Closer includes call recording, SIM support, centralized call history, lead management, team monitoring, pipeline management, sales conversation insights, coaching insights, and notifications for ₹299 per user per month.',
          },
        },
      ],
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL('https://aicloser.in'),
  title: {
    default: 'AI Closer — Close Deals Faster',
    template: '%s | AI Closer',
  },
  description: 'AI Closer is a SIM-based sales CRM from Gigxomi for recording calls, managing leads, automating follow-ups, and coaching sales teams.',
  keywords: ['SIM based CRM India', 'sales CRM for small business', 'sales call recording software', 'lead management software', 'video editing company CRM', 'AI sales coaching'],
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
    title: 'AI Closer — Close Deals Faster',
    description: 'One connected workspace for sales calls, leads, follow-ups, team performance, and AI-powered sales coaching.',
    images: [{ url: '/assets/reference/hero-dashboard.png', alt: 'AI Closer sales CRM dashboard' }],
  },
  twitter: {
    card: 'summary',
    title: 'AI Closer — Close Deals Faster',
    description: 'Record calls, manage leads, and coach your sales team from one connected workspace.',
    images: ['/assets/reference/hero-dashboard.png'],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html lang="en">
      <body>
        {gaMeasurementId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaMeasurementId}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
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
