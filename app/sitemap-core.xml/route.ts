import { locations } from '../../lib/locations';
import { features } from '../../lib/features';
import { competitors } from '../../lib/competitors';
import { roles } from '../../lib/roles';

export const revalidate = 3600;

export async function GET() {
  const siteUrl = 'https://aicloser.in';
  const now = new Date().toISOString();

  const coreRoutes = [
    { url: `${siteUrl}/`, priority: '1.0', changefreq: 'daily' },
    { url: `${siteUrl}/pricing`, priority: '0.95', changefreq: 'daily' },
    { url: `${siteUrl}/calculator`, priority: '0.95', changefreq: 'daily' },
    { url: `${siteUrl}/tools/truecaller-spam-checker`, priority: '0.98', changefreq: 'daily' },
    { url: `${siteUrl}/features`, priority: '0.9', changefreq: 'weekly' },
    { url: `${siteUrl}/vs`, priority: '0.9', changefreq: 'weekly' },
    { url: `${siteUrl}/locations`, priority: '0.92', changefreq: 'weekly' },
    { url: `${siteUrl}/for`, priority: '0.9', changefreq: 'weekly' },
    { url: `${siteUrl}/for/real-estate-crm`, priority: '0.92', changefreq: 'weekly' },
    { url: `${siteUrl}/for/loan-dsa-calling-crm`, priority: '0.92', changefreq: 'weekly' },
    { url: `${siteUrl}/for/edtech-admissions-dialer`, priority: '0.92', changefreq: 'weekly' },
    { url: `${siteUrl}/for/insurance-posp-crm`, priority: '0.92', changefreq: 'weekly' },
    { url: `${siteUrl}/for/automobile-dealership-crm`, priority: '0.92', changefreq: 'weekly' },
    { url: `${siteUrl}/for/healthcare-clinic-crm`, priority: '0.92', changefreq: 'weekly' },
    { url: `${siteUrl}/about`, priority: '0.8', changefreq: 'monthly' },
    { url: `${siteUrl}/contact`, priority: '0.8', changefreq: 'monthly' },
    { url: `${siteUrl}/security`, priority: '0.8', changefreq: 'monthly' },
    { url: `${siteUrl}/blog`, priority: '0.95', changefreq: 'daily' },
    // High-Intent Competitor & Strategy Master Posts (2026)
    { url: `${siteUrl}/blog/leadsquared-alternative-sim-telecalling-crm-comparison-2026`, priority: '0.98', changefreq: 'daily' },
    { url: `${siteUrl}/blog/exotel-cloud-telephony-vs-sim-crm-pickup-rate-comparison-2026`, priority: '0.98', changefreq: 'daily' },
    { url: `${siteUrl}/blog/bitrix24-alternative-sim-calling-crm-india-2026`, priority: '0.98', changefreq: 'daily' },
    { url: `${siteUrl}/blog/mis-work-vs-ai-closer-sim-based-crm-comparison-2026`, priority: '0.98', changefreq: 'daily' },
    { url: `${siteUrl}/blog/telecrm-vs-runo-vs-ai-closer-sim-crm-comparison-2026`, priority: '0.98', changefreq: 'daily' },
    { url: `${siteUrl}/blog/how-to-prevent-telecalling-sim-blocked-airtel-jio-trai-2026`, priority: '0.98', changefreq: 'daily' },
    // 7 Flagship Problem-Solution Pillars
    { url: `${siteUrl}/blog/telecrm-vs-ai-closer-sim-based-crm-comparison`, priority: '0.98', changefreq: 'daily' },
    { url: `${siteUrl}/blog/why-sim-based-calling-crm-beats-cloud-telephony-in-india`, priority: '0.98', changefreq: 'daily' },
    { url: `${siteUrl}/blog/how-to-track-sales-team-productivity-calls-followups-closures`, priority: '0.98', changefreq: 'daily' },
    { url: `${siteUrl}/blog/stop-losing-leads-zero-leakage-inbox-followup-system`, priority: '0.98', changefreq: 'daily' },
    { url: `${siteUrl}/blog/whatsapp-crm-integration-auto-followup-payment-links`, priority: '0.98', changefreq: 'daily' },
    { url: `${siteUrl}/blog/instant-upi-payment-collection-in-call-qr-settlement`, priority: '0.98', changefreq: 'daily' },
    { url: `${siteUrl}/blog/mobile-first-sales-crm-for-indian-msme-field-teams`, priority: '0.98', changefreq: 'daily' },
    { url: `${siteUrl}/blog/best-sim-based-crm-in-india`, priority: '0.9', changefreq: 'weekly' },
    { url: `${siteUrl}/blog/how-to-remove-telecalling-number-from-truecaller-spam-guide-2026`, priority: '0.98', changefreq: 'daily' },
    { url: `${siteUrl}/privacy`, priority: '0.5', changefreq: 'monthly' },
    { url: `${siteUrl}/terms`, priority: '0.5', changefreq: 'monthly' },
    { url: `${siteUrl}/refund-policy`, priority: '0.5', changefreq: 'monthly' },
  ];

  const featureRoutes = features.map((f) => ({
    url: `${siteUrl}/features/${f.slug}`,
    priority: '0.85',
    changefreq: 'weekly',
  }));

  const competitorRoutes = competitors.map((c) => ({
    url: `${siteUrl}/vs/${c.slug}`,
    priority: '0.85',
    changefreq: 'weekly',
  }));

  const roleRoutes = roles.map((r) => ({
    url: `${siteUrl}/for/${r.slug}`,
    priority: '0.90',
    changefreq: 'weekly',
  }));

  const locationRoutes = locations.map((l) => ({
    url: `${siteUrl}/locations/${l.slug}`,
    priority: '0.88',
    changefreq: 'weekly',
  }));

  const allRawEntries = [
    ...coreRoutes,
    ...featureRoutes,
    ...competitorRoutes,
    ...roleRoutes,
    ...locationRoutes,
  ];

  // Deduplicate by URL
  const seenUrls = new Set<string>();
  const allEntries = allRawEntries.filter((item) => {
    if (seenUrls.has(item.url)) return false;
    seenUrls.add(item.url);
    return true;
  });

  const xmlEntries = allEntries
    .map(
      (entry) => `  <url>
    <loc>${entry.url}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`
    )
    .join('\n');

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlEntries}
</urlset>`;

  return new Response(sitemapXml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=600',
    },
  });
}
