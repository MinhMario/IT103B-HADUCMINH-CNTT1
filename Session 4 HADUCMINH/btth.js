let loginAttempts = 0;
let isAuthenticated = false;

do {
    let userName = prompt("Nhập tài khoản:");
    let password = prompt("Nhập mật khẩu:");

    if (userName === "admin" && password === "12345") {
        alert("Đăng nhập thành công!");
        isAuthenticated = true;
        break;
    } else {
        loginAttempts += 1;

        if (userName !== "admin") {
            alert("Sai Tài khoản! Lần thử: " + loginAttempts + "/3");
        } else {
            alert("Sai Mật khẩu! Lần thử: " + loginAttempts + "/3");
        }
    }
} while (loginAttempts < 3);

if (isAuthenticated === false) {
    document.write("Tài khoản đã bị khóa do nhập sai quá 3 lần!");
} else {
    let menuChoice;
    do {
        menuChoice = prompt(
            "--- HỆ THỐNG PHÂN TÍCH THƯ VIỆN ---\n" +
            "1. Phân loại mã số sách\n" +
            "2. Thiết kế sơ đồ kho\n" +
            "3. Dự toán phí bảo trì\n" +
            "4. Tìm mã số sách may mắn\n" +
            "5. Thoát\n" +
            "Chọn chức năng (1-5):"
        );

        switch (menuChoice) {
            case "1":
                let totalCodes = 0;
                let scienceBooks = 0;
                let artBooks = 0;
                while (true) {
                    let bookCode = parseInt(prompt("Nhập mã sách (0 để dừng):"));
                    if (bookCode === 0 || isNaN(bookCode)) {
                        break;
                    }
                    totalCodes += 1;
                    if (bookCode % 2 === 0) {
                        scienceBooks += 1;
                    } else {
                        artBooks += 1;
                    }
                }
                alert("Tổng mã: " + totalCodes + "\nKhoa học: " + scienceBooks + "\nNghệ thuật: " + artBooks);
                break;

            case "2":
                let rows = parseInt(prompt("Nhập số Hàng:"));
                let cols = parseInt(prompt("Nhập số Cột:"));
                document.write("SƠ ĐỒ KHO SÁCH:");
                for (let r = 1; r <= rows; r += 1) {
                    for (let c = 1; c <= cols; c += 1) {
                        if (r === c) {
                            document.write("[" + r + "-" + c + "] (Kệ ưu tiên) &nbsp;&nbsp;");
                        } else {
                            document.write("[" + r + "-" + c + "] &nbsp;&nbsp;");
                        }
                    }
                    document.write("<br><br>");
                }
                alert("Đã in sơ đồ ra trang web.");
                break;

            case "3":
                let qty = parseInt(prompt("Số lượng sách hiện có:"));
                let fee = parseFloat(prompt("Phí bảo trì hiện tại (đ/cuốn):"));
                let years = parseInt(prompt("Số năm dự toán:"));
                document.write("DỰ TOÁN PHÍ BẢO TRÌ:");
                for (let y = 1; y <= years; y += 1) {
                    let currentTotal = qty * fee;
                    document.write("Năm " + y + ": " + currentTotal + " VNĐ<br>");
                    fee += (fee * 0.1);
                }
                break;

            case "4":
                let nRange = parseInt(prompt("Nhập khoảng N:"));
                let luckyList = "";
                let luckyCount = 0;
                for (let i = 1; i <= nRange; i += 1) {
                    if (i % 3 === 0 && i % 5 !== 0) {
                        luckyList += i + " ";
                        luckyCount += 1;
                    }
                }
                alert("Mã may mắn: " + luckyList + "\nTổng cộng: " + luckyCount);
                break;

            case "5":
                alert("Hệ thống đang đăng xuất...");
                break;

            default:
                if (menuChoice !== null) {
                    alert("Lựa chọn không hợp lệ!");
                }
                break;
        }

    } while (menuChoice !== "5");
}
