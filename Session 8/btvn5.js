const players = [
  "Messi - Forward - 25 - 15",
  "Ronaldo - Forward - 30 - 10",
  "Neymar - Forward - 18 - 20",
  "De Bruyne - Midfielder - 8 - 25",
  "Kante - Midfielder - 2 - 5",
  "Van Dijk - Defender - 5 - 3",
  "Alisson - Goalkeeper - 0 - 1",
];
function reportTopPerformance(min,players){
    const total=[];
    for(let i=0;i<players.length;i++){
        let part=players[i].split(" - ");
        let goal=parseInt(part[2]);
        let assist=parseInt(part[3])
        let perform=goal+assist;
        let name=part[0]; 
        if(perform>=min){
            total.push(perform);
            console.log(`${name}: ${total[i]}`)   
        }
    }
    let result=total.reduce(function(acc,cur){
       return acc+cur;
    },0)
    console.log(`Tổng hiệu suất :${result}`);
    return result;
}
reportTopPerformance(30,players);



