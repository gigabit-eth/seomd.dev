import Link from 'next/link';
import Navbar from '@/components/Navbar';
import CheckeredDivider from '@/components/CheckeredDivider';
import SpecFooter from '@/components/SpecFooter';
import { getAllPosts, formatDate } from '@/lib/blog';

export const metadata = {
  title: 'Blog',
  description:
    'Writing on AI Engine Optimization, the SEO.md standard, AEO strategy, citation tracking, and the future of AI search.',
  alternates: {
    canonical: '/blog',
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-surface">
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 md:px-10">
        {/* Blog header */}
        <div className="pt-14 pb-10 border-b-2 border-primary">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-secondary mb-4">
            BLOG
          </p>
          <h1 className="font-display text-[clamp(48px,8vw,80px)] uppercase leading-[0.95] tracking-wide">
            WRITING
          </h1>
          <CheckeredDivider className="mt-6 mb-6" />
          <p className="font-body text-body-lg text-on-surface-variant max-w-xl">
            On AI Engine Optimization, the SEO.md standard, and the
            future of AI search.
          </p>
        </div>

        {/* Post listing */}
        <div className="py-4">
          {posts.length === 0 ? (
            <p className="font-mono text-secondary py-12">No posts yet.</p>
          ) : (
            <div className="divide-y divide-outline-variant">
              {posts.map((post) => (
                <article key={post.slug} className="py-10">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <time
                      dateTime={post.date}
                      className="font-mono text-[12px] text-secondary uppercase tracking-wider"
                    >
                      {formatDate(post.date)}
                    </time>
                    <span className="font-mono text-[10px] text-outline">·</span>
                    <span className="font-mono text-[12px] text-secondary">
                      {post.readingTime}
                    </span>
                    {post.tags.map((tag) => (
                      <span key={tag} className="status-pill pending">{tag}</span>
                    ))}
                  </div>

                  <h2 className="font-display text-headline-md uppercase leading-headline mb-3">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:underline underline-offset-4"
                      id={`blog-link-${post.slug}`}
                    >
                      {post.title}
                    </Link>
                  </h2>

                  <p className="font-body text-body-md text-on-surface-variant leading-body max-w-2xl mb-4">
                    {post.summary}
                  </p>

                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[11px] text-secondary">BY {post.author.toUpperCase()}</span>
                    <span className="font-mono text-secondary">·</span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="font-mono text-label-mono font-semibold uppercase tracking-wider text-primary hover:underline underline-offset-2"
                    >
                      READ →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </main>

      <SpecFooter verifiedBy="SEOMD_CORE" location="GITHUB" />
    </div>
  );
}
