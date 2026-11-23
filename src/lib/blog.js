import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const BLOG_DIR = path.join(process.cwd(), 'src/content/blog');

/**
 * Get all blog posts, sorted by date descending.
 */
export function getAllPosts() {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.mdx'));

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, '');
    const filepath = path.join(BLOG_DIR, filename);
    const raw = fs.readFileSync(filepath, 'utf8');
    const { data } = matter(raw);

    return {
      slug,
      title: data.title || slug,
      seoTitle: data.seoTitle || null,
      date: data.date || null,
      author: data.author || 'SEO.md Team',
      summary: data.summary || '',
      tags: data.tags || [],
      readingTime: estimateReadingTime(raw),
    };
  });

  return posts.sort((a, b) => {
    if (!a.date) return 1;
    if (!b.date) return -1;
    return new Date(b.date) - new Date(a.date);
  });
}

/**
 * Get a single post's frontmatter by slug.
 */
export function getPostBySlug(slug) {
  const filepath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filepath)) return null;

  const raw = fs.readFileSync(filepath, 'utf8');
  const { data } = matter(raw);

  return {
    slug,
    title: data.title || slug,
    seoTitle: data.seoTitle || null,
    date: data.date || null,
    author: data.author || 'SEO.md Team',
    summary: data.summary || '',
    tags: data.tags || [],
    readingTime: estimateReadingTime(raw),
  };
}

/**
 * Rough reading time estimate.
 */
function estimateReadingTime(content) {
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / 200);
  return `${minutes} min read`;
}

/**
 * Format a date string for display (e.g. "June 5, 2026").
 */
export function formatDate(dateStr) {
  if (!dateStr) return '';
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Pulls question/answer pairs from a post's "## FAQ" section so the page can emit FAQPage JSON-LD
 * from the same text readers see. Questions are `### ` headings; the answer is the text up to the
 * next heading. Markdown links, code ticks and emphasis are stripped from the answer.
 */
export function getPostFaq(slug) {
  const filepath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filepath)) return [];

  const { content } = matter(fs.readFileSync(filepath, 'utf8'));
  const section = content.split(/^## +(?:FAQ|Frequently Asked Questions)\s*$/im)[1];
  if (!section) return [];

  const body = section.split(/^## /m)[0];
  return body
    .split(/^### +/m)
    .slice(1)
    .map((block) => {
      const [question, ...rest] = block.split('\n');
      const answer = rest
        .join(' ')
        .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
        .replace(/[`*_]/g, '')
        .replace(/\s+/g, ' ')
        .trim();
      return { question: question.trim(), answer };
    })
    .filter((item) => item.question && item.answer);
}
