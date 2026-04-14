import { json, getClientMeta, requireDb, sha256Hex } from "../../_lib/db.js";

export async function onRequest(context) {
  if (context.request.method !== "POST") {
    return json(
      { error: "method_not_allowed" },
      { status: 405, headers: { Allow: "POST" } }
    );
  }

  try {
    const db = requireDb(context.env);
    const body = await context.request.json().catch(() => ({}));
    const source = body?.source || "";
    const id = crypto.randomUUID();
    const now = new Date().toISOString();
    const meta = getClientMeta(context.request);
    const ipHash = meta.ip ? await sha256Hex(meta.ip) : null;

    await db
      .prepare(
        `INSERT INTO sessions (
          id, started_at, updated_at, status, current_step, total_questions, source, user_agent, ip_hash, country, colo
        ) VALUES (?, ?, ?, 'started', 0, ?, ?, ?, ?, ?, ?)`
      )
      .bind(id, now, now, 26, source, meta.userAgent, ipHash, meta.country, meta.colo)
      .run();

    return json({ ok: true, sessionId: id });
  } catch (error) {
    return json(
      { error: "session_start_failed", message: String(error?.message || error) },
      { status: 500 }
    );
  }
}
