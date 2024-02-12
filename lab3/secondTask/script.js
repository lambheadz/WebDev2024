document.addEventListener("DOMContentLoaded", function() { 
    var addTaskBtn = document.getElementById('addTaskBtn');
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');

    addTaskBtn.addEventListener('click', function() {
        var taskName = taskInput.value.trim();
        if (taskName != '') {
            var task = createTaskElement(taskName);
            taskList.appendChild(task);
            taskInput.value = '';
        }
    });

    function createTaskElement(taskName) {
        var task = document.createElement('div');
        task.className = 'task';

        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                task.style.textDecoration = 'line-through';
            } else {
                task.style.textDecoration = 'none';
            }
        });

        var taskNameSpan = document.createElement('span');
        taskNameSpan.textContent = taskName;

        var image = document.createElement('img');
        image.src = "bin.webp";

        var deleteBtn = document.createElement('span');
        deleteBtn.className = 'delete_btn';
        deleteBtn.appendChild(image);
        deleteBtn.addEventListener('click', function() {
            task.remove();
        });

        task.appendChild(checkbox);
        task.appendChild(taskNameSpan);
        task.appendChild(deleteBtn);

        return task;
    }
})