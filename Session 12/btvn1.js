let products = [
  {
    id: 1,
    name: "mèn mén",
    price: 20000,
    quantity: 20,
    category: "món ăn dân tộc Mông",
  },
  {
    id: 2,
    name: "mứt",
    price: 80000,
    quantity: 21,
    category: "món ăn dân tộc Kinh",
  },
  {
    id: 3,
    name: "cơm lam",
    price: 40000,
    quantity: 15,
    category: "món ăn dân tộc Mông",
  },
  {
    id: 4,
    name: "bánh đậu xanh",
    price: 60000,
    quantity: 30,
    category: "món ăn dân tộc Kinh",
  }
];
let cart=[];
let choice;
function display(product){
  let grouped={};
  product.forEach(p => {
    if(!grouped[p.category]){
      grouped[p.category]=[];
    } 
    grouped[p.category].push(p.name)
  });
  console.log(grouped);
}
do{
choice=+prompt(`Nhap lua chon cua ban
1. Hiển thị các sản phẩm theo tên danh mục.
2.Chọn sản phẩm để mua bằng cách nhập id sản phẩm.
3.Sắp xếp các sản phẩm trong cửa hàng theo giá:
Tăng dần.
Giảm dần.
4.Tính số tiền thanh toán trong giỏ hàng.
0.Thoát.`);
switch(choice){
    case 1:
        display(products);
        break;
        case 2:
          let found=true;
          let search=+prompt("Nhập id sản phẩm");
          for(let i=0;i<products.length;i++){
            if(search==products[i].id){
              found=false;
              if(products[i].quantity==0){
                console.log("khong du so luong");
                break;
              }
              let count=+prompt("Nhap san pham muon mua");
              if(count>products[i].quantity){
                console.log("khong du so luong");
                break;
              }
              let quantityLeft=products[i].quantity-count;
              products[i].quantity=quantityLeft;
                   cart.push({...products[i],quantity:count});
                   break;
            }
          }
          if(found){
            console.log("Không tìm thấy sản phẩm");
          }
          break;
        case 3:
          let subChoice=+prompt(`1.Tăng dần
            2.Giảm dần`)
            switch(subChoice){
              case 1:
                products.sort((a,b)=>a.price-b.price);
                console.log(products);
                break;
              case 2:
                products.sort((a,b)=>b.price-a.price);
                console.log(products);
                break;
                default:
                  console.log('Không hợp lệ');
                  break;
            }
            break;
          case 4:
          let total=0;
          if(cart.length==0){
            console.log(`Giỏ hàng trống`);
            break;
          }
          cart.forEach(p=>{
            total+=p.price*p.quantity;
            console.log(`Tổng tiền của ${p.name} là :${p.quantity*p.price}`)
          });
          console.log(`Tổng tiền là ${total}đ`);
          break;
          case 0:
            console.log('Kết thúc');
            break;
        default:
          console.log(`Không hợp lệ`);
          break;
}
}while(choice!=0);