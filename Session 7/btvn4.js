let players = [
  "P001-Nguyễn Văn A-Thủ môn",
  "P002-Trần Thị B-Hậu vệ",
  "P003-Lê Văn C-Hậu vệ",
  "P004-Phạm Văn D-Tiền vệ",
  "P005-Hoàng Thị E-Tiền đạo",
  "P006-Vũ Minh F-Tiền đạo",
  "P007-Đặng Văn G-Thủ môn",
];
function printTeamRoster(){
    console.log("Danh sách đội bóng");
    for(let i=0;i<players.length;i++){
        let parts=players[i].split("-");
        let id=parts[0];
        let name=parts[1];
        let position=parts[2];
         console.log(`${i+1}. Mã: ${id} | Tên: ${name} | Vị trí: ${position}`);
    }
}
function countPlayerByPostion(players){
    let thuMon = 0;
    let hauVe = 0;
    let tienVe = 0;
    let tienDao = 0;
    
    for(let i = 0; i < players.length; i++){
        let parts = players[i].split("-");
        let position = parts[2];
        
        if(position == "Thủ môn"){
            thuMon++;
        } else if(position == "Hậu vệ"){
            hauVe++;
        } else if(position == "Tiền vệ"){
            tienVe++;
        } else if(position == "Tiền đạo"){
            tienDao++;
        }
    }
    
    console.log("\n=== THỐNG KÊ VỊ TRÍ ===");
    console.log(`Thủ môn: ${thuMon} cầu thủ`);
    console.log(`Hậu vệ: ${hauVe} cầu thủ`);
    console.log(`Tiền vệ: ${tienVe} cầu thủ`);
    console.log(`Tiền đạo: ${tienDao} cầu thủ`);
}

printTeamRoster();
countPlayerByPostion(players);