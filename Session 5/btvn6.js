// Khai báo 4 mảng rỗng
let maThe = [];
let tenBanDoc = [];
let maSach = [];
let soNgayQuaHan = [];

// Hỏi số bạn đọc quá hạn
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function nhapSoNguyen(question) {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            const num = parseInt(answer);
            if (isNaN(num) || num <= 0) {
                console.log("Vui lòng nhập số nguyên dương!");
                resolve(nhapSoNguyen(question));
            } else {
                resolve(num);
            }
        });
    });
}

function nhapChuoi(question) {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
}

async function main() {
    // Hỏi số bạn đọc quá hạn
    const soBanDoc = await nhapSoNguyen("Hôm nay có bao nhiêu bạn đọc bị ghi nhận quá hạn? ");
    
    // Vòng lặp nhập thông tin từng bạn đọc
    for (let i = 0; i < soBanDoc; i++) {
        console.log(`\n--- Nhập thông tin bạn đọc thứ ${i + 1} ---`);
        
        // Nhập mã thẻ (phải duy nhất)
        let maTheInput;
        let isDuplicate = true;
        while (isDuplicate) {
            maTheInput = await nhapChuoi("Nhập mã thẻ bạn đọc: ");
            if (maThe.includes(maTheInput)) {
                console.log("Mã thẻ đã tồn tại! Vui lòng nhập lại.");
            } else {
                isDuplicate = false;
            }
        }
        maThe.push(maTheInput);
        
        // Nhập tên bạn đọc (không để trống)
        let tenInput = "";
        while (tenInput.trim() === "") {
            tenInput = await nhapChuoi("Nhập tên bạn đọc: ");
            if (tenInput.trim() === "") {
                console.log("Tên bạn đọc không được để trống!");
            }
        }
        tenBanDoc.push(tenInput.trim());
        
        // Nhập chuỗi mã sách
        const maSachInput = await nhapChuoi("Nhập chuỗi các mã sách đang mượn (cách nhau bởi dấu phẩy): ");
        maSach.push(maSachInput);
        
        // Nhập số ngày quá hạn (≥ 0)
        let soNgay = -1;
        while (soNgay < 0) {
            const soNgayInput = await nhapSoNguyen("Nhập số ngày quá hạn (số nguyên ≥ 0): ");
            if (soNgayInput >= 0) {
                soNgay = soNgayInput;
            } else {
                console.log("Số ngày quá hạn phải ≥ 0!");
            }
        }
        soNgayQuaHan.push(soNgay);
    }
    
    console.log("\n=== KẾT QUẢ XỬ LÝ ===\n");
    
    // a. Đếm và in ra tổng số bạn đọc có quá hạn ≥ 10 ngày
    let demQuaHan10 = 0;
    for (let i = 0; i < soBanDoc; i++) {
        if (soNgayQuaHan[i] >= 10) {
            demQuaHan10++;
        }
    }
    console.log(`a. Tổng số bạn đọc có quá hạn ≥ 10 ngày: ${demQuaHan10}`);
    
    // b. Tìm và in ra tất cả mã thẻ của những bạn đọc đang mượn cả sách có mã bắt đầu bằng "JS" và mã bắt đầu bằng "PYT"
    let maTheCoJSvaPYT = [];
    for (let i = 0; i < soBanDoc; i++) {
        const danhSachMaSach = maSach[i].split(',').map(s => s.trim());
        let coJS = false;
        let coPYT = false;
        
        for (let j = 0; j < danhSachMaSach.length; j++) {
            if (danhSachMaSach[j].startsWith("JS")) {
                coJS = true;
            }
            if (danhSachMaSach[j].startsWith("PYT")) {
                coPYT = true;
            }
        }
        
        if (coJS && coPYT) {
            maTheCoJSvaPYT.push(maThe[i]);
        }
    }
    console.log(`b. Mã thẻ của bạn đọc mượn cả sách bắt đầu "JS" và "PYT": ${maTheCoJSvaPYT.length > 0 ? maTheCoJSvaPYT.join(", ") : "Không có"}`);
    
    // c. In ra tên bạn đọc có số ngày quá hạn cao nhất
    let maxQuaHan = -1;
    let tenMaxQuaHan = "";
    for (let i = 0; i < soBanDoc; i++) {
        if (soNgayQuaHan[i] > maxQuaHan) {
            maxQuaHan = soNgayQuaHan[i];
            tenMaxQuaHan = tenBanDoc[i];
        }
    }
    console.log(`c. Tên bạn đọc có số ngày quá hạn cao nhất: ${tenMaxQuaHan} (${maxQuaHan} ngày)`);
    
    // d. In cảnh báo tùy theo tình hình
    let demQuaHan7 = 0;
    for (let i = 0; i < soBanDoc; i++) {
        if (soNgayQuaHan[i] >= 7) {
            demQuaHan7++;
        }
    }
    
    console.log(`d. Cảnh báo: `);
    if (demQuaHan7 === 0) {
        console.log("   Tình hình trả sách hôm nay khá tốt!");
    } else if (demQuaHan7 >= 1 && demQuaHan7 <= 4) {
        console.log("   Cần gửi nhắc nhở cho một số bạn đọc!");
    } else {
        console.log("   Tình trạng quá hạn nghiêm trọng! Cần liên hệ ngay!");
    }
    
    rl.close();
}

main();
