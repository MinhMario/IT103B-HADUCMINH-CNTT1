const teamHistory = [
  {
    name: "Messi",
    position: "Forward",
    nationality: "Argentina",
    seasons: {
      "2022-2023": { matches: 34, goals: 21, assists: 14, yellowCards: 3 },
      "2023-2024": { matches: 32, goals: 25, assists: 15, yellowCards: 2 },
      "2024-2025": { matches: 28, goals: 18, assists: 12, yellowCards: 1 }
    }
  },
  {
    name: "Ronaldo",
    position: "Forward",
    nationality: "Portugal",
    seasons: {
      "2022-2023": { matches: 38, goals: 28, assists: 8, yellowCards: 5 },
      "2023-2024": { matches: 35, goals: 30, assists: 10, yellowCards: 4 },
      "2024-2025": { matches: 30, goals: 22, assists: 9, yellowCards: 3 }
    }
  }
];
function generatePlayerSeasonReport(playerName, teamHistory){
    let found=teamHistory.find(s=>s.name===playerName);
    if(found===undefined){
        console.log(`Không tìm thấy`);
        return;
    }
    let totalMatches=Object.values(found.seasons).reduce(function(acc,cur){
        return acc+cur.matches;
    },0)
    let totalGoals=Object.values(found.seasons).reduce(function (acc,cur){
        return acc+cur.goals; 
        
    },0)
    let keyGoal=-1;
    let bestSeason="";
     for(let season in found.seasons){
        if(found.seasons[season].goals>keyGoal){
            keyGoal=found.seasons[season].goals;
            bestSeason=season
        }
    }
    let result={
  name: `${found.name}`,
  position: `${found.position}`,
  nationality: `${found.nationality}`,
  careerStats: {
    totalMatches:totalMatches,
    totalGoals: totalGoals,
    bestSeason: {
      season: bestSeason,
      goals: keyGoal,
    }
  }
}
console.log(result);
return result;
}
let namePlayer=prompt("Nhập tên cầu thủ");
generatePlayerSeasonReport(namePlayer,teamHistory);

