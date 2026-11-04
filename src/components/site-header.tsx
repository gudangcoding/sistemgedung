import Image from "next/image";
import Link from "next/link";
import { demoAppUrl, homeUrl } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link className="brand" href="/" aria-label="SistemGedung, beranda">
          <Image className="brand-logo" src="/logo.svg" alt="" width={34} height={34} />
          <span>Sistem<span className="brand-light">Gedung</span></span>
        </Link>
        <nav className="main-nav" aria-label="Navigasi utama">
          <a href={homeUrl}>Home</a>
          <Link href="/#layanan">Layanan</Link>
          <Link href="/#keunggulan">Keunggulan</Link>
          <Link href="/#teknologi">Teknologi</Link>
          <Link href="/#proses">Proses</Link>
          <Link href="/harga">Paket & harga</Link>
          <Link href="/berita">Berita</Link>
          <Link href="/#faq">FAQ</Link>
          <a className="nav-demo" href={demoAppUrl} target="_blank" rel="noopener noreferrer">Demo aplikasi <span aria-hidden="true">↗</span></a>
        </nav>
        <Link className="button button-dark nav-cta" href="/demo">Diskusikan kebutuhan <span>↗</span></Link>
        <details className="mobile-nav">
          <summary aria-label="Buka navigasi">☰</summary>
          <div className="mobile-menu">
            <a href={homeUrl}>Home</a><Link href="/#layanan">Layanan</Link><Link href="/#keunggulan">Keunggulan</Link><Link href="/#teknologi">Teknologi</Link>
            <Link href="/#proses">Proses</Link><Link href="/harga">Paket & harga</Link><Link href="/berita">Berita</Link>
            <Link href="/#faq">FAQ</Link><Link href="/#aplikasi">Aplikasi Android</Link><Link href="/demo">Diskusikan kebutuhan</Link>
            <a href={demoAppUrl} target="_blank" rel="noopener noreferrer">Demo aplikasi ↗</a>
          </div>
        </details>
      </div>
    </header>
  );
}
