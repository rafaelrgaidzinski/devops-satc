import { TECHS } from "../constants/data";

export default function TechSection() {
  return (
    <section id="tecnologias">
      <div className="container">
        <div className="section-label">// stack</div>
        <h2 className="section-title">
          Tecnologias que <span className="neon-text">domino</span>
        </h2>

        <div className="tech-grid">
          {TECHS.map((tech) => (
            <TechBadge key={tech.name} tech={tech} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Individual badge ──────────────────────────────────────────────────────────
function TechBadge({ tech }) {
  const handleEnter = (e) => {
    e.currentTarget.style.borderColor = tech.color;
    e.currentTarget.style.boxShadow   = `0 0 24px ${tech.color}30`;
    e.currentTarget.style.transform   = "translateY(-4px)";
  };

  const handleLeave = (e) => {
    e.currentTarget.style.borderColor = "var(--border)";
    e.currentTarget.style.boxShadow   = "none";
    e.currentTarget.style.transform   = "translateY(0)";
  };

  return (
    <div
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      style={{
        padding: "20px 16px",
        background: "var(--surface)",
        border: "1px solid var(--border)",
        display: "flex", flexDirection: "column",
        alignItems: "center", gap: 10,
        cursor: "default",
        transition: "all var(--transition)",
      }}
    >
      <span style={{ fontSize: 26 }}>{tech.icon}</span>

      <span style={{
        fontFamily: "var(--font-mono)", fontSize: 11,
        letterSpacing: 1, color: "var(--muted)", textAlign: "center",
      }}>
        {tech.name}
      </span>

      {/* Color accent bar */}
      <div style={{
        width: "100%", height: 2,
        background: `linear-gradient(to right, ${tech.color}, transparent)`,
      }} />
    </div>
  );
}
