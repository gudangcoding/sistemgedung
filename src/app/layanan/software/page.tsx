import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/eyebrow";

export const metadata: Metadata = {
  title: "Jasa Pembuatan Aplikasi Building Management",
  description: "Jasa pengembangan aplikasi building management custom untuk pengelola apartemen dan gedung perkantoran, mencakup tenant, work order, aset, dan maintenance.",
  alternates: { canonical: "/layanan/software" },
};

export default function SoftwareServicePage() {
  return <section className="inner-hero"><div className="container"><Eyebrow>PENGEMBANGAN SOFTWARE</Eyebrow><h1>Aplikasi manajemen gedung<br /><span>yang mengikuti proses Anda.</span></h1><p className="inner-lead">Rancang alur digital untuk tenant, pengelola, dan tim engineering—berdasarkan kebutuhan operasional yang dibahas bersama.</p><Link className="button button-dark" href="/demo">Diskusikan kebutuhan <span>↗</span></Link><div className="inner-feature-grid">{[["Keluhan & layanan", "Pencatatan permintaan, klasifikasi, penugasan, serta pelacakan status."], ["Aset & pemeliharaan", "Pengelolaan informasi aset dan jadwal perawatan preventif."], ["Portal sesuai peran", "Ruang kerja admin, tenant, dan teknisi dengan kebutuhan yang berbeda."]].map(([title, text], i) => <article key={title}><span>0{i + 1}</span><h2>{title}</h2><p>{text}</p></article>)}</div></div></section>;
}
