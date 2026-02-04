let arr=[];
let n=+prompt("Nhap so luong trong mang");
for(let i=0;i<n;i++){
    arr[i]=prompt("Nhap ky tu trong mang");
}
for(let i=0;i<n;i++){
    if(arr[i]>="0"&&arr[i]<="9"){
        console.log(arr[i]);
    }
}