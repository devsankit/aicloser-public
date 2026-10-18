import fs from 'node:fs';
import path from 'node:path';

export const revalidate = 86400;

export async function GET() {
  const filePath = path.join(process.cwd(), 'public', 'llms.txt');
  let content = '';
  try {
    content = fs.readFileSync(filePath, 'utf8');
  } catch {
    content = '# AI Closer CRM\nhttps://aicloser.in\n';
  }

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}
