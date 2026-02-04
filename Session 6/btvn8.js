
let n = +prompt("Nhập số phần tử của mảng:");
let arr = [];
for (let i = 0; i < n; i++) {
    arr[i] = +prompt("Nhập phần tử thứ " + (i + 1) + ":");
}
console.log("Mảng:", arr);
let laFibonacci = true;

if (n >= 3) {
    for (let i = 2; i < n; i++) {
        if (arr[i] != arr[i-1] + arr[i-2]) {
            laFibonacci = false;
            break;
        }
    }
} else if (n < 2) {
    laFibonacci = false;
}
if (laFibonacci) {
    console.log("Đây LÀ dãy Fibonacci");
    alert("Đây LÀ dãy Fibonacci");
} else {
    console.log("Đây KHÔNG PHẢI dãy Fibonacci");
    alert("Đây KHÔNG PHẢI dãy Fibonacci");
}