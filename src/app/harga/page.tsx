import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/eyebrow";
import { applicationPlans, bundlePlans, serverPlans, supportPlans } from "@/content/pricing";

export const metadata: Metadata = {
  title: "Rincian Harga Paket Aplikasi, VPS & Support Gedung",
  description: "Lihat estimasi harga lisensi aplikasi building management, VPS, paket lengkap, dan dukungan teknisi beserta ketentuan penggunaannya.",
  alternates: { canonical: "/harga" },
  openGraph: {
    title: "Rincian Harga Paket Aplikasi, VPS & Support Gedung",
    description: "Lihat estimasi harga lisensi aplikasi building management, VPS, paket lengkap, dan dukungan teknisi beserta ketentuan penggunaannya.",
    url: "/harga",
  },
};

export default function PricingPage() {
  return (
    <>
      <section className="pricing-hero">
        <div className="container">
          <Eyebrow>HARGA APLIKASI & LAYANAN</Eyebrow>
          <h1>Rincian harga.<br /><span>Pilih paket sesuai kebutuhan.</span></h1>
          <p className="pricing-intro">Bandingkan estimasi lisensi aplikasi, VPS, dukungan teknisi, dan paket lengkap untuk kebutuhan pengelolaan gedung.</p>
          <p className="pricing-term"><Link href="/sewa-aplikasi-manajemen-gedung">Lihat halaman sewa aplikasi web manajemen gedung</Link> untuk informasi lisensi dan demo.</p>
          <div className="pricing-estimate" role="note"><b>Estimasi awal · perlu konfirmasi sebelum berlangganan</b><span>Harga di halaman ini adalah estimasi yang Anda pilih untuk rancangan paket. Kapasitas, pajak, biaya provider, kebutuhan unit/pengguna, dan ruang lingkup akhir dikonfirmasi melalui asesmen; harga bukan tarif pasar terverifikasi.</span></div>
          <nav className="pricing-jump-links" aria-label="Navigasi paket harga">
            <a href="#sewa-aplikasi">Sewa aplikasi</a><a href="#paket-lengkap">Paket lengkap</a><a href="#support">Support teknisi</a><a href="#vps">VPS</a>
          </nav>
        </div>
      </section>

      <section className="pricing-section" id="sewa-aplikasi">
        <div className="container">
          <div className="section-heading pricing-section-heading"><div><Eyebrow>01 / LISENSI APLIKASI</Eyebrow><h2>Sewa aplikasi building management.</h2></div><p>Pilih berdasarkan jumlah gedung. Harga 5 dan 10 gedung di bawah adalah total bulanan untuk seluruh gedung pada tier tersebut, bukan harga per gedung.</p></div>
          <div className="pricing-grid">
            {applicationPlans.map((plan) => (
              <article className={`pricing-card${"featured" in plan && plan.featured ? " pricing-card-featured" : ""}`} key={plan.id}>
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
                <Link className="button button-dark pricing-cta" href={`/demo?paket=${plan.id}`}>Diskusikan {plan.name}<span>↗</span></Link>
              </article>
            ))}
          </div>
          <p className="pricing-term">Masa berlangganan aplikasi minimum 12 bulan. Batas jumlah unit, akun, penyimpanan, support aplikasi, dan kebutuhan integrasi ditentukan setelah asesmen.</p>
        </div>
      </section>

      <section className="pricing-section pricing-bundles" id="paket-lengkap">
        <div className="container">
          <div className="section-heading pricing-section-heading"><div><Eyebrow>02 / LAYANAN & PAKET LENGKAP</Eyebrow><h2>Aplikasi + VPS + support.</h2></div><p>Gabungkan sewa aplikasi, server, dan kunjungan teknisi. Harga paket dihitung dari tarif komponen estimasi di halaman ini.</p></div>
          <div className="pricing-grid">
            {bundlePlans.map((plan) => (
              <article className={`pricing-card${"featured" in plan && plan.featured ? " pricing-card-featured" : ""}`} key={plan.id}>
                {"featured" in plan && plan.featured ? <span className="pricing-recommended">PILIHAN PAKET</span> : null}
                <div className="pricing-card-heading"><h3>Paket {plan.name}</h3><p>{plan.summary}</p></div>
                <p className="pricing-price">{plan.price}<span> / bulan</span></p>
                <p className="pricing-capacity">{plan.capacity}</p>
                <p className="pricing-server">{plan.server}</p>
                <ul>{plan.features.map((feature) => <li key={feature}><span aria-hidden="true">✓</span>{feature}</li>)}</ul>
                <Link className="button button-dark pricing-cta" href={`/demo?paket=${plan.id}`}>Pilih Paket {plan.name}<span>↗</span></Link>
              </article>
            ))}
          </div>
          <p className="pricing-term">Paket lengkap memiliki masa berlangganan minimum 12 bulan. Nilai paket Growth dan Scale menggunakan harga total tier aplikasi hingga 5/10 gedung ditambah VPS dan support teknisi; konfigurasi final perlu divalidasi.</p>
        </div>
      </section>

      <section className="pricing-section pricing-addon-section" id="support">
        <div className="container">
          <div className="section-heading pricing-section-heading"><div><Eyebrow>03 / SUPPORT TEKNISI</Eyebrow><h2>Pilih intensitas kunjungan.</h2></div><p>Support teknisi onsite untuk membantu kebutuhan operasional gedung. Setiap kunjungan berlangsung hingga 4 jam.</p></div>
          <div className="pricing-grid pricing-grid-four">
            {supportPlans.map((plan) => (
              <article className={`pricing-card${"featured" in plan && plan.featured ? " pricing-card-featured" : ""}`} key={plan.id}>
                {"featured" in plan && plan.featured ? <span className="pricing-recommended">FAVORIT</span> : null}
                <div className="pricing-card-heading"><h3>{plan.name}</h3><p>{plan.visits}</p></div>
                <p className="pricing-price">{plan.price}<span>{plan.id === "support-single" ? " / kunjungan" : " / bulan"}</span></p>
                <p className="pricing-capacity">{plan.term}</p>
                <ul><li><span aria-hidden="true">✓</span>Kunjungan teknisi hingga 4 jam</li><li><span aria-hidden="true">✓</span>Jadwal disepakati sebelumnya</li><li><span aria-hidden="true">✓</span>Area layanan Jakarta</li></ul>
                <Link className="button button-dark pricing-cta" href={`/demo?paket=${plan.id}`}>Tanyakan {plan.name}<span>↗</span></Link>
              </article>
            ))}
          </div>
          <p className="pricing-term">Paket bulanan support berlangganan minimum 3 bulan. Kunjungan lepas dibayar per kedatangan. Area di luar Jakarta dan kebutuhan di luar lingkup kunjungan dikutip terpisah.</p>
        </div>
      </section>

      <section className="pricing-section pricing-vps-section" id="vps">
        <div className="container">
          <div className="section-heading pricing-section-heading"><div><Eyebrow>04 / VPS TERPISAH</Eyebrow><h2>Sewa VPS sesuai kebutuhan.</h2></div><p>Server dapat disewa terpisah dengan kontrak minimum 12 bulan. Pemilihan resource akhir menunggu pemeriksaan beban aplikasi.</p></div>
          <div className="pricing-grid">
            {serverPlans.map((plan) => (
              <article className={`pricing-card${"featured" in plan && plan.featured ? " pricing-card-featured" : ""}`} key={plan.id}>
                {"featured" in plan && plan.featured ? <span className="pricing-recommended">PILIHAN VPS</span> : null}
                <div className="pricing-card-heading"><h3>{plan.name}</h3><p>{plan.description}</p></div>
                <p className="pricing-price">{plan.price}<span> / bulan</span></p>
                <p className="pricing-capacity">{plan.memory}</p>
                <ul><li><span aria-hidden="true">✓</span>SSD 100 GB</li><li><span aria-hidden="true">✓</span>Bantuan setup awal</li><li><span aria-hidden="true">✓</span>Konfigurasi SSL (domain tidak termasuk)</li></ul>
                <Link className="button button-dark pricing-cta" href={`/demo?paket=${plan.id}`}>Tanyakan {plan.name}<span>↗</span></Link>
              </article>
            ))}
          </div>
          <p className="pricing-term">Estimasi VPS tidak mencakup domain. Jenis CPU/vCPU, lokasi data center, backup, monitoring, pajak, biaya provider, dan kebijakan pemulihan dikonfirmasi sebelum pemesanan.</p>
        </div>
      </section>

      <section className="pricing-terms">
        <div className="container pricing-terms-inner">
          <Eyebrow>CATATAN PENTING</Eyebrow>
          <h2>Ruang lingkup jelas<br />sebelum mulai.</h2>
          <div className="pricing-terms-grid">
            <article><h3>Jam layanan</h3><p>Usulan jam layanan support: Senin–Jumat, 09.00–17.00 WIB, kecuali hari libur nasional. Jam dan kanal final disepakati tertulis. Permintaan di luar jam layanan ditangani pada jam layanan berikutnya.</p></article>
            <article><h3>Kunjungan teknisi</h3><p>Setiap kunjungan onsite maksimal 4 jam dan dijadwalkan bersama. Cakupan area Jakarta disepakati saat pemesanan; transportasi atau perjalanan di luar area tersebut dapat dikenakan biaya tambahan.</p></article>
            <article><h3>Kontrak & cakupan</h3><p>Sewa aplikasi dan VPS minimum 12 bulan; paket support bulanan minimum 3 bulan. Jumlah unit/pengguna, kapasitas database, penggunaan resource, penyimpanan, backup, serta fitur dan integrasi tambahan dikonfirmasi setelah asesmen.</p></article>
            <article><h3>Bukan SLA uptime</h3><p>Harga ini bukan jaminan uptime, target waktu penyelesaian, atau jaminan ketersediaan. Pajak, domain, komponen pihak ketiga, biaya provider, serta termin pembayaran dikonfirmasi sebelum kontrak.</p></article>
          </div>
          <p className="pricing-disclaimer">Seluruh harga adalah estimasi awal sesuai rancangan paket, belum divalidasi sebagai tarif pasar atau penawaran final, dan dapat berubah setelah pemeriksaan kebutuhan serta biaya operasional.</p>
          <Link className="button button-dark" href="/demo?paket=custom">Diskusikan konfigurasi paket <span>↗</span></Link>
        </div>
      </section>
    </>
  );
}
