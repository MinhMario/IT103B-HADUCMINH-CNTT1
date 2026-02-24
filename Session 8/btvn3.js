const players = [
  "Messi - Forward",
  "Ronaldo - Forward",
  "Neymar - Forward",
  "De Bruyne - Midfielder",
  "Kante - Midfielder",
  "Van Dijk - Defender",
  "Alisson - Goalkeeper"
];
function filterPlayersByPosition(find , players){
    const result=[]
    for(let i=0;i<players.length;i++){
        let part=players[i].split("-");
        let position=part[1].trim();
        if(find == position){
            result.push(players[i]);
        }
    }
    return result;
}
filterPlayersByPosition("Forward",players);