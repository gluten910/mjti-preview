export function json(data, init = {}) {
  const headers = new Headers(init.headers || {});
  headers.set("content-type", "application/json; charset=UTF-8");
  return new Response(JSON.stringify(data), { ...init, headers });
}

export function getClientMeta(request) {
  const userAgent = request.headers.get("user-agent") || "";
  const ip =
    request.headers.get("cf-connecting-ip") ||
    request.headers.get("x-forwarded-for") ||
    "";
  const country = request.headers.get("cf-ipcountry") || "";
  const colo = request.headers.get("cf-ray") || "";
  return { userAgent, ip, country, colo };
}

export async function sha256Hex(input) {
  const data = new TextEncoder().encode(input);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return [...new Uint8Array(digest)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

export function requireDb(env) {
  if (!env || !env.DB) {
    throw new Error("D1 database binding `DB` is missing.");
  }
  return env.DB;
}
