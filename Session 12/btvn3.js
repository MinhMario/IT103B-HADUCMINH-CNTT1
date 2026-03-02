let products=[
    {
        id:1,
        name:"Samsung Galaxy Note 8",
        price:10,
        quantity:20,
        company:"Samsung",
    },
    {
        id:2,
        name:"Iphone 36",
        price:20,
        quantity:40,
        company:"Apple",
    },
    {
        id:3,
        name:"Xiaomi Dog China",
        price:30,
        quantity:30,
        company:"Xiaomi",
    },
    {
        id:4,
        name:"Oppo CC",
        price:40,
        quantity:40,
        company:"Oppo",
    },
]
let cart=[];
function displayByCompany(product){
    let grouped=[];
    product.forEach(p => {
        if(!grouped[p.company]){
            grouped[p.company]=[];
        }
          grouped[p.company].push(p.name);
    });
    console.log(grouped);
}
function addPhone(product){
    let name=prompt("Nhập tên điện thoại");
    let id=+prompt("Nhập id điên thoại");
    while(product.some(p=>p.id==id)){
        alert("Không được nhập id trùng");
        let id=+prompt("Nhập id điện thoại");
    }
    let price=+prompt("Nhập giá tiền");
    let quantity=+prompt("Nhập số lượng");
    product.push({name,id,price,quantity});
}
function searchPhone(product){
    let keyword=prompt("Nhập tên hoặc id sách cần tìm");
    let result=product.filter(p=> p.name.toLowerCase().includes(keyword.toLowerCase())||
    p.id==+keyword
    );
    if(result.length==0){
        console.log("Không tìm thấy sản phẩm");
        return;
    }else{
        console.log("Kết quả tìm kiếm");
        result.forEach(p=>{
            console.log(`Id:${p.id}| Name:${p.name}| Price:${p.price}| Quantity:${p.quantity}|Company:${p.company}`)
        })
    }
}
function buyPhone(cart,product){
     let id=+prompt("Nhập id điên thoại");
    while(product.some(p=>p.id==id)){
        alert("Không được nhập id trùng");
        let id=+prompt("Nhập id điện thoại");
    }
    if(product.every(p=>p.id!=id)){
        console.log("Id điện thoại không tồn tại");
        return;
    }
    let phone=product.find(p=>p.id==id);
    if(phone.quantity==0){
        console.log("Số lượng đã hết");
    }
    let amount=+prompt("Nhập số lượng muốn mua")
    if(amount>phone.quantity){
        console.log(`Số lượng không hợp lệ`);
        return;
    }
    phone.quantity-=amount;
    let exist=cart.find(p=>p.id==id)
        if(exist){
            exist.quantity+=amount;
        }else{
            cart.push({...phone,quantity:amount});
        }
    let total=0;
    cart.forEach(b=> {
        let subtotal=b.price*b.quantity;
        total+=subtotal;
    })
    console.log(`Tổng số tiền phải trả là: ${total}`);
}
function buyAll(cart){
    console.log("Thanh toán thành công!");
    cart.length=0;
}
function sort(products){
    console.log(`Sap xep dien thoai theo gia`);
    let choice=+prompt(`1.Tang dan
        2.Giam dan`);
        switch(choice){
            case 1:
                products.sort((a,b)=>{a.price-b.price})
                console.log(products)
                break;
                case 2:
                    products.sort((a,b)=>{b.price-a.price})
                    console.log(products);
                    break;
                default:
                    console.log("Khong hop le");
                    break;
        }
}
function bigMoney(product){
    let original=0;
    product.forEach(p=>{
        let subtotal=p.price*p.quantity;
        original+=subtotal;
    })
    console.log(`Tong gia tri dien thoai trong kho la ${original}`);
}
