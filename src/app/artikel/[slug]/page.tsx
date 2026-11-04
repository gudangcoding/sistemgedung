import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Eyebrow } from "@/components/eyebrow";
import { articles } from "@/content/articles";
import { artikelImage, artikelOgImage } from "@/lib/media";
import { articleJsonLd, breadcrumbJsonLd, contentPublishedAt, contentUpdatedAt, serializeJsonLd } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) return {};
  const image = artikelOgImage(article.slug);
  return {
    title: article.title,
    description: article.summary,
    keywords: article.keywords,
    alternates: { canonical: `/artikel/${article.slug}` },
    openGraph: {
      title: article.title,
      description: article.summary,
      type: "article",
      url: `/artikel/${article.slug}`,
      publishedTime: contentPublishedAt,
      modifiedTime: contentUpdatedAt,
      images: [{ url: image, width: 1200, height: 630, alt: article.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.summary,
      images: [image],
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) notFound();

  return (
    <article className="article-detail">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(
            articleJsonLd({
              title: article.title,
              description: article.summary,
              path: `/artikel/${article.slug}`,
              imagePath: artikelOgImage(article.slug),
              section: article.category,
            }),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(
            breadcrumbJsonLd([
              { name: "Beranda", path: "/" },
              { name: "Artikel", path: "/artikel" },
              { name: article.title, path: `/artikel/${article.slug}` },
            ]),
          ),
        }}
      />
      <div className="container">
        <div className="article-breadcrumb"><Link href="/">Beranda</Link><span>/</span><Link href="/artikel">Artikel</Link><span>/</span><span>{article.category}</span></div>
        <div className="article-detail-heading">
          <Eyebrow>{article.category}</Eyebrow>
          <h1>{article.title}</h1>
          <p>{article.summary}</p>
          <span className="article-reading">{article.readTime} baca · Panduan evergreen</span>
        </div>
        <figure className="article-hero-media">
          <Image
            src={artikelImage(article.slug)}
            alt={`Ilustrasi ${article.category}: ${article.title}`}
            width={1200}
            height={630}
            sizes="(max-width: 1180px) 100vw, 1180px"
            preload
          />
        </figure>
        <div className="article-layout">
          <aside><span>DALAM ARTIKEL INI</span>{article.sections.map((section, i) => <a href={`#bagian-${i + 1}`} key={section.heading}>{section.heading}</a>)}</aside>
          <div className="article-body">
            {article.sections.map((section, i) => (
              <section id={`bagian-${i + 1}`} key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
              </section>
            ))}
            <div className="article-note">Informasi ini bersifat panduan umum. Sesuaikan keputusan dengan kondisi gedung, panduan teknis, dan ketentuan yang berlaku.</div>
            <Link className="text-link" href="/layanan/software">Pelajari layanan SistemGedung <span>→</span></Link>
          </div>
        </div>
      </div>
    </article>
  );
}
