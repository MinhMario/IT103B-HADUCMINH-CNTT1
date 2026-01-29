let year=+prompt("Nhap nam xuat ban cua sach");
let kind=prompt("Nhap trang thai sach");

if(year>=2021&&kind=="Co san"){
    console.log("Sach nay kha moi va co the muon")
}else if(year>=2016 &&kind=="Da muon"){
    console.log("Sach nay da muon nhung kha moi co the muon lai sau");
}else if(year<2016 &&kind=="Da muon"){
    console.log("Sach nay da muon nhung kha cu")
}else if(year<2021 &&kind=="Co san"){
    console.log("Sach nay co san nhung da lau nam");
}