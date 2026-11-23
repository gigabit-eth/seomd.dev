import Link from 'next/link';
import Navbar from '@/components/Navbar';
import CheckeredDivider from '@/components/CheckeredDivider';
import SpecFooter from '@/components/SpecFooter';

export const metadata = {
  title: 'Get Started & Connect',
  description:
    'Initialize SEO.md v2.0.0 locally with zero API keys, or connect Foxcite or any custom Provider Protocol endpoint for live AI citation scans.',
  alternates: {
    canonical: '/connect',
  },
};

export default function ConnectPage() {
  return (
    <div className="min-h-screen bg-surface">
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="pt-14 pb-10 border-b-2 border-primary">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-secondary mb-4">
            GET STARTED · SPEC V2.0.0
          </p>
          <h1 className="font-display text-[clamp(48px,8vw,80px)] uppercase leading-[0.95] tracking-wide">
            CONNECT
          </h1>
          <CheckeredDivider className="mt-6 mb-6" />
          <p className="font-body text-body-lg text-on-surface-variant max-w-2xl">
            Start locally in 10 seconds with zero API keys — then optionally connect Foxcite or
            any compatible provider for live multi-LLM citation scans and <code>.seo/</code>{' '}
            playbook writebacks.
          </p>
        </div>

        <div className="py-12 space-y-14">
          {/* Method 1: Local Zero-Key Setup */}
          <div className="space-y-5">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-secondary">
                STEP 01
              </span>
              <span className="status-pill active">ZERO API KEY</span>
            </div>
            <h2 className="font-display text-headline-sm uppercase tracking-wide">
              Initialize Locally &amp; Wire Coding Agents
            </h2>
            <p className="font-body text-on-surface-variant leading-relaxed max-w-2xl">
              Run <code>init</code> in your repo root. It detects your framework routes, scaffolds{' '}
              <code>SEO.md</code> (v2.0.0), and wires a pointer into <code>AGENTS.md</code> /{' '}
              <code>CLAUDE.md</code> so coding agents automatically follow your SEO/AEO rules.
            </p>
            <div className="code-block">
              <pre>{`npx seomd-cli init
npx seomd-cli validate --strict
npx seomd-cli generate robots --out public/robots.txt
npx seomd-cli generate llms --out public/llms.txt
npx seomd-cli check ./public
npx seomd-cli doctor`}</pre>
            </div>
          </div>

          {/* Method 2: Connect Foxcite (Reference Provider) */}
          <div className="space-y-5 pt-10 border-t border-outline-variant">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-secondary">
                STEP 02 (OPTIONAL)
              </span>
              <span className="status-pill active">REFERENCE PROVIDER</span>
            </div>
            <h2 className="font-display text-headline-sm uppercase tracking-wide">
              Connect Foxcite for Live Citation Analysis
            </h2>
            <p className="font-body text-on-surface-variant leading-relaxed max-w-2xl">
              Foxcite natively implements the <code>SEO.md</code> Provider Protocol — scanning
              ChatGPT, Claude, Perplexity, Gemini, and Grok and writing merge-safe metrics and
              remediation playbooks into <code>.seo/STATUS.yml</code>, <code>.seo/REVERSE.md</code>,
              and <code>.seo/pages/*.md</code>.
            </p>
            <div className="code-block">
              <pre>{`# Add to .env (never commit .env to git)
SEOMD_PROVIDER=foxcite
SEOMD_API_KEY=your_api_key_here

# Run a live audit or sync cached data
npx seomd-cli analyze
npx seomd-cli analyze --page /pricing --intent transactional
npx seomd-cli sync --dry-run
npx seomd-cli status`}</pre>
            </div>
            <div className="pt-2">
              <a
                href="https://foxcite.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary py-2.5 px-6 text-[12px] inline-block"
              >
                GET A FOXCITE API KEY ↗
              </a>
            </div>
          </div>

          {/* Method 3: Connect Any Custom or Third-Party Provider */}
          <div className="space-y-5 pt-10 border-t border-outline-variant">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-secondary">
                STEP 03 (OPTIONAL)
              </span>
              <span className="status-pill pending">VENDOR-AGNOSTIC</span>
            </div>
            <h2 className="font-display text-headline-sm uppercase tracking-wide">
              Connect a Custom or Third-Party Provider
            </h2>
            <p className="font-body text-on-surface-variant leading-relaxed max-w-2xl">
              Use any custom backend or bridge adapter for SEMrush, Ahrefs, Profound, or Peec AI by
              setting <code>SEOMD_PROVIDER</code> and <code>SEOMD_API_URL</code> (or declaring{' '}
              <code>provider.endpoint</code> in <code>SEO.md</code>).
            </p>
            <div className="code-block">
              <pre>{`SEOMD_PROVIDER=custom # or semrush | ahrefs | profound | peec
SEOMD_API_URL=https://api.your-provider.com
SEOMD_API_KEY=your_provider_token`}</pre>
            </div>
            <div className="pt-2">
              <Link
                href="/providers#protocol"
                className="btn-secondary py-2.5 px-6 text-[12px] inline-block"
              >
                READ PROVIDER PROTOCOL →
              </Link>
            </div>
          </div>
        </div>
      </main>

      <SpecFooter verifiedBy="SEOMD_CORE" location="GITHUB" />
    </div>
  );
}
