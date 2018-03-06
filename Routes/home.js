const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

//bcrypt code 
const saltRounds = 10
let dB = []
let counter = 0


router.use(bodyParser.json())

router.post('/signup', (req, res) => {
  const { username, password } = req.body

  bcrypt.hash(password, saltRounds).then
    ((hash) => {
      counter++
      console.log(counter)
     dB.push({ username, hash })
      console.log(dB)

    })

  res.send('thanks for your sign up')

})






router.get('/', (req, res) => {
  res.send("i am running")
})

module.exports = router