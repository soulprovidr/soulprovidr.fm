require('dotenv').config()
const { knexSnakeCaseMappers } = require('objection');

const {
  DB_HOST,
  DB_NAME,
  DB_USER,
  DB_PASSWORD
} = process.env;

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: DB_HOST,
      user: DB_USER,
      password: DB_PASSWORD,
      database: DB_NAME
    },
    ...knexSnakeCaseMappers()
  }
};