var environment =process.env.NODE_ENV || 'development';
var knex = require('./knexfile.js')[environment];
const bookshelf = require('bookshelf')(knex)


module.exports = bookshelf