import { useState } from "react";
import { PERSONAL } from "../constants/data";
import { IcoSend, IcoBlog, IcoPin, IcoMail, IcoLinkedin, IcoGithub } from "../components/icons/Icons";

// ── Contact info items config ─────────────────────────────────────────────────
const CONTACT_ITEMS = [
  { label: "Email",      key: "email",         href: (p) => `mailto:${p.email}`,   display: (p) => p.email         },
  { label: "LinkedIn",   key: "linkedin",       href: (p) => p.linkedin,            display: (p) => p.linkedinHandle },
  { label: "GitHub",     key: "github",         href: (p) => p.github,              display: (p) => p.githubHandle   },
  { label: "Localização",key: "location",       href: null,                         display: (p) => p.location        },
];

export default function ContactSection() {
  const [form,   setForm]   = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | done | error

  const updateField = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");
    // TODO: replace with real email service (e.g. EmailJS / Resend)
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("done");
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setStatus("idle"), 4000);
  };

  const scrollToBlog = () =>
    document.getElementById("blog")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="contato" style={{ background: "var(--surface)" }}>
      <div className="container">
        <div className="section-label">// contato</div>
        <h2 className="section-title">
          Vamos <span className="neon-text">conversar</span>?
        </h2>

        <div className="contact-grid">
          {/* ── Left: info + CTA ── */}
          <div>
            <p style={{ color: "var(--muted)", lineHeight: 1.9, fontSize: 14, marginBottom: 36 }}>
              Estou buscando minha primeira oportunidade como Desenvolvedor Júnior.
              Se você tem uma vaga ou quer trocar uma ideia sobre um projeto, me chame!
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {CONTACT_ITEMS.map((item) => (
                <ContactRow key={item.label} item={item} person={PERSONAL} />
              ))}
            </div>

            <div style={{ marginTop: 40 }}>
              <button onClick={scrollToBlog} className="btn-primary">
                <IcoBlog />
                <span>Ir para o Blog</span>
              </button>
            </div>
          </div>

          {/* ── Right: form ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <StyledInput
              placeholder="Seu nome"
              value={form.name}
              onChange={updateField("name")}
            />
            <StyledInput
              type="email"
              placeholder="Seu e-mail"
              value={form.email}
              onChange={updateField("email")}
            />
            <StyledTextarea
              placeholder="Sua mensagem..."
              rows={6}
              value={form.message}
              onChange={updateField("message")}
            />
            <button
              onClick={handleSubmit}
              disabled={status === "sending"}
              className="btn-primary"
              style={{ justifyContent: "center", opacity: status === "sending" ? 0.7 : 1 }}
            >
              <IcoSend />
              <span>{SEND_LABEL[status]}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Helpers ───────────────────────────────────────────────────────────────────
const SEND_LABEL = {
  idle:    "Enviar Mensagem",
  sending: "Enviando…",
  done:    "✓ Mensagem Enviada!",
  error:   "Erro — tente novamente",
};

function ContactRow({ item, person }) {
  const href = item.href ? item.href(person) : null;
  const text = item.display(person);

  return (
    <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
      <span style={{
        fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: 2,
        color: "var(--neon)", minWidth: 90, textTransform: "uppercase",
      }}>
        {item.label}
      </span>

      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          style={{ color: "var(--muted)", fontSize: 13, textDecoration: "none", transition: "color var(--transition)" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
        >
          {text}
        </a>
      ) : (
        <span style={{ color: "var(--muted)", fontSize: 13 }}>{text}</span>
      )}
    </div>
  );
}

const inputBase = {
  width: "100%",
  padding: "14px 16px",
  background: "var(--bg)",
  border: "1px solid var(--border)",
  color: "var(--text)",
  fontFamily: "var(--font-mono)",
  fontSize: 13,
  outline: "none",
  transition: "border-color var(--transition)",
};

function StyledInput({ ...props }) {
  return (
    <input
      {...props}
      style={inputBase}
      onFocus={(e) => (e.currentTarget.style.borderColor = "var(--neon)")}
      onBlur={(e)  => (e.currentTarget.style.borderColor = "var(--border)")}
    />
  );
}

function StyledTextarea({ ...props }) {
  return (
    <textarea
      {...props}
      style={{ ...inputBase, resize: "vertical" }}
      onFocus={(e) => (e.currentTarget.style.borderColor = "var(--neon)")}
      onBlur={(e)  => (e.currentTarget.style.borderColor = "var(--border)")}
    />
  );
}
