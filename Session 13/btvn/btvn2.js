const products = [
{ id: 1, name: "Bánh Chưng", price: 150000 },
{ id: 2, name: "Giò Lua", price: 180000 },
{ id: 3, name: "Cành Đào", price: 500000 },
{ id: 4, name: "Mứt Tết", price: 120000 },
{ id: 5, name: "Bao Li Xì", price: 25000 },
{ id: 6, name: "Dưa Hấu Tết", price: 80000 },
];
function renderProduct(){
    let str=``
    for(let i=0;i<products.length;i++){
        str+=` <p>${products[i].name}<span> ${products[i].price}</span></p><button class="delete-btn">Xóa</button>`
    }
document.getElementById("product-list").innerHTML=str;
}
renderProduct();
function addProduct(){
    const form=document.querySelector("form");
    form.addEventListener("submit",function(event){
        event.preventDefault();
        const name = document.getElementById("product-name").value;
        const price = document.getElementById("product-price").value;
        products.push({
            name:name,
            price:price,
            id:products.length+1,
        })
        renderProduct();
        form.reset();
    });
}
addProduct();

