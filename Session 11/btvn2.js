let products = [];
let id = 1;

function addProduct(name, price, category, quantity) {
    let newProduct = {
        id: id++,
        name: name,
        price: price,
        category: category,
        quantity: quantity
    }
    products.push(newProduct);
}

let choice;
do {
    choice = +prompt(`1.Thêm sản phẩm vào danh sách sản phẩm.
2.Hiển thị tất cả sản phẩm.
3.Hiển thị chi tiết sản phẩm theo id.
4.Cập nhật thông tin sản phẩm (name, price, category, quantity) theo id.
5.Xóa sản phẩm theo id.
6.Thoát.
Nhập lựa chọn của bạn:`);
    
    switch (choice) {
        case 1:
            let name = prompt("Nhập tên sản phẩm:");
            let price = +prompt("Nhập giá sản phẩm:");
            let category = prompt("Nhập danh mục:");
            let quantity = +prompt("Nhập số lượng:");
            addProduct(name, price, category, quantity);
            break;
        case 2:
            console.log(products);
            break;
        case 3:
            let searchId = +prompt("Nhập id cần tìm:");
            for (let i = 0; i < products.length; i++) {
                if (searchId == products[i].id) {
                    console.log(products[i]);
                    break;
                }
            }
            break;
        case 4:
            let updateId = +prompt("Nhập id cần cập nhật:");
            for (let i = 0; i < products.length; i++) {
                if (updateId == products[i].id) {
                    products[i].name = prompt("Nhập tên mới:");
                    products[i].price = +prompt("Nhập giá mới:");
                    products[i].category = prompt("Nhập danh mục mới:");
                    products[i].quantity = +prompt("Nhập số lượng mới:");
                    break;
                }
            }
            break;
        case 5:
            let deleteId = +prompt("Nhập id cần xóa:");
            for (let i = 0; i < products.length; i++) {
                if (deleteId == products[i].id) {
                    products.splice(i, 1);
                    break;
                }
            }
            break;
            case 6:
                let max=+prompt("Nhập giá tối đa");
                let found=products.filter(s=>s.price<=max);
                console.log(found);
                break;
        case 7:
            console.log("End");
            break;
        default:
            console.log("Khong hop le");
            break;
    }
} while (choice != 6);