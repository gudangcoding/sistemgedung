"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

export type PortalRole = "admin" | "tenant" | "teknisi";

const roleInfo = {
  admin: { name: "Admin gedung", subtitle: "Pusat kendali operasional", initials: "AD", menu: ["Ringkasan", "Tiket & work order", "Gedung & unit", "Tenant & pengguna", "Aset & pemeliharaan", "Vendor", "Pengumuman", "Laporan"] },
  tenant: { name: "Tenant", subtitle: "Portal layanan penghuni", initials: "TN", menu: ["Beranda", "Permintaan saya", "Fasilitas", "Pengumuman", "Profil & unit"] },
  teknisi: { name: "Teknisi engineering", subtitle: "Ruang kerja teknisi", initials: "EN", menu: ["Ringkasan tugas", "Work order", "Checklist inspeksi", "Jadwal pemeliharaan", "Aset", "Eskalasi"] },
};

const navMap: Record<PortalRole, { label: string; href: string }[]> = {
  admin: [{ label: "Ringkasan", href: "/portal/admin" }, { label: "Tenant & unit", href: "/portal/admin#tenant" }, { label: "Tiket & work order", href: "/portal/admin#tiket" }, { label: "Aset & pemeliharaan", href: "/portal/admin#aset" }, { label: "Vendor & pengumuman", href: "/portal/admin#vendor" }, { label: "Laporan", href: "/portal/admin#laporan" }],
  tenant: [{ label: "Beranda", href: "/portal/tenant" }, { label: "Permintaan saya", href: "/portal/tenant#permintaan" }, { label: "Fasilitas", href: "/portal/tenant#fasilitas" }, { label: "Pengumuman", href: "/portal/tenant#pengumuman" }, { label: "Profil & unit", href: "/portal/tenant#profil" }],
  teknisi: [{ label: "Ringkasan tugas", href: "/portal/teknisi" }, { label: "Work order", href: "/portal/teknisi#work-order" }, { label: "Checklist", href: "/portal/teknisi#checklist" }, { label: "Jadwal", href: "/portal/teknisi#jadwal" }, { label: "Aset", href: "/portal/teknisi#aset" }, { label: "Eskalasi", href: "/portal/teknisi#eskalasi" }],
};

const initialTickets = [
  { id: "TK-2048", title: "Pemeriksaan pompa air", location: "Ruang utilitas · Ilustrasi", priority: "Tinggi", status: "Ditugaskan", category: "Engineering" },
  { id: "TK-2047", title: "Lampu koridor perlu diperiksa", location: "Lantai 08 · Ilustrasi", priority: "Normal", status: "Dalam proses", category: "Kelistrikan" },
  { id: "TK-2046", title: "Permintaan informasi fasilitas", location: "Unit contoh · Ilustrasi", priority: "Rendah", status: "Menunggu", category: "Layanan tenant" },
];

function Badge({ children, tone = "" }: { children: React.ReactNode; tone?: string }) {
  return <span className={`badge ${tone}`}>{children}</span>;
}

function Stat({ label, value, note, icon }: { label: string; value: string; note: string; icon: string }) {
  return <div className="stat-card"><div className="stat-top"><span>{label}</span><i>{icon}</i></div><b>{value}</b><small>{note}</small></div>;
}

export function PortalDashboard({ role }: { role: PortalRole }) {
  const [activeFilter, setActiveFilter] = useState("Semua");
  const [tickets, setTickets] = useState(initialTickets);
  const [notice, setNotice] = useState("");
  const [checklist, setChecklist] = useState([false, false, false]);
  const info = roleInfo[role];
  const filtered = useMemo(() => activeFilter === "Semua" ? tickets : tickets.filter((ticket) => ticket.status === activeFilter), [activeFilter, tickets]);

  function updateFirstTicket() {
    setTickets((current) => current.map((ticket, index) => index === 0 ? { ...ticket, status: ticket.status === "Ditugaskan" ? "Dalam proses" : "Selesai" } : ticket));
    setNotice("Status contoh diperbarui pada sesi ini. Belum disimpan ke server.");
  }

  return <div className="portal-app">
    <aside className="portal-sidebar">
      <Link className="portal-brand" href="/"><span className="brand-mark">S<span>G</span></span><span>Sistem<span>Gedung</span></span></Link>
      <div className="portal-building"><small>DEMO PROPERTI</small><b>Gedung Contoh <span>⌄</span></b><small>Lokasi ilustratif</small></div>
      <div className="portal-menu-title">{info.subtitle}</div>
      <nav>{navMap[role].map((item, index) => <a className={index === 0 ? "active" : ""} href={item.href} key={item.label}><i>{["◫", "▤", "◉", "⌂", "◇", "▧"][index % 6]}</i>{item.label}</a>)}</nav>
      <div className="sidebar-bottom"><div className="portal-user"><span>{info.initials}</span><div><b>{info.name}</b><small>Akun demo</small></div><span>•••</span></div><div className="sidebar-hint">MODE DEMO<br />Data bersifat ilustratif</div></div>
    </aside>
    <main className="portal-main">
      <header className="portal-topbar"><div><span>Properti</span><b>/</b><strong>{info.name}</strong></div><div className="topbar-actions"><span className="demo-pill">DEMO</span><button aria-label="Notifikasi" onClick={() => setNotice("Tidak ada notifikasi baru pada tampilan demo.")}>♧</button><span className="avatar">{info.initials}</span></div></header>
      <div className="portal-content">
        <div className="portal-heading"><div><span className="portal-overline">{role === "admin" ? "OVERVIEW" : role === "tenant" ? "LAYANAN PENGHUNI" : "ENGINEERING / SHIFT"} · DATA CONTOH</span><h1>{role === "admin" ? "Selamat datang kembali" : role === "tenant" ? "Halo, penghuni" : "Tugas untuk hari ini"}</h1><p>{role === "admin" ? "Ringkasan aktivitas operasional properti Anda." : role === "tenant" ? "Informasi layanan dan permintaan Anda dalam satu tempat." : "Tinjau tugas, jadwal, dan inspeksi yang perlu ditangani."}</p></div><button className="portal-primary" onClick={() => setNotice(role === "tenant" ? "Form permintaan baru siap dihubungkan pada integrasi backend." : "Aksi demo tersedia setelah backend terintegrasi.")}>{role === "tenant" ? "+ Buat permintaan" : role === "admin" ? "+ Buat tiket" : "＋ Catat pekerjaan"}</button></div>
        <div className="demo-banner"><span>ⓘ</span><p><b>Mode tampilan demo.</b> Nama properti, tiket, angka, dan profil pada halaman ini merupakan data ilustratif, bukan informasi pelanggan.</p><Link href="/portal">Pilih peran lain ↗</Link></div>
        {notice && <div className="portal-toast" role="status">{notice}<button onClick={() => setNotice("")}>×</button></div>}

        {role === "admin" && <>
          <div className="stat-grid"><Stat label="Tiket terbuka" value="12" note="Data contoh" icon="↗" /><Stat label="Sedang ditangani" value="08" note="Data contoh" icon="◷" /><Stat label="Jadwal pemeliharaan" value="05" note="Ilustrasi hari ini" icon="⌘" /><Stat label="Aset terdaftar" value="128" note="Data contoh" icon="◇" /></div>
          <section className="portal-panel" id="tiket"><div className="panel-heading"><div><h2>Tiket & work order</h2><p>Keluhan dan pekerjaan yang perlu ditindaklanjuti</p></div><button className="panel-link" onClick={() => setActiveFilter("Semua")}>Lihat semua ↗</button></div><div className="filter-row">{["Semua", "Ditugaskan", "Dalam proses", "Menunggu", "Selesai"].map((filter) => <button className={filter === activeFilter ? "selected" : ""} key={filter} onClick={() => setActiveFilter(filter)}>{filter}</button>)}</div><div className="table-scroll"><table><thead><tr><th>ID / KATEGORI</th><th>PERMINTAAN</th><th>LOKASI</th><th>PRIORITAS</th><th>STATUS</th><th /></tr></thead><tbody>{filtered.map((ticket, i) => <tr key={ticket.id}><td><b>{ticket.id}</b><small>{ticket.category}</small></td><td>{ticket.title}</td><td>{ticket.location}</td><td><Badge tone={ticket.priority === "Tinggi" ? "badge-high" : ""}>{ticket.priority}</Badge></td><td><Badge tone={ticket.status === "Dalam proses" ? "badge-blue" : ""}>{ticket.status}</Badge></td><td><button className="row-action" aria-label="Perbarui tiket" onClick={updateFirstTicket}>•••</button></td></tr>)}</tbody></table></div></section>
          <div className="portal-lower-grid"><section className="portal-panel" id="tenant"><div className="panel-heading"><div><h2>Ringkasan properti</h2><p>Unit dan akun · data contoh</p></div><button className="row-action">•••</button></div><div className="property-summary"><div><span>Unit terdaftar</span><b>240</b><small>Data ilustratif</small></div><div><span>Tenant aktif</span><b>186</b><small>Data ilustratif</small></div></div><div className="property-progress"><span>Data profil unit</span><b>Perlu verifikasi</b><div><i /></div><small>Contoh tampilan kelengkapan data</small></div></section><section className="portal-panel" id="aset"><div className="panel-heading"><div><h2>Pemeliharaan terjadwal</h2><p>Agenda ilustratif mendatang</p></div><button className="row-action">•••</button></div><div className="schedule-item"><time>09:00</time><i className="schedule-dot" /><div><b>Inspeksi pompa transfer</b><small>Ruang utilitas · Teknisi contoh</small></div><Badge>Terjadwal</Badge></div><div className="schedule-item"><time>13:30</time><i className="schedule-dot lime" /><div><b>Pemeriksaan panel listrik</b><small>Area servis · Teknisi contoh</small></div><Badge>Terjadwal</Badge></div></section></div>
          <div className="portal-lower-grid bottom-modules"><section className="portal-panel" id="vendor"><div className="panel-heading"><div><h2>Vendor & pengumuman</h2><p>Area pengelolaan yang tersedia</p></div></div><p className="module-placeholder">Siapkan daftar vendor terverifikasi dan pengumuman gedung setelah data operasional tersedia.</p></section><section className="portal-panel" id="laporan"><div className="panel-heading"><div><h2>Laporan operasional</h2><p>Ringkasan demonstrasi</p></div></div><div className="report-placeholder"><span>↗</span><p>Visualisasi laporan akan terhubung ke data aktual setelah integrasi.</p></div></section></div>
        </>}

        {role === "tenant" && <>
          <div className="tenant-welcome"><div><span>UNIT</span><b>A-00-00</b><small>Profil dan unit contoh</small></div><div><span>STATUS AKUN</span><b><Badge>Demo</Badge></b><small>Tidak terhubung ke akun penghuni</small></div><div><span>PERMINTAAN AKTIF</span><b>02</b><small>Data ilustratif</small></div></div>
          <section className="portal-panel" id="permintaan"><div className="panel-heading"><div><h2>Permintaan layanan</h2><p>Pantau status laporan Anda</p></div><button className="panel-link" onClick={() => setNotice("Form permintaan akan dihubungkan ke backend setelah integrasi.")}>+ Buat permintaan</button></div>{initialTickets.slice(0, 2).map((ticket) => <div className="tenant-ticket" key={ticket.id}><div className="ticket-icon">↗</div><div><b>{ticket.title}</b><small>{ticket.id} · Diajukan pada sesi demo · Data contoh</small></div><Badge tone={ticket.status === "Dalam proses" ? "badge-blue" : ""}>{ticket.status}</Badge><button className="row-action" onClick={() => setNotice(`Detail ${ticket.id} merupakan data ilustratif.`)}>↗</button></div>)}</section>
          <div className="portal-lower-grid"><section className="portal-panel" id="fasilitas"><div className="panel-heading"><div><h2>Fasilitas gedung</h2><p>Informasi reservasi memerlukan kebijakan properti</p></div></div><div className="facility-row"><span>◎</span><div><b>Ruang serbaguna</b><small>Informasi fasilitas belum dikonfigurasi</small></div><button onClick={() => setNotice("Permohonan fasilitas memerlukan konfigurasi pengelola.")}>Ajukan ↗</button></div><div className="facility-row"><span>⌁</span><div><b>Area olahraga</b><small>Informasi fasilitas belum dikonfigurasi</small></div><button onClick={() => setNotice("Permohonan fasilitas memerlukan konfigurasi pengelola.")}>Ajukan ↗</button></div></section><section className="portal-panel" id="pengumuman"><div className="panel-heading"><div><h2>Pengumuman</h2><p>Belum ada informasi terverifikasi</p></div></div><div className="empty-state"><span>▤</span><b>Belum ada pengumuman</b><small>Informasi akan tampil setelah dikelola admin gedung.</small></div></section></div>
          <section className="portal-panel profile-panel" id="profil"><div className="panel-heading"><div><h2>Profil dan dokumen</h2><p>Data contoh; tidak ada dokumen penghuni</p></div></div><p>Billing dan dokumen dapat dikonfigurasi berdasarkan kebijakan gedung dan integrasi yang disepakati.</p></section>
        </>}

        {role === "teknisi" && <>
          <div className="stat-grid"><Stat label="Tugas aktif" value="04" note="Data contoh" icon="↗" /><Stat label="Inspeksi hari ini" value="03" note="Jadwal ilustratif" icon="⌘" /><Stat label="Menunggu suku cadang" value="01" note="Data ilustratif" icon="◷" /><Stat label="Perlu eskalasi" value="01" note="Tinjau sesuai prosedur" icon="!" /></div>
          <div className="portal-lower-grid technician-grid"><section className="portal-panel" id="work-order"><div className="panel-heading"><div><h2>Work order ditugaskan</h2><p>Urutan tugas ilustratif</p></div><button className="panel-link" onClick={() => setNotice("Filter work order memerlukan integrasi backend.")}>Filter ↕</button></div>{initialTickets.slice(0, 2).map((ticket) => <div className="work-order-card" key={ticket.id}><div className="work-order-top"><span>{ticket.id}</span><Badge tone={ticket.priority === "Tinggi" ? "badge-high" : ""}>{ticket.priority}</Badge></div><h3>{ticket.title}</h3><p>⌖ {ticket.location}</p><small>Kategori: {ticket.category} · Data contoh</small><button onClick={updateFirstTicket}>{ticket.status === "Ditugaskan" ? "Mulai pekerjaan →" : "Perbarui status →"}</button></div>)}</section><section className="portal-panel" id="checklist"><div className="panel-heading"><div><h2>Checklist inspeksi</h2><p>Daftar ilustratif · periksa SOP dan instruksi teknis</p></div><button className="row-action">•••</button></div>{["Gunakan perlengkapan keselamatan sesuai prosedur", "Periksa kondisi visual sesuai instruksi aset", "Catat temuan dan tindak lanjut"].map((item, index) => <label className="checklist-item" key={item}><input type="checkbox" checked={checklist[index]} onChange={() => setChecklist((current) => current.map((value, i) => i === index ? !value : value))} /><span>{item}</span></label>)}<div className="checklist-foot">{checklist.filter(Boolean).length} dari {checklist.length} selesai (lokal)</div></section></div>
          <div className="portal-lower-grid"><section className="portal-panel" id="jadwal"><div className="panel-heading"><div><h2>Jadwal pemeliharaan</h2><p>Data demonstrasi, bukan jadwal aktual</p></div></div><div className="schedule-item"><time>09:00</time><i className="schedule-dot" /><div><b>Pemeriksaan pompa transfer</b><small>Ruang utilitas · Checklist terkait</small></div><Badge>Hari ini</Badge></div><div className="schedule-item"><time>13:30</time><i className="schedule-dot lime" /><div><b>Inspeksi pencahayaan</b><small>Area umum · Checklist terkait</small></div><Badge>Hari ini</Badge></div></section><section className="portal-panel" id="aset"><div className="panel-heading"><div><h2>Aset terkait tugas</h2><p>Informasi aset contoh</p></div></div><div className="asset-card"><span>◇</span><div><b>Pompa transfer PT-00</b><small>Ruang utilitas · Detail belum diverifikasi</small></div><button onClick={() => setNotice("Detail aset memerlukan data terverifikasi.")}>Lihat ↗</button></div></section></div>
          <section className="portal-panel escalation-panel" id="eskalasi"><div className="panel-heading"><div><h2>Catatan, lampiran, dan eskalasi</h2><p>Antarmuka integrasi pekerjaan teknisi</p></div></div><div className="technician-inputs"><label>Catatan pekerjaan<textarea placeholder="Tambahkan catatan (tersedia setelah terhubung)" disabled /></label><label>Foto lampiran<input type="file" accept="image/*" disabled /></label><button disabled>Eskalasi ke pengelola ↗</button></div><p className="module-placeholder">Penyimpanan catatan dan lampiran belum diaktifkan. Jangan unggah data operasional pada demo ini.</p></section>
        </>}
        <footer className="portal-footer"><span>© SistemGedung · Antarmuka demonstrasi</span><Link href="/portal">Beralih peran</Link><span>Data ini bukan data properti aktual.</span></footer>
      </div>
    </main>
  </div>;
}
