console.log("Có muốn gia hạn");
let choice=+prompt("Lựa chọn gia hạn").toLowerCase();
let borrow;
let more;
let total;
switch(choice){
    case "không":
        console.log("Kết thúc chương trình");
        break;
    case"có":
    borrow=+prompt("Nhap so ngay da muon hien tai");
    while(borrow<1){
        console.log("So ngay da muon phai >=1");
        borrow=+prompt("Nhap so ngay da muon hien tai");
    }if(borrow>45){
        console.log("khong the gia han ");
    }else{
        more=+prompt("Nhap so ngay gia han");
        while(more<1){
            console.log("So ngay gia han khong hop le");
             more=+prompt("Nhap so ngay gia han");
        }
        total=more+borrow;
        if(total>60){
        console.log("Khong the gia han");
    }else if(total<=30){
        console.log("Gia han thanh cong");
    }
    }
    
default:
    console.log("Không hợp lệ");
}