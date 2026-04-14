function json(data, init = {}) {
  const headers = new Headers(init.headers || {});
  headers.set("content-type", "application/json; charset=UTF-8");

  return new Response(JSON.stringify(data), {
    ...init,
    headers,
  });
}

export function onRequestGet() {
  return json({
    ok: true,
    service: "mjti-api",
    mode: "preview",
    date: new Date().toISOString(),
  });
}

