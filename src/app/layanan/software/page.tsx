import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AppShowcase } from "@/components/app-showcase";
import { Eyebrow } from "@/components/eyebrow";
import { serviceImages } from "@/lib/media";
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serializeJsonLd,
  siteDescription,
  siteName,
  siteOrigin,
} from "@/lib/site";

const servicePath = "/layanan/software";
const pageTitle = "Jasa Pembuatan Aplikasi Manajemen Gedung";
const pageDescription =
  "Jasa pembuatan aplikasi web dan mobile untuk manajemen gedung dan apartemen. BMS Web Portal untuk pengelola, BMS Support untuk tim lapangan, dan BMS Tenant untuk penghuni.";

const faqs = [
  {
    question: "Apakah SistemGedung membuat aplikasi manajemen gedung dari nol?",
    answer:
      "Kebutuhan dapat dimulai dari aplikasi building management yang sudah live dan disesuaikan melalui setup atau white-label, maupun pembahasan modul dan alur khusus. Ruang lingkup pengembangan, integrasi, dan estimasi dibicarakan setelah kebutuhan gedung dipetakan.",
  },
  {
    question: "Fitur apa yang bisa digunakan untuk mengelola apartemen?",
    answer:
      "Aplikasi mencakup alur tenant dan unit, tagihan IPL, keluhan dan work order, aset, preventive maintenance, portal tenant, portal admin, serta pekerjaan tim engineering. Modul yang digunakan mengikuti paket dan kebutuhan operasional.",
  },
  {
    question: "Apakah tersedia aplikasi web dan mobile?",
    answer:
      "SistemGedung menyediakan BMS Web Portal untuk pengelola gedung, BMS Support untuk tim engineering, housekeeping, dan security, serta BMS Tenant untuk penghuni. BMS Support dan BMS Tenant tersedia sebagai aplikasi Android melalui closed testing, sehingga email tester perlu didaftarkan sebelum mengunduh dari Google Play.",
  },
  {
    question: "Bagaimana menentukan biaya pembuatan atau implementasi aplikasi?",
    answer:
      "Biaya bergantung pada jumlah gedung, modul, kebutuhan server, migrasi data, integrasi, white-label, dan dukungan yang dipilih. Harga paket aplikasi yang tersedia dapat dilihat di halaman harga; kebutuhan di luar paket perlu dibahas untuk memperoleh ruang lingkup dan estimasi tersendiri.",
  },
  {
    question: "Bagaimana proses implementasi untuk gedung atau apartemen?",
    answer:
      "Proses dimulai dengan diskusi alur kerja dan demo, dilanjutkan pemetaan kebutuhan, penyiapan aplikasi, migrasi dan verifikasi data bila diperlukan, training, lalu pendampingan saat mulai digunakan. Tahapan dan jadwal disepakati sesuai ruang lingkup.",
  },
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "jasa pembuatan aplikasi manajemen gedung",
    "jasa pembuatan aplikasi apartemen",
    "aplikasi web manajemen gedung",
    "aplikasi mobile manajemen apartemen",
    "jasa pembuatan aplikasi building management",
  ],
  alternates: { canonical: servicePath },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: "website",
    url: servicePath,
    images: [
      {
        url: serviceImages.software,
        width: 1600,
        height: 893,
        alt: "Tampilan BMS Web Portal untuk manajemen dan operasional gedung",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [serviceImages.software],
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${siteOrigin}${servicePath}/#service`,
  name: pageTitle,
  serviceType: "Pengembangan aplikasi web dan mobile manajemen gedung dan apartemen",
  description: pageDescription,
  url: `${siteOrigin}${servicePath}`,
  provider: { "@id": `${siteOrigin}/#organization` },
  areaServed: { "@type": "Country", name: "Indonesia" },
  audience: { "@type": "BusinessAudience", audienceType: "Pengelola gedung dan apartemen" },
};

export default function SoftwareServicePage() {
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
              { name: "Layanan", path: servicePath },
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
            <Link href="/">Beranda</Link><span>/</span><span>Layanan aplikasi</span>
          </div>
          <Eyebrow>APLIKASI BUILDING MANAGEMENT</Eyebrow>
          <h1>Jasa pembuatan aplikasi web &amp; mobile untuk manajemen gedung dan apartemen.</h1>
          <p className="inner-lead">
            Hubungkan pekerjaan pengelola, tenant, dan tim engineering dalam satu sistem: mulai dari
            data unit dan tagihan IPL hingga keluhan, work order, aset, dan pemeliharaan. Coba demo
            aplikasi yang sudah live, lalu bahas setup, white-label, atau modul yang sesuai proses
            properti Anda.
          </p>
          <div className="page-visual">
            <Image
              src={serviceImages.software}
              alt="Tampilan BMS Web Portal dengan modul tenancy, engineering, billing, akuntansi, operation, security, dan housekeeping"
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
            <div><Eyebrow>CAKUPAN APLIKASI</Eyebrow><h2>Kelola alur utama<br /><span>properti Anda.</span></h2></div>
            <p>Gunakan modul yang relevan untuk properti dan tim Anda; kebutuhan tambahan dibahas sebelum implementasi.</p>
          </div>
          <div className="capability-grid">
            {[
              ["Tenant, unit & IPL", "Kelola informasi penghuni dan unit serta alur tagihan IPL sesuai konfigurasi gedung."],
              ["Keluhan & work order", "Catat permintaan, tetapkan tindak lanjut, dan pantau status pekerjaan dalam alur yang lebih mudah ditelusuri."],
              ["Aset & maintenance", "Hubungkan data aset, pekerjaan teknisi, dan jadwal preventive maintenance."],
              ["Portal tenant", "Berikan kanal bagi penghuni untuk menyampaikan permintaan, melihat informasi, dan mengikuti status penanganan."],
              ["Ruang kerja admin", "Bantu tim pengelola meninjau tiket, tenant, aset, dan aktivitas operasional."],
              ["Aplikasi mobile", "Dukung kebutuhan tenant dan tim lapangan melalui aplikasi Android; akses saat ini menggunakan closed testing."],
            ].map(([title, text], index) => (
              <article className="capability-card" key={title}>
                <span className="card-number">0{index + 1} / 06</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section app-download-section">
        <div className="container">
          <div className="section-heading">
            <div><Eyebrow>TIGA APLIKASI TERHUBUNG</Eyebrow><h2>Web portal, tim lapangan,<br /><span>dan penghuni.</span></h2></div>
            <p>Setiap peran mendapat antarmuka yang sesuai: pengelola memakai BMS Web Portal, tim operasional memakai BMS Support, dan penghuni memakai BMS Tenant.</p>
          </div>
          <AppShowcase />
          <div className="app-download-help"><p><strong>Ingin mencoba sebelum memilih modul?</strong> Buka demo web portal atau daftarkan email tester untuk mengunduh BMS Support dan BMS Tenant lewat Google Play.</p><Link href="/demo">Daftarkan email uji coba <span>→</span></Link></div>
        </div>
      </section>

      <section className="section tech-section">
        <div className="container">
          <div className="section-heading">
            <div><Eyebrow>WEB, MOBILE &amp; PENYESUAIAN</Eyebrow><h2>Mulai dari kebutuhan,<br /><span>bukan sekadar daftar fitur.</span></h2></div>
            <p>Gunakan demo untuk menilai alur yang sudah tersedia sebelum menentukan apa yang perlu dikonfigurasi atau dikembangkan.</p>
          </div>
          <div className="tech-grid">
            <article className="tech-card">
              <span>BMS Web Portal</span>
              <p>Ruang kerja web untuk pengelola: tenancy, engineering, billing, akuntansi &amp; pajak, operation, security, dan housekeeping.</p>
            </article>
            <article className="tech-card">
              <span>BMS Support &amp; BMS Tenant</span>
              <p>Aplikasi Android untuk tim engineering, housekeeping, security, dan penghuni; diuji melalui Google Play closed testing setelah email didaftarkan.</p>
            </article>
            <article className="tech-card">
              <span>Setup &amp; white-label</span>
              <p>Bahas penyesuaian identitas aplikasi, konfigurasi, migrasi data, training, dan dukungan teknisi sesuai paket.</p>
            </article>
            <article className="tech-card">
              <span>Modul atau integrasi khusus</span>
              <p>Petakan kebutuhan yang belum tercakup untuk menentukan prioritas, keterkaitan sistem, dan estimasi pekerjaan.</p>
            </article>
          </div>
          <p className="pricing-term">
            Ketersediaan modul dan ruang lingkup penyesuaian dikonfirmasi saat diskusi.{" "}
            <Link href="/solusi/apartemen">Lihat solusi untuk apartemen</Link> atau{" "}
            <Link href="/artikel/jasa-pembuatan-aplikasi-building-management">baca panduan memilih layanan</Link>.
          </p>
          <div className="feature-related-links">
            <Link className="text-link" href="/fitur/tagihan-ipl-apartemen">Aplikasi tagihan IPL apartemen <span>→</span></Link>
            <Link className="text-link" href="/fitur/pencatatan-meter-gedung">Software pencatatan meter air dan listrik <span>→</span></Link>
            <Link className="text-link" href="/fitur/keluhan-penghuni-apartemen">Sistem komunikasi keluhan penghuni <span>→</span></Link>
            <Link className="text-link" href="/sewa-aplikasi-manajemen-gedung">Sewa aplikasi web manajemen gedung <span>→</span></Link>
          </div>
        </div>
      </section>

      <section className="section go-live-section">
        <div className="container">
          <div className="section-heading go-live-heading">
            <div><Eyebrow>TAHAP IMPLEMENTASI</Eyebrow><h2>Alur kerja jelas<br /><span>sebelum mulai go-live.</span></h2></div>
            <p>Ruang lingkup, tanggung jawab, dan jadwal dibahas bersama agar implementasi sesuai kesiapan data dan tim.</p>
          </div>
          <div className="go-live-grid">
            {[
              ["01", "Diskusi & demo", "Petakan jenis properti, peran pengguna, alur kerja, dan modul prioritas."],
              ["02", "Pemetaan solusi", "Tentukan apakah kebutuhan cocok dengan konfigurasi, white-label, atau pengembangan khusus."],
              ["03", "Persiapan data & pengguna", "Rencanakan migrasi dan verifikasi data serta training untuk admin dan tim operasional."],
              ["04", "Implementasi & evaluasi", "Sepakati peluncuran, dukungan, dan tindak lanjut berdasarkan hasil penggunaan."],
            ].map(([number, title, text]) => (
              <article className="go-live-step" key={number}>
                <span>{number}</span><h3>{title}</h3><p>{text}</p>
              </article>
            ))}
          </div>
          <div className="go-live-actions">
            <Link className="button button-dark" href="/demo">Jadwalkan diskusi <span>↗</span></Link>
            <Link className="text-link" href="/berita/memilih-vendor-aplikasi-building-management">Panduan memilih vendor <span>→</span></Link>
          </div>
        </div>
      </section>

      <section className="section faq-section" id="faq">
        <div className="container faq-layout">
          <div>
            <Eyebrow>PERTANYAAN UMUM</Eyebrow>
            <h2>Hal yang perlu<br /><span>diketahui sebelum memilih.</span></h2>
            <p>Perlu membahas fitur atau kesiapan implementasi gedung Anda?</p>
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
        <div className="container final-cta-layout">
          <div>
            <Eyebrow>LANGKAH BERIKUTNYA</Eyebrow>
            <h2>Lihat alurnya,<br /><span>baru tentukan solusinya.</span></h2>
            <p>{siteDescription}</p>
            <div className="go-live-actions">
              <Link className="button button-lime" href="/demo">Minta demo &amp; konsultasi <span>↗</span></Link>
              <Link className="text-link light-link" href="/harga">Bandingkan paket <span>→</span></Link>
            </div>
            <div>
              <Eyebrow>DISKUSI AWAL</Eyebrow>
              <h3>Ruang lingkup yang dibahas</h3>
              <ul className="final-cta-points">
                <li>Jumlah gedung, unit, dan peran pengguna</li>
                <li>Modul yang dipakai dan alur yang perlu disesuaikan</li>
                <li>Kebutuhan migrasi data, integrasi, dan dukungan</li>
              </ul>
              <Link className="text-link" href="/solusi/apartemen">Lihat solusi apartemen <span>→</span></Link>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
