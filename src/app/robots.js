// A crawler with its own group ignores the * group, so every group repeats the disallows.
const DISALLOW = ['/api/'];

export default function robots() {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: DISALLOW },
      { userAgent: 'GPTBot', allow: '/', disallow: DISALLOW },
      { userAgent: 'OAI-SearchBot', allow: '/', disallow: DISALLOW },
      { userAgent: 'ChatGPT-User', allow: '/', disallow: DISALLOW },
      { userAgent: 'ClaudeBot', allow: '/', disallow: DISALLOW },
      { userAgent: 'Claude-User', allow: '/', disallow: DISALLOW },
      { userAgent: 'Claude-SearchBot', allow: '/', disallow: DISALLOW },
      { userAgent: 'anthropic-ai', allow: '/', disallow: DISALLOW },
      { userAgent: 'PerplexityBot', allow: '/', disallow: DISALLOW },
      { userAgent: 'Perplexity-User', allow: '/', disallow: DISALLOW },
      { userAgent: 'cohere-ai', allow: '/', disallow: DISALLOW },
      { userAgent: 'MistralAI-User', allow: '/', disallow: DISALLOW },
      { userAgent: 'Googlebot', allow: '/', disallow: DISALLOW },
      { userAgent: 'Google-Extended', allow: '/', disallow: DISALLOW },
      { userAgent: 'Bingbot', allow: '/', disallow: DISALLOW },
      { userAgent: 'Meta-ExternalAgent', allow: '/', disallow: DISALLOW },
      { userAgent: 'Meta-ExternalFetcher', allow: '/', disallow: DISALLOW },
      { userAgent: 'Applebot', allow: '/', disallow: DISALLOW },
      { userAgent: 'Applebot-Extended', allow: '/', disallow: DISALLOW },
      { userAgent: 'Bytespider', allow: '/', disallow: DISALLOW },
      { userAgent: 'Amazonbot', allow: '/', disallow: DISALLOW },
      { userAgent: 'CCBot', allow: '/', disallow: DISALLOW },
      { userAgent: 'diffbot', allow: '/', disallow: DISALLOW },
      { userAgent: 'webzio-extended', allow: '/', disallow: DISALLOW },
    ],
    sitemap: 'https://seomd.dev/sitemap.xml',
  };
}
