const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cookieSession = require('cookie-session');

const authMiddleware = require('./modules/auth/middleware');
const authRouter = require('./modules/auth/router');
const streamRouter = require('./modules/stream/router');

const { NODE_ENV } = process.env;

const api = express();

api.set('trust proxy', 1);
api.use(cookieSession({
  name: 'session',
  keys: ['iamasecretkey'],
  maxAge: 60,
  secure: NODE_ENV === 'production'
}));

// api.use(helmet());
api.use(bodyParser.json());

api.use('/auth', authRouter);
api.use('/stream', authMiddleware, streamRouter);

module.exports = (port) => api.listen(port);