import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Eyebrow } from "@/components/eyebrow";
import berita from "@/content/berita.json";
import { beritaImage, beritaOgImage } from "@/lib/media";
import { articleJsonLd, breadcrumbJsonLd, serializeJsonLd } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return berita.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = berita.find((article) => article.slug === slug);
  if (!item) return {};
  const image = beritaOgImage(item.slug);
  return {
    title: item.title,
    description: item.excerpt,
    keywords: item.keywords,
    alternates: { canonical: `/berita/${item.slug}` },
    openGraph: {
      title: item.title,
      description: item.excerpt,
      type: "article",
      url: `/berita/${item.slug}`,
      images: [{ url: image, width: 1200, height: 630, alt: item.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: item.title,
      description: item.excerpt,
      images: [image],
    },
  };
}

export default async function BeritaDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = berita.find((article) => article.slug === slug);
  if (!item) notFound();

  const related = item.readAlso
    .map((relatedSlug) => berita.find((article) => article.slug === relatedSlug))
    .filter((article) => article !== undefined);

  return (
    <article className="article-detail">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(
            articleJsonLd({
              title: item.title,
              description: item.excerpt,
              path: `/berita/${item.slug}`,
              imagePath: beritaOgImage(item.slug),
              section: item.category,
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
              { name: "Berita", path: "/berita" },
              { name: item.title, path: `/berita/${item.slug}` },
            ]),
          ),
        }}
      />
      <div className="container">
        <div className="article-breadcrumb"><Link href="/">Beranda</Link><span>/</span><Link href="/berita">Berita</Link><span>/</span><span>{item.category}</span></div>
        <div className="article-detail-heading">
          <Eyebrow>{item.category}</Eyebrow>
          <h1>{item.title}</h1>
          <p>{item.excerpt}</p>
          <span className="article-reading">{item.readTime} baca · Panduan evergreen</span>
        </div>
        <figure className="article-hero-media">
          <Image
            src={beritaImage(item.slug)}
            alt={`Ilustrasi ${item.category}: ${item.title}`}
            width={1200}
            height={630}
            sizes="(max-width: 1180px) 100vw, 1180px"
            preload
          />
        </figure>
        <div className="article-layout">
          <aside><span>DALAM BERITA INI</span>{item.sections.map((section, index) => <a href={`#bagian-${index + 1}`} key={section.heading}>{section.heading}</a>)}</aside>
          <div className="article-body">
            {item.sections.map((section, index) => (
              <section id={`bagian-${index + 1}`} key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
              </section>
            ))}
            <div className="article-note">Artikel ini adalah panduan evergreen, bukan laporan peristiwa terkini. Informasi bersifat umum; validasi kebutuhan, kebijakan pengelola, dan ketentuan yang berlaku sebelum mengambil keputusan.</div>
            <Link className="text-link" href="/layanan/software">Pelajari layanan SistemGedung <span>→</span></Link>
          </div>
        </div>
        {related.length > 0 && (
          <section className="read-also">
            <div className="section-heading"><div><Eyebrow>BACA JUGA</Eyebrow><h2>Topik terkait.</h2></div><Link className="text-link" href="/berita">Semua berita <span>→</span></Link></div>
            <div className="read-also-grid">
              {related.map((article) => <Link className="read-also-card" href={`/berita/${article.slug}`} key={article.slug}><span>{article.category}</span><h3>{article.title}</h3><p>{article.excerpt}</p><b>Baca berita <span>↗</span></b></Link>)}
            </div>
          </section>
        )}
      </div>
    </article>
  );
}
