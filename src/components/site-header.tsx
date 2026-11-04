import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link className="brand" href="/" aria-label="SistemGedung, beranda">
          <span className="brand-mark">S<span>G</span></span>
          <span>Sistem<span className="brand-light">Gedung</span></span>
        </Link>
        <nav className="main-nav" aria-label="Navigasi utama">
          <Link href="/layanan/software">Layanan</Link>
          <Link href="/harga">Paket & harga</Link>
          <Link href="/solusi">Solusi</Link>
          <Link href="/artikel">Wawasan</Link>
          <Link href="/#tentang">Tentang</Link>
        </nav>
        <Link className="button button-dark nav-cta" href="/demo">Diskusikan kebutuhan <span>↗</span></Link>
        <details className="mobile-nav">
          <summary aria-label="Buka navigasi">☰</summary>
          <div className="mobile-menu">
            <Link href="/layanan/software">Layanan</Link><Link href="/harga">Paket & harga</Link><Link href="/solusi">Solusi</Link>
            <Link href="/artikel">Wawasan</Link><Link href="/demo">Diskusikan kebutuhan</Link>
          </div>
        </details>
      </div>
    </header>
  );
}
