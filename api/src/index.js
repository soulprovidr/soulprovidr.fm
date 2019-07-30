require('dotenv').config();

const {
  DB_HOST,
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
  SERVER_PORT,
  STREAM_URL
} = process.env;

if (
  !DB_HOST
  || !DB_NAME
  || !DB_USER
  || !DB_PASSWORD
  || !SERVER_PORT
  || !STREAM_URL
) {
  console.error('Missing environment variables.');
  return 1;
}

require('./modules/db/objection');
require('./api')(SERVER_PORT || 8000);