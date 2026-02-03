let booksId=[];
let bookName=[];
let inventory=[];
let book;
let id;
let count;
let flag=0;
let correct=true;
let amount=+prompt("Co bao nhieu loai sach can kiem tra");
if(amount!== Math.floor(amount)){
    console.log("Không phải giá trị nguyên ")
    correct=false;
}
if(amount<=0){
    console.log("Lỗi số này phải lớn hơn không") 
}
if(true)
for(let i=0;i<amount;i++){
    book=prompt("Nhap ten sach");
    if(book==""){
        console.log("Tên sách không hợp lệ")
    }
    bookName.push(book)
    id=+prompt("Nhap id cua sach");
    if(id==""){
        console.log("Khong duoc de trong")
    }
    booksId.push(id)
    count=+prompt("Nhap so luong ton kho");
    if(count!==Math.floor(count)){
        console.log("Yêu cầu người dùng nhập giá trị nguyên")
    }
    if(count<0){
        console.log("Số lượng không hợp lệ")
    }
    if(count<=5){
        flag++
    }
    inventory.push(count)
}
console.log(`Danh sách loại sách đã kiểm tra hôm nay ${amount}`);
for(let i=0;i<amount;i++){
    console.log(`${i}. Mã :${bookName[i].slice(0,3)}00${booksId}-Tên :${bookName[i]}-Còn:${inventory[i]}\n`)
}
console.log(`Số sách tồn kho dưới 5 bản :${flag}`)
for(let i=0;i<amount;i++){
    if(inventory[i]==0){
        console.log(`Các mã sách đã hết hàng :${bookName.slice(0,3)}00${i}`)
    }
}