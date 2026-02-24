const players = [
  "Messi - Forward",
  "Ronaldo - Forward",
  "Neymar - Forward",
  "De Bruyne - Midfielder",
  "Kante - Midfielder",
  "Van Dijk - Defender",
  "Alisson - Goalkeeper"
];

function getUpperNames(players) {
  return players.map(b => b.toUpperCase());
}

const upper = getUpperNames(players);
console.log(upper);