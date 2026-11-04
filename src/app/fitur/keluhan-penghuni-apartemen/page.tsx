import type { Metadata } from "next";
import { FeatureLandingPage, type FeatureLandingContent } from "@/components/feature-landing-page";
import { serviceImages } from "@/lib/media";

const page: FeatureLandingContent = {
  path: "/fitur/keluhan-penghuni-apartemen",
  title: "Sistem Komunikasi Keluhan Penghuni Apartemen",
  serviceType: "Sistem keluhan dan layanan penghuni apartemen",
  eyebrow: "KOMUNIKASI PENGHUNI",
  lead: "Satukan komunikasi keluhan penghuni apartemen dengan pencatatan laporan, penugasan, status tindak lanjut, dan konteks lokasi. Aplikasi building management SistemGedung mendukung alur keluhan dan work order; detail akses dan notifikasi dikonfirmasi sesuai modul dan paket.",
  intro: "Proses keluhan yang jelas membantu penghuni dan tim pengelola mengetahui langkah berikutnya tanpa bergantung pada pesan yang tercecer.",
  features: [
    { title: "Pencatatan laporan", description: "Kumpulkan uraian kebutuhan, lokasi, kategori, dan informasi pendukung yang memang diperlukan untuk menindaklanjuti." },
    { title: "Penugasan dan prioritas", description: "Tentukan penanggung jawab, aturan prioritas, dan kapan laporan perlu dieskalasikan sesuai prosedur gedung." },
    { title: "Status yang dapat ditelusuri", description: "Gunakan status proses yang disepakati agar admin dan tim lapangan memahami tindak lanjut yang sedang berjalan." },
    { title: "Komunikasi yang proporsional", description: "Rencanakan informasi yang diterima penghuni pada setiap tahap dan batasi data pribadi sesuai kebutuhan." },
  ],
  process: [
    { title: "Petakan kanal laporan", description: "Tentukan bagaimana penghuni mengirim keluhan dan data apa yang perlu tersedia untuk mulai menanganinya." },
    { title: "Tentukan alur tim", description: "Sepakati kategori, prioritas, penugasan, eskalasi, dan proses konfirmasi penyelesaian." },
    { title: "Uji komunikasi", description: "Coba skenario laporan umum, darurat, butuh informasi tambahan, dan laporan yang dialihkan ke tim lain." },
  ],
  faqs: [
    { question: "Apakah tersedia sistem komunikasi keluhan penghuni apartemen?", answer: "SistemGedung menyediakan alur keluhan dan work order dalam aplikasi building management. Kanal yang tersedia, fitur pembaruan kepada tenant, dan konfigurasi status perlu ditinjau saat demo." },
    { question: "Apakah penghuni dapat memantau status keluhannya?", answer: "Portal tenant ditujukan untuk permintaan layanan dan informasi status. Periksa alur serta akses pada demo untuk memastikan kecocokan dengan kebijakan komunikasi properti Anda." },
    { question: "Apakah tersedia notifikasi WhatsApp atau push otomatis?", answer: "Kanal notifikasi dan integrasi pihak ketiga perlu dikonfirmasi untuk paket dan kebutuhan gedung. Jangan menganggap notifikasi tertentu termasuk sebelum mekanisme, biaya, dan persetujuan pengguna dibahas." },
    { question: "Bagaimana data dan foto keluhan penghuni dikelola?", answer: "Tentukan data minimum, tujuan penggunaan lampiran, pihak yang boleh mengakses, dan masa penyimpanan. Konfigurasi harus mengikuti kebijakan privasi serta prosedur pengelola apartemen." },
  ],
  relatedLinks: [
    { href: "/artikel/keluhan-tenant-dan-work-order", label: "Panduan mengelola keluhan dan work order" },
    { href: "/solusi/apartemen", label: "Software property management apartemen" },
  ],
  note: "Sistem membantu mencatat dan mengoordinasikan proses. Ketersediaan kanal komunikasi, notifikasi, dan aturan respons dikonfirmasi sesuai konfigurasi serta paket.",
};

export const metadata: Metadata = {
  title: "Sistem Komunikasi Keluhan Penghuni Apartemen",
  description: "Kelola komunikasi keluhan penghuni apartemen dengan pencatatan laporan, penugasan, status, dan tindak lanjut yang terkoordinasi.",
  keywords: ["sistem komunikasi keluhan penghuni apartemen", "aplikasi komplain penghuni apartemen", "sistem ticketing keluhan apartemen"],
  alternates: { canonical: page.path },
  openGraph: {
    type: "website",
    title: page.title,
    description: page.lead,
    url: page.path,
    images: [{ url: serviceImages.software, width: 1200, height: 630, alt: page.title }],
  },
  twitter: { card: "summary_large_image", title: page.title, description: page.lead, images: [serviceImages.software] },
};

export default function ResidentComplaintsPage() {
  return <FeatureLandingPage content={page} />;
}
