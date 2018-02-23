const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')

var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

let todo = []

router.get('/', (req, res) => {
    res.send(todo)
})

router.post('/', jsonParser, (req, res, body) => {
    let data = req.body
   
    todo.push(data)
 
    res.json(todo)

})

router.delete('/:id', jsonParser, (req, res, body) => {
    let {id} = req.params
    todo = todo.filter((item) => {
        return item.id !== Number(id);
      });
  
    res.json(todo)

})



router.post('/:id', jsonParser, (req, res, body) => {
    let {id} = req.params
    let data = req.body
   
    todo = todo.map((item) => {
        if(item.id == id){
            item.status = data.status
        }
        return  item
    }) 
    res.json(todo)

})


module.exports = router