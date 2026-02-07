let players = [
  "P001-Nguyễn Văn A-Thủ môn",
  "P002-Trần Thị B-Hậu vệ",
  "P003-Lê Văn C-Hậu vệ",
  "P004-Phạm Văn D-Tiền vệ",
  "P005-Hoàng Thị E-Tiền đạo",
  "P006-Vũ Minh F-Tiền đạo",
  "P007-Đặng Văn G-Thủ môn",
].map(c=>c.toLowerCase());
function getAllPosition(){
    console.log("Các vị trí trong đội bóng");
    for(let i=0;i<players.length;i++){
        let part=players[i].split("-");
        let position=part[2];
        console.log(`${position}`);
    }
}
function findLongestName(){
    let longestName=0;
     for(let i=0;i<players.length;i++){
        let part=players[i].split("-");
        let playerName=part[1];
        if(playerName.length>longestName){
            longestName=playerName;
        }
     }
     console.log(`Cầu thủ có tên dài nhất ${longestName}`);
}
function countPlayerWithLetter(letter){
    let vdv=[];
    for(let i=0;i<players.length;i++){
        let part=players[i].split("-")
        let playerName=part[1];
        if(playerName.includes(letter)){
            vdv.push(playerName);
        }
    }
    console.log(vdv);
}
getAllPosition();
findLongestName();
let name=prompt("Nhập tên cầu thủ cần tìm").toLowerCase();
countPlayerWithLetter(name);
