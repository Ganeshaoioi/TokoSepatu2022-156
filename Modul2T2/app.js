// Select elements
const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// Add task
addBtn.addEventListener('click', () => {
    const task = taskInput.value;
    if (task !== '') {
        addTask(task);
        taskInput.value = ''; // Clear input field
    }
});

function addTask(taskText) {
    const li = document.createElement('li');
    li.classList.add('todo-item');
    
    const taskSpan = document.createElement('span');
    taskSpan.innerText = taskText;
    
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.addEventListener('click', () => li.remove());



    li.appendChild(taskSpan);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);
}

function editTask(taskSpan) {
    const newTask = prompt('Edit your task:', taskSpan.innerText);
    if (newTask) {
        taskSpan.innerText = newTask;
    }
}
