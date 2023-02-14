const PROXY_CONFIG = {
  "/api": {
      "target": "34.129.191.19:3000",
      "changeOrigin": true,
      "secure": false,
      "logLevel": "debug",
      "pathRewrite": {
          "^/api": ""
      }
 }
};
module.exports = PROXY_CONFIG;