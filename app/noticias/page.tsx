import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { newsItems } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Noticias y Logros | Colegio Amalia Errázuriz",
  description: "Revisa las últimas noticias institucionales, logros académicos y actividades destacadas.",
  alternates: { canonical: "/noticias" },
  openGraph: {
    title: "Noticias y Logros | Colegio Amalia Errázuriz",
    description: "Actualidad y logros de la comunidad educativa.",
    url: "/noticias"
  }
};

export default function NoticiasPage() {
  return (
    <>
      <SiteHeader />
      <main className="section">
        <div className="container">
          <span className="tag">Noticias y logros · Contenido real</span>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>Actualidad institucional</h1>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1rem",
              marginTop: "1.4rem"
            }}
          >
            {newsItems.map((post) => (
              <article
                key={post.href}
                className="card"
                style={{
                  overflow: "hidden"
                }}
              >
                <img src={post.image} alt={post.title} style={{ width: "100%", height: 170, objectFit: "cover" }} />
                <div style={{ padding: "1rem 1.1rem 1.1rem" }}>
                  <p style={{ margin: 0, color: "#64748b", fontSize: "0.9rem" }}>{post.date}</p>
                  <h2 style={{ fontSize: "1.2rem", color: "#0f2747" }}>{post.title}</h2>
                  <p style={{ color: "#475569" }}>{post.excerpt}</p>
                  <a href={post.href} target="_blank" rel="noreferrer" className="btn-secondary">
                    Abrir noticia original
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
