import type { MetadataRoute } from "next";
import { articles } from "@/content/articles";
import berita from "@/content/berita.json";
import { contentUpdatedAt, siteUrl } from "@/lib/site";

const staticPages: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/layanan/software", priority: 0.9, changeFrequency: "monthly" },
  { path: "/layanan/operasional", priority: 0.8, changeFrequency: "monthly" },
  { path: "/harga", priority: 0.9, changeFrequency: "monthly" },
  { path: "/solusi", priority: 0.8, changeFrequency: "monthly" },
  { path: "/solusi/apartemen", priority: 0.8, changeFrequency: "monthly" },
  { path: "/solusi/perkantoran", priority: 0.8, changeFrequency: "monthly" },
  { path: "/artikel", priority: 0.7, changeFrequency: "weekly" },
  { path: "/berita", priority: 0.8, changeFrequency: "weekly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticPages.map((page) => ({
      url: new URL(page.path, siteUrl).toString(),
      lastModified: contentUpdatedAt,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
    ...articles.map((article) => ({
      url: new URL(`/artikel/${article.slug}`, siteUrl).toString(),
      lastModified: contentUpdatedAt,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...berita.map((article) => ({
      url: new URL(`/berita/${article.slug}`, siteUrl).toString(),
      lastModified: contentUpdatedAt,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
