let menu = {
    "Món khai vị": [],
    "Món chính": [],
    "Món tráng miệng": [],
    "Đồ uống": []
};

function addDish(category, name, price, description) {
    let newDish = {
        name: name,
        price: price,
        description: description
    };
    menu[category].push(newDish);
}

let choice;
do {
    choice = +prompt(`1.Thêm món ăn vào danh mục.
2.Xóa món ăn theo tên khỏi danh mục.
3.Cập nhật thông tin theo tên của món ăn (tên, giá, mô tả).
4.Hiển thị toàn bộ menu gồm từng danh mục và từng món ăn.
5.Tìm kiếm món ăn theo tên trong toàn bộ menu.
6.Thoát.
Nhập lựa chọn của bạn:`);
    
    switch (choice) {
        case 1:
            let category = prompt("Nhập danh mục (Món khai vị/Món chính/Món tráng miệng/Đồ uống):");
            if (menu[category] !== undefined) {
                let name = prompt("Nhập tên món ăn:");
                let price = +prompt("Nhập giá:");
                let description = prompt("Nhập mô tả:");
                addDish(category, name, price, description);
                alert("Đã thêm món ăn thành công!");
            } else {
                alert("Danh mục không tồn tại!");
            }
            break;
        case 2:
            let deleteCat = prompt("Nhập danh mục:");
            let deleteName = prompt("Nhập tên món ăn cần xóa:");
            if (menu[deleteCat] !== undefined) {
                for (let i = 0; i < menu[deleteCat].length; i++) {
                    if (menu[deleteCat][i].name == deleteName) {
                        menu[deleteCat].splice(i, 1);
                        alert("Đã xóa món ăn thành công!");
                        break;
                    }
                }
            } else {
                alert("Danh mục không tồn tại!");
            }
            break;
        case 3:
            let updateCat = prompt("Nhập danh mục:");
            let updateName = prompt("Nhập tên món ăn cần cập nhật:");
            if (menu[updateCat] !== undefined) {
                for (let i = 0; i < menu[updateCat].length; i++) {
                    if (menu[updateCat][i].name == updateName) {
                        menu[updateCat][i].name = prompt("Nhập tên mới:");
                        menu[updateCat][i].price = +prompt("Nhập giá mới:");
                        menu[updateCat][i].description = prompt("Nhập mô tả mới:");
                        alert("Đã cập nhật món ăn thành công!");
                        break;
                    }
                }
            } else {
                alert("Danh mục không tồn tại!");
            }
            break;
        case 4:
            console.log("===== MENU NHÀ HÀNG =====");
            for (let category in menu) {
                console.log(`\n[${category}]`);
                if (menu[category].length === 0) {
                    console.log("  (Chưa có món ăn)");
                } else {
                    for (let i = 0; i < menu[category].length; i++) {
                        console.log(`  - ${menu[category][i].name}`);
                        console.log(`    Giá: ${menu[category][i].price} VNĐ`);
                        console.log(`    Mô tả: ${menu[category][i].description}`);
                    }
                }
            }
            console.log("\n==========================");
            break;
        case 5:
            let searchName = prompt("Nhập tên món ăn cần tìm:");
            let found = false;
            console.log(`\nKết quả tìm kiếm: "${searchName}"`);
            for (let category in menu) {
                for (let i = 0; i < menu[category].length; i++) {
                    if (menu[category][i].name.toLowerCase().includes(searchName.toLowerCase())) {
                        console.log(`\nDanh mục: ${category}`);
                        console.log(`Tên: ${menu[category][i].name}`);
                        console.log(`Giá: ${menu[category][i].price} VNĐ`);
                        console.log(`Mô tả: ${menu[category][i].description}`);
                        found = true;
                    }
                }
            }
            if (!found) {
                console.log("Không tìm thấy món ăn nào!");
            }
            break;
        case 6:
            console.log("End");
            break;
        default:
            console.log("Không hợp lệ");
            break;
    }
} while (choice != 6);