import type { Metadata } from "next";
import { FeatureLandingPage, type FeatureLandingContent } from "@/components/feature-landing-page";
import { serviceImages } from "@/lib/media";

const page: FeatureLandingContent = {
  path: "/fitur/pencatatan-meter-gedung",
  title: "Software Pencatatan Meteran Air & Listrik Gedung",
  serviceType: "Pencatatan meter utilitas gedung",
  eyebrow: "METER AIR & LISTRIK",
  lead: "Rencanakan software pencatatan meteran air dan listrik gedung dengan data unit, angka pembacaan, tanggal, petugas, dan proses pemeriksaan yang jelas. Integrasi meter otomatis bukan asumsi fitur standar dan perlu asesmen perangkat serta konektivitas.",
  intro: "Data meter dapat menjadi masukan tagihan utilitas. Pastikan sumber angka, prosedur pemeriksaan, dan jejak koreksi ditetapkan sebelum memilih cara pencatatan.",
  features: [
    { title: "Data unit dan meter", description: "Tentukan identitas unit, nomor meter, jenis utilitas, dan periode pembacaan yang dibutuhkan pengelola." },
    { title: "Catatan angka dan tanggal", description: "Rancang input pembacaan dan tanggal pencatatan beserta petugas yang bertanggung jawab." },
    { title: "Pemeriksaan dan koreksi", description: "Sepakati cara menandai data yang perlu ditinjau, alasan koreksi, dan pihak yang berwenang menyetujui." },
    { title: "Rekap untuk penagihan", description: "Petakan bagaimana data pembacaan yang tervalidasi diteruskan ke proses perhitungan tagihan utilitas." },
  ],
  process: [
    { title: "Identifikasi sumber data", description: "Tentukan apakah pencatatan dilakukan manual, impor berkas, atau melalui perangkat dan sistem lain." },
    { title: "Petakan skenario lapangan", description: "Susun jadwal, akses petugas, penanganan meter tidak terbaca, dan bukti yang dibutuhkan." },
    { title: "Konfirmasi integrasi", description: "Jika memerlukan pembacaan otomatis, kaji perangkat, protokol, jaringan, pengujian, dan tanggung jawab pemeliharaan." },
  ],
  faqs: [
    { question: "Apakah aplikasi mendukung pencatatan meter air dan listrik?", answer: "Kebutuhan pencatatan meter dapat dibahas sebagai bagian dari alur operasional atau pengembangan khusus. Dukungan modul, input lapangan, impor data, dan ruang lingkup paket perlu dikonfirmasi sebelum implementasi." },
    { question: "Apakah software otomatis terhubung ke smart meter?", answer: "Integrasi perangkat meter tidak boleh diasumsikan tersedia secara langsung. Kesesuaian perangkat, protokol komunikasi, API, konektivitas, dan kebutuhan pengujian perlu dinilai sebagai ruang lingkup tersendiri." },
    { question: "Data apa yang biasanya diperlukan untuk pencatatan?", answer: "Umumnya pengelola perlu memetakan unit, identitas meter, jenis utilitas, angka, waktu pembacaan, petugas, dan prosedur validasi. Data yang benar-benar dikumpulkan harus mengikuti kebutuhan serta kebijakan privasi properti." },
    { question: "Bisakah hasil meter dipakai untuk tagihan IPL?", answer: "Data yang telah diperiksa dapat menjadi input proses tagihan jika aturan, pemetaan tarif, periode, dan persetujuan sudah ditentukan pengelola. Hubungan ini perlu diuji dan dikonfirmasi dalam ruang lingkup." },
  ],
  relatedLinks: [
    { href: "/berita/sistem-tagihan-ipl-dan-meter-apartemen", label: "Panduan sistem IPL dan meter apartemen" },
    { href: "/fitur/tagihan-ipl-apartemen", label: "Aplikasi tagihan IPL apartemen" },
  ],
  note: "Halaman ini menjelaskan kebutuhan dan ruang lingkup pencatatan, bukan klaim bahwa seluruh perangkat meter telah terintegrasi. Fitur final ditentukan setelah asesmen teknis.",
};

export const metadata: Metadata = {
  title: "Software Pencatatan Meteran Air & Listrik Gedung",
  description: "Rencanakan pencatatan meter air dan listrik gedung dengan data unit, pembacaan, validasi, serta integrasi perangkat yang dikonfirmasi.",
  keywords: ["software pencatatan meteran air listrik gedung", "aplikasi pencatatan meter gedung", "software meter air listrik apartemen"],
  alternates: { canonical: page.path },
  openGraph: {
    type: "website",
    title: page.title,
    description: page.lead,
    url: page.path,
    images: [{ url: serviceImages.software, width: 1600, height: 893, alt: page.title }],
  },
  twitter: { card: "summary_large_image", title: page.title, description: page.lead, images: [serviceImages.software] },
};

export default function MeterReadingPage() {
  return <FeatureLandingPage content={page} />;
}
