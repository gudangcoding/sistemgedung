import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/eyebrow";
import berita from "@/content/berita.json";

export const metadata: Metadata = {
  title: "Berita & Panduan Building Management",
  description: "Berita dan panduan evergreen tentang aplikasi building management, pengelolaan apartemen, tagihan IPL, dan maintenance gedung.",
  alternates: { canonical: "/berita" },
};

export default function BeritaPage() {
  return (
    <section className="inner-hero articles-page">
      <div className="container">
        <Eyebrow>BERITA & PANDUAN</Eyebrow>
        <h1>Wawasan untuk<br /><span>pengelolaan gedung.</span></h1>
        <p className="inner-lead">Panduan evergreen untuk membantu pengelola menilai sistem, merencanakan biaya, dan merapikan proses apartemen maupun gedung komersial.</p>
        <div className="article-grid">
          {berita.map((item, index) => (
            <Link className="article-card" href={`/berita/${item.slug}`} key={item.slug}>
              <div className={`article-cover cover-${(index % 4) + 1}`}><span>{item.category}</span><b>{String(index + 1).padStart(2, "0")}</b><i>SG.</i></div>
              <div className="article-card-copy">
                <span className="article-tag">{item.category}</span>
                <h2>{item.title}</h2>
                <p>{item.excerpt}</p>
                <small><span>{item.readTime} baca · Panduan evergreen</span><span aria-hidden="true">↗</span></small>
              </div>
            </Link>
          ))}
        </div>
        <p className="news-editorial-note">Konten ini merupakan panduan umum, bukan berita terkini atau nasihat hukum/teknis. Sesuaikan keputusan dengan kondisi properti dan ketentuan yang berlaku.</p>
      </div>
    </section>
  );
}
