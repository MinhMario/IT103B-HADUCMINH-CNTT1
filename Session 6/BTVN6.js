let arr = [0, 1, false, 2, '', 3, null, 'hello', undefined, NaN, 4, true];
let newArr=[];
for(let i=0;i<arr.length;i++){
    if(arr[i]){
        newArr.push(arr[i])
    }
}
console.log("Mang sau khi loai bo falsy:",newArr)