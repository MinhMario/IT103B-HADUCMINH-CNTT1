
function cong(a, b) {
    let ketQua = a + b;
    console.log(a + " + " + b + " = " + ketQua);
}

function tru(a, b) {
    let ketQua = a - b;
    console.log(a + " - " + b + " = " + ketQua);
}

function nhan(a, b) {
    let ketQua = a * b;
    console.log(a + " × " + b + " = " + ketQua);
}

function chia(a, b) {
    if (b === 0) {
        console.log("Lỗi: Không thể chia cho 0!");
    } else {
        let ketQua = a / b;
        console.log(a + " ÷ " + b + " = " + ketQua);
    }
}

function xuLyMenu(luaChon, so1, so2) {
    switch (luaChon) {
        case 1:
            console.log("Bạn chọn: Cộng hai số");
            cong(so1, so2);
            break;
        case 2:
            console.log("Bạn chọn: Trừ hai số");
            tru(so1, so2);
            break;
        case 3:
            console.log("Bạn chọn: Nhân hai số");
            nhan(so1, so2);
            break;
        case 4:
            console.log("Bạn chọn: Chia hai số");
            chia(so1, so2);
            break;
        case 5:
            console.log("Bạn chọn: Thoát chương trình");
            console.log("Cảm ơn bạn đã sử dụng!");
            break;
        default:
            console.log("Lựa chọn không hợp lệ! Vui lòng chọn từ 1-5");
            break;
    }
}

console.log("=== MENU TÍNH TOÁN ===");
console.log("1. Cộng hai số");
console.log("2. Trừ hai số");
console.log("3. Nhân hai số");
console.log("4. Chia hai số");
console.log("5. Thoát");
console.log("======================\n");

let so1 = +prompt("Nhập số thứ nhất");
let so2 = +prompt("Nhập số thứ hai");

console.log("Số thứ nhất: " + so1);
console.log("Số thứ hai: " + so2);
console.log("======================\n");


let luaChon =+prompt("Nhập lựa chọn của bạn");  

xuLyMenu(luaChon, so1, so2);

console.log("\n--- Thử tất cả các chức năng ---\n");

xuLyMenu(1, so1, so2);
console.log("");

xuLyMenu(2, so1, so2);
console.log("");

xuLyMenu(3, so1, so2);
console.log("");

xuLyMenu(4, so1, so2);
console.log("");

xuLyMenu(5, so1, so2);