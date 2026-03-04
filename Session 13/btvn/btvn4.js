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
        str+=` <p>${products[i].name}<span> ${products[i].price}</span> <button class="edit-price-btn" onclick="updateProduct(${products[i].id})">Sửa giá</button></p>`
    }
document.getElementById("product-list").innerHTML=str;
}
renderProduct();

function updateProduct(id){
    let price=prompt("Nhập lại giá");
    let index=products.findIndex(p=>{
        return p.id==id;
    })
    products[index].price=price;
    renderProduct();
}



