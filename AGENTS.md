<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- seomd:start -->
## SEO & AI Citation Rules (`SEO.md`)

Before creating or editing public-facing pages, landing pages, metadata, JSON-LD schema, or marketing copy:
1. Read `SEO.md` at the repository root for canonical product facts, target buyer prompts, page rules, and forbidden claims.
2. Check `.seo/pages/<page-id>.md` and `.seo/REVERSE.md` (if present) for page-specific citation gaps and playbooks.
3. Run `npx seomd-cli validate` (and `npx seomd-cli check` against built output or localhost) to verify SEO/AEO compliance.
<!-- seomd:end -->
