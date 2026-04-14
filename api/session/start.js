export default function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "method_not_allowed" });
  }

  return res.status(501).json({
    error: "not_implemented",
    message: "试玩版暂未接入正式会话存储。下一阶段会在这里创建匿名 session。"
  });
}
