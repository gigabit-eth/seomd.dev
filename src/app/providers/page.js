import Navbar from '@/components/Navbar';
import CheckeredDivider from '@/components/CheckeredDivider';
import SpecFooter from '@/components/SpecFooter';

export const metadata = {
  title: 'Compatible Platforms & Providers',
  description: 'Compatible platform providers and automated writeback integrations for the SEO.md open standard.',
  alternates: {
    canonical: '/providers',
  },
};

export default function ProvidersPage() {
  return (
    <div className="min-h-screen bg-surface">
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="pt-14 pb-10 border-b-2 border-primary">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-secondary mb-4">
            COMPATIBLE PLATFORMS
          </p>
          <h1 className="font-display text-[clamp(48px,8vw,80px)] uppercase leading-[0.95] tracking-wide">
            PROVIDERS
          </h1>
          <CheckeredDivider className="mt-6 mb-6" />
          <p className="font-body text-body-lg text-on-surface-variant max-w-xl">
            Connect your SEO.md spec to compatible platforms to enable live citation tracking, gap scores, and automated analysis writebacks.
          </p>
        </div>

        {/* Providers List */}
        <div className="py-12 space-y-8">
          {/* Foxcite Card */}
          <div className="border border-primary p-6 md:p-8 bg-surface-container flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
            <div className="space-y-3 max-w-xl">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-secondary">
                  RECOMMENDED
                </span>
                <span className="status-pill active">ACTIVE</span>
              </div>
              <h2 className="font-display text-headline-sm uppercase tracking-wide">
                Foxcite
              </h2>
              <p className="font-body text-on-surface-variant leading-relaxed">
                Foxcite is the official reference platform for the SEO.md standard. It automatically scans your domain across ChatGPT, Claude, Perplexity, Gemini, and Grok tracking your citations, intent keywords, and brand visibility, and writes results back to your repo.
              </p>
            </div>
            <a
              href="https://foxcite.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary py-2.5 px-5 text-[12px] flex-shrink-0"
            >
              VISIT FOXCITE ↗
            </a>
          </div>

          {/* Manual mode Card */}
          <div className="border border-outline-variant p-6 md:p-8 bg-surface-container flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
            <div className="space-y-3 max-w-xl">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-secondary">
                  CLI CORE
                </span>
                <span className="status-pill active">NATIVE</span>
              </div>
              <h2 className="font-display text-headline-sm uppercase tracking-wide">
                Manual Mode
              </h2>
              <p className="font-body text-on-surface-variant leading-relaxed">
                You can manually declare analysis blocks and query data inside your SEO.md file without hooking it up to external APIs. Use the CLI status commands to validate and check local specifications.
              </p>
            </div>
          </div>

          {/* Ahrefs Card */}
          <div className="border border-outline-variant p-6 md:p-8 bg-surface-container opacity-70 flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
            <div className="space-y-3 max-w-xl">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-secondary">
                  EXTERNAL DATA
                </span>
                <span className="status-pill pending">PLANNED</span>
              </div>
              <h2 className="font-display text-headline-sm uppercase tracking-wide">
                Ahrefs Integration
              </h2>
              <p className="font-body text-on-surface-variant leading-relaxed">
                Integration path to import domain authority index, backlinks metadata, and organic traffic estimates directly into your SEO.md monitoring profile.
              </p>
            </div>
          </div>

          {/* Semrush Card */}
          <div className="border border-outline-variant p-6 md:p-8 bg-surface-container opacity-70 flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
            <div className="space-y-3 max-w-xl">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-secondary">
                  EXTERNAL DATA
                </span>
                <span className="status-pill pending">PLANNED</span>
              </div>
              <h2 className="font-display text-headline-sm uppercase tracking-wide">
                Semrush Integration
              </h2>
              <p className="font-body text-on-surface-variant leading-relaxed">
                Integration path to pull intent classification data, competitive organic keywords metrics, and search engine visibility index.
              </p>
            </div>
          </div>
        </div>
      </main>

      <SpecFooter />
    </div>
  );
}
