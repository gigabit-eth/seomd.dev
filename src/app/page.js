import Link from 'next/link';
import Navbar from '@/components/Navbar';
import CheckeredDivider from '@/components/CheckeredDivider';
import SpecFooter from '@/components/SpecFooter';

const SITE_TYPES = ['SaaS', 'Blog', 'eCommerce', 'Marketplace', 'Local'];

const SIMILAR_STANDARDS = [
  { name: 'CLAUDE.md', desc: 'Anthropic AI instructions' },
  { name: 'AGENTS.md', desc: 'Autonomous agent contracts' },
  { name: 'DESIGN.md', desc: 'UI design system spec' },
  { name: 'SEO.md', desc: 'AI search & citation spec', active: true },
];

const FEATURES = [
  {
    index: '01',
    title: 'FOUNDER DECLARES',
    desc: (
      <>
        Define your canonical product facts, buyer prompts, routes, and AEO rules in{' '}
        <code>SEO.md</code> (YAML frontmatter + Markdown). Automatically wired into{' '}
        <code>AGENTS.md</code> and <code>CLAUDE.md</code> on init.
      </>
    ),
  },
  {
    index: '02',
    title: 'AGENTS & CLI VERIFY',
    desc: (
      <>
        Coding agents read <code>SEO.md</code> before shipping pages. Run{' '}
        <code>seomd check</code>, <code>seomd generate</code> (<code>robots.txt</code>,{' '}
        <code>llms.txt</code>, JSON-LD), and <code>seomd doctor</code> locally with zero API keys.
      </>
    ),
  },
  {
    index: '03',
    title: 'PROVIDERS WRITE BACK',
    desc: (
      <>
        Optionally connect{' '}
        <a
          href="https://foxcite.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-0.5 text-primary hover:underline font-semibold"
        >
          Foxcite
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-3.5 h-3.5 shrink-0">
            <path fillRule="evenodd" d="M4.22 11.78a.75.75 0 0 1 0-1.06L9.44 5.5H5.75a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V6.56l-5.22 5.22a.75.75 0 0 1-1.06 0Z" clipRule="evenodd" />
          </svg>
        </a>{' '}
        or any provider implementing the{' '}
        <Link href="/providers" className="text-primary hover:underline font-semibold">
          Provider Protocol
        </Link>{' '}
        to write live citation metrics and playbooks into <code>.seo/</code>.
      </>
    ),
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
            <span className="version-badge">V2.0.0</span>
            <span className="font-mono text-[11px] text-secondary">
              spec v2.0.0 · seomd.dev
            </span>
          </div>

          <h1 className="font-display text-[clamp(64px,12vw,120px)] uppercase leading-[0.95] tracking-wide mb-0">
            SEO.MD
          </h1>

          <CheckeredDivider className="my-6" />

          <div className="max-w-2xl">
            <p className="font-accent text-[22px] leading-relaxed mb-4 text-on-surface">
              The open standard for <em>AI Engine Optimization</em> — a Markdown-first,
              version-controlled spec file that tells coding agents and AI search engines
              exactly how to build, structure, and cite your brand.
            </p>
            <p className="font-body text-body-md text-secondary mb-8">
              Like <code>CLAUDE.md</code>, <code>AGENTS.md</code>, and <code>DESIGN.md</code>,
              but for search and AI citations. Useful offline on day one — vendor-agnostic by design.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link href="/spec" className="btn-primary" id="cta-read-spec">
              READ THE SPEC →
            </Link>
            <Link href="/providers" className="btn-secondary" id="cta-providers">
              PROVIDER PROTOCOL →
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
              <pre>{`# Scaffold SEO.md (auto-detects routes + wires AGENTS.md)
npx seomd-cli init

# Validate & audit locally (zero API key required)
npx seomd-cli validate --strict
npx seomd-cli check ./out
npx seomd-cli generate robots --out public/robots.txt
npx seomd-cli generate llms --out public/llms.txt
npx seomd-cli doctor

# Optional: run live AI citation analysis via any provider
npx seomd-cli analyze`}</pre>
            </div>

            <div>
              <p className="font-body text-body-md text-on-surface-variant leading-body mb-5">
                <code>init</code> inspects your repository (Next.js, Astro, SvelteKit, Remix, Vite)
                to discover live routes, scaffolds a v2 <code>SEO.md</code> (YAML frontmatter +
                Markdown rules), and wires a pointer into <code>AGENTS.md</code> / <code>CLAUDE.md</code>{' '}
                so coding agents pick it up automatically.
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
            MARKDOWN FIRST. FRONTMATTER STRUCTURED.
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="font-body text-body-lg leading-body mb-6 text-on-surface">
                <strong>SEO.md</strong> (v2.0.0) pairs a compact YAML frontmatter manifest with
                real Markdown prose for coding agents. Provider-generated metrics and playbooks
                live cleanly inside <code>.seo/</code> — never polluting your hand-authored file.
              </p>
              <ul className="space-y-3">
                {[
                  'Real Markdown prose, tables, and rules — never breaks YAML parsers',
                  'Auto-wired into AGENTS.md / CLAUDE.md so coding agents read it first',
                  'Offline CLI checks, robots.txt, llms.txt, and JSON-LD generation',
                  'Vendor-agnostic Provider Protocol — Foxcite, SEMrush, Ahrefs, Profound, Peec AI, or custom',
                ].map((item) => (
                  <li key={item} className="flex gap-3 font-body text-body-md text-on-surface-variant">
                    <span className="font-mono text-secondary shrink-0">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="code-block">
              <pre>{`---
spec: "2.0.0"
site:
  brand: "Acme"
  domain: "acme.com"
  canonical: "https://acme.com"
  type: "saas"
keywords:
  primary: "billing automation"
  negative: ["free download"]
pages:
  - id: homepage
    url: /
    status: live
    priority: 1
crawl:
  robots: /robots.txt
  llms_txt: /llms.txt
  allow_ai_bots: true
provider:
  name: null # foxcite | custom | semrush | ahrefs | profound | peec
---

# SEO.md — Acme

## Canonical Product Facts
- **One-liner:** Usage-based billing for B2B SaaS.

## Page & AEO Rules (For Coding Agents)
- Open every key page with a 40-60 word direct answer.
- Emit Organization + FAQPage JSON-LD.`}</pre>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE VALUE ── */}
      <section className="px-6 md:px-16 py-16 border-b border-outline-variant">
        <div className="max-w-5xl mx-auto">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-secondary mb-3">
            THE VALUE
          </p>
          <h2 className="font-display text-headline-lg uppercase leading-headline mb-10">
            OBJECTIVE BENEFITS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t-2 border-l-2 border-primary">
            {[
              {
                title: 'GROUND TRUTH FOR AGENTS',
                desc: 'Stop coding agents from inventing vague H1s, hallucinating claims, or forgetting JSON-LD. SEO.md gives every agent the exact facts and page rules.',
              },
              {
                title: 'LOCAL VERIFICATION LOOP',
                desc: 'Audit HTML, metadata, JSON-LD, llms.txt, and AI bot access locally in CI or during agent sessions — no paid account required to get value.',
              },
              {
                title: 'OPEN PROVIDER PROTOCOL',
                desc: 'Keep your strategy vendor-neutral in git. Plug in Foxcite natively or connect any SEO/AEO provider implementing the open HTTP contract.',
              },
            ].map((value, i) => (
              <div key={i} className="p-8 border-r-2 border-b-2 border-primary bg-surface hover:bg-surface-container transition-colors">
                <h3 className="font-mono text-label-mono font-semibold uppercase tracking-wider mb-3">
                  {value.title}
                </h3>
                <p className="font-body text-body-md text-on-surface-variant leading-body">
                  {value.desc}
                </p>
              </div>
            ))}
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
            SEO.md is an open standard. Contributions to the spec, CLI, provider adapters,
            and ecosystem tooling are welcome via GitHub.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/seomd/cli"
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
