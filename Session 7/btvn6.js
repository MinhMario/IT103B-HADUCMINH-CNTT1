let players = [
  "P001-Nguyễn Văn A-Thủ môn",
  "P002-Trần Thị B-Hậu vệ",
  "P003-Lê Văn C-Hậu vệ",
  "P004-Phạm Văn D-Tiền vệ",
  "P005-Hoàng Thị E-Tiền đạo",
  "P006-Vũ Minh F-Tiền đạo",
  "P007-Đặng Văn G-Thủ môn",
];

function getShortestPlayerName() {
  let shortestName = "";
  let minLength = 999;
  
  for (let i = 0; i < players.length; i++) {
    let parts = players[i].split("-");
    let playerName = parts[1];
    
    if (playerName.length < minLength) {
      minLength = playerName.length;
      shortestName = playerName;
    }
  }
  
  return shortestName;
}

function countPlayersWithPositionLengthGreaterThan(length) {
  let count = 0;
  
  for (let i = 0; i < players.length; i++) {
    let parts = players[i].split("-");
    let position = parts[2];
    
    if (position.length > length) {
      count++;
    }
  }
  
  return count;
}

console.log("=== QUẢN LÝ ĐỘI BÓNG ===\n");

let tenNganNhat = getShortestPlayerName();
console.log("a. Cầu thủ có tên ngắn nhất:");
console.log("   " + tenNganNhat);

console.log("\nb. Đếm cầu thủ có tên vị trí dài hơn:");
console.log("   - Dài hơn 6 ký tự: " + countPlayersWithPositionLengthGreaterThan(6) + " cầu thủ");
console.log("   - Dài hơn 7 ký tự: " + countPlayersWithPositionLengthGreaterThan(7) + " cầu thủ");
console.log("   - Dài hơn 8 ký tự: " + countPlayersWithPositionLengthGreaterThan(8) + " cầu thủ");