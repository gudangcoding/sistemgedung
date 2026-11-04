import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: {
    default: "SistemGedung — Aplikasi Manajemen Gedung",
    template: "%s | SistemGedung",
  },
  description:
    "SistemGedung membantu pengelola apartemen dan gedung perkantoran mengelola tenant, keluhan, aset, dan pemeliharaan melalui aplikasi building management yang dapat disesuaikan.",
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
