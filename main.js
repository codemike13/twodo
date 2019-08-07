// Global data.
// A few todos in there to start with!
// This is mostly for testing purposes.
// let todos = [
//   `Be able to mark todos "done".`,
//   `Allow user interaction through the DOM`,
//   `Add dates to todos.`,
// ];

// let completed = [
//   false,
//   false,
//   false,
// ]

// Or the ALTERNATE method:
const addButton = document.querySelector(".add-todo")
const completeButton = document.querySelector(".mark-todo-complete")
const delCompleteButton = document.querySelector(".delete-completed-todos")
let toDoInput = document.querySelector(".todo-input")
let numberInput = document.querySelector(".number-input")

let todos = []

function printToDom(todo) {
  let li = document.createElement("li")
  let ul = document.querySelector(".todo-list")
  li.innerText = todo;
  ul.appendChild(li)  
}

function printList() {
  let i = 0;
  while (i < todos.length) {
    printToDom(todos[i][0])
    i = i + 1;
  }
}

function addToDo(todo){
  todos.push([todo,false])
}

function removeTodo(index){
  todos.splice([index][0],1)
}

function markComplete(index){
  let ul = document.querySelector(".todo-list")
  todos[index-1][1] = true;
  ul.childNodes[index-1].style.textDecoration ="line-through"
}

function deleteComplete () {
  for (todo in todos) {
   if (todos[todo][1]===true){
     removeTodo(todo)
   }
  }
}
function clearList(){
  event.preventDefault();
  let ul = document.querySelector(".todo-list")

  while(ul.hasChildNodes()){
    ul.removeChild(ul.firstChild)
  }
}
addButton.addEventListener("click",()=>{
  addToDo(toDoInput.value)
  printToDom(toDoInput.value)
  toDoInput.value=""
})

completeButton.addEventListener("click",()=>{
  markComplete(numberInput.value)
  numberInput.value=""
})

delCompleteButton.addEventListener("click",()=>{
  deleteComplete();
  clearList()
  printList()
})
