require('dotenv').config();

const SERVER_PORT = process.env.SERVER_PORT || 8000;
const STREAM_URL = process.env.STREAM_URL;

if (!STREAM_URL) {
  console.error('No stream URL specified.');
  return 1;
}

require('./api')(SERVER_PORT);