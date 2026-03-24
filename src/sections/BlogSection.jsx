import { useState, useCallback } from "react";
import {
  BLOG_TAGS, TAG_COLORS, FALLBACK_POSTS,
  POSTS_PER_PAGE, CLAUDE_MODEL, CLAUDE_API_URL, BLOG_PROMPT,
} from "../constants/data";
import { IcoBlog, IcoSearch, IcoSend, IcoClock, IcoTag, IcoExternal } from "../components/icons/Icons";

// ── API helper ────────────────────────────────────────────────────────────────
async function fetchAIPosts() {
  const res = await fetch(CLAUDE_API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: CLAUDE_MODEL,
      max_tokens: 1000,
      messages: [{ role: "user", content: BLOG_PROMPT }],
    }),
  });
  const data = await res.json();
  const raw   = data.content?.map((b) => b.text || "").join("") ?? "";
  const clean = raw.replace(/```json|```/g, "").trim();
  return JSON.parse(clean);
}

// ── Main component ────────────────────────────────────────────────────────────
export default function BlogSection() {
  const [posts,     setPosts]     = useState([]);
  const [loading,   setLoading]   = useState(false);
  const [generated, setGenerated] = useState(false);
  const [search,    setSearch]    = useState("");
  const [activeTag, setActiveTag] = useState("todos");
  const [page,      setPage]      = useState(1);

  const generatePosts = useCallback(async () => {
    setLoading(true);
    try {
      const result = await fetchAIPosts();
      setPosts(Array.isArray(result) ? result : FALLBACK_POSTS);
    } catch {
      setPosts(FALLBACK_POSTS);
    } finally {
      setLoading(false);
      setGenerated(true);
    }
  }, []);

  // Derived state
  const filtered = posts.filter((p) => {
    const tagMatch    = activeTag === "todos" || p.tag === activeTag;
    const searchMatch = !search ||
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(search.toLowerCase());
    return tagMatch && searchMatch;
  });

  const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE);
  const paginated  = filtered.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);

  const handleTagChange = (tag) => { setActiveTag(tag); setPage(1); };
  const handleSearch    = (val) => { setSearch(val);    setPage(1); };

  return (
    <section id="blog">
      <div className="container">
        <div className="section-label">// blog</div>
        <h2 className="section-title">
          Últimas <span className="neon-text">publicações</span>
        </h2>

        {/* ── Empty state ── */}
        {!generated && !loading && (
          <EmptyState onGenerate={generatePosts} />
        )}

        {/* ── Blog content ── */}
        {generated && (
          <>
            <SearchBar
              value={search}
              onChange={handleSearch}
              onRegenerate={generatePosts}
              loading={loading}
            />

            <TagFilter tags={BLOG_TAGS} active={activeTag} onChange={handleTagChange} />

            {loading
              ? <LoadingSpinner />
              : (
                <>
                  <div className="blog-grid">
                    {paginated.map((post) => (
                      <PostCard key={post.id} post={post} />
                    ))}
                  </div>

                  {totalPages > 1 && (
                    <Pagination total={totalPages} current={page} onChange={setPage} />
                  )}
                </>
              )
            }

            <Newsletter />
          </>
        )}
      </div>
    </section>
  );
}

// ── Sub-components ────────────────────────────────────────────────────────────

function EmptyState({ onGenerate }) {
  return (
    <div style={{ textAlign: "center", padding: "60px 0" }}>
      <p style={{ color: "var(--muted)", fontSize: 14, marginBottom: 24 }}>
        Posts gerados com IA — clique para carregar!
      </p>
      <button onClick={onGenerate} className="btn-primary">
        <IcoBlog />
        <span>Gerar Posts com IA</span>
      </button>
    </div>
  );
}

function SearchBar({ value, onChange, onRegenerate, loading }) {
  return (
    <div style={{ display: "flex", gap: 12, marginBottom: 24, flexWrap: "wrap", alignItems: "center" }}>
      <div style={{ position: "relative", flex: 1, minWidth: 200 }}>
        <span style={{
          position: "absolute", left: 13, top: "50%", transform: "translateY(-50%)",
          color: "var(--muted)", display: "flex", pointerEvents: "none",
        }}>
          <IcoSearch />
        </span>
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Pesquisar posts..."
          style={{
            width: "100%", padding: "12px 16px 12px 40px",
            background: "var(--surface)", border: "1px solid var(--border)",
            color: "var(--text)", fontFamily: "var(--font-mono)", fontSize: 13, outline: "none",
          }}
          onFocus={(e) => (e.currentTarget.style.borderColor = "var(--neon)")}
          onBlur={(e)  => (e.currentTarget.style.borderColor = "var(--border)")}
        />
      </div>

      <button
        onClick={onRegenerate}
        style={{
          background: "none", border: "1px solid var(--border)",
          color: "var(--muted)", padding: "12px 16px",
          cursor: "pointer", fontFamily: "var(--font-mono)", fontSize: 12, transition: "all var(--transition)",
        }}
        onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--neon3)"; e.currentTarget.style.color = "var(--neon3)"; }}
        onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--muted)"; }}
      >
        {loading ? "⟳" : "↺"} Regerar
      </button>
    </div>
  );
}

function TagFilter({ tags, active, onChange }) {
  return (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 32 }}>
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => onChange(tag)}
          style={{
            padding: "6px 14px",
            background: active === tag ? "var(--neon)" : "transparent",
            border: `1px solid ${active === tag ? "var(--neon)" : "var(--border)"}`,
            color: active === tag ? "var(--bg)" : "var(--muted)",
            fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: 1,
            textTransform: "uppercase", cursor: "pointer", transition: "all var(--transition)",
          }}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}

function LoadingSpinner() {
  return (
    <div style={{ textAlign: "center", padding: "60px 0" }}>
      <div style={{ fontSize: 32, animation: "spin 1s linear infinite", display: "inline-block", color: "var(--neon)" }}>
        ⟳
      </div>
      <p style={{ marginTop: 12, color: "var(--muted)", fontSize: 13 }}>Gerando posts com IA…</p>
    </div>
  );
}

function PostCard({ post }) {
  const color = TAG_COLORS[post.tag] || "var(--neon)";

  const handleEnter = (e) => {
    e.currentTarget.style.borderColor = color;
    e.currentTarget.style.transform   = "translateY(-4px)";
    e.currentTarget.style.boxShadow   = `0 8px 32px ${color}18`;
  };
  const handleLeave = (e) => {
    e.currentTarget.style.borderColor = "var(--border)";
    e.currentTarget.style.transform   = "translateY(0)";
    e.currentTarget.style.boxShadow   = "none";
  };

  return (
    <article
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      style={{
        background: "var(--surface)", border: "1px solid var(--border)",
        padding: 26, cursor: "pointer", transition: "all var(--transition)",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
        <span style={{
          display: "flex", alignItems: "center", gap: 4,
          padding: "3px 10px", border: `1px solid ${color}`, color,
          fontSize: 10, letterSpacing: 1, textTransform: "uppercase",
        }}>
          <IcoTag /> {post.tag}
        </span>
        <span style={{ display: "flex", alignItems: "center", gap: 4, color: "var(--muted)", fontSize: 10 }}>
          <IcoClock /> {post.readTime}
        </span>
      </div>

      <h3 style={{
        fontFamily: "var(--font-display)", fontWeight: 700,
        fontSize: 17, marginBottom: 10, lineHeight: 1.35, color: "var(--text)",
      }}>
        {post.title}
      </h3>

      <p style={{ color: "var(--muted)", fontSize: 13, lineHeight: 1.75, marginBottom: 18 }}>
        {post.excerpt}
      </p>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ color: "var(--muted)", fontSize: 11 }}>{post.date}</span>
        <span style={{ color, fontSize: 12, display: "flex", alignItems: "center", gap: 4 }}>
          Ler mais <IcoExternal />
        </span>
      </div>
    </article>
  );
}

function Pagination({ total, current, onChange }) {
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 36 }}>
      {Array.from({ length: total }, (_, i) => (
        <button
          key={i}
          onClick={() => onChange(i + 1)}
          style={{
            width: 36, height: 36,
            background: current === i + 1 ? "var(--neon)" : "transparent",
            border: `1px solid ${current === i + 1 ? "var(--neon)" : "var(--border)"}`,
            color: current === i + 1 ? "var(--bg)" : "var(--muted)",
            fontFamily: "var(--font-mono)", fontSize: 13,
            cursor: "pointer", transition: "all var(--transition)",
          }}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
}

function Newsletter() {
  const [email,  setEmail]  = useState("");
  const [status, setStatus] = useState("idle");

  const subscribe = async () => {
    if (!email) return;
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1000));
    setStatus("done");
    setEmail("");
    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <div
      className="newsletter-row"
      style={{
        marginTop: 64, padding: "40px 48px",
        background: "var(--surface)",
        border: "1px solid var(--border)", borderLeft: "3px solid var(--neon)",
        display: "flex", gap: 32, alignItems: "center", flexWrap: "wrap",
      }}
    >
      <div style={{ flex: 1, minWidth: 200 }}>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: 3, color: "var(--neon)", marginBottom: 8, textTransform: "uppercase" }}>
          // Newsletter
        </div>
        <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 22, marginBottom: 8 }}>
          Fique por dentro
        </h3>
        <p style={{ color: "var(--muted)", fontSize: 13, lineHeight: 1.7 }}>
          Novos posts sobre desenvolvimento, dicas de carreira e experiências direto no seu e-mail.
        </p>
      </div>

      <div style={{ display: "flex", gap: 0, flex: 1, minWidth: 260 }}>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="seu@email.com"
          style={{
            flex: 1, padding: "14px 16px",
            background: "var(--bg)",
            border: "1px solid var(--border)", borderRight: "none",
            color: "var(--text)", fontFamily: "var(--font-mono)", fontSize: 13, outline: "none",
          }}
        />
        <button onClick={subscribe} className="btn-primary" style={{ whiteSpace: "nowrap" }}>
          <IcoSend />
          <span>{status === "done" ? "✓ Inscrito!" : "Inscrever"}</span>
        </button>
      </div>
    </div>
  );
}
