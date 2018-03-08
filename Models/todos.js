const bookshelf = require('../databaseSql')

const Todo = bookshelf.Model.extend({
  tableName: 'todos',
  user: function() {
      return this.belongsTo(User)
  }
})



module.exports= Todo
