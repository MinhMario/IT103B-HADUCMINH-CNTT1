let task = [
    { id: 1, name: "JSON", status: true },
    { id: 2, name: "C",    status: false },
    { id: 3, name: "C++",  status: true }
];
function renderTask(){
    let str="";
      if(task.length==0){
        str+=`<div class="empty-state">
          <div class="empty-state-icon">📋</div>
          <div class="empty-state-text">
            Chưa có công việc nào. Hãy thêm công việc mới!
          </div>
        </div>`
}
    for(let i=0;i<task.length;i++){
  
    }
    for(let i=0;i<task.length;i++){
       str+=`  <div class="task-item" data-id="2">
          <input type="checkbox" class="task-checkbox" onclick="checkComplete(${task[i].id})" ${task[i].status?"checked":""} /><span class="task-text" style="text-decoration:${task[i].status?"line-through":"none"}"
            > ${task[i].name} </span>
          <div class="task-actions">
            <button class="btn-edit" onclick=" updateTask(${task[i].id}) " >✏️ Sửa</button
            ><button class="btn-delete" onclick=" deleteTask(${task[i].id}) " >🗑️ Xóa</button>
          </div>
        </div>`
    }
    document.getElementById("taskList").innerHTML=str;
}
renderTask();
function addTask(){
    let name=document.getElementById("taskInput");
    let newTask={
        id:task.length+1,
        name:name.value,
        status:false,
    }
    task.push(newTask)
    renderTask();
}
function checkComplete(id){
    let item =task.find(t=>t.id==id)
    if(!item){return};
    item.status = !item.status; 
     const total = task.length;
    const completed = task.filter(t => t.status).length;
    document.getElementById("totalCount").textContent = total;
    document.getElementById("completedCount").textContent = completed;
}
function updateTask(id){
   for(let i =0;i<task.length;i++){
        if(task[i].id==id){
            let askUpd = prompt("What do you want to change?");
            task[i].name = askUpd;
        }
    }
    renderTask();
}
function deleteTask(id){
  confirm("Wanna delete this?")
        for(let i =0;i<task.length;i++){
            if(task[i].id==id){
                task.splice(i,1);
            }
        }
        renderTask();
}
function showResult(){
    let result = "";
    let current = task.filter(value=>value.status).length;
    let total = task.length;
    result += `<span id="completedCount">${current}</span> /
          <span id="totalCount">${total}</span> công việc hoàn thành`
          document.getElementsByClassName("task-counter")[0].innerHTML = result;
    document.getElementById("completedCount").innerText = current;
    document.getElementById("totalCount").innerText = total;
    const badge = document.getElementById("congratsBadge");
    if (total > 0 && current === total) {
        badge.style.display = "block";
    } else {
        badge.style.display = "none";
    }
}
renderTask();