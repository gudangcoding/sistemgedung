const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

export const siteUrl = new URL(configuredSiteUrl || "https://sistemgedung.com");
export const siteOrigin = siteUrl.origin;

export const siteDescription =
  "SistemGedung membantu pengelola apartemen dan gedung perkantoran mengelola tenant, keluhan, aset, dan pemeliharaan melalui aplikasi building management yang dapat disesuaikan.";

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteOrigin}/#organization`,
  name: "SistemGedung",
  url: siteOrigin,
  description: siteDescription,
  logo: `${siteOrigin}/logo.svg`,
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteOrigin}/#website`,
  name: "SistemGedung",
  url: siteOrigin,
  inLanguage: "id-ID",
  publisher: { "@id": `${siteOrigin}/#organization` },
};

export function serializeJsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}
