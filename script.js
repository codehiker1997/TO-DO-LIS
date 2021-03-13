// ****************SELECTORS*************** //
const todoInput = document.querySelector('.to-do-input');
const todoButton = document.querySelector('.to-do-button');
const todoList = document.querySelector('.to-do-list');
// ****************EVENTLISTERNERS*************** //
todoButton.addEventListener('click', addTodo);

// ****************FUCNTIONS*************** //
function addTodo(event){
    // Prevent form from submitting
    event.preventDefault();
    // Create Todo
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo" )
    // Create List
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo)
    // Check Mark Button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    // Check Trash Button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    // APPEND TO LIST
    todoList.appendChild(todoDiv);

}
