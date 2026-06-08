import Navbar from "@/components/Navbar";
import CheckeredDivider from "@/components/CheckeredDivider";
import SpecFooter from "@/components/SpecFooter";

export const metadata = {
  title: "Connect Platform",
  description:
    "Connect your SEO.md specification file to automated writeback providers and get API keys.",
};

export default function ConnectPage() {
  return (
    <div className="min-h-screen bg-surface">
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="pt-14 pb-10 border-b-2 border-primary">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-secondary mb-4">
            INTEGRATION
          </p>
          <h1 className="font-display text-[clamp(48px,8vw,80px)] uppercase leading-[0.95] tracking-wide">
            CONNECT
          </h1>
          <CheckeredDivider className="mt-6 mb-6" />
          <p className="font-body text-body-lg text-on-surface-variant max-w-xl">
            Get an API key and connect your SEO.md standard file to writeback
            automation platforms.
          </p>
        </div>

        {/* Connection Methods */}
        <div className="py-12 space-y-12">
          {/* Method 1: Platform Deployments */}
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-secondary">
                METHOD 01
              </span>
            </div>
            <h2 className="font-display text-headline-sm uppercase tracking-wide">
              Agent-Native Platform Deployments
            </h2>
            <p className="font-body text-on-surface-variant leading-relaxed max-w-2xl">
              Deploy a Nextjs starter template that already includes{" "}
              <code>SEO.md</code>
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fseomd%2Fstarter-next"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                <img
                  src="https://vercel.com/button"
                  alt="Deploy with Vercel"
                  className="h-10 w-auto"
                />
              </a>
              <a
                href="https://app.netlify.com/start/deploy?repository=https://github.com/seomd/starter-next&fullConfiguration=true"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                <img
                  src="https://www.netlify.com/img/deploy/button.svg"
                  alt="Deploy to Netlify"
                  className="h-10 w-auto"
                />
              </a>
              <div className="font-mono text-[11px] uppercase tracking-wider text-secondary flex items-center gap-2 border border-outline-variant px-3 py-1.5 bg-surface-container">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/60"></span>{" "}
                v0
              </div>
              <div className="font-mono text-[11px] uppercase tracking-wider text-secondary flex items-center gap-2 border border-outline-variant px-3 py-1.5 bg-surface-container">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/60"></span>{" "}
                Lovable
              </div>
              <div className="font-mono text-[11px] uppercase tracking-wider text-secondary flex items-center gap-2 border border-outline-variant px-3 py-1.5 bg-surface-container">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/60"></span>{" "}
                Replit
              </div>
            </div>
          </div>

          {/* Method 2: Foxcite */}
          <div className="border border-primary p-6 md:p-8 bg-surface-container space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-secondary">
                METHOD 02
              </span>
              <span className="status-pill active">RECOMMENDED</span>
            </div>
            <h2 className="font-display text-headline-sm uppercase tracking-wide">
              Automated Integration via Foxcite
            </h2>
            <p className="font-body text-on-surface-variant leading-relaxed max-w-2xl">
              Foxcite reads your SEO.md specification, monitors search engines
              in real-time, and automatically pushes citation and gap analysis
              writebacks directly back to your GitHub repository.
            </p>
            <div className="pt-2">
              <a
                href="https://foxcite.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary py-2.5 px-6 text-[12px] inline-block"
              >
                CONNECT FOXCITE ↗
              </a>
            </div>
          </div>

          {/* Method 3: Manual CLI Setup */}
          <div className="space-y-6">
            <h2 className="font-display text-headline-sm uppercase tracking-wide">
              Method 03: CLI Key Authentication
            </h2>
            <p className="font-body text-on-surface-variant leading-relaxed">
              If you are using the CLI to run checks, analyze, or sync local
              directories manually:
            </p>

            <div className="space-y-6 border-l-2 border-outline-variant pl-6 mt-4">
              {/* Step 1 */}
              <div className="space-y-2">
                <span className="font-mono text-[11px] font-semibold text-secondary uppercase">
                  Step 1: Install the CLI
                </span>
                <p className="font-body text-body-md text-on-surface-variant">
                  Install the SEO.md CLI tool globally on your system:
                </p>
                <pre className="code-block font-mono text-[13px] p-3 overflow-x-auto select-all bg-surface border border-outline-variant">
                  npm install -g seomd-cli
                </pre>
              </div>

              {/* Step 2 */}
              <div className="space-y-2">
                <span className="font-mono text-[11px] font-semibold text-secondary uppercase">
                  Step 2: Obtain API Key
                </span>
                <p className="font-body text-body-md text-on-surface-variant">
                  Create a developer token from your provider dashboard (e.g.,
                  Foxcite account settings).
                </p>
              </div>

              {/* Step 3 */}
              <div className="space-y-2">
                <span className="font-mono text-[11px] font-semibold text-secondary uppercase">
                  Step 3: Export the Token
                </span>
                <p className="font-body text-body-md text-on-surface-variant">
                  Save the key as an environment variable in your terminal
                  session or <code>.env</code> file:
                </p>
                <pre className="code-block font-mono text-[13px] p-3 overflow-x-auto select-all bg-surface border border-outline-variant">
                  {`export SEOMD_API_KEY="your_provider_api_key"`}
                </pre>
              </div>

              {/* Step 4 */}
              <div className="space-y-2">
                <span className="font-mono text-[11px] font-semibold text-secondary uppercase">
                  Step 4: Run Synchronizations
                </span>
                <p className="font-body text-body-md text-on-surface-variant">
                  Run analyze or sync to validate, compute citations, and sync
                  engine metadata:
                </p>
                <pre className="code-block font-mono text-[13px] p-3 overflow-x-auto select-all bg-surface border border-outline-variant">
                  seomd sync
                </pre>
              </div>
            </div>
          </div>
        </div>
      </main>

      <SpecFooter />
    </div>
  );
}
