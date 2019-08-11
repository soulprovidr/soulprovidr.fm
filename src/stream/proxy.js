const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer({
  ignorePath: true
});

proxy.on('error', (err, req, res) => {
  res.status(500).send('Error proxying stream.');
});

proxy.on('proxyReq', (proxyReq, req, res) => {
  proxyReq.setHeader('Connection', 'keep-alive');
});

module.exports = proxy;