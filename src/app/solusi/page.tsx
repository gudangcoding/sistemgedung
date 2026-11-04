import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/eyebrow";

export const metadata: Metadata = {
  title: "Solusi Manajemen Apartemen dan Gedung",
  description: "Jelajahi pendekatan pengelolaan layanan dan operasional untuk apartemen serta gedung perkantoran.",
  alternates: { canonical: "/solusi" },
};

export default function SolutionsPage() {
  return <section className="inner-hero"><div className="container"><Eyebrow>SOLUSI PER PROPERTI</Eyebrow><h1>Ruang yang lebih baik<br /><span>dimulai dari proses.</span></h1><p className="inner-lead">Setiap jenis properti memiliki ritme dan kebutuhan layanan yang berbeda.</p><div className="solution-grid"><Link href="/solusi/apartemen"><span>01 / HUNIAN</span><h2>Apartemen</h2><p>Keluhan tenant, pengumuman, fasilitas, dan koordinasi pemeliharaan.</p><b>Jelajahi solusi ↗</b></Link><Link href="/solusi/perkantoran"><span>02 / KOMERSIAL</span><h2>Gedung perkantoran</h2><p>Alur layanan tenant, pekerjaan teknisi, aset, dan perawatan fasilitas.</p><b>Jelajahi solusi ↗</b></Link></div></div></section>;
}
