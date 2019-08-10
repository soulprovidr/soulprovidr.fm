const { Model } = require('objection');
const Knex = require('knex');
const knexConfig = require('../../../knexfile');

const { NODE_ENV } = process.env;

const knex = Knex(knexConfig[NODE_ENV]);

Model.knex(knex);