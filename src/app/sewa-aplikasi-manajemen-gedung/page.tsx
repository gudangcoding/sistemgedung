import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/eyebrow";
import { applicationPlans } from "@/content/pricing";
import { serviceImages } from "@/lib/media";
import { breadcrumbJsonLd, faqJsonLd, serializeJsonLd, siteOrigin } from "@/lib/site";

const pagePath = "/sewa-aplikasi-manajemen-gedung";
const pageTitle = "Sewa Aplikasi Web Manajemen Gedung";
const pageDescription =
  "Sewa aplikasi web manajemen gedung untuk apartemen dan properti multi-gedung. Bandingkan estimasi paket, cek kebutuhan implementasi, dan jadwalkan demo SistemGedung.";

const faqs = [
  {
    question: "Berapa harga sewa aplikasi web manajemen gedung?",
    answer:
      "Estimasi sewa aplikasi mulai Rp2.000.000 per bulan untuk satu gedung. Paket hingga lima gedung tercantum Rp1.700.000 per bulan total dan hingga sepuluh gedung Rp1.500.000 per bulan total. Masa berlangganan aplikasi minimum 12 bulan; kapasitas dan lingkup akhir dikonfirmasi melalui asesmen.",
  },
  {
    question: "Apa yang termasuk dalam sewa aplikasi?",
    answer:
      "Paket lisensi mencakup aplikasi building management, setup awal, pembaruan aplikasi berkala, dan orientasi penggunaan awal. VPS, domain, batas unit dan akun, support tambahan, serta integrasi perlu diperiksa karena dapat terpisah atau bergantung pada asesmen.",
  },
  {
    question: "Apakah aplikasi bisa langsung dicoba sebelum berlangganan?",
    answer:
      "Demo aplikasi building management tersedia untuk ditinjau sebelum membahas kebutuhan. Demo bukan klaim uji coba gratis selama periode tertentu; akses dan ruang lingkup demo dijelaskan saat Anda menghubungi tim.",
  },
  {
    question: "Apakah sewa aplikasi cocok untuk apartemen dan beberapa gedung?",
    answer:
      "Aplikasi ditujukan untuk kebutuhan pengelolaan gedung dan apartemen. Pilihan satu, hingga lima, atau hingga sepuluh gedung memiliki batas kapasitas dan harga total yang berbeda. Diskusikan jumlah unit, pengguna, dan modul sebelum memilih paket.",
  },
  {
    question: "Apakah VPS, domain, dan teknisi termasuk?",
    answer:
      "VPS dan domain tidak termasuk dalam harga lisensi aplikasi. VPS dan paket dukungan teknisi tersedia sebagai pilihan terpisah atau paket gabungan; rincian harga dan cakupan tercantum pada halaman harga.",
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${siteOrigin}${pagePath}/#service`,
  name: pageTitle,
  serviceType: "Sewa aplikasi web building management",
  description: pageDescription,
  url: `${siteOrigin}${pagePath}`,
  provider: { "@id": `${siteOrigin}/#organization` },
  areaServed: { "@type": "Country", name: "Indonesia" },
  audience: { "@type": "BusinessAudience", audienceType: "Pengelola gedung dan apartemen" },
};

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "sewa aplikasi web manajemen gedung",
    "sewa aplikasi building management",
    "sewa software manajemen apartemen",
  ],
  alternates: { canonical: pagePath },
  openGraph: {
    type: "website",
    title: pageTitle,
    description: pageDescription,
    url: pagePath,
    images: [{ url: serviceImages.software, width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: { card: "summary_large_image", title: pageTitle, description: pageDescription, images: [serviceImages.software] },
};

export default function RentalPage() {
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
              { name: "Harga aplikasi", path: "/harga" },
              { name: pageTitle, path: pagePath },
            ]),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(faqJsonLd(faqs)) }}
      />

      <section className="pricing-hero">
        <div className="container">
          <div className="article-breadcrumb">
            <Link href="/">Beranda</Link><span>/</span><Link href="/harga">Harga</Link><span>/</span><span>Sewa aplikasi</span>
          </div>
          <Eyebrow>SEWA SOFTWARE B2B</Eyebrow>
          <h1>Sewa aplikasi web<br /><span>manajemen gedung.</span></h1>
          <p className="pricing-intro">
            Gunakan aplikasi building management untuk membantu mengelola tenant, tagihan IPL,
            keluhan, aset, dan work order. Tinjau demo dan estimasi paket, lalu konfirmasi batas
            penggunaan dan kebutuhan implementasi sebelum berlangganan.
          </p>
          <div className="pricing-estimate" role="note">
            <b>Estimasi lisensi aplikasi · minimum 12 bulan</b>
            <span>
              Harga paket multi-gedung adalah total bulanan untuk kapasitas gedung yang tercantum,
              bukan harga per gedung. VPS, domain, batas unit dan pengguna, pajak, serta lingkup
              akhir dikonfirmasi melalui asesmen.
            </span>
          </div>
          <div className="go-live-actions">
            <Link className="button button-dark" href="/demo">Jadwalkan demo <span>↗</span></Link>
            <Link className="text-link" href="/harga">Lihat rincian semua paket <span>→</span></Link>
          </div>
        </div>
      </section>

      <section className="pricing-section">
        <div className="container">
          <div className="section-heading pricing-section-heading">
            <div><Eyebrow>PILIHAN LISENSI</Eyebrow><h2>Bandingkan estimasi sewa aplikasi.</h2></div>
            <p>Harga adalah estimasi paket saat ini. Konfirmasi kapasitas dan kebutuhan spesifik sebelum berlangganan.</p>
          </div>
          <div className="pricing-grid">
            {applicationPlans.map((plan) => (
              <article
                className={`pricing-card${"featured" in plan && plan.featured ? " pricing-card-featured" : ""}`}
                key={plan.id}
              >
                {"featured" in plan && plan.featured ? <span className="pricing-recommended">PAKET MULTI-GEDUNG</span> : null}
                <div className="pricing-card-heading"><h3>{plan.name}</h3><p>{plan.summary}</p></div>
                <p className="pricing-price">{plan.price}<span> / bulan</span></p>
                <p className="pricing-capacity">{plan.capacity}</p>
                <ul>
                  <li><span aria-hidden="true">✓</span>Aplikasi building management</li>
                  <li><span aria-hidden="true">✓</span>Setup awal aplikasi</li>
                  <li><span aria-hidden="true">✓</span>Pembaruan aplikasi berkala</li>
                  <li><span aria-hidden="true">✓</span>Orientasi penggunaan awal</li>
                  <li><span aria-hidden="true">✓</span>VPS dan domain tidak termasuk</li>
                </ul>
                <Link className="button button-dark pricing-cta" href={`/demo?paket=${plan.id}`}>
                  Diskusikan {plan.name}<span>↗</span>
                </Link>
              </article>
            ))}
          </div>
          <p className="pricing-term">Masa berlangganan aplikasi minimum 12 bulan. Batas jumlah unit, akun, penyimpanan, support aplikasi, dan kebutuhan integrasi ditentukan setelah asesmen.</p>
        </div>
      </section>

      <section className="section tech-section">
        <div className="container">
          <div className="section-heading">
            <div><Eyebrow>SEWA LANGSUNG PAKAI</Eyebrow><h2>Mulai dari kebutuhan<br /><span>operasional properti.</span></h2></div>
            <p>Evaluasi alur dan modul yang dibutuhkan sebelum membandingkan paket berlangganan.</p>
          </div>
          <div className="tech-grid">
            <article className="tech-card"><span>Tenant &amp; unit</span><p>Kelola informasi penghuni dan unit sebagai konteks operasional gedung.</p></article>
            <article className="tech-card"><span>IPL &amp; tagihan</span><p>Bahas proses tagihan sesuai aturan pengelola dan konfigurasi aplikasi.</p></article>
            <article className="tech-card"><span>Keluhan &amp; pekerjaan</span><p>Catat permintaan dan hubungkan tindak lanjut dengan alur work order.</p></article>
            <article className="tech-card"><span>Aset &amp; pemeliharaan</span><p>Petakan kebutuhan data aset, pekerjaan teknisi, dan jadwal perawatan.</p></article>
          </div>
          <p className="pricing-term">
            Perluas pemahaman fitur: <Link href="/fitur/tagihan-ipl-apartemen">aplikasi tagihan IPL apartemen</Link>,{" "}
            <Link href="/fitur/pencatatan-meter-gedung">software pencatatan meter gedung</Link>, dan{" "}
            <Link href="/fitur/keluhan-penghuni-apartemen">sistem keluhan penghuni</Link>.
          </p>
        </div>
      </section>

      <section className="section faq-section">
        <div className="container faq-layout">
          <div>
            <Eyebrow>FAQ SEWA APLIKASI</Eyebrow>
            <h2>Periksa hal penting<br /><span>sebelum berlangganan.</span></h2>
            <p>Bandingkan paket, batas penggunaan, dan komponen biaya berdasarkan kebutuhan gedung.</p>
            <Link className="text-link" href="/demo">Tanyakan kebutuhan Anda <span>→</span></Link>
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
    </article>
  );
}
