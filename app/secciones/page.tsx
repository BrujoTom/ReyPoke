import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { menuGroups } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Secciones | Colegio Amalia Errázuriz",
  description: "Mapa de secciones internas para editar diseño y navegación con contenido real referenciado."
};

export default function SeccionesPage() {
  return (
    <>
      <SiteHeader />
      <main className="section">
        <div className="container">
          <span className="tag">Mapa interno de navegación</span>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>Secciones del sitio</h1>
          <p style={{ color: "#475569", maxWidth: 740 }}>
            Navega por estas páginas internas del rediseño y ajustamos diseño/estructura sobre base real.
          </p>

          <div style={{ display: "grid", gap: "1rem", marginTop: "1.2rem" }}>
            {menuGroups.map((group) => (
              <section key={group.label} className="card" style={{ padding: "1rem" }}>
                <h2 style={{ marginTop: 0, color: "#0f2747" }}>{group.label}</h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "0.7rem" }}>
                  {group.items.map((item) => (
                    <a key={item.demoHref} href={item.demoHref} className="drawer-link">
                      {item.label}
                    </a>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
