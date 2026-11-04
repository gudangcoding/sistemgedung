import type { MetadataRoute } from "next";
import { articles } from "@/content/articles";
import berita from "@/content/berita.json";
import { artikelOgImage, beritaOgImage } from "@/lib/media";
import { contentUpdatedAt, siteUrl } from "@/lib/site";

const staticPages: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]; lastModified?: string }[] = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/layanan/software", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-11-04T08:00:00+07:00" },
  { path: "/layanan/operasional", priority: 0.8, changeFrequency: "monthly" },
  { path: "/sewa-aplikasi-manajemen-gedung", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-11-04T08:00:00+07:00" },
  { path: "/fitur/tagihan-ipl-apartemen", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-11-04T08:00:00+07:00" },
  { path: "/fitur/pencatatan-meter-gedung", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-11-04T08:00:00+07:00" },
  { path: "/fitur/keluhan-penghuni-apartemen", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-11-04T08:00:00+07:00" },
  { path: "/harga", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-11-04T08:00:00+07:00" },
  { path: "/solusi", priority: 0.8, changeFrequency: "monthly" },
  { path: "/solusi/apartemen", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-11-04T08:00:00+07:00" },
  { path: "/solusi/perkantoran", priority: 0.8, changeFrequency: "monthly" },
  { path: "/artikel", priority: 0.7, changeFrequency: "weekly" },
  { path: "/berita", priority: 0.8, changeFrequency: "weekly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticPages.map((page) => ({
      url: new URL(page.path, siteUrl).toString(),
      lastModified: page.lastModified ?? contentUpdatedAt,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
    ...articles.map((article) => ({
      url: new URL(`/artikel/${article.slug}`, siteUrl).toString(),
      lastModified: contentUpdatedAt,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      images: [new URL(artikelOgImage(article.slug), siteUrl).toString()],
    })),
    ...berita.map((article) => ({
      url: new URL(`/berita/${article.slug}`, siteUrl).toString(),
      lastModified: contentUpdatedAt,
      changeFrequency: "monthly" as const,
      priority: 0.7,
      images: [new URL(beritaOgImage(article.slug), siteUrl).toString()],
    })),
  ];
}
