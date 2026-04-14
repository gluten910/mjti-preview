import { computeResultFromAnswers } from "../../_lib/mjti-data.js";
import { json, requireDb } from "../../_lib/db.js";

export async function onRequest(context) {
  if (context.request.method !== "POST") {
    return json(
      { error: "method_not_allowed" },
      { status: 405, headers: { Allow: "POST" } }
    );
  }

  try {
    const body = await context.request.json();
    const sessionId = body?.sessionId || null;
    const answers = body?.answers || {};
    const result = computeResultFromAnswers(answers);
    if (sessionId) {
      const db = requireDb(context.env);
      await db
        .prepare(
          `UPDATE sessions
           SET updated_at = ?, completed_at = ?, status = 'completed',
               current_step = ?, answers_json = ?, main_result_code = ?,
               main_result_codes_json = ?, main_similarity = ?, mode_kicker = ?
           WHERE id = ?`
        )
        .bind(
          new Date().toISOString(),
          new Date().toISOString(),
          Object.keys(answers).length,
          JSON.stringify(answers),
          result.finalType.code,
          JSON.stringify(result.displayTypes.map((item) => item.code)),
          Number(String(result.badge).match(/(\d+)%/)?.[1] || 0),
          result.modeKicker,
          sessionId
        )
        .run();
    }
    return json({ ok: true, result });
  } catch (error) {
    return json(
      {
        error: "bad_request",
        message: "无法解析主测试答案。",
        detail: String(error?.message || error)
      },
      { status: 400 }
    );
  }
}
