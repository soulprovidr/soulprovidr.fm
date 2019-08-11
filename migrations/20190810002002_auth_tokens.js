
exports.up = function(knex) {
  return knex.schema
    .withSchema('public')
    .createTable('auth_tokens', table => {
      table.increments();
      table.integer('userId')
      table.foreign('userId').references('users.id');
      table.string('value');
      table.timestamp('createdAt');
    });
};

exports.down = function(knex) {
  return knex.schema
    .withSchema('public')
    .dropTableIfExists('auth_tokens');
};
