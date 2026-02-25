let numbers = [];

let choice = 1;

function tinhTrungBinh(arr) {
    let tong = 0;
    for(let i = 0; i < arr.length; i++){
        tong += arr[i];
    }
    let trungBinh = tong / arr.length;
    console.log("Trung bình các số = " + trungBinh);
}

function timSoChanLonNhat(arr) {
    let maxChan = null;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            if(maxChan === null || arr[i] > maxChan){
                maxChan = arr[i];
            }
        }
    }
    if(maxChan !== null){
        console.log("Số chẵn lớn nhất = " + maxChan);
    } else {
        console.log("Không có số chẵn trong danh sách!");
    }
}

function timSoLeNhoNhat(arr) {
    let minLe = null;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 !== 0){
            if(minLe === null || arr[i] < minLe){
                minLe = arr[i];
            }
        }
    }
    if(minLe !== null){
        console.log("Số lẻ nhỏ nhất = " + minLe);
    } else {
        console.log("Không có số lẻ trong danh sách!");
    }
}

switch(choice){
    case 1:
        console.log("1. Nhập danh sách số nguyên");
        numbers.push(5);
        numbers.push(12);
        numbers.push(8);
        numbers.push(3);
        numbers.push(17);
        numbers.push(6);
        console.log("Danh sách số đã nhập: " + numbers);
        break;
        
    case 2:
        console.log("2. Tính trung bình các số");
        console.log("Danh sách số: " + numbers);
        if(numbers.length > 0){
            tinhTrungBinh(numbers);
        } else {
            console.log("Danh sách rỗng! Vui lòng nhập số trước.");
        }
        break;
        
    case 3:
        console.log("3. Tìm số chẵn lớn nhất");
        console.log("Danh sách số: " + numbers);
        if(numbers.length > 0){
            timSoChanLonNhat(numbers);
        } else {
            console.log("Danh sách rỗng! Vui lòng nhập số trước.");
        }
        break;
        
    case 4:
        console.log("4. Tìm số lẻ nhỏ nhất");
        console.log("Danh sách số: " + numbers);
        if(numbers.length > 0){
            timSoLeNhoNhat(numbers);
        } else {
            console.log("Danh sách rỗng! Vui lòng nhập số trước.");
        }
        break;
        
    case 5:
        console.log("5. Thoát");
        console.log("Cảm ơn bạn đã sử dụng chương trình!");
        break;
        
    default:
        console.log("Lựa chọn không hợp lệ!");
        break;
}

console.log("\n=== MENU XỬ LÝ SỐ NGUYÊN ===");
console.log("1. Nhập danh sách số nguyên.");
console.log("2. Tính trung bình các số.");
console.log("3. Tìm số chẵn lớn nhất.");
console.log("4. Tìm số lẻ nhỏ nhất.");
console.log("5. Thoát.");
console.log("==============================");