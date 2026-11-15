import { appImages } from "@/lib/media";
import { demoAppUrl, playStoreLinks } from "@/lib/site";

export const apps = [
  {
    label: "WEB PORTAL",
    title: "BMS Web Portal",
    subtitle: "Sistem manajemen & pengelolaan gedung terintegrasi",
    text: "Ruang kerja web untuk pengelola gedung: tenancy, engineering, billing, akuntansi & pajak, operation, security, dan housekeeping dalam satu sistem.",
    points: [
      "Tenancy serta data tenant dan unit",
      "Billing, akuntansi & pajak",
      "Engineering, operation, security & housekeeping",
    ],
    image: appImages.webPortal,
    alt: "Pratinjau BMS Web Portal dengan modul tenancy, engineering, billing, akuntansi, operation, security, dan housekeeping",
    href: demoAppUrl,
    action: "Buka demo web portal",
    note: "Demo live — gunakan data uji, bukan data operasional asli.",
  },
  {
    label: "TIM LAPANGAN",
    title: "BMS Support",
    subtitle: "Solusi manajemen & operasional gedung modern",
    text: "Aplikasi support maintenance untuk tim engineering, housekeeping, dan security menangani work order, checklist, aset, serta jadwal pemeliharaan dari tablet maupun mobile.",
    points: [
      "Engineering, housekeeping & security",
      "Work order, checklist & aset",
      "Akses tablet dan mobile",
    ],
    image: appImages.support,
    alt: "Pratinjau BMS Support untuk tim engineering, housekeeping, dan security",
    href: playStoreLinks.support,
    action: "Buka di Google Play",
    note: "Closed testing — email tester wajib terdaftar sebelum mengunduh.",
  },
  {
    label: "PENGHUNI",
    title: "BMS Tenant",
    subtitle: "Solusi manajemen hunian & apartemen modern",
    text: "Aplikasi penghuni untuk memantau tagihan IPL, air, dan listrik, melakukan pembayaran, melihat deposit dan riwayat, serta mengakses profil unit, layanan, dan berita gedung.",
    points: [
      "Tagihan IPL, air & listrik",
      "Pembayaran, deposit & riwayat",
      "Profil, unit, layanan & berita",
    ],
    image: appImages.tenant,
    alt: "Pratinjau BMS Tenant untuk tagihan, pembayaran, deposit, dan layanan penghuni apartemen",
    href: playStoreLinks.tenant,
    action: "Buka di Google Play",
    note: "Closed testing — email tester wajib terdaftar sebelum mengunduh.",
  },
] as const;
