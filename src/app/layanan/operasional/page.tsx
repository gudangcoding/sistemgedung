import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/eyebrow";

export const metadata: Metadata = {
  title: "Dukungan Operasional Gedung",
  description: "Diskusikan dukungan proses operasional, layanan tenant, pemeliharaan, dan koordinasi tim gedung.",
  alternates: { canonical: "/layanan/operasional" },
};

export default function OperationsServicePage() {
  return <section className="inner-hero"><div className="container"><Eyebrow>DUKUNGAN OPERASIONAL</Eyebrow><h1>Proses layanan yang jelas<br /><span>untuk setiap kebutuhan.</span></h1><p className="inner-lead">Bicarakan cara menata layanan penghuni, koordinasi pekerjaan, pemeriksaan rutin, dan pencatatan aset sesuai konteks gedung Anda.</p><Link className="button button-dark" href="/demo">Mulai percakapan <span>↗</span></Link><div className="inner-feature-grid">{[["Layanan tenant", "Petakan penerimaan keluhan dan pembaruan informasi kepada penghuni."], ["Koordinasi pekerjaan", "Susun mekanisme prioritas, penugasan, eskalasi, dan tindak lanjut."], ["Rutinitas pemeliharaan", "Rencanakan inspeksi dan pencatatan hasil kerja secara konsisten."]].map(([title, text], i) => <article key={title}><span>0{i + 1}</span><h2>{title}</h2><p>{text}</p></article>)}</div></div></section>;
}
