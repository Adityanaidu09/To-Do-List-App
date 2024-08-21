let taskList = [];

document.getElementById('add-task-btn').addEventListener('click', addTask);

function addTask() {
    let taskInput = document.getElementById('task-input');
    let task = taskInput.value.trim();

    if (task !== '') {
        taskList.push({
            task: task,
            completed: false
        });

        taskInput.value = '';

        displayTasks();
    }
}

function displayTasks() {
    let taskListHTML = '';

    taskList.forEach((task, index) => {
        taskListHTML += `
            <li>
                <input type="checkbox" id="task-${index}" ${task.completed ? 'checked' : ''}>
                <label for="task-${index}">${task.task}</label>
                <button class="delete-btn" data-index="${index}">Delete</button>
            </li>
        `;
    });

    document.getElementById('task-list').innerHTML = taskListHTML;

    let deleteBtns = document.querySelectorAll('.delete-btn');

    deleteBtns.forEach((btn) => {
        btn.addEventListener('click', deleteTask);
    });
}

function deleteTask(event) {
    let index = event.target.getAttribute('data-index');
    taskList.splice(index, 1);
    displayTasks();
}

document.addEventListener('DOMContentLoaded', displayTasks);

