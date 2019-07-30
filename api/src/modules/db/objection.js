const { Model } = require('objection');
const Knex = require('./knex');
const knexConfig = require('../../../knexfile');

const knex = Knex(knexConfig.development);

Model.knex(knex);