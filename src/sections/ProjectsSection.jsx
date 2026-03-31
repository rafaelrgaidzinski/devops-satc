import { useState } from "react";
import { PROJECTS } from "../constants/data";
import { IcoGithub, IcoArrowL, IcoArrowR } from "../components/icons/Icons";

export default function ProjectsSection() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a - 1 + PROJECTS.length) % PROJECTS.length);
  const next = () => setActive((a) => (a + 1) % PROJECTS.length);

  const project = PROJECTS[active];

  return (
    <section id="projetos" style={{ background: "var(--surface)" }}>
      <div className="container">
        <div className="section-label">// projetos</div>
        <h2 className="section-title">
          O que eu <span className="neon-text">construí</span>
        </h2>

        <div className="project-grid">
          {/* ── Left: text info ── */}
          <div key={project.id} className="slide-in">
            {/* Large number */}
            <div style={{
              fontFamily: "var(--font-display)", fontSize: 80, fontWeight: 800,
              color: "transparent", WebkitTextStroke: `1px ${project.color}`,
              opacity: 0.25, lineHeight: 1, marginBottom: 4,
            }}>
              {project.number}
            </div>

            {/* Status badge */}
            <span style={{
              display: "inline-block", padding: "3px 12px",
              border: `1px solid ${project.color}`, color: project.color,
              fontSize: 10, letterSpacing: 2, marginBottom: 14, textTransform: "uppercase",
            }}>
              {project.status}
            </span>

            <h3 style={{
              fontFamily: "var(--font-display)", fontSize: 34, fontWeight: 800,
              marginBottom: 6, color: "var(--text)",
            }}>
              {project.name}
            </h3>

            <p style={{ color: "var(--muted)", fontSize: 13, marginBottom: 14 }}>
              {project.subtitle}
            </p>

            <p style={{ color: "var(--muted)", lineHeight: 1.85, fontSize: 14, marginBottom: 24 }}>
              {project.description}
            </p>

            {/* Tech tags */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 28 }}>
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    padding: "4px 12px",
                    background: "var(--bg)",
                    border: "1px solid var(--border)",
                    fontSize: 11, letterSpacing: 1,
                    color: "var(--muted)", fontFamily: "var(--font-mono)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <a href={project.github} target="_blank" rel="noreferrer" className="btn-primary">
              <IcoGithub />
              <span>Ver no GitHub</span>
            </a>
          </div>

          {/* ── Right: visual card + controls ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <ProjectCard project={project} />

            {/* Carousel controls */}
            <div style={{ display: "flex", gap: 12, justifyContent: "space-between", alignItems: "center" }}>
              <button onClick={prev} className="btn-ghost" style={{ padding: "12px 20px" }}>
                <IcoArrowL />
              </button>

              <div style={{ display: "flex", gap: 8 }}>
                {PROJECTS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    style={{
                      width: i === active ? 28 : 8, height: 8,
                      borderRadius: 4, border: "none", cursor: "pointer",
                      background: i === active ? "var(--neon)" : "var(--border)",
                      transition: "all 0.3s",
                    }}
                  />
                ))}
              </div>

              <button onClick={next} className="btn-ghost" style={{ padding: "12px 20px" }}>
                <IcoArrowR />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Project visual card ───────────────────────────────────────────────────────
function ProjectCard({ project }) {
  const corners = ["◢", "◣", "◥", "◤"];
  const positions = [
    { top: 12, left: 12 },
    { top: 12, right: 12 },
    { bottom: 12, left: 12 },
    { bottom: 12, right: 12 },
  ];

  return (
    <div style={{
      background: "var(--bg)",
      border: `1px solid ${project.color}`,
      boxShadow: `0 0 40px ${project.color}18`,
      padding: 40, position: "relative", overflow: "hidden",
      minHeight: 280,
      display: "flex", alignItems: "center", justifyContent: "center",
    }}>
      {/* Corner decorations */}
      {corners.map((char, i) => (
        <span
          key={i}
          style={{
            position: "absolute", ...positions[i],
            color: project.color, fontSize: 12, fontFamily: "var(--font-mono)",
          }}
        >
          {char}
        </span>
      ))}

      <div style={{ textAlign: "center" }}>
        <div style={{
          fontFamily: "var(--font-display)", fontSize: 48, fontWeight: 800,
          color: project.color, textShadow: `0 0 40px ${project.color}`,
          marginBottom: 8,
        }}>
          {project.name}
        </div>
        <div style={{ color: "var(--muted)", fontSize: 12, letterSpacing: 3, textTransform: "uppercase" }}>
          {project.subtitle}
        </div>
      </div>
    </div>
  );
}
