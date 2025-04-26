import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const slug = req.nextUrl.pathname.split('/').pop(); // 마지막 segment 추출

  if (!slug) {
    return new NextResponse('Slug is required', { status: 400 });
  }

  const markdownPath = path.join(process.cwd(), 'public', 'markdowns', `${slug}.md`);

  try {
    const fileContents = fs.readFileSync(markdownPath, 'utf8');
    const { content } = matter(fileContents);
    return NextResponse.json({ content });
  } catch (error) {
    console.error('Error reading markdown file:', error);
    return new NextResponse('Not found', { status: 404 });
  }
}
