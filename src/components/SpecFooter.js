import CheckeredDivider from './CheckeredDivider';

/**
 * Spec page footer — "DONE & SEALED" section matching screen3.png mockup.
 * Shows the checkered divider, "END OF SPECIFICATION" label, the big headline,
 * and signature fields (Verified By, Timestamp, Location).
 */
export default function SpecFooter({
  verifiedBy = 'CORE_DEV_01',
  timestamp,
  location = 'GITHUB',
}) {
  const ts = timestamp || Math.floor(Date.now() / 1000);

  return (
    <footer className="mt-20">
      <CheckeredDivider />

      <div className="px-8 py-16 text-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-secondary mb-6">
          END OF SPECIFICATION
        </p>

        <h2 className="font-display text-display-lg uppercase leading-display mb-16">
          DONE &amp; SEALED
        </h2>

        {/* Signature line */}
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end border-t border-on-surface pt-4 max-w-3xl mx-auto gap-8 sm:gap-4">
          <div className="text-center flex flex-col items-center">
            <div className="w-40 h-px bg-on-surface mb-2" />
            <p className="font-mono text-[11px] uppercase tracking-widest text-secondary">
              VERIFIED BY
            </p>
            <p className="font-mono text-label-mono font-semibold uppercase mt-0.5">
              {verifiedBy}
            </p>
          </div>

          <div className="text-center flex flex-col items-center">
            <div className="w-40 h-px bg-on-surface mb-2" />
            <p className="font-mono text-[11px] uppercase tracking-widest text-secondary">
              TIMESTAMP
            </p>
            <p className="font-mono text-label-mono font-semibold mt-0.5">
              {ts}
            </p>
          </div>

          <div className="text-center flex flex-col items-center">
            <div className="w-40 h-px bg-on-surface mb-2" />
            <p className="font-mono text-[11px] uppercase tracking-widest text-secondary">
              LOCATION
            </p>
            <p className="font-mono text-label-mono font-semibold uppercase mt-0.5">
              {location}
            </p>
          </div>
        </div>
      </div>

      {/* Site footer */}
      <div className="border-t border-outline-variant px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="font-mono text-[12px] text-secondary">
          © {new Date().getFullYear()} SEO.md - MIT License
        </p>
        <div className="flex gap-6">
          <a href="/credits" className="font-mono text-[12px] text-secondary hover:text-primary transition-colors">
            Credits
          </a>
          <a href="/blog" className="font-mono text-[12px] text-secondary hover:text-primary transition-colors">
            Blog
          </a>
          <a
            href="https://github.com/seomd/cli"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[12px] text-secondary hover:text-primary transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
