function printLeft(numbers){
    for(let i=0;i<numbers.length-1;i++){
        if(numbers[i]+1!=numbers[i+1]){
            console.log(`${numbers[i]+1}`);
        }
    }
}
let numbers=[1,2,4,5];
printLeft(numbers);