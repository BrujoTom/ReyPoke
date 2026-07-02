import Image from "next/image";
import Link from "next/link";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";
import { Button } from "@/components/ui/button";

const LEGAL_LINKS = [
  { label: "Términos y Condiciones", href: "#" },
  { label: "Política de Privacidad", href: "#" },
  { label: "Cookies", href: "#" },
];

const SOCIAL_LINKS = [
  { label: "Instagram", href: "#", icon: Instagram },
];

export function Footer() {
  return (
    <footer className="relative bg-teal-dark text-white">
      <div aria-hidden className="wave-pattern h-20 w-full" />

      <div className="container-custom pb-12 pt-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Image
              src="/images/logo.svg"
              alt={SITE_NAME}
              width={120}
              height={120}
              className="h-24 w-24"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
              Poke bowls premium a domicilio. Frescura del Pacífico, entregada en
              minutos.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-caption uppercase tracking-widest text-white/50">
              Navegación
            </h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/80 transition-colors hover:text-white focus-ring rounded-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-caption uppercase tracking-widest text-white/50">
              Legal
            </h3>
            <ul className="space-y-2">
              {LEGAL_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/80 transition-colors hover:text-white focus-ring rounded-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-caption uppercase tracking-widest text-white/50">
              Contacto
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-white/80">
                <MapPin className="h-4 w-4 shrink-0" strokeWidth={1.5} />
                Providencia, Santiago
              </li>
              <li className="flex items-center gap-2 text-sm text-white/80">
                <Phone className="h-4 w-4 shrink-0" strokeWidth={1.5} />
                +56 9 1234 5678
              </li>
              <li className="flex items-center gap-2 text-sm text-white/80">
                <Mail className="h-4 w-4 shrink-0" strokeWidth={1.5} />
                hola@reypoke.cl
              </li>
            </ul>

            <div className="mt-6 flex gap-3">
              {SOCIAL_LINKS.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors hover:bg-white/10 hover:text-white focus-ring"
                >
                  <social.icon className="h-4 w-4" strokeWidth={1.5} />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <form className="flex max-w-sm flex-1 gap-2">
              <label htmlFor="newsletter-email" className="sr-only">
                Email para newsletter
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Tu email"
                className="h-11 flex-1 rounded-pill border border-white/20 bg-white/10 px-4 text-sm text-white placeholder:text-white/40 focus-ring"
              />
              <Button
                type="submit"
                variant="default"
                size="sm"
                className="bg-coral text-foreground hover:bg-coral-dark"
              >
                Suscribir
              </Button>
            </form>
            <p className="text-xs text-white/40">
              © {new Date().getFullYear()} {SITE_NAME}. Diseñado con obsesión
              por el detalle.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
