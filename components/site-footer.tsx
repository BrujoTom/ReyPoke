export function SiteFooter() {
  return (
    <footer style={{ borderTop: "1px solid #e2e8f0", background: "white", padding: "2rem 0" }}>
      <div className="container" style={{ display: "grid", gap: "0.6rem" }}>
        <p style={{ margin: 0, fontWeight: 700, color: "#0f2747" }}>Colegio Amalia Errázuriz</p>
        <p style={{ margin: 0, color: "#475569" }}>
          Ovalle, Chile · Formación integral con excelencia académica.
        </p>
        <small style={{ color: "#64748b" }}>© {new Date().getFullYear()} Todos los derechos reservados.</small>
      </div>
    </footer>
  );
}
