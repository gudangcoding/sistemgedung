import type { Metadata } from "next";
import { FeatureLandingPage, type FeatureLandingContent } from "@/components/feature-landing-page";
import { solutionImages } from "@/lib/media";

const page: FeatureLandingContent = {
  path: "/solusi/apartemen",
  title: "Software Property Management System Apartemen",
  serviceType: "Software property management untuk apartemen",
  eyebrow: "SISTEM MANAJEMEN APARTEMEN",
  lead: "SistemGedung membantu pengelola apartemen menghubungkan data tenant dan unit, alur tagihan IPL, komunikasi keluhan, serta pekerjaan tim engineering. Tinjau aplikasi web dan portal yang tersedia, kemudian konfirmasi modul dan konfigurasi yang sesuai dengan proses pengelola.",
  intro: "Property management system apartemen perlu mengikuti pembagian tugas, aturan, dan kebutuhan layanan penghuni pada setiap properti.",
  image: solutionImages.apartemen,
  imageAlt: "Tampilan BMS Tenant untuk tagihan, pembayaran, deposit, profil unit, dan layanan penghuni apartemen",
  features: [
    { title: "Tenant dan unit", description: "Kelola konteks penghuni dan unit untuk mendukung administrasi serta tindak lanjut layanan." },
    { title: "IPL dan tagihan", description: "Bahas alur iuran pengelolaan, data yang diperlukan, verifikasi, dan format informasi bagi penghuni." },
    { title: "Keluhan penghuni", description: "Hubungkan permintaan layanan dengan status dan penugasan yang dapat ditinjau tim sesuai hak akses." },
    { title: "Engineering dan aset", description: "Dukung koordinasi work order, informasi aset, dan pemeliharaan sesuai ruang lingkup aplikasi." },
  ],
  process: [
    { title: "Pahami tata kelola", description: "Petakan peran pengelola, P3SRS, tenant, engineering, dan kebijakan yang berlaku di properti." },
    { title: "Tentukan prioritas", description: "Pilih alur yang paling dibutuhkan dan cocokkan dengan fungsi aplikasi yang dapat diuji melalui demo." },
    { title: "Rencanakan implementasi", description: "Konfirmasi migrasi, konfigurasi, training, dukungan, serta integrasi dan biaya tambahan jika diperlukan." },
  ],
  faqs: [
    { question: "Apa fungsi software property management system apartemen?", answer: "Perangkat lunak property management dapat membantu mengelola tenant dan unit, layanan penghuni, proses IPL, pekerjaan teknisi, dan informasi operasional. Modul yang benar-benar tersedia bergantung pada produk dan konfigurasi, sehingga sebaiknya diuji melalui demo." },
    { question: "Apakah SistemGedung khusus untuk apartemen?", answer: "SistemGedung melayani kebutuhan pengelolaan apartemen dan gedung perkantoran. Ruang lingkup modul, jumlah unit, pengguna, dan properti perlu dibahas berdasarkan paket." },
    { question: "Apakah software ini menggantikan sistem ERP atau sistem akuntansi?", answer: "Tidak ada klaim bahwa aplikasi menggantikan seluruh sistem ERP atau akuntansi. Kebutuhan integrasi dan batas tanggung jawab antarsistem harus dipetakan secara terpisah." },
    { question: "Apakah mendukung P3SRS dan kebijakan pengelola?", answer: "Kebutuhan pengguna dan alur persetujuan dapat dibahas bersama, tetapi keputusan dan tata kelola tetap menjadi kewenangan pihak pengelola atau organisasi terkait. Konfigurasi harus mengikuti aturan yang berlaku pada properti." },
  ],
  relatedLinks: [
    { href: "/aplikasi-pengelolaan-apartemen", label: "Aplikasi pengelolaan apartemen" },
    { href: "/software-pengelolaan-apartemen", label: "Software pengelolaan apartemen" },
    { href: "/fitur/tagihan-ipl-apartemen", label: "Aplikasi tagihan IPL apartemen" },
    { href: "/fitur/keluhan-penghuni-apartemen", label: "Sistem komunikasi keluhan penghuni" },
    { href: "/fitur/pencatatan-meter-gedung", label: "Software pencatatan meter utilitas" },
    { href: "/sewa-aplikasi-manajemen-gedung", label: "Sewa aplikasi web manajemen gedung" },
  ],
  note: "Kesesuaian produk, modul yang termasuk, integrasi, dan batas layanan harus dikonfirmasi melalui demo serta asesmen kebutuhan.",
};

export const metadata: Metadata = {
  title: page.title,
  description: "Software property management system apartemen untuk tenant, unit, IPL, keluhan penghuni, work order, dan operasional engineering. Tinjau demo dan konfirmasi modul.",
  keywords: [
    "software property management system apartemen",
    "aplikasi pengelola apartemen",
    "sistem manajemen properti apartemen",
  ],
  alternates: { canonical: page.path },
  openGraph: {
    type: "website",
    title: page.title,
    description: page.lead,
    url: page.path,
    images: [{ url: solutionImages.apartemen, width: 1600, height: 893, alt: "BMS Tenant untuk layanan penghuni apartemen" }],
  },
  twitter: { card: "summary_large_image", title: page.title, description: page.lead, images: [solutionImages.apartemen] },
};

export default function ApartmentPage() {
  return <FeatureLandingPage content={page} />;
}
