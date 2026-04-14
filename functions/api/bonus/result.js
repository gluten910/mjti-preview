function json(data, init = {}) {
  const headers = new Headers(init.headers || {});
  headers.set("content-type", "application/json; charset=UTF-8");

  return new Response(JSON.stringify(data), {
    ...init,
    headers,
  });
}

import { computeBonusResultFromAnswers } from "../../_lib/mjti-data.js";

export async function onRequest(context) {
  if (context.request.method !== "POST") {
    return json(
      { error: "method_not_allowed" },
      { status: 405, headers: { Allow: "POST" } }
    );
  }

  try {
    const body = await context.request.json();
    const bonusAnswers = body?.bonusAnswers || {};
    const result = computeBonusResultFromAnswers(bonusAnswers);
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
