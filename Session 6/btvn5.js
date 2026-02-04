let arr=[];
let count=0;
let n=+prompt("Nhap so luong trong mang");
for(let i=0;i<n;i++){
    arr[i]=prompt("Nhap ky tu trong mang");
}
for(let i=0;i<n;i++){
    if(arr[i]>="0"&&arr[i]<="9"){
        count++;
    }
    
}
if(count==0){
    console.log("Không có ký tự số")
}