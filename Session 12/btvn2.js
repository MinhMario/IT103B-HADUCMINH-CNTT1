let books = [
  { id: 1, name: "Dế Mèn Phiêu Lưu Ký", price: 45000, quantity: 10, category: "Thiếu nhi" },
  { id: 2, name: "Số Đỏ", price: 60000, quantity: 8, category: "Văn học" },
  { id: 3, name: "Tắt Đèn", price: 55000, quantity: 5, category: "Văn học" },
  { id: 4, name: "Doraemon Tập 1", price: 25000, quantity: 20, category: "Thiếu nhi" },
  { id: 5, name: "Đắc Nhân Tâm", price: 88000, quantity: 15, category: "Kỹ năng sống" },
  { id: 6, name: "Atomic Habits", price: 120000, quantity: 12, category: "Kỹ năng sống" },
];
let cart = [];
let choice;

function displayByCategory(books) {
  let categories = [...new Set(books.map(b => b.category))];
  categories.forEach((cat, index) => {
    console.log(`${index + 1}. ${cat}`);
  });
  let catChoice = +prompt("Nhập số thứ tự thể loại muốn xem:");
  if (catChoice < 1 || catChoice > categories.length) {
    console.log("Không hợp lệ");
    return;
  }
  let selectedCat = categories[catChoice - 1];
  let filtered = books.filter(b => b.category === selectedCat);
  console.log(`=== Sách thể loại: ${selectedCat} ===`);
  filtered.forEach(b => {
    console.log(`ID: ${b.id} | Tên: ${b.name} | Giá: ${b.price}đ | Số lượng: ${b.quantity}`);
  });
}

function addBook(books) {
  let id = +prompt("Nhập ID sách:");
  if (books.some(b => b.id === id)) {
    console.log("ID đã tồn tại, vui lòng nhập ID khác");
    return;
  }
  let name = prompt("Nhập tên sách:");
  let price = +prompt("Nhập giá sách:");
  let quantity = +prompt("Nhập số lượng:");
  let category = prompt("Nhập thể loại:");
  books.push({ id, name, price, quantity, category });
  console.log("Thêm sách thành công!");
}

function searchBook(books) {
  let keyword = prompt("Nhập tên hoặc ID sách cần tìm:");
  let results = books.filter(b =>
    b.name.toLowerCase().includes(keyword.toLowerCase()) ||
    b.id === +keyword
  );
  if (results.length === 0) {
    console.log("Không tìm thấy sách");
    return;
  }
  console.log("=== Kết quả tìm kiếm ===");
  results.forEach(b => {
    console.log(`ID: ${b.id} | Tên: ${b.name} | Giá: ${b.price}đ | Số lượng: ${b.quantity} | Thể loại: ${b.category}`);
  });
}

function buyBook(books, cart) {
  let id = +prompt("Nhập ID sách muốn mua:");
  let found = false;
  for (let i = 0; i < books.length; i++) {
    if (id === books[i].id) {
      found = true;
      if (books[i].quantity === 0) {
        console.log("Sách đã hết hàng");
        break;
      }
      let count = +prompt(`Nhập số lượng muốn mua (còn ${books[i].quantity} cuốn):`);
      if (count <= 0) {
        console.log("Số lượng không hợp lệ");
        break;
      }
      if (count > books[i].quantity) {
        console.log("Không đủ số lượng trong kho");
        break;
      }
      books[i].quantity -= count;
      let existInCart = cart.find(c => c.id === id);
      if (existInCart) {
        existInCart.quantity += count;
      } else {
        cart.push({ ...books[i], quantity: count });
      }
      console.log(`Đã thêm "${books[i].name}" x${count} vào giỏ hàng`);
      break;
    }
  }
  if (!found) {
    console.log("Không tìm thấy sách");
  }
}

function sortBooks(books) {
  let subChoice = +prompt("1. Tăng dần\n2. Giảm dần\nNhập lựa chọn:");
  switch (subChoice) {
    case 1:
      books.sort((a, b) => a.price - b.price);
      console.log("=== Sách sắp xếp theo giá tăng dần ===");
      books.forEach(b => console.log(`${b.name} - ${b.price}đ`));
      break;
    case 2:
      books.sort((a, b) => b.price - a.price);
      console.log("=== Sách sắp xếp theo giá giảm dần ===");
      books.forEach(b => console.log(`${b.name} - ${b.price}đ`));
      break;
    default:
      console.log("Không hợp lệ");
      break;
  }
}

function showCart(cart) {
  if (cart.length === 0) {
    console.log("Giỏ hàng trống");
    return;
  }
  let total = 0;
  let totalQuantity = 0;
  console.log("=== Giỏ hàng ===");
  cart.forEach(b => {
    let subtotal = b.price * b.quantity;
    total += subtotal;
    totalQuantity += b.quantity;
    console.log(`${b.name} x${b.quantity} = ${subtotal}đ`);
  });
  console.log(`Tổng số lượng sách đã mua: ${totalQuantity} cuốn`);
  console.log(`Tổng tiền: ${total}đ`);
}

function showTotalStock(books) {
  let totalStock = books.reduce((sum, b) => sum + b.quantity, 0);
  console.log(`Tổng số lượng sách trong kho: ${totalStock} cuốn`);
}

do {
  choice = +prompt(`Nhập lựa chọn của bạn:
1. Hiển thị sách theo thể loại
2. Thêm sách mới vào kho
3. Tìm kiếm sách theo tên hoặc ID
4. Mua sách
5. Sắp xếp sách theo giá
6. Xem giỏ hàng và tổng tiền
7. Hiển thị tổng số lượng sách trong kho
0. Thoát`);

  switch (choice) {
    case 1:
      displayByCategory(books);
      break;
    case 2:
      addBook(books);
      break;
    case 3:
      searchBook(books);
      break;
    case 4:
      buyBook(books, cart);
      break;
    case 5:
      sortBooks(books);
      break;
    case 6:
      showCart(cart);
      break;
    case 7:
      showTotalStock(books);
      break;
    case 0:
      console.log("Kết thúc chương trình");
      break;
    default:
      console.log("Không hợp lệ");
      break;
  }
} while (choice !== 0);