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
      message: "试玩版暂未把附加题校验迁到后端。下一阶段会在这里校验摸切正确率。",
    },
    { status: 501 }
  );
}
