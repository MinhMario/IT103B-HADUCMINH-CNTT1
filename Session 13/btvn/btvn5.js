const products = [
    { id: 1, name: "Bánh Chưng", price: 150000 },
    { id: 2, name: "Giò Lụa", price: 180000 },
    { id: 3, name: "Cành Đào", price: 500000 },
    { id: 4, name: "Mứt Tết", price: 120000 },
    { id: 5, name: "Bao Lì Xì", price: 25000 },
    { id: 6, name: "Dưa Hấu Tết", price: 80000 },
];

function renderProduct() {
    let str = "";
    for (let i = 0; i < products.length; i++) {
        str += `<li class="product-item">
            <p>${products[i].name} <span>${products[i].price}</span></p>
            <button onclick="updateProduct(${products[i].id})">Sửa giá</button>
        </li>`;
    }
    document.getElementById("product-list").innerHTML = str;
}

renderProduct();

// Hàm sửa giá
function updateProduct(id) {
    const newPrice = prompt("Nhập lại giá");
    if (newPrice === null) return;

    const index = products.findIndex(function(p) {
        return p.id === id;
    });

    products[index].price = Number(newPrice);
    renderProduct();
}

// Hàm tìm kiếm - lắng nghe input
document.getElementById("search-input").addEventListener("input", function() {
    const keyword = this.value.toLowerCase();
    const items = document.querySelectorAll(".product-item");

    items.forEach(function(item) {
        const name = item.textContent.toLowerCase();
        if (name.includes(keyword)) {
            item.style.display = "";
        } else {
            item.style.display = "none";
        }
    });
});