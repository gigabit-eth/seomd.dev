import Navbar from '@/components/Navbar';
import ProtocolHeader from '@/components/ProtocolHeader';
import CheckeredDivider from '@/components/CheckeredDivider';
import SpecFooter from '@/components/SpecFooter';

export const metadata = {
  title: 'Providers & Provider Protocol (v2.0.0)',
  description:
    'The SEO.md provider protocol: two HTTP endpoints any SEO or AEO platform can implement for live citation scans. Foxcite is the reference; others can bridge.',
  alternates: {
    canonical: '/providers',
  },
};

const THIRD_PARTY_PROVIDERS = [
  {
    id: 'semrush',
    name: 'SEMrush',
    desc: 'Recognized first-class provider ID (`semrush`). Connect via a bridge endpoint (`SEOMD_API_URL`) today or request native SEO.md Provider Protocol support from SEMrush.',
  },
  {
    id: 'ahrefs',
    name: 'Ahrefs',
    desc: 'Recognized first-class provider ID (`ahrefs`). Connect via a bridge endpoint (`SEOMD_API_URL`) today or request native SEO.md Provider Protocol support from Ahrefs.',
  },
  {
    id: 'profound',
    name: 'Profound',
    desc: 'Recognized first-class provider ID (`profound`). Connect via a bridge endpoint (`SEOMD_API_URL`) today or request native SEO.md Provider Protocol support from Profound.',
  },
  {
    id: 'peec',
    name: 'Peec AI',
    desc: 'Recognized first-class provider ID (`peec`). Connect via a bridge endpoint (`SEOMD_API_URL`) today or request native SEO.md Provider Protocol support from Peec AI.',
  },
];

export default function ProvidersPage() {
  return (
    <div className="min-h-screen bg-surface">
      <Navbar />

      <ProtocolHeader
        protocolName="PROVIDER PROTOCOL"
        revision="V2.0.0"
        reference="seomd.dev/providers"
        referenceHref="https://seomd.dev/providers"
      />

      <main className="max-w-4xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="pt-14 pb-10 border-b-2 border-primary">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-secondary mb-4">
            VENDOR-AGNOSTIC ECOSYSTEM
          </p>
          <h1 className="font-display text-[clamp(48px,8vw,80px)] uppercase leading-[0.95] tracking-wide">
            PROVIDERS
          </h1>
          <CheckeredDivider className="mt-6 mb-6" />
          <p className="font-body text-body-lg text-on-surface-variant max-w-2xl">
            SEO.md is an open standard. Local commands work offline with zero API keys, and any
            platform can power live AI citation scans (<code>seomd analyze</code> /{' '}
            <code>seomd sync</code>) by implementing the open Provider Protocol below.
          </p>
        </div>

        {/* Providers List */}
        <div className="py-12 space-y-6 border-b-2 border-primary">
          {/* Foxcite Card */}
          <div className="border-2 border-primary p-6 md:p-8 bg-surface-container flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
            <div className="space-y-3 max-w-xl">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-secondary">
                  REFERENCE IMPLEMENTATION
                </span>
                <span className="status-pill active">NATIVE</span>
              </div>
              <h2 className="font-display text-headline-sm uppercase tracking-wide">
                Foxcite
              </h2>
              <p className="font-body text-on-surface-variant leading-relaxed">
                Official reference provider for <code>SEO.md</code>. Natively implements{' '}
                <code>analyze</code>, <code>sync</code>, per-page <code>.seo/pages/*.md</code>{' '}
                remediation playbooks, competitor reverse-engineering, and agent-native{' '}
                <code>x402</code> pay-per-scan across ChatGPT, Claude, Perplexity, Gemini, and Grok.
              </p>
              <p className="font-mono text-[12px] text-secondary">
                provider.name: <code>foxcite</code> · SEOMD_PROVIDER=foxcite
              </p>
            </div>
            <a
              href="https://foxcite.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary py-2.5 px-5 text-[12px] shrink-0"
            >
              VISIT FOXCITE ↗
            </a>
          </div>

          {/* Local / Offline Mode */}
          <div className="border border-primary p-6 md:p-8 bg-surface flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
            <div className="space-y-3 max-w-xl">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-secondary">
                  CLI CORE · ZERO API KEY
                </span>
                <span className="status-pill active">NATIVE</span>
              </div>
              <h2 className="font-display text-headline-sm uppercase tracking-wide">
                Local / Offline Mode
              </h2>
              <p className="font-body text-on-surface-variant leading-relaxed">
                Leave <code>provider.name: null</code> to use <code>seomd-cli</code> 100% locally:
                repo-aware <code>init</code>, <code>AGENTS.md</code> / <code>CLAUDE.md</code>{' '}
                wiring, <code>validate --strict</code>, HTML &amp; <code>robots.txt</code> auditing (
                <code>check</code>), <code>generate robots | llms | schema</code>, and{' '}
                <code>doctor</code>.
              </p>
            </div>
          </div>

          {/* Custom HTTP Provider */}
          <div className="border border-primary p-6 md:p-8 bg-surface flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
            <div className="space-y-3 max-w-xl">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-secondary">
                  OPEN HTTP PROTOCOL
                </span>
                <span className="status-pill active">NATIVE</span>
              </div>
              <h2 className="font-display text-headline-sm uppercase tracking-wide">
                Custom Provider / Self-Hosted Bridge
              </h2>
              <p className="font-body text-on-surface-variant leading-relaxed">
                Point <code>SEOMD_API_URL</code> (or <code>provider.endpoint</code> in{' '}
                <code>SEO.md</code>) to any internal service or community adapter implementing{' '}
                <code>POST /cli/analyze</code> and <code>POST /cli/sync</code>.
              </p>
              <p className="font-mono text-[12px] text-secondary">
                provider.name: <code>custom</code> · SEOMD_API_URL=https://api.your-provider.com
              </p>
            </div>
            <a
              href="#protocol"
              className="btn-secondary py-2.5 px-5 text-[12px] shrink-0"
            >
              VIEW CONTRACT ↓
            </a>
          </div>

          {/* Third-party providers grid */}
          <div className="pt-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-secondary mb-4">
              THIRD-PARTY PLATFORMS (BRIDGEABLE TODAY · OPEN FOR NATIVE SUPPORT)
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-l border-outline-variant">
              {THIRD_PARTY_PROVIDERS.map((p) => (
                <div
                  key={p.id}
                  className="p-6 border-r border-b border-outline-variant bg-surface-container/60 space-y-3"
                >
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-display text-headline-sm uppercase tracking-wide">
                      {p.name}
                    </h3>
                    <span className="status-pill pending">ADAPTER / REQUEST</span>
                  </div>
                  <p className="font-body text-body-sm text-on-surface-variant leading-relaxed">
                    {p.desc}
                  </p>
                  <p className="font-mono text-[11px] text-secondary">
                    provider.name: <code>{p.id}</code>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Provider Protocol Contract */}
        <section id="protocol" className="py-14 scroll-mt-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-secondary mb-3">
            PROVIDER_SPEC.MD · V2.0.0
          </p>
          <h2 className="font-display text-headline-lg uppercase leading-headline mb-6">
            THE PROVIDER PROTOCOL
          </h2>
          <p className="font-body text-body-md text-on-surface-variant leading-body mb-8 max-w-2xl">
            Any vendor or community bridge can add native <code>seomd-cli</code> support by
            exposing two JSON endpoints. Credentials are passed via standard headers:
            <code>Authorization: Bearer &lt;SEOMD_API_KEY&gt;</code>, optional{' '}
            <code>x-payment-token</code> (x402), and optional <code>x-seomd-domain</code>.
          </p>

          <div className="overflow-x-auto mb-8">
            <table className="prose-table">
              <thead>
                <tr>
                  <th>Endpoint</th>
                  <th>Purpose</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code className="font-mono text-[12px]">POST /cli/analyze</code></td>
                  <td className="text-secondary text-[13px]">Run live multi-LLM citation analysis</td>
                  <td className="text-secondary text-[13px]">Receives domain, niche, brand, filtered queries, engines, and pages</td>
                </tr>
                <tr>
                  <td><code className="font-mono text-[12px]">POST /cli/sync</code></td>
                  <td className="text-secondary text-[13px]">Pull latest cached analysis without running a new scan</td>
                  <td className="text-secondary text-[13px]">CLI automatically falls back to <code>GET /cli/sync</code> on HTTP 405</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="font-mono text-[11px] uppercase tracking-widest text-secondary mb-3">
            STANDARD RESPONSE SHAPE
          </p>
          <div className="code-block mb-8">
            <pre>{`{
  "provider": "your-provider",
  "domain": "acme.com",
  "brand_name": "Acme",
  "credits_remaining": 42,
  "aeo_analysis": {
    "overall_citation_rate": 0.35,
    "overall_gap_score": 48,
    "engines_tracked": ["ChatGPT", "Perplexity", "Claude"],
    "last_analyzed": "2026-11-22T00:00:00Z",
    "next_analysis": "2026-11-29T00:00:00Z"
  },
  "intent_analysis": {
    "category": {
      "citation_rate": 0.2,
      "gap_score": 65,
      "top_cited_competitor": "chargebee.com",
      "trend": "up"
    }
  },
  "page_analysis": [
    {
      "id": "pricing",
      "url": "/pricing",
      "status": "live",
      "citation_rate": 0.4,
      "gap_score": 38,
      "top_cited_competitor": "chargebee.com",
      "why_page_won": ["Transparent tier comparison table"],
      "citation_hooks": ["FAQPage JSON-LD with pricing Q&As"],
      "gaps_for_brand": ["Missing enterprise SLA summary"],
      "fastest_win": {
        "action": "Add 50-word pricing summary above the fold",
        "estimated_gap_score_improvement": 12,
        "effort": "low"
      },
      "markdown_content": "# pricing\\n\\n..."
    }
  ]
}`}</pre>
          </div>

          <div className="protip">
            <div className="protip-label">HTTP Status Codes</div>
            <p className="font-body text-body-md text-on-surface">
              Return <code>401</code> for invalid/missing keys and <code>402</code> for insufficient
              credits (with optional <code>x402</code> payment retry via{' '}
              <code>SEOMD_PAYMENT_TOKEN</code>).
            </p>
          </div>
        </section>
      </main>

      <SpecFooter verifiedBy="SEOMD_CORE" location="GITHUB" />
    </div>
  );
}
