let books = ["Toan", "Van", "Anh"] .map(book=>book.toLowerCase());
let choice;
do{

 choice=+prompt(`--- THƯ VIỆN KHOA HỌC ---

1.Nhập thêm lô sách mới.
2.Hiển thị danh sách sách.
3.Tìm kiếm sách.
4.Cập nhật tên sách.
5.Đảo ngược thứ tự kệ sách.
6.Nhập kho từ nguồn khác.
6.Thoát chương trình.

Nhập lựa chọn của bạn: `);
    switch(choice){
        case 2:
        let list=books.split(",");
        for(let i=0;i<list.length;i++){
            console.log(`${i+1}-${list}`);
        }
            break;
            case 1:
                let newbook=prompt("Nhap ten sach moi").toLowerCase();
                books.push(newbook);
                console.log("Sach da duoc nhap them vao kho")
            break;
            case 3:
            let search=prompt(`Nhap ten sach muon tim`).toLowerCase();
            let index=books.indexOf(search)
                if(index==-1){
                    console.log("Khong co sach nay trong kho")
                }else{ 
                    books.splice(index,1);
                    console.log(`Sach nay duoc tim thay o vi tri ${i}`)
                    break;
                }
            break;
            case 4:
                let update=prompt("Nhap ten sach can sua").toLowerCase();
                let updateIndex=books.indexOf(update)
                    if(updateIndex==-1){
                        console.log("Không tôn tại sách");
                    }else{
                        alert("Tim thay sach!");
                        let newname=prompt("Nhap ten sach moi");
                        books[updateIndex]=newname;
                        console.log(`Da cap nhat thanh cong`)
                        
                    }
            break;
            case 5:
                books.reverse();
                console.log("Danh sách sau khi đảo ngược");
                for(let i=0;i<books.length;i++){
                    console.log(`${i+1}-${books}`)
                }
            break;
            case 6:
                let arr=['Sách kỹ năng', "Truyện Tranh"];
                let result=books.concat(arr);
                console.log(result);
            case 7:
                console.log("Hẹn gặp lại!")
                break;
                default:
                    console.log("Lua chon khong hop le")
                    break;
    }
}while(choice!=7)

