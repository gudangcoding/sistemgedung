import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/eyebrow";

export const metadata: Metadata = { title: "Portal Operasional", description: "Pilih tampilan demo portal operasional SistemGedung.", robots: { index: false, follow: false } };

const roles = [
  { href: "/portal/admin", number: "01", label: "ADMIN GEDUNG", title: "Kelola operasional", text: "Tinjau tiket, tenant, unit, aset, vendor, pengumuman, dan laporan.", icon: "⌘" },
  { href: "/portal/tenant", number: "02", label: "TENANT", title: "Layanan untuk penghuni", text: "Sampaikan keluhan, pantau status permintaan, dan lihat informasi gedung.", icon: "◎" },
  { href: "/portal/teknisi", number: "03", label: "ENGINEERING", title: "Ruang kerja teknisi", text: "Buka work order, checklist inspeksi, jadwal, dan catatan pekerjaan.", icon: "↗" },
];

export default function PortalIndexPage() {
  return <section className="portal-entry"><div className="container"><Eyebrow>AREA APLIKASI / DEMO</Eyebrow><h1>Pilih ruang kerja<br /><span>sesuai peran Anda.</span></h1><p className="inner-lead">Antarmuka ini menggunakan data ilustratif untuk evaluasi. Pemilihan peran bukan proses login dan tidak membatasi akses secara aman.</p><div className="role-cards">{roles.map((role) => <Link className="role-card" href={role.href} key={role.number}><span className="role-label">{role.number} — {role.label}</span><span className="role-icon">{role.icon}</span><h2>{role.title}</h2><p>{role.text}</p><b>Buka demo <span>↗</span></b></Link>)}</div><div className="portal-warning"><b>Catatan prototipe</b><span>Jangan gunakan portal ini untuk data atau operasi produksi sebelum autentikasi, otorisasi server, isolasi tenant, dan database terintegrasi.</span></div></div></section>;
}
