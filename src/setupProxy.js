// src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/accuweather', // You can change this path to your preferred endpoint
    createProxyMiddleware({
      target: 'https://dataservice.accuweather.com',
      changeOrigin: true,
      pathRewrite: {
        '^/accuweather': '/', // Optionally, you can rewrite the path if needed
      },
    })
  );
};
