const knex = require('knex')({
  client: 'pg',
  connection: {
    database: 'todoApp',
    user:     'andrewsordier',
    password: 'password'
}});
const bookshelf = require('bookshelf')(knex)


module.exports = bookshelf