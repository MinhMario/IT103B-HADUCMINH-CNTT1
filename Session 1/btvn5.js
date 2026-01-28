let a=prompt("Mời bạn nhập tên sách");
let b=+prompt("Mời bạn nhập năm hiện tại");
let c=+prompt("Mời bạn nhập năm xuất bản");
let result=b-c;
if(c>b){
    console.log("Không hợp lệ");
}else{console.log("Số tuổi của sách là "+result);}

