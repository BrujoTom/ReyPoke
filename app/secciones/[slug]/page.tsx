import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { sectionPages } from "@/lib/site-content";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = sectionPages[slug as keyof typeof sectionPages];
  if (!page) return {};

  return {
    title: `${page.title} | Colegio Amalia Errázuriz`,
    description: `Sección ${page.title} del rediseño navegable con referencia al contenido oficial.`
  };
}

export default async function SeccionDetallePage({ params }: Props) {
  const { slug } = await params;
  const page = sectionPages[slug as keyof typeof sectionPages];

  if (!page) {
    notFound();
  }

  return (
    <>
      <SiteHeader />
      <main className="section">
        <div className="container">
          <span className="tag">Sección interna del rediseño</span>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#0f2747" }}>{page.title}</h1>

          <article className="card" style={{ padding: "1.1rem", display: "grid", gap: "0.8rem" }}>
            {page.content.map((paragraph) => (
              <p key={paragraph} style={{ margin: 0, color: "#334155", lineHeight: 1.6 }}>
                {paragraph}
              </p>
            ))}
          </article>

          <div style={{ marginTop: "1rem", display: "flex", gap: "0.7rem", flexWrap: "wrap" }}>
            <Link href="/secciones" className="btn-secondary">
              Volver a secciones
            </Link>
            <a href={page.officialHref} target="_blank" rel="noreferrer" className="btn-primary">
              Ver página oficial actual
            </a>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
