var environment = process.env.NODE_ENV || 'development';
var config = require('./knexfile.js')[environment];
const bookshelf = require('bookshelf')(config)


module.exports = bookshelf