import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "@/components/eyebrow";
import { solutionImages } from "@/lib/media";

export const metadata: Metadata = {
  title: "Aplikasi Pengelolaan Gedung Perkantoran",
  description: "Pendekatan manajemen gedung perkantoran untuk layanan tenant, pekerjaan engineering, dan pemeliharaan aset.",
  alternates: { canonical: "/solusi/perkantoran" },
  openGraph: {
    title: "Aplikasi Pengelolaan Gedung Perkantoran",
    description: "Pendekatan manajemen gedung perkantoran untuk layanan tenant, pekerjaan engineering, dan pemeliharaan aset.",
    url: "/solusi/perkantoran",
    images: [{ url: solutionImages.perkantoran, width: 1200, height: 630, alt: "Solusi pengelolaan gedung perkantoran SistemGedung" }],
  },
};

export default function OfficePage() {
  return (
    <section className="inner-hero">
      <div className="container">
        <Eyebrow>SOLUSI GEDUNG PERKANTORAN</Eyebrow>
        <h1>Operasional yang lebih<br /><span>siap dikoordinasikan.</span></h1>
        <p className="inner-lead">Bantu tim gedung menghubungkan kebutuhan tenant, aset, jadwal pemeliharaan, dan pekerjaan teknisi dalam proses yang terstruktur.</p>
        <div className="page-visual">
          <Image
            src={solutionImages.perkantoran}
            alt="Ilustrasi koordinasi work order dan pemeliharaan gedung perkantoran"
            width={1200}
            height={630}
            sizes="(max-width: 1180px) 100vw, 1180px"
          />
        </div>
        <div className="solution-detail">
          <div><b>01</b><h2>Permintaan layanan tenant</h2><p>Tangkap laporan dengan kategori, prioritas, dan konteks yang dibutuhkan.</p></div>
          <div><b>02</b><h2>Work order teknisi</h2><p>Atur penugasan, catatan pekerjaan, inspeksi, dan eskalasi.</p></div>
          <div><b>03</b><h2>Data aset & jadwal</h2><p>Rencanakan preventive maintenance dan dokumentasikan aktivitas aset.</p></div>
        </div>
        <Link className="button button-dark" href="/demo">Diskusikan kebutuhan gedung ↗</Link>
      </div>
    </section>
  );
}
