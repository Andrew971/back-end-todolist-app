
const knex = require('knex')({
  client: 'pg',
  connection:{database:process.env.DATABASE_URL + '?ssl=true'}
//   connection: {
//     database: 'todoApp',
//     user:     'andrewsordier',
//     password: 'password'
// }
});
const bookshelf = require('bookshelf')(knex)


module.exports = bookshelf

// var environment =process.env.NODE_ENV || 'development';
// var knex = require('./knexfile.js')[environment];
// const bookshelf = require('bookshelf')(knex)
