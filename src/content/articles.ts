export type Article = {
  slug: string;
  category: string;
  title: string;
  summary: string;
  readTime: string;
  keywords?: string[];
  sections: { heading: string; paragraphs: string[]; bullets?: string[] }[];
};

export const articles: Article[] = [
  {
    slug: "memilih-aplikasi-building-management",
    category: "PANDUAN SISTEM",
    title: "Panduan memilih aplikasi building management untuk apartemen dan gedung perkantoran",
    summary: "Mulai dari alur kerja, kebutuhan pengguna, dan kesiapan data sebelum membandingkan fitur aplikasi.",
    readTime: "6 menit",
    keywords: ["aplikasi building management", "aplikasi manajemen gedung", "aplikasi pengelolaan gedung"],
    sections: [
      { heading: "Petakan proses sebelum memilih fitur", paragraphs: ["Aplikasi building management sebaiknya mendukung cara kerja properti, bukan sekadar menambah daftar menu. Mulailah dengan memetakan bagaimana laporan diterima, siapa yang meninjau, bagaimana pekerjaan ditugaskan, dan kapan penghuni memperoleh pembaruan.", "Catat titik yang sering memerlukan koordinasi manual. Diskusikan proses tersebut dengan pengelola, tenant, dan tim engineering agar kebutuhan setiap peran tergambar."] },
      { heading: "Periksa kebutuhan setiap pengguna", paragraphs: ["Pengelola memerlukan gambaran operasional dan sarana tindak lanjut. Tenant membutuhkan cara menyampaikan permintaan serta memahami statusnya. Teknisi membutuhkan informasi pekerjaan, aset terkait, checklist, dan catatan yang bisa diperbarui di lapangan."], bullets: ["Daftar peran dan akses yang memang dibutuhkan.", "Tentukan informasi minimum untuk keluhan dan work order.", "Pastikan alur eskalasi dan serah-terima jelas."] },
      { heading: "Evaluasi data, integrasi, dan keamanan", paragraphs: ["Periksa bagaimana data penghuni, unit, aset, vendor, dan tiket akan dikelola. Tanyakan bagaimana akun dilindungi, akses dibatasi menurut peran dan properti, serta data dicadangkan. Pastikan kebutuhan integrasi dan ekspor data masuk dalam pembahasan sejak awal."] },
      { heading: "Rencanakan implementasi secara bertahap", paragraphs: ["Pilih satu alur prioritas untuk diuji bersama pengguna, susun kriteria keberhasilan yang dapat diamati, lalu kumpulkan masukan. Hindari memindahkan seluruh proses sekaligus sebelum tata kelola data, pemilik proses, dan dukungan pengguna siap."] },
    ],
  },
  {
    slug: "keluhan-tenant-dan-work-order",
    category: "PROSES OPERASIONAL",
    title: "Cara mengelola keluhan tenant dan work order secara terstruktur",
    summary: "Kerangka sederhana untuk mencatat laporan, menetapkan prioritas, dan memperjelas komunikasi tindak lanjut.",
    readTime: "5 menit",
    keywords: ["software tenant & maintenance management gedung", "jasa buat sistem ticketing perawatan gedung", "aplikasi komplain dan ticketing penghuni apartemen"],
    sections: [
      { heading: "Buat satu jalur pencatatan yang konsisten", paragraphs: ["Ketika laporan masuk dari banyak saluran, konteks dan riwayat tindak lanjut mudah tercecer. Tetapkan cara penerimaan laporan yang diketahui penghuni dan petugas, lalu pastikan setiap permintaan memiliki nomor referensi atau catatan yang dapat ditelusuri."] },
      { heading: "Kumpulkan informasi yang membantu tim bertindak", paragraphs: ["Catat lokasi, uraian masalah, waktu penerimaan, kategori, dan informasi pendukung yang relevan. Batasi data pribadi pada hal yang diperlukan. Jika ada foto, jelaskan tujuan penggunaannya dan siapa yang dapat melihatnya."] },
      { heading: "Tentukan prioritas dan penanggung jawab", paragraphs: ["Gunakan kriteria yang disepakati pengelola untuk membedakan urgensi, dampak, dan kebutuhan eskalasi. Tetapkan penanggung jawab berikutnya, status kerja yang mudah dipahami, serta aturan kapan tiket harus ditinjau ulang."] , bullets: ["Diterima dan ditinjau.", "Ditugaskan dan sedang ditangani.", "Menunggu informasi atau tindak lanjut.", "Selesai dan dikonfirmasi sesuai proses."] },
      { heading: "Tutup lingkaran komunikasi", paragraphs: ["Berikan pembaruan yang jelas ketika status berubah dan dokumentasikan penyelesaian. Tinjau tiket yang belum selesai secara berkala untuk menemukan hambatan proses, bukan untuk membuat klaim kinerja tanpa data."] },
    ],
  },
  {
    slug: "checklist-preventive-maintenance",
    category: "PEMELIHARAAN",
    title: "Checklist preventive maintenance untuk fasilitas gedung",
    summary: "Susun daftar pemeriksaan yang sesuai aset, panduan pabrikan, kondisi lokasi, dan kompetensi petugas.",
    readTime: "5 menit",
    keywords: ["aplikasi maintenance gedung", "jasa buat sistem ticketing perawatan gedung", "software tenant & maintenance management gedung"],
    sections: [
      { heading: "Mulai dari daftar aset yang akurat", paragraphs: ["Catat identitas aset, lokasi, pemilik proses, dokumentasi teknis, dan riwayat pekerjaan. Ruang lingkup pemeriksaan harus mengikuti jenis aset dan instruksi pabrikan; satu checklist generik tidak cocok untuk semua peralatan."] },
      { heading: "Rancang jadwal yang dapat dijalankan", paragraphs: ["Tentukan tugas, interval, durasi perkiraan, perlengkapan, kompetensi, serta kondisi keselamatan sebelum menjadwalkan pekerjaan. Koordinasikan akses ke area dan dampak terhadap penghuni atau kegiatan gedung."] },
      { heading: "Catat hasil dan tindak lanjut", paragraphs: ["Checklist sebaiknya memisahkan hasil pemeriksaan, temuan, tindakan, dan kebutuhan eskalasi. Catatan yang konsisten membantu tim mengenali riwayat aset dan menyiapkan pekerjaan berikutnya."] , bullets: ["Identitas aset dan lokasi.", "Tanggal serta pelaksana pemeriksaan.", "Butir pemeriksaan sesuai panduan teknis.", "Hasil, temuan, dan tindakan lanjutan."] },
      { heading: "Tinjau dan perbaiki secara berkala", paragraphs: ["Gunakan catatan pekerjaan dan rekomendasi teknis untuk meninjau kecocokan jadwal. Perubahan frekuensi atau prosedur harus ditetapkan oleh pihak yang kompeten dan mempertimbangkan ketentuan yang berlaku."] },
    ],
  },
  {
    slug: "facility-management-aset-dan-teknisi",
    category: "PENGELOLAAN ASET",
    title: "Peran aplikasi facility management dalam pencatatan aset dan pekerjaan teknisi",
    summary: "Memahami bagaimana informasi aset dan catatan pekerjaan dapat membantu tim menjaga kesinambungan operasional.",
    readTime: "5 menit",
    keywords: ["aplikasi facility management", "software building management system Indonesia", "aplikasi pengelolaan gedung perkantoran dan mall"],
    sections: [
      { heading: "Bangun sumber informasi aset yang terawat", paragraphs: ["Catatan aset dapat menghubungkan identitas, lokasi, dokumen, jadwal pemeriksaan, dan riwayat pekerjaan. Tetapkan pemilik data dan proses pembaruan agar informasi tidak cepat usang."] },
      { heading: "Hubungkan work order dengan konteks aset", paragraphs: ["Ketika permintaan kerja mengacu pada aset dan lokasi yang jelas, teknisi dapat meninjau catatan relevan sebelum bertindak. Sistem juga dapat menyimpan instruksi, checklist, material yang digunakan, temuan, dan catatan penyelesaian."] },
      { heading: "Sesuaikan akses dengan tanggung jawab", paragraphs: ["Informasi operasional tidak selalu perlu terlihat oleh semua pengguna. Batasi akses berdasarkan peran, kebutuhan kerja, dan properti; rencanakan pengelolaan akun serta peninjauan akses sebagai bagian dari implementasi."] },
      { heading: "Gunakan data untuk pembelajaran proses", paragraphs: ["Riwayat terstruktur dapat menjadi dasar diskusi tentang pekerjaan berulang, kebutuhan dokumentasi, dan penyesuaian jadwal. Interpretasi tetap perlu mempertimbangkan kelengkapan data dan penilaian tenaga yang berwenang."] },
    ],
  },
  {
    slug: "jasa-pembuatan-aplikasi-building-management",
    category: "PENGEMBANGAN SISTEM",
    title: "Jasa pembuatan aplikasi building management: memilih vendor dan merencanakan sistem",
    summary: "Hal yang perlu dievaluasi saat mencari software building management system Indonesia untuk apartemen, kantor, atau properti multi-lokasi.",
    readTime: "7 menit",
    keywords: [
      "jasa pembuatan aplikasi building management",
      "software building management system Indonesia",
      "jasa pembuat aplikasi pengelola gedung",
      "developer property management system",
      "aplikasi manajemen apartemen custom",
      "vendor aplikasi building management",
    ],
    sections: [
      {
        heading: "Tentukan apakah perlu produk siap pakai atau aplikasi custom",
        paragraphs: [
          "Sebelum mencari jasa pembuatan aplikasi building management, dokumentasikan proses yang ingin diperbaiki: pengelolaan penghuni, permintaan layanan, tagihan, aset, atau pemeliharaan. Sistem siap pakai dapat cocok jika proses inti sudah sesuai; aplikasi custom lebih relevan ketika aturan, integrasi, atau alur persetujuan gedung memiliki kebutuhan khusus.",
          "Buat daftar kebutuhan wajib dan kebutuhan tahap berikutnya. Cara ini membantu membandingkan vendor aplikasi building management berdasarkan kecocokan proses, bukan hanya jumlah fitur pada presentasi.",
        ],
      },
      {
        heading: "Evaluasi pengalaman dan ruang lingkup vendor",
        paragraphs: [
          "Saat menilai jasa pembuat aplikasi pengelola gedung, minta penjelasan tentang proses analisis, migrasi data, pengujian dengan pengguna, pelatihan, dukungan setelah implementasi, dan kepemilikan data. Pastikan penawaran menjabarkan apa yang termasuk dan apa yang menjadi pekerjaan tambahan.",
          "Istilah developer property management system dapat mencakup solusi untuk berbagai jenis properti. Periksa apakah kebutuhan apartemen, gedung perkantoran, atau portofolio multi-lokasi Anda benar-benar masuk dalam ruang lingkup yang ditawarkan.",
        ],
        bullets: [
          "Peran pengguna dan batas aksesnya.",
          "Rencana implementasi dan kriteria penerimaan.",
          "Kebutuhan hosting, backup, integrasi, dan ekspor data.",
          "Saluran dukungan, jam layanan, dan target respons yang tertulis.",
        ],
      },
      {
        heading: "Rancang aplikasi manajemen apartemen custom secara bertahap",
        paragraphs: [
          "Aplikasi manajemen apartemen custom dapat dimulai dari satu alur bernilai tinggi, misalnya pencatatan permintaan penghuni atau pekerjaan teknisi. Setelah alur diuji, tim dapat memprioritaskan modul lain seperti fasilitas, dokumen, pencatatan meter, atau penagihan sesuai kesiapan data dan kebijakan pengelola.",
          "Untuk membandingkan software building management system Indonesia, gunakan skenario nyata saat demo: buat laporan, tugaskan teknisi, perbarui status, lalu periksa riwayatnya. Hindari mengambil keputusan hanya dari daftar fitur atau klaim yang belum dibuktikan.",
        ],
      },
      {
        heading: "Susun keputusan dan estimasi dengan transparan",
        paragraphs: [
          "Minta rincian biaya lisensi atau sewa, implementasi, infrastruktur, migrasi, integrasi, dukungan, dan perubahan fitur. Volume pengguna, jumlah properti, penyimpanan lampiran, serta kebutuhan ketersediaan dapat memengaruhi rancangan teknis dan biaya.",
          "SistemGedung menyediakan konsultasi untuk membahas pengembangan dan operasional pengelolaan gedung. Ruang lingkup, ketersediaan fitur, dan biaya perlu dikonfirmasi berdasarkan kebutuhan aktual sebelum menjadi penawaran.",
        ],
      },
    ],
  },
  {
    slug: "biaya-aplikasi-manajemen-gedung",
    category: "BIAYA & PERENCANAAN",
    title: "Biaya pembuatan aplikasi manajemen gedung: komponen yang perlu dihitung",
    summary: "Pahami faktor ruang lingkup, server, dukungan, dan integrasi sebelum meminta estimasi aplikasi untuk gedung atau apartemen.",
    readTime: "7 menit",
    keywords: [
      "biaya pembuatan aplikasi manajemen gedung",
      "aplikasi IPL dan iuran apartemen berbasis web",
      "software tenant dan maintenance management gedung",
      "aplikasi pengelolaan gedung perkantoran dan mall",
      "biaya pembuatan aplikasi mobile tenant apartemen",
    ],
    sections: [
      {
        heading: "Hitung ruang lingkup berdasarkan proses",
        paragraphs: [
          "Biaya pembuatan aplikasi manajemen gedung bergantung pada proses yang perlu didukung, jumlah jenis pengguna, aturan akses, integrasi, dan tingkat kustomisasi. Daftar seperti pengelolaan penghuni, keluhan, work order, aset, dan laporan akan lebih berguna jika disertai contoh alur serta siapa yang bertanggung jawab pada setiap langkah.",
          "Aplikasi pengelolaan gedung perkantoran dan mall mungkin memerlukan alur persetujuan, tenant komersial, area bersama, atau koordinasi vendor yang berbeda. Pastikan estimasi menyebutkan asumsi dan batas modulnya.",
        ],
      },
      {
        heading: "Perjelas kebutuhan tagihan dan pencatatan",
        paragraphs: [
          "Jika kebutuhan mencakup aplikasi IPL dan iuran apartemen berbasis web, uraikan cara pengelola menghitung tagihan, memeriksa data, melakukan koreksi, dan menyampaikan rincian kepada penghuni. Validasi juga sumber data dan otorisasi sebelum mengotomatisasi proses keuangan.",
          "Pencatatan meter air dan listrik, invoice, dan status pembayaran sebaiknya memiliki aturan sumber data, periode, serta jejak perubahan yang disepakati. Jangan menganggap aplikasi otomatis terhubung ke meter atau sistem pembayaran tanpa memastikan integrasi tersebut memang tersedia dan termasuk ruang lingkup.",
        ],
      },
      {
        heading: "Bandingkan sewa aplikasi, server, dan layanan dukungan",
        paragraphs: [
          "Model sewa dapat merangkum lisensi aplikasi dan dukungan secara berkala, sedangkan pengembangan custom biasanya memerlukan pembahasan biaya implementasi dan perubahan fitur. Tanyakan kapasitas server, cakupan database, backup, retensi data, pemantauan, dan siapa yang menangani pemulihan.",
          "Untuk software tenant dan maintenance management gedung, perjelas pula jumlah properti dan unit, akun pengguna, penyimpanan foto, kebutuhan akses teknisi, serta target respons support. Target respons awal tidak sama dengan jaminan waktu penyelesaian atau jaminan uptime.",
        ],
      },
      {
        heading: "Minta estimasi yang dapat dibandingkan",
        paragraphs: [
          "Minta vendor memisahkan biaya setup, lisensi bulanan, server, migrasi, pelatihan, dukungan onsite, integrasi, dan modul tambahan. Bandingkan penawaran pada asumsi yang sama agar harga yang terlihat murah tidak menyembunyikan biaya penting.",
          "Biaya pembuatan aplikasi mobile tenant apartemen juga perlu dibahas berdasarkan platform, fitur, pemeliharaan versi, notifikasi, dan integrasi. Tentukan apakah web responsif sudah memenuhi kebutuhan awal atau aplikasi native benar-benar diperlukan.",
        ],
        bullets: [
          "Jumlah gedung, unit, tenant, dan staf.",
          "Modul yang termasuk dan batas penggunaan.",
          "Server, backup, dukungan, dan biaya pihak ketiga.",
          "Biaya perubahan, migrasi, termin pembayaran, dan pajak.",
        ],
      },
    ],
  },
  {
    slug: "digitalisasi-operasional-apartemen",
    category: "SOLUSI APARTEMEN",
    title: "Sistem digital operasional apartemen: IPL, meter, komplain, dan akses pengunjung",
    summary: "Petakan kebutuhan P3SRS dan pengelola agar layanan penghuni, pencatatan utilitas, serta pekerjaan teknis tercatat dengan jelas.",
    readTime: "8 menit",
    keywords: [
      "jasa pembuatan aplikasi manajemen apartemen",
      "software pengelola apartemen Indonesia",
      "aplikasi P3SRS apartemen custom",
      "developer sistem tagihan IPL apartemen",
      "vendor software apartemen dan kondominium",
      "aplikasi pencatatan meteran air dan listrik apartemen",
      "sistem cetak invoice dan IPL apartemen otomatis",
      "aplikasi komplain dan ticketing penghuni apartemen",
      "software absensi & gate pass pengunjung apartemen",
    ],
    sections: [
      {
        heading: "Mulai dari kebutuhan pengelola dan P3SRS",
        paragraphs: [
          "Sebelum memilih jasa pembuatan aplikasi manajemen apartemen, petakan pihak yang menjalankan proses dan kebijakan yang harus dipatuhi. Aplikasi P3SRS apartemen custom perlu mengikuti tata kelola yang berlaku pada properti tersebut; perangkat lunak tidak menggantikan keputusan, persetujuan, atau kewenangan organisasi.",
          "Software pengelola apartemen Indonesia dapat mencakup banyak proses. Tentukan prioritas berdasarkan masalah aktual, seperti administrasi unit, komunikasi penghuni, penagihan, fasilitas, atau pemeliharaan.",
        ],
      },
      {
        heading: "Buat alur IPL dan pencatatan meter yang dapat diaudit",
        paragraphs: [
          "Developer sistem tagihan IPL apartemen perlu memahami dasar perhitungan, periode, penyesuaian, persetujuan, dan cara menyampaikan rincian tagihan. Sistem cetak invoice dan IPL apartemen otomatis harus menghasilkan dokumen dari data yang telah diperiksa, dengan pembatasan akses dan catatan koreksi yang sesuai.",
          "Aplikasi pencatatan meteran air dan listrik apartemen dapat menyimpan angka meter, tanggal pencatatan, unit, petugas, dan bukti yang dibutuhkan. Jika pembacaan dilakukan melalui integrasi perangkat, kebutuhan perangkat dan konektivitas harus dinilai terpisah.",
        ],
      },
      {
        heading: "Hubungkan komplain penghuni dengan tindak lanjut teknisi",
        paragraphs: [
          "Aplikasi komplain dan ticketing penghuni apartemen sebaiknya mencatat lokasi, kategori, uraian, lampiran yang relevan, penanggung jawab, dan status. Penghuni perlu mendapat informasi yang sesuai, sementara pengelola dapat meninjau antrean dan teknisi mengakses detail tugas berdasarkan kewenangannya.",
          "Tetapkan aturan urgensi dan eskalasi bersama pengelola. Hindari mengumpulkan data pribadi yang tidak diperlukan, dan batasi akses foto atau dokumen hanya kepada pihak yang membutuhkannya.",
        ],
      },
      {
        heading: "Kelola pengunjung dan pekerjaan fit-out dengan aturan gedung",
        paragraphs: [
          "Software absensi dan gate pass pengunjung apartemen perlu disesuaikan dengan prosedur keamanan, pencatatan, masa simpan, dan pihak yang berwenang di lokasi. Pastikan proses persetujuan, pemeriksaan identitas, dan pemberian akses ditetapkan oleh pengelola; aplikasi hanya membantu menjalankan alur yang disetujui.",
          "Untuk pekerjaan fit-out atau renovasi, pengelola dapat memetakan pengajuan, dokumen, jadwal, persetujuan, dan pemeriksaan lapangan. Persyaratan teknis dan keselamatan harus ditentukan oleh pihak kompeten dan mengikuti ketentuan properti.",
        ],
      },
      {
        heading: "Pilih vendor dan implementasikan secara bertahap",
        paragraphs: [
          "Saat membandingkan vendor software apartemen dan kondominium, minta demo berdasarkan skenario kerja properti Anda. Perjelas migrasi, akses data, backup, pelatihan, dukungan, dan proses perubahan fitur.",
          "Implementasi dapat dimulai dari satu alur, lalu diuji dengan staf dan penghuni perwakilan sebelum diperluas. SistemGedung dapat membahas kebutuhan aplikasi dan dukungan operasional; fitur, integrasi, dan estimasi biaya harus dikonfirmasi setelah asesmen.",
        ],
      },
    ],
  },
];
