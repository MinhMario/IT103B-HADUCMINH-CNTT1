let arr=[];
let n=+prompt("Nhap so luong trong mang");
for(let i=0;i<n;i++){
    arr[i]=prompt("Nhap ky tu trong mang");
}
let max1=arr[0];
let max2=arr[0];
for(let i=0;i<n;i++){
    if(arr[i]>max1){
        max1=arr[i]
    }
    }
for(let i=0;i<n;i++){
    if(arr[i]>max2 && arr[i]<max1){
        max2=arr[i];
    }
}
console.log(`Phan tu lon thu hai trong mang la ${max2}`)
