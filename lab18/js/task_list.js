/*eslint-env browser*/

var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};

var addToTaskList = function () {
    "use strict";
    var newTask, taskTextBox;
    
    taskTextBox = $("task");
    newTask = new Task(taskTextBox.value);
    if (newTask.isValid()) {
        tasklist.add(newTask);
        tasklist.save();
        tasklist.display();
        taskTextBox.value = "";
        $("task").focus();
    } else {
        window.alert("Please enter a task.");
    }
};

var clearTaskList = function () {
    "use strict";
    tasklist.clear();
    $("task").focus();
};

var deleteFromTaskList = function () {
    "use strict";
    tasklist.deletetask(this.title);
    tasklist.save();
    tasklist.display();
    $("task").focus();
};

window.onload = function () {
    "use strict";
    $("add_task").addEventListener("click", addToTaskList);
    $("clear_tasks").addEventListener("click", clearTaskList);
    
    tasklist.displayDiv = $("tasks");
    tasklist.deleteClickHandler = deleteFromTaskList;
    
    tasklist.load();
    tasklist.display();
    
    $("task").focus();
};