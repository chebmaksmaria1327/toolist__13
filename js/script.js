$(document).ready(function () {
    const taskInput = $('#task');
    const addButton = $('#add-button');
    const taskList = $('#todo-list');

    addButton.on('click', addTask);

    taskInput.on('keyup', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });


    function addTask() {
        const taskText = taskInput.val().trim();
        if (taskText === '') {
            return;
        }

        const listItem = $('<li></li>'); listItem.html(`
        <span>${taskText}</span>
        <button class="remove-button">Удалить</button> `);

        listItem.find('.remove-button').on('click', function () {
            listItem.remove();
        });

        taskList.append(listItem);
        taskInput.val('');
    }
});

var modal = document.getElementById("myModal");
var btn = document.getElementById("deleteButton");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
    modal.style.display = "block";
};
span.onclick = function () {
    modal.style.display = "none";
};
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};


function deleteTodo() {

    var listItem = this.parentNode;
    modal.style.display = "block";

    document.getElementById("deleteButton").onclick = function () {
        listItem.remove();
        modal.style.display = "none";
    };
}

    var todoItems = document.getElementsByClassName("todo-item");
    for (var i = 0; i < todoItems.length; i++) {
    var deleteButton = todoItems[i].getElementsByClassName("delete")[0];
    deleteButton.onclick = deleteTodo;
}