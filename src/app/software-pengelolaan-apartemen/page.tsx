import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "@/components/eyebrow";
import { solutionImages } from "@/lib/media";
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serializeJsonLd,
  siteName,
  siteOrigin,
} from "@/lib/site";

const pagePath = "/software-pengelolaan-apartemen";
const pageTitle = "Software Pengelolaan Apartemen";
const pageDescription =
  "Software pengelolaan apartemen untuk administrasi unit, tagihan IPL, layanan penghuni, aset, dan pelaporan. Pelajari kriteria memilih sistem, cek paket, dan uji demo.";
const heroImageAlt =
  "Tampilan sistem software pengelolaan apartemen untuk unit, tagihan, layanan penghuni, dan operasional gedung";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "software pengelolaan apartemen",
    "software manajemen apartemen",
    "software manajemen apartemen Indonesia",
    "sistem pengelolaan apartemen",
    "software property management apartemen",
    "software pengelola apartemen",
    "vendor software apartemen dan kondominium",
    "sistem manajemen properti apartemen",
    "software apartemen Indonesia",
    "sistemgedung",
  ],
  alternates: { canonical: pagePath },
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName,
    title: `${pageTitle} | ${siteName}`,
    description: pageDescription,
    url: pagePath,
    images: [{ url: solutionImages.apartemen, width: 1600, height: 893, alt: heroImageAlt }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${pageTitle} | ${siteName}`,
    description: pageDescription,
    images: [{ url: solutionImages.apartemen, alt: heroImageAlt }],
  },
};

const faqs = [
  {
    question: "Apa yang perlu diperiksa saat memilih software pengelolaan apartemen?",
    answer:
      "Periksa kesesuaian alur dengan proses properti, pembagian peran dan batas akses, cara data unit serta tagihan dikelola, kebutuhan integrasi, dukungan setelah implementasi, dan ketentuan kepemilikan serta ekspor data. Uji kriteria tersebut dengan skenario nyata saat demo.",
  },
  {
    question: "Apakah software pengelolaan apartemen sama dengan sistem ERP atau akuntansi?",
    answer:
      "Tidak selalu. Software pengelolaan apartemen umumnya berfokus pada operasional properti, seperti unit, tenant, IPL, keluhan, work order, dan aset. Jika kebutuhan akuntansi atau ERP terlibat, batas tanggung jawab dan integrasi antarsistem perlu dipetakan secara terpisah.",
  },
  {
    question: "Bisakah software ini dipakai untuk beberapa gedung atau properti?",
    answer:
      "Kebutuhan multi-gedung dapat dibahas, tetapi kapasitas, jumlah pengguna, pembatasan data antarproperti, dan konfigurasi harus dikonfirmasi berdasarkan paket. Jangan menganggap semua sistem otomatis mendukung portofolio multi-lokasi tanpa pengujian.",
  },
  {
    question: "Bagaimana proses migrasi data dari sistem lama atau Excel?",
    answer:
      "Data dari Excel, CSV, Google Sheets, atau sistem sebelumnya dipetakan, dibersihkan, lalu diverifikasi bersama pengguna. Cakupan migrasi, sumber data yang sah, dan penanganan koreksi sebaiknya disepakati sebelum proses dimulai.",
  },
  {
    question: "Apakah software pengelolaan apartemen bisa disesuaikan dengan brand perusahaan?",
    answer:
      "Opsi white-label dapat dibahas untuk menyesuaikan logo, warna, nama aplikasi, dan domain. Ruang lingkup penyesuaian, batas modul, serta biaya terkait perlu dikonfirmasi dalam asesmen kebutuhan.",
  },
  {
    question: "Berapa biaya software pengelolaan apartemen?",
    answer:
      "Biaya bergantung pada paket, jumlah gedung dan unit, pengguna, server, migrasi, integrasi, white-label, serta dukungan. Informasi paket tersedia di harga, sementara kebutuhan di luar paket dibahas terpisah setelah asesmen.",
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${siteOrigin}${pagePath}/#service`,
  name: pageTitle,
  serviceType: "Software dan sistem pengelolaan apartemen",
  description: pageDescription,
  url: `${siteOrigin}${pagePath}`,
  image: `${siteOrigin}${solutionImages.apartemen}`,
  provider: { "@id": `${siteOrigin}/#organization` },
  areaServed: { "@type": "Country", name: "Indonesia" },
  audience: { "@type": "BusinessAudience", audienceType: "Pengelola apartemen dan kondominium" },
};

const criteria = [
  {
    title: "Kesesuaian alur",
    description: "Pastikan sistem mengikuti cara kerja properti, bukan sekadar banyaknya menu yang ditawarkan.",
  },
  {
    title: "Peran dan batas akses",
    description: "Periksa bagaimana akun dibatasi menurut peran, properti, dan kewenangan pengelola.",
  },
  {
    title: "Kesiapan data",
    description: "Lihat bagaimana data unit, tenant, tarif, dan riwayat transaksi dimasukkan serta diverifikasi.",
  },
  {
    title: "Integrasi",
    description: "Petakan kebutuhan integrasi pembayaran, notifikasi, atau perangkat sebelum menjanjikan koneksi otomatis.",
  },
  {
    title: "Dukungan",
    description: "Tanyakan saluran bantuan, cakupan pelatihan, kunjungan teknisi, dan penanganan perubahan fitur.",
  },
  {
    title: "Kepemilikan data",
    description: "Pastikan ketentuan ekspor, cadangan, retensi, dan penghapusan data dipahami sejak awal.",
  },
];

const systemScope = [
  {
    title: "Administrasi dan keuangan",
    description: "Data tenant dan unit, tagihan IPL, pencatatan meter, serta rincian yang disampaikan kepada penghuni.",
  },
  {
    title: "Layanan penghuni",
    description: "Pengumuman, permintaan layanan, keluhan, dan status tindak lanjut yang dapat dipantau.",
  },
  {
    title: "Operasional teknis",
    description: "Work order, informasi aset, jadwal pemeliharaan, dan catatan pekerjaan tim lapangan.",
  },
  {
    title: "Pelaporan dan evaluasi",
    description: "Ringkasan kondisi operasional dari data yang telah diverifikasi untuk kebutuhan tinjauan pengelola.",
  },
];

const evaluationSteps = [
  { n: "01", title: "Petakan proses", description: "Tuliskan alur yang ingin diperbaiki, peran yang terlibat, dan aturan yang berlaku di properti." },
  { n: "02", title: "Uji dengan skenario", description: "Gunakan demo untuk membuat laporan, menugaskan teknisi, memperbarui status, dan meninjau riwayatnya." },
  { n: "03", title: "Sepakati ruang lingkup", description: "Tentukan modul, konfigurasi, integrasi, migrasi, dan dukungan yang benar-benar dibutuhkan." },
  { n: "04", title: "Terapkan bertahap", description: "Mulai dari satu alur prioritas, evaluasi hasilnya, lalu perluas setelah pengguna siap." },
];

export default function SoftwarePengelolaanApartemenPage() {
  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(
            breadcrumbJsonLd([
              { name: "Beranda", path: "/" },
              { name: "Solusi apartemen", path: "/solusi/apartemen" },
              { name: "Software pengelolaan apartemen", path: pagePath },
            ]),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(faqJsonLd(faqs)) }}
      />

      <section className="inner-hero">
        <div className="container">
          <div className="article-breadcrumb">
            <Link href="/">Beranda</Link><span>/</span>
            <Link href="/solusi/apartemen">Solusi apartemen</Link><span>/</span>
            <span>Software pengelolaan apartemen</span>
          </div>
          <Eyebrow>SOFTWARE PENGELOLAAN APARTEMEN</Eyebrow>
          <h1>Software pengelolaan apartemen yang mengikuti proses properti Anda.</h1>
          <p className="inner-lead">
            Memilih software pengelolaan apartemen sebaiknya dimulai dari alur kerja, bukan dari daftar
            fitur. Tinjau kriteria yang relevan, uji sistem dengan skenario properti Anda, lalu
            konfirmasi ruang lingkup, paket, dan dukungan yang dibutuhkan.
          </p>
          <div className="page-visual">
            <Image
              src={solutionImages.apartemen}
              alt={heroImageAlt}
              width={1600}
              height={893}
              sizes="(max-width: 1180px) 100vw, 1180px"
              priority
            />
          </div>
          <div className="go-live-actions">
            <Link className="button button-dark" href="/demo">Diskusikan kebutuhan <span>↗</span></Link>
            <Link className="text-link" href="/harga">Lihat paket dan harga <span>→</span></Link>
          </div>
        </div>
      </section>

      <section className="section capability-section">
        <div className="container">
          <div className="section-heading">
            <div><Eyebrow>KRITERIA PEMILIHAN</Eyebrow><h2>Yang perlu dicek<br /><span>sebelum memilih sistem.</span></h2></div>
            <p>Gunakan daftar ini sebagai dasar diskusi dengan penyedia software apartemen dan kondominium.</p>
          </div>
          <div className="capability-grid">
            {criteria.map((item, index) => (
              <article className="capability-card" key={item.title}>
                <span className="card-number">0{index + 1} / 0{criteria.length}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section tech-section">
        <div className="container">
          <div className="section-heading">
            <div><Eyebrow>RUANG LINGKUP SISTEM</Eyebrow><h2>Dari administrasi<br /><span>sampai pelaporan.</span></h2></div>
            <p>Ruang lingkup berikut dapat dibahas dan disesuaikan dengan paket serta kesiapan data properti.</p>
          </div>
          <div className="tech-grid">
            {systemScope.map((item) => (
              <article className="tech-card" key={item.title}>
                <span>{item.title}</span>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section go-live-section">
        <div className="container">
          <div className="section-heading go-live-heading">
            <div><Eyebrow>EVALUASI &amp; IMPLEMENTASI</Eyebrow><h2>Uji dulu,<br /><span>baru berkomitmen.</span></h2></div>
            <p>Setiap sistem dapat terlihat mirip dalam presentasi. Skenario nyata membantu membedakan mana yang benar-benar mendukung proses Anda.</p>
          </div>
          <div className="go-live-grid">
            {evaluationSteps.map((step) => (
              <article className="go-live-step" key={step.n}>
                <span>{step.n}</span><h3>{step.title}</h3><p>{step.description}</p>
              </article>
            ))}
          </div>
          <div className="services-editorial">
            <div><Eyebrow>TOPIK TERKAIT</Eyebrow><h3>Lihat sisi pemakaian aplikasinya.</h3></div>
            <div className="feature-related-links">
              <Link className="text-link" href="/aplikasi-pengelolaan-apartemen">Aplikasi pengelolaan apartemen <span>→</span></Link>
              <Link className="text-link" href="/solusi/apartemen">Solusi manajemen apartemen <span>→</span></Link>
              <Link className="text-link" href="/sewa-aplikasi-manajemen-gedung">Sewa aplikasi web manajemen gedung <span>→</span></Link>
              <Link className="text-link" href="/artikel/jasa-pembuatan-aplikasi-building-management">Panduan memilih vendor <span>→</span></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section faq-section" id="faq">
        <div className="container faq-layout">
          <div>
            <Eyebrow>PERTANYAAN UMUM</Eyebrow>
            <h2>Sebelum memilih<br /><span>software apartemen.</span></h2>
            <p>Butuh membahas kebutuhan khusus properti Anda? Gunakan formulir demo untuk diskusi awal.</p>
            <Link className="text-link" href="/demo">Diskusikan kebutuhan <span>→</span></Link>
          </div>
          <div className="faq-list">
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}<span>＋</span></summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section final-cta-section">
        <div className="container">
          <Eyebrow>{siteName} · SOFTWARE APARTEMEN</Eyebrow>
          <h2>Cocokkan sistemnya<br /><span>dengan proses Anda.</span></h2>
          <p className="inner-lead">{pageDescription}</p>
          <div className="go-live-actions">
            <Link className="button button-dark" href="/demo">Jadwalkan diskusi <span>↗</span></Link>
            <Link className="text-link" href="/aplikasi-pengelolaan-apartemen">Lihat aplikasi pengelolaan apartemen <span>→</span></Link>
          </div>
        </div>
      </section>
    </article>
  );
}
