let tasks = [];
let id = 1;

function addTask(name, description, startTime, status) {
    let newTask = {
        id: id++,
        name: name,
        description: description,
        startTime: startTime,
        status: status
    };
    tasks.push(newTask);
}

let choice;
do {
    choice = +prompt(`1.Thêm công việc mới.
2.Hiển thị tất cả các công việc.
3.Cập nhật trạng thái công việc theo id.
4.Lọc các công việc theo trạng thái (hoàn thành/chưa hoàn thành).
5.Sắp xếp các công việc theo trạng thái công việc.
6.Thoát.
Nhập lựa chọn của bạn:`);
    
    switch (choice) {
        case 1:
            let name = prompt("Nhập tên công việc:");
            let description = prompt("Nhập mô tả:");
            let startTime = prompt("Nhập thời gian bắt đầu (VD: 2024-01-15):");
            let status = prompt("Nhập trạng thái (hoàn thành/chưa hoàn thành):");
            addTask(name, description, startTime, status);
            alert("Đã thêm công việc thành công!");
            break;
        case 2:
            console.log("===== DANH SÁCH CÔNG VIỆC =====");
            if (tasks.length === 0) {
                console.log("Chưa có công việc nào!");
            } else {
                for (let i = 0; i < tasks.length; i++) {
                    console.log(`\nID: ${tasks[i].id}`);
                    console.log(`Tên: ${tasks[i].name}`);
                    console.log(`Mô tả: ${tasks[i].description}`);
                    console.log(`Thời gian bắt đầu: ${tasks[i].startTime}`);
                    console.log(`Trạng thái: ${tasks[i].status}`);
                    console.log("-".repeat(40));
                }
            }
            console.log("================================");
            break;
        case 3:
            let updateId = +prompt("Nhập id công việc cần cập nhật:");
            let found = false;
            for (let i = 0; i < tasks.length; i++) {
                if (updateId == tasks[i].id) {
                    tasks[i].status = prompt("Nhập trạng thái mới (hoàn thành/chưa hoàn thành):");
                    alert("Đã cập nhật trạng thái thành công!");
                    found = true;
                    break;
                }
            }
            if (!found) {
                alert("Không tìm thấy công việc với id này!");
            }
            break;
        case 4:
            let filterStatus = prompt("Nhập trạng thái cần lọc (hoàn thành/chưa hoàn thành):");
            let filtered = tasks.filter(task => task.status.toLowerCase() == filterStatus.toLowerCase());
            console.log(`\n===== CÔNG VIỆC: ${filterStatus.toUpperCase()} =====`);
            if (filtered.length === 0) {
                console.log("Không có công việc nào!");
            } else {
                for (let i = 0; i < filtered.length; i++) {
                    console.log(`\nID: ${filtered[i].id}`);
                    console.log(`Tên: ${filtered[i].name}`);
                    console.log(`Mô tả: ${filtered[i].description}`);
                    console.log(`Thời gian bắt đầu: ${filtered[i].startTime}`);
                    console.log(`Trạng thái: ${filtered[i].status}`);
                    console.log("-".repeat(40));
                }
            }
            console.log("================================");
            break;
        case 5:
            let sorted = tasks.slice().sort((a, b) => {
                if (a.status < b.status) return -1;
                if (a.status > b.status) return 1;
                return 0;
            });
            console.log("===== CÔNG VIỆC ĐÃ SẮP XẾP THEO TRẠNG THÁI =====");
            if (sorted.length === 0) {
                console.log("Chưa có công việc nào!");
            } else {
                for (let i = 0; i < sorted.length; i++) {
                    console.log(`\nID: ${sorted[i].id}`);
                    console.log(`Tên: ${sorted[i].name}`);
                    console.log(`Mô tả: ${sorted[i].description}`);
                    console.log(`Thời gian bắt đầu: ${sorted[i].startTime}`);
                    console.log(`Trạng thái: ${sorted[i].status}`);
                    console.log("-".repeat(40));
                }
            }
            console.log("================================================");
            break;
        case 6:
            console.log("End");
            break;
        default:
            console.log("Không hợp lệ");
            break;
    }
} while (choice != 6);