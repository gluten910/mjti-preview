function json(data, init = {}) {
  const headers = new Headers(init.headers || {});
  headers.set("content-type", "application/json; charset=UTF-8");

  return new Response(JSON.stringify(data), {
    ...init,
    headers,
  });
}

export function onRequest(context) {
  if (context.request.method !== "POST") {
    return json(
      { error: "method_not_allowed" },
      { status: 405, headers: { Allow: "POST" } }
    );
  }

  return json(
    {
      error: "not_implemented",
      message: "试玩版暂未接入单题作答采集。下一阶段会在这里记录题目进度。",
    },
    { status: 501 }
  );
}

