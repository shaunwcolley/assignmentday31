const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')

let todos = []

app.use(bodyParser.json())
app.use(cors())

app.get('/', function(req, res){
  res.send("No 404, no way!")
})

app.listen(3000,function(){
  console.log("Swerve serve...")
})

app.get('/todos', function(req, res){
  res.send(todos)
})

app.post('/todos', function(req, res){
  let title = req.body.title
  let priority = req.body.title
  let dateCreated = req.body.dateCreated
  let dateCompleted = req.body.dateCompleted
  let isCompleted = req.body.isCompleted
  let todo = {
    title: title,
    priority: priority,
    dateCreated: dateCreated,
    dateCompleted: dateCompleted,
    isCompleted: isCompleted
  }
  todos.push(todo)
  res.send("Post Received")
})
