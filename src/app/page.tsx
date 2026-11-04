import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { DemoForm } from "@/components/demo-form";
import { Eyebrow } from "@/components/eyebrow";
import berita from "@/content/berita.json";
import { bundlePlans } from "@/content/pricing";
import { appImages, beritaImage } from "@/lib/media";
import { demoAppUrl, faqJsonLd, playStoreLinks, serializeJsonLd, siteDescription } from "@/lib/site";

export const metadata: Metadata = {
  title: "Software Building Management Indonesia",
  description: siteDescription,
  alternates: { canonical: "/" },
};

const capabilities = [
  { n: "01", title: "Keluhan & work order", text: "Catat kebutuhan, tentukan prioritas, lalu ikuti progres penanganannya." },
  { n: "02", title: "Aset & pemeliharaan", text: "Susun informasi aset dan jadwal preventive maintenance dalam satu alur." },
  { n: "03", title: "Komunikasi penghuni", text: "Sampaikan pengumuman dan permintaan layanan dengan konteks yang jelas." },
];

const proofStats = [
  { value: "Live", label: "Aplikasi siap dicoba", detail: "Demo building management dapat dibuka sekarang." },
  { value: "20x", label: "Kunjungan teknisi/bulan", detail: "Paket support tertinggi untuk kebutuhan onsite." },
  { value: "4 jam", label: "Durasi tiap kunjungan", detail: "Instalasi, training, dan troubleshooting." },
  { value: "100%", label: "White-label", detail: "Logo, warna, nama, dan domain sendiri." },
];

const featuredServices = [
  {
    icon: "↗",
    title: "Aplikasi Building Management",
    text: "Kelola tenant, unit, tagihan IPL, keluhan, aset, dan work order dalam satu dashboard operasional.",
    points: ["Data penghuni & unit", "Tagihan IPL otomatis", "Work order & laporan"],
    href: "/layanan/software",
    cta: "Pelajari layanan",
  },
  {
    icon: "◎",
    title: "Portal Tenant",
    text: "Beri penghuni ruang mandiri untuk mengirim keluhan, memantau status, dan melihat informasi gedung.",
    points: ["Permintaan layanan", "Riwayat penanganan", "Pengumuman gedung"],
    href: "/portal/tenant",
    cta: "Lihat portal tenant",
  },
  {
    icon: "⌘",
    title: "Portal Admin & Engineering",
    text: "Satu ruang kerja untuk admin dan teknisi meninjau tiket, aset, jadwal, dan pekerjaan lapangan.",
    points: ["Tiket & prioritas", "Jadwal pemeliharaan", "Catatan pekerjaan"],
    href: "/portal/admin",
    cta: "Lihat portal admin",
  },
  {
    icon: "◇",
    title: "Aplikasi Custom",
    text: "Butuh alur di luar standar? Bangun modul POS, inventory, ERP, absensi, atau integrasi khusus.",
    points: ["Modul sesuai proses", "Integrasi API", "Pengembangan bertahap"],
    href: "/demo?paket=custom",
    cta: "Diskusikan kebutuhan",
  },
  {
    icon: "✳",
    title: "White-Label & Rebrand",
    text: "Tampilkan aplikasi dengan logo, warna, nama, dan domain perusahaan Anda sendiri.",
    points: ["Identitas brand sendiri", "Domain perusahaan", "Pengalaman milik Anda"],
    href: "/demo?paket=custom",
    cta: "Diskusikan white-label",
  },
  {
    icon: "＋",
    title: "Support & Kunjungan Teknisi",
    text: "Bantuan remote harian serta kunjungan onsite untuk instalasi, training, dan troubleshooting.",
    points: ["Kunjungan 4 jam", "Paket s/d 20x/bulan", "Bantuan remote harian"],
    href: "/harga#support",
    cta: "Lihat paket support",
  },
];

const goLiveSteps = [
  { n: "01", title: "Demo & Survei Gratis", text: "Coba 3 aplikasi live + kami petakan kebutuhan: jumlah user, cabang, dan alur kerja Anda." },
  { n: "02", title: "Setup & White-Label", text: "Aplikasi disiapkan + dipasang brand Anda: logo, warna, nama, dan domain sendiri bila perlu." },
  { n: "03", title: "Migrasi Data", text: "Data lama (Excel / sistem lama) kami pindahkan: pelanggan, unit, tarif, dan histori transaksi." },
  { n: "04", title: "Training Pengguna", text: "Admin, kasir, kurir, dan pengelola dilatih sampai bisa — onsite maupun daring." },
  { n: "05", title: "Go-Live Didampingi", text: "Peluncuran didampingi teknisi sampai operasional hari pertama berjalan mulus." },
  { n: "06", title: "Support & Kunjungan", text: "Bantuan remote tiap hari + kunjungan teknisi terjadwal: lepas Rp500.000 atau paket s/d 20x/bulan." },
];

const techGroups = [
  { title: "Aplikasi Web", items: ["Next.js & React", "TypeScript", "Responsif & PWA-ready", "Multi-role UI"] },
  { title: "Backend & Data", items: ["REST API & webhook", "PostgreSQL / MySQL", "Backup & monitoring", "Kontrol akses berbasis peran"] },
  { title: "Integrasi", items: ["WhatsApp gateway", "QRIS & transfer bank", "Payment & maps API", "Notifikasi realtime"] },
  { title: "Infrastruktur", items: ["Cloud hosting / VPS", "SSL & domain", "Deploy terkelola", "Update berkala"] },
];

const liveDemos = [
  { tag: "LIVE DEMO", title: "Building Management", text: "Kelola tenant, tagihan IPL, keluhan, aset, dan work order.", href: demoAppUrl, action: "Buka demo live", external: true },
  { tag: "DEMO PORTAL", title: "Portal Tenant", text: "Lihat pengalaman penghuni mengirim keluhan dan memantau status.", href: "/portal/tenant", action: "Buka portal tenant" },
  { tag: "DEMO PORTAL", title: "Portal Admin", text: "Tinjau tiket, tenant, aset, vendor, dan ringkasan operasional.", href: "/portal/admin", action: "Buka portal admin" },
  { tag: "CUSTOM", title: "Aplikasi Custom", text: "POS, inventory, ERP, absensi, dan integrasi sesuai alur kerja.", href: "/demo?paket=custom", action: "Diskusikan kebutuhan" },
  { tag: "WHITE-LABEL", title: "Rebrand Jadi Milik Anda", text: "Logo, warna, nama aplikasi, dan domain perusahaan sendiri.", href: "/demo?paket=custom", action: "Diskusikan white-label" },
  { tag: "SUPPORT", title: "Teknisi Onsite", text: "Instalasi, training, dan troubleshooting hingga 20x per bulan.", href: "/harga#support", action: "Lihat paket support" },
];

const mobileApps = [
  {
    label: "SUPPORT ENGINEERING",
    title: "CRA Support",
    text: "Aplikasi support maintenance untuk tim engineering menangani work order, aset, jadwal pemeliharaan, dan laporan dari lapangan.",
    image: appImages.support,
    alt: "Pratinjau aplikasi CRA Support untuk tim maintenance gedung",
    href: playStoreLinks.support,
    points: ["Work order & jadwal", "Aset & preventive maintenance", "Laporan dari lapangan"],
  },
  {
    label: "PORTAL PENGHUNI",
    title: "Tenant App",
    text: "Aplikasi untuk penghuni mengirim permintaan, memantau status, melihat tagihan, dan menerima informasi gedung.",
    image: appImages.tenant,
    alt: "Pratinjau aplikasi Tenant App untuk penghuni apartemen",
    href: playStoreLinks.tenant,
    points: ["Permintaan & keluhan", "Tagihan IPL", "Pengumuman gedung"],
  },
];

const supportTypes = [
  { n: "01", title: "Migrasi Data", text: "Pindahkan data dari sistem lama, Excel, CSV, atau Google Sheets tanpa input ulang.", points: ["Pemetaan & pembersihan data", "Verifikasi setelah migrasi", "Pendampingan awal"] },
  { n: "02", title: "Training Pengguna", text: "Latih admin, pengelola, dan tim operasional sampai paham alur aplikasi.", points: ["Sesi online atau onsite", "Panduan penggunaan", "Rekaman sesi bila diperlukan"] },
  { n: "03", title: "Custom Module", text: "Tambahkan modul yang belum tersedia agar aplikasi mengikuti proses bisnis Anda.", points: ["Modul baru terintegrasi", "Estimasi & jadwal jelas", "Pengembangan bertahap"] },
];

const testimonials = [
  { quote: "Keluhan dan work order jadi lebih mudah dilacak, sehingga tindak lanjut tidak bergantung pada pesan chat yang tercecer.", role: "Pengelola apartemen", note: "Ilustrasi skenario" },
  { quote: "Penghuni bisa melihat status permintaan sendiri, jadi tim layanan tidak perlu menjawab pertanyaan yang sama berulang kali.", role: "Tim layanan tenant", note: "Ilustrasi skenario" },
  { quote: "Jadwal pemeliharaan dan data aset lebih rapi untuk pemeriksaan internal maupun serah terima pekerjaan.", role: "Tim engineering", note: "Ilustrasi skenario" },
];

const faqs = [
  {
    question: "Apa itu aplikasi building management?",
    answer: "Aplikasi building management membantu pengelola gedung dan apartemen menangani data tenant, unit, tagihan IPL, keluhan, aset, jadwal pemeliharaan, dan work order dalam satu sistem yang terhubung.",
  },
  {
    question: "Apakah aplikasinya sudah live dan bisa dicoba?",
    answer: "Ya. Demo building management dapat dibuka melalui tautan demo aplikasi. Anda juga dapat mencoba tampilan portal tenant dan admin untuk melihat alur kerja sebelum membahas kebutuhan lebih lanjut.",
  },
  {
    question: "Berapa biaya sewa dan apa saja yang termasuk?",
    answer: "Sewa aplikasi building management mulai dari Rp2.000.000 per bulan untuk satu gedung, dengan masa berlangganan minimum 12 bulan. VPS, domain, dan support teknisi dapat ditambahkan sesuai kebutuhan. Rincian paket tersedia di halaman harga.",
  },
  {
    question: "Apakah bisa white-label dengan brand perusahaan sendiri?",
    answer: "Bisa. Identitas aplikasi dapat disesuaikan dengan logo, warna, nama aplikasi, dan domain perusahaan Anda. Ruang lingkup white-label dibahas bersama sebelum implementasi.",
  },
  {
    question: "Bagaimana proses migrasi data dan training pengguna?",
    answer: "Data lama dari Excel, CSV, Google Sheets, atau sistem sebelumnya dipetakan, dibersihkan, lalu diverifikasi. Setelah itu admin dan tim operasional dilatih secara online maupun onsite sampai siap menggunakan aplikasi.",
  },
  {
    question: "Apakah support teknisi tersedia di luar Jakarta?",
    answer: "Kunjungan teknisi dijadwalkan berdasarkan lokasi dan lingkup layanan. Area Jakarta dan sekitarnya menjadi cakupan awal; kebutuhan di luar area tersebut dikutip terpisah setelah pemeriksaan kebutuhan.",
  },
];

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(faqJsonLd(faqs)) }} />

      <section className="hero">
        <div className="hero-orb orb-one" /><div className="hero-orb orb-two" />
        <div className="container hero-layout">
          <div className="hero-copy">
            <Eyebrow>BUILDING MANAGEMENT, MADE CLEAR</Eyebrow>
            <h1>Gedung terkelola.<br /><span>Hari lebih tertata.</span></h1>
            <p className="hero-lead">Sistem untuk membantu pengelola apartemen dan gedung perkantoran menghubungkan tenant, tim operasional, dan pemeliharaan. Aplikasi sudah live dan bisa dicoba sebelum Anda memutuskan.</p>
            <div className="hero-actions"><Link className="button button-lime" href="/demo">Diskusikan kebutuhan <span>↗</span></Link><Link className="text-link light-link" href="/layanan/software">Kenali layanan <span>→</span></Link><a className="text-link light-link" href={demoAppUrl} target="_blank" rel="noopener noreferrer">Demo aplikasi <span>↗</span></a></div>
            <div className="hero-proof"><span className="proof-icon">✳</span><span>Aplikasi live &amp; white-label<br /><b>setup, migrasi data, training, support teknisi</b></span></div>
          </div>
          <div className="hero-visual" aria-label="Ilustrasi dashboard pengelolaan gedung">
            <div className="visual-glow" />
            <div className="dashboard-card">
              <div className="dash-top"><div><span className="small-label">OVERVIEW</span><h3>Ringkasan operasional</h3></div><span className="dash-menu">•••</span></div>
              <div className="dash-date">Data contoh · Tampilan konsep</div>
              <div className="metric-row"><div className="metric"><span>Tiket aktif</span><b>12</b><i>Perlu ditinjau</i></div><div className="metric"><span>Jadwal hari ini</span><b>08</b><i>Inspeksi &amp; perawatan</i></div></div>
              <div className="chart-box"><div className="chart-heading"><b>Aktivitas pekerjaan</b><span>Ilustrasi</span></div><div className="chart"><span style={{ height: "36%" }} /><span style={{ height: "56%" }} /><span style={{ height: "43%" }} /><span style={{ height: "74%" }} /><span style={{ height: "54%" }} /><span style={{ height: "88%" }} /><span style={{ height: "67%" }} /><span style={{ height: "94%" }} /></div><div className="chart-labels"><span>Sen</span><span>Rab</span><span>Jum</span><span>Min</span></div></div>
              <div className="ticket-line"><span className="status-dot" /><span>Periksa pompa air</span><span className="ticket-status">Terjadwal</span></div>
            </div>
            <div className="visual-note"><span className="note-icon">↗</span><span><b>Alur lebih terlihat</b><small>Ilustrasi antarmuka</small></span></div>
            <div className="visual-side">BUILDING<br />OPERATIONS</div>
          </div>
        </div>
        <div className="container hero-bottom"><span>DIRANCANG UNTUK OPERASIONAL GEDUNG</span><div><span>Apartemen</span><i /> <span>Perkantoran</span><i /> <span>Tim engineering</span></div></div>
      </section>

      <div className="trust-strip">
        <div className="container trust-strip-inner">
          <span><b>Live</b> &amp; siap demo</span>
          <span><b>White-label</b> brand sendiri</span>
          <span><b>Migrasi data</b> dibantu</span>
          <span><b>Training</b> sampai bisa</span>
          <span><b>Support</b> remote &amp; onsite</span>
        </div>
      </div>

      <section className="section intro-section" id="tentang">
        <div className="container intro-grid"><div><Eyebrow>LEBIH TERHUBUNG</Eyebrow><h2>Semua kebutuhan gedung,<br /><span>dalam satu alur kerja.</span></h2></div><div className="intro-copy"><p>Informasi penghuni, keluhan, aset, dan pekerjaan teknisi sering berjalan di tempat berbeda. SistemGedung membantu merancang pengalaman digital dan proses operasional yang saling terhubung.</p><Link className="text-link" href="/solusi">Lihat solusi untuk gedung <span>→</span></Link></div></div>
      </section>

      <section className="section capability-section" id="keunggulan">
        <div className="container"><div className="section-heading"><div><Eyebrow>PLATFORM &amp; LAYANAN</Eyebrow><h2>Mulai dari kebutuhan<br />operasional Anda.</h2></div><p>Ruang lingkup dapat dibahas dan disesuaikan dengan proses pengelolaan properti.</p></div>
          <div className="capability-grid">{capabilities.map((item) => <article className="capability-card" key={item.n}><div className="cap-icon">{item.n === "01" ? "↗" : item.n === "02" ? "⌘" : "◎"}</div><span className="card-number">{item.n} / 03</span><h3>{item.title}</h3><p>{item.text}</p><Link href="/layanan/software" aria-label={`Pelajari ${item.title}`}>↗</Link></article>)}</div>
          <div className="proof-stats">{proofStats.map((stat) => <div key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span><p>{stat.detail}</p></div>)}</div>
        </div>
      </section>

      <section className="section services-showcase" id="layanan">
        <div className="container">
          <div className="section-heading"><div><Eyebrow>LAYANAN UNGGULAN</Eyebrow><h2>Aplikasi siap pakai,<br /><span>bisa juga custom.</span></h2></div><p>Pilih modul yang paling dekat dengan kebutuhan Anda. Semua dapat dibahas, disesuaikan, dan diimplementasikan bertahap.</p></div>
          <div className="service-showcase-grid">
            {featuredServices.map((service) => (
              <article className="service-showcase-card" key={service.title}>
                <div className="service-showcase-head"><span className="service-showcase-icon">{service.icon}</span><span>{service.cta}</span></div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <ul>{service.points.map((point) => <li key={point}><span aria-hidden="true">✓</span>{point}</li>)}</ul>
                <Link href={service.href}>{service.cta} <span>↗</span></Link>
              </article>
            ))}
          </div>
          <div className="services-editorial">
            <div><Eyebrow>KENAPA APLIKASI LIVE</Eyebrow><h3>Bangun dari nol butuh waktu. Mulai dari yang sudah berjalan lebih cepat.</h3></div>
            <p>Membangun aplikasi operasional dari nol bisa memakan waktu berbulan-bulan dan biaya besar. Dengan aplikasi yang sudah live, Anda dapat mencoba alur kerja lebih awal, memetakan kebutuhan nyata, lalu menyesuaikan modul, brand, dan integrasi sesuai prioritas operasional.</p>
          </div>
        </div>
      </section>

      <section className="section tech-section" id="teknologi">
        <div className="container">
          <div className="section-heading"><div><Eyebrow>TEKNOLOGI MODERN</Eyebrow><h2>Dibangun dengan stack<br /><span>yang siap berkembang.</span></h2></div><p>Cepat, aman, dan dapat dibuka dari HP maupun laptop untuk tim lapangan, admin, dan pengelola.</p></div>
          <div className="tech-grid">
            {techGroups.map((group) => (
              <article className="tech-card" key={group.title}>
                <span>{group.title}</span>
                <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section go-live-section" id="proses">
        <div className="container">
          <div className="section-heading go-live-heading">
            <div><Eyebrow>PROSES IMPLEMENTASI</Eyebrow><h2>Dari Demo ke Go-Live<br /><span>dalam Hitungan Hari</span></h2></div>
            <p>Karena aplikasinya sudah jadi dan live, Anda tidak menunggu development berbulan-bulan.</p>
          </div>
          <div className="go-live-grid">
            {goLiveSteps.map((step) => (
              <article className="go-live-step" key={step.n}>
                <span>{step.n}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
          <div className="go-live-actions">
            <a className="button button-dark" href={demoAppUrl} target="_blank" rel="noopener noreferrer">Coba demo aplikasi <span>↗</span></a>
            <Link className="text-link" href="/demo">Jadwalkan survei gratis <span>→</span></Link>
          </div>
        </div>
      </section>

      <section className="section live-demo-section" id="demo">
        <div className="container">
          <div className="section-heading"><div><Eyebrow>BUKAN JANJI, BUKTIKAN</Eyebrow><h2>Klik &amp; coba<br /><span>demo aplikasinya.</span></h2></div><p>Buka demo live atau telusuri tampilan portal untuk melihat alur kerja sebelum memulai implementasi.</p></div>
          <div className="live-demo-grid">
            {liveDemos.map((demo) => (
              <article className="live-demo-card" key={demo.title}>
                <span className="live-demo-tag">{demo.tag}</span>
                <h3>{demo.title}</h3>
                <p>{demo.text}</p>
                {demo.external ? (
                  <a href={demo.href} target="_blank" rel="noopener noreferrer">{demo.action} <span>↗</span></a>
                ) : (
                  <Link href={demo.href}>{demo.action} <span>↗</span></Link>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section app-download-section" id="aplikasi">
        <div className="container">
          <div className="section-heading"><div><Eyebrow>APLIKASI ANDROID</Eyebrow><h2>Download aplikasi<br /><span>support &amp; tenant.</span></h2></div><p>Kedua aplikasi masih dalam pengujian tertutup. Daftarkan email Anda terlebih dahulu agar bisa mengunduh dan mencoba lewat Google Play.</p></div>
          <div className="app-download-grid">
            {mobileApps.map((app) => (
              <article className="app-download-card" key={app.title}>
                <div className="app-download-media"><Image src={app.image} alt={app.alt} width={1200} height={760} sizes="(max-width: 760px) 100vw, 50vw" /></div>
                <div className="app-download-body">
                  <span className="app-download-label">{app.label}</span>
                  <h3>{app.title}</h3>
                  <p>{app.text}</p>
                  <ul>{app.points.map((point) => <li key={point}><span aria-hidden="true">✓</span>{point}</li>)}</ul>
                  <a className="button button-dark" href={app.href} target="_blank" rel="noopener noreferrer">Buka di Google Play <span>↗</span></a>
                  <p className="app-download-note">Closed testing — email tester wajib terdaftar sebelum mengunduh.</p>
                </div>
              </article>
            ))}
          </div>
          <div className="app-download-help"><p><strong>Belum terdaftar sebagai tester?</strong> Isi email pada formulir uji coba. Setelah email ditambahkan, unduh aplikasi melalui tombol Google Play di atas.</p><Link href="/demo">Daftarkan email uji coba <span>→</span></Link></div>
        </div>
      </section>

      <section className="section home-pricing" id="harga">
        <div className="container">
          <div className="section-heading"><div><Eyebrow>HARGA TRANSPARAN</Eyebrow><h2>Paket lengkap<br /><span>aplikasi + VPS + support.</span></h2></div><Link className="text-link" href="/harga">Lihat semua paket <span>→</span></Link></div>
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
          <p className="pricing-term">Masa berlangganan minimum 12 bulan. Domain, pajak, dan kebutuhan integrasi dikonfirmasi setelah asesmen.</p>
        </div>
      </section>

      <section className="section support-types-section">
        <div className="container">
          <div className="section-heading"><div><Eyebrow>JENIS SUPPORT</Eyebrow><h2>Dukungan sesuai<br /><span>kebutuhan bisnis.</span></h2></div><p>Bukan hanya datang saat error. Kami bantu dari pindah data, melatih tim, sampai menambah modul baru.</p></div>
          <div className="support-types-grid">
            {supportTypes.map((support) => (
              <article className="support-type-card" key={support.n}>
                <span>{support.n}</span>
                <h3>{support.title}</h3>
                <p>{support.text}</p>
                <ul>{support.points.map((point) => <li key={point}>{point}</li>)}</ul>
                <Link href="/demo">Diskusikan kebutuhan <span>↗</span></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section testimonial-section">
        <div className="container">
          <div className="section-heading"><div><Eyebrow>SKENARIO PENGGUNAAN</Eyebrow><h2>Apa yang biasanya<br /><span>jadi prioritas pengelola.</span></h2></div><p>Ilustrasi manfaat berdasarkan kebutuhan umum pengelolaan gedung, bukan klaim pelanggan.</p></div>
          <div className="testimonial-grid">
            {testimonials.map((item) => (
              <article className="testimonial-card" key={item.role}>
                <p>&ldquo;{item.quote}&rdquo;</p>
                <div><b>{item.role}</b><span>{item.note}</span></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section insight-section home-news-section"><div className="container"><div className="section-heading"><div><Eyebrow>BERITA TERBARU</Eyebrow><h2>Panduan praktis untuk<br />operasional gedung.</h2></div><Link className="text-link" href="/berita">Lihat semua berita <span>→</span></Link></div><div className="home-news-grid">{berita.slice(0, 3).map((item, index) => <Link className="home-news-card" href={`/berita/${item.slug}`} key={item.slug}><div className="home-news-thumb"><Image src={beritaImage(item.slug)} alt={`Ilustrasi ${item.category}: ${item.title}`} fill sizes="(max-width: 760px) 100vw, (max-width: 980px) 50vw, 33vw" /><span>0{index + 1}</span></div><div><span className="article-tag">{item.category}</span><h3>{item.title}</h3><p>{item.excerpt}</p><small>{item.readTime} baca <b>↗</b></small></div></Link>)}</div></div></section>

      <section className="section faq-section" id="faq">
        <div className="container faq-layout">
          <div><Eyebrow>FAQ</Eyebrow><h2>Sering ditanyakan<br /><span>soal aplikasi gedung.</span></h2><p>Belum menemukan jawaban? Diskusikan kebutuhan Anda melalui formulir demo atau WhatsApp.</p><Link className="text-link" href="/demo">Ajukan pertanyaan <span>→</span></Link></div>
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

      <section className="section final-cta-section" id="kontak">
        <div className="container final-cta-layout">
          <div>
            <Eyebrow>DEMO 100% GRATIS</Eyebrow>
            <h2>Coba demonya dulu,<br /><span>bayar kalau cocok.</span></h2>
            <p>Masih ragu? Buka demo live, lihat portal tenant dan admin, atau ceritakan kebutuhan Anda. Kami bantu memetakan langkah paling masuk akal.</p>
            <ul className="final-cta-points"><li>Demo live tanpa daftar</li><li>Setup, migrasi, dan training dibantu</li><li>Teknisi bisa datang ke lokasi</li></ul>
            <div className="go-live-actions"><a className="button button-dark" href={demoAppUrl} target="_blank" rel="noopener noreferrer">Buka demo aplikasi <span>↗</span></a><Link className="text-link" href="/portal">Lihat portal demo <span>→</span></Link></div>
          </div>
          <DemoForm />
        </div>
      </section>
    </>
  );
}
