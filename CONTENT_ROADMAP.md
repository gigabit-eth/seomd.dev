# SEO.md & Foxcite Content Marketing Roadmap

Structured backlog of high-leverage articles for **`seomd.dev/blog`** (vendor-neutral open standard, CLI, and coding-agent workflows) and **`foxcite.com/blog`** (multi-LLM citation benchmarks, teardowns, and live intelligence).

---

## Publishing Strategy

- **`seomd.dev/blog`**: Strictly vendor-neutral, technical, and open-standard focused. Builds developer trust, GitHub stars, and `npx seomd-cli init` adoption.
- **`foxcite.com/blog`**: Original multi-LLM benchmark data, citation teardowns, and before/after PR case studies. Cross-links back to `seomd.dev/spec` and `seomd.dev/providers`.
- **AEO Format Rule**: Every post should open with a 40-60 word direct answer, include at least one concrete code block or comparison table, and end with a structured FAQ section.

---

## Recommended Publishing Order

| # | Slug | Target Site | Bucket | Priority |
|---|---|---|---|---|
| 1 | `seomd-v2-markdown-and-provider-protocol` | `seomd.dev` | Announcement | P0 (Launch) |
| 2 | `robots-txt-vs-llms-txt-vs-seomd` | `seomd.dev` | Manifesto / Search | P0 |
| 3 | `why-coding-agents-ship-seo-slop` | `seomd.dev` | Manifesto / HN & X | P0 |
| 4 | `ai-crawler-robots-txt-reference` | `seomd.dev` | Engineering Guide | P1 |
| 5 | `ci-gate-seo-aeo-github-actions` | `seomd.dev` | Engineering Guide | P1 |
| 6 | `repo-native-context-stack` | `seomd.dev` | Manifesto | P1 |
| 7 | `nextjs-coding-agents-json-ld-answer-first` | `seomd.dev` | Engineering Guide | P2 |
| 8 | `audited-100-dev-tools-ai-citations` | `foxcite.com` | Data / Benchmark | P1 |
| 9 | `coding-agent-fixes-page-with-reverse-md` | `foxcite.com` | Teardown / Case Study | P2 |

---

## Bucket 1 — Viral & Manifesto Posts (`seomd.dev/blog`)

### 1. Why Your Coding Agent Ships SEO Slop (And How `SEO.md` Fixes It)
- **Slug**: `why-coding-agents-ship-seo-slop`
- **Target Queries**: `coding agent seo`, `claude code seo best practices`, `cursor seo metadata`, `how to optimize ai generated pages for seo`
- **Hook**: Developers already use `CLAUDE.md` for code conventions and `DESIGN.md` for UI — without `SEO.md`, coding agents invent generic H1s, hallucinate pricing/claims, omit JSON-LD, and break canonicals on every landing page.
- **Outline**:
  1. The 5 SEO/AEO mistakes coding agents make by default (real before/after examples).
  2. Why prompts don't scale — repo-native ground truth does.
  3. Anatomy of a v2.0.0 `SEO.md` (YAML frontmatter + Markdown facts & guardrails).
  4. Automatic discovery via `AGENTS.md` / `CLAUDE.md` wiring (`npx seomd-cli init`).
  5. Closing the loop with `npx seomd-cli check http://localhost:3000`.
- **CTA**: `npx seomd-cli init`

### 2. `CLAUDE.md`, `AGENTS.md`, `DESIGN.md`, `SEO.md`: The Repo-Native Context Stack
- **Slug**: `repo-native-context-stack`
- **Target Queries**: `AGENTS.md standard`, `CLAUDE.md vs AGENTS.md`, `repo native ai context files`, `SEO.md standard`
- **Hook**: Software repositories are evolving a standard root-level contract layer for autonomous agents. Each file owns one concern: code, agent workflow, design, and distribution/citations.
- **Outline**:
  1. Comparison table: `CLAUDE.md` vs `AGENTS.md` vs `DESIGN.md` vs `SEO.md`.
  2. Why progressive disclosure matters (keeping root files lean; deep data in `.seo/`).
  3. How `seomd init` composes cleanly with existing `AGENTS.md` / `CLAUDE.md` via marker blocks.
  4. Keeping open standards vendor-neutral.
- **CTA**: Read the v2.0.0 spec at `seomd.dev/spec`.

### 3. `robots.txt` vs `llms.txt` vs `SEO.md`: What AI Engines Actually Read
- **Slug**: `robots-txt-vs-llms-txt-vs-seomd`
- **Target Queries**: `llms.txt vs robots.txt`, `what is llms.txt`, `do ai crawlers read llms.txt`, `how to optimize for chatgpt and perplexity`
- **Hook**: Founders keep confusing crawl permissions (`robots.txt`), site-level LLM indexes (`llms.txt`), and repo-level strategy (`SEO.md`). They solve three different layers — and one file can generate the other two.
- **Outline**:
  1. Side-by-side matrix: audience, location, purpose, who reads it.
  2. `robots.txt` — crawler access control (training bots vs search/citation bots).
  3. `llms.txt` — curated markdown directory for AI agents browsing your live domain.
  4. `SEO.md` — version-controlled source of truth in git for your team and coding agents.
  5. Generating `robots.txt` and `llms.txt` directly from `SEO.md` (`npx seomd-cli generate`).
- **CTA**: `npx seomd-cli generate robots --out public/robots.txt && npx seomd-cli generate llms --out public/llms.txt`

---

## Bucket 2 — Copy-Paste Engineering Guides (`seomd.dev/blog`)

### 4. How to Gate SEO & AI-Crawler Readiness in GitHub Actions (Zero API Keys)
- **Slug**: `ci-gate-seo-aeo-github-actions`
- **Target Queries**: `seo ci github actions`, `automated seo check ci`, `validate json-ld in ci`, `check robots.txt in ci`
- **Hook**: Treat SEO/AEO regressions like broken unit tests. Catch missing H1s, invalid JSON-LD, blocked `GPTBot`/`ClaudeBot`, and forbidden copy before merge.
- **Outline**:
  1. Why SEO regressions slip into production during rapid AI-assisted shipping.
  2. Copy-paste `.github/workflows/seo-check.yml` running `seomd validate --strict` and `seomd check ./out --json`.
  3. Auditing a Next.js / Astro static export vs a running preview server.
  4. Reading JSON output in PR comments or coding-agent loops.
- **CTA**: Copy the GitHub Actions snippet + `npx seomd-cli doctor`.

### 5. The Complete AI Crawler `robots.txt` Reference (GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot)
- **Slug**: `ai-crawler-robots-txt-reference`
- **Target Queries**: `ai crawler user agents list`, `robots.txt for chatgpt perplexity claude`, `OAI-SearchBot vs GPTBot`, `allow ai bots robots.txt`
- **Hook**: Blocking training crawlers by accident often blocks live AI search citations too. Here is the up-to-date breakdown of every major AI user agent.
- **Outline**:
  1. Training crawlers vs. live search/citation fetchers (why the distinction matters).
  2. Full reference table of 20+ AI user agents (OpenAI, Anthropic, Perplexity, Google, Meta, Apple, Mistral, Cohere, Amazon, etc.).
  3. Common `robots.txt` misconfigurations that silently kill AI visibility.
  4. Auto-generating and verifying your `robots.txt` with `seomd generate robots` and `seomd check`.
- **CTA**: `npx seomd-cli generate robots --out public/robots.txt`

### 6. Teaching Next.js Coding Agents to Ship Valid JSON-LD & Answer-First Pages
- **Slug**: `nextjs-coding-agents-json-ld-answer-first`
- **Target Queries**: `nextjs json-ld seo`, `nextjs aeo optimization`, `claude code nextjs seo`, `comparison page template nextjs`
- **Hook**: End-to-end walkthrough of taking a Next.js App Router project from zero SEO config to a verified `/vs/[competitor]` comparison page built by a coding agent.
- **Outline**:
  1. Running `npx seomd-cli init` in a Next.js App Router repo (auto-detecting live routes + wiring `CLAUDE.md`/`AGENTS.md`).
  2. Filling in Canonical Product Facts & Do Not Claim in `SEO.md`.
  3. Prompting your coding agent to build `/vs/[competitor]` with `FAQPage` + `SoftwareApplication` JSON-LD.
  4. Verifying against `http://localhost:3000` using `npx seomd-cli check`.
- **CTA**: `npx seomd-cli init`

---

## Bucket 3 — Original Data & Teardowns (`foxcite.com/blog`)

### 7. We Audited 100 Developer Tools Across ChatGPT, Claude, and Perplexity — Here's What Got Cited
- **Slug**: `audited-100-dev-tools-ai-citations`
- **Target Queries**: `how to get cited by chatgpt`, `perplexity citation factors`, `ai search benchmark saas`, `aeo study`
- **Hook**: Original dataset with concrete percentages: how many dev tools block AI bots, lack comparison pages, ship broken JSON-LD, or bury their core value proposition below marketing fluff.
- **Outline**:
  1. Methodology (100 dev tools, 5 intent categories, ChatGPT + Claude + Perplexity).
  2. Top 5 patterns separating cited brands from invisible ones.
  3. Breakdown by intent category (Category vs Comparison vs Transactional).
  4. Actionable checklist (link to `seomd.dev` for local checks + Foxcite for live tracking).
- **CTA**: Run a free audit on Foxcite or `SEOMD_PROVIDER=foxcite npx seomd-cli analyze`.

### 8. Before & After: Letting a Coding Agent Fix a Page Using `.seo/REVERSE.md`
- **Slug**: `coding-agent-fixes-page-with-reverse-md`
- **Target Queries**: `automated aeo workflow`, `reverse engineer ai citations`, `ai agent seo optimization`
- **Hook**: Real PR walkthrough showing how live citation gap data flows from Foxcite into `.seo/pages/pricing.md`, gets read by a coding agent, and ships measurable citation-rate improvements.
- **Outline**:
  1. Baseline scan (`seomd status` showing gap score and top cited competitor).
  2. Inspecting `.seo/pages/pricing.md` (`why_page_won`, `citation_hooks`, `gaps_for_brand`, `fastest_win`).
  3. The exact PR diff the coding agent opened (answer-first summary, comparison table, FAQ JSON-LD).
  4. Re-scanning with `seomd analyze --page /pricing` and measuring the delta.
- **CTA**: Connect Foxcite via `seomd.dev/connect`.

---

## Bucket 4 — Standard & Ecosystem Announcements (`seomd.dev/blog`)

### 9. SEO.md v2.0.0: Markdown-First Spec, Agent Wiring & the Open Provider Protocol
- **Slug**: `seomd-v2-markdown-and-provider-protocol`
- **Target Queries**: `SEO.md v2`, `open standard for aeo`, `seomd-cli`, `seo provider protocol`
- **Hook**: Announcing v2.0.0 — why we moved from raw YAML to Markdown + frontmatter, why every command works locally without an API key, and how any SEO/AEO platform can plug in via `PROVIDER_SPEC.md`.
- **Outline**:
  1. What we learned from v1.0 (YAML-in-`.md` friction, blank-page homework, vendor coupling).
  2. What's new in v2.0.0: Markdown + frontmatter, repo route detection, `AGENTS.md`/`CLAUDE.md` wiring, offline `check`/`generate`/`doctor`.
  3. Introducing the Open Provider Protocol (`POST /cli/analyze`, `POST /cli/sync`): Foxcite as reference implementation + open invitation for SEMrush, Ahrefs, Profound, Peec AI, and community bridges.
  4. Upgrading from v1.0 (zero-friction backwards compatibility).
- **CTA**: `npx seomd-cli init` & `seomd.dev/providers#protocol`
