    // const products = [
    //     { id: 1, name: "Bánh Chưng", price: 150000, img: "/img/banhchung.webp" },
    //     { id: 2, name: "Giò Lụa", price: 180000, img: "/img/giolua.jpg" },
    //     { id: 3, name: "Cành Đào", price: 500000, img: "/img/canhdao.webp" },
    //     { id: 4, name: "Mứt Tết", price: 120000, img: "/img/muttet.webp" },
    //     { id: 5, name: "Lì Xì (Tệp)", price: 20000, img: "/img/lixi.webp" },
    //     { id: 6, name: "Dưa Hấu", price: 60000, img: "/img/duahau.jpg" }
    // ];
    // localStorage.setItem("products",JSON.stringify(products));
    const products=JSON.parse(localStorage.getItem("products"));
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    function renderProduct() {
        let str = "";

        for (let i = 0; i < products.length; i++) {
            str += `
                <div class="product-card">
                    <img src="${products[i].img}" alt="${products[i].name}">
                    <h3>${products[i].name}</h3>
                    <p class="price">${products[i].price.toLocaleString('vi-VN')}đ</p>
                    <button class="btn-add" id="btn-add-${products[i].id}" onclick="addProduct(${products[i].id})">
                        Thêm vào giỏ
                    </button>
                </div>`;
        }

        document.getElementById("product-list").innerHTML = str;
    }
    renderProduct();
    function renderCart(){
let str=""
for(let i=0;i<cart.length;i++){
    if(cart.length!=0){
    str+=`
                    <li>
                        <span class="cart-item-name">${cart[i].name}</span>
                        <div>
                            <span class="cart-item-price">${cart[i].price}</span>
                            <button class="btn-remove" onclick="deleteProduct(${cart[i].id})">X</button>
                        </div>
                    </li>`
}else{
    str+=`<li class="empty-msg">Chưa có món nào...</li>`;
}
}
document.getElementById("cart-list").innerHTML=str;
}
    function addProduct(id){
        for(let i=0;i<products.length;i++){
            if(products[i].id==id){
                cart.push(products[i]);
            localStorage.setItem("cart",JSON.stringify(cart));
            
        }
    }
    renderCart();
    buyAll();
    }


function deleteProduct(id){
    for(let i=0;i<cart.length;i++){
        if(cart[i].id==id){
             cart.splice(i,1);
            localStorage.removeItem("cart",JSON.stringify(cart[i]));
           
        }
    }
    renderCart();
    buyAll()
}

function buyAll(){
   let total=0;
   for(let i=0;i<cart.length;i++){
    total+=cart[i].price;
   }
    document.getElementById("total-price").textContent=total;
}
function checkout() {
    if (cart.length > 0) {
        localStorage.removeItem("cart");

        cart = [];
        renderCart(); 
        const totalEl = document.getElementById("total-price");
        if (totalEl) {
            totalEl.textContent = "0đ";
        }
        alert("Đã thanh toán thành công");
    } else {
        // Giỏ đang trống
        alert("Giỏ hàng đang trống");
    }
}
