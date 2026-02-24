const players = [
  "Messi - Forward - 25",
  "Ronaldo - Forward - 30",
  "Neymar - Forward - 18",
  "De Bruyne - Midfielder - 8",
  "Kante - Midfielder - 2",
  "Van Dijk - Defender - 5",
  "Alisson - Goalkeeper - 0",
];
function getReversedNames(players){
    let result = [];
    for(let i = players.length - 1; i >= 0; i--){  
        let part = players[i].split(" - ");
        let name = part[0];
        result.push(name);
    }
    return result;
}
console.log(getReversedNames(players));