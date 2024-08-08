// src/routes/api/proxy.js
import { createProxyMiddleware } from "http-proxy-middleware";

const proxy = createProxyMiddleware({
  target: "", // cible de l'API externe sera définie dynamiquement
  changeOrigin: true,
  onProxyReq: (proxyReq, req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, OPTIONS",
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization",
    );
  },
});

export default function handler(req, res) {
  const { url } = req.query;
  if (!url) {
    res.status(400).json({ error: "URL is required" });
    return;
  }

  proxy.options.target = url;
  proxy(req, res, (err) => {
    if (err) {
      res.status(500).json({ error: "Proxy error", details: err.message });
    }
  });
}
