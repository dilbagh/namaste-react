const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const SERVER_PORT = 3000;
const PROXY_CONTEXT = '/swiggy-proxy';

const createCorsProxyMiddleware = (targetUrl) => {
  return createProxyMiddleware({
    target: targetUrl,
    changeOrigin: true,
    on: {
      proxyRes: (proxyRes, req, res) => {
        res.appendHeader('Access-Control-Allow-Origin', '*');
      },
    },
  });
};

const app = express();

app.use(
  PROXY_CONTEXT,
  createCorsProxyMiddleware('https://www.swiggy.com/dapi')
);

app.listen(SERVER_PORT, () => {
  console.log(
    `Proxy server started: http://localhost:${SERVER_PORT}${PROXY_CONTEXT}`
  );
  console.log('Press Ctrl+C to stop...');
});
