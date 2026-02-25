let numbers = [];
for(let i=0;i<numbers.length;i++){
    numbers[i]=+prompt("Nhập phần tử trong mảng");
}
let groups = [];
for(let i = 0; i < numbers.length; i += 3){
    groups.push(numbers.slice(i, i + 3));
}
console.log(groups);