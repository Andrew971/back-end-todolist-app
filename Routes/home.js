const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const secretkey = require('./userDB')
const userDB = require('./userDB')

//bcrypt code 
const saltRounds = 10



router.use(bodyParser.json())

router.post('/signup', (req, res) => {
  const { username, password } = req.body
  console.log(username,password)

  bcrypt.hash(password, saltRounds).then
    ((hash) => {

      userDB.push({ username, hash })
      console.log(userDB)

    })

  res.send('thanks for your sign up')

})






router.get('/', (req, res) => {
  res.send("i am running")
})

module.exports = router