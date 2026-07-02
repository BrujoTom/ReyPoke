import type { Metadata } from "next";
import { AdmissionForm } from "@/components/admission-form";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { quickLinks } from "@/lib/site-content";

const steps = [
  "Completar formulario de interés familiar.",
  "Asistir a entrevista y jornada de bienvenida.",
  "Entrega de documentación y confirmación de matrícula."
];

export const metadata: Metadata = {
  title: "Admisión 2027 | Colegio Amalia Errázuriz",
  description:
    "Conoce el proceso de admisión del Colegio Amalia Errázuriz y envía tu solicitud de contacto.",
  alternates: { canonical: "/admision" },
  openGraph: {
    title: "Admisión 2027 | Colegio Amalia Errázuriz",
    description: "Proceso de postulación simple y transparente para nuevas familias.",
    url: "/admision"
  }
};

export default function AdmisionPage() {
  return (
    <>
      <SiteHeader />
      <main className="section">
        <div className="container">
          <span className="tag">Admisión 2027</span>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "0.8rem" }}>Proceso claro, cercano y transparente</h1>
          <p style={{ color: "#475569", maxWidth: 760 }}>
            Página de admisión del rediseño con navegación y recursos reales del sitio actual para que podamos
            ajustar contenido/jerarquía según tu criterio.
          </p>

          <section
            style={{
              marginTop: "2rem",
              padding: "1.2rem"
            }}
            className="card"
          >
            <h2 style={{ marginTop: 0 }}>Pasos de admisión</h2>
            <ol style={{ margin: 0, paddingLeft: "1.1rem", color: "#334155", display: "grid", gap: "0.6rem" }}>
              {steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </section>

          <section style={{ marginTop: "1.25rem" }}>
            <h2 style={{ margin: "0 0 0.8rem", color: "#0f2747" }}>Formulario de contacto</h2>
            <AdmissionForm />
          </section>

          <section style={{ marginTop: "1.25rem" }}>
            <h2 style={{ margin: "0 0 0.8rem", color: "#0f2747" }}>Enlaces oficiales útiles</h2>
            <div className="card" style={{ padding: "1rem", display: "grid", gap: "0.6rem" }}>
              {quickLinks
                .filter((item) =>
                  ["Admisión", "Documentos", "Listado de materiales año 2026", "Tour Virtual"].includes(item.label)
                )
                .map((item) => (
                  <a key={item.href} href={item.href} target="_blank" rel="noreferrer" className="drawer-link">
                    {item.label}
                  </a>
                ))}
            </div>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
