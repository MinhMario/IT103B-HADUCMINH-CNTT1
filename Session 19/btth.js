const products = [
  {
    id: 1,
    name: "Tai nghe Bluetooth TWS",
    price: 320000,
    image: "https://picsum.photos/seed/mp19-tws/1200/800",
    description: "Chống ồn nhẹ, pin 20h, kết nối ổn định.",
  },
  {
    id: 2,
    name: "Bàn phím cơ 87 phím",
    price: 790000,
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=1200&q=60",
    description: "Switch blue, led trắng, gõ sướng tay.",
  },
  {
    id: 3,
    name: "Chuột không dây công thái học",
    price: 450000,
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=1200&q=60",
    description: "Thiết kế ergonomic, sạc USB-C.",
  },
  {
    id: 4,
    name: "USB 64GB",
    price: 120000,
    image: "https://picsum.photos/seed/mp19-usb/1200/800",
    description: "Nhỏ gọn, tốc độ đọc/ghi ổn định.",
  },
  {
    id: 5,
    name: "Đế tản nhiệt laptop",
    price: 210000,
    image: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?auto=format&fit=crop&w=1200&q=60",
    description: "2 quạt gió, đỡ mỏi cổ tay.",
  },
  {
    id: 6,
    name: "Cáp sạc Type-C 1m",
    price: 80000,
    image: "https://picsum.photos/seed/mp19-cable/1200/800",
    description: "Bọc dù, hỗ trợ sạc nhanh.",
  },
];

let cart = [];

// ─── Tiện ích ────────────────────────────────────────────────────────────────

function formatVND(amount) {
  return amount.toLocaleString("vi-VN") + " VNĐ";
}

// ─── Render sản phẩm ─────────────────────────────────────────────────────────

function renderProducts() {
  let str = "";
  for (let i = 0; i < products.length; i++) {
    str += `
      <article class="card">
        <div class="card-img">
          <img src="${products[i].image}" alt="${products[i].name}" loading="lazy" />
        </div>
        <div class="card-body">
          <h3 class="card-title">${products[i].name}</h3>
          <p class="card-desc">${products[i].description}</p>
          <div class="card-footer">
            <div class="price">${formatVND(products[i].price)}</div>
            <button class="btn btn-primary" onclick="addToCart(${products[i].id})">
              Thêm vào giỏ
            </button>
          </div>
        </div>
      </article>`;
  }
  document.getElementById("products-grid").innerHTML = str;
  document.getElementById("product-count-badge").textContent =
    products.length + " sản phẩm";
}

// ─── Render giỏ hàng ─────────────────────────────────────────────────────────

function renderCart() {
  const cartEmpty = document.getElementById("cart-empty");
  const tableWrap = document.querySelector(".table-wrap");

  if (cart.length === 0) {
    // Hiện empty state, ẩn bảng
    cartEmpty.innerHTML = `
      <div class="empty-title">Giỏ hàng đang trống</div>
      <div class="empty-subtitle">
        Hãy bấm <strong>Thêm vào giỏ</strong> ở sản phẩm bên trái.
      </div>`;
    cartEmpty.classList.remove("hidden");
    tableWrap.classList.add("hidden");
  } else {
    // Ẩn empty state, hiện bảng
    cartEmpty.classList.add("hidden");
    tableWrap.classList.remove("hidden");

    let rows = "";
    for (let i = 0; i < cart.length; i++) {
      rows += `
        <tr>
          <td>${cart[i].name}</td>
          <td class="right">${formatVND(cart[i].price)}</td>
          <td class="center">
            <div class="qty-controls">
              <button class="btn btn-icon btn-ghost" onclick="changeQty(${cart[i].id}, -1)">−</button>
              <span class="qty">${cart[i].quantity}</span>
              <button class="btn btn-icon btn-ghost" onclick="changeQty(${cart[i].id}, 1)">+</button>
            </div>
          </td>
          <td class="right">${formatVND(cart[i].price * cart[i].quantity)}</td>
          <td class="center">
            <button class="btn btn-danger btn-icon" onclick="removeFromCart(${cart[i].id})">✕</button>
          </td>
        </tr>`;
    }
    document.getElementById("cart-tbody").innerHTML = rows;
  }

  updateStats();
}

// ─── Thống kê (2.8) ──────────────────────────────────────────────────────────

function updateStats() {
  const totalLines = cart.length;
  const totalQty = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalMoney = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Badge trên header giỏ hàng
  document.getElementById("cart-lines-badge").textContent = totalLines + " dòng";
  document.getElementById("cart-qty-badge").textContent = totalQty + " món";

  // Stat boxes
  document.getElementById("stat-lines").textContent = totalLines;
  document.getElementById("stat-qty").textContent = totalQty;
  document.getElementById("stat-total").textContent = formatVND(totalMoney);
}

// ─── Thêm vào giỏ ────────────────────────────────────────────────────────────

function addToCart(id) {
  const product = products.find(p => p.id === id);
  if (!product) return;

  const existing = cart.find(item => item.id === id);
  if (existing) {
    existing.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  renderCart();
}

// ─── Tăng / Giảm số lượng ────────────────────────────────────────────────────

function changeQty(id, delta) {
  const item = cart.find(item => item.id === id);
  if (!item) return;

  item.quantity += delta;

  // Nếu số lượng về 0, hỏi xóa luôn
  if (item.quantity <= 0) {
    const confirmed = confirm(`Số lượng về 0. Bạn có muốn xóa "${item.name}" khỏi giỏ không?`);
    if (confirmed) {
      cart = cart.filter(i => i.id !== id);
    } else {
      item.quantity = 1; // Giữ lại ở mức tối thiểu 1
    }
  }

  renderCart();
}

// ─── Xóa 1 sản phẩm (2.6) ────────────────────────────────────────────────────

function removeFromCart(id) {
  const item = cart.find(item => item.id === id);
  if (!item) return;

  const confirmed = confirm(`Bạn có chắc muốn xóa "${item.name}" khỏi giỏ hàng không?`);
  if (!confirmed) return;

  cart = cart.filter(i => i.id !== id);
  renderCart();
}

// ─── Xóa toàn bộ giỏ hàng (2.7) ─────────────────────────────────────────────

document.getElementById("clear-cart-btn").addEventListener("click", function () {
  if (cart.length === 0) {
    alert("Giỏ hàng đang trống rồi!");
    return;
  }

  const confirmed = confirm(
    " CẢNH BÁO: Bạn sắp xóa TOÀN BỘ giỏ hàng!\n\nHành động này không thể hoàn tác. Bạn có chắc chắn không?"
  );
  if (!confirmed) return;

  cart = [];
  renderCart();
});


renderProducts();
renderCart();