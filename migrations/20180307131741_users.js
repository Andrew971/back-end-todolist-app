
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('users', function (table) {
    table.increments('id').primary(); // adds incrementing int for id
    table.unique('Username').notNullable()
    table.string('Password').notNullable()
})
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users') // drop table when reverting
};

