export function TopLoader({ active = true }: { active?: boolean }) {
  if (!active) return null;

  return (
    <div className="top-loader" aria-hidden="true">
      <span />
    </div>
  );
}
