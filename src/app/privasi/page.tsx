import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/eyebrow";

export const metadata: Metadata = {
  title: "Kebijakan Privasi",
  description: "Informasi tentang data yang diproses saat Anda mengunjungi situs SistemGedung dan menggunakan formulir diskusi.",
  alternates: { canonical: "/privasi" },
};

export default function PrivacyPage() {
  return (
    <article className="article-detail">
      <div className="container">
        <div className="article-breadcrumb"><Link href="/">Beranda</Link><span>/</span><span>Privasi</span></div>
        <header className="article-detail-heading">
          <Eyebrow>INFORMASI PENGGUNA</Eyebrow>
          <h1>Kebijakan Privasi</h1>
          <p>Penjelasan mengenai informasi yang diproses ketika Anda mengunjungi situs SistemGedung.</p>
          <time className="article-reading" dateTime="2026-11-08">Terakhir diperbarui: 8 November 2026</time>
        </header>
        <div className="article-layout">
          <div className="article-body">
            <section>
              <h2>Ruang lingkup</h2>
              <p>Kebijakan ini berlaku untuk situs publik SistemGedung. Layanan atau aplikasi pihak ketiga yang dibuka melalui tautan dari situs ini dapat memiliki kebijakan privasinya sendiri.</p>
            </section>
            <section>
              <h2>Informasi yang Anda kirimkan</h2>
              <p>Formulir diskusi meminta nama, email, jenis properti, pilihan paket, dan pesan. Saat ini, informasi tersebut hanya diproses sementara untuk validasi permintaan. Situs ini tidak menyimpan, mencatat, atau meneruskan isi formulir ke tim atau layanan lain. Karena itu, pengiriman formulir belum menjadwalkan tindak lanjut.</p>
              <p>Jangan masukkan kata sandi, data penghuni, data pembayaran, atau informasi sensitif lainnya ke dalam formulir.</p>
            </section>
            <section>
              <h2>Analitik dan teknologi pihak ketiga</h2>
              <p>Situs memuat Google Tag Manager. Tag analitik atau tag lain yang dikonfigurasi melalui layanan tersebut dapat memproses data penggunaan, informasi perangkat atau browser, dan identifier seperti cookie sesuai konfigurasi yang aktif. Google dan penyedia terkait dapat memproses data berdasarkan kebijakan mereka sendiri. Periksa pengaturan browser dan kebijakan Google untuk informasi lebih lanjut.</p>
            </section>
            <section>
              <h2>Penyimpanan, keamanan, dan perubahan</h2>
              <p>Aplikasi situs saat ini tidak menyimpan data formulir setelah validasi. Informasi teknis yang mungkin diproses oleh infrastruktur hosting atau penyedia pihak ketiga tunduk pada kebijakan masing-masing penyedia. Kami dapat memperbarui kebijakan ini apabila cara kerja situs berubah; tanggal pembaruan akan dicantumkan pada halaman ini.</p>
            </section>
            <div className="article-note">Kebijakan ini menjelaskan implementasi situs saat ini. Sebelum formulir atau layanan digunakan untuk mengumpulkan data secara operasional, informasi pengelola dan mekanisme pemenuhan permintaan privasi perlu dilengkapi.</div>
          </div>
        </div>
      </div>
    </article>
  );
}
