export function Skeleton({
  className = "",
  dark = false,
}: {
  className?: string;
  dark?: boolean;
}) {
  return <span className={`skeleton-block ${dark ? "skeleton-dark" : ""} ${className}`} aria-hidden="true" />;
}
