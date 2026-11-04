export type Article = {
  slug: string;
  category: string;
  title: string;
  summary: string;
  readTime: string;
  sections: { heading: string; paragraphs: string[]; bullets?: string[] }[];
};

export const articles: Article[] = [
  {
    slug: "memilih-aplikasi-building-management",
    category: "PANDUAN SISTEM",
    title: "Panduan memilih aplikasi building management untuk apartemen dan gedung perkantoran",
    summary: "Mulai dari alur kerja, kebutuhan pengguna, dan kesiapan data sebelum membandingkan fitur aplikasi.",
    readTime: "6 menit",
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
    sections: [
      { heading: "Bangun sumber informasi aset yang terawat", paragraphs: ["Catatan aset dapat menghubungkan identitas, lokasi, dokumen, jadwal pemeriksaan, dan riwayat pekerjaan. Tetapkan pemilik data dan proses pembaruan agar informasi tidak cepat usang."] },
      { heading: "Hubungkan work order dengan konteks aset", paragraphs: ["Ketika permintaan kerja mengacu pada aset dan lokasi yang jelas, teknisi dapat meninjau catatan relevan sebelum bertindak. Sistem juga dapat menyimpan instruksi, checklist, material yang digunakan, temuan, dan catatan penyelesaian."] },
      { heading: "Sesuaikan akses dengan tanggung jawab", paragraphs: ["Informasi operasional tidak selalu perlu terlihat oleh semua pengguna. Batasi akses berdasarkan peran, kebutuhan kerja, dan properti; rencanakan pengelolaan akun serta peninjauan akses sebagai bagian dari implementasi."] },
      { heading: "Gunakan data untuk pembelajaran proses", paragraphs: ["Riwayat terstruktur dapat menjadi dasar diskusi tentang pekerjaan berulang, kebutuhan dokumentasi, dan penyesuaian jadwal. Interpretasi tetap perlu mempertimbangkan kelengkapan data dan penilaian tenaga yang berwenang."] },
    ],
  },
];
