export default function CheckeredDivider({ className = '' }) {
  return (
    <div
      className={`checkered-divider ${className}`}
      role="separator"
      aria-hidden="true"
    />
  );
}
