
    let products = [
    {
        id: 1,
        name: "iPhone 15 Pro Max",
        category: "Điện tử",
        price: 29990000,
        quantity: 15,
        description: "Chip A17 Pro, camera 48MP, màn hình 6.7 inch"
    },
    {
        id: 2,
        name: "Áo Thun Nam Basic",
        category: "Thời trang",
        price: 199000,
        quantity: 100,
        description: "Cotton 100%, form regular, nhiều màu sắc"
    },
    {
        id: 3,
        name: "Nồi Chiên Không Dầu Philips",
        category: "Đồ gia dụng",
        price: 2490000,
        quantity: 30,
        description: "Dung tích 4.1L, công suất 1400W, hẹn giờ tự động"
    },
    {
        id: 4,
        name: "Combo Hạt Điều Rang Muối",
        category: "Thực phẩm",
        price: 150000,
        quantity: 200,
        description: "Hạt điều Bình Phước, rang muối vừa, túi 500g"
    },
    {
        id: 5,
        name: "Đắc Nhân Tâm",
        category: "Sách",
        price: 86000,
        quantity: 50,
        description: "Tác giả Dale Carnegie, bìa mềm, 320 trang"
    }
];

function renderProduct(){
    let str="";
    for(let i=0;i<products.length;i++){
        str+=`<tr>
                <td>${i+1}</td>
                <td><strong>${products[i].name}</strong></td>
                <td>${products[i].category}</td>
                <td class="price">${products[i].price}&nbsp;₫</td>
                <td class="quantity">${products[i].quantity}</td>
                <td class="description">${products[i].description}</td>
                <td>
                  <div class="action-buttons">
                    <button class="btn-edit" onclick="editProduct(${products[i].id})">
                      ✏️ Sửa
                    </button>
                    <button class="btn-delete" onclick="deleteProduct(${products[i].id})">
                      🗑️ Xóa
                    </button>
                  </div>
                </td>
              </tr>`
    }
    document.getElementById("productTableBody").innerHTML=str;
     updateStats();
}
renderProduct();
let editing=null;
document.getElementById("productForm").addEventListener("submit", (e) => {
    e.preventDefault();
    if (editing !== null) {
        updateProduct(); 
    } else {
        addProduct();   
    }
});

let id=6
function addProduct(){
    let name=document.getElementById("productName").value;
    let category=document.getElementById("productCategory").value;
    let price=document.getElementById("productPrice").value;
    let quantity=document.getElementById("productQuantity").value;
    let description=document.getElementById("productDescription").value;
    products.push({id:id++,name,category,price,quantity,description});
    renderProduct();
}

document.getElementById("cancelBtn").addEventListener("click", resetForm);

function resetForm() {
    editing = null;
    document.getElementById("productForm").reset();
    document.getElementById("formTitle").textContent      = "Thêm Sản Phẩm Mới";
    document.getElementById("submitBtn").textContent      = "➕ Thêm Sản Phẩm";
    document.getElementById("submitBtn").type             = "submit"; 
    document.getElementById("submitBtn").onclick          = null;     
    document.getElementById("cancelBtn").style.display   = "none";
}

function editProduct(id){
     const product = products.find(p => p.id === id);
     if (!product) return;
    document.getElementById("productName").value        = product.name;
    document.getElementById("productCategory").value   = product.category;
    document.getElementById("productPrice").value       = product.price;
    document.getElementById("productQuantity").value    = product.quantity;
    document.getElementById("productDescription").value = product.description;
        editing=id;
        document.getElementById("submitBtn").textContent="Cập nhật";
        document.getElementById("cancelBtn").style.display   = "inline-block";
}

function updateProduct(){
    const name        = document.getElementById("productName").value.trim();
    const category    = document.getElementById("productCategory").value;
    const price       = Number(document.getElementById("productPrice").value);
    const quantity    = Number(document.getElementById("productQuantity").value);
    const description = document.getElementById("productDescription").value.trim();
    let product=products.find(p=>p.id===editing);
    if (product) {
        product.name        = name;
        product.category    = category;
        product.price       = price;
        product.quantity    = quantity;
        product.description = description;
    }
    renderProduct();
    resetForm();
    alert("Cập nhật thành công");
    }
function deleteProduct(id){
    for(let i=0;i<products.length;i++){
        if(products[i].id==id){
            const confirmed = confirm(`Bạn có chắc muốn xóa sản phẩm "${products[i].name}" không?`);
             if (!confirmed) return;
            products.splice(i,1);
            break;
        }
    }
     if(editing){
        resetForm();
    }
    renderProduct();
}
document.getElementById("clearAllBtn").addEventListener("click",(e)=>{
    e.preventDefault();
    clearAll();
})
function clearAll(){
    const confirmed = confirm(`Bạn có chắc muốn xóa sản phẩm  không?`);
    if(!confirmed)return;
    products=[];
    id=1;
    renderProduct();
}
document.getElementById("searchInput").addEventListener("input",(e)=>{
    e.preventDefault();
    searchProduct();
})
function searchProduct(){
    let name=document.getElementById("searchInput").value.toLowerCase();
    let result=products.filter(p=>p.name.toLowerCase().includes(name));
     document.getElementById("productTableBody").innerHTML = result.map((p, i) => `
        <tr>
          <td>${i + 1}</td>
          <td>${p.name}</td>
          <td>${p.category}</td>
          <td class="price">${Number(p.price).toLocaleString("vi-VN")} ₫</td>
          <td class="quantity">${p.quantity}</td>
          <td class="description">${p.description}</td>
          <td>
            <div class="action-buttons">
              <button class="btn-edit" onclick="editProduct(${p.id})">✏️ Sửa</button>
              <button class="btn-delete" onclick="deleteProduct(${p.id})">🗑️ Xóa</button>
            </div>
          </td>
        </tr>
    `).join("");
    }
document.getElementById("filterCategory").addEventListener("change", filterByCategory);

function filterByCategory() {
    const category = document.getElementById("filterCategory").value;
    const result = category === "" ? products : products.filter(p => p.category === category);

    document.getElementById("productTableBody").innerHTML = result.map((p, i) => `
        <tr>
          <td>${i + 1}</td>
          <td>${p.name}</td>
          <td>${p.category}</td>
          <td class="price">${Number(p.price).toLocaleString("vi-VN")} ₫</td>
          <td class="quantity">${p.quantity}</td>
          <td class="description">${p.description}</td>
          <td>
            <div class="action-buttons">
              <button class="btn-edit" onclick="editProduct(${p.id})">✏️ Sửa</button>
              <button class="btn-delete" onclick="deleteProduct(${p.id})">🗑️ Xóa</button>
            </div>
          </td>
        </tr>
    `).join("");
}
function updateStats() {
    const totalProducts = products.length;

    const totalValue = products.reduce((sum, p) => sum + (Number(p.price) * Number(p.quantity)), 0);

    const totalQuantity = products.reduce((sum, p) => sum + Number(p.quantity), 0);

    document.getElementById("totalProducts").textContent = totalProducts;
    document.getElementById("totalValue").textContent    = totalValue.toLocaleString("vi-VN") + " ₫";
    document.getElementById("totalQuantity").textContent = totalQuantity;
}