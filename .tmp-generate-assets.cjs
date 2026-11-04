const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const root = process.cwd();
const out = (...parts) => path.join(root, "public", "images", ...parts);
const mkdir = (dir) => fs.mkdirSync(dir, { recursive: true });

const palettes = [
  { bg1: "#17382f", bg2: "#0f2921", accent: "#c8f169", soft: "#d9f7a3", ink: "#f4f8ef" },
  { bg1: "#1d4e45", bg2: "#123630", accent: "#9fe3c4", soft: "#d3f5e6", ink: "#f2fbf7" },
  { bg1: "#3e4d2a", bg2: "#26331a", accent: "#d7e89b", soft: "#edf5c8", ink: "#fbfdf3" },
  { bg1: "#24394a", bg2: "#152733", accent: "#9fd8e0", soft: "#d6f1f4", ink: "#f2fafb" },
  { bg1: "#4a3b2c", bg2: "#30261c", accent: "#e6c88f", soft: "#f5e4c4", ink: "#fdf9f2" },
  { bg1: "#2b3450", bg2: "#1a2033", accent: "#b8c8f5", soft: "#dde5ff", ink: "#f5f7ff" },
  { bg1: "#243f2e", bg2: "#15291e", accent: "#b7e29a", soft: "#dff3ce", ink: "#f5fbf1" },
];

const wrapText = (text, maxChars) => {
  const words = text.split(/\s+/);
  const lines = [];
  let line = "";
  for (const word of words) {
    if ((line + " " + word).trim().length > maxChars && line) {
      lines.push(line.trim());
      line = word;
    } else {
      line = (line + " " + word).trim();
    }
  }
  if (line) lines.push(line.trim());
  return lines;
};

const esc = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const skyline = (p, seed) => {
  const shift = (seed % 3) * 18;
  return `
    <g opacity=".92">
      <rect x="${720 + shift}" y="330" width="92" height="300" fill="${p.accent}" fill-opacity=".2"/>
      <rect x="${828 + shift}" y="250" width="112" height="380" fill="${p.soft}" fill-opacity=".16"/>
      <rect x="${956 + shift}" y="300" width="84" height="330" fill="${p.accent}" fill-opacity=".26"/>
      <rect x="${1056 + shift}" y="200" width="122" height="430" fill="${p.soft}" fill-opacity=".12"/>
      <g fill="${p.accent}" fill-opacity=".5">
        <rect x="${744 + shift}" y="356" width="16" height="16" rx="2"/>
        <rect x="${776 + shift}" y="356" width="16" height="16" rx="2"/>
        <rect x="${744 + shift}" y="388" width="16" height="16" rx="2"/>
        <rect x="${776 + shift}" y="388" width="16" height="16" rx="2"/>
        <rect x="${856 + shift}" y="280" width="18" height="18" rx="2"/>
        <rect x="${892 + shift}" y="280" width="18" height="18" rx="2"/>
        <rect x="${856 + shift}" y="318" width="18" height="18" rx="2"/>
        <rect x="${892 + shift}" y="318" width="18" height="18" rx="2"/>
        <rect x="${976 + shift}" y="328" width="16" height="16" rx="2"/>
        <rect x="${1008 + shift}" y="328" width="16" height="16" rx="2"/>
        <rect x="${1080 + shift}" y="228" width="20" height="20" rx="2"/>
        <rect x="${1120 + shift}" y="228" width="20" height="20" rx="2"/>
        <rect x="${1080 + shift}" y="268" width="20" height="20" rx="2"/>
        <rect x="${1120 + shift}" y="268" width="20" height="20" rx="2"/>
      </g>
    </g>`;
};

const motif = (p, seed) => {
  const type = seed % 4;
  if (type === 0) {
    return `
      ${skyline(p, seed)}
      <circle cx="1070" cy="110" r="240" fill="none" stroke="${p.ink}" stroke-opacity=".1" stroke-width="1.5"/>
      <circle cx="1070" cy="110" r="170" fill="none" stroke="${p.ink}" stroke-opacity=".1" stroke-width="1.5"/>`;
  }
  if (type === 1) {
    return `
      <g opacity=".6">
        <rect x="690" y="150" width="150" height="150" rx="28" fill="${p.accent}" fill-opacity=".16"/>
        <rect x="870" y="150" width="150" height="150" rx="28" fill="${p.soft}" fill-opacity=".12"/>
        <rect x="780" y="330" width="150" height="150" rx="28" fill="${p.soft}" fill-opacity=".12"/>
        <rect x="960" y="330" width="150" height="150" rx="28" fill="${p.accent}" fill-opacity=".16"/>
        <rect x="870" y="510" width="150" height="150" rx="28" fill="${p.accent}" fill-opacity=".1"/>
      </g>`;
  }
  if (type === 2) {
    return `
      <g fill="none" stroke-linecap="round">
        <path d="M620 520 C760 360 860 620 1000 400 S1160 300 1260 380" stroke="${p.accent}" stroke-opacity=".3" stroke-width="2"/>
        <path d="M620 560 C760 400 860 660 1000 440 S1160 340 1260 420" stroke="${p.soft}" stroke-opacity=".2" stroke-width="2"/>
        <path d="M620 600 C760 440 860 700 1000 480 S1160 380 1260 460" stroke="${p.ink}" stroke-opacity=".12" stroke-width="2"/>
        <circle cx="1010" cy="210" r="120" fill="${p.accent}" fill-opacity=".08"/>
        <circle cx="1010" cy="210" r="190" fill="none" stroke="${p.ink}" stroke-opacity=".1"/>
      </g>`;
  }
  return `
    <g opacity=".8">
      ${skyline(p, seed + 1)}
      <g transform="translate(860 120) rotate(-8)">
        <rect width="170" height="120" rx="14" fill="${p.accent}" fill-opacity=".15"/>
        <rect x="18" y="20" width="60" height="12" rx="6" fill="${p.accent}" fill-opacity=".55"/>
        <rect x="18" y="42" width="112" height="12" rx="6" fill="${p.ink}" fill-opacity=".2"/>
        <rect x="18" y="64" width="88" height="12" rx="6" fill="${p.ink}" fill-opacity=".15"/>
      </g>
    </g>`;
};

const baseSvg = ({ p, seed, label, index, eyebrow, title, subtitle, kind }) => {
  const lines = title ? wrapText(title, title.length > 100 ? 44 : 38) : [];
  const fontSize = lines.length > 3 ? 34 : 40;
  const lineHeight = fontSize + 11;
  const startY = 236;
  const titleMarkup = lines
    .slice(0, 4)
    .map(
      (line, i) =>
        `<text x="64" y="${startY + i * lineHeight}" font-family="Arial, Helvetica, sans-serif" font-size="${fontSize}" font-weight="700" fill="${p.ink}">${esc(line)}</text>`,
    )
    .join("");

  const thumbText = kind === "thumb"
    ? `
      <text x="64" y="462" font-family="Arial, Helvetica, sans-serif" font-size="18" letter-spacing="3.4" font-weight="700" fill="${p.accent}">${esc(label)}</text>
      <text x="64" y="566" font-family="Arial, Helvetica, sans-serif" font-size="92" font-weight="700" fill="${p.ink}" fill-opacity=".82">${esc(index)}</text>
      <text x="1136" y="566" text-anchor="end" font-family="Arial, Helvetica, sans-serif" font-size="28" font-weight="700" fill="${p.accent}" letter-spacing="1">SG.</text>`
    : `
      <text x="64" y="150" font-family="Arial, Helvetica, sans-serif" font-size="17" letter-spacing="3.4" font-weight="700" fill="${p.accent}">${esc(eyebrow)}</text>
      ${titleMarkup}
      <text x="64" y="548" font-family="Arial, Helvetica, sans-serif" font-size="19" font-weight="700" fill="${p.accent}">sistemgedung.com</text>
      <text x="64" y="578" font-family="Arial, Helvetica, sans-serif" font-size="14" letter-spacing="2.6" fill="${p.ink}" fill-opacity=".66">${esc(subtitle)}</text>`;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="${p.bg1}"/>
        <stop offset="1" stop-color="${p.bg2}"/>
      </linearGradient>
      <pattern id="dots" width="30" height="30" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="1.5" fill="#ffffff" fill-opacity=".12"/>
      </pattern>
    </defs>
    <rect width="1200" height="630" fill="url(#bg)"/>
    <rect width="1200" height="630" fill="url(#dots)"/>
    ${motif(p, seed)}
    <g>
      <rect x="60" y="54" width="46" height="46" rx="12" fill="#ffffff" fill-opacity=".13"/>
      <text x="83" y="85" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="18" font-weight="700" fill="${p.accent}">SG</text>
      <text x="122" y="85" font-family="Arial, Helvetica, sans-serif" font-size="23" font-weight="700" fill="${p.ink}">SistemGedung</text>
    </g>
    ${thumbText}
  </svg>`;
};

const parseArticles = () => {
  const source = fs.readFileSync(path.join(root, "src", "content", "articles.ts"), "utf8");
  const re = /slug:\s*"([^"]+)",\s*category:\s*"([^"]+)",\s*title:\s*"([^"]+)"/g;
  const items = [];
  let match;
  while ((match = re.exec(source))) {
    items.push({ slug: match[1], category: match[2], title: match[3] });
  }
  return items;
};

const main = async () => {
  const berita = JSON.parse(fs.readFileSync(path.join(root, "src", "content", "berita.json"), "utf8"));
  const articles = parseArticles();

  mkdir(out());
  mkdir(out("berita"));
  mkdir(out("artikel"));
  mkdir(out("solusi"));
  mkdir(out("layanan"));
  mkdir(out("brand"));
  mkdir(path.join(root, "public", "icons"));

  for (const [index, item] of berita.entries()) {
    const p = palettes[index % palettes.length];
    const number = String(index + 1).padStart(2, "0");
    const thumbSvg = baseSvg({ p, seed: index, label: item.category, index: number, kind: "thumb" });
    const ogSvg = baseSvg({
      p,
      seed: index,
      eyebrow: item.category,
      title: item.title,
      subtitle: "PANDUAN EVERGREEN · OPERASIONAL GEDUNG",
      kind: "og",
    });
    await sharp(Buffer.from(thumbSvg)).webp({ quality: 82 }).toFile(out("berita", `${item.slug}.webp`));
    await sharp(Buffer.from(ogSvg)).png({ compressionLevel: 9 }).toFile(out("berita", `${item.slug}-og.png`));
  }

  for (const [index, item] of articles.entries()) {
    const p = palettes[(index + 2) % palettes.length];
    const number = String(index + 1).padStart(2, "0");
    const thumbSvg = baseSvg({ p, seed: index + 1, label: item.category, index: number, kind: "thumb" });
    const ogSvg = baseSvg({
      p,
      seed: index + 1,
      eyebrow: item.category,
      title: item.title,
      subtitle: "FIELD NOTES · OPERASIONAL GEDUNG",
      kind: "og",
    });
    await sharp(Buffer.from(thumbSvg)).webp({ quality: 82 }).toFile(out("artikel", `${item.slug}.webp`));
    await sharp(Buffer.from(ogSvg)).png({ compressionLevel: 9 }).toFile(out("artikel", `${item.slug}-og.png`));
  }

  const visuals = [
    { file: "solusi/apartemen.webp", seed: 0, eyebrow: "SOLUSI APARTEMEN", title: "Layanan penghuni yang mudah ditelusuri", subtitle: "TENANT · FASILITAS · PEMELIHARAAN" },
    { file: "solusi/perkantoran.webp", seed: 3, eyebrow: "SOLUSI PERKANTORAN", title: "Operasional gedung yang siap dikoordinasikan", subtitle: "TENANT · WORK ORDER · ASET" },
    { file: "layanan/software.webp", seed: 1, eyebrow: "PENGEMBANGAN SOFTWARE", title: "Aplikasi yang mengikuti proses gedung Anda", subtitle: "CUSTOM · INTEGRASI · PORTAL PERAN" },
    { file: "layanan/operasional.webp", seed: 6, eyebrow: "DUKUNGAN OPERASIONAL", title: "Proses layanan yang jelas untuk setiap kebutuhan", subtitle: "LAYANAN · KOORDINASI · INSPEKSI" },
  ];

  for (const visual of visuals) {
    const p = palettes[visual.seed % palettes.length];
    const svg = baseSvg({ p, seed: visual.seed, eyebrow: visual.eyebrow, title: visual.title, subtitle: visual.subtitle, kind: "og" });
    await sharp(Buffer.from(svg)).webp({ quality: 84 }).toFile(out(visual.file));
  }

  const logoSource = fs.readFileSync(path.join(root, "public", "logo.svg"));
  const logo = sharp(logoSource);
  await logo.clone().resize(512, 512).png({ compressionLevel: 9 }).toFile(out("brand", "logo-512.png"));
  await logo.clone().resize(192, 192).png({ compressionLevel: 9 }).toFile(out("brand", "logo-192.png"));
  await logo.clone().resize(192, 192).png({ compressionLevel: 9 }).toFile(path.join(root, "public", "icons", "icon-192.png"));
  await logo.clone().resize(512, 512).png({ compressionLevel: 9 }).toFile(path.join(root, "public", "icons", "icon-512.png"));
  await logo.clone().resize(180, 180).png({ compressionLevel: 9 }).toFile(path.join(root, "src", "app", "apple-icon.png"));

  const maskable = await sharp({
    create: { width: 512, height: 512, channels: 4, background: "#152521" },
  })
    .composite([{ input: await logo.clone().resize(360, 360).png().toBuffer(), top: 76, left: 76 }])
    .png({ compressionLevel: 9 })
    .toBuffer();
  fs.writeFileSync(path.join(root, "public", "icons", "maskable-512.png"), maskable);

  const icoSizes = [16, 32, 48];
  const pngs = await Promise.all(
    icoSizes.map(async (size) => ({ size, buffer: await logo.clone().resize(size, size).png().toBuffer() })),
  );
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(pngs.length, 4);
  const entries = pngs.map(({ size, buffer }) => {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(size >= 256 ? 0 : size, 0);
    entry.writeUInt8(size >= 256 ? 0 : size, 1);
    entry.writeUInt8(0, 2);
    entry.writeUInt8(0, 3);
    entry.writeUInt16LE(1, 4);
    entry.writeUInt16LE(32, 6);
    entry.writeUInt32LE(buffer.length, 8);
    entry.writeUInt32LE(0, 12);
    return entry;
  });
  let offset = 6 + entries.length * 16;
  entries.forEach((entry, i) => {
    entry.writeUInt32LE(offset, 12);
    offset += pngs[i].buffer.length;
  });
  fs.writeFileSync(
    path.join(root, "src", "app", "favicon.ico"),
    Buffer.concat([header, ...entries, ...pngs.map((p) => p.buffer)]),
  );

  console.log(`Generated ${berita.length} berita, ${articles.length} artikel, ${visuals.length} visuals, logo, icons, favicon.`);
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
