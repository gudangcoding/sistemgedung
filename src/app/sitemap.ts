import type { MetadataRoute } from "next";
import { articles } from "@/content/articles";
import berita from "@/content/berita.json";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "",
    "/layanan/software",
    "/layanan/operasional",
    "/harga",
    "/solusi",
    "/solusi/apartemen",
    "/solusi/perkantoran",
    "/artikel",
    "/berita",
  ];
  return [
    ...pages.map((path) => ({ url: new URL(path, siteUrl).toString(), changeFrequency: "monthly" as const })),
    ...articles.map((article) => ({
      url: new URL(`/artikel/${article.slug}`, siteUrl).toString(),
      changeFrequency: "yearly" as const,
    })),
    ...berita.map((article) => ({
      url: new URL(`/berita/${article.slug}`, siteUrl).toString(),
      changeFrequency: "yearly" as const,
    })),
  ];
}
