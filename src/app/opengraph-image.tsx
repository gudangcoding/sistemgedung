import { ImageResponse } from "next/og";

export const alt = "SistemGedung — Aplikasi Building Management untuk Apartemen dan Gedung";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "70px",
          color: "#ffffff",
          background: "linear-gradient(125deg, #17382f 0%, #102a23 100%)",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "18px", color: "#c8f169", fontSize: 28, fontWeight: 700 }}>
          <div style={{ width: 56, height: 56, borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", color: "#c8f169", background: "#ffffff18", fontSize: 23 }}>
            SG
          </div>
          SistemGedung
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "18px", maxWidth: 970 }}>
          <div style={{ fontSize: 62, fontWeight: 700, lineHeight: 1.12 }}>Aplikasi Building Management</div>
          <div style={{ color: "#d0d9d4", fontSize: 30, lineHeight: 1.4 }}>
            Untuk pengelolaan apartemen dan gedung perkantoran
          </div>
        </div>
        <div style={{ color: "#c8f169", fontSize: 20, letterSpacing: 2 }}>TENANT · OPERASIONAL · MAINTENANCE</div>
      </div>
    ),
    size,
  );
}
