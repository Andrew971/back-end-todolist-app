const knex = require('knex')({
  client: 'pg',
  connection:'postgres://pvdktlsqiflocg:6f70b41436be046b08583f359560648a260ccdfed5aa4896bd153d508f7f38c7@ec2-50-17-206-214.compute-1.amazonaws.com:5432/dd4jl772brs562'
//   connection: {
//     database: 'todoApp',
//     user:     'andrewsordier',
//     password: 'password'
// }
});
const bookshelf = require('bookshelf')(knex)


module.exports = bookshelf