
let n = parseInt(prompt("Nhập số phần tử của mảng:"));

let arr = [];


for (let i = 0; i < n; i++) {
    let num = parseInt(prompt("Nhập phần tử thứ " + (i + 1) + ":"));
    arr.push(num);
}


let count = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
        count++;
    }
}


console.log("Mảng:", arr);
console.log("Số lượng số nguyên âm:", count);
alert("Mảng có " + count + " số nguyên âm");