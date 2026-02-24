const players = [
  "Messi - Forward - 25 - 15 - 34",
  "Ronaldo - Forward - 30 - 10 - 38",
  "Neymar - Forward - 18 - 20 - 32",
  "De Bruyne - Midfielder - 8 - 25 - 35",
  "Kante - Midfielder - 2 - 5 - 36",
  "Van Dijk - Defender - 5 - 3 - 33",
  "Alisson - Goalkeeper - 0 - 1 - 37",
];
function reportByPosition(players){
  // ✅ Khai báo TẤT CẢ biến BÊN NGOÀI vòng lặp
  let forwards = 0;
  let midfielders = 0;
  let defenders = 0;
  let goalkeepers = 0;
  
  let forwardTotalGoal = [];
  let forwardTotalAssist = [];
  let forwardTotalMatch = [];
  
  let midfielderTotalGoal = [];
  let midfielderTotalAssist = [];
  let midfielderTotalMatch = [];
  
  let defenderTotalGoal = [];
  let defenderTotalAssist = [];
  let defenderTotalMatch = [];
  
  let goalkeeperTotalGoal = [];
  let goalkeeperTotalAssist = [];
  let goalkeeperTotalMatch = [];
  
  // Vòng lặp - chỉ push dữ liệu
  for(let i = 0; i < players.length; i++){
    let part = players[i].split(" - ");
    let position = part[1];
    let goal = parseInt(part[2]);
    let assist = parseInt(part[3]);
    let match = parseInt(part[4]);
    
    if(position == "Forward"){
      forwards++;
      forwardTotalGoal.push(goal);
      forwardTotalAssist.push(assist);
      forwardTotalMatch.push(match);
    } 
    else if(position == "Midfielder"){
      midfielders++;
      midfielderTotalGoal.push(goal);
      midfielderTotalAssist.push(assist);
      midfielderTotalMatch.push(match);
    }
    else if(position == "Defender"){
      defenders++;
      defenderTotalGoal.push(goal);
      defenderTotalAssist.push(assist);
      defenderTotalMatch.push(match);
    }
    else if(position == "Goalkeeper"){
      goalkeepers++;
      goalkeeperTotalGoal.push(goal);
      goalkeeperTotalAssist.push(assist);
      goalkeeperTotalMatch.push(match);
    }
  }
  
  let forwardGoal = forwardTotalGoal.reduce((acc, cur) => acc + cur, 0);
  let forwardAssist = forwardTotalAssist.reduce((acc, cur) => acc + cur, 0);
  let forwardMatch = forwardTotalMatch.reduce((acc, cur) => acc + cur, 0);
  let forwardPercent = ((forwardGoal + forwardAssist) / forwardMatch).toFixed(2);
  
  let midfielderGoal = midfielderTotalGoal.reduce((acc, cur) => acc + cur, 0);
  let midfielderAssist = midfielderTotalAssist.reduce((acc, cur) => acc + cur, 0);
  let midfielderMatch = midfielderTotalMatch.reduce((acc, cur) => acc + cur, 0);
  let midfielderPercent = ((midfielderGoal + midfielderAssist) / midfielderMatch).toFixed(2);
  
  let defenderGoal = defenderTotalGoal.reduce((acc, cur) => acc + cur, 0);
  let defenderAssist = defenderTotalAssist.reduce((acc, cur) => acc + cur, 0);
  let defenderMatch = defenderTotalMatch.reduce((acc, cur) => acc + cur, 0);
  let defenderPercent = ((defenderGoal + defenderAssist) / defenderMatch).toFixed(2);
  
  let goalkeeperGoal = goalkeeperTotalGoal.reduce((acc, cur) => acc + cur, 0);
  let goalkeeperAssist = goalkeeperTotalAssist.reduce((acc, cur) => acc + cur, 0);
  let goalkeeperMatch = goalkeeperTotalMatch.reduce((acc, cur) => acc + cur, 0);
  let goalkeeperPercent = ((goalkeeperGoal + goalkeeperAssist) / goalkeeperMatch).toFixed(2);
  
  console.log("BÁO CÁO HIỆU SUẤT THEO VỊ TRÍ");
  
  console.log("Forward:");
  console.log(`- Số cầu thủ: ${forwards}`);
  console.log(`- Tổng bàn thắng: ${forwardGoal}`);
  console.log(`- Tổng kiến tạo: ${forwardAssist}`);
  console.log(`- Tổng số trận: ${forwardMatch}`);
  console.log(`- Trung bình hiệu suất/trận: ${forwardPercent}`);
  console.log();
  
  console.log("Midfielder:");
  console.log(`- Số cầu thủ: ${midfielders}`);
  console.log(`- Tổng bàn thắng: ${midfielderGoal}`);
  console.log(`- Tổng kiến tạo: ${midfielderAssist}`);
  console.log(`- Tổng số trận: ${midfielderMatch}`);
  console.log(`- Trung bình hiệu suất/trận: ${midfielderPercent}`);
  console.log();
  
  console.log("Defender:");
  console.log(`- Số cầu thủ: ${defenders}`);
  console.log(`- Tổng bàn thắng: ${defenderGoal}`);
  console.log(`- Tổng kiến tạo: ${defenderAssist}`);
  console.log(`- Tổng số trận: ${defenderMatch}`);
  console.log(`- Trung bình hiệu suất/trận: ${defenderPercent}`);
  console.log();
  
  console.log("Goalkeeper:");
  console.log(`- Số cầu thủ: ${goalkeepers}`);
  console.log(`- Tổng bàn thắng: ${goalkeeperGoal}`);
  console.log(`- Tổng kiến tạo: ${goalkeeperAssist}`);
  console.log(`- Tổng số trận: ${goalkeeperMatch}`);
  console.log(`- Trung bình hiệu suất/trận: ${goalkeeperPercent}`);
}
