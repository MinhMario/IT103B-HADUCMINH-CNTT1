let bookName=[];
let bookId=[];
let bookStatus=[];
let id;
let book;
let sta;
let flag=0;
let del=0;
let amount=+prompt("Co bao nhieu cuon sach can kiem tra hom nay");
if(amount!== Math.floor(amount)){
    console.log("Khong hop le")
}
for(let i=0;i<amount;i++){
    id=+prompt("Nhap ma sach");
    if(id==""){
        console.log("Khong duoc de trong");
    }
    bookId.push(id)
    book=prompt("Nhap ten sach");
    if(book==""){
        console.log("Khong duoc de trong")
    }
    bookName.push(book)
    sta=+prompt("Nhap tinh trang (1-3)");
    if(sta !== Math.floor(sta)){
        console.log("Khong hop le");
    }
    bookStatus.push(sta)
}
for(let i=0;i<amount;i++){
    console.log(`${bookId[i]}-${bookName[i]}-${bookStatus[i]}`)
}
let choice=+prompt("Chon che do nguoi dung")
do{
    console.log("1.Sửa tình trạng 1 cuốn sách")
    console.log("2.Loại bỏ 1 cuốn sách");
    console.log("0.Kết thúc và in báo cáo cuối")

switch(choice){
    case 1:
    id=prompt("Nhập mã sách cần sửa");
    for(let i=0;i<amount;i++){
        if(id==bookId[i]){
            sta=prompt("Nhập trạng thái sách mới (1-5): 1: Hỏng nhẹ 2: Hỏng nặng 3: Cần sửa gấp 4: Đã sửa xong 5: Loại bỏ")
            bookStatus[i]==sta;
            flag++
            if(sta==5){
                del++;
            }
            break;
        }
    }
    break;
    case 2:
    id=prompt("Nhập mã sách cần xoá");
    for(let i=0;i<amount;i++){
        if(id==bookId[i]){
            bookId.splice(i,1)
            bookName.splice(i,1)
            bookStatus.splice(i,1)
            amount--;
            break;
        }
    }
    break;
    case 0:
        console.log(`Tổng số sách còn lại là ${amount}
        Số sách đã sửa xong ${flag}
        Số sách đã loại bỏ${del}
        `)
        break;
        default:
            console.log("Không hợp lệ");
            break;
}
}while(choice!=0)