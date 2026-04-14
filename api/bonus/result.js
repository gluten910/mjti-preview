export default function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "method_not_allowed" });
  }

  return res.status(501).json({
    error: "not_implemented",
    message: "试玩版暂未把附加题校验迁到后端。下一阶段会在这里校验摸切正确率。"
  });
}
