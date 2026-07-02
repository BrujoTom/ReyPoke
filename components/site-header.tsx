"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { menuGroups, quickLinks } from "@/lib/site-content";

const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/secciones", label: "Secciones" },
  { href: "/admision", label: "Admisión" },
  { href: "/noticias", label: "Noticias" }
];

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  const navId = useMemo(() => "primary-nav", []);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  return (
    <header className="site-header">
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          minHeight: "4.25rem"
        }}
      >
        <Link href="/" className="brand">
          Colegio Amalia Errázuriz
        </Link>

        <nav className="nav-desktop" aria-label="Navegación principal">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
          {menuGroups.map((group) => (
            <div key={group.label} className="nav-group">
              <button type="button" className="nav-link nav-group-trigger">
                {group.label}
              </button>
              <div className="nav-group-menu">
                {group.items.map((item) => (
                  <a key={item.demoHref} href={item.demoHref} className="drawer-link">
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
          <a className="btn-primary" href="https://www.colegioamaliaerrazuriz.cl/admision/" target="_blank" rel="noreferrer">
            Postula 2027
          </a>
        </nav>

        <button
          type="button"
          className="nav-toggle"
          aria-controls={navId}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setIsOpen((v) => !v)}
        >
          <span className="nav-toggle-icon" aria-hidden="true">
            <span />
            <span />
          </span>
        </button>
      </div>

      {isOpen ? (
        <>
          <div className="nav-backdrop" onClick={close} aria-hidden="true" />
          <aside className="nav-drawer" role="dialog" aria-modal="true" aria-label="Menú">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <p style={{ margin: 0, fontWeight: 800, color: "#0f2747" }}>Menú</p>
              <button type="button" className="nav-close" onClick={close} aria-label="Cerrar menú">
                Cerrar
              </button>
            </div>

            <div style={{ display: "grid", gap: "0.25rem", marginTop: "0.75rem", maxHeight: "68vh", overflowY: "auto" }}>
              {quickLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="drawer-link"
                  onClick={close}
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.label}
                </a>
              ))}
              <Link className="btn-primary" href="/secciones" onClick={close} style={{ marginTop: "0.5rem" }}>
                Volver a demo rediseño
              </Link>
            </div>
          </aside>
        </>
      ) : null}
    </header>
  );
}
