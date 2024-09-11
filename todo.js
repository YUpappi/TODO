const taskInput = document.getElementById('taskInput');
const submitBtn = document.querySelector('.submit-btn ');
const todoList = document.getElementById('todo-list');
const filterOption = document.querySelector(".filter-todo");

function addTodo(event) {
    event.preventDefault();
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    const newTodo = document.createElement('li');
    newTodo.innerText = taskInput.value.toUpperCase();
    newTodo.classList.add('todo-item');

    todoDiv.appendChild(newTodo);

    const completeBtn = document.createElement('button');
    completeBtn.innerHTML = '<i class="fa-solid fa-check"></i>'
    completeBtn.classList.add('complete-btn');
    todoDiv.appendChild(completeBtn);

    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>'
    deleteBtn.classList.add('delete-btn');
    todoDiv.appendChild(deleteBtn);

    todoList.appendChild(todoDiv)
    taskInput.value = '';

}


function deleteTask(task) {
    const deleteItem = task.target
    if (deleteItem.classList[0]==='delete-btn') {
        const parent = deleteItem.parentElement;
        parent.classList.add('rotate')
        setTimeout(() => {
            parent.remove()
        }, 500);
    }

       // Check if the clicked element is the complete button
       if (deleteItem.classList[0]=== 'complete-btn' ) {
        const parentTodo = deleteItem.parentElement;
        parentTodo.classList.toggle('completed');
    }
}

function filterTodo(e) {
    const todos = todoList.children;
    Array.from(todos).forEach(function (todo) {
      switch (e.target.value) {
        case "all":
          todo.style.display = "flex";
          break;
        case "completed":
          if (todo.classList.contains("completed")) {
            todo.style.display = "flex";
          } else {
            todo.style.display = "none";
          }
          break;
        case "uncompleted":
          if (!todo.classList.contains("completed")) {
            todo.style.display = "flex";
          } else {
            todo.style.display = "none";
          }
          break;
      }
    });
  }



submitBtn.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteTask);
filterOption.addEventListener("click", filterTodo);
