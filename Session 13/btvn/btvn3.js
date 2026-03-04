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
        str += `
        <li class="product-item">
            <p>${products[i].name} - ${products[i].price} VND</p>
            <button class="delete-btn" onclick="deleteProduct(${products[i].id})">Xóa</button>
        </li>`;
    }
    document.getElementById("product-list").innerHTML = str;
}

renderProduct();

function deleteProduct(id) {
    const confirmed = confirm("Bạn có chắc muốn xóa sản phẩm này?");
    if (confirmed) {
        const index = products.findIndex(function(p) {
            return p.id === id;
        });
        products.splice(index, 1);
        renderProduct();
    }
}

const form = document.querySelector("form");
form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("product-name").value;
    const price = document.getElementById("product-price").value;

    products.push({
        id: products.length + 1,
        name: name,
        price: price,
    });

    renderProduct();
    form.reset();
});