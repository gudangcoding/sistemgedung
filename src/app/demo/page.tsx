import type { Metadata } from "next";
import { Eyebrow } from "@/components/eyebrow";
import { DemoForm } from "@/components/demo-form";

export const metadata: Metadata = { title: "Diskusikan Kebutuhan", description: "Kirim permintaan untuk membahas kebutuhan aplikasi dan operasional gedung.", alternates: { canonical: "/demo" } };
export default function DemoPage() {
  return <section className="demo-page"><div className="container demo-layout"><div><Eyebrow>MULAI PERCAKAPAN</Eyebrow><h1>Ceritakan kebutuhan<br />gedung Anda.</h1><p className="inner-lead">Bagikan konteks singkat agar diskusi awal lebih terarah. Informasi pada formulir ini tidak disimpan atau diteruskan dalam scaffold ini.</p><div className="demo-note"><span>↗</span><p>Kontak bisnis belum tersedia. Mohon lengkapi dan verifikasi informasi kontak sebelum formulir digunakan secara operasional.</p></div></div><DemoForm /></div></section>;
}
