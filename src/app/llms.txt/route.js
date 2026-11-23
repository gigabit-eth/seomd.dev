import { getAllPosts } from '@/lib/blog';

// llms.txt (https://llmstxt.org): a Markdown index for AI agents browsing seomd.dev.
// Built at deploy time from the blog folder, so new posts appear without editing this file.
export const dynamic = 'force-static';

const SITE = 'https://seomd.dev';

export function GET() {
  const posts = getAllPosts();
  const lines = [
    '# SEO.md',
    '',
    "> SEO.md is an open, MIT-licensed standard for a repository file that holds a site's search and AI-citation strategy, with a CLI (seomd-cli) that validates it, audits pages and generates robots.txt and llms.txt.",
    '',
    'The spec and CLI are free and open source. Local commands (init, validate, check, generate, doctor) need no account or API key; live citation scans (analyze, sync) use a provider that implements the open provider protocol.',
    '',
    '## Docs',
    '',
    `- [Specification (v2.0.0)](${SITE}/spec): the SEO.md format: YAML frontmatter, Markdown body, the .seo/ workspace and coding-agent wiring.`,
    `- [Providers & provider protocol](${SITE}/providers): the two HTTP endpoints (POST /cli/analyze, POST /cli/sync) any SEO or AEO platform can implement.`,
    `- [Get started](${SITE}/connect): run npx seomd-cli init, and optionally connect a provider for live scans.`,
    `- [CLI source](https://github.com/seomd/cli): seomd-cli on GitHub, including PROVIDER_SPEC.md.`,
    '',
    '## Blog',
    '',
    ...posts.map((post) => `- [${post.title}](${SITE}/blog/${post.slug})${post.summary ? `: ${post.summary}` : ''}`),
    '',
  ];

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
