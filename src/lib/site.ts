const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

export const siteUrl = new URL(configuredSiteUrl || "https://sistemgedung.com");
export const siteOrigin = siteUrl.origin;
export const siteName = "SistemGedung";
export const siteTitle = "SistemGedung — Aplikasi Manajemen Gedung";

export const siteDescription =
  "SistemGedung membantu pengelola apartemen dan gedung perkantoran mengelola tenant, keluhan, aset, dan pemeliharaan melalui aplikasi building management yang dapat disesuaikan.";

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
