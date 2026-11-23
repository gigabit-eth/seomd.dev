import NextLink from 'next/link';
import Navbar from '@/components/Navbar';
import ProtocolHeader from '@/components/ProtocolHeader';
import SpecFooter from '@/components/SpecFooter';
import CheckeredDivider from '@/components/CheckeredDivider';
import RequirementSeal from '@/components/RequirementSeal';
import VersionBadge from '@/components/VersionBadge';
import { Link } from 'lucide-react';

export const metadata = {
  title: 'SEO.md Specification (v2.0.0)',
  description:
    'The SEO.md v2.0.0 specification: Markdown with YAML frontmatter, coding-agent wiring, the .seo/ workspace and the vendor-neutral provider protocol.',
  alternates: {
    canonical: '/spec',
  },
};

const SPEC_SECTIONS = [
  { id: 'overview', label: 'Overview' },
  { id: 'format', label: 'File Format' },
  { id: 'agent-wiring', label: 'Agent Wiring' },
  { id: 'site-types', label: 'Site Types' },
  { id: 'site', label: 'Site' },
  { id: 'keywords', label: 'Keywords' },
  { id: 'intent', label: 'Intent' },
  { id: 'pages', label: 'Pages' },
  { id: 'schema', label: 'Schema' },
  { id: 'crawl', label: 'Crawl' },
  { id: 'provider', label: 'Provider' },
  { id: 'workspace', label: '.seo/ Workspace' },
  { id: 'cli', label: 'CLI Commands' },
  { id: 'versioning', label: 'Versioning' },
];

function SectionHeading({ index, id, children }) {
  return (
    <h2
      id={id}
      className="group font-display text-headline-lg uppercase leading-headline mt-14 mb-4 pb-2 border-b-2 border-primary flex items-center gap-4 scroll-mt-8"
    >
      <span className="font-mono text-[20px] font-semibold text-secondary shrink-0">{index}.</span>
      <span className="flex items-center gap-2">
        {children}
        <a
          href={`#${id}`}
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-150 text-secondary hover:text-primary flex items-center justify-center p-1"
          aria-label={`Link to section ${children}`}
        >
          <Link className="w-4 h-4 shrink-0" />
        </a>
      </span>
    </h2>
  );
}

function Field({ name, type, required, desc }) {
  return (
    <div className="border-b border-outline-variant py-4 grid grid-cols-1 md:grid-cols-[260px_90px_80px_1fr] gap-3 items-start">
      <code className="font-mono text-label-mono font-semibold field-name-code">{name}</code>
      <span className="font-mono text-[11px] text-secondary uppercase tracking-wider">{type}</span>
      <span className={`status-pill ${required ? 'active' : 'pending'} self-start`}>
        {required ? 'required' : 'optional'}
      </span>
      <p className="font-body text-body-md text-on-surface-variant">{desc}</p>
    </div>
  );
}

export default function SpecPage() {
  return (
    <div className="min-h-screen bg-surface">
      <Navbar />

      <ProtocolHeader
        protocolName="SEO.MD"
        revision="V2.0.0"
        reference="seomd.dev/spec"
      />

      <div className="max-w-6xl mx-auto px-6 md:px-10 flex gap-8">
        {/* Spec section sub-nav (desktop only) */}
        <nav
          className="hidden xl:block w-48 shrink-0 sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto py-8 pr-4 border-r border-outline-variant"
          aria-label="Spec sections"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-secondary mb-4">
            SECTIONS
          </p>
          <ul className="space-y-0.5">
            {SPEC_SECTIONS.map((s, i) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="flex items-baseline gap-2 py-1 font-body text-body-sm text-on-surface-variant hover:text-primary transition-colors"
                >
                  <span className="font-mono text-[10px] text-outline w-4 shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Main spec body */}
        <article className="flex-1 min-w-0 px-0 sm:px-8 lg:px-12 py-12 max-w-4xl">
          {/* Title block */}
          <div className="mb-4">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <VersionBadge version="V2.0.0" />
              <span className="font-mono text-[11px] text-secondary uppercase tracking-widest">
                SPEC V2.0.0 · MIT LICENSE
              </span>
            </div>
            <h1 className="font-display text-[clamp(42px,7vw,72px)] uppercase leading-[1.0] tracking-wide mb-2">
              SEO.MD
            </h1>
            <p className="font-display text-headline-md uppercase leading-headline text-secondary">
              THE OPEN STANDARD FOR AI ENGINE OPTIMIZATION
            </p>
          </div>

          <CheckeredDivider className="my-8" />

          {/* ── 01. OVERVIEW ── */}
          <SectionHeading index="01" id="overview">OVERVIEW</SectionHeading>

          <p className="font-body text-body-lg leading-body mb-4">
            <strong>SEO.md</strong> is a repo-native, Markdown-first specification file that gives
            coding agents, developers, and search intelligence platforms a single source of truth
            for your brand&apos;s search and AI-citation strategy.
          </p>

          <p className="font-body text-body-md leading-body text-on-surface-variant mb-6">
            It sits alongside <code>CLAUDE.md</code>, <code>AGENTS.md</code>, and <code>DESIGN.md</code>{' '}
            at your repository root. Local validation, HTML/crawl auditing, and artifact generation
            (<code>robots.txt</code>, <code>llms.txt</code>, JSON-LD) work offline with zero API keys.
          </p>

          <RequirementSeal
            label="Core Principle"
            text="SEO.MD IS HUMAN-OWNED STRATEGY; .SEO/ IS MACHINE-GENERATED INTELLIGENCE"
          />

          {/* ── 02. FILE FORMAT ── */}
          <SectionHeading index="02" id="format">FILE FORMAT</SectionHeading>

          <p className="font-body text-body-md leading-body text-on-surface-variant mb-6">
            In spec <strong>v2.0.0</strong>, <code>SEO.md</code> uses standard{' '}
            <strong>YAML frontmatter</strong> (<code>--- ... ---</code>) for structured metadata
            followed by a <strong>real Markdown body</strong> for coding agents and humans. You can
            write prose, tables, bullets, and links freely in the body without breaking parsers.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-2 border-primary mb-8">
            <div className="p-6 border-b md:border-b-0 md:border-r border-primary">
              <span className="status-pill active mb-3 inline-block">SEO.MD (ROOT)</span>
              <p className="font-mono text-[11px] uppercase tracking-widest text-secondary mb-2">FOUNDER OWNED</p>
              <p className="font-body text-body-md text-on-surface-variant">
                YAML frontmatter (domain, keywords, intent, pages, crawl, optional provider) +
                Markdown playbook (canonical facts, page rules, forbidden claims).
              </p>
            </div>
            <div className="p-6">
              <span className="status-pill pending mb-3 inline-block">.SEO/ DIRECTORY</span>
              <p className="font-mono text-[11px] uppercase tracking-widest text-secondary mb-2">PROVIDER OWNED</p>
              <p className="font-body text-body-md text-on-surface-variant">
                <code>.seo/STATUS.yml</code>, <code>.seo/REVERSE.md</code>, and{' '}
                <code>.seo/pages/&lt;id&gt;.md</code> store live citation metrics and competitor
                playbooks without modifying <code>SEO.md</code>.
              </p>
            </div>
          </div>

          <div className="code-block mb-6">
            <pre>{`---
spec: "2.0.0"
site:
  brand: "Acme"
  domain: "acme.com"
  canonical: "https://acme.com"
  type: "saas"
  locale: "en-US"
keywords:
  primary: "billing automation"
  secondary: ["usage-based billing"]
  negative: ["free download"]
competitors:
  - domain: "chargebee.com"
intent:
  category:
    priority: critical
    queries: ["best billing automation"]
pages:
  - id: homepage
    url: /
    status: live
    priority: 1
    keyword: "billing automation"
schema:
  types: ["SoftwareApplication", "Organization", "FAQPage"]
crawl:
  sitemap: /sitemap.xml
  robots: /robots.txt
  llms_txt: /llms.txt
  allow_ai_bots: true
  disallow: ["/admin", "/api/*"]
provider:
  name: null # foxcite | custom | semrush | ahrefs | profound | peec
  endpoint: null
---

# SEO.md — Acme

## Canonical Product Facts
- **One-liner:** Usage-based billing and revenue recognition for B2B SaaS.
- **Proof points:** SOC 2 Type II certified; 99.99% billing accuracy.

## Page & AEO Rules (For Coding Agents)
- Open every key page with a 40-60 word direct answer.
- Include a structured FAQ section with FAQPage JSON-LD.

## Do Not Claim
- Never call Acme "free" or fabricate competitor pricing.`}</pre>
          </div>

          <div className="protip mb-8">
            <div className="protip-label">Backwards Compatibility</div>
            <p className="font-body text-body-md text-on-surface">
              <code>seomd-cli</code> v2.0.0 automatically detects and continues to parse legacy v1.0
              raw-YAML <code>SEO.md</code> files.
            </p>
          </div>

          {/* ── 03. AGENT WIRING ── */}
          <SectionHeading index="03" id="agent-wiring">AGENT WIRING</SectionHeading>

          <p className="font-body text-body-md leading-body text-on-surface-variant mb-4">
            Because coding agents auto-load <code>AGENTS.md</code> and <code>CLAUDE.md</code>,{' '}
            <code>npx seomd-cli init</code> automatically wires an idempotent marker-wrapped pointer
            into your existing <code>AGENTS.md</code> / <code>CLAUDE.md</code> (or creates a minimal{' '}
            <code>AGENTS.md</code> if neither exists). Pass <code>--no-wire-agents</code> to opt out.
          </p>

          <div className="code-block mb-8">
            <pre>{`<!-- seomd:start -->
## SEO & AI Citation Rules (\`SEO.md\`)

Before creating or editing public-facing pages, landing pages, metadata, JSON-LD schema, or marketing copy:
1. Read \`SEO.md\` at the repository root for canonical product facts, target buyer prompts, page rules, and forbidden claims.
2. Check \`.seo/pages/<page-id>.md\` and \`.seo/REVERSE.md\` (if present) for page-specific citation gaps and playbooks.
3. Run \`npx seomd-cli validate\` (and \`npx seomd-cli check\` against built output or localhost) to verify SEO/AEO compliance.
<!-- seomd:end -->`}</pre>
          </div>

          {/* ── 04. SITE TYPES ── */}
          <SectionHeading index="04" id="site-types">SITE TYPES</SectionHeading>

          <p className="font-body text-body-md leading-body text-on-surface-variant mb-6">
            The <code>site.type</code> field tailors default pages, intent priorities, negative
            keywords, crawl disallows, and agent rules. During <code>init</code>, routes discovered
            in your repository are automatically marked <code>status: live</code>.
          </p>

          <div className="overflow-x-auto mb-8">
            <table className="prose-table">
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Value</th>
                  <th>Default Pages</th>
                  <th>Schema Types</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['SaaS', 'saas', 'homepage, features, pricing, vs, alternatives, use-cases, integrations, docs, blog', 'SoftwareApplication, Organization, FAQPage, WebPage'],
                  ['eCommerce', 'ecommerce', 'homepage, category, product, collection, reviews, shipping-returns, faq', 'Product, Organization, FAQPage, BreadcrumbList'],
                  ['Local', 'local', 'homepage, services, location, about, reviews, faq, contact, service-area', 'LocalBusiness, FAQPage, Review, GeoCoordinates'],
                  ['Blog', 'blog', 'homepage, category, article, author, about, newsletter', 'Article, Person, FAQPage, BreadcrumbList'],
                  ['Marketplace', 'marketplace', 'homepage, listing, category, seller-profile, how-it-works, pricing, trust-safety', 'WebSite, Organization, FAQPage, Product'],
                ].map(([type, val, pages, schemas]) => (
                  <tr key={val}>
                    <td><code>{type}</code></td>
                    <td><code className="font-mono text-[12px]">{val}</code></td>
                    <td className="text-secondary text-[13px]">{pages}</td>
                    <td className="text-secondary text-[13px]">{schemas}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ── 05–11. FRONTMATTER SECTIONS ── */}
          {[
            {
              index: '05',
              id: 'site',
              title: 'SITE',
              desc: 'Core site and brand identity in frontmatter.',
              fields: [
                { name: 'spec', type: 'string', required: false, desc: 'Spec version string (e.g. "2.0.0").' },
                { name: 'site.brand', type: 'string', required: true, desc: 'Canonical brand name as it should appear in AI citations.' },
                { name: 'site.type', type: 'string', required: true, desc: 'One of: saas, ecommerce, local, blog, marketplace.' },
                { name: 'site.domain', type: 'string', required: true, desc: 'Bare primary hostname without protocol (e.g. acme.com).' },
                { name: 'site.canonical', type: 'url', required: false, desc: 'Full canonical HTTPS URL (e.g. https://acme.com).' },
                { name: 'site.locale', type: 'string', required: false, desc: 'BCP 47 locale code. Default: en-US.' },
              ],
            },
            {
              index: '06',
              id: 'keywords',
              title: 'KEYWORDS & COMPETITORS',
              desc: 'Primary topic anchor, supporting terms, negative terms checked by `seomd check`, and competitor domains.',
              fields: [
                { name: 'keywords.primary', type: 'string', required: true, desc: 'Primary category or product keyword.' },
                { name: 'keywords.secondary', type: 'string[]', required: false, desc: 'Supporting keyword cluster.' },
                { name: 'keywords.negative', type: 'string[]', required: false, desc: 'Dilutive terms flagged in titles/H1s by `seomd check`.' },
                { name: 'competitors', type: 'object[]', required: false, desc: 'List of competitor objects (`{ domain: "competitor.com" }`).' },
              ],
            },
            {
              index: '07',
              id: 'intent',
              title: 'INTENT',
              desc: 'Buyer prompts grouped into five standard categories (`informational`, `comparison`, `transactional`, `reputational`, `category`). Filterable with `seomd analyze --intent <category>`.',
              fields: [
                { name: 'intent.<cat>.priority', type: 'string', required: false, desc: 'One of: low, medium, high, critical.' },
                { name: 'intent.<cat>.queries', type: 'string[]', required: false, desc: 'Exact prompts buyers ask ChatGPT, Claude, Perplexity, and Gemini.' },
              ],
            },
            {
              index: '08',
              id: 'pages',
              title: 'PAGES',
              desc: 'Flat array of tracked and planned routes. IDs must be unique and URLs must begin with `/`.',
              fields: [
                { name: 'pages[].id', type: 'string', required: true, desc: 'Unique slug identifier (maps to `.seo/pages/<id>.md`).' },
                { name: 'pages[].url', type: 'string', required: true, desc: 'Route path or pattern (e.g. `/pricing`, `/vs/[competitor]`).' },
                { name: 'pages[].status', type: 'string', required: true, desc: 'One of: live, draft, planned.' },
                { name: 'pages[].priority', type: 'number', required: true, desc: 'Numeric build/audit priority (1 = highest).' },
                { name: 'pages[].keyword', type: 'string', required: false, desc: 'Optional page-specific target keyword.' },
              ],
            },
            {
              index: '09',
              id: 'schema',
              title: 'SCHEMA',
              desc: 'Structured data types used by `seomd generate schema` and agent page rules.',
              fields: [
                { name: 'schema.types', type: 'string[]', required: false, desc: 'Schema.org types (e.g. SoftwareApplication, Organization, FAQPage, Product).' },
              ],
            },
            {
              index: '10',
              id: 'crawl',
              title: 'CRAWL',
              desc: 'Crawler and AI discovery artifacts verified by `seomd check` and emitted by `seomd generate`.',
              fields: [
                { name: 'crawl.sitemap', type: 'string', required: false, desc: 'Sitemap path. Default: /sitemap.xml.' },
                { name: 'crawl.robots', type: 'string', required: false, desc: 'Robots path. Default: /robots.txt.' },
                { name: 'crawl.llms_txt', type: 'string', required: false, desc: 'llms.txt path. Default: /llms.txt.' },
                { name: 'crawl.allow_ai_bots', type: 'boolean', required: false, desc: 'Allow AI search crawlers (GPTBot, ClaudeBot, PerplexityBot, etc.). Default: true.' },
                { name: 'crawl.disallow', type: 'string[]', required: false, desc: 'Paths excluded in generated `robots.txt`.' },
              ],
            },
            {
              index: '11',
              id: 'provider',
              title: 'PROVIDER',
              desc: 'Optional live intelligence provider configuration. Leave null for local-only mode, or point to any platform implementing the Provider Protocol.',
              fields: [
                { name: 'provider.name', type: 'string', required: false, desc: 'Provider identifier: foxcite | custom | semrush | ahrefs | profound | peec | null.' },
                { name: 'provider.endpoint', type: 'url', required: false, desc: 'Optional HTTP base URL override (or set SEOMD_API_URL in .env).' },
              ],
            },
          ].map((section) => (
            <div key={section.id}>
              <SectionHeading index={section.index} id={section.id}>
                {section.title}
              </SectionHeading>
              <p className="font-body text-body-md leading-body text-on-surface-variant mb-6">
                {section.desc}
              </p>
              <div className="border-t-2 border-primary mb-8">
                <div className="hidden md:grid grid-cols-[260px_90px_80px_1fr] gap-3 py-2 border-b border-outline-variant">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-secondary">Field</span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-secondary">Type</span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-secondary">Req.</span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-secondary">Description</span>
                </div>
                {section.fields.map((f) => (
                  <Field key={f.name} {...f} />
                ))}
              </div>
            </div>
          ))}

          {/* ── 12. .SEO/ WORKSPACE ── */}
          <SectionHeading index="12" id="workspace">.SEO/ WORKSPACE</SectionHeading>

          <p className="font-body text-body-md leading-body text-on-surface-variant mb-4">
            Provider-generated outputs are isolated inside <code>.seo/</code> and updated in a
            merge-safe manner (running <code>seomd analyze --page /pricing</code> upserts that page
            without wiping previously analyzed pages):
          </p>

          <div className="code-block mb-8">
            <pre>{`.seo/
├── README.md        # Workspace overview
├── STATUS.yml       # Overall + per-intent + per-page citation rates & gap scores
├── REVERSE.md       # Competitor reverse-engineering & gaps_for_brand
└── pages/
    └── <id>.md      # Per-page remediation playbooks (materialized on analyze/sync)`}</pre>
          </div>

          {/* ── 13. CLI COMMANDS ── */}
          <SectionHeading index="13" id="cli">CLI COMMANDS</SectionHeading>

          <div className="overflow-x-auto mb-8">
            <table className="prose-table">
              <thead>
                <tr>
                  <th>Command</th>
                  <th>Offline?</th>
                  <th>Purpose</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['seomd init', 'Yes', 'Repo-aware v2 scaffold + AGENTS.md / CLAUDE.md wiring'],
                  ['seomd validate', 'Yes', 'Validate SEO.md (v2 & v1) with --strict and --json'],
                  ['seomd check [target]', 'Yes', 'Audit local HTML dir or localhost URL against SEO.md'],
                  ['seomd generate <target>', 'Yes', 'Generate robots.txt, llms.txt, or JSON-LD schema'],
                  ['seomd doctor', 'Yes', 'Inspect SEO.md, agent wiring, crawl files, and provider config'],
                  ['seomd analyze', 'Provider', 'Run live AI citation scans (--page, --intent, --engines)'],
                  ['seomd sync', 'Provider', 'Pull cached intelligence (--dry-run shows metric deltas)'],
                  ['seomd status', 'Yes', 'Render terminal dashboard or --json from .seo/STATUS.yml'],
                ].map(([cmd, offline, desc]) => (
                  <tr key={cmd}>
                    <td><code className="font-mono text-[12px]">{cmd}</code></td>
                    <td><span className={`status-pill ${offline === 'Yes' ? 'active' : 'pending'}`}>{offline}</span></td>
                    <td className="text-secondary text-[13px]">{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="font-body text-body-md text-on-surface-variant mb-8">
            Building a provider integration? See the{' '}
            <NextLink href="/providers#protocol" className="text-primary font-semibold hover:underline">
              Provider Protocol Specification →
            </NextLink>
          </p>

          {/* ── 14. VERSIONING ── */}
          <SectionHeading index="14" id="versioning">VERSIONING</SectionHeading>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-2 border-primary mb-8">
            <div className="p-6 border-b md:border-b-0 md:border-r border-primary">
              <span className="status-pill active mb-3 inline-block">V2.0.0 (CURRENT)</span>
              <p className="font-body text-body-sm text-on-surface-variant">
                Markdown + YAML frontmatter, automatic <code>AGENTS.md</code> / <code>CLAUDE.md</code>{' '}
                wiring, offline <code>check</code> / <code>generate</code> / <code>doctor</code>, and
                vendor-agnostic Provider Protocol.
              </p>
            </div>
            <div className="p-6">
              <span className="status-pill pending mb-3 inline-block">V1.0 (LEGACY)</span>
              <p className="font-body text-body-sm text-on-surface-variant">
                Raw YAML document with <code>#</code> comment headings. Automatically detected and
                supported for read/validate compatibility in <code>seomd-cli</code> v2.
              </p>
            </div>
          </div>

          <CheckeredDivider className="mt-16" />
        </article>
      </div>

      <SpecFooter verifiedBy="SEOMD_CORE" location="GITHUB" />
    </div>
  );
}
