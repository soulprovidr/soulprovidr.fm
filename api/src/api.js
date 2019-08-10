const express = require('express');
const bodyParser = require('body-parser');
// const cookieParser = require('cookie-parser');

const authMiddleware = require('./modules/auth/middleware');
const authRouter = require('./modules/auth/router');
const streamRouter = require('./modules/stream/router');

const api = express();

api.use(bodyParser.json());

api.use('/auth', authRouter);
api.use('/stream', authMiddleware, streamRouter);

module.exports = (port) => api.listen(port);