const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('./userDB')
//bcrypt code 
const saltRounds = 10
// let dB = []
let counter = 0
let secretkey ="secretKey"


router.use(bodyParser.json())
 
router.post('/signup', (req, res) => {
  const { username, password } = req.body

  bcrypt.hash(password, saltRounds).then
    ((hash) => {
      counter++
     User.dB.push({ id:counter, username, hash,todo:[] })
    })
  res.send('thanks for your sign up')

})


router.post('/login', (req, res) => {
  const { username, password } = req.body
  let user =  User.dB.find((user) => {
    return user.username === username
  })
  if (user) {
    bcrypt.compare(password, user.hash).then((result) => {
      if (result) {
       let id=user.id
          //If we have a valid user, create jwt token with
          //the secret key
          let token = jwt.sign({
            id
          }, secretkey)
          //send the token back to the user
          res.json({ token:token, username:username })
        }
        //if the result is false, send back a null token
        else res.json({ token: null})
      })
    //If we didn't find the user, send back a null token
  } else {
    res.json({ token: null })
  }
})

router.get('/signout', (req, res) => {
  const { token } = req.headers.authorization

  //Could do something with token like invalidate
  //a session id. Any server-side security that we would
  //want to do knowing that the user is now signed out

  res.json({signedout: true})
})

router.post('/', (req, res) => {
  const token = req.headers.authorization
  jwt.verify(token,secretkey,(err,decoded)=>{
         if (err) {
          
         res.json({ success: false, message: 'Failed to authenticate token.' });    
      } else {
        // if everything is good, save to request for use in other routes
         let info =  User.dB.filter((data)=>{
          return data.id === decoded.id
        })
        req.decoded = decoded;
        res.json(info[0])    
      }

  })
})


router.get('/', (req, res) => {
  res.send("i am running")
})

module.exports = router

