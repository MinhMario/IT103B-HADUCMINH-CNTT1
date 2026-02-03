let booksId=[];let id;
let booksName=[];let book;
let booksCategory=[];let category;
let inventoryQuantity=[];let quantity;
let flag=0;
let amount=+prompt("Co bao nhieu loai sach can nhap thong tin hom nay");
for(let i=0;i<amount;i++){
    id=prompt("Nhap ma sach");
    if(id==""){
        console.log(`Ma sach khong duoc de trong`)
    }
    while(booksId.includes(id)){
        console.log("Phan tu da bi trung lap");
        id=prompt("Hay nhap ma sach")
    }
    booksId.push(id);
    book=prompt("Nhap ten sach");
    if(book==""){
        console.log("Ten sach khong duoc de trong");
    }
    booksName.push(book)
    category=prompt("Nhap the loai").toLowerCase();
    booksCategory.push(category)
    quantity=+prompt("Nhập số lượng tồn kho");
    if(quantity<0){
        console.log("Số lượng không hợp lệ")
    }
    inventoryQuantity.push(quantity)
}
console.log("Các sách có thể loại lập trình")
for(let i=0;i<amount;i++){
    if(booksCategory[i].includes("lập trình")){
        console.log(booksName[i]);
    }
    if(booksCategory[i].includes("javascript")||booksCategory[i].includes("Web")){
        console.log(booksName[i])
    }
}
    for(let i=0;i<amount;i++){
        for(let j=0;j<amount;j++){
            if(booksCategory[i]<booksCategory[j]){
                console.log(booksName[i])
                break;
            }
        }
    }
