let bookName=prompt("Nhap ten sach");
let customer=prompt("Nhap ten nguoi muon");
let kind=prompt("Nhap tinh trang sach").toLowerCase();
let day=+prompt("So ngay muon")
let card=prompt("Nhap trang thai the thu vien").toLowerCase();
if(kind!="co" && kind!="khong"){
    console.log("Tinh trang khong hop le");
}
if(card=="co" && kind=="co"){
    console.log("Ban co the muon sach nay");
} 
if(kind=="khong"&&day<30){
    if(card=="co"){
        console.log("Sach dang duoc muon vui long cho tra lai");
    }else if(card=="khong"){
        console.log("Ban khong the muon sach");
    }
}
