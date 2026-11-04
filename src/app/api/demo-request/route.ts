const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: "Format permintaan tidak valid." }, { status: 400 });
  }

  if (!payload || typeof payload !== "object") {
    return Response.json({ error: "Permintaan tidak valid." }, { status: 400 });
  }

  const data = payload as Record<string, unknown>;
  const name = typeof data.name === "string" ? data.name.trim() : "";
  const email = typeof data.email === "string" ? data.email.trim() : "";
  const propertyType = typeof data.propertyType === "string" ? data.propertyType : "";
  const message = typeof data.message === "string" ? data.message.trim() : "";
  const packageInterest = data.packageInterest;
  if (name.length < 2 || name.length > 100 || !emailPattern.test(email) || email.length > 254 ||
    !["Apartemen", "Gedung perkantoran", "Lainnya"].includes(propertyType) || message.length < 10 || message.length > 2000 ||
    (packageInterest !== undefined && !["", "basic", "growth", "enterprise", "custom"].includes(String(packageInterest)))) {
    return Response.json({ error: "Periksa kembali kelengkapan formulir." }, { status: 400 });
  }

  // Scaffold behavior: deliberately do not log, persist, or forward personal data.
  return Response.json({ accepted: true, stored: false }, { status: 202 });
}
