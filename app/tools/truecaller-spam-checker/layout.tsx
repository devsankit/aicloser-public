import type { Metadata } from 'next';

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

export default function TruecallerCheckerLayout({ children }: { children: React.ReactNode }) {
  return children;
}
