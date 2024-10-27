var textarea = document.getElementById("newTask");
var addTaskButton = document.getElementById("addTaskButton");
textarea.addEventListener("input", () => {
    if(textarea.value === ""){
        addTaskButton.disabled = true;
        addTaskButton.classList.add("disabled");
        addTaskButton.classList.remove("enabled");
        addTaskButton.removeAttribute("onclick");
    }else{
        addTaskButton.disabled = false;
        addTaskButton.classList.remove("disabled");
        addTaskButton.classList.add("enabled");
        addTaskButton.setAttribute("onclick", "addTask()");
    }
});

textarea.addEventListener('keypress', function(event) {
    if (event.key === 'Enter' && textarea.value != "") {
        event.preventDefault();
        addTask();
    }
  });

function addTask(){
    let pending = document.getElementById("pendingTasks")
    let outerdiv = document.createElement("div")
    outerdiv.classList.add("tasks");
    let para = document.createElement("p");
    para.textContent = textarea.value;
    textarea.value = "";
    addTaskButton.classList.add("disabled");
    addTaskButton.classList.remove("enabled");
    let button = document.createElement("button");
    button.classList.add("completed");
    button.setAttribute("onclick", "taskCompleted(this)");
    button.textContent = "Mark Complete";
    outerdiv.appendChild(para)
    outerdiv.appendChild(button);
    pending.appendChild(outerdiv);
    addTaskButton.removeAttribute("onclick");
}

function taskCompleted(button){
    let task = button.parentElement;
    let taskContent = task.querySelector("p").textContent;
    let completedTasks = document.getElementById("completedTasks");
    let innerdiv = document.createElement("div");
    innerdiv.classList.add("tasks");
    let para = document.createElement("p");
    para.textContent = taskContent;
    let deleteButton = document.createElement("button");
    innerdiv.appendChild(para);
    innerdiv.appendChild(deleteButton);
    deleteButton.setAttribute("onclick", "deleteTask(this)");
    completedTasks.appendChild(innerdiv);
    deleteButton.textContent = "Delete";
    task.remove();
}

function deleteTask(button){
    let parent = button.parentElement;
    parent.remove();
}