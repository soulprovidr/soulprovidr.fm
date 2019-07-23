const express = require('express');
const bodyParser = require('body-parser');

const streamRouter = require('./modules/stream/router');

const api = express();

// Authentication middleware.
api.use(passport.authenticate('local'));
api.use('/stream', streamRouter);

module.exports = (port) => api.listen(port);