import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/eyebrow";

export const metadata: Metadata = {
  title: "Syarat dan Ketentuan",
  description: "Syarat penggunaan situs publik SistemGedung, informasi layanan, formulir diskusi, dan tautan ke layanan pihak ketiga.",
  alternates: { canonical: "/syarat-ketentuan" },
};

export default function TermsPage() {
  return (
    <article className="article-detail">
      <div className="container">
        <div className="article-breadcrumb"><Link href="/">Beranda</Link><span>/</span><span>Syarat dan Ketentuan</span></div>
        <header className="article-detail-heading">
          <Eyebrow>PENGGUNAAN SITUS</Eyebrow>
          <h1>Syarat dan Ketentuan</h1>
          <p>Ketentuan umum untuk mengakses situs publik SistemGedung.</p>
          <time className="article-reading" dateTime="2026-11-08">Terakhir diperbarui: 8 November 2026</time>
        </header>
        <div className="article-layout">
          <div className="article-body">
            <section>
              <h2>Penggunaan situs</h2>
              <p>Dengan mengakses situs ini, Anda setuju menggunakannya secara sah dan tidak mengganggu keamanan, ketersediaan, atau penggunaan situs oleh orang lain. Konten situs disediakan untuk informasi umum mengenai SistemGedung dan layanannya.</p>
            </section>
            <section>
              <h2>Informasi layanan dan harga</h2>
              <p>Deskripsi fitur, paket, kapasitas, dan harga di situs merupakan informasi awal dan dapat berubah. Informasi tersebut bukan penawaran yang mengikat dan perlu dikonfirmasi berdasarkan kebutuhan serta ruang lingkup layanan. Rincian layanan, biaya, masa berlangganan, dukungan, dan tanggung jawab para pihak hanya berlaku jika disepakati dalam dokumen atau perjanjian layanan terpisah.</p>
            </section>
            <section>
              <h2>Formulir dan demo</h2>
              <p>Formulir diskusi di situs saat ini tidak menyimpan atau meneruskan data yang dikirim dan belum menyediakan tindak lanjut. Jangan kirim informasi rahasia atau data pribadi pihak lain. Demo atau layanan yang dibuka pada domain lain dapat memiliki fitur, ketersediaan, serta ketentuan penggunaan tersendiri; gunakan data uji dan jangan memasukkan data operasional nyata.</p>
            </section>
            <section>
              <h2>Konten dan layanan pihak ketiga</h2>
              <p>Konten situs tidak dimaksudkan sebagai nasihat hukum, teknis, atau profesional. Tautan ke situs atau layanan pihak ketiga disediakan untuk kemudahan; SistemGedung tidak mengendalikan dan tidak bertanggung jawab atas konten maupun kebijakan layanan tersebut. Hak atas konten situs tetap berada pada pemiliknya masing-masing.</p>
            </section>
            <section>
              <h2>Perubahan ketentuan</h2>
              <p>Ketentuan ini dapat diperbarui ketika situs atau layanannya berubah. Versi terbaru dan tanggal pembaruannya akan ditampilkan pada halaman ini. Ketentuan ini mengatur penggunaan situs publik dan tidak menggantikan perjanjian khusus untuk layanan berbayar.</p>
            </section>
          </div>
        </div>
      </div>
    </article>
  );
}
