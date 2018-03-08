const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
const todo = require('../Controllers/todo')

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })


router.post('/get', jsonParser, (req, res) => {
	let data = req.body
	let {parentId} = data

	todo.GetTodo(parentId,(todo)=>{
		res.json(todo.todos)
	})
})

router.post('/', jsonParser, (req, res, body) => {
	let data = req.body
	let {parentId} = data
	let {text,status} = data.Input

	todo.AddTodo(text,status,parentId,(todo)=>{
		res.json(todo.todos)
	})
})

router.post('/:todoId', jsonParser, (req, res, body) => {
	let { todoId } = req.params
	let data = req.body
	let {parentId} = data
	let userDb = User.dB

	todo.RemoveTodo(parentId,todoId,(todo)=>{
		res.json(todo.todos)
	})

})



router.post('/update/:todoId', jsonParser, (req, res, body) => {
	let { todoId } = req.params
	let data = req.body
	let {parentId, status} = data

	todo.UpdateTodo(parentId,todoId,status,(todo)=>{
		res.json(todo.todos)
	})
})


module.exports = router