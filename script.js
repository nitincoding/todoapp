const taskList = document.getElementById("taskList");
const taskName = document.getElementById("taskname");

function addTask(){
    if(taskName.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = taskName.value;
        taskList.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

       
    }
    taskName.value = "";
    savedata();
}
taskName.addEventListener("keydown",function(e){
    if(e.key == 'Enter'){
        if(taskName.value.trim() != ''){
            addTask();
        }
    }
});

taskList.addEventListener("click",function(e){
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName=== "SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
},false);
function savedata(){
    localStorage.setItem("data",taskList.innerHTML);
}
function showTask(){
    taskList.innerHTML = localStorage.getItem("data");
}
showTask();