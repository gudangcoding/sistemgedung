import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/eyebrow";
import { articles } from "@/content/articles";

export const metadata: Metadata = {
  title: "Artikel Manajemen Gedung",
  description: "Panduan evergreen tentang aplikasi building management, layanan tenant, preventive maintenance, dan pengelolaan aset.",
  alternates: { canonical: "/artikel" },
};

export default function ArticlesPage() {
  return <section className="inner-hero articles-page"><div className="container"><Eyebrow>WAWASAN & PANDUAN</Eyebrow><h1>Catatan untuk<br /><span>operasional yang lebih rapi.</span></h1><p className="inner-lead">Panduan evergreen tentang pengelolaan gedung, tenant, aset, dan pemeliharaan.</p><div className="article-grid">{articles.map((article, index) => <Link className="article-card" href={`/artikel/${article.slug}`} key={article.slug}><div className={`article-cover cover-${index + 1}`}><span>FIELD NOTES</span><b>0{index + 1}</b><i>SG.</i></div><div className="article-card-copy"><span className="article-tag">{article.category}</span><h2>{article.title}</h2><p>{article.summary}</p><small>{article.readTime} baca <span>↗</span></small></div></Link>)}</div></div></section>;
}
