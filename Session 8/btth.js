const squad = [
    ["Nguyen Van A", 10, "FW"],

    ["Tran Van B", 5, "MF"],

    ["Le Van C", 2, "DF"],

    ["Pham Van D", 12, "FW"],

    ["Hoang Van E", 0, "GK"],

    ["Dang Van F", 7, "MF"]

];
function display(squad){
    let result=squad.forEach((value,index) =>{
        console.log(`STT:${index+1} Name:${value[0]} Vị trí:${value[2]} Số bàn thắng:${value[1]}`)
    })
    return result;
}
function searchPlayer(squad){
    let search=prompt("Nhap ten cau thu de tim").toLowerCase();
    let searchArr=squad.filter(b=> b[0].toLowerCase().includes(search));
    if(searchArr.length>0){
        console.log(searchArr);
    }else{
        console.log("Khong co");
    }
}
function sortPlayer(squad){
    let sort=prompt("Nhập vị trí cần lọc").toLowerCase();
    let result=squad.filter(b=>b[2].toLowerCase().includes(sort));
    if(result.length=0){
        console.log("Không có");
    }
    console.log(result);
}
function checkGoal(squad){
    const least=squad.some(n=> n[1]==0)
    if(least){
        console.log(`Có cầu thủ chưa ghi bàn`);
    }
    const most=squad.every(n=> n[1]>0);
    if(most){
        console.log(`Tất cả cầu thủ đã ghi bàn`);
    }else{
        console.log(`Không có`);
    }
}
function totalGoal(squad){
    let total=squad.reduce((acc,cur)=>{
        return acc+cur;
    },0);
}
let choice;
do{
    choice=+prompt(` 1: Danh sách đội bóng (Read)
        2: Tim cầu thủ 
        3: Lọc cầu thủ theo vị trí (Sử dụng filter)
        4: Thống kê tổng bàn thắng (Sử dụng reduce)
        5: Kiểm tra hiệu suất (Sử dụng some và every)
        0: Thoát chương trình
        Nhap lua chon cua ban`)
        switch(choice){
        case 1:
            display(squad);
            break;
        case 2:
            searchPlayer(squad);
            break;
        case 3:
            sortPlayer(squad);
            break;
        case 4:
            totalGoal(squad);
            break;
        case 5:
            checkGoal(squad);
            break;
        case 0:
            console.log("Tạm biệt");
            break;
        default:
            console.log("Không hợp lệ");
            break;
        }
}while(choice!=0)