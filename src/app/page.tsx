import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "@/components/eyebrow";
import berita from "@/content/berita.json";
import { beritaImage } from "@/lib/media";

export const metadata: Metadata = {
  title: "Jasa Pembuatan Aplikasi Building Management",
  description: "SistemGedung membantu pengelola apartemen dan perkantoran mengelola tenant, IPL, keluhan, aset, dan maintenance dalam aplikasi building management.",
  alternates: { canonical: "/" },
};

const capabilities = [
  { n: "01", title: "Keluhan & work order", text: "Catat kebutuhan, tentukan prioritas, lalu ikuti progres penanganannya." },
  { n: "02", title: "Aset & pemeliharaan", text: "Susun informasi aset dan jadwal preventive maintenance dalam satu alur." },
  { n: "03", title: "Komunikasi penghuni", text: "Sampaikan pengumuman dan permintaan layanan dengan konteks yang jelas." },
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-orb orb-one" /><div className="hero-orb orb-two" />
        <div className="container hero-layout">
          <div className="hero-copy">
            <Eyebrow>BUILDING MANAGEMENT, MADE CLEAR</Eyebrow>
            <h1>Gedung terkelola.<br /><span>Hari lebih tertata.</span></h1>
            <p className="hero-lead">Sistem untuk membantu pengelola apartemen dan gedung perkantoran menghubungkan tenant, tim operasional, dan pemeliharaan.</p>
            <div className="hero-actions"><Link className="button button-lime" href="/demo">Diskusikan kebutuhan <span>↗</span></Link><Link className="text-link light-link" href="/layanan/software">Kenali layanan <span>→</span></Link></div>
            <div className="hero-proof"><span className="proof-icon">✳</span><span>Pengembangan sesuai kebutuhan<br /><b>software & dukungan operasional</b></span></div>
          </div>
          <div className="hero-visual" aria-label="Ilustrasi dashboard pengelolaan gedung">
            <div className="visual-glow" />
            <div className="dashboard-card">
              <div className="dash-top"><div><span className="small-label">OVERVIEW</span><h3>Ringkasan operasional</h3></div><span className="dash-menu">•••</span></div>
              <div className="dash-date">Data contoh · Tampilan konsep</div>
              <div className="metric-row"><div className="metric"><span>Tiket aktif</span><b>12</b><i>Perlu ditinjau</i></div><div className="metric"><span>Jadwal hari ini</span><b>08</b><i>Inspeksi & perawatan</i></div></div>
              <div className="chart-box"><div className="chart-heading"><b>Aktivitas pekerjaan</b><span>Ilustrasi</span></div><div className="chart"><span style={{ height: "36%" }} /><span style={{ height: "56%" }} /><span style={{ height: "43%" }} /><span style={{ height: "74%" }} /><span style={{ height: "54%" }} /><span style={{ height: "88%" }} /><span style={{ height: "67%" }} /><span style={{ height: "94%" }} /></div><div className="chart-labels"><span>Sen</span><span>Rab</span><span>Jum</span><span>Min</span></div></div>
              <div className="ticket-line"><span className="status-dot" /><span>Periksa pompa air</span><span className="ticket-status">Terjadwal</span></div>
            </div>
            <div className="visual-note"><span className="note-icon">↗</span><span><b>Alur lebih terlihat</b><small>Ilustrasi antarmuka</small></span></div>
            <div className="visual-side">BUILDING<br />OPERATIONS</div>
          </div>
        </div>
        <div className="container hero-bottom"><span>DIRANCANG UNTUK OPERASIONAL GEDUNG</span><div><span>Apartemen</span><i /> <span>Perkantoran</span><i /> <span>Tim engineering</span></div></div>
      </section>

      <section className="section intro-section" id="tentang">
        <div className="container intro-grid"><div><Eyebrow>LEBIH TERHUBUNG</Eyebrow><h2>Semua kebutuhan gedung,<br /><span>dalam satu alur kerja.</span></h2></div><div className="intro-copy"><p>Informasi penghuni, keluhan, aset, dan pekerjaan teknisi sering berjalan di tempat berbeda. SistemGedung membantu merancang pengalaman digital dan proses operasional yang saling terhubung.</p><Link className="text-link" href="/solusi">Lihat solusi untuk gedung <span>→</span></Link></div></div>
      </section>

      <section className="section capability-section">
        <div className="container"><div className="section-heading"><div><Eyebrow>PLATFORM & LAYANAN</Eyebrow><h2>Mulai dari kebutuhan<br />operasional Anda.</h2></div><p>Ruang lingkup dapat dibahas dan disesuaikan dengan proses pengelolaan properti.</p></div>
          <div className="capability-grid">{capabilities.map((item) => <article className="capability-card" key={item.n}><div className="cap-icon">{item.n === "01" ? "↗" : item.n === "02" ? "⌘" : "◎"}</div><span className="card-number">{item.n} / 03</span><h3>{item.title}</h3><p>{item.text}</p><Link href="/layanan/software" aria-label={`Pelajari ${item.title}`}>↗</Link></article>)}</div>
        </div>
      </section>

      <section className="section home-pricing">
        <div className="container home-pricing-layout">
          <div><Eyebrow>PAKET SEWA & DUKUNGAN</Eyebrow><h2>Mulai dari lingkup<br />yang sesuai kebutuhan.</h2><p>Sewa aplikasi building management mulai dari satu gedung, dengan opsi VPS dan support teknisi.</p></div>
          <div className="home-pricing-summary"><span>Estimasi sewa aplikasi · 1 gedung</span><strong>Rp2.000.000<small> / bulan</small></strong><p>VPS dan domain tidak termasuk. Harga paket multi-gedung dan layanan tambahan menunggu konfirmasi kebutuhan.</p><Link className="button button-dark" href="/harga">Bandingkan paket <span>↗</span></Link></div>
        </div>
      </section>

      <section className="split-section">
        <div className="split-art"><div className="building-illustration"><div className="building-top"><span /><span /></div><div className="building-body"><div className="building-grid">{Array.from({ length: 18 }, (_, i) => <i key={i} />)}</div></div><div className="building-base" /></div><span className="art-caption">SYSTEMS THAT SUPPORT<br />REAL BUILDING OPERATIONS</span></div>
        <div className="split-copy"><Eyebrow>DUA JALUR, SATU TUJUAN</Eyebrow><h2>Teknologi yang memahami cara gedung bekerja.</h2><p>Kolaborasikan pengembangan aplikasi khusus dengan dukungan proses operasional. Mulai dari pemetaan alur sampai pengelolaan layanan sehari-hari.</p><div className="service-links"><Link href="/layanan/software"><span>01</span><b>Pengembangan software</b><i>↗</i></Link><Link href="/layanan/operasional"><span>02</span><b>Dukungan operasional</b><i>↗</i></Link></div></div>
      </section>

      <section className="section insight-section home-news-section"><div className="container"><div className="section-heading"><div><Eyebrow>BERITA TERBARU</Eyebrow><h2>Panduan praktis untuk<br />operasional gedung.</h2></div><Link className="text-link" href="/berita">Lihat semua berita <span>→</span></Link></div><div className="home-news-grid">{berita.slice(0, 3).map((item, index) => <Link className="home-news-card" href={`/berita/${item.slug}`} key={item.slug}><div className="home-news-thumb"><Image src={beritaImage(item.slug)} alt={`Ilustrasi ${item.category}: ${item.title}`} fill sizes="(max-width: 760px) 100vw, (max-width: 980px) 50vw, 33vw" /><span>0{index + 1}</span></div><div><span className="article-tag">{item.category}</span><h3>{item.title}</h3><p>{item.excerpt}</p><small>{item.readTime} baca <b>↗</b></small></div></Link>)}</div></div></section>

      <section className="cta-section"><div className="container cta-layout"><div><Eyebrow>LANGKAH BERIKUTNYA</Eyebrow><h2>Setiap gedung punya<br />cerita operasionalnya.</h2><p>Ceritakan kebutuhan Anda. Kita mulai dari percakapan yang terarah.</p></div><Link className="button button-lime" href="/demo">Ajukan diskusi <span>↗</span></Link></div></section>
    </>
  );
}
