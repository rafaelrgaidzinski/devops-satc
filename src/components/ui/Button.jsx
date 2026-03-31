/**
 * Button
 * Variants: "primary" (neon fill on hover) | "ghost" (muted border)
 * Renders as <a> when `href` is provided, otherwise <button>.
 */
export default function Button({
  children,
  variant = "primary",
  href,
  target,
  rel,
  onClick,
  disabled = false,
  style = {},
  type = "button",
}) {
  const base = {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    padding: "14px 28px",
    background: "transparent",
    fontFamily: "var(--font-mono)",
    fontSize: 13,
    letterSpacing: 2,
    textTransform: "uppercase",
    cursor: disabled ? "not-allowed" : "pointer",
    textDecoration: "none",
    transition: "all var(--transition)",
    border: "1.5px solid",
    opacity: disabled ? 0.65 : 1,
    position: "relative",
    overflow: "hidden",
    ...style,
  };

  const variants = {
    primary: {
      borderColor: "var(--neon)",
      color: "var(--neon)",
    },
    ghost: {
      borderColor: "var(--border)",
      color: "var(--muted)",
    },
  };

  const combined = { ...base, ...variants[variant] };

  /* Hover handled via CSS class — injected once */
  const cls = variant === "primary" ? "btn-primary" : "btn-ghost";

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={cls} style={combined}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={cls} style={combined}>
      {children}
    </button>
  );
}
