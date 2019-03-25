let TODO_URL = "http://localhost:3000/todos"
let todoUL = document.getElementById("todoUL")
let addTodoBtn = document.getElementById("addTodoBtn")
let submitTodoBtn = document.getElementById("submitTodoBtn")
let createTodoDiv = document.getElementById("createTodoDiv")
let taskTitleTextBox = document.getElementById("taskTitleTextBox")
let taskPrioritySelectBox = document.getElementById("taskPrioritySelectBox")


fetch("http://localhost:3000/todos")
.then(function(response) {
  return response.json()
})
.then(function(todos){
  let todoDisplay = todos.map(function(todo){
    let taskStartDate = new Date(todo.dateCreated)
    let taskEndDate = new Date(todo.dateCompleted)
    let status = displayStatus(todo.isCompleted, taskEndDate)
    return `<li>
            <h4>Task: ${todo.title}</h4>
            <p>Priority: ${todo.priority}</p>
            <p>Date created: ${taskStartDate.toLocaleDateString()}</p>
            ${status}
            <button onclick="markTask('${todo.isCompleted}')">Complete Task</button>
            </li>`
  })
  todoUL.innerHTML = todoDisplay.join('')
})

function displayStatus(status, date) {
  let completion = ``
  if(status){
    completion = `<p>Date finished: ${date}</p>
                  <p>finished</p>`
    return completion
  }
  else{
    completion = `<p>unfinished</p>`
    return completion
  }
}

addTodoBtn.addEventListener('click',function(){
  showTodoForm()
})

submitTodoBtn.addEventListener('click',function(){
  let title = taskTitleTextBox.value
  let priority = taskPrioritySelectBox.value
  let date = new Date().getTime()
  let paramsToSend = {title: title, priority: priority, dateCreated: date, dateCompleted: "", isCompleted: false}
  fetch(TODO_URL, {
    method: "POST",
    headers:{
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(paramsToSend)
  })
  showTodoForm()
})
function showTodoForm() {
  if(createTodoDiv.hidden) {
    createTodoDiv.hidden = false
  }
  else{
    createTodoDiv.hidden = true
  }
}
function markTask(status){
  if(status){
    status = false
    console.log(status)
    return status
  }else{
    status = true
    console.log(status)
    return status
  }

}
