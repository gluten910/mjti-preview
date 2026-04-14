import { computeBonusResultFromAnswers } from "../../_lib/mjti-data.js";
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
    const bonusAnswers = body?.bonusAnswers || {};
    const result = computeBonusResultFromAnswers(bonusAnswers);
    if (sessionId) {
      const db = requireDb(context.env);
      await db
        .prepare(
          `UPDATE sessions
           SET updated_at = ?, bonus_answers_json = ?, bonus_title = ?,
               bonus_accuracy = ?, bonus_correct = ?, bonus_total = ?
           WHERE id = ?`
        )
        .bind(
          new Date().toISOString(),
          JSON.stringify(bonusAnswers),
          result.title,
          result.accuracy,
          result.correct,
          result.total,
          sessionId
        )
        .run();
    }
    return json({ ok: true, result });
  } catch (error) {
    return json(
      {
        error: "bad_request",
        message: "无法解析附加题答案。",
        detail: String(error?.message || error)
      },
      { status: 400 }
    );
  }
}
