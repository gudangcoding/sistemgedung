import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "@/components/eyebrow";
import { serviceImages } from "@/lib/media";

export const metadata: Metadata = {
  title: "Dukungan Operasional Gedung",
  description: "Diskusikan dukungan proses operasional, layanan tenant, pemeliharaan, dan koordinasi tim gedung.",
  alternates: { canonical: "/layanan/operasional" },
  openGraph: {
    title: "Dukungan Operasional Gedung",
    description: "Diskusikan dukungan proses operasional, layanan tenant, pemeliharaan, dan koordinasi tim gedung.",
    url: "/layanan/operasional",
    images: [{ url: serviceImages.operasional, width: 1600, height: 893, alt: "BMS Support untuk tim engineering, housekeeping, dan security" }],
  },
};

export default function OperationsServicePage() {
  return (
    <section className="inner-hero">
      <div className="container">
        <Eyebrow>DUKUNGAN OPERASIONAL</Eyebrow>
        <h1>Proses layanan yang jelas<br /><span>untuk setiap kebutuhan.</span></h1>
        <p className="inner-lead">Bicarakan cara menata layanan penghuni, koordinasi pekerjaan, pemeriksaan rutin, dan pencatatan aset sesuai konteks gedung Anda.</p>
        <div className="page-visual">
          <Image
            src={serviceImages.operasional}
            alt="Tampilan BMS Support untuk tim engineering, housekeeping, dan security di tablet maupun mobile"
            width={1600}
            height={893}
            sizes="(max-width: 1180px) 100vw, 1180px"
          />
        </div>
        <Link className="button button-dark" href="/demo">Mulai percakapan <span>↗</span></Link>
        <div className="inner-feature-grid">
          {[["Layanan tenant", "Petakan penerimaan keluhan dan pembaruan informasi kepada penghuni."], ["Koordinasi pekerjaan", "Susun mekanisme prioritas, penugasan, eskalasi, dan tindak lanjut."], ["Rutinitas pemeliharaan", "Rencanakan inspeksi dan pencatatan hasil kerja secara konsisten."]].map(([title, text], i) => (
            <article key={title}><span>0{i + 1}</span><h2>{title}</h2><p>{text}</p></article>
          ))}
        </div>
      </div>
    </section>
  );
}
