import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "@/components/eyebrow";
import { solutionImages } from "@/lib/media";

export const metadata: Metadata = {
  title: "Solusi Manajemen Apartemen dan Gedung",
  description: "Jelajahi pendekatan pengelolaan layanan dan operasional untuk apartemen serta gedung perkantoran.",
  alternates: { canonical: "/solusi" },
};

export default function SolutionsPage() {
  return (
    <section className="inner-hero">
      <div className="container">
        <Eyebrow>SOLUSI PER PROPERTI</Eyebrow>
        <h1>Ruang yang lebih baik<br /><span>dimulai dari proses.</span></h1>
        <p className="inner-lead">Setiap jenis properti memiliki ritme dan kebutuhan layanan yang berbeda.</p>
        <div className="solution-grid">
          <Link href="/solusi/apartemen">
            <div className="solution-thumb">
              <Image
                src={solutionImages.apartemen}
                alt="Tampilan aplikasi BMS Tenant untuk layanan penghuni apartemen"
                fill
                sizes="(max-width: 760px) 100vw, 50vw"
              />
            </div>
            <span>01 / HUNIAN</span>
            <h2>Apartemen</h2>
            <p>Keluhan tenant, pengumuman, fasilitas, dan koordinasi pemeliharaan.</p>
            <b>Jelajahi solusi ↗</b>
          </Link>
          <Link href="/solusi/perkantoran">
            <div className="solution-thumb">
              <Image
                src={solutionImages.perkantoran}
                alt="Tampilan BMS Web Portal untuk pengelolaan operasional gedung perkantoran"
                fill
                sizes="(max-width: 760px) 100vw, 50vw"
              />
            </div>
            <span>02 / KOMERSIAL</span>
            <h2>Gedung perkantoran</h2>
            <p>Alur layanan tenant, pekerjaan teknisi, aset, dan perawatan fasilitas.</p>
            <b>Jelajahi solusi ↗</b>
          </Link>
        </div>
      </div>
    </section>
  );
}
