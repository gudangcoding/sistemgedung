import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import {
  organizationJsonLd,
  serializeJsonLd,
  siteDescription,
  siteName,
  siteTitle,
  siteUrl,
  websiteJsonLd,
} from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: siteTitle,
    template: "%s | SistemGedung",
  },
  description: siteDescription,
  applicationName: siteName,
  authors: [{ name: siteName, url: siteUrl.origin }],
  creator: siteName,
  publisher: siteName,
  category: "Building management software",
  keywords: [
    "aplikasi building management",
    "aplikasi manajemen gedung",
    "software pengelola apartemen",
    "sistem manajemen apartemen",
    "aplikasi tenant gedung",
    "maintenance gedung",
    "sistemgedung",
  ],
  alternates: { canonical: "/" },
  manifest: "/manifest.webmanifest",
  verification: {
    google: "9YB0VXamqCEmqmiYU5w21ukFHhLTjuMKdy1TquybyBs",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName,
    title: siteTitle,
    description: siteDescription,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  formatDetection: { email: false, address: false, telephone: false },
  appleWebApp: {
    capable: true,
    title: siteName,
    statusBarStyle: "black-translucent",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#17382f",
  colorScheme: "light",
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
