import type { Metadata } from "next";
import { FeatureLandingPage, type FeatureLandingContent } from "@/components/feature-landing-page";
import { serviceImages } from "@/lib/media";

const page: FeatureLandingContent = {
  path: "/fitur/tagihan-ipl-apartemen",
  title: "Aplikasi Tagihan IPL Apartemen",
  serviceType: "Pengelolaan tagihan IPL apartemen",
  eyebrow: "TAGIHAN IPL APARTEMEN",
  lead: "Rapikan data unit, periode tagihan, dan proses peninjauan IPL apartemen dalam alur yang mudah ditelusuri. SistemGedung menyediakan aplikasi building management dengan alur IPL; rincian aturan, format tagihan, dan proses pembayaran perlu dikonfirmasi sesuai kebijakan pengelola.",
  intro: "Sistem tagihan IPL apartemen perlu mengikuti aturan yang ditetapkan pengelola. Mulai dari data dan tahapan verifikasi sebelum membahas otomatisasi.",
  features: [
    { title: "Data penghuni dan unit", description: "Gunakan data unit sebagai konteks pengelolaan tenant dan proses penagihan sesuai konfigurasi properti." },
    { title: "Periode dan komponen tagihan", description: "Petakan periode, dasar perhitungan, serta komponen iuran yang telah disetujui pengelola sebelum aturan dimasukkan ke sistem." },
    { title: "Peninjauan dan koreksi", description: "Sepakati pihak yang memeriksa data dan prosedur koreksi agar perubahan mengikuti tata kelola properti." },
    { title: "Informasi untuk penghuni", description: "Bahas format rincian dan cara penyampaian tagihan yang sesuai dengan kebutuhan komunikasi gedung." },
  ],
  process: [
    { title: "Petakan aturan IPL", description: "Dokumentasikan komponen, periode, dasar hitung, pengecualian, dan pihak yang menyetujui." },
    { title: "Validasi data unit", description: "Tinjau sumber data dan proses pembaruan sebelum menyiapkan konfigurasi tagihan." },
    { title: "Uji contoh kasus", description: "Cek perhitungan dan prosedur koreksi bersama pengelola sebelum digunakan untuk operasional." },
  ],
  faqs: [
    { question: "Apakah tersedia aplikasi tagihan IPL apartemen?", answer: "SistemGedung mencantumkan tagihan IPL sebagai bagian dari aplikasi building management. Rincian fitur yang tersedia dalam paket, aturan perhitungan, format invoice, dan alur persetujuan harus dikonfirmasi saat demo." },
    { question: "Apakah sistem otomatis menghitung semua komponen IPL?", answer: "Perhitungan mengikuti aturan dan data yang ditetapkan pengelola. Komponen, pengecualian, dan rumus perlu divalidasi sebelum konfigurasi; jangan mengasumsikan semua skema biaya sudah tersedia tanpa asesmen." },
    { question: "Apakah penghuni bisa membayar tagihan secara online?", answer: "Metode pembayaran dan integrasi payment gateway perlu diperiksa secara terpisah. Konfirmasikan dukungan, biaya pihak ketiga, rekonsiliasi, dan ruang lingkup sebelum menganggap pembayaran online termasuk." },
    { question: "Bagaimana pencatatan meter terkait tagihan IPL?", answer: "Jika tagihan menggunakan pemakaian air atau listrik, sumber angka meter, proses pemeriksaan, dan aturan koreksi perlu dipetakan. Lihat juga halaman software pencatatan meter gedung untuk pembahasan ruang lingkup utilitas." },
  ],
  relatedLinks: [
    { href: "/berita/sistem-tagihan-ipl-dan-meter-apartemen", label: "Panduan tagihan IPL dan pencatatan meter" },
    { href: "/solusi/apartemen", label: "Software property management apartemen" },
  ],
  note: "Rincian otomatisasi tagihan, invoice, pembayaran, dan integrasi harus divalidasi sesuai paket dan kebijakan properti. Sistem tidak menetapkan kebijakan iuran bagi pengelola.",
};

export const metadata: Metadata = {
  title: "Aplikasi Tagihan IPL Apartemen",
  description: "Kelola alur tagihan IPL apartemen dengan data unit, periode, peninjauan, dan koreksi yang mengikuti aturan pengelola. Konfirmasi fitur dan paket SistemGedung.",
  keywords: ["aplikasi tagihan IPL apartemen", "software tagihan IPL apartemen", "aplikasi iuran pengelolaan apartemen"],
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

export default function IplBillingPage() {
  return <FeatureLandingPage content={page} />;
}
