// src/routes/api/proxy.js
import { createProxyMiddleware } from "http-proxy-middleware";

const proxy = createProxyMiddleware({
  target: "https://fundingchoicesmessages.google.com", // cible de l'API externe
  changeOrigin: true,
  pathRewrite: {
    "^/api/proxy": "", // réécriture du chemin pour correspondre à la cible
  },
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
  proxy(req, res);
}
