const players = [
  { name: "Messi", years: 18, salary: 100 },
  { name: "Ronaldo", years: 20, salary: 95 },
  { name: "Neymar", years: 12, salary: 90 },
  { name: "Mbappe", years: 7, salary: 85 },
  { name: "Haaland", years: 5, salary: 80 },
  { name: "Modric", years: 22, salary: 70 },
  { name: "Benzema", years: 19, salary: 75 }
];
function search(minYear,player){
    let found=player.filter(s=>s.years>=minYear);
    let total=0;
    let max=found[0];
    let min=found[0];
    for(let emp of found){
        total+= emp.salary;
        if(emp.salary<min.salary){min=emp}
        if(emp.salary>max.salary){max=emp}
    }
    
    let result={
        totalSalary: total,
        highestPaid: { name: max.name, salary: max.salary },
        lowestPaid: { name: min.name, salary: min.salary },
    };
    console.log(result);
    return result;
};
let min=+prompt("Nhập số năm tối thiểu");
search(min,players);
