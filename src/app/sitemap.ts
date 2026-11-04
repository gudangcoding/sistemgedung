import type { MetadataRoute } from "next";
import { articles } from "@/content/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const pages = [
    "",
    "/layanan/software",
    "/layanan/operasional",
    "/harga",
    "/solusi",
    "/solusi/apartemen",
    "/solusi/perkantoran",
    "/artikel",
    "/demo",
  ];
  return [
    ...pages.map((path) => ({ url: new URL(path, baseUrl).toString(), changeFrequency: "monthly" as const })),
    ...articles.map((article) => ({
      url: new URL(`/artikel/${article.slug}`, baseUrl).toString(),
      changeFrequency: "yearly" as const,
    })),
  ];
}
