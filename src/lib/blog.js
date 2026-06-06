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
