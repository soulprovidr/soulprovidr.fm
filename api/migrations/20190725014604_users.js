
exports.up = knex => {
  return knex.schema
    .withSchema('public')
    .createTable('users', table => {
      table.increments();
      table.string('firstName');
      table.string('lastName');
      table.string('email');
      table.string('password');
      table.timestamps();
    });
};

exports.down = knex => {
  return knex.schema
    .withSchema('public')
    .dropTableIfExists('users');
};
