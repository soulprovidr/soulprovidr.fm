require('dotenv').config();

const {
  DB_HOST,
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
  NODE_ENV,
  SERVER_PORT,
  STREAM_URL
} = process.env;

if (
  !DB_HOST
  || !DB_NAME
  || !DB_USER
  || !DB_PASSWORD
  || !NODE_ENV
  || !SERVER_PORT
  || !STREAM_URL
) {
  console.error('Missing environment variables.');
  return 1;
}

// Reload server when files are changed.
if (NODE_ENV === 'development') require('./watcher')('src');

require('./src/objection');
require('./src/api')(SERVER_PORT || 8000);

console.log(`Server listening on port ${SERVER_PORT || 8000}.`);