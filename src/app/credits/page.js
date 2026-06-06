import Navbar from '@/components/Navbar';
import CheckeredDivider from '@/components/CheckeredDivider';
import SpecFooter from '@/components/SpecFooter';
import Logo from '@/components/Logo';

export const metadata = {
  title: 'Credits',
  description: 'Credits and attributions for assets used in the SEO.md open standard platform.',
};

export default function CreditsPage() {
  return (
    <div className="min-h-screen bg-surface">
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 md:px-10">
        {/* Credits header */}
        <div className="pt-14 pb-10 border-b-2 border-primary">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-secondary mb-4">
            ACKNOWLEDGEMENTS
          </p>
          <h1 className="font-display text-[clamp(48px,8vw,80px)] uppercase leading-[0.95] tracking-wide">
            CREDITS
          </h1>
          <CheckeredDivider className="mt-6 mb-6" />
          <p className="font-body text-body-lg text-on-surface-variant max-w-xl">
            Assets, iconography, and community contributions that power the SEO.md protocol.
          </p>
        </div>

        {/* Credits content */}
        <div className="py-12 space-y-12">
          {/* Brand Identity / Vector assets */}
          <div className="border border-outline-variant p-6 md:p-8 bg-surface-container flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-shrink-0 p-4 bg-surface border border-outline-variant flex items-center justify-center">
              <Logo className="w-16 h-12 text-primary" />
            </div>
            <div className="space-y-3">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-secondary">
                BRAND ICONOGRAPHY
              </span>
              <h2 className="font-display text-headline-sm uppercase tracking-wide">
                Checkered Flag Logo
              </h2>
              <p className="font-body text-on-surface-variant max-w-xl leading-relaxed">
                The SEO.md checkered flag brand logo and vector shape is based on:
              </p>
              <p className="font-mono text-[13px] text-secondary">
                checkered flag by Alexander Skowalsky from <a href="https://thenounproject.com/browse/icons/term/checkered-flag/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline" title="checkered flag Icons">Noun Project</a> (CC BY 3.0)
              </p>
            </div>
          </div>

          {/* Open Source / Community */}
          <div className="space-y-4">
            <h3 className="font-display text-headline-sm uppercase tracking-wide">
              Contributors & Standards
            </h3>
            <p className="font-body text-on-surface-variant leading-relaxed">
              SEO.md is a public, open-source standard for AI Engine Optimization (AEO). The project is collaboratively built and shaped by SEO experts, AI engineers, and brand builders.
            </p>
            <p className="font-body text-on-surface-variant leading-relaxed">
              For guidelines, standard definitions, or to propose modifications, view the specification or visit the official GitHub repository.
            </p>
          </div>
        </div>
      </main>

      <SpecFooter />
    </div>
  );
}
