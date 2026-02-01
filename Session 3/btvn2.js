console.log("Hôm nay có bao nhiêu lượt trả sách");
let day=+prompt("Nhập số lượt trả sách");
let guest;
let bookName;
let borrow;
let count=0;
for(let i=0;i<day;i++){
    guest=prompt("Nhap ten khach");
    bookName=prompt("Nhap ten sach");
    borrow=prompt("Nhap so ngay da muon thuc te");
    if(borrow<1){
        console.log("Khong hop le ");
    }else if(borrow>=1&&borrow<=14){
        console.log("Tra dung han");
    }else if(borrow>=15&&borrow<=21){
        count++;
        console.log("Tra muon nhe + Phat nhac nho");
    }else if(day>21){
        count++;
        console.log("Qua han nghiem trong");
    }
}
console.log(`So luot tra sach la ${day}`);
console.log(`So luot tra muon la ${count}`);