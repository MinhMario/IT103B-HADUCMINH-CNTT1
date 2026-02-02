let total=0;
for(let i=0;i<=50;i++){
if(i%3==0){
    console.log("Fizz");
}if(i%5==0){
    console.log("Buzz")
}else if(i%3==0&&i%5==0){
    console.log("FizzBuzz")
}else{
    console.log(`${i}`)
}
}
for(let i=0;i<=50;i++){
    if(i%3==0&&i%5!=0){
          total+=i;
        console.log(`Tổng các số đã in ra chữ Fizz là ${total}`)
    }
}


