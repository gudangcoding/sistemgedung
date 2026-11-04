import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "@/components/eyebrow";
import { articles } from "@/content/articles";
import { artikelImage } from "@/lib/media";

export const metadata: Metadata = {
  title: "Artikel Manajemen Gedung",
  description: "Panduan memilih jasa dan aplikasi building management, pengelolaan apartemen, IPL, meter utilitas, ticketing tenant, dan maintenance gedung.",
  alternates: { canonical: "/artikel" },
  openGraph: {
    title: "Artikel Manajemen Gedung",
    description: "Panduan memilih jasa dan aplikasi building management, pengelolaan apartemen, IPL, meter utilitas, ticketing tenant, dan maintenance gedung.",
    url: "/artikel",
    type: "website",
  },
};

export default function ArticlesPage() {
  return (
    <section className="inner-hero articles-page">
      <div className="container">
        <Eyebrow>WAWASAN & PANDUAN</Eyebrow>
        <h1>Catatan untuk<br /><span>operasional yang lebih rapi.</span></h1>
        <p className="inner-lead">Panduan evergreen tentang pengelolaan gedung, tenant, aset, dan pemeliharaan.</p>
        <div className="article-grid">
          {articles.map((article, index) => (
            <Link className="article-card" href={`/artikel/${article.slug}`} key={article.slug}>
              <div className="article-cover">
                <Image
                  src={artikelImage(article.slug)}
                  alt={`Ilustrasi ${article.category}: ${article.title}`}
                  fill
                  sizes="(max-width: 760px) 100vw, (max-width: 980px) 50vw, 33vw"
                />
                <span>{article.category}</span>
                <b>{String(index + 1).padStart(2, "0")}</b>
              </div>
              <div className="article-card-copy">
                <span className="article-tag">{article.category}</span>
                <h2>{article.title}</h2>
                <p>{article.summary}</p>
                <small>{article.readTime} baca <span>↗</span></small>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
