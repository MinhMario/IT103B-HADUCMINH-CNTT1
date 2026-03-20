let work = [
    { id: 1, name: "JSON", status: true },
    { id: 2, name: "C",    status: false },
    { id: 3, name: "C++",  status: true }
];

function renderWork() {

    let str =` <input type="text" id="add"  > <button onclick="addTask()" >Thêm công việc</button>
        <ul>`;


    for (let i = 0; i < work.length; i++) {
        str += `
            <li>
                <input type="checkbox" onclick="selectInput(${i})" ${work[i].status?"checked":""}/>
                <span class="${work[i].status  ? "checked" : ""}">${work[i].name}</span>
                <button onclick="deleteTask(${work[i].id})" >Delete</button>
                <button onclick="updateTask(${work[i].id})">Update</button>
            </li>`;
    }

    str += `</ul>`;

    document.getElementById("render").innerHTML = str;
}

renderWork();
function addTask(){
    let elementInput=document.getElementById("add");
    console.log("Kết quả là",elementInput.value);
       if (elementInput.value === "") return;
    let task={
        id:Math.floor(Math.random()*99999)+Date.now(),
        name:elementInput.value,
        status:true,
    }
    work.push(task);
    console.log("task",task);
    renderWork();
}
function updateTask(id){
    let index=work.findIndex(p=> p.id===id);
    if(index===-1){
        return;
    }
    let name=prompt("Nhập tên sản phẩm");
    if (name === null || name.trim() === "") return;
    work[index].name=name;
    renderWork();
}
function deleteTask(id){
    let confirm=window.confirm("Bạn có chắc muốn xoá không")
    let index=work.findIndex(p=>p.id==id);
    if(index===-1){
        return;
    }
    if(confirm){
    work.splice(index,1);
    }
    renderWork();
}
//tạo hàm khi người dùng nhấn vào checkbox
function selectInput(index){
    console.log("index",index);
    work[index].status=!work[index].status;
    console.log("works",work)
    renderWork();
}

