let readerCardIds = [];
let readerNames = [];
let borrowedBookCodes = [];
let overdueDays = [];

let totalReaders = prompt("Hôm nay có bao nhiêu bạn đọc bị ghi nhận quá hạn?");
totalReaders = parseInt(totalReaders);

for (let i = 1; i <= totalReaders; i++) {
    let id = "";
    while (true) {
        id = prompt("Nhập mã thẻ bạn đọc thứ " + i + " (duy nhất):");
        let isDuplicate = false;
        for (let j = 0; j < readerCardIds.length; j++) {
            if (readerCardIds[j] === id) {
                isDuplicate = true;
                break;
            }
        }
        if (id !== "" && !isDuplicate) break;
        alert("Mã thẻ không được để trống và không được trùng lặp!");
    }

    let name = prompt("Nhập tên bạn đọc:");
    let codes = prompt("Nhập chuỗi các mã sách đang mượn (cách nhau bởi dấu phẩy):");
    let days = prompt("Nhập số ngày quá hạn:");
    days = parseInt(days);

    readerCardIds.push(id);
    readerNames.push(name);
    borrowedBookCodes.push(codes);
    overdueDays.push(days);
}

console.log("Danh sách bạn đọc quá hạn (" + totalReaders + " người):");
for (let i = 0; i < readerCardIds.length; i++) {
    console.log(
        (i + 1) + ". Mã thẻ: " + readerCardIds[i] +
        " | Tên: " + readerNames[i] +
        " | Sách đang mượn: " + borrowedBookCodes[i] +
        " | Quá hạn: " + overdueDays[i] + " ngày"
    );
}

let count10Days = 0;
let jsPytIds = "";
let maxDays = overdueDays[0];
let maxIndex = 0;
let countWarn = 0;

for (let i = 0; i < readerCardIds.length; i++) {
    if (overdueDays[i] >= 10) {
        count10Days++;
    }

    let currentBooks = borrowedBookCodes[i];
    if (currentBooks.includes("JS") && currentBooks.includes("PYT")) {
        if (jsPytIds === "") {
            jsPytIds += readerCardIds[i];
        } else {
            jsPytIds += ", " + readerCardIds[i];
        }
    }

    if (overdueDays[i] > maxDays) {
        maxDays = overdueDays[i];
        maxIndex = i;
    }

    if (overdueDays[i] >= 7) {
        countWarn++;
    }
}

console.log("Tổng số bạn đọc quá hạn >= 10 ngày: " + count10Days + " người");
console.log("Các bạn đọc đang mượn cả sách JS* và PYT*: " + (jsPytIds || "Không có"));
console.log("Bạn đọc có số ngày quá hạn cao nhất: " + readerNames[maxIndex] + " (" + maxDays + " ngày)");

if (countWarn === 0) {
    console.log("Tình hình trả sách hôm nay khá tốt!");
} else if (countWarn >= 1 && countWarn <= 4) {
    console.log("Cần gửi nhắc nhở cho một số bạn đọc!");
} else if (countWarn >= 5) {
    console.log("Tình trạng quá hạn nghiêm trọng! Cần liên hệ ngay!");
}
