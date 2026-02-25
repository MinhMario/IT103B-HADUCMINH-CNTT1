function checkCSC(numbers){
    for(let i=0;i<numbers.length;i++){
        if(numbers[0]!=numbers[i+1]-numbers[i]){
            console.log("Không phải cấp số cộng")
        }else{
            console.log("Là cấp số cộng");
        }
    }
}