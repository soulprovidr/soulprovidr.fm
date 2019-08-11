const express = require('express');
const router = express.Router();

const proxy = require('./proxy');

router.get('/', (req, res) => {
  proxy.web(req, res, { target: process.env.STREAM_URL });
});

module.exports = router;
