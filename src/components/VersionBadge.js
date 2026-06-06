export default function VersionBadge({ version = 'V1.0-ALPHA', className = '' }) {
  return (
    <span className={`version-badge ${className}`}>
      {version}
    </span>
  );
}
