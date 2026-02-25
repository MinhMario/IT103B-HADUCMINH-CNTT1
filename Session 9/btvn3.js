
function dienTichHinhTron(r) {
    let dienTich = 3.14 * r * r;
    console.log("Diện tích hình tròn = " + dienTich);
}


function chuViHinhTron(r) {
    let chuVi = 2 * 3.14 * r;
    console.log("Chu vi hình tròn = " + chuVi);
}


function dienTichHinhChuNhat(dai, rong) {
    let dienTich = dai * rong;
    console.log("Diện tích hình chữ nhật = " + dienTich);
}


function chuViHinhChuNhat(dai, rong) {
    let chuVi = 2 * (dai + rong);
    console.log("Chu vi hình chữ nhật = " + chuVi);
}


let choice = 1;

switch(choice){
    case 1:
        console.log("1. Tính diện tích hình tròn");
        let r1 = 5; 
        console.log("Bán kính = " + r1);
        dienTichHinhTron(r1);
        break;
        
    case 2:
        console.log("2. Tính chu vi hình tròn");
        let r2 = 5; 
        console.log("Bán kính = " + r2);
        chuViHinhTron(r2);
        break;
        
    case 3:
        console.log("3. Tính diện tích hình chữ nhật");
        let dai1 = 10; 
        let rong1 = 6; 
        console.log("Chiều dài = " + dai1 + ", Chiều rộng = " + rong1);
        dienTichHinhChuNhat(dai1, rong1);
        break;
        
    case 4:
        console.log("4. Tính chu vi hình chữ nhật");
        let dai2 = 10; 
        let rong2 = 6; 
        console.log("Chiều dài = " + dai2 + ", Chiều rộng = " + rong2);
        chuViHinhChuNhat(dai2, rong2);
        break;
        
    case 5:
        console.log("5. Thoát");
        console.log("Cảm ơn bạn đã sử dụng chương trình!");
        break;
        
    default:
        console.log("Lựa chọn không hợp lệ!");
        break;
}

console.log("\n=== MENU TÍNH TOÁN HÌNH HỌC ===");
console.log("1. Tính diện tích hình tròn.");
console.log("2. Tính chu vi hình tròn.");
console.log("3. Tính diện tích hình chữ nhật.");
console.log("4. Tính chu vi hình chữ nhật.");
console.log("5. Thoát.");
console.log("================================");