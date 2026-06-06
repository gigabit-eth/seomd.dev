import VersionBadge from './VersionBadge';

/**
 * Protocol Header Bar — matches the top-of-page header in the mockups:
 * [PROTOCOL NAME] [PROTOCOL NAME] [PROTOCOL NAME]  |  REVISION [V1.0-ALPHA]  |  REFERENCE [SEO.md]
 */
export default function ProtocolHeader({
  protocolName = 'SEO.MD',
  revision = 'V1.0-ALPHA',
  reference = 'seomd.dev',
  referenceHref = 'https://seomd.dev',
}) {
  return (
    <header className="border-b border-outline-variant">
      <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between px-6 py-4 sm:py-3 gap-4 sm:gap-0">
        {/* Left: Protocol Name */}
        <div className="flex flex-col items-center sm:items-start gap-0.5">
          <span className="font-mono text-label-mono font-semibold text-secondary uppercase tracking-widest">
            PROTOCOL NAME
          </span>
          <span className="font-mono text-label-mono font-semibold text-secondary uppercase tracking-widest">
            {protocolName}
          </span>
        </div>

        {/* Center: Revision */}
        <div className="flex flex-col items-center gap-1.5">
          <span className="font-mono text-[11px] uppercase tracking-widest text-secondary">
            REVISION
          </span>
          <VersionBadge version={revision} />
        </div>

        {/* Right: Reference */}
        <div className="flex flex-col items-center sm:items-end gap-0.5">
          <span className="font-mono text-[11px] uppercase tracking-widest text-secondary">
            REFERENCE
          </span>
          <a
            href={referenceHref}
            className="font-mono text-label-mono font-semibold uppercase hover:underline"
          >
            {reference}
          </a>
        </div>
      </div>

      {/* Accent line */}
      <div className="h-px bg-primary" />
    </header>
  );
}
