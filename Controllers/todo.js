const Todo = require('../Models/todos')
const User = require('../Models/users')

function AddTodo(text, status, id, cb) {

	const newTodo = new Todo({
		Text: text,
		Status: status,
		user_id: id
	})
	newTodo.save()
		.then(todo => {
			User.where({ id: todo.attributes.user_id })
				.fetch({ withRelated: 'todos' })
				.then(user => {
					const todos = user.related('todos')
					let todoList = todos.models.map(self => self.attributes)
					cb({
						todos: todoList
					})
				})
		})
}

function RemoveTodo(user_id, todoId, cb) {
	Todo.where({ id: todoId })
		.destroy()
		.then(function (todo) {
			User.where({ id: user_id })
				.fetch({ withRelated: 'todos' })
				.then(user => {
					const todos = user.related('todos')
					let todoList = todos.models.map(todo => todo.attributes)
					cb({
						todos: todoList
					})
				})
		})
}

function UpdateTodo (user_id,todoId,status,cb){
	const attributesToUpdate = {
    Status: status
}
Todo.where({ id: todoId })
		.save(attributesToUpdate, {patch:true})
.then(todo=> {
	User.where({ id: user_id })
		.fetch({ withRelated: 'todos' })
		.then(user => {
			const todos = user.related('todos')
			let todoList = todos.models.map(todo => todo.attributes)
			cb({
				todos: todoList
			})
		})
})
}

function GetTodo (user_id, cb){
  User.where({id: user_id})
	.fetch({withRelated: 'todos'})
	.then(user => {
		const todos = user.related('todos')
	  let todoList = todos.models.map(todo => todo.attributes)
		cb({
			todos: todoList
		})
	})
}

module.exports = { AddTodo, RemoveTodo, UpdateTodo,GetTodo }
