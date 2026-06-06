import Navbar from '@/components/Navbar';
import ProtocolHeader from '@/components/ProtocolHeader';
import SpecFooter from '@/components/SpecFooter';
import CheckeredDivider from '@/components/CheckeredDivider';
import RequirementSeal from '@/components/RequirementSeal';
import VersionBadge from '@/components/VersionBadge';

export const metadata = {
  title: 'SEO.md Specification',
  description:
    'The official SEO.md open standard specification — the protocol for AI Engine Optimization. Defines the file format, sections, field ownership model, and AEO rules.',
};

// Spec sections for the sidebar sub-navigation
const SPEC_SECTIONS = [
  { id: 'overview', label: 'Overview' },
  { id: 'format', label: 'File Format' },
  { id: 'site-types', label: 'Site Types' },
  { id: 'site', label: 'Site' },
  { id: 'identity', label: 'Identity' },
  { id: 'keywords', label: 'Keywords' },
  { id: 'intent', label: 'Intent' },
  { id: 'pages', label: 'Pages' },
  { id: 'copy', label: 'Copy' },
  { id: 'structure', label: 'Structure' },
  { id: 'authority', label: 'Authority' },
  { id: 'schema', label: 'Schema' },
  { id: 'crawl', label: 'Crawl' },
  { id: 'aeo', label: 'AEO' },
  { id: 'monitoring', label: 'Monitoring' },
  { id: 'platform', label: 'Platform' },
  { id: 'versioning', label: 'Versioning' },
];

function SectionHeading({ index, id, children }) {
  return (
    <h2
      id={id}
      className="font-display text-headline-lg uppercase leading-headline mt-14 mb-4 pb-2 border-b-2 border-primary flex items-baseline gap-4 scroll-mt-8"
    >
      <span className="font-mono text-[20px] font-semibold text-secondary shrink-0">{index}.</span>
      {children}
    </h2>
  );
}

function Field({ name, type, required, desc, owner = 'founder' }) {
  return (
    <div className="border-b border-outline-variant py-4 grid grid-cols-1 md:grid-cols-[310px_80px_80px_1fr] gap-3 items-start">
      <code className="font-mono text-label-mono font-semibold field-name-code">{name}</code>
      <span className="font-mono text-[11px] text-secondary uppercase tracking-wider">{type}</span>
      <span className={`status-pill ${required ? 'active' : 'pending'} self-start`}>
        {required ? 'required' : 'optional'}
      </span>
      <div>
        <p className="font-body text-body-md text-on-surface-variant">{desc}</p>
        {owner === 'platform' && (
          <span className="font-mono text-[10px] text-secondary uppercase tracking-widest mt-1 inline-block">
            ← platform writes back
          </span>
        )}
      </div>
    </div>
  );
}

export default function SpecPage() {
  return (
    <div className="min-h-screen bg-surface">
      <Navbar />

      <ProtocolHeader
        protocolName="SEO.MD"
        revision="V1.0-ALPHA"
        reference="seomd.dev/spec"
      />

      {/* Spec content area */}
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
              <VersionBadge version="V1.0-ALPHA" />
              <span className="font-mono text-[11px] text-secondary uppercase tracking-widest">
                STATUS: ALPHA · MIT LICENSE
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
            <strong>SEO.md</strong> {""} is a plain-text protocol specification file that enables founders,
            developers, and content teams to declare their brand&apos;s AI search intent
            in a version-controlled, human-readable format.
          </p>

          <p className="font-body text-body-md leading-body text-on-surface-variant mb-6">
            It is part of a growing family of open standards — alongside{' '}
            <code>CLAUDE.md</code>, <code>AGENTS.md</code>, and <code>DESIGN.md</code> -
            that make machine-readable context a first-class part of every software project.
          </p>

          <RequirementSeal
            label="Core Principle"
            text="AN SEO.MD FILE IS THE SINGLE SOURCE OF TRUTH FOR YOUR BRAND'S AI SEARCH STRATEGY"
          />

          <p className="font-body text-body-md leading-body text-on-surface-variant mt-8 mb-4">
            SEO.md separates <em className="font-accent text-[1.05em] not-italic">what the founder declares</em>{' '}
            from <em className="font-accent text-[1.05em] not-italic">what the platform writes back</em>.
            This dual-layer model ensures that strategic intent is always human-authored,
            while analytical intelligence is machine-populated.
          </p>

          {/* ── 02. FILE FORMAT ── */}
          <SectionHeading index="02" id="format">FILE FORMAT</SectionHeading>

          <p className="font-body text-body-md leading-body text-on-surface-variant mb-6">
            An SEO.md file consists of two parts:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-2 border-primary mb-8">
            <div className="p-6 border-r border-primary">
              <span className="status-pill active mb-3 inline-block">FOUNDER DECLARES</span>
              <p className="font-mono text-[11px] uppercase tracking-widest text-secondary mb-2">NO PREFIX</p>
              <p className="font-body text-body-md text-on-surface-variant">
                Fields without a prefix are owned by the founder.
                Edit freely. Commit to version control.
              </p>
            </div>
            <div className="p-6">
              <span className="status-pill pending mb-3 inline-block">PLATFORM WRITES BACK</span>
              <p className="font-mono text-[11px] uppercase tracking-widest text-secondary mb-2">_ANALYSIS: PREFIX</p>
              <p className="font-body text-body-md text-on-surface-variant">
                Fields prefixed with <code>_analysis:</code> are written by
                the connected platform. Do not edit manually.
              </p>
            </div>
          </div>

          <p className="font-body text-body-md leading-body text-on-surface-variant mb-4">
            The file uses Markdown headings (<code>##</code>) as section delimiters, with
            YAML-formatted fields under each section. This makes it readable in any text
            editor, diff-able in any Git client, and parseable by any YAML parser.
          </p>

          <div className="code-block mb-8">
            <pre>{`# SEO.md

## {{brand}}

### spec v1.0 | https://seomd.dev

#### generated: {{date}}

## FIELD OWNERSHIP
### no prefix     = founder declares (you own this)
### _analysis:    = platform writes back (do not edit manually)

## Site

site:
  type: saas           # blog | saas | ecommerce | local | marketplace
  domain: {{domain}}
  canonical: https://{{domain}}
  locale: en-US
  launched: null       # YYYY-MM-DD`}</pre>
          </div>

          {/* ── 03. SITE TYPES ── */}
          <SectionHeading index="03" id="site-types">SITE TYPES</SectionHeading>

          <p className="font-body text-body-md leading-body text-on-surface-variant mb-6">
            The <code>site.type</code> field determines which page templates and intent
            patterns the CLI scaffolds. Each type has a different required page set.
          </p>

          <div className="overflow-x-auto mb-8">
            <table className="prose-table">
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Value</th>
                  <th>Required Pages</th>
                  <th>Primary Use Case</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Blog', 'blog', 'homepage, category, article, author, about', 'Content publishers, newsletters'],
                  ['SaaS', 'saas', 'homepage, features, pricing, comparison, blog', 'Software products, platforms'],
                  ['eCommerce', 'ecommerce', 'homepage, category, product, cart, checkout', 'Online stores'],
                  ['Local', 'local', 'homepage, services, location, reviews', 'Local businesses'],
                  ['Marketplace', 'marketplace', 'homepage, listing, search, seller', 'Two-sided platforms'],
                ].map(([type, val, pages, use]) => (
                  <tr key={val}>
                    <td><code>{type}</code></td>
                    <td><code className="font-mono text-[12px]">{val}</code></td>
                    <td className="text-secondary text-[13px]">{pages}</td>
                    <td className="text-secondary text-[13px]">{use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ── 04–16. SECTIONS ── */}
          {[
            {
              index: '04', id: 'site', title: 'SITE',
              desc: 'Core site metadata. The site section identifies the type, domain, canonical URL, and locale of the project.',
              fields: [
                { name: 'site.type', type: 'string', required: true, desc: 'Site type identifier. One of: blog, saas, ecommerce, local, marketplace.' },
                { name: 'site.domain', type: 'string', required: true, desc: 'The primary domain, without protocol (e.g. example.com).' },
                { name: 'site.canonical', type: 'url', required: true, desc: 'The canonical HTTPS URL (e.g. https://example.com).' },
                { name: 'site.locale', type: 'string', required: false, desc: 'BCP 47 locale code. Default: en-US.' },
                { name: 'site.launched', type: 'date', required: false, desc: 'Launch date in YYYY-MM-DD format.' },
              ],
            },
            {
              index: '05', id: 'identity', title: 'IDENTITY',
              desc: 'Brand identity and social presence. Defines how your brand is named, positioned, and discovered across platforms.',
              fields: [
                { name: 'identity.brand', type: 'string', required: true, desc: 'The canonical brand name exactly as it should appear in citations.' },
                { name: 'identity.tagline', type: 'string', required: false, desc: 'A short brand tagline, 10 words or fewer.' },
                { name: 'identity.social.twitter', type: 'string', required: false, desc: 'Twitter/X handle (without @).' },
                { name: 'identity.social.linkedin', type: 'url', required: false, desc: 'LinkedIn company page URL.' },
                { name: 'identity.social.github', type: 'string', required: false, desc: 'GitHub organization or user handle.' },
                { name: 'identity.schema_org_type', type: 'string', required: false, desc: 'Schema.org type. Default: Organization.' },
              ],
            },
            {
              index: '06', id: 'keywords', title: 'KEYWORDS',
              desc: 'Keyword strategy. Define your primary keyword, secondary terms, negative keywords that dilute your intent signal, and competitor terms for monitoring.',
              fields: [
                { name: 'keywords.primary', type: 'string', required: true, desc: 'The single most important keyword your brand must own in AI search results.' },
                { name: 'keywords.secondary', type: 'string[]', required: false, desc: 'Supporting keyword cluster. 3–10 terms recommended.' },
                { name: 'keywords.negative', type: 'string[]', required: false, desc: 'Terms that dilute intent signal. Platform uses these to filter noise from analysis.' },
                { name: 'keywords.competitor_terms', type: 'string[]', required: false, desc: 'Competitor brand terms to monitor for citation displacement.' },
                { name: 'keywords.category_terms', type: 'string[]', required: false, desc: 'Unbranded category queries (e.g., "best ai seo tools").' },
                { name: 'keywords.long_tail', type: 'string[]', required: false, desc: 'Long-tail keyword variations.' },
                { name: 'keywords._analysis', type: 'object', required: false, desc: 'Platform-populated search volume, intent type, trend data, and recommendations.', owner: 'platform' },
              ],
            },
            {
              index: '07', id: 'intent', title: 'INTENT',
              desc: 'AI query intent mapping. List the exact queries your buyers type into AI engines across five intent categories. These are fed directly to the citation analysis engine.',
              fields: [
                { name: 'intent.informational', type: 'IntentBlock', required: true, desc: 'Priority: critical. Queries seeking information about your category (e.g., "what is AI SEO").' },
                { name: 'intent.comparison', type: 'IntentBlock', required: false, desc: 'Queries comparing your brand to competitors.' },
                { name: 'intent.transactional', type: 'IntentBlock', required: false, desc: 'Queries with purchase or trial intent.' },
                { name: 'intent.reputational', type: 'IntentBlock', required: false, desc: 'Queries about brand credibility, reviews, problems.' },
                { name: 'intent.category', type: 'IntentBlock', required: false, desc: 'Unbranded category-level queries (e.g., "best SEO tools 2026").' },
                { name: 'intent._analysis', type: 'object', required: false, desc: 'Platform-populated citation rates, gap scores, and competitor citations per intent category.', owner: 'platform' },
              ],
            },
            {
              index: '08', id: 'pages', title: 'PAGES',
              desc: 'Page inventory and citation targets. List every page that should appear in AI search results with its target keyword and status.',
              fields: [
                { name: 'pages.site_type', type: 'string', required: true, desc: 'Mirrors site.type. Used by the CLI to scaffold the required page set.' },
                { name: 'pages.required', type: 'PageDef[]', required: true, desc: 'Array of page definitions. Each has: id, url, primary_keyword, status (live|draft|planned), priority.' },
                { name: 'pages._analysis', type: 'object', required: false, desc: 'Platform analysis: citation rates per page, missing pages, and build order recommendations.', owner: 'platform' },
              ],
            },
            {
              index: '09', id: 'copy', title: 'COPY',
              desc: 'Content quality standards. Declare minimum word counts, reading level targets, and structural copy rules that the validator checks against.',
              fields: [
                { name: 'copy.h1_contains_primary_keyword', type: 'boolean', required: false, desc: 'Require H1 to contain the page\'s primary keyword. Default: true.' },
                { name: 'copy.meta_description_length', type: 'string', required: false, desc: 'Target meta description length range (e.g., "150-160").' },
                { name: 'copy.min_word_count', type: 'object', required: false, desc: 'Minimum word counts by page type: homepage, feature_page, blog_post, comparison_page.' },
                { name: 'copy.reading_level', type: 'number', required: false, desc: 'Target Flesch-Kincaid grade level. Default: 8.' },
              ],
            },
            {
              index: '10', id: 'structure', title: 'STRUCTURE',
              desc: 'Content structure rules for AI scannability. These rules are checked by the validator and inform the platform\'s content gap analysis.',
              fields: [
                { name: 'structure.answer_first', type: 'boolean', required: false, desc: 'Require a direct answer in the first 50 words of each page. Default: true.' },
                { name: 'structure.faq_section_required', type: 'boolean', required: false, desc: 'Require a FAQ section on all key pages. Default: true.' },
                { name: 'structure.faq_minimum_questions', type: 'number', required: false, desc: 'Minimum number of FAQ entries. Default: 6.' },
                { name: 'structure.statistics_per_page', type: 'number', required: false, desc: 'Minimum data points with citations per page. Default: 2.' },
                { name: 'structure.heading_hierarchy', type: 'string', required: false, desc: 'Heading hierarchy enforcement. Options: strict (H1>H2>H3, no skipping).' },
              ],
            },
            {
              index: '11', id: 'authority', title: 'AUTHORITY',
              desc: 'E-E-A-T signals. Declare your Experience, Expertise, Authority, and Trust signals so the platform can assess and improve your citation authority score.',
              fields: [
                { name: 'authority.cite_sources', type: 'boolean', required: false, desc: 'Require links to primary sources in all content. Default: true.' },
                { name: 'authority.expert_quotes', type: 'boolean', required: false, desc: 'Include expert quotes in content. Default: false.' },
                { name: 'authority.eeat_signals.experience', type: 'string', required: false, desc: 'Description of your experience signal (e.g., "5 years running SEO campaigns").' },
                { name: 'authority.eeat_signals.expertise', type: 'string', required: false, desc: 'Description of your expertise signal.' },
                { name: 'authority.eeat_signals.authority', type: 'string', required: false, desc: 'Description of your authority signal (e.g., "cited in TechCrunch").' },
                { name: 'authority.eeat_signals.trust', type: 'string', required: false, desc: 'Description of your trust signal (e.g., "SOC2 Type II certified").' },
              ],
            },
            {
              index: '12', id: 'schema', title: 'SCHEMA',
              desc: 'JSON-LD structured data declarations. Specify which Schema.org types and structured data patterns the validator should enforce across your pages.',
              fields: [
                { name: 'schema.types', type: 'string[]', required: true, desc: 'Schema.org types to implement (e.g., Article, FAQPage, BreadcrumbList, Product).' },
                { name: 'schema.faq_schema', type: 'boolean', required: false, desc: 'Require FAQPage schema on all pages with FAQ sections. Default: true.' },
                { name: 'schema.breadcrumb_schema', type: 'boolean', required: false, desc: 'Require BreadcrumbList schema. Default: true.' },
                { name: 'schema.organization_schema', type: 'boolean', required: false, desc: 'Require Organization schema on homepage. Default: true.' },
              ],
            },
            {
              index: '13', id: 'crawl', title: 'CRAWL',
              desc: 'Bot access and indexing rules. Declare your sitemap location, robots.txt path, and the full list of AI bots you permit to crawl your content.',
              fields: [
                { name: 'crawl.sitemap', type: 'url', required: false, desc: 'Path to your XML sitemap. Default: /sitemap.xml.' },
                { name: 'crawl.robots_txt', type: 'path', required: false, desc: 'Path to robots.txt. Default: /robots.txt.' },
                { name: 'crawl.allow_ai_bots', type: 'boolean', required: false, desc: 'Master switch to allow or block all AI crawlers. Default: true.' },
                { name: 'crawl.allowed_bots', type: 'string[]', required: false, desc: 'Explicit bot allowlist: Googlebot, Bingbot, PerplexityBot, ChatGPT-User, GPTBot, ClaudeBot, anthropic-ai, cohere-ai.' },
                { name: 'crawl.disallow', type: 'string[]', required: false, desc: 'URL patterns to exclude from all crawlers (e.g., /admin, /api/*).' },
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
                {/* Field table header */}
                <div className="hidden md:grid grid-cols-[310px_80px_80px_1fr] gap-3 py-2 border-b border-outline-variant">
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

          {/* ── 14. AEO ── */}
          <SectionHeading index="14" id="aeo">AEO</SectionHeading>

          <p className="font-body text-body-md leading-body text-on-surface-variant mb-4">
            AI Engine Optimization rules. This section configures how your brand interacts
            with AI search engines — the most important section for citation optimization.
          </p>

          <RequirementSeal
            label="Critical Requirement"
            text="ANSWER_FIRST_FORMAT: TRUE IS REQUIRED FOR ALL AI ENGINE CITATION OPTIMIZATION"
          />

          <div className="border-t-2 border-primary mt-8 mb-8">
            {[
              { name: 'aeo.answer_first_format', type: 'boolean', required: true, desc: 'Require direct answers in the first paragraph of every page. Critical for AI citation.' },
              { name: 'aeo.faq_on_all_key_pages', type: 'boolean', required: false, desc: 'Require FAQ sections on all priority 1-3 pages. Default: true.' },
              { name: 'aeo.structured_data_priority', type: 'string', required: false, desc: 'Structured data priority level: high | medium | low. Default: high.' },
              { name: 'aeo.content_freshness_target', type: 'string', required: false, desc: 'How often key pages must be updated (e.g., 30d, 7d). Default: 30d.' },
              { name: 'aeo.competitors_to_monitor', type: 'string[]', required: false, desc: 'List of competitor domains to track for citation displacement.' },
              { name: 'aeo._analysis', type: 'object', required: false, desc: 'Platform data: overall citation rate, gap score, engines tracked, and last analysis timestamp.', owner: 'platform' },
            ].map((f) => (
              <Field key={f.name} {...f} />
            ))}
          </div>

          {/* ── 15. MONITORING ── */}
          <SectionHeading index="15" id="monitoring">MONITORING</SectionHeading>

          <p className="font-body text-body-md leading-body text-on-surface-variant mb-6">
            Sync and alert configuration. Controls how and when the connected platform
            updates your <code>_analysis</code> blocks.
          </p>

          <div className="border-t-2 border-primary mb-8">
            {[
              { name: 'monitoring.sync_schedule', type: 'string', required: false, desc: 'How often the platform syncs: monthly | weekly | on_demand. Default: monthly.' },
              { name: 'monitoring.auto_commit', type: 'boolean', required: false, desc: 'Allow the platform to commit _analysis updates directly to your repo. Default: false.' },
              { name: 'monitoring.pr_mode', type: 'boolean', required: false, desc: 'Open a PR with _analysis updates instead of committing directly. Default: true.' },
              { name: 'monitoring.branch', type: 'string', required: false, desc: 'Target branch for sync commits or PRs. Default: main.' },
              { name: 'monitoring.alert_on_gap_score_above', type: 'number', required: false, desc: 'Alert when gap score exceeds this threshold. Range: 0–100. Default: 80.' },
              { name: 'monitoring.alert_on_citation_drop', type: 'boolean', required: false, desc: 'Alert if citation rate drops between analysis cycles. Default: true.' },
            ].map((f) => (
              <Field key={f.name} {...f} />
            ))}
          </div>

          {/* ── 16. PLATFORM ── */}
          <SectionHeading index="16" id="platform">PLATFORM</SectionHeading>

          <p className="font-body text-body-md leading-body text-on-surface-variant mb-6">
            Platform connection settings. Connect a provider to enable live{' '}
            <code>_analysis</code> writeback.
          </p>

          <div className="border-t-2 border-primary mb-4">
            {[
              {
                name: 'platform.provider',
                type: 'string',
                required: false,
                desc: (
                  <>
                    Connected provider:{' '}
                    <a
                      href="https://foxcite.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-0.5 text-primary hover:underline"
                    >
                      foxcite
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-3.5 h-3.5 shrink-0">
                        <path fillRule="evenodd" d="M4.22 11.78a.75.75 0 0 1 0-1.06L9.44 5.5H5.75a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V6.56l-5.22 5.22a.75.75 0 0 1-1.06 0Z" clipRule="evenodd" />
                      </svg>
                    </a>{' '}
                    | manual | ahrefs | semrush | null.
                  </>
                ),
              },
              { name: 'platform.project_id', type: 'string', required: false, desc: 'Platform project or workspace ID.' },
            ].map((f) => (
              <Field key={f.name} {...f} />
            ))}
          </div>

          <div className="protip mb-8">
            <div className="protip-label">Security</div>
            <p className="font-body text-body-md text-on-surface">
              API keys are loaded from the <code>SEOMD_API_KEY</code> environment variable.
              Never commit API keys to version control. Add <code>.env</code> to your{' '}
              <code>.gitignore</code>.
            </p>
          </div>

          {/* ── 17. VERSIONING ── */}
          <SectionHeading index="17" id="versioning">VERSIONING</SectionHeading>

          <p className="font-body text-body-md leading-body text-on-surface-variant mb-6">
            The SEO.md spec follows a lifecycle from alpha to stable.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-2 border-primary mb-8">
            {[
              { status: 'ALPHA', badge: 'active', desc: 'Current. Spec is being validated against real-world usage. Breaking changes possible.' },
              { status: 'BETA', badge: 'pending', desc: 'Spec is feature-complete. Minor breaking changes only with migration guides.' },
              { status: 'STABLE', badge: 'pending', desc: 'Spec is finalized. Only additive, backwards-compatible changes allowed.' },
            ].map((v, i) => (
              <div key={v.status} className={`p-6 ${i < 2 ? 'border-b md:border-b-0 md:border-r border-primary' : ''}`}>
                <span className={`status-pill ${v.badge} mb-3 inline-block`}>{v.status}</span>
                <p className="font-body text-body-sm text-on-surface-variant">{v.desc}</p>
              </div>
            ))}
          </div>

          <CheckeredDivider className="mt-16" />
        </article>
      </div>

      <SpecFooter verifiedBy="SEOMD_CORE" location="GITHUB" />
    </div>
  );
}
