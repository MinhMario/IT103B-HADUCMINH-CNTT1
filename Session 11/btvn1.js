
let contacts=[];
let id=1;
function addContact(name,phone){
    let newContact={
        name:name,
        phone:phone,
        id:id++,
    }
    contacts.push(newContact);
}
let choice;
do{
    choice=+prompt(`1.Thêm đối tượng Contact vào danh sách liên hệ.
2.Hiển thị danh sách danh bạ.
3.Tìm kiếm thông tin Contact theo số điện thoại.
4.Cập nhật thông tin Contact(name, email, phone) theo id.
5.Xóa một đối tượng Contact  khỏi danh sách danh bạ theo id.
6.Thoát.
Nhập lựa chọn của bạn:`);
switch(choice){
    case 1:
        let newName=prompt("Nhập tên mới:");
        let phone=prompt("Nhập số điện thoại");
        addContact(newName,phone);
        break;
    case 3:
        let search=prompt("Nhap so dien thoai can tim kiem")
        for(let i=0;i<contacts.length;i++){
            if(search==contacts[i].phone){
                console.log(contacts[i]);
            }
        }
        break;
    case 2:
        console.log(contacts);
        break;
    case 4:
        let searchId=+prompt("Nhap id can tim");
        for(let i=0;i<contacts.length;i++){
            if(searchId==contacts[i].id){
                contacts[i].name=prompt("Nhap ten moi");
                contacts[i].phone=prompt("Nhap sdt moi:");
                break;
            }
        }
        break;
    case 5:
         let deleteId=+prompt("Nhap id can tim");
         for(let i=0;i<contacts.length;i++){
            if(deleteId==contacts[i].id){
                contacts.splice(i,1);
                break;
            }
         }
        break;
    case 6:
        console.log("End");
        break;
    default:
        console.log("Khong hop le");
        break;
}
}while(choice!=6);