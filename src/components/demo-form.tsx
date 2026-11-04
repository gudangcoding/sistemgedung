"use client";

import { FormEvent, useState } from "react";

export function DemoForm({ initialPackage = "" }: { initialPackage?: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [packageInterest, setPackageInterest] = useState(initialPackage);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form).entries());
    try {
      const response = await fetch("/api/demo-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!response.ok) throw new Error("Permintaan belum dapat diproses.");
      setSubmitted(true);
      form.reset();
    } catch {
      setError("Permintaan belum dapat diproses. Silakan coba kembali.");
    }
  }

  return <form className="demo-form" onSubmit={handleSubmit}>
    {submitted ? <div className="form-success" role="status"><span>✓</span><h2>Terima kasih.</h2><p>Formulir diterima untuk sesi ini. Belum ada tim atau kanal kontak yang terhubung, sehingga tindak lanjut belum dijadwalkan.</p><button className="text-link" type="button" onClick={() => setSubmitted(false)}>Kirim permintaan lain →</button></div> : <>
      <div className="form-heading"><span>FORMULIR DISKUSI</span><b>01 / 05</b></div>
      <label>Nama<input name="name" autoComplete="name" minLength={2} maxLength={100} required placeholder="Nama Anda" /></label>
      <label>Email kerja<input name="email" type="email" autoComplete="email" maxLength={254} required placeholder="nama@perusahaan.com" /></label>
      <label>Jenis properti<select name="propertyType" required defaultValue=""><option value="" disabled>Pilih jenis properti</option><option>Apartemen</option><option>Gedung perkantoran</option><option>Lainnya</option></select></label>
      <label>Paket yang ingin dibahas<select name="packageInterest" value={packageInterest} onChange={(event) => setPackageInterest(event.target.value)}><option value="">Belum ditentukan</option><option value="basic">Basic · estimasi Rp3.900.000/bulan</option><option value="growth">Growth · estimasi Rp6.900.000/bulan</option><option value="enterprise">Enterprise · estimasi Rp12.900.000/bulan</option><option value="custom">Kebutuhan khusus / add-on</option></select></label>
      <label>Apa yang ingin dibahas?<textarea name="message" minLength={10} maxLength={2000} required placeholder="Ceritakan kebutuhan atau tantangan operasional Anda." rows={4} /></label>
      <p className="privacy-note">Jangan masukkan informasi sensitif. Dalam scaffold ini data hanya divalidasi sementara dan tidak disimpan atau diteruskan.</p>
      {error && <p className="form-error" role="alert">{error}</p>}
      <button className="button button-dark form-submit" type="submit">Kirim permintaan <span>↗</span></button>
    </>}
  </form>;
}
