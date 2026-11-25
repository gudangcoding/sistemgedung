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

const pagePath = "/aplikasi-pengelolaan-apartemen";
const pageTitle = "Aplikasi Pengelolaan Apartemen";
const pageDescription =
  "Aplikasi pengelolaan apartemen untuk mengelola unit, tenant, tagihan IPL, keluhan penghuni, work order, dan aset dalam satu sistem. Coba demo aplikasinya.";
const heroImageAlt =
  "Tampilan aplikasi pengelolaan apartemen untuk data tenant, tagihan, pembayaran, dan layanan penghuni";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "aplikasi pengelolaan apartemen",
    "aplikasi manajemen apartemen",
    "aplikasi pengelola apartemen",
    "aplikasi apartemen Indonesia",
    "aplikasi tagihan IPL apartemen",
    "aplikasi keluhan penghuni apartemen",
    "aplikasi work order apartemen",
    "aplikasi tenant apartemen",
    "sistem aplikasi apartemen",
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
    question: "Apa itu aplikasi pengelolaan apartemen?",
    answer:
      "Aplikasi pengelolaan apartemen adalah alat bantu digital untuk mencatat dan menindaklanjuti proses properti, seperti data unit dan tenant, tagihan IPL, keluhan penghuni, work order, aset, dan pekerjaan teknisi. Pengelola dapat melihat alur yang tersebar di banyak catatan atau pesan chat dalam satu tempat yang lebih mudah ditelusuri.",
  },
  {
    question: "Siapa saja yang menggunakan aplikasi ini di apartemen?",
    answer:
      "Pengelola atau P3SRS memakainya untuk melihat kondisi properti, admin untuk administrasi unit dan tagihan, teknisi untuk menerima serta memperbarui pekerjaan, dan penghuni untuk mengirim permintaan serta memantau statusnya. Hak akses sebaiknya mengikuti peran dan kewenangan masing-masing.",
  },
  {
    question: "Apakah aplikasi pengelolaan apartemen bisa dicoba dulu?",
    answer:
      "Bisa. Demo building management dapat dibuka untuk melihat alur tenancy, billing, engineering, dan modul lainnya. Tampilan portal tenant dan admin juga bisa ditinjau sebelum konfigurasi, white-label, atau modul tambahan dibahas lebih lanjut.",
  },
  {
    question: "Apakah tersedia aplikasi mobile untuk penghuni dan teknisi?",
    answer:
      "SistemGedung menyediakan BMS Web Portal untuk pengelola, serta BMS Support dan BMS Tenant untuk tim lapangan dan penghuni. Aplikasi Android tersebut saat ini menggunakan Google Play closed testing, sehingga email tester perlu didaftarkan sebelum mengunduh.",
  },
  {
    question: "Apakah aplikasi dapat disesuaikan dengan proses apartemen kami?",
    answer:
      "Konfigurasi, white-label, dan modul tambahan dapat dibahas setelah alur kerja properti dipetakan. Kesesuaian fitur, batas penyesuaian, dan estimasi perlu dikonfirmasi melalui demo dan asesmen kebutuhan, bukan diasumsikan dari daftar fitur saja.",
  },
  {
    question: "Bagaimana caranya mulai menggunakan aplikasi ini?",
    answer:
      "Mulailah dengan membuka demo dan memetakan satu alur prioritas, misalnya keluhan penghuni atau tagihan IPL. Setelah alur tersebut cocok, bahas konfigurasi, migrasi data bila diperlukan, pelatihan pengguna, dan dukungan sebelum pemakaian diperluas.",
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${siteOrigin}${pagePath}/#service`,
  name: pageTitle,
  serviceType: "Aplikasi pengelolaan apartemen untuk operasional properti",
  description: pageDescription,
  url: `${siteOrigin}${pagePath}`,
  image: `${siteOrigin}${solutionImages.apartemen}`,
  provider: { "@id": `${siteOrigin}/#organization` },
  areaServed: { "@type": "Country", name: "Indonesia" },
  audience: { "@type": "BusinessAudience", audienceType: "Pengelola apartemen dan P3SRS" },
};

const capabilities = [
  {
    title: "Unit dan tenant",
    description: "Catat identitas unit, penghuni, dan riwayat huni agar administrasi serta tindak lanjut layanan memiliki konteks yang jelas.",
  },
  {
    title: "Tagihan IPL",
    description: "Siapkan dasar perhitungan, periode, dan rincian iuran yang akan disampaikan kepada penghuni setelah data diperiksa.",
  },
  {
    title: "Keluhan penghuni",
    description: "Terima laporan, tetapkan kategori, dan teruskan ke penanggung jawab sesuai aturan yang berlaku di properti.",
  },
  {
    title: "Work order teknisi",
    description: "Tugaskan pekerjaan, perbarui status, dan simpan catatan penanganan agar riwayatnya dapat ditinjau kembali.",
  },
  {
    title: "Aset dan pemeliharaan",
    description: "Hubungkan data aset, jadwal pemeriksaan, dan catatan pekerjaan teknisi dalam satu alur yang teratur.",
  },
  {
    title: "Portal penghuni",
    description: "Berikan kanal bagi penghuni untuk menyampaikan permintaan, melihat informasi gedung, dan mengikuti status penanganan.",
  },
];

const userRoles = [
  {
    title: "Pengelola dan P3SRS",
    description: "Melihat ringkasan operasional, meninjau permintaan yang perlu keputusan, dan memastikan alur mengikuti kebijakan properti.",
  },
  {
    title: "Admin gedung",
    description: "Mengelola data unit dan tenant, menyiapkan tagihan, serta memeriksa kelengkapan informasi sebelum tindak lanjut.",
  },
  {
    title: "Tim engineering",
    description: "Menerima work order, membuka catatan aset terkait, dan memperbarui hasil pekerjaan dari lapangan.",
  },
  {
    title: "Penghuni",
    description: "Mengirim keluhan atau permintaan layanan dan memantau statusnya tanpa harus menanyakan berulang kali.",
  },
];

const demoSteps = [
  { n: "01", title: "Buka demo", description: "Coba alur tenancy, billing, engineering, dan modul lain yang tersedia tanpa pendaftaran." },
  { n: "02", title: "Petakan alur prioritas", description: "Pilih satu proses yang paling sering menimbulkan pekerjaan manual atau sulit ditelusuri." },
  { n: "03", title: "Cocokkan modul", description: "Tentukan apakah kebutuhan dapat dijalankan dengan konfigurasi, white-label, atau modul tambahan." },
  { n: "04", title: "Rencanakan pemakaian", description: "Bahas migrasi data, pelatihan pengguna, dan dukungan sebelum aplikasi dipakai lebih luas." },
];

export default function AplikasiPengelolaanApartemenPage() {
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
              { name: "Aplikasi pengelolaan apartemen", path: pagePath },
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
            <span>Aplikasi pengelolaan apartemen</span>
          </div>
          <Eyebrow>APLIKASI PENGELOLAAN APARTEMEN</Eyebrow>
          <h1>Aplikasi pengelolaan apartemen untuk pekerjaan sehari-hari.</h1>
          <p className="inner-lead">
            Aplikasi ini membantu pengelola apartemen menjaga data unit dan tenant, alur tagihan IPL,
            keluhan penghuni, work order, serta pekerjaan teknisi dalam satu tempat. Coba alur yang
            sudah live, lalu tentukan modul dan konfigurasi yang sesuai dengan proses properti Anda.
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
            <Link className="text-link" href="/#demo">Coba demo aplikasi <span>→</span></Link>
          </div>
        </div>
      </section>

      <section className="section capability-section">
        <div className="container">
          <div className="section-heading">
            <div><Eyebrow>YANG DIKELOLA</Eyebrow><h2>Pekerjaan yang lebih<br /><span>terhubung antarperan.</span></h2></div>
            <p>Gunakan modul yang relevan dengan properti Anda. Ruang lingkup dan batas akses dibahas sebelum implementasi.</p>
          </div>
          <div className="capability-grid">
            {capabilities.map((item, index) => (
              <article className="capability-card" key={item.title}>
                <span className="card-number">0{index + 1} / 0{capabilities.length}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
          <p className="pricing-term">
            Modul yang tersedia mengikuti paket dan konfigurasi. <Link href="/software-pengelolaan-apartemen">Pelajari kriteria software pengelolaan apartemen <span>→</span></Link>
          </p>
        </div>
      </section>

      <section className="section tech-section">
        <div className="container">
          <div className="section-heading">
            <div><Eyebrow>PENGGUNA APLIKASI</Eyebrow><h2>Satu alur kerja,<br /><span>berbagai peran.</span></h2></div>
            <p>Setiap peran melihat informasi yang sesuai dengan tanggung jawabnya, sehingga tindak lanjut tidak bergantung pada percakapan yang tercecer.</p>
          </div>
          <div className="tech-grid">
            {userRoles.map((role) => (
              <article className="tech-card" key={role.title}>
                <span>{role.title}</span>
                <p>{role.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section go-live-section">
        <div className="container">
          <div className="section-heading go-live-heading">
            <div><Eyebrow>CARA MULAI</Eyebrow><h2>Coba dulu,<br /><span>baru tentukan alurnya.</span></h2></div>
            <p>Aplikasi yang sudah live dapat diuji lebih awal agar kebutuhan nyata terlihat sebelum konfigurasi atau pengembangan tambahan.</p>
          </div>
          <div className="go-live-grid">
            {demoSteps.map((step) => (
              <article className="go-live-step" key={step.n}>
                <span>{step.n}</span><h3>{step.title}</h3><p>{step.description}</p>
              </article>
            ))}
          </div>
          <div className="services-editorial">
            <div><Eyebrow>TOPIK TERKAIT</Eyebrow><h3>Lanjutkan dari alur yang paling Anda butuhkan.</h3></div>
            <div className="feature-related-links">
              <Link className="text-link" href="/fitur/tagihan-ipl-apartemen">Aplikasi tagihan IPL apartemen <span>→</span></Link>
              <Link className="text-link" href="/fitur/keluhan-penghuni-apartemen">Keluhan penghuni apartemen <span>→</span></Link>
              <Link className="text-link" href="/artikel/digitalisasi-operasional-apartemen">Digitalisasi operasional apartemen <span>→</span></Link>
              <Link className="text-link" href="/harga">Paket dan harga <span>→</span></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section faq-section" id="faq">
        <div className="container faq-layout">
          <div>
            <Eyebrow>PERTANYAAN UMUM</Eyebrow>
            <h2>Hal yang sering<br /><span>ditanyakan pengelola.</span></h2>
            <p>Masih perlu memastikan alur tertentu? Diskusikan langsung melalui formulir demo.</p>
            <Link className="text-link" href="/demo">Ajukan pertanyaan <span>→</span></Link>
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
          <Eyebrow>{siteName} · APLIKASI APARTEMEN</Eyebrow>
          <h2>Lihat aplikasinya,<br /><span>baru putuskan.</span></h2>
          <p className="inner-lead">{pageDescription}</p>
          <div className="go-live-actions">
            <Link className="button button-dark" href="/demo">Jadwalkan diskusi <span>↗</span></Link>
            <Link className="text-link" href="/solusi/apartemen">Lihat solusi apartemen <span>→</span></Link>
          </div>
        </div>
      </section>
    </article>
  );
}
