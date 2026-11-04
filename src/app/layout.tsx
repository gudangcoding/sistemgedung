import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { organizationJsonLd, serializeJsonLd, siteDescription, siteUrl, websiteJsonLd } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "SistemGedung — Aplikasi Manajemen Gedung",
    template: "%s | SistemGedung",
  },
  description: siteDescription,
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "SistemGedung",
    title: "SistemGedung — Aplikasi Manajemen Gedung",
    description: siteDescription,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "SistemGedung — Aplikasi Manajemen Gedung",
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(organizationJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(websiteJsonLd) }} />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
