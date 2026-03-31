import { useState, useEffect } from "react";
import { NAV_LINKS, PERSONAL } from "../../constants/data";
import { IcoGithub, IcoLinkedin, IcoMenu, IcoClose } from "../icons/Icons";

export default function Navbar({ activeSection }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "0 32px", height: 64,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: scrolled ? "rgba(8,11,16,0.96)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        transition: "all 0.4s",
      }}>
        {/* ── Logo ── */}
        <button onClick={() => scrollTo("home")} style={{
          background: "none", border: "none", cursor: "pointer",
          display: "flex", alignItems: "center", gap: 10,
        }}>
          <div style={{
            width: 36, height: 36,
            border: "1.5px solid var(--neon)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 14,
            color: "var(--neon)", boxShadow: "0 0 12px var(--neon)",
          }}>
            RG
          </div>
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 16, color: "var(--text)" }}>
            Rafael<span style={{ color: "var(--neon)" }}>.</span>dev
          </span>
        </button>

        {/* ── Desktop links ── */}
        <div className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: 8 }}>
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              style={{
                background: "none", border: "none", cursor: "pointer",
                padding: "8px 16px",
                fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: 2,
                textTransform: "uppercase",
                color: activeSection === link ? "var(--neon)" : "var(--muted)",
                transition: "color var(--transition)",
                position: "relative",
              }}
            >
              {activeSection === link && (
                <span style={{
                  position: "absolute", bottom: 2, left: "50%", transform: "translateX(-50%)",
                  width: 4, height: 4, borderRadius: "50%",
                  background: "var(--neon)", boxShadow: "0 0 6px var(--neon)",
                }} />
              )}
              {link}
            </button>
          ))}
        </div>

        {/* ── Social + burger ── */}
        <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
          <SocialLink href={PERSONAL.linkedin} hoverColor="#0077B5"><IcoLinkedin /></SocialLink>
          <SocialLink href={PERSONAL.github}   hoverColor="var(--text)"><IcoGithub /></SocialLink>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="burger-btn"
            style={{ background: "none", border: "none", cursor: "pointer", color: "var(--muted)", display: "none" }}
          >
            {menuOpen ? <IcoClose /> : <IcoMenu />}
          </button>
        </div>
      </nav>

      {/* ── Mobile fullscreen menu ── */}
      {menuOpen && (
        <div style={{
          position: "fixed", inset: 0, zIndex: 99,
          background: "rgba(8,11,16,0.98)",
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
          gap: 32,
          animation: "mobileMenuIn 0.3s ease",
        }}>
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              style={{
                background: "none", border: "none", cursor: "pointer",
                fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 32,
                textTransform: "uppercase",
                color: activeSection === link ? "var(--neon)" : "var(--text)",
              }}
            >
              {link}
            </button>
          ))}
        </div>
      )}

      {/* ── Inline button styles (avoids styled-components dep) ── */}
      <style>{`
        .btn-primary { display:inline-flex;align-items:center;gap:8px;padding:14px 28px;background:transparent;border:1.5px solid var(--neon);color:var(--neon);font-family:var(--font-mono);font-size:13px;letter-spacing:2px;text-transform:uppercase;cursor:pointer;text-decoration:none;transition:all .3s;position:relative;overflow:hidden; }
        .btn-primary::before { content:'';position:absolute;inset:0;background:var(--neon);transform:translateX(-100%);transition:transform .3s;z-index:0; }
        .btn-primary:hover::before { transform:translateX(0); }
        .btn-primary:hover { color:var(--bg); }
        .btn-primary > * { position:relative;z-index:1; }
        .btn-ghost { display:inline-flex;align-items:center;gap:8px;padding:14px 28px;background:transparent;border:1.5px solid var(--border);color:var(--muted);font-family:var(--font-mono);font-size:13px;letter-spacing:2px;text-transform:uppercase;cursor:pointer;text-decoration:none;transition:all .3s; }
        .btn-ghost:hover { border-color:var(--neon2);color:var(--neon2); }
      `}</style>
    </>
  );
}

// ── Internal helper ──────────────────────────────────────────────────────────
function SocialLink({ href, hoverColor, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      style={{ color: "var(--muted)", transition: "color var(--transition)", display: "flex" }}
      onMouseEnter={(e) => (e.currentTarget.style.color = hoverColor)}
      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
    >
      {children}
    </a>
  );
}
