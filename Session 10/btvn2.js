const player={
    name: "De Bruyne",

  position: "Midfielder",

  goals: 8,

  assists: 25,

  matchesPlayed: 35,
}
function addPerformanceScore(players){
    let troll=(players.goals+players.assists)/players.matchesPlayed;
    let fix=troll.toFixed(2);
    console.log(`${fix}`);
}
addPerformanceScore(player);