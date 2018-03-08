const User = require('../Models/users')


function AddUser (username, hash){

  const newUser = new User({
    Username: username,
    Password: hash
})
newUser.save()
	.then(user => {
	})
}


function GetUser (username, cb){
  User
	.where({Username: username})
	.fetch()
	.then(user => {
    cb(user.attributes)
	})
}

function GetInfo (id, cb){
  User.where({id: id})
	.fetch({withRelated: 'todos'})
	.then(user => {
		const todos = user.related('todos')
	  let todoList = todos.models.map(todo => todo.attributes)
		cb({
			userid: user.attributes.id,
			todos: todoList
		})
	})
}

module.exports = {AddUser, GetUser, GetInfo }

