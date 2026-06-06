import { notFound } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import CheckeredDivider from '@/components/CheckeredDivider';
import SpecFooter from '@/components/SpecFooter';
import { getPostBySlug, getAllPosts, formatDate } from '@/lib/blog';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.summary,
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: { card: 'summary_large_image', title: post.title, description: post.summary },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  let PostContent;
  try {
    const mod = await import(`@/content/blog/${slug}.mdx`);
    PostContent = mod.default;
  } catch {
    notFound();
  }

  return (
    <div className="min-h-screen bg-surface">
      <Navbar />

      <main className="max-w-3xl mx-auto px-6 md:px-10">
        {/* Post header */}
        <header className="pt-12 pb-10 border-b-2 border-primary">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-secondary hover:text-primary transition-colors mb-8"
          >
            ← BACK TO BLOG
          </Link>

          <div className="flex flex-wrap items-center gap-4 mb-5">
            <time dateTime={post.date} className="font-mono text-[12px] text-secondary uppercase tracking-wider">
              {formatDate(post.date)}
            </time>
            <span className="font-mono text-[10px] text-outline">·</span>
            <span className="font-mono text-[12px] text-secondary">{post.readingTime}</span>
            {post.tags.map((tag) => (
              <span key={tag} className="status-pill pending">{tag}</span>
            ))}
          </div>

          <h1 className="font-display text-[clamp(32px,5vw,52px)] uppercase leading-[1.1] tracking-wide mb-4">
            {post.title}
          </h1>

          <p className="font-accent text-[20px] leading-relaxed text-on-surface-variant mb-5">
            {post.summary}
          </p>

          <span className="font-mono text-[11px] uppercase tracking-widest text-secondary">
            BY {post.author.toUpperCase()}
          </span>

          <CheckeredDivider className="mt-8" />
        </header>

        {/* Post body — MDX rendered */}
        <article className="py-12 space-y-0">
          <PostContent />
        </article>

        {/* Back nav */}
        <div className="py-8 border-t border-outline-variant">
          <Link href="/blog" className="btn-secondary inline-flex" id="back-to-blog">
            ← ALL POSTS
          </Link>
        </div>
      </main>

      <SpecFooter verifiedBy="SEOMD_CORE" location="GITHUB" />
    </div>
  );
}
