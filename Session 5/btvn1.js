let amount=+prompt("Bạn muốn trả bao nhiêu cuốn sách")
let book=[];
let bookName
for(let i=0;i<amount;i++){
    let bookName=prompt("Nhập tên cuốn sách")
    book.push(bookName)
}
console.log(`Tổng số sách đã được trả ${amount}
    Danh sách được trả:`);
for(let i=0;i<amount;i++){
    console.log(`${book}`)
}