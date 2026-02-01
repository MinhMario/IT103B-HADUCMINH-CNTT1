console.log("Hôm nay có bao nhiêu lượt mượn sách");
let guest;
let bookName;
let day;
let attempt=+prompt("Số lượt mượn sách ngày hôm nay")
for(let i=0;i<attempt;i++){
     guest=prompt("Nhập tên người mượn");
     bookName=prompt("Nhập tên sách");
    day=+prompt("Nhập ngày mượn sách");
    if(day<=14&&day>0){
        console.log("Mượn sách thành công")
    }else if(day>14&&day<=30){
        console.log("Thời gian mượn vượt quá quy định");
    }else{
        console.log("Thời gian mượn không hợp lệ");
    }
}
console.log(`Số lượt mượn sách ngày hôm nay ${attempt}`)