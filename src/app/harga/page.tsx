import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/eyebrow";
import { pricingAddons, pricingPlans } from "@/content/pricing";

export const metadata: Metadata = {
  title: "Paket Aplikasi, Server & Dukungan",
  description: "Lihat estimasi paket sewa aplikasi building management, server terkelola, dan dukungan SistemGedung.",
  alternates: { canonical: "/harga" },
};

export default function PricingPage() {
  return (
    <>
      <section className="pricing-hero">
        <div className="container">
          <Eyebrow>PAKET APLIKASI & DUKUNGAN</Eyebrow>
          <h1>Ruang lingkup jelas.<br /><span>Biaya awal terukur.</span></h1>
          <p className="pricing-intro">Pilih gambaran paket untuk kebutuhan gedung Anda. Harga dan kapasitas di bawah adalah estimasi awal yang dapat dikonfigurasi, bukan penawaran final.</p>
          <div className="pricing-estimate" role="note"><b>Estimasi awal · perlu validasi biaya dan beban</b><span>Angka ini belum divalidasi sebagai tarif pasar. Ukuran infrastruktur, beban penggunaan, dan ruang lingkup akhir dikonfirmasi setelah asesmen.</span></div>
        </div>
      </section>

      <section className="pricing-section">
        <div className="container">
          <div className="pricing-grid">
            {pricingPlans.map((plan) => (
              <article className={`pricing-card${"featured" in plan && plan.featured ? " pricing-card-featured" : ""}`} key={plan.id}>
                {"featured" in plan && plan.featured ? <span className="pricing-recommended">PILIHAN PAKET</span> : null}
                <div className="pricing-card-heading"><h2>{plan.name}</h2><p>{plan.summary}</p></div>
                <p className="pricing-price">{plan.price}<span> / bulan</span></p>
                <p className="pricing-capacity">{plan.capacity}</p>
                <p className="pricing-server">{plan.server}</p>
                <ul>{plan.features.map((feature) => <li key={feature}><span aria-hidden="true">✓</span>{feature}</li>)}</ul>
                <Link className="button button-dark pricing-cta" href={`/demo?paket=${plan.id}`}>{plan.action}<span>↗</span></Link>
              </article>
            ))}
          </div>
          <p className="pricing-term">Semua paket bulanan memiliki masa berlangganan minimum 12 bulan. Kapasitas dan alokasi resource perlu dikonfirmasi saat onboarding.</p>
        </div>
      </section>

      <section className="pricing-support">
        <div className="container pricing-support-grid">
          <div><Eyebrow>ADD-ON & LAYANAN TERPISAH</Eyebrow><h2>Tambahkan sesuai<br />kebutuhan operasional.</h2><p>Add-on merupakan estimasi awal dan dapat berubah setelah asesmen ruang lingkup.</p></div>
          <div className="addon-list">{pricingAddons.map((addon) => <article className="addon-row" key={addon.name}><div><h3>{addon.name}</h3><p>{addon.note}</p></div><b>{addon.price}</b></article>)}</div>
        </div>
      </section>

      <section className="pricing-terms">
        <div className="container pricing-terms-inner">
          <Eyebrow>CATATAN PENTING</Eyebrow>
          <h2>Samakan ekspektasi<br />sebelum berlangganan.</h2>
          <div className="pricing-terms-grid">
            <article><h3>Jam dukungan</h3><p>Jendela layanan yang diusulkan: Senin–Jumat, 09.00–17.00 WIB, kecuali hari libur nasional. Jam final disepakati tertulis. Permintaan di luar jam tersebut ditangani pada jam layanan berikutnya.</p></article>
            <article><h3>Respons bukan resolusi</h3><p>Target waktu pada paket adalah target respons awal dalam jam kerja, bukan jaminan waktu penyelesaian. Tidak ada janji uptime atau SLA ketersediaan pada estimasi ini.</p></article>
            <article><h3>Area kunjungan</h3><p>Kunjungan onsite berlaku dalam area layanan Jakarta yang disepakati. Lokasi di luar cakupan tersebut dan biaya perjalanan tambahan akan dikonfirmasi serta dikutip terpisah.</p></article>
            <article><h3>Biaya yang dikonfirmasi</h3><p>Overage properti/unit, resource server tambahan, fitur khusus, domain, dan layanan pihak ketiga dikutip terpisah. Pajak, termin pembayaran, ukuran dan cakupan PostgreSQL, retensi backup, serta rincian pemakaian dikonfirmasi sebelum kontrak. Alokasi PostgreSQL Basic ditentukan setelah onboarding.</p></article>
          </div>
          <p className="pricing-disclaimer">Seluruh angka merupakan estimasi konfigurasi awal yang menunggu validasi beban dan biaya operasional; bukan tarif pasar terverifikasi atau penawaran final.</p>
          <Link className="button button-dark" href="/demo?paket=custom">Tanyakan paket yang sesuai <span>↗</span></Link>
        </div>
      </section>
    </>
  );
}
