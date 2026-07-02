"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn, scrollToSection } from "@/lib/utils";
import { NAV_LINKS, ORDER_URL } from "@/lib/constants";
import { CTAButton } from "@/components/shared/CTAButton";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Focus trap para menú mobile
  useEffect(() => {
    if (!mobileOpen || !menuRef.current) return;

    const focusable = menuRef.current.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        toggleRef.current?.focus();
      }
      if (e.key === "Tab" && focusable.length > 0) {
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    first?.focus();
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [mobileOpen]);

  const handleNavClick = useCallback(
    (href: string) => {
      const id = href.replace("#", "");
      scrollToSection(id);
      setMobileOpen(false);
    },
    []
  );

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-white/20 bg-white/70 py-3 shadow-glass backdrop-blur-md"
            : "bg-transparent py-5"
        )}
      >
        <div className="container-custom flex items-center justify-between gap-4">
          <Link href="/" className="relative z-10 shrink-0 focus-ring rounded-sm">
            <Image
              src="/images/logo-compact.svg"
              alt="Rey Poke"
              width={80}
              height={40}
              priority
              className="h-8 w-auto md:h-10"
            />
          </Link>

          <nav
            aria-label="Navegación principal"
            className="hidden items-center gap-1 lg:flex"
          >
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="rounded-pill px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-teal-soft/40 hover:text-teal-dark focus-ring"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="hidden lg:block">
            <CTAButton href={ORDER_URL} variant="dark" size="sm">
              Pedir Ahora
            </CTAButton>
          </div>

          <button
            ref={toggleRef}
            type="button"
            className="relative z-10 flex h-11 w-11 items-center justify-center rounded-pill border border-border-subtle/60 bg-surface/80 backdrop-blur-sm focus-ring lg:hidden"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {mobileOpen ? (
              <X className="h-5 w-5" strokeWidth={1.5} />
            ) : (
              <Menu className="h-5 w-5" strokeWidth={1.5} />
            )}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            ref={menuRef}
            className="fixed inset-0 z-40 flex flex-col bg-teal-dark/95 backdrop-blur-lg lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-1 flex-col justify-center px-container">
              <nav aria-label="Menú mobile" className="flex flex-col gap-2">
                {NAV_LINKS.map((link, i) => (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                    onClick={() => handleNavClick(link.href)}
                    className="rounded-lg px-4 py-4 text-left font-display text-2xl font-semibold text-white transition-colors hover:bg-white/10 focus-ring"
                  >
                    {link.label}
                  </motion.button>
                ))}
              </nav>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-10"
              >
                <CTAButton
                  href={ORDER_URL}
                  variant="primary"
                  size="lg"
                  className="w-full"
                >
                  Pedir Ahora
                </CTAButton>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
