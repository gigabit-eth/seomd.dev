export default function VersionBadge({ version = 'V2.0.0', className = '' }) {
  return (
    <span className={`version-badge ${className}`}>
      {version}
    </span>
  );
}
