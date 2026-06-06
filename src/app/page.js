import Link from 'next/link';
import Navbar from '@/components/Navbar';
import CheckeredDivider from '@/components/CheckeredDivider';
import SpecFooter from '@/components/SpecFooter';

const SITE_TYPES = ['SaaS', 'Blog', 'eCommerce', 'Marketplace', 'Local'];

const SIMILAR_STANDARDS = [
  { name: 'CLAUDE.md', desc: 'Anthropic AI instructions' },
  { name: 'AGENTS.md', desc: 'Autonomous agent contracts' },
  { name: 'DESIGN.md', desc: 'UI design system spec' },
  { name: 'SEO.md', desc: 'AI search optimization', active: true },
];

const FEATURES = [
  {
    index: '01',
    title: 'FOUNDER DECLARES',
    desc: 'You own your SEO strategy. Define your brand, keywords, intent queries, and target AI engines — in plain text, version controlled.',
  },
  {
    index: '02',
    title: 'PLATFORM WRITES BACK',
    desc: 'Connect a platform provider like Foxcite to populate _analysis blocks with live citation rates, gap scores, and competitor intelligence.',
  },
  {
    index: '03',
    title: 'AI ENGINES READ IT',
    desc: 'SEO.md tells crawlers, AI bots, and search engines exactly how to understand, cite, and rank your brand. No guesswork.',
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-surface">
      <Navbar />

      {/* ── HERO ── */}
      <section className="border-b-2 border-primary px-6 md:px-16 pt-16 pb-14">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-secondary">
              OPEN STANDARD
            </span>
            <span className="version-badge">V1.0-ALPHA</span>
            <span className="font-mono text-[11px] text-secondary">
              spec v1.0 · seomd.dev
            </span>
          </div>

          <h1 className="font-display text-[clamp(64px,12vw,120px)] uppercase leading-[0.95] tracking-wide mb-0">
            SEO.MD
          </h1>

          <CheckeredDivider className="my-6" />

          <div className="max-w-2xl">
            <p className="font-accent text-[22px] leading-relaxed mb-4 text-on-surface">
              The open standard for <em>AI Engine Optimization</em> — a version-controlled,
              plain-text spec file that tells ChatGPT, Claude, Perplexity, and Gemini
              exactly how to understand and cite your brand.
            </p>
            <p className="font-body text-body-md text-secondary mb-8">
              Like <code>CLAUDE.md</code> or <code>AGENTS.md</code>, but for SEO.
              Drop one file in your repo. Let AI engines do the rest.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link href="/spec" className="btn-primary" id="cta-read-spec">
              READ THE SPEC →
            </Link>
            <a
              href="https://github.com/seomd/cli"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              id="cta-github"
            >
              GET THE CLI ↗
            </a>
          </div>
        </div>
      </section>

      {/* ── QUICK START ── */}
      <section id="quickstart" className="px-6 md:px-16 py-16 border-b border-outline-variant">
        <div className="max-w-5xl mx-auto">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-secondary mb-3">
            QUICK START
          </p>
          <h2 className="font-display text-headline-lg uppercase leading-headline mb-8">
            ONE COMMAND TO START
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="code-block">
              <pre>{`# Install the CLI
npm install -g seomd

# Scaffold your SEO.md
npx seomd init

# Check your citation status
npx seomd status

# Validate against the spec
npx seomd validate`}</pre>
            </div>

            <div>
              <p className="font-body text-body-md text-on-surface-variant leading-body mb-5">
                The <code>init</code> command asks you five questions — your brand name,
                domain, site type, primary keyword, and top competitors — and generates a
                complete <code>SEO.md</code> tailored to your site type.
              </p>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-widest text-secondary mb-3">
                  SUPPORTED SITE TYPES
                </p>
                <div className="flex flex-wrap gap-2">
                  {SITE_TYPES.map((type) => (
                    <span key={type} className="status-pill pending">{type}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="px-6 md:px-16 py-16 border-b border-outline-variant">
        <div className="max-w-5xl mx-auto">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-secondary mb-3">
            HOW IT WORKS
          </p>
          <h2 className="font-display text-headline-lg uppercase leading-headline mb-10">
            THREE PHASES OF OPERATION
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t-2 border-l-2 border-primary">
            {FEATURES.map((f) => (
              <div key={f.index} className="p-8 border-r-2 border-b-2 border-primary">
                <span className="status-pill active mb-4 inline-block">PHASE {f.index}</span>
                <h3 className="font-mono text-label-mono font-semibold uppercase tracking-wider mb-3">
                  {f.title}
                </h3>
                <p className="font-body text-body-md text-on-surface-variant leading-body">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE FORMAT ── */}
      <section className="px-6 md:px-16 py-16 border-b border-outline-variant">
        <div className="max-w-5xl mx-auto">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-secondary mb-3">
            THE FORMAT
          </p>
          <h2 className="font-display text-headline-lg uppercase leading-headline mb-8">
            PLAIN TEXT. VERSION CONTROLLED.
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="font-body text-body-lg leading-body mb-6 text-on-surface">
                An <strong>SEO.md</strong> file lives in your repo root. It has two parts:
                a YAML block you control, and <code>_analysis</code> blocks your platform
                writes back.
              </p>
              <ul className="space-y-3">
                {[
                  'No proprietary dashboards — just a file in your repo',
                  'Works with any site: SaaS, blog, eCommerce, local',
                  'Human-readable. AI-readable. Git-diffable.',
                  'Platform-agnostic — connect any provider',
                ].map((item) => (
                  <li key={item} className="flex gap-3 font-body text-body-md text-on-surface-variant">
                    <span className="font-mono text-secondary shrink-0">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="code-block">
              <pre>{`# SEO.md — My Brand

## Site
site:
  type: saas
  domain: mybrand.com
  canonical: https://mybrand.com

## Keywords
keywords:
  primary: "ai citation tracking"
  secondary:
    - "llm seo"
    - "aeo tools"

## AEO
aeo:
  answer_first_format: true
  allowed_bots:
    - GPTBot
    - ClaudeBot
    - PerplexityBot

  ### PLATFORM WRITES BACK
  _analysis:
    overall_citation_rate: 0.72
    overall_gap_score: 28
    last_analyzed: 2026-06-05`}</pre>
            </div>
          </div>
        </div>
      </section>

      {/* ── ECOSYSTEM ── */}
      <section className="px-6 md:px-16 py-16 border-b border-outline-variant">
        <div className="max-w-5xl mx-auto">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-secondary mb-3">
            THE ECOSYSTEM
          </p>
          <h2 className="font-display text-headline-lg uppercase leading-headline mb-10">
            PART OF A GROWING STANDARD
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border-2 border-primary">
            {SIMILAR_STANDARDS.map((std, i) => (
              <div
                key={std.name}
                className={`p-6 ${i < 3 ? 'border-r border-primary' : ''} ${std.active ? 'bg-primary text-on-primary' : 'bg-surface'}`}
              >
                <p className={`font-mono text-label-mono font-semibold mb-2 ${std.active ? 'text-on-primary' : ''}`}>
                  {std.name}
                </p>
                <p className={`font-body text-body-sm ${std.active ? 'text-on-primary/70' : 'text-secondary'}`}>
                  {std.desc}
                </p>
                {std.active && (
                  <span className="mt-3 inline-block font-mono text-[10px] uppercase tracking-widest border border-on-primary text-on-primary px-2 py-0.5">
                    YOU ARE HERE
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTRIBUTORS ── */}
      <section id="contributors" className="px-6 md:px-16 py-16 border-b border-outline-variant">
        <div className="max-w-5xl mx-auto">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-secondary mb-3">
            CONTRIBUTORS
          </p>
          <h2 className="font-display text-headline-lg uppercase leading-headline mb-6">
            OPEN TO ALL
          </h2>
          <p className="font-body text-body-lg leading-body mb-8 text-on-surface max-w-xl">
            SEO.md is an open standard. Contributions to the spec, CLI, and ecosystem
            tooling are welcome via GitHub.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/seomd/seomd-cli"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              id="cta-contribute"
            >
              CONTRIBUTE ON GITHUB ↗
            </a>
            <Link href="/spec" className="btn-secondary" id="cta-spec">
              READ THE SPEC →
            </Link>
          </div>
        </div>
      </section>

      {/* ── BLOG PREVIEW ── */}
      <section className="px-6 md:px-16 py-16 border-b border-outline-variant">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-baseline justify-between mb-8">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-secondary mb-2">
                FROM THE BLOG
              </p>
              <h2 className="font-display text-headline-lg uppercase leading-headline">
                LATEST WRITING
              </h2>
            </div>
            <Link
              href="/blog"
              className="font-mono text-label-mono font-semibold uppercase tracking-wider hover:underline shrink-0"
            >
              ALL POSTS →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t-2 border-l-2 border-primary">
            {[
              {
                slug: 'introducing-seomd',
                date: '2026-06-05',
                title: 'Introducing SEO.md',
                summary: 'The open standard for AI Engine Optimization — what it is, why it matters, and how to get started.',
                tags: ['announcement'],
              },
              {
                slug: 'aeo-vs-seo',
                date: '2026-06-05',
                title: 'AEO vs SEO: Why AI Engine Optimization Changes Everything',
                summary: "Traditional SEO optimizes for rankings. AEO optimizes for AI citations. Here's the difference.",
                tags: ['aeo', 'strategy'],
              },
            ].map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block p-8 border-r-2 border-b-2 border-primary hover:bg-surface-container transition-colors"
                id={`blog-post-${post.slug}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-[11px] text-secondary">{post.date}</span>
                  {post.tags.map((tag) => (
                    <span key={tag} className="status-pill pending">{tag}</span>
                  ))}
                </div>
                <h3 className="font-display text-headline-md uppercase leading-headline mb-3">
                  {post.title}
                </h3>
                <p className="font-body text-body-md text-on-surface-variant leading-body">
                  {post.summary}
                </p>
                <span className="font-mono text-label-mono font-semibold uppercase mt-4 inline-block">
                  READ MORE →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SpecFooter verifiedBy="SEOMD_CORE" location="GITHUB" />
    </div>
  );
}
