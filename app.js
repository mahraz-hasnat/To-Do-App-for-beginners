// Get DOM elements
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Load tasks from local storage
const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Function to render tasks
function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task.name;
        if (task.completed) {
            li.classList.add('completed');
        }
        li.addEventListener('click', () => {
            toggleTask(index);
        });
        taskList.appendChild(li);
    });
}

// Function to add task
function addTask(name) {
    tasks.push({ name, completed: false });
    renderTasks();
    saveTasks();
}

// Function to toggle task completion status
function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
    saveTasks();
}

// Function to save tasks to local storage
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Event listener for form submission
taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const taskName = taskInput.value.trim();
    if (taskName !== '') {
        addTask(taskName);
        taskInput.value = '';
    }
});

// Render initial tasks
renderTasks();
