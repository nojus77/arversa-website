import type { Metadata } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingCTA } from "@/components/layout/FloatingCTA";

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin", "latin-ext"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Arversa — Statybos ir gerbūvio darbai | Lentvaris",
    template: "%s | Arversa",
  },
  description:
    "UAB Arversa — trinkelių klojimas, technikos nuoma, žemės kasimo darbai, atliekų išvežimas ir griovimo darbai. 18+ metų patirties. Dirbame visoje Lietuvoje.",
  keywords: [
    "trinkelių klojimas",
    "technikos nuoma",
    "žemės kasimo darbai",
    "atliekų išvežimas",
    "griovimo darbai",
    "Lentvaris",
    "Vilnius",
    "Trakai",
  ],
  openGraph: {
    type: "website",
    locale: "lt_LT",
    siteName: "Arversa",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="lt" className={`${dmSerif.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
