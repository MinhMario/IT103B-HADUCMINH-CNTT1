let playerIds=["P01","P02","P03","P04","P05"];
let playerNames=["Nguyen Van A","Tran Thi B","Le Van C","Pham Van D","Hoang Thi E"];
let playerNum=[1,2,3,4,5];
let id=prompt("Nhập id cầu thủ")
let num;
let player;
function printTeam(){
    for(let i=0;i<playerNames.length;i++){
        console.log(`${i+1}-${playerNames[i]}`)
    }
}
function update(playerId){
    let found=false
    for(let i=0;i<playerIds.length;i++){
    if(playerIds[i]==playerId){
        let newName=prompt("Nhập tên mới cầu thủ");
        let jersyNum=+prompt("Nhập số áo mới cầu thủ");
        playerNames[i]=newName
        playerNum[i]=jersyNum;
        console.log("Cập nhật thành công")
        found=true
        break;
    }
    }if(!found){
        console.log("Không tìm thấy mã phù hợp với cầu thủ này")
    }
}
printTeam();
update(id);
printTeam();
