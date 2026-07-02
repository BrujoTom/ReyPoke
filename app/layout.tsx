import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import { Navbar } from "@/components/shared/Navbar";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Rey Poke — Poke Bowls Premium a Domicilio",
  description:
    "Poke bowls frescos hechos al momento. Pescado cortado a mano, entrega en menos de 30 minutos. Pide online en Santiago.",
  keywords: [
    "poke bowl",
    "delivery",
    "comida saludable",
    "santiago",
    "rey poke",
    "pescado fresco",
  ],
  authors: [{ name: "Rey Poke" }],
  openGraph: {
    title: "Rey Poke — Frescura real. Entregada en minutos.",
    description:
      "Poke bowls premium a domicilio. Ingredientes frescos, entrega express.",
    url: "https://reypoke.cl",
    siteName: "Rey Poke",
    locale: "es_CL",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Rey Poke — Poke bowl fresco",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rey Poke — Poke Bowls Premium a Domicilio",
    description:
      "Frescura real. Entregada en minutos. Pide tu bowl ahora.",
    images: [
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1200&q=80",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${manrope.variable}`}>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
