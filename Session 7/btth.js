let mainName=["Messi","Ronaldo"];
let mainGoal=[30,20];
function addPlayer(){
    let playerName=prompt("Nhap ten cau thu");
    let playerGoal=+prompt("Nhap ban thang cua cau thu");
    mainName.push(playerName);
    mainGoal.push(playerGoal);
    console.log(`Da them cau thu thanh cong`);
}
function showSquad(){
    for(let i=0;i<mainGoal.length;i++){
        console.log(`${mainName[i]}-${mainGoal[i]} bàn `)
    }
}
const getTotalGoals=function(total){
    for(let i=0;i<mainGoal.length;i++){
        total+=mainGoal[i];
    }
    return total;
}
function findMostGoals(){
    let max=mainGoal[0];
    for(let i=0;i<mainGoal.length;i++){
        if(mainGoal[i]>max){
            max=mainGoal[i];
        }
    }
    return max;
}
let choice;
do {
     choice=+prompt(`--- QUẢN LÝ ĐỘI BÓNG---

1. Nhập cầu thủ mới

2. Xem danh sách đội hình

3. Xem thành tích toàn đội

4. Tìm Vua phá lưới

0. Thoát 

Lựa chọn của bạn: `)
switch(choice){
    case 1:
        addPlayer();
        break;
    case 2:
        showSquad();
        break;
    case 3:
        console.log(getTotalGoals(0));
        break;
    case 4:
        let result=findMostGoals();
        for(let i=0;i<mainGoal.length;i++){
            if(mainGoal[i]==result){
                console.log(`Vua pha luoi la ${mainName[i]} voi so ban la ${result}`)
            }
        }
        break;
        case 0:
        console.log("Tạm biệt");
        break;
        default:
            console.log("Lựa chọn không hợp lệ");
            break;
}
}while(choice!=0);
