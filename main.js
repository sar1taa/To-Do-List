function addTask() {
    let input = document.getElementById('taskInput');
    let taskText = input.value.trim();

    if (taskText === '') {
        alert("Please enter Task");
        return
    };

    let taskList = document.getElementById('taskList');
    let li = document.createElement('li');
    let span = document.createElement('span');
    span.textContent = taskText;
    span.onclick = function () {
        toggleComplete(li);
    };

    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = '-';
    deleteBtn.className = 'delete-btn';
    deleteBtn.onclick = function () {
        deleteTask(li);
    };

    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    // Clear input
    input.value = '';
}

function toggleComplete(taskElement) {
    taskElement.classList.toggle('completed');
}

function deleteTask(taskElement) {
    taskElement.remove();
}
