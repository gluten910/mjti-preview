export default function handler(req, res) {
  res.status(200).json({
    ok: true,
    service: "mjti-api",
    mode: "preview",
    date: new Date().toISOString()
  });
}
