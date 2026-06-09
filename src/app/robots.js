export default function robots() {
  return {
    rules: [
      // Allow all standard crawlers
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      // Explicitly allow AI bots — matches SEO.md crawl spec
      [
        { userAgent: 'GPTBot', allow: '/' },
        { userAgent: 'OAI-SearchBot', allow: '/' },
        { userAgent: 'ChatGPT-User', allow: '/' },
        { userAgent: 'ClaudeBot', allow: '/' },
        { userAgent: 'Claude-User', allow: '/' },
        { userAgent: 'Claude-SearchBot', allow: '/' },
        { userAgent: 'anthropic-ai', allow: '/' },
        { userAgent: 'PerplexityBot', allow: '/' },
        { userAgent: 'Perplexity-User', allow: '/' },
        { userAgent: 'cohere-ai', allow: '/' },
        { userAgent: 'MistralAI-User', allow: '/' },
        { userAgent: 'Googlebot', allow: '/' },
        { userAgent: 'Google-Extended', allow: '/' },
        { userAgent: 'Bingbot', allow: '/' },
        { userAgent: 'Meta-ExternalAgent', allow: '/' },
        { userAgent: 'Meta-ExternalFetcher', allow: '/' },
        { userAgent: 'Applebot', allow: '/' },
        { userAgent: 'Applebot-Extended', allow: '/' },
        { userAgent: 'Bytespider', allow: '/' },
        { userAgent: 'Amazonbot', allow: '/' },
        { userAgent: 'CCBot', allow: '/' },
        { userAgent: 'diffbot', allow: '/' },
        { userAgent: 'webzio-extended', allow: '/' }
      ]
    ],
    sitemap: 'https://seomd.dev/sitemap.xml',
  };
}
