let amount=+prompt("Nhập số sách được trả");
let book=[];
let bookName;
let count=0;
for(let i=0;i<amount;i++){
    bookName=prompt("Nhap ten sach can tra");
    book.push(bookName);
     if(bookName.length>20){
        count++;
    }
}
    book.forEach(function(bookName,index) {
        console.log(`${index +1}- ${bookName}`) 
    });
    console.log(`Tong so sach co tren 20 ky tu la ${count}`);
