import { useState, useEffect } from "react";
import { PERSONAL } from "../constants/data";
import { IcoDownload, IcoMail } from "../components/icons/Icons";

export default function HomeSection() {
  const [typed, setTyped] = useState("");

  // Typewriter effect for role title
  useEffect(() => {
    let i = 0;
    const role = PERSONAL.role;
    const timer = setInterval(() => {
      if (i <= role.length) {
        setTyped(role.slice(0, i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 80);
    return () => clearInterval(timer);
  }, []);

  const scrollToContact = () =>
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* ── Decorative orbs ── */}
      <div style={{
        position: "absolute", right: "-10%", top: "20%",
        width: 500, height: 500, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(0,255,178,0.06) 0%, transparent 70%)",
        pointerEvents: "none",
        animation: "float 6s ease-in-out infinite",
      }} />
      <div style={{
        position: "absolute", left: "-5%", bottom: "10%",
        width: 300, height: 300, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(123,97,255,0.06) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div className="container" style={{ paddingTop: 80 }}>
        {/* Greeting label */}
        <div className="fade-up-1">
          <span style={{
            fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: 4,
            color: "var(--neon)", textTransform: "uppercase",
            display: "flex", alignItems: "center", gap: 8, marginBottom: 24,
          }}>
            <span style={{ display: "inline-block", width: 32, height: 1, background: "var(--neon)" }} />
            Olá, eu sou
          </span>
        </div>

        {/* Name */}
        <h1
          className="fade-up-2"
          style={{
            fontFamily: "var(--font-display)", fontWeight: 800,
            fontSize: "clamp(40px, 8vw, 84px)",
            lineHeight: 1.0, marginBottom: 16, letterSpacing: "-2px",
          }}
        >
          Rafael
          <br />
          <span style={{ color: "transparent", WebkitTextStroke: "1px var(--neon)" }}>
            Ronsoni
          </span>
          <br />
          Gaidzinski
        </h1>

        {/* Typewriter role */}
        <div className="fade-up-3" style={{ marginBottom: 36 }}>
          <span style={{
            fontFamily: "var(--font-mono)",
            fontSize: "clamp(13px, 2.5vw, 18px)",
            color: "var(--muted)",
          }}>
            {typed}
            <span style={{ animation: "pulse 1s infinite", color: "var(--neon)" }}>▋</span>
          </span>
        </div>

        {/* Bio */}
        <p className="fade-up-3" style={{
          maxWidth: 520, lineHeight: 1.9,
          color: "var(--muted)", fontSize: 14, marginBottom: 44,
        }}>
          {PERSONAL.bio}
        </p>

        {/* CTAs */}
        <div className="fade-up-4" style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <a href="#" download className="btn-primary">
            <IcoDownload />
            <span>Download Currículo</span>
          </a>
          <button onClick={scrollToContact} className="btn-ghost">
            <IcoMail />
            <span>Entre em Contato</span>
          </button>
        </div>

        {/* Stats */}
        <div className="fade-up-4" style={{ display: "flex", gap: 48, marginTop: 64, flexWrap: "wrap" }}>
          {PERSONAL.stats.map((s) => (
            <div key={s.label}>
              <div style={{
                fontFamily: "var(--font-display)", fontWeight: 800,
                fontSize: 34, color: "var(--neon)",
              }}>
                {s.val}
              </div>
              <div style={{
                fontSize: 11, letterSpacing: 2,
                color: "var(--muted)", textTransform: "uppercase",
              }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
