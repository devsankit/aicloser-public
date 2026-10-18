import fs from 'fs';
import path from 'path';

export const revalidate = 3600;

export async function GET() {
  const filePath = path.join(process.cwd(), 'public', 'sitemap-blogs.xml');
  if (fs.existsSync(filePath)) {
    const xml = fs.readFileSync(filePath, 'utf-8');
    return new Response(xml, {
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=600',
      },
    });
  }
  return new Response('<urlset xmlns=" http://www.sitemaps.org/schemas/sitemap/0.9\></urlset>', {
 headers: { 'Content-Type': 'application/xml; charset=utf-8' },
 });
}
