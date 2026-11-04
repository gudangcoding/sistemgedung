import Image from "next/image";
import Link from "next/link";
import { demoAppUrl } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Link className="brand footer-brand" href="/"><Image className="brand-logo" src="/logo.svg" alt="" width={34} height={34} /><span>Sistem<span className="brand-light">Gedung</span></span></Link>
          <p>Teknologi dan dukungan operasional untuk pengelolaan gedung yang lebih terstruktur.</p>
        </div>
        <div><strong>Jelajahi</strong><Link href="/layanan/software">Pengembangan software</Link><Link href="/layanan/operasional">Dukungan operasional</Link><Link href="/#teknologi">Teknologi</Link><Link href="/#proses">Proses implementasi</Link><Link href="/#faq">FAQ</Link><Link href="/harga">Paket & harga</Link><Link href="/berita">Berita</Link></div>
        <div><strong>Portal</strong><Link href="/portal">Masuk ke portal</Link><a href={demoAppUrl} target="_blank" rel="noopener noreferrer">Demo aplikasi ↗</a><Link href="/#aplikasi">Aplikasi Android</Link><Link href="/solusi/apartemen">Apartemen</Link><Link href="/solusi/perkantoran">Gedung perkantoran</Link></div>
        <div><strong>Kontak</strong><p>Informasi kontak belum disediakan. Ajukan permintaan diskusi melalui formulir.</p><Link className="footer-cta" href="/demo">Ajukan diskusi ↗</Link></div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} SistemGedung</span><span>Informasi layanan perlu dikonfirmasi sebelum publikasi.</span></div>
    </footer>
  );
}
