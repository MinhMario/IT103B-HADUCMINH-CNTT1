let books = ["Nha Gia Kim", "Dac Nhan Tam", "Tuan Lam Viec 4 Gio"] .map(book=>book.toLowerCase());
let choice;
do{

 choice=+prompt(`--- THƯ VIỆN KHOA HỌC ---

1. Xem danh sách

2. Nhập sách mới

3. Mượn sách (Xóa)

4. Sửa tên sách

5. Sắp xếp kệ

0. Thoát

Nhập lựa chọn của bạn: `);
    switch(choice){
        case 1:
            for(let i=0;i<books.length;i++){
    console.log(`${i+1}.${books[i]}-`)
}
            break;
            case 2:
                let newbook=prompt("Nhap ten sach moi").toLowerCase();
                books.push(newbook);
            break;
            case 3:
            let search=prompt(`Nhap ten sach muon muon`).toLowerCase();
            let index=books.indexOf(search)
                if(!books.includes(search)){
                    console.log("Khong co sach nay trong kho")
                }else{ 
                    books.splice(index,1);
                    console.log("Da cho muon sach")
                    break;
                }
            break;
            case 4:
                let update=prompt("Nhap ten sach can sua").toLowerCase();
                for(let i=0;i<books.length;i++){
                    if(books[i].includes(update)){
                        let newname=prompt("Nhap ten sach moi");
                        books[i]=newname;
                        console.log(`Da cap nhat thanh cong`)
                        break;
                    }
                }
            break;
            case 5:
                books.sort();
                console.log("Danh sách sau khi sắp xếp");
                for(let i=0;i<books.length;i++){
                    console.log(`books`)
                }
            break;
            case 0:
                console.log("Tạm biệt")
                break;
                default:
                    console.log("Lua chon khong hop le")
                    break;
    }
}while(choice!=0)

