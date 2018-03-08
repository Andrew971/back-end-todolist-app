const bookshelf = require('../databaseSql')
const Todos = require('./todos')


const User = bookshelf.Model.extend({
  tableName: 'users',
  todos: function() {
      return this.hasMany(Todos)
  }
})



module.exports= User
