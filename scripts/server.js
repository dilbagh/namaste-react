const SWIGGY_RESTAURANT_API_URL =
  'https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5355161&lng=77.3910265&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING';

const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use(
  '/restaurants',
  createProxyMiddleware({
    target: SWIGGY_RESTAURANT_API_URL,
    changeOrigin: true,
    on: {
      proxyRes: (proxyRes, req, res) => {
        res.appendHeader('Access-Control-Allow-Origin', '*');
      },
    },
  })
);

app.listen(3000);
