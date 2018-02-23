const express = require('express')
const app = express()
const port = process.env.PORT|| 8080
const Todo = require('./Routes/todo')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

    next();
  });

app.use('/todo', Todo)



app.listen(port, (req, res) => {
    console.log('I am running')
})