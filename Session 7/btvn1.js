let playerIds=["p01","p02"];
let playerPositions=[];
let amount=prompt("Có bao nhiêu cầu thủ cần nhập vào đội bóng");
let id;
let pos;
for(let i=0;i<amount;i++){
    id=prompt("Nhập id cầu thủ");
    while(playerIds[i]==id){
        console.log("Id cầu thủ không được trùng nhau");
        id=prompt("Nhập id cầu thủ");
    }
    pos=+prompt("Nhập vị trí(1-5)");
    switch(pos){
        case 1:
            playerPositions.push("Thủ môn");
            break;
        case 2:
            playerPositions.push("Hậu vệ");
            break;
        case 3:
            playerPositions.push("Tiền vệ");
            break;
        case 4:
            playerPositions.push("Tiền đạo");
            break;
            default:
                console.log("Không hợp lệ");
                break;   
    }
}
function printTeam(){
    for(let i=0;i<amount;i++){
        console.log(`${i+1}-${playerPositions[i]}-${playerIds[i]}`)
    }
}
function findPlayersByPosition(position){
    let arr=[];
    for(let i=0;i<playerPositions.length;i++){
        if(position==playerPositions[i]){
            arr[i].push(i);
        }
    }
    return arr;
}
