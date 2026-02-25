let student=[];
let choice=+prompt(`1.Nhập danh sách sinh viên.
2.Hiển thị danh sách sinh viên.
3.Tìm sinh viên theo tên.
4.Xóa sinh viên khỏi danh sách.
5.Thoát.
Nhập lựa chọn của bạn`);
switch(choice){
    case 1:
        let name=prompt("Nhập tên sinh viên");
        student.push(name);
        break;
    case 2:
        console.log(student);
        break;
    case 3:
        let search=prompt("Nhập tên sinh viên cần tìm kiếm").toLowerCase();
        for(let i=0;i<student.length;i++){
            if(student[i].toLowerCase()==search){
                console.log(`${student[i]}`)
            }
        }
        break;
      case 4:
        let nameToDelete = prompt("Nhập tên sinh viên cần xóa").toLowerCase();
        for(let i = 0; i < student.length; i++){
            if(student[i].toLowerCase() === nameToDelete){
                console.log(`Đã xóa: ${student[i]}`);
                student.splice(i, 1);
                break;
            }
        }
        break;
    case 5:
        console.log("Thoát chương trình!");
        break;
        
    default:
        console.log("Lựa chọn không hợp lệ!");
        break;
}