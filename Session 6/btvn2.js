
let arr = [5, 12, 8, 15, 3, 20, 7, 11, 9, 18];


let max = arr[0];
let viTri = 0;

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
        viTri = i;
    }
}


console.log("Mảng:", arr);
console.log("Phần tử lớn nhất:", max);
console.log("Vị trí:", viTri);