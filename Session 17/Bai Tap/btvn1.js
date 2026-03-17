const todos = [
{ id: 1, task: "Mua bánh chưng", done: false },
{ id: 2, task: "Dọn nhà đón Tết", done: false },
{ id: 3, task: "Gói bánh chưng", done: false },
{ id: 4, task: "Trang trí nhà cửa", done: false },

];
localStorage.setItem("totdos",JSON.stringify(todos));