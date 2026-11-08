const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

export const siteUrl = new URL(configuredSiteUrl || "https://www.sistemgedung.com");
if (siteUrl.hostname === "sistemgedung.com") siteUrl.hostname = "www.sistemgedung.com";
export const siteOrigin = siteUrl.origin;
export const siteName = "SistemGedung";
export const siteTitle = "Software Building Management Indonesia | SistemGedung";
export const homeUrl = `${siteOrigin}/`;
export const demoAppUrl =
  process.env.NEXT_PUBLIC_DEMO_APP_URL?.trim() || "https://bms.gudangcoding.my.id/admin/login";

export const playStoreLinks = {
  support: "https://play.google.com/store/apps/details?id=com.apsyst.cra",
  tenant: "https://play.google.com/store/apps/details?id=com.apsyst.tenant",
} as const;

export const siteDescription =
  "Aplikasi building management untuk apartemen dan gedung. Kelola tenant, IPL, keluhan, aset, dan maintenance dalam satu sistem. Jadwalkan demo gratis.";

export const contentPublishedAt = "2026-01-10T08:00:00+07:00";
export const contentUpdatedAt = "2026-10-01T08:00:00+07:00";

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteOrigin}/#organization`,
  name: siteName,
  url: siteOrigin,
  description: siteDescription,
  logo: {
    "@type": "ImageObject",
    url: `${siteOrigin}/images/brand/logo-512.png`,
    width: 512,
    height: 512,
  },
  image: `${siteOrigin}/images/brand/logo-512.png`,
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteOrigin}/#website`,
  name: siteName,
  url: siteOrigin,
  inLanguage: "id-ID",
  publisher: { "@id": `${siteOrigin}/#organization` },
};

export const softwareApplicationJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": `${siteOrigin}/#software`,
  name: `${siteName} — Software Building Management`,
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "Property Management Software",
  operatingSystem: "Web, Android",
  url: siteOrigin,
  description: siteDescription,
  inLanguage: "id-ID",
  image: `${siteOrigin}/images/brand/logo-512.png`,
  screenshot: [`${siteOrigin}/images/apps/support-maintenance.webp`, `${siteOrigin}/images/apps/tenant.webp`],
  featureList: [
    "Manajemen tenant dan unit",
    "Tagihan IPL dan pembayaran",
    "Keluhan dan work order",
    "Aset dan preventive maintenance",
    "Portal tenant dan teknisi",
    "Laporan operasional gedung",
  ],
  publisher: { "@id": `${siteOrigin}/#organization` },
  offers: {
    "@type": "Offer",
    url: `${siteOrigin}/harga`,
    price: "2000000",
    priceCurrency: "IDR",
    availability: "https://schema.org/InStock",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: "2000000",
      priceCurrency: "IDR",
      unitText: "MONTH",
    },
  },
};

export type ArticleJsonLdInput = {
  title: string;
  description: string;
  path: string;
  imagePath: string;
  section: string;
};

export function articleJsonLd({ title, description, path, imagePath, section }: ArticleJsonLdInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${siteOrigin}${path}/#article`,
    headline: title,
    description,
    image: [`${siteOrigin}${imagePath}`],
    datePublished: contentPublishedAt,
    dateModified: contentUpdatedAt,
    inLanguage: "id-ID",
    articleSection: section,
    mainEntityOfPage: { "@type": "WebPage", "@id": `${siteOrigin}${path}` },
    author: { "@type": "Organization", name: siteName, url: siteOrigin },
    publisher: { "@id": `${siteOrigin}/#organization` },
    isPartOf: { "@id": `${siteOrigin}/#website` },
  };
}

export function faqJsonLd(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteOrigin}${item.path}`,
    })),
  };
}

export function serializeJsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}
