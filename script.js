// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a task
    function addTask() {
        const taskText = taskInput.value.trim(); // Remove whitespace

        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        // Create <li> element
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;

        // Create remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';

        // Event to remove task
        removeButton.onclick = function () {
            taskList.removeChild(taskItem);
        };

        // Append button and list item
        taskItem.appendChild(removeButton);
        taskList.appendChild(taskItem);

        // Clear input field
        taskInput.value = '';
    }

    // Event listener for button click
    addButton.addEventListener('click', addTask);

    // Allow Enter key to add task
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
