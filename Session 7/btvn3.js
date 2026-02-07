let players = [];

let numPlayers = +prompt("Có bao nhiêu cầu thủ cần nhập vào đội bóng?");

for(let i = 0; i < numPlayers; i++){
    console.log(`\n=== Nhập cầu thủ thứ ${i+1} ===`);
    
    let playerId;
    let isDuplicate;
    do {
        isDuplicate = false;
        playerId = prompt("Nhập mã cầu thủ:");
        
        for(let j = 0; j < players.length; j++){
            let existingId = players[j].split("-")[0];
            if(existingId == playerId){
                isDuplicate = true;
                console.log("Mã cầu thủ đã tồn tại! Vui lòng nhập mã khác.");
                break;
            }
        }
    } while(isDuplicate);
    
    let playerName;
    do {
        playerName = prompt("Nhập tên cầu thủ:");
        if(!playerName || playerName.trim() == ""){
            console.log("Tên không được để trống!");
        }
    } while(!playerName || playerName.trim() == "");
    
    let positionNum = +prompt("Nhập vị trí (1=Thủ môn, 2=Hậu vệ, 3=Tiền vệ, 4=Tiền đạo):");
    let position;
    
    if(positionNum == 1){
        position = "Thủ môn";
    } else if(positionNum == 2){
        position = "Hậu vệ";
    } else if(positionNum == 3){
        position = "Tiền vệ";
    } else if(positionNum == 4){
        position = "Tiền đạo";
    } else {
        position = "Không xác định";
    }
    
    let playerInfo = `${playerId}-${playerName}-${position}`;
    players.push(playerInfo);
    console.log("Đã thêm cầu thủ thành công!");
}

function printTeamRoster(){
    console.log("\n=== DANH SÁCH ĐỘI BÓNG ===");
    for(let i = 0; i < players.length; i++){
        let parts = players[i].split("-");
        let id = parts[0];
        let name = parts[1];
        let position = parts[2];
        console.log(`${i+1}. Mã: ${id} - Tên: ${name} - Vị trí: ${position}`);
    }
}

function pushPlayer(name, position){
    let newId = "P" + String(players.length + 1).padStart(2, "0");
    
    if(!name || name.trim() == ""){
        console.log("Tên không được để trống!");
        return;
    }
    
    let playerInfo = `${newId}-${name}-${position}`;
    players.push(playerInfo);
    console.log(`Đã thêm cầu thủ ${name} thành công!`);
}

printTeamRoster();

pushPlayer("Nguyen Van F", "Tiền đạo");
pushPlayer("Tran Van G", "Hậu vệ");

printTeamRoster();