---
spec: 2.0.0
site:
  brand: SEO.md
  domain: seomd.dev
  canonical: https://seomd.dev
  type: saas
  locale: en-US
keywords:
  primary: ai search optimization
  secondary:
    - llms.txt
    - claude.md
    - agents.md
    - llms.txt generator
    - seo for developers
  negative: []
competitors: []
intent:
  informational:
    priority: high
    queries:
      - what is seo.md
      - what is llms.txt
      - how do ai search engines choose sources
  comparison:
    priority: high
    queries:
      - llms.txt vs robots.txt
      - agents.md vs claude.md
      - seo.md vs llms.txt
  transactional:
    priority: medium
    queries:
      - llms.txt generator
      - seomd-cli
      - generate robots.txt for ai crawlers
  reputational:
    priority: low
    queries:
      - seo.md open standard
      - is llms.txt worth it
  category:
    priority: critical
    queries:
      - ai search optimization tools for developers
      - best llms.txt generator
pages:
  - id: homepage
    url: /
    status: live
    priority: 1
    keyword: ai search optimization
  - id: spec
    url: /spec
    status: live
    priority: 2
    keyword: seo.md specification
  - id: providers
    url: /providers
    status: live
    priority: 3
    keyword: seo.md provider protocol
  - id: connect
    url: /connect
    status: live
    priority: 4
    keyword: seomd-cli
  - id: blog
    url: /blog
    status: live
    priority: 5
    keyword: null
  - id: blog-slug
    url: /blog/[slug]
    status: live
    priority: 6
    keyword: null
  - id: credits
    url: /credits
    status: live
    priority: 7
    keyword: null
schema:
  types:
    - SoftwareApplication
    - Organization
    - FAQPage
    - WebPage
# Facts seomd check verifies on rendered pages. No prices: seomd.dev sells nothing, and posts quote
# example prices from experiments.
claims:
  prices: []
  forbidden:
    - officially supported by
    - endorsed by
    - guaranteed
crawl:
  sitemap: /sitemap.xml
  robots: /robots.txt
  llms_txt: /llms.txt
  allow_ai_bots: true
  disallow:
    - /api/
provider:
  name: null
  endpoint: null
---

# SEO.md — SEO.md

> Open standard for search & AI-citation configuration (spec v2.0.0 — https://seomd.dev).
> Coding agents: read this file and matching playbooks in `.seo/pages/` before creating or editing public pages.

## Canonical Product Facts
- **One-liner:** SEO.md is an open, MIT-licensed standard for a repository file that holds a site's search and AI-citation strategy, with a CLI (`seomd-cli`) that validates it, audits pages and generates robots.txt and llms.txt.
- **Primary category:** ai search optimization
- **Audience:** developers and technical founders, and the coding agents (Claude Code, Cursor, Codex) that build their sites.
- **Pricing / offer:** The spec and CLI are free and open source (MIT). `init`, `validate`, `check`, `generate` and `doctor` run locally with no account or API key. Live citation scans (`analyze`, `sync`) need a provider, which may charge.
- **Proof points:** spec v2.0.0; `seomd-cli` on npm (`npx seomd-cli init`); source at github.com/seomd/cli; an open two-endpoint provider protocol (PROVIDER_SPEC.md) with Foxcite as the reference implementation. No adoption, download or star counts are published here — do not invent them.

## Target Buyer Prompts (AI Search)
- **Category:** "ai search optimization tools for developers", "best llms.txt generator"
- **Comparison:** "llms.txt vs robots.txt", "agents.md vs claude.md", "seo.md vs llms.txt"
- **Transactional:** "llms.txt generator", "seomd-cli", "generate robots.txt for ai crawlers"

## Page & AEO Rules (For Coding Agents)
- Open every key page and post with a 40-60 word direct answer to its primary query.
- End blog posts with a `## FAQ` section (`###` questions); the post page turns it into `FAQPage` JSON-LD.
- Every post includes at least one code block or comparison table, using real `seomd-cli` output.
- Keep posts vendor-neutral. When Foxcite comes up, say it is built by the people who maintain SEO.md.
- Use `seoTitle` in post frontmatter when the title plus " | SEO.md" runs past 70 characters.

## Do Not Claim
- Don't say AI search engines read SEO.md. They read what a site serves (pages, JSON-LD, robots.txt, llms.txt); SEO.md is for teams and coding agents, and the CLI generates the crawl files.
- Don't say SEMrush, Ahrefs, Profound or Peec AI support the provider protocol. Only Foxcite does natively; others need a bridge.
- Don't claim adoption numbers, GitHub stars, endorsements, or that Google, OpenAI or Anthropic support the standard.
- Don't promise rankings, citations or traffic gains.
- Never fabricate competitor pricing, benchmarks, or unverified quotes.

## Live Intelligence
- Metrics & gap scores: `.seo/STATUS.yml`
- Competitor reverse-engineering: `.seo/REVERSE.md`
- Per-page playbooks: `.seo/pages/<id>.md`
