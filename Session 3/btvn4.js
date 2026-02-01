let choice=prompt("Tiếp tục kiểm kê sách tiếp theo").toLowerCase();
let kind;
let loss=0;
let excess=0;
let amount;
let out=0;
switch(choice){
    case "có":
        alert("Tiếp tục nhập thông tin sách")
        amount=+prompt("Nhập số lượng tồn kho");
        while(amount<=0){
            alert("Không hợp lệ");
            amount=+prompt("Nhập số lượng tồn kho")
        }
            kind=+prompt("Nhập trạng thái (1-2)")
            while(kind!=1&&kind!=2){
                console.log("Trạng thái không hợp lệ");
                kind=+prompt("Nhập trạng thái (1-2)");
            }
            if(amount==0&&kind==1){
        out++;
        }
        else if(kind==2){
            loss++;
        }else if(kind==1&&amount>=10){
            excess++;
        }else if(kind==1&&amount<=9){
            excess++;
            console.log("Sách tồn kho bình thường")
        }  
        break;
        case "không":
        console.log(`Số sách đã kiểm kê:${amount}`);
        console.log(`Số sách đã mất ${loss}`)
        console.log(`Số sách hết hàng ${out}`)
        break;
        default:
            console.log("Không hợp lệ");
            break;
}