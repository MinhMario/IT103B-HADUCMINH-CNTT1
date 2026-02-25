let names=["Tai nghe","Laptop","Webcam","Thịt chó"];
let prices=[550,600,360,700];
let stocks=[100,0,300,400];
function moreThan500(prices,names){
    for(let i=0;i<prices.length;i++){
        if(prices[i]>500){
        console.log(`${names[i]}`);
        }
    }
}
function checkProduct(stocks,prices){
  let check= stocks.some(n=>n>0);
  if(check){
    console.log(`Còn hàng`);
  }else{
    console.log(`Hết hàng`)
  }
  let doubleCheck=prices.every(n=>n>100);
  if(doubleCheck){
    console.log(`Đảm bảo`)
  }else{
    console.log(`Không đảm bảo`)
  }
}
function totalProduct(prices){
    let result=prices.map((n,index)=>{
        return n*stocks[index];
    })
    console.log(`Tổng giá trị hàng hoá là ${result}`);
    return result;
}
function searchProduct(names,prices,stocks){
    let keyword=prompt("Nhập tên hàng hoá").toLowerCase();
    let newKey=names.map((name,index)=>{
        return{
            name:name,
            price:prices[index],
            stocks:stocks[index]
        }
    })
    let result=newKey.filter(n=>n.toLowerCase().includes(keyword));
    if(result>0){
        result.forEach(n=>{
            console.log(`${n.name}-${n.price}-${n.stocks}`);
        })
    }else{
        console.log(`Khong tim thay ket qua phu hop`)
    }
}
function checkPocket(names,prices,stocks){
    let productStatus=names.map((p,index)=>{
        return{
        nameStatus:p,
        price:prices[index],
        status:stocks[index]>0?"Còn hàng":"Hết hàng",
        }
    })
    console.log(productStatus);
}
let choice;
do{
    choice=+prompt("Nhập lựa chọn");
    switch(choice){
        case 1:
            moreThan500(prices,names);
            break;
        case 2:
            checkProduct(stocks,prices)
            break;
        case 3:
            totalProduct(prices)
            break;
        case 4:
            searchProduct(names,prices,stocks)
            break;
        case 5:
            searchProduct(names,prices,stocks)
            break;
        case 6:
             checkPocket(names,prices,stocks)
            break;
        case 7:
            console.log("Kết thúc");
            break;
        default:
            console.log(`Không hợp lệ`)
            break;
    }
}while(choice!=7)