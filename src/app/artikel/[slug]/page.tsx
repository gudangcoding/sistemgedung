import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles } from "@/content/articles";
import { Eyebrow } from "@/components/eyebrow";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.summary,
    alternates: { canonical: `/artikel/${article.slug}` },
    openGraph: { title: article.title, description: article.summary, type: "article" },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) notFound();

  return <article className="article-detail"><div className="container"><div className="article-breadcrumb"><Link href="/">Beranda</Link><span>/</span><Link href="/artikel">Artikel</Link><span>/</span><span>Panduan</span></div><div className="article-detail-heading"><Eyebrow>{article.category}</Eyebrow><h1>{article.title}</h1><p>{article.summary}</p><span className="article-reading">{article.readTime} baca · Panduan evergreen</span></div><div className="article-layout"><aside><span>DALAM ARTIKEL INI</span>{article.sections.map((section, i) => <a href={`#bagian-${i + 1}`} key={section.heading}>{section.heading}</a>)}</aside><div className="article-body">{article.sections.map((section, i) => <section id={`bagian-${i + 1}`} key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}</section>)}<div className="article-note">Informasi ini bersifat panduan umum. Sesuaikan keputusan dengan kondisi gedung, panduan teknis, dan ketentuan yang berlaku.</div><Link className="text-link" href="/layanan/software">Pelajari layanan SistemGedung <span>→</span></Link></div></div></div></article>;
}
