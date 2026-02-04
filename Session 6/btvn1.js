let arr = [5, 12, 8, 15, 3, 20, 7, 11, 9, 18];

let count = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 10) {
        count++;
    }
}


console.log("Mảng:", arr);
console.log("Có " + count + " số >= 10");