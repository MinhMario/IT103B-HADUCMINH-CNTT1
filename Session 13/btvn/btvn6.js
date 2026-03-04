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
            <button onclick="sortHigh"()">Tăng giá</button>
            <button onclick="sortLow"()">Giảm giá</button>
        </li>`;
    }
    document.getElementById("product-list").innerHTML = str;
}

document.getElementById("sort-asc").addEventListener("click", function() {
    products.sort(function(a, b) {
        return a.price - b.price;
    });
    renderProduct();
});

document.getElementById("sort-desc").addEventListener("click", function() {
    products.sort(function(a, b) {
        return b.price - a.price;
    });
    renderProduct();
});
