export const beritaImage = (slug: string) => `/images/berita/${slug}.webp`;
export const beritaOgImage = (slug: string) => `/images/berita/${slug}-og.png`;
export const artikelImage = (slug: string) => `/images/artikel/${slug}.webp`;
export const artikelOgImage = (slug: string) => `/images/artikel/${slug}-og.png`;

export const solutionImages = {
  apartemen: "/images/solusi/apartemen.webp",
  perkantoran: "/images/solusi/perkantoran.webp",
} as const;

export const serviceImages = {
  software: "/images/layanan/software.webp",
  operasional: "/images/layanan/operasional.webp",
} as const;

export const brandLogo = "/logo.svg";
export const brandLogoPng = "/images/brand/logo-512.png";
