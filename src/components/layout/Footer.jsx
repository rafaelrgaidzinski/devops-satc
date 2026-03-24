import { PERSONAL } from "../../constants/data";
import { IcoGithub, IcoLinkedin } from "../icons/Icons";

export default function Footer() {
  return (
    <footer style={{
      borderTop: "1px solid var(--border)",
      padding: "28px 32px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: 12,
    }}>
      <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--muted)" }}>
        © 2025 {PERSONAL.name} — feito com{" "}
        <span style={{ color: "var(--neon2)" }}>♥</span> e React
      </span>

      <div style={{ display: "flex", gap: 16 }}>
        <SocialLink href={PERSONAL.github}   hoverColor="var(--text)"><IcoGithub /></SocialLink>
        <SocialLink href={PERSONAL.linkedin} hoverColor="#0077B5"><IcoLinkedin /></SocialLink>
      </div>
    </footer>
  );
}

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
