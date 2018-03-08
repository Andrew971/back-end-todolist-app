
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('todos', function (table) {
    table.increments('id').primary(); // adds incrementing int for id
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
    table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
    table.string('Text').notNullable();
    table.boolean('Status').notNullable();
    table.integer('user_id').unsigned().notNullable();

    table.foreign('user_id').references('id').inTable('users');

})
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('todos') // drop table when reverting
};

