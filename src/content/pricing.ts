export const applicationPlans = [
  {
    id: "apps-one",
    name: "1 Gedung",
    price: "Rp2.000.000",
    summary: "Sewa aplikasi building management untuk satu gedung.",
    capacity: "1 gedung · harga total per bulan",
  },
  {
    id: "apps-five",
    name: "Hingga 5 Gedung",
    price: "Rp1.700.000",
    summary: "Tarif total bulanan untuk pengelolaan hingga lima gedung.",
    capacity: "Maksimal 5 gedung · harga total per bulan",
    featured: true,
  },
  {
    id: "apps-ten",
    name: "Hingga 10 Gedung",
    price: "Rp1.500.000",
    summary: "Tarif total bulanan untuk pengelolaan hingga sepuluh gedung.",
    capacity: "Maksimal 10 gedung · harga total per bulan",
  },
] as const;

export const bundlePlans = [
  {
    id: "bundle-starter",
    name: "Starter",
    price: "Rp4.500.000",
    summary: "Untuk memulai operasional digital satu gedung.",
    capacity: "1 gedung · VPS Starter · 4 kunjungan/bulan",
    server: "VPS 4 GB RAM · SSD 100 GB · 4 kunjungan teknisi × 4 jam",
    features: [
      "Sewa aplikasi building management untuk 1 gedung",
      "VPS dan bantuan setup awal",
      "SSL (domain tidak termasuk)",
      "Dukungan koordinasi via WhatsApp pada jam layanan",
      "Pembaruan aplikasi dan training awal",
    ],
  },
  {
    id: "bundle-growth",
    name: "Growth",
    price: "Rp5.700.000",
    summary: "Untuk pengelolaan beberapa gedung dengan jadwal dukungan rutin.",
    capacity: "Hingga 5 gedung · VPS Bisnis · 8 kunjungan/bulan",
    server: "VPS 8 GB RAM · SSD 100 GB · 8 kunjungan teknisi × 4 jam",
    features: [
      "Sewa aplikasi building management hingga 5 gedung",
      "VPS dan bantuan setup awal",
      "SSL (domain tidak termasuk)",
      "Dukungan remote dan jadwal kunjungan terencana",
      "Pembaruan aplikasi dan training awal",
    ],
    featured: true,
  },
  {
    id: "bundle-scale",
    name: "Scale",
    price: "Rp10.000.000",
    summary: "Untuk portofolio yang lebih luas dengan dukungan intensif.",
    capacity: "Hingga 10 gedung · VPS Enterprise · 20 kunjungan/bulan",
    server: "VPS 16 GB RAM · SSD 100 GB · 20 kunjungan teknisi × 4 jam",
    features: [
      "Sewa aplikasi building management hingga 10 gedung",
      "VPS dan bantuan setup awal",
      "SSL dan backup harian (domain tidak termasuk)",
      "Dukungan remote prioritas dan jadwal kunjungan",
      "Pembaruan aplikasi dan training awal",
    ],
  },
] as const;

export const supportPlans = [
  { id: "support-single", name: "Lepas", visits: "1 kunjungan · 4 jam", price: "Rp500.000", term: "Bayar per kunjungan" },
  { id: "support-8", name: "Paket 8x", visits: "8 kunjungan/bulan · 4 jam/kunjungan", price: "Rp3.000.000", term: "Hemat Rp1.000.000 · minimum 3 bulan", featured: true },
  { id: "support-12", name: "Paket 12x", visits: "12 kunjungan/bulan · 4 jam/kunjungan", price: "Rp4.500.000", term: "Hemat Rp1.500.000 · minimum 3 bulan" },
  { id: "support-20", name: "Paket 20x", visits: "20 kunjungan/bulan · 4 jam/kunjungan", price: "Rp7.000.000", term: "Hemat Rp3.000.000 · minimum 3 bulan" },
] as const;

export const serverPlans = [
  { id: "vps-starter", name: "VPS Starter", memory: "RAM 4 GB · SSD 100 GB", price: "Rp500.000", description: "Untuk memulai dengan kebutuhan resource yang lebih ringan." },
  { id: "vps-business", name: "VPS Bisnis", memory: "RAM 8 GB · SSD 100 GB", price: "Rp1.000.000", description: "Untuk kebutuhan aplikasi dengan lebih banyak pengguna aktif." , featured: true },
  { id: "vps-enterprise", name: "VPS Enterprise", memory: "RAM 16 GB · SSD 100 GB", price: "Rp1.500.000", description: "Untuk kebutuhan resource yang lebih besar, setelah asesmen beban." },
] as const;
