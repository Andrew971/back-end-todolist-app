const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const User = require('./userDB')
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

let todo = []

router.post('/get', jsonParser, (req, res) => {
	let userDb = User.dB
	let data = req.body
	let Current = userDb.find((user) => {
		return user.id == data.parentId
	})
	res.send(Current.todo)
})

router.post('/', jsonParser, (req, res, body) => {
	let data = req.body
	let userDb = User.dB

	userDb.forEach((user) => {
		if (user.id === data.parentId) {
			user.todo.push(data.Input)
		}
	})
	let Current = userDb.find((user) => {
		return user.id == data.parentId
	})

	res.json(Current.todo)

})

router.post('/:id', jsonParser, (req, res, body) => {
	let { id } = req.params
	let data = req.body
	let userDb = User.dB

	userDb.forEach((user) => {
		if (user.id === data.parentId) {
			user.todo = user.todo.filter((item) => {
				return item.id !== Number(id);
			});
		}
	})
	let Current = userDb.find((user) => {
		return user.id == data.parentId
	})
	res.json(Current.todo)

})



router.post('/update/:id', jsonParser, (req, res, body) => {
	let { id } = req.params
	let data = req.body
	let userDb = User.dB
	userDb.forEach((user) => {
		if (user.id === data.parentId) {
			user.todo = user.todo.map((item) => {
				if (item.id == id) {
					item.status = data.status
				}
				return item
			})
		}
	})
	let Current = userDb.find((user) => {
		return user.id == data.parentId
	})

	res.json(Current.todo)

})


module.exports = router