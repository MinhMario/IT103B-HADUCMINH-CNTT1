const players = [
  { name: "Messi", position: "Forward", age: 36, goals: 25, assists: 15, matches: 34, yellowCards: 2 },
  { name: "Ronaldo", position: "Forward", age: 39, goals: 30, assists: 10, matches: 38, yellowCards: 4 },
  { name: "Neymar", position: "Forward", age: 32, goals: 18, assists: 20, matches: 32, yellowCards: 3 },
  { name: "De Bruyne", position: "Midfielder", age: 33, goals: 8, assists: 25, matches: 35, yellowCards: 1 },
  { name: "Kante", position: "Midfielder", age: 33, goals: 2, assists: 5, matches: 36, yellowCards: 0 },
  { name: "Van Dijk", position: "Defender", age: 33, goals: 5, assists: 3, matches: 33, yellowCards: 2 },
  { name: "Alisson", position: "Goalkeeper", age: 31, goals: 0, assists: 1, matches: 37, yellowCards: 0 }
];
function generateRankingReport(minMatches, players){
    let found=players.filter(b=>b.matches>=minMatches);
    const newPlayer=found.map(player=>{
        const performanceScore = parseFloat(
    ((player.goals + player.assists) / player.matches).toFixed(2)
    );
    const efficiencyScore = parseFloat(
    (performanceScore - (player.yellowCards / player.matches) * 10).toFixed(2)
  );
  return {
    ...player,
     performanceScore,efficiencyScore
  }
    })
    let sort=newPlayer.sort((a,b)=>{
        if(b.efficiencyScore !== a.efficiencyScore){
       return b.efficiencyScore-a.efficiencyScore
        }
        if (b.performanceScore !== a.performanceScore) {
            return b.performanceScore - a.performanceScore;
        }
          if (b.goals !== a.goals) {
            return b.goals - a.goals;
        }
        return 0;
})
for(let i=0;i<sort.length;i++){
    console.log(`${i+1}-Name:${sort[i].name}-Efficiency:${sort[i].efficiencyScore}-Performance:${sort[i].performanceScore}-Goals:${sort[i].goals}`);
}
return sort;
}
generateRankingReport(30,players);