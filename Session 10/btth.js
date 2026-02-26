let squad = [

    { id: 1, name: "Nguyen Van A", goals: 10, position: "FW" },

    { id: 2, name: "Tran Van B", goals: 5,  position: "MF" },

    { id: 3, name: "Le Van C",   goals: 0,  position: "DF" },

    { id: 4, name: "Pham Van D", goals: 12, position: "FW" },

    { id: 5, name: "Dang Van E", goals: 0,  position: "GK" }

];
let choice;
function addPlayer(squad){
let name=prompt("Nhập tên");
let goals=+prompt("Nhập số bàn thắng");
let position=prompt("Nhập vị trí");
let id=squad.length+1;
squad.push({id,name,goals,position});
}
function findPlayer(squad){
    let search=+prompt("Nhập id cần tìm");
    let result=squad.find(n=>n.id==search)
    if(result.length==0){
        console.log(`Không tìm thấy kết quả phù hợp`)
    }else{
        console.log(result);
    }
}
function updatePlayer(squad){
    let searchId=+prompt("Nhập ID cầu thủ cần tìm");
    let found=false;
    for(let i=0;i<squad.length;i++){
        if(searchId==squad[i].id){
            squad[i].goals++;
            found=true;
            break;
        }
    }
    if(!found){
        console.log(`Không tìm thấy cầu thủ `)
    }
}
function deletePlayer(squad){
    let idSearch=+prompt("Nhập id cần tìm");
    let index=squad.indexOf(p=>p.id==idSearch);
    if(index==-1){
        console.log("Không tìm thấy")
    }else{
        squad.splice(index,1);
        console.log(`Đã xóa cầu thủ ID: ${idSearch}`);
    }
}
do{
    choice=+prompt(` 1: Danh sách đội bóng (Read)
        2: Thêm cầu thủ mới (Create)
        3: Tìm cầu thủ theo ID (Read/Find)
         4: Cập nhật thành tích (Update)
         5: Chuyển nhượng cầu thủ (Delete)
         0: Thoát chương trình
        Nhập lựa chọn của bạn`)
        switch(choice){
            case 1:
                squad.forEach((p)=>{
                    console.log(`Mã: ${p.id}- ${p.name}-${p.position}-${p.goals} bàn`)
                })
                break;
                case 2:
                    addPlayer(squad);
                    break;
                    case 3:
                        findPlayer(squad);
                        break;
                        case 4:
                            updatePlayer(squad);
                            break;
                            case 5:
                                deletePlayer(squad);
                                break;
                            case 0:
                                console.log(`Goodbye`);
                                break;
            default:
                console.log(`Khong hop le`);
                break;
        }
}while(choice!=0)