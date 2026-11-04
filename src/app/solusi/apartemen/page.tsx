import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/eyebrow";

export const metadata: Metadata = { title: "Aplikasi Manajemen Apartemen Custom", description: "Solusi aplikasi manajemen apartemen custom untuk mengelola layanan tenant, keluhan, fasilitas, IPL, dan pemeliharaan sesuai proses pengelola.", alternates: { canonical: "/solusi/apartemen" } };
export default function ApartmentPage() {
  return <section className="inner-hero"><div className="container"><Eyebrow>SOLUSI APARTEMEN</Eyebrow><h1>Layanan penghuni yang<br /><span>mudah ditelusuri.</span></h1><p className="inner-lead">Satukan permintaan penghuni, pengumuman, permohonan fasilitas, dan tindak lanjut pekerjaan ke dalam alur yang sesuai untuk pengelola apartemen.</p><div className="solution-detail"><div><b>01</b><h2>Keluhan & permintaan layanan</h2><p>Catat kebutuhan tenant dan sediakan informasi status penanganan.</p></div><div><b>02</b><h2>Fasilitas & pengumuman</h2><p>Kelola informasi fasilitas dan permohonan reservasi sesuai kebijakan gedung.</p></div><div><b>03</b><h2>Perawatan terkoordinasi</h2><p>Hubungkan laporan penghuni dengan penugasan dan pemeliharaan.</p></div></div><Link className="button button-dark" href="/demo">Diskusikan kebutuhan apartemen ↗</Link></div></section>;
}
