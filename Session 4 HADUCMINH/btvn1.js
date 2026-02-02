let n=+prompt("Nhập một số nguyên");
if(n%2==0){
    console.log(`${n} là số chẵn`)
}else{
    console.log(`${n} là số lẻ`)
}
if(n>0){
    console.log(`${n} là số nguyên dương`)
}else if(n==0){
    console.log(`${n} bằng 0`)
}else if(n<0){
    console.log(`${n} là số âm`)
}
if(n>0){
    for(let i=0;i<=n;i++){
        console.log(`${i}`)
    }
}else if(n<=0){
    console.log(` Giá trị ${n} không phù hợp để tạo dãy số`)
}
