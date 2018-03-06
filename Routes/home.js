const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('./userDB.js')

//bcrypt code 
const saltRounds = 10



router.use(bodyParser.json())

router.post('/signup', (req, res) => {
  const { username, password } = req.body

  bcrypt.hash(password, saltRounds).then
    ((hash) => {

      User.db.push({ username, hash })
      console.log(User.db)

    })

  res.send('thanks for your sign up')

})






router.get('/', (req, res) => {
  res.send("i am running")
})

module.exports = router