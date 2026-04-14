import { json, requireDb } from "../../_lib/db.js";

export async function onRequest(context) {
  if (context.request.method !== "POST") {
    return json(
      { error: "method_not_allowed" },
      { status: 405, headers: { Allow: "POST" } }
    );
  }

  try {
    const db = requireDb(context.env);
    const body = await context.request.json();
    const sessionId = body?.sessionId;
    const answers = body?.answers || {};
    const currentStep = Number(body?.currentStep || 0);
    const totalQuestions = Number(body?.totalQuestions || 0);
    if (!sessionId) {
      return json({ error: "missing_session_id" }, { status: 400 });
    }

    await db
      .prepare(
        `UPDATE sessions
         SET updated_at = ?, current_step = ?, total_questions = ?, answers_json = ?
         WHERE id = ?`
      )
      .bind(
        new Date().toISOString(),
        currentStep,
        totalQuestions,
        JSON.stringify(answers),
        sessionId
      )
      .run();

    return json({ ok: true });
  } catch (error) {
    return json(
      { error: "answer_save_failed", message: String(error?.message || error) },
      { status: 500 }
    );
  }
}
