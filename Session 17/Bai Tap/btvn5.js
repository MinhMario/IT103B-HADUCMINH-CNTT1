const defaultTodos = [
  { id: 1, task: "Mua bánh chưng", done: false },
  { id: 2, task: "Dọn nhà đón Tết", done: false },
  { id: 3, task: "Gói bánh chưng", done: false },
  { id: 4, task: "Trang trí nhà cửa", done: false },
];


let todos = JSON.parse(localStorage.getItem("todos")) || defaultTodos;
localStorage.setItem("todos", JSON.stringify(todos));

function renderTasks() {
  let str = "";

  for (let i = 0; i < todos.length; i++) {
    str += `
      <li class="task-item ${todos[i].done ? "done" : ""}" 
          data-id="${todos[i].id}"
          onclick="toggleTask(${todos[i].id})">
        <div class="task-radio">
          <span class="task-radio-icon">✔</span>
        </div>
        <span class="task-text">${todos[i].task}</span>
        <button class="btn-edit"   title="Chỉnh sửa" onclick="event.stopPropagation(); changeTask(${todos[i].id})">✏️</button>
        <button class="btn-delete" title="Xóa"        onclick="event.stopPropagation(); deleteTask(${todos[i].id})">🗑</button>
      </li>
    `;
  }

  document.getElementById("task-list").innerHTML = str;
}

function toggleTask(id) {
  const t = todos.find(x => x.id === id);
  if (!t) return;

  t.done = !t.done;

  localStorage.setItem("todos", JSON.stringify(todos));
  renderTasks();
}

renderTasks();
document.getElementById("btn-add-task").addEventListener("click", addTodos);
function addTodos(){
  const input = document.getElementById("task-input");
  const text = input.value.trim();
  if (!text) return;
  todos.push({ id: todos.length+1, task: text, done: false });
  localStorage.setItem("todos", JSON.stringify(todos));

  input.value = "";
  renderTasks();
}
function deleteTask(id){
    for(let i=0;i<todos.length;i++){
        if(todos[i].id==id){
            todos.splice(i,1);
            break;
        }
    }
    localStorage.setItem("todos",JSON.stringify(todos));
    renderTasks();
}

function changeTask(index){
    for(let i =0;i<todos.length;i++){
            if(todos[i].id==index){
                let askNew = prompt("What is the new task? ");
                todos[i].task = askNew
            }
        }
        localStorage.setItem("todos",JSON.stringify(todos));
        renderTasks();
}
