import Image from "next/image";
import Link from "next/link";
import { demoAppUrl } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Link className="brand footer-brand" href="/"><Image className="brand-logo" src="/logo.svg" alt="Logo SistemGedung - Solusi Pengelolaan Gedung" width={34} height={34} /><span>Sistem<span className="brand-light">Gedung</span></span></Link>
          <p>Teknologi dan dukungan operasional untuk pengelolaan gedung yang lebih terstruktur.</p>
        </div>
        <div><strong>Jelajahi</strong><Link href="/layanan/software">Jasa aplikasi building management</Link><Link href="/layanan/operasional">Dukungan operasional</Link><Link href="/sewa-aplikasi-manajemen-gedung">Sewa aplikasi web gedung</Link><Link href="/harga">Rincian harga paket</Link><Link href="/#teknologi">Teknologi</Link><Link href="/#proses">Proses implementasi</Link><Link href="/#faq">FAQ</Link><Link href="/berita">Berita</Link><Link href="/privasi">Kebijakan privasi</Link><Link href="/syarat-ketentuan">Syarat dan ketentuan</Link></div>
        <div><strong>Solusi properti</strong><Link href="/solusi/apartemen">Software apartemen</Link><Link href="/solusi/perkantoran">Gedung perkantoran</Link><Link href="/fitur/tagihan-ipl-apartemen">Tagihan IPL apartemen</Link><Link href="/fitur/pencatatan-meter-gedung">Pencatatan meter gedung</Link><Link href="/fitur/keluhan-penghuni-apartemen">Keluhan penghuni</Link><Link href="/portal">Masuk ke portal</Link><a href={demoAppUrl} target="_blank" rel="noopener noreferrer">Demo aplikasi ↗</a><Link href="/#aplikasi">Aplikasi SistemGedung</Link></div>
        <div><strong>Kontak</strong><p>PT Naura Media Informatika<br />Terdaftar Kemenkumham No. AHU-000304.AH.01.30.Tahun 2022<br />WhatsApp: <a href="https://wa.me/6281381830651" target="_blank" rel="noopener noreferrer">081381830651</a></p><Link className="footer-cta" href="/demo">Ajukan diskusi ↗</Link></div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} SistemGedung</span><span>Informasi layanan perlu dikonfirmasi sebelum publikasi.</span></div>
    </footer>
  );
}
