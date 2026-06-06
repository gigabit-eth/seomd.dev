export default function RequirementSeal({ label = 'Critical Requirement', text, children }) {
  return (
    <div className="requirement-seal">
      <div className="seal-label">{label}</div>
      <div className="seal-text">{text || children}</div>
    </div>
  );
}
