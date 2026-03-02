const students = [
  {
    id: "STU001",
    name: "Nguyễn Văn An",
    age: 20,
    gpa: 3.5,
    status: "active",
    createdAt: 1700000000000,
    updatedAt: 1700000000000,
    deletedAt: null,
  },
  {
    id: "STU002",
    name: "Trần Thị Bích",
    age: 22,
    gpa: 0,
    status: "active",
    createdAt: 1700100000000,
    updatedAt: 1700200000000,
    deletedAt: null,
  },
  {
    id: "STU003",
    name: "Lê Hoàng Nam",
    age: 19,
    gpa: 4.0,
    status: "active",
    createdAt: 1700200000000,
    updatedAt: 1700200000000,
    deletedAt: null,
  },
  {
    id: "STU004",
    name: "Phạm Thị Lan",
    age: 21,
    gpa: 0,
    status: "inactive",
    createdAt: 1700300000000,
    updatedAt: 1700400000000,
    deletedAt: null,
  },
  {
    id: "STU005",
    name: "Võ Minh Tuấn",
    age: 23,
    gpa: 2.5,
    status: "active",
    createdAt: 1700400000000,
    updatedAt: 1700400000000,
    deletedAt: null,
  },
  {
    id: "STU006",
    name: "Đặng Thị Mai",
    age: 20,
    gpa: 3.9,
    status: "active",
    createdAt: 1700500000000,
    updatedAt: 1700500000000,
    deletedAt: null,
  },
  {
    id: "STU007",
    name: "Bùi Quốc Huy",
    age: 24,
    gpa: 0,
    status: "inactive",
    createdAt: 1700600000000,
    updatedAt: 1700700000000,
    deletedAt: 1700750000000,
  },
  {
    id: "STU008",
    name: "Hoàng Thị Thu",
    age: 18,
    gpa: 1.5,
    status: "active",
    createdAt: 1700700000000,
    updatedAt: 1700700000000,
    deletedAt: null,
  },
];
function createStudent(students){
    let id=prompt("Nhập id ");
    let name=prompt("Nhập tên sinh viên");
    let age=parseInt(prompt("Nhập tuổi sinh viên"));
    let gpa=parseFloat(prompt("Nhập điểm học sinh"));
    let status=parseInt(prompt("Nhập trạng thái của sinh viên:"))
    while(age<16||age>60){
        alert("Tuổi không hợp lệ");
        age=parseInt(prompt("Nhập tuổi sinh viên"));
    }
    while(gpa<0||gpa>4){
        alert("GPA không hợp lệ");
         gpa=parseFloat("Nhập điểm học sinh");
    }
    while(name==""){
        alert(`Tên không hợp lệ`);
         name=prompt("Nhập tên sinh viên");
    }
    while(id==""||students.some(p=>p.id==id)){
        if(id==""){
        alert(`ID không hợp lệ`); 
    }else{
        alert("Id đã bị trùng")
    }
     id=prompt("Nhập tên sinh viên");
}
    do{
    switch(status){
        case 1:
            status="active";
            alert("active");
            break;
            case 2:
                status="inactive";
                alert("inactive")
                break;
            default:
                alert("KHÔNG HỢP LỆ")
                break;
    }
}while(status!="active"||status!="inactive");
let createdAt=Date.now();
let updatedAt=new Date().getTime();
let deleteAt=null;
students.push({id,name,age,gpa,status,createdAt,updatedAt,deleteAt});
}
function updateStudent(students){
    let id=prompt("Nhập id ");
    while(id==""||!students.some(p=>p.id==id)){
        if(id==""){
        alert(`ID không hợp lệ`); 
    }else{
        alert("ID không tồn tại");
    }
    id=prompt("Nhập id sinh viên");
}
const index=students.findIndex(p=>p.id==id);
    let name=prompt("Nhập tên sinh viên");
    let age=parseInt(prompt("Nhập tuổi sinh viên"));
    let gpa=parseFloat(prompt("Nhập điểm học sinh"));
    let status=parseInt(prompt("Nhập trạng thái của sinh viên:"))
    while(age<16||age>60){
        alert("Tuổi không hợp lệ");
        age=parseInt(prompt("Nhập tuổi sinh viên"));
    }
    while(gpa<0||gpa>4){
        alert("GPA không hợp lệ");
         gpa=parseFloat("Nhập điểm học sinh");
    }
    while(name==""){
        alert(`Tên không hợp lệ`);
         name=prompt("Nhập tên sinh viên");
    }
    do{
    switch(status){
        case 1:
            status="active";
            alert("active");
            break;
            case 2:
                status="inactive";
                alert("inactive")
                break;
            default:
                alert("KHÔNG HỢP LỆ")
                break;
    }
}while(status!="active"&&status!="inactive");
let updatedAt=Date.now();
students[index]={
    ...students[index],
    id:id,
    name:name,
    gpa:gpa,
    age:age,
    status:status,
    updatedAt:updatedAt,
}
alert("Cập nhật thành công");
}
function deleteStudent(students) {
    let id = prompt("Nhập id sinh viên cần xóa");
    while (id === "" || !students.some(s => s.id === id)) {
        if (id === "") {
            alert("ID không được để trống");
        } else {
            alert("ID không tồn tại");
        }
        id = prompt("Nhập id sinh viên cần xóa");
    }
    const student = students.find(s => s.id === id);
    const confirm = prompt(`Bạn có chắc muốn xóa "${student.name}"? (yes/no)`).toLowerCase();
    if (confirm !== "yes") {
        alert("Đã hủy thao tác");
        return;
    }
    student.status = "inactive";
    student.deletedAt = Date.now();

    alert(`Đã xóa sinh viên "${student.name}" thành công!`);
}
function restoreStudent(students) {
    let id = prompt("Nhập id sinh viên cần phục hồi");
    while (id === "" || !students.some(s => s.id === id)) {
        if (id === "") {
            alert("ID không được để trống");
        } else {
            alert("ID không tồn tại");
        }
        id = prompt("Nhập id sinh viên cần phục hồi");
    }
    const student = students.find(s => s.id === id);
    if (student.deletedAt === null) {
        alert(`Sinh viên "${student.name}" chưa bị xóa, không cần phục hồi`);
        return;
    }
    student.status = "active";
    student.deletedAt = null;
    student.updatedAt = Date.now();

    alert(`Đã phục hồi sinh viên "${student.name}" thành công!`);
}
function analytics(students) {
    const active = students.filter(n => n.status === "active");
    const inactive = students.filter(n => n.status === "inactive");

    const totalGpa = students.reduce((acc, cur) => acc + cur.gpa, 0);
    const totalActive = active.reduce((acc, cur) => acc + cur.gpa, 0);
    const totalInactive = inactive.reduce((acc, cur) => acc + cur.gpa, 0);

    const percent = (active.length / students.length) * 100;
    const avgGpa = totalGpa / students.length;
    const avgActiveGpa = active.length ? totalActive / active.length : 0;
    const avgInactiveGpa = inactive.length ? totalInactive / inactive.length : 0;

    // Top 5 GPA cao nhất
const top5Gpa = [...students]
    .sort((a, b) => b.gpa - a.gpa)
    .slice(0, 5);

// Top 5 nhỏ tuổi nhất
const top5Young = [...students]
    .sort((a, b) => a.age - b.age)
    .slice(0, 5);

console.log("Top 5 GPA cao nhất:");
top5Gpa.forEach((s, index) => {
    console.log(`${index + 1}. ${s.name} - GPA: ${s.gpa}`);
});

console.log("Top 5 nhỏ tuổi nhất:");
top5Young.forEach((s, index) => {
    console.log(`${index + 1}. ${s.name} - Tuổi: ${s.age}`);
});
    console.log(`Tổng số sinh viên: ${students.length}`);
    console.log(`Số sinh viên active: ${active.length}`);
    console.log(`Số sinh viên inactive: ${inactive.length}`);
    console.log(`Tỉ lệ active: ${percent.toFixed(2)}%`);
    console.log(`GPA trung bình toàn trường: ${avgGpa.toFixed(2)}`);
    console.log(`GPA trung bình active: ${avgActiveGpa.toFixed(2)}`);
    console.log(`GPA trung bình inactive: ${avgInactiveGpa.toFixed(2)}`);
    let riskReport=students.filter(n=>n.gpa==0);
    console.log(`Danh sách sinh viên có gpa bằng 0 ${riskReport}`);
    let lowGpa=students.filter(n=>n.gpa<=3);
    console.log(`Danh sách sinh viên có gpa nhỏ hơn 3 ${lowGpa}`);
}   
function viewStudent(students){
    let student=[...students];
    let search=prompt("Nhập tên sinh viên").toLowerCase();
    let result=student.filter(n=>n.name.toLowerCase().incldues(search))
     let filterInput = +prompt("Lọc theo trạng thái:\n1. Active\n2. Inactive\n3. Tất cả");
    let filterStatus = "";
    if (filterInput === "1") filterStatus = "active";
    else if (filterInput === "2") filterStatus = "inactive";
      if (filterStatus !== "") {
        result = result.filter(s => s.status === filterStatus);
    }
     let sortInput = prompt("Sắp xếp GPA:\n1. Tăng dần\n2. Giảm dần");
      result = [...result].sort((a, b) => {
        if (sortInput === "1") return a.gpa - b.gpa; 
        if (sortInput === "2") return b.gpa - a.gpa; 
        return 0;
    });
    const pageSize=5;
    let totalRecords=result.length;
    let totalPages=Math.ceil(totalRecords/pageSize);
    let currentPage=1;
    if (totalRecords === 0) {
        alert("Không tìm thấy sinh viên nào!");
        return;
    }
     function displayPage(page) {
        const start = (page - 1) * pageSize;
        const end = start + pageSize;
        const pageData = result.slice(start, end);

        console.log(`\n===== Trang ${currentPage}/${totalPages} | Tổng bản ghi: ${totalRecords} =====`);
        pageData.forEach((s, index) => {
            console.log(`${start + index + 1}. [${s.id}] ${s.name} | Tuổi: ${s.age} | GPA: ${s.gpa} | Status: ${s.status}`);
        });
        console.log(`=====================================================`);
    }
     displayPage(currentPage);
    let navigate = true;
    while (navigate) {
        let nav = prompt(`Điều hướng:\n1. Next\n2. Prev\n3. First\n4. Last\n5. Thoát`);
        switch (nav) {
            case "1": // Next
                if (currentPage < totalPages) currentPage++;
                else alert("Đã ở trang cuối!");
                break;
            case "2": // Prev
                if (currentPage > 1) currentPage--;
                else alert("Đã ở trang đầu!");
                break;
            case "3": // First
                currentPage = 1;
                break;
            case "4": // Last
                currentPage = totalPages;
                break;
            case "5": // Thoát
                navigate = false;
                break;
            default:
                alert("Không hợp lệ");
        }
        if (navigate) displayPage(currentPage);
}
}




